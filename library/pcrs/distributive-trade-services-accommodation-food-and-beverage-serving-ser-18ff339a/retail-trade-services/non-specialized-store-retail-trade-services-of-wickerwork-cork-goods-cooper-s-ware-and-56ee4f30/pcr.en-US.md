---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-wickerwork-cork-goods-cooper-s-ware-and-56ee4f30
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ambient store retail of complete SNIDAD lacquered-rattan baskets with customer takeaway

## 1. Scope and Applicability

This PCR defines the incremental receiving, ambient floor display, manual sale and customer-takeaway service in a non-specialized store for one homogeneous original IKEA SNIDAD 303.949.44 basket configuration, nominal diameter 54cm and height 39cm. It is a narrower subset of CPC 3.0:62146, whose explanatory note points to group319 wood/cork/plaiting/straw articles. Household furniture, cooperage, cork articles, basket sets, other sizes, other materials, retailer delivery, wet processing, repainting, repairs, powered demonstrations and retailer-added wrapping are excluded. Do not average these routes into this reference. A basket is one complete object including binding and feet, never one kilogram of rattan or one set. Applicability additionally requires the verified naturally ventilated, unconditioned whole-store/shared-support route specified by support_operation; combustion, refrigeration/heat pumps, purchased heat/cold or unknown status make this route inapplicable.

