---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.toluene-sulfolane-reformate-recovery
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Toluene recovered from reformate by wet sulfolane extraction and fractionation

## 1. Scope and Applicability

This attributional manufacturing PCR covers bulk commercial liquid toluene recovered from received extraction-ready fossil reformate by wet sulfolane liquid-liquid extraction, rich-solvent stripping, vacuum solvent recovery, raffinate water washing, solvent regeneration, clay polishing and benzene/toluene fractionation. The C8-plus bottom cut leaves without further purification. Heat is purchased steam; cooling is a recirculating-water loop. [jrc-lvoc-2017, §4.2.2.2]

Exclude upstream catalytic reforming and required hydrofining from the foreground, while retaining their verified upstream burdens. Exclude pygas/coal-tar feed, ED-only/dry-solvent/NMP/DMF/DMSO routes, toluene synthesis or disproportionation, solvent-blend formulation, spent-solvent recycling, xylene isomerisation and onsite fuel combustion. If the actual site adds these operations, extend and review its inventory before claiming applicability; this PCR does not make them disappear. Current ED Sulfolane vendor specifications describe a different simplified option and are not defaults here. [honeywell-aromatics-recovery; jrc-lvoc-2017]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.toluene-sulfolane-reformate-recovery |
| classification_refs | CPC 3.0 34110; narrower |
| covered_products | Bulk liquid commercial toluene from the declared reformate recovery route |
| excluded_products | Neat-component accounting in place of whole grade; diluted toluene blend; spent solvent; benzene or xylene marketed as toluene |
| representative_product | Toluene CAS108-88-3, whole accepted liquid grade |
| production_route | Wet sulfolane liquid-liquid extraction of reformate; clay polishing and benzene/toluene fractionation |
| market_state | Bulk liquid at plant delivery gate, actual assay/water/impurities and custody state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply commercial toluene as a chemical feedstock |
| How much | 1 kg |
| How well | Accepted actual commercial grade with measured toluene assay, water and specified impurities; no universal purity is assumed |
| How long or cycle | One plant-gate delivery; no downstream use lifetime |
| reference_flow_link | accepted_toluene |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Toluene `33ac34b7-d691-4eda-8563-daef49a05157` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CAS108-88-3; whole commercial product; assay and method; water and benzene/non-aromatic impurities; acceptance specification; liquid temperature/pressure; bulk plant delivery gate; wet sulfolane reformate route; actual site/provider and period; feed readiness; stock/acceptance cohort; upstream boundaries and allocation method |

