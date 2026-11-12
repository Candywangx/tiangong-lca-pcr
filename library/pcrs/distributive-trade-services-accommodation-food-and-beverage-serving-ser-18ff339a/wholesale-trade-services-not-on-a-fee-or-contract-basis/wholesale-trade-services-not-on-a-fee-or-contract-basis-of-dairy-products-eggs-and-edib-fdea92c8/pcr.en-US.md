---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-dairy-products-eggs-and-edib-fdea92c8
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account refrigerated wholesale of sealed pasteurized cow milk

## 1. Scope and Applicability

This PCR defines an additive physical wholesale service for manufacturer-released,sealed prepacked pasteurized cow drinking milk bought and resold on own account to business buyers. The wholesaler actually operates monitored refrigerated holding and dispatch; the commercial output is one accepted consignment with actual product/pack/lot/temperature/time qualifiers. Packages remain unopened during normal wholesale handling.

Exclude raw milk,fresh shell eggs,UHT/ambient-stable milk,other milk species,fermented/concentrated/dried dairy,milk manufacture/pasteurization/filling/repacking/reprocessing,retail,commission agency and purely financial transfer. Accidental leaks,reject segregation and actual loss disposal do not authorize a manufacturing/recovery route; intentional opening or reprocessing requires separate reviewed scope. Codex milk guidance supports product-specific cold-chain responsibility and manufacturer storage conditions without supplying a universal temperature or shelf-life/default-loss factor.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-dairy-products-eggs-and-edib-fdea92c8 |
| classification_refs | CPC3.0:61022; narrower service for sealed prepacked refrigerated pasteurized cow drinking milk |
| covered_products | Completed actual own-account B2B refrigerated wholesale consignment service for released unopened pasteurized cow milk |
| excluded_products | Raw milk and fresh shell eggs; UHT/ambient milk; other dairy products; manufacturing/filling/reprocessing; retail or fee agency |
| representative_product | One accepted contractual consignment with specified SKU/fat state,pack count,label volume,actual liquid mass and primary seal/lot/thermal conditions |
| production_route | Released chilled packed-product intake -> monitored operated refrigerated storage/stockrotation -> order handling and cold-chain dispatch -> B2Bacceptance; actual returns and loss routes |
| market_state | Accepted distribution service; milk remains sealed processed merchandise at declared handover state,not the service flow itself |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed refrigerated own-account sealed pasteurized cow-milk wholesale consignment service |
| How much | 1 Item(s) as one unique completed contractual consignment; no fixed package count,L,kg,tonne or margin conversion |
| How well | Actual manufacturer release,label/storage requirements,primary seal integrity,SKU/fat/lot and accepted time-temperature conditions documented; no PCR-guaranteed microbial or remaining-life outcome |
| How long or cycle | Actual receipt through storage/dispatch/buyer acceptance with relevant idle,defrost,cleanup,reporting cutoff and full-life asset periods |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed refrigerated own-account sealed pasteurized cow-milk wholesale consignment service |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | sealed_pasteurized_cow_drinking_milk; manufacturer_release_and_original_gate; SKU_fat_state_and_primary_pack; pack_count_and_label_volume_unit; measured_net_milk_mass_density_temperature; lot_date_and_shelf_life_conditions; intake_storage_transport_acceptance_times; actual_product_and_room_temperature_records; seal_integrity_and_quarantine_disposition; ownership_resale_business_buyer; unique_accepted_consignment; cold_room_carrier_provider_responsibility; additional_packing_and_reusable_crate_scope; reporting_period_and_loss_adjustment_link |

N>0 is the count of unique completed and accepted commercial consignments after actual reversals. Pack counts and net milk quantities describe the service stratum,not an automatic equivalence between different consignments. Quarantine,canceled orders,failed handovers or internal crate moves are not accepted reference outputs; their actual resources are retained in evidenced cohort/cross-period responsibility.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| ref_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Use the actual unique completed acceptance unit; output amount is 1 Item(s). Actual pack count is a separate merchandise ledger,not N. |
| milk_measurement | merchandise and actual losses | Volume and Mass | L; kg | Label fill volume is not measured liquid mass. Retain actual pack count,gross/tare/net contents,density with temperature/state/unit and source,plus lot-specific conversion and uncertainty. Do not assume1L=1kg or a universal package tare. |
| native_exchange | all inventory | actual native property | actual native unit | Preserve supplier/provider/container nativeunits and verify actual conversion. Already filled primary packaging is merchandise upstream; actual added secondary packing and reusablecrate lifecycle are separate responsibilities. |
| cold_fates | refrigerant and waste/release rows | Mass and actual composition | kg; actual unit | Separate named fluid supply,charge,recovery,contained waste,return and actual component release. Separate whole closedpack versus actual separated milk/pack/water streams; no duplicated total and parts or default residual leakage. |


## 5. System Boundary

