---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.seats-primarily-with-wooden-frames
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Unupholstered beech-frame chair manufacture

## 1. Scope and Applicability

This attributional method covers complete manufacture of a new unupholstered indoor four-legged chair with machined kiln-dried solid beech frame, purchased formed beech-plywood seat and backrest, actual dowelled/glued/screwed joints, qualified one-component aqueous PVAc glue and waterborne clear furniture lacquer, through the unique first finished-whole-chair quality release. Receive real stock and supplied components; cut and machine joints, dry-fit, bond/clamp, sand, apply actual finish with intermediate sanding/drying as qualified, assemble hardware/glides and inspect. Actual production sequence follows the approved drawing and supplier instructions; neither purchasing finished chairs for repacking nor releasing a bare frame satisfies this gate. Sources: `a2s-chair-catalogue`; `cegim-beech-production`; `konar-chair-joinery`; `kleiberit-pvac-303`; `adler-unistar-2965`.

The evidence is a transparent technical synthesis. A2S proves a complete unupholstered beech-frame/multiplex-seat/back product, not its unseen factory recipe; CEGIM proves industrial beech machining/sanding/press assembly/waterborne finishing; KONAR distinguishes bare frames, complete wooden chairs and glued mortise-tenon joints. The adhesive/coating manufacturers provide qualified technology examples, not a common current order, exact chair SKU or default recipe. The coating source separates normal-stress 1K from high-stress 2K use; actual chair suitability and acceptance must be established, never inferred from a furniture label. A2S size-specific catalog mass, source coating rates/temperatures/times and handbook densities are not PCR defaults.

Exclude upholstered seating, solid-wood-only seat/back routes without a reviewed component boundary, metal-frame chairs, bentwood/steam-bent frame manufacture, rotomoulded/plastic/rattan chairs, wheelchairs, swivel/reclining mechanisms, bare frames, single seat panels, onsite veneer/plywood manufacture, onsite sawmill/kiln/log conversion, two-component/reactive adhesive/coating, pigmented stain systems and onsite combustion or purchased steam/heat. Those routes need actual additional transformations and atomic exchanges before use. Supplier forestry, sawmilling, drying and formed-panel bonding burdens remain upstream and are not excluded from the product system. Packing/warehouse/handling/dispatch/returns are an actual original-cohort service account with its own observed horizon; no use-phase seating lifetime or service equivalence is asserted.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.seats-primarily-with-wooden-frames |
| classification_refs | CPC 3.0 38112; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38112.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | New unupholstered four-legged machined beech-frame chair; formed beech-plywood seat/back; actual approved 1K glue/clear finish |
| excluded_products | Upholstered/bentwood/metal/plastic chairs; frames/components alone; onsite log/kiln/plywood; 2K/reactive/pigmented finish and combustion routes |
| representative_product | Complete indoor beech-frame chair with shaped multiplex seat/back; actual drawing and normal-stress finish suitability declared |
| production_route | Dried stock and supplied formed seat/back → saw/CNC/joint preparation → glue/clamp/sand → qualified clear finish/dry/intercoat sanding → final assembly/test → first release |
| market_state | First quality-released complete chair at manufacturing gate; separate actual original-cohort factory-gate services |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one declared configuration of complete indoor seating |
| How much | 1 kg reference flow |
| How well | Actual approved drawing, complete BOM, joint/finish suitability, dimensional/stability/strength and surface acceptance; no universal load threshold or certification |
| How long or cycle | One manufacture and unique first-release cycle; no prescribed seating life |
| reference_flow_link | `finished_chair` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Seats, primarily with wooden frames `5ac0b7a3-ea7c-42cb-b70c-32608f90e4e2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Complete chair configuration/drawing; Fagus species and legal declared origin; untreated dried stock gate; wood moisture and wet/dry basis; formed seat and back layup/binder/geometry/supplier; joint/dowel/screw BOM; whole glue formulation and supplier qualification; whole clear lacquer formulation and 1K application permission; actual layer/airless/drying sequence; actual glides; net whole-chair mass and calibration; unique first-release cohort and gate; actual performance tests and disposition; upstream forestry/sawmill/kiln/panel/transport ownership; each packaging article six legs; asset/water/air/carbon state; site/time/provider; service horizon and original Q_H |

Declare all qualifiers in the foreground package. The broad manufactured wooden-seat UUID is narrowed by the complete finished_chair description, not by its classification alone. Native Mass/kg is the reference. If collection counts chairs, weigh each same-configuration net whole chair on a calibrated scale excluding packaging and sum its measured mass; do not use a catalog kg/item, secondary property, bounding area or density. Number of items and Item(s)/item, when genuinely native to a different exchange, are equivalent count units with factor 1, never a kg conversion.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q = sum of measured net whole-chair kg uniquely first quality-released for this configuration/cohort; use cp_release. Closing first-released FG already belongs to Q and cannot be deducted as manufacturing B_close or counted as a second product. |
| wood_water | beech_stock; seat_panel; back_panel; waste wood | Mass | kg | Measure wet mass and independent dry-basis moisture u=(wet-dry)/dry; dry wood=wet/(1+u) only after excluding binder/coating/hardware. Carrier water, cell-wall sorbed/free water, chemically structural water and reaction water have distinct evidence; one residual cannot fit two unknowns. |
| extensive_units | all inventory rows | Native extensive property for each exchange | kg / MJ / t*km | Mass applies only to mass exchanges. Keep energy as electrical MJ, freight in actual tonne-km, and original meter units. Convert cumulative kWh by 3.6 MJ/kWh before allocation. Only a real rate is integrated over time; cumulative volume is not multiplied by time again. Density requires independent measurement of that substance at the stated condition. |
| gross_event_units | each packaging/asset/air gross card | Mass | kg | Each gross-event numerator is the actual complete external gross leg V, not B_open+U-B_close or a burden share. Preserve full wet stock and real new influx simultaneously; stock retention never cancels incoming physical mass. Burden ownership is a separate dimension. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated kiln-dried beech stock and supplied formed beech plywood seat/back, complete supplied glue/clear finish, actual screw/dowel/glide at receiving gate |
| starting_condition_role | secondary_manufacturing |
| product_classification_scope | Narrow physical subset of CPC 3.0 38112; no accepted mapping inferred |
| recursive_input_rule | Purchased complete chairs are separately identified burden-bearing inputs and cannot replace manufacture or generate a new first release; internal matching chair handovers cancel when consolidating |
| upstream_dataset_requirement | Retain actual forestry/sawmill/drying and formed-panel veneer/binder/forming burdens; match species/origin/moisture/route/gate/provider and transport once, including supplier-included packaging ingress |
| disclosure | Actual supply and onsite split, all raw/WIP stores, first-release FG, failures/zero output, upstream owners, real services H, and each unresolved exchange/provider |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | complete product system | Include ordered manufacturing stages, real internal transports, rejects/tests/rework before release, start/stop/idle/cleanup, actual controls and service increments. Supplier-manufactured stock/components do not have zero forestry/drying/binder burden; no duplicated constituent procurement of whole supplied preparations. | `a2s-chair-catalogue`; `cegim-beech-production`; `kleiberit-pvac-303`; `adler-unistar-2965` |
| boundary_q | manufacturing and FG service | Use first quality release Q; keep first-released closing FG within Q and outside manufacturing B_close. Manufacturing stores cover raw/WIP/unused-unassigned charges only. Preserve performed original-cohort service over horizon H with original Q_H, including held FG/returns. Shipment/reinspection/postwork do not create new production; post-release work needs manufacturer/specification permission, postwork tests, acceptance and actual disposition; do not assume broken chairs can recover. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states. | `jrc-ilcd-attributional-2010` |
| boundary_physical | all physical gates | Reconcile complete manufacturing, FG-service and consolidated gross physical gates, independent of burden allocation. Keep opening/closing raw/WIP/FG, every wet stock and true external legs including repair water/parts; subtract overlap only from another incoming/outgoing term. Newly supplied material/water retained at closing remains both influx and full closing mass. Internal transfers cancel once. Add every real unlisted atom rather than using other/zero or a selector label. Every raw/WIP/non-WIP or unused material store preserves complete physical quantity and each inherited exchange vector separately, including the already-net-consumption flag; no second stock correction to either dimension. | `jrc-ilcd-attributional-2010`; `usda-wood-handbook-2021` |
| boundary_carbon_water | wood/coating/air/water | Keep dry wood, glue/coating solids, biogenic wood carbon, fossil formulation carbon and ambient carbon independently measured/sourced. Forestry carbon uptake remains with its upstream owner, never a second foreground CO2 credit. Distinguish free/sorbed water, carrier water, chemical structural water and independently evidenced reaction water. Total VOC/COD/TOC/dust and carbon balances cannot invent molecular species or a stoichiometric reaction. Water balance and relevant elements must be independently constrained; no default oxidation or reaction water. | `usda-wood-handbook-2021` |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | jrc-ilcd-attributional-2010 |

## 6. Process Inventory Structure

All cards retain their full descriptions and §§1/3/4/5/7/8/9 conditions. A conditional exchange may be absent only with evidence; ordinary missing UUIDs do not mean zero physical flow. One whole supply preparation/article is procured once. Field labels and machine identifiers preserve parser-supported spelling. Gross physical cards explicitly use V_gross in calc_quotient; only the separate burden dimension uses calc_manufacturing/calc_service/calc_asset.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete chair manufacture and first release | required | Declared stock/component route | foreground | Q newly first-released net whole-chair kg |
| gate_service | Original-cohort factory-gate service | conditional | Actual packaging/storage/handling/dispatch and returns | foreground | Original cohort Q_H and observed horizon H; no second product |

### Process: Complete manufacture (`manufacture`)

#### Inputs

##### Product flows

###### Kiln-dried beech sawn stock (`beech_stock`)

One untreated unglued kiln-dried beech sawn-stock supply, thicker than 6 mm, at sawmill. The native species-unspecified hardwood family is narrowed here to declared Fagus species and legal origin; it supplies no species density, moisture target or certified origin. Retain forestry, sawmilling, kiln drying and transport burdens once in compatible upstream stock data. No onsite log conversion, kiln or steaming is inferred. Weigh received wet stock and independently sample moisture.

- Selected flow: Sawnwood, hardwood `43103a96-43df-4f35-ad02-728237b3f815`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### Formed beech plywood seat (`seat_panel`)

One purchased manufactured seat component within the native finished wooden furniture-parts family. Declare its beech veneer layup, formed geometry, binder, moisture, treatment and supplier gate. Supplier peeling/drying/layup/bonding/forming loads remain upstream once; this is neither raw plywood sheet nor the whole chair. Receive uncoated parts for the declared onsite finish; if supplied coated, retain that whole provider burden and remove only the duplicated onsite operation.

- Selected flow: Parts of furniture made from wood `4d818756-c439-4450-856c-b24a32c05185`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### Formed beech plywood backrest (`back_panel`)

One purchased manufactured backrest component within the native finished wooden furniture-parts family. Declare its beech veneer layup, formed geometry, binder, moisture, treatment and supplier gate. Supplier peeling/drying/layup/bonding/forming loads remain upstream once; this is neither raw plywood sheet nor the whole chair. Receive uncoated parts for the declared onsite finish; if supplied coated, retain that whole provider burden and remove only the duplicated onsite operation.

- Selected flow: Parts of furniture made from wood `4d818756-c439-4450-856c-b24a32c05185`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### Manufactured beech furniture dowel (`beech_dowel`)

One purchased machined beech dowel in the broad finished wooden furniture-parts family, for the specified chair joint; specify diameter/length, moisture, any coating and supply gate. Keep dowel manufacture upstream and measured whole wet mass. An onsite dowel cut from beech_stock is an internal transfer, not this external purchase.

- Selected flow: Parts of furniture made from wood `4d818756-c439-4450-856c-b24a32c05185`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### Finished steel chair-assembly screw (`steel_screw`)

Native generic steel auxiliary assembly fastener, production mix at plant GLO. One finished screw type used in the chair BOM, not steel rod stock. Declare alloy, surface finish, geometry and measured net mass or traceable actual same-screw count-to-mass. Split a second screw type into another card; no default zinc coating, kg per screw or strength class.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### Whole supplied felt chair foot glide (`felt_glide`)

Conditional only when a felt floor protector is fitted. One complete supplied glide includes its actual adhesive/backing or fixing pin once; declare fibre composition and complete component mass. Do not buy those included constituents again; split a different polymer glide into its own actual card.

- Selected flow: Whole supplied felt chair foot glide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### Whole one-component aqueous PVAc wood adhesive (`pvac_adhesive`)

One purchased ready-to-use aqueous PVAc formulation for supplier-approved hardwood/dowel joints, as supplied including carrier water, additives and solids. The polymer is polyvinyl acetate, not polyvinyl alcohol. KLEIBERIT demonstrates one-component cold joint bonding but is not asserted as A2S/CEGIM glue. Weigh whole purchased/issued preparation once; water/resin/assay are subaccounts, not second purchases. No hardener, added resin, fixed spread rate or D3/D4 chair certification is implied. A real two-part route requires a separate actual hardener purchase and new reaction/curing evidence.  Native complete definition positively includes the aqueous PVAc emulsion/white-wood-glue product, not only dry resin; use this family only for the actual whole received one-component PVAc aqueous-emulsion wood adhesive, with full carrier water/additives/solids and supplier-approved actual formulation. Reference Mass/kg is this whole received compatible emulsion, never a dry-polymer equivalent. No separately procured resin or implied recipe/grade/performance; if the actual supply is only dry polymer or a chemically different formulation, this whole-glue assignment does not apply. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Polyvinyl acetate `46c91184-28ea-4b2e-a4e7-c07f3f84369b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `kleiberit-pvac-303`; `usda-wood-handbook-2021`

