---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.seats-primarily-with-metal-frames
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Manufacture of complete powder-coated spot-welded stamped-steel chairs

## 1. Scope and Applicability

Manufacture of a new complete non-upholstered fixed four-leg chair with formed sheet/strip steel legs and stretchers, a stamped steel seat and steel back/support, resistance spot-welded and hot-riveted joints, thermoset epoxy powder finish and fitted rubber feet. Begin with real purchased sheet/strip, rivets, whole preparations and supplied rubber feet; include cutting, bending, punching, stamping, spot welding, hot riveting, actual degreasing/drying/sanding, powder application and actual heat cure, final fitting and one unique first quality release. Contract finishing is an included foreground stage with its own actual records, not permission to replace manufacture with purchase of a finished chair.

Exclude bare frames, seat/back components sold separately, stools without backs, tubular-frame/PP-shell and wood-seat variants, bought-finished-chair packing, swivel/caster/reclining/folding mechanisms, upholstery, sofa beds, vehicle seats, wheelchairs and medical or child-specific safety products. Outdoor cataphoresis, galvanizing, liquid paint and UV-only cure are different routes requiring a new applicability assessment. Installation, use, lifetime seating service and end of life are outside this manufacturing reference.

The boundary is a transparent technical synthesis. Nicolle supplies a complete-chair manufacturing example, not a compulsory SKU or proof that a future site uses its formulation or equipment. Its two descriptions give different oven temperatures; neither is a default. TIGER supplies independent coating-processing context, not proof of the powder used by Nicolle. No default mass, strength, life, film thickness, cure schedule, recipe, yield, energy intensity, VOC limit or certification is assigned. UN classification is scope context and does not approve a method or establish complete subclass coverage.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.seats-primarily-with-metal-frames |
| classification_refs | CPC 3.0 38111; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38111.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Manufacture of a new complete non-upholstered fixed four-leg chair with formed sheet/strip steel legs and stretchers, a stamped steel seat and steel back/support, resistance spot-welded and hot-riveted joints, thermoset epoxy powder finish and fitted rubber feet. Begin with real purchased sheet/strip, rivets, whole preparations and supplied rubber feet; include cutting, bending, punching, stamping, spot welding, hot riveting, actual degreasing/drying/sanding, powder application and actual heat cure, final fitting and one unique first quality release. Contract finishing is an included foreground stage with its own actual records, not permission to replace manufacture with purchase of a finished chair. |
| excluded_products | Exclude bare frames, seat/back components sold separately, stools without backs, tubular-frame/PP-shell and wood-seat variants, bought-finished-chair packing, swivel/caster/reclining/folding mechanisms, upholstery, sofa beds, vehicle seats, wheelchairs and medical or child-specific safety products. Outdoor cataphoresis, galvanizing, liquid paint and UV-only cure are different routes requiring a new applicability assessment. Installation, use, lifetime seating service and end of life are outside this manufacturing reference. |
| representative_product | One complete accepted unupholstered four-leg stamped sheet/strip steel chair with steel seat/back, spot welds, hot rivets, heat-cured epoxy finish and rubber feet; Nicolle metal chair is illustrative, not a compulsory design. |
| production_route | Steel shaping and joining; Preparation, powder application and heat cure; Final fitting and unique first quality release; Utilities, physical assets and maintenance; Original-cohort postrelease handling and dispatch; Separate gross packaging events |
| market_state | New complete accepted chair at unique first quality release after actual final fitting; defined net manufactured product with separately accounted real postrelease services. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and first quality release of the complete specified steel chair. |
| How much | 1 kg net accepted complete-chair manufacturing output, from actual calibrated Q kg first-release cohort. |
| How well | Actual configuration-specific drawings/BOM and applicable joint, finish, fitted-feet, stability and other acceptance requirements; record tests and authorization. No universal strength or certification. |
| How long or cycle | One manufacturing/first-release cycle; no assumed seating-service lifetime. |
| reference_flow_link | `first_release_chair` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Seats, primarily with metal frames `2b8511ea-6bd0-4283-b430-29da5bf2f701` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site and period; manufacturer and subcontract finishing boundary; model and released drawing/BOM revision; complete fixed four-leg architecture; sheet and strip grade/heat / rolling state / thickness / actual widths and part geometry; seat / back/support / legs / stretchers / each rivet and installed rubber-foot specification; spot-weld and hot-rivet joining; actual cutting assist gas and forming lubrication; actual degreasing chemistry and supplied concentration/water; paid standalone or bundled bath ingredients; whole epoxy powder SKU/batch/SDS and make-or-buy; actual reclaim and cure records; actual electric / fuel or purchased-heat source and carrier state; actual water circuits; configured conformity/acceptance specification / joint/finish/stability checks and authorized first release; calibrated net complete-chair weighing excluding all packaging / detached spares and test masses; unique first-release Q in kg; counts and independently measured configuration masses; no catalogue conversion; failures / zero-output runs / startup/shutdown / idle / cleanup / sample tests and actual rework including unauthorized/failed/rejected work; opening/closing raw and WIP quantities with every inherited exchange vector; released FG opening/closing / original cohort Q_c / gross shipment/return identity and observed service horizon h; manufacturer/spec permission / postwork tests / acceptance and disposition for actual postrelease work; each package P/I/ER/S/EO/W and empty/attached/reusable stock; single upstream owner; actual new/old assets and maintenance parts with installed fluids and performed-service attribution; species-specific air/water/solid balances / moisture and independent conversions/uncertainty; native flow limitations / exact supplier compatibility / upstream and treatment gaps |

All qualifiers must be declared in the data package. The native broad complete-chair family is narrowed by this full physical route and endpoint; it is not permission to use a frame, components, generic furniture or a fixed catalogue mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| release_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of actual calibrated net kg of unique complete chairs first released in the declared cohort, excluding packaging, detached spares and test loads. cp_first_release_chair records actual weighing/acceptance; no per-item mass inference. |
| rivet_volume | rivet | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Use actual measured solid rivet volume in m3 and keep independent kg/count. No invented density or unit conversion from a secondary native coefficient. |
| metered_energy | fabrication_electricity; finish_electricity; release_electricity; support_electricity; services_electricity; purchased_heat | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Keep native extensive energy in MJ; metered kWh times3.6 once. Actual fuel/steam/hot-water carrier mass and physical heat state/enthalpy remain separate linked accounts with one upstream owner. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received real steel sheet/strip, rivets, whole formulations, supplied rubber feet and utilities at the actual manufacturer and declared subcontract finishing gates. |
| starting_condition_role | foreground_start |
| product_classification_scope | Narrower stamped-steel complete-chair manufacturing subset of CPC3.0:38111; no accepted mapping or whole-subclass claim. |
| recursive_input_rule | A purchased complete chair is not raw stock. Supplied articles/formulations contain their documented upstream materials/processes once. Internal WIP and released-Q transfers are matched and cancel at combination. |
| upstream_dataset_requirement | Compatible actual stock, formulation, component, utility and treatment providers with form/route/state/unit/boundary verified; no automatic cradle-to-gate completeness. |
| disclosure | site and period; manufacturer and subcontract finishing boundary; model and released drawing/BOM revision; complete fixed four-leg architecture; sheet and strip grade/heat / rolling state / thickness / actual widths and part geometry; seat / back/support / legs / stretchers / each rivet and installed rubber-foot specification; spot-weld and hot-rivet joining; actual cutting assist gas and forming lubrication; actual degreasing chemistry and supplied concentration/water; paid standalone or bundled bath ingredients; whole epoxy powder SKU/batch/SDS and make-or-buy; actual reclaim and cure records; actual electric / fuel or purchased-heat source and carrier state; actual water circuits; configured conformity/acceptance specification / joint/finish/stability checks and authorized first release; calibrated net complete-chair weighing excluding all packaging / detached spares and test masses; unique first-release Q in kg; counts and independently measured configuration masses; no catalogue conversion; failures / zero-output runs / startup/shutdown / idle / cleanup / sample tests and actual rework including unauthorized/failed/rejected work; opening/closing raw and WIP quantities with every inherited exchange vector; released FG opening/closing / original cohort Q_c / gross shipment/return identity and observed service horizon h; manufacturer/spec permission / postwork tests / acceptance and disposition for actual postrelease work; each package P/I/ER/S/EO/W and empty/attached/reusable stock; single upstream owner; actual new/old assets and maintenance parts with installed fluids and performed-service attribution; species-specific air/water/solid balances / moisture and independent conversions/uncertainty; native flow limitations / exact supplier compatibility / upstream and treatment gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete | all processes | The whole chair is the reference: seat, back/support, all legs/stretchers, joining and actual feet/finish. Make-or-buy records determine which raw fabrication, chemical, powder and component upstream operations are already inside a supplied article. Never charge whole bought preparations or parts and their contained ingredients again. A real extra on-site ingredient, utility, molecular species, captured dust, lubricant, abrasive, packaging article or treatment exchange absent from the cards must be added as its own atomic card before dataset completion, not hidden under zero/other. | `nicolle-manufacturing`; `nicolle-secrets` |
| boundary_release | first_release_chair | Q is calibrated net kg at one first quality release after complete fitting/acceptance, not gross shipment or packed mass. Unique serial/batch records prevent second production at delivery, reinspection or actual rework including unauthorized/failed/rejected work. Same-cohort closing released FG is already in Q and never B_close. Keep warehousing/packing/handling/dispatch service for original Q_c and real observed h; performed services are not deducted merely because FG remains stored. | `nicolle-manufacturing` |
| boundary_finish | finish; services | Retain real degreasing, drying, sanding, spray/reclaim, cure and cleanup; actual suppliers and baths, formulations, water phases and utilities must be disclosed. Public oven examples, recyclable-powder and no-discharge marketing are not a setpoint, guaranteed recovery or zero-emission inventory. Separate outdoor e-coat/liquid-paint routes remain excluded. The documented outsourced coating operation remains inside the declared manufacturing foreground. Assign one load owner to each actual contractor material, utility, emission, loss and treatment exchange. When a whole coating-service/provider inventory already contains an exchange, its detailed physical records are non-additive subledgers; when that exchange is separately modelled here, remove its overlapping burden from the service/provider inventory. Never add a whole coating-provider burden and the same foreground powder, bath, energy or treatment loads. Preserve all actual gross physical records for closure independently of invoicing or this burden partition; payment alone is not a material or energy exchange. | `nicolle-manufacturing`; `nicolle-secrets`; `tiger-processing-1213` |
| boundary_rework | services | Authorization and continued qualification after postrelease work require manufacturer/spec permission for that actual configuration and failure, original-part compatibility where relevant and complete postwork tests/acceptance; every actual operation is collected regardless, with its real disposition. No presumed restoration of broken or unsafe products. New parts/water, old removed parts, energy, losses and changed state stay atomic and original-cohort-bound. Returns and current returned mass never establish new Q or equal an old shipment by assumption. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. | `tiger-processing-1213` |
| boundary_physical | all processes | Keep complete physical gross gates separately from attributional load vectors. Never scale a material/packaging/asset/repair-water/air species gross leg by an economic or service-burden share. Whole supplied wet P/I and full closing wet stock both remain; X_in/X_out deduplicates only the same measured event already counted in another same-side flow term, never a stock, opposite-side flow or merely present card. Internal same-product transfers cancel across matched gates, without a new external purchase or Q. |  |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | jrc-ilcd-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Steel shaping and joining | required | Local sheet/strip cutting, forming, punching, stamping, resistance spot welding and hot riveting. Supplied intermediate work is separated by ownership and actual included operations. | foreground_manufacturing | per 1 kg reference flow; original-cohort services retain Q_c |
| finish | Preparation, powder application and heat cure | required | Actual degreasing, drying, sanding, dust removal, whole epoxy powder application, recovery, cure and inspection; include contracted work exactly once. Actual utility/chemical variants require explicit atomic exchanges. | foreground_manufacturing | per 1 kg reference flow; original-cohort services retain Q_c |
| release | Final fitting and unique first quality release | required | Fit actual supplied rubber feet; reconcile the complete BOM, joint/finish and stability/other applicable acceptance, calibrated net mass and first-release authorization. Failed/sampled units retain burden without accepted output. | foreground_manufacturing | per 1 kg reference flow; original-cohort services retain Q_c |
| support | Utilities, physical assets and maintenance | required | Meter actual shared support, real new/old machine and tool movements, installed fluids and maintenance. Physical asset stocks differ from their actual attributable service burden. | foreground_manufacturing | per 1 kg reference flow; original-cohort services retain Q_c |
| services | Original-cohort postrelease handling and dispatch | required | Retain warehousing, packing/handling/dispatch and every actual later operation, including unauthorized, failed or rejected work, as actual incremental service for original Q_c and observed h. Record every real material, part, water, energy, emission, loss, waste and treatment flow and its incurred burden. Permission and configuration-specific postwork tests/acceptance control authorization, continued qualification, hold and final disposition only; they never erase actual work or imply restoration. Reinspection, work, returns or shipment create no new production. | postrelease_service | per 1 kg reference flow; original-cohort services retain Q_c |
| packaging | Separate gross packaging events | required | Each actual supplied package has separate conditional P, I, ER, S, EO and W cards. These cards disclose gross physical legs and their one load-ownership link. | physical_gross_ledger | per 1 kg reference flow; original-cohort services retain Q_c |

Conditions below identify actual exchange presence, not defaults. An absent conditional exchange needs a documented absence; an unknown amount is never zero. Every physical flow and each real treatment record is required for the actual selected route. Inventory burden dimensions and gross physical dimensions remain separate; the same u_i is used once.

### Process: Steel shaping and joining (`fabrication`)

Local sheet/strip cutting, forming, punching, stamping, resistance spot welding and hot riveting. Supplied intermediate work is separated by ownership and actual included operations.

#### Inputs

##### Product flows

