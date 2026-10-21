---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.injection-moulded-polypropylene-toilet-seat-set
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Injection-moulded polypropylene toilet seat and lid set

Every rule in this record is conditional on the complete product/route/function limits in §1 and the native identity restrictions in each card.

This PCR covers attributional manufacture of a complete non-electric toilet-seat set: unfilled PP-homopolymer injection-moulded seat ring and lid, conventional non-damped pivot hinges, actual bumpers and declared bowl-fixing parts. It covers raw supplied resin through actual preparation, moulding, cooling, demoulding, trimming, eligible regrinding, assembly and first quality release. Subsequent actual packaging, warehouse, handling and dispatch remain a separately identified release-cohort service account. It excludes baths, basins, pans, cisterns/valves, ceramic fixtures, UF compression mouldings, wood-filled or foamed shells, coatings/printing, soft-close dampers, bidet/electronic functions and bought-finished-set repacking. Other PP copolymer, filler or multi-material structural routes require separate substantiation. The broad native sanitary-flow name does not widen these conditions.

Native sanitary identity is manufactured plastic ware/production mix at plant/Mass only, without fixed CAS, polymer grade, geometry, route, performance, life or geography. Raw PP CAS9003-07-0 is physically consistent but native classification34740 is defective and fixes no grade/form/geography. Adopted identities retain actual configuration, delivered formulation and provider limits in each card; they establish no background inventory or certification.

## 1. Scope and Applicability

This PCR covers attributional manufacture of a complete non-electric toilet-seat set: unfilled PP-homopolymer injection-moulded seat ring and lid, conventional non-damped pivot hinges, actual bumpers and declared bowl-fixing parts. It covers raw supplied resin through actual preparation, moulding, cooling, demoulding, trimming, eligible regrinding, assembly and first quality release. Subsequent actual packaging, warehouse, handling and dispatch remain a separately identified release-cohort service account. It excludes baths, basins, pans, cisterns/valves, ceramic fixtures, UF compression mouldings, wood-filled or foamed shells, coatings/printing, soft-close dampers, bidet/electronic functions and bought-finished-set repacking. Other PP copolymer, filler or multi-material structural routes require separate substantiation. The broad native sanitary-flow name does not widen these conditions.

The industrial sources establish complementary product and unit-operation facts, not one common SKU, factory or order. AGI/primary seat manufacturers establish a real sanitary endpoint; IFC supplies general non-reactive plastics process context; Glasfil provides grade-dependent trial counterevidence. Foreground records must establish the actual configuration and operating values. No source test number is prescribed as a load, service-life or conformity certificate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.injection-moulded-polypropylene-toilet-seat-set |
| classification_refs | CPC3.0:36930; narrower product subset; no accepted mapping implied |
| covered_products | Complete PP-homopolymer seat ring and lid sets within §1, with declared included hinge/bumper/fixing configuration |
| excluded_products | All §1 excluded endpoints and routes; unassembled moulded parts are intermediates, not released sets |
| representative_product | One configuration-specific complete conventional PP seat set; no invented item mass |
| production_route | Received PP pellets and actual supplied additives/components → preparation → injection → cooling/ejection → trimming/regrind control → assembly/testing → first release → separately accounted actual service |
| market_state | Finished uncoated unfoamed sanitary seat set at plant, ready for declared bowl installation; packaging mass excluded |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared bowl-compatible sitting surface and hinged closure of one complete conventional seat configuration |
| How much | 1 kg net mass of complete sets newly first-released at the factory gate; retain actual accepted set count and measured set masses as supporting data |
| How well | Actual drawing/BOM and load/chemical/function checks for the declared configuration; neither generic flow identity nor another manufacturer trial certifies performance |
| How long or cycle | One manufacturing cohort through first quality release; use-stage life is separately declared only from evidence |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Baths, wash-basins, lavatory pans and covers, flushing cisterns and similar sanitary ware, of plastics `1863571e-49b3-4182-a213-506c1f521d59` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PP homopolymer supplier grade and complete delivered additive formulation; seat and lid geometry plus bowl mounting dimensions and actual drawing revision; hinge material and configuration plus bumper/fixing BOM and included loose fitting kit; unfilled nonfoamed uncoated non-electric non-damped route exclusions; declared load and chemical-resistance specification plus test method and actual result without unearned certification; first-release cohort and unique configuration acceptance status; net complete-set mass measurement and accepted count reconciliation; site geography period production technology and utility supply state; opening/closing WIP and FG with per-exchange inherited burden vectors; internal regrind identity and contamination suitability evidence; cohort-linked subsequent service window and original dispatch/return reversal; packaging components gross shipment inventory and return ownership; use duration or cycles declared only when supported; no durability equivalence from mass |

