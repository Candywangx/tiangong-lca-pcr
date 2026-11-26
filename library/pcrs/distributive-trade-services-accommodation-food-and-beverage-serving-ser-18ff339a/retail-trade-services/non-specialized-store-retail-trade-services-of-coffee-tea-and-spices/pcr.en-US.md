---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-coffee-tea-and-spices
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Shelf and checkout retail services for sealed 250 g pouches of unflavoured black tea

## 1. Scope and Applicability

This is one partial incremental retail module for non-specialized walk-in stores: supplier-filled, opaque heat-sealed PET/aluminium/PE laminate pouches, nominal net 250 g, containing only dried unflavoured black tea leaves of Camellia sinensis. Fix one manufacturer, SKU, tea grade, pouch construction and acceptance specification per dataset. Record the actual net tea mass and moisture basis of each receipt lot; 250 g is the format identifier, never an assumed measured mass. Receive at the store receiving gate, inspect and place unopened packets on a dry ambient shelf, then hand them over at an attended checkout for the buyer’s own use. There is no retailer brewing, tasting, grinding, blending, repacking, delivery, refrigeration or dehumidification within this module. Coffee, spices, green/oolong/instant tea, flavoured tea, tea bags, cans and loose bulk sales are excluded. Actual incidents and failed cohorts remain in the pool; an excluded operational route cannot be made equivalent by renaming it. The module includes dedicated shelf/checkout electricity, receipt paper and the specified residual carriers. Known common premises, assets and housekeeping are excluded here only under the mandatory completion matrix below. The partial result must never be described as the whole retail footprint.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-coffee-tea-and-spices |
| classification_refs | CPC 3.0 62127; narrower |
| covered_products | The sealed unflavoured 250 g black tea packet service specified above |
| excluded_products | Other teas, coffee/spices, preparation, loose sales and other operational routes; common groups require completion matrix |
| representative_product | Shelf and checkout retail services for sealed 250 g pouches of unflavoured black tea; actual supplier, SKU/configuration, lot and complete original BOM verified separately for each homogeneous stratum. |
| production_route | Supplier filling → store receipt → unopened dry ambient shelf → attended final checkout acceptance |
| market_state | Unopened shelf-stable dried leaf tea, purchased for own use |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finally accepted retail service for one sealed 250 g unflavoured black tea pouch |
| How much | One unique packet service; no tea-mass equivalent claim |
| How well | Unopened matching supplier/SKU/condition and signed acceptance specification; no automatic legal conformity |
| How long or cycle | Full receipt-to-final-fate cohort through declared acceptance/physical return observation tail; later corrections reopen original cohort |
| reference_flow_link | service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Finally accepted retail service for one sealed 250 g unflavoured black tea pouch |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | store and cohort dates; manufacturer and SKU; black tea botanical identity and grade; nominal format and measured receipt net tea/pouch mass; packaging structure and seal integrity; supplier acceptance and actual storage conditions; observation tail and Q acceptance corrections; unique packet custody/background responsibility; partial completion matrix and excluded modules; supplier electricity and provider boundaries; actual waste carriers and recipients; unresolved identities and uncertainty |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_reference | service; failed_background; supplier_transfer; external_failure; continuing_transfer | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | One item is one defined original packet or its service only as the actual row role states. Do not substitute kg, attempts, hours or heterogeneous packets. Apply /Q once per 1 Item(s) reference service. |
| energy_unit | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Read raw kWh, attribute measured circuits first and convert 1 kWh=3.6 MJ once; /Q once. |
| mass_carriers | receipt_paper; cardboard_waste; film_waste; sealed_waste; tea_waste; pouch_waste; receipt_core_waste; receipt_waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Actual named whole-carrier mass, excluding bin/core tare as applicable; direct kg preferred. Density, coating, moisture or count conversion requires measured matching composition/state and actual basis; no generic tea kg from count. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Retailer custody of the supplier-filled sealed pouch at store receipt; only subsequent specified incremental module activities |
| starting_condition_role | foreground_gate |
| product_classification_scope | Narrower subset of CPC 3.0 62127 tea retail, not coffee or processed spices |
| recursive_input_rule | Do not recursively add another retail service for the same packet/gate. Failed goods production and transfer ownership follow goods_calc; no second successful-goods production input here. |
| upstream_dataset_requirement | Traceable actual receiving-gate packet production/primary and supplier transit packaging/inbound transport, complete named operation/material/treatment providers; precise unresolved identities prevent dataset completeness |
| disclosure | Partial shelf/checkout service; five fixed completion groups, unresolved candidate flows, actual exclusions and no total-retail claim |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | This PCR applies to the declared product family across manufacturers and brands. Brand, model, catalogue article, SKU and trade name identify actual study data, not an exclusive eligibility condition. The material/function, product state, fixed format where specified, process/channel and gate conditions below still apply. Establish separate homogeneous supplier/configuration/edition/package-BOM strata and their matching original background vectors; do not multiply a mixed-SKU count by one specimen vector. Use actual measured quantities and supported conversions. Manufacturer examples and their masses, dimensions, ratings, formulation or packaging claims are illustrative only, never class-wide defaults or complete BOM/LCI. Any actually different component, support chemical, package or carrier requires its concrete atomic card, matched property/unit, collection and nonoverlapping source boundary before completeness; an actual state or route outside the declared family requires a separately reviewed extension. Unknown applicability, identity or evidence remains unresolved. This candidate generalization does not establish independent scientific or translation approval. |  |
| scope_route | all | This is one partial incremental retail module for non-specialized walk-in stores: supplier-filled, opaque heat-sealed PET/aluminium/PE laminate pouches, nominal net 250 g, containing only dried unflavoured black tea leaves of Camellia sinensis. Fix one manufacturer, SKU, tea grade, pouch construction and acceptance specification per dataset. Record the actual net tea mass and moisture basis of each receipt lot; 250 g is the format identifier, never an assumed measured mass. Receive at the store receiving gate, inspect and place unopened packets on a dry ambient shelf, then hand them over at an attended checkout for the buyer’s own use. There is no retailer brewing, tasting, grinding, blending, repacking, delivery, refrigeration or dehumidification within this module. Coffee, spices, green/oolong/instant tea, flavoured tea, tea bags, cans and loose bulk sales are excluded. Actual incidents and failed cohorts remain in the pool; an excluded operational route cannot be made equivalent by renaming it. The module includes dedicated shelf/checkout electricity, receipt paper and the specified residual carriers. Known common premises, assets and housekeeping are excluded here only under the mandatory completion matrix below. The partial result must never be described as the whole retail footprint. | un-cpc-62127; tea-board-storage |
| gates | all | Start when the retailer accepts physical custody at the store receiving gate; end at qualified final handover after the prospectively declared physical return/acceptance observation window, or a recorded terminal/continuing failed fate. Record gate dates, custody, seal/label/lot/condition, buyer acceptance and destination. Payment alone is not qualified acceptance. Internal shelf movement is not a second receipt or service. Retailer transport after receipt is outside this route; any actual trip requires a separate completed route module before aggregation. | un-cpc-62127; ghg-product-2011 |
| partial_completion | all | Before any whole-retail claim, the responsible assembler must attach a source-ID and boundary-matched completion matrix for (i) shared premises lighting, HVAC, ventilation and office/checkout IT operation not on the dedicated meter plus actual payment and communication services; (ii) building including shell, fixed wiring/luminaires and installed common systems; (iii) shelf, checkout/POS and actual loaded plus empty handling trolley/pallet equipment; (iv) all housekeeping water, each detergent/cloth, wastewater and other residuals; (v) maintenance, installation and terminal asset carriers and actual transport. For every module use this same cohort and final denominator Q, record meter/provider intersections and exclude duplicates by event/asset/component IDs. Retain failed, idle, closed and zero-output periods. Unknown coverage blocks completeness, never equals zero. Required measurement and allocation methods are fixed in completion_calc and completion_protocol; modellers may supply actual quantities and suppliers, not choose another denominator or cut-off. No excluded asset burden is silently declared insignificant. | ghg-product-2011 |
| goods_responsibility | failed_background; service; supplier_transfer; external_failure; continuing_transfer | The service is distinct from tea manufacture. Successful merchandise manufacture, its original pouch, actual share of supplier transit cartons/LDPE film and inbound transport to this receiving gate belong once to the downstream successful-goods background, exactly one original packet per finally successful unique packet. Include in failed_background only original packets whose terminal failed-goods background is assigned to this service under goods_calc. Supplier returns, stock and other continuing recipients retain an explicit continuing full upstream responsibility chain; no avoided-production credit. A returned packet later resold successfully receives one goods background, not one per attempt. Final failed external retention/consumption has an identified recipient and responsibility, never automatic retailer waste. Physical transfer outputs do not add another upstream background. | ghg-product-2011 |
| tea_integrity | all | The opaque moisture-barrier pouch remains unopened for sale. Tea Board advice concerns cool/dry protection and avoiding odours, not a numeric legal storage limit or this particular packaging specification. Obtain signed SKU/lot acceptance conditions, shelf-life/date coding and actual supplier packaging declaration; record shelf temperature/RH, odour/contamination checks and seal integrity each operating day and each receipt/return/fate event. No default moisture, permeability, shelf life or compliance limit is supplied. Counted service cannot increase merely because tea absorbs water. Do not infer zero moisture/volatile transfer from a nominal airtight claim. Changes that affect condition, mass reconciliation or environmental transfers require measured bounds; unknown material transfer prevents closure. | tea-board-storage |
| incident_extension | tea_waste; pouch_waste; sealed_waste | Routine sales involve unopened complete packets; damaged, opened-returned and sampled packets are never counted as an unopened successful packet. Preserve their whole original-packet background responsibility even if residual mass is less after a documented external consumption. Keep intact disposed packets in sealed_waste. For a physically separated incident weigh actual loose tea and empty pouch separately, never count their original intact carrier again. Tea_waste contains only collected dry tea as actually moist, not cleaning water; pouch_waste contains actual emptied laminate with measured adhering tea assigned once. Record any third carrier, spill collection material, cleaning, leachate, humidity/volatile flux or offsite sample treatment with named cards/protocols in both languages and normal sync before a complete dataset. Fix species identity, actual inlet/outlet medium, raw boundary mass and recipient attribution first; unknown incident fate is unresolved, not zero or an invented air emission. | ghg-product-2011 |
| waste_boundary | cardboard_waste; film_waste; sealed_waste; tea_waste; pouch_waste; receipt_core_waste; receipt_waste | Weigh each actual dispatched carrier; retain opening/closing bins and collection dates. Treatment backgrounds must match each carrier and actual recipient and include evidenced pickup transport and treatment boundaries. Waste output links to that treatment background once; do not also enter an input for the same treatment, contained tea/laminate or provider fuel. Obtain provider route/loaded/empty-leg coverage; uncovered empty distance cannot disappear as zero tonne-km, and requires separately measured vehicle-distance route activity with overlaps removed. Fractions of destinations sum to one on one raw carrier pool, applied once. No recycling or avoided-material credit. Unknown recipient, carrier composition needed for treatment, or provider overlap blocks completeness. | ghg-product-2011 |
| identity_completion | all | Only the displayed electricity UUID is bound; it is generic point-of-use AC with provider and voltage unspecified and no emission factor. All other flow identities remain concrete unbound candidates. Before a completed foreground dataset, bind each row to an exact official product/waste identity and compatible property/unit, or retain an explicit unresolved finding and disallow completeness. Direct official response plus matching integrity receipt must establish UUID, state, official names, qualifiers and property/unit chain. Search hits or similar names do not bind identity. Match actual suppliers, composition and treatment. Candidate availability is not scientific or release approval. | ghg-product-2011 |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| handling | Receipt, intact shelf and attended checkout | required | Every cohort, including failures | foreground | service |
| residual | Separated physical residual carriers | conditional | Actual carrier present; absence needs q_absence evidence | foreground | Actual carrier totals then /Q |