###### Whole one-component waterborne clear furniture lacquer (`waterborne_lacquer`)

One whole purchased ready-to-use clear furniture lacquer, including its water, binder and additives once. ADLER provides an industrial 1K airless-compatible example; its 1K normal-stress application cannot establish suitability for a high-stress chair without actual supplier/manufacturer approval and tests. No same-SKU/factory link, zero VOC, default solids, coating rate, layer thickness, drying time or certification is inferred. Use the actual qualified complete formulation; a 2K crosslinker, stain, UV additive or primer is a distinct actual purchase requiring its own card and evidence.  Full native Wood top-coat explicitly admits water-based and oil-based clear wood finishes; the named waterborne polyurethane is an example, not a universal binder requirement. Narrow this whole Product/Mass/kg family to the actual qualified one-component waterborne clear wood-finish preparation, supplied complete once. Preserve exact binder/solids/carrier/approved multilayer use; a separate primer, oil finish, pigmented paint, 2K hardener or component resin is not silently substituted. Suitability for the actual chair stress/acceptance remains a supplier/manufacturer test gate, not native approval. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Wood top-coat `097bc238-dda4-4296-b6ca-b7c573f7f39d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `adler-unistar-2965`; `a2s-chair-catalogue`; `cegim-beech-production`

###### Added liquid municipal tap water (`tap_water`)

Meter actual separately added municipal treated water for cleaning or supplier-permitted adjustment; native Product water production supply, not untreated surface abstraction. Whole-preparation carrier water is already in adhesive/lacquer and is not purchased again. Native Mass is reference; the secondary volume coefficient is not a measured water density. Include full incoming mass even when water remains in closing stock; match real water supply/treatment gate.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: `kleiberit-pvac-303`; `adler-unistar-2965`

###### Whole aqueous furniture-coating equipment cleaner (`cleaner`)

Conditional only for an actually purchased cleaner such as the supplier-qualified dried-lacquer cleaning preparation. Record the full identified formulation once and any genuinely separately added dilution water in tap_water; do not substitute pure solvent or invent a detergent recipe. Record cleaning losses and spent liquor.

- Selected flow: Whole aqueous furniture-coating equipment cleaner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `adler-unistar-2965`

###### Paper-backed abrasive sheet (`abrasive_paper`)

One supplied paper-backed abrasive sheet for raw-wood or intercoat sanding. The native Product at-plant family sets no grit, abrasive mineral or resin; declare actual paper, abrasive, binder, measured mass and supplier burden. A textile belt or loose grit needs another physical card, not this paper identity.

- Selected flow: Abrasive paper `ba6c99d4-60d9-46a5-9ef5-ca3d0b877d57`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_material.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `adler-unistar-2965`; `cegim-beech-production`

###### Manufacturing electricity to user below 1 kV (`electricity`)

Native low-voltage grid-average consumption mix supplied to user below 1 kV; use only with matching voltage, region/year and supplier-loss boundary. Include saw/CNC, press, sanding, airless pump, extraction, ventilation, actual electric drying/conditioning and utilities including failed/idle/startstop/cleanup runs. If compressed air is internally generated, count its actual compressor electricity here once and keep internal air handovers cancelling; no purchased compressed-air burden is added. This is electrical MJ, not fuel/steam energy.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `cegim-beech-production`; `adler-unistar-2965`

###### Road freight transport of received chair materials (`inbound_road`)

One actual road freight service for external supplies, using measured net transported tonnes and real distance with vehicle/load/return/empty-leg evidence. Supplier-included freight has one owner; do not add it twice. Physical packaging and gross transported mass remain visible separately and are not reduced by economic allocation.

- Selected flow: Road freight transport of received chair materials
- Flow property / unit: Mass*distance / t*km
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_utility.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `jrc-ilcd-attributional-2010`

###### Electric woodworking CNC machining centre (`cnc_asset_in`)

Conditional actual incoming acquisition/return of one complete identified asset. Keep gross measured whole asset mass, attachments, installed fluid and new/old status plus full opening/closing physical stock. Internal relocation is a cancelling ledger transfer, not an external purchase. The physical card uses V_gross in calc_quotient; it never charges a whole machine per kg chair. Attribute only independently measured actual service burden separately through calc_asset with capacity/time and inherited charge; no fixed lifetime or invented mass.

- Selected flow: Electric woodworking CNC machining centre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual cnc_asset_in external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### Electric paper-abrasive wood sanding machine (`sander_asset_in`)

Conditional actual incoming acquisition/return of one complete identified asset. Keep gross measured whole asset mass, attachments, installed fluid and new/old status plus full opening/closing physical stock. Internal relocation is a cancelling ledger transfer, not an external purchase. The physical card uses V_gross in calc_quotient; it never charges a whole machine per kg chair. Attribute only independently measured actual service burden separately through calc_asset with capacity/time and inherited charge; no fixed lifetime or invented mass.

- Selected flow: Electric paper-abrasive wood sanding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual sander_asset_in external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### Hydraulic wooden-chair assembly press (`press_asset_in`)

Conditional actual incoming acquisition/return of one complete identified asset. Keep gross measured whole asset mass, attachments, installed fluid and new/old status plus full opening/closing physical stock. Internal relocation is a cancelling ledger transfer, not an external purchase. The physical card uses V_gross in calc_quotient; it never charges a whole machine per kg chair. Attribute only independently measured actual service burden separately through calc_asset with capacity/time and inherited charge; no fixed lifetime or invented mass.

- Selected flow: Hydraulic wooden-chair assembly press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual press_asset_in external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### Electric airless furniture-coating pump (`sprayer_asset_in`)

Conditional actual incoming acquisition/return of one complete identified asset. Keep gross measured whole asset mass, attachments, installed fluid and new/old status plus full opening/closing physical stock. Internal relocation is a cancelling ledger transfer, not an external purchase. The physical card uses V_gross in calc_quotient; it never charges a whole machine per kg chair. Attribute only independently measured actual service burden separately through calc_asset with capacity/time and inherited charge; no fixed lifetime or invented mass.

- Selected flow: Electric airless furniture-coating pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual sprayer_asset_in external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### Wood-dust extraction fan and housing (`extractor_asset_in`)

Conditional actual incoming acquisition/return of one complete identified asset. Keep gross measured whole asset mass, attachments, installed fluid and new/old status plus full opening/closing physical stock. Internal relocation is a cancelling ledger transfer, not an external purchase. The physical card uses V_gross in calc_quotient; it never charges a whole machine per kg chair. Attribute only independently measured actual service burden separately through calc_asset with capacity/time and inherited charge; no fixed lifetime or invented mass.

- Selected flow: Wood-dust extraction fan and housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual extractor_asset_in external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### Woodworking carbide cutting insert (`cutter_in`)

Actual complete incoming insert for the stated cutter; distinguish wear consumption from installed stock and regrinding. Record actual carbide/binder composition and whole mass, not a generic metal-machining wear coefficient. Physical gross events use V_gross; real upstream/service burden is attributed once separately by calc_asset.

- Selected flow: Woodworking carbide cutting insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual cutter_in external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### Complete steel spindle bearing (`bearing_in`)

Actual complete new or refurbished bearing, with alloy, grease/seals and wet mass declared. Retained new inflow is not erased because the part remains installed at closing. Physical gross events use V_gross; real upstream/service burden is attributed once separately by calc_asset.

- Selected flow: Complete steel spindle bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual bearing_in external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### Whole hydraulic press oil (`hydraulic_oil_in`)

One actual whole supplied hydraulic fluid, grade and additives declared; weigh net additions and installed/opening/closing fluid. Use its independently measured density if converted from cumulative volume, not the native secondary coefficient of another product. Physical gross events use V_gross; real upstream/service burden is attributed once separately by calc_asset.

- Selected flow: Whole hydraulic press oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual hydraulic_oil_in external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### Whole polyester wood-dust collector bag (`filter_in`)

Conditional actual polyester collector bag, with seam/support/coating identified and whole net mass; another filter medium requires a separate actual card. Keep packaging and retained dust separate subaccounts. Physical gross events use V_gross; real upstream/service burden is attributed once separately by calc_asset.

- Selected flow: Whole polyester wood-dust collector bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual filter_in external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### Electric woodworking CNC machining centre (`cnc_asset_charge`)

Burden-only companion of the same identified physical electric woodworking cnc machining centre. This is not another external physical input or procurement: its gross arrival/removal is reported only by the matching gross cards. The numerator is the documented same-unit charge of upstream manufacture/maintenance and actual disposal actually used by this cohort after independent service/capacity measurement and justified allocation, with inherited charge and unused/unassigned remainder. Physical stock including in-place fluids remains whole; no fixed service life or full machine per kg. No duplicate upstream owner. Raw service time/capacity is the driver, not an assumed mass conversion.

- Selected flow: Electric woodworking CNC machining centre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`

###### Electric paper-abrasive wood sanding machine (`sander_asset_charge`)

Burden-only companion of the same identified physical electric paper-abrasive wood sanding machine. This is not another external physical input or procurement: its gross arrival/removal is reported only by the matching gross cards. The numerator is the documented same-unit charge of upstream manufacture/maintenance and actual disposal actually used by this cohort after independent service/capacity measurement and justified allocation, with inherited charge and unused/unassigned remainder. Physical stock including in-place fluids remains whole; no fixed service life or full machine per kg. No duplicate upstream owner. Raw service time/capacity is the driver, not an assumed mass conversion.

- Selected flow: Electric paper-abrasive wood sanding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`

###### Hydraulic wooden-chair assembly press (`press_asset_charge`)

Burden-only companion of the same identified physical hydraulic wooden-chair assembly press. This is not another external physical input or procurement: its gross arrival/removal is reported only by the matching gross cards. The numerator is the documented same-unit charge of upstream manufacture/maintenance and actual disposal actually used by this cohort after independent service/capacity measurement and justified allocation, with inherited charge and unused/unassigned remainder. Physical stock including in-place fluids remains whole; no fixed service life or full machine per kg. No duplicate upstream owner. Raw service time/capacity is the driver, not an assumed mass conversion.

- Selected flow: Hydraulic wooden-chair assembly press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`

###### Electric airless furniture-coating pump (`sprayer_asset_charge`)