All required qualifiers must appear in dataset metadata, process notes, reference-flow comments or equivalent fields. The broad native article name fixes no polymer, geometry, geography or performance; its use is confined to the §1 PP set. Actual count and measured net mass of the same complete configuration support reconciliation, with no fixed kg per item.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The basis is 1 kg net complete first-released set mass excluding all transport packaging; cp_release weighs actual complete configurations and reconciles accepted counts. This PCR supplies no per-set mass. |
| raw_units | all inventory rows | Actual exchange property | actual exchange unit | Collect raw totals and original units. Integrate only true rates; do not multiply integrated amounts by duration again. Complete actual composition/unit/state conversions before allocation, then use the one stored normalization result from §8. |
| q_zero | all inventory rows | Mass | kg | Q=0 preserves all real raw burdens, stock, failed runs and service ledgers and yields no unit result. Unknown values cannot be called zero or passed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received PP homopolymer pellets with supplied stabilizers, actual colour masterbatch if used and separately supplied configured components; receipt/transport and upstream burdens retained |
| starting_condition_role | Full foreground converter manufacture from supplied materials; not purchased-finished-set packaging |
| product_classification_scope | Only §1 subset within CPC3.0:36930; mapping acceptance is external to this record |
| recursive_input_rule | Purchased same-category seat sets cannot replace resin-to-article manufacture. Returned already released sets stay in original-cohort service; internal regrind is a burden-carrying transfer, not a new purchased seat or new Q |
| upstream_dataset_requirement | Compatible actual grade/form/state/geography/time provider for each entire supplied input and transport; disclose packaging inclusion and component BOM, no presumed inventory from flow identity |
| disclosure | Actual route, utility state, full operation map, configuration, Q gate, cohort/WIP/FG vectors, service window, upstream coverage, allocation and unresolved quantities |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `b_complete` | manufacture | Include receipt and inbound movement, dosing, actual moisture/temperature conditioning, mould heating and all injection/cooling/ejection cycles, trimming, in-process inspection, eligible regrinding, assembly and destructive/final testing. Retain failed runs, zero-output campaigns, start/stop, idle and cleanup. A bought complete seat may not stand in for these operations. | `ifc-plastics-manufacturing-2007`; `ziax-seat-manufacturing-2025` |
| `b_inputs` | all inventory rows | Count each whole supplied preparation/assembly once. Assay, carrier water, embedded materials and active ingredients are subaccounts. Actual in-house formulation uses each purchased constituent, mixing energy and loss. Require compatible provider coverage including raw polymerization, components and inbound transport. No cut-off is established by a missing UUID or missing meter. | `ifc-plastics-manufacturing-2007` |
| `b_q_gate` | finished | Q is the sum of actual net kg of uniquely first-released complete configurations in the cohort period. Released closing FG is already part of Q and is not an additional manufacturing output. Shipping, reinspection, returned-set repair and internal reuse do not create Q. Unreleased ring/lid parts remain WIP. No fixed single-set kg, assumed density or source-derived test weight may substitute for weighing. | `ziax-seat-manufacturing-2025` |
| `b_stocks` | all inventory rows | For each actual raw material, supplied component, regrind store, auxiliary, water-loop reservoir, in-process fluid, oil reservoir, installed refrigerant charge and adsorbent bed, retain disjoint opening/closing physical quantities, composition and per-exchange inherited burden vectors. Distinguish receipts, issues, returns, retained charge, real loss and outward transfers. Establish consumed burden by the stock_ledger rule before product allocation; raw receipt or refill is not automatically consumption. Retained media may provide service without losing mass: substantiate the assigned service burden and remaining vector with actual service/turnover evidence, not an assumed lifetime or full-charge factor; unresolved attribution remains a gap. Stocks already in product WIP or the separate packaging account cannot also enter this correction. Internal transfers preserve vectors and cancel at the consolidated gate; stock losses retain their burdens. Keep already assigned production/service trace vectors separate from unassigned stock burden entering C_j; a physical return or reused part never charges its original production again. | `ifc-plastics-manufacturing-2007`; `ilcd-attributional-allocation-2010` |
| `b_wip` | manufacture | For every exchange j retain opening and closing WIP physical quantity, stage, composition and inherited burden vector. Assign raw current manufacturing expenditure and opening inherited burdens to actual output/waste/remaining WIP by traceable stage and allocation. Subtract only the evidenced closing-WIP vector to carry it forward. All failed and loss-producing operations retain burdens. | `ifc-plastics-manufacturing-2007` |
| `b_service` | released_service | Keep actual packing, warehouse, handling, dispatch, return inspection and incremental repair in a cohort-linked service ledger. Preserve opening/closing FG and repair WIP physical quantities and inherited production/service vectors, original dispatch reversals on external return and actual incremental repair inputs/waste. Trace the removed component vector and remaining-set vector without subtracting the original production a second time or creating a credit; add only actual new component/repair-service burdens. Reusable removed parts retain their own stock/vector. Allocate historical-cohort services to their original release mass; never divide them by unrelated new production. Disclose the observed service window and unobserved future services. | `ziax-seat-manufacturing-2025` |
| `b_physical` | manufacture; released_service | Use disjoint raw physical gates before allocation. For manufacture, actual boundary inputs + opening raw/auxiliary/regrind/in-process fluid/water-loop/oil/installed-charge/adsorbent stocks + opening product WIP = first release + corresponding closing stocks + closing product WIP + each actual external output/loss. Count whole preparations once and reconcile their constituent subaccounts. For the FG/repair gate, opening FG + new release + actual external returned sets + actual components issued into repair + opening repair WIP = closing FG + gross physical dispatch + actual whole-set rejects + actual removed-component outputs/losses + closing repair WIP; exclude packaging and separately reconcile unissued component/reusable removed-part stores. A removed component retained for reuse is a measured transfer into that store, not waste. Keep the repair subledger: incoming set mass + actual new component mass + opening repair WIP = repaired-set mass + actual removed-component/loss mass + closing repair WIP. Do not assume new and removed parts weigh the same. Internal release/regrind/repair/reuse transfers cancel in the consolidated gate; repair never creates new Q. Check total wet/dry mass and relevant C/Ti/metal/halogen balances independently from chemical speciation and water-phase evidence. Do not fit two unknowns with one residual. Non-reactive PP moulding implies no default reaction water; free/absorbed water, vapour and any genuinely documented reaction/structural water stay distinct. | `ifc-plastics-manufacturing-2007` |
| `b_packaging` | released_service | For each individual sleeve, carton, tape, leaflet and pallet: opening empty + opening attached WIP/FG + opening reusable pool + purchases + external returns received = closing empty + closing attached WIP/FG + closing reusable pool + packaging leaving with gross physical shipments + outward returns + waste. Carry attached inbound packaging on returned sets explicitly; internal reuse cancels. Supplier-included inbound sacks are reconciled separately. Packaging never enters net product Q, a second purchase or an automatic co-product. | `ziax-seat-manufacturing-2025` |
| `b_utilities` | all inventory rows | This bounded route uses electric heat/drives; it does not presume fuel combustion, steam, a boiler or condensate. Actual external cooling supply/return needs paired water-state measurements, heat transfer and supplier burden convention. Record any actually occurring purchased compressed air, fuel, heat, filter, chemical, component, waste and identified gas species as its own atomic card/protocol before using the dataset; a true route extension needs evidence and cannot be buried in zero, other or an aggregate flow. | `ifc-plastics-manufacturing-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Pellet receipt through complete-set first release | required | §1 bounded PP-homopolymer set route | Complete receipt/dosing/actual conditioning/injection/cooling/ejection/trimming/regrind/assembly/QC manufacture | 1 kg |
| released_service | Released-cohort packing warehouse and dispatch service | conditional | Actual observed post-release services of original cohort | Separate service add-on; internal transfers cancel and no new Q | 1 kg |

Use foreground amounts only where the actual exchange occurs; evidenced absence is distinct from an unmeasured unknown. Retain unnormalized raw totals first; each card amount refers only to the same single normalization result in §8. Service aligns to original release cohorts; future unobserved service is not presented as complete. Card descriptions and the §1/section conditions form the full consumable context.

### Process: Complete PP seat-set manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Polypropylene (`pp_resin`)

Incoming unfilled injection-grade PP homopolymer pellets including the supplied stabilizer package. CAS9003-07-0; native record is semicrystalline PP production mix at factory with Mass only. Native grade/form/geography are unspecified; require actual homopolymer grade, pellet condition, supplier and site compatibility. Its classification under other polymer families is metadata debt; neither that classification nor its indicative melting commentary establishes the actual recipe, performance or processing temperature. Purchase this supplied resin once; its constituent assays are subaccounts.

- Selected flow: Polypropylene `54802cfb-bd58-4f85-9ebf-9e0616529c1c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-manufacturing-2007`; `glasfil-pp-seat-trials`

###### Titanium-dioxide-in-polypropylene white masterbatch (`white_mb`)

Conditional actual white coloration: weigh the entire purchased PP-carrier masterbatch once, retaining TiO2 assay and carrier as subaccounts. Other actual colorants require their own individual cards; do not infer all coloured grades from this card.

- Selected flow: Titanium-dioxide-in-polypropylene white masterbatch
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-manufacturing-2007`; `ziax-seat-manufacturing-2025`

###### Polypropylene-carrier screw purging compound (`purging_compound`)

Only the actual supplied PP-carrier purge preparation used in start/stop or colour changes; record full delivered formulation and disposition. Plain resin purging remains in pp_resin rather than a duplicate purchase.

- Selected flow: Polypropylene-carrier screw purging compound
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-manufacturing-2007`

###### Stainless-steel toilet-seat pivot hinge assembly (`hinge`)

Conditional purchased conventional pivot hinge without damper; one supplied assembly per exchange with actual BOM, embedded components and mass. Loose bowl-fixing bolts/nuts/washers are excluded from this assembly account when separately supplied. A plastic or zinc hinge is a different atomic exchange requiring a new card.

- Selected flow: Stainless-steel toilet-seat pivot hinge assembly
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_components`
- Sources: `ziax-seat-manufacturing-2025`

###### Stainless-steel toilet-seat mounting bolt (`bolt`)

Include only when this exact purchased component occurs in the released configuration. Count and weigh the supplied article with grade, finish, dimensions and component BOM; exclude pieces already included in a purchased assembly. Any alternative physical material or separately supplied component needs its own atomic card.

- Selected flow: Stainless-steel toilet-seat mounting bolt
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_components`
- Sources: `ziax-seat-manufacturing-2025`

###### Stainless-steel toilet-seat mounting washer (`washer`)

Include only when this exact purchased component occurs in the released configuration. Count and weigh the supplied article with grade, finish, dimensions and component BOM; exclude pieces already included in a purchased assembly. Any alternative physical material or separately supplied component needs its own atomic card.

- Selected flow: Stainless-steel toilet-seat mounting washer
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_components`
- Sources: `ziax-seat-manufacturing-2025`

###### Polypropylene toilet-seat mounting nut (`nut`)