The bounded preservation intervention accepts already released chilled sealed milk,operates monitored refrigeration and stock rotation under actual product conditions,and hands over unopened accepted merchandise within its declared cold-chain responsibility. It does not manufacture safer milk or reset shelf life. Actual excursions,seal failures,quarantine,returned lots and cleaning/defrost are traced to the owning lot/period.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Manufacturer-released pasteurized cow drinking milk already filled/sealed and chilled at a specified commodity gate,SKU/lot and state |
| starting_condition_role | Audited merchandise stock/throughflow including original primary packaging,not a consumed commodity-production exchange in this service |
| product_classification_scope | Refrigerated physical own-account service for sealed prepacked pasteurized cow drinking milk,a subset of CPC61022 |
| recursive_input_rule | An actual upstream distribution/cooling service must have disjoint contract scope and resources; never recurse through the same consignment or repeat carrier refrigeration |
| upstream_dataset_requirement | Compatible actual resource/provider/full-life asset/receiving treatment datasets; separate commodity baseline must match manufacturer-released pasteurized milk already filled/sealed in its actual primary package. A farm raw-milk dataset alone is incomplete: assemble any missing milk processing,pasteurization/filling and primary-packaging scopes exactly once. Match original-gate loss adjustment to that processed packaged state and actual package fate |
| disclosure | All reference qualifiers; source and acceptance gates; positive N; sealedpack stock/lot/density-temperature and losses; actual cold-chain owner; resource/provider/logistics/waste scope and commodity-loss integration |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all inventory | Exclude ALL traded-milk production and original filled primary-pack upstream burdens,including loss-embedded upstream burden,from this service add-on. Require separately quantified original-gate lost-commodity adjustment and saleable-commodity burden exactly once in the linked commodity system before whole-chain completeness; actual service loss handling/treatment remains inside. |  |
| boundary_cold | sealed_milk_distribution | Use actual manufacturer instructions,validated product-specific storage conditions and observed time/temperature/handling records for received and accepted sealed milk. No universal setpoint,shelf life or automatic legal/hygiene compliance claim is supplied by this PCR. | codex-milk-hygiene-2004 |
| boundary_contents | returns and losses | Do not open normal merchandise,record new primary filling or infer disposal from an expired/returned label. Actual return/quarantine/saleable downgrade/discard decisions need traceable receiver/gate; actual accidental separated contents and packing must not also count the same whole rejected pack. |  |
| boundary_owner | all physical responsibilities | Identify one owner for actual own/provider refrigeration,electricity,fuel,transport,asset manufacture/cleaning/maintenance/replacement/EOL and receiving treatment. Expand actual environmental water intake/outfall,chemical/refrigerant wastes and substance releases by real state/medium. Unknown actual scope blocks final data completeness. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sealed_milk_distribution | Operated cold preservation and own-account sealed-milk distribution | required | Actual released sealed pasteurized cow-milk ownership-resale and operated monitored refrigerated holding | One preservation responsibility from accepted released/chilled/sealed intake to documented B2Bcold-chain handover; batch mode picking/dispatch/cleaning,continuous shared refrigeration | `accepted_service` |

Do not create manufacturing,packaging or grading nodes merely from receipt inspections and order picking. Capture actual idle,defrost,returns and cleanup events while identifying each provider/resource owner. Conditional roles must be concretely expanded from actual SKU,fluid,substance,unit,receiver and scope evidence; missing actual environmental water or solid/chemical/fluid waste is not silently zero. A provider that entirely owns the actual cold intervention must disclose that complete upstream scope and avoid repeated direct refrigeration resources.

### Process: Operated cold preservation and own-account sealed-milk distribution (`sealed_milk_distribution`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Attributed measured electricity / N; cp_cold.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cold`

Range evidence need: Need actual room/product/ambient conditions,meters,occupancy and idle/defrost/changeover records with physical all-consumer driver; no universal kWh per pack or tonne.

###### Diesel for actually operated on-site milk handling plant (`diesel`)

Conditional actual on-site diesel fuel supply, separate from measured combustion; any transport refrigeration fuel needs an explicitly assigned owner and actual unit.

The fixed identity represents generic supplied diesel on a Mass/kg reference basis; actual grade, formulation, supplier and heating value remain recorded attributes, not presets. Retain the native litre record and actual compatible density with temperature/state, mass-per-volume unit and source for any final kg conversion; the catalogue defines no default density. Missing density leaves final volume-to-mass conversion incomplete, never zero or an assumed value. Supplied diesel is not burned diesel, transport service or a direct emission.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Volume / L
- Amount rule: Assigned diesel supplied / N; cp_fuel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`

Range evidence need: Need gross/tare/net receipts and native stocks,burn,returns,wastes and uncontained losses without inferring burn from missing quantity.

###### Actual liquid treated tap-water supply (`cleaning_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual metered attributable water / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need use,outlet and retention evidence,including any milk-contaminated cleanup state; wastewater volume is not pure water or a default milk loss.

###### Actual independently recorded synthetic detergent supply (`cleaning_products_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Attributed preparation supplied / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native quantity,active/carrier composition,actual dilution and unit/density/temperature source; no amount or emission inferred from a safety label.

###### Actual separately recorded polyethylene packaging film (`secondary_packing_pe_film`)

Only actual independently supplied polyethylene film used as additional service-owned wrapping or lining, verified by actual polymer/formulation and net film mass. This identity is generic production mix at plant; retain actual supply gate, provider and separately owned delivery burdens. It does not prescribe LDPE/HDPE grade, recycled content, film thickness or dose. PVC/PET/PP, multilayer composites, adhesive labels, filled packs and inherited merchandise packaging remain separate residual identities. Whole supply and components must not be counted twice; no occurrence is assumed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Attributed added packing supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual native Count/Area/Length/Mass unit,stock and return proof; expand native unit and make any mass view nonadditive, no assumed wrap per order.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed refrigerated own-account sealed pasteurized cow-milk wholesale consignment service (`accepted_service`)

Completed actual B2B ownership-resale consignment after cold-chain and seal/lot-condition acceptance. Commodity milk and already-filled primary packaging are audited merchandise,not this service flow identity.

- Selected flow: Completed refrigerated own-account sealed pasteurized cow-milk wholesale consignment service
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lots`

Range evidence need: One reference is a service normalization identity,not a package count,L,kg or price. Require unique accepted contractual consignment and actual SKU quantities/gate.

##### Waste flows

###### Discarded sealed pasteurized cow-milk pack (`sealed_rejects_atomic_case`)

Conditional on independently recorded actual Discarded sealed pasteurized cow-milk pack. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `sealed_rejects`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded sealed pasteurized cow-milk pack
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable whole sealed reject mass / N; cp_lots.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lots`

Range evidence need: Need actual disposition,pack count,gross/tare/net contents,label volume versus measured liquid mass/density/temp and separate original-gate lost-commodity linkage; do not treat an unopened pack as wastewater.

###### Discarded free pasteurized cow milk (`collected_milk_loss_atomic_case`)

Conditional on independently recorded actual Discarded free pasteurized cow milk. This card covers only that named physical state, with its own actual net quantity, retained contents and receiver gate. Other parts, fragments, free liquids, separate packing or cleanup carriers remain mandatory completion records under `collected_milk_loss`; do not shift the boundary, infer an event, use a stock deficit as discard, or count a retained component as another outlet. A genuinely co-collected mixture requires its own exact identity. Use the original native-unit amount protocol only for this exclusively identified case; reconcile every other actual fate separately.