Keep the official native Toluene identity and whole-grade mass. Its general liquid chemical meaning allows declared residual commercial impurities; it cannot identify a deliberately diluted blend. Neither native production-mix wording nor a CAS alone establishes provider compatibility or a route-average dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Use net whole liquid product mass, excluding tank/container tare; 1 kg reference flow is not multiplied by toluene assay. Measure assay separately with cp_reference. |
| volume_mass | reformate_feed; accepted_toluene; water_makeup; cooling_makeup | Mass | kg | Convert measured liquid volume using measured or traceable composition-specific density at the same temperature and pressure; disclose corrections and avoid converting wet mixtures by neat-toluene density. |
| utility_bases | electricity; indirect_steam; direct_steam; condensate_return | Energy and Mass | MJ; kg | 1 kWh=3.6 MJ for electricity. Steam commodity and returned condensate remain kg with recorded states. Heat check=sum(incoming kg times specific enthalpy)-sum(returned kg times specific enthalpy), with a common datum and kJ divided by 1000 to MJ. Keep direct steam/water-stripper recycles separate. Never impose a generic MJ/kg factor or buy the same steam twice. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual extraction-ready reformate received at the recovery unit, with feed composition and upstream readiness evidence |
| starting_condition_role | foreground_entry |
| product_classification_scope | CPC 3.0 34110; narrower |
| recursive_input_rule | Purchased same-category toluene is an evidenced upstream input with burdens, never new recovered output or an internal recycle. Split it into an added atomic input and do not dilute it into production Q. |
| upstream_dataset_requirement | Actual reformate provider includes reforming, splitting and required feed treatment; utility, solvent/clay and external treatment links match composition/property/gate |
| disclosure | Record actual source plant, feed batch/readiness, all gates, utility return convention, outsourced treatment, omitted operations and inventory gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | recovery_unit | Include receipt/storage, every extraction/recovery/regeneration/wash/clay/fractionation operation, internal transfers, start/stop/cleaning losses, loading and final releases. No upstream refinery unit is duplicated or assumed burden-free. Additional actual chemicals, packaging, regeneration or controls require individual physical exchanges before completeness. | `jrc-lvoc-2017` |
| boundary_acceptance | accepted_toluene | Tag every first acceptance once. Q>0 equals newly accepted product dispatched in the period plus newly accepted closing finished stock, without opening finished stock, returns, retests, internal recycles or rejected output. Keep old and new acceptance cohorts apart. An already accepted lot rehandled this period never produces a second reference output. | `jrc-ilcd-general-2010` |
| boundary_carry | recovery_unit | Carry raw-feed, solvent, bed, WIP and FG mass/component stocks with their accumulated upstream and operation burden vectors by lot/cohort. Carry partial raw/WIP burdens forward until acceptance; add only incremental processing, avoiding a second feed burden. Opening FG dispatch is a transfer of its original burden. Later service/return/repair corrections attach to the original accepted cohort and original accepted quantity Q0; never divide them by current Q. If Q0 is unknown, preserve raw unnormalised burdens and hold the correction, rather than inventing a denominator. | `jrc-ilcd-general-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| recovery_unit | Wet sulfolane reformate recovery and fractionation | required | Declared route only; submeter each operation | foreground_process | accepted_toluene; 1 kg |

### Process: Wet sulfolane recovery (`recovery_unit`)

#### Inputs

##### Product flows

###### Catalytically reformed naphtha extraction feed (`reformate_feed`)

Received hydrofined or otherwise demonstrated extraction-ready reformate, with batch-specific C6-C8+ composition, water, sulfur and olefin analysis. Upstream reforming, feed splitting and any required hydrofining are in the actual upstream provider boundary, never free or repeated here. Record whole mixture mass and assay, not only contained toluene.

- Selected flow: Catalytically reformed naphtha extraction feed
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-lvoc-2017`

###### Sulfolane solvent makeup (`sulfolane_makeup`)

Record fresh tetrahydrothiophene 1,1-dioxide makeup, CAS126-33-0, including declared delivery water and other constituents if present. Retain whole supplied formulation mass and component ledger; pure sulfolane identity alone cannot represent a diluted delivered formulation. Circulating lean/rich solvent is an internal transfer, not repeated fresh input.

- Selected flow: Sulfolane solvent makeup
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-lvoc-2017`

###### Process-water makeup (`water_makeup`)

External liquid water entering wet-solvent adjustment and raffinate washing. Meter fresh makeup only. Keep recirculating wash water, stripped water and entrained feed water in the internal water ledger. Actual supplier or direct abstraction and treatment must be identified.

- Selected flow: Process-water makeup
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-lvoc-2017`

###### Activated clay for aromatic extract polishing (`clay_charge`)

Fresh clay charged to remove trace olefinic impurities before fractionation. Record actual mineral formulation, charge, service campaign and supplier. No numerical clay life or dose is assumed; consumed service and retained bed stock are reconciled without deleting the full fresh/spent physical exchanges.

- Selected flow: Activated clay for aromatic extract polishing
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumable`
- Sources: `jrc-lvoc-2017`

###### Purchased alternating-current electricity (`electricity`)

Include extraction and circulation pumps, vacuum equipment, cooling pumps, fractionation auxiliaries, tank transfer and attributable controls. Meter actual voltage and geography; convert kWh by 3.6. Purchased electricity is separate from steam and liquid water.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-lvoc-2017`

###### Purchased indirect-heating steam (`indirect_steam`)

Whole steam commodity supplied to reboilers and solvent recovery/regeneration heat exchangers, at actual pressure, temperature, dryness and supplier return convention. Record steam mass and enthalpy, and condensate return separately. Link one steam supplier burden; a derived MJ heat account is a check, not a second purchased heat exchange.

- Selected flow: Purchased indirect-heating steam
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-lvoc-2017`

###### Purchased direct-contact stripping steam (`direct_steam`)

Record actual external steam used for stripping, vacuum ejectors or clay steam-out, separated by point of use. Internally generated water-stripper steam is an internal link and not purchased twice. Direct-contact condensate goes to its actual contaminated-water account, not the clean utility return.

- Selected flow: Purchased direct-contact stripping steam
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-lvoc-2017`

