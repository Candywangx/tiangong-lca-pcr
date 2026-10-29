---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.plywood-consisting-solely-of-sheets-with-both-outer-plies-of-coniferous-wood
language: en-US
status: candidate
content_maturity: draft_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Plywood consisting solely of sheets, with both outer plies of coniferous wood

## 1. Scope and Applicability

This PCR has one product identity: plywood made solely of veneer sheets, with **both face and back plies coniferous**. Check each outer ply independently against botanical identification and traceable layup records. A coniferous face alone does not qualify a hardwood back. Inner-ply composition is a required descriptor; it cannot change the two-outer-ply test. The represented technology is narrower: an integrated mill converting untreated coniferous logs into flat all-coniferous crossed-veneer panels with purchased ready-to-spread aqueous resole phenol-formaldehyde (PF) glue. It includes log conditioning, rotary peeling, clipping, indirect steam-heated drying/redrying, full-sheet layup, hot pressing/cure, cooling, trimming, grade-required sanding, first quality release and shipment packaging. On-site pipeline-natural-gas boilers supply steam; electric equipment handles logs/panels. No species share, thickness, ply count, glue rate, press schedule or yield is a default. [cpc3-31411; epa-plywood-2002; corrim-western-2025]

This representation requires coniferous veneers in the core as well as both outer plies, uncoated and chemically untreated panels, no separately added glue ingredients, a gas-only thermal system, purchased treated water, water-only glue-line cleanup, and one characterized combined effluent transferred to external treatment. The CPC identity is not restricted to a particular gas boiler or grade, but this authored method does not claim coverage of every technology within the leaf. A mixed hardwood core, purchased-veneer assembly, different adhesive or heat system needs an explicitly assessed extension **within this same CPC identity**, with its own inventory and evidence; it is not automatically covered by process resemblance.

Exclude plywood with either outer ply non-coniferous, bamboo panels, blockboard/solid-strip/cellular or particleboard/fibreboard cores, LVL or other parallel-grain laminated timber, glulam, film-faced/coated/preservative or fire-retardant treated panels, curved finished components, and wet uncured or unaccepted panels as the reference product. The CPC explanatory paragraph contains broader core-language examples; here the subclass title “solely of sheets” and the declared all-veneer representative construction control applicability. The classification note supplies identity context, not quantitative evidence or approval for excluded cores. [cpc3-31411]

Preserve face/back species, pitch or extractive-related surface condition, knife damage, veneer thickness, moisture gradients and redrying history. Establish actual veneer moisture and PF spreading/assembly/cure conditions from the supplier specification and plant trials for the declared layup. Record bond-strength/durability, delamination/wood-failure and structural grade tests under the named applicable acceptance method. A mill's grade certification or a PF label alone does not establish that every lot passed. No universal cure temperature/time, moisture or density is imposed. USDA moisture guidance is used only with its matrix and volatile-extractive limitations; cured resin-containing material needs a suitable validated laboratory method. [wood-handbook-2021]

The Western CORRIM study is a 2022/2023 US regional survey edited in 2025. It includes purchased veneers, wood-fuel heat and other outputs outside this representative route. Its physical ledger and ingredient/stage questions are useful, but its species mix, nominal area-to-volume conversion, density, allocation shares, energy, emission factors and lifecycle scenarios are not plant defaults. EPA process guidance is historical process evidence; the gas-combustion source identifies source-testing needs. Neither source demonstrates this mill's quantitative performance or current regulatory compliance. [corrim-western-2025; epa-plywood-2002; epa-gas-2026]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.plywood-consisting-solely-of-sheets-with-both-outer-plies-of-coniferous-wood |
| classification_refs | CPC 3.0 31411; narrower; current accepted association and decision: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADR; no whole-leaf or scientific/translation approval implied |
| covered_products | Solely veneer-sheet plywood whose face and back are independently coniferous; represented here by untreated uncoated all-coniferous PF panels |
| excluded_products | Non-coniferous face or back; non-veneer cores; bamboo; parallel-grain laminates; coated/treated panels; uncured or rejected reference output; unassessed alternative technology |
| representative_product | Flat crossed full-sheet all-coniferous plywood, purchased aqueous resole PF formulated glue, actual declared structural/bond grade and measured release-state geometry |
| production_route | Untreated logs → debark/condition → rotary peel/clip → indirect steam dry/redry → PF spread/full-sheet layup → hot press/cure/cool → trim/grade finish → first release → pack; gas-only boiler and electric handling |
| market_state | Cured, cooled, trimmed, grade-finished and quality-released factory panel; packing is accompanying material and is excluded from net panel volume |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply plywood panel material of the declared structural and bond-durability grade |
| How much | 1 m3 net geometric panel volume at first quality release, in the measured release moisture and temperature state |
| How well | Both outer plies coniferous, representative inner plies also coniferous; crossed all-veneer construction; aqueous resole PF; no coating/chemical treatment; passed the actual declared grade tests after cure/cooling/finishing |
| How long or cycle | One manufacture and first quality-release cycle; declared unit without an assumed service lifetime or cross-grade functional equivalence |
| reference_flow_link | finished_panel |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Plywood `8b239d58-5fc2-40a5-8003-33f4082bc995` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | Face species and coniferous proof; back species and coniferous proof; each inner-ply species/origin; ply count/grain/thickness and all-sheet core proof; harvest/supply chain; veneer moisture/surface/pitch/conditioning and redrying history; ready-to-spread PF glue formulation/solids/water/free monomers; spread/assembly/press/cure/cooling schedule; named structural/bond grade and actual acceptance tests; uncoated/untreated condition; actual net panel dimensions/hole convention and release moisture/temperature; paired net mass/density; lot first-release identifier and Q; period/site and opening/closing raw/WIP/rework/finished stocks; gas/indirect-steam/electric/water/effluent/control configuration; packaging ownership/returns; providers and allocation evidence |

Q is the sum of actual net material area × final measured thickness for each newly produced lot's **first** quality release during the coherent production cohort, in m3. Exclude through-holes/cutouts, removed test specimens, packing, stack air and rejected volume; do not subtract microscopic porosity. Retain paired net panel mass and a documented release-state moisture method. A later shipment, warehouse transfer, repacking or reinspection is not another release. Finished stock is reconciled separately; do not substitute shipments or a nominal thickness/area conversion for Q. All qualifiers must be recorded in dataset metadata or equivalent fields. Missing qualifiers leave the relevant applicability question incomplete.