### Process: Receipt, shelf and checkout (`handling`)

#### Inputs

##### Product flows

###### Supplier-filled sealed 250 g black tea pouch at store receiving gate (`failed_background`)

A concrete original packet product consumed as failed-goods background responsibility; successful and continuing packets are excluded from this input. B_terminal/Q Item(s), goods_calc; the original packet background includes its actual receiving-lot net tea and pouch, supplier transit carton/LDPE share and inbound transport.

- Selected flow: Supplier-filled sealed 250 g black tea pouch at store receiving gate
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: B_terminal/Q Item(s)
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`

###### Alternating current (`electricity`)

Point-of-use electricity; voltage and provider unspecified. Generic supply technology is unspecified; actual voltage/supply background must be evidenced separately. Only documented dedicated shelf-light and checkout circuit operation is included. 3.6*E_attr/Q MJ, energy_calc; E_attr is attributed measured kWh, not a factor times tea mass.

- Selected flow: Electricity, alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: 3.6*E_attr/Q MJ
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `ghg-product-2011`

###### Non-plastic-coated thermal receipt paper roll (`receipt_paper`)

One supplier specification of thermal receipt paper, including its integral thermal coating but no separate synthetic liner; weigh roll net paper and cores separately. The supply background is per kg net paper for this exact roll and must include the actual measured core/paper ratio and core manufacture once; it is not a bare-paper background. Alternative plastic-coated stock is a different identity and requires a named card. P_attr/Q kg, paper_calc; actual consumed paper mass with checkout-event shares.

- Selected flow: Non-plastic-coated thermal receipt paper roll
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: P_attr/Q kg
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_paper`
- Sources: `ghg-product-2011`

