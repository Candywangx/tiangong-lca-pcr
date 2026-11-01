---
pcr_id: pcr.own-account-wholesale-of-physically-delivered-metered-electricity
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Own-account wholesale of physically delivered metered electricity

## 1. Scope and Applicability

Actual own-account B2B wholesale commercial service for PHYSICALLY DELIVERED METERED ELECTRICITY, bounded to merchantcommercial delivery administration/physicalmeterdata verification/acceptance and attributable office-ICT-meter support. Exclude paper-only financialtrades, electricitygeneration/storage, merchant-operated networks/dispatchplant/consumeruse and unrelated retail/feeagency unless newactualroute reviewed. Electricity storage exists; exclusion is this method boundary, not a claim electricity cannot be stored. No warehouse/truck/pallet/freight cargo or artificial tradedenergystock.

One deliveryunit is an actual source-defined FINAL acceptancecase for ONE businessbuyer, a disjoint physicalmeterpointgroup and a commercially evidenced nonoverlapping deliverywindow. Keep case definition fixed by real physicalcommercialdelivery evidence before normalization; not arbitrary interval/contract/invoice/position/settlementrow. One case may span many meterrows/versions; an interval is not automatically one case. Each point-direction-time segment belongs once across cases. Validate positive actualphysicaldelivery and buyerFINAL acceptance afterownershippurchase/resale/reversals. Revisions/reruns replace previous evidence for samecase, notnewdelivery; incomplete/reversed/cancelled cases retain resources outside N, no divisionN0.

Tradedenergy remains NONEXCHANGE directionalphysical-terminal audit, not consumed officeelectricity or serviceoutputkWh. Matched actualsourcegate/generation-gridstages/networkloss responsibility and sourceassigned/baseline/additional demand are outside service once. Missingstages/requiredadditional demand must ACTUALLY complete outsideintegration with nativeqty/status/link/timezone/source/owner/stage-losscoverage beforechainready. Contracts/certificates do not uniquely identify electrons, source mix or losses. Actualoffice/ICT/meter-data resources/fullassets/providercoverage remain inside once; sourcegeneration or networkloss is not automatic merchantdirectemission.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-wholesale-of-physically-delivered-metered-electricity |
| classification_refs | CPC3 61097 only171/17100, narrower physicallydeliveredmetered B2B commercialunit service |
| covered_products | Actualowned-purchased-resold physicallydeliveredmeteredelectricity FINALcommercialunit B2Bwholesale service |
| excluded_products | Paper-onlyfinancialtrade/generation/storage/merchantnetworkoperation/consumeruse/retail-feeagency; warehousecargo-stock method |
| representative_product | Actualbuyer/acceptancecase/disjointpointgroup/nonoverlapwindow/physicalmeterquantity-direction-nativeversions/ownership-resale/FINALgate |
| production_route | Actualsourced deliveredenergy physicalmeterproof -> merchantcommercialdelivery verification/dataresources -> FINAL B2Bacceptancecase |
| market_state | Counted actualphysicalcommercialdeliveryunit; tradedkWh directional nonexchangeledger, actualownfacilitysupport separate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed own-account metered physical-electricity commercial delivery unit |
| How much | 1 Item(s) |
| How well | Actualexclusivecase physicalmetered deliverydirection-quantity-version/FINALbusinessacceptance sourced, no contractvalue/electronidentity/reliability guarantee |
| How long or cycle | Actualcommercialwindow/verification-FINAL/revisioncutoff source, reportingperiods/fullassetphases; N0resources retained |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | Completed own-account metered physical-electricity commercial delivery unit |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | physical_delivery_case_id; merchant_purchase_ownership_resale; one_actual_B2B_buyer; commercial_case_definition_source; disjoint_meterpoint_group; nonoverlap_delivery_window; point_direction_segment_case_mapping; actual_physical_positive_delivery_evidence; meter_register_interval_native_units; timezone_UTCoffset_DST_duration_source; multiplier_transformer_alreadyapplied_scope; actual_estimated_revision_provenance; FINAL_acceptance_source_reversals; generation_grid_gate_networkloss_coverage_owner; complete_all_physical_terminal_assignment; completed_baseline_additional_integration_owner |


## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_case | reference | Count for actualFINALcase | Item(s) | Case definition requires actualbuyer, disjointpoint-direction-time mapping and sourced nonoverlapcommercialwindow/physicaldelivery/FINALgate. Do not assume everyinterval/contract/invoice onecase, duplicate revisions/reruns or count paper-onlypositions. Positivephysicalquantity/evidence compatible with final acceptance, estimates/unknownproof not automaticactualdelivery. | elexon-physical-trading-context |
| directional_meter | nonexchangeenergy | Electrical energy; actualregister/interval nativeproperty | Native energyunit and dimensioned conversion to kWh ifused | Recordpoint/import-export direction/registervsinterval/startend/rollover-reset/multiplier-transformer alreadyapplied/quality-estimate/revision/calibration. Select compatible latest-valid mutuallyexclusive readings; no duplicate oldrevisions, no netaway separate directions or doublemultiplier. UTCoffset/timezone/DST actualduration from timestamps, no fixedGBinterval default. | elexon-metering-context |
| power_time | conditionalnonexchangeconversion | Actual averagepower×actualtime -> electricalenergy | Native power/time/energy with dimensioned factorunit | Only trueinterval-average power: E=P_average*actual_duration*power_time_energy_factor. Preserve actualaveragingpopulation, actualduration UTC/DST unit-source and native factorunits/source; instantaneous/nameplatepower or assumedperiod not energydelivery. Metered energy alreadyintegrated not multiplied byduration again. |  |
| source_service | resource/sourceunits | Each actual energy/nativephysicaldriver; Count service denominator | Actual source/delivered/ownconsumption nativeenergy units, serviceItem(s) | All quantities requirepoint-role/gate/time/boundary/version/coverage. Tradedenergy nonexchange; actualownfacility electricinput distinct. Source/gridloss factor only applicableevidenced native definition/direction/coverage, no fuel-specific NCV/GCV factor substitute, mix/impact/price default or contractcertificate-as-electronidentity. Verified electricity using an ILCD reference property named Net calorific value is allowed on its independently confirmed electrical-energy basis and unit group; the label does not authorize fuel heating-value factors. | elexon-settlement-context |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actualowned-resold electricity physicallydelivered at declaredmeterpoint-direction-window/gate with actualcommercialcase and validmeter evidence |
| starting_condition_role | Nonexchange physicalenergy-throughflow audit; merchantcommercialdelivery/data-verification service, not generation/storage/networkoperation |
| product_classification_scope | Narrower61097/17100 physicalmetered B2Bdeliveryservice only; no paper-onlyposition/retail/feeagency |
| recursive_input_rule | Tradedsource/delivered/export/otherphysicalterminal energy remains nonexchange; no repeated wholesaleexchange, fictitiouswarehouseclosingstock or contractcancellation as electricalreturn. Ownfacilityelectricity measured separately as serviceinput. |
| upstream_dataset_requirement | Matchedactualsource/generation-gridstage/deliverygate/networkloss responsibility outsideonce. Directtrace OR positivecompletecompatibleallphysicalterminaldrivers with actualnative quantities/versions/exclusiveowners and identicalbaseline stage-lossscope. Contracts/certificates not uniqueelectron-generationmix proof. Missingactualstages/requiredadditionalenergy ACTUALLY completedoutsideintegration nativeqty-status-link-timezone-source-owner-stage-losscoverage beforechainready, pendingplan insufficient. |
| disclosure | Actualdeliverycase/buyer/disjointpointgroup/nonoverlapwindow/physicalproof/FINALreversals, importexport/registerinterval/multiplier/quality-revision/timezoneDST/nativeunits, sourcegate-gridloss-baselinecompletedintegration and ownfacility-ICT-meter/provider/fullasset/waste owners/unknowns |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_not_financial | metered_electricity_wholesale | Actualphysicaldelivery plus ownershipresale/FINALB2Bgate establishes case; settlementrevision replacesproof notnewphysicaldelivery. Contractimbalance not gridloss or servicedirectemission. | elexon-physical-trading-context; elexon-settlement-context |
| source_limits | method | Elexon is GBqualitative physical-versus-contract/meterreconciliation context only. No halfhour/gateclosure/timeline/legalrole/loss-mix defaults, reject cannotstore simplification. | elexon-physical-trading-context; elexon-metering-context |
| separate_owners | resourceinterface | Generation-gridassets/losses outside matchedtradedenergy once; actualoffice-ICT-meter assets/support inside once, provider-covered notduplicated. No warehouse/truck/pallet/stock or tradedenergy automaticdirectemission. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| metered_electricity_wholesale | Metered physical-electricity commercial delivery service | required | Actualphysicallymetered electricity owned-resold FINALB2Bcase | Commercialcase/physicalmeterproof verification, officeICT-data support/FINALacceptance, not generation/networkoperation | `accepted_service` |