Burden-only companion of the same identified physical electric airless furniture-coating pump. This is not another external physical input or procurement: its gross arrival/removal is reported only by the matching gross cards. The numerator is the documented same-unit charge of upstream manufacture/maintenance and actual disposal actually used by this cohort after independent service/capacity measurement and justified allocation, with inherited charge and unused/unassigned remainder. Physical stock including in-place fluids remains whole; no fixed service life or full machine per kg. No duplicate upstream owner. Raw service time/capacity is the driver, not an assumed mass conversion.

- Selected flow: Electric airless furniture-coating pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`

###### Wood-dust extraction fan and housing (`extractor_asset_charge`)

Burden-only companion of the same identified physical wood-dust extraction fan and housing. This is not another external physical input or procurement: its gross arrival/removal is reported only by the matching gross cards. The numerator is the documented same-unit charge of upstream manufacture/maintenance and actual disposal actually used by this cohort after independent service/capacity measurement and justified allocation, with inherited charge and unused/unassigned remainder. Physical stock including in-place fluids remains whole; no fixed service life or full machine per kg. No duplicate upstream owner. Raw service time/capacity is the driver, not an assumed mass conversion.

- Selected flow: Wood-dust extraction fan and housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`

###### Woodworking carbide cutting insert (`cutter_charge`)

Burden-only companion of the same identified physical woodworking carbide cutting insert. This is not another external physical input or procurement: its gross arrival/removal is reported only by the matching gross cards. The numerator is the documented same-unit charge of upstream manufacture/maintenance and actual disposal actually used by this cohort after independent service/capacity measurement and justified allocation, with inherited charge and unused/unassigned remainder. Physical stock including in-place fluids remains whole; no fixed service life or full machine per kg. No duplicate upstream owner. Raw service time/capacity is the driver, not an assumed mass conversion.

- Selected flow: Woodworking carbide cutting insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`

###### Complete steel spindle bearing (`bearing_charge`)

Burden-only companion of the same identified physical complete steel spindle bearing. This is not another external physical input or procurement: its gross arrival/removal is reported only by the matching gross cards. The numerator is the documented same-unit charge of upstream manufacture/maintenance and actual disposal actually used by this cohort after independent service/capacity measurement and justified allocation, with inherited charge and unused/unassigned remainder. Physical stock including in-place fluids remains whole; no fixed service life or full machine per kg. No duplicate upstream owner. Raw service time/capacity is the driver, not an assumed mass conversion.

- Selected flow: Complete steel spindle bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`

###### Whole hydraulic press oil (`hydraulic_oil_charge`)

Burden-only companion of the same identified physical whole hydraulic press oil. This is not another external physical input or procurement: its gross arrival/removal is reported only by the matching gross cards. The numerator is the documented same-unit charge of upstream manufacture/maintenance and actual disposal actually used by this cohort after independent service/capacity measurement and justified allocation, with inherited charge and unused/unassigned remainder. Physical stock including in-place fluids remains whole; no fixed service life or full machine per kg. No duplicate upstream owner. Raw service time/capacity is the driver, not an assumed mass conversion.

- Selected flow: Whole hydraulic press oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`

###### Whole polyester wood-dust collector bag (`filter_charge`)

Burden-only companion of the same identified physical whole polyester wood-dust collector bag. This is not another external physical input or procurement: its gross arrival/removal is reported only by the matching gross cards. The numerator is the documented same-unit charge of upstream manufacture/maintenance and actual disposal actually used by this cohort after independent service/capacity measurement and justified allocation, with inherited charge and unused/unassigned remainder. Physical stock including in-place fluids remains whole; no fixed service life or full machine per kg. No duplicate upstream owner. Raw service time/capacity is the driver, not an assumed mass conversion.

- Selected flow: Whole polyester wood-dust collector bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of uncoated beech offcut (`offcut_treatment`)

One actual treatment service for the specific uncoated beech offcut stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of uncoated beech offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of uncoated beech planer shaving (`shavings_treatment`)

One actual treatment service for the specific uncoated beech planer shaving stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of uncoated beech planer shaving
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of uncoated beech sawdust waste (`sawdust_treatment`)

One actual treatment service for the specific uncoated beech sawdust waste stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of uncoated beech sawdust waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of collected uncoated beech sanding dust (`raw_sanding_dust_treatment`)

One actual treatment service for the specific collected uncoated beech sanding dust stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of collected uncoated beech sanding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of collected beech-plywood machining dust (`panel_dust_treatment`)

One actual treatment service for the specific collected beech-plywood machining dust stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of collected beech-plywood machining dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of collected lacquered-wood intercoat sanding dust (`coated_dust_treatment`)

One actual treatment service for the specific collected lacquered-wood intercoat sanding dust stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of collected lacquered-wood intercoat sanding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of unreleased rejected complete beech-frame chair (`reject_chair_treatment`)

One actual treatment service for the specific unreleased rejected complete beech-frame chair stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of unreleased rejected complete beech-frame chair
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of waste whole aqueous pvac wood adhesive (`waste_adhesive_treatment`)

One actual treatment service for the specific waste whole aqueous pvac wood adhesive stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of waste whole aqueous pvac wood adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of waste waterborne lacquer preparation (`waste_lacquer_treatment`)

One actual treatment service for the specific waste waterborne lacquer preparation stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of waste waterborne lacquer preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of spent aqueous adhesive-equipment wash liquor (`wash_liquor_treatment`)

One actual treatment service for the specific spent aqueous adhesive-equipment wash liquor stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of spent aqueous adhesive-equipment wash liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of spent aqueous lacquer-equipment wash liquor (`paint_wash_liquor_treatment`)

One actual treatment service for the specific spent aqueous lacquer-equipment wash liquor stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of spent aqueous lacquer-equipment wash liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Treatment of separated wet waterborne-lacquer sludge (`paint_sludge_treatment`)

One actual treatment service for the specific separated wet waterborne-lacquer sludge stream; collect gross wet kg and real provider/operation separately from its already reported physical waste output. This does not export the waste twice or grant sale/substitution credit. The numerator is the same-stream treatment service actually attributable to this cohort, with measured treatment input basis, destination and burden ownership. No generic disposal recipe or omitted downstream treatment load.

- Selected flow: Treatment of separated wet waterborne-lacquer sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A / Q; A is the attributed manufacturing exchange vector. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `jrc-ilcd-attributional-2010`

###### Liquid municipal water for actual equipment maintenance (`repair_water_in`)

Conditional actual separately metered water for equipment maintenance, excluding any water already contained in a whole incoming machine/fluid or another tap-water event. Record full real influx and full retained closing wet stock simultaneously; only overlap with another incoming term is removed. This card reports complete physical V; its actual supply/service charge is assigned once by cp_asset, not a new water purchase for the same event.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual repair_water_in external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`

##### Elementary flows

###### Nitrogen (`air_n2_in`)

Actual gross incoming ambient Nitrogen gas, CAS 7727-37-9, in the measured ventilation/control stream. Use measured composition and cumulative gas volume or integrate a true rate once at actual dry/wet temperature/pressure; do not add an aggregate-air purchase/emission or infer a net emission from this gross leg. Preserve ambient versus wood-biogenic versus fossil-coating carbon subaccounts where relevant. This gross physical V is not a manufacturing/service burden vector and is never stock-corrected or economically scaled. Molecular N2 CAS7727-37-9, Mass/kg Resource from air, not emissions, liquid/purchased nitrogen or nitrous oxide.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual air_n2_in external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### Oxygen (`air_o2_in`)

Actual gross incoming ambient Oxygen gas, CAS 7782-44-7, in the measured ventilation/control stream. Use measured composition and cumulative gas volume or integrate a true rate once at actual dry/wet temperature/pressure; do not add an aggregate-air purchase/emission or infer a net emission from this gross leg. Preserve ambient versus wood-biogenic versus fossil-coating carbon subaccounts where relevant. This gross physical V is not a manufacturing/service burden vector and is never stock-corrected or economically scaled. Molecular O2 CAS7782-44-7, Mass/kg Resource from air; noisy liquid/singlet/ion aliases do not identify a purchased cylinder or another phase.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual air_o2_in external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### Argon (`air_ar_in`)

Actual gross incoming ambient Argon gas, CAS 7440-37-1, in the measured ventilation/control stream. Use measured composition and cumulative gas volume or integrate a true rate once at actual dry/wet temperature/pressure; do not add an aggregate-air purchase/emission or infer a net emission from this gross leg. Preserve ambient versus wood-biogenic versus fossil-coating carbon subaccounts where relevant. This gross physical V is not a manufacturing/service burden vector and is never stock-corrected or economically scaled. Ordinary stable Ar CAS7440-37-1, Mass/kg Resource from air; not Ar41 radioactivity, a Product purchase or air emission.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual air_ar_in external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### Carbon dioxide (`air_co2_in`)

Actual gross incoming ambient Carbon dioxide gas, CAS 124-38-9, in the measured ventilation/control stream. Use measured composition and cumulative gas volume or integrate a true rate once at actual dry/wet temperature/pressure; do not add an aggregate-air purchase/emission or infer a net emission from this gross leg. Preserve ambient versus wood-biogenic versus fossil-coating carbon subaccounts where relevant. This gross physical V is not a manufacturing/service burden vector and is never stock-corrected or economically scaled.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual air_co2_in external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### Water vapour in incoming ambient air (`air_humidity_in`)

Actual incoming atmospheric humidity, molecular H2O CAS 7732-18-5, measured independently of wood moisture and preparation carrier water; not tap-water purchase. Keep this gross physical influx and its phase/state separate from outgoing vapour.

- Selected flow: Water vapour in incoming ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual air_humidity_in external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `a2s-chair-catalogue`; `usda-wood-handbook-2021`

#### Outputs

##### Product flows

###### First-released complete chair (`finished_chair`)

The native Product is manufactured finished seating primarily with wooden frames, production mix at plant; this PCR narrows it to one unupholstered beech frame chair with formed beech plywood seat/back and actual specified hardware/glides and qualified 1K aqueous glue/clear finish. It is not a bare frame, seat panel, unfinished assembly or metal-frame chair. Measure net whole-chair mass and moisture with cp_release. Q includes the newly first-released chairs remaining in closing FG; only this row is the reference product, once. Packaging and later dispatch do not create a second Q.

- Selected flow: Seats, primarily with wooden frames `5ac0b7a3-ea7c-42cb-b70c-32608f90e4e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### Electric woodworking CNC machining centre (`cnc_asset_out`)

Conditional actual outgoing transfer/removal of one complete identified asset. Keep gross measured whole asset mass, attachments, installed fluid and new/old status plus full opening/closing physical stock. Internal relocation is a cancelling ledger transfer, not an external purchase. The physical card uses V_gross in calc_quotient; it never charges a whole machine per kg chair. Attribute only independently measured actual service burden separately through calc_asset with capacity/time and inherited charge; no fixed lifetime or invented mass. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort.

- Selected flow: Electric woodworking CNC machining centre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual cnc_asset_out external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### Electric paper-abrasive wood sanding machine (`sander_asset_out`)

Conditional actual outgoing transfer/removal of one complete identified asset. Keep gross measured whole asset mass, attachments, installed fluid and new/old status plus full opening/closing physical stock. Internal relocation is a cancelling ledger transfer, not an external purchase. The physical card uses V_gross in calc_quotient; it never charges a whole machine per kg chair. Attribute only independently measured actual service burden separately through calc_asset with capacity/time and inherited charge; no fixed lifetime or invented mass. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort.

- Selected flow: Electric paper-abrasive wood sanding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual sander_asset_out external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### Hydraulic wooden-chair assembly press (`press_asset_out`)

Conditional actual outgoing transfer/removal of one complete identified asset. Keep gross measured whole asset mass, attachments, installed fluid and new/old status plus full opening/closing physical stock. Internal relocation is a cancelling ledger transfer, not an external purchase. The physical card uses V_gross in calc_quotient; it never charges a whole machine per kg chair. Attribute only independently measured actual service burden separately through calc_asset with capacity/time and inherited charge; no fixed lifetime or invented mass. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort.

- Selected flow: Hydraulic wooden-chair assembly press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual press_asset_out external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### Electric airless furniture-coating pump (`sprayer_asset_out`)

Conditional actual outgoing transfer/removal of one complete identified asset. Keep gross measured whole asset mass, attachments, installed fluid and new/old status plus full opening/closing physical stock. Internal relocation is a cancelling ledger transfer, not an external purchase. The physical card uses V_gross in calc_quotient; it never charges a whole machine per kg chair. Attribute only independently measured actual service burden separately through calc_asset with capacity/time and inherited charge; no fixed lifetime or invented mass. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort.

- Selected flow: Electric airless furniture-coating pump
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual sprayer_asset_out external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cegim-beech-production`; `jrc-ilcd-attributional-2010`