#### Outputs

##### Product flows

###### Finally accepted retail service for one sealed 250 g unflavoured black tea pouch (`service`)

This output measures the partial incremental retail service, not tea manufacture or a manufactured packet. Q/Q = 1 Item(s), acceptance_calc; only finally accepted unique unopened packets.

- Selected flow: Finally accepted retail service for one sealed 250 g unflavoured black tea pouch
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`

###### Sealed 250 g black tea pouch returned to supplier for continuing use (`supplier_transfer`)

A physical goods transfer, not service output, retailer waste or avoided-production credit. Supplier rejects/destroys without continuing responsibility are terminal failures instead. N_supplier/Q Item(s), goods_calc; actual final outgoing packets with signed continuing-background responsibility.

- Selected flow: Sealed 250 g black tea pouch returned to supplier for continuing use
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_supplier/Q Item(s)
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`

###### Sealed 250 g black tea pouch handed over without qualified final retail acceptance (`external_failure`)

Failed physical handover is not automatically waste. A returned-and-resold packet is removed from this final-fate count. The physical outward gate state is this intact sealed packet. Its later external opening/consumption belongs to final-fate evidence, not another identical packet exchange; an actual outward state different from this requires its own named card before completion. N_external/Q Item(s), goods_calc; identified original packets, actual state/recipient and terminal versus continuing responsibility annex.