Continuousmeter-data duties overlap commercialcases/reportingperiods. Link actual reads/validation/communications/aggregation/review/revision/dispute/invaliddata/rerun/cancelled/failed/pending/FINAL events to cases/pointwindows/reportingperiods. Actual repeatedverification consumesresources but not newdelivery; unverifiedphysical cases outsideN, superseded versions notduplicated, realreverse electricalflow separately directional not contractreversal. No physicalreturn-to-warehouse/reprocessing fiction, unknown notzero. N0resources retain evidencedperiodcohort without division/drop; positiveFINALNonce.

### Process: Metered physical-electricity commercial delivery service (`metered_electricity_wholesale`)

#### Inputs

##### Product flows

###### Actual alternating-current electricity at point of use (`service_electricity_ac`)

Only actual alternating-current electricity crossing this node boundary and not already inside a complete provider. The identity leaves provider, voltage, generation mix and delivery-loss allocation unspecified; collect them where required. Its ILCD reference property is named Net calorific value but the verified electricity flow defines an electrical-energy basis of 1 MJ; native kWh uses exactly 3.6 MJ per kWh, never a fuel heating-value factor. Direct-current or another unmatched electricity state stays in the residual requirement.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively assigned physical quantity / N under cp_operations
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_operations`

Range evidence need: Actual own-consumptionmeter/submeter or evidenced completealluser allocation, nativeinterval/pointrole/providercoverage; totaltradedenergy/invoice not officeuse.

###### Actual liquid treated tap-water supply (`facility_water_liquid_tap`)

Applicable only when the actual source is treated tap water supplied for the declared use. Preserve actual supplier, quality, temperature/state and provider boundary; do not assume that every water supply is tap water. Ice, bottled/mineral/reclaimed/untreated water and direct environmental withdrawal stay in their actual separate identities. Keep the parent native mass or volume basis. For any final mass-reference conversion, require actual compatible density/state evidence; the catalogue secondary-volume relationship is not a default site density.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actualsource/purpose/nativevolume/period and independent fates; supplynotwastewater, no water per tradedkWh.

###### Actual independently recorded synthetic detergent supply (`office_consumables_synthetic_detergent`)

Only actual synthetic surfactant detergent identified by product/formulation, supplied state and use records. Measure net supplied material excluding package tare; retain concentrate/dilution-water distinctions and never count whole formulation and components additively. Soap, disinfectants, wipes, filters and other materials remain under their separate actual identities; no cleaning recipe, dose or occurrence is assumed.

- Selected flow: Detergent `1c57d123-df57-49ab-b9d4-957403beb8a5`
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: NETactualmaterial stock/use/return/provenance and actualcleanup; no material per contract/settlementrow or networkmaintenance default.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed own-account metered physical-electricity commercial delivery unit (`accepted_service`)

One actual FINAL accepted physicalcommercial deliverycase: one B2Bbuyer, disjointmeterpointgroup and commercially evidenced nonoverlapdeliverywindow. Actualphysicalmeterproof/ownership-resale/FINALreversals required; not kWh/meterrow/contract/invoice/tradeposition/rerun.

- Selected flow: Completed own-account metered physical-electricity commercial delivery unit
- Flow property / unit: Count / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_deliveryunit`

