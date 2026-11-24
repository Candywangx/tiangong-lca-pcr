---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.brooms-brushes-hand-operated-mechanical-floor-sweepers-not-motorized-mops-and-feather-d-1351a80f
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Complete wire-bound cotton yarn mops with wooden handles: manufacture and first release

## 1. Scope and Applicability

This candidate covers one complete manually operated cut-end cotton-yarn floor mop: a cut cotton-yarn head securely wire-bound to one full wooden handle. The manufacturer's YM-HY product establishes this actual whole-product construction. It is neither a replacement head nor a yarn/handle kit lacking attachment. The retained canonical identity is narrowed; no claim covers every broom, brush, sweeper, feather duster, pad, roller or squeegee in CPC 3.0 38993. [m2-cotton-yacht-mop]

The foreground starts with purchased already-made cotton yarn in bundles ready for feeding/cutting, a finished wooden handle and a supplied binding wire. It includes incoming checks, bundle feeding/length setting, dry cutting, wire binding and handle attachment, trimming where actually performed, strength/functional/completeness inspection and first whole-mop quality release. GIORI documents motorised feeding and circular-blade cutting of cotton yarn bundles; combining that operation with the manufacturer-supported wire-bound construction is a transparent technical synthesis. It is not a claim that M2 uses LIBO or that a contemporary order proves a common factory BOM. No mandatory on-site spinning, weaving, wood-handle manufacture, steelmaking, wire drawing or plastic injection moulding is inferred. [giori-libo-cotton-cutting; m2-cotton-yacht-mop]

Exclude standalone refills, synthetic/microfibre or sponge mops, loop/socket variants, powered sweepers/robots/vacuums, buckets and carts. These exclusions define eligibility, not permission to erase actual out-of-route work, tests or losses: record such activity and its real exchanges in a disclosed extension before a dataset claims coverage. New dry manufacture is distinct from a water-loaded mop during cleaning. Manufacturer presoak advice is a use-stage instruction; only actual factory test/wash/cleanup loads belong to manufacture. No fixed cotton percentage, alloy, species, handle dimension, mass per mop, lifetime, absorption, cleaning performance, recovery rate or emission factor is supplied. The YM-HY page's inconsistent 54-inch title and 48-inch feature cannot determine a site dimension. [m2-cotton-yacht-mop]

The manufacturer also supplies a detachable cotton-yarn mop with a universal socket and an optional metal handle; that alternative does not establish the wire-bound wooden-handle construction and is excluded. [m2-detachable-yacht-mop]