This is a partial incremental method with fixed completion duties; omitted store support, goods production and travel impacts cannot be implied zero.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-wickerwork-cork-goods-cooper-s-ware-and-56ee4f30 |
| classification_refs | CPC 3.0:62146; proposed narrower relationship only, not an accepted mapping |
| covered_products | Complete single SNIDAD 303.949.44 baskets physically confirmed as the lacquered-rattan material route |
| excluded_products | Furniture; bamboo substitution; lining additions; sets; modified baskets; retailer delivery; manufacturing |
| representative_product | SNIDAD 303.949.44; nominal 54cm diameter39cm height; actual lot/BOM governs |
| production_route | Manual receiving, ambient display, customer takeaway; no added wrapping or product treatment |
| market_state | Finished coated basket, complete with binding and feet; actual moisture and packaging state recorded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the specified basket retail service from store receiving gate to customer physical handover and final-valid acceptance |
| How much | One distinct original basket ID with final-valid acceptance; Q counts such IDs once |
| How well | Correct actual SKU/configuration, intact usable basket and matching receipt; final acceptance conditions declared prospectively |
| How long or cycle | A prospectively fixed store/configuration accounting pool with stated return observation cutoff; revise original pool for late events |
| reference_flow_link | retail_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ambient store retail of complete SNIDAD lacquered-rattan baskets with customer takeaway |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | store/channel; pool/version and dates; original basket ID and receipt lot; supplier complete BOM/material verification resolving bamboo/rattan conflict; botanical identity and moisture method; lacquer and binding/feet/liner specification; actual original packaging BOM; net basket mass distinct from package mass; final acceptance rule/cutoff; custody/state/fate ledger; S/F/O/T background ownership; missing-support register and completion status; verified whole-site/landlord no-combustion/no-refrigeration/no-purchased-heat-cold natural-ventilation evidence |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_unit | retail_service | Number of items | Item(s) | Use official Item(s) consistently. One final-valid original-basket retail service item per reference flow; Q counts final-valid distinct original IDs, never gross physical handovers, mass or sets. |
| carrier_mass | whole_basket_waste; carton_waste; film_waste | Mass | kg | Direct net weighing per actual carrier; mass and counts remain independent, with no catalog package-weight or assumed-moisture conversion. |
| selected_energy_identity | retail_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | The selected AC identity has one reference energy property. Keep actual attributed quantities in the row unit;1kWh=3.6MJ in its unit group. Convert once before combining with a source expressed in another energy unit or supplying the reference-MJ exchange; never convert the same numerator twice or infer a supplier mix. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished materially verified complete basket and actual original packaging enter custody at store receiving gate. |
| starting_condition_role | Incremental-service gate; supplier production and inbound transport retain independent background responsibility. |
| product_classification_scope | Narrow lacquered-rattan basket subset of CPC 3.0:62146; excludes household furniture. |
| recursive_input_rule | Do not insert another same-category retail service recursively into the core; actual outsourced support needs bounded deduplication. Only the three custody satellite outputs basket_handover, basket_supplier_return and basket_external_retention must not relink manufacturing. basket_receipt carries B_F once through each F original supplier source under background_ownership; do not separately add B_F again. |
| upstream_dataset_requirement | Obtain complete B_j and receiving-gate boundary per original; support provider needs original LCI/denominator; unknown remains unresolved. |
| disclosure | Disclose partial core boundary, original Q, S/F/O/T, source lineage, material conflict and fixed support gaps with result. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| material_gate | custody | The manufacturer material table specifies rattan with clear lacquer for basket/binding and polyethylene with galvanized steel for feet, but bamboo appears in same-source descriptive/image wording. This conflict is not resolved by the catalog. At receiving obtain lot-linked supplier BOM and physical material identification; retain botanical species/provenance or explicitly unresolved identity, lacquer formulation/dry coating mass, complete binding/feet and any liner/adhesive/label, wet/dry basis and moisture test conditions. Confirm the actual route before use; unknown material/composition blocks complete modelling. Do not treat bamboo and rattan as environmentally equivalent. The package weight 0.96kg is not measured net basket mass or a composition fraction. | ikea-snidad |
| partial_boundary | retail; residual | The assessed core includes only attributable point-of-use electricity and actual whole-basket/original-carton/PE-film waste handoff plus service-attributable original-goods failure background. basket_receipt is the characterized responsibility input for F original receiving-gate goods background. basket_handover, basket_supplier_return and basket_external_retention are mandatory physical satellite outputs excluded from characterized environmental summation and upstream linking. This is a partial incremental module: whole-store occupancy/building, lighting fixtures, checkout equipment/software, cleaning, heating/cooling/ventilation, staff travel and customer travel remain outside this core; required support completion is fixed by complete_support and asset_lifetime. A core result must retain these gaps and cannot be called complete retail service. Supplier production and inbound transport to the same receiving gate for finally accepted goods attach downstream through B_S/Q, never through the F responsibility input or satellite outputs. |  |
| route_gate | retail | Use observed manual floor-display and customer-takeaway records. Retailer-added bags, receipts on paper, tape, treatment chemicals, cleaning of baskets, electric handling equipment, repairs, stripping, replacement feet or other actual added exchanges require specifically named atomic cards, linked protocols and aligned bilingual projection before completeness. They do not become zero by this route definition. Absence must be evidenced by site inspection, purchasing/stock records and staff confirmation for the entire pool; unknown presence blocks route applicability or remains a disclosed partial gap. Consumer dry-cloth care and possible recycling/energy recovery are not evidence of retailer cleaning, actual treatment or an avoided-burden credit. | ikea-snidad |
| custody_state | custody; residual | Use a goods-only count balance with disjoint supplier_received and physical_customer_returns, initially accepted gross_customer_handovers (including later revocations) and initially nonaccepted external exits: G_close=G_open+supplier_received+physical_customer_returns-gross_customer_handovers-supplier_handoffs-external_nonaccepted_handoffs-condemned-internal_asset_transfers-lost. Condemnation moves one original from goods into held waste; held_waste_close=held_waste_open+condemned-waste_dispatch in original-ID equivalents. Dispatch removes held waste only and is never subtracted again from goods. Record mass separately; moisture/storage changes do not change object count. Lost/stolen IDs are separate goods exits with investigation and responsibility, not fictitious dispatched waste. Actual waste consignment kg is measured directly, not corrected again using generation/stock balance. Each physical event ID belongs to exactly one inflow or outflow category. A later-revoked handover stays only in original gross_customer_handovers; external_nonaccepted_handoffs counts additional actual exits never already recorded in gross. supplier_received excludes rereceipts already recorded as physical_customer_returns. |  |
| background_ownership | custody | For each original j preserve the entire receiving-gate upstream inventory vector B_j including basket materials/coating/feet, actual original packaging and manufacturing plus transport to that gate. Allocate each whole original once to mutually exclusive final ownership S(final-valid accepted), F(service-attributable failure/loss including retailer-responsible external retention), O(open stock/held waste pending responsibility) or T(named supplier/internal asset/other continuing responsibility). Responsibility is not a physical movement. Supplier return retains original source/version and named owner; no automatic disappearance or credit. Accepted and resold originals carry one B_j, never another manufacturing charge. Partial-component separation needs verified supplier component inventory vectors and exact source-boundary conservation, never mass fractions of B_j. Record T to permanent display assets under the same original source and lifetime ledger without charging F and a new acquisition. |  |
| state_carriers | residual | Whole condemned-basket waste includes actual lacquer, binding and feet physically present; do not also output constituent rattan/steel/polyethylene. Retain original-ID and gross/tare/net weighing plus recipient treatment contract accepting this complete coated mixed-material carrier. An opened/damaged basket sent to a supplier is not described by an intact basket transfer: author a state-specific card before complete reporting. Externally retained nonaccepted baskets require actual recipient, condition, acceptance revocation and background owner; they are not automatically retailer waste. Original carton and film cards include only verified disjoint consignment portions. Unknown package BOM, another carrier, absent recipient coverage or unknown treatment blocks completeness. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| custody | Original basket custody and responsibility | required | All originals/events; F responsibility input and physical satellite outputs | F product background input and independent uncharacterized custody outputs | Q |
| retail | Manual ambient retail | required | Verified specified route | Incremental service core | Q |
| residual | Actual original-carrier waste handoff | conditional | Actual consignments present; no dispatch retains stock; unknown blocks | Terminal carrier with recipient transport/treatment scope | Q |
| support_completion | Fixed support completion | excluded_by_default | Outside partial core; completion mandatory before full-service claim | Whole-store support/lifetime modules | Q |