Include only when this exact purchased component occurs in the released configuration. Count and weigh the supplied article with grade, finish, dimensions and component BOM; exclude pieces already included in a purchased assembly. Any alternative physical material or separately supplied component needs its own atomic card.

- Selected flow: Polypropylene toilet-seat mounting nut
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_components`
- Sources: `ziax-seat-manufacturing-2025`

###### Moulded EPDM toilet-seat bumper (`bumper`)

Include only when this exact purchased component occurs in the released configuration. Count and weigh the supplied article with grade, finish, dimensions and component BOM; exclude pieces already included in a purchased assembly. Any alternative physical material or separately supplied component needs its own atomic card.

- Selected flow: Moulded EPDM toilet-seat bumper
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_components`
- Sources: `ziax-seat-manufacturing-2025`

###### Electricity (`electricity`)

Meter all reception/conveying/dosing, actual conditioning, barrel heating, injection drive/clamping, cooling auxiliaries, ventilation, trimming, granulation, assembly and QC, including rejected/idle/start/stop/cleanup cycles. Purchased air or heat is not implicitly represented by this electricity row. Declare supply voltage, mix and site before provider selection.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources: `ifc-plastics-manufacturing-2007`; `ziax-seat-manufacturing-2025`

###### Industrial supply water (`supply_water`)

Actual makeup and cleaning supply water crossing the plant boundary. Separate cooling circulation from external fresh supply; measure non-water constituents independently. Record source, temperature, quality and amount, not assumed water density for any other liquid.

- Selected flow: Industrial supply water
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-manufacturing-2007`

###### Externally supplied cooling water (`cooling_in`)

Conditional real external cooling-water supply with inlet state, temperature and supplier energy/water burden agreement. Internal recirculation is an internal ledger, not repeated purchase. No steam or boiler is presumed.

- Selected flow: Externally supplied cooling water
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-manufacturing-2007`

###### Aqueous isopropanol cleaning formulation (`cleaner`)

Conditional actual purchased cleaning formulation: retain complete delivered mass, IPA assay and carrier water as subaccounts. If mixed on site, replace this purchase with each actual purchased constituent and mixing energy/loss; never purchase both representations.

- Selected flow: Aqueous isopropanol cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-manufacturing-2007`

###### Aqueous polydimethylsiloxane mould-release emulsion (`release_agent`)

Conditional actual supplied emulsion; measure full preparation once with surfactant/PDMS/water subaccounts. Do not assume application each shot or a fixed dose.

- Selected flow: Aqueous polydimethylsiloxane mould-release emulsion
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-manufacturing-2007`

###### Mineral hydraulic oil (`hydraulic_oil`)

Actual hydraulic-drive system makeup if present, with opening/closing reservoir stock, spills and drained oil; servo-electric drives do not imply hydraulic-oil consumption.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-manufacturing-2007`

###### Cotton cleaning wipe (`cotton_wipe`)

Conditional actual single cotton wipe supply; retain dry article and acquired liquid subaccounts so spent wipe is not counted again as newly purchased cleaner.

- Selected flow: Cotton cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-manufacturing-2007`

###### Aqueous ethylene-glycol cooling formulation (`glycol_coolant`)

Conditional actual closed-loop coolant makeup. The entire purchased preparation is one input; glycol and water assay are subaccounts. Reconcile reservoir inventory and drained coolant.

- Selected flow: Aqueous ethylene-glycol cooling formulation
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-manufacturing-2007`

###### HFC-134a refrigerant (`r134a_makeup`)

Conditional only if an actual installed R134a cooling unit exists. Record actual opening/closing installed charge, refill, recovery and leakage with inherited vectors under stock_ledger; refill alone is not leakage or consumed charge. A different refrigerant requires its own species cards.

- Selected flow: HFC-134a refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-manufacturing-2007`

###### Granular activated carbon adsorbent (`carbon_adsorbent`)

Conditional actual off-gas adsorption device; record fresh carbon, retained VOC loading and spent-carbon destination separately. No automatic abatement efficiency.

- Selected flow: Granular activated carbon adsorbent
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-manufacturing-2007`

###### Woven polypropylene resin supply sack (`inbound_sack`)

Actual supplied single resin/masterbatch sack crossing the receiving boundary with its contents, weighed separately from net resin. Its upstream manufacture is counted only once through supplier-included packaging or an explicit packaging provider. Track empty/attached/reusable stocks, received sacks, outward sacks and waste without inventing an additional sack purchase.

- Selected flow: Woven polypropylene resin supply sack
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `ifc-plastics-manufacturing-2007`

###### Road freight transport service for supplied materials (`inbound_freight`)

Conditional actual loaded road-freight leg for each supplied material/component; record actual vehicle, payload, distance and supplier boundary. Use one compatible freight provider including its fuel/emissions, without duplicating delivered-input transport or moving provider combustion emissions into the converter as direct releases. A real sea/rail leg requires a separate specific service card.

- Selected flow: Road freight transport service for supplied materials
- Flow property / unit: Transport work / tkm
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_transport`
- Sources: `ifc-plastics-manufacturing-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Baths, wash-basins, lavatory pans and covers, flushing cisterns and similar sanitary ware, of plastics (`finished`)

Only the complete unfoamed uncoated non-electric PP homopolymer seat ring plus lid, conventional pivot hinge, declared bumpers and bowl-fixing components of one defined configuration at its first quality release. Native Product identity is manufactured plastic sanitary ware, production mix at plant, with Mass only; no CAS, polymer grade, geometry, route, performance standard, lifetime or geography is fixed. The broad native name is used only for this qualified subset; it is not a cistern, basin, ceramic fixture, raw resin or performance-equivalence claim. Q excludes transport packaging and includes newly released closing FG exactly once.

- Selected flow: Baths, wash-basins, lavatory pans and covers, flushing cisterns and similar sanitary ware, of plastics `1863571e-49b3-4182-a213-506c1f521d59`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: `cp_release`
- Sources: `ziax-seat-manufacturing-2025`; `sanit-plast-pp-seats`; `agi-plastek-sanitary-catalogue`

###### Externally returned cooling water (`cooling_return`)

Conditional physical return paired with cooling_in at the real outlet temperature/composition and measured enthalpy reference. Reconcile loss, makeup and heat transferred; apply supplier water/energy agreement without inventing a steam/condensate credit.

- Selected flow: Externally returned cooling water
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-manufacturing-2007`

##### Waste flows

###### Rejected PP injection-moulding scrap (`pp_scrap`)

Unrecoverable segregated PP runners, short shots, failed mouldings and grinding residue at actual pigment/contamination state; internal eligible regrind is not an external waste output.

- Selected flow: Rejected PP injection-moulding scrap
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-manufacturing-2007`

###### Rejected stainless-steel seat hinge assembly (`reject_hinge`)

Actual rejected supplied hinge; exclude recovered reusable pieces from disposal and retain their burden vector.

- Selected flow: Rejected stainless-steel seat hinge assembly
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-manufacturing-2007`

###### Rejected EPDM seat bumper (`reject_bumper`)

Actual separate EPDM bumper rejects and destructively tested pieces; composition and destination remain explicit.

- Selected flow: Rejected EPDM seat bumper
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-manufacturing-2007`

###### Spent aqueous isopropanol cleaning liquor (`spent_cleaner`)

Actual separated spent cleaning liquor with independently measured IPA, water and contamination; not COD converted to arbitrary chemicals.

- Selected flow: Spent aqueous isopropanol cleaning liquor
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-manufacturing-2007`

###### Spent cotton cleaning wipe (`spent_wipe`)

Weigh actual used cotton and retained liquid by independent dry/wet characterization; do not duplicate liquid already drained to spent_cleaner.

- Selected flow: Spent cotton cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-manufacturing-2007`

###### Spent mineral hydraulic oil (`spent_oil`)

Actual drained or contaminated oil and destination with reservoir stock reconciliation; no standard loss percentage.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-manufacturing-2007`