Plywood `8b239d58-5fc2-40a5-8003-33f4082bc995` is a conditional whole-panel Volume/m3 locator: its Product-flow record positively describes crossed glued wood veneers, veneer gluing/pressing and an at-plant semi-finished building material. Softwood PF layup, hot cure and finished-board formation are supported by the process evidence. Its isolated CPC31450 bamboo classification conflicts with that physical description and remains unresolved source classification debt; neither the broad name nor absence of exclusion words proves applicability. Retain the defined all-coniferous layer construction, whole-panel acceptance and actual same-state net geometry; paired mass/moisture/density remains evidence, not a replacement denominator. Actual provider gate/stage, cured/cooled/finished grade, each layer's species, whole PF formulation/retained water, release moisture/temperature, hole convention, region/year and measurement compatibility require separate evidence. Unknown gates, bamboo/mixed-core providers, wet uncured intermediates, packing/stack volume and nominal-area/thickness substitutions are not approved by this locator. [epa-plywood-2002; corrim-western-2025]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_volume | reference product | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | cp_release measures Q at first quality release. Every inventory denominator and collection aggregation is per 1 m3 reference flow; preserve raw period units. |
| wood_water_basis | conifer_logs; bark_product; peeler_core; green_chips; dry_chips; sawdust | Mass | kg | cp_wood and cp_residues measure wet and oven-dry wood/bark separately; MC_db uses oven-dry mass as denominator. Do not treat resin or non-water volatiles as water. |
| energy_interface | electricity; natural_gas | Energy; Volume | MJ; m3 | cp_energy preserves electricity units and gas temperature/pressure/composition. 1 kWh = 3.6 MJ; use the actual provider gas-volume convention. Internal steam is measured by enthalpy difference and is not another external energy purchase. |
| physical_and_burden | all inventory rows | Row-specific property | row-specific unit | Preserve gross physical receipts, exports and stocks first. Determine the matching cohort and allocate attributable burdens separately; normalize each ledger once by Q after reconciliation. Q=0 forbids division and retains the failed/idle cohort for review. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated coniferous logs and actual externally supplied materials received at the integrated mill; include site boiler, utilities and controls |
| starting_condition_role | Foreground collection cutoff; upstream burdens are still required for cradle-to-gate coverage |
| product_classification_scope | Sole CPC 3.0:31411 identity; this method represents the all-coniferous full-sheet PF/indirect-steam route only |
| recursive_input_rule | External plywood or third-party rework is not an internal loop and is outside this representation pending separate incoming-state/upstream evidence. Internal veneer redrying, glue recovery and panel rework use matched transfers, not new purchases or repeated reference output. |
| upstream_dataset_requirement | Link each actual external material/provider and inbound transport once, including log forestry/harvest, glue formulation supply, electricity/gas/water, consumables, packing and external waste treatment; match gate, geography, time, state, quantity and actual route |
| disclosure | Distinguish factory activity evidence from complete upstream-linked datasets; disclose all missing links, cohort bridges, allocation, exclusions, effluent and controls |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_stages | manufacturing | Include conditioning/peeling/clipping, drying and redrying, glue spread/layup, cure/cooling, trim/grade finishing, testing/reject/rework, packing, gas boiler, water cleanup and actual emission controls. Site heat is fuel plus conversion/emissions once; internal steam transfers do not add a second provider. | epa-plywood-2002 |
| boundary_species | reference product | Face and back each require coniferous proof; representative core requires coniferous veneers. Different outer species classes, non-sheet cores and unsupported technologies cannot enter this output by a shared process label. | cpc3-31411 |
| boundary_cohort | manufacturing | Include all period startup, shutdown, idle, redrying, failed batches, cleanup and rework activity. Bridge opening/closing WIP and finished stocks to the first-release cohort with stage records; do not discard burdens or inflate Q with repeated throughput. | corrim-western-2025 |
| boundary_outlets | manufacturing | Distinguish boiler stack, indirect dryer/conditioning outlet, PF press/fugitives and controls; indirect steam contains no boiler combustion gas. Count a shared final stack once. Wastewater leaves for external treatment, with no invented on-site removal or direct-discharge elementary outputs. | epa-plywood-2002; epa-gas-2026 |
| boundary_extensions | dataset | Include upstream production and inbound transport for cradle-to-gate use. Downstream fabrication/installation/use/end-of-life, chemical treatment, wood combustion, direct-fired drying, purchased heat and on-site wastewater treatment need explicit extensions rather than hidden proxies. No stored-carbon credit or carbon-neutrality claim follows from this factory unit. | corrim-western-2025 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacturing | Integrated coniferous full-sheet PF plywood manufacture, utilities and packing | required | Declared representative technology only | foreground production | 1 m3 reference flow |

The external exchange unit is one integrated manufacturing process. Within it keep linked stage records: S1 log reception/conditioning/peeling/clipping → S2 drying/redrying/sorting → S3 glue spreading/full-sheet layup/press/cure → S4 cooling/trim/grade sanding/testing/first release → S5 finished stock/packing/shipping. U1 gas boiler supplies measured steam to S1–S3, with independently recorded supply/return masses and enthalpies, condensate returns and actual losses/storage changes; a common mass times enthalpy difference is valid only for a mass-matched same-boundary interface. Electric drives and dust controls have stage meters. Internal lots and transfers retain the same state/quantity at both ends. Surface repairs using existing veneer cutoffs/PF stay internal; an added jointing/patch adhesive needs its own external exchange.

Cards below are single physical exchange identities. Their collection protocols define future records, not observed factory values. Report each physical stream and its attributable burden separately. Conditional absence needs equipment/BOM/test evidence; missing observations are not zero. Screen actual boiler-treatment chemicals, grease, release agent, filters, cleaner, sanding and sharpening consumables and additional emitted species; add one specific card for every actual additional exchange. A shared collection protocol never authorizes a combined selected-flow label. [corrim-western-2025]

### Process: Integrated coniferous full-sheet PF plywood manufacture, utilities and packing (`manufacturing`)

#### Inputs

##### Product flows

###### Untreated coniferous veneer logs with bark (`conifer_logs`)

Record botanical species and origin of face, back and core lots, wet received mass and measured dry wood/bark fractions. Use actual log scaling; a merchantable log scale is not geometric veneer volume. No purchased veneer enters this integrated route.

- Selected flow: Untreated coniferous veneer logs with bark
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_wood; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wood`
- Sources: corrim-western-2025

###### Ready-to-spread aqueous resole phenol-formaldehyde plywood adhesive (`pf_glue`)

One externally purchased formulated glue, measured as delivered wet mass. Disclose its resin, extender, alkali, water and free monomers as constituent information, not extra purchased exchanges. No on-site resin synthesis or separate filler addition is represented; add actual separately purchased ingredients before extending this route.

- Selected flow: Ready-to-spread aqueous resole phenol-formaldehyde plywood adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_glue; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_glue`
- Sources: corrim-western-2025