###### Cooling-water makeup (`cooling_makeup`)

Fresh liquid makeup for the declared recirculating cooling loop. Meter separately from process-water makeup and record evaporation, drift, blowdown and stock; circulation itself is not repeated intake. A once-through or refrigerant cooling design requires a separately complete extension.

- Selected flow: Cooling-water makeup
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-lvoc-2017`

###### Nitrogen for tank blanketing (`nitrogen`)

Include only if actual tanks or solvent system use nitrogen blanketing. Retain supplier purity, pressure and metered mass; convert gas volume only with declared temperature, pressure, composition and compressibility. Absence needs operational evidence; no default purge is imposed.

- Selected flow: Nitrogen for tank blanketing
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumable`
- Sources: `jrc-lvoc-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Toluene (`accepted_toluene`)

One accepted bulk liquid toluene product at the plant delivery gate. Keep net whole commercial product mass, measured toluene assay, water, benzene/non-aromatic impurities and acceptance specification. This is not a neat-component mass, solvent blend, spent solvent or transported-market product. Native generic production-mix identity does not prescribe technology shares or a provider.

- Selected flow: Toluene `33ac34b7-d691-4eda-8563-daef49a05157`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference`
- Sources: `jrc-lvoc-2017`

###### Recovered benzene commercial product (`benzene_coproduct`)

Physically separate benzene-column distillate sold to a documented user at actual purity and gate. Record whole product mass, assay, destination and price. Do not bind a native Brazil transport interface or a technology-share mix to this single reformate-recovery output without genuine compatibility.

- Selected flow: Recovered benzene commercial product
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Sources: `jrc-lvoc-2017`

###### Toluene-column C8-plus aromatic bottoms product (`c8_aromatic_cut`)

One undivided useful C8-plus aromatic cut leaving the toluene column. Retain mixed-xylene isomers, ethylbenzene and higher-boiler assay and receiver. Do not rename the whole cut pure xylene or p-xylene. Further xylene purification/isomerisation is outside this route and belongs to the downstream receiver.

- Selected flow: Toluene-column C8-plus aromatic bottoms product
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Sources: `jrc-lvoc-2017`

###### Washed non-aromatic reformate raffinate (`raffinate`)

Useful non-aromatic raffinate after solvent washing, with actual residual aromatics, sulfolane and water assay. Its buyer and refinery/solvent use must be evidenced. This mixture is not a named pure alkane and receives no automatic avoided-gasoline credit.

- Selected flow: Washed non-aromatic reformate raffinate
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_outputs`
- Sources: `jrc-lvoc-2017`

###### Returned indirect-steam condensate (`condensate_return`)

Actual uncontaminated liquid return to the steam supplier, with mass, temperature and common-datum enthalpy. This utility return is not a separately sold coproduct and has no allocation share. Unreturned or contaminated condensate stays in actual water/waste accounts.

- Selected flow: Returned indirect-steam condensate
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility`
- Sources: `jrc-lvoc-2017`

##### Waste flows

###### Sulfolane-regenerator degradation residue (`solvent_regenerator_residue`)

Actual solvent-regenerator purge containing sulfolane degradation products and retained hydrocarbons. Measure removed whole mass and composition, waste classification and receiving treatment. Internal regenerated solvent is a return, not this waste.

- Selected flow: Sulfolane-regenerator degradation residue
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `jrc-lvoc-2017`

###### Spent aromatic-polishing clay (`spent_clay`)

Whole exhausted clay after actual steam-out, retaining clay, hydrocarbons, water and deposits. Record campaign, removed mass, retained contamination and treatment destination. Record actual fresh replacement and bed-stock change; service amortisation never substitutes for the whole material exchange.

- Selected flow: Spent aromatic-polishing clay
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `jrc-lvoc-2017`

###### BTX-and-sulfolane-bearing aqueous purge (`process_effluent`)

Actual aqueous purge from solvent/water recovery, benzene receiver boot and clay steaming to external treatment. Retain separately measured source volumes/densities and analytes before aggregation when they share a verified treatment interface. This is a contaminated-water mixture, not elemental water released to a river.