- Selected flow: Discarded free pasteurized cow milk
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable collected liquid-milk waste / N; cp_loss.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loss`

Range evidence need: Need actual composition,milk mass/density/temp,cleaning-water mixing and receiver; do not equate total mixed liquid mass with original milk or repeat whole-pack waste.

###### Actual separately collected paper packaging waste (`packing_waste_paper_pack`)

Only actual independently discarded and separately collected paper packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual material,tare/contamination and receiver/recovery evidence; no automatic substitution credit or assumption that all received primary packs become warehouse waste.


###### Actual separately collected metal packaging waste (`packing_waste_metal_pack`)

Only actual independently discarded and separately collected metal packaging at this node, with its actual wet/as-collected composition, receiver and treatment/transport responsibility. A contaminated or co-collected mixed stream must use its own verified identity; its material components are non-additive audits. Returnable packaging still in use is not this waste; no composition, quantity, recycling or treatment is assumed.

- Selected flow: packaging waste (metal) `cdda6013-c0c5-4c72-990a-f5668fe71069`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual material,tare/contamination and receiver/recovery evidence; no automatic substitution credit or assumption that all received primary packs become warehouse waste.


###### Actual separately collected plastic packaging waste (`packing_waste_plastic_pack`)

Only actual independently discarded, separately collected empty plastic packaging with its actual composition, moisture and receiver. Retained merchandise, contaminated mixed packs, foam inside appliances, disposable wipes and composite packaging do not use this case. Components retained in a whole mixed stream are non-additive audits; retain actual transport/treatment ownership once. No emptying, recycling, occurrence or quantity is assumed.

- Selected flow: packaging waste (plastic) `919351c4-3e25-4092-9934-73ecec021a3b`
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual material,tare/contamination and receiver/recovery evidence; no automatic substitution credit or assumption that all received primary packs become warehouse waste.

##### Elementary flows

###### Actual separately evidenced fossil carbon dioxide emitted to air (`other_direct_species_co2_fossil_air`)

Actual records establish fossil origin, carbon dioxide substance and direct air release. Preserve the reported carbon/CO2 basis; any carbon-to-CO2 calculation requires its own supported stoichiometry and no inferred factor or occurrence. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or justified actual-activity species release / N; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Need substance/medium plus actual release or matched factor/composition/fate operands,units,bases and sources. Missing stock or milk mass is not inferred gaseous/aqueous emission.


###### Actual separately evidenced fossil methane emitted to air (`other_direct_species_methane_fossil_air`)

Actual records establish fossil origin, methane substance and direct air release. Biogenic or unknown-origin methane stays under the residual actual-species requirement and is never relabelled fossil. No leakage occurrence, gas fraction, quantity or emission factor is inferred. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or justified actual-activity species release / N; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Need substance/medium plus actual release or matched factor/composition/fate operands,units,bases and sources. Missing stock or milk mass is not inferred gaseous/aqueous emission.


###### Actual separately evidenced nitrous oxide emitted to air (`other_direct_species_nitrous_oxide_air`)

Actual records establish nitrous oxide substance and direct air release. Native quantity is mass of N2O, not nitrogen mass or molecular nitrogen; no emission factor or occurrence assumed. This is a direct actual node release, not purchased-electricity/upstream/provider-covered emissions. The UUID denotes air with no finer subcompartment; resolve a different applicable compartment/origin under the residual requirement rather than relabelling it. Missing data is not zero.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or justified actual-activity species release / N; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Need substance/medium plus actual release or matched factor/composition/fate operands,units,bases and sources. Missing stock or milk mass is not inferred gaseous/aqueous emission.

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_count | all inventory | Assign actual failure/quarantine/rejected-order,return-handling,idle/defrost and cleanup resources to their evidenced positive accepted cohort N or disclosed unfinished/cross-period responsibility; do not delete burdens where no accepted output yet exists. No currency/margin allocation as a physical service unit. |  |
| allocation_merchandise | milk stock and loss linkage | Reconcile pack counts,SKU/lot,status and compatible measured liquid/whole-pack quantities across opening,net receipts,buyer returns,closing,sales,supplier returns,quarantine release and discard. Quarantine movements are internal stocks,not a new receipt or accepted output. Quantify original-gate lost milk and associated primary-pack burden using actual unit,density-temperature/conversion basis/source and owner/already-included scope,then link it once outside this service. |  |
| allocation_supply | extra supplies and usable_extra_returns | For each actual native supply,S=attributed opening+external net receipts-closing including recovered closing; net receipts use actual gross/tare where applicable. Choose gross supply INPUT S with a separate matched usable outward-return OUTPUT,OR consumed-only INPUT S-return with the matched return exchange omitted. Do not subtract twice,call closing stock outward return or remove waste/spill upstream burden. |  |
| allocation_assets | shared_assets | Full-life asset equivalents equal cohort compatible use driver / complete lifetime driver across every consuming lot/site/period,then divided by N once. Include manufacture,cleaning/maintenance,replacement and EOL. Use observed lifetime or actual history plus evidenced remainder/termination,compatible driverunits,uncertainty/sensitivity/update. A lifecycle-complete per-driver provider is an alternative view,not another additive asset burden. |  |
| allocation_period | shared refrigeration and providers | Within each compatible meter/operation period allocate measured complete scope by cohort physical driver / all-consumer driver; include idle/defrost/door/cleanup and reconcile total scope across all cohorts. Carry unfinished stocks and replacements between periods once. |  |
| allocation_waste | actual loss and packing paths | Keep actual unopened compound reject,actual leaked milk,cleaning effluent and separated packaging mutually nonduplicative. Merchandise returns are not new service supply returns; no automatic waste/recycling/coproduct/avoided-production credit. Waste treatment boundary must match actual provider,including any transport coverage once. |  |


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_refrigerant | refrigerant_makeup; usable_refrigerant_return; refrigerant_waste; refrigerant_air | Assign actual initial factory charge and any fluid-production burden already inside complete equipment manufacture/provider dataset to one owner,not an additional repeated fluid input. Recovered fluid retained at closing is stock; actual usable external return is a separate Product outlet only with receiver/state proof; actual nonusable fluid goes to documented recovery/treatment Waste outlet. Apply gross supplied input plus separate matched usable return OR consumed-only input less that return with matched return exchange omitted. Retain nonreturned waste/release upstream burden and actual transport/treatment once; no automatic recycling/substitution credit. Consumed-only subtraction is permitted ONLY for a return matched to the same independently supplied operating-fluid inventory and its upstream burden scope. Recovered usable fluid originating in an initial factory/equipment charge already carried by an asset/provider dataset must NOT reduce unrelated operating make-up supply; record its actual outward Product transfer with no automatic credit and retain the asset-fluid burden owner. Close initial equipment charge,stored fluid,actual external receipts,internal recovery/transfers,final charge and retained stocks physically; recovery is an internal movement,not a new external receipt. Unknown/mixed origin requires evidenced provenance/apportionment before any supply subtraction,never a negative unrelated make-up input. |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | nonexchange commodity and service combination | Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lots | sealed_milk_distribution | accepted service,closed-pack stock and lost-commodity linkage | purchase/release/stock/temperature/inspection and sales records | site_id; node_id; period_id; consignment_id; supplier_id; buyer_id; SKU; milk_species; pasteurized_state; fat_state; primary_pack_type; batch_lot; manufacturer_release; original_gate; pack_count; labelled_volume; labelled_volume_unit; gross_pack_mass; packaging_tare; net_liquid_mass; mass_unit; density; density_unit; temperature; temperature_unit; density_basis; density_source; fill_or_conversion_factor; conversion_unit; conversion_basis; conversion_source; manufacture_date; expiry_date; manufacturer_storage_conditions; intake_time; acceptance_time; seal_integrity; excursion_id; quarantine_disposition; opening_packs; received_packs; buyer_return_packs; closing_packs; accepted_sold_packs; supplier_return_packs; downgraded_packs; discarded_packs; whole_reject_mass; commodity_dataset_id; upstream_reference_gate; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_state; loss_conversion_basis; loss_conversion_source; primary_pack_burden_owner; loss_burden_owner; already_included_scope; integration_result; receiver_id; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Count unique accepted B2Bconsignments; preserve actual sealedpack/SKU/temperature state and lotgenealogy,handle returns/quarantine by real disposition,and quantify separate original-gate milk-plus-primary-pack upstream loss adjustment without duplicate whole/part waste.  Keep original external commodity stock, source assignment/loss and missing-stage/additional upstream integration quantities in their evidenced RAW actual scope. Identify whether each amount is one actual consignment, a target service cohort, or ALREADY per reference,with source/target scope IDs and quantity basis. The physical source-cohort all-exit denominator assigns RAW quantity to that target scope; it is not automatically the target accepted-service N. Only when combining that same target-scope commodity amount with the 1 Item(s) service derive amount per reference = RAW assigned amount / positive unique accepted source_same_scope_N,with acceptance IDs/time/reversal evidence. A proved single-case scope has source_same_scope_N=1; an already-per-reference amount is not divided again. Preserve raw integration quantities and source links; do not shrink actual upstream remediation or divide the whole source cohort by an unrelated N. N0 responsibility remains disclosed without division. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | Item(s); packs; L; kg | each intake,acceptance,stock movement,return or reject | manufacturer-released receipt through B2Bacceptance and cutoffs | actual coldstore and handover points | per reference flow | Ownership/release/acceptance,traceability,scale/density/temperature evidence and quantified loss integration |
| cp_cold | sealed_milk_distribution | electricity and refrigeration service periods | meter/equipment/temperature and actual occupancy records | site_id; node_id; period_id; consignment_id; room_id; equipment_id; meter_id; start_reading; end_reading; energy_unit; product_temperature; room_temperature; ambient_temperature; temperature_unit; start_time; end_time; defrost_event; idle_event; door_event; cohort_driver; all_consumer_driver; driver_unit; attribution_share; driver_source; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual metered cold-room and handling operation; reconcile all consumers and idle/defrost/changeover periods with evidenced compatible physical driver rather than orderprice. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kWh | each meter/control interval and event | receipt,holding,dispatch plus attributable idle/cleanup | actual operated refrigerating/handling scope | per reference flow | Calibrated meters/loggers,driver closure and provider coverage |
| cp_fuel | sealed_milk_distribution | diesel input versus actual burn | tank/equipment and fuel fate records | site_id; node_id; period_id; consignment_id; fuel_id; equipment_id; native_unit; opening; gross_receipts; tare; net_receipts; closing_including_recovered; outward_usable_return; nonburned_waste; actual_uncontained_loss; actual_burn; burn_method; all_fates_complete; uncertainty; cohort_driver; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure native stocks/net receipts; use actual burn or complete audited disjoint fates,retaining waste,returns,closing and real loss separately; investigate unexplained deficits. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. Any litre-to-kg diesel conversion requires actual compatible density, temperature/state, mass-per-volume unit and source; no default conversion. | L | each receipt,use and cutoff | actual included handling periods | only actual assigned diesel equipment | per reference flow | Stock/receipt calibration and exhaustive fate/driver evidence |
| cp_water | sealed_milk_distribution | cleaning water and actual contained effluent | water meters,collection,composition and receiver records | site_id; node_id; period_id; consignment_id; event_id; liquid_origin; supplied_water; volume_unit; collected_effluent; defrost_water; retained_liquid; actual_evaporation; direct_abstraction; direct_outfall; receiving_medium; milk_fraction; chemical_composition; composition_basis; composition_source; density; density_unit; temperature; temperature_unit; receiver_id; treatment_gate; provider_overlap; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Separate actual supply,cleaning/defrost outlets and contamination; measure actual contained volumes and receiver. Actual direct water intake/outfall requires distinct source/medium exchanges and evidence,not balance residual. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | m3; actual sampling unit | each use,collection and transfer | actual attributed storage/cleaning periods | supply through contained treatment handoff | per reference flow | Meter/collection/sampling and receiver proof |
| cp_supplies | sealed_milk_distribution | added secondary packing,cleaner and usable returns | native SKU stock,receipt and return records | site_id; node_id; period_id; consignment_id; SKU; material; native_unit; opening; gross_receipts; tare; net_receipts; closing_including_recovered; outward_usable_return; waste; native_quantity; measured_mass; unit_mass; density; density_unit; temperature; temperature_unit; active_fraction; composition_basis; composition_source; dilution; conversion_factor; conversion_unit; conversion_source; representation; receiver_id; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure actual native added supplies and matching unused returns; preserve upstreamunit and verified conversion. Separate already-filled primary packaging and reusablecrate assets; do not record them again as new consumables. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual native unit | each supply,use,return and cutoff | actual added packing and cleanup periods | additional service consumables only | per reference flow | SKU/unit proof,stock/return matching and measured conversion |
| cp_refrigerant | sealed_milk_distribution | named fluid supply and actual component air releases | charge,recovery,stock,service and leak records | site_id; node_id; period_id; consignment_id; equipment_id; service_event_id; fluid_id; component_id; component_fraction; component_fraction_basis; composition_source; native_unit; opening_stock; gross_receipts; tare; net_receipts; closing_stock; initial_charge; final_charge; charged_amount; recovered_amount; contained_waste; external_return; measured_release; wholefluid_release; fate; fate_basis; fate_source; uncertainty; factor_complete; cohort_driver; all_consumer_driver; driver_unit; transfer_id; external_owner; fluid_usable_state; container_gross; container_tare; fluid_net; receiver_id; receiving_treatment_gate; treatment_dataset; transport_owner; initial_factory_charge_scope; upstream_fluid_production_owner; already_included_asset_or_provider_scope; supply_return_representation; fluid_origin_scope; initial_factory_charge_origin; matched_standalone_supply_id; matched_supply_inventory_scope; matched_return_quantity; unmatched_return_quantity; supply_origin_allocation_source; recovered_retained_stock; physical_fluid_ledger_closure; N | Use actual named-fluid stocks and equipment charge/recovery/service evidence; distinguish each fate and component fraction. Investigate unknown balances,never make top-up or a deficit automatically equal air release. | kg | each charge,service,recovery,leak and cutoff | whole assigned equipment periods | actual owned refrigeration scope | per reference flow | Service/weighing/mixture/fate proof and uncertainty |
| cp_provider | sealed_milk_distribution | complete contracted service jobs | physical completion,contract and resource-scope records | site_id; node_id; period_id; consignment_id; provider_id; job_id; actual_completion_gate; physical_quantity; native_unit; cold_scope; carrier_scope; treatment_scope; asset_scope; included_resources; excluded_resources; overlap_owner; cohort_driver; all_consumer_driver; driver_unit; N | Verify complete counted job and full lifecycle/resources. Alternative native provider units and actual physical completion require own concrete exchange/support; no laborhour or payment-to-Count substitution. | Item(s); actual provider unit | each actual completed job | contractual performance period | declared provider beginning/end gate | per reference flow | Completion record,native units and disjoint resource coverage |
| cp_assets | sealed_milk_distribution | refrigeration,warehouse and returnable crate full life | asset inventory,lifecycle and actual driver records | site_id; node_id; period_id; consignment_id; asset_id; asset_native_unit; manufacture_dataset; cleaning_maintenance_scope; replacement_events; end_of_life_scope; driver_id; cohort_driver; cohort_driver_unit; all_consumers; lifetime_driver; lifetime_driver_unit; observed_history_driver; observed_history_driver_unit; evidenced_remainder_driver; remainder_driver_unit; remainder_source; termination_state; uncertainty; sensitivity; update_evidence; provider_overlap; N | Include complete asset manufacture,maintenance/cleaning,replacements and EOL; allocate actual compatible service use across everyconsumer/period. Use observed lifetime or history plus evidenced remainder/termination,not assumed crate trips or depreciated zero. | Item(s); actual asset/service unit | each asset event/use period | observed history plus supported remaining life | all included shared coldstore/handling/crate assets | per reference flow | Lifecycle inventory,compatible use units,life/sensitivity/update and no provider overlap |
| cp_freight | sealed_milk_distribution | actually assigned carrier activity | load/route/temperature and scope records | site_id; node_id; period_id; consignment_id; transfer_id; transport_mode; gross_load; tare; net_load; mass_unit; distance; distance_unit; mass_factor; mass_factor_unit; mass_factor_source; distance_factor; distance_factor_unit; distance_factor_source; temperature_control_scope; empty_return_scope; cohort_driver; all_consumer_driver; driver_unit; attribution_share; provider_dataset; overlap_owner; N; load_id; leg_id; gross_basis; tare_basis; tare_source; packed_payload_scope; load_each_or_total; repeated_load_count; repeated_load_count_unit; repeated_load_count_source; that_record_share; that_record_share_basis; that_record_share_source; unique_leg_check | Match actual loads,distances and compatible conversion factors for uniquely owned legs. Include full carrier/refrigeration/empty-return coverage once; maintain actual handover temperature/time records.  Actualpackedpayload includes milk contents plus original primarypacks, actualsecondarypacking and crate/support cargo, without duplicate whole/parts. From vehiclegross subtractONLYvehicle/noncargo tare, not cargo packages; record gross/tare basis. Unique loadleg EACH repeats actualcount once/TOTALunchanged; sum actualpackedkg×actualkm×THATrecordshare with completeallconsumer evidence INSIDE SUM, then positiveFINALN once, alreadyattributed scope notallocated twice. | kg*km | each actual leg | explicit intake/outbound/resource/waste transport scope | unique owner per transport leg | per reference flow | Weighed load/route/factors and full carrier scope |
| cp_loss | sealed_milk_distribution | actual broken-pack liquid loss | incident,collection,contents and destination records | site_id; node_id; period_id; consignment_id; incident_id; source_pack_lot; breached_packs; collected_liquid_gross; container_tare; collected_liquid_net; mass_unit; milk_fraction; added_cleaning_water; primary_pack_status; density; density_unit; temperature; temperature_unit; composition_basis; composition_source; original_gate_quantity; original_gate_unit; conversion_factor; conversion_basis; conversion_source; whole_pack_waste_overlap; commodity_loss_link; receiver_id; treatment_gate; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | Measure actual leakage/collection and mixing. Retain separate contents,primary package and cleanup carrier amounts with original-gate linkage; no same wholepack added again after actual separation. Attribute only the individually identified physical case; retain other source-linked actual fates separately. Each native record belongs to exactly one exchange and any whole total is a non-additive audit. | kg; actual compatible liquid unit | each real breach/cleanup/handoff | actual incidents in attributed periods | incident collection to real treatment receiver | per reference flow | Incident,calibrated quantity/composition and whole/part nonduplication |
| cp_waste | sealed_milk_distribution | actual separated packing and cleanup solids | segregated measurement and receiving-treatment records | site_id; node_id; period_id; consignment_id; event_id; material; primary_or_added_pack; waste_quantity; native_unit; packaging_tare; milk_contamination; wet_state; whole_pack_waste_overlap; receiver_id; receiving_route; treatment_dataset; transport_owner; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Measure real separated materials/residues and actual receiver; preserve contamination and original primary-package upstream exclusion while counting actual waste operations once. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg; actual waste unit | each separation/collection/handoff | all attributed actual loss/cleanup periods | actual foreground waste exit/treatment boundary | per reference flow | Weights/material/state/receiver and no wholepack duplication |
| cp_emissions | sealed_milk_distribution | actual other direct species | measurement or matched actual-activity/factor evidence | site_id; node_id; period_id; consignment_id; event_id; substance; receiving_medium; measured_release; release_unit; actual_activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; composition; composition_basis; composition_source; fate; fate_basis; fate_source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Identify real substance and medium; use measured release or compatible actual-activity species factor/wholefluid composition and fate. Do not multiply a complete species factor twice or turn total milk,COD or inventory deficit into an emission. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | kg | each real source/release event | actual attributed operation/cleanup periods | direct actual sources,excluding embedded providers | per reference flow | Measurement or matched source/activity/basis and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_consignment | all inventory rows | Divide attributed physical exchange quantity by positive N once; accepted_service is 1 Item(s),not pack count or milk volume. | attributed quantity; N; linked collection protocol | exchange quantity per reference flow |  |
| period_driver | electricity; provider_jobs; freight; electricity_ac | For each compatible period multiply measured complete scope by cohort driver/all-consumer driver,then sum nonoverlapping periods and apply normalize_consignment. | period quantity; cohort driver; all-consumer driver; compatible units; scope ownership | attributed physical quantity |  |
| asset_driver | shared_assets | Use cohort compatible lifetime-use driver divided by complete lifetime driver as asset equivalents; apply normalize_consignment once. Never add equivalent complete per-driver provider scope for the same asset. | full asset lifecycle; cohort driver; lifetime driver and units; history; evidenced remainder; termination; cp_assets | attributed complete asset equivalents |  |
| stock_supply | diesel; cleaning_products; secondary_packing; usable_extra_returns; cleaning_products_synthetic_detergent; secondary_packing_pe_film | S=attributed opening+external net receipts-closing including recovered closing. Gross INPUT S and separate matched unused return OUTPUT OR consumed-only INPUT S-return omitting that return exchange. Actual fuel burn,waste and uncontained loss remain distinct fates. | opening; gross and tare receipts; net receipts; closing; matched usable return; representation; actual burn; cp_fuel; cp_supplies | nonduplicated supply/return quantities |  |
| milk_loss_link | sealed_rejects; collected_milk_loss; collected_milk_loss_atomic_case; sealed_rejects_atomic_case | Use SKU/lot/pack genealogy and actual contents/primary-pack disposition to quantify excluded upstream original-gate lost commodity amount and burden in linked commodity chain. Match actual units,liquid netmass/density-temperature and conversion evidence/owner; never infer original milk from total cleaning liquid or duplicate wholepack/parts. | actual source lot; original gate and dataset; pack count; label volume; actual liquid mass/density/temp; primary pack status; conversion basis/source; loss owner and already-included scope; integration result; cp_lots; cp_loss | quantified separate original-gate milk/primary-pack loss adjustment |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all actual exchanges | Verify exact flow,property/unit group,state/medium and gate before final exchange use; keep unresolved actual configuration and support gaps explicit. | Full detail/support/compatibility proof |
| quality_cold | sealed_milk_distribution | Actual release,seals,manufacturer conditions,time-temperature excursions and quarantine/acceptance disposition must be traceable; no shelf-life reset or guaranteed safety from a PCR pass. | Lot/label/logger/decision records |
| quality_quantities | milk and losses | Label volume,actual liquid mass,density-temperature,pack count,primary tare and cleaning-water mixture stay distinct with measured source evidence. | Weighing/composition/conversion and stock reconciliation |
| quality_resources | all actual resources | Verify own/provider/transport/coldchain,full-asset life and actual environmental/waste scope once; investigate gaps rather than assumed zeros. | Coverage/period/driver/receiver/lifetime records |
| quality_chain | full commodity chain | Quantify saleable and lost commodity upstream including original primary packaging once outside this add-on before complete-chain use. | Original-gate conversion and actual integrated scope evidence |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `electricity` under `cp_cold`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_cold`; actual source-linked native records |
| cleaning_water | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_water` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| cleaning_products | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_products` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| secondary_packing | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `secondary_packing` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| refrigerant_makeup | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `refrigerant_makeup` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| provider_jobs | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `provider_jobs` under `cp_provider`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_provider`; actual source-linked native records |
| shared_assets | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| freight | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `freight` under `cp_freight`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_freight`; actual source-linked native records |
| usable_extra_returns | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_extra_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| usable_refrigerant_return | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `usable_refrigerant_return` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| sealed_rejects | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `sealed_rejects` under `cp_lots`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `sealed_rejects_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_lots`; actual source-linked native records |
| collected_milk_loss | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `collected_milk_loss` under `cp_loss`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. The named case `collected_milk_loss_atomic_case` covers only its exclusive physical state; other actual fates remain mandatory. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_loss`; actual source-linked native records |
| packing_waste | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `packing_waste` under `cp_waste`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_waste`; actual source-linked native records |
| cleaning_effluent | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `cleaning_effluent` under `cp_water`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_water`; actual source-linked native records |
| refrigerant_waste | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `refrigerant_waste` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| refrigerant_air | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `refrigerant_air` under `cp_refrigerant`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_refrigerant`; actual source-linked native records |
| other_direct_species | sealed_milk_distribution | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `other_direct_species` under `cp_emissions`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_emissions`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### electricity

Include actual cold-room compressors/fans/defrost,lighting and handling meters, with their consumer periods; do not repeat carrier/provider-embedded electricity.

Residual inventory requirement after the independently identified cases `electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Purchased electricity for operated milk cold-chain equipment
- Flow property / unit: Energy / kWh
- Amount rule: Attributed measured electricity / N; cp_cold.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_cold`

Range evidence need: Need actual room/product/ambient conditions,meters,occupancy and idle/defrost/changeover records with physical all-consumer driver; no universal kWh per pack or tonne.

#### cleaning_water

Record actual premises/container cleaning, not processing or diluting the milk; no water enters unopened merchandise in normal service. Actual environmental water requires a source-specific input.

Residual inventory requirement after the independently identified cases `cleaning_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Purchased water used in actual cold-store cleaning
- Flow property / unit: Volume / m3
- Amount rule: Actual metered attributable water / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need use,outlet and retention evidence,including any milk-contaminated cleanup state; wastewater volume is not pure water or a default milk loss.