###### Alternating current (`electricity`)

Retain the native CN grid-average customer-side 35–330 kV restriction. Use this identity only for a matching actual interface; otherwise resolve the actual supply identity. Meter log handling, peeling, fans, pumps, press, finishing, battery charging and dust controls, including attributable transformer/charging losses.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect amount per 1 m3 reference flow using cp_energy; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: corrim-western-2025

###### natural gas in the gaseous state (`natural_gas`)

Pipeline gas consumed by the on-site boiler and any declared gas-fired abatement burner. Native reference is Volume, not Mass: the two meanValue 1.0 entries are not gas density. Retain absolute temperature/pressure, dry/wet convention, composition, Z and supplier conversion to the actual background interface. Gas supply excludes this foreground combustion.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Collect amount per 1 m3 reference flow using cp_energy; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources: epa-gas-2026

###### Tap water (`tap_water`)

Meter purchased treated water for log conditioning, boiler makeup and water-only glue-line cleanup. Water within the purchased glue and logs is composition, not another tap-water purchase; internal condensate and recirculation cancel.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_water; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: corrim-western-2025

###### Mineral hydraulic oil for veneer lathe and hot press (`hydraulic_oil`)

Conditional actual mineral hydraulic oil replenishment, with grade, additives, stocks, returned oil and leaks recorded. Use this UUID only when the actual mineral-oil supplier matches its vacuum-distillation/hydrogenation/refining route; the broad native comment also permits synthetic base oil and does not establish a site's grade. Native reference is Mass/kg; its other Volume entry and two 1.0 values do not establish density. No universal kg per panel is prescribed.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_consumables; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: corrim-western-2025

###### Aluminium-oxide abrasive sanding belt on textile backing (`abrasive_belt`)

Conditional grade-required sanding. Record whole belt mass and service attribution; alumina grain and backing are constituent records, not additional whole-belt purchases. Identify actual abrasive chemistry rather than assuming every belt is alumina.

- Selected flow: Aluminium-oxide abrasive sanding belt on textile backing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_consumables; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: corrim-western-2025

###### Steel rotary veneer peeling knife (`veneer_knife`)

Record actual knife alloy, mass, installation, sharpening loss, reuse and replacement interval. Attribute only the period service consumed; a new whole knife and its steel content are not separate purchases.

- Selected flow: Steel rotary veneer peeling knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_consumables; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: corrim-western-2025

###### Polypropylene packaging strap (`pp_strap_in`)

Measure PP strapping receipts, supplier returns and opening/closing stocks separately from fitted shipment tare and scrap. Apply cp_pack intake classes to each actual component, including purchased components included in a whole-package supply price. The representative packaging uses PP straps and untreated solid-wood runners only; another packaging system needs additional atomic cards.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_pack; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: corrim-western-2025

###### Untreated solid-wood packaging runner (`runner_in`)

Record first external purchases P (including components paid for within a whole supply price), first external nonpurchase receipts N_ext (loan/rental, entrusted or accompanying supply), history-proven same-item external returns ER and returns outward EO separately by component, owner and original cohort. ER requires evidence of that item's earlier outward movement; an undocumented first receipt is not a return. Internally cut runners and internal issues/returns are matched transfers from their original ledgers, not external receipts or another purchase. Count gross physical movements and actual transport, then attribute production/repair/rental service over verified trips without an assumed lifetime; retain each exchange's original provider vector under cp_pack.

- Selected flow: Untreated solid-wood packaging runner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_pack; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: corrim-western-2025

#### Outputs

##### Product flows

###### All-veneer plywood with both outer plies of coniferous wood (`finished_panel`)

Exactly one final reference: cured, cooled, trimmed and grade-finished uncoated panel on first quality release. Face and back are independently verified coniferous; the representative core is also coniferous veneer. Measure actual net geometric volume, excluding packing, air gaps and removed test pieces. Release into finished-goods stock is included; later shipping is not another production output.

- Selected flow: Plywood `8b239d58-5fc2-40a5-8003-33f4082bc995`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: 1 m3
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: corrim-western-2025

###### Untreated coniferous bark co-product (`bark_product`)

Only bark with a documented product outlet. Preserve its whole wet/dry mass before allocation; bark sent for disposal belongs in bark_waste, never both destinations.

- Selected flow: Untreated coniferous bark co-product
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_residues; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: corrim-western-2025

###### Untreated coniferous rotary peeler core (`peeler_core`)

Exported residual solid core from the lathe, with actual diameter, species, moisture and buyer use. This is neither a virgin log nor a veneer sheet.

- Selected flow: Untreated coniferous rotary peeler core
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_residues; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: corrim-western-2025

###### Unglued green coniferous veneer chips (`green_chips`)

Green clipping chips sold before drying. Preserve wet mass, dry mass and volume/packing convention; do not merge with dry chips or infer a volume conversion from panel density.

- Selected flow: Unglued green coniferous veneer chips
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_residues; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: corrim-western-2025

###### Unglued dry coniferous veneer chips (`dry_chips`)

Dry veneer trim sold before PF spreading. Drying burdens follow the measured stage attribution; no shared default green/dry chip moisture.

- Selected flow: Unglued dry coniferous veneer chips
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_residues; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: corrim-western-2025

###### Unglued coniferous wood sawdust (`sawdust`)

Only clean unglued sawdust sold as a product. PF-bonded sanding dust is a separate waste. This route burns no on-site wood residue.

- Selected flow: Unglued coniferous wood sawdust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_residues; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: corrim-western-2025

###### Polypropylene packaging strap accompanying plywood (`pp_strap_out`)

Gross physical shipment tare, outside the reference panel volume/mass and outside co-product allocation. Match shipment lots to first-release cohorts and finished-goods stocks; the corresponding purchased supply is linked once at pp_strap_in.

- Selected flow: Polypropylene packaging strap accompanying plywood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_pack; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: corrim-western-2025

###### Untreated solid-wood packaging runner accompanying plywood (`runner_out`)

Gross physical runner sent with the bundle, with ownership and return obligation. Not a sold wood co-product or a second panel reference. Returned runners retain the same cohort; trip-based service attribution does not shrink gross tare.

- Selected flow: Untreated solid-wood packaging runner accompanying plywood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_pack; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: corrim-western-2025

##### Waste flows

###### Uncured PF-coated coniferous veneer layup waste (`uncured_layup_waste`)

Measure externally discarded PF-coated veneer or rejected unpressed layup as one actual composite stream, with wet wood, uncured glue and water fractions. Keep it distinct from cured trim, unused pure glue waste and internal recovered veneer/glue. A failure before cure does not become a cured-panel reject or enter Q.