Range evidence need: Actualpredefined acceptancecase/pointperiod mapping/deliverydirection/positivephysicalquantity/versionedproof/buyerFINALsource. Do not automatically define eachinterval1case or retrospectively split for lower impacts.

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| case_resources | service | Directactualcase-task trace OR physicalquantity×compatible target_driver/positive COMPLETE all_consumer_driver, each native6metadata, everyclient/case/period/idle/rerun/invalid-failed-pending duty. PositiveuniqueFINALN only actualexclusivephysicalacceptedcases afterreversals; assignedtotal/N once, N0retained. kWh/contract/invoice/settlementrow not defaultcase/resource driver. |  |
| physical_source_assignment | nonexchangeenergy | Directactual measured/validatedphysicalsource assignment with nativeqty-state-gate-time-version/directevidence/exclusive links OR source_energy×target_physical_driver/all_physical_terminal_driver. Positive COMPLETE compatible physicalterminal set at declaredcommonboundary includes actual accepted/provisional-unaccepted/otherbuyer deliveries, actualexports/otheroutflows and independently evidenced networkloss/use only when inside that samephysicalbalance; allrecords ownnativeqty/unit/basis/method/state/time/source/link/owner. No financialpositions/certificates/accepted-only denominator/inventedclosingstock/direct-driveroverlay. Unknownimbalance not loss. Actualsource-gridloss baseline/demand owners matched then requiredadditional/missingstages ACTUALLY outsideintegratedonce completedstatus/nativeqty/link-timezone-source-owner-coverage beforechainready. |  |
| fullasset | assets/providers | Complete actualofficeICT/meter-outstation/datacomms responsibility assets manufacture-maintenance-realreplacement-EOL allusersperiods; actual used_driver/positive COMPLETE lifetime_driver compatible native6metadata, observed_driver+sourced remaining_driver/termination/uncertainty/sensitivity/update. Oneasset-equivalent OR lifecyclecompleteprovider/N once, not generator/network lifetime imported. |  |
| supplies_fates | actualmaterials | Only actualoffice/maintenance materials S=assignedopening+NETactualmaterialreceipts-closinginclretainedrecovery, receipts excludecontainertare. Choose exactly one: (1) gross S/N INPUT with actual matched unused external return/N as separate OUTPUT; (2) consumed-only (S-return)/N INPUT and OMIT that matched return OUTPUT. Do not add return to input or deduct twice; internalrecoveryclosing. This stockformula never applies tradedenergy. Actualspentconsumables/retiredequipment/mixedcarrier-absorbedfluid-fragments/freewastewater/directwater-species nonadditive, receivertransporttreatment once afterasset/providercoverage, no negativecredit. |  |
| physical_energy_link_scope | nonexchange energy interface | Keep actual directional source/terminal energy and completed outside stage-demand integration at recorded raw quantities, with point-group, direction, window and valid-version scope. Declare source_assignment_scope_id, target_delivery_case_ids/target_case_group_id and source_assignment_quantity_basis: single_case, target_case_group_total or already_per_reference. Only a raw assigned target-case-group total uses source_energy_link_per_service=assigned_source_energy_raw/same_target_case_N when positive N covers EXACTLY those assigned cases after reversals; link this once to 1 accepted_service in compatible energy/state/gate units. A single case N=1 or already-per-reference energy is not divided again. Do not scale actual outside integration by service N or use whole-source-market N for a narrower target group. No opening/closing warehouse stock or material-return formula applies to traded electricity. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_deliveryunit | metered_electricity_wholesale | Commercial physicaldelivery case and FINAL denominator | Acceptance event | physical_delivery_case_id; merchant_id; purchase_evidence; ownership_evidence; resale_evidence; business_buyer_id; case_definition_source; case_definition_time; case_definition_timezone; disjoint_meterpoint_group; delivery_window_start; delivery_window_end; delivery_window_timezone; UTC_offset; DST_resolution; segment_case_mapping; segment_overlap_check; physical_delivery_evidence; FINAL_gate; FINAL_time; FINAL_timezone; FINAL_source; acceptance_status; reversal_ids; reversal_source; revision_case_links; cutoff_time; cutoff_timezone; cutoff_source; unique_FINAL_ids; failed_pending_cancelled_ids; resource_cohort; N_source; positive_physical_quantity; positive_physical_quantity_unit; positive_physical_quantity_basis; positive_physical_quantity_method; positive_physical_quantity_state; positive_physical_quantity_sample_time; positive_physical_quantity_source; N; N_unit; N_basis; N_method; N_state; N_sample_time | Define one actualbuyer/disjointpointgroup/nonoverlap commercialwindow from actualdelivery evidence BEFORE normalization; physicalpositive meterproof plus ownedpurchase/resale and buyerFINAL acceptance afterreversals. Point-direction-time segment once acrosscases. Meterrows/versions/contracts/invoices/positions/reruns notnewcases; case cannot be retrospectivelysplit to lower impacts. N uniqueFINAL IDs only; N0 failedpendingcancelled resources retained in actualcohort withoutdivision. | Actualcase Item(s) and nativephysicalenergy | Each realread/event/revision/commercialcase | Actualpoint-windows/reportingperiods/fullassetlife | ActualmerchantofficeICT-meter responsibility/declaredproviders-receivers | per reference flow | Nativeunit/basis/method/state/sampletime/source/calibration/representativeness/coverage/uncertainty |
| cp_meter_energy | metered_electricity_wholesale | NONEXCHANGE directional physicalenergy | Meter and revision records | meter_id; point_id; point_role; direction; import_export_sign_convention; cumulative_or_interval; interval_start; interval_end; timezone; UTC_offset_start; UTC_offset_end; DST_resolution; register_reset_event; rollover_event; replacement_event; reconstruction_source; calibration_id; calibration_time; calibration_source; transformer_ratio_scope; already_applied_multiplier_scope; actual_estimated_flag; estimate_method; estimate_source; estimate_uncertainty; read_version; supersedes_id; valid_revision_status; valid_revision_source; dedup_point_interval; segment_case_mapping; averaging_population; averaging_method; averaging_source; measured_or_loss_adjusted_scope; register_start; register_start_unit; register_start_basis; register_start_method; register_start_state; register_start_sample_time; register_start_source; register_end; register_end_unit; register_end_basis; register_end_method; register_end_state; register_end_sample_time; register_end_source; register_adjustment; register_adjustment_unit; register_adjustment_basis; register_adjustment_method; register_adjustment_state; register_adjustment_sample_time; register_adjustment_source; meter_multiplier; meter_multiplier_unit; meter_multiplier_basis; meter_multiplier_method; meter_multiplier_state; meter_multiplier_sample_time; meter_multiplier_source; transformer_ratio; transformer_ratio_unit; transformer_ratio_basis; transformer_ratio_method; transformer_ratio_state; transformer_ratio_sample_time; transformer_ratio_source; energy_unit_factor; energy_unit_factor_unit; energy_unit_factor_basis; energy_unit_factor_method; energy_unit_factor_state; energy_unit_factor_sample_time; energy_unit_factor_source; interval_energy; interval_energy_unit; interval_energy_basis; interval_energy_method; interval_energy_state; interval_energy_sample_time; interval_energy_source; P_average; P_average_unit; P_average_basis; P_average_method; P_average_state; P_average_sample_time; P_average_source; actual_duration; actual_duration_unit; actual_duration_basis; actual_duration_method; actual_duration_state; actual_duration_sample_time; actual_duration_source; power_time_energy_factor; power_time_energy_factor_unit; power_time_energy_factor_basis; power_time_energy_factor_method; power_time_energy_factor_state; power_time_energy_factor_sample_time; power_time_energy_factor_source | Keep native import/export separate by point/direction/window and exclusive validatedversion. Cumulative registerdifference only compatible resets/rollover/replacement reconstructed with actualadjustment; multiplier/CTVT/conversion applied only if notalreadyincluded. Intervalenergy alreadyintegrated not differenced or duration-multiplied again. Power×duration conditional actualintervalaverage and real UTC/DST elapsedtime, notinstantaneous/nameplate power. Estimated flag/method/source uncertainty remains explicit, not silentlyactual. Reconcile actualphysicalterminals without assuming balance residual=loss orzero. | Nativeenergy/power/time/register units | Each realread/event/revision/commercialcase | Actualpoint-windows/reportingperiods/fullassetlife | ActualmerchantofficeICT-meter responsibility/declaredproviders-receivers | per reference flow | Nativeunit/basis/method/state/sampletime/source/calibration/representativeness/coverage/uncertainty |
| cp_source_gate | metered_electricity_wholesale | NONEXCHANGE source-demand grid-loss outsideintegration | Physicalsource and integration ledger | actual_source_id; source_dataset_link; source_gate_point; source_gate_direction; source_boundary; source_geography; source_window_start; source_window_end; source_timezone; source_version; mix_evidence; contract_certificate_limit; assignment_direct_or_driver; direct_assignment_evidence; exclusive_assignment_links; terminal_id; terminal_kind; terminal_point; terminal_direction; terminal_window; terminal_timezone; terminal_version; terminal_status; terminal_link; terminal_owner; all_terminal_completeness; compatible_boundary_evidence; network_loss_definition; network_loss_direction; network_loss_coverage; network_loss_owner; network_loss_source; baseline_stage_loss_coverage; additional_stage_loss_coverage; missing_stage_records; integration_completed_status; integration_link; integration_time; integration_timezone; integration_source; integration_exclusive_owner; integration_stage_loss_coverage; source_quantity_source; source_energy; source_energy_unit; source_energy_basis; source_energy_method; source_energy_state; source_energy_sample_time; source_energy_source; assigned_source_energy; assigned_source_energy_unit; assigned_source_energy_basis; assigned_source_energy_method; assigned_source_energy_state; assigned_source_energy_sample_time; assigned_source_energy_source; baseline_energy; baseline_energy_unit; baseline_energy_basis; baseline_energy_method; baseline_energy_state; baseline_energy_sample_time; baseline_energy_source; additional_energy; additional_energy_unit; additional_energy_basis; additional_energy_method; additional_energy_state; additional_energy_sample_time; additional_energy_source; integrated_energy; integrated_energy_unit; integrated_energy_basis; integrated_energy_method; integrated_energy_state; integrated_energy_sample_time; integrated_energy_source; target_physical_driver; target_physical_driver_unit; target_physical_driver_basis; target_physical_driver_method; target_physical_driver_state; target_physical_driver_sample_time; target_physical_driver_source; all_physical_terminal_driver; all_physical_terminal_driver_unit; all_physical_terminal_driver_basis; all_physical_terminal_driver_method; all_physical_terminal_driver_state; all_physical_terminal_driver_sample_time; all_physical_terminal_driver_source; terminal_energy; terminal_energy_unit; terminal_energy_basis; terminal_energy_method; terminal_energy_state; terminal_energy_sample_time; terminal_energy_source; terminal_driver; terminal_driver_unit; terminal_driver_basis; terminal_driver_method; terminal_driver_state; terminal_driver_sample_time; terminal_driver_source; network_loss_quantity; network_loss_quantity_unit; network_loss_quantity_basis; network_loss_quantity_method; network_loss_quantity_state; network_loss_quantity_sample_time; network_loss_quantity_source; network_loss_factor; network_loss_factor_unit; network_loss_factor_basis; network_loss_factor_method; network_loss_factor_state; network_loss_factor_sample_time; network_loss_factor_source; source_assignment_scope_id; target_delivery_case_ids; target_case_group_id; source_assignment_quantity_basis; source_energy_already_per_reference; raw_outside_integration_preserved; once_only_service_link_evidence; assigned_source_energy_raw; assigned_source_energy_raw_unit; assigned_source_energy_raw_basis; assigned_source_energy_raw_method; assigned_source_energy_raw_state; assigned_source_energy_raw_source; assigned_source_energy_raw_sample_time; same_target_case_N; same_target_case_N_unit; same_target_case_N_basis; same_target_case_N_method; same_target_case_N_state; same_target_case_N_source; same_target_case_N_sample_time; source_energy_link_per_service; source_energy_link_per_service_unit; source_energy_link_per_service_basis; source_energy_link_per_service_method; source_energy_link_per_service_state; source_energy_link_per_service_source; source_energy_link_per_service_sample_time | Direct validated actualsourcequantity nativepoint-gate-window-version/exclusiveproof OR source_energy×target_physical_driver/positive COMPLETE all_physical_terminal_driver; each competingphysicalterminal ownquantity native6metadata/link/owner. Include all actual accepted/provisional-unaccepted/otherbuyer deliveries, actualexports/otheroutflow, independentlyevidenced loss/use onlyinside SAMEphysicalbalance; no inventedclosingstock/accepted-only/financialcertificate denominator/direct-driveroverlay. Networkloss actualdirection-boundary-responsibility and baselinecoverage, no contractimbalance asloss. Match sourcegeneration-gridstages-gate/geography/time/actualmix evidence; certificates not electronidentity. Missingstages/requiredadditional demand ACTUALLY outsideintegratedonce completedstatus/link/timezone/source-owner/nativequantity/stage-losscoverage beforechainready, notplanned.  Keep actual directional source/terminal energy and completed outside stage-demand integration at recorded raw quantities, with point-group, direction, window and valid-version scope. Declare source_assignment_scope_id, target_delivery_case_ids/target_case_group_id and source_assignment_quantity_basis: single_case, target_case_group_total or already_per_reference. Only a raw assigned target-case-group total uses source_energy_link_per_service=assigned_source_energy_raw/same_target_case_N when positive N covers EXACTLY those assigned cases after reversals; link this once to 1 accepted_service in compatible energy/state/gate units. A single case N=1 or already-per-reference energy is not divided again. Do not scale actual outside integration by service N or use whole-source-market N for a narrower target group. No opening/closing warehouse stock or material-return formula applies to traded electricity. | Nativeenergy and compatiblephysicaldriver units | Each realread/event/revision/commercialcase | Actualpoint-windows/reportingperiods/fullassetlife | ActualmerchantofficeICT-meter responsibility/declaredproviders-receivers | per reference flow | Nativeunit/basis/method/state/sampletime/source/calibration/representativeness/coverage/uncertainty |
| cp_operations | metered_electricity_wholesale | Ownfacility ICT-office-meter electricity | Ownconsumption records | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; own_meter_id; own_point_role; own_meter_interval; own_meter_timezone; service_activity; dedup_id; complete_consumer_records; trade_meter_exclusion; provider_included_energy; own_energy; own_energy_unit; own_energy_basis; own_energy_method; own_energy_state; own_energy_sample_time; own_energy_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | Actualownfacility officeICT-meter support consumption only, independentlymetered or directtasktrace/positive completeallconsumer native driver; includeallclients/periods/idle/rerun/failedpending duties. Actualenergy/nativeconversion not tradedenergy bill. Keep meterroles/providerincludedenergy exclusive; assignedtotal/positiveFINALNonce, N0 retained. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Nativeelectricalenergy and driver units | Each realread/event/revision/commercialcase | Actualpoint-windows/reportingperiods/fullassetlife | ActualmerchantofficeICT-meter responsibility/declaredproviders-receivers | per reference flow | Nativeunit/basis/method/state/sampletime/source/calibration/representativeness/coverage/uncertainty |
| cp_supplies | metered_electricity_wholesale | Actualwater and officeconsumables/unusedreturn | Materialstock and receipts | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; SKU_id; material_identity; purpose; composition_source; net_receipt_definition; container_tare_exclusion; supply_provenance; matched_return_input; return_receiver; retained_recovery_scope; gross_or_consumed_view; complete_consumer_records; density_temperature; density_temperature_unit; density_temperature_source; opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; closing_including_recovery; closing_including_recovery_unit; closing_including_recovery_basis; closing_including_recovery_method; closing_including_recovery_state; closing_including_recovery_sample_time; closing_including_recovery_source; unused_external_return; unused_external_return_unit; unused_external_return_basis; unused_external_return_method; unused_external_return_state; unused_external_return_sample_time; unused_external_return_source; water_supplied; water_supplied_unit; water_supplied_basis; water_supplied_method; water_supplied_state; water_supplied_sample_time; water_supplied_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | ActualSKU compatiblematerialpool S=assignedopening+NETexternalreceipts-closing includingretainedrecovery; receipts material onlyexcludecontainertare. Choose exactly one: (1) gross S/N INPUT and actual matched same-scope unused return/N OUTPUT; (2) consumed-only (S-return)/N INPUT and OMIT matched return OUTPUT; do not add return to input or deduct twice; no unrelatednegative netting. Actualwater nativevolume source/purpose, suppliedwater not wastewater. Anydensity conversion actualcomposition-state-temperature-unit/source. Allusersdrivers actualnative6metadata; stockformula NEVERtradedenergy. Partition actual native records by flow_row_id and actual_identity_case; only evidenced cases activate. Typed and residual actual quantities are exclusive across the node, each physical outlet/input is assigned once and reconciles with a compatible same-scope non-additive total. Keep unknown occurrence/quantity unresolved, not zero. | Nativevolume/mass/actualsupply units | Each realread/event/revision/commercialcase | Actualpoint-windows/reportingperiods/fullassetlife | ActualmerchantofficeICT-meter responsibility/declaredproviders-receivers | per reference flow | Nativeunit/basis/method/state/sampletime/source/calibration/representativeness/coverage/uncertainty |
| cp_providers | metered_electricity_wholesale | Actualphysicalmeter-data/facilitysupport results | Performedprovider record | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; provider_id; task_id; physical_result_definition; native_property; performed_status; performance_source; point_period_scope; read_version_scope; dedup_id; rerun_invalid_case_links; material_energy_asset_waste_coverage; complete_consumer_records; performed_result; performed_result_unit; performed_result_basis; performed_result_method; performed_result_state; performed_result_sample_time; performed_result_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source | Actualperformed physicalresult in evidence-native property/unit, not fees/margins/contracts/meterrow=one Item. Trace datareads-validation-communications or realfacilitysupport duty and actualrevision/rerun; supportnativeunit may require expandedconfiguration. Directtask or positivecompleteallusersdriver once; materialenergyasset-EOLreceiver coverage exclusive with othercards, notnetworkoperation implicitly. | Actualnativephysicalresult/driver units | Each realread/event/revision/commercialcase | Actualpoint-windows/reportingperiods/fullassetlife | ActualmerchantofficeICT-meter responsibility/declaredproviders-receivers | per reference flow | Nativeunit/basis/method/state/sampletime/source/calibration/representativeness/coverage/uncertainty |
| cp_assets | metered_electricity_wholesale | Full-life responsibilitymatched officeICT-meter assets | Lifetime driver ledger | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; asset_id; responsibility_scope; full_manufacture_maintenance_replacement_EOL_coverage; all_user_period_records; observed_evidence; remaining_evidence; termination_basis; termination_source; lifetime_update_trigger; uncertainty; sensitivity; one_asset_or_provider; equivalence_method; equivalence_source; used_driver; used_driver_unit; used_driver_basis; used_driver_method; used_driver_state; used_driver_sample_time; used_driver_source; observed_driver; observed_driver_unit; observed_driver_basis; observed_driver_method; observed_driver_state; observed_driver_sample_time; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; remaining_driver_source; lifetime_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_method; lifetime_driver_state; lifetime_driver_sample_time; lifetime_driver_source; asset_equivalent; asset_equivalent_unit; asset_equivalent_basis; asset_equivalent_method; asset_equivalent_state; asset_equivalent_sample_time; asset_equivalent_source | Actualresponsibility officeICT-meter-outstation-datacomms assets only; fullmanufacture-maintenance-replacement-EOL. Jobused/positivecomplete lifetime alluserdriver compatible native6metadata, lifetime=observed+sourcedremaining underactualtermination assumptions; driver/equivalence conversions nativeunits-source, uncertainty/sensitivity/update. Oneasset OR lifecyclecompleteprovider and N once, no generator/network/storelife inherited, no assetEOL burden duplicatewaste. | Nativeasset equivalents/compatiblelifetimedrivers | Each realread/event/revision/commercialcase | Actualpoint-windows/reportingperiods/fullassetlife | ActualmerchantofficeICT-meter responsibility/declaredproviders-receivers | per reference flow | Nativeunit/basis/method/state/sampletime/source/calibration/representativeness/coverage/uncertainty |
| cp_fates | metered_electricity_wholesale | Actualmaterials/equipment/water receivingfates | Measuredreceiver/outfall record | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; source_material_id; receiver_id; receiver_transport_scope; receiver_treatment_scope; receiver_source; contained_or_direct; direct_location; receiving_medium; composition_source; whole_or_component_view; asset_provider_EOL_coverage; density_temperature; density_temperature_unit; density_temperature_source; received_waste_mass; received_waste_mass_unit; received_waste_mass_basis; received_waste_mass_method; received_waste_mass_state; received_waste_mass_sample_time; received_waste_mass_source; contained_volume; contained_volume_unit; contained_volume_basis; contained_volume_method; contained_volume_state; contained_volume_sample_time; contained_volume_source; direct_outfall_volume; direct_outfall_volume_unit; direct_outfall_volume_basis; direct_outfall_volume_method; direct_outfall_volume_state; direct_outfall_volume_sample_time; direct_outfall_volume_source; carrier_mass; carrier_mass_unit; carrier_mass_basis; carrier_mass_method; carrier_mass_state; carrier_mass_sample_time; carrier_mass_source; absorbed_liquid_mass; absorbed_liquid_mass_unit; absorbed_liquid_mass_basis; absorbed_liquid_mass_method; absorbed_liquid_mass_state; absorbed_liquid_mass_sample_time; absorbed_liquid_mass_source; collected_fragment_mass; collected_fragment_mass_unit; collected_fragment_mass_basis; collected_fragment_mass_method; collected_fragment_mass_state; collected_fragment_mass_sample_time; collected_fragment_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; complete_consumer_records; shared_case_links; actual_stream_id; stream_separate_or_true_mixture; actual_waste_identity_type; separate_stream_receiver_source; mixture_membership_evidence | Actualreceived materials/equipment/water only, nativequantity-state-composition-source. Wholemixture OR exclusive carrier+absorbedfluid+fragments, neverdoubleadd; eachcomponent independentlynative6metadata. Containedwater/freefluid Waste receiver scope distinct directoutfall Elementary medium, purchasedwater not wastewater. Receivertransport-treatment afterasset/providercoverage once, actualretirement genealogy; directspecies separate no presumednetworkwaste/recyclingcredit.  Directactualcase trace OR compatible target_driver/positive COMPLETE all_consumer_driver with actualconsumer/case links and eachnative6metadata; assignedtotal/positiveFINALNonce, N0retained. Expand this conditional umbrella into a separate exchange for EACH actual distinct received waste stream and its native identity/type, composition/state, measured net quantity and receiver transport/treatment owner. Paper/ink waste, wiping mixtures and retired ICT/equipment are not one fixed mixed exchange; use mixed mass only for a genuinely co-collected received mixture. Component views of that same mixture remain non-additive. Retain explicit unresolved identities until actual stream evidence is available. | Nativeactualmass/volume units | Each realread/event/revision/commercialcase | Actualpoint-windows/reportingperiods/fullassetlife | ActualmerchantofficeICT-meter responsibility/declaredproviders-receivers | per reference flow | Nativeunit/basis/method/state/sampletime/source/calibration/representativeness/coverage/uncertainty |
| cp_releases | metered_electricity_wholesale | Actualservicefacility species-medium releases | Actualmeasurement/activityfactor record | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; event_id; species_id; chemical_identity; receiving_medium; direct_location; factor_covered_composition_fate; provider_covered_release; temperature; temperature_unit; temperature_source; pressure; pressure_unit; pressure_source; measurement; measurement_unit; measurement_basis; measurement_method; measurement_state; measurement_sample_time; measurement_source; activity; activity_unit; activity_basis; activity_method; activity_state; activity_sample_time; activity_source; factor; factor_unit; factor_basis; factor_method; factor_state; factor_sample_time; factor_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; gas_conversion; gas_conversion_unit; gas_conversion_basis; gas_conversion_method; gas_conversion_state; gas_conversion_sample_time; gas_conversion_source; temperature_basis; temperature_method; temperature_state; temperature_sample_time; pressure_basis; pressure_method; pressure_state; pressure_sample_time; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; complete_consumer_records; shared_case_links | Actualownfacility maintenance/incident measurement OR compatible realactivity×factor with chemicalspecies-medium and everyoperand native6metadata. Completefactor alreadycovering composition/fate not multipliedagain; anyrequired fraction/conversion once with actualtemperature-pressureunits/source. TradedkWh/networkloss/contractimbalance/sourcegenerationfactor not merchantdirectrelease or zero; unknown doesnotproveabsence.  Directactualcase trace OR compatible target_driver/positive COMPLETE all_consumer_driver with actualconsumer/case links and eachnative6metadata; assignedtotal/positiveFINALNonce, N0retained. | Nativespeciesmass/activity/factor units | Each realread/event/revision/commercialcase | Actualpoint-windows/reportingperiods/fullassetlife | ActualmerchantofficeICT-meter responsibility/declaredproviders-receivers | per reference flow | Nativeunit/basis/method/state/sampletime/source/calibration/representativeness/coverage/uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_resources | service | N=unique realFINAL acceptedphysicalcase afterownershipresale/reversals. Directtasktrace OR actualphysicalquantity×target_driver/positiveCOMPLETE all_consumer_driver with compatible native6metadata/allclientsperiods-idlefailedpending-rerun. Assignedtotal/positiveN once, N0retained. | cp_deliveryunit; cp_operations; cp_supplies; cp_providers; cp_assets; cp_fates; cp_releases | Actualperreference service |  |
| register_energy | nonexchangeenergy | E_register=(register_end-register_start+register_adjustment)*meter_multiplier*energy_unit_factor only compatible cumulative registers with actualreset-rollover-replacement reconstruction. Meter/CTVT ratios apply exactlyonce according already_applied_multiplier_scope, not multiply alreadyadjusted register/intervalenergy again. Actualnativeconversion factor dimension resolves registerunits to declaredenergy; import/export direction retained, supersededversion excluded once. | cp_meter_energy | Nativephysicalenergy audit, notserviceexchange |  |
| power_time | nonexchangeenergy | E=P_average*actual_duration*power_time_energy_factor only actualintervalaverage and trueelapsedtime from timezone/UTCoffset/DST-resolved start-end. Everyoperand ownnativeunits/basis/method/state/time/source; instantaneous/nameplate notaverage, alreadyintegrated energy not multipliedduration. Actual-estimated uncertainty explicit. | cp_meter_energy | Conditionalnativeenergy audit |  |
| completed_source | nonexchangeenergy | assigned_source_energy=directactual validatednativephysicalquantity/exclusiveproof OR source_energy*target_physical_driver/all_physical_terminal_driver. PositiveCOMPLETE compatible commonboundary physicalterminals ownnativequantities-drivers6metadata/link/owner include accepted/provisional-unaccepted/otherbuyers/actualexports-otheroutflows and independentlyevidencedloss-use onlysamephysicalbalance, no inventedstock/acceptedonly/financialpositions/overlay. Native sourceassigned-baseline-additional matchedgate-stage-losscoverage; requiredmissingstages/additional_energy ACTUALLY integratedoutsideonce with completedstatus/integratednativequantity/link/timezone/source-owner/coverage beforechainready. Contracts/certs not electronidentity/mix/lossproof; imbalance notloss. | cp_source_gate | Separatecompleted upstreamsource-grid-demand-loss integration |  |
| supplies_assets | resources | ActualmaterialS=assignedopening+NETexternalreceipts-closingincludingretainedrecovery; choose exactly one: (1) gross S/N INPUT and actual matched unused return/N OUTPUT; (2) consumed-only (S-return)/N INPUT and OMIT matched return OUTPUT; do not add return to input or deduct twice; receipts excludecontainertare, NEVERtradedenergystock. Fullasset equivalents=actualused_driver/positivecomplete lifetime_driver (observed_driver+sourced remaining_driver), compatible eachnative6metadata/allusersperiods/termination/uncertainty/update; oneassetORlifecyclecompleteprovider/Nonce, noassetEOLduplication. | cp_supplies; cp_assets; cp_providers | Actualnative material/asset equivalents |  |
| actual_species | directspecies | Actualspecies-medium amount=measurement OR compatible realserviceactivity*factor. Alloperands native6metadata, completefactor composition-fatecoverage not multipliedagain; requiredfractions/gasconversion once compatibletemperature-pressureunits/source. Tradedenergy/sourcegeneration/networkloss/contractimbalance not automaticmerchantdirectrelease orzero; mixture/freefluid/directspecies exclusive. | cp_releases; cp_fates | Evidencednative directspecies perreference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | allroles | Verify completeFINAL physicalcommercialcase identity and actualsource/provider/receiver/species native support. Countpropertychain not serviceidentity, energy notcase. | Actualnativeproof |
| native_operands | alloperands | Each register/multiplier/CTVT/conversion/averagepower/duration/source-terminal-loss-baseline-additional-integration/driver/N/supply/asset/fate/species operand ownunit/basis/method/state/sampletime/source; calibration/representativeness/version/timezoneDST/coverage. Unknownincompatible blocks calculation, estimate not silentlyactual. | Collectionprotocols |
| coverage | allinterfaces | Disclose casedefinition/physicalpoint-direction/nonoverlapwindow/FINALreversal/meterestimate-revision-multiplier/loss-sourcemix/baselineACTUALcompletedintegration owners/resourceproviderfullassets/fates uncertainty/sensitivity/update. NoGBtimeline/legal/lossmix defaults; pendingintegration notchainready. | Nativecoverage/completedlinks and rowRange evidence need |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| service_electricity | metered_electricity_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `service_electricity` under `cp_operations`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_operations`; actual source-linked native records |
| facility_water | metered_electricity_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `facility_water` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| office_consumables | metered_electricity_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `office_consumables` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| metering_data_services | metered_electricity_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `metering_data_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| facility_support_services | metered_electricity_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `facility_support_services` under `cp_providers`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_providers`; actual source-linked native records |
| shared_assets | metered_electricity_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual inputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `shared_assets` under `cp_assets`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_assets`; actual source-linked native records |
| unused_supply_returns | metered_electricity_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/product material, service, asset-lifecycle duty, waste stream or substance/source/medium in `unused_supply_returns` under `cp_supplies`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_supplies`; actual source-linked native records |
| spent_supplies_equipment | metered_electricity_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `spent_supplies_equipment` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| contained_wastewater | metered_electricity_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/waste material, service, asset-lifecycle duty, waste stream or substance/source/medium in `contained_wastewater` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| direct_water_outfall | metered_electricity_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_water_outfall` under `cp_fates`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_fates`; actual source-linked native records |
| direct_species | metered_electricity_wholesale | Mandatory completion record, not a synthetic inventory exchange. Identify every actual outputs/elementary material, service, asset-lifecycle duty, waste stream or substance/source/medium in `direct_species` under `cp_releases`; expand each physically/chemically specific actual case into its own row, concrete identity, native amount and coverage owner before final dataset use. Missing occurrence/identity/amount is unresolved and blocks completion, never zero or an omission. Preserve all original scope, evidence, range, stock/fate, conversion and provider/receiver duties in the complete capture definition below. | `cp_releases`; actual source-linked native records |


### Mandatory Inventory Completion Records

These are mandatory collection and expansion definitions, not exchanges and not zero placeholders. Existing references to an umbrella or residual row ID refer to these completion requirements. Every actual case must become one atomic exchange with its own evidence before the foreground dataset can be finalized. Conditional cases in section6 do not imply occurrence. Retain separately supplied materials, complete-life assets, disjoint provider/transport results, actual waste receiver streams and every actual elementary species/medium; do not silently drop them because no generic UUID is assigned. Reconcile disjoint actual cases to native totals and keep component views non-additive.

#### service_electricity

Actual office/ICT/data-meter support consumption only, disjoint from tradedenergy and includedprovider consumption. No tradedkWh as serviceinput or avoidedenergy.

Residual inventory requirement after the independently identified cases `service_electricity_ac`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual own-facility ICT-office-meter electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual exclusively assigned physical quantity / N under cp_operations
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_operations`