###### Carbon-steel sheet (`sheet`)

Received sheet for stamped seat, back and support; actual grade/heat/rolling state/thickness and measured issues/returns. Native sheet/plate family allows hot/cold rolling; its alloy/further-worked classification is inconsistent with its generic low-alloy steel description. That isolated taxonomy defect does not establish a grade or provider. Use only physically compatible sheet; do not use its UUID for tube or a finished seat.

- Selected flow: Steel sheet `13082a6a-e820-45ec-89f5-3c2c3650495b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_sheet; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_sheet`
- Sources: `nicolle-manufacturing`

###### Rolled carbon-steel strip (`strip`)

Actual separate rolled steel strip/coil for legs/stretchers, with measured width/thickness, grade/heat and hot/cold rolling state. Native metal-strip Product positively defines rolled steel strip and explicitly includes wide and narrow strips on opposite sides of its 600-mm dividing line; the introductory ambiguous wording and truncated EN comment do not establish a compulsory 600-mm supply or a default thickness. Use only the compatible actual rolled strip/provider, not wire, tube, a platinum foil or finished chair.

- Selected flow: metal strip `bae3a6f9-4476-4244-9e2d-c77c60b62728`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_strip; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_strip`
- Sources: `nicolle-manufacturing`

###### Solid steel hot-installation rivet (`rivet`)

One actual supplied solid steel rivet configuration, initially cold-headed and finish-processed, later heated/installed in the chair joint. Native Product family includes solid and blind variants but this card is one solid rivet only. Its reference is Volume/m3. Measure actual solid material volume of the same part using calibrated displacement or traceable exact drawing geometry; preserve independent weighed kg for mass balance and count. Do not infer density, use an outer bounding cylinder or substitute kg for m3. Packaging/transport mentioned by the native row requires one upstream owner, not automatic duplicate charges.

- Selected flow: Rivet `d1dda16c-6766-4f42-bf41-3a52a5371ae0`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the single calculated u_i; raw records from cp_rivet; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_rivet`
- Sources: `nicolle-manufacturing`

###### Mineral-oil forming lubricant preparation (`forming_oil`)

Conditional actual purchased whole forming-lubricant formulation, with SDS, supplied water/solvent and issue/return/retained film. No assumed petroleum heating value or additive purchase. If locally blended, replace the purchased formulation by each actual separately bought ingredient and measured mixing/cleaning losses.

- Selected flow: Mineral-oil forming lubricant preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_forming_oil; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_forming_oil`
- Sources: `nicolle-manufacturing`

###### Alumina-coated abrasive belt (`abrasive`)

Conditional actual single supplied alumina abrasive belt including backing and binder once. Powder alumina is not the finished abrasive article; retain abrasion loss and contaminated spent belt separately.  Whole abrasive-belt Product, production mix at plant CN, grinding/polishing consumable, Mass/kg. This positively identified belt family is narrowed to the actual alumina/backing/binder article; supplier geography/CN supply boundary and actual composition must match. No raw-alumina component substitution or universal belt life.

- Selected flow: Abrasive belt `8240432e-9d1c-43e0-aa76-70e9905b2895`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_abrasive; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_abrasive`
- Sources: `nicolle-manufacturing`

###### Unimpregnated cotton wiping cloth (`wipe`)

Actual dry cotton wiping cloth, one construction; attached oil/water and laundering/reuse tracked independently. Water-treatment fabric candidate is not adopted for this wiping use.

- Selected flow: Unimpregnated cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_wipe; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_wipe`
- Sources: `nicolle-manufacturing`

###### Nitrogen gas for laser cutting (`laser_nitrogen`)

Only actual externally supplied gaseous nitrogen assist; retain measured supply phase, purity, pressure/temperature and actual conversion. A liquid-nitrogen flow is not a gas delivery. If liquid is actually bought, add its separate liquid receipt and real vaporizer/loss records instead of assuming a gas match.

- Selected flow: Nitrogen gas for laser cutting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_laser_nitrogen; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_laser_nitrogen`
- Sources: `nicolle-manufacturing`

###### Oxygen gas for laser cutting (`laser_oxygen`)

Only actual externally supplied oxygen assist; exact phase/purity/cylinder or pipeline state and gas measurement. No simultaneous default nitrogen and oxygen recipe. Record oxidation and resulting particles from independent evidence.

- Selected flow: Oxygen gas for laser cutting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_laser_oxygen; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_laser_oxygen`
- Sources: `nicolle-manufacturing`

###### Metered alternating-current electricity (`fabrication_electricity`)

Meter actual separately attributable electricity including relevant standby/start-stop/cleanup and support. Native interface is China1–35kV user-side grid-average consumption mix; use this UUID only when real site/geography/voltage/provider boundary matches. Other locations/voltage need a separately verified native flow, not a claim that the French illustrative factory uses a Chinese grid. Preserve MJ; actual kWh converts once by3.6MJ/kWh. Do not add full site meter and its submeters.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single calculated u_i; raw records from cp_fabrication_electricity; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_fabrication_electricity`
- Sources: `nicolle-manufacturing`

###### Natural gas for hot riveting (`rivet_heating_gas`)

Only if actual rivet heating uses a natural-gas burner; retain measured fuel quantity/composition/state and independent heat/carrier-mass accounts. No generic heat source is presumed from the hot-rivet operation. Distinguish this submeter from the same supplier total and oven/bath use; actual combustion species are recorded by their real stage in support.

- Selected flow: Natural gas for hot riveting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_rivet_heating_gas; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_rivet_heating_gas`
- Sources: `nicolle-manufacturing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Uncoated carbon-steel fabrication scrap (`steel_scrap`)

Actual offcuts/punchings and failed parts of this one uncoated steel grade, each real receiver and treatment. Reusable internal offcuts cancel inside the gate; sales or scrap dispatch do not remove manufacturing or treatment burden. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Uncoated carbon-steel fabrication scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_steel_scrap.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_steel_scrap`
- Sources: `nicolle-manufacturing`

###### Spent alumina-coated abrasive belt (`spent_abrasive`)

Actual belt with its attached steel/oil; weigh full outgoing state and separately establish retained contaminants, without double-counting those masses as other exits. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Spent alumina-coated abrasive belt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_spent_abrasive.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_spent_abrasive`
- Sources: `nicolle-manufacturing`

###### Oil-contaminated cotton wiping cloth (`oily_wipe`)

Actual contaminated cloth, with separately measured free/retained water and oil; no presumed waste treatment or disposal credit. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Oil-contaminated cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_oily_wipe.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_oily_wipe`
- Sources: `nicolle-manufacturing`

###### Captured carbon-steel cutting dust (`collected_metal_dust`)

Actual one captured dust stream with composition, moisture and receiver. Do not equate dust with pure metal mass or duplicate particulate emitted to air. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Captured carbon-steel cutting dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_collected_metal_dust.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_collected_metal_dust`
- Sources: `nicolle-manufacturing`

##### Elementary flows

###### Uncaptured carbon-steel cutting particulate (`metal_dust`)

Conditional actual airborne particulate of the declared steel cutting stream, composition and size distribution independently observed. A PM size-bin/total welding-fume metric is not elemental iron or one oxide; split chemically identified independent species only when supported and prevent overlapping fractions. Captured dust is a separate waste stream. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Uncaptured carbon-steel cutting particulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_metal_dust.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_metal_dust`
- Sources: `nicolle-manufacturing`

### Process: Preparation, powder application and heat cure (`finish`)

Actual degreasing, drying, sanding, dust removal, whole epoxy powder application, recovery, cure and inspection; include contracted work exactly once. Actual utility/chemical variants require explicit atomic exchanges.

#### Inputs

##### Product flows

###### Alkaline aqueous degreasing preparation (`alkaline_cleaner`)

Conditional one actual externally purchased alkaline metal-cleaning preparation, supplied whole with carrier water/solvent and active/solids assays as subledgers only. Native alkaline-detergent Product family is at plant, alkaline compound with pH above neutral; it does not fix NaOH/carbonate recipe, assay, supplied phase or supplier. Use only an actual compatible alkaline formulation; other chemistry requires its own specific card and applicability review. This is a declared collection variant, not a claim about Nicolle bath chemistry. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Alkaline detergent `a0f63f93-1a65-4485-a2cf-36adab2762ce`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_alkaline_cleaner; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_alkaline_cleaner`
- Sources: `nicolle-manufacturing`

###### Supplied liquid process water (`dilution_water`)

Actual additional dilution/rinse water at measured quality and state, independently metered, excluding water already inside purchased preparation. Not assumed deionised. Preserve raw incoming water even when it remains in full closing bath stock. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.  Native Process Water is treated industrial-use liquid water, Mass/kg. Adopt only the actual compatible treatment/quality/acquisition and provider gate; no DI/potable/density or supplier assumption, no extra treatment already inside the provider. Other actual water types require their own verified identity.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_dilution_water; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_dilution_water`
- Sources: `nicolle-manufacturing`

###### Deionised rinse water (`di_water`)

Only actual separately supplied DI water, H2O CAS7732-18-5, ion-exchange/RO compatible with the native route; distillation mentioned only in broader comment is not a substitute for the named route. Production mix at plant; no certified purity or geography is fixed. Purchased DI upstream treatment is charged once; local DI production instead needs actual inlet/treatment exchanges. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_di_water; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_di_water`
- Sources: `nicolle-manufacturing`

###### Sodium hydroxide (`caustic`)

Only if this chemical is really bought separately for documented on-site bath preparation. Preserve its exact supplied solution/solid state, concentration, carrier water and complete purchased mass once; never also charge a purchased ready-made bath containing it. No assumed formulation or concentration. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_caustic; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_caustic`
- Sources: `nicolle-manufacturing`

###### Sodium carbonate (`carbonate`)

Only if this chemical is really bought separately for documented on-site bath preparation. Preserve its exact supplied solution/solid state, concentration, carrier water and complete purchased mass once; never also charge a purchased ready-made bath containing it. No assumed formulation or concentration. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_carbonate; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_carbonate`
- Sources: `nicolle-manufacturing`

###### Whole epoxy powder-coating preparation (`powder`)

One actual supplied thermoset epoxy powder SKU/batch/SDS including resin, curing agent, pigment, additives and any real moisture once. Native dry free-flowing powder Product family permits heat or UV; this route selects actual heat-cured epoxy only, not a fixed chemistry, film thickness, weather class or yield. Reclaim is an internal circulation with measured losses and compatibility, not a new purchase or coproduct. Actual local powder manufacture needs a separately expanded recipe and real processing; do not charge both. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Powder coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_powder; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_powder`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Supplied natural gas (`natural_gas`)

Only if the actual dryer/oven or bath heater is gas-fired. Meter actual supplied composition/state and fuel quantity with independently measured heating value; retain carrier mass separately from heat MJ. Do not identify the whole gas as pure methane or assume combustion products from a default recipe. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Supplied natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_natural_gas; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_natural_gas`
- Sources: `nicolle-manufacturing`

###### Purchased process heat (`purchased_heat`)

Only real purchased heat at measured enthalpy/interface; specify hot-water, steam or other actual carrier explicitly with separate carrier mass receipts/returns. One provider owner: do not add an upstream boiler or a second heat input for a fuel already inside the provider. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Purchased process heat
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single calculated u_i; raw records from cp_purchased_heat; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_purchased_heat`
- Sources: `nicolle-manufacturing`

###### Purchased water-steam carrier (`steam_carrier`)

Only real externally supplied steam mass with pressure, temperature, steam quality and supplier heat/water ownership. This is gross carrier mass V, while purchased_heat carries the corresponding purchased enthalpy once. No steam system is presumed present. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Purchased water-steam carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_steam_carrier.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_steam_carrier`
- Sources: `nicolle-manufacturing`

###### Purchased hot liquid-water carrier (`hotwater_carrier`)

Only actual hot-water mass across the purchased heat interface; measured state/enthalpy, supplied-water owner and independent matching return. Gross V, no second provider burden. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Purchased hot liquid-water carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_hotwater_carrier.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_hotwater_carrier`
- Sources: `nicolle-manufacturing`

###### Metered alternating-current electricity (`finish_electricity`)

Meter actual separately attributable electricity including relevant standby/start-stop/cleanup and support. Native interface is China1–35kV user-side grid-average consumption mix; use this UUID only when real site/geography/voltage/provider boundary matches. Other locations/voltage need a separately verified native flow, not a claim that the French illustrative factory uses a Chinese grid. Preserve MJ; actual kWh converts once by3.6MJ/kWh. Do not add full site meter and its submeters. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single calculated u_i; raw records from cp_finish_electricity; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_finish_electricity`
- Sources: `nicolle-manufacturing`

###### Powder-booth filter cartridge (`new_filter`)

One real supplied filter cartridge, including medium/frame/seal once; measured actual dry/wet supplied state, issue and installed closing stock. Captured powder is retained content, not an extra new filter. No assumed lifetime or generic filter-count factor. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Powder-booth filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_new_filter; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_new_filter`
- Sources: `nicolle-manufacturing`

###### Unimpregnated cotton finishing cloth (`finish_wipe`)

Conditional actual dry cloth for post-sanding wiping, whole supplied cloth once; attached cleaner/water and separately purchased liquid additions retain their own identity and one owner. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Unimpregnated cotton finishing cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_finish_wipe; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_finish_wipe`
- Sources: `nicolle-manufacturing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Steam condensate returned to heat supplier (`condensate_return`)

Only actual external Product return of condensate, measured full mass, phase, temperature and enthalpy with supplier water/energy convention. Gross V; no assumed return, avoided-water credit or duplicate treatment. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Steam condensate returned to heat supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_condensate_return.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_condensate_return`
- Sources: `nicolle-manufacturing`

###### Heat-transfer liquid water returned to supplier (`hotwater_return`)

