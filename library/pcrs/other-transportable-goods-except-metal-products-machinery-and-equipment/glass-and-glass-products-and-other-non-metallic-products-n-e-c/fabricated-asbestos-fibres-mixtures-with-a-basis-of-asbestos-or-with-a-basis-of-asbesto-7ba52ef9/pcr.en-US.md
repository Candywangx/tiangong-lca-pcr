---
{
  "pcr_id": "pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.fabricated-asbestos-fibres-mixtures-with-a-basis-of-asbestos-or-with-a-basis-of-asbesto-7ba52ef9",
  "language": "en-US",
  "sync_with": "pcr.zh-CN.md",
  "status": "candidate",
  "content_maturity": "authored_methodology",
  "translation_status": "canonical"
}
---

# Calendered chrysotile–SBR compressed jointing sheet manufacture

Global applicability for all rule families: Attributional production of one unreinforced uncoated chrysotile–SBR compressed jointing sheet from purchased chrysotile fibre and a fully identified whole SBR binder preparation through actual mixing, calender sheet formation, actual solvent removal/curing where present, trimming, inspection/testing and unique first quality release. Include all actual receiving, storage, cleanup, abatement, failed/zero-output/start-stop/idle and rework loads. Subsequent real packaging/storage/handling/dispatch stays in a separate incremental original-cohort service account. This is LCA exchange, measurement and attribution methodology; it supplies no recipe proportions, operating settings, exposure limits or manufacturing/use instructions.

Exclude other asbestos minerals, loose mineral product, asbestos textile/rope, beater-add paper, cement/fibre-cement articles, non-asbestos modern fibre sheets, friction parts, metal-reinforced/jacketed gaskets, installation/use, contaminated used articles as substitute raw feed, and purchased finished-sheet repacking or downstream cut-gasket fabrication. A changed coating/reinforcement/material/route needs new applicability and complete exchanges.

## 1. Scope and Applicability

Attributional production of one unreinforced uncoated chrysotile–SBR compressed jointing sheet from purchased chrysotile fibre and a fully identified whole SBR binder preparation through actual mixing, calender sheet formation, actual solvent removal/curing where present, trimming, inspection/testing and unique first quality release. Include all actual receiving, storage, cleanup, abatement, failed/zero-output/start-stop/idle and rework loads. Subsequent real packaging/storage/handling/dispatch stays in a separate incremental original-cohort service account. This is LCA exchange, measurement and attribution methodology; it supplies no recipe proportions, operating settings, exposure limits or manufacturing/use instructions.

Sigma manufacturer full text establishes real chrysotile/SBR sheets and distinguishes neighbouring NBR/CSM/natural-rubber, wire-reinforced and non-asbestos products. The complete historical EPA report establishes the primary calendered-sheet route and distinguishes braided packing and secondary gasket cutting; it does not establish current supply or this manufacturer's exact process. This is a transparent technical synthesis, not one SKU/factory/current order. Publisher ratings, recipes, process settings, yields, density, emissions, service life and certification are not transferable defaults. [sigma-jointing-sheets; epa-asbestos-lifecycle-1982]

Exclude other asbestos minerals, loose mineral product, asbestos textile/rope, beater-add paper, cement/fibre-cement articles, non-asbestos modern fibre sheets, friction parts, metal-reinforced/jacketed gaskets, installation/use, contaminated used articles as substitute raw feed, and purchased finished-sheet repacking or downstream cut-gasket fabrication. A changed coating/reinforcement/material/route needs new applicability and complete exchanges.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.fabricated-asbestos-fibres-mixtures-with-a-basis-of-asbestos-or-with-a-basis-of-asbesto-7ba52ef9 |
| classification_refs | CPC 3.0 37920; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-37920.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Unreinforced uncoated calendered chrysotile–SBR compressed jointing sheets |
| excluded_products | Exclude other asbestos minerals, loose mineral product, asbestos textile/rope, beater-add paper, cement/fibre-cement articles, non-asbestos modern fibre sheets, friction parts, metal-reinforced/jacketed gaskets, installation/use, contaminated used articles as substitute raw feed, and purchased finished-sheet repacking or downstream cut-gasket fabrication. A changed coating/reinforcement/material/route needs new applicability and complete exchanges. |
| representative_product | One actual fully specified whole sheet for subsequent gasket fabrication |
| production_route | Whole fibre and SBR binder → actual mixing → calender sheet formation → actual solvent removal/curing → trim/test → unique first release; separate actual services |
| market_state | Bare whole manufactured sheet, uninstalled and not post-use contaminated; actual geography and historical/current supply state disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide manufactured jointing sheet for the declared subsequent gasket fabrication |
| How much | 1 m3 net geometric volume of unique newly first-released sheets |
| How well | Actual declared material/form/drawing and release tests apply; no default performance, equivalence or certification |
| How long or cycle | Manufacturing declared unit at first release; no assumed use life |
| reference_flow_link | finished_sheet |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Asbestos pad `d7e8af11-549b-47c1-9855-08ec00d4a079` |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | Actual site geography and observation period; Chrysotile mineral CAS12001-29-5 and fibre morphology; Whole SBR formulation supplier and delivered carrier/assay inclusions; Separate actual onsite-compounded purchases where applicable; Unreinforced uncoated sheet supply state and drawing revision; Actual mixing/calendering/solvent removal/curing route without prescribed settings; Independent net geometric volume and one-face area with measured thickness map; Independent net mass and conditioning/moisture scope; First-release event and actual test/acceptance/disposition records; Disjoint raw/WIP/FG/non-WIP stocks and per-exchange inherited vectors; Original-cohort service horizon and complete performed services; Whole package six-leg balances and supplier-included owner; Native pad37570 taxonomy anomaly and Volume-only reference; Native electricity CN user-side grid below1kV when bound; Actual pollutant species morphology phase compartment and detection coverage; Full native restrictions in every adopted-flow description |

