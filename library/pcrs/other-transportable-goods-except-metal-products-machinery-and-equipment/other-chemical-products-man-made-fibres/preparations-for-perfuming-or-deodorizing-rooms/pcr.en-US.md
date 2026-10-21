---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.preparations-for-perfuming-or-deodorizing-rooms
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Nitrogen-pressurised aqueous ethanol/DPnP room-fragrance aerosol manufacture

## 1. Scope and Applicability

This PCR covers one narrower physical manufacturing route: blend separately received water, ethanol feed, dipropylene glycol n-propyl ether (DPnP) and purchased fragrance oil blend without separately added surfactant or corrosion inhibitor; fill printed tinplate aerosol cans, fit conventional crimped valves, charge purchased gaseous nitrogen, fit PP actuators/overcaps and shipping cartons, and release the qualified finished aerosol. The representative route uses purchased DI water, electric services and onsite compressed-air generation. Actual recipe, sequence, mixing conditions, gas purity/pressure, test method and can compatibility must be independently evidenced; no patent percentages, equipment capacity, cycle consumption or example operating conditions become default LCI values. [ep3481439-aerosol; zigler-nitrogen-filling]

The independent method need is the retained gas plus pressure-container manufacture/filling boundary and the actual DPnP co-solvent route, not the room-use label. Bulk fragrance concentrate is an upstream input, not the finished preparation. Hydroalcoholic body perfume with an otherwise identical supported physical route may be conditionally reused or revised under one identity after independent boundary review; dual-use labelling alone never justifies a duplicate PCR. This method does not claim the entire CPC35331 leaf. Exclude pump-only perfume, gels, impregnated substrates, candles/incense, adsorbent blocks, BOV, LPG/DME propellants, other co-solvents, onsite fragrance/ethanol/N2 synthesis and standalone air-cleaning/disinfection services. Different actual ingredients or operations need explicit atomic additions and boundary review, rather than suppression to fit this representative route. [un-cpc3-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.preparations-for-perfuming-or-deodorizing-rooms |
| classification_refs | CPC 3.0 35331; narrower |
| covered_products | Water/ethanol/DPnP/fragrance aerosol with nitrogen propellant in conventional tinplate cans |
| excluded_products | Bulk fragrance; body perfume alone; gel/substrate/candle/adsorbent/BOV/LPG routes; purification service |
| representative_product | One actual SKU/formulation and container system, uniquely first released |
| production_route | Purchased ingredient blending; liquid filling; valve crimping; gas pressure filling; actual testing and packing; first quality release |
| market_state | Pressurised finished aerosol; net contents including retained nitrogen, packaging burden included separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a qualified room-fragrance aerosol preparation |
| How much | 1 kg |
| How well | Actual accepted composition and pressure-container specification; no assumed disinfectant efficacy, odour removal equivalence or purification service |
| How long or cycle | One first production-quality-release event; no default service life, room area, dose or shelf life |
| reference_flow_link | finished_aerosol |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Preparations for perfuming or deodorizing rooms `377fa3df-04b2-4d8c-8d71-27f049e0d10e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU and formulation revision; complete supplied feed/mixture composition; actual co-solvent isomers/grade; retained nitrogen and fill state; pressure-can/valve material and compatibility; net/gross/tare method; first quality-release gate; site and period; WIP and stock cohort genealogy; upstream route/geography/provider basis; actual test and emission speciation; cut-offs |

Missing required qualifiers make the concrete dataset reference incomplete. The manufactured-at-plant generic native reference establishes physical identity only; its complete limits are retained on finished_aerosol. Packaging is outside the reference mass but inside the production burden.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the unique positive net contents mass first newly quality-released in the matched production period/cohort, including retained propellant and carrier water, excluding all container/packaging tare. Q is not dispatch mass. |
| single_basis | all inventory denominators | Mass | kg | Convert complete attributable raw numerators to their own units, then normalize once to positive Q; retain energy and emission units. Integrated gas/liquid volume receives no additional time multiplier. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased complete ingredients, supplied gaseous nitrogen, finished empty pressure packaging and their carried opening inventory burdens at the formulation/filling site |
| starting_condition_role | Receiving and physical formulation/filling, not upstream manufacture as an omitted free input |
| product_classification_scope | CPC 3.0 35331; narrower |
| recursive_input_rule | A purchased room-fragrance premix is one whole commercial input with full upstream formulation burdens, not an unburdened same-category shortcut. It changes the selected separately charged route and needs an explicit boundary revision, without duplicate constituent procurement. |
| upstream_dataset_requirement | Match actual complete supplied form, concentration, grade, route, gas state, geography and delivery; retain upstream chemical synthesis, gas separation/compression, packaging fabrication/coating/printing and transport burdens |
| disclosure | Declare production-release gate separately from warehouse/dispatch, physical cohort, actual packaging/tests/cleaning, shared utilities, storage/handling, exclusions, allocation and complete opening/closing WIP/stock burdens |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_production | aerosol | Include receiving/storage, blending, transfer, can filling, valve crimping, nitrogen charging, actual pressure/leak/quality tests, packing and first release, cleaning, failed runs and all upstream burdens. Retain actual heat/fuel/refrigerant/laboratory consumables with separate atomic exchanges if present; this representative electric route never licenses their omission. | `ep3481439-aerosol`; `zigler-nitrogen-filling` |
| boundary_cohort | aerosol | Finished warehouse/handling/dispatch is a separate raw ledger for the same released cohort when included. Eliminate its internal receipt from production on consolidation, retain its actual attributable burdens, and never add closing finished goods of Q as another production output. No automatic equivalence of released and delivered kg. |  |
| boundary_use | reference product | Use-stage spraying, room exposure, device power, lifetime, area, deodorization/disinfection/air-cleaning function and end-of-life are outside this production inventory and need separate evidence and boundaries. Do not move real manufacturing test sprays or packaging into the excluded use stage. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| aerosol | Formulation, pressure filling and quality release | required | Selected conventional nitrogen aerosol route; actual operations documented | foreground | finished_aerosol |

### Process: Formulation, pressure filling and quality release (`aerosol`)

#### Inputs

##### Product flows

###### Purchased ethanol feed (`ethanol`)

Native Product/Mass identity is ethanol CAS64-17-5, production mix at plant, with no specified concentration, grade, route or geography. The native class35499 is a classification debt, not evidence for a different molecule or a residual-only chemical identity. Use one complete purchased ethanol supply, including actual water and denaturants when present, with verified composition/provider reconciliation; do not silently bind a pure-ethanol provider to a hydrous or denatured formulation. Water and denaturants in that supply are non-additive constituent subledgers. Other purchased denaturants need separate cards. The generic ethanol molecular candidate is not bound to this whole commercial solution pending complete supply-state identity; this auxiliary gap does not change the finished reference. No native coefficient is a density.

- Selected flow: Supplied ethanol feed solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `ep3481439-aerosol`

###### DPnP co-solvent charge (`dpnp`)

Record the complete supplied DPnP grade with actual isomer distribution, assay, carrier and impurities. DPM (methyl ether), DPG (unetherified glycol), ethylene glycol ethers and propylene-glycol n-propyl ether are different identities and cannot substitute. The patent identifies DPnP but establishes no supplier grade, density or actual charge. UUID remains unbound.

- Selected flow: Dipropylene glycol n-propyl ether
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `ep3481439-aerosol`

###### Purchased fragrance oil blend (`fragrance`)

Native Product/Mass, generic at plant, purchased fragrance oil blend, with no CAS, fixed composition, grade, geographic location or quantitative properties beyond reference Mass factor1. This is one purchased whole mixture, not duplicate procurement of its individual constituents. Obtain complete supplier composition and carrier basis for upstream matching, mass/element balances and actual emitted-species identification. A scent name does not supply these data.

- Selected flow: Fragrance mixture `2fb8cc73-e146-4ff5-a9c4-76a98611a010`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `ep3481439-aerosol`

###### Separately added formulation water (`formulation_water`)

Native Product/Mass, CAS7732-18-5, production mix at plant; name-route specifies ion exchange or reverse osmosis, pure substance. Comment additionally mentions distillation and production/consumption supply; no numerical quality standard or geography is specified. Restrict this binding to actually matched purchased ion-exchange/RO deionised water. Distilled-only water or onsite treatment requires its own verified identity and complete treatment inventory. Exclude water already inside purchased ethanol/fragrance from this separate procurement row.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `ep3481439-aerosol`

###### Gaseous nitrogen propellant supply (`nitrogen`)

Measure actual supplied gas mass, purity, pressure, temperature, delivery and production route; include line charging, purge, failed filling and retained propellant. The native air-separation N2 candidate has reference Mass coefficient1.25 without a volume property or stated density conditions; it is not adopted and never used as density. A bottling inerting make-up/vented gas is not this retained propellant supply. No liquid-N2/vaporization route, gas charge, pressure or gas-to-liquid volume ratio is presumed.

- Selected flow: Compressed nitrogen propellant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `zigler-nitrogen-filling`

###### Purchased pressure-rated can body (`can`)

One complete supplied pressure-rated tinplate can body with its integral ends, actual tin/steel, coating and printing. Record whole article mass and upstream fabrication/printing, without also procuring its steel, tin and coating constituent masses. Food-canning can identities do not establish pressure suitability. No default can mass or recycled fraction.

- Selected flow: Printed tinplate aerosol can body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`
- Sources: `ep3481439-aerosol`

###### Purchased aerosol dispensing valve (`valve`)

One actually supplied valve assembly including its dip tube, mounting cup and seals when supplied together; describe its metal/polymer/elastomer bill of materials and upstream assembly. Do not count constituent procurement a second time. This conventional valve is not a bag-on-valve; a bag requires a distinct material and pressure-boundary review.

- Selected flow: Aerosol dispensing valve assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`
- Sources: `zigler-nitrogen-filling`

###### Purchased spray actuator (`actuator`)

Record this separately purchased moulded actuator with actual resin/additives, mass and manufacture. It is not included in valve mass for this route. A different polymer or inseparable supplied article requires a corrected identity and procurement ledger.

- Selected flow: Polypropylene aerosol actuator
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`

###### Purchased protective overcap (`cap`)

One separately supplied moulded PP cap, actual mass/composition and upstream manufacture. Record rejects and inventory movement; no assumed piece mass or shared resin procurement.

- Selected flow: Polypropylene aerosol overcap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`

###### Corrugated shipping carton (`carton`)

Actual single shipping carton, including integral printing and closure supplied as part of that article; match fibre composition and converting burden. Separately purchased tape, pallet, label or stretch film needs its own atomic card when used; never hide them in carton mass.

- Selected flow: Printed corrugated fibreboard shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_packaging`

###### Purchased water for cleaning and tests (`cleaning_water`)

Use separately metered purchased ion-exchange/RO DI water only, subject to the complete native limitations stated in formulation_water: Product/Mass, CAS7732-18-5, plant production mix, no fixed quality standard/geography; comment also mentions distillation and consumer supply. Include actual washing and pressure/leak-test water makeup and losses; internal recirculation is not another purchase. A different actual water quality needs a separate corrected exchange.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_services`

###### Site electricity (`electricity`)

Meter blending, pumping, ventilation, compressed-air generation, pressure/testing, cleaning, laboratory, holding and handling with reconciled shared services. Native <1kV grid-average consumption candidate explicitly has locationOfSupply CN; leave this row unbound for an unspecified actual location/voltage/mix rather than imposing those conditions. Compressor electricity is counted here when compressed air is generated onsite, not again as purchased compressed air.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_services`

#### Outputs

##### Product flows

###### First quality-released filled aerosol contents (`finished_aerosol`)

Native Product/Mass, manufactured finished product, production mix at plant; no CAS, recipe, phase, grade, geography or locationOfSupply is specified and reference Mass factor is1. The binding is conditional identity for this measured finished aerosol, not a recipe, provider, pressure rating or deodorization performance. Q includes all net formulation and retained nitrogen at first quality release and excludes every packaging tare. Packaging burdens remain included. The generic UUID also does not make a bulk intermediate a second terminal reference.

- Selected flow: Preparations for perfuming or deodorizing rooms `377fa3df-04b2-4d8c-8d71-27f049e0d10e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_release`
- Sources: `ep3481439-aerosol`

##### Waste flows

###### Rejected bulk liquid removed for treatment (`liquid_residue`)

One actual segregated bulk liquid waste stream, net whole-mixture mass, complete composition and receiving treatment interface. Exclude internal rework until it actually leaves; whole waste mass and separately assayed constituent contents are not additive waste exchanges.

- Selected flow: Waste aqueous ethanol DPnP fragrance formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`

###### Collected washing effluent (`wash_effluent`)

Actual separately collected wash/test drainage sent to offsite treatment, with carrier water, dissolved chemicals and solids characterized. Do not also claim the same contained species as direct water emissions. Onsite treatment requires a complete added treatment inventory and separately measured final species/medium.

- Selected flow: Wastewater from aerosol formulation cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`

###### Rejected intact aerosol can transferred to treatment (`rejected_filled_can`)

One intact discarded physical article, including its measured retained contents and container, only where transferred intact. Keep tare/content/component subledgers. If onsite de-gassing or separation occurs, replace this intact handover with actual separately released gas, liquid and separated scrap streams and burdens; never record both whole article and its contained mass again.

- Selected flow: Waste filled aerosol can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`

###### Segregated carton rejects (`carton_scrap`)

Actual carton scrap separately weighed and transferred to its documented recipient. Recovery is not an automatic avoided-production credit; alternative separated packaging scrap requires additional actual atomic cards.

- Selected flow: Waste corrugated fibreboard carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`

##### Elementary flows

###### Actual ethanol released to air (`ethanol_air`)

Record independently measured ethanol mass released after actual capture, including fugitive transfer and rejected/testing sprays. Identify actual air subcompartment and fossil/biogenic origin if the characterization requires it. Total VOC, COD and closure residual do not identify ethanol. Do not count captured liquid here.

- Selected flow: Ethanol, air emission
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`

###### Actual DPnP released to air (`dpnp_air`)

Use independently supported DPnP species mass and air medium; no DPM/DPG surrogate or residual allocation. Actual perfume constituents released to air each require an additional chemically specific card after supplier/species identification; a generic fragrance-emission bundle is prohibited. No absence of those species is inferred from this representative list.

- Selected flow: Dipropylene glycol n-propyl ether, air emission
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`

###### Actual nitrogen vented to air (`nitrogen_air`)

Measure actual nitrogen-only purge/charging/test losses with independent gas composition and conditions; retained propellant remains in Q. Ambient air passed through onsite pneumatics is not all nitrogen propellant loss; disclose its separately metered physical passage and treat any actual lubricant aerosol as its own species. A product-N2 UUID is not an elementary-air UUID.

- Selected flow: Dinitrogen, air emission
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`

###### Actual water evaporated to air (`water_air`)

Independently establish evaporated water and medium from water/ventilation measurements; do not fit it and an unknown solvent outlet to the same closure residual. Water carried in product/waste remains in those ledgers. Physical blending and gas dissolution do not form stoichiometric reaction water.

- Selected flow: Water vapour, air emission
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted net contents kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all inventory rows | Use direct cohort/batch metering first. Allocate only genuinely shared burdens by measured causal drivers, with totals, driver units and reconciliation disclosed. No default economic or mass percentage is provided. |  |
| allocation_returns | aerosol | Failed and zero-output runs, rework and returns retain their actual burdens. Internal recovery is not external co-production; reaccepting an already released lot creates no new Q. Waste recovery has no automatic avoided-product credit. Document any real co-product separately with its actual physical mass, fate and allocation. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | aerosol | Complete commercial ingredients and nitrogen | batch_material_records | owner: material custodian; period; cohort; lot; supplier; all identity/route/grade/geography; supplied mass; assay basis; complete constituent fractions; gas pressure/temperature/composition; density source and conditions; opening/closing raw stores; issue/return; WIP burdens | Use calibrated weighing, receipt/charge records and supplier composition. Reconcile receipts, uncharged stores and actual issues as separate linked views, not additive purchases. Meter nitrogen mass independently of catalog coefficients and distinguish retained gas from purges. Whole formulations are one procurement; constituents are non-additive subledgers. Retain complete converted raw numerators and attributable opening/closing carried burdens without division. period_normalization alone divides once by Q; card formulas and aggregation_rule name the same final reporting operation. Q=0 retains the complete raw/burden pool without a normalized value. | kg; mass fraction; m3 with actual gas conditions | Every receipt/issue and batch | Complete actual period with earlier/later carry links | Same physical route/site/SKU and cohort | per 1 kg reference flow | Calibration; receipts; certificates; full composition; stock reconciliation |
| cp_packaging | aerosol | Each separately supplied packaging article | packaging_records | owner: packaging engineer; lot; bill of materials; pressure rating; whole article/tare mass; separately purchased items; rejects; opening/closing stock; supplier manufacture/printing/coating; compatibility test | Weigh representative actual articles with uncertainty and reconcile counts/masses, issues and scrap. Validate valve/can/actuator interfaces, retained contents and actual test rejection records. Include real extra labels, film, tape or pallets with separate exchanges. Retain complete converted raw numerators and attributable opening/closing carried burdens without division. period_normalization alone divides once by Q; card formulas and aggregation_rule name the same final reporting operation. Q=0 retains the complete raw/burden pool without a normalized value. | kg; item count with measured mass conversion | Each packaging lot and filling batch | Complete actual period and stock-linked cohorts | Same physical route/site/SKU and cohort | per 1 kg reference flow | Tare sampling; bills of materials; compatibility and pressure/test records |
| cp_services | aerosol | Actual utilities cleaning testing handling storage | meter_and_service_records | owner: utilities engineer; meter interval; voltage/location/mix; compression service; water; actual heat/fuel/refrigerants; test/cleaning/lab/ventilation; shared drivers; failures; warehouse/dispatch cohort links; opening/closing carried burdens | Submeter complete operations including startup/idle/failure, air compression and actual hot-water testing if present. Record either purchased compressed-air service or onsite compression resources, never both for the same service. Add every actual thermal/fuel/lab input as a specific exchange rather than assuming the electric representative list is complete. Keep actual matching finished-cohort storage/dispatch burdens in a separate linked ledger. Retain complete converted raw numerators and attributable opening/closing carried burdens without division. period_normalization alone divides once by Q; card formulas and aggregation_rule name the same final reporting operation. Q=0 retains the complete raw/burden pool without a normalized value. | kWh; kg; original service units | Each meter interval/service event | Full actual period including zero-output and warehouse cohort intervals | Same site and attributable actual product route/cohort | per 1 kg reference flow | Meters; invoices; allocation reconciliation; warehouse/handling records |
| cp_release | aerosol | Unique first production-quality release and inventories | quality_release_and_mass_records | owner: independent quality officer; period; formulation/container revision; lot/event genealogy; first-release decision; gross/tare/net contents and retained gas; rework/return; failed lots; opening/closing unreleased WIP; WIP carried burdens; separate released-finished stock/dispatch records | Weigh actual accepted filled articles and subtract matched actual packaging tare. Define Q solely as net contents newly first quality-released during the selected production period/cohort, positive and counted once. Old-stock dispatch, internal transfers, return/reinspection/reacceptance do not create Q. Reconcile production charges and opening unreleased WIP against Q, closing unreleased WIP and actual losses; released closing finished goods already belong to Q and are not added again. Warehouse ledger separately reconciles opening released stock plus receipt of Q against dispatch, closing stock and losses, with internal production receipt cancelled on consolidation; retain matching actual burdens. Retain complete converted raw numerators and attributable opening/closing carried burdens without division. period_normalization alone divides once by Q; card formulas and aggregation_rule name the same final reporting operation. Q=0 retains the complete raw/burden pool without a normalized value. | kg | Every release event and cut-off | Whole actual period and linked opening/closing cohort history | Same actual SKU/container/route and declared release gate | per 1 kg reference flow | Independent release certificate; calibrated gross/tare; failed/rework genealogy; WIP/warehouse reconciliation |
| cp_losses | aerosol | Each physical waste and actual emitted species | weighing_speciation_monitoring | owner: environmental metrology officer; actual period/cohort; whole waste/tare/contents; recipient; composition; captured/released species; air/water subcompartment; integrated volume or rate/time; gas temperature/pressure/wet basis; concentrations; uncertainty/detection limits; opening/closing held wastes and carried burdens | Use weighing manifests and independently validated species-specific measurements, including failed/zero-output runs, filling leaks and actual test sprays. No generic VOC/fragrance bundle, COD or mass residual establishes actual species. Retain complete measured water and elemental balances separately from independently evidenced chemistry. Integrated volume is not multiplied by duration again; account intact waste can or its separated outlets once. Retain complete converted raw numerators and attributable opening/closing carried burdens without division. period_normalization alone divides once by Q; card formulas and aggregation_rule name the same final reporting operation. Q=0 retains the complete raw/burden pool without a normalized value. | kg; m3 with conditions; species kg/m3; h only for rate integration | Each waste movement and monitoring interval | Full period including failed/testing/cleaning and carried burdens | Same physical site/product route/cohort | per 1 kg reference flow | Waste manifest; selective assays; capture/vent monitoring; uncertainty; independent closure investigation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | Convert and attribute the complete raw-period numerator of each exchange; divide once by positive Q defined only by first production-quality release in cp_release. Carry opening WIP burdens in and documented closing unreleased WIP burdens out. Retain failures, zero-output runs, all rework/returns and matched actual testing, packaging, storage, handling/dispatch burdens. Q is not deliveries; closing released finished goods of Q are not another production output or another closing production-WIP subtraction. A separate warehouse ledger cancels internal handover on consolidation and retains matching burdens without renormalizing already normalized factors. Q=0 preserves the full raw/burden pool without a normalized result. | cp_material; cp_packaging; cp_services; cp_release; cp_losses | Exchange amount per 1 kg reference flow |  |
| raw_conversion | all inventory rows | Use calibrated mass or independently evidenced volume times density at matched composition and conditions; convert pieces using actual measured article mass. Integrate rate times actual duration only for rate records. An integrated gas/liquid volume receives concentration or justified density conversion, no extra time factor. No native factor1.25 or secondary coefficient is a measured density. | cp_material; cp_packaging; cp_services; cp_losses | Converted raw quantities before normalization |  |
| mixture_subledger | ethanol; fragrance; dpnp; nitrogen | Constituent mass equals complete supplied commercial input mass times its compatible independently assayed mass fraction. Carrier water, solvents and impurities reconcile within that input, not another purchase. Do not treat v/v as w/w. Retained nitrogen is part of net product contents; total gas charged also includes measured losses. | cp_material; cp_release | Non-additive constituent ledger |  |
| physical_balance | all inventory rows | Maintain separate formulation/propellant, packaging and utility/ambient-air physical ledgers and independent elemental/water subledgers. Production charges plus opening unreleased WIP equal Q plus closing unreleased WIP, actual wastes/emissions and documented net transfers; net contents exclude packaging, so reconcile packaging to accepted-product tare and actual scrap separately. For an intact rejected filled can, only its separately measured contents enter the formulation/propellant ledger and its tare enters the packaging ledger; neither is added again beside the whole waste exchange. Internal recirculation cancels. Finished-stock warehouse balance is separate and must not add Q closing stock twice. Physical mixing/gas dissolution establishes no reaction yield or reaction water. Any actual chemistry or species/water formation/consumption needs independent evidence, never COD or fitting two unknown outlets to one residual. | cp_material; cp_packaging; cp_services; cp_release; cp_losses | Independent physical elemental water and species ledgers |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Retain complete native names, route/grade/form, geography and property/unit restrictions in actual dataset matching. Ordinary auxiliary UUID/provider gaps require later verified binding, not surrogate chemicals or zero burdens. | Full native records; supplier certificates; provider applicability |
| period | all inventory rows | Complete matched periods and positive unique Q; trace failed batches, returns, opening/closing WIP and every carried burden. Distinguish first release from actual net delivery and do not discard real warehouse/dispatch burdens. | Cohort genealogy; full raw ledgers; warehouse reconciliation |
| actual_product | reference product | Qualify actual formula, phase stability, can/valve compatibility, net contents and actual pressure/leak/release criteria using responsible laboratory/quality owners. Patent or equipment examples do not establish a real site recipe, certified safety or fragrance/disinfection function. | Actual validated tests; composition; container specifications |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_aerosol | Require the unique terminal Product output finished_aerosol to match reference UUID, Mass/kg and net contents at first quality release in both languages. An intermediate sharing a generic UUID remains visible and cannot be renamed or hidden to evade selection. |  |
| validate_full_period | all inventory rows | Check complete raw attribution, WIP/finished-stock distinction, carried burdens, failure/rework and one normalization; check physical/element/water balances independently from species. Unknown emissions or missing operations remain findings, never fitted residuals or assumed zero. |  |
| validate_scope | reference product | Confirm actual nitrogen conventional-pressure route and packaging. No area, lifetime, dose, disinfectant efficacy, purification service, recipe/operating default or universal full-leaf mapping follows from kg production. | `ep3481439-aerosol`; `zigler-nitrogen-filling` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Production inventory input to an explicitly scoped room-fragrance aerosol lifecycle model |
| allowed_use | Same actual physical route/formulation/container state and declared production-release gate, with measured complete inventory |
| excluded_use | Universal perfume/air-freshener service, bulk-concentrate equivalence, delivery-gate substitution, dose/lifetime/area or disinfection/purification claims |
| required_metadata | Reference qualifiers; native restrictions; actual recipe/container revision; site/period; Q gate; raw ledgers; WIP/stock genealogy; upstream providers and actual operations |
| required_quality_disclosure | Unbound auxiliary identities/providers; measured gaps; uncertainty; source limits; actual added exchanges; emission speciation completeness and allocation |
| update_trigger | Changed composition/co-solvent/propellant, substrate/container/valve, route/site, gate, provider basis, test/quality criterion or actual operations |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, pp.171–172, 35323/35331. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification headings only; no physical method distinction, accepted edge, recipe or full-leaf coverage is established. |
| ep3481439-aerosol | literature | European Patent Office, EP3481439B1, Air freshening formulation, aerosol product and method of freshening the air, 7 June 2023, paragraphs0013–0038 and claims1–10, PDF pp.2–4. https://data.epo.org/publication-server/rest/v1.0/publication-dates/20230607/patents/EP3481439NWB1/document.pdf | Primary patent supports surfactant-free water/ethanol/DPnP/fragrance plus gas/container route choices. This selected nitrogen/tinplate route is a bounded synthesis of those choices, not a reported factory recipe or demonstrated site. No percentages, pressure, volume ratio, particle size, duration, yield, energy, corrosion inhibitor dose, performance or legal approval is adopted. The optional inhibitor is not presumed; actual use requires its specific extra exchange. |
| zigler-nitrogen-filling | handbook | ZIGLER, Semi-automatic CO2/N2 Filling Machine Z-2013, manufacturer PDF, snapshot 16 October 2026, PDF pp.1–2. https://zigler.eu/wp-content/uploads/2022/03/SEMI-AUTOMATIC_CO2N2_FILLING_MACHINE_Z-2013_EN.pdf | Primary equipment description establishes gaseous nitrogen filling through a crimped valve and pneumatic services as technically available; no actual factory uses this model by assumption. CO2/BOV compatibility is not adopted as the selected product. No capacity, fill pressure, air consumption, temperature or supply specification becomes an LCI default; actual onsite air-compression and test loads require measurement. |