###### Spent aqueous ethylene-glycol coolant (`spent_coolant`)

Actual drained glycol formulation at measured concentration; do not count recirculated liquid as discharge.

- Selected flow: Spent aqueous ethylene-glycol coolant
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-manufacturing-2007`

###### Spent granular activated carbon (`spent_carbon`)

Actual spent carbon including independently characterized adsorbed matter; captured species retained here are not also emitted to air.

- Selected flow: Spent granular activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-manufacturing-2007`

###### Recovered waste HFC-134a refrigerant (`r134a_recovery`)

Actual recovered refrigerant sent to identified waste/reclamation route; not a default product credit.

- Selected flow: Recovered waste HFC-134a refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-manufacturing-2007`

###### PP-moulding cleaning wastewater (`aqueous_effluent`)

Actual mixed aqueous cleaning outlet with separate measured species, suspended PP and oil subaccounts. Keep transferred wastewater distinct from discharge to an environmental medium and from externally returned clean cooling water.

- Selected flow: PP-moulding cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_water`
- Sources: `ifc-plastics-manufacturing-2007`

###### Discarded polypropylene resin supply sack (`inbound_sack_waste`)

Actual inbound resin/masterbatch supply sacks, with incoming embedded packaging mass and upstream packaging coverage disclosed; do not silently add a separate new sack purchase.

- Selected flow: Discarded polypropylene resin supply sack
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ifc-plastics-manufacturing-2007`

##### Elementary flows

###### Polypropylene particulate to air (`pp_air`)

Conditional measured escaped PP particles after control equipment, with particle-size fraction and actual atmospheric compartment; collected dust stays in its waste/regrind account.

- Selected flow: Polypropylene particulate to air
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-manufacturing-2007`

###### Water vapour to air (`water_air`)

Actual water evaporation from independently measured water balance; no reaction-water production is assumed for this non-reactive route. Native water vapour CAS7732-18-5, Elementary flow, emissions to air unspecified, Mass/kg. Apply only to independently measured actual ordinary species in this receiving medium. No fixed production geography or route is specified. Other receiving media, indoor or long-term releases require distinct verified identities. Mixture, formalin/POM/polymer, isotope, ion and strong-acid-route synonyms are not evidence for a different adopted substance or a manufacturing process. A whole purchased preparation, captured/waste stream, constituent subledger and actual environmental species are separate; no UUID implies occurrence or a factor. Ordinary H2O vapour is not liquid drift/aerosol or invented reaction water.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-manufacturing-2007`

###### n-Butane to air (`butane_air`)

Only when actual speciation distinguishes n-butane from other butane isomers; IFC potential high-temperature substances are screening prompts, not normal-operation emission quantities. Native n-butane CAS106-97-8, Elementary flow, emissions to air unspecified, Mass/kg. Apply only to independently measured actual ordinary species in this receiving medium. No fixed production geography or route is specified. Other receiving media, indoor or long-term releases require distinct verified identities. Mixture, formalin/POM/polymer, isotope, ion and strong-acid-route synonyms are not evidence for a different adopted substance or a manufacturing process. A whole purchased preparation, captured/waste stream, constituent subledger and actual environmental species are separate; no UUID implies occurrence or a factor.

- Selected flow: n-butane `4d9a8790-3ddd-11dd-94c2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-manufacturing-2007`

###### Formaldehyde to air (`formaldehyde_air`)

Only verified chemical-specific measurement; an aldehyde-group result or total VOC does not identify formaldehyde. Native formaldehyde CAS50-00-0, Elementary flow, emissions to air unspecified, Mass/kg. Apply only to independently measured actual ordinary species in this receiving medium. No fixed production geography or route is specified. Other receiving media, indoor or long-term releases require distinct verified identities. Mixture, formalin/POM/polymer, isotope, ion and strong-acid-route synonyms are not evidence for a different adopted substance or a manufacturing process. A whole purchased preparation, captured/waste stream, constituent subledger and actual environmental species are separate; no UUID implies occurrence or a factor.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-manufacturing-2007`

###### Propene to air (`propene_air`)

Only independently identified propene in actual vent testing; PP polymer mass does not establish monomer release. Native propene CAS115-07-1, Elementary flow, emissions to air unspecified, Mass/kg. Apply only to independently measured actual ordinary species in this receiving medium. No fixed production geography or route is specified. Other receiving media, indoor or long-term releases require distinct verified identities. Mixture, formalin/POM/polymer, isotope, ion and strong-acid-route synonyms are not evidence for a different adopted substance or a manufacturing process. A whole purchased preparation, captured/waste stream, constituent subledger and actual environmental species are separate; no UUID implies occurrence or a factor.

- Selected flow: propene `fe0acd60-3ddc-11dd-ab3d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-manufacturing-2007`

###### Isopropanol to air (`ipa_air`)