The normalized CPC 3.0 leaf assigns mops to 38993. Distinguish complete cleaning implements from separately supplied wooden handles (31911), supplied yarn (26360/26370 according to actual cotton composition), cleaning cloths (27190) and powered domestic appliances (44816). Adjacent 38992 covers baby carriages, 38994 toilet/smoking articles and 38999 residual articles; none substitutes for this complete mop. Other products inside 38993, including brushes, paint rollers and roller-excluded squeegees, remain outside this method. [unsd-cpc3-notes-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.brooms-brushes-hand-operated-mechanical-floor-sweepers-not-motorized-mops-and-feather-d-1351a80f |
| classification_refs | CPC 3.0 38993; narrower semantic subset under the maintained classification decision |
| covered_products | Complete cut-end cotton-yarn mop with wire-bound wooden handle |
| excluded_products | Replacement heads; synthetic or sponge mops; powered appliances; buckets/carts; separate yarn and handles |
| representative_product | YM-HY-type complete cotton yacht mop with integral wire attachment and wooden handle; actual specification required |
| production_route | Supplied cotton-yarn bundles and finished handle/wire → feeding and dry cutting → wire binding and assembly → checks → first release; subsequent storage/packing separately accounted |
| market_state | New dry complete usable mop at first quality release; measured residual moisture; packaging excluded from net product mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one complete manual floor-mopping implement |
| How much | 1 kg net mass of first-released complete mops; a manufacturing reference derived from whole units |
| How well | Declared model and materials; secure yarn retention and handle attachment; complete grip and working head; actual strength/function checks against the declared specification without a default threshold |
| How long or cycle | One first-release manufacturing cycle; no service-life or use-cleaning equivalence |
| reference_flow_link | finished_mop |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Complete wire-bound cut-end cotton-yarn mop with wooden handle |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | whole-mop model and drawing; cut-end cotton yarn identity and measured composition; virgin/recycled yarn source and supplied finish; full wooden handle species and coating state; binding-wire material and surface state; actual attachment design; site and cohort; first-release criteria and unique release IDs; individually measured net masses and conditioning/moisture method; opening/closing raw stock and WIP quantities; inherited exchange-specific burden vectors; first-release FG and subsequent services; actual utilities and voltage/geography; waste destination and environmental medium; packaging composition and return ledger; provider boundary and compatibility |

Declare every qualifier in the data package. This is production mass intensity derived from measured whole units, not delivery of a cut-up 1 kg mop or equivalence of different cleaning services. The reference product is one specific whole-mop exchange qualified here; database identity must be verified before binding a provider.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Q = sum of calibrated net masses of complete mops first passing the declared quality gate in cohort c. Exclude packaging and externally added test/use water; declare conditioning and residual moisture. cp_release measures the whole units; count alone or catalogue head weight cannot set Q. |
| single_normalization | all inventory rows | Declared numerator property | kg; MJ; m3; h; kg*km | cp_raw collects raw unnormalised observations. After conversion and justified attribution, apply normalize_once once to each ledger column A with Qc. H is only the observation window. Keep physical V independent of environmental attribution B: economic shares or WIP burden transfers never reduce V. Qc = 0 retains all loads without a unit result. |
| electricity_units | make_electricity; service_electricity | Electrical energy | MJ | Metered electrical kWh × 3.6 gives MJ before normalization. Verify the electrical-energy property/unit support chain and actual supply geography, voltage and provider boundary before database binding; no invented transformer or generation fuel. |
| fluid_units | make_air; make_water; service_water; make_hotwater; make_heat_return | Measured fluid property | m3; kg; MJ | Integrate only true rates. An already integrated gas/liquid volume is not multiplied by time again. Record pressure, temperature, humidity and meter reference state; use independently determined density for that substance/state only. Never infer density from a secondary native property. Supplied heat and carrier mass/enthalpy/return use one provider energy account and a non-additive physical bridge. |
| moisture_elements | all inventory rows | Mass | kg | Keep commercial whole wet mass distinct from dry solids and component water; choose whole-object entries or a documented non-additive component bridge. Measure cotton and wood moisture independently by suitable sampling and dry-mass methods with volatile-loss uncertainty. Separate biogenic cotton/wood carbon, fossil resin/oil carbon and environmental water. Dust is a measured particulate stream, not a fibre molecule. No single residual may fit two unknowns. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished cotton-yarn bundles, one supplied complete wooden handle and binding wire; actual moisture, composition, finish and package recorded |
| starting_condition_role | Foreground receipt/issue gate; all supplier preparation burdens remain upstream once |
| product_classification_scope | Only the stated complete manually operated cotton cut-end wooden-handle mop |
| recursive_input_rule | Already complete purchased/returned mops retain upstream/original cohort burdens. Reinspection and shipment never create new production; actual incremental repair is additional and origin-linked |
| upstream_dataset_requirement | Yarn supply includes its actual fibre production, spinning and supplier finishing; finished handle includes forestry and actual machining/finish; binding wire includes actual metal/coating manufacture. Use one compatible provider per physical input or treatment; identity is not provider approval |
| disclosure | Actual route and out-of-route activity, all losses, failed tests, start/stop/idle/cleanup, raw/WIP/FG inventories, service boundary, uncertainty and extensions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | p_make | Include the complete operation sequence in §1 through first whole-unit release. Purchased yarn/handle/wire carries its actual supplier state once; do not substitute bought finished mops plus packaging for manufacture. Any real additional sewing, coating, machining, moulding, washing, heating or repair requires separately named actual inputs/outputs and retained losses; eligibility cannot delete them. | m2-cotton-yacht-mop; giori-libo-cotton-cutting |
| boundary_release | finished_mop | Q counts first release exactly once and includes qualifying closing FG of that cohort. A subsequent FG bridge is opening FG + first release + external returns received = closing FG + gross outward shipments + reject/scrap exits, with actual repairs and water changes explicitly reconciled. Closing FG is not another manufacturing output in addition to Q. Cancel internal first-release transfers in the combined gate. |  |
| boundary_stocks | p_make; p_service | Record physical raw stock and WIP by constituent/state separately from inherited burden vectors by exchange and cohort. For each raw input reconcile opening + purchases + external returns = closing + actual issues + supplier returns + losses. Record WIP opening/closing, embedded cotton/wood/wire/water, work already performed and inherited provider burdens; do not invent an average history. Internal transfers cancel without erasing the actual generation of waste or emissions. |  |
| boundary_services | p_service | Retain packing, handling, storage, delivery preparation, cleaning and post-release repair in a separate service ledger linked to the original release cohort Qc. Include services for closing and opening FG, not just shipped goods. Link returns to the original shipment reversal and original burden history; adding real repair materials/water/energy is new F. Re-delivery or reinspection never adds Q. Do not transfer an old cohort load to the current positive Q to hide a zero-output interval. |  |
| boundary_packaging | p_service | For every packaging article separately reconcile opening empty and WIP/FG-attached/reusable stock + purchased + external returns received = closing all states + packaging leaving with gross physical shipments + external returns out + waste. Internal reuse cancels, with no repurchase, coproduct, net-Q contribution or automatic credit. Packing components are supplied whole once; any adhesive/coating constituent is a non-additive subaccount unless separately purchased/applied. |  |
| boundary_species | all inventory rows | Keep mass and relevant elemental balances independent of species, reaction and phase evidence. The selected dry assembly asserts no reaction water or boiler. Actual wet testing, cleanup, evaporation, heat-carrier return or unauthorised work remains real. Add each discovered fuel, gas species, chemical, supplied formulation, maintenance item and waste destination as an atomic row; do not hide it in zero or an undivided other category. COD/VOC totals cannot be treated as a specific molecular mass. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_make | Receipt, cutting, wire-bound assembly and first-release inspection | required | Actual selected whole-mop manufacture | foreground_manufacturing | finished_mop |
| p_service | Raw-store and released-FG handling, packing and actual repair | required | All actual attributable activities, including prior cohorts and closing FG | separate_service_ledger | original Qc |

Conditional cards assert neither default occurrence nor a zero amount: documented absence is distinct from unmeasured. Newly discovered actual exchanges need separate cards/providers; eligibility is never achieved by deleting activity. Preserve both physical and inherited environmental accounts in each process.

### Process: Complete mop manufacture (`p_make`)

#### Inputs

##### Product flows

###### Supplied cotton-yarn bundle (`cotton_yarn`)

Receive already-spun cotton mop yarn in a real bundle; record full supplied mass, moisture, fibre composition, finishes and recycled status. This is not raw cotton fibre or woven fabric. Confirm cotton composition and supplier dyeing/sizing state before choosing an upstream identity; no composition percentage is assumed. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Cotton mop yarn
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources: m2-cotton-yacht-mop; giori-libo-cotton-cutting

###### Finished full wooden handle (`wooden_handle`)

One supplied complete handle is an input article, with actual species, dimensions, coating and moisture declared. Supplier wood processing/finish is included once upstream; any site drilling, trimming or repair adds real operations. Unworked roundwood, a sawmill mix and a tool body are not this article. No catalogue dimension or density is a default. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Wooden mop handle
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources: m2-cotton-yacht-mop

###### Mop-head binding wire (`binding_wire`)

Measure the actual single supplied wire used to secure yarn to the wooden handle, including its actual surface finish. Identify alloy and coating from receipt records before provider matching; the manufacturer does not specify them, so steel/galvanised-wire UUIDs are not adopted. Wire already coated is purchased once, with metal and coating as non-additive constituent records. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Mop binding wire
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources: m2-cotton-yacht-mop

###### Manufacturing electricity (`make_electricity`)

Actual metered electricity including failures, idle time, extraction, lighting and any internal compressor within this process. The supply geography, voltage, generation mix and provider boundary must match the actual site; a Canadian product example supplies no electricity geography for another site. Supplier burdens and meter losses are verified separately. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Alternating current
- Flow property / unit: Electrical energy / MJ
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources: giori-libo-cotton-cutting

###### Purchased compressed air (`make_air`)

Only an actual external compressed-air supply crosses this product input; record its actual quality, supply state and geography using measured volume in m3. Measure integrated volume at recorded pressure/temperature/humidity and establish provider equivalence. On-site compressed air is an internal transfer with compressor electricity and losses retained, not another purchased burden. Record real discharged air constituents and condensate where material; no default air consumption from machinery ratings. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources: giori-libo-cotton-cutting

###### Factory test and cleanup tap water (`make_water`)

Record actual treated potable piped water for factory tests/cleanup; no customer presoak is inserted. This candidate represents supplied treated drinking-quality water, measured in kg; a database secondary volume coefficient cannot replace a density measurement. Use calibrated mass or independently measured water density/state for a metered volume. Raw abstraction, recycled water and wastewater are different exchanges. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Tap water
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Externally supplied hot water (`make_hotwater`)

Conditional actual heat-carrier supply for an evidenced wet test/cleanup operation, never a default boiler. Record gross mass, liquid state, temperature/pressure, inlet enthalpy and supplier water/energy boundary. Link the actual return; carrier mass and delivered MJ are one non-additive provider bridge. Steam, if actually used, requires its own phase-specific row rather than this liquid-water identity. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Supplied hot water
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Machine lubricating oil (`make_oil`)

When actually used, purchase the full identified lubricant formulation once and record service interval, additions, retained stock and leaks. Oil base/additives/water are composition subaccounts, not repeated purchases. Do not assume PAO, mineral oil or a CAS from an unmatched candidate. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Machine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Replacement circular cutting blade (`cutting_blade`)

Record actual replacement blade material, issue, remaining service stock and wear. The supplier supports a circular blade operation but not a universal alloy or replacement rate. Count-to-mass uses actual blade weighing; service attribution does not reduce gross discarded material. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Circular mop-yarn cutting blade
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources: giori-libo-cotton-cutting

###### External cutting-machine maintenance service (`maintenance`)

Only actual purchased maintenance labour/service enters this row, with hours and scope. Disclose whether replacement parts/oil are included by the provider; assign each physical item once and keep its gross issue/exit even when service burden is distributed over several cohorts. In-house labour does not invent an external provider. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Mop cutting-machine maintenance service
- Flow property / unit: Service time / h
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

##### Elementary flows

###### Water uptake from ambient air (`ambient_water`)

Conditional measured moisture uptake from the environment is separate from purchased water and inherited moisture. Use matched moisture measurements with sorption/phase evidence; do not balance two unknown moisture exchanges with one residual or treat resource water as an emission. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Atmospheric water absorbed by cotton yarn and wood
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Nitrogen in ambient-air intake (`make_nitrogen_intake`)

Only the actual nitrogen component (CAS 7727-37-9) of on-site compressor air intake is recorded here as gross physical mass. It is not an additional purchase on top of purchased compressed air: use the on-site-intake or external-air provider boundary, with a documented non-additive composition bridge. No standard air percentage, reaction, combustion source or environmental impact is inferred. Measure gas composition/state and keep inlet/outlet and net changes separately.

- Selected flow: Nitrogen in ambient-air intake
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Oxygen in ambient-air intake (`make_oxygen_intake`)

Only the actual oxygen component (CAS 7782-44-7) of on-site compressor air intake is recorded here as gross physical mass. It is not an additional purchase on top of purchased compressed air: use the on-site-intake or external-air provider boundary, with a documented non-additive composition bridge. No standard air percentage, reaction, combustion source or environmental impact is inferred. Measure gas composition/state and keep inlet/outlet and net changes separately.

- Selected flow: Oxygen in ambient-air intake
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Argon in ambient-air intake (`make_argon_intake`)

Only the actual argon component (CAS 7440-37-1) of on-site compressor air intake is recorded here as gross physical mass. It is not an additional purchase on top of purchased compressed air: use the on-site-intake or external-air provider boundary, with a documented non-additive composition bridge. No standard air percentage, reaction, combustion source or environmental impact is inferred. Measure gas composition/state and keep inlet/outlet and net changes separately.

- Selected flow: Argon in ambient-air intake
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Carbon dioxide in ambient-air intake (`make_carried_co2_intake`)

Only the actual carbon dioxide component (CAS 124-38-9) of on-site compressor air intake is recorded here as gross physical mass. It is not an additional purchase on top of purchased compressed air: use the on-site-intake or external-air provider boundary, with a documented non-additive composition bridge. No standard air percentage, reaction, combustion source or environmental impact is inferred. Measure gas composition/state and keep inlet/outlet and net changes separately.

- Selected flow: Carbon dioxide in ambient-air intake
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

#### Outputs

##### Product flows

###### First-released complete cotton mop (`finished_mop`)

One qualified complete cut-end cotton mop has its head wire-bound to its full wooden handle. This is one manufactured finished product at the plant gate, measured by net Mass/kg; no fixed material grade, CAS, geography or numerical performance is supplied. It does not authorise a mixed product basket, head-only output, synthetic substitution or motorised appliance. Q includes accepted closing FG once; transport packaging and external test water are excluded. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Complete wire-bound cut-end cotton-yarn mop with wooden handle
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: collected_record
- Collection protocol: cp_release
- Sources: m2-cotton-yacht-mop

###### External heat-carrier return (`make_heat_return`)

Only actual outward liquid heat-carrier water returned to the original supplier is recorded. Preserve gross mass, actual enthalpy/temperature, provider convention and any loss; no coproduct or default water/heat credit. Internal circulation cancels. Real steam condensate is identified separately when its phase/source differs. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Returned heat-transfer water
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

##### Waste flows

###### Cotton mop-yarn offcuts (`cotton_offcuts`)

Cutting and trimming losses; retain actual moisture/composition and one recipient. Do not substitute yellow-stained cotton or virgin yarn Product identity for this generated waste. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Cotton mop-yarn offcuts
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Rejected wooden mop handle (`wood_reject`)

Whole rejected handle or a separately identified wood fragment stream; declare coating, moisture and destination. If broken and sorted, use non-additive component partitions instead of adding whole rejects again. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Rejected wooden mop handle
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Mop binding-wire offcuts (`wire_offcut`)

Actual wire offcuts from binding/cutting; alloy and coating remain with the waste. No automatic recyclability fraction or credit; sale does not erase gross mass. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Mop binding-wire offcuts
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Rejected assembled cotton mop (`rejected_mop`)

Actual unrecovered whole-mop reject after failed assembly/test; record wet mass and components as a non-additive bridge. Reworked items still inside the process are not an external waste exit; their incremental inputs remain. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Rejected assembled cotton mop
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Captured cotton-yarn dust (`captured_dust`)

Actual captured particulate residue, with measured moisture, contaminant and fibre composition. It is not an air emission or a pure cellulose molecule. Do not count the same particles again in escaped dust. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Captured cotton-yarn dust
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Untreated mop-test wastewater (`make_wastewater`)

Whole actual factory test/cleanup effluent to one external treatment provider, with water, suspended solids and measured species as non-additive subaccounts. Verify the waste type and receiver boundary before binding a treatment dataset. COD/VOC are indicators; direct environmental releases need separate species and medium. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Untreated mop-test wastewater
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Spent mop-yarn cutting blade (`spent_blade`)

Actual discarded blade mass and wear source are recorded separately from maintenance service allocation; retained service stock is not discarded. Verify metal composition and receiving treatment. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Spent mop-yarn cutting blade
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Used oil from maintenance (`used_oil`)

Actual used petroleum-based or synthetic lubricating oil contaminated through use, at its point of generation. Record it as one waste exchange in kg, with actual treatment and no assumed composition or recovery yield. Record actual contamination and one receiver; this identity does not include virgin lubricant, solvents, aqueous cleaner or assumed recycling. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Used lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

##### Elementary flows

###### Escaped cotton-yarn particulate matter (`escaped_dust`)

Actual post-control airborne particles, distinguished from captured residue and background dust. Record particle-size classes, composition, air subcompartment and method. Do not assign all dust a cellulose or cotton-molecule CAS; split independently measured classes without overlap. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Cotton-yarn particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Manufacturing water evaporation (`water_vapour`)

Only evidenced net evaporation to the declared air medium is an emission; inlet humidity and moisture carried in yarn/wood are reconciled separately. Verify the chemical identity, vapour phase and actual environmental compartment before database binding. No boiler, isotope or chemical reaction is inferred. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Nitrogen carried in air discharged from pneumatics (`make_nitrogen_out`)

Record actual nitrogen (CAS 7727-37-9) in discharged air separately from water and each other species, with source, phase, release medium and inlet background. Preserve gross V through its true Q, but do not mislabel unchanged background air as newly generated combustion emissions or assign an automatic net LCIA amount. Atmospheric carried CO2 is not classified as fossil or biogenic process generation without evidence. Actual reactions or additional pollutant species require separate rows and independent data.

- Selected flow: Nitrogen carried in air discharged from pneumatics
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Oxygen carried in air discharged from pneumatics (`make_oxygen_out`)

Record actual oxygen (CAS 7782-44-7) in discharged air separately from water and each other species, with source, phase, release medium and inlet background. Preserve gross V through its true Q, but do not mislabel unchanged background air as newly generated combustion emissions or assign an automatic net LCIA amount. Atmospheric carried CO2 is not classified as fossil or biogenic process generation without evidence. Actual reactions or additional pollutant species require separate rows and independent data.

- Selected flow: Oxygen carried in air discharged from pneumatics
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Argon carried in air discharged from pneumatics (`make_argon_out`)

Record actual argon (CAS 7440-37-1) in discharged air separately from water and each other species, with source, phase, release medium and inlet background. Preserve gross V through its true Q, but do not mislabel unchanged background air as newly generated combustion emissions or assign an automatic net LCIA amount. Atmospheric carried CO2 is not classified as fossil or biogenic process generation without evidence. Actual reactions or additional pollutant species require separate rows and independent data.

- Selected flow: Argon carried in air discharged from pneumatics
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

###### Carbon dioxide carried in air discharged from pneumatics (`make_carried_co2_out`)

Record actual carbon dioxide (CAS 124-38-9) in discharged air separately from water and each other species, with source, phase, release medium and inlet background. Preserve gross V through its true Q, but do not mislabel unchanged background air as newly generated combustion emissions or assign an automatic net LCIA amount. Atmospheric carried CO2 is not classified as fossil or biogenic process generation without evidence. Actual reactions or additional pollutant species require separate rows and independent data.

- Selected flow: Carbon dioxide carried in air discharged from pneumatics
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_raw
- Sources:

### Process: Stock and first-released cohort services (`p_service`)

#### Inputs

##### Product flows

###### Storage/packing electricity (`service_electricity`)

Actual metered electricity including failures, idle time, extraction, lighting and any internal compressor within this process. The supply geography, voltage, generation mix and provider boundary must match the actual site; a Canadian product example supplies no electricity geography for another site. Supplier burdens and meter losses are verified separately. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Alternating current
- Flow property / unit: Electrical energy / MJ
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

###### Post-release service tap water (`service_water`)

Record actual treated potable piped water for factory tests/cleanup; no customer presoak is inserted. This candidate represents supplied treated drinking-quality water, measured in kg; a database secondary volume coefficient cannot replace a density measurement. Use calibrated mass or independently measured water density/state for a metered volume. Raw abstraction, recycled water and wastewater are different exchanges. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Tap water
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

###### Actual post-release repair cotton yarn (`service_repair_yarn`)

Record real new replacement yarn as F assigned to the original released cohort; use the full supplied composition and moisture, with no fixed cotton threshold. Do not subtract it as duplication X merely because an earlier mop already contained yarn. Reinspection never produces a new Q. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Cotton mop yarn
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

###### Actual replacement wooden handle (`service_repair_handle`)

Record the new complete handle and its supplier burden once when actual repair uses it; retain displaced handle as a separate gross waste exit. Original manufacture is not repeated. Other replacement parts require separate physical rows. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Wooden mop handle
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

###### Actual repair binding wire (`service_repair_wire`)

New wire consumed by post-release reattachment is actual F, with composition/finish and losses measured. It is never cancelled against original binding wire; account for removed wire separately. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Mop binding wire
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

###### Purchased road freight service (`road_freight`)

Record each actual included inbound or factory-gate dispatch leg with transported gross load, distance, mode, empty return and provider boundary; separate manufacture and FG service attribution by cohort. Do not use vehicle mass or a study-specific load class as transport work. No downstream consumer distribution is implied beyond the declared boundary. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Road freight service for mop supplies and delivery
- Flow property / unit: Freight work / kg*km
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

###### Purchased Corrugated transport carton (`carton_purchase`)

One actual corrugated transport carton, with board construction, adhesive/print composition and reuse state declared. The inspected folding Paper box comment excludes transport durability and is not adopted; fixed recycled-fibre carton records also cannot supply an unmeasured recipe. Apply the separate packaging stock equation in boundary_packaging. This row is the actual purchased movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### External return received Corrugated transport carton (`carton_return_received`)

One actual corrugated transport carton, with board construction, adhesive/print composition and reuse state declared. The inspected folding Paper box comment excludes transport durability and is not adopted; fixed recycled-fibre carton records also cannot supply an unmeasured recipe. Apply the separate packaging stock equation in boundary_packaging. This row is the actual external return received movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Purchased Polyethylene bag (`bag_purchase`)

One actual polyethylene bag supplied at plant and measured in kg; verify polymer identity, grade, dimensions and geography. Verify it is PE rather than PP or a multilayer composite. The whole supplied bag is one purchase; additives are subaccounts and its virgin/recycled fraction is measured or supplier-evidenced. Apply the separate packaging stock equation in boundary_packaging. This row is the actual purchased movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Polyethylene bag
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### External return received Polyethylene bag (`bag_return_received`)

One actual polyethylene bag supplied at plant and measured in kg; verify polymer identity, grade, dimensions and geography. Verify it is PE rather than PP or a multilayer composite. The whole supplied bag is one purchase; additives are subaccounts and its virgin/recycled fraction is measured or supplier-evidenced. Apply the separate packaging stock equation in boundary_packaging. This row is the actual external return received movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Polyethylene bag
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Purchased Paper label (`label_purchase`)

One actual paper label supplied at plant and measured in kg. Record the supplied ink, adhesive, coating and supplier; separate actually purchased application materials. Product identity does not approve a provider. Apply the separate packaging stock equation in boundary_packaging. This row is the actual purchased movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### External return received Paper label (`label_return_received`)

One actual paper label supplied at plant and measured in kg. Record the supplied ink, adhesive, coating and supplier; separate actually purchased application materials. Product identity does not approve a provider. Apply the separate packaging stock equation in boundary_packaging. This row is the actual external return received movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Purchased Polypropylene adhesive packing tape (`tape_purchase`)

Only if actual packing uses this one supplied polypropylene-backed adhesive tape, record its whole formulation once and its true mass; no aluminium/PE or photovoltaic-installation identity is substituted. Other actual closure materials require their own named row. Apply the separate packaging stock equation in boundary_packaging. This row is the actual purchased movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Polypropylene adhesive packing tape
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### External return received Polypropylene adhesive packing tape (`tape_return_received`)

Only if actual packing uses this one supplied polypropylene-backed adhesive tape, record its whole formulation once and its true mass; no aluminium/PE or photovoltaic-installation identity is substituted. Other actual closure materials require their own named row. Apply the separate packaging stock equation in boundary_packaging. This row is the actual external return received movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Polypropylene adhesive packing tape
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Purchased Wooden transport pallet (`pallet_purchase`)

One actual wooden pallet with species, treatment, hardware, provider and reuse condition recorded. No EURO size, PV installation route, fixed reuse count or mass is presumed. Supplied whole-pallet burden and constituent hardware are non-additive. Apply the separate packaging stock equation in boundary_packaging. This row is the actual purchased movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### External return received Wooden transport pallet (`pallet_return_received`)

One actual wooden pallet with species, treatment, hardware, provider and reuse condition recorded. No EURO size, PV installation route, fixed reuse count or mass is presumed. Supplied whole-pallet burden and constituent hardware are non-additive. Apply the separate packaging stock equation in boundary_packaging. This row is the actual external return received movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

##### Elementary flows

###### Atmospheric water absorbed by released cotton mop (`service_ambient_water`)

Measure actual passive moisture uptake of already-released mop/packaging by matched state and origin cohort. It is neither new product Q nor repair F, purchased water, or a new upstream biogenic-carbon uptake. Retain gross physical V and inherited stock moisture separately. Do not infer it and evaporation together from one residual.

- Selected flow: Atmospheric water absorbed by released cotton mop
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

#### Outputs

##### Product flows

###### Leaving with gross shipment Corrugated transport carton (`carton_shipment`)

One actual corrugated transport carton, with board construction, adhesive/print composition and reuse state declared. The inspected folding Paper box comment excludes transport durability and is not adopted; fixed recycled-fibre carton records also cannot supply an unmeasured recipe. Apply the separate packaging stock equation in boundary_packaging. This row is the actual leaving with gross shipment movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### External return out Corrugated transport carton (`carton_return_out`)

One actual corrugated transport carton, with board construction, adhesive/print composition and reuse state declared. The inspected folding Paper box comment excludes transport durability and is not adopted; fixed recycled-fibre carton records also cannot supply an unmeasured recipe. Apply the separate packaging stock equation in boundary_packaging. This row is the actual external return out movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Leaving with gross shipment Polyethylene bag (`bag_shipment`)

One actual polyethylene bag supplied at plant and measured in kg; verify polymer identity, grade, dimensions and geography. Verify it is PE rather than PP or a multilayer composite. The whole supplied bag is one purchase; additives are subaccounts and its virgin/recycled fraction is measured or supplier-evidenced. Apply the separate packaging stock equation in boundary_packaging. This row is the actual leaving with gross shipment movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Polyethylene bag
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### External return out Polyethylene bag (`bag_return_out`)

One actual polyethylene bag supplied at plant and measured in kg; verify polymer identity, grade, dimensions and geography. Verify it is PE rather than PP or a multilayer composite. The whole supplied bag is one purchase; additives are subaccounts and its virgin/recycled fraction is measured or supplier-evidenced. Apply the separate packaging stock equation in boundary_packaging. This row is the actual external return out movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Polyethylene bag
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Leaving with gross shipment Paper label (`label_shipment`)

One actual paper label supplied at plant and measured in kg. Record the supplied ink, adhesive, coating and supplier; separate actually purchased application materials. Product identity does not approve a provider. Apply the separate packaging stock equation in boundary_packaging. This row is the actual leaving with gross shipment movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### External return out Paper label (`label_return_out`)

One actual paper label supplied at plant and measured in kg. Record the supplied ink, adhesive, coating and supplier; separate actually purchased application materials. Product identity does not approve a provider. Apply the separate packaging stock equation in boundary_packaging. This row is the actual external return out movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Leaving with gross shipment Polypropylene adhesive packing tape (`tape_shipment`)

Only if actual packing uses this one supplied polypropylene-backed adhesive tape, record its whole formulation once and its true mass; no aluminium/PE or photovoltaic-installation identity is substituted. Other actual closure materials require their own named row. Apply the separate packaging stock equation in boundary_packaging. This row is the actual leaving with gross shipment movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Polypropylene adhesive packing tape
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### External return out Polypropylene adhesive packing tape (`tape_return_out`)

Only if actual packing uses this one supplied polypropylene-backed adhesive tape, record its whole formulation once and its true mass; no aluminium/PE or photovoltaic-installation identity is substituted. Other actual closure materials require their own named row. Apply the separate packaging stock equation in boundary_packaging. This row is the actual external return out movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Polypropylene adhesive packing tape
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Leaving with gross shipment Wooden transport pallet (`pallet_shipment`)

One actual wooden pallet with species, treatment, hardware, provider and reuse condition recorded. No EURO size, PV installation route, fixed reuse count or mass is presumed. Supplied whole-pallet burden and constituent hardware are non-additive. Apply the separate packaging stock equation in boundary_packaging. This row is the actual leaving with gross shipment movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### External return out Wooden transport pallet (`pallet_return_out`)

One actual wooden pallet with species, treatment, hardware, provider and reuse condition recorded. No EURO size, PV installation route, fixed reuse count or mass is presumed. Supplied whole-pallet burden and constituent hardware are non-additive. Apply the separate packaging stock equation in boundary_packaging. This row is the actual external return out movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

##### Waste flows

###### Discarded Corrugated transport carton (`carton_waste`)

One actual corrugated transport carton, with board construction, adhesive/print composition and reuse state declared. The inspected folding Paper box comment excludes transport durability and is not adopted; fixed recycled-fibre carton records also cannot supply an unmeasured recipe. Apply the separate packaging stock equation in boundary_packaging. This row is the actual discarded movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Waste corrugated transport carton
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Discarded Polyethylene bag (`bag_waste`)

One actual polyethylene bag supplied at plant and measured in kg; verify polymer identity, grade, dimensions and geography. Verify it is PE rather than PP or a multilayer composite. The whole supplied bag is one purchase; additives are subaccounts and its virgin/recycled fraction is measured or supplier-evidenced. Apply the separate packaging stock equation in boundary_packaging. This row is the actual discarded movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Waste polyethylene bag
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Discarded Paper label (`label_waste`)

One actual paper label supplied at plant and measured in kg. Record the supplied ink, adhesive, coating and supplier; separate actually purchased application materials. Product identity does not approve a provider. Apply the separate packaging stock equation in boundary_packaging. This row is the actual discarded movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Waste paper label
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Discarded Polypropylene adhesive packing tape (`tape_waste`)

Only if actual packing uses this one supplied polypropylene-backed adhesive tape, record its whole formulation once and its true mass; no aluminium/PE or photovoltaic-installation identity is substituted. Other actual closure materials require their own named row. Apply the separate packaging stock equation in boundary_packaging. This row is the actual discarded movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Waste polypropylene adhesive packing tape
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Discarded Wooden transport pallet (`pallet_waste`)

One actual wooden pallet with species, treatment, hardware, provider and reuse condition recorded. No EURO size, PV installation route, fixed reuse count or mass is presumed. Supplied whole-pallet burden and constituent hardware are non-additive. Apply the separate packaging stock equation in boundary_packaging. This row is the actual discarded movement, not a net-Q adjustment; route it to its original served cohort Qc. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Waste wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_packaging
- Sources:

###### Removed cotton mop yarn (`service_yarn_waste`)

Record the actual gross removal/discharge and one receiving provider, with origin cohort, composition, moisture and disposition. Whole wet waste mass and component partitions are non-additive. Neither service allocation nor original shipment reversal reduces this real generation; do not add it again in a mixed waste total. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Removed cotton mop yarn
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

###### Removed wooden mop handle (`service_handle_waste`)

Record the actual gross removal/discharge and one receiving provider, with origin cohort, composition, moisture and disposition. Whole wet waste mass and component partitions are non-additive. Neither service allocation nor original shipment reversal reduces this real generation; do not add it again in a mixed waste total. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Removed wooden mop handle
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

###### Removed mop binding wire (`service_wire_waste`)

Record the actual gross removal/discharge and one receiving provider, with origin cohort, composition, moisture and disposition. Whole wet waste mass and component partitions are non-additive. Neither service allocation nor original shipment reversal reduces this real generation; do not add it again in a mixed waste total. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Removed mop binding wire
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

###### Post-release mop-service wastewater (`service_wastewater`)

Record the actual gross removal/discharge and one receiving provider, with origin cohort, composition, moisture and disposition. Whole wet waste mass and component partitions are non-additive. Neither service allocation nor original shipment reversal reduces this real generation; do not add it again in a mixed waste total. Keep gross physical V, origin-cohort identity and separate inherited environmental burdens. Retain failed/zero-output work, idle/start-stop/cleanup and rework; use the single normalization rule after raw collection.

- Selected flow: Post-release mop-service wastewater
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

##### Elementary flows

###### Water vapour from released-mop services to air (`service_water_vapour`)

Actual passive drying or service cleanup evaporation is identified by water source, phase and environmental medium, with original Qc. It is independent of repair additions/removals and no new manufacturing output. Gross V, inlet moisture and net emission remain distinct; no reaction water or boiler is assumed. A medium-restricted native candidate cannot be used without a match.

- Selected flow: Water vapour from released-mop services to air
- Flow property / unit: Mass / kg
- Amount rule: Reuse the single section 8 gross physical result for this row and original cohort; no further division.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_service
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_dedicated | all environmental burden columns | Use attributional modelling only for the allocation-required scope. First assign dedicated operations and physically embodied inputs, then actual or justified virtual subdivision. Describe any inaccessible meters and distortion; this is not a free choice of physical versus economic allocation. | ilcd-attributional-allocation |
| allocation_causal | remaining environmental burden columns | For each remaining exchange identify the determining physical causality, including actual processing intensity and time where causal. Cotton/yarn and handle-specific inputs stay with their actual recipient; shared cutting/compression/lighting/storage are examined separately. Merely sharing mass or a plant does not prove a common factor. Lost materials and failed operations remain in the responsible cohort. | ilcd-attributional-allocation |
| allocation_residual | unresolved joint environmental burden columns | Only the genuinely remaining joint inventory uses contemporaneous actual market values of actual coproducts in their condition and amount at a common process gate. Strip later packing/transport/conditioning from downstream prices. Record state, price period and evidence; no fixed fraction or QFD cleaning-performance allocation is prescribed. Reconcile allocated plus retained columns to the whole original vector. | ilcd-attributional-allocation |
| allocation_physical | all physical columns V | Physical inputs, waste, emissions, repair replacements and carrier returns are gross V at their actual gate and keep their true Q or origin Qc. Environmental value/service/WIP allocation never scales down these physical observations. A waste sale price is not automatic coproduct status or avoided-production credit; actual receiving treatment must be represented once. Special recycling methodology requires separate evidence, not an invented recovery fraction. | ilcd-attributional-allocation |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Card amounts display the physical coordinate of section 8 q; environmental burden coordinates are non-additive attribution records for those exchanges. Link upstream/treatment providers once using the evidenced environmental attribution coordinate, never as extra physical purchases added to V. Services keep their own original Qc and history; combined presentation retains cohort coordinates. If wastes are actually collected together, use one measured external total W with mutually exclusive measured origin/material partitions; never add the total to its partitions, and represent each actual treatment with one provider.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | p_make | finished_mop | weighing_and_release | cohort c; release ID; whole-unit configuration; head and handle integrity; net mass; conditioning; residual moisture; excluded package/test water; accepted/rejected status; opening/closing FG links | Calibrated whole-unit weighing and documented retention/attachment/function checks against the actual drawing. Record rejected or wet-test items independently; count each first-pass release once. Collection and aggregation retain only un-divided raw records; the aggregation basis cell labels the presentation of the already calculated single section 8 result, not another calculation. | kg | Each first release and failed attempt | Complete cohort including zero-output intervals | Manufacture to first release | per 1 kg reference flow | Calibration; release register; drawings; moisture tests; reject logs |
| cp_raw | p_make | all physical exchanges | raw_measurement | row_id; timestamp; cohort; origin gate; raw quantity; raw unit; rate or integral flag; pressure; temperature; humidity; independent density; full formulation; F actual new; X proven same-side duplicate; counterparty; WIP/FG links | Meter/weigh actual issues and gross exits, maintain invoices and state-specific analyses, and record separate failure/cleanup/idle/rework events. Inspect equipment and actual material lists to add every missing atomic exchange; a qualification failure is never deletion authority. Collection and aggregation retain only un-divided raw records; the aggregation basis cell labels the presentation of the already calculated single section 8 result, not another calculation. | kg; MJ; m3; h; kg*km | Every issue/exit and meter interval | Whole observation H including Q=0 | Actual manufacture and all served cohorts | per 1 kg reference flow | Meters; calibration; invoices; lab reports; actual-provider and rejection logs |
| cp_stocks | p_make | raw WIP FG history | stock_and_vector | constituent/state; physical opening/closing raw stock; WIP stage; stock water; exchange-specific inherited B_open/B_close; original cohort Qc; unique transfer; first release; gross dispatch; original return/reversal; incremental repair | Physical counts/weights and moisture sampling reconcile independently with supplier and prior-cohort burden vectors. Preserve unknown history as unresolved; never estimate it from today's unit result without evidence. Collection and aggregation retain only un-divided raw records; the aggregation basis cell labels the presentation of the already calculated single section 8 result, not another calculation. | kg; native exchange units | Opening/closing and every transfer | Current and linked prior cohorts | Raw store; WIP; FG; return and repair areas | per 1 kg reference flow | Signed stock sheets; prior linked inventories; release IDs; transfer reconciliation |
| cp_packaging | p_service | each packaging article movement | gross_packaging_balance | article and composition; empty/attached/reusable status; opening; purchase; external return received; closing; gross shipment outward; external return out; waste; internal reuse; original Qc; provider boundary | Count and weigh each actual article state and movement separately; maintain independent ledger per carton, bag, label, tape and pallet. New actual packaging types get separate rows and balance. Collection and aggregation retain only un-divided raw records; the aggregation basis cell labels the presentation of the already calculated single section 8 result, not another calculation. | kg | Every movement; opening/closing | All packaging serving current/prior cohorts | All stores and attached WIP/FG | per 1 kg reference flow | Packaging weights; return receipts; dispatch and disposal tickets; stock sheets |
| cp_allocation | p_make | environmental burden attribution | causal_and_market_evidence | dedicated meter; sub-process; exchange; determining physical driver; simultaneous functions; common gate; actual state; contemporaneous price; allocation fractions; provider coverage; retained vector | Apply §7 hierarchy per environmental exchange, justify remaining joint scope and reconcile fractions and conserved total vector. Keep separate gross physical V for all destinations. Collection and aggregation retain only un-divided raw records; the aggregation basis cell labels the presentation of the already calculated single section 8 result, not another calculation. | native exchange units | Each shared operation and update | Same period as observed operation | Actual common gate and physical routes | per 1 kg reference flow | Dedicated records; causal rationale; gate-state price evidence; conservation check |
| cp_service | p_service | all physical exchanges | raw_measurement | row_id; timestamp; cohort; origin gate; raw quantity; raw unit; rate or integral flag; pressure; temperature; humidity; independent density; full formulation; F actual new; X proven same-side duplicate; counterparty; WIP/FG links | Meter/weigh actual issues and gross exits, maintain invoices and state-specific analyses, and record separate failure/cleanup/idle/rework events. Inspect equipment and actual material lists to add every missing atomic exchange; a qualification failure is never deletion authority. Collection and aggregation retain only un-divided raw records; the aggregation basis cell labels the presentation of the already calculated single section 8 result, not another calculation. | kg; MJ; m3; h; kg*km | Every issue/exit and meter interval | Whole observation H including Q=0 | Actual manufacture and all served cohorts | per 1 kg reference flow | Meters; calibration; invoices; lab reports; actual-provider and rejection logs |
| cp_service_stocks | p_service | raw WIP FG history | stock_and_vector | constituent/state; physical opening/closing raw stock; WIP stage; stock water; exchange-specific inherited B_open/B_close; original cohort Qc; unique transfer; first release; gross dispatch; original return/reversal; incremental repair | Physical counts/weights and moisture sampling reconcile independently with supplier and prior-cohort burden vectors. Preserve unknown history as unresolved; never estimate it from today's unit result without evidence. Collection and aggregation retain only un-divided raw records; the aggregation basis cell labels the presentation of the already calculated single section 8 result, not another calculation. | kg; native exchange units | Opening/closing and every transfer | Current and linked prior cohorts | Raw store; WIP; FG; return and repair areas | per 1 kg reference flow | Signed stock sheets; prior linked inventories; release IDs; transfer reconciliation |
| cp_service_allocation | p_service | environmental burden attribution | causal_and_market_evidence | dedicated meter; sub-process; exchange; determining physical driver; simultaneous functions; common gate; actual state; contemporaneous price; allocation fractions; provider coverage; retained vector | Apply §7 hierarchy per environmental exchange, justify remaining joint scope and reconcile fractions and conserved total vector. Keep separate gross physical V for all destinations. Collection and aggregation retain only un-divided raw records; the aggregation basis cell labels the presentation of the already calculated single section 8 result, not another calculation. | native exchange units | Each shared operation and update | Same period as observed operation | Actual common gate and physical routes | per 1 kg reference flow | Dedicated records; causal rationale; gate-state price evidence; conservation check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_attribution | all inventory rows | Construct A by row and origin cohort before any division: physical column is gross actual V; environmental column B preserves dedicated/causal/residual allocation and inherited opening WIP burden minus closing WIP burden, plus real incremental F, minus only proven OTHER same-side duplicate X. B_current excludes separately recorded incremental F, so no actual event is added twice; X applies only to a proven identical event already duplicated in an OTHER subtotal on the same side. Raw-material physical stock and its historical burden are separately conserved. A receipt/dispatch internal transfer cancels only with its matching counter-entry. F is genuinely new; X never deducts a real repair, replacement, test-water input, waste or emission. Missing origin/history remains unresolved. | V; B_open; B_current; B_close; F; X; cp_raw; cp_service; cp_stocks; cp_service_stocks; cp_allocation; cp_service_allocation | A | ilcd-attributional-allocation |
| normalize_once | all inventory rows | q = A / Qc. Apply this operation once to each unnormalised column: physical V and attributed environmental B remain separate. Qc is the positive first-release net mass of the actual origin cohort; for current manufacturing Qc = Q. Cards and aggregation reference this result and never divide it again. Qc = 0 retains the raw columns and gives no unit result. | A; Qc; cp_release; cp_stocks; cp_service_stocks | q |  |
| physical_gates | all inventory rows | Reconcile manufacturing, FG/service and combined physical gates on the same moisture/state basis: opening + external receipts = closing + gross external outputs + verified losses, with internal transfers cancelling. Within manufacturing first-release Q is the output; accepted closing FG belongs downstream and cannot be added to Q again. In service use opening FG + Q + returns and actual new repair/water, with displaced components and actual exits retained. Per-species/phase and relevant elemental equations are independently evidenced; whole wet object versus component sums are alternative non-additive views, not extra flows. | cp_raw; cp_service; cp_release; cp_stocks; cp_service_stocks; cp_packaging | reconciled physical gates |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Verify actual article/chemical, full supplied state, native type/CAS/route/grade/geography/media and provider boundary; unresolved auxiliary UUID never becomes a collective exchange or a fabricated binding. | Direct native records and actual supplier/receipt records |
| dq_complete | all operations | Complete failures, tests, idle/start-stop, cleanup, rework, Q=0, WIP and service histories are required; document measurement uncertainty and actual zero versus not measured. | Logs and signed raw reconciliation |
| dq_water_carbon | mass and species accounts | Water phases, source and medium, cotton/wood biogenic carbon and oil/resin fossil carbon need independent composition/moisture evidence. Never use COD as a molecule, assume reaction water, duplicate upstream biogenic uptake, or solve two missing measurements with one balance residual. | Analytical methods; sample scope; measurement uncertainty; provider coverage |
| dq_sources | product and method evidence | Primary sources establish product construction and generic operation mechanisms, not a same-SKU factory inventory or numerical defaults. Check contradictory dimensions and route alternatives; separate source facts from author technical synthesis. | Complete source context and declared limitations |
| dq_provider | all upstream and waste links | Use exactly one actual supplier/treatment representation per exchange; if an invoice service includes materials, use a disclosed non-additive bridge. Keep future-site values unresolved without converting ordinary provider gaps into a false core-method failure. | Provider-boundary matrix and originating stock vector |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_classification | finished_mop | Confirm the complete manual mop and distinguish separately traded components, powered equipment and other leaf products. Verify the maintained narrower mapping and its scope decision independently of methodology approval. | unsd-cpc3-notes-2025 |
| validate_whole | finished_mop | Require the complete cotton-yarn head, true wire attachment and entire wooden handle at the first quality gate. Reject head-only, cotton/fabric/rod-only, powered or incompatible material/route substitution. Check every qualifier and actual declared acceptance record. | m2-cotton-yacht-mop |
| validate_denominator | all inventory rows | Check Q/ origin Qc and unique first-release IDs, closing FG inclusion once, actual mass/moisture and zero-output treatment. Verify raw collection contains no division and all unit results use normalize_once only once. Shipment and retest cannot increase production. |  |
| validate_conservation | all ledgers | Require manufacturing/FG/combined physical gates, each packaging equation, raw/WIP inherited vectors and source-specific species/phase/element checks. Keep gross waste/emissions/returns even when environmental burden is partitioned. Real incremental F cannot be X; unknown history, missing balances or unmeasured species are unresolved findings, not a pass. |  |
| validate_native | UUID-bearing rows | Recheck each adopted native flow and its exact reference-property/unit chain and all restrictions. Use exact official Chinese names. Broad whole-product identity is limited by the full qualified row; missing grade/provider facts need actual records and may prevent a particular UUID/provider binding without removing the physical exchange. |  |
| validate_method | allocation and release readiness | Validate the attributional hierarchy and inventory conservation separately from engineering syntax. Scientific review stays pending and Chinese alignment is not translation review. A complete site data package still needs evidence for its actual quantities, states and providers; this candidate is neither mapping approval nor publication. | ilcd-attributional-allocation |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared whole-mop manufacture and separately identified original-cohort FG services |
| allowed_use | Compatible cut-end cotton-yarn wire-bound wooden-handle configuration with actual gate/state and provider evidence |
| excluded_use | Whole CPC leaf coverage; unlike cleaning-performance comparison; head-only or motorised products; default lifetime or credit |
| required_metadata | All reference qualifiers; process route; raw/WIP/FG and Qc records; upstream identity and service/packaging boundary |
| required_quality_disclosure | Uncertainty; unmeasured fields; unresolved provider/UUID matches; inherited history; scientific and translation status |
| update_trigger | Changed construction, fibre composition, wire/handle supply state, actual process, utility or provider, boundary, evidence or acceptance requirement |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| m2-cotton-yacht-mop | handbook | M2 Professional Cleaning Products: Cotton Yacht Mop with 54 inch Handle (YM-HY). https://www.m2mfg.com/products/details/ym-hy-cotton-yacht-mop-with-54-handle | Manufacturer whole cut-end cotton-yarn mop with wire-bound wooden handle; use-stage presoak and conflicting handle lengths limit numeric use; no factory recipe. |
| giori-libo-cotton-cutting | handbook | GIORI AUTOMATION: LIBO cotton mop-yarn cutting machine. https://www.giori.it/en/product/libo | Manufacturer description of supplied cotton-bundle feeding, length control, circular-blade cutting and electro-pneumatic equipment; generic process synthesis only, no M2 production-line or default-consumption claim. |
| ilcd-attributional-allocation | official_guidance | European Commission JRC: ILCD Handbook—General guide for Life Cycle Assessment—Detailed guidance (2010), §7.9.2–7.9.3, printed pp.255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision, exchange-specific determining physical causality, residual common-gate actual market values and conservation; no prescribed mop yield, recycling factor, QFD performance split or automatic credit. |
| unsd-cpc3-notes-2025 | official_guidance | UNSD CPC Ver. 3.0 explanatory notes, 30 June 2025, pp.197–198, entry 38993 and adjacent entries. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Statistical product boundary only; no manufacturing recipe, quantitative factor or LCA approval. |
| m2-detachable-yacht-mop | handbook | M2 Professional Cleaning Products: Cotton Detachable Yacht Mop, YM-Y. https://m2mfg.com/products/details/ym-y-cotton-detachable-yacht-mop | Counterevidence for socket and metal-handle alternatives; excludes transfer of their BOM or numerical specifications to the wire-bound wooden-handle route. |