- Selected flow: Uncured PF-coated coniferous veneer layup waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_residues; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: corrim-western-2025

###### Cured PF-bonded plywood trimming waste (`bonded_trim`)

Measure bonded trim sent to external treatment, including its wood/resin/water composition and destination. Do not label it clean untreated fuel.

- Selected flow: Cured PF-bonded plywood trimming waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_residues; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: corrim-western-2025

###### Captured PF-bonded plywood sanding dust (`bonded_dust`)

Collected solid sanding dust sent to treatment. It is not emitted PM and is not clean sawdust; baghouse capture and outlet emissions are separate.

- Selected flow: Captured PF-bonded plywood sanding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_residues; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: corrim-western-2025

###### Rejected cured PF-bonded plywood panel (`reject_panel`)

Whole rejected panel leaving for waste treatment, excluding rejected material still in internal rework or held in stock. Rework accepted later gets its first release once; no fictional negative reference production.

- Selected flow: Rejected cured PF-bonded plywood panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_residues; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: corrim-western-2025

###### Untreated coniferous bark waste (`bark_waste`)

Only bark documented as waste, with actual receiver/treatment. Do not allocate a product credit solely because the receiver recovers energy.

- Selected flow: Untreated coniferous bark waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_residues; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`
- Sources: corrim-western-2025

###### Uncured aqueous PF plywood adhesive waste (`glue_waste`)

Separate unused or expired glue sludge sent to treatment from glue retained in boards and from dilute cleanup wastewater. Record solids, water and hazardous classification; internal recovered glue is a loop.

- Selected flow: Uncured aqueous PF plywood adhesive waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_glue; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_glue`
- Sources: corrim-western-2025

###### Plywood conditioning and water-cleanup wastewater to external treatment (`wastewater`)

Measure each actual transferred wastewater stream and its composition/destination. Use a separate card if conditioning blowdown and glue cleanup go to different treatment routes. Dissolved formaldehyde/phenol are constituent loads, not direct air/water emissions at this gate.

- Selected flow: Plywood conditioning and water-cleanup wastewater to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_water; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: corrim-western-2025

###### Used mineral hydraulic oil (`used_oil`)

Recovered oil to the external handler, with contamination, stock and leakage reconciliation. Oil remaining in equipment is closing stock, not discarded oil.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_consumables; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: corrim-western-2025

###### Spent aluminium-oxide textile sanding belt (`spent_belt`)

Whole spent belt with captured adhered dust distinguished from separately collected bonded_dust; determine actual service period and external fate.

- Selected flow: Spent aluminium-oxide textile sanding belt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_consumables; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: corrim-western-2025

###### Spent steel veneer peeling knife (`spent_knife`)

Actual end-of-service knife transferred to recovery, excluding knives returned from sharpening and still in use. Separately characterize sharpening swarf if present.

- Selected flow: Spent steel veneer peeling knife
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_consumables; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_consumables`
- Sources: corrim-western-2025

###### Waste polypropylene packaging strap (`pp_scrap`)

Only measured PP strap scrap and non-reusable returned PP, with external route; exclude unused material returned to supplier as product.

- Selected flow: Waste polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_pack; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: corrim-western-2025

###### Waste untreated solid-wood packaging runner (`runner_waste`)

Actual retired/broken runner leaving for treatment; record moisture, ownership and prior returns. Never count this same piece as both stock and waste.

- Selected flow: Waste untreated solid-wood packaging runner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_pack; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pack`
- Sources: corrim-western-2025

##### Elementary flows

###### formaldehyde (`formaldehyde`)

CAS 50-00-0 emitted to outdoor air, unspecified; determine conditioning/dryer, press and control outlet contributions separately from the free monomer contained in incoming glue.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: corrim-western-2025

###### methanol (`methanol`)

CAS 67-56-1 outdoor-air emission; measure veneer drying and pressing outlets under actual species/moisture and control conditions.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: corrim-western-2025

###### phenol (`phenol`)

CAS 108-95-2 outdoor-air emission associated with the actual PF process; not the phenol content of purchased glue or wastewater.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: corrim-western-2025

###### Acetaldehyde emitted to air (`acetaldehyde`)

CAS 75-07-0, one chemical released at actual dryer/press/abatement outlets. Keep measurement and identity unresolved where absent; do not replace it with total VOC.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: corrim-western-2025

###### Propanal emitted to air (`propanal`)

CAS 123-38-6, actual outdoor-air species; preserve the report detection limit and operating hours rather than infer a fixed fraction of aldehydes.

- Selected flow: propanal `fe0acd60-3ddc-11dd-9f05-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: corrim-western-2025

###### Acrolein emitted to air (`acrolein`)

CAS 107-02-8, actual outdoor-air species. The representative route still requires a species screen beyond the named cards; add any other material detected species before claiming completeness.

- Selected flow: acrolein `08a91e70-3ddc-11dd-91a4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: corrim-western-2025

###### carbon dioxide (fossil) (`co2_fossil`)

CAS 124-38-9, outdoor-air fossil CO2 from gas combustion and any evidenced fossil-carbon destruction in controls. Record actual carbon inputs and other carbon outlets; do not assume complete oxidation.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-2026

###### Biogenic carbon dioxide emitted to air (`co2_bio`)

Conditional oxidation of wood-derived VOC in controls or other measured biogenic release; the gas-only boiler does not create wood-combustion CO2. Preserve source-specific biogenic carbon rather than omit it or invent biomass uptake within the factory.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: corrim-western-2025

###### methane (fossil) (`ch4_fossil`)

CAS 74-82-8 outdoor-air fossil methane: stack incomplete combustion plus measured on-site gas leakage, without duplicating upstream leakage. Native synonym noise is not authority for carbon black or formaldehyde substitution.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-2026

###### carbon monoxide (fossil) (`co_fossil`)

CAS 630-08-0 emitted to outdoor air, with fossil attribution from actual fuel/controls carbon. Unknown biogenic CO cannot be hidden in this fossil row; add a separate atomic identity if present.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-2026

###### nitrogen monoxide (`no`)

CAS 10102-43-9 outdoor-air NO. NOx reported as NO2-equivalent cannot be copied as an NO mass; require actual speciation and molecular-mass conversion.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-2026

###### nitrogen dioxide (`no2`)

CAS 10102-44-0 outdoor-air NO2, separately speciated from NO; retain burner load, oxygen, controls and startup evidence.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-2026

###### nitrous oxide (`n2o`)

CAS 10024-97-2 outdoor-air N2O, including startup/shutdown test coverage; do not infer zero from a missing survey field.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-2026

###### sulfur dioxide (`so2`)