- Selected flow: Sealed 250 g black tea pouch handed over without qualified final retail acceptance
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_external/Q Item(s)
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`

###### Sealed 250 g black tea pouch transferred to another retailer custody (`continuing_transfer`)

Internal shelf movements are excluded. Closing stock stays in the stock ledger and is not an output exchange. N_transfer/Q Item(s), goods_calc; distinct custody transfers with inherited background record.

- Selected flow: Sealed 250 g black tea pouch transferred to another retailer custody
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: N_transfer/Q Item(s)
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_goods`
- Sources: `ghg-product-2011`

### Process: Residual carriers (`residual`)

#### Outputs

##### Waste flows

###### Discarded dry corrugated cardboard transit carton (`cardboard_waste`)

Supplier secondary carton after goods removal; includes actual inseparable printing/adhesive. No tea or primary pouches. W_cardboard_waste_attr/Q kg, waste_calc; actual dispatched consignment net mass, no second opening/closing bin deduction; independent generation/stock check, source-cohort attribution and destination shares once.

- Selected flow: Discarded dry corrugated cardboard transit carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_cardboard_waste_attr/Q kg
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Discarded LDPE transit stretch film (`film_waste`)

One verified LDPE film identity, separated from cartons and pouches; no generic mixed plastic packaging. W_film_waste_attr/Q kg, waste_calc; actual dispatched consignment net mass, no second opening/closing bin deduction; independent generation/stock check, source-cohort attribution and destination shares once.

- Selected flow: Discarded LDPE transit stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_film_waste_attr/Q kg
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Discarded intact sealed black tea PET aluminium PE pouch with contents (`sealed_waste`)

One real whole waste carrier: actual tea plus its intact laminate, measured gross net of collection bin. Do not add contained tea or foil as separate waste. W_sealed_waste_attr/Q kg, waste_calc; actual dispatched consignment net mass, no second opening/closing bin deduction; independent generation/stock check, source-cohort attribution and destination shares once.

- Selected flow: Discarded intact sealed black tea PET aluminium PE pouch with contents
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_sealed_waste_attr/Q kg
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Collected loose unflavoured black tea leaf waste (`tea_waste`)

Only the actual separately collected tea carrier from a documented rupture/sample/open return; record actual moisture, source packet IDs and any adherent packaging separately. No default moisture. W_tea_waste_attr/Q kg, waste_calc; actual dispatched consignment net mass, no second opening/closing bin deduction; independent generation/stock check, source-cohort attribution and destination shares once.

- Selected flow: Collected loose unflavoured black tea leaf waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_tea_waste_attr/Q kg
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Discarded emptied PET aluminium PE black tea pouch laminate (`pouch_waste`)

The physically emptied composite pouch is one carrier; integral layers stay together. Measure adhering tea and allocate its portion once, not a second loose-tea output. W_pouch_waste_attr/Q kg, waste_calc; actual dispatched consignment net mass, no second opening/closing bin deduction; independent generation/stock check, source-cohort attribution and destination shares once.

- Selected flow: Discarded emptied PET aluminium PE black tea pouch laminate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_pouch_waste_attr/Q kg
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Discarded hollow paperboard receipt-roll core (`receipt_core_waste`)

One physically separated spent spool core; weigh actual core mass and state, including integral adhesive. Its manufacture belongs once to the exact paper-roll supply background; terminal carrier is not a corrugated transit carton. W_receipt_core_waste_attr/Q kg, waste_calc; actual dispatched consignment net mass, no second opening/closing bin deduction; independent generation/stock check, source-cohort attribution and destination shares once.

- Selected flow: Discarded hollow paperboard receipt-roll core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_receipt_core_waste_attr/Q kg
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

###### Discarded non-plastic-coated thermal receipt paper (`receipt_waste`)

Actual failed/test receipts retained and discarded at store, not all receipt paper consumed; consumer receipts leave with successful/failed handovers in the paper ledger. Actual separately removed paperboard spool cores use receipt_core_waste, never the corrugated carton identity. W_receipt_waste_attr/Q kg, waste_calc; actual dispatched consignment net mass, no second opening/closing bin deduction; independent generation/stock check, source-cohort attribution and destination shares once.