Range evidence need: Actual own-consumptionmeter/submeter or evidenced completealluser allocation, nativeinterval/pointrole/providercoverage; totaltradedenergy/invoice not officeuse.

#### facility_water

Real hygiene/support water only, no generation cooling/reservoir/gridwater duty.

Residual inventory requirement after the independently identified cases `facility_water_liquid_tap`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual purchased office-support water
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actualsource/purpose/nativevolume/period and independent fates; supplynotwastewater, no water per tradedkWh.

#### office_consumables

Actual paper/ink/cleaners/wipes/absorbents/filter supplies by SKU/use, not certificates-as-physicalelectricity or assumed electricalnetwork oils/spares.

Residual inventory requirement after the independently identified cases `office_consumables_synthetic_detergent`. Exclude actual quantities assigned to those cases from this unresolved completion requirement; a parent total is only a non-additive reconciliation audit. Retain every other actual material/state/source/medium and its own verified identity, native quantity and provider/receiver duty. Do not assume that a conditional case occurs, is absent or has zero quantity when records are missing.

- Identity requirement: Actual office and conditional maintenance consumables
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: NETactualmaterial stock/use/return/provenance and actualcleanup; no material per contract/settlementrow or networkmaintenance default.

#### metering_data_services

Actualperformed read/validateddataset/transmission/reconciliation result nativeunit/coverage. Meterrecords and reruns do not themselves create new physicaldeliverycount; not merchantnetwork operation.