Only actual external return matching hotwater_carrier at its measured thermal state; gross full V with one heat/water owner. A stock remaining on site is not an external return. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Heat-transfer liquid water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_hotwater_return.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_hotwater_return`
- Sources: `nicolle-manufacturing`

##### Waste flows

###### Discarded epoxy coating powder (`waste_powder`)

One actual unreusable powder stream with complete composition/moisture; do not presume all powder recyclable or automatically remove its manufacture/treatment burden. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Discarded epoxy coating powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_waste_powder.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_waste_powder`
- Sources: `nicolle-manufacturing`

###### Spent aqueous alkaline degreasing bath (`spent_bath`)

Whole real outgoing bath: water, cleaner, entrained oil and metals measured separately as subledgers, not duplicate outgoing exchanges. No fixed15% NaOH waste identity. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Spent aqueous alkaline degreasing bath
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_spent_bath.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_spent_bath`
- Sources: `nicolle-manufacturing`

###### Metal-degreasing rinse wastewater (`rinse_wastewater`)

Actual separate rinse wastewater to identified treatment receiver, measured wet mass/volume and independently measured solids/chemistry. COD is a metric, not a named chemical mass. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Metal-degreasing rinse wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_rinse_wastewater.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_rinse_wastewater`
- Sources: `nicolle-manufacturing`

###### Oily metal-degreasing sludge (`degreasing_sludge`)

Actual separately removed sludge, full wet solids/oil/water and receiver. Deduplicate only the same masses already leaving in the bath/wastewater, not real water retained in closing stocks. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Oily metal-degreasing sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_degreasing_sludge.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_degreasing_sludge`
- Sources: `nicolle-manufacturing`

###### Epoxy-powder-loaded filter cartridge (`spent_filter`)

One actual whole filter cartridge with retained powder/water; do not charge the captured powder again as separate waste unless physically removed and weighed separately. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Epoxy-powder-loaded filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_spent_filter.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_spent_filter`
- Sources: `nicolle-manufacturing`

###### Contaminated cotton finishing cloth (`finish_wipe_waste`)

Actual spent finishing cloth with independently established powder/metal/oil/water contents; outgoing whole wet state once, real receiver, no duplicate detached solids unless physically separated. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Contaminated cotton finishing cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_finish_wipe_waste.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_finish_wipe_waste`
- Sources: `nicolle-manufacturing`

##### Elementary flows

###### Uncaptured epoxy coating powder particulate (`coating_particles`)

Only independently measured escaped coating particles, composition/size and actual air destination. Do not substitute total VOC, metal fume, resin content or captured filter load. No fixed transfer efficiency. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. If this actual operation occurs postrelease, collect it even when unauthorized, failed or rejected; permission and tests control acceptance/disposition only. Its separately identified raw records and incremental load belong to the original Q_c and observed h, never a new manufacturing Q; use cohort_service and preserve all actual inputs/losses/treatment.

- Selected flow: Uncaptured epoxy coating powder particulate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_coating_particles.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_coating_particles`
- Sources: `nicolle-manufacturing`

### Process: Final fitting and unique first quality release (`release`)

Fit actual supplied rubber feet; reconcile the complete BOM, joint/finish and stability/other applicable acceptance, calibrated net mass and first-release authorization. Failed/sampled units retain burden without accepted output.

#### Inputs

##### Product flows

###### Moulded rubber chair-foot pad (`rubber_foot`)

Actual complete supplied foot pad including real reinforcement/adhesive if contained; record elastomer, filler, geometry, mounting and independent installed net mass. Rubber footwear/resin is not the finished furniture foot. Do not purchase contained rubber constituents again.

- Selected flow: Moulded rubber chair-foot pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_rubber_foot; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_rubber_foot`
- Sources: `nicolle-manufacturing`

###### Metered alternating-current electricity (`release_electricity`)

Meter actual separately attributable electricity including relevant standby/start-stop/cleanup and support. Native interface is China1–35kV user-side grid-average consumption mix; use this UUID only when real site/geography/voltage/provider boundary matches. Other locations/voltage need a separately verified native flow, not a claim that the French illustrative factory uses a Chinese grid. Preserve MJ; actual kWh converts once by3.6MJ/kWh. Do not add full site meter and its submeters.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single calculated u_i; raw records from cp_release_electricity; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_release_electricity`
- Sources: `nicolle-manufacturing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete accepted stamped-steel chair (`first_release_chair`)

Unique first quality-release output Q: complete chair after actual pad fitting and all configuration-specific release checks; calibrated net kg excluding packaging, detached spares and test masses. Native manufactured Product family is production mix at plant, Mass/kg; it defines neither grade, SKU, safety class, lifetime nor fixed chair mass. Q includes same-cohort closing released FG and must not be reduced by it or counted again at dispatch. Full consuming context: site and period; manufacturer and subcontract finishing boundary; model and released drawing/BOM revision; complete fixed four-leg architecture; sheet and strip grade/heat / rolling state / thickness / actual widths and part geometry; seat / back/support / legs / stretchers / each rivet and installed rubber-foot specification; spot-weld and hot-rivet joining; actual cutting assist gas and forming lubrication; actual degreasing chemistry and supplied concentration/water; separately purchased bath ingredients; whole epoxy powder SKU/batch/SDS and make-or-buy; actual reclaim and cure records; actual electric / fuel or purchased-heat source and carrier state; actual water circuits; configured conformity/acceptance specification / joint/finish/stability checks and authorized first release; calibrated net complete-chair weighing excluding all packaging / detached spares and test masses; unique first-release Q in kg; counts and independently measured configuration masses; no catalogue conversion; failures / zero-output runs / startup/shutdown / idle / cleanup / sample tests and actual rework including unauthorized/failed/rejected work; opening/closing raw and WIP quantities with every inherited exchange vector; released FG opening/closing / original cohort Q_c / gross shipment/return identity and observed service horizon h; manufacturer/spec permission / postwork tests / acceptance and disposition for actual postrelease work; each package P/I/ER/S/EO/W and empty/attached/reusable stock; single upstream owner; actual new/old assets and maintenance parts with installed fluids and performed-service attribution; species-specific air/water/solid balances / moisture and independent conversions/uncertainty; native flow limitations / exact supplier compatibility / upstream and treatment gaps.

- Selected flow: Seats, primarily with metal frames `2b8511ea-6bd0-4283-b430-29da5bf2f701`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_first_release_chair`
- Sources: `nicolle-manufacturing`

##### Waste flows

###### Rejected coated steel chair (`reject_chair`)

Actual whole failed/sample-destroyed chair with contained rubber/powder once; component removals separately measured only when removed. Retain manufacturing, test and treatment burden; sale/offsite scrap does not transfer it automatically. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Rejected coated steel chair
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_reject_chair.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_reject_chair`
- Sources: `nicolle-manufacturing`

###### Rejected moulded rubber chair-foot pad (`pad_reject`)

Only physically separate rejected foot pads, independent material/moisture/receiver; not also the rubber already contained in whole rejected chairs. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Rejected moulded rubber chair-foot pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pad_reject.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pad_reject`
- Sources: `nicolle-manufacturing`

##### Elementary flows

### Process: Utilities, physical assets and maintenance (`support`)

Meter actual shared support, real new/old machine and tool movements, installed fluids and maintenance. Physical asset stocks differ from their actual attributable service burden.

#### Inputs

##### Product flows

###### Metered alternating-current electricity (`support_electricity`)

Meter actual separately attributable electricity including relevant standby/start-stop/cleanup and support. Native interface is China1–35kV user-side grid-average consumption mix; use this UUID only when real site/geography/voltage/provider boundary matches. Other locations/voltage need a separately verified native flow, not a claim that the French illustrative factory uses a Chinese grid. Preserve MJ; actual kWh converts once by3.6MJ/kWh. Do not add full site meter and its submeters.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single calculated u_i; raw records from cp_support_electricity; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_support_electricity`
- Sources: `nicolle-manufacturing`

###### Stamping press (`new_press`)

Only a real external new/used acquisition of this one physical asset. Measure actual complete supplied kg with installed fluid/parts subledgers; retain original serial/condition and opening/closing in-place stock. Gross V receipt is not one complete machine consumed perkgchair. Separate actual attributable service burden, maintenance and inherited charges; no fixed life or nominal lifetime allocation.

- Selected flow: Stamping press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_new_press.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_new_press`
- Sources: `nicolle-manufacturing`

###### Resistance spot-welding machine (`new_welder`)

Only a real external new/used acquisition of this one physical asset. Measure actual complete supplied kg with installed fluid/parts subledgers; retain original serial/condition and opening/closing in-place stock. Gross V receipt is not one complete machine consumed perkgchair. Separate actual attributable service burden, maintenance and inherited charges; no fixed life or nominal lifetime allocation.

- Selected flow: Resistance spot-welding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_new_welder.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_new_welder`
- Sources: `nicolle-manufacturing`

###### Powder-curing oven (`new_oven`)

Only a real external new/used acquisition of this one physical asset. Measure actual complete supplied kg with installed fluid/parts subledgers; retain original serial/condition and opening/closing in-place stock. Gross V receipt is not one complete machine consumed perkgchair. Separate actual attributable service burden, maintenance and inherited charges; no fixed life or nominal lifetime allocation.

- Selected flow: Powder-curing oven
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_new_oven.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_new_oven`
- Sources: `nicolle-manufacturing`

###### Air compressor (`new_compressor`)

Only a real external new/used acquisition of this one physical asset. Measure actual complete supplied kg with installed fluid/parts subledgers; retain original serial/condition and opening/closing in-place stock. Gross V receipt is not one complete machine consumed perkgchair. Separate actual attributable service burden, maintenance and inherited charges; no fixed life or nominal lifetime allocation.

- Selected flow: Air compressor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_new_compressor.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_new_compressor`
- Sources: `nicolle-manufacturing`

###### Steel stamping die (`new_die`)

Only a real external new/used acquisition of this one physical asset. Measure actual complete supplied kg with installed fluid/parts subledgers; retain original serial/condition and opening/closing in-place stock. Gross V receipt is not one complete machine consumed perkgchair. Separate actual attributable service burden, maintenance and inherited charges; no fixed life or nominal lifetime allocation.

- Selected flow: Steel stamping die
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_new_die.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_new_die`
- Sources: `nicolle-manufacturing`

###### Copper spot-welding electrode tip (`electrode`)

Only real separately supplied new/used maintenance material, exact grade/form/state and retained fluid. Record complete physical X_in even when it remains in full closing wet stock. Deduplicate only against another already recorded inlet or whole supplied machine/part, not against closing stock. Track service attribution separately once; no default coolant/refrigerant circuit.

- Selected flow: Copper spot-welding electrode tip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_electrode.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_electrode`
- Sources: `nicolle-manufacturing`

###### Mineral hydraulic-oil preparation (`hydraulic_oil`)

Only real separately supplied new/used maintenance material, exact grade/form/state and retained fluid. Record complete physical X_in even when it remains in full closing wet stock. Deduplicate only against another already recorded inlet or whole supplied machine/part, not against closing stock. Track service attribution separately once; no default coolant/refrigerant circuit.

- Selected flow: Mineral hydraulic-oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_hydraulic_oil.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_hydraulic_oil`
- Sources: `nicolle-manufacturing`

###### Liquid cooling-water charge (`cooling_charge`)

Only real separately supplied new/used maintenance material, exact grade/form/state and retained fluid. Record complete physical X_in even when it remains in full closing wet stock. Deduplicate only against another already recorded inlet or whole supplied machine/part, not against closing stock. Track service attribution separately once; no default coolant/refrigerant circuit.

- Selected flow: Liquid cooling-water charge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_cooling_charge.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_cooling_charge`
- Sources: `nicolle-manufacturing`

###### R134a refrigerant (`refrigerant`)

Only real separately supplied new/used maintenance material, exact grade/form/state and retained fluid. Record complete physical X_in even when it remains in full closing wet stock. Deduplicate only against another already recorded inlet or whole supplied machine/part, not against closing stock. Track service attribution separately once; no default coolant/refrigerant circuit.

- Selected flow: R134a refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_refrigerant.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_refrigerant`
- Sources: `nicolle-manufacturing`

###### Externally supplied compressed air (`compressed_air`)

Only actually purchased compressed air across the gate, whole dry-air/humidity mass at measured pressure/temperature; its supplier owns the compression burden once. If compressed on site, this external card is absent; actual compressor electricity and ambient species entries apply. Never charge bought whole air and its constituent gas supplies again.

- Selected flow: Externally supplied compressed air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_compressed_air.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_compressed_air`
- Sources: `nicolle-manufacturing`

##### Waste flows

##### Elementary flows

###### Dinitrogen from air (`ambient_nitrogen`)

Only real ambient species ingress for on-site compression, ventilation or actual combustion; measured gas state, integrated volume/speciation and humidity, with independent composition. Gross V balances with the respective actual outlet; not an additional purchased aggregate air input, capture credit or a gas presumed consumed in steel. Native resource-to-air compartment applies only to an actual environmental intake. Molecular N2 CAS7727-37-9 as a real resource from air; no liquid-N2 cylinder purchase or nitrous-oxide identity from synonyms. Native Mass/kg.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_ambient_nitrogen.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_ambient_nitrogen`
- Sources: `nicolle-manufacturing`

###### Oxygen from air (`ambient_oxygen`)