- Selected flow: BTX-and-sulfolane-bearing aqueous purge
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `jrc-lvoc-2017`

###### Recirculating-cooling blowdown (`cooling_blowdown`)

Liquid cooling-loop purge to the actual receiver, separate from BTX process effluent and utility condensate return. Retain water-treatment additives and impurity analysis; add each actual fresh additive as its own input before claiming inventory completeness.

- Selected flow: Recirculating-cooling blowdown
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastes`
- Sources: `jrc-lvoc-2017`

###### Captured aromatic process vent to external abatement (`captured_vent`)

Captured gas crossing to the actual external shared abatement or recovery service. Measure whole gas mass and species composition at the handover; include actual treatment burden. Do not also enter captured species as direct air releases. Only final uncaptured/residual releases belong to elementary outputs.

- Selected flow: Captured aromatic process vent to external abatement
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources: `jrc-lvoc-2017`

##### Elementary flows

###### Benzene to outdoor air (`benzene_air`)

Measure residual stack, vacuum, tank/loading and fugitive benzene separately after capture/control; integrate non-overlapping releases. CAS71-43-2; an elementary flow in the wrong compartment is not a substitute.

- Selected flow: Benzene to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources: `jrc-lvoc-2017`

###### Toluene to outdoor air (`toluene_air`)

Measure final residual toluene CAS108-88-3 by source and operating time. Product toluene UUID is never used as an elementary emission; captured-transfer and final-release quantities are disjoint.

- Selected flow: Toluene to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources: `jrc-lvoc-2017`

###### o-Xylene to outdoor air (`oxylene_air`)

Quantify the o-isomer CAS95-47-6 only when present, separately from m/p isomers and other C8 hydrocarbons; sum to total VOC only as a cross-check.

- Selected flow: o-Xylene to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources: `jrc-lvoc-2017`

###### m-Xylene to outdoor air (`mxylene_air`)

Quantify the m-isomer CAS108-38-3 only when present; keep sampling method, detection limit and release compartment.

- Selected flow: m-Xylene to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources: `jrc-lvoc-2017`

###### p-Xylene to outdoor air (`pxylene_air`)

Quantify the p-isomer CAS106-42-3 only when present; a pure-isomer release cannot stand for the full aromatic cut.

- Selected flow: p-Xylene to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources: `jrc-lvoc-2017`

###### Ethylbenzene to outdoor air (`ethylbenzene_air`)

Quantify ethylbenzene CAS100-41-4 in actual final air releases when present; it is distinct from every xylene isomer and from toluene.

- Selected flow: Ethylbenzene to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources: `jrc-lvoc-2017`

###### Sulfolane to outdoor air (`sulfolane_air`)

Screen final vents and entrained aerosol for sulfolane CAS126-33-0; retain sampling phase and quantify actual residual mass. Low volatility does not prove absence, and collected aerosol is not direct emission.

- Selected flow: Sulfolane to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources: `jrc-lvoc-2017`

###### Sulfur dioxide to outdoor air (`sulfur_dioxide_air`)

Screen solvent degradation and final vent treatment for SO2 CAS7446-09-5; quantify only actual final releases. There is no stoichiometric assumption that all lost sulfolane becomes SO2.

- Selected flow: Sulfur dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources: `jrc-lvoc-2017`

###### Nitrogen to outdoor air (`nitrogen_air`)

Quantify actual uncaptured or final residual nitrogen from blanketing if used; preserve captured-transfer boundary and do not infer nitrogen loss from an imposed purge rate.

- Selected flow: Nitrogen to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources: `jrc-lvoc-2017`

###### Water vapour to outdoor air (`water_vapour_air`)

Quantify actual cooling evaporation and other final water-vapour releases from the separate water ledger. Keep drift droplets, wastewater and internal process steam distinct; add actual droplet/component releases separately.

- Selected flow: Water vapour to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Cumulative physical exchange amount belonging to the new first-accepted production cohort / Q; cp_reference. Retain inherited material/burden vectors, original numerator units and separate actual-period physical ledgers. Old-cohort service stays separate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_releases`
- Sources: `jrc-lvoc-2017`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | recovery_unit | Retain unallocated whole-stream mass/component/water/energy balances first. Subdivide metered operations and assign directly identifiable product storage, loading and dedicated column duties to the product that causes them. Keep raffinate, benzene and C8-plus product services, mixed residuals and shared solvent recovery visible; no physical coproduct quantity is scaled by an allocation share. | `jrc-ilcd-general-2010`; `jrc-lvoc-2017` |
| allocation_causality | recovery_unit | For each remaining joint burden, test and document physical causality from measured component recovery and operation responses. Mass share is permissible only for a burden demonstrably driven by handled mass; use a relevant measured constituent share where composition causes the burden. Energy allocation is limited to actual useful energy products on an evidenced calorific/enthalpy basis; chemical BTX and raffinate are not all fuel services. No universal mass or heat-value default applies. | `jrc-ilcd-general-2010` |
| allocation_residual | recovery_unit | For residual joint burdens without determining physical causality, use disclosed study-consistent economic shares a_i=m_i*p_i/sum(m_j*p_j) across actual useful co-products at their separation gates, using observed same-period net prices, consistent currency and positive value. Document missing/zero/negative-price cases for review, not fabricated shares. Test plausible price sensitivity; do not combine attributed burdens with avoided-product credits. Waste treatment remains with the causing process; internal solvent/water loops, condensate return and captured gas awaiting abatement have no saleable-product share. | `jrc-ilcd-general-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | recovery_unit | accepted_toluene | measurement | lot id; original cohort; first acceptance date; assay/water/impurities; specification; liquid state; tare/density; newly accepted dispatch; new closing FG; opening FG; returns; Q; Q0 | Calibrated net weighing or temperature-corrected tank gauging with measured compatible density; chromatographic assay and water analysis; reconcile sales, acceptance and stock by immutable lot identity. | kg | Every batch or continuous meter; full-period reconciliation | One declared complete operating period including start/stop | Actual recovery unit and declared route | per 1 kg reference flow | Calibration, raw assays, lot reconciliation and disclosed gaps |
| cp_material | recovery_unit | reformate_feed; sulfolane_makeup | measurement | supplier; exact formulation; whole kg; component assay; feed readiness; fresh supply; transfers; opening/closing raw solvent WIP and carried burden vector | Weigh or gauge every fresh receipt; assay representative batches; reconcile independent lean/rich/stripper/recovery/wash transfer meters and sampled components. | kg | Every batch or continuous meter; full-period reconciliation | One declared complete operating period including start/stop | Actual recovery unit and declared route | per 1 kg reference flow | Calibration, raw assays, lot reconciliation and disclosed gaps |
| cp_utility | recovery_unit | electricity; indirect_steam; direct_steam; condensate_return; water_makeup; cooling_makeup | measurement | operation; meter; kWh; steam kg T P dryness enthalpy; return kg state; water kg; evaporative and blowdown terms; supplier convention; losses; calibration | Submeter extraction, recovery/regeneration and each column/cooling operation; separate direct and indirect steam and physical water. Reconcile purchased utilities and the complete steam/condensate/water balance. | MJ; kg | Every batch or continuous meter; full-period reconciliation | One declared complete operating period including start/stop | Actual recovery unit and declared route | per 1 kg reference flow | Calibration, raw assays, lot reconciliation and disclosed gaps |
| cp_consumable | recovery_unit | clay_charge; nitrogen | measurement | actual formulation; fresh charge kg; campaign; retained bed mass; removal; blanketing use; meter states; gas conversion; incremental service ledger | Record issues and stocks, actual fresh/spent campaigns and independently measured service usage. A shared campaign splits only the service burden by evidenced use; full physical exchange remains in its real period. | kg | Every batch or continuous meter; full-period reconciliation | One declared complete operating period including start/stop | Actual recovery unit and declared route | per 1 kg reference flow | Calibration, raw assays, lot reconciliation and disclosed gaps |
| cp_outputs | recovery_unit | benzene_coproduct; c8_aromatic_cut; raffinate | measurement | stream id; whole kg; all measured constituents; destination; sale/use evidence; separation gate; net price; currency; stocks; burden vector | Independently weigh or gauge and assay each distinct output; reconcile acceptance and buyer records without turning an undivided cut into pure components. | kg | Every batch or continuous meter; full-period reconciliation | One declared complete operating period including start/stop | Actual recovery unit and declared route | per 1 kg reference flow | Calibration, raw assays, lot reconciliation and disclosed gaps |
| cp_wastes | recovery_unit | solvent_regenerator_residue; spent_clay; process_effluent; cooling_blowdown | measurement | source; whole kg or volume and density; composition including water; campaign; receiver; treatment; stocks; manifest; leach/analyte record | Measure every actual removal and retain separate originating streams, treatment interface and composition. Reconcile fresh/spent and water balances; select real treatment, never assumed generic disposal. | kg | Every batch or continuous meter; full-period reconciliation | One declared complete operating period including start/stop | Actual recovery unit and declared route | per 1 kg reference flow | Calibration, raw assays, lot reconciliation and disclosed gaps |
| cp_releases | recovery_unit | captured_vent; benzene_air; toluene_air; oxylene_air; mxylene_air; pxylene_air; ethylbenzene_air; sulfolane_air; sulfur_dioxide_air; nitrogen_air; water_vapour_air | measurement | outlet; species CAS; phase; concentration; wet/dry gas flow; T P; operating time; controls; captured transfer; final residual; detection limits; water evaporation | Screen actual component releases and measure representative routine/start-stop/loading/fugitive conditions; integrate concentration with compatible exhaust flow and hours. Keep transfer and residual boundaries separate; add every other actual species atomically. | kg | Every batch or continuous meter; full-period reconciliation | One declared complete operating period including start/stop | Actual recovery unit and declared route | per 1 kg reference flow | Calibration, raw assays, lot reconciliation and disclosed gaps |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | Divide each cumulative physical exchange belonging to the newly accepted cohort, including inherited upstream/WIP terms and actual incremental operations, by positive first-acceptance Q; accepted_toluene equals 1 kg. Retain the unallocated ledger and units. Compute separately attributed burden vectors using subdivision and documented joint shares, then divide each cohort vector by its own accepted quantity. Never erase coproduct mass or move opening-FG service into current Q. | cp_reference; period records; cohort ledger | per 1 kg reference flow | `jrc-ilcd-general-2010` |
| component_balance | recovery_unit | For each whole stream use measured component kg=whole kg times its measured mass fraction. For total mass and conserved elemental C/H/S, check input plus opening stocks equals outputs plus closing stocks, with zero net elemental generation. For each reactive chemical species X, including sulfolane degradation and water, use opening X + external input X + actual G_X = closing X + external output X + actual C_X; establish actual formation/consumption from matched analysis or supported stoichiometry with measured reaction extent. Unknown species conversion remains unresolved; do not impose species conservation or assume complete degradation. Retain measured losses and uncertainty. Keep raw/WIP/FG burden vectors separate from physical mass. Unknown residual is a finding, never a fictitious product or zero. | cp_material; cp_outputs; cp_wastes; cp_releases; stocks | unallocated component and water balances | `jrc-lvoc-2017`; `jrc-ilcd-general-2010` |
| heat_check | indirect_steam; direct_steam; condensate_return | Calculate net incoming-minus-return enthalpy using measured kg and same-datum states; kJ/1000=MJ. Track direct steam into process water and distinguish clean indirect return. Internal recovered heat/water is not a new supplier input or avoided-heat credit. | cp_utility; measured mass; specific enthalpy; states | physical heat and water check | `jrc-lvoc-2017` |
| release_integral | benzene_air; toluene_air; oxylene_air; mxylene_air; pxylene_air; ethylbenzene_air; sulfolane_air; sulfur_dioxide_air | Integrate species concentration times compatible gas-flow rate times operating duration, correct units, then divide by Q. Sum disjoint outlets/phases only; retain uncertainty and detection limits. Captured vent enters its external treatment once; do not count both captured molecules and treatment final emissions as direct releases here. | cp_releases; concentration; flow; time; Q | kg per 1 kg reference flow | `jrc-lvoc-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Confirm whole physical identity, type, phase/composition, property/unit and gate before linking a provider. Ordinary unresolved UUIDs/providers stay explicit gaps, not absent exchanges; product Toluene cannot identify an air emission. Native CPC35499 classification debt does not rewrite chemical CAS/type or the independent official CPC34110 scope. | Native records and supplier/receiver analysis |
| quality_coverage | recovery_unit | Cover normal and abnormal operation, component assay variation, solvent degradation, wash and steam-out discharges, actual cleaning/additives, stocks and every output destination. No JRC historical BB2 energy range or vendor purity/recovery number is a plant default. Add all actual omitted atomic exchanges before claiming completeness. | Full-period operations and missing-data register |
| quality_cohorts | cp_reference | Prove unique first acceptance and raw/WIP/FG carryover; retain original Q0 for any later service correction. Unknown old denominator permits only a raw correction record pending review. Record sampling and allocation uncertainty without invented tolerances. | Lot-linked stock, burden vectors, calibration and acceptance records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | accepted_toluene | Require one whole liquid commercial Toluene reference output and all qualifiers; reject styrene/polymer, solvent blend, emission, wrong market gate or component-only quantity. Missing core identity blocks usable methodology; generic name alone cannot verify a study. | `jrc-lvoc-2017` |
| validate_quantities | all inventory rows | Require Q>0 and finite nonnegative physical quantities, common period and 1 kg basis in both languages. Test volume-density and fraction/percent conventions, full steam/return/water separation and mass/component closure against measured uncertainty. Reject double first acceptance, component-scaled product reference, recycling as fresh input and double steam heat burdens. | `jrc-lvoc-2017`; `jrc-ilcd-general-2010` |
| validate_allocation | recovery_unit | Check every saleable output and branch point, evidence for subdivision/causality and residual economic shares. Shares sum to one only for the relevant useful co-functions; retain full physical outputs, no avoided-product credit, waste/return exclusions and original-cohort Q0. Unresolved allocation is study review, never a fabricated passing factor. | `jrc-ilcd-general-2010` |
| validate_completeness | recovery_unit | Check final atmospheric species/phases, captured gas receiver, BTX/solvent water treatment, spent clay and solvent residue, supplier compatibility and stock vectors. Additional actual additives/emissions require atomic extensions. A passed structural/measurement check does not remove identity/provider/quantity gaps or confer scientific, translation or study approval. | `jrc-lvoc-2017`; `jrc-ilcd-general-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared bulk toluene recovery route at its verified plant gate, with complete actual upstream/treatment links and explicit allocation/cohort metadata |
| excluded_use | Universal toluene production mix; other feed/solvent routes; pure-component quantity substitutes; completed comparative assertion or automatic avoided-gasoline credit |
| required_metadata | Reference qualifiers; site/time; feed composition/readiness; utilities and steam return; every coproduct/waste/air destination; stock and burden vectors; Q/Q0; actual allocation and provider pins |
| required_quality_disclosure | Native classification debt; unresolved ordinary identities/providers; sampled conditions; analytical uncertainty; missing records; original-source limitations; allocation/price sensitivity; review and study states |
| update_trigger | Feed readiness/composition, extraction technology/solvent, product gate/specification, steam/cooling/abatement, coproduct use, stock rules or allocation evidence changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-lvoc-2017 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Production of Large Volume Organic Chemicals (2017), JRC109279, DOI 10.2760/77304; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/JRC109279_LVOC_Bref.pdf | §4.2.2.2 and Figure4.3, printed197–199/PDF235–237: extraction-ready feed, wet sulfolane loops, raffinate washing, clay and fractionation; §§4.3.1.2,4.3.2.2,4.3.3–4.3.6, printed212–218/PDF250–256: final air, water, solvent/clay waste and utilities. Qualitative route evidence only; historical energy and purity values are not defaults. |
| jrc-ilcd-general-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March2010, EUR24708EN/JRC48157, DOI10.2788/38479; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC48157/ilcd_handbook-general_guide_for_lca-detailed_guidance_12march2010_isbn_fin.pdf | §§7.9.2–7.9.3, printed255–272/PDF275–292: subdivision, flow-specific determining physical causality and residual market-value allocation. Cohort/stock handling and first-acceptance rules are explicit PCR foreground-protocol synthesis, not a quoted ILCD factory formula or default allocation factor. |
| honeywell-aromatics-recovery | literature | Honeywell UOP, Aromatics Recovery, official technology page, snapshot retrieved 2026-11-06; https://uop.honeywell.com/en/industry-solutions/petrochemicals/aromatics-recovery | Independent vendor counterevidence distinguishes simplified ED Sulfolane for reformate-splitter overhead from traditional Sulfolane. Vendor purity/recovery/cost claims are not adopted for this wet liquid-liquid route. |