- Identity requirement: Actual metering data-collection validation and communication results
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively assigned physical quantity / N under cp_providers
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Performed result/nativeproperty-unit/providerenergy-assets coverage, version/dedup/pointperiod proof; conditional umbrella expands actualresult rather than forcing everyrecord1Item.

#### facility_support_services

Actual facility cleaning/HVAC/support/maintenance results in declarednativeunit, not financialfees/margins or generator/grid service automatically duplicated.

- Identity requirement: Actual physical office-support and maintenance service results
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively assigned physical quantity / N under cp_providers
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_providers`

Range evidence need: Actualtask/result/source/nativeunit and materialenergyasset/wastecoverage; normalize actualallusers once, no price-to-physical service conversion.

#### shared_assets

Actualoffice/ICT/meters/outstations/communications and ownedresponsibility components fullmanufacture-maintenance-replacements-EOL/allusers. Generation/grid/storage assets outside unless actualreview, provider-covered assets notduplicate.

- Identity requirement: Full-life shared office ICT and responsibility-matched metering assets
- Flow property / unit: Count / Item(s)
- Amount rule: Actual exclusively assigned physical quantity / N under cp_assets
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`

Range evidence need: Job/observed/remaining/lifetime drivers ownnative6metadata, observed+sourcedremainder/termination/uncertainty/update; oneasset OR lifecyclecompleteprovider/N once.