CAS 7446-09-5 outdoor-air SO2 from actual sulfur-bearing gas/odorant; retain sulfur content and measured test basis, with no assumed gas sulfur concentration.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: epa-gas-2026

###### particles (PM2.5) (`pm25`)

Outdoor-air fine particles after controls; retain filterable/condensable method and outlet identity. Captured baghouse solids are waste, not emissions.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: corrim-western-2025

###### particles (PM2.5 - PM10) (`pmcoarse`)

Outdoor-air particles in the disjoint PM2.5–10 interval. Derive a difference only from compatible cumulative PM10 and PM2.5 tests; unresolved size evidence remains incomplete.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: corrim-western-2025

###### particles (> PM10) (`pmover10`)

Outdoor-air particles above PM10, not total PM added on top of nested intervals. Include measured debarking/cutting fugitive sources and avoid duplicate total/size entries.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_air; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_air`
- Sources: corrim-western-2025

###### water vapour (`water_vapour`)

CAS 7732-18-5 net release to outdoor air. Reconcile veneer/conditioning evaporation, boiler losses, glue water, cure/combustion-generated water and inlet-air humidity. Total mass loss is not water; unknown reaction/air terms cannot be invented to close the balance.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Collect amount per 1 m3 reference flow using cp_water; retain gross physical amount and the separately attributable burden.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 m3 reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources: corrim-western-2025

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | manufacturing | First subdivide by stage, lot and exclusive service. PF supply/pressing, finished-panel trim/sanding/testing, rework and packing belong to the relevant panel cohort; do not assign these burdens to green bark or peeler cores. Separate sold green/dry residues and their actual stage histories. | epa-plywood-2002; corrim-western-2025 |
| allocation_cause | shared stages | For an inseparable shared operation, document a physical driver with evidence that it explains the burden: measured delivered heat, actual machine service or measured dry-wood throughput where applicable. Calculate shares over real participating products once; waste, repeated redrying/rework and repeated shipment are not new allocation products. No default dry-mass, economic share or avoided-product credit. Unsupported causation remains specifically pending. | corrim-western-2025 |
| allocation_two_ledgers | all inventory rows | Keep unallocated gross material/water/carbon and energy balances intact. Apply shares only to the corresponding burden ledger, preserve direct burdens, and normalize both ledgers once after cohort reconciliation. Never multiply physical co-product, waste, packaging tare or elementary mass-balance entries by an allocation share to obtain apparent closure. | corrim-western-2025 |
| allocation_pack_return | pp_strap_in; runner_in; pp_strap_out; runner_out | Packing is attributable to plywood, not wood co-products. Record gross dispatch/return movements and ownership separately from supply/repair services. Reusable-runner service uses verified completed trips and losses; no default cycle count, new runner each trip or second upstream production for a returned runner. | corrim-western-2025 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacturing | reference panel; cohort and stock bridge | quality/geometry/lot ledger | face/back botanical species; inner species/origin; ply construction; PF formulation and cure record; structural/bond method and result; unique lot and first-release time; actual count/net area/thickness/holes; paired net mass; moisture/temperature; Q; removed test pieces; raw/WIP/rework/finished opening/closing stocks; shipments/returns | Verify each outer ply independently; measure cooled finished panel geometry with calibrated instruments and same-state net weighing. Record first successful release once per lot and all failed attempts. Trace opening WIP into release and closing WIP forward, with actual stage activity carried across periods; trace released stock into later packing/shipment without another output. Mark unsupported activity bridges pending. | m3; kg; dimensions; moisture fraction | every lot/first release and period stock count | continuous declared production period plus traceable earlier/later cohort activity | same mill/layup/grade/formulation; no incompatible pooling | per 1 m3 reference flow | species/layup certificates; grade tests; calibration; lot genealogy; stock counts; release/dispatch reconciliation |
| cp_wood | manufacturing | coniferous logs and veneer stages | receiving/scale/moisture/stage records | botanical species; harvest/supply location; bark inclusion; receipts/returns; log scale convention; wet/dry mass; green/dry veneer thickness; pitch/surface defects; conditioning; dryer/redryer inlet/outlet moisture; opening/closing logs/veneer/WIP | Weigh and sample each species/lot. For unglued veneer take representative within-sheet positions, immediately weigh and oven-dry to constant mass under the validated method; calibrate online readings to species/temperature and note volatile-extractive bias. Track good veneer, clip losses, redrying and PF entry by stage; keep merchantable log scales separate from measured geometry. | kg; m3; percent dry basis | every incoming lot and drying/peeling campaign | same cp_release cohort with period bridges | same actual conifer species and integrated route | per 1 m3 reference flow | weighbridge/calibration; moisture samples; dryer sheets; measured species/stock/transfer reconciliation |
| cp_glue | manufacturing | whole PF glue and uncured glue waste | supplier/BOM/batch/press records | ready-glue supplier/batch; composition including fillers/alkali/water/free phenol/formaldehyde; delivered/dosed/returned/recovered mass; solids fraction; open/close glue stocks; spread area; assembly delay; temperature/pressure/time/cure and bond results; expired glue/cleanup | Measure purchased whole formulated glue once. Reconcile spread mass with actual glue lines and veneer area, returned unused glue, internal recovery, remaining stock, uncured waste, effluent, cured retention and emissions. Obtain supplier chemistry for cure reaction/volatile losses; constituent masses are subledgers, not added supply exchanges. | kg; fraction; m2; time; temperature; pressure | every glue/layup batch and formulation change | same cp_release cohort including startup/failed press/rework and cleanup | actual ready-to-spread aqueous resole PF and coniferous layup | per 1 m3 reference flow | supplier formulation/solids tests; tank/scale calibration; spread and press logs; bond acceptance; waste manifests |
| cp_energy | manufacturing | electricity; gas; internal steam | meter/fuel/thermal balance | site/meter/stage; opening/closing electricity; voltage/provider; charging and transformer losses; pipeline gas volume/absolute T/P/dry-wet/composition/Z/heating value and HHV/LHV; gas supplier interface; each steam supply and condensate return mass/T/P/specific enthalpy; common boundary/period and enthalpy datum; makeup/leak/blowdown masses and enthalpies; storage-energy change; network/boiler heat losses; run/idle/start/stop; abatement gas | Read dedicated stage electricity/gas meters and reconcile bills. Independently meter steam supply and return mass/enthalpy legs at conditioning, dryer/redryer and press on the same boundary/period and enthalpy datum. Use a common mass times enthalpy difference only after mass matching is verified; otherwise retain distinct legs and actual makeup, leak, blowdown, storage and heat-loss terms in the balance. Reconcile boiler fuel input, network balance and actual delivered stage heat before using heat as an allocation driver; no assumed efficiency. Indirect dryer has no boiler flue-gas inlet. Match gas volume to provider conditions; supply and foreground combustion are counted once. | kWh; MJ; m3; kg; T/P | continuous meters, campaign reconciliation | same cp_release cohort including failed/idle/start/stop and actual stock bridges | same boiler and utility network; electric handling | per 1 m3 reference flow | calibrated meters; supplier gas specification/conversion; steam/condensate records; stage heat balance; operating logs |
| cp_water | manufacturing | water supply; combined effluent; water vapour | meters/sampling/water balance | external tap receipts; wood/glue water; boiler makeup/blowdown; condensate/recirculation; cleanup; moisture retained in panels/residues/stocks; effluent mass/solids/phenol/formaldehyde/COD; actual receiver; evaporation; inlet-air humidity; reaction water | Meter added water and actual combined external effluent; sample composition and use measured density for volume-to-mass conversion. Keep whole wet effluent as one external waste and constituents as subledgers. Measure net evaporation with inlet/exhaust humidity and actual cure/combustion chemistry; unexplained mass loss is not water. Separate treatment routes if the actual plant has separate exports. | kg; m3; concentration; fraction | continuously where metered; each transfer and representative sample | same cp_release cohort including cleanup/boiler startup and stock bridges | same water network; external treatment; no direct abstraction/discharge | per 1 m3 reference flow | meter/lab calibration; water sampling; measured density; treatment receipt; water-balance residual and uncertainty |
| cp_consumables | manufacturing | each knife, belt, oil and spent stream | maintenance/issues/service ledger | precise material/grade/alloy; whole item mass; receipts/returns; installed/removed times; stock; sharpening/reuse; period service; oil replenishment/leak/recovery; belt dust; waste destination; other actual equipment consumables | Weigh whole actual items and reconcile purchases, installation, remaining service and waste. Attribute consumed knife/belt service with recorded machine hours or throughput; retain gross physical retirement separately. Screen grease, release agent, boiler chemicals, filters and sharpening swarf; add separate actual exchanges where present, never a generic consumable total or assumed default life. | kg; service hours; throughput | every issue/maintenance/retirement and stock count | same cp_release cohort and actual service history | machines and controls in declared route | per 1 m3 reference flow | supplier specs; inventory/service logs; maintenance work orders; waste receipts; uncertainty on service attribution |
| cp_pack | manufacturing | PP strap and wood runner; gross returns/scrap | receipt/ownership/dispatch BOM | material/species/moisture; component/item and event IDs; supplier and original per-exchange provider vector; P purchase including whole-price components; N_ext first nonpurchase loan/rental/entrusted/accompanying receipt; ER same-item return with prior outward evidence; EO outward return; date/leg/receipt and gross mass; original owner/custodian/cohort; mutually exclusive raw/WIP/FG packing stocks at opening/closing; fitted dispatch tare; waste; actual transport legs; measured trips/repair/loss; linked first-release lot and shipment | Weigh each component and retain gross P, N_ext, ER, dispatch, EO and waste legs without netting; ER requires the same item's earlier outward record. Reconcile opening plus external intake plus paired internal_in against closing plus dispatch/EO/waste plus paired internal_out; assign each item to one raw/WIP/FG stock only, with packed tare separate from panel net volume. Internal transfers cancel on consolidation and inherit original owner/cohort and each exchange's provider vector. Preserve actual transport for every leg. Link whole-package supply or its covered component providers once, not both; N_ext needs actual supply/service coverage, never assumed zero or a fresh manufacture merely on return. Match actual packing service to its original first-release cohort, including earlier/later dates and old FG; incremental repacking/return service does not automatically divide by new Q. Missing future packing of released stock remains a disclosed completion gap, not zero or a second Q. | kg; trips; m3 cohort linkage | every packing/dispatch/return and stock count | matched cp_release cohort; retain non-cohort dispatch separately | same mill packing/ownership boundary | per 1 m3 reference flow | supplier/BOM/ownership records; tare weighing; trip/return evidence; finished/packing stock reconciliation |
| cp_residues | manufacturing | each product residue, reject and waste | scale/composition/destination ledger | source stage/lot; green/dry; unglued/PF-bonded; wet/dry mass; water/resin/carbon; test specimens; coproduct sale/waste fate; internal reuse; opening/closing residues/rework | Weigh each stream before allocation and reconcile generation, internal reuse, exports and closing stock. Separate green chips, dry chips, unglued sawdust, cured trim, sanding dust, rejected panels and bark sale/waste by actual fate; no on-site wood combustion in this route. Samples removed from Q retain their material fate. | kg; composition fraction; volume where actually measured | every transfer and representative composition sample | same cp_release cohort plus actual stock bridges | same stages and documented external receiver | per 1 m3 reference flow | calibrated scales; composition tests; sales/waste receipts; matched internal transfer ledger |
| cp_air | manufacturing | each individual elementary air output | source/outlet/fugitive tests | source/control/outlet ID; species and CAS; carbon origin; gas flow and concentration; standard T/P and dry/wet basis; O2 correction; operating/start/stop hours; particle sizes/filterable/condensable method; detection limit; controls and bypass | Test relevant conditioning/dryer, press, boiler, final control outlet and fugitives under representative species/recipe/load. Multiply compatible species mass concentration, gas flow and hours; retain raw tests and unit conversions. Shared stack and pre/post-control measurements count once. Check total VOC/NOx/PM only as reconciliation; unknown species/size/carbon fractions remain gaps. Survey gas leaks and actual additional organic species. | kg; concentration; gas flow; hours | representative campaign and every species/recipe/equipment/control change | same cp_release cohort including idle/startup/shutdown and failures | actual final air outlets and fugitives; outdoor air unspecified identities only | per 1 m3 reference flow | accredited/raw test reports; calibrations; hours; method and detection limits; speciation/size/carbon evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| release_volume | finished_panel | Q = sum(net material area * final measured thickness) over unique newly first-released lots in the declared cohort. Deduct through-holes/removed specimens; exclude packing, rejects, stack air and repeated reinspection/shipment. Paired release-state density = net panel mass / measured volume; no regional density or nominal-thickness conversion. | cp_release; net area; thickness; first-release identifiers; paired net mass | Q in m3; paired release-state density | wood-handbook-2021; corrim-western-2025 |
| cohort_bridge | all inventory rows | Retain raw period receipts/returns/exports and opening/closing raw, WIP, rework, residue, packing and finished stocks. Use stage/lot genealogy to add actual pre-period activity belonging to the release cohort and remove post-period WIP activity belonging to later cohorts; match actual later packing to already released lots without new Q. Do not apply both a stock-adjusted consumption and the same stock change again. Unsupported bridges, future packing and Q=0 cohorts remain explicit incomplete records; no invented equivalent-output or smoothing factor. | cp_release; all row protocols; stage activity; stock and genealogy records | reconciled gross physical ledger; matched cohort activity; specific pending bridges | corrim-western-2025 |
| normalize_once | all inventory rows | For Q>0 only, physical intensity_i = matched gross physical amount_i / Q; burden intensity_i = attributable cohort burden_i / Q. Establish gross physical records, measured cohort bridges, direct assignment and any evidenced allocation before this single division; finished_panel is 1 m3. Q is first release, never a sum of passes, shipping and rework. | Q; cp_release; cohort_bridge; allocation_share; actual row amount | physical intensity_i; burden intensity_i; completion flags | corrim-western-2025 |
| wood_moisture | conifer_logs; bark_product; peeler_core; green_chips; dry_chips; sawdust | MC_db = 100 * (wet mass - oven-dry mass) / oven-dry mass; dry mass = wet mass / (1 + MC_db / 100). Apply only to measured unglued wood/bark samples. For bonded panels/residues separately determine resin and volatile bias with the validated matrix-specific method. | cp_wood; cp_residues; measured wet/dry mass | dry wood/bark mass; water content; uncertainty | wood-handbook-2021 |
| glue_components | pf_glue; glue_waste | Delivered component mass_j = delivered whole-glue mass * measured/supplier component fraction_j. Reconcile actual dose/recovery/stock, cure formation/consumption, retained resin, effluent and emissions. Component supply is not added again when whole formulated glue provider is used; provider coverage must match that formulation. | cp_glue; cp_water; supplier formulation; actual cure/loss evidence | component and retained-solids/water subledgers; provider match | corrim-western-2025 |
| heat_balance | natural_gas; electricity | Metered electricity MJ = kWh * 3.6. Actual gas energy = matched volume * measured heating value on the same T/P/dry-wet and HHV/LHV basis. Only for measured mass-matched supply/return on the same boundary/period and enthalpy datum, internal net steam heat = sum(m * (h_s - h_r)). Otherwise keep sum(m_s * h_s) and sum(m_r * h_r) as independent supply/return legs, with actual other inlet/outlet enthalpy legs (including makeup, leaks and blowdown), storage-energy change and heat losses reconciled at that boundary before identifying delivered stage heat or an allocation driver. Network losses are not silently useful stage heat; do not invent efficiency or another purchased heat input. | cp_energy; matched meter/provider conditions | external carrier inputs and internal stage heat balance | epa-plywood-2002; epa-gas-2026 |
| allocation_share | shared stages | After allocation_cause is evidenced, share_j = driver_j / sum(driver_k) for actual participating products and burden_j = direct_j + shared_burden * share_j. Preserve full physical outputs; shares sum to one for that shared burden only. Do not apply a whole-plant share to glue, panel-only finishing or packing. | cp_energy; cp_residues; cp_release; evidenced driver | separately allocated burden ledger | corrim-western-2025 |
| physical_closure | manufacturing | For each conserved element or explicitly defined material/species ledger in common units, stage s obeys O_s + R_s + T_in_s + F_s = C_s + X_s + T_out_s + D_s + epsilon_s. O/C are opening/closing stocks; R/X are actual external receipts/exports; T_in/T_out are same-state internal transfers matched at both ends. F/D are evidenced chemical species formation/consumption only, never receipts or transfers; for conserved elements F=D=0. The consolidated whole-factory equation is sum(O_s) + sum(R_s) + sum(F_s) = sum(C_s) + sum(X_s) + sum(D_s) + sum(epsilon_s), because sum(T_in_s)=sum(T_out_s). Include all raw, WIP, rework, residue, packing and finished stocks. First release into finished stock is an internal transfer: Q is not added to external shipment X again. Keep wood/PF/water and fossil/biogenic carbon subledgers; reaction species formation/consumption must be paired by actual chemistry and conserve elements. Include actual inlet-air humidity and combustion oxygen where required; unknown terms remain unknown. Physical V, attributable burden A and unchanged provider vectors remain separate; no allocation-scaled closure or balancing emission. | all row protocols; raw period stocks and exchanges; actual chemical composition | gross stage and consolidated balance residuals and uncertainty | wood-handbook-2021; corrim-western-2025 |
| air_species | all elementary output rows | Species mass = sum(compatible mass concentration * gas volume flow * operating time) with explicit unit conversions, plus independently supported fugitives. PM2.5–10 = cumulative PM10 minus PM2.5 and PM>10 = total minus PM10 only for same method/outlet/period and nonnegative compatible differences; retain condensables without duplicate totals. NOx-as-NO2 requires actual NO/NO2 speciation and molecular-mass conversion. | cp_air; actual raw tests; carbon/source partition | individual species and disjoint particle masses; unresolved tests | epa-plywood-2002; epa-gas-2026 |
| packaging_ownership | pp_strap_in; runner_in; pp_strap_out; runner_out; pp_scrap; runner_waste | By component, original owner and cohort, distinguish P first purchase (whole supply price including components remains P), N_ext first nonpurchase external receipt, ER history-proven same-item return and EO return outward. Keep gross receipts, dispatch, recovery, waste and actual transport; no net-return substitution. Opening + P + N_ext + ER + internal_in = closing + dispatch + EO + waste + internal_out + residual in compatible physical units; raw/WIP/FG stocks are mutually exclusive and paired internal legs cancel. Preserve each exchange's original provider vector through all movements. Link a whole-package provider or covered component providers once, with actual supply/repair/rental coverage and losses, verified trips and no default lifetime; ER is not new production. Keep physical V separate from attributable A; match service to its original first-release product cohort, including old FG/returns, without creating Q or automatically assigning incremental service to new Q. Missing history, provider or cohort evidence remains specifically pending. | cp_pack; ownership; measured trips; matched cohort | gross packaging balance; separate once-linked supply/service burden | corrim-western-2025 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| outer_ply_identity | finished_panel | Independently prove both coniferous outer plies and full-sheet core. A trade name, one softwood face or an ambiguous flow record cannot establish this. | cp_release species/layup records; cpc3-31411 |
| grade_and_process | cp_glue; cp_release | Retain actual species/veneer-moisture/PF/cure/grade tests. Missing acceptance is neither a successful release nor a licence to alter the product boundary. | batch/bond/structural tests; supplier glue specification |
| common_cohort | all inventory rows | Capture failed/idle/cleanup/rework activity, opening/closing WIP and finished/packing stocks. Unknown is not zero; Q=0 and unsupported timing bridges remain explicit. | cp_release and all row protocols; reconciled genealogy |
| identity_and_provider | all inventory rows | Check flow type, species/form/phase/route/CAS/medium, native reference property→unit group→unit and provider coverage. Blank UUIDs are specific identity gaps; a core reference mismatch blocks that reference assignment, while an auxiliary gap does not invalidate every other verified row. | original native records; provider interface and composition; manifest review metadata |
| source_limits | dataset | No regional density, glue recipe, moisture target, yield, energy, emission factor or allocation share is transferred. Technical literature informs questions; actual foreground quantity requires records or an explicitly bounded evidenced calculation. | cited source pages and row protocols |
| bilingual_fidelity | all inventory rows | Preserve row/rule/protocol/source IDs and complete amount objects; official Chinese names follow verified UUIDs. Scientific and translation review remain independent tasks. | English/Chinese field audit; generated projection; original native names |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_outer_ply | reference product | Verify face and back separately as coniferous and all layers as sheets; confirm the represented all-coniferous/PF/full-sheet/gas-indirect-steam configuration. Reject a non-coniferous outer ply or another core and mark an unassessed route inapplicable/incomplete. | cpc3-31411 |
| validate_release | finished_panel | Verify cured/cooled/trimmed/grade-finished test acceptance, unique first-release lot, actual net geometry and paired state. Exactly one finished_panel reference output. No shipment/reinspection/rework duplication; missing grade proof does not enter Q. | wood-handbook-2021; corrim-western-2025 |
| validate_cohort | all inventory rows | Require the same Q denominator, complete raw/WIP/rework/reject/finished/pack stock bridges, failed/idle/start/stop and cleanup activity. Reconcile upstream activity and later packing by lot; Q=0 means no normalized result. Unsupported bridges must be disclosed, not inferred. | corrim-western-2025 |
| validate_no_double_count | manufacturing | Check one actual formulated-glue supply, single external electricity/gas/water/consumable/packing providers, internal heat/loop cancellation and external treatment once. Constituents, whole items, service returns and repeated stage throughput cannot create extra supplies or reference output. | corrim-western-2025 |
| validate_balance_allocation | manufacturing | Check full physical wood/water/PF/carbon/packing ledgers and real residuals before a separate burden allocation. Confirm stage causation, participating products, direct burdens and one final normalization. No share-scaled physical closure or unsupported avoided-product credit. | corrim-western-2025; wood-handbook-2021 |
| validate_air_water | all elementary output rows | Verify final outlet/species/CAS/medium/carbon origin, compatible concentration/flow/time and particle tests; avoid shared-stack and captured/emitted duplication. Retain actual biogenic emissions, gas leakage and water reaction/air terms; unknown speciation or effluent destination stays incomplete. | epa-plywood-2002; epa-gas-2026 |
| validate_reference_provider | finished_panel | Verify the selected Plywood locator's positive crossed wood-veneer/gluing/pressing/at-plant semi-finished identity and native Volume→unit group→m3 chain against the actual whole cured/cooled/finished panel. Retain its conflicting CPC31450 bamboo classification as unresolved source debt, not proof of the panel's species or a corrected classification. Independently verify every layer's species, whole-panel grade acceptance, PF formulation/retained water, first-release state and net geometry/hole convention; broad names or missing exclusion words alone are insufficient. Actual provider gate/stage, region/year and measurement compatibility require separate evidence; unknown gates, bamboo/mixed cores, uncured material and packing/stack or nominal volume cannot use this assignment. | cpc3-31411; epa-plywood-2002; corrim-western-2025 |
| validate_completeness | dataset | Report accepted input, checks performed/skipped, findings and completeness separately. Method/projection checks do not establish factory accuracy, scientific review, translation approval, mapping acceptance or complete upstream coverage. Preserve specific identity/provider/measurement gaps. | corrim-western-2025 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Matching coniferous-face-and-back all-sheet plywood manufacturing input after identity, plant records and upstream linkage are verified |
| allowed_use | Site/cohort/grade-specific represented PF all-coniferous route at 1 m3 first quality release, with separately matched actual packing service and disclosed stock/cohort bridges |
| excluded_use | Whole-leaf all-technology proxy; non-coniferous outer plies; alternative cores/adhesives/heat routes; uncured/rejected output; unsupported functional comparison, whole-life result, default carbon credit or regulatory compliance claim |
| required_metadata | All reference qualifiers; Q and first-release/geometry/grade evidence; native identity/property/unit and provider compatibility; stage activity/stock/WIP/rework and packing ownership; gross physical and allocated burden ledgers; tests, controls, waste destinations and upstream scope |
| required_quality_disclosure | Measured/calculated/missing quantities; specific identity/provider/route gaps; cohort and future-packing completion; uncertainty/residuals; source limitations; performed/skipped checks; independent scientific/translation status |
| update_trigger | Outer/inner species, veneer layup, glue formulation, curing/grade criteria, indirect-heat system, utility/provider, controls/effluent, service/packing ownership or production-cohort definition changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cpc3-31411 | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, explanatory notes, subclass 31411 and adjacent panel headings (2025 publication). | Product/classification boundary only; title/paragraph core-language tension explicitly disclosed; no quantitative or plant evidence. |
| epa-plywood-2002 | official_guidance | US EPA, AP-42 Section 10.5 Plywood Manufacturing (January 2002), pp. 10.5-1–10.5-4, Figure 10.5-1. https://www.epa.gov/sites/default/files/2020-10/documents/c10s05.pdf | Qualitative integrated veneer/PF process and indirect/direct dryer distinction; emission sources; no numerical conditions or factors adopted. |
| corrim-western-2025 | literature | M. Puettmann, Life Cycle Assessment of Softwood Plywood Production – Western Region, edited July 22, 2025, 2022/2023 facility survey; §§3.2.3–3.2.6 (PDF14–16), §§4.3–4.8 (PDF20–22), §5.2/Table6 (PDF23), §§5.4/Table8 (PDF24–25), Tables10–13 (PDF27–29). https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Western-Plywood-Report-Final-07222025.pdf | Regional primary survey informs inventory/stage, whole-glue composition, full physical versus allocated ledger and packing questions. Broader purchased-veneer/wood-fuel and other output scope is excluded; no numeric transfer or independent approval. |
| wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), Chapter 13 pp. 13-1–13-2 (PDF323–324), Chapter 4 p. 4-11 (PDF105). https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Measured wood moisture, representative veneer sampling, dry-basis formula, volatile-extractive/matrix cautions and density-state distinction; no product density or cure/recipe default. |
| epa-gas-2026 | official_guidance | US EPA, AP-42 Section 1.4 Natural Gas Combustion, header 10/26, pp. 1.4-1–1.4-4. https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | Gas-boiler source testing, actual combustion species/controls and operating-condition questions; no default gas composition, heating value, sulfur level, emission factor or control efficiency adopted. |