Actual volatilized IPA from identified cleaning preparation; independently quantify air versus spent liquid, capture and retained stock. Native isopropanol CAS67-63-0, Elementary flow, emissions to air unspecified, Mass/kg. Apply only to independently measured actual ordinary species in this receiving medium. No fixed production geography or route is specified. Other receiving media, indoor or long-term releases require distinct verified identities. Mixture, formalin/POM/polymer, isotope, ion and strong-acid-route synonyms are not evidence for a different adopted substance or a manufacturing process. A whole purchased preparation, captured/waste stream, constituent subledger and actual environmental species are separate; no UUID implies occurrence or a factor.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-manufacturing-2007`

###### HFC-134a to air (`r134a_air`)

Actual R134a leakage only, reconciled with service charge, stock and recovered refrigerant; no generic refrigerant factor or default presence. Native HFC-134a CAS811-97-2, Elementary flow, emissions to air unspecified, Mass/kg. Apply only to independently measured actual ordinary species in this receiving medium. No fixed production geography or route is specified. Other receiving media, indoor or long-term releases require distinct verified identities. Mixture, formalin/POM/polymer, isotope, ion and strong-acid-route synonyms are not evidence for a different adopted substance or a manufacturing process. A whole purchased preparation, captured/waste stream, constituent subledger and actual environmental species are separate; no UUID implies occurrence or a factor. Native official Chinese baseName is absent; retain HFC-134a in both selected-flow displays, not an invented official translation.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `ifc-plastics-manufacturing-2007`

### Process: Post-release cohort services (`released_service`)

#### Inputs

##### Product flows

###### Baths, wash-basins, lavatory pans and covers, flushing cisterns and similar sanitary ware, of plastics (`released_in`)

Internal transfer of actual first-released qualified seat sets into the cohort warehouse ledger; same native plastic-sanitary identity and restrictions as finished, Mass only. This transfer cancels finished at the consolidated physical gate and introduces no second production burden or Q. Native record has no fixed CAS, polymer grade, geometry, production route, performance standard, lifetime or geography, and only Mass; this exchange is limited to the nonfoamed uncoated non-electric PP-homopolymer seat/lid configuration with conventional non-damped hinge and declared bumpers/fixings. It supplies no background inventory or functional equivalence.

- Selected flow: Baths, wash-basins, lavatory pans and covers, flushing cisterns and similar sanitary ware, of plastics `1863571e-49b3-4182-a213-506c1f521d59`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Baths, wash-basins, lavatory pans and covers, flushing cisterns and similar sanitary ware, of plastics (`customer_return`)

Actual externally returned qualified complete PP seat sets of their original configuration/cohort; same manufactured-plastic-sanitary native restrictions and Mass only. Record original dispatch reversal and inherited per-exchange production/service burden. Inspection or redispatch is never a new first release. Native record has no fixed CAS, polymer grade, geometry, production route, performance standard, lifetime or geography, and only Mass; this exchange is limited to the nonfoamed uncoated non-electric PP-homopolymer seat/lid configuration with conventional non-damped hinge and declared bumpers/fixings. It supplies no background inventory or functional equivalence.

- Selected flow: Baths, wash-basins, lavatory pans and covers, flushing cisterns and similar sanitary ware, of plastics `1863571e-49b3-4182-a213-506c1f521d59`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Electricity (`service_electricity`)

Meter actual cohort-linked warehouse, powered handling, packing, inspection and repair drives separately from manufacture. Historical cohort service uses its original release denominator, not this period new output.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### LDPE protective sleeve (`sleeve`)

Actual supplied individual sleeve. Its own empty/attached/reusable packaging inventory and gross physical shipments are reconciled; not net Q.

- Selected flow: LDPE protective sleeve
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Corrugated shipping carton (`carton`)

One actual supplied corrugated carton with board/adhesive composition and provider coverage. It is not a bundle of all packaging.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### BOPP pressure-sensitive sealing tape (`tape`)

One supplied BOPP-film/acrylic-adhesive tape preparation; adhesive and carrier are composition subaccounts, not additional purchases.

- Selected flow: BOPP pressure-sensitive sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Printed paper installation leaflet (`leaflet`)

Actual printed leaflet supplied with the set, excluded from net product mass and reconciled separately as packaging/information material.

- Selected flow: Printed paper installation leaflet
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Reusable wooden shipping pallet (`pallet`)

Actual reusable pallet purchase/replacement and external returns; retain opening/closing pool, reuse cycles, repair and waste without repurchasing internal reuse.

- Selected flow: Reusable wooden shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Stainless-steel toilet-seat pivot hinge assembly (`repair_hinge`)

Conditional replacement of the same conventional supplied hinge described by hinge, during original-cohort post-release repair. Measure actual increment and failed hinge destination; no new seat production.

- Selected flow: Stainless-steel toilet-seat pivot hinge assembly
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Moulded EPDM toilet-seat bumper (`repair_bumper`)

Conditional actual post-release replacement bumper of the declared EPDM configuration; other materials require separate cards and evidence.

- Selected flow: Moulded EPDM toilet-seat bumper
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### LDPE protective sleeve (`sleeve_external_received`)

Only actual externally received return of this exact packaging article. Trace its original owner/cohort, attached or empty state, reusable condition and inherited burden vector. This is a physical receipt, not a new purchase; internal reuse is not an external receipt.

- Selected flow: LDPE protective sleeve
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Corrugated shipping carton (`carton_external_received`)

Only actual externally received return of this exact packaging article. Trace its original owner/cohort, attached or empty state, reusable condition and inherited burden vector. This is a physical receipt, not a new purchase; internal reuse is not an external receipt.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### BOPP pressure-sensitive sealing tape (`tape_external_received`)

Only actual externally received return of this exact packaging article. Trace its original owner/cohort, attached or empty state, reusable condition and inherited burden vector. This is a physical receipt, not a new purchase; internal reuse is not an external receipt.

- Selected flow: BOPP pressure-sensitive sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Printed paper installation leaflet (`leaflet_external_received`)

Only actual externally received return of this exact packaging article. Trace its original owner/cohort, attached or empty state, reusable condition and inherited burden vector. This is a physical receipt, not a new purchase; internal reuse is not an external receipt.

- Selected flow: Printed paper installation leaflet
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Reusable wooden shipping pallet (`pallet_external_received`)

Only actual externally received return of this exact packaging article. Trace its original owner/cohort, attached or empty state, reusable condition and inherited burden vector. This is a physical receipt, not a new purchase; internal reuse is not an external receipt.

- Selected flow: Reusable wooden shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Baths, wash-basins, lavatory pans and covers, flushing cisterns and similar sanitary ware, of plastics (`gross_dispatch`)

Actual gross physical dispatch of the qualified manufactured seat set, with original configuration/cohort and the full native restrictions in finished. Native Mass only; dispatch excludes transport packaging mass and is a warehouse output, not a new reference-production amount. Keep physical gross shipment distinct from net commercial delivery after return reversal. Native record has no fixed CAS, polymer grade, geometry, production route, performance standard, lifetime or geography, and only Mass; this exchange is limited to the nonfoamed uncoated non-electric PP-homopolymer seat/lid configuration with conventional non-damped hinge and declared bumpers/fixings. It supplies no background inventory or functional equivalence.

- Selected flow: Baths, wash-basins, lavatory pans and covers, flushing cisterns and similar sanitary ware, of plastics `1863571e-49b3-4182-a213-506c1f521d59`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### LDPE protective sleeve (`sleeve_gross_out`)

Actual mass of this exact packaging article physically leaving attached to gross shipments of the declared cohort. Retain destination, composition, original stock/burden identity and return/reuse status. Exclude from net seat Q; no new product burden or credit is created by this physical outward movement.

- Selected flow: LDPE protective sleeve
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### LDPE protective sleeve (`sleeve_external_return`)

Only actual outward return of this exact empty or reusable packaging article to an external owner/provider, separately from packaging on gross seat shipments and waste. Retain original ownership/burden vector and physical condition; internal reuse cancels and never appears here.

- Selected flow: LDPE protective sleeve
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Corrugated shipping carton (`carton_gross_out`)

Actual mass of this exact packaging article physically leaving attached to gross shipments of the declared cohort. Retain destination, composition, original stock/burden identity and return/reuse status. Exclude from net seat Q; no new product burden or credit is created by this physical outward movement.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Corrugated shipping carton (`carton_external_return`)

Only actual outward return of this exact empty or reusable packaging article to an external owner/provider, separately from packaging on gross seat shipments and waste. Retain original ownership/burden vector and physical condition; internal reuse cancels and never appears here.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### BOPP pressure-sensitive sealing tape (`tape_gross_out`)

Actual mass of this exact packaging article physically leaving attached to gross shipments of the declared cohort. Retain destination, composition, original stock/burden identity and return/reuse status. Exclude from net seat Q; no new product burden or credit is created by this physical outward movement.

- Selected flow: BOPP pressure-sensitive sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### BOPP pressure-sensitive sealing tape (`tape_external_return`)

Only actual outward return of this exact empty or reusable packaging article to an external owner/provider, separately from packaging on gross seat shipments and waste. Retain original ownership/burden vector and physical condition; internal reuse cancels and never appears here.

- Selected flow: BOPP pressure-sensitive sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Printed paper installation leaflet (`leaflet_gross_out`)

Actual mass of this exact packaging article physically leaving attached to gross shipments of the declared cohort. Retain destination, composition, original stock/burden identity and return/reuse status. Exclude from net seat Q; no new product burden or credit is created by this physical outward movement.

- Selected flow: Printed paper installation leaflet
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Printed paper installation leaflet (`leaflet_external_return`)

Only actual outward return of this exact empty or reusable packaging article to an external owner/provider, separately from packaging on gross seat shipments and waste. Retain original ownership/burden vector and physical condition; internal reuse cancels and never appears here.

- Selected flow: Printed paper installation leaflet
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Reusable wooden shipping pallet (`pallet_gross_out`)

Actual mass of this exact packaging article physically leaving attached to gross shipments of the declared cohort. Retain destination, composition, original stock/burden identity and return/reuse status. Exclude from net seat Q; no new product burden or credit is created by this physical outward movement.

- Selected flow: Reusable wooden shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Reusable wooden shipping pallet (`pallet_external_return`)

Only actual outward return of this exact empty or reusable packaging article to an external owner/provider, separately from packaging on gross seat shipments and waste. Retain original ownership/burden vector and physical condition; internal reuse cancels and never appears here.

- Selected flow: Reusable wooden shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

##### Waste flows

###### Discarded LDPE protective sleeve (`sleeve_discard`)

Actual separately measured cohort-linked stream and recipient, retaining inherited burden and distinguishing repair, reuse, stock, waste and gross outward packaging. No automatic co-product, avoided-product credit or new Q. For a rejected complete set, dismantled components replace the whole-set waste representation without duplicating it.

- Selected flow: Discarded LDPE protective sleeve
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Discarded corrugated shipping carton (`carton_discard`)

Actual separately measured cohort-linked stream and recipient, retaining inherited burden and distinguishing repair, reuse, stock, waste and gross outward packaging. No automatic co-product, avoided-product credit or new Q. For a rejected complete set, dismantled components replace the whole-set waste representation without duplicating it.

- Selected flow: Discarded corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Discarded BOPP sealing tape (`tape_discard`)

Actual separately measured cohort-linked stream and recipient, retaining inherited burden and distinguishing repair, reuse, stock, waste and gross outward packaging. No automatic co-product, avoided-product credit or new Q. For a rejected complete set, dismantled components replace the whole-set waste representation without duplicating it.

- Selected flow: Discarded BOPP sealing tape
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Discarded printed installation leaflet (`leaflet_discard`)

Actual separately measured cohort-linked stream and recipient, retaining inherited burden and distinguishing repair, reuse, stock, waste and gross outward packaging. No automatic co-product, avoided-product credit or new Q. For a rejected complete set, dismantled components replace the whole-set waste representation without duplicating it.

- Selected flow: Discarded printed installation leaflet
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Discarded wooden shipping pallet (`pallet_discard`)

Actual separately measured cohort-linked stream and recipient, retaining inherited burden and distinguishing repair, reuse, stock, waste and gross outward packaging. No automatic co-product, avoided-product credit or new Q. For a rejected complete set, dismantled components replace the whole-set waste representation without duplicating it.

- Selected flow: Discarded wooden shipping pallet
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Rejected complete PP toilet-seat set (`service_reject`)

Actual separately measured cohort-linked stream and recipient, retaining inherited burden and distinguishing repair, reuse, stock, waste and gross outward packaging. No automatic co-product, avoided-product credit or new Q. For a rejected complete set, dismantled components replace the whole-set waste representation without duplicating it.

- Selected flow: Rejected complete PP toilet-seat set
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Rejected stainless-steel seat hinge assembly (`service_hinge_waste`)

Actual separately measured cohort-linked stream and recipient, retaining inherited burden and distinguishing repair, reuse, stock, waste and gross outward packaging. No automatic co-product, avoided-product credit or new Q. For a rejected complete set, dismantled components replace the whole-set waste representation without duplicating it.

- Selected flow: Rejected stainless-steel seat hinge assembly
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

###### Rejected EPDM seat bumper (`service_bumper_waste`)

Actual separately measured cohort-linked stream and recipient, retaining inherited burden and distinguishing repair, reuse, stock, waste and gross outward packaging. No automatic co-product, avoided-product credit or new Q. For a rejected complete set, dismantled components replace the whole-set waste representation without duplicating it.

- Selected flow: Rejected EPDM seat bumper
- Flow property / unit: Mass / kg
- Amount rule: Use the single stored normalization result from §8; the linked protocol first retains raw undivided quantity, actual conditions and attribution.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_service`
- Sources: `ziax-seat-manufacturing-2025`