Every qualifier must be declared in consumable foreground metadata or description together with the complete finished_sheet native restrictions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_volume | reference product | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use actual net geometric volume of the bare first-released whole sheets; sum actual one-face area with local thickness. Independent net kg/area/moisture records; no borrowed density or package void. Measure whole-sheet net geometric volume at its actual first-release supplied compression/conditioning state. Match complete actual outline, cutouts/through-holes/open voids and local thickness map to the same sheet. Only a verified rectangle uses L×W with actual openings removed; nonrectangular shapes require actual drawing/measurement integration, not a bounding box. Exclude inter-sheet/package gaps; do not subtract unmeasured microscopic porosity or use true mineral density to replace geometric m3. Independently weigh full net kg and moisture, retaining actual SBR/constituents, with no thickness, compression-test load, density or kg/m3 default. |
| preserve_numerator | all inventory rows | Actual native extensive property | row-specific | Keep kg, m3, MJ and other actual native numerator units distinct. calc_units and calc_normalize_once govern conversion and the sole normalization; no blanket Mass/kg requirement. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased whole chrysotile fibre and identified SBR binder formulation at receipt; include upstream supply and actual inbound transport |
| starting_condition_role | Foreground collection gate with linked upstream background |
| product_classification_scope | Narrow37920 manufactured sheet subset; do not infer full leaf coverage |
| recursive_input_rule | Internal mixes/WIP retain history and cancel on consolidation; bought released sheets cannot replace raw manufacture |
| upstream_dataset_requirement | Match whole supplied formulation/form/route/geography and every real service; packaging/carrier inclusions have one owner |
| disclosure | Full actual stocks/vectors, failed loads, species/media, first-release Q and separate service horizon |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | all manufacturing | Include the complete route in section1 and every actual unlisted input/output as one specific atomic exchange before dataset finalization. Identify separately every separately purchased solvent, filler, vulcanizing ingredient, coating, fuel, transport service and actual pollutant; a whole commercial preparation is one purchase with constituent subledgers. No zero/other bucket hides a real exchange. Historical industrial descriptions establish the stated terminal/route and LCA collection context only, not current legal authorization, occupational-health compliance, safety certification or site operating/exposure thresholds. Actual applicability claims require independent governing authorization/supply evidence. Permission/postwork tests/acceptance/disposition determine authorization and continuing qualification ONLY; never erase all actual unauthorized, failed, rework/replacement, cleanup or treatment water/material/energy/loss burdens. Assign once to the real original/new cohort; do not assume cured/broken whole sheets regain qualification. | epa-asbestos-lifecycle-1982; sigma-jointing-sheets |
| b_release | manufacturing and finished goods | Q is the sum of measured net geometric m3 of unique NEW first-quality-release sheets. Reinspection, delivery, return or repair-release adds no production Q. Closing FG already belongs to Q and is not another output or a manufacturing-burden deduction. Cancel internal release transfers in the consolidated gate. Preserve independent full physical manufacturing, FG and consolidated balances. | epa-asbestos-lifecycle-1982 |
| b_stocks | all cohort stocks | Retain disjoint opening/closing fibre, whole binder, mixed stock, formed/unreleased sheet, FG, failed/rework stock and each non-WIP oil/water/asset charge with EACH inherited exchange vector. Manufacturing closing-burden carryover includes only raw/WIP and unused/unassigned non-WIP charges, never already-released FG. If consumption is already stock-corrected do not subtract closing stock again. For EVERY raw/WIP/nonWIP stock (assets, installed fluids/tools/parts/packaging), keep full wet physical opening/closing quantities AND every exchange-history vector; stock quantity is not its burden vector, and already-net consumption is not stock-corrected again. Original first Q includes released retained FG; preserve all failure/Q0/start-stop/idle/cleanup/test/rework/treatment burdens, without automatic T_other from waste sales/destination. Actually performed service always uses original Qc (the existing formula original cohort Q) and observed H, even for held FG; ONLY unused/unassigned service carries. Internal FG transfer is a gate/ledger event cancelled once in consolidation, not a new environmental exchange or second Q; original gross dispatch and actual changed wet return are independent. |  |
| b_services | post-release services | Each actually performed packaging/storage/handling/dispatch/return-inspection service remains assigned to its original release cohort even if FG remains in store. Retain its original cohort Q and observation horizon; carry over only unused/unassigned service/charge. Returns keep original history once plus genuine new work. Post-release work requires manufacturer/specification permission, postwork tests, acceptance and disposition; do not presume a broken or cured sheet can be restored. Historical industrial descriptions establish the stated terminal/route and LCA collection context only, not current legal authorization, occupational-health compliance, safety certification or site operating/exposure thresholds. Actual applicability claims require independent governing authorization/supply evidence. Permission/postwork tests/acceptance/disposition determine authorization and continuing qualification ONLY; never erase all actual unauthorized, failed, rework/replacement, cleanup or treatment water/material/energy/loss burdens. Assign once to the real original/new cohort; do not assume cured/broken whole sheets regain qualification. For EVERY raw/WIP/nonWIP stock (assets, installed fluids/tools/parts/packaging), keep full wet physical opening/closing quantities AND every exchange-history vector; stock quantity is not its burden vector, and already-net consumption is not stock-corrected again. Original first Q includes released retained FG; preserve all failure/Q0/start-stop/idle/cleanup/test/rework/treatment burdens, without automatic T_other from waste sales/destination. Actually performed service always uses original Qc (the existing formula original cohort Q) and observed H, even for held FG; ONLY unused/unassigned service carries. Internal FG transfer is a gate/ledger event cancelled once in consolidation, not a new environmental exchange or second Q; original gross dispatch and actual changed wet return are independent. |  |
| b_packaging | each packaging article | For EACH package keep opening empty/attached-WIP/attached-FG/reusable stock disjoint and balance opening + P purchases + I first non-purchased external ingress + ER external returns received + X_in actual separate additions = closing + S packages on gross physical shipments + EO external returns sent + W waste + X_out actual separate removals. Internal reuse cancels, is not purchase/Q/coproduct. P/I whole included content is counted once, with real ingress and one upstream owner. Gross legs never shrink with burden shares. X_in/X_out covers only independently measured actual added/removed water/parts/material not already in OTHER same-side flow terms, never stocks, opposite legs or merely because a card exists. Whole wet P/I once; retained additions keep real influx AND full wet closing. Cover ordinary storage/handling humidity uptake/desorption and actual cleaning, not only repair. Unknown occurrence/species/amount is not zero; presume no repair, dry wood, species or life. Separate actual new/old wood/parts and liquid water/humidity/vapour; held FG and distinct repair-WIP stocks are disjoint once. Each pool has actual P/I/ER/S/EO/W cards and protocols. W cards are external exchanges ONLY for actually separately collected disjoint streams. If there is ONE real mixed collection outlet, name ONE specific mixed Waste exchange from its actual composition/state/destination before dataset completion, with ONE treatment provider; each material W is then an independently measured protocol origin subledger whose sum equals the separately measured total, never total plus origin cards/another Waste. Do not presume mixing or invent a second outlet. |  |
| b_assets | repair and water physical gates | For each real repair part/fluid/water phase record actual X_in and X_out separately, de-duplicating ONLY against other incoming/outgoing terms that already contain it. New material/water remaining at closing still has real influx AND full closing wet mass. Preserve actual old/new parts and installed oil/water. Whole asset stocks and current service burdens are different views; never impose life, machine-per-kg, density or kg/item defaults. For ledger-only physical FG/package/waste/asset/thermal-carrier legs, z_i_c uses full gross V_i/Q (original Qc for service), stored separately from A_i_c/A_service and every inherited manufacture/service vector. Gross physical numerators never use a stock-burden difference, net shipment, economic/causal share or old manufacturing history addition; no second acquisition/treatment charge or credit. Divide once by the original denominator and retain actual service burdens independently. Manufacturing thermal-carrier incoming/return kg/actual state/enthalpy uses V/Q; only service increments use original QcH. Heat MJ and carrier kg/actual condensate/hot-water Product returns share ONE supplier boundary and ONE burden owner. If actual hot-water heating exists add its real paired Product rows before completion, not cooling-water or environmental-release substitutes; return gives no negative water/heat credit. |  |
| b_species | all releases and material gates | Reconcile whole physical mass and relevant Mg/Si/C/S/other actual element balances independently of species/reaction evidence; one residual cannot fit two unknowns. Keep free, reaction, vapour and mineral-structure water distinct; calendering/curing alone does not establish mineral dehydration or reaction water. Retain actual air gross species/phase and each outlet, avoiding aggregate plus child-species duplication. Contained treated waste is not also direct air/water release. No dispersion or fibre fraction is inferred from total PM/COD/VOC. Pair actual gross gas-species inlet/outlet records by the same origin/species/phase/medium in a separate physical ledger. Environmental attribution uses only independently established actual process net changes; unchanged ambient pass-through is not new pollution/resource use or a negative credit. Never subtract aggregate gas mass across species/origins/phases or charge both gross pairs and the same net change. No air fractions are assumed; actual additional gases/species require individual atomic rows before dataset completion. | epa-asbestos-lifecycle-1982 |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | jrc-ilcd-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Fibre-to-whole-sheet manufacture and first release | required | complete actual route | foreground | finished_sheet |
| services | Actual original-cohort post-release services | conditional | actual performed service and declared horizon | foreground | original cohort Q |

All cards are subject to sections1–5 and7–9. Add and query every actual unlisted exchange individually. A real solvent carrier is not automatically toluene: a separately bought preparation needs its own whole-purchase card, while included carrier stays a constituent subledger. Identify each actual heat/fuel/steam/condensate/species leg; do not invent a boiler.

### Process: Manufacture and first release (`manufacture`)

#### Inputs

##### Product flows

###### Purchased chrysotile fibre (`chrysotile`)

Whole delivered chrysotile fibre CAS12001-29-5; consumption mix to consumers. Confirm actual fibre mineral and supplied grade/form independently; no amphibole, asbestos-group CAS or finished-sheet substitution. Record incoming packaging separately with its single upstream owner.

- Selected flow: Asbestos, chrysotile type `92b5f80c-5bb0-4644-8cc0-76c6b88380e8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sigma-jointing-sheets`; `epa-asbestos-lifecycle-1982`

###### Actual inbound road freight (`road_freight`)

Only actual separately modelled inbound road movement, with measured shipped gross load, actual distance, mode/vehicle and shipment records. Check delivered-fibre/whole-formulation provider boundary first: no duplicate freight already included. Sea, rail or other actual mode requires its own specific exchange, not this road flow.

- Selected flow: Road freight transport service
- Flow property / unit: Mass-distance / tkm
- Amount rule: Read the previously calculated z_i_c; cp_freight
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freight`
- Sources: `epa-asbestos-lifecycle-1982`

###### Whole SBR jointing binder preparation (`sbr_compound`)

One actual purchased SBR-based binder formulation, including its delivered carrier, fillers and additives, is procured once. Retain supplier composition/assay and constituent water/solvent subledgers without buying those constituents twice. This is a declared procurement variant, not a claim about Sigma factory purchasing. If compounded onsite, replace this acquisition with EACH actual purchased material and retain compounding energy/losses; no unspecified binder UUID, recipe or fixed proportions.

- Selected flow: SBR-based heat-resistant jointing binder preparation as supplied
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `sigma-jointing-sheets`; `epa-asbestos-lifecycle-1982`

###### User-side electricity (`electricity`)

Bind only actual CN grid-average user-side AC below1kV. The native extensive reference property is Net calorific value/MJ: convert metered kWh to MJ once using3.6. Exclude already included upstream transformer/heat-provider burdens. Another geography/voltage/generation route needs its own compatible flow, not this UUID. Retain drives, actual heating, ventilation, abatement, cleanup, start/stop, idle and failed production.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Read the previously calculated z_i_c; cp_energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `epa-asbestos-lifecycle-1982`

###### Purchased calender heat (`purchased_heat`)

Conditional actual external thermal supply only; document energy basis, supply/return state and provider. Do not infer a boiler or natural gas. If carrier water/steam is separately metered, link its physical mass and return legs to this one supply transaction; provider water/energy inclusions have one owner. Electric heat already in electricity is not purchased again. Whole Heat for manufacturing Product family, at plant GLO, with source/carrier unspecified, positively admits actual externally supplied manufacturing heat. Native reference Net calorific value93a60a56-a3c8-11da-a746-0800200c9a66 to unitgroup93a60a57-a3c8-11da-a746-0800200c9a66 to MJ; verify the real supplied energy basis/provider, do not substitute gross heat value or infer fuel/boiler. Keep carrier kg/actual return state/enthalpy independently and ONE upstream heat/water owner; electric heat already metered is not purchased twice.

- Selected flow: Heat for manufacturing `e7543af8-5dd2-4066-ad1e-3e2a5b563405`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Read the previously calculated z_i_c; cp_energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `epa-asbestos-lifecycle-1982`

###### Actual external steam carrier (`steam_carrier`)

Conditional physical carrier mass, not a second purchase of heat. Retain measured kg, phase, temperature, pressure, enthalpy and supplier loss/return agreement; never infer kg from MJ or a default steam state. Actual boiler fuel/water/blowdown would require separate atomic exchanges if inside the foreground. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Water steam supplied to the calender heat exchanger
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-asbestos-lifecycle-1982`