- Selected flow: Discarded non-plastic-coated thermal receipt paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: W_receipt_waste_attr/Q kg
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual`
- Sources: `ghg-product-2011`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| pool | all | Prospectively fix one store/configuration/SKU cohort and consecutive reporting windows, including failed receipt lots, idle/closed days and zero-sale subperiods. Each original packet has one parent ID, all attempts and final fate. Correct service count Q counts unique finally accepted unopened packets only. A price adjustment alone does not reverse Q. Physical refusal, later qualified resale and final return revise original numerator and Q together. Entirely Q=0 pools are retained with unnormalized totals and cannot yield per-service values; combine only prospectively declared same-configuration adjacent pools, never cherry-pick successful periods. Unknown final acceptance/fate remains provisional. | ghg-product-2011 |
| shared_driver | electricity; receipt_paper; all | Use dedicated submetering or direct event material attribution before sharing. For shared checkout operation use measured attended seconds across all actual beneficiaries; assign idle/closed intervals by declared staffed-capacity reservation seconds across all beneficiaries, not by successful sales alone. For dedicated shelf light use measured occupied packet-slot-hours, reserve idle shelf capacity by assigned slot-hours; all beneficiaries and failure/stock exposures remain. Apply shares to raw totals first, reconcile sum allocated=raw pool including residual, then divide by Q once. A parent meter may subtract a submeter only if the documented circuit topology includes it; disjoint meters are not subtracted. Split circuits or compatible named route modules before combining heterogeneous drivers. | ghg-product-2011 |
| asset_completion | all | For omitted asset modules fix disjoint complete-object boundaries: building shell/fixed installations exclude separately counted shelf, POS and trolleys; complete POS includes its supplied computer/display/scanner/printer; trolley includes wheels and bearings; shelf includes its original fasteners. Provider-included manufacture, installation, fluids, transport or maintenance must not be repeated. Real replacement parts and actual maintenance are event-attributed unless an evidenced homogeneous signed contract package contains them. One Item(s) of maintenance is allowed only for one fixed contract_id, work_scope, service_type and package_version with compatible background, never a mixed job count. Terminal direct net weighing and component-BOM reconstruction are exclusive; direct net mass already excludes removed components. Lifetime allocation and terminal correction are fixed by completion_calc. | ghg-product-2011 |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | handling | Packet custody, service and background | Original packet/event/lot ledger | cohort_id; packet_id; original_lot; supplier_SKU; gross_handover_id; physical_return_id; attempt_id; receipt_date; final_acceptance_date; condition; seal_status; final_fate; recipient; background_owner; original_net_tea_kg; pouch_tare_kg; moisture_basis; uncertainty | Scan unique original packet IDs at receipt, every attempt, return and fate; signed custody and acceptance records distinguish financial events. Weigh calibrated gross packet samples and matched emptied pouch tare from each homogeneous receipt lot; measure actual net tea and wet-basis moisture on the same documented sample method, with sample fate recorded. Keep sample size/selection by lot/receipt date and certificate, calibration/zero/check weights. Verify full source background covers actual supplier tea, this pouch, actual allocated supplier transit carton/LDPE film and inbound gate, with actual per-packet mass and uncertainty. acceptance_calc and goods_calc; unique parent-packet partition, preserve provisional records; same original IDs reused without recounting | Item(s); kg; fraction; timestamp | Each custody/attempt/fate event and each receipt lot sample | Entire declared cohort including observation tail and late corrections | Receiving gate, shelf, checkout and named recipients | per reference flow | Signed receipt/acceptance/recipient logs; inventory snapshots; scale/moisture QA and laboratory uncertainty; supplier background scope |
| cp_energy | handling | Dedicated circuit electricity | Circuit interval register | meter_id; topology; timestamp; kWh_open; kWh_close; multiplier; circuit_scope; task_seconds; reservation_seconds; packet_slot_hours; all_beneficiaries; outage; missing_interval | Read sealed calibrated dedicated shelf and checkout circuit meters at least daily and at configuration changes; preserve raw interval differences, polarity, meter multiplier and bills. Record actual task/idle reservation and occupied/reserved slots across all beneficiaries. Audit the parent/submeter topology before subtraction. No bill-wide residual may be assigned as dedicated use. energy_calc; all-beneficiary shares then MJ conversion and /Q once; missing intervals explicit bounded estimate with evidence, never zero | kWh; s; slot*h | Each interval, at least daily | All open, idle, closed and failure intervals of cohort | Documented shelf/checkout circuits only | per reference flow | Meter calibration, topology, interval exports, task/reservation logs and all-beneficiary reconciliation |
| cp_paper | handling | Receipt paper consumption | Roll and print ledger | roll_id; supplier_spec; net_paper_kg; core_tare; spent_core_kg; core_background_ratio; opening_stock; received; closing_stock; sent_unused; print_event_id; length; paper_width; areal_mass; printed_receipt_open; printed_receipt_close; destination | Weigh actual roll net paper with calibrated scale; inventory opening/receipt/closing/unused transfers. Link each print event including failure, tests and zero-sale days. Prefer directly weighed event batches; alternative actual length*width*measured areal mass, with coating included, is exclusive. Count cores separately. Inventory unused paper rolls and already printed retained receipts as distinct physical stocks. paper_calc; direct event or causal shared print-length fractions once; consumed paper reconciles store waste, customer dispatch and stock | kg; m; m2; kg/m2 | Each roll change and print event; period inventory | Complete cohort including corrections | Assigned checkout printers | per reference flow | Scale checks, supplier paper construction, spool/print logs and destination balance |
| cp_residual | residual | Named physical waste carriers | Carrier and destination register | carrier_id; original_packet_id; material; seal_state; gross_kg; bin_tare_kg; opening_bin_kg; closing_bin_kg; dispatch_kg; other_carrier_transfer_kg; date; recipient; treatment; destination_fraction; provider_scope; loaded_distance; empty_distance; composition; uncertainty | Segregate named carriers and weigh net actual dispatch, bin contents and incident streams with calibrated scales. Record composition/seal/state and packet origin; sampling of tea moisture and pouch adhesion at actual fates. Collect signed weigh tickets and recipient/treatment route declarations including loaded and empty legs. Document source portions if one bin serves many beneficiaries. Never manufacture a component waste from an unsplit whole carrier. waste_calc; raw carrier reconciliation first, attribution/destination once, /Q once; match provider event IDs to avoid duplicated treatment/transport | kg; km; fraction | Every bin inventory, dispatch and incident | All cohort fates and delayed dispatch/corrections | Store residual storage to verified receiving facility | per reference flow | Calibrated scales, bin sheets, signed recipient tickets, composition/condition evidence and provider boundary declaration |
| completion_protocol | handling | Required external completion modules | Boundary/asset/meter responsibility matrix | module_id; source_id; asset_id; component_id; contract_id; provider_scope; beneficiary_id; lifetime_exposure_version; current_exposure; remaining_exposure; cumulative_fraction; final_residual; maintenance_event; terminal_carrier; meter_intersection; effluent_mode; V_discharge; rho; I_piped_water; I_delivered_cleaner_solution; I_other_liquid; I_separate_dry_solid; S_open; S_close; E_vapour; E_product_pool_portion; E_other_carrier_pool_portion; E_separated_solid; missing_data; uncertainty | Responsible assembler inventories all five partial_completion groups on site at opening and every change/event. Record physical providers/assets and complete-package boundaries; collect original manufacture/installation records, observed current all-beneficiary exposures, forecast remaining exposures with documented assumptions and revision history, actual maintenance and terminal carriers. Handling exposure includes loaded, empty return/positioning and reserved idle capacity; building/shelf exposure uses assigned area/slot-hours; POS/HVAC use actual attended/load and reserved-capacity hours across beneficiaries. Homogeneous actual payment/communication provider units use metered time or traceable transaction records and signed provider scope, excluding already supplied utilities/IT. Housekeeping measures each actual input and full effluent carrier before allocation; no water-reuse deduction from import meter, and actual effluent V*rho has no second evaporation deduction. completion_calc; separate raw module totals, current allocation and one common /Q; retain original IDs and explicit overlap exclusions; unknowns block whole-retail claim | kg; Item(s); MJ; h; m2*h; slot*h; fraction | Opening inventory, every event/change, each period and terminal closure | All beneficiaries and asset life including zero-output/closed intervals | All omitted known retail groups, matched store and cohort | per reference flow | Signed matrix, asset/provider scopes, calibration, lifelong beneficiary ledger and revised balance, maintenance contracts, terminal weigh records |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| acceptance_calc | service | For each parent packet i set s_i=1 only at qualified final acceptance after the declared observation tail, otherwise s_i=0 or unresolved; Q=sum_i s_i. Multiple sale attempts never add extra s_i. A later physical reversal replaces the original s_i and corrects all original cohort numerators/fates; append dated corrections rather than booking it only into a new pool. Q=0 retains raw totals with no /Q. Financial refund without physical acceptance change has no automatic s_i effect. | packet_id; attempt_id; final_fate; final_acceptance_date; physical_return_id; cohort_id | Q unique finally accepted packet services | ghg-product-2011 |
| goods_calc | failed_background; supplier_transfer; external_failure; continuing_transfer; all | Partition each original packet once: s_i (final success), t_i (terminal failed background assigned here), c_i (supplier/other continuing responsibility), o_i (open provisional stock/fate), with s_i+t_i+c_i+o_i=1 and no unresolved partition closed by assumption. B_terminal=sum t_i; successful downstream background=sum s_i original packets, continuing background=sum c_i and provisional=sum o_i; their sum equals original packet receipts plus distinct opening stock, never repeated attempts. A whole failed original packet has t_i=1 even if actual residuals split or prior external consumption reduced remaining mass; assign actual component treatment only, no credit and no invented waste. Record N_supplier,N_transfer and terminal/continuing N_external as distinct physical final fates; external continuing counts belong to c_i, external terminal to t_i, not two backgrounds. The physical packet ledger independently balances opening+receipts+actual customer returns = gross physical handovers+supplier transfers+other custody transfers+packets retired into residual/consumption+closing, each unique event once; gross handover is not Q. Tea original kg linkage, only when needed by the supplier background, uses sum original measured lot net masses of the same selected parent packets and actual pouch masses; never 0.25*count by default or final moisture-corrected kg as original tea kg. This count service does not allocate original goods to partial retail sale fractions: any packet opened for samples/incident is a failed whole original packet; no partial successful service is claimed. | packet_id; original_lot; final_fate; recipient; background_owner; original_net_tea_kg; pouch_tare_kg; gross_handover_id; physical_return_id | Unique terminal background B_terminal and physical output counts; separate gross stock balance | ghg-product-2011 |
| energy_calc | electricity | For each homogeneous circuit/interval E_raw=(close-open)*verified multiplier. Separate shelf and checkout intervals; use shared_driver measured causal shares a_j with sum across all beneficiaries=1, retain idle/reserved residuals. E_attr=sum E_raw*a_target; negative/unread intervals require correction or an evidenced uncertainty estimate. Convert kWh to MJ once (1 kWh=3.6 MJ), then /Q once. Generic AC identity supplies no grid factor. | kWh_open; kWh_close; multiplier; task_seconds; reservation_seconds; packet_slot_hours; all_beneficiaries; topology | 3.6*E_attr/Q MJ | ghg-product-2011 |
| paper_calc | receipt_paper; receipt_waste | P_raw=opening_net_paper+received_net_paper-closing_net_paper-unused_sent; tare/core never included. Use either direct consumed mass or actual length*width*measured coated areal_mass, not their sum. Attribute known events directly and shared tests/idle prints by the corresponding all-beneficiary observed print-length or declared capacity shares, not Q alone. P_attr=sum attributed raw paper; /Q once. Reconcile consumed paper = store paper waste + paper handed to customers + (closing_printed_receipts-opening_printed_receipts) with unique event IDs; printed receipt stock is physically distinct from unused roll stock already removed in P_raw, so never apply unused roll stock twice; store waste is measured separately, not presumed equal to input. | opening_stock; received; closing_stock; sent_unused; net_paper_kg; length; paper_width; areal_mass; printed_receipt_open; printed_receipt_close; destination | P_attr/Q kg and independent paper fate balance | ghg-product-2011 |
| waste_calc | cardboard_waste; film_waste; sealed_waste; tea_waste; pouch_waste; receipt_core_waste; receipt_waste | For each carrier W_dispatched=sum(gross-bin_tare) of actual outbound consignments; raw generated mass satisfies G+opening_bin=dispatched+closing_bin+other documented carrier transfer, not an automatic addition of stored mass to dispatch. Use raw source-specific weighing or measured composition fractions to attribute shared bins; apply destination fractions to that same attributed pool once, then /Q once. Keep stock-carrier responsibility at the originating cohort through later dispatch. Intact tea+pouch carrier and its split descendants are mutually exclusive by packet and event IDs. Gross commodity mass balance uses original packet gross measurements and actual returns/handover/residual portions, separately from Q; do not replace lost tea by whole wastewater, water gain, missing mass or pouch tare. If mass changes, measure tea moisture and actual recipient/export/environmental transfers and their uncertainty; unresolved imbalance prevents completeness. | carrier_id; gross_kg; bin_tare_kg; opening_bin_kg; closing_bin_kg; dispatch_kg; other_carrier_transfer_kg; destination_fraction; original_packet_id; composition | Attributed dispatched carrier kg/Q and unallocated carrier checks | ghg-product-2011 |
| completion_calc | all | For each omitted module retain physical raw totals before allocation. For asset a and forecast version v, lifetime exposure L_a,v = cumulative actual all-beneficiary exposure through current period + expected remaining all-beneficiary exposure, on the same physical driver stated in completion_protocol. Current manufacture share f_target,p,v=x_target,p/L_a,v. Maintain one asset ledger across every period/beneficiary; sum all shares<=1. A forecast revision replaces prior shares and posts signed differences to original cohorts, never starts a second manufacture life. At terminal closure set remaining exposure=0 and reconcile residual shares to observed lifetime exposure; final terminal carrier is actual carrier mass/count*f_target,total exactly once, with no second manufacture fraction. Actual maintenance/replacement event quantities use event beneficiaries once, excluding evidenced provider inclusions. For other shared operating pools use measured subdivision or the stated capacity/exposure fractions including idle/closed failures; quantities raw→attributed→/Q exactly once. Direct liquid effluent is measured actual V_discharge*rho at matching conditions. Alternative reconstruction is allowed only when direct metering is unavailable and is exclusive with direct V_discharge*rho. Reconstruct full discharged liquid-carrier kg including dissolved/entrained solids as W=I_piped_water+I_delivered_cleaner_solution+I_other_liquid+I_separate_dry_solid+S_open-S_close-E_vapour-E_product_pool_portion-E_other_carrier_pool_portion-E_separated_solid. Measure each term in kg at its actual control-volume crossing. Piped-water import excludes internal reuse; delivered cleaner solution is its whole measured mass including its water and dissolved matter, and those constituents must not be added again as piped water or separate dry solids. I_other_liquid and I_separate_dry_solid contain only disjoint actual additions not already inside another input. S_open/S_close are the same whole liquid-pool inventory; outgoing vapour/volatile, product portions, other-carrier portions and separated solids are mutually exclusive mass portions from this same pool. An export in a wipe/carrier subtracts only the pool-derived liquid/solid portion already included in this balance, never the dry carrier introduced outside the liquid pool; do not also subtract that portion as separated solids or another export. Internal reuse does not cross this balance boundary. Keep whole carrier dispatch weights and composition/retention evidence separate. Direct actual V_discharge*rho never receives these reconstruction deductions, and a water-only balance must never be multiplied by effluent density. Original IDs, physical boundaries and provider intersections must reconcile before combination with this partial module. | asset_id; component_id; beneficiary_id; lifetime_exposure_version; current_exposure; remaining_exposure; cumulative_fraction; final_residual; maintenance_event; terminal_carrier; meter_intersection; effluent_mode; V_discharge; rho; I_piped_water; I_delivered_cleaner_solution; I_other_liquid; I_separate_dry_solid; S_open; S_close; E_vapour; E_product_pool_portion; E_other_carrier_pool_portion; E_separated_solid | Required source-bound omitted module quantities using same Q | ghg-product-2011 |


### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_evidence | all | Retain raw calibrated readings, sampling selections, chain of custody, supplier construction/acceptance declarations and actual uncertainty at store/lot/period scope. Unknown and missing data need a labelled gap, bounded evidence-based estimate with sensitivity or explicit incomplete result; never zero. No example, source advice or estimated range is a default or legal compliance limit. | Original meter/scale/lab records, dated deviations and uncertainty report |
| q_absence | all | At opening, each operating day and every change, confirm sealed route and absence/presence of retailer processing, delivery, heating/cooling/dehumidifying, cleaning and incident carriers using site walkthrough, staff signoff, purchase/circuit records and incident/return logs. A conditional zero requires actual absence evidence; unknown is unresolved. Existing common services are omitted modules under partial_completion, not absent processes. | Signed configuration/absence register and completion matrix |
| q_translation | all | Compare every populated English business field and corresponding Chinese field including actual formulas, inputs, qualifiers, source use, obligation strength and exceptions; stable identifiers and single-process protocol references must match. Localized identity audit and semantic translation review are separate from simple Chinese presence. | Field/array comparison plus substantive bilingual reading record |


## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | all | Require Q>0, one homogeneous defined packet-service unit, all qualifiers, final physical acceptance evidence and closed receipt/attempt/fate ledgers. Q cannot equal gross dispatch, invoice count, kg, tea mass gain or retained refused packets. Check goods_calc unique-partition closure and moisture/mass uncertainty separately. Unknowns block closure. | ghg-product-2011 |
| v_rows | all | Verify every actual card’s process/direction/type, one carrier or product identity, unit, raw rule, attribution, source IDs, original evidence, protocol and single final /Q. Check provider overlap and original supplier-packet background count once. No unknown input, route, capture, stock or destination is zero by default; any actual new exchange requires named bilingual cards and supported protocols before sync and completeness. | ghg-product-2011 |
| v_projection | all | Compare both languages for every constraint, qualifier, condition, exception, formula and denominator; retain exact row/rule/protocol identities. Regenerate structured from canonical Markdown, and compare actual machine guidance for all obligations including completion duties. A fingerprint/schema pass is not a semantic review or methodology approval. Report this partial module and unresolved identities separately from checks performed and checks not completed. | ghg-product-2011 |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Only this measured partial service module per one finally accepted defined tea packet, after row identities and complete source data are resolved |
| allowed_use | Explicit modular combination using partial_completion and completion_calc with same Q and source-bound overlap exclusions |
| excluded_use | Whole-retail footprint without completion; tea manufacture replacement; other tea/coffee/spices or channels; legal conformity or published methodology claim |
| required_metadata | All reference qualifiers, original packet/lot lineage, actual gates, Q and corrections, completion matrix, supplier/background responsibilities, raw allocations, provider overlap and sources |
| required_quality_disclosure | Partial boundary; unresolved identities; actual missing data and uncertainty; temporal/geographic/site applicability; checks performed versus incomplete checks; no invented defaults |
| update_trigger | SKU/package/route/gate changes; new incident/carrier; late acceptance/fate correction; source/provider/asset changes or resolved identity |


## 11. Data Sources

The retained manufacturer and retailer sources document examples of this product family and the explicitly cited technical distinctions. They do not restrict eligibility to those brands/models or supply default numerical inventory for other configurations. Actual product and supplier evidence remains required under b_product_family.

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62127 | official_guidance | UNSD CPC3.0 explanatory note 62127, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62127 | Class2391 coffee/tea and2392 processed spices establish classification context only; this PCR is narrower |
| tea-board-storage | official_guidance | Tea Board India FAQ, How should we store tea at home?, https://teaboard.gov.in/TEABOARDCSM/NDQ%3D | Qualitative moisture/light/odour protection only; retail implementation is PCR design, no numeric limit or specific pouch validation |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapters6–7 and9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Unit-of-analysis/service and allocation hierarchy as general method context. The specific gates, formulas, partial module and collection duties are PCR design, not a claim of full standard conformity or mandated numeric values. |