###### Wood-dust extraction fan and housing (`extractor_asset_out`)

Conditional actual outgoing transfer/removal of one complete identified asset. Keep gross measured whole asset mass, attachments, installed fluid and new/old status plus full opening/closing physical stock. Internal relocation is a cancelling ledger transfer, not an external purchase. The physical card uses V_gross in calc_quotient; it never charges a whole machine per kg chair. Attribute only independently measured actual service burden separately through calc_asset with capacity/time and inherited charge; no fixed lifetime or invented mass. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort.

- Selected flow: Wood-dust extraction fan and housing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual extractor_asset_out external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cegim-beech-production`; `jrc-ilcd-attributional-2010`

##### Waste flows

###### Uncoated beech offcut (`offcut`)

Clean solid-stock offcut weighed wet with moisture and destination; sale does not remove ordinary manufacturing or treatment burdens. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Uncoated beech offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual offcut external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Uncoated beech planer shaving (`shavings`)

Keep planer shavings separate from sawdust and contaminated coated dust; wet mass and dry wood/water subaccounts, actual recipient and treatment. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Uncoated beech planer shaving
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual shavings external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Uncoated beech sawdust waste (`sawdust`)

Native untreated sawdust Waste at plant for combustion/recovery; use only the actual uncoated beech sawing residue with moisture and verified destination. The native description of fuel/mulch use supplies no automatic substitution credit, co-product status or universal treatment. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual sawdust external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Collected uncoated beech sanding dust (`raw_sanding_dust`)

One collected raw-wood sanding dust stream; distinguish source from formed-panel sanding dust containing cured binder, abrasive wear, filter attachments and stack fugitive emissions. No total-dust-to-elemental-carbon assumption. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Collected uncoated beech sanding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual raw_sanding_dust external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Collected beech-plywood machining dust (`panel_dust`)

Separate manufactured-panel dust with its actual cured-binder content; no untreated-sawdust UUID for this composite residue. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Collected beech-plywood machining dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual panel_dust external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Collected lacquered-wood intercoat sanding dust (`coated_dust`)

One captured wood/cured-coating particulate stream with measured composition, moisture and actual treatment; do not subtract it as a valuable output without a justified other-function handover. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Collected lacquered-wood intercoat sanding dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual coated_dust external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Unreleased rejected complete beech-frame chair (`reject_chair`)

A whole failed chair including actual seat/back/glue/finish/hardware; measure complete wet mass, destination and contained-material subaccounts without second whole-material exports. It is not Q. Samples, breakage and destructive tests remain burden-bearing. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Unreleased rejected complete beech-frame chair
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual reject_chair external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Waste whole aqueous PVAc wood adhesive (`waste_adhesive`)

Collect whole unused/spilled adhesive with water/solids subaccounts, separately from its cleaner and wood residue. No pure-polymer identity or mass equal to dry resin. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Waste whole aqueous PVAc wood adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual waste_adhesive external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Waste waterborne lacquer preparation (`waste_lacquer`)

Native Waste water-based paint/coating residue for treatment or disposal; use only actual collected whole waterborne lacquer residue with contamination, moisture, stage and destination declared. No assumed emission/curing factor or waste-to-product credit. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Waste paint, water-based `3ec596f0-fe78-40d3-be98-8ef4e3cb99e5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual waste_lacquer external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Spent aqueous adhesive-equipment wash liquor (`wash_liquor`)

One whole aqueous wash liquor from adhesive cleanup, including actual dissolved/dispersed glue and water; record wet mass, assay and treatment. Its COD is a test indicator, not a specific organic compound mass. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Spent aqueous adhesive-equipment wash liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual wash_liquor external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Spent aqueous lacquer-equipment wash liquor (`paint_wash_liquor`)

Separate lacquer/cleaner wash liquor, not adhesive wash liquor; trace actual whole wet stream and treatment. Settled sludge and decantate are distinct outputs only when physically separated, with whole/subaccount duplication removed. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Spent aqueous lacquer-equipment wash liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual paint_wash_liquor external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Separated wet waterborne-lacquer sludge (`paint_sludge`)

Conditional physically separated sludge from an actual wet capture/treatment stage; whole moisture and dry solid composition measured. It is not automatically present with dry filtration and is not the same material twice as waste_lacquer/paint_wash_liquor. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Separated wet waterborne-lacquer sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual paint_sludge external gross leg. This is the sole division in section 8; collect raw values with cp_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`; `kleiberit-pvac-303`

###### Spent woodworking carbide cutting insert (`cutter_out`)

Whole removed insert and real wear destinations are reconciled without exporting its worn-away mass twice. Recycling sale grants no default credit. Physical gross events use V_gross; real upstream/service burden is attributed once separately by calc_asset. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Spent woodworking carbide cutting insert
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual cutter_out external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### Removed steel spindle bearing (`bearing_out`)

One removed old bearing with retained grease/seals, actual destination and condition; classify the actual disposal/return, not automatic product resale. Physical gross events use V_gross; real upstream/service burden is attributed once separately by calc_asset. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Removed steel spindle bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual bearing_out external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### Drained spent hydraulic press oil (`hydraulic_oil_out`)

One actual drained whole fluid with contamination/water, spills and installed-retained fluid tracked independently; no subtraction of stock-corrected use twice. Physical gross events use V_gross; real upstream/service burden is attributed once separately by calc_asset. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Drained spent hydraulic press oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual hydraulic_oil_out external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### Spent polyester wood-dust collector bag (`filter_out`)

One removed whole filter bag with measured captured dust/moisture. Dust reported in a separate removed-dust card is excluded only from that overlapping export term, not from the whole wet stock/inflow. Physical gross events use V_gross; real upstream/service burden is attributed once separately by calc_asset. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Spent polyester wood-dust collector bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual filter_out external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### Spent paper-backed abrasive sheet (`spent_paper`)

One spent supplied paper-backed sheet including measured abrasive wear, resin and captured wood/coating dust subaccounts; no duplicate dust export. Physical gross events use V_gross; real upstream/service burden is attributed once separately by calc_asset. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Spent paper-backed abrasive sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual spent_paper external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`; `cegim-beech-production`

###### Spent aqueous woodworking-equipment maintenance liquor (`repair_water_out`)

Conditional actual outgoing whole water-based maintenance liquor with identified oil/dust/cleaner contamination, independent wet mass, assay, destination and treatment. It is not presumed pure returned tap water and not automatically equal to incoming water; remove overlap only with another outgoing event. Retained water remains in complete closing wet stock, not an erased real influx. Its actual handling/treatment burden is assigned once separately. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Spent aqueous woodworking-equipment maintenance liquor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual repair_water_out external gross leg. This is the sole division in section 8; collect raw values with cp_asset.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `jrc-ilcd-attributional-2010`

##### Elementary flows

###### Nitrogen (`air_n2_out`)

Actual gross outgoing exhaust Nitrogen gas, CAS 7727-37-9, in the measured ventilation/control stream. Use measured composition and cumulative gas volume or integrate a true rate once at actual dry/wet temperature/pressure; do not add an aggregate-air purchase/emission or infer a net emission from this gross leg. Preserve ambient versus wood-biogenic versus fossil-coating carbon subaccounts where relevant. This gross physical V is not a manufacturing/service burden vector and is never stock-corrected or economically scaled. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. Molecular N2 CAS7727-37-9, Mass/kg current unspecified-air emission; not Resource, long-term, indoor-only, NOx/N2O or liquid. Gross pass-through and true net environmental change remain separate.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual air_n2_out external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### Oxygen (`air_o2_out`)

Actual gross outgoing exhaust Oxygen gas, CAS 7782-44-7, in the measured ventilation/control stream. Use measured composition and cumulative gas volume or integrate a true rate once at actual dry/wet temperature/pressure; do not add an aggregate-air purchase/emission or infer a net emission from this gross leg. Preserve ambient versus wood-biogenic versus fossil-coating carbon subaccounts where relevant. This gross physical V is not a manufacturing/service burden vector and is never stock-corrected or economically scaled. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. Molecular O2 CAS7782-44-7, Mass/kg current unspecified-air emission, not Resource, liquid Product, ion or another medium; no net generation from a gross pass-through.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual air_o2_out external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### Argon (`air_ar_out`)

Actual gross outgoing exhaust Argon gas, CAS 7440-37-1, in the measured ventilation/control stream. Use measured composition and cumulative gas volume or integrate a true rate once at actual dry/wet temperature/pressure; do not add an aggregate-air purchase/emission or infer a net emission from this gross leg. Preserve ambient versus wood-biogenic versus fossil-coating carbon subaccounts where relevant. This gross physical V is not a manufacturing/service burden vector and is never stock-corrected or economically scaled. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. Ordinary stable Ar CAS7440-37-1, Mass/kg current unspecified-air emission; not radioactivity, Resource, long-term or water/soil.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual air_ar_out external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### Carbon dioxide (`air_co2_out`)

Actual gross outgoing exhaust Carbon dioxide gas, CAS 124-38-9, in the measured ventilation/control stream. Use measured composition and cumulative gas volume or integrate a true rate once at actual dry/wet temperature/pressure; do not add an aggregate-air purchase/emission or infer a net emission from this gross leg. Preserve ambient versus wood-biogenic versus fossil-coating carbon subaccounts where relevant. This gross physical V is not a manufacturing/service burden vector and is never stock-corrected or economically scaled. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual air_co2_out external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`

###### Water vapour to unspecified air (`water_vapour_out`)

Native molecular H2O CAS 7732-18-5 Elementary emission to unspecified air, Mass/kg; synonyms containing ice/heavy water do not authorize those phases/isotopes. Use only actual normal-water vapour to that receiving medium. Gross exhaust includes incoming humidity; apportion wood sorbed/free water, carrier/addition water and independently evidenced reaction water as subaccounts, with no duplicate water emission. No default evaporation or reaction yield; V_gross is the complete measured outgoing leg, with environmental net information separate. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual water_vapour_out external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `a2s-chair-catalogue`; `usda-wood-handbook-2021`

###### Airborne beech wood dust (`wood_dust_air`)

Conditional measured fugitive/stack raw-beech particulate to the actual air compartment. Keep measured size fractions as non-overlapping subsets; total dust does not identify a molecule or equal carbon mass. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort.

- Selected flow: Airborne beech wood dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual wood_dust_air external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`

###### Waterborne furniture-lacquer aerosol (`coating_aerosol`)

Conditional actual escaped whole-preparation droplets, with measured composition/water and particle state; do not duplicate the whole wet aerosol and its water/resin subaccounts or assume every sprayed gram escapes. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort.

- Selected flow: Waterborne furniture-lacquer aerosol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual coating_aerosol external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`

###### Formaldehyde gas to air (`formaldehyde_air`)

Conditional only independently speciated formaldehyde CAS 50-00-0 from actual stock/binder/finish route, with stage, receiving medium, test method, detection limit and carbon origin. No formalin procurement, total VOC/COD conversion or generic emission factor is implied. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. Actual ordinary molecular formaldehyde CAS50-00-0, Mass/kg current unspecified-air emission only; not formalin solution purchase, total VOC, long-term or indoor-only. No emitted amount, carbon origin or zero-emission inference follows from source claims.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual formaldehyde_air external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`