### Process: Original basket custody (`custody`)

#### Inputs

##### Product flows

###### Complete SNIDAD 303.949.44 basket in actual original receiving packaging assigned to service failure (`basket_receipt`)

N_F/Q Item(s), where N_F counts each distinct original assigned F once, linked to its actual original receiving-gate basket-plus-packaging B_j inventory. This is a characterized product responsibility input carrying B_F/Q once, not all physical receipts, not new manufacture upon return and not a mass share. Preserve physical supplier receipts and customer re-receipts only in the separate cp_custody ledger. Actual original pack BOM, original supplier source and transport-to-gate boundary are mandatory; no assumed packaging. No separate addition of B_F may duplicate this input.

- Selected flow: Complete SNIDAD 303.949.44 basket in actual original receiving packaging assigned to service failure
- Flow property / unit: Number of items / Item(s)
- Amount rule: N_F/Q Item(s), where N_F counts each distinct original assigned F once, linked to its actual original receiving-gate basket-plus-packaging B_j inventory. This is a characterized product responsibility input carrying B_F/Q once, not all physical receipts, not new manufacture upon return and not a mass share. Preserve physical supplier receipts and customer re-receipts only in the separate cp_custody ledger. Actual original pack BOM, original supplier source and transport-to-gate boundary are mandatory; no assumed packaging. No separate addition of B_F may duplicate this input.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources: ikea-snidad

#### Outputs

##### Product flows

###### Complete SNIDAD 303.949.44 basket physically handed to customer (`basket_handover`)

Gross actual initially accepted complete-basket physical handover events / Q; custody satellite only. Includes later revoked physical handovers; never replace this numerator with final-valid Q. Physical returns are separate ledger entries, not negative new manufacture.

- Selected flow: Complete SNIDAD 303.949.44 basket physically handed to customer
- Flow property / unit: Number of items / Item(s)
- Amount rule: Gross actual initially accepted complete-basket physical handover events / Q; custody satellite only. Includes later revoked physical handovers; never replace this numerator with final-valid Q. Physical returns are separate ledger entries, not negative new manufacture.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

###### Intact complete SNIDAD 303.949.44 basket returned to supplier custody (`basket_supplier_return`)

Actual intact complete-basket supplier physical handoffs / Q; conditional on documented handoff. Custody satellite only, with recipient/name/state and continuing B_j owner. Damaged/open-component returns require a separate state-specific card, not this intact exchange.

- Selected flow: Intact complete SNIDAD 303.949.44 basket returned to supplier custody
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual intact complete-basket supplier physical handoffs / Q; conditional on documented handoff. Custody satellite only, with recipient/name/state and continuing B_j owner. Damaged/open-component returns require a separate state-specific card, not this intact exchange.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

###### Complete nonaccepted SNIDAD 303.949.44 basket retained externally (`basket_external_retention`)

Actual initially nonaccepted whole-basket external physical exits / Q, conditional on observed event and disjoint from basket_handover. State includes intact/damaged lacquered basket with all original components still present; record actual damage and recipient. Custody satellite only; no service output or automatic waste label. A later acceptance revocation without new movement updates its original handover state only and is not another exit in this card. Assign B_j to F/O/T by evidenced responsibility. Missing components require new specific cards.

- Selected flow: Complete nonaccepted SNIDAD 303.949.44 basket retained externally
- Flow property / unit: Number of items / Item(s)
- Amount rule: Actual initially nonaccepted whole-basket external physical exits / Q, conditional on observed event and disjoint from basket_handover. State includes intact/damaged lacquered basket with all original components still present; record actual damage and recipient. Custody satellite only; no service output or automatic waste label. A later acceptance revocation without new movement updates its original handover state only and is not another exit in this card. Assign B_j to F/O/T by evidenced responsibility. Missing components require new specific cards.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_custody`
- Sources:

### Process: Manual ambient retail (`retail`)

#### Inputs

##### Product flows

###### Alternating current at retail point of use (`retail_electricity`)

Measured disjoint attributable electricity kWh / Q under pool_allocation; raw totals include actual idle/failure periods, with signed corrections to original pool versions. Do not count supplier-included support electricity again.

The selected flow uses the single Net calorific value energy property. The inventory keeps its stated measured energy unit; Units of energy supports1kWh=3.6MJ. Apply this conversion once when expressing a kWh record in reference MJ, including compatible-source aggregation; retain the original kWh meter numerator and source attribution, without adding another electricity demand.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Measured disjoint attributable electricity kWh / Q under pool_allocation; raw totals include actual idle/failure periods, with signed corrections to original pool versions. Do not count supplier-included support electricity again.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy`
- Sources: ghg-product-allocation

#### Outputs