Only real ambient species ingress for on-site compression, ventilation or actual combustion; measured gas state, integrated volume/speciation and humidity, with independent composition. Gross V balances with the respective actual outlet; not an additional purchased aggregate air input, capture credit or a gas presumed consumed in steel. Native resource-to-air compartment applies only to an actual environmental intake. Molecular O2 CAS7782-44-7 as a real resource from air. Overbroad aliases for liquid/singlet/ionic oxygen do not establish those supplied forms. Native Mass/kg; this is not purchased cylinder oxygen.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_ambient_oxygen.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_ambient_oxygen`
- Sources: `nicolle-manufacturing`

###### Argon from air (`ambient_argon`)

Only real ambient species ingress for on-site compression, ventilation or actual combustion; measured gas state, integrated volume/speciation and humidity, with independent composition. Gross V balances with the respective actual outlet; not an additional purchased aggregate air input, capture credit or a gas presumed consumed in steel. Native resource-to-air compartment applies only to an actual environmental intake. Stable elemental Ar CAS7440-37-1, native Mass/kg resource from air, not a purchased liquid Product or emission. The argon-41 synonym is inconsistent and does not support radioactive argon or an activity unit.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_ambient_argon.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_ambient_argon`
- Sources: `nicolle-manufacturing`

###### Water vapour from ambient air (`ambient_humidity`)

Only real ambient species ingress for on-site compression, ventilation or actual combustion; measured gas state, integrated volume/speciation and humidity, with independent composition. Gross V balances with the respective actual outlet; not an additional purchased aggregate air input, capture credit or a gas presumed consumed in steel. Native resource-to-air compartment applies only to an actual environmental intake.

- Selected flow: Water vapour from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_ambient_humidity.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_ambient_humidity`
- Sources: `nicolle-manufacturing`

###### Carbon dioxide from ambient air (`ambient_co2`)

Only real ambient species ingress for on-site compression, ventilation or actual combustion; measured gas state, integrated volume/speciation and humidity, with independent composition. Gross V balances with the respective actual outlet; not an additional purchased aggregate air input, capture credit or a gas presumed consumed in steel. Native resource-to-air compartment applies only to an actual environmental intake.

- Selected flow: Carbon dioxide from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_ambient_co2.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_ambient_co2`
- Sources: `nicolle-manufacturing`

#### Outputs

##### Product flows

###### Cooling liquid water returned to supplier (`cooling_return`)

Only actual external Product water return; full gross V with measured temperature/enthalpy, contamination and water/heat supplier agreement. Internal closed-loop circulation cancels; it is not an external supply/return or automatic wastewater.

- Selected flow: Cooling liquid water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_cooling_return.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_cooling_return`
- Sources: `nicolle-manufacturing`

##### Waste flows

###### Retired stamping press (`retired_press`)

Only real physical retirement of that asset, complete remaining wet/filled state with actual removed parts distinguished. Gross V; real receiver and further treatment, no automatic avoided-machine credit or removal of already performed services. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Retired stamping press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_retired_press.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_retired_press`
- Sources: `nicolle-manufacturing`

###### Retired resistance spot-welding machine (`retired_welder`)

Only real physical retirement of that asset, complete remaining wet/filled state with actual removed parts distinguished. Gross V; real receiver and further treatment, no automatic avoided-machine credit or removal of already performed services. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Retired resistance spot-welding machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_retired_welder.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_retired_welder`
- Sources: `nicolle-manufacturing`

###### Retired powder-curing oven (`retired_oven`)

Only real physical retirement of that asset, complete remaining wet/filled state with actual removed parts distinguished. Gross V; real receiver and further treatment, no automatic avoided-machine credit or removal of already performed services. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Retired powder-curing oven
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_retired_oven.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_retired_oven`
- Sources: `nicolle-manufacturing`

###### Retired air compressor (`retired_compressor`)

Only real physical retirement of that asset, complete remaining wet/filled state with actual removed parts distinguished. Gross V; real receiver and further treatment, no automatic avoided-machine credit or removal of already performed services. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Retired air compressor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_retired_compressor.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_retired_compressor`
- Sources: `nicolle-manufacturing`

###### Retired steel stamping die (`retired_die`)

Only real physical retirement of that asset, complete remaining wet/filled state with actual removed parts distinguished. Gross V; real receiver and further treatment, no automatic avoided-machine credit or removal of already performed services. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Retired steel stamping die
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_retired_die.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_retired_die`
- Sources: `nicolle-manufacturing`

###### Removed copper spot-welding electrode tip (`removed_electrode`)

Actual removed used maintenance material in its full real wet state, X_out; separately measure attached oil/water only as subledgers unless physically separated. Match actual receiver; gross V never scaled by economic share. No output if material merely remains installed. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Removed copper spot-welding electrode tip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_removed_electrode.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_removed_electrode`
- Sources: `nicolle-manufacturing`

###### Removed mineral hydraulic-oil preparation (`removed_hydraulic_oil`)

Actual removed used maintenance material in its full real wet state, X_out; separately measure attached oil/water only as subledgers unless physically separated. Match actual receiver; gross V never scaled by economic share. No output if material merely remains installed. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Removed mineral hydraulic-oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_removed_hydraulic_oil.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_removed_hydraulic_oil`
- Sources: `nicolle-manufacturing`

###### Removed liquid cooling-water charge (`removed_cooling_charge`)

Actual removed used maintenance material in its full real wet state, X_out; separately measure attached oil/water only as subledgers unless physically separated. Match actual receiver; gross V never scaled by economic share. No output if material merely remains installed. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Removed liquid cooling-water charge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_removed_cooling_charge.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_removed_cooling_charge`
- Sources: `nicolle-manufacturing`

###### Removed r134a refrigerant (`removed_refrigerant`)

Actual removed used maintenance material in its full real wet state, X_out; separately measure attached oil/water only as subledgers unless physically separated. Match actual receiver; gross V never scaled by economic share. No output if material merely remains installed. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Removed r134a refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_removed_refrigerant.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_removed_refrigerant`
- Sources: `nicolle-manufacturing`

###### Oily maintenance wastewater (`oily_maintenance_water`)

Only a separate real external wet wastewater stream; retain actual water/oil/solid phases and identity. X_out overlaps other water/oil exits only once; a new water input remaining in full closing fluid is still X_in. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Oily maintenance wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_oily_maintenance_water.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_oily_maintenance_water`
- Sources: `nicolle-manufacturing`

##### Elementary flows

###### 1,1,1,2-Tetrafluoroethane to air (`refrigerant_leak`)

Conditional actual R134a leak, CAS811-97-2, independently reconciled with refill/recovery/installed stock. A maintenance charge is not an emission; another refrigerant requires its own card. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.
 Native ordinary HFC-134a CAS811-97-2, Mass/kg emission to unspecified air; not an indoor/long-term/water flow, Halon-2401, another refrigerant or the entire charging preparation. Actual measured leakage and current medium are required; no leak fraction or additional charge is inferred.

- Selected flow: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_refrigerant_leak.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_refrigerant_leak`
- Sources: `nicolle-manufacturing`

###### Dinitrogen to air (`nitrogen_out`)

Actual separately measured species outlet from the matched utility/ventilation process. Gross V includes unchanged inlet species without pretending it is reaction yield or another air mass. Native emission-to-air unspecified is not a resource intake, long-term release or water/soil emission. Do not fabricate a percentage; match source, atmosphere and phase, with real transformation accounted independently. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. Molecular N2 CAS7727-37-9, native Mass/kg emission to unspecified air, not total nitrogen, N2O, NOx or an air resource. No liquid supply conversion is established by synonyms.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_nitrogen_out.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_nitrogen_out`
- Sources: `nicolle-manufacturing`

###### Oxygen to air (`oxygen_out`)

Actual separately measured species outlet from the matched utility/ventilation process. Gross V includes unchanged inlet species without pretending it is reaction yield or another air mass. Native emission-to-air unspecified is not a resource intake, long-term release or water/soil emission. Do not fabricate a percentage; match source, atmosphere and phase, with real transformation accounted independently. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. Molecular O2 CAS7782-44-7 as an actual gas outlet to unspecified air, not an air resource, liquid-oxygen purchase or water/soil emission. Native Mass/kg; broad ionic/liquid aliases do not change molecular identity.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_oxygen_out.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_oxygen_out`
- Sources: `nicolle-manufacturing`

###### Argon to air (`argon_out`)

Actual separately measured species outlet from the matched utility/ventilation process. Gross V includes unchanged inlet species without pretending it is reaction yield or another air mass. Native emission-to-air unspecified is not a resource intake, long-term release or water/soil emission. Do not fabricate a percentage; match source, atmosphere and phase, with real transformation accounted independently. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. Nonradioactive elemental Ar CAS7440-37-1, native Mass/kg emission to unspecified air. The argon-41 synonym is inconsistent; do not use this stable-argon mass flow for radioactive argon/activity.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_argon_out.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_argon_out`
- Sources: `nicolle-manufacturing`

###### Unreacted atmospheric carbon dioxide to air (`ambient_co2_out`)

Actual separately measured species outlet from the matched utility/ventilation process. Gross V includes unchanged inlet species without pretending it is reaction yield or another air mass. Native emission-to-air unspecified is not a resource intake, long-term release or water/soil emission. Do not fabricate a percentage; match source, atmosphere and phase, with real transformation accounted independently. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Unreacted atmospheric carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_ambient_co2_out.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_ambient_co2_out`
- Sources: `nicolle-manufacturing`

###### Water vapour to air (`water_vapour`)

Only this independently identified actual molecular species generated/released to air unspecified, excluding long-term/indoor-only/water/soil identities. Native CAS, molecular identity, reference Mass/kg and all reference properties remain binding; broad synonyms do not turn H2O into heavy water or NO into NOx. Match real source/phase and fossil carbon origin where named. Total air/humidity is reconciled separately: no double mass of unchanged ingress and net generation, no assumed chemical reaction or steam system, no conversion from total VOC/COD/NOx or total element to this species. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. H2O CAS7732-18-5 in the gas phase, not ice/liquid/heavy/tritiated water despite overbroad synonyms. Native Mass/kg, air-unspecified emission, no fixed temperature/humidity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_water_vapour.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_water_vapour`
- Sources: `nicolle-manufacturing`

###### Fossil carbon dioxide to air (`fossil_co2`)

Only this independently identified actual molecular species generated/released to air unspecified, excluding long-term/indoor-only/water/soil identities. Native CAS, molecular identity, reference Mass/kg and all reference properties remain binding; broad synonyms do not turn H2O into heavy water or NO into NOx. Match real source/phase and fossil carbon origin where named. Total air/humidity is reconciled separately: no double mass of unchanged ingress and net generation, no assumed chemical reaction or steam system, no conversion from total VOC/COD/NOx or total element to this species. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. CO2 CAS124-38-9, fossil origin, not atmospheric pass-through, carbonate ion, dry ice or a radiocarbon tracer despite listed synonyms. Native Mass/kg emission to unspecified air.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_fossil_co2.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_fossil_co2`
- Sources: `nicolle-manufacturing`

###### Fossil carbon monoxide to air (`fossil_co`)

Only this independently identified actual molecular species generated/released to air unspecified, excluding long-term/indoor-only/water/soil identities. Native CAS, molecular identity, reference Mass/kg and all reference properties remain binding; broad synonyms do not turn H2O into heavy water or NO into NOx. Match real source/phase and fossil carbon origin where named. Total air/humidity is reconciled separately: no double mass of unchanged ingress and net generation, no assumed chemical reaction or steam system, no conversion from total VOC/COD/NOx or total element to this species. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. CO CAS630-08-0, fossil origin, gaseous molecular CO only. Synonyms mentioning exhaust/flue gas or cryogenic liquid do not identify whole exhaust or a purchased liquid as this emission. Native Mass/kg emission to unspecified air.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_fossil_co.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_fossil_co`
- Sources: `nicolle-manufacturing`

###### Nitrogen monoxide to air (`nitric_oxide`)

Only this independently identified actual molecular species generated/released to air unspecified, excluding long-term/indoor-only/water/soil identities. Native CAS, molecular identity, reference Mass/kg and all reference properties remain binding; broad synonyms do not turn H2O into heavy water or NO into NOx. Match real source/phase and fossil carbon origin where named. Total air/humidity is reconciled separately: no double mass of unchanged ingress and net generation, no assumed chemical reaction or steam system, no conversion from total VOC/COD/NOx or total element to this species. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. NO CAS10102-43-9, not NOx, HNO, nitroxyl or NO2 despite conflicting aliases. Identify actual molecular NO independently. Native Mass/kg emission to unspecified air.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_nitric_oxide.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_nitric_oxide`
- Sources: `nicolle-manufacturing`

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Only this independently identified actual molecular species generated/released to air unspecified, excluding long-term/indoor-only/water/soil identities. Native CAS, molecular identity, reference Mass/kg and all reference properties remain binding; broad synonyms do not turn H2O into heavy water or NO into NOx. Match real source/phase and fossil carbon origin where named. Total air/humidity is reconciled separately: no double mass of unchanged ingress and net generation, no assumed chemical reaction or steam system, no conversion from total VOC/COD/NOx or total element to this species. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. NO2 CAS10102-44-0. Native synonyms erroneously include N2O4; this explicit alias inconsistency does not permit a dimer or total-NOx mass. Independently establish actual monomer NO2/state and do not treat N2O4 as identical. Native Mass/kg emission to unspecified air.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_nitrogen_dioxide.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_nitrogen_dioxide`
- Sources: `nicolle-manufacturing`

###### Ozone to air (`ozone`)

Only this independently identified actual molecular species generated/released to air unspecified, excluding long-term/indoor-only/water/soil identities. Native CAS, molecular identity, reference Mass/kg and all reference properties remain binding; broad synonyms do not turn H2O into heavy water or NO into NOx. Match real source/phase and fossil carbon origin where named. Total air/humidity is reconciled separately: no double mass of unchanged ingress and net generation, no assumed chemical reaction or steam system, no conversion from total VOC/COD/NOx or total element to this species. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. O3 CAS10028-15-6, not O2 or dinitrogen trioxide despite a conflicting Chinese synonym. Native Mass/kg emission to unspecified air; no default formation in resistance spot welding.

- Selected flow: ozone `08a91e70-3ddc-11dd-9756-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_ozone.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_ozone`
- Sources: `nicolle-manufacturing`

### Process: Original-cohort postrelease handling and dispatch (`services`)

Retain warehousing, packing/handling/dispatch and every actual later operation, including unauthorized, failed or rejected work, as actual incremental service for original Q_c and observed h. Record every real material, part, water, energy, emission, loss, waste and treatment flow and its incurred burden. Permission and configuration-specific postwork tests/acceptance control authorization, continued qualification, hold and final disposition only; they never erase actual work or imply restoration. Reinspection, work, returns or shipment create no new production.

#### Inputs

##### Product flows

###### Metered alternating-current electricity (`services_electricity`)

Meter actual separately attributable electricity including relevant standby/start-stop/cleanup and support. Native interface is China1–35kV user-side grid-average consumption mix; use this UUID only when real site/geography/voltage/provider boundary matches. Other locations/voltage need a separately verified native flow, not a claim that the French illustrative factory uses a Chinese grid. Preserve MJ; actual kWh converts once by3.6MJ/kWh. Do not add full site meter and its submeters.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the single calculated u_i; raw records from cp_services_electricity; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_services_electricity`
- Sources: `nicolle-manufacturing`