###### Methanol vapour to air (`methanol_air`)

Conditional only independently speciated methanol CAS 67-56-1 with real source and air medium; neither wood VOC nor total organic carbon establishes its amount. Additional real organic molecules require distinct cards. This output amount is the actual complete physical gross leg V, independent of burden shares; its treatment/handling burden remains assigned once to manufacture or the justified original service cohort. Actual ordinary molecular methanol CAS67-56-1, Mass/kg current unspecified-air emission; not another methanol-derived compound, liquid chemical supply, total TOC/VOC or another compartment. Source and amount independently measured.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q; V_gross is the complete actual methanol_air external gross leg. This is the sole division in section 8; collect raw values with cp_emission.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `usda-wood-handbook-2021`; `adler-unistar-2965`

### Process: Original-cohort gate service (`gate_service`)

#### Inputs

##### Product flows

###### One corrugated chair shipping carton (`carton_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled incoming event for exactly one corrugated chair shipping carton: paper grade/furnish and whole carton construction. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; first non-purchased external ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension.

- Selected flow: One corrugated chair shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual carton_p external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One corrugated chair shipping carton (`carton_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional supplier-included incoming event for exactly one corrugated chair shipping carton: paper grade/furnish and whole carton construction. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; first non-purchased external ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension.

- Selected flow: One corrugated chair shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual carton_i external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One corrugated chair shipping carton (`carton_er`)

Conditional external returned incoming event for exactly one corrugated chair shipping carton: paper grade/furnish and whole carton construction. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension.

- Selected flow: One corrugated chair shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual carton_er external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One polyethylene chair wrapping film (`film_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled incoming event for exactly one polyethylene chair wrapping film: PE CAS 9002-88-4, actual branching/thickness and fossil/renewable feedstock. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; first non-purchased external ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The native PE film family is physically PE film despite an unrelated luggage classification; the classification defect supplies no proxy authority. PET film or a laminated mixed film does not qualify.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual film_p external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One polyethylene chair wrapping film (`film_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional supplier-included incoming event for exactly one polyethylene chair wrapping film: PE CAS 9002-88-4, actual branching/thickness and fossil/renewable feedstock. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; first non-purchased external ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The native PE film family is physically PE film despite an unrelated luggage classification; the classification defect supplies no proxy authority. PET film or a laminated mixed film does not qualify.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual film_i external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One polyethylene chair wrapping film (`film_er`)

Conditional external returned incoming event for exactly one polyethylene chair wrapping film: PE CAS 9002-88-4, actual branching/thickness and fossil/renewable feedstock. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The native PE film family is physically PE film despite an unrelated luggage classification; the classification defect supplies no proxy authority. PET film or a laminated mixed film does not qualify.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual film_er external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One wooden transport pallet (`pallet_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled incoming event for exactly one wooden transport pallet: complete pallet including actual nails, wood species, moisture and treatment. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; first non-purchased external ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The broad manufactured wood load-board family is narrowed to this single portable pallet; collar/box pallets and unrelated furniture are not added. Declare actual upstream supplier/treatment/return convention.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual pallet_p external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One wooden transport pallet (`pallet_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional supplier-included incoming event for exactly one wooden transport pallet: complete pallet including actual nails, wood species, moisture and treatment. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; first non-purchased external ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The broad manufactured wood load-board family is narrowed to this single portable pallet; collar/box pallets and unrelated furniture are not added. Declare actual upstream supplier/treatment/return convention.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual pallet_i external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One wooden transport pallet (`pallet_er`)

Conditional external returned incoming event for exactly one wooden transport pallet: complete pallet including actual nails, wood species, moisture and treatment. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The broad manufactured wood load-board family is narrowed to this single portable pallet; collar/box pallets and unrelated furniture are not added. Declare actual upstream supplier/treatment/return convention.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual pallet_er external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One empty supplied plastic PVAc adhesive pail (`glue_pail_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled incoming event for exactly one empty supplied plastic pvac adhesive pail: complete one pail with actual polymer, lid/handle and tare; no assumed HDPE. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; first non-purchased external ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True paid standalone or bundled onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock.

- Selected flow: One empty supplied plastic PVAc adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual glue_pail_p external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One empty supplied plastic PVAc adhesive pail (`glue_pail_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional supplier-included incoming event for exactly one empty supplied plastic pvac adhesive pail: complete one pail with actual polymer, lid/handle and tare; no assumed HDPE. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; first non-purchased external ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True paid standalone or bundled onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock.

- Selected flow: One empty supplied plastic PVAc adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual glue_pail_i external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One empty supplied plastic PVAc adhesive pail (`glue_pail_er`)

Conditional external returned incoming event for exactly one empty supplied plastic pvac adhesive pail: complete one pail with actual polymer, lid/handle and tare; no assumed HDPE. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True separately purchased onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock.

- Selected flow: One empty supplied plastic PVAc adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual glue_pail_er external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One empty supplied furniture-lacquer pail (`paint_pail_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Conditional paid standalone or bundled incoming event for exactly one empty supplied furniture-lacquer pail: complete one pail with actual material, liner, lid/handle and tare. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; first non-purchased external ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True paid standalone or bundled onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock.

- Selected flow: One empty supplied furniture-lacquer pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual paint_pail_p external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One empty supplied furniture-lacquer pail (`paint_pail_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Conditional supplier-included incoming event for exactly one empty supplied furniture-lacquer pail: complete one pail with actual material, liner, lid/handle and tare. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; first non-purchased external ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True paid standalone or bundled onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock.

- Selected flow: One empty supplied furniture-lacquer pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual paint_pail_i external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One empty supplied furniture-lacquer pail (`paint_pail_er`)

Conditional external returned incoming event for exactly one empty supplied furniture-lacquer pail: complete one pail with actual material, liner, lid/handle and tare. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True separately purchased onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock.

- Selected flow: One empty supplied furniture-lacquer pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual paint_pail_er external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### Actual returned previously released beech-frame chair (`service_chair_return`)

One actual external physical return of a previously released whole chair, measured in its current complete wet condition with actual additions/removals and the original delivery/cohort link. Retain held, damaged, unauthorized-work, failed and rejected return facts; acceptance is not a condition for recording an occurred return. Native identity is unresolved for the actual returned condition: do not reuse the accepted-new-chair UUID, declare the return an as-new finished product, or silently reclassify it as Waste. Separately identified removed components or an actual waste disposition need their own actual atomic exchange and compatible identity. This physical custody leg creates no new manufacture, procurement, credit, Q or mass-only reversal of original burden. Preserve full V_gross and original Q_H/H, separate inherited manufacturing/service vectors, tests and actual hold/rejection/disposition. Internal custody transfer cancels once; full wet closing FG or disjoint repair WIP never erases real influx.

Product type is conditional on actual evidence of continued reusable-product status. A true waste consignment uses its actual Waste card and compatible identity; indeterminate reuse/waste disposition stays unresolved without forcing Product classification. No event is invented for symmetry. An internal manufacture-to-service handoff cancels on consolidation and cannot be counted again as an external return or new provider purchase.

- Selected flow: Actual returned previously released beech-frame chair
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual service_chair_return external gross leg. This is the sole division in section 8; collect raw values with cp_service.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `jrc-ilcd-attributional-2010`

###### Original-cohort packing warehouse handling electricity (`service_electricity`)

Same native customer-side grid-average electricity below 1 kV, with actual site/time/provider gate verified. Collect only actual incremental packing, storage, handling and dispatch including held FG and returns over the observed horizon H; original Q_H stays fixed. Performed service is not deferred merely because FG remains in closing stock. No duplicate manufacture meter or assumed universal storage time.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_H / Q_H; A_H is the attributed actual original-cohort service vector. This is the sole division in section 8; collect raw values with cp_service.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `jrc-ilcd-attributional-2010`

###### One corrugated chair shipping carton (`carton_charge`)

Burden-only companion of the same one corrugated chair shipping carton. It does not add a seventh physical leg or a second purchase. Keep full P/I/ER/S/EO/W in the six gross cards; their reporting has no extra upstream load or credit. Trace one actual supply owner and actual use/return/treatment burden to the original cohort; carry only genuinely unused/unassigned charges, never already performed packing/storage service because FG is held. Reusable article charges require actual service/capacity evidence; gross mass is never economically shrunk. Numerator A_H is the separately justified same-exchange-unit burden vector, not physical gross V.

- Selected flow: One corrugated chair shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_H / Q_H; A_H is the attributed actual original-cohort service vector. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`

###### One polyethylene chair wrapping film (`film_charge`)

Burden-only companion of the same one polyethylene chair wrapping film. It does not add a seventh physical leg or a second purchase. Keep full P/I/ER/S/EO/W in the six gross cards; their reporting has no extra upstream load or credit. Trace one actual supply owner and actual use/return/treatment burden to the original cohort; carry only genuinely unused/unassigned charges, never already performed packing/storage service because FG is held. Reusable article charges require actual service/capacity evidence; gross mass is never economically shrunk. Numerator A_H is the separately justified same-exchange-unit burden vector, not physical gross V.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_H / Q_H; A_H is the attributed actual original-cohort service vector. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`

###### One wooden transport pallet (`pallet_charge`)

Burden-only companion of the same one wooden transport pallet. It does not add a seventh physical leg or a second purchase. Keep full P/I/ER/S/EO/W in the six gross cards; their reporting has no extra upstream load or credit. Trace one actual supply owner and actual use/return/treatment burden to the original cohort; carry only genuinely unused/unassigned charges, never already performed packing/storage service because FG is held. Reusable article charges require actual service/capacity evidence; gross mass is never economically shrunk. Numerator A_H is the separately justified same-exchange-unit burden vector, not physical gross V.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_H / Q_H; A_H is the attributed actual original-cohort service vector. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`

###### One empty supplied plastic PVAc adhesive pail (`glue_pail_charge`)

Burden-only companion of the same one empty supplied plastic pvac adhesive pail. It does not add a seventh physical leg or a second purchase. Keep full P/I/ER/S/EO/W in the six gross cards; their reporting has no extra upstream load or credit. Trace one actual supply owner and actual use/return/treatment burden to the original cohort; carry only genuinely unused/unassigned charges, never already performed packing/storage service because FG is held. Reusable article charges require actual service/capacity evidence; gross mass is never economically shrunk. Numerator A_H is the separately justified same-exchange-unit burden vector, not physical gross V.

- Selected flow: One empty supplied plastic PVAc adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_H / Q_H; A_H is the attributed actual original-cohort service vector. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`

###### One empty supplied furniture-lacquer pail (`paint_pail_charge`)

Burden-only companion of the same one empty supplied furniture-lacquer pail. It does not add a seventh physical leg or a second purchase. Keep full P/I/ER/S/EO/W in the six gross cards; their reporting has no extra upstream load or credit. Trace one actual supply owner and actual use/return/treatment burden to the original cohort; carry only genuinely unused/unassigned charges, never already performed packing/storage service because FG is held. Reusable article charges require actual service/capacity evidence; gross mass is never economically shrunk. Numerator A_H is the separately justified same-exchange-unit burden vector, not physical gross V.

- Selected flow: One empty supplied furniture-lacquer pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_H / Q_H; A_H is the attributed actual original-cohort service vector. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`

###### Actual separately supplied wooden pallet repair board (`pack_repair_wood`)

Only an actual separate supplied wooden board used in pallet repair; exact species, supplied machining/treatment, moisture, contamination and measured full wet new/old/installed states. Not a whole pallet, its already included boards, a default replacement or a wood-density conversion. This conditional physical card reports only the complete actual gross native-unit V_gross over original Q_H and observed H, never stock-corrected use or a burden/economic share. Actual associated supply/work/treatment burden is separately assigned once; no second purchase, provider or credit. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Actual separately supplied wooden pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual pack_repair_wood external gross leg. This is the sole division in section 8; collect raw values with cp_pack_repair.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_repair`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### Actual separately added gate-service tap water (`service_liquid_water`)

Actual separately supplied treated potable liquid tap water for real FG/package cleaning/conditioning/work, only if this actual provider/treatment matches the complete native family. Mass/kg reference; secondaryVolume is not measured density. Water already inside supplied preparations, filled pails or wet articles is a child account, not this extra ingress. This conditional physical card reports only the complete actual gross native-unit V_gross over original Q_H and observed H, never stock-corrected use or a burden/economic share. Actual associated supply/work/treatment burden is separately assigned once; no second purchase, provider or credit. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual service_liquid_water external gross leg. This is the sole division in section 8; collect raw values with cp_service_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_water`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

##### Elementary flows

###### Actual atmospheric H2O vapour uptake in held FG and packaging (`service_humidity_in`)

Actual independently observed ordinary H2O vapour sorption/condensation during normal FG/package storage/handling or actual work; no repair event or permission required for natural moisture. Separate free/sorbed water from structural/reaction water and whole supplied article water. Unique source-process/event and non-additive component subaccounts prevent duplication with ventilation/air-gross measurements. No density, fixed humidity or residual fitting is assumed. This conditional physical card reports only the complete actual gross native-unit V_gross over original Q_H and observed H, never stock-corrected use or a burden/economic share. Actual associated supply/work/treatment burden is separately assigned once; no second purchase, provider or credit. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Actual atmospheric H2O vapour uptake in held FG and packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual service_humidity_in external gross leg. This is the sole division in section 8; collect raw values with cp_service_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_water`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

#### Outputs

##### Product flows

###### Actual gross dispatch of a complete previously released beech-frame chair (`service_chair_dispatch`)

One actual gross outward dispatch of the complete manufactured unupholstered beech-frame chair already in its original first-release cohort, with current configuration, joint/finish qualification and actual acceptance/disposition retained. Use the native complete manufactured Product family only while the actual complete chair remains compatible; no intactness or restoration is inferred after damage or postwork. Noncompatible outgoing parts or actual Waste require separately named actual cards before dataset completion, without deleting the observed event. V_gross is actual current net whole-chair wet mass excluding separately inventoried packaging, never allocated burden, stock-corrected consumption or net shipment. Original manufacturing burdens remain linked once; actual storage/handling/work/service increments stay with original Q_H/H. Shipment and repeated shipment do not create new Q or another manufactured output. Reconcile gross dispatch and each actual return separately with full closing FG, losses and changed matter.

- Selected flow: Seats, primarily with wooden frames `5ac0b7a3-ea7c-42cb-b70c-32608f90e4e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual service_chair_dispatch external gross leg. This is the sole division in section 8; collect raw values with cp_service.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `jrc-ilcd-attributional-2010`

###### One corrugated chair shipping carton (`carton_s`)

Conditional gross physical shipment outgoing event for exactly one corrugated chair shipping carton: paper grade/furnish and whole carton construction. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension.

- Selected flow: One corrugated chair shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual carton_s external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One corrugated chair shipping carton (`carton_eo`)

Conditional external return outgoing event for exactly one corrugated chair shipping carton: paper grade/furnish and whole carton construction. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension.

- Selected flow: One corrugated chair shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual carton_eo external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One polyethylene chair wrapping film (`film_s`)

Conditional gross physical shipment outgoing event for exactly one polyethylene chair wrapping film: PE CAS 9002-88-4, actual branching/thickness and fossil/renewable feedstock. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The native PE film family is physically PE film despite an unrelated luggage classification; the classification defect supplies no proxy authority. PET film or a laminated mixed film does not qualify.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual film_s external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One polyethylene chair wrapping film (`film_eo`)

Conditional external return outgoing event for exactly one polyethylene chair wrapping film: PE CAS 9002-88-4, actual branching/thickness and fossil/renewable feedstock. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The native PE film family is physically PE film despite an unrelated luggage classification; the classification defect supplies no proxy authority. PET film or a laminated mixed film does not qualify.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual film_eo external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One wooden transport pallet (`pallet_s`)

Conditional gross physical shipment outgoing event for exactly one wooden transport pallet: complete pallet including actual nails, wood species, moisture and treatment. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The broad manufactured wood load-board family is narrowed to this single portable pallet; collar/box pallets and unrelated furniture are not added. Declare actual upstream supplier/treatment/return convention.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual pallet_s external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One wooden transport pallet (`pallet_eo`)

Conditional external return outgoing event for exactly one wooden transport pallet: complete pallet including actual nails, wood species, moisture and treatment. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The broad manufactured wood load-board family is narrowed to this single portable pallet; collar/box pallets and unrelated furniture are not added. Declare actual upstream supplier/treatment/return convention.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual pallet_eo external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One empty supplied plastic PVAc adhesive pail (`glue_pail_s`)

Conditional gross physical shipment outgoing event for exactly one empty supplied plastic pvac adhesive pail: complete one pail with actual polymer, lid/handle and tare; no assumed HDPE. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension.

- Selected flow: One empty supplied plastic PVAc adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual glue_pail_s external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One empty supplied plastic PVAc adhesive pail (`glue_pail_eo`)

Conditional external return outgoing event for exactly one empty supplied plastic pvac adhesive pail: complete one pail with actual polymer, lid/handle and tare; no assumed HDPE. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension.

- Selected flow: One empty supplied plastic PVAc adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual glue_pail_eo external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One empty supplied furniture-lacquer pail (`paint_pail_s`)

Conditional gross physical shipment outgoing event for exactly one empty supplied furniture-lacquer pail: complete one pail with actual material, liner, lid/handle and tare. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension.

- Selected flow: One empty supplied furniture-lacquer pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual paint_pail_s external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### One empty supplied furniture-lacquer pail (`paint_pail_eo`)

Conditional external return outgoing event for exactly one empty supplied furniture-lacquer pail: complete one pail with actual material, liner, lid/handle and tare. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension.

- Selected flow: One empty supplied furniture-lacquer pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual paint_pail_eo external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

##### Waste flows

###### Waste one corrugated chair shipping carton (`carton_w`)

Conditional waste outgoing event for exactly one corrugated chair shipping carton: paper grade/furnish and whole carton construction. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. This is the actual waste article with contamination identified; a Product UUID is not reused as a Waste identity. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Waste one corrugated chair shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual carton_w external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### Waste one polyethylene chair wrapping film (`film_w`)

Conditional waste outgoing event for exactly one polyethylene chair wrapping film: PE CAS 9002-88-4, actual branching/thickness and fossil/renewable feedstock. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The native PE film family is physically PE film despite an unrelated luggage classification; the classification defect supplies no proxy authority. PET film or a laminated mixed film does not qualify. This is the actual waste article with contamination identified; a Product UUID is not reused as a Waste identity. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Waste one polyethylene chair wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual film_w external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### Waste one wooden transport pallet (`pallet_w`)

Conditional waste outgoing event for exactly one wooden transport pallet: complete pallet including actual nails, wood species, moisture and treatment. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. The broad manufactured wood load-board family is narrowed to this single portable pallet; collar/box pallets and unrelated furniture are not added. Declare actual upstream supplier/treatment/return convention. This is the actual waste article with contamination identified; a Product UUID is not reused as a Waste identity. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Waste one wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual pallet_w external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### Waste one empty supplied plastic pvac adhesive pail (`glue_pail_w`)

Conditional waste outgoing event for exactly one empty supplied plastic pvac adhesive pail: complete one pail with actual polymer, lid/handle and tare; no assumed HDPE. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. This is the actual waste article with contamination identified; a Product UUID is not reused as a Waste identity. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Waste one empty supplied plastic pvac adhesive pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual glue_pail_w external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### Waste one empty supplied furniture-lacquer pail (`paint_pail_w`)

Conditional waste outgoing event for exactly one empty supplied furniture-lacquer pail: complete one pail with actual material, liner, lid/handle and tare. Each P/I/ER/S/EO/W is a separate direction/event; keep the actual full wet gross leg V, with empty/attached WIP/FG/reusable opening and closing stocks. P and I are mutually exclusive ownership labels for the same received article; supplier-included ingress remains physical and has one upstream owner. Internal reuse cancels; no new purchase, product Q, automatic coproduct or credit. calc_quotient uses V_gross for this card, without burden allocation or stock correction; any real procurement/treatment/service burden is attributed once in its separate dimension. This is the actual waste article with contamination identified; a Product UUID is not reused as a Waste identity. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Waste one empty supplied furniture-lacquer pail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual paint_pail_w external gross leg. This is the sole division in section 8; collect raw values with cp_pack.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### Actual separately removed wooden pallet repair waste (`pack_removed_wood`)

Only the actual separately removed wooden board/offcut stream, full wet Mass/kg, exact contamination/treatment/hazard status and qualified receiver. Full native Wood waste explicitly includes wood-packaging residues; its agglomerated-briquette classification conflicts with the broader name/comment and is retained as taxonomy debt, not evidence of briquetting, ash, automatic recycling or landfill. Not a whole mixed outlet, and not counted again inside pallet W. This conditional physical card reports only the complete actual gross native-unit V_gross over original Q_H and observed H, never stock-corrected use or a burden/economic share. Actual associated supply/work/treatment burden is separately assigned once; no second purchase, provider or credit. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual pack_removed_wood external gross leg. This is the sole division in section 8; collect raw values with cp_pack_repair.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_repair`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### Actual separately collected gate-service aqueous effluent (`service_wastewater`)

Only an actual independently collected liquid FG/package cleaning/conditioning/work effluent, full wet mass with water/solids/adhesive/coating and receiver/treatment evidence. Water retained inside wet waste/articles is not another liquid exit, COD/TOC is not a specific chemical mass. Real mixed-stream total and origin subaccounts are alternatives, not additive exports. This conditional physical card reports only the complete actual gross native-unit V_gross over original Q_H and observed H, never stock-corrected use or a burden/economic share. Actual associated supply/work/treatment burden is separately assigned once; no second purchase, provider or credit. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Actual separately collected gate-service aqueous effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual service_wastewater external gross leg. This is the sole division in section 8; collect raw values with cp_service_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_water`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

###### Actual discarded previously released beech-frame chair (`service_chair_waste`)

Actual damaged/rejected previously released chair disposal in its measured current whole/component/wet state, including real added and removed matter. Match original cohort Q_H/H and actual receiver/treatment. Not an unreleased failed chair, complete accepted Product, new Q, automatic manufacture reversal or restoration. This conditional physical card reports only the complete actual gross native-unit V_gross over original Q_H and observed H, never stock-corrected use or a burden/economic share. Actual associated supply/work/treatment burden is separately assigned once; no second purchase, provider or credit. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: Actual discarded previously released beech-frame chair
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual service_chair_waste external gross leg. This is the sole division in section 8; collect raw values with cp_service_waste.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_waste`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

##### Elementary flows

###### Actual H2O vapour released from held FG and packaging (`service_vapour_out`)

Actual ordinary H2O desorption/evaporation during normal FG/package storage/handling or actual work, with independently measured source/phase/current outlet. Native CAS7732-18-5, Mass/kg emission to unspecified air, not liquid/ice/heavy/tritiated water despite noisy aliases. Record distinct inlet/outlet and non-additive package/FG source children once; no assumed repair, evaporation rate or structural-water loss. This conditional physical card reports only the complete actual gross native-unit V_gross over original Q_H and observed H, never stock-corrected use or a burden/economic share. Actual associated supply/work/treatment burden is separately assigned once; no second purchase, provider or credit. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: V_gross / Q_H; V_gross is the complete actual service_vapour_out external gross leg. This is the sole division in section 8; collect raw values with cp_service_water.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_water`
- Sources: `jrc-ilcd-attributional-2010`; `kleiberit-pvac-303`

## 7. Allocation and Co-product Handling

Apply these rules only to actual attributional multifunctionality; source manufacturing facts do not establish an allocation method. Physical mass, each packaging leg and each air/asset gross event remain full independently of burden shares.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocate_subdivide | actual shared burdens | Avoid allocation through independently metered dedicated processes or justified virtual subdivision first. Preserve exchange vectors, actual other functions/cohorts and matching process gates; do not impose one mass/economic split on all rows. | `jrc-ilcd-attributional-2010` |
| allocate_causality | remaining shared exchanges | For each remaining exchange identify and evidence its determining physical causal relationship. Actual capacity/time, wood removal, coating work and storage constraints are assessed per exchange; mere correlation, mass equality or convenient prices do not establish causality. | `jrc-ilcd-attributional-2010` |
| allocate_residual | genuinely residual common process | Only after subdivision and causality have actually been exhausted may a residual common-process burden use evidenced contemporaneous market values at the same gate and actual state. Disclose currency/time/quality, residual scope, sensitivity and conservation across all functions. No arbitrary choice of physical/economic allocation, fixed ratio or automatic avoided-product credit. | `jrc-ilcd-attributional-2010` |
| allocate_waste | wood residues rejects samples treatment | Ordinary offcuts/shavings/dust, failed chairs, samples and their treatment stay in manufacturing/service burdens even if exported or sold. T_other requires a genuine distinct function/cohort plus justified allocation and one documented vector handover. Gross outgoing mass is never reduced by that burden share. Internal reuse cancels and does not become a new external purchase. | `jrc-ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect unnormalized raw extensive observations only. Their aggregation label “per reference flow” identifies the final basis of the single calc_quotient; it does not divide in collection. Preserve complete manufacture period and actual cohort service horizon including zero output, all operating modes, stocks, returns and failures.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | Each supply preparation/component | raw records and independent measurements | receipt/issue/return; complete formulation/BOM; species/origin; wet mass; assay; moisture; raw/WIP opening/closing; inherited exchange vectors; failed runs; row_id; source_process/event/work order; actual original cohort Q_H/H; raw/WIP/non-WIP physical quantities AND each inherited exchange vector; already-net flag; acceptance/hold/rejection/disposition | Calibrated whole net/tare weighing and actual supplier/production records; sample wood moisture separately; keep polymer/carrier/solids as subaccounts, not duplicate purchases. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states. Actual postrelease use of an already listed exact supply remains a separate real process/event and original Q_H/H record, not a new manufacture or duplicated receipt; any different actual material/operation needs its own atomic row before completion. | kg; original assay units | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | weighing calibration; BOM; supplier route/origin; stock reconciliation |
| cp_release | manufacture | Unique first-release Q | raw records and independent measurements | configuration; serial/lot; whole net kg; tare; moisture; joint/finish permission; dimensional/stability/strength/surface tests; first-release time; hold/reject/test sample; opening/closing FG lineage | Weigh each accepted same-configuration complete chair on a calibrated scale excluding transport packaging; reconcile first-release register and actual manufacturer/specification tests, never catalog per-item mass. | kg net whole chair; test units | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | calibration; signed release; complete test method and acceptance/disposition |
| cp_utility | manufacture | Electricity and inbound freight | raw records and independent measurements | stage/cohort; meter increments; cumulative/rate flag; time interval; kWh/MJ; voltage; origin/time; supply boundary; actual load/distance/empty return | Read calibrated cumulative meters or integrate real rates once; retain actual transport payload/distance and supplier-included ownership; collect no per-Q amount. | kWh/MJ; t*km | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | meters/time series; voltage and provider proof; transport tickets |
| cp_water | manufacture | Each water phase and carrier subaccount | raw records and independent measurements | liquid/vapour/sorbed/free/structural/reaction origin; mass/cumulative volume; independent density; temperature/pressure; X_in/X_out; whole wet opening/closing stock; return and treatment; provider enthalpy boundary if real; row_id; source_process/event/work order; actual original cohort Q_H/H; raw/WIP/non-WIP physical quantities AND each inherited exchange vector; already-net flag; acceptance/hold/rejection/disposition | Weigh or meter each actual phase; use independent substance-state density and speciation/stoichiometry evidence. Keep carrier water inside whole preparation once; real new water retained in closing stock remains influx and closing wet mass. No invented steam/boiler or heat-return convention. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states. Actual postrelease use of an already listed exact supply remains a separate real process/event and original Q_H/H record, not a new manufacture or duplicated receipt; any different actual material/operation needs its own atomic row before completion. | kg per phase; original volume/state units | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | calibration; independent sample/density/state; supplier/treatment agreement |
| cp_waste | manufacture | Each actual waste/residue | raw records and independent measurements | stream source and actual material; wet gross mass; water/solids/binder; contamination; retained sample; waste status; destination; treatment vector; any justified distinct-function handover; row_id; actual collected outlet/provider ID; measured whole wet total and independent per-origin W raw quantities; non-additive total OR partition; whole article/component assembly and paired handoff IDs | Separate and weigh each actual stream; reconcile actual treatment/recipient records and wet totals versus child subaccounts; sale never automatically subtracts manufacturing/treatment burdens. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True separately purchased onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. | kg wet; original assay units | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | weighing; waste/recipient ticket; treatment; contamination assay |
| cp_asset | manufacture | Each asset tool repair and fluid | raw records and independent measurements | asset/BOM; new/old; gross incoming/outgoing; complete wet opening/closing/install/remove; attachments/fluids; time/capacity; actual used service and unused/unassigned charges; inherited vectors; overlap-only X_in/X_out; row_id; source_process/event/work order; actual original cohort Q_H/H; raw/WIP/non-WIP physical quantities AND each inherited exchange vector; already-net flag; acceptance/hold/rejection/disposition | Weigh identified complete assets/materials/fluids and reconcile service/maintenance records. Preserve separate physical gross mass and actual service-charge dimension; no fixed life, mass per item or full machine per kg. cp_asset also covers gate-service equipment using its original cohort. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states. Actual postrelease use of an already listed exact supply remains a separate real process/event and original Q_H/H record, not a new manufacture or duplicated receipt; any different actual material/operation needs its own atomic row before completion. | kg per actual article/fluid; real time/capacity units | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | BOM; scale; actual capacity use; maintenance and charge lineage |
| cp_emission | manufacture | Each gross gas and real emission species | raw records and independent measurements | species/CAS; actual medium; source carbon; wet/dry state; inlet/outlet gross cumulative volume or rate/time; concentration/detection limit; humidity; captured particulate and non-overlapping fractions; independent density; uncertainty; row_id; source_process/event/work order; actual original cohort Q_H/H; raw/WIP/non-WIP physical quantities AND each inherited exchange vector; already-net flag; acceptance/hold/rejection/disposition | Calibrated representative speciation and matched state/volume/concentration measurements; retain complete gross N2/O2/Ar/CO2/H2O legs and separate true net environmental information. No aggregate-air double count; unmeasured/nondetect/zero differ. Add each actual extra molecule, not VOC/COD-as-species. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states. Actual postrelease use of an already listed exact supply remains a separate real process/event and original Q_H/H record, not a new manufacture or duplicated receipt; any different actual material/operation needs its own atomic row before completion. | kg each actual species/particulate; original instrument units | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | sampling/speciation/calibration; state; detection limits; full method |
| cp_pack | gate_service | One six-leg ledger per packaging article | raw records and independent measurements | material and whole article; O; P; I; ER; C; S; EO; W; empty/attached WIP/FG/reusable; full moisture; upstream owner; actual gross physical shipment; original cohort; overlap-only X_in/X_out; row_id; actual collected outlet/provider ID; measured whole wet total and independent per-origin W raw quantities; non-additive total OR partition; whole article/component assembly and paired handoff IDs ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Weigh every full wet external event and complete opening/closing article stock; P/I same receipt has one owner, ER external receipts preserved; internal reuse cancels. Each card uses full V, not allocated burdens or stock-corrected consumption. Add a six-card set for any actual additional packaging article. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True paid standalone or bundled onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg per named whole wet packaging article | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | scale/tare; supply-included proof; six legs; shipment/return/waste tickets |
| cp_service | gate_service | Actual original-cohort services | raw records and independent measurements | H; original Q_H; observed horizon; FG opening/closing histories; gross dispatch/return; original delivery link; real increment; postwork permission/tests/acceptance/disposition; unused/unassigned service; row_id; source_process/event/work order; actual original cohort Q_H/H; raw/WIP/non-WIP physical quantities AND each inherited exchange vector; already-net flag; acceptance/hold/rejection/disposition | Retain timestamped storage/packing/handling/dispatch and all real postwork logs including unapproved/failed/rejected work with matched meters and cohort lineage. Performed service stays assigned to original Q_H even when FG remains held. No net-delivery denominator or mass-only return reversal is inferred. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states. Actual postrelease use of an already listed exact supply remains a separate real process/event and original Q_H/H record, not a new manufacture or duplicated receipt; any different actual material/operation needs its own atomic row before completion. | original extensive units; physical FG kg; time | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | service meters; original release; work permission; postwork tests; disposition |
| cp_service_waste | gate_service | service_chair_waste | raw records and independent measurements | row_id; source_process/event; period; original Q_H/H; actual incoming/outgoing gross V in kg; full wet FG/repair-WIP/material custody stocks; actual new/old material; independent liquid/vapour/free/sorbed/structural phase evidence; original measured units/calibration/tare and conversion evidence; ordinary humidity versus actual work; work permission/result/hold/disposition; one physical event and one burden owner; actual outlet and independent non-additive origins; uncertainty | Measure this exact actual physical event in kg with independent substance/phase/state evidence, preserving new ingress AND full closing wet stock. Normal storage humidity does not require work permission. Record each event once with separate attributable burden, no denominator operation in collection. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True separately purchased onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. | kg | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | scale/tare; supply-included proof; six legs; shipment/return/waste tickets |
| cp_service_water | gate_service | service_liquid_water; service_humidity_in; service_wastewater; service_vapour_out | raw records and independent measurements | row_id; source_process/event; period; original Q_H/H; actual incoming/outgoing gross V in kg; full wet FG/repair-WIP/material custody stocks; actual new/old material; independent liquid/vapour/free/sorbed/structural phase evidence; original measured units/calibration/tare and conversion evidence; ordinary humidity versus actual work; work permission/result/hold/disposition; one physical event and one burden owner; actual outlet and independent non-additive origins; uncertainty | Measure this exact actual physical event in kg with independent substance/phase/state evidence, preserving new ingress AND full closing wet stock. Normal storage humidity does not require work permission. Record each event once with separate attributable burden, no denominator operation in collection. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True separately purchased onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. | kg | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | scale/tare; supply-included proof; six legs; shipment/return/waste tickets |
| cp_pack_repair | gate_service | pack_repair_wood; pack_removed_wood | raw records and independent measurements | row_id; source_process/event; period; original Q_H/H; actual incoming/outgoing gross V in kg; full wet FG/repair-WIP/material custody stocks; actual new/old material; independent liquid/vapour/free/sorbed/structural phase evidence; original measured units/calibration/tare and conversion evidence; ordinary humidity versus actual work; work permission/result/hold/disposition; one physical event and one burden owner; actual outlet and independent non-additive origins; uncertainty | Measure this exact actual physical event in kg with independent substance/phase/state evidence, preserving new ingress AND full closing wet stock. Normal storage humidity does not require work permission. Record each event once with separate attributable burden, no denominator operation in collection. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True separately purchased onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. | kg | each batch/event; opening/closing counts; continuous meters when applicable | complete manufacture period and actual original-cohort service horizon | actual site/provider/stage/cohort; original units and all relevant directions | per reference flow | scale/tare; supply-included proof; six legs; shipment/return/waste tickets |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | raw extensive observations | Convert original observations to the actual extensive unit before allocation. Integrated volume is already cumulative; only true rates use sum(rate×interval). Electricity uses 1 kWh=3.6 MJ. Density is independently measured for that material/state; secondary coefficients and catalog per-item values do not establish kg conversion. | raw observations; state; independent density; explicit units | converted raw quantities |  |
| calc_q | finished_chair | Q = sum(unique newly first-quality-released complete-chair net kg), measured at the declared moisture/configuration. Closing FG is part of Q, not another output or manufacturing B_close. Q=0 retains real loads and yields no unit result. | cp_release | Q | `a2s-chair-catalogue` |
| calc_manufacturing | manufacturing burden dimensions only | A = B_open + U_new - B_close - T_other, a same-exchange-unit vector after real allocation. B stores cover raw/WIP/unused-unassigned charges, never first-released FG. Include all failed/Q0/startstop/idle/cleanup/test/rework loads. T_other needs actual distinct function/cohort and justified one-time vector handover, not ordinary waste sale. Cancel internal handovers and never stock-correct an already stock-corrected consumption again. | converted vectors; inherited raw/WIP stores; allocation evidence | A | `jrc-ilcd-attributional-2010` |
| calc_asset | actual asset/tool/fluid burden dimension only | Attribute actual used service/consumable burden to manufacture or original service cohort using measured service, capacity/time and justified allocation; carry only unused/unassigned charge once. Gross new/old article influx/removal and full wet closing stock remain physical V, separately. Included oil/parts have one owner; wear exports and retained parts are reconciled without double counting. No fixed lifetime or full-machine-per-kg assumption. | cp_asset; inherited charge; actual use; allocation decision | actual asset burden within A or A_H; gross V separately | `jrc-ilcd-attributional-2010` |
| calc_service | actual original-cohort burden dimensions only | A_H = actual performed service vector assigned to original cohort H over its observed horizon with fixed original Q_H. Retain complete FG history, actual increments, losses and all actual postwork, including unapproved/failed/rejected work with actual tests/disposition. Deduct only unused/unassigned service once, never performed service because FG is still stored. All actually incurred work, including unauthorized/unapproved, failed or rejected operations, retains its real materials/water/energy/emissions/wastes/custody and burdens. Permission, configuration-specific posttests and acceptance control authorization, continued qualification and actual hold/rejection/disposition only; never erase actual events or imply restoration, new Q or a new route. Actual postrelease work uses the original Q_H and observed H, even while FG is held; unobserved future work remains unknown. Repair-held FG and repair WIP are disjoint custody states. | cp_service; cp_pack; actual utility/asset increments | A_H; Q_H | `jrc-ilcd-attributional-2010` |
| calc_physical | each physical material/species and packaging/asset event | Opening + external incoming = closing + external outgoing with independently evidenced physical transformations. Packaging separately by article: O+P+I+ER+F_in-X_in=C+S+EO+W+F_out-X_out. F_in/F_out are independently measured additional real material/water ingress and removal, including actual repair additions/removals and ordinary humidity uptake/release; they are separate atomic source-event records, not balancing residuals. X_in/X_out subtract only a proven duplicate quantity already represented by another incoming/outgoing FLOW term on that SAME side, with paired term/event IDs and independently measured overlap. They never subtract opening/closing stock, an opposite-side flow, stock-retained new ingress, or an amount merely because a card exists. If the same-side other-flow duplication is absent, X is zero. Preserve each gross card V unchanged and document reconciliation between alternative non-additive representations. Physical new incoming mass and full closing wet mass both remain. Each packaging/asset/air gross card numerator V_gross is its actual complete external leg. No economic scaling, burden-vector subtraction, repeated stock correction, new procurement/credit or second Q is caused by reporting gross V. Whole wet articles/formulations include original substrate, liner, coating, adhesive, hardware and water once as measured child accounts. True paid standalone or bundled onsite components have independent external receipts/owners only if disjoint from the whole supplied article, or reconciled through a measured component-to-assembly bridge with paired internal handoff cancellation. A filled incoming glue/paint pail is measured as filled gross receipt reconciled to its net whole preparation and actual wet container tare; do not add the filled assembly plus those same contents/container twice. Keep actual separate ingress AND full wet closing stock. For one actual physically collected mixed waste outlet, select one compatible whole-mixture Waste exchange and one real treatment/provider record. Independently measured per-origin W raw amounts conserve its total with documented uncertainty; whole total OR partition are non-additive alternatives. Origin Waste cards and their treatment companions then represent child source/burden partitions only, never invented separate outlets or repeated provider charges. Genuinely separate streams retain correct separate identities and treatment. Do not apply a pure sawdust or paint Waste identity to an incompatible mixture; add/reselect the actual specific mixture before dataset completion only if that outlet exists. | cp_material; cp_water; cp_waste; cp_pack; cp_asset; cp_emission | gross V; independent closure and residuals |  |
| calc_quotient | all inventory rows except fixed finished_chair | For manufacturing burden dimensions q=A/Q; for actual original-cohort service burden dimensions q_H=A_H/Q_H; for packaging/asset/air gross physical cards q_gross=V_gross/Q for manufacturing events or V_gross/Q_H for service events. V_gross is the complete actual measured external leg and is never a burden vector, stock-corrected use or economic share. Execute this sole division once after raw conversion and the appropriate numerator preparation. Cards and protocol aggregation reference this same calculation, not additional divisions. Q=0 or Q_H=0 retains raw loads/gross legs without unit results; consolidation cancels internal Q once and retains compatible manufacturing/service dimensions. Actual gross Waste legs and independently measured gate-service new/removed material and liquid/vapour-water physical events also use V_gross/Q_H (or manufacturing Q), not A/A_H, stock correction or an economic fraction. Their actual associated supplier/treatment/service burden has one separate owner; reporting a gross leg creates no extra purchase/provider or credit. | A; Q; A_H; Q_H; V_gross; event/cohort direction | q; q_H; q_gross |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | every flow and provider | Verify complete native family/type/form/route/CAS/geography/medium and every property/unit restriction plus actual supplied preparation/BOM. UUID identity alone does not approve a provider, grade or performance. Resolve ordinary auxiliary identities before using concrete dataset exchanges; core finished-chair identity or real route gaps cannot be papered over by checks. | full native; supplier specifications; route/BOM evidence |
| dq_period | manufacture and original cohort service | Cover all failures/zero-output/test/startstop/idle/cleanup, raw/WIP and FG lineage, actual service horizon and return/postwork disposition. Keep unknown, unmeasured, nondetect and confirmed zero distinct; no invented amounts or source recipes. | full time series; inventory counts; release and service logs |
| dq_evidence | each rule and conversion | Retain complete applicable primary context, adjacent alternatives, independent allocation method, units/state/calibration and sampling/uncertainty. Industry documents are qualitative route evidence; handbook finishing section does not supply a factory furniture-finishing recipe. Match bilingual qualifier/row/rule/source order and complete descriptions. | full original context; source applicability; calibration; complete paired audit |

## 9. Validation Rules

Read every rule with its scope and full ancestor/source context, §§5/7 and the raw/calculation rules. These are future data-package requirements; unresolved physical or scientific questions cannot be reported as passing.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | reference object and finished_chair | Require complete new unupholstered beech-frame chair, declared formed seat/back and actual qualified glue/finish, complete BOM and manufacturer tests. A bare frame/panel, unfinished assembly, bought-chair repack or incompatible family does not pass. UUID/type/flow-property/unit chain and full native restrictions must match. | `a2s-chair-catalogue`; `konar-chair-joinery` |
| validate_q | all measurement relationships | Require one finished_chair reference output of 1 kg and the same basis in both languages; verify measured first-release Q, complete moisture/configuration, no Q+closing-FG duplication and no performed-service deduction for held FG. Check each original numerator extensive unit, actual conversion and single quotient with zero-denominator handling. | `usda-wood-handbook-2021` |
| validate_gross | packaging air water and assets | Require each real packaging material to have six directional cards and full O/P/I/ER/C/S/EO/W closure; each gross card uses full V, not allocated/stock-corrected burdens. Verify first non-purchased external ingress and one owner, whole wet inflow plus full closing mass, atomic gases/phase/speciation, actual asset/repair/installed-fluid stock and distinct service charges. No residual-fit multiple unknowns. | `jrc-ilcd-attributional-2010`; `usda-wood-handbook-2021` |
| validate_allocation | every allocation/other-function transfer | Verify actual dedicated/virtual subdivision first, exchange-specific determining causality next, only genuine residual same-gate/state contemporaneous market-value evidence last. Waste sale alone does not transfer burden. All functions sum to the real vector; physical gross legs remain unscaled. | `jrc-ilcd-attributional-2010` |
| validate_postwork | actual post-release work and returns | Require original-cohort lineage, manufacturer/specification permission, real added inputs/losses, postwork tests, acceptance and disposition. Reinspection/return is not new Q; a returned mass is not assumed equal to original delivery or sufficient for an original-burden reversal. Net delivery is outside this declared denominator. | `jrc-ilcd-attributional-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared complete-chair manufacturing and separately identified actual original-cohort factory-gate services |
| excluded_use | Universal furniture/seat equivalence; use lifetime; certified performance; unreviewed other routes; zero-burden supplied stock or automatic credits |
| required_metadata | All §3 qualifiers, first-release cohort and actual horizon H, native/provider restrictions, original units and full upstream/stock/ownership lineage |
| required_quality_disclosure | Sampling/uncertainty, gaps and unresolved auxiliaries/providers, tests/disposition, source synthesis limits, actual allocation, complete checks and skipped/unknown scope |
| update_trigger | Changed product/BOM/species/supply gate/glue/finish route, actual new atom/provider, test/acceptance or stock/allocation evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-38112 | official_guidance | UNSD CPC Version 3.0 38112 — https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/38112 | Classification hierarchy/title only; no manufacturing or allocation rule |
| a2s-chair-catalogue | handbook | A2S, Our products, complete English catalogue, PDF pp.28–29 (printed pp.26–27) — https://a2s.com/PDF%20Printmedien/Englisch_EN/A2S_EN_catalog_our_products.pdf | Whole 7097 chair terminal and formed beech multiplex seat/back, solid frame, glued/dowelled/screwed joints and waterborne lacquer; adjacent upholstered/other-frame configurations excluded; no catalog mass or certified-performance default |
| cegim-beech-production | literature | CEGIM manufacturer, solid beech furniture production — https://cegim.ro/en/ | Industrial dried beech, CNC/milling/sanding, press assembly and waterborne finishing sequence; mixed furniture/upholstery portfolio is not this whole-chair BOM or current factory dataset |
| konar-chair-joinery | literature | KONAR manufacturer, Wooden chair frames — https://konar-meble.pl/en/wooden-chair-frames-manufacturer/ | Hardwood machining and glued mortise-tenon joints; complete wooden chair contrasted with bare upholstery frame; no attributional allocation evidence |
| kleiberit-pvac-303 | handbook | KLEIBERIT 303.0 technical data sheet, version 08:05:2026, complete 2 pp. — https://www.kleiberit.com/fileadmin/Content_new/Produktinformationen/303.0/dbe3030_KSE.pdf | Whole ready-to-use PVAc dispersion, one-component hardwood/tenon cold-bonding option and water cleanup; 2K hardener alternative and material dependence retained; no spread/pressure/time/density or certification defaults |
| adler-unistar-2965 | handbook | ADLER Bluefin Unistar 2965, TDS 4-0 IMC 2965 09/26, complete 5 pp. — https://www.adler-lacke.com/Canto/tmb/bluefin-unistar_tmb_2965_en.pdf | Whole waterborne clear furniture coating, industrial airless option, substrate preparation/intercoat sanding/drying/cleanup; normal-stress 1K versus high-stress 2K scope retained; no recipe, rate, energy, emission, time or test threshold default |
| usda-wood-handbook-2021 | handbook | USDA FPL, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), ch.4, 10 and limitations in ch.16 — https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Dry-basis moisture definitions, wood/adhesive physical distinctions and supplier qualification; interior finishing section explicitly omits factory furniture finishing; no green-wood range or universal emission/density factor |
| jrc-ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD General guide—Detailed guidance, first ed. March 2010, §7.9.2–7.9.3, PDF pp.275–288 — https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision/virtual subdivision, exchange-specific determining physical causality and genuinely residual process-gate market values; service constraints; not a wooden-chair recipe or default burden transfer |