#### cleaning_products

Actual SKU/formulation for floors/equipment, not a prescribed food-contact chemical or milk ingredient. Native volume/count supplies require own exchanges or evidenced conversion.

Residual inventory requirement after the independently identified cases `cleaning_products_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual cold-store cleaning preparations supplied
- Flow property / unit: Mass / kg
- Amount rule: Attributed preparation supplied / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need native quantity,active/carrier composition,actual dilution and unit/density/temperature source; no amount or emission inferred from a safety label.

#### secondary_packing

Only additional wraps/liners/labels/cartons actually supplied by the wholesaler. The prefilled bottle/carton and primary closure already belong to the merchandise upstream chain, not a new packing input for each resale.

Residual inventory requirement after the independently identified cases `secondary_packing_pe_film`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual added secondary packing materials
- Flow property / unit: Mass / kg
- Amount rule: Attributed added packing supply / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need actual native Count/Area/Length/Mass unit,stock and return proof; expand native unit and make any mass view nonadditive, no assumed wrap per order.

#### refrigerant_makeup

Record actual supplied fluid and composition separately from equipment charge,recovery,waste and release. No refrigerant type or make-up-to-emission equivalence is assumed.

- Identity requirement: Actual purchased refrigerant make-up by named fluid
- Flow property / unit: Mass / kg
- Amount rule: Attributed supplied refrigerant mass / N; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need mixture identity,component fractions/bases,service stocks and actual charging/recovery/fates with units; unresolved imbalance is investigated, not atmospheric loss by default.

#### provider_jobs

Use a completed physically defined counted job only when full resource scope is documented. Providers sold by pallet-day,hour,mass,energy or freight require actual native-unit exchanges/support.

- Identity requirement: Complete counted contracted distribution-support jobs
- Flow property / unit: Count / Item(s)
- Amount rule: Assigned completed provider job quantity / N; cp_provider.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_provider`