##### Product flows

###### Ambient store retail of complete SNIDAD lacquered-rattan baskets with customer takeaway (`retail_service`)

1 item per reference flow; Q/Q for Q>0, using final_service and cp_acceptance. This is one accepted-original service, not the merchandise manufacturing flow.

- Selected flow: Ambient store retail of complete SNIDAD lacquered-rattan baskets with customer takeaway
- Flow property / unit: Number of items / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_acceptance`
- Sources:

### Process: Actual waste handoff (`residual`)

#### Inputs

#### Outputs

##### Waste flows

###### Whole condemned lacquered SNIDAD basket with binding and feet (`whole_basket_waste`)

Actual directly weighed net whole-basket waste consignment kg / Q; conditional on actual dispatch to named accepting provider. Include physically present coating/binding/feet once. Hold-undispatched waste is not dispatch. Use state_carriers and cp_waste; environmental treatment/collection source covers this complete carrier once.

- Selected flow: Whole condemned lacquered SNIDAD basket with binding and feet
- Flow property / unit: Mass / kg
- Amount rule: Actual directly weighed net whole-basket waste consignment kg / Q; conditional on actual dispatch to named accepting provider. Include physically present coating/binding/feet once. Hold-undispatched waste is not dispatch. Use state_carriers and cp_waste; environmental treatment/collection source covers this complete carrier once.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Original corrugated-paperboard carton waste (`carton_waste`)

Actual directly weighed net original corrugated-carton waste kg / Q, only if original pack BOM and actual segregated consignment confirm it. Exclude attached material routed with whole-basket waste and other separately routed portions. Record retained/customer-transferred packaging and original source responsibility separately; no assumed carton.

- Selected flow: Original corrugated-paperboard carton waste
- Flow property / unit: Mass / kg
- Amount rule: Actual directly weighed net original corrugated-carton waste kg / Q, only if original pack BOM and actual segregated consignment confirm it. Exclude attached material routed with whole-basket waste and other separately routed portions. Record retained/customer-transferred packaging and original source responsibility separately; no assumed carton.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

###### Original polyethylene packaging film waste (`film_waste`)

Actual directly weighed net original polyethylene-film waste kg / Q, only if actual material identification and segregated consignment confirm it. No generic plastic substitution. Deduplicate film attached to another dispatched carrier; unknown film composition requires a new identified card before completeness.

- Selected flow: Original polyethylene packaging film waste
- Flow property / unit: Mass / kg
- Amount rule: Actual directly weighed net original polyethylene-film waste kg / Q, only if actual material identification and segregated consignment confirm it. No generic plastic substitution. Deduplicate film attached to another dispatched carrier; unknown film composition requires a new identified card before completeness.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| final_service | retail_service | Q is the cardinality of distinct original IDs whose last valid acceptance remains in force at the cutoff. A physical return followed by resale can contribute at most one final-valid ID. Revocation removes validity even without physical return; do not subtract revocations again from this already final-valid set. Refund/discount alone with acceptance still valid does not remove output. Keep gross custody, event counts, rejected attempts and returns separate. Retain repeated work, failed and zero-sale periods in the prospectively fixed same-configuration pool. If Q=0 retain raw totals as unnormalizable; do not discard or transfer selectively to successful periods. Late returns replace original pool numerator, Q and B ownership/fates with dated version corrections, never a second charge in the receiving pool. |  |
| pool_allocation | retail_electricity | First use a dedicated meter for actual handling/display/checkout electricity within the declared core; if a parent meter includes that circuit, subtract it once when preparing disjoint support. Never subtract it from an already disjoint meter. For unavoidable shared electricity split measured active, idle and fixed source-numerator pools and reconcile their kWh to parent. Allocate active pool by measured powered transaction seconds among all beneficiaries; idle/fixed pool by measured reserved floor area*time among all beneficiaries including closed/failed periods. Each pool has one same-unit driver and positive known total. Do not add seconds to m2*h, use sales revenue or let zero driver hide idle energy. Sum compatible attributed kWh only after allocation; divide by Q once. If the causal driver or pool split is unknown, retain unallocated measured kWh and block complete service result. | ghg-product-allocation |
| asset_lifetime | support_completion | For each complete actual store shell/fitout, fixed lighting, display support and checkout asset a obtain model/BOM or verified complete provider lifecycle package, acquisition/source IDs, installation, all previous beneficiary exposures and replacement versions. With one declared causal unit per asset, f_ab=e_ab/L_a where e_ab is current beneficiary exposure and L_a expected total lifetime exposure including all past/current/future beneficiaries. Area*time may govern shell/fixtures, transaction seconds checkout; never sum unlike drivers. Allocate each manufacturing/installation inventory vector by f_ab; cumulative lifetime fractions<=1. At retirement replace every historical beneficiary fraction using actual total lifetime exposure and post residual/corrections; lifespan changes replace all prior versions, never restart full manufacture. Terminal whole-asset net carrier times the same final lifetime fraction once; direct whole-device net weighing and BOM reconstruction are exclusive. Actual replacements/maintenance use event-specific sources and all event beneficiaries; exclude manufacturer-included repair/EOL and provider-included utility scopes to prevent duplicate acquisitions, maintenance, operation and retirement. |  |
| complete_support | support_completion | Before a full-service claim, complete a fixed occupancy package covering actual building/fixtures/display/POS capital and lifetime retirement, shared lighting/checkout electricity excluded from the core meter, verified natural ventilation without combustion/refrigeration/purchased heat or cold, sanitary/cleaning operation and actual maintenance for the same site/pool. Obtain a signed provider LCI scope and original quantity basis or author each actual atomic exchange and protocol; an invoice alone is insufficient. Restore provider normalized row x by its evidenced original denominator D_x to raw same-pool numerator N_x=x*D_x, allocate using the disjoint meters/pool_allocation or asset_lifetime as applicable, then aggregate only identical flow identity/property/unit/boundary with exact source-ID/version deduplication and divide total raw numerators by final Q once. Do not add MJ to kg or normalized to raw. Core electricity and waste sources cannot be inside this package again. Unknown operation or provider coverage remains a named blocking gap, not zero. |  |
| support_operation | support_completion | This PCR permits only an evidenced naturally ventilated, unconditioned store route with no onsite combustion, no refrigeration/heat pump/refrigerant-containing operating equipment and no purchased heat or cold within the store support control boundary. Before applying this route inspect all site/shared landlord equipment, utility contracts/bills, purchase/maintenance registers and the complete pool dates; supplier/landlord attestations must cover shared support as well as the basket area. Unknown status or any such present equipment/energy makes this route inapplicable: author and independently review a specific expanded route with complete fuel/refrigerant initial charge, operation, recovery, contained transfers, room/control volume and external compartment methods before use. Do not merely mark an unknown equipment item zero. Actual electricity remains metered under pool_allocation. Natural ventilation is not evidence of zero product emission; internal room generation cannot be reported as an elementary external-air transfer. Any claimed goods-derived species emission/capture requires a separate reviewed measured inlet/outlet/air-stock/merchandise-stock/capture control-volume module and actual external medium, with terminal capture carrier deduplication; until supplied, no emission factor or negative credit is inferred and result stays explicitly partial. |  |
| cleaning_completion | support_completion | For the required site-cleaning support collect actual formulation identity/concentration and original supplied formulation kg, water meter boundary and density/state, container/cloth inventories and dated cleaning events. Final original-formulation mass destinations are mutually exclusive: unused closing stock, container-retained residue, wet-cloth-retained formulation, drained formulation and separately captured solid; used is an intermediate state replaced by these later fates, never another additive destination. Exclude added rinse water/dirt from formulation-origin kg. Whole effluent amount is exclusively direct gross-minus-tare net liquid weighing or metered actual whole-effluent volume*measured same-carrier density; do not reconstruct from water balance or subtract evaporation/reuse again. Supply meters already exclude internal reuse. Wet cloth, container-residue and drain consignments each use actual complete net carrier mass, with disjoint source portions; wet mass is not source formulation kg. Author actual identified formulation, water, cloth lifecycle and complete waste-carrier atomic cards/protocols before claiming support completeness; unknown identification or receiver acceptance blocks completion. |  |
| transport_completion | support_completion; residual; custody | For each actual transport source define trip/segment p, vehicle/provider, loaded distance km, actual complete consignment gross payload kg, travel h and stationary idle h, capacity kg, reserved capacity C_pb kg and reservation time t_pb h for every actual beneficiary b including operator/unused capacity responsibility. Loaded tonne-km=payload_kg*distance_km/1000 is activity QA, not a complete empty-trip measure. Preserve observed empty reposition and idle segments. If provider already attributes its exact consignment inventory, restore its original basis and retain allocation; segment records are QA and must not apply another share. Otherwise obtain complete disjoint raw segment inventory vector N_p, with explicit vehicle manufacture/installation/maintenance/end-of-life and operational electricity/fuel/upstream scopes; verify each stage covered once, excluding scopes already in B_j or waste provider package. Allocate each segment once by w_pb=C_pb*t_pb, share=w_pb/sum_b(w_pb), so all denominator terms have kg*h. Include actual travel and stationary-idle reservation time, even with zero payload/distance; reservations and beneficiaries must reconcile to contract/route capacity and duration. Unknown or zero total reservation while activity exists blocks completion, not an assignment of zero. Sum only compatible attributed exchange units, then divide common Q once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | custody | F-original product responsibility input and independent custody satellite | original foreground records | original_id; receipt_lot; supplier_model/BOM/material_test; botanical_identity/provenance; bamboo/rattan_conflict_resolution; moisture_value/method/wet_dry_basis; actual_lacquer/binding/feet/liner/label; original_pack_BOM; gross/tare/net_basket_kg; event_id/date/state/recipient; goods_open/supplier_received/physical_customer_returns/initially_accepted_handovers/supplier_handoffs/external_nonaccepted/condemned/internal_asset/lost/goods_close; held_waste_open/condemned/dispatch/close; B_j/source/version/receiving_gate; S/F/O/T_owner; component_inventory_vectors; N_F; F_original_ids; original_supplier_inventory_vector; original_pack_BOM; mutually_exclusive_event_category | Receive and barcode every original; inspect lot-linked material and complete BOM including lacquer/feet. Weigh on calibrated scale excluding separately recorded packaging; record moisture instrument, calibration, temperature/time and dry/wet basis. Reconcile dated movements with supplier/customer receipts and separate goods/held-waste states. Obtain original receiving-gate supplier inventory and inbound transport boundary; whole vector transfers only unless supplier verified components exist. Independently identify each F original and link its receiving-gate B_j once through basket_receipt N_F/Q responsibility input; physical rereceipt counts do not define this amount. Audit disjoint event categories; late revocation without movement only reclassifies the original gross handover final state. | Item(s); kg | each event and period close | all originals including failures and unsold stock | same site/configuration; source-parent history | per reference flow | lot BOM, photographs, material identification, scale/moisture calibration, inventory-source receipts and signed responsibility |
| cp_acceptance | retail | final-valid reference service | original foreground records | pool_id/version/start/end/cutoff; original_id; sale/physical_handover/return/revocation/resale/refund_event_id/date; final_valid_acceptance; rejected_attempt; source_pool_correction; Q | Join sales and dated acceptance/return records by original_id, inspect actual acceptance conditions, independently recompute last valid state; preserve event history and late correction versions. | Item(s) | each event; close and late-event revision | entire declared pool including zero output | same store and basket configuration | per reference flow | POS/acceptance receipts, dated return state, unique-ID audit |
| cp_energy | retail | point-of-use electricity | original foreground records | pool/version; meter_id/circuit_boundary/start/end/kWh/calibration; core_submeter_in_parent; active/idle/fixed_kWh; beneficiary_id; powered_seconds; reserved_m2; duration_h; corrections; Q | Read calibrated meters over full pool; document circuit diagram and overlapping parent/submeters. Verify active/idle/fixed kWh source split and complete all-beneficiary same-unit drivers. Preserve idle/closed/failure periods and dated corrections. | kWh; s; m2*h | interval readings and period reconciliation | all open/closed/zero-sale intervals | core circuit; all actual shared beneficiaries | per reference flow | meter calibration, circuit diagram, interval logs and allocation reconciliation |
| cp_waste | residual | actual dispatch of complete basket and disjoint original packaging | original foreground records | consignment/date/recipient/provider_contract/treatment/transport_boundary/loaded_empty_idle_coverage/provider_allocation_status; source_original_id/B_owner; state/components; gross/tare/net_kg/scale/calibration/moisture; original_pack_BOM/material; carton_kg; PE_film_kg; whole_basket_kg; opening/generated/held/dispatch/closing; retained/customer_transferred_pack; overlap_ids; Q; trip_id/segment_p/beneficiary_b; payload_kg/distance_km/travel_h/idle_h/capacity_kg/C_pb/t_pb; provider_already_attributed; N_p/source_phase_boundaries | Weigh each actual segregated carrier consignment using calibrated gross/tare scales; identify complete coated basket components and actual packaging polymer/fibre. Verify recipient contract accepts the exact carrier and covers transport/treatment or obtain a separate nonoverlapping transport module. The actual provider must cover observed loaded, empty and stationary-idle activity; a zero-load trip is not zero transport. Already attributed consignment inventories retain their allocation; segment records are QA only, not another multiplication. Unknown empty/idle coverage blocks completeness. Independently reconcile held waste and original material states, never adjust actual dispatched net kg a second time. Without provider-attributed coverage, use transport_completion raw segment vectors and same-unit kg*h allocation; loaded tonne-km cannot stand for empty/idle activity. | kg | each dispatch; stock at period close | all consignments and held stock | same pool with original source lineage | per reference flow | weigh tickets, photographs, provider scope and source-ID deduplication |
| cp_support | support_completion | fixed missing support completion | original foreground records | module/site/pool/version/owner; original_provider_LCI/source_id; normalized_row/flow/property/unit/D_x; raw_N_x; duplicate_source_scope; parent/submeter_scope; active/idle/fixed_pools/drivers; asset_id/model/BOM/installation/acquisition/lifetime_versions/all_past_beneficiary_e/L; retirement_net_or_BOM_mode; replacement_event; terminal_carrier; actual_electricity; cleaning_formulation/source_kg/fates; water/effluent_meter/density; wet_carrier_kg; room_species_inlet/outlet/storage/capture; operation_presence/absence_evidence; Q; natural_ventilation_inspection; no_combustion/no_refrigeration/no_purchased_heat_cold_evidence; landlord_shared_equipment_scope; cleaning_formulation_identity/concentration/supplied_kg/unused_stock/container_residue/wetcloth_retained/drained/capturedsolid; used_intermediate_reclassification; whole_effluent_mode/gross/tare/volume/density; cloth/container/drain_carrier_ids; trip_id/segment_p/beneficiary_b; vehicle/provider; payload_kg/distance_km/travel_h/idle_h/capacity_kg/C_pb/t_pb; provider_already_attributed; N_p/source_phase_boundaries | Obtain exact signed provider package or collect named individual source records for the complete fixed support register. Verify actual operating equipment/purchases/maintenance to identify fuel/refrigerant/cleaning and absence evidence. Restore original raw denominators; audit all historical asset beneficiaries and revised versions. Missing source, species, original basis, causal exposure or provider exclusion blocks completion rather than choosing a default. Route is limited to verified whole-site/landlord no-combustion/no-refrigeration/no-purchased-heat-cold natural ventilation; presence or unknown is inapplicable. Use cleaning_completion disjoint final formulation fates and direct complete-liquid measurement; use transport_completion segment raw sources and kg*h all-beneficiary reservations. | source-specific unchanged | each original source/event; period and life revision | whole fixed module register; all asset history | same site/pool and exact provider boundaries | Apply complete_support, asset_lifetime and support_operation; raw compatible rows only, source/version dedup, final Q once. | provider LCI and original basis, asset/BOM ledger, operation/absence checks, corrections and scope reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_count | retail_service | Compute Q as count of distinct original_id with final_valid_acceptance=true at cutoff. Apply final_service version replacements. Output one service item for Q>0, otherwise retain unnormalized raw pool. | original_id; final_valid_acceptance; cutoff; source_pool_correction; cp_acceptance | Q; one reference service item |  |
| background_sum | basket_receipt; basket_handover; basket_supplier_return; basket_external_retention; retail_service | B_S=sum of whole B_j assigned S; B_F=sum of whole B_j assigned F; retain B_O/B_T separately. Service background=B_F/Q; downstream sold-goods background=B_S/Q attached once outside incremental service. B_S+B_F+B_O+B_T=sum original B_j componentwise in identical exchange units. Do not multiply whole B_j by basket kg fractions, dispatch fraction or normalized custody counts. N_F=count distinct F original IDs; basket_receipt input N_F/Q carries B_F/Q through each original supplier B_j source, so do not separately add B_F/Q again. Gross receipt events remain custody QA and do not determine this input amount. | B_j; receiving_gate; source/version; S/F/O/T_owner; component_inventory_vectors; Q; cp_custody; cp_acceptance; N_F; F_original_ids; original_supplier_inventory_vector; original_pack_BOM | source-conserved background vectors per reference flow |  |
| electricity_sum | retail_electricity | For each disjoint source pool p in kWh use E_pb=E_p*d_pb/sum_b(d_pb). Active d is powered_seconds; idle/fixed d is reserved_m2*duration_h. Reconcile sum_b(E_pb)=E_p, then E_core=sum_p(E_pb); row amount=E_core/Q. Different driver units never enter one sum. Dedicated-meter E_core bypasses shared allocation. | active/idle/fixed_kWh; powered_seconds; reserved_m2; duration_h; beneficiary_id; core_submeter_in_parent; Q; cp_energy | kWh per reference flow | ghg-product-allocation |
| dispatch_sum | whole_basket_waste; carton_waste; film_waste | For each actual identified carrier take consignment_net_kg=gross_kg-tare_kg and sum disjoint accepted consignments. Dispatch row=sum(consignment_net_kg)/Q. Opening+generation-dispatch=closing is an independent held-waste check only; do not use it to subtract dispatch twice or replace a measured consignment. | consignment_id; gross_kg; tare_kg; carrier_identity/state; overlap_ids; provider_contract; Q; cp_waste | kg per reference flow for each carrier |  |
| support_restore | support_completion | Restore each source row raw_N_x=normalized_row_x*D_x for evidenced original denominator; apply same-pool disjoint allocation or f_ab=e_ab/L_a for complete lifecycle assets, replacing every old beneficiary/version at life revision. Add only compatible source-deduplicated raw exchange numerators, including the core F responsibility input, without separately adding B_F again, then divide by Q once. No raw/normalized mixing. Follow complete_support and support_operation; missing module remains partial. Follow cleaning_completion and transport_completion within the verified route fixed by support_operation. | normalized_row_x; D_x; raw_N_x; source_id/version; duplicate_source_scope; e_ab; L_a; all_past_beneficiary; lifetime_versions; replacement_event; terminal_carrier; actual_operation_sources; Q; cp_support; natural_ventilation_absence_evidence; whole_effluent_mode; formulation_final_fates; segment_p; beneficiary_b; N_p; C_pb; t_pb; provider_already_attributed | completed compatible inventory per reference flow, or explicit partial status |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | custody | Resolve actual rattan/bamboo material conflict, species/provenance and complete supplier BOM, coating, feet, liner and original pack before a complete dataset; preserve unresolved lineage explicitly. No catalog0.96kg-to-net or dry-matter default. | lot-linked supplier declarations, physical identification and calibrated measurements |
| q_time | retail; custody; residual | Cover full prospectively declared period and all failure/unsold/closed events; late-event original-pool replacement is mandatory. Record observed dates separately from posting dates. | immutable event IDs and versioned reconciliations |
| q_uncertainty | retail_electricity; whole_basket_waste; carton_waste; film_waste | Retain instrument uncertainty, meter coverage, moisture states and recipient coverage. No category-specific industry ranges are established by the sources; measured data and unresolved range evidence remain explicit, with no invented numeric factors. | calibration records, raw interval tickets and provider contracts |
| q_support | support_completion | Partial module gaps must accompany every result. Completion requires signed exact provider scope/raw denominator or newly authored actual atomic cards, all historical asset versions, operation records and same-source deduplication. Necessary fixed lighting/fixtures cannot disappear beside electricity. Whole-site/landlord absence evidence under support_operation is mandatory; presence or unknown makes the route inapplicable, rather than continuing with unspecified fuel/refrigerant. | fixed register, original provider inventory, asset history and bilingual projection audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_check | custody; retail | Require original-ID/lot reconciliation, material-conflict resolution, complete actual BOM and moisture/packaging basis. A missing UUID remains explicitly unbound; confirm name/type/property/unit/state/medium from official original before binding, with no inferred equivalence. No approved methodology, full-standard conformity or quantitative industry range follows from this candidate. |  |
| denominator_check | retail_service | Recompute final-valid set independently of gross handover count. Match every return/revocation/resale/loss to original source and pool correction. Reconcile goods-only count balance, held-waste state ledger and measured waste consignments independently. Investigate discrepancies and uncertainty; do not clamp unexplained negative amounts or invent a waste destination. |  |
| source_conservation | custody; residual; support_completion | Verify sum of whole-original S/F/O/T background vectors equals original B with unique source/version responsibility and actual inbound/packaging boundaries. B_F enters service once and B_S enters sold-goods downstream once; O remains open and T has a named continuing model. Ensure physical recipient/state outputs do not substitute for background ownership. Verify complete basket waste versus separated package portions and actual provider treatment/transport coverage without credits. |  |
| completeness_gate | support_completion | Retain missing module/identity/quantity/range evidence explicitly. Full reporting requires exact provider/raw pool/version receipts, all-asset lifetime replacements, all same-unit beneficiaries, defined support operations and new atomic cards for every actual unrepresented exchange, followed by bilingual synchronization. Until then report only the partial core with its original Q and unnormalized zero-output pools. Q=0, unknown owner, missing source boundary or unknown provider coverage prohibits a normalized complete result. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | partial incremental retail service; custody is satellite ledger |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Combine actual configuration with goods B_S/Q at same receiving gate and completed disjoint support; disclose partial boundary |
| excluded_use | Whole-leaf coverage, basket manufacturing footprint, bamboo/rattan equivalence, furniture retail, complete business/service claim or default recycling credits |
| required_metadata | store/channel; pool/version and dates; original basket ID and receipt lot; supplier complete BOM/material verification resolving bamboo/rattan conflict; botanical identity and moisture method; lacquer and binding/feet/liner specification; actual original packaging BOM; net basket mass distinct from package mass; final acceptance rule/cutoff; custody/state/fate ledger; S/F/O/T background ownership; missing-support register and completion status; verified whole-site/landlord no-combustion/no-refrigeration/no-purchased-heat-cold natural-ventilation evidence |
| required_quality_disclosure | All unbound identities, material/BOM/quantity/range gaps, missing support, instrument uncertainty, zero-Q pools and historical corrections |
| update_trigger | Material/configuration/packaging/site/route/acceptance/background ownership/lifetime/provider-boundary changes and late returns |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62146 | official_guidance | United Nations Statistics Division, CPC 3.0:62146 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62146 ; retrieved2026-10-27 | Explanatory note points to group319; narrower interpretation is not mapping approval |
| ikea-snidad | handbook | IKEA SNIDAD 303.949.44 basket, rattan54x39cm, manufacturer product page; https://www.ikea.com/ca/en/p/snidad-basket-rattan-30394944/ ; retrieved2026-10-28 | Representative product/material table; conflicting bamboo/rattan wording, no complete quantitative BOM; supplies no store data/manufacturing factors or mass default |
| ghg-product-allocation | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011, chapter9 printed63/PDF65 Tables9.1–9.2; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General subdivision-before-physical-allocation order only; specific drivers, service pools, lifetime and responsibility are PCR collection design, not a complete-standard conformity claim |