###### Supplied liquid water (`tap_water`)

Record actual makeup, cleanup and cooling inlet water separately by use/location. Native HK water with screening1000kg/m3 is not adopted for an unspecified plant. Use metered volume and independently established actual density/state if mass is needed. Historical dry-process text is not evidence of zero actual site water. A complete generic treated-tap-water Mass/kg identity cannot bind this original Volume/m3 row merely because it also reports a secondary Volume factor. Preserve actual volume metering; leave unbound until independent actual state/conversion evidence and a compatible property identity are established, without default density.

- Selected flow: Treated process tap water
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Read the previously calculated z_i_c; cp_water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-asbestos-lifecycle-1982`

###### Two-roll calender acquisition (`calender_asset`)

One qualified finished rubber-sheet calender, production mix at plant; native Mass/kg, not item or a guessed machine weight. Preserve gross acquired wet/configured machine mass and its supplied fluid/packaging inclusions. Link separately the actual attributable service vector from the asset ledger; do not buy a whole machine per reference flow or add acquisition and its service burden twice. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Calandering or other rolling machines, except for metals or glass `b92f36ba-dd62-4dcf-9ebd-a41f080a0533`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_assets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-asbestos-lifecycle-1982`

###### Replacement roller bearing (`bearing_new`)

One actual finished replacement roller bearing within the generic manufactured at-plant family; native Mass/kg, measured complete supplied article. Gross new part and the old removed part remain separate physical legs. Do not infer composition, lubricant inclusion, life or kg/item. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_assets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-asbestos-lifecycle-1982`

###### Mineral gear oil preparation (`mineral_oil`)

Conditional actual mineral-oil formulation, not synthetic PAO. Retain all actual added oil even when it remains installed at closing; separately retain full wet asset/charge closing mass. De-duplicate only against oil already included in another incoming article. No fixed service life or oil-replacement rate. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Mineral gear lubricating oil preparation as supplied
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_assets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-asbestos-lifecycle-1982`

###### New cotton cleaning cloth (`clean_cloth`)

Conditional one cotton cloth article; procurement and contaminated outgoing cloth are separate legs, with actual retained moisture and asbestos accounted without double reporting contained fibres as direct emissions. Cotton fabric/woven-cotton-cloth whole Product family admits the actual cotton cleaning cloth with verified construction/finish; native Mass to kg. Raw-cotton01921 taxonomy and general seed-hair comment are retained metadata debt, not a hard unfabricated-state restriction on the positive fabric name/synonyms. Do not adopt the other water-treatment-specific or printed apparel-grade cloth. Not raw cotton fibre or an unverified multi-material wiper. Actual wet mass, finishing and contamination need records; no species/grammage/life defaults.

- Selected flow: Cotton fabric `dd9f2248-bc28-43b9-8d57-d77756754f4d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-asbestos-lifecycle-1982`

###### New polyester dust filter (`new_filter`)

Conditional one actual polyester filter medium, not every abatement device. Different filter composition or cleaning chemical needs an additional specific exchange. Retain new medium, captured dust and spent medium separately; attached dust is counted once in gross waste. Whole Filter cloth Product family with Mass to kg admits the actually configured polyester filter medium after independent fibre/form/finish verification. No native polymer or weave is fixed; do not infer nonwoven or apparel mesh. Not a complete dust collector, raw resin or a cloth contaminated by prior use. Separate captured dust/moisture as subledgers and disjoint actual outputs.

- Selected flow: Filter cloth `117b035a-6255-425d-92b9-6c65ff1be2ab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-asbestos-lifecycle-1982`

###### LDPE wrapping foil I (`film_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I only: first non-purchased receipt of this same article at the packaging gate, standalone or with raw material; preserve full ingress even if upstream burden belongs to that raw-material provider, never another P. One whole PE-LD foil, native Mass/kg with no fixed supplier/grade/geography. Confirm actual LDPE article; do not bind resin granules or PET.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults. Only the native non-self-adhesive/non-cellular/unreinforced/unlaminated/unsupported PE-LD form.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_film_i
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_film_i
- Sources: jrc-ilcd-2010

###### whole wooden portable pallet I (`pallet_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I only: first non-purchased receipt of this same article at the packaging gate, standalone or with raw material; preserve full ingress even if upstream burden belongs to that raw-material provider, never another P. ONE actual wooden portable load platform within the broad native manufactured at-plant family, Mass/kg, not a combination of pallet/collar/box alternatives. Retain full wood/hardware/moisture composition; no presumed EURO specification, fumigation, life or kg/item.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_pallet_i
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pallet_i
- Sources: jrc-ilcd-2010

###### protective interleaving paper I (`paper_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I only: first non-purchased receipt of this same article at the packaging gate, standalone or with raw material; preserve full ingress even if upstream burden belongs to that raw-material provider, never another P. One actual protective interleaving paper article, native production mix at plant and Mass/kg; confirm fibre/coating/treatment and supplier state, not an electrochemical separator assumption.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Separator paper `68a4c082-ae92-4672-b9ce-c328fc41a225`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_paper_i
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_paper_i
- Sources: jrc-ilcd-2010

###### steel transport strapping I (`band_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. I only: first non-purchased receipt of this same article at the packaging gate, standalone or with raw material; preserve full ingress even if upstream burden belongs to that raw-material provider, never another P. One actual steel band with measured alloy/coating. The available native99%Fe1%C recycled/reprocessed band is not adopted without actual composition/route confirmation.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Steel transport strapping band
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_band_i
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_band_i
- Sources: jrc-ilcd-2010

##### Elementary flows

###### Actual atmospheric H2O uptake (`manufacture_humidity`)

Only ordinary H2O actually absorbed/condensed from air into fibre/preparation/WIP/FG/packaging/cloth/equipment, with independently measured gross mass/phase by actual gate, ordinary storage/handling/work and origin subledger. Not water purchase or water already inside a whole receipt. A Water,in air resource Volume/m3 identity was found, but this Mass/kg row stays unbound until independent state/unit conversion is established, with no liquid-water/humid-air density default. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Actual atmospheric H2O uptake
- Flow property / unit: Mass / kg
- Amount rule: Read the previously calculated z_i_c; cp_manufacture_humidity
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_manufacture_humidity
- Sources: jrc-ilcd-2010; epa-asbestos-lifecycle-1982


#### Outputs

##### Product flows

###### Uniquely first-released whole sheet (`finished_sheet`)

ONE whole unreinforced uncoated compressed chrysotile–SBR jointing sheet at factory first release, never loose fibre, woven mat, cement board, friction part or an installed gasket. Native Product family is manufactured asbestos pad at factory, Volume only; no CAS/grade/geography or rubber-composition restriction is fixed. Its37570 classification conflicts with the present noncement scope and is disclosed as a taxonomy anomaly, not positive mapping evidence; name/synonyms/comments and full primary context permit this bounded manufactured article. Preserve measured net geometric m3 with separate net kg and actual one-face area/thickness/conditioning; no density or kg/item inferred. Upstream whole formulation, route, moisture, release specifications and actual tests remain mandatory. Measure whole-sheet net geometric volume at its actual first-release supplied compression/conditioning state. Match complete actual outline, cutouts/through-holes/open voids and local thickness map to the same sheet. Only a verified rectangle uses L×W with actual openings removed; nonrectangular shapes require actual drawing/measurement integration, not a bounding box. Exclude inter-sheet/package gaps; do not subtract unmeasured microscopic porosity or use true mineral density to replace geometric m3. Independently weigh full net kg and moisture, retaining actual SBR/constituents, with no thickness, compression-test load, density or kg/m3 default.

- Selected flow: Asbestos pad `d7e8af11-549b-47c1-9855-08ec00d4a079`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: 1 m3
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `sigma-jointing-sheets`; `epa-asbestos-lifecycle-1982`

###### Liquid heat-exchange return (`condensate_return`)