Range evidence need: Need completion gate,resource/asset/temperature/treatment scope and overlap owner; payment is not physical completion and time is not Count.

#### shared_assets

Include actual refrigeration/warehouse/handling/monitoring assets and reusable crates with manufacture,cleaning/maintenance,replacements and end-of-life across all users and periods.

- Identity requirement: Complete-life equivalents of cold-store and reusable crate assets
- Flow property / unit: Count / Item(s)
- Amount rule: Assigned complete asset equivalents / N; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Need actual compatible lifetime driver,observed history and supported remainder/termination; crate trips are service use,not new crate manufacture every trip.

#### freight

Actual relevant load/route legs with unique commodity/carrier/service owner,including refrigeration and empty returns where covered. Use complete carrier scope or direct resources once.

- Identity requirement: Assigned actual refrigerated and other freight activity
- Flow property / unit: Mass * distance / kg*km
- Amount rule: Attributed actual kg*km / N; cp_freight.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_freight`

Range evidence need: Need actual loads/tare,distances,factors/units/sources and any allocation shares plus all-consumer drivers; record cold-chain handover and temperature-control responsibility.

#### usable_extra_returns

Only matched actual unused secondary packing/cleaning supplies returned to external ownership. Merchandise returns,reusable crate circulation and closing stocks have separate ledgers.

- Identity requirement: Unused added service supplies returned outward
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable outward usable supply return / N; cp_supplies.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Need original supply identity/native quantity,state and receiver,with either gross input/separate return output or consumed-only input omitting matched return exchange.

#### usable_refrigerant_return

Only measured actual usable fluid crossing outward to a documented owner/gate. Fluid recovered and retained as closing stock is not an outward export; do not assume recovered fluid is usable without state/receiver evidence. Its original charge/supply provenance must be identified; an asset-carried initial charge is not a reduction of operating make-up.

- Identity requirement: Usable refrigerant actually returned to an external owner
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable actual usable fluid outward / N; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Require matched fluid/composition/native mass,transfer/receiver and original supply ownership. Apply gross supply input with separate usable-return output OR consumed-only supply omitting that matched return exchange; no second subtraction or automatic substitution credit. Consumed-only subtraction needs matched same-scope standalone supply inventory; other provenance,including asset initial charge,remains a Product transfer without automatic credit or unrelated input subtraction. Recovered retained fluid is internal stock,not new receipt.

#### sealed_rejects

Only actual documented waste disposition,not automatic classification of every expired,quarantined or returned unit. Record compound milk-plus-pack mass/state and receiver; if separated into contents/pack wastes,do not also count whole units.

- Identity requirement: Actual unopened milk-pack rejects sent to a verified waste receiver
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable whole sealed reject mass / N; cp_lots.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_lots`