###### Internal receipt of first-released complete chair (`released_received`)

Internal matching receipt of first_release_chair, carrying original manufacture vector and Q_c. No new purchase, production or Q; cancel matching internal Q on gate combination. Native family is manufactured complete metal-frame seat at plant, Mass/kg, without SKU/life/grade default. Full consuming context: site and period; manufacturer and subcontract finishing boundary; model and released drawing/BOM revision; complete fixed four-leg architecture; sheet and strip grade/heat / rolling state / thickness / actual widths and part geometry; seat / back/support / legs / stretchers / each rivet and installed rubber-foot specification; spot-weld and hot-rivet joining; actual cutting assist gas and forming lubrication; actual degreasing chemistry and supplied concentration/water; separately purchased bath ingredients; whole epoxy powder SKU/batch/SDS and make-or-buy; actual reclaim and cure records; actual electric / fuel or purchased-heat source and carrier state; actual water circuits; configured conformity/acceptance specification / joint/finish/stability checks and authorized first release; calibrated net complete-chair weighing excluding all packaging / detached spares and test masses; unique first-release Q in kg; counts and independently measured configuration masses; no catalogue conversion; failures / zero-output runs / startup/shutdown / idle / cleanup / sample tests and actual rework including unauthorized/failed/rejected work; opening/closing raw and WIP quantities with every inherited exchange vector; released FG opening/closing / original cohort Q_c / gross shipment/return identity and observed service horizon h; manufacturer/spec permission / postwork tests / acceptance and disposition for actual postrelease work; each package P/I/ER/S/EO/W and empty/attached/reusable stock; single upstream owner; actual new/old assets and maintenance parts with installed fluids and performed-service attribution; species-specific air/water/solid balances / moisture and independent conversions/uncertainty; native flow limitations / exact supplier compatibility / upstream and treatment gaps.

- Selected flow: Seats, primarily with metal frames `2b8511ea-6bd0-4283-b430-29da5bf2f701`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i for the matching first-release transfer without new Q or external purchase; raw records from cp_released_received.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_released_received`
- Sources: `nicolle-manufacturing`

###### Returned unused complete steel chair (`chair_return`)

Actual external return of the same previously released unused complete configuration, with original shipment/cohort identity and independently weighed current mass/state. No assumption current return equals original shipment; water, damage or removed parts recorded explicitly. Incomplete/broken fragments need their own physical/waste identities and cannot use complete-chair reference. No new Q. Native manufactured complete Product family Mass/kg at plant; receiving/service location disclosed. Full consuming context: site and period; manufacturer and subcontract finishing boundary; model and released drawing/BOM revision; complete fixed four-leg architecture; sheet and strip grade/heat / rolling state / thickness / actual widths and part geometry; seat / back/support / legs / stretchers / each rivet and installed rubber-foot specification; spot-weld and hot-rivet joining; actual cutting assist gas and forming lubrication; actual degreasing chemistry and supplied concentration/water; separately purchased bath ingredients; whole epoxy powder SKU/batch/SDS and make-or-buy; actual reclaim and cure records; actual electric / fuel or purchased-heat source and carrier state; actual water circuits; configured conformity/acceptance specification / joint/finish/stability checks and authorized first release; calibrated net complete-chair weighing excluding all packaging / detached spares and test masses; unique first-release Q in kg; counts and independently measured configuration masses; no catalogue conversion; failures / zero-output runs / startup/shutdown / idle / cleanup / sample tests and actual rework including unauthorized/failed/rejected work; opening/closing raw and WIP quantities with every inherited exchange vector; released FG opening/closing / original cohort Q_c / gross shipment/return identity and observed service horizon h; manufacturer/spec permission / postwork tests / acceptance and disposition for actual postrelease work; each package P/I/ER/S/EO/W and empty/attached/reusable stock; single upstream owner; actual new/old assets and maintenance parts with installed fluids and performed-service attribution; species-specific air/water/solid balances / moisture and independent conversions/uncertainty; native flow limitations / exact supplier compatibility / upstream and treatment gaps.

- Selected flow: Seats, primarily with metal frames `2b8511ea-6bd0-4283-b430-29da5bf2f701`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_chair_return.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_chair_return`
- Sources: `nicolle-manufacturing`

###### Replacement moulded rubber chair-foot pad (`service_pad`)

Any actual replacement, including unapproved/failed/rejected work, for the original released cohort, exact whole supplied pad and current installed/removed part states. No automatic repairability, new chair output or repeat purchase of contained material. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration.

- Selected flow: Replacement moulded rubber chair-foot pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_service_pad; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_service_pad`
- Sources: `nicolle-manufacturing`

###### Liquid water for actual postrelease work (`service_water`)

Actual additional cleaning/work water for original cohort only; retain whole raw X_in even if left in full closing wet FG/service stocks. Deduplicate against another inlet, never merely against closing stock; no water-as-density shortcut.  Native Process Water is treated industrial-use liquid water, Mass/kg. Adopt only the actual compatible treatment/quality/acquisition and provider gate; no DI/potable/density or supplier assumption, no extra treatment already inside the provider. Other actual water types require their own verified identity. Collect all actual postrelease-work water, including unauthorized, failed or rejected work; permission affects authorization and qualification/disposition only. This card is the independently measured gross liquid-water inlet V_i in kg, normalized once by original Q_c over the actual observed h, with no burden-stock correction or economic/service share. Its separately owned actual supply and performed-work/treatment burdens remain linked once.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_service_water; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_service_water`
- Sources: `nicolle-manufacturing`

###### Whole epoxy powder for authorized recoating (`service_powder`)

Any actual postrelease recoating, including unapproved/failed/rejected work, with original-part trial, new cure/inspection/posttests/acceptance/disposition and measured incremental energy/cleaning/losses. Same whole dry thermoset epoxy Product-family restrictions as powder; supplied formulation once, no resin/pigment repurchase or assumed restoration of a damaged chair. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration.

- Selected flow: Powder coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; raw records from cp_service_powder; services use original Q_c.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_service_powder`
- Sources: `tiger-processing-1213`

##### Waste flows

###### Actual externally returned damaged steel chair waste (`damaged_chair_return`)

Actual damaged/incomplete previously released chair received as waste, independently weighed in its current state and linked to original dispatch/cohort. It is not the complete accepted Product chair_return and does not create new purchase, Q, burden reversal or credit. A measured current kg return cannot reverse original delivered load without original event and justified vector evidence; actual receiver status and disposition remain explicit. Full actual gross V in kg, normalized once by Q or original Q_c, never a burden vector, stock-corrected use or economic share. Real associated procurement/treatment/work burden has one separate owner; no extra purchase or credit. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration.

- Selected flow: Actual externally returned damaged steel chair waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_damaged_chair_return.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_damaged_chair_return`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

##### Elementary flows

###### Actual atmospheric H2O vapour into held chairs (`service_humidity`)

Actual ordinary H2O vapour ingress affecting released chairs/returns during normal storage/handling or actual work, measured separately from packaging/support inlets. Preserve current full wet FG/repair-custody stocks and the real inlet simultaneously, with original Q_c and observed h. No repair assumption, moisture fraction, density or capture credit. Full actual gross V in kg, normalized once by Q or original Q_c, never a burden vector, stock-corrected use or economic share. Real associated procurement/treatment/work burden has one separate owner; no extra purchase or credit. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration.

- Selected flow: Actual atmospheric H2O vapour into held chairs
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_service_humidity.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_service_humidity`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

#### Outputs

##### Product flows

###### Gross physical dispatch of complete chair (`gross_dispatch`)

Actual measured gross shipment leg G of complete declared chairs, including original-cohort stock; net chair mass excludes separately tracked attached packaging. Numerator is full real V_G, never manufacturing load, stock-corrected use or an economic fraction. No new Q, purchase, upstream burden or credit; original manufacturing and actual performed service keep their one owners. Native manufactured complete metal-frame seat Product family at plant, Mass/kg; actual dispatch location and condition disclosed. Full consuming context: site and period; manufacturer and subcontract finishing boundary; model and released drawing/BOM revision; complete fixed four-leg architecture; sheet and strip grade/heat / rolling state / thickness / actual widths and part geometry; seat / back/support / legs / stretchers / each rivet and installed rubber-foot specification; spot-weld and hot-rivet joining; actual cutting assist gas and forming lubrication; actual degreasing chemistry and supplied concentration/water; separately purchased bath ingredients; whole epoxy powder SKU/batch/SDS and make-or-buy; actual reclaim and cure records; actual electric / fuel or purchased-heat source and carrier state; actual water circuits; configured conformity/acceptance specification / joint/finish/stability checks and authorized first release; calibrated net complete-chair weighing excluding all packaging / detached spares and test masses; unique first-release Q in kg; counts and independently measured configuration masses; no catalogue conversion; failures / zero-output runs / startup/shutdown / idle / cleanup / sample tests and actual rework including unauthorized/failed/rejected work; opening/closing raw and WIP quantities with every inherited exchange vector; released FG opening/closing / original cohort Q_c / gross shipment/return identity and observed service horizon h; manufacturer/spec permission / postwork tests / acceptance and disposition for actual postrelease work; each package P/I/ER/S/EO/W and empty/attached/reusable stock; single upstream owner; actual new/old assets and maintenance parts with installed fluids and performed-service attribution; species-specific air/water/solid balances / moisture and independent conversions/uncertainty; native flow limitations / exact supplier compatibility / upstream and treatment gaps.

- Selected flow: Seats, primarily with metal frames `2b8511ea-6bd0-4283-b430-29da5bf2f701`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_gross_dispatch.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_gross_dispatch`
- Sources: `nicolle-manufacturing`

##### Waste flows

###### Discarded previously released coated steel chair (`service_chair_waste`)

Actual released chair disposed after storage/handling/work, complete current physical state; original manufacture stays with original cohort. Do not subtract it from first Q or presume restoration. Actual incremental work/treatment remains attributable. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Discarded previously released coated steel chair
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_service_chair_waste.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_service_chair_waste`
- Sources: `nicolle-manufacturing`

###### Removed rubber chair-foot pad (`service_removed_pad`)

Actual separate removed pad with attached water/adhesive once, real destination and original cohort; not a second whole discarded chair. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Removed rubber chair-foot pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_service_removed_pad.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_service_removed_pad`
- Sources: `nicolle-manufacturing`

###### Postrelease chair-cleaning wastewater (`service_wastewater`)

Only actual separately exiting wet wastewater with original-cohort work and observed horizon; keep independently measured composition and receiver without inventing chemical species from COD. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit.

- Selected flow: Postrelease chair-cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_service_wastewater.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_service_wastewater`
- Sources: `nicolle-manufacturing`

##### Elementary flows

###### Water vapour from postrelease work (`service_vapour`)

Only actual original-cohort service H2O vapour, native CAS7732-18-5 Mass/kg emission to unspecified air; no heavy-water identity or duplication of an already measured wet-water exit. Preserve actual phase change and independent gross humidity inlet/outlet. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. H2O CAS7732-18-5 in the gas phase, not ice/liquid/heavy/tritiated water despite overbroad synonyms. Native Mass/kg, air-unspecified emission, no fixed temperature/humidity. Includes actual ordinary held-chair storage/handling moisture loss without any repair; packaging vapour has its own disjoint event, never duplicate the same outlet.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_service_vapour.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_service_vapour`
- Sources: `nicolle-manufacturing`

### Process: Separate gross packaging events (`packaging`)

Each actual supplied package has separate conditional P, I, ER, S, EO and W cards. These cards disclose gross physical legs and their one load-ownership link.

#### Inputs

##### Product flows

###### Corrugated shipping carton (`pkg_carton_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual whole corrugated shipping carton including its manufactured joints/printing once; native folding-box candidate has contrary durability wording and is not adopted. No fixed fibre mix, dry-only mass or packing rate. Conditional actual P event only. Numerator is the complete measured gross physical leg V_carton_P, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_carton_p.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_carton_p`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Corrugated shipping carton (`pkg_carton_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual whole corrugated shipping carton including its manufactured joints/printing once; native folding-box candidate has contrary durability wording and is not adopted. No fixed fibre mix, dry-only mass or packing rate. Conditional actual I event only. Numerator is the complete measured gross physical leg V_carton_I, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_carton_i.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_carton_i`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Corrugated shipping carton (`pkg_carton_er`)