Only actual clean external return. Preserve measured physical kg, liquid phase, temperature/enthalpy, dissolved/entrained content and supplier water/energy ownership. Contaminated condensate is its own waste flow. Internal circulation cancels; do not assume a steam system or equate return mass with supplied mass. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Liquid water condensate returned to the heat supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-asbestos-lifecycle-1982`

###### External cooling-water return (`cooling_return`)

Conditional actual uncontaminated external water return with independently measured state, density and enthalpy. Retain supply and return separately; neither is erased because water remains in closing equipment. An actual direct environmental discharge has a distinct compartment/speciation record instead. Generic Cooling water Product identity has Mass reference to kg and no fixed supply route/geography; it admits actual uncontaminated liquid cooling-water return with independently measured state. This is a gross physical return linked to ONE actual supplier transaction, not an additional water-production purchase or negative credit. Not condensation-water vapour, environmental release, industrial cooling energy service, contaminated wastewater or a hot-water heating return without separate applicability. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `epa-asbestos-lifecycle-1982`

##### Waste flows

###### Cured sheet offcut (`sheet_scrap`)

Retain all trim and failed specimens; no assumed return to mixing, yield, coproduct or credit. A real reuse decision needs manufacturer/specification permission and actual postwork acceptance; historic impregnated-sheet scrap is not assumed recyclable.

- Selected flow: Chrysotile–SBR jointing-sheet offcut waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-asbestos-lifecycle-1982`

###### Rejected whole sheet (`rejected_sheet`)

Retain entire rejected/test-destructed sheet and its moisture. Failed output carries real manufacturing and treatment burdens; outward transfer or sale does not remove them.

- Selected flow: Rejected chrysotile–SBR jointing sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-asbestos-lifecycle-1982`

###### Captured chrysotile dust (`captured_dust`)

Measure actual whole collected dust and chrysotile composition separately. Count dust attached to a spent filter once; collection is not an elementary emission and total PM does not identify a fibre species.

- Selected flow: Captured chrysotile-bearing solid dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-asbestos-lifecycle-1982`

###### Contaminated cleaning cloth (`spent_cloth`)

Whole wet cloth with separately measured water/fibre subledger; retained contamination is not also emitted to air/water.

- Selected flow: Chrysotile-contaminated cotton cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-asbestos-lifecycle-1982`

###### Contaminated spent filter (`spent_filter`)

Actual spent polyester fabric including attached dust/moisture, reconciled against separately removed dust; no double counting.

- Selected flow: Chrysotile-contaminated polyester filter fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-asbestos-lifecycle-1982`

###### Binder-solvent recovery residue (`solvent_residue`)

Only actual recovery residue with its complete composition, moisture and destination; a single documented waste preparation, not a pool of all solvents. Identify each distinct external waste preparation separately and measure its constituent species.

- Selected flow: SBR jointing-binder solvent-recovery residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-asbestos-lifecycle-1982`

###### Contaminated aqueous cleaning effluent (`cleaning_effluent`)

Whole effluent at actual treatment handover, with actual liquid mass/volume/density, suspended chrysotile and independently measured dissolved species. COD is an indicator, not a named chemical. Direct environmental outlets remain separate after treatment; no duplicate contained release.

- Selected flow: Chrysotile-contaminated aqueous cleaning effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-asbestos-lifecycle-1982`

###### Contaminated treatment sludge (`wet_sludge`)

Conditional actual wet sludge separately from whole effluent at the same gate. Independent dry solids, retained water and fibre assays; do not estimate two unknowns from one mass residual.

- Selected flow: Chrysotile-bearing wastewater-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `epa-asbestos-lifecycle-1982`

###### Used mineral gear oil (`used_oil`)

Actual drained whole oil and water/contamination composition; reconcile installed opening/closing charges, retained new oil and leakage by species. Used lubricating-oil Waste identity at point of generation positively includes petroleum-based used gear lubricant; native Mass to kg, treatment unspecified. Confirm actual whole used oil and contamination; no new mineral oil, container or water-oil emulsion substitution and no assumed recycling/combustion credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_assets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-asbestos-lifecycle-1982`

###### Removed bearing (`old_bearing`)

Actual removed old part, with new replacement, attached fluids and embedded inclusions reconciled once; gross physical mass is never scaled by a burden share. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Removed steel roller-bearing article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_assets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-asbestos-lifecycle-1982`

###### Retired calender (`retired_calender`)

Actual decommissioned wet/configured asset; separate included oil/water/parts against other outgoing terms once. No fixed lifespan, no fictitious retirement and no avoided-product credit. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Retired rubber-sheet two-roll calender
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_assets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assets`
- Sources: `epa-asbestos-lifecycle-1982`

##### Elementary flows

###### Direct chrysotile particulate to air (`chrysotile_air`)

Only independently identified CAS12001-29-5 fibrous chrysotile actually crossing the air boundary. Resource-from-ground white-asbestos identity is not an emission; generic asbestos-group CAS1332-21-4 cannot stand for this mineral. Retain particle morphology, phase and actual air subcompartment; fibre counts are not kg without independently justified conversion. Do not infer chrysotile from PM, total magnesium/silicon or a mass residual.

- Selected flow: Chrysotile mineral fibre particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-asbestos-lifecycle-1982`

###### Direct chrysotile particulate to freshwater (`chrysotile_water`)

Conditional measured direct freshwater release of suspended fibrous chrysotile CAS12001-29-5 at the actual outlet; not the whole effluent sent to a treatment provider or the captured sludge. Verify actual receiving medium; no water/air/resource UUID interchange. Zero requires real coverage and detection-limit evidence.

- Selected flow: Chrysotile mineral fibre particulate to freshwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-asbestos-lifecycle-1982`

###### Actual evaporated water (`water_air`)

Conditional actual water vapour CAS7732-18-5; retain independent moisture, reaction/free/structure-bound water and actual air compartment. Native air-unspecified identity cannot replace a known urban/high-stack compartment. Water-emission identities with the same name/CAS are not adopted. No default evaporation or reaction water is inferred from curing or calendering.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources: `epa-asbestos-lifecycle-1982`

### Process: Incremental original-cohort services (`services`)

#### Inputs

##### Product flows

###### Actual original-cohort service electricity (`service_electricity`)

Bind only actual CN grid-average user-side AC below1kV. The native extensive reference property is Net calorific value/MJ: convert metered kWh to MJ once using3.6. Exclude already included upstream transformer/heat-provider burdens. Another geography/voltage/generation route needs its own compatible flow, not this UUID. Retain drives, actual heating, ventilation, abatement, cleanup, start/stop, idle and failed production. Only real post-release packaging/storage/handling/dispatch service increments over the original cohort horizon; original production is not purchased again.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Read the previously calculated z_i_c; cp_service_electricity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_service_electricity`
- Sources: `epa-asbestos-lifecycle-1982`

###### LDPE wrapping film ingress (`film_in`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One whole PE-LD foil, native Mass/kg with no fixed supplier/grade/geography. Confirm actual LDPE article; do not bind resin granules or PET. Record P/I/ER inbound and S/EO outbound separately with disjoint opening/closing empty, attached WIP/FG and reusable stocks. first non-purchased external ingress has actual physical mass and one upstream owner, never another purchase. Internal reuse cancels. Gross physical legs are not burden-share-scaled. Native full form is non-self-adhesive, non-cellular, unreinforced, unlaminated/unsupported PE-LD foil, not similarly combined material. Reselect the whole compatible identity when actual form differs; polymer names/CAS or taxonomy do not waive those constraints. P only: paid standalone or bundled whole packaging. I/ER have separate actual cards. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### One wooden transport pallet ingress (`pallet_in`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. ONE actual wooden portable load platform within the broad native manufactured at-plant family, Mass/kg, not a combination of pallet/collar/box alternatives. Retain full wood/hardware/moisture composition; no presumed EURO specification, fumigation, life or kg/item. Record P/I/ER inbound and S/EO outbound separately with disjoint opening/closing empty, attached WIP/FG and reusable stocks. first non-purchased external ingress has actual physical mass and one upstream owner, never another purchase. Internal reuse cancels. Gross physical legs are not burden-share-scaled. P only: paid standalone or bundled whole packaging. I/ER have separate actual cards. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### Interleaving paper sheet ingress (`paper_in`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual protective interleaving paper article, native production mix at plant and Mass/kg; confirm fibre/coating/treatment and supplier state, not an electrochemical separator assumption. Record P/I/ER inbound and S/EO outbound separately with disjoint opening/closing empty, attached WIP/FG and reusable stocks. first non-purchased external ingress has actual physical mass and one upstream owner, never another purchase. Internal reuse cancels. Gross physical legs are not burden-share-scaled. P only: paid standalone or bundled whole packaging. I/ER have separate actual cards. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Separator paper `68a4c082-ae92-4672-b9ce-c328fc41a225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### Steel strapping band ingress (`band_in`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual steel band with measured alloy/coating. The available native99%Fe1%C recycled/reprocessed band is not adopted without actual composition/route confirmation. Record P/I/ER inbound and S/EO outbound separately with disjoint opening/closing empty, attached WIP/FG and reusable stocks. first non-purchased external ingress has actual physical mass and one upstream owner, never another purchase. Internal reuse cancels. Gross physical legs are not burden-share-scaled. P only: paid standalone or bundled whole packaging. I/ER have separate actual cards. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Steel transport strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### LDPE wrapping foil ER (`film_er`)