##### Elementary flows

## 7. Allocation and Co-product Handling

The following rules are limited to attributional process multifunctionality. General industrial documents do not establish LCA allocation; the allocation context comes from ILCD.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `a_scenario` | all shared processes | These provisions apply only to an explicit attributional allocation-required scenario after goal/context assessment. Do not treat process physical/economic allocation as a free choice, consequential substitution rule or multifunctional-product QFD. | `ilcd-attributional-allocation-2010` |
| `a_subdivide` | all shared processes | First collect dedicated unit operations and product-exclusive material/energy/waste records. Use actual or defensible virtual subdivision for remaining separable parts. Assembly inputs unique to this configured set remain dedicated; do not allocate them to unrelated products. Document infeasibility and material distortion before leaving a common process. | `ilcd-attributional-allocation-2010` |
| `a_causality` | each remaining shared exchange | Identify the determining physical relation separately for each exchange: how changing the quantity of each delivered product changes that actual input/output. A validated cycle/shot load model may differ from material incorporation, cleaning area or warehouse occupied-volume-time. Test operating/load records; mass, item count or machine time is not automatically causal. Different exchanges may need different criteria. Ring and lid jointly forming one set are internal components, not saleable coproducts by default. | `ilcd-attributional-allocation-2010` |
| `a_residual` | genuinely unresolved common-process exchanges | Only after justifying that determining physical causality cannot resolve an exchange, allocate that genuine remainder by contemporaneous market value at the actual common-process gate and actual quality, bulk amount and packaged/unpackaged state. Remove later product-specific transport/conditioning/service costs from downstream prices. Retain evidence and sensitivity; no fixed ratio, arbitrary physical/economic selector, zero-value waste adjustment or automatic avoided-product credit. | `ilcd-attributional-allocation-2010` |
| `a_regrind` | manufacture; released_service | Eligible internal PP regrind retains its exact identity, pigment/contamination state and inherited vector plus grinding/drying/reprocessing increments. It is neither new virgin purchase nor burden-free output. Separately sold scrap requires demonstrated destination and explicit system-boundary/allocation treatment; do not net it from virgin feed or add a credit automatically. External returned seat repairs remain original-cohort increments. | `ilcd-attributional-allocation-2010`; `ifc-plastics-manufacturing-2007` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect undivided raw amounts, actual states and evidenced attribution; collection_method does not pre-normalize. The aggregation_rule column labels the final target basis; collection performs no division. Cards and aggregation read the same stored result. Preserve exchange-specific opening/closing WIP/FG vectors and internal-transfer subledgers with raw records.

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | supplied preparations and auxiliaries | weighing; stock; invoice; formulation | lot; supplied full formulation; received kg; each disjoint opening/closing raw/auxiliary/regrind/fluid/oil/installed-charge/adsorbent stock; measured composition; per-exchange inherited vectors; actual issues/refills; residual; internal/external returns and unused outward transfers; real losses; measured concentration; actual conditioning; service/turnover evidence; internal regrind movements | Calibrated whole-preparation weighings, receipts and each stock/charge reading; independently measure active/carrier composition without a second purchase. Reconcile each material raw physical ledger, distinguish issue/refill from actual consumed amount, and apply stock_ledger once to its inherited vectors before allocation. Retain actual losses; substantiate retained-media service attribution and unresolved values. Keep actual input UUID/provider state. | kg | each lot and charge | all campaign periods including zero output | each receiving/dosing and maintenance station | per 1 kg reference flow | scale calibration; invoices; supplier assay; stock reconciliation |
| cp_components | manufacture | configured supplied parts | BOM; purchase; count and weighing | configuration; supplier article; included assembly BOM; received/issued/returned counts and measured component masses; disjoint opening/closing component stores; composition and inherited vectors; gross/tare; rejection; actual grade and finish | Match purchased component drawings/BOM to released set and weigh supplied parts independently; reconcile received/issued/returned parts and stock_ledger vectors before allocation, avoiding nested-assembly double counting. | kg | each component lot and configuration change | complete campaign with trial and destructive rejects | receipt and assembly workstations | per 1 kg reference flow | purchase BOM; scale records; assembly checks |
| cp_energy | manufacture | manufacturing electricity | meter; load study; time record | meter ID; start/end readings; original unit; true rate/time if applicable; machine mode; cycle/shot; regrind/conditioner/chiller/compressor meters; allocation drivers | Use cumulative kWh differences or integrate true kW rate once. Submeter operations or substantiate exchange-specific load relations; retain startup, failed, idle and cleaning periods. | kWh | continuous meter with campaign reconciliation | all operating and nonproductive time | complete converter and associated auxiliaries | per 1 kg reference flow | calibrated meter; load-model validation; no unmetered exclusion |
| cp_water | manufacture | water and actual aqueous outlets | meter; sample; thermal-state record | each inlet/outlet; original mass or integrated volume; actual density/state; temperature/pressure; each disjoint water-loop/in-process-fluid opening/closing quantity and composition; per-exchange inherited vectors; actual makeup/withdrawal/loss/return; water content; dissolved/suspended species; supplier convention; heat-transfer reference | Measure boundary streams and each reservoir change; independently establish each liquid density if volume conversion is required. Reconcile physical water and constituent ledgers and stock_ledger vectors without treating circulation as purchases. Pair real cooling-return state and heat transfer, excluding internal circulation from purchases. | kg | continuous flow plus batch sample | same campaign with maintenance and cleanup | individual water circuits and actual discharge interfaces | per 1 kg reference flow | meter calibration; density and species assays; supplier thermal convention |
| cp_release | manufacture | first-release net complete sets | unique acceptance; calibrated mass; configuration | configuration; serial or lot; unique first-release ID/date; complete BOM; accepted count; individual net set kg; loose fitting kit; packaging tare; test disposition; WIP/FG state | Weigh complete accepted configurations on a calibrated scale excluding all transport packaging and including the declared hinge/bumper/fixing kit. Reconcile measured set masses, count, unique first releases and closing FG. | kg | each first-release lot and configuration | same campaign and traced prior inherited cohorts | final assembly/testing and FG entry | per 1 kg reference flow | calibration; actual drawings and test reports; unique-release register |
| cp_waste | manufacture | each actual waste stream | weighing; transfer; composition | stream identity; raw kg; original unit; wet/dry content; independently measured composition; opening/closing stocks; destination; retained burden; regrind suitability | Segregate physically distinct waste streams, weigh and trace recipient. Record recoverable internal transfers and their inherited vectors separately; no inferred zero from missing contractor data. | kg | each waste movement and stocktake | all campaigns including failed runs and maintenance | actual waste collection points | per 1 kg reference flow | weigh tickets; composition; legal recipient evidence without automatic credits |
| cp_species | manufacture | each identified release species | species analysis; mass balance; maintenance log | actual chemical; phase; medium; sample interval; total integrated gas/liquid volume or true rate; temperature/pressure; independent density; concentration/speciation; capture path; stock/refill/recovery; detection limit | Use molecule-specific measurements and real control destinations; integrate true rates once and use already integrated volumes directly. Distinguish reporting metrics from chemical mass and preserve non-detect limits as uncertainty. | kg | representative mode-specific tests and maintenance events | complete campaign modes including startup/upset/cleaning | each actual vent/discharge and refrigerant unit | per 1 kg reference flow | sampling scope; analytical recovery; species proof; control mass balance |
| cp_service | released_service | cohort service and each packaging/component movement | warehouse; packaging; utility; return; repair records | cohort original release kg; first-release IDs; opening/closing FG and inherited vectors; gross dispatch; original dispatch reversal; external returned-set measured mass; each new/removed component identity and independently measured mass; received/issued/returned repair components; unissued/reusable-removed-part opening/closing stores and inherited vectors; opening/closing repair WIP quantity/composition and inherited vectors; actual incremental repair services/losses; service utility raw units; each packaging opening empty/attached/pool; purchase; external return received; closing empty/attached/pool; gross outward packaging; outward return; waste; period | Trace every set and service cost to original release cohort. Independently weigh each new and removed repair component and each packaging stream; reconcile stock_ledger, the complete FG/repair subgate and packaging physical ledgers before allocation. Preserve removed-part/remaining-set inherited vectors and original dispatch reversal without a second production charge or new Q. Meter actual incremental repair and service utilities without manufacturing double count. | kg; kWh | each service movement and period close | declared observed window by original cohort | warehouse/packing/dispatch/return-repair interfaces | per 1 kg reference flow | cohort trace; scale/meter calibration; returns and original dispatch proof |
| cp_transport | manufacture | material inbound road freight | shipment and route records | supplied material lot; raw net/tare/gross kg; actual road distance km; payload; vehicle and load state; supplier transport coverage; return-leg convention; allocation drivers | Retain raw weights and distances for every actual leg; compute tonne-kilometres before allocation. Match freight provider boundary and prevent duplicate delivered transport. | tkm | each actual delivery leg | all supplied lots in campaign | actual supplier-to-receiver route | per 1 kg reference flow | shipment weights; route evidence; provider coverage |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `raw_conversion` | all inventory rows | Convert raw units to the exchange unit before allocation: cumulative-meter differences are already integrated; integrate only true rates. Count-based component totals use measured component net masses of the actual configuration. Volume-to-mass uses independently measured density of that exact material/state. kWh to MJ uses 3.6 when needed; never infer a set kg or density from a background factor. | raw_records; actual_unit_conversion; measured_component_mass; independent_density | converted_raw | `ifc-plastics-manufacturing-2007` |
| `stock_ledger` | all inventory rows | Across disjoint non-WIP stocks r for each exchange j, consumed_vector_j = sum_r(opening_vector_rj - closing_vector_rj) + actual_received_vector_j + actual_external_return_vector_j - unused_outward_transfer_vector_j. These are unassigned stock burdens; actual_received means external supplied-material receipts once, excluding separately tracked stock returns and internal transfers. Already assigned FG/removed-part trace vectors do not become a new received burden. Retain quantities/composition separately for every actual material and medium; actual issues, stock losses, retired charge and evidenced service provided determine attribution, not receipts alone. Closing vectors reflect evidenced remaining material/service potential without a default life or linear depletion assumption. Internal stock/regrind transfers cancel within the combined account; retain their individual vectors without a second receipt. Exclude product WIP and packaging corrected elsewhere. Reconcile consumed plus remaining/transferred vectors to the original total and preserve raw received/issued/returned/loss physical quantities unchanged. | opening_vector; actual_received_vector; actual_external_return_vector; closing_vector; unused_outward_transfer_vector; physical_stock_records; service_evidence | consumed_vector | `ifc-plastics-manufacturing-2007`; `ilcd-attributional-allocation-2010` |
| `attribute_raw` | all inventory rows | C_j = dedicated attributable_raw_j + sum(shared_attributable_raw_jk * evidenced_share_jk); attributable_raw uses consumed_vector from stock_ledger for stored materials/media/components and converted raw totals for actual non-stock services/releases. Do not add the receipts/refills or stock vectors again. Determine each share by §7 while keeping actual physical quantities separate and unchanged. Retain every zero-output/failed/startup/idle/cleanup load. Preserve vectors for actual internal regrind and WIP transfers without new virgin purchase. | converted_raw; consumed_vector; dedicated_record; share_jk; inherited_vector | C_j | `ilcd-attributional-allocation-2010` |
| `release_denominator` | finished | Q_c = sum(unique_first_release_net_kg_c); each complete accepted set is weighed and counted in cp_release. Closing newly released FG is already in this sum; exclude packaging, old returned sets and repeat inspection/dispatch. | unique_first_release_net_kg; cp_release | Q_c | `ziax-seat-manufacturing-2025` |
| `carry_wip` | manufacture | A_j_c = C_j_c + opening_WIP_burden_j_c - closing_WIP_burden_j_c; C_j is already corrected once for the disjoint non-WIP stocks in stock_ledger. Opening and closing product-WIP vectors are exchange-specific and based on measured stage/composition and actual assigned burdens. Reconcile each vector to physical WIP; do not repeat a raw/charge/repair-stock correction here. Unexplained stock change is a gap. | C_j; opening_WIP_burden; closing_WIP_burden; cp_release | A_j_c | `ifc-plastics-manufacturing-2007` |
| `normalize_once` | all inventory rows | For Q_c > 0, result_j_c = A_j_c / Q_c for manufacture. The service ledger uses A_j_c equal to actual incremental cohort-attributed service after the disjoint component/media stock_ledger correction plus opening service/repair-WIP vector minus closing service/repair-WIP vector, and the same cohort original release kg as Q_c. Removed-part/remaining-set inherited production vectors are traced separately, not re-purchased or credited; new components and real repair operations add only their actual incremental burdens. For internal-transfer, external-return and gross-dispatch physical movement cards, A_j_c is the actual raw physical movement in its unit, not new production/service expenditure; carry inherited burden separately and cancel internal movements. For each packaging purchase, the physical input card retains purchases; assign actual consumed packaging burden from opening unused-stock vector plus purchases minus closing unused-stock vector and outward unused-stock transfers, tracing external-return vectors without treating returns/reuse as new purchases. Execute this one division once; card amounts and aggregation views use the stored result unchanged. Q_c=0 retains burdens and yields no unit result. Consolidate only matching cohort/coverage and cancel internal physical transfers; inherited production vectors are carried, not added a second time as new service expenditure. | A_j_c; Q_c; cohort_id; service_coverage | result_j_c | `ifc-plastics-manufacturing-2007`; `ziax-seat-manufacturing-2025` |
| `physical_reconciliation` | all inventory rows | Evaluate the manufacturing/FG/consolidated mass and relevant-element equations and each independent packaging equation in §5 in raw physical units before normalization. Product, waste, elementary and external cooling-return directions remain distinct. Physically measure independent unknowns rather than assigning one residual to multiple sinks. | physical_opening; physical_inputs; physical_closing; physical_outputs; species_assays | reconciliation_report | `ifc-plastics-manufacturing-2007`; `ziax-seat-manufacturing-2025` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_source` | all inventory rows | Use actual configuration/grade/route and period/site-specific records; public sources supply process context only. Separate supplier evidence from mixed-source technical synthesis. | full supplier records; source context; actual BOM |
| `dq_completeness` | all inventory rows | Unlisted actual exchanges need atomic cards and protocols. Conditional absence requires physical evidence; no measurement/UUID is an unresolved value, not a zero. Do not omit rejected/zero-output periods, auxiliary consumption or supply/return interfaces. | operation map; purchase and stock census; actual discharge screening |
| `dq_trace` | all inventory rows | Retain raw units and calibration, conversion, share evidence, inherited vectors, one stored normalization result and uncertainty. Ordinary missing provider/auxiliary identity is resolved before that data use, without fabricating universal quantities. | raw-to-result audit and stock/service lineage |
| `dq_function` | finished | Disclose actual geometry, mounting dimensions, net mass, test method/result, exclusions and supported lifespan/cycles. Mass-normalized records alone do not compare different seat functions or certify a standard. | configuration-specific drawing/BOM and test evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_identity` | all inventory rows | Verify each supplied physical/chemical article, actual occurrence, native type, all names/comments/CAS, fixed state/route/grade/form/geography, all properties and exact property-to-unit-group chain before quantitative provider binding. Broad native sanitary ware and PP displays remain qualified as in each card; no certification or grade equivalence follows from UUID presence. | `ifc-plastics-manufacturing-2007`; `ziax-seat-manufacturing-2025` |
| `v_raw` | all inventory rows | Require unnormalized raw records with original units, cumulative-meter versus true-rate distinction, actual conversions and exchange-specific allocations. Execute the single §8 normalization only once after raw conversion/allocation and WIP-vector reconciliation. Card amounts and collection aggregation refer to that same result; do not divide a pre-normalized factor again. Q=0 retains real loads and produces no per-unit value. Unknowns are gaps rather than verified zero or pass. | `ifc-plastics-manufacturing-2007` |
| `v_gates` | manufacture; released_service | Reconcile §5 manufacturing, FG and consolidated physical gates and every packaging equation, together with inherited burden vectors. Gross shipments, net commercial delivery, release Q and physical returns are different observables. Check rejection/destructive tests and all service repairs without creating extra production. No balancing residual may serve simultaneously as water loss and unknown chemical emission. | `ifc-plastics-manufacturing-2007`; `ziax-seat-manufacturing-2025` |
| `v_species` | all emission and wastewater rows | Retain actual molecule/species, phase, medium, test method, detection limits and control-device destination. Total VOC, COD, aldehyde group or mass residual does not establish specific chemical mass. Independently measure any density at that substance state; integrated liquid/gas volume is not multiplied by time again, while true rates are integrated. IFC Table4 prompts screening under its stated high-temperature condition and never establishes a universal release list or factor. | `ifc-plastics-manufacturing-2007` |
| `v_release` | finished | Require complete configuration BOM, traceable first quality release and measured net mass, plus actual declared geometric/functional/load/chemical checks. Informal supplier trial weights, catalogue dimensions and generic native identity do not certify the modeled configuration. A real unresolved terminal/manufacturing-method gap prevents completed-method claims; ordinary auxiliary identity or future factory measurements do not alone establish such a gap. | `ziax-seat-manufacturing-2025`; `glasfil-pp-seat-trials` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Configured PP-seat input to a downstream assembly/building LCA with matching boundary and disclosed observed service add-on |
| allowed_use | Only actual §1 route/configuration, valid provider and unit basis, transparent release gate and observed service coverage |
| excluded_use | Whole-CPC coverage; ceramic/UF/foam/wood/basin/cistern substitution; durability or compliance certification; replacing manufacture with packing; automatic recycling credits |
| required_metadata | All required qualifiers; actual raw material supply forms and full formulations; process/row/protocol IDs; upstream provider coverage; actual emission species; original cohort release and service windows |
| required_quality_disclosure | No generic source factors adopted; allocation proof and uncertainty; WIP/FG and packaging vectors; gaps, non-detect limits and measurement completeness; actual observed-service coverage |
| update_trigger | Change of polymer/grade/formulation, geometry/BOM, hinge or damping, coating, electricity/cooling interface, process/cycle evidence, release gate, provider, measured mass, service/return handling or source constraints |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ifc-plastics-manufacturing-2007` | official_guidance | IFC / World Bank Group. Environmental, Health, and Safety Guidelines for Metal, Plastic, and Rubber Products Manufacturing (30 April 2007), pp9–11 and21–24. https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf | Non-reactive pellet supply; injection forming; granulation; additive delivery; water/waste/emission screening. Table4 is high-temperature potential-release context; no factors or allocation rules. |
| `ziax-seat-manufacturing-2025` | handbook | Xiamen Ziax Sanitaryware. OEM Toilet Seat Manufacturing Process (14 November 2025). https://www.ziaxbathroom.com/info/oem-toilet-seat-manufacturing-process-ziax-103216236.html | Seat-specific moulding, finishing, hinge assembly, QC and packaging stages. Alternative UF/wood, coating and damping variants are distinguished. Marketing test numbers are not adopted specifications. |
| `sanit-plast-pp-seats` | handbook | Sanit-Plast. Manufacturer of plastic toilet seats. https://sanit-plast.eu/ | Independent industrial PP-seat injection endpoint; its supplier/machine example does not fix this PCR provider or grade. |
| `glasfil-pp-seat-trials` | handbook | Glasfil Polymer. Polymer Material Selection Case Study. https://glasfil.com/case-study/glasfil-polymer-material-selection-case-study/ | Specific homopolymer seat-cover trial and failed talc-filled/copolymer trials. Qualitative counterevidence only; informal tests do not establish load certification or universal grade equivalence. |
| `agi-plastek-sanitary-catalogue` | handbook | AGI plastek. Catalogue V7, PDF pp80–82 (seat page81; PDF metadata March2023). https://www.agi-glaspac.com/wp-content/uploads/2025/07/AGI-plastek-catalogue-V7.pdf | Viewed original seat-and-lid illustrations/material table and adjacent cistern/valve counterexamples. No catalogue dimensions, mass, performance, yield or factory factors transferred. |
| `ilcd-attributional-allocation-2010` | official_guidance | European Commission JRC. ILCD Handbook: General guide for LCA, Detailed guidance, first edition March2010, §§7.9.2–7.9.3, PDF pp275–292. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional process multifunctionality only: subdivision/virtual subdivision; exchange-specific determining physical causality; residual common-process exit-state economic value. Multifunctional-product QFD and consequential substitution are separate contexts. |