Range evidence need: Need actual disposition,pack count,gross/tare/net contents,label volume versus measured liquid mass/density/temp and separate original-gate lost-commodity linkage; do not treat an unopened pack as wastewater.

#### collected_milk_loss

Only actual accidental breach/leak collected as milk-containing liquid. Unopened normal service does not imply intentional decanting,reprocessing or a wastewater discharge.

- Identity requirement: Actually contained leaked milk sent as liquid waste
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable collected liquid-milk waste / N; cp_loss.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loss`

Range evidence need: Need actual composition,milk mass/density/temp,cleaning-water mixing and receiver; do not equate total mixed liquid mass with original milk or repeat whole-pack waste.

#### packing_waste

Only packing physically separated in actual loss handling or added packing used here. Original primary packaging production remains outside this service; actual waste handling remains inside,with whole-pack nonduplication.

Residual inventory requirement after the independently identified cases `packing_waste_paper_pack`; `packing_waste_metal_pack`; `packing_waste_plastic_pack`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual separated primary or secondary packing waste
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable separated packing waste / N; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

Range evidence need: Need actual material,tare/contamination and receiver/recovery evidence; no automatic substitution credit or assumption that all received primary packs become warehouse waste.

#### cleaning_effluent

Actual collected cleaning/defrost liquid with separately recorded milk/chemical contamination. Direct environmental discharge needs actual receiving water and substance exchanges,not this contained-waste proxy.

- Identity requirement: Actual contained cleaning effluent to treatment
- Flow property / unit: Volume / m3
- Amount rule: Metered or measured attributable contained effluent / N; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`