ER only: an actual external usable packaging return received, with independently changed wet mass, condition and original history. It does not undo an earlier shipment S; a waste return needs its actual compatible Waste identity. One whole PE-LD foil, native Mass/kg with no fixed supplier/grade/geography. Confirm actual LDPE article; do not bind resin granules or PET.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults. Only the native non-self-adhesive/non-cellular/unreinforced/unlaminated/unsupported PE-LD form.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_film_er
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_film_er
- Sources: jrc-ilcd-2010

###### whole wooden portable pallet ER (`pallet_er`)

ER only: an actual external usable packaging return received, with independently changed wet mass, condition and original history. It does not undo an earlier shipment S; a waste return needs its actual compatible Waste identity. ONE actual wooden portable load platform within the broad native manufactured at-plant family, Mass/kg, not a combination of pallet/collar/box alternatives. Retain full wood/hardware/moisture composition; no presumed EURO specification, fumigation, life or kg/item.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_pallet_er
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pallet_er
- Sources: jrc-ilcd-2010

###### protective interleaving paper ER (`paper_er`)

ER only: an actual external usable packaging return received, with independently changed wet mass, condition and original history. It does not undo an earlier shipment S; a waste return needs its actual compatible Waste identity. One actual protective interleaving paper article, native production mix at plant and Mass/kg; confirm fibre/coating/treatment and supplier state, not an electrochemical separator assumption.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Separator paper `68a4c082-ae92-4672-b9ce-c328fc41a225`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_paper_er
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_paper_er
- Sources: jrc-ilcd-2010

###### steel transport strapping ER (`band_er`)

ER only: an actual external usable packaging return received, with independently changed wet mass, condition and original history. It does not undo an earlier shipment S; a waste return needs its actual compatible Waste identity. One actual steel band with measured alloy/coating. The available native99%Fe1%C recycled/reprocessed band is not adopted without actual composition/route confirmation.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Steel transport strapping band
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_band_er
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_band_er
- Sources: jrc-ilcd-2010

###### Actual pallet replacement wood (`pallet_repair_wood`)

Only actual separately supplied pallet replacement boards/wood, with actual species/sawn-processing/drying/treatment/hardware/wet mass, supply owner and new/old dispositions independently recorded. Not a whole pallet; never clone the whole-pallet native paragraph. Examined Sawnwood fixes green undried state while actual state is unspecified, so it is not forced. Presume no repair/dry material/default species/life; add actual other new part rows separately. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Actual pallet replacement wood
- Flow property / unit: Mass / kg
- Amount rule: Read the previously calculated z_i_c; cp_pallet_repair_wood
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pallet_repair_wood
- Sources: jrc-ilcd-2010; epa-asbestos-lifecycle-1982

###### Actual postrelease cleaning water (`service_water`)

Only actual treated municipal/potable tap-water supply. This complete Product identity has no fixed supply geography; Mass reference93a60a56-a3c8-11da-a746-0800200b9a66 to unitgroup93a60a57-a4c8-11da-a746-0800200c9a66 to kg. Its secondary Volume factor is not independently measured density. Not HK-specific water, untreated/abstracted water, closed-loop return or a second purchase of water contained in another supplied article. Actual postrelease original-Qc/H cleaning/conditioning/work supply only, not restricted to permitted repair. Packaging/paper/wood/whole-sheet water events have one event owner/origin subledger, never total plus parts for the same supply. Other actual water sources need their own compatible row. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: Read the previously calculated z_i_c; cp_service_water
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_service_water
- Sources: jrc-ilcd-2010; epa-asbestos-lifecycle-1982


##### Elementary flows

###### Actual atmospheric H2O uptake (`services_humidity`)

Only ordinary H2O actually absorbed/condensed from air into fibre/preparation/WIP/FG/packaging/cloth/equipment, with independently measured gross mass/phase by actual gate, ordinary storage/handling/work and origin subledger. Not water purchase or water already inside a whole receipt. A Water,in air resource Volume/m3 identity was found, but this Mass/kg row stays unbound until independent state/unit conversion is established, with no liquid-water/humid-air density default. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Actual atmospheric H2O uptake
- Flow property / unit: Mass / kg
- Amount rule: Read the previously calculated z_i_c; cp_services_humidity
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_services_humidity
- Sources: jrc-ilcd-2010; epa-asbestos-lifecycle-1982


#### Outputs

##### Product flows

###### LDPE wrapping film egress (`film_out`)

One whole PE-LD foil, native Mass/kg with no fixed supplier/grade/geography. Confirm actual LDPE article; do not bind resin granules or PET. Record P/I/ER inbound and S/EO outbound separately with disjoint opening/closing empty, attached WIP/FG and reusable stocks. Supplier-included ingress has actual physical mass and one upstream owner, never another purchase. Internal reuse cancels. Gross physical legs are not burden-share-scaled. Native full form is non-self-adhesive, non-cellular, unreinforced, unlaminated/unsupported PE-LD foil, not similarly combined material. Reselect the whole compatible identity when actual form differs; polymer names/CAS or taxonomy do not waive those constraints. S only: full wet packaging with gross physical product shipment, not net delivery; EO is separate and returns never undo original S. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### One wooden transport pallet egress (`pallet_out`)

ONE actual wooden portable load platform within the broad native manufactured at-plant family, Mass/kg, not a combination of pallet/collar/box alternatives. Retain full wood/hardware/moisture composition; no presumed EURO specification, fumigation, life or kg/item. Record P/I/ER inbound and S/EO outbound separately with disjoint opening/closing empty, attached WIP/FG and reusable stocks. Supplier-included ingress has actual physical mass and one upstream owner, never another purchase. Internal reuse cancels. Gross physical legs are not burden-share-scaled. S only: full wet packaging with gross physical product shipment, not net delivery; EO is separate and returns never undo original S. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### Interleaving paper sheet egress (`paper_out`)

One actual protective interleaving paper article, native production mix at plant and Mass/kg; confirm fibre/coating/treatment and supplier state, not an electrochemical separator assumption. Record P/I/ER inbound and S/EO outbound separately with disjoint opening/closing empty, attached WIP/FG and reusable stocks. Supplier-included ingress has actual physical mass and one upstream owner, never another purchase. Internal reuse cancels. Gross physical legs are not burden-share-scaled. S only: full wet packaging with gross physical product shipment, not net delivery; EO is separate and returns never undo original S. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Separator paper `68a4c082-ae92-4672-b9ce-c328fc41a225`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### Steel strapping band egress (`band_out`)

One actual steel band with measured alloy/coating. The available native99%Fe1%C recycled/reprocessed band is not adopted without actual composition/route confirmation. Record P/I/ER inbound and S/EO outbound separately with disjoint opening/closing empty, attached WIP/FG and reusable stocks. Supplier-included ingress has actual physical mass and one upstream owner, never another purchase. Internal reuse cancels. Gross physical legs are not burden-share-scaled. S only: full wet packaging with gross physical product shipment, not net delivery; EO is separate and returns never undo original S. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Steel transport strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### LDPE wrapping foil EO (`film_eo`)

EO only: actual outward return to supplier/another external custodian, distinct from S with product shipments. Record changed full wet mass, state and destination, without negative purchase or automatic waste/credit. One whole PE-LD foil, native Mass/kg with no fixed supplier/grade/geography. Confirm actual LDPE article; do not bind resin granules or PET.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults. Only the native non-self-adhesive/non-cellular/unreinforced/unlaminated/unsupported PE-LD form.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_film_eo
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_film_eo
- Sources: jrc-ilcd-2010

###### whole wooden portable pallet EO (`pallet_eo`)

EO only: actual outward return to supplier/another external custodian, distinct from S with product shipments. Record changed full wet mass, state and destination, without negative purchase or automatic waste/credit. ONE actual wooden portable load platform within the broad native manufactured at-plant family, Mass/kg, not a combination of pallet/collar/box alternatives. Retain full wood/hardware/moisture composition; no presumed EURO specification, fumigation, life or kg/item.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_pallet_eo
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pallet_eo
- Sources: jrc-ilcd-2010

###### protective interleaving paper EO (`paper_eo`)

EO only: actual outward return to supplier/another external custodian, distinct from S with product shipments. Record changed full wet mass, state and destination, without negative purchase or automatic waste/credit. One actual protective interleaving paper article, native production mix at plant and Mass/kg; confirm fibre/coating/treatment and supplier state, not an electrochemical separator assumption.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Separator paper `68a4c082-ae92-4672-b9ce-c328fc41a225`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_paper_eo
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_paper_eo
- Sources: jrc-ilcd-2010

###### steel transport strapping EO (`band_eo`)

EO only: actual outward return to supplier/another external custodian, distinct from S with product shipments. Record changed full wet mass, state and destination, without negative purchase or automatic waste/credit. One actual steel band with measured alloy/coating. The available native99%Fe1%C recycled/reprocessed band is not adopted without actual composition/route confirmation.  Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Steel transport strapping band
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Read the previously calculated z_i_c; cp_band_eo
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_band_eo
- Sources: jrc-ilcd-2010