One actual whole corrugated shipping carton including its manufactured joints/printing once; native folding-box candidate has contrary durability wording and is not adopted. No fixed fibre mix, dry-only mass or packing rate. Conditional actual ER event only. Numerator is the complete measured gross physical leg V_carton_ER, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_carton_er.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_carton_er`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Polyethylene protective film (`pkg_film_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual supplied PE film, CAS9002-88-4, exact grade/thickness/print/adhesive inclusion and whole wet state. Native Product family is PE film at plant; its luggage classification is an isolated taxonomy defect, while basename/CAS/comment consistently describe PE film, not PET or resin. No recycled-content/provider/geography default. Conditional actual P event only. Numerator is the complete measured gross physical leg V_film_P, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_film_p.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_film_p`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Polyethylene protective film (`pkg_film_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual supplied PE film, CAS9002-88-4, exact grade/thickness/print/adhesive inclusion and whole wet state. Native Product family is PE film at plant; its luggage classification is an isolated taxonomy defect, while basename/CAS/comment consistently describe PE film, not PET or resin. No recycled-content/provider/geography default. Conditional actual I event only. Numerator is the complete measured gross physical leg V_film_I, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_film_i.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_film_i`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Polyethylene protective film (`pkg_film_er`)

One actual supplied PE film, CAS9002-88-4, exact grade/thickness/print/adhesive inclusion and whole wet state. Native Product family is PE film at plant; its luggage classification is an isolated taxonomy defect, while basename/CAS/comment consistently describe PE film, not PET or resin. No recycled-content/provider/geography default. Conditional actual ER event only. Numerator is the complete measured gross physical leg V_film_ER, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_film_er.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_film_er`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Wooden transport pallet (`pkg_pallet_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual manufactured wooden transport platform with its joints/fasteners, species, moisture, treatment and construction measured; native broad finished wooden load-platform family is at plant, Mass/kg, not a compulsory EURO size, collar or combined package. No fixed trips, loading capacity, service life or automatic reuse credit. Conditional actual P event only. Numerator is the complete measured gross physical leg V_pallet_P, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_pallet_p.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_pallet_p`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Wooden transport pallet (`pkg_pallet_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual manufactured wooden transport platform with its joints/fasteners, species, moisture, treatment and construction measured; native broad finished wooden load-platform family is at plant, Mass/kg, not a compulsory EURO size, collar or combined package. No fixed trips, loading capacity, service life or automatic reuse credit. Conditional actual I event only. Numerator is the complete measured gross physical leg V_pallet_I, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_pallet_i.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_pallet_i`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Wooden transport pallet (`pkg_pallet_er`)

One actual manufactured wooden transport platform with its joints/fasteners, species, moisture, treatment and construction measured; native broad finished wooden load-platform family is at plant, Mass/kg, not a compulsory EURO size, collar or combined package. No fixed trips, loading capacity, service life or automatic reuse credit. Conditional actual ER event only. Numerator is the complete measured gross physical leg V_pallet_ER, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_pallet_er.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_pallet_er`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Polypropylene-backed adhesive packing tape (`pkg_tape_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. One actual whole supplied tape with its PP backing and adhesive once; actual release liner/core identified and split only if separate physical exchanges. No purchase of adhesive solids/solvent again. Conditional actual P event only. Numerator is the complete measured gross physical leg V_tape_P, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_tape_p.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_tape_p`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Polypropylene-backed adhesive packing tape (`pkg_tape_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. One actual whole supplied tape with its PP backing and adhesive once; actual release liner/core identified and split only if separate physical exchanges. No purchase of adhesive solids/solvent again. Conditional actual I event only. Numerator is the complete measured gross physical leg V_tape_I, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_tape_i.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_tape_i`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Polypropylene-backed adhesive packing tape (`pkg_tape_er`)

One actual whole supplied tape with its PP backing and adhesive once; actual release liner/core identified and split only if separate physical exchanges. No purchase of adhesive solids/solvent again. Conditional actual ER event only. Numerator is the complete measured gross physical leg V_tape_ER, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_tape_er.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_tape_er`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Actual solid-wood pallet repair board (`pack_repair_wood`)

Only an actual separately supplied solid-wood board added to the pallet, not a whole pallet or its included boards. Record species, machining, treatment, contamination, supplied moisture, measured full wet ingress and installed/offcut/removed states; no assumed repair or wood density. Full actual gross V in kg, normalized once by Q or original Q_c, never a burden vector, stock-corrected use or economic share. Real associated procurement/treatment/work burden has one separate owner; no extra purchase or credit. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration.

- Selected flow: Actual solid-wood pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pack_repair_wood.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack_repair_wood`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Actual packaging-work tap water (`pack_repair_water`)

Actual independently added liquid tap water for packaging cleaning/work, only where the potable treated piped-water supply/provider matches the complete native Product family. Reference Mass/kg; its secondary Volume coefficient is not actual density. Water already in whole wet articles is a child account, not this extra receipt. Full actual gross V in kg, normalized once by Q or original Q_c, never a burden vector, stock-corrected use or economic share. Real associated procurement/treatment/work burden has one separate owner; no extra purchase or credit. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pack_repair_water.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack_repair_water`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

##### Waste flows

##### Elementary flows

###### Actual atmospheric H2O vapour into packaging (`pack_humidity`)

Actual packaging moisture uptake during ordinary storage/handling or real cleaning/work, without requiring any repair. Record independently measured ordinary H2O vapour phase and gross environmental inlet; no density shortcut, negative water-emission identity or inferred amount from one residual. Full actual gross V in kg, normalized once by Q or original Q_c, never a burden vector, stock-corrected use or economic share. Real associated procurement/treatment/work burden has one separate owner; no extra purchase or credit. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration.

- Selected flow: Actual atmospheric H2O vapour into packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pack_humidity.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack_humidity`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

#### Outputs

##### Product flows

###### Corrugated shipping carton (`pkg_carton_s`)

One actual whole corrugated shipping carton including its manufactured joints/printing once; native folding-box candidate has contrary durability wording and is not adopted. No fixed fibre mix, dry-only mass or packing rate. Conditional actual S event only. Numerator is the complete measured gross physical leg V_carton_S, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_carton_s.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_carton_s`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Corrugated shipping carton (`pkg_carton_eo`)

One actual whole corrugated shipping carton including its manufactured joints/printing once; native folding-box candidate has contrary durability wording and is not adopted. No fixed fibre mix, dry-only mass or packing rate. Conditional actual EO event only. Numerator is the complete measured gross physical leg V_carton_EO, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_carton_eo.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_carton_eo`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Polyethylene protective film (`pkg_film_s`)

One actual supplied PE film, CAS9002-88-4, exact grade/thickness/print/adhesive inclusion and whole wet state. Native Product family is PE film at plant; its luggage classification is an isolated taxonomy defect, while basename/CAS/comment consistently describe PE film, not PET or resin. No recycled-content/provider/geography default. Conditional actual S event only. Numerator is the complete measured gross physical leg V_film_S, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_film_s.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_film_s`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Polyethylene protective film (`pkg_film_eo`)

One actual supplied PE film, CAS9002-88-4, exact grade/thickness/print/adhesive inclusion and whole wet state. Native Product family is PE film at plant; its luggage classification is an isolated taxonomy defect, while basename/CAS/comment consistently describe PE film, not PET or resin. No recycled-content/provider/geography default. Conditional actual EO event only. Numerator is the complete measured gross physical leg V_film_EO, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_film_eo.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_film_eo`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Wooden transport pallet (`pkg_pallet_s`)

One actual manufactured wooden transport platform with its joints/fasteners, species, moisture, treatment and construction measured; native broad finished wooden load-platform family is at plant, Mass/kg, not a compulsory EURO size, collar or combined package. No fixed trips, loading capacity, service life or automatic reuse credit. Conditional actual S event only. Numerator is the complete measured gross physical leg V_pallet_S, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_pallet_s.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_pallet_s`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Wooden transport pallet (`pkg_pallet_eo`)

One actual manufactured wooden transport platform with its joints/fasteners, species, moisture, treatment and construction measured; native broad finished wooden load-platform family is at plant, Mass/kg, not a compulsory EURO size, collar or combined package. No fixed trips, loading capacity, service life or automatic reuse credit. Conditional actual EO event only. Numerator is the complete measured gross physical leg V_pallet_EO, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_pallet_eo.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_pallet_eo`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Polypropylene-backed adhesive packing tape (`pkg_tape_s`)

One actual whole supplied tape with its PP backing and adhesive once; actual release liner/core identified and split only if separate physical exchanges. No purchase of adhesive solids/solvent again. Conditional actual S event only. Numerator is the complete measured gross physical leg V_tape_S, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_tape_s.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_tape_s`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Polypropylene-backed adhesive packing tape (`pkg_tape_eo`)

One actual whole supplied tape with its PP backing and adhesive once; actual release liner/core identified and split only if separate physical exchanges. No purchase of adhesive solids/solvent again. Conditional actual EO event only. Numerator is the complete measured gross physical leg V_tape_EO, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once.

- Selected flow: Polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_tape_eo.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_tape_eo`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

##### Waste flows

###### Discarded corrugated shipping carton (`pkg_carton_w`)

One actual whole corrugated shipping carton including its manufactured joints/printing once; native folding-box candidate has contrary durability wording and is not adopted. No fixed fibre mix, dry-only mass or packing rate. Conditional actual W event only. Numerator is the complete measured gross physical leg V_carton_W, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once. Actual waste destination and full contamination are separate from the native manufactured Product; no Product UUID is used for waste. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. For one actual collected mixed outlet, this W is only its independently measured origin child account under pack_mixed_waste, not an additive second exchange or treatment. Otherwise retain this real separate outlet.

- Selected flow: Discarded corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_carton_w.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_carton_w`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Discarded polyethylene protective film (`pkg_film_w`)

One actual supplied PE film, CAS9002-88-4, exact grade/thickness/print/adhesive inclusion and whole wet state. Native Product family is PE film at plant; its luggage classification is an isolated taxonomy defect, while basename/CAS/comment consistently describe PE film, not PET or resin. No recycled-content/provider/geography default. Conditional actual W event only. Numerator is the complete measured gross physical leg V_film_W, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once. Actual waste destination and full contamination are separate from the native manufactured Product; no Product UUID is used for waste. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. For one actual collected mixed outlet, this W is only its independently measured origin child account under pack_mixed_waste, not an additive second exchange or treatment. Otherwise retain this real separate outlet.

- Selected flow: Discarded polyethylene protective film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_film_w.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_film_w`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Discarded wooden transport pallet (`pkg_pallet_w`)

One actual manufactured wooden transport platform with its joints/fasteners, species, moisture, treatment and construction measured; native broad finished wooden load-platform family is at plant, Mass/kg, not a compulsory EURO size, collar or combined package. No fixed trips, loading capacity, service life or automatic reuse credit. Conditional actual W event only. Numerator is the complete measured gross physical leg V_pallet_W, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once. Actual waste destination and full contamination are separate from the native manufactured Product; no Product UUID is used for waste. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. For one actual collected mixed outlet, this W is only its independently measured origin child account under pack_mixed_waste, not an additive second exchange or treatment. Otherwise retain this real separate outlet.

- Selected flow: Discarded wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_pallet_w.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_pallet_w`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Discarded polypropylene-backed adhesive packing tape (`pkg_tape_w`)

One actual whole supplied tape with its PP backing and adhesive once; actual release liner/core identified and split only if separate physical exchanges. No purchase of adhesive solids/solvent again. Conditional actual W event only. Numerator is the complete measured gross physical leg V_tape_W, never A, stock-corrected consumption, net purchase, economic share or service vector. P/I/ER/S/EO/W are distinct physical events; same incoming material is P or I once, not both. Opening/closing includes empty, WIP/FG-attached and reusable stock; whole wet influx remains even if retained at close. Internal reuse cancels. The physical card adds no purchase/provider burden or credit: link the one genuine incurred-load dimension separately and attribute it once. Actual waste destination and full contamination are separate from the native manufactured Product; no Product UUID is used for waste. This card discloses the full actual outgoing physical event V, without stock correction or a burden-share multiplier. Keep the real associated manufacturing, emission and treatment load dimension under its original justified cohort/owner once; an offsite outlet/sale is no automatic T_out deduction or credit. For one actual collected mixed outlet, this W is only its independently measured origin child account under pack_mixed_waste, not an additive second exchange or treatment. Otherwise retain this real separate outlet.

- Selected flow: Discarded polypropylene-backed adhesive packing tape
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pkg_tape_w.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pkg_tape_w`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Actual separately removed pallet repair wood (`pack_removed_wood`)

Only actual separately removed wooden board/offcut waste, full wet Mass/kg, with treatment/contamination, hazardous status and actual qualified receiver. Native Wood waste includes wood-packaging residues; its agglomerated-briquette classification conflicts with its broader name/comment and is retained as taxonomy debt, not evidence of briquetting, recycling, wood ash or fixed waste composition. Do not use this for a whole mixed outlet or add it again inside whole pallet W. Full actual gross V in kg, normalized once by Q or original Q_c, never a burden vector, stock-corrected use or economic share. Real associated procurement/treatment/work burden has one separate owner; no extra purchase or credit. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pack_removed_wood.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack_removed_wood`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Actual packaging-cleaning wastewater (`pack_wastewater`)

Only an actual separate liquid wastewater outlet from packaging work, full wet mass and independently measured composition/receiver. Do not duplicate water retained in outgoing wet wood/packaging or infer chemicals from COD. Full actual gross V in kg, normalized once by Q or original Q_c, never a burden vector, stock-corrected use or economic share. Real associated procurement/treatment/work burden has one separate owner; no extra purchase or credit. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration.

- Selected flow: Actual packaging-cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pack_wastewater.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack_wastewater`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

###### Actual collected mixed packaging waste (`pack_mixed_waste`)

Only if carton/film/wood/tape really leave as one collected mixed stream, record one actual complete wet Waste exchange and one treatment/provider record. Component W origins are independently measured conserving non-additive child accounts: their sum reconciles this actual stream without adding a second Waste event. If genuinely separate outlets exist, retain their separate W cards instead; never invent separation or mixing. Full actual gross V in kg, normalized once by Q or original Q_c, never a burden vector, stock-corrected use or economic share. Real associated procurement/treatment/work burden has one separate owner; no extra purchase or credit. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration.

- Selected flow: Actual collected mixed packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pack_mixed_waste.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack_mixed_waste`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

##### Elementary flows

###### Actual packaging H2O vapour outlet (`pack_vapour`)

Actual ordinary H2O vapour released during normal packaging storage/handling moisture loss or real cleaning/work; no repair permission is needed to record natural humidity exchange. Native CAS7732-18-5, gaseous Mass/kg emission to unspecified air, not liquid/ice/heavy/tritiated water despite noisy aliases. Preserve separately measured gross inlet/outlet and actual change of phase; no fixed evaporation rate. Full actual gross V in kg, normalized once by Q or original Q_c, never a burden vector, stock-corrected use or economic share. Real associated procurement/treatment/work burden has one separate owner; no extra purchase or credit. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the single calculated u_i; numerator for this card is only the full measured gross physical leg V_i; raw records from cp_pack_vapour.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_pack_vapour`
- Sources: `nicolle-manufacturing`; `tiger-processing-1213`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all inventory rows | This is attributional manufacturing guidance only where allocation is the justified way to address multifunctionality. Substitution and avoided-product credits are not automatic. First use dedicated records, then actual or virtual subdivision; keep each chair configuration, finishing batch, sample and service cohort traceable. | `jrc-ilcd-2010` |
| allocation_causality | remaining common exchanges | For every remaining exchange identify the determining physical causal relationship with the relevant functions and document why it determines that exchange. Common units, material embodiment, time or energy may support different exchange-specific relationships; they are not a freely selectable universal mass/time key. | `jrc-ilcd-2010` |
| allocation_residual | genuinely unresolved common-process residual | Only genuine remaining common-process residual uses contemporaneous market value of each actual cofunction at the same process gate, state and quality. Reconstruct that point from later prices by excluding downstream finishing, transport and packing; retain prices, period, quantities, uncertainty and sensitivity. Do not treat a chair as a QFD multifunctional appliance or apply fixed fractions. | `jrc-ilcd-2010` |
| allocation_failures | manufacturing; treatment; services | All real failed/zero-output/start-stop/idle/cleanup/sample/rework and treatment loads remain with their proper cohort. Ordinary waste, rejected goods, samples or offsite sales are not T_out deductions. Transfer a vector only once for a real independent other cohort/function with a justified allocation/handover decision, while physical gross legs remain complete. Retain actual loads at Q=0 without a unit result. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collection stores unnormalized originals only. Future factory values are collection requirements, not already collected data. Conversion/attribution occurs before normalize_once; physical gross events use their own full V numerator, without the manufacture/service load-vector correction. Every card and aggregation label reads that same final value.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_sheet | fabrication | sheet | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_strip | fabrication | strip | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_rivet | fabrication | rivet | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain measured solid-material m3 for this exact part by calibrated displacement or traceable exact drawing geometry, original count and independent weighed kg; no guessed density or bounding-cylinder volume. | m3 | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_forming_oil | fabrication | forming_oil | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_abrasive | fabrication | abrasive | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_wipe | fabrication | wipe | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_laser_nitrogen | fabrication | laser_nitrogen | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_laser_oxygen | fabrication | laser_oxygen | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_steel_scrap | fabrication | steel_scrap | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_spent_abrasive | fabrication | spent_abrasive | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_oily_wipe | fabrication | oily_wipe | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_metal_dust | fabrication | metal_dust | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_collected_metal_dust | fabrication | collected_metal_dust | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_alkaline_cleaner | finish | alkaline_cleaner | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_dilution_water | finish | dilution_water | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_di_water | finish | di_water | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_caustic | finish | caustic | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_carbonate | finish | carbonate | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_powder | finish | powder | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_natural_gas | finish | natural_gas | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_purchased_heat | finish | purchased_heat | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | MJ | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_steam_carrier | finish | steam_carrier | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_hotwater_carrier | finish | hotwater_carrier | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_waste_powder | finish | waste_powder | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_spent_bath | finish | spent_bath | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_rinse_wastewater | finish | rinse_wastewater | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_degreasing_sludge | finish | degreasing_sludge | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_spent_filter | finish | spent_filter | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_condensate_return | finish | condensate_return | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_hotwater_return | finish | hotwater_return | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_coating_particles | finish | coating_particles | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_rubber_foot | release | rubber_foot | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_first_release_chair | release | first_release_chair | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record every first-release complete configuration once; calibrated net complete-chair weighing and tare excluding packaging/detached spares/test loads; reconcile fitted feet, drawing/BOM, acceptance authorization and sum actual net kg to Q. Counts only reconcile the measured mass, never infer it. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_reject_chair | release | reject_chair | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pad_reject | release | pad_reject | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_fabrication_electricity | fabrication | fabrication_electricity | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | MJ | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_finish_electricity | finish | finish_electricity | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | MJ | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_release_electricity | release | release_electricity | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | MJ | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_support_electricity | support | support_electricity | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | MJ | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_services_electricity | services | services_electricity | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | MJ | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_new_press | support | new_press | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_retired_press | support | retired_press | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_new_welder | support | new_welder | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_retired_welder | support | retired_welder | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_new_oven | support | new_oven | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_retired_oven | support | retired_oven | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_new_compressor | support | new_compressor | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_retired_compressor | support | retired_compressor | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_new_die | support | new_die | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_retired_die | support | retired_die | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_electrode | support | electrode | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_removed_electrode | support | removed_electrode | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_hydraulic_oil | support | hydraulic_oil | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_removed_hydraulic_oil | support | removed_hydraulic_oil | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_cooling_charge | support | cooling_charge | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_removed_cooling_charge | support | removed_cooling_charge | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_refrigerant | support | refrigerant | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_removed_refrigerant | support | removed_refrigerant | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_oily_maintenance_water | support | oily_maintenance_water | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_cooling_return | support | cooling_return | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_refrigerant_leak | support | refrigerant_leak | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_compressed_air | support | compressed_air | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_ambient_nitrogen | support | ambient_nitrogen | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_ambient_oxygen | support | ambient_oxygen | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_ambient_argon | support | ambient_argon | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_ambient_humidity | support | ambient_humidity | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_ambient_co2 | support | ambient_co2 | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_nitrogen_out | support | nitrogen_out | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_oxygen_out | support | oxygen_out | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_argon_out | support | argon_out | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_ambient_co2_out | support | ambient_co2_out | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_water_vapour | support | water_vapour | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_fossil_co2 | support | fossil_co2 | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_fossil_co | support | fossil_co | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_nitric_oxide | support | nitric_oxide | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_nitrogen_dioxide | support | nitrogen_dioxide | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_ozone | support | ozone | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_released_received | services | released_received | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_chair_return | services | chair_return | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_service_pad | services | service_pad | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_service_water | services | service_water | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; actual source_process; independent physical inlet and same-side overlap; actual performed service, including failed/unapproved work | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. Collect all actual postrelease-work water, including unauthorized, failed or rejected work; permission affects authorization and qualification/disposition only. This card is the independently measured gross liquid-water inlet V_i in kg, normalized once by original Q_c over the actual observed h, with no burden-stock correction or economic/service share. Its separately owned actual supply and performed-work/treatment burdens remain linked once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_service_powder | services | service_powder | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_gross_dispatch | services | gross_dispatch | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_service_chair_waste | services | service_chair_waste | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_service_removed_pad | services | service_removed_pad | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_service_wastewater | services | service_wastewater | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_service_vapour | services | service_vapour | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_carton_p | packaging | pkg_carton_p | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; real article repair material/water X and ordinary humidity; overlap only same-side other flows; full wet closing retained ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_carton_i | packaging | pkg_carton_i | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_carton_er | packaging | pkg_carton_er | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_carton_s | packaging | pkg_carton_s | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_carton_eo | packaging | pkg_carton_eo | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_carton_w | packaging | pkg_carton_w | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_film_p | packaging | pkg_film_p | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; real article repair material/water X and ordinary humidity; overlap only same-side other flows; full wet closing retained ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_film_i | packaging | pkg_film_i | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_film_er | packaging | pkg_film_er | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_film_s | packaging | pkg_film_s | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_film_eo | packaging | pkg_film_eo | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_film_w | packaging | pkg_film_w | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_pallet_p | packaging | pkg_pallet_p | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; real article repair material/water X and ordinary humidity; overlap only same-side other flows; full wet closing retained ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_pallet_i | packaging | pkg_pallet_i | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_pallet_er | packaging | pkg_pallet_er | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_pallet_s | packaging | pkg_pallet_s | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_pallet_eo | packaging | pkg_pallet_eo | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_pallet_w | packaging | pkg_pallet_w | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_tape_p | packaging | pkg_tape_p | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; real article repair material/water X and ordinary humidity; overlap only same-side other flows; full wet closing retained ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_tape_i | packaging | pkg_tape_i | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_tape_er | packaging | pkg_tape_er | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_tape_s | packaging | pkg_tape_s | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_tape_eo | packaging | pkg_tape_eo | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pkg_tape_w | packaging | pkg_tape_w | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_service_humidity | services | service_humidity | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; actual source_process and custody/event ID; measured new/removed material; ordinary sorption/evaporation; independent water phase/speciation; actual permission/result/disposition; mixed stream ID and independently measured non-additive origins; disjoint FG/repair WIP | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_damaged_chair_return | services | damaged_chair_return | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; actual source_process and custody/event ID; measured new/removed material; ordinary sorption/evaporation; independent water phase/speciation; actual permission/result/disposition; mixed stream ID and independently measured non-additive origins; disjoint FG/repair WIP | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pack_mixed_waste | packaging | pack_mixed_waste | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; actual source_process and custody/event ID; measured new/removed material; ordinary sorption/evaporation; independent water phase/speciation; actual permission/result/disposition; mixed stream ID and independently measured non-additive origins; disjoint FG/repair WIP | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pack_vapour | packaging | pack_vapour | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; actual source_process and custody/event ID; measured new/removed material; ordinary sorption/evaporation; independent water phase/speciation; actual permission/result/disposition; mixed stream ID and independently measured non-additive origins; disjoint FG/repair WIP | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pack_wastewater | packaging | pack_wastewater | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; actual source_process and custody/event ID; measured new/removed material; ordinary sorption/evaporation; independent water phase/speciation; actual permission/result/disposition; mixed stream ID and independently measured non-additive origins; disjoint FG/repair WIP | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pack_removed_wood | packaging | pack_removed_wood | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; actual source_process and custody/event ID; measured new/removed material; ordinary sorption/evaporation; independent water phase/speciation; actual permission/result/disposition; mixed stream ID and independently measured non-additive origins; disjoint FG/repair WIP | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pack_humidity | packaging | pack_humidity | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; actual source_process and custody/event ID; measured new/removed material; ordinary sorption/evaporation; independent water phase/speciation; actual permission/result/disposition; mixed stream ID and independently measured non-additive origins; disjoint FG/repair WIP | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pack_repair_water | packaging | pack_repair_water | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; actual source_process and custody/event ID; measured new/removed material; ordinary sorption/evaporation; independent water phase/speciation; actual permission/result/disposition; mixed stream ID and independently measured non-additive origins; disjoint FG/repair WIP | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_pack_repair_wood | packaging | pack_repair_wood | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty; actual source_process and custody/event ID; measured new/removed material; ordinary sorption/evaporation; independent water phase/speciation; actual permission/result/disposition; mixed stream ID and independently measured non-additive origins; disjoint FG/repair WIP | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_new_filter | finish | new_filter | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_finish_wipe | finish | finish_wipe | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_finish_wipe_waste | finish | finish_wipe_waste | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Record this exact event and direction independently as complete actual V in its native extensive unit; preserve all real legs and wet stocks. No stock correction or load share may change V; link incurred load separately once. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |
| cp_rivet_heating_gas | fabrication | rivet_heating_gas | foreground_record | site; process; period; supplier/receiver; cohort; row_id; original unit; raw readings; calibration/tare; supplied whole/retained water; composition/state; opening/closing empty/raw/WIP/FG/in-place stocks; full gross V; inherited per-exchange vectors; one load owner; actual failure/cleanup/test; Q or original Q_c; observed h; uncertainty | Retain raw unnormalized weigh/meter/receipt/assay and actual state records for this exact atomic exchange; reconcile original instruments and stock/inherited vectors before justified attribution, with no denominator operation in collection. | kg | each real event or meter interval | complete declared period including zero output, starts/stops, idle, cleanup, failures and tests | actual manufacturing/subcontract/service gate, uniquely matched cohort and observed horizon | per 1 kg reference flow | Original signed records; calibration/state/tare; actual composition and one-owner reconciliation; missing values and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | Convert raw original units/state before attribution. Cumulative meter differences already integrate time; integrate only genuine rates over their measured intervals. MJ=3.6*metered_kWh. Volume-to-mass needs independent density for the same substance and actual state; preserve gas P/T/compressibility/humidity and independent measured rivet solid volume and mass. Reference native secondary coefficients never establish unmeasured density, chair mass or heating value. | raw_units; actual_state; independent_measurements | converted_raw |  |
| manufacture_vector | burden-dimension exchanges | A_i = B_open_i + U_i + T_in_i - B_close_i - T_out_i. Same-unit inherited vectors after dedicated assignment/subdivision/justified exchange-specific allocation; U includes actual whole supplies and incurred service/failure/test/cleanup/treatment once. B_close is unreleased raw/WIP or genuinely unused/unassigned supply/service charges, never released FG. Do not stock-correct an already stock-corrected consumption again. T_out requires a real other cohort/function and justified one-time handover, never ordinary waste/sales. | B_open_i; U_i; T_in_i; B_close_i; T_out_i | A_i | `jrc-ilcd-2010` |
| cohort_service | services | A_service_i_c_h includes actual incremental performed service/work/treatment for original cohort c during observed h with justified inherited charges. Only unused/unassigned service charges carry forward; performed service remains even if FG closes in stock. Preserve original manufacture vector and original Q_c. Record real new parts/water, removed parts, losses, permission/posttests/acceptance/disposition; no new production from return/work. All actually occurred work, including unauthorized, failed or rejected work, and every actual flow/load are collected in full. Permission, configuration-specific postwork tests and acceptance govern authorization, continued qualifying stock and actual hold/waste/disposition, never deletion of an incurred load. Ordinary storage/handling moisture uptake or evaporation needs no invented repair permission. Keep repair custody disjoint: a chair/material is in released/held FG or repair WIP once; actual new/old parts and water remain, without presumed restoration. | original_cohort; Q_c; observed_h; performed_service; unused_charges | A_service_i_c_h | `jrc-ilcd-2010`; `tiger-processing-1213` |
| gross_legs | gross-dimension cards | V_i is the actual complete physical incoming/outgoing event for the exact card, in its declared unit after real unit/state conversion. Package P/I/ER/S/EO/W, assets, X_in/X_out, carrier returns, atmospheric gross species, external chair returns and gross G use V_i directly. No B_open+U-B_close, allocation fraction, manufacture vector or service vector changes V_i. The separately linked genuine load dimension is assigned once without another purchase, provider load or credit. | complete_gross_event; unit_state_conversion; single_load_owner | V_i |  |
| normalize_once | all inventory rows | u_i = N_i / D; u_i is the exchange amount per 1 kg reference flow. For manufacturing burden N=A_i and D=Q; for separate original-cohort service N=A_service_i_c_h and D=Q_c; for a physical gross card N=actual full V_i and D=its original cohort Q_c (or Q for the manufacturing cohort); internal Q transfers carry the matched quantity only. D must be positive. At zero D retain loads and gross events without a unit result. This is the only product-denominator division; cards and aggregation labels read this same u_i. first_release_chair is exactly1kg net accepted complete chair. | N_i; D; A_i; A_service_i_c_h; V_i; Q; Q_c; cp_first_release_chair | u_i | `jrc-ilcd-2010` |
| manufacture_mass_gate | fabrication; finish; release; support | Opening raw/WIP/supplies/assets/installed fluids + every real external manufacture/asset ingress + original FG withdrawn for any actual work F_to = complete closing unreleased/in-place wet stocks + unique net first release Q + attached packaging transfer P_Q + original material returned after work F_back + all external solid/liquid/gas exits. All terms are actual full physical mass, not burden shares; retain new material/water even if held in closing wet stock. Cancel internal WIP/reclaim once. F_to/F_back disclose every actual custody movement, including unauthorized/failed work, with disjoint repair WIP and FG stocks; permission does not erase a real transfer. | opening_manufacture; external_ingress; F_to; closing_manufacture; Q; P_Q; F_back; exits | manufacture_mass_balance |  |
| fg_service_mass_gate | services; packaging | Opening released FG and attached packaging + Q + P_Q + actual external returns R + F_back + every real service-material/water/packaging ingress = complete closing FG/returns/service wet stocks + gross G with packaging + F_to + all real service exits. R is current measured material, not assumed old shipment mass. Deduplicate X/P/I only against another actual inlet/outlet term; retain new influx and full closing wet mass. | opening_FG; Q; P_Q; R; F_back; service_ingress; closing_FG; G; F_to; service_exits | service_mass_balance |  |
| combined_mass_gate | all processes | Cancel matched internal Q/P_Q and F_to/F_back, WIP and internal reuse at combination: opening combined wet stocks + all real external ingress + actual external returns = full closing combined wet stocks + gross shipments + every other external solid/liquid/gas exit. Never add Q and closing released FG as two production outputs. Include real new/old assets, parts and installed fluids; electricity/heat remain independent energy accounts. | opening_combined; external_ingress; actual_returns; closing_combined; gross_shipments; other_exits | combined_mass_balance |  |
| packaging_gate | each actual package | Opening + P + I + ER + X_in = Closing + S + EO + W + X_out, separately for each actual whole article/material. All empty, attached WIP/FG and reusable stocks; S follows gross real shipments. P/I includes the supplied whole wet article once; moisture/adhesive subledgers and whole assemblies overlap only once. Internal reuse cancels. Neither a closing stock nor a load fraction cancels real new influx; procurement/supplier-included burden has exactly one owner. X_in/X_out are actual independent added/removed material and liquid/vapour water events, deduplicated only against another measured same-side flow term for the same event, never stocks, an opposite flow, or mere existence of a card. Retain actual ingress AND full wet closing stock. One collected mixed Waste outlet uses pack_mixed_waste; component W are conserving non-additive origins, not additional outlets/treatments. Whole wet article P/I/ER receipts include integral components and retained water once. Actual on-site added or removed components/water must be disjoint from those receipts or reconciled through a measured whole-article/component bridge and paired internal handoff; do not add an assembled article mass and the same component masses twice. Unknown occurrence or composition remains unresolved, not zero. For one real mixed outlet, independently measured origin W must sum to the independently measured whole mixed wet total; report that single total OR its disjoint partition, never both as additive exchanges, with one actual treatment/provider owner. | Opening; P; I; ER; Closing; S; EO; W; X_in; X_out; actual_mixed_stream_origins | package_balance |  |
| species_phase_energy | all processes | Independently reconcile total physical mass and relevant Fe/C/N/O/H/other real elements with real molecular/solid species and free/phase/structural or reaction water only where evidence supports it. One closure residual cannot determine two unknowns. COD/VOC/NOx/total metal/particle-size totals stay analytical metrics until real species evidence; no assumed oxidation, reaction water or fixed gas composition. Separate fuel carrier mass from actual heating value/heat, purchased steam/hot-water mass/enthalpy/returns and one provider boundary. | independent_mass; element_assays; species; water_phases; gas_state; enthalpy; supplier_boundary | independent_balances |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_configuration | complete chair | Trace actual complete BOM and released drawings, net masses, same configuration release authorization and proper native limits; no catalogue mass conversion or certification default. | Drawing/BOM; material certificates; calibrated scale/tare; acceptance log |
| dq_coverage | all processes | Continuous defined period including all shifts, failures, zero output, startup/shutdown, idle, cleanup, tests and all measured stage/subcontract utilities. Missing actual data is unknown, not zero or a successful test. | Raw logs/meters/invoices; allocation and uncertainty; stage/subcontract scope |
| dq_stocks | all cohorts and gross events | Per-exchange inherited vectors and full wet stock, actual positive influx and original-cohort performed service preserved. Each physical leg and one genuine burden owner separately identifiable. | Stock/dispatch/return ledgers; package six-leg register; asset/part/fluid records |
| dq_sources | external evidence | Nicolle pages are one manufacturer with conflicting oven temperatures; no default bath chemistry or reclaim/zero-emission assumption. TIGER context is product-specific and independent; exclude facade/metallic numeric limits, multi-coat and maintenance schedules. ILCD applies only to justified attributional allocation. | Complete originals/context; separate original acquisition and present extraction/applicability; measurement and methodological review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| valid_identity | reference product | Confirm a complete accepted fixed steel chair and actual manufacturing route, exact native identity/property/unit, all required qualifiers and one explicit first_release_chair link. A frame, tube, resin, wood-seat or partial assembly is not this endpoint. Core final-product identity unresolved or primary terminal/method evidence absent blocks usable authored guidance. Ordinary auxiliary/provider or future foreground measurements remain disclosed gaps rather than automatic draft status. | `nicolle-manufacturing`; `un-cpc3-2025` |
| valid_units | all inventory rows | Check every native extensive property/unit separately. Do not force MJ, m3 or other real numerator into Mass/kg; rivet reference volume needs an actual configuration-specific measurement and independent physical kg. Preserve raw conversions, unique Q>0 or original Q_c and the single normalize_once operation; zero Q retains real load with no unit result. |  |
| valid_stocks | all processes | Reconcile complete manufacture, FG/service and combined physical gates, gross package/asset/repair-water events, inherited raw/WIP vectors and single burden ownership. Closing released FG is not a manufacture deduction; performed original-cohort service remains. Ordinary waste/sales cannot masquerade as T_out. Preserve positive influx even in closing wet stocks. |  |
| valid_chemistry | all material and emission exchanges | Each selected flow is one actual article/preparation/chemical/species with real state and destination. Check all native basenames/synonyms/comments/CAS/form/route/geography/media/type/properties against actual use; isolate taxonomy defects from real physical conflicts. No species assignment from totals, one residual fitting two unknowns, duplicate formulation components, air aggregate plus its species or assumed water density. |  |
| valid_rework_quality | finish; release; services | Retain actual configuration-specific acceptance, sample/destructive failure and postrelease manufacturer/spec permission/posttests/disposition. Coating instructions concern actual product/system suitability; no automatic restoration, approved lifetime/strength or certification from an engineering check. | `tiger-processing-1213`; `nicolle-manufacturing` |
| valid_evidence | all sources and rules | Keep original-context scope and limitations, actual source ownership and open upstream/site measurements explicit. Route/manufacturer evidence does not support LCA allocation; ILCD allocation does not identify industrial chemistry or numerical factory inputs. Pending scientific review and aligned Chinese are not publication, translation review or accepted CPC mapping. | `jrc-ilcd-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Compatible complete stamped-steel chair manufacturing input with verified providers and separately declared original-cohort service horizon. |
| allowed_use | Declared route/configuration and first-release net mass basis; one original manufacturing owner and actual additional service. |
| excluded_use | Exclude bare frames, seat/back components sold separately, stools without backs, tubular-frame/PP-shell and wood-seat variants, bought-finished-chair packing, swivel/caster/reclining/folding mechanisms, upholstery, sofa beds, vehicle seats, wheelchairs and medical or child-specific safety products. Outdoor cataphoresis, galvanizing, liquid paint and UV-only cure are different routes requiring a new applicability assessment. Installation, use, lifetime seating service and end of life are outside this manufacturing reference. |
| required_metadata | site and period; manufacturer and subcontract finishing boundary; model and released drawing/BOM revision; complete fixed four-leg architecture; sheet and strip grade/heat / rolling state / thickness / actual widths and part geometry; seat / back/support / legs / stretchers / each rivet and installed rubber-foot specification; spot-weld and hot-rivet joining; actual cutting assist gas and forming lubrication; actual degreasing chemistry and supplied concentration/water; paid standalone or bundled bath ingredients; whole epoxy powder SKU/batch/SDS and make-or-buy; actual reclaim and cure records; actual electric / fuel or purchased-heat source and carrier state; actual water circuits; configured conformity/acceptance specification / joint/finish/stability checks and authorized first release; calibrated net complete-chair weighing excluding all packaging / detached spares and test masses; unique first-release Q in kg; counts and independently measured configuration masses; no catalogue conversion; failures / zero-output runs / startup/shutdown / idle / cleanup / sample tests and actual rework including unauthorized/failed/rejected work; opening/closing raw and WIP quantities with every inherited exchange vector; released FG opening/closing / original cohort Q_c / gross shipment/return identity and observed service horizon h; manufacturer/spec permission / postwork tests / acceptance and disposition for actual postrelease work; each package P/I/ER/S/EO/W and empty/attached/reusable stock; single upstream owner; actual new/old assets and maintenance parts with installed fluids and performed-service attribution; species-specific air/water/solid balances / moisture and independent conversions/uncertainty; native flow limitations / exact supplier compatibility / upstream and treatment gaps |
| required_quality_disclosure | All unknown/unresolved auxiliary UUIDs, native restrictions, provider/treatment gaps, actual data period/coverage/uncertainty, allocation justification, stock/gross balances and pending scientific/translation review. No fabricated quantitative defaults or completed review. |
| update_trigger | Material, architecture, joining/finish, make-or-buy, specification, supplier/native identity, utility interface, release gate or evidence changes; reassess route before reuse. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC Version3.0 Explanatory Notes,30June2025, pp186–188; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 38111 scope and neighbouring seats/other furniture/parts; no manufacturing route or method approval. |
| nicolle-manufacturing | handbook | Chaises Nicolle, How are Nicolle Chairs made?, complete official manufacturing page; https://chaises-nicolle.com/us/manufacturing/ ; retrieved2026-10-20 | Complete steel chair process/configuration example, foot fitting, checks and packaging. Actual supplied preparation, chemistry and utilities require foreground records. Outdoor cataphoresis is a separate excluded route; no zero-emission/cure/yield default. |
| nicolle-secrets | handbook | Chaises Nicolle, The secrets of building a Chaise NICOLLE chair; https://chaises-nicolle.com/en/the-secrets-of-building-a-chaise-nicolle-chair/ ; retrieved2026-10-20 | Same-manufacturer corroborating joining and preparation context; not an independent plant or source. Oven-temperature difference remains; no prescribed setpoint. |
| tiger-processing-1213 | handbook | TIGER Coatings, Processing instructions, data sheet1213 Version06-25, complete4pp; https://www.tiger-coatings.com/fileadmin/user_upload/PDS_verarbeitungshinweise_1213_en.pdf ; retrieved2026-10-20 | Actual-system cure/compatibility, cleaning, packaging and conditional postwork suitability. Not a Nicolle formulation or certification; facade thickness, metallic reclaim ratios and maintenance/film time examples are not chair defaults. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA—Detailed guidance,first editionMarch2010,§§7.9.2–7.9.3,printedpp255–272/PDFpp275–292; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision/virtual subdivision, determining exchange-specific physical causality and genuine residual common-process-gate market value. Distinguish QFD multifunctional products; no industrial chemistry or emission factor inferred. |