Range evidence need: Need origin,actual volume/composition/density/temp,containment and treatment boundary; no drain equals pure milk or automatic emission species.

#### refrigerant_waste

Actual nonusable fluid removed to a verified receiving recovery/treatment operation,distinct from usable return,retained recovered stock and atmospheric components. Do not label every recovery as Waste or as emitted.

- Identity requirement: Actual contained waste refrigerant at treatment or recovery handoff
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable contained waste fluid / N; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Require actual fluid/mixture composition,container tare,net fluid,transfer and receiver/treatment gate with complete transport/resource coverage once. Retain nonreturned upstream fluid-production burden and actual receiving recovery/disposal treatment without automatic credit.

#### refrigerant_air

Expand actual component mass and receiving air identity. Recovery,remaining equipment charge,contained fluid waste and external returns are separate fates; make-up alone does not prove release.

- Identity requirement: Actual identified refrigerant components released to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or audited actual component air release / N; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`

Range evidence need: Need charge/stock/recovery/fate reconciliation and mixture fraction basis/source,uncertainty and investigated discrepancies; complete species factor is not multiplied twice.

#### other_direct_species

Conditional actual combustion,chemical spill,water or other non-refrigerant substance release,with actual medium. Milk/COD/total cleaner is not a default elementary species; actual direct water paths need dedicated exchanges.

Residual inventory requirement after the independently identified cases `other_direct_species_co2_fossil_air`; `other_direct_species_methane_fossil_air`; `other_direct_species_nitrous_oxide_air`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Other actual identified substances released to a declared medium
- Flow property / unit: Mass / kg
- Amount rule: Measured or justified actual-activity species release / N; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`