##### Waste flows

###### Discarded LDPE wrapping film (`film_waste`)

One actual discarded packaging article; retain contamination, moisture, treatment destination and the W leg independently. Sale or outward movement is not a default coproduct or burden deduction. W only for an actual disjoint collection event; if actually mixed, this material is an origin-W subledger of the sole measured external Waste, not an additional total. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Discarded LDPE wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### Discarded One wooden transport pallet (`pallet_waste`)

One actual discarded packaging article; retain contamination, moisture, treatment destination and the W leg independently. Sale or outward movement is not a default coproduct or burden deduction. W only for an actual disjoint collection event; if actually mixed, this material is an origin-W subledger of the sole measured external Waste, not an additional total. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Discarded wooden pallet article
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### Discarded Interleaving paper sheet (`paper_waste`)

One actual discarded packaging article; retain contamination, moisture, treatment destination and the W leg independently. Sale or outward movement is not a default coproduct or burden deduction. W only for an actual disjoint collection event; if actually mixed, this material is an origin-W subledger of the sole measured external Waste, not an additional total. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Discarded interleaving paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### Discarded Steel strapping band (`band_waste`)

One actual discarded packaging article; retain contamination, moisture, treatment destination and the W leg independently. Sale or outward movement is not a default coproduct or burden deduction. W only for an actual disjoint collection event; if actually mixed, this material is an origin-W subledger of the sole measured external Waste, not an additional total. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Discarded steel strapping band
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Read the previously calculated z_i_c; cp_pack
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `epa-asbestos-lifecycle-1982`

###### Removed pallet repair wood waste (`removed_pallet_wood`)

Only actually separately removed old pallet repair wood as a real Waste stream, full wet mass with actual contamination/attached water/old hardware subledgers; new replacement does not erase old removal. If actually collected with whole pallets/other waste in one outlet, this is an origin-W subledger of the sole external Waste, not another exchange/treatment owner. Retained new material and moisture stay separately recorded. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Removed pallet repair wood waste
- Flow property / unit: Mass / kg
- Amount rule: Read the previously calculated z_i_c; cp_removed_pallet_wood
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_removed_pallet_wood
- Sources: jrc-ilcd-2010; epa-asbestos-lifecycle-1982

###### Actual postrelease cleaning wastewater (`service_effluent`)

Only ONE actual whole wet wastewater stream independently handed to external treatment from real postrelease work/cleanup over original Qc/H. Independently measure water, suspended chrysotile/other real species and dissolved composition as subledgers, with one treatment owner. Separate different actual wastewater identities; never total plus components/another total. Direct environmental discharge needs actual medium/species Elementary rows, not this Waste default; water retained in packaging/cloth/FG is not also effluent. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: Actual postrelease cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Read the previously calculated z_i_c; cp_service_effluent
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_service_effluent
- Sources: jrc-ilcd-2010; epa-asbestos-lifecycle-1982


##### Elementary flows

###### Actual postrelease H2O vapour (`service_vapour`)

Only independently measured ordinary H2O actually evaporated/desorbed to current unspecified air over original Qc/H, CAS7732-18-5, Mass/kg. Cover ordinary storage/handling, paper/wood/whole sheet and real work, not only repair. Noisy heavy/tritiated-water/ice aliases do not define this phase. Known air subcompartments require compatible identity; one residual cannot infer two sources, and moisture contained in waste/whole articles is not also emitted. Conditional actual events only: unknown occurrence/amount/composition is not zero. Preserve undivided full wet native-unit gross V, event/gate/custody/original cohort/H and every separate inherited/assigned exchange vector. Ledger-only physical amounts use V/Q for manufacture or V/original Qc for actual postrelease service once; they are not A_service, a stock-burden correction, economic share, old-manufacture addition, another acquisition/treatment charge or credit. Whole wet P/I contains its original constituents once. X overlaps only OTHER same-side flow terms that include the same actual event, never stock, opposite legs or merely an existing card; retained influx AND full wet closing both remain. Before dataset completion add any actual missing distinct material/species/provider row and its full compatible identity; no defaults.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Read the previously calculated z_i_c; cp_service_vapour
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_service_vapour
- Sources: jrc-ilcd-2010; epa-asbestos-lifecycle-1982


## 7. Allocation and Co-product Handling

This hierarchy is limited to attributional cases requiring multifunctionality resolution; it is supported by ILCD, not industrial manufacturing evidence.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | attributional multifunctionality only | First isolate dedicated operations and real/virtual subdivision, assigning each exclusive exchange to its actual cohort/function. Industrial route literature supplies no allocation factor. | jrc-ilcd-2010 |
| a_causality | remaining shared exchanges | Establish an exchange-specific determining physical causal relationship; neither mass/volume nor economic allocation is a free option. | jrc-ilcd-2010 |
| a_residual | genuinely residual common process | Only after that hierarchy, allocate remaining common-process burdens by contemporaneous market value at the same process gate and actual supply state. Retain basis, prices, quantities, uncertainty and sensitivity; no fixed shares or automatic credit. Physical gross legs stay unchanged. | jrc-ilcd-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