#### unused_supply_returns

Same-scope standaloneunusedmaterial only; consumed-only input OMITmatchedoutlet. No electricalexport/contractreversal/pricecredit as materialreturn.

- Identity requirement: Actual matched unused office-supply external returns
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_supplies
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplies`

Range evidence need: Actualrecipient/nativequantity/matchedsupply-provenance, internalrecoveryclosing, no unrelatednegativeinput/recoverycredit.

#### spent_supplies_equipment

Actualpaper/ink/wipes/filters/maintenance mixtures and retiredoffice-meterICT equipment only if actualservice ownsreceiver scope. Assetlife/provider alreadycovering EOL must not generate secondburden; no tradedenergy waste.

Expand this conditional umbrella into a separate exchange for EACH actual distinct received waste stream and its native identity/type, composition/state, measured net quantity and receiver transport/treatment owner. Paper/ink waste, wiping mixtures and retired ICT/equipment are not one fixed mixed exchange; use mixed mass only for a genuinely co-collected received mixture. Component views of that same mixture remain non-additive. Retain explicit unresolved identities until actual stream evidence is available.

- Identity requirement: Actual spent consumables and responsibility-matched retired equipment
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Actualreceivedmass/componentstate/receivertransporttreatment and asset-providercoverage; mixedcarrier/absorbedfluid/fragments nonadditive, no emptycontract=physicalwaste.

#### contained_wastewater

Actualcollected facilitywastewater/freefluid ownidentity-state-volume/receiver, not gridloss or powerplantcooling.

- Identity requirement: Actual contained office-facility wastewater to receivers
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical quantity / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Actualcollectedreceivedvolume/composition/native6metadata/receivercoverage, purchasedwater not wastevolume.

#### direct_water_outfall

Only real directwater crossing documentedmedium, containedreceiver Waste separate, no networkwater assumption.

- Identity requirement: Actual direct service-facility water outfall
- Flow property / unit: Volume / m3
- Amount rule: Actual exclusively assigned physical quantity / N under cp_fates
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fates`