Range evidence need: Need substance/medium plus actual release or matched factor/composition/fate operands,units,bases and sources. Missing stock or milk mass is not inferred gaseous/aqueous emission.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_service | Require unique positive actual B2Bacceptance and reference qualifiers; pack,line,pallet or canceled/quarantined order is not automatically a completed consignment. |  |
| validate_state | sealed_milk_distribution | Confirm released pasteurized cow drinking milk,unopened primary seals,actual manufacturer conditions and observed cold-chain/lot/time gate. Reject rawmilk,UHTambient,reprocessing or generic other dairy substitution. | codex-milk-hygiene-2004 |
| validate_units | all inventory | Preserve actual supplier/provider units and compatible conversions,N and support; no1L=1kg,nominalpack=measuredmilk,margin=Count or energy-property substitute. |  |
| validate_fates | stock and losses | Returns/quarantine are actual lot states; sealedpack waste,actual separated milk/pack and contaminated cleaning water require exclusive quantities/receiver proof. No mass deficit or top-up alone proves emissions. |  |
| validate_resources | shared assets and providers | Full-life manufacture,cleaning/maintenance,replacement/EOL and compatible drivers/history/remainder/termination must be evidenced; close all-consumer meter/period totals and scope ownership. |  |
| validate_release | actual fluid/species exchanges | Require actual named refrigerant/substance,medium,activity/factor/composition/fate units,bases and sources,with uncertainty/unknowns disclosed. Complete species factors not multiplied by component/fate again. |  |
| validate_chain | commodity and service integration | No traded milk or original filled-pack production inside this add-on; quantify original-gate lost and saleable burden outside it exactly once with density-temperature/pack basis and disjoint transport/treatment before whole-chain completeness. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset when concrete exchange identities and actual evidence are complete |
| downstream_use | Additive physical wholesale service to a compatible sealed pasteurized cow-milk commodity chain,with declared completed-consignment stratum |
| allowed_use | Declared refrigerated own-account B2Broute and actual SKU,pack,mass/volume,state,time/gate and period conditions |
| excluded_use | Full milk footprint alone; rawmilk,UHTambient,other dairy,manufacturing/pasteurization/filling/retail/agency; monetary margin; package/L/kg equivalence without evidence |
| required_metadata | All reference qualifiers; actual original commodity/acceptance gates; positive N; lot/seal/thermal records; native units/pack-density state; actual provider/cold/logistics/waste/assetlife scope; loss linkage |
| required_quality_disclosure | Unresolved identities/support and actual-config expansions; measurement/conversion/factor/Range limits; cold-chain excursions; resource/provider/assetlife coverage; commodity loss integration and uncertainty |
| update_trigger | Changed SKU/fat/pack/thermal conditions,actual cold equipment or fluid,asset lifetime/use,provider/transport/treatment scope,loss basis/conversion,reference acceptance or source evidence |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale-2025 | official_guidance | UNSD. CPC3.0 explanatory notes,division61; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Own-account processed-milk wholesale classification only; rawmilk/fresh shell eggs are not this61022product subset. |
| codex-milk-hygiene-2004 | official_guidance | Codex. Code of Hygienic Practice for Milk and Milk Products,CAC/RCP57-2004,amendment2009,sections2.4,5.2.1.2–3,8.1–2; https://www.fao.org/input/download/standards/10087/CXP_057e.pdf | Distributor responsibility,product-specific finished refrigerated milk time/temperature and manufacturer-condition/transport control questions; not a local-law guarantee,universal numeric cold threshold,shelf-life or LCA emission factor. |