raw_fields collect only unnormalized originals. aggregation_rule labels the target basis; it is not a second operation. Calculation Rules alone own unit conversion, attribution and the single A/Q division.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | finished_sheet | release event | cohort_id; sheet_id; first_release_event; drawing; shape; actual_one_face_area; thickness_map; net_volume; net_mass; moisture; acceptance; disposition; full physical quantities separately from every history vector; ordinary humidity/desorption; X only OTHER same-side actual flow terms, never stocks/opposite legs; actual unauthorized/failed work; sole actual mixed total/origin W subledgers/one owner | Measure traceable actual one-face geometry and calibrated thickness map; integrate area times local thickness. Independently weigh bare product on calibrated scale and reconcile unique first release/tests. Actual gross V is normalized once by this gate Q or original Qc, separately from burden vectors; retain both added water/material influx and wet closing; add real distinct missing species/material rows before dataset completion. | m3; m2; m; kg | each unique first release | complete cohort including zero/rejected events | actual site/cohort/service | per reference flow | geometry calibration; weighing; moisture; actual test and disposition |
| cp_material | manufacture | each actual supplied material | receipt and stock record | cohort_id; exact_formulation_id; supplier; gross; tare; net; carrier_assay; water; constituent_chemistry; opening; closing; inherited_vector; actual_unlisted_flow; full physical quantities separately from every history vector; ordinary humidity/desorption; X only OTHER same-side actual flow terms, never stocks/opposite legs; actual unauthorized/failed work; sole actual mixed total/origin W subledgers/one owner | Retain whole-supply receipts and calibrated weighing with composition and all actual separately purchased materials; track disjoint raw/WIP stock once. Actual gross V is normalized once by this gate Q or original Qc, separately from burden vectors; retain both added water/material influx and wet closing; add real distinct missing species/material rows before dataset completion. | kg | each receipt/batch/stock close | full manufacturing horizon | actual site/cohort/service | per reference flow | supplier inclusions; assay; calibration; stock lineage |
| cp_energy | manufacture | each electricity/heat exchange | meter interval | cohort_id; carrier_identity; meter_start; meter_end; true_rate; elapsed_time; integrated_quantity; raw_unit; heat_state; supplier_inclusions; causal_driver; unused_charge; full physical quantities separately from every history vector; ordinary humidity/desorption; X only OTHER same-side actual flow terms, never stocks/opposite legs; actual unauthorized/failed work; sole actual mixed total/origin W subledgers/one owner | Read each meter and actual utility statement over all operating/nonproductive intervals; integrate only true rates, never an already integrated volume/energy total. Retain carrier mass independently. Actual gross V is normalized once by this gate Q or original Qc, separately from burden vectors; retain both added water/material influx and wet closing; add real distinct missing species/material rows before dataset completion. | kWh; MJ | each meter interval | start/stop/idle/cleanup/failed runs and service horizon | actual site/cohort/service | per reference flow | meter calibration; interval reconciliation; real allocation evidence |
| cp_water | manufacture | each actual water phase/leg | meter and sampling | cohort_id; phase; purpose; inlet; outlet; opening; closing; volume; mass; density; temperature; pressure; enthalpy; supplier_return_agreement; X_in; X_out; full physical quantities separately from every history vector; ordinary humidity/desorption; X only OTHER same-side actual flow terms, never stocks/opposite legs; actual unauthorized/failed work; sole actual mixed total/origin W subledgers/one owner | Meter actual water/steam/return individually; independently sample density/composition/state and reconcile disjoint stocks with actual external return agreements. Actual gross V is normalized once by this gate Q or original Qc, separately from burden vectors; retain both added water/material influx and wet closing; add real distinct missing species/material rows before dataset completion. | m3; kg; MJ | each interval/transfer/stock close | entire manufacturing and FG service horizon | actual site/cohort/service | per reference flow | meters; phase/state assays; supplier mass-energy ownership |
| cp_assets | manufacture | each asset/repair part/fluid | asset and maintenance event | cohort_id; asset_id; configuration; gross_wet_open; gross_wet_close; acquired_article_kg; old_part_kg; new_part_kg; each_fluid_phase; X_in; X_out; actual_service; unused_charge; inherited_vector; full physical quantities separately from every history vector; ordinary humidity/desorption; X only OTHER same-side actual flow terms, never stocks/opposite legs; actual unauthorized/failed work; sole actual mixed total/origin W subledgers/one owner | Weigh or use traceable complete-article mass records for each actual new/old item and wet asset; collect real service/maintenance drivers without assumed life or kg/item. Actual gross V is normalized once by this gate Q or original Qc, separately from burden vectors; retain both added water/material influx and wet closing; add real distinct missing species/material rows before dataset completion. | kg; actual native service unit | each maintenance/acquisition/stock event | full actual asset/service horizon | actual site/cohort/service | per reference flow | configuration and fluid-inclusion ledger; measured service driver |
| cp_waste | manufacture | each separate waste preparation | waste handover and sampling | cohort_id; waste_identity; source_gate; gross; moisture; independent_species; provider; fate; treatment_burden; opening; closing; inherited_vector; full physical quantities separately from every history vector; ordinary humidity/desorption; X only OTHER same-side actual flow terms, never stocks/opposite legs; actual unauthorized/failed work; sole actual mixed total/origin W subledgers/one owner | Weigh each distinct waste wet state, sample composition independently, trace treatment and distinguish retained content from direct releases. Do not deduct ordinary production/treatment burden by sale. Actual gross V is normalized once by this gate Q or original Qc, separately from burden vectors; retain both added water/material influx and wet closing; add real distinct missing species/material rows before dataset completion. | kg; m3 where independently measured | each handover and complete stock census | all failed/rework/cleanup runs | actual site/cohort/service | per reference flow | weighbridge; assays; handover; real treatment model |
| cp_emissions | manufacture | each chemical species and actual outlet | time-resolved species sampling | cohort_id; outlet; actual_compartment; species_CAS; mineral_morphology; phase; true_rate; integrated_volume; concentration; independently_measured_mass; detection_limit; temporal_coverage; full physical quantities separately from every history vector; ordinary humidity/desorption; X only OTHER same-side actual flow terms, never stocks/opposite legs; actual unauthorized/failed work; sole actual mixed total/origin W subledgers/one owner | Independently identify and quantify actual species/morphology/phase with representative measurement; integrated concentration-volume already totals mass once. Keep missed coverage as unknown, not zero. Actual gross V is normalized once by this gate Q or original Qc, separately from burden vectors; retain both added water/material influx and wet closing; add real distinct missing species/material rows before dataset completion. | kg; native observed concentration/volume/time units | each representative event and abnormal interval | all producing/nonproducing releases and actual services | actual site/cohort/service | per reference flow | species method; detection limits; coverage; receiving compartment |
| cp_pack | services | each package with six external legs | packaging custody record | cohort_id; package_material; package_id; P; I; ER; S; EO; W; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; actual_reuse; upstream_owner; inherited_vector; service_horizon; full physical quantities separately from every history vector; ordinary humidity/desorption; X only OTHER same-side actual flow terms, never stocks/opposite legs; actual unauthorized/failed work; sole actual mixed total/origin W subledgers/one owner ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Count/weigh each actual package material and obtain traceable net article mass where counts occur; preserve all six gross legs and disjoint wet stocks plus performed service records. Actual gross V is normalized once by this gate Q or original Qc, separately from burden vectors; retain both added water/material influx and wet closing; add real distinct missing species/material rows before dataset completion.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg; measured article count | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_freight | manufacture | road_freight | shipment record | cohort_id; shipment_id; gross_cargo_mass; actual_distance; mode; vehicle; provider_boundary; package_inclusion; delivered_upstream_owner; full physical quantities separately from every history vector; ordinary humidity/desorption; X only OTHER same-side actual flow terms, never stocks/opposite legs; actual unauthorized/failed work; sole actual mixed total/origin W subledgers/one owner | Use actual shipment weights/distances and vehicle/mode records; check which provider already owns inbound movement and keep each mode separate. Actual gross V is normalized once by this gate Q or original Qc, separately from burden vectors; retain both added water/material influx and wet closing; add real distinct missing species/material rows before dataset completion. | tkm; kg; km | each actual shipment | complete material receipt horizon | actual site/cohort/service | per reference flow | waybill; measured load; route; no duplicate provider |
| cp_film_i | manufacture | film_i | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_film_er | services | film_er | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_film_eo | services | film_eo | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_pallet_i | manufacture | pallet_i | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_pallet_er | services | pallet_er | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_pallet_eo | services | pallet_eo | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_paper_i | manufacture | paper_i | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_paper_er | services | paper_er | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_paper_eo | services | paper_eo | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_band_i | manufacture | band_i | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_band_er | services | band_er | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_band_eo | services | band_eo | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_pallet_repair_wood | services | pallet_repair_wood | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_removed_pallet_wood | services | removed_pallet_wood | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_manufacture_humidity | manufacture | manufacture_humidity | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_services_humidity | services | services_humidity | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_service_water | services | service_water | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_service_vapour | services | service_vapour | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_service_effluent | services | service_effluent | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | kg | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |
| cp_service_electricity | services | service_electricity | packaging custody record | unique event/gate/original cohort/H; this row actual single identity/direction/full wet gross V; independent water/species/material subledgers; each raw/WIP/nonWIP wet opening/closing quantity and every exchange-history vector; authorization and actual unauthorized/failed work/posttests/disposition; whole wet P/I constituents and OTHER same-side X overlap ids; separately measured actual mixed total and origin W; one supply/treatment owner; unknowns | Collect only this actual gate/direction undivided raw quantity, with calibrated weighing/meter and independent state/composition evidence, never default density/life. Physical V/Q or actual service V/original Qc remains separate from burden A_i_c/original QcH and occurs once. For actual mixed collection origin W is subledger only, sum=total; only total is an external exchange/treatment, with disjoint exchanges when not mixed. Unknown quantity/unit/occurrence is not zero. | MJ | each receipt/dispatch/return/waste/stock event | original release cohort through declared observation horizon | actual site/cohort/service | per reference flow | custody reconciliation; gross shipments; included-owner records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_release | finished_sheet | Q = sum of unique new first-release net geometric sheet volume in m3. Integrate actual one-face area with measured local thickness; only verified rectangles use L×W. No new Q from delivery/reinspection/repair-release. Measure whole-sheet net geometric volume at its actual first-release supplied compression/conditioning state. Match complete actual outline, cutouts/through-holes/open voids and local thickness map to the same sheet. Only a verified rectangle uses L×W with actual openings removed; nonrectangular shapes require actual drawing/measurement integration, not a bounding box. Exclude inter-sheet/package gaps; do not subtract unmeasured microscopic porosity or use true mineral density to replace geometric m3. Independently weigh full net kg and moisture, retaining actual SBR/constituents, with no thickness, compression-test load, density or kg/m3 default. | cp_release; cohort_id | Q |  |
| calc_units | all inventory rows | Convert each raw numerator to its own declared extensive property/unit before attribution: electricity1kWh=3.6MJ exactly; kg remains kg; actual m3 remains m3. Only true rate integrates over time. Measured paired mass/volume/geometry, state and configuration are required for any density/area/count conversion; native secondary factors are not factory measurements. | raw_numerator; raw_unit; measured_state | converted_raw_numerator |  |
| calc_attribution | all inventory rows | For each exchange i and cohort c retain gross physical X legs independently of burden assignment. Determine A_i_c from dedicated/causal/residual assignments and the mutually exclusive inherited opening plus current burden less eligible closing/actual justified other-cohort handover. Correct stock once; manufacturing closing excludes first-released FG. Ordinary scrap, failure, samples, waste treatment or sales do not create a deductible T_other. Whole acquisition/provider vectors and their service vectors are linked views, never additive duplicate upstream purchases. For EVERY raw/WIP/nonWIP stock (assets, installed fluids/tools/parts/packaging), keep full wet physical opening/closing quantities AND every exchange-history vector; stock quantity is not its burden vector, and already-net consumption is not stock-corrected again. Original first Q includes released retained FG; preserve all failure/Q0/start-stop/idle/cleanup/test/rework/treatment burdens, without automatic T_other from waste sales/destination. Actually performed service always uses original Qc (the existing formula original cohort Q) and observed H, even for held FG; ONLY unused/unassigned service carries. Internal FG transfer is a gate/ledger event cancelled once in consolidation, not a new environmental exchange or second Q; original gross dispatch and actual changed wet return are independent. | converted_raw_numerator; inherited_vectors; allocation_decision; cohort_id | A_i_c | jrc-ilcd-2010 |
| calc_normalize_once | all inventory rows | When Q>0, z_i_c = A_i_c / Q exactly once. Manufacturing uses its own new first-release Q; each incremental post-release service uses the original cohort Q and declared horizon. Cards and aggregation only read z_i_c, without dividing again. Preserve actual raw burdens/stocks for Q=0 and emit no unit result. Physical gross legs are never reduced by economic/causal burden fractions. For ledger-only physical FG/package/waste/asset/thermal-carrier legs, z_i_c uses full gross V_i/Q (original Qc for service), stored separately from A_i_c/A_service and every inherited manufacture/service vector. Gross physical numerators never use a stock-burden difference, net shipment, economic/causal share or old manufacturing history addition; no second acquisition/treatment charge or credit. Divide once by the original denominator and retain actual service burdens independently. Manufacturing thermal-carrier incoming/return kg/actual state/enthalpy uses V/Q; only service increments use original QcH. Heat MJ and carrier kg/actual condensate/hot-water Product returns share ONE supplier boundary and ONE burden owner. If actual hot-water heating exists add its real paired Product rows before completion, not cooling-water or environmental-release substitutes; return gives no negative water/heat credit. | A_i_c; Q; cohort_id; service_horizon | z_i_c |  |
| calc_physical | all physical gates | For each nonoverlapping gate reconcile opening full wet mass + actual external influx = closing full wet mass + actual external outflux + independently established transformation. Cancel internal transfers only. Each repair-water X term de-duplicates only another influx/outflux term that includes it, never closing stocks. Keep relevant elements and actual species/reaction water independent. For ledger-only physical FG/package/waste/asset/thermal-carrier legs, z_i_c uses full gross V_i/Q (original Qc for service), stored separately from A_i_c/A_service and every inherited manufacture/service vector. Gross physical numerators never use a stock-burden difference, net shipment, economic/causal share or old manufacturing history addition; no second acquisition/treatment charge or credit. Divide once by the original denominator and retain actual service burdens independently. Manufacturing thermal-carrier incoming/return kg/actual state/enthalpy uses V/Q; only service increments use original QcH. Heat MJ and carrier kg/actual condensate/hot-water Product returns share ONE supplier boundary and ONE burden owner. If actual hot-water heating exists add its real paired Product rows before completion, not cooling-water or environmental-release substitutes; return gives no negative water/heat credit. | physical_stocks; gross_influx; gross_outflux; independent_species | physical_gate_balance |  |
| calc_packages | each package article | Opening + P + I + ER + X_in = closing + S + EO + W + X_out for each actual package, preserving the disjoint attached/empty/reusable categories. first non-purchased external ingress keeps physical mass and one upstream owner. Internal reuse cancels; actual new material/water remaining at closing retains both influx and full closing wet stock. X_in/X_out covers only independently measured actual added/removed water/parts/material not already in OTHER same-side flow terms, never stocks, opposite legs or merely because a card exists. Whole wet P/I once; retained additions keep real influx AND full wet closing. Cover ordinary storage/handling humidity uptake/desorption and actual cleaning, not only repair. Unknown occurrence/species/amount is not zero; presume no repair, dry wood, species or life. Separate actual new/old wood/parts and liquid water/humidity/vapour; held FG and distinct repair-WIP stocks are disjoint once. Each pool has actual P/I/ER/S/EO/W cards and protocols. W cards are external exchanges ONLY for actually separately collected disjoint streams. If there is ONE real mixed collection outlet, name ONE specific mixed Waste exchange from its actual composition/state/destination before dataset completion, with ONE treatment provider; each material W is then an independently measured protocol origin subledger whose sum equals the separately measured total, never total plus origin cards/another Waste. Do not presume mixing or invent a second outlet. | cp_pack; P; I; ER; S; EO; W; X_in; X_out | package_balance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all bound and unbound flows | Retain exact mineral/form/supply composition, each adopted native restriction and all actual separately procured/prepared exchanges; missing auxiliary UUID is not permission to omit an exchange. | supplier/formulation/state and native evidence |
| dq_release | finished_sheet | Retain real drawing/shape, independent volume/area/thickness/mass/moisture calibration, actual acceptance/test evidence and unique cohort. Volume is a declared amount, not an equivalent lifetime/sealing function. | cp_release records and scope |
| dq_completeness | all gates | Report entire failed/zero-output/idle/cleanup/rework periods, all inherited vectors, packages/repairs/fluids and missing species/detection coverage. No assumed zero, default yield, credit or buried other category. | raw reconciliations and uncertainty register |
| dq_time | manufacturing and services | State actual site/time/source age and service observation horizon; historical process evidence is not proof of current market/legal/health/quality status. Preserve privacy-free scientific records and uncertainties. | source scope plus actual site/service records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference and all bound rows | Apply every complete card restriction, mineral/CAS/form/supply-state/route/geography/media/type and all native properties. Taxonomy anomaly does not waive a hard physical conflict. Unconfirmed core finished-article UUID is an identity hold: retain draft/unmapped/unusable. Ordinary auxiliary/provider gaps remain explicit without inventing absence. |  |
| v_measurement | all inventory rows | Reference output is exactly finished_sheet with1m3; bilingual Q and every numerator unit agree. Preserve raw unnormalized records; invoke calc_normalize_once once after unit conversion/attribution. Cards and aggregation read the same result. Q0 keeps actual burdens without a unit result. |  |
| v_geometry | finished-sheet geometry | Use actual one-face projected area, actual thickness map and traceable geometry to obtain net geometric volume. L×W only for verified rectangles; bounding boxes, two faces and packaging air voids are not sheet area/volume. Independently weigh net product and measure conditioning/moisture; do not infer density, kg/item, yield or life from secondary native properties. |  |
| v_complete | all gates and services | Reconcile all gross inputs/outputs and disjoint stocks with per-exchange vectors, packaging P/I/ER/S/EO/W, repair-water X and complete failed/zero-output loads. Retain ordinary manufacturing waste/test/reject treatment burdens despite sale/transfer. Only a demonstrated other cohort/function plus justified allocation/handover can transfer a burden vector once. |  |
| v_evidence | actual dataset completion | Check actual source applicability and raw measurement/test records, detection coverage, treatment boundaries and unresolved identities. A structural/schema/finite measurement pass does not establish factory performance, scientific/translation approval, mapping or publication. Unknown core scope/method remains a true hold. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Identified whole jointing-sheet input for subsequent declared gasket fabrication, with complete route and service context |
| allowed_use | Declared attributional factory first-release production plus separately disclosed real services; no equivalent life or performance claim |
| excluded_use | Exclude other asbestos minerals, loose mineral product, asbestos textile/rope, beater-add paper, cement/fibre-cement articles, non-asbestos modern fibre sheets, friction parts, metal-reinforced/jacketed gaskets, installation/use, contaminated used articles as substitute raw feed, and purchased finished-sheet repacking or downstream cut-gasket fabrication. A changed coating/reinforcement/material/route needs new applicability and complete exchanges. |
| required_metadata | Actual site geography and observation period; Chrysotile mineral CAS12001-29-5 and fibre morphology; Whole SBR formulation supplier and delivered carrier/assay inclusions; Separate actual onsite-compounded purchases where applicable; Unreinforced uncoated sheet supply state and drawing revision; Actual mixing/calendering/solvent removal/curing route without prescribed settings; Independent net geometric volume and one-face area with measured thickness map; Independent net mass and conditioning/moisture scope; First-release event and actual test/acceptance/disposition records; Disjoint raw/WIP/FG/non-WIP stocks and per-exchange inherited vectors; Original-cohort service horizon and complete performed services; Whole package six-leg balances and supplier-included owner; Native pad37570 taxonomy anomaly and Volume-only reference; Native electricity CN user-side grid below1kV when bound; Actual pollutant species morphology phase compartment and detection coverage; Full native restrictions in every adopted-flow description |
| required_quality_disclosure | Actual coverage/uncertainty/unresolved identities, historical source limitations, and all native restrictions |
| update_trigger | Changed mineral/binder/coating/reinforcement, route, geometry/release basis, geography/provider, new actual flow or source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Ver.3.0 Explanatory Notes 30June2025 pp185–186; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification context only;37920 and neighbouring37570 titles have no detailed inclusion/exclusion bullets here; no methodology or acceptance inferred. |
| epa-asbestos-lifecycle-1982 | literature | Cogley et al., GCA for US EPA, Life Cycle of Asbestos in Commercial and Industrial Use Including Estimates of Releases to Air Water and Land, February1982, section9 pp171–186, Figs21–23; https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P100TZ2B.PDF | Historical primary calendered-sheet process and waste/secondary-fabricator distinctions; not an allocation factor or current-site quantitative default. |
| sigma-jointing-sheets | literature | New Era Industries / SIGMA, Jointing Sheets, undated full manufacturer page; https://www.sigma100.com/jointing-sheet.html | Actual chrysotile/SBR whole sheet product;540Super versus540NA and other binder/reinforcement countercontext, without transferring operating/performance claims. |
| jrc-ilcd-2010 | handbook | EC JRC, ILCD Handbook General Guide for LCA Detailed Guidance, first edition March2010, sections7.9.2–7.9.3 pp255–268; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional cases requiring allocation: subdivision, exchange-specific determining physical causality, then genuinely residual condition/gate-matched market value. Own foreground protocols supply measurements, not industrial-report allocation factors. |