Range evidence need: Location/medium/nativeintervalvolume/composition/fate/source, not suppliedwater or energytrade volume.

#### direct_species

Actualownfacility maintenance/incident substance-medium evidence only. TradedkWh, networkloss/contractimbalance or sourcegenerationfactor is not merchantdirectemission or zero; no assumed ownedgeneration.

- Identity requirement: Actual service-facility species releases to documented media
- Flow property / unit: Mass / kg
- Amount rule: Actual exclusively assigned physical quantity / N under cp_releases
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_releases`

Range evidence need: Exactspecies/medium/native measurement or realactivityfactor units/basis/method/state/time/source; completefraction-covering factors notmultipliedagain.

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_FINAL | accepted_service | Positiveactualphysicaldelivery/ownershippurchase-resale/B2Bbuyer/predefinedcasepointgroup-window/FINALgate-source-reversals/uniqueN, notkWh/meterrow/contract/invoice/position/rerun. N0 failedpendingcancelled retained withoutdivision. |  |
| meter_native | nonexchangeenergy | Directional nativepointtime/registerinterval/UTCoffsetDST/multiplierCTVT-alreadyapplied/calibration/actualestimated-revisiondedup. Cumulativeformula only actualcompatible reconstruction; averagepower×actualduration dimensional once, not nameplate/instantaneous/integratedenergy again. | elexon-metering-context |
| source_completed | nonexchangeenergy | Directactualtrace OR positiveCOMPLETE compatible allphysicalterminal native6metadata/link/owner, notacceptedonly/certificate/inventedstock. Actualgeneration-gridgate-loss responsibility-baselinecoverage then requiredmissingstage/additional ACTUALLY outsidecompleted once nativeqty-status-link-timezone-source-owner-stage-losscoverage beforechainready, notplanned. |  |
| resource_owners | all | Tradedenergy NONEXCHANGE notownfacilityserviceelectricity/directrelease; actualofficeICT-meter resources and lifecyclecompleteprovider/asset exclusivefullalluser observed+sourcedremaining-life drivers/N once. NETsupplies excludecontainertare gross S/N INPUT with matched unused return/N OUTPUT OR consumed-only (S-return)/N INPUT with matched return OUTPUT OMITTED, nevertradedstock. Actualmixedmaterials/equipment/freewater/directspecies exclusive receivertransporttreatment afterassetprovidercoverage once; noautomaticcredit/residual=species/zero. |  |
| scope_limits | method | No merchantgeneration/storage/networkoperation/warehouse/truck/pallet template imported. Electricitystorage exists. Elexon GBqualitative context not universalinterval/legal/mix/lossfactor; unsupported identities/nativecoverage remainexplicitgaps. | elexon-physical-trading-context; elexon-settlement-context |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset afteractualidentity/completeness review |
| downstream_use | Meteredphysicalelectricity commercialdelivery serviceadd-on, actualcompleted matchedgeneration-grid-source-loss-demand outsideonce |
| allowed_use | Actualowned-resold B2B FINALphysicalcommercialcase onebuyer/disjointpointgroup/nonoverlapwindow/nativeversionedmeterproof |
| excluded_use | Financialonly/generation/storage/merchantnetworkoperation/consumeruse/retail-feeagency; warehouse-stock-cargo model |
| required_metadata | Casepredefinition/physicaldelivery/ownershippurchase-resale/B2Bbuyer/FINALgate-source-reversals/N; pointdirection/nativeunits/registerinterval/multiplierCTVT-alreadyapplied/calibration/UTCoffsetDST/actualestimated/versiondedup; actualgeneration-gridgate-lossbaseline/sourceassignmentallphysicalterminals/completedoutsideintegrationqty-status-link-timezone-source-owner-coverage; ownfacilityICT-meter/provider/fullasset/supplies/fates ownership |
| required_quality_disclosure | Actualcase/physicalmeter/sourcegridloss/estimate-revision/mixcoverage/baseline-completedintegration/nativeidentity-support/resourceproviderfullasset/fates uncertainty/sensitivity/rowevidenceneeds |
| update_trigger | Casephysicalpointgroup-window/ownershipFINAL/meterrole-register-multiplier-direction-version/timezone/source-gridlosscoverage-integration/ownresources-providerasset/fate changes |


## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-physical-electricity-wholesale | official_guidance | UNSD CPC3 explanatorynotes30June2025,17100/61097 printed309. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification only; physicallydelivered metered commercialservice narrower electricitywholesale. |
| elexon-physical-trading-context | official_guidance | Elexon Tradingelectricityinthemarket. https://www.elexon.co.uk/bsc/about/trading-electricty-market/ | GBqualitative physicaldelivery versus nonphysicaltrade and metercontractcomparison only; reject cannotstore oversimplification, no timing/legalrole default. |
| elexon-metering-context | official_guidance | Elexon Metering. https://www.elexon.co.uk/bsc/operational/metering/ | GBqualitative import-export/meter-transformer-data aggregation context only, not assumed merchantnetworkoperation or mandatory meterconfiguration. |
| elexon-settlement-context | official_guidance | Elexon Settlement. https://www.elexon.co.uk/bsc/settlement/ | GBqualitative metered-contract reconciliation/revision/timezone/networkloss responsibility questions only, no universal settlementperiod/timeline/mix/lossfactor. |
