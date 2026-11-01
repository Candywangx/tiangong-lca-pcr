---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.artificial-corundum
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# White fused alumina abrasive grain manufacture

## 1. Scope and Applicability

This attributional PCR covers one declared grade of virgin white fused alumina abrasive grain manufactured from whole supplied calcined alumina through electric-arc fusion, actual cooling/solidification and corundum crystallization, crushing, separation, screening/grading, any necessary evidenced physical cleaning/drying, inspection and unique first final quality release. Include receipt, internal transfers, controls, utilities, furnace/equipment service, all failures and zero-output runs, start/stop, idle, cleanup and pre-release rework. Packing, finished-grain storage, handling and dispatch are retained in a separate original-cohort service account. Buying finished grain and repacking does not implement this manufacturing boundary.

Natural corundum/emery; brown fused bauxite+coke+iron/ferrosilicon co-production; sintered/tabular/sol-gel alumina; zirconia-alumina and intentionally doped fusion routes; hollow alumina bubbles; gemstone or technical single-crystal sapphire; Bayer refinery alumina as finished reference; bonded whole wheels, coated abrasives, grinding spheres, complete refractory bricks and crucibles; used blasting-grain recycling and downstream use. Acid treatment or surface coating is not presumed; a real additional route needs renewed primary applicability and its separate whole formulation, utilities, emissions and wastes.

ALTEO supports the actual feed and electric-arc route; Washington Mills supports a commercial virgin white fused abrasive terminal and solidified-ingot-to-sized-grain manufacture. EPA supports generic grain processing with optional wet steps, while its bauxite/coke/iron fusion paragraph describes a different route. This is a transparent technical synthesis across sources, not one SKU, plant or current order. No universal purity, temperature, time, current, particle target, recipe, specific energy, electrode rate, yield, density, lifetime, abrasion performance or certification is prescribed. The multi-grade SDS does not reveal every impurity/minor phase; collect the whole actual grade, free moisture and size configuration. `alteo-white-fused-alumina`; `wm-fused-mineral-process`; `wm-duralum-special-white`; `wm-white-alumina-family`; `wm-white-alumina-sds-2025`; `epa-abrasive-manufacturing-1995`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.artificial-corundum |
| classification_refs | CPC 3.0 37960; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-37960.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Declared grade of non-hollow virgin white electric-fused alumina abrasive grain from calcined alumina |
| excluded_products | Natural corundum/emery; brown fused bauxite+coke+iron/ferrosilicon co-production; sintered/tabular/sol-gel alumina; zirconia-alumina and intentionally doped fusion routes; hollow alumina bubbles; gemstone or technical single-crystal sapphire; Bayer refinery alumina as finished reference; bonded whole wheels, coated abrasives, grinding spheres, complete refractory bricks and crucibles; used blasting-grain recycling and downstream use. Acid treatment or surface coating is not presumed; a real additional route needs renewed primary applicability and its separate whole formulation, utilities, emissions and wastes. |
| representative_product | Commercial DURALUM Special White grain terminal with independent ALTEO calcined-alumina EAF route evidence; transparent synthesis, not a single-SKU manufacturing record |
| production_route | This attributional PCR covers one declared grade of virgin white fused alumina abrasive grain manufactured from whole supplied calcined alumina through electric-arc fusion, actual cooling/solidification and corundum crystallization, crushing, separation, screening/grading, any necessary evidenced physical cleaning/drying, inspection and unique first final quality release. Include receipt, internal transfers, controls, utilities, furnace/equipment service, all failures and zero-output runs, start/stop, idle, cleanup and pre-release rework. Packing, finished-grain storage, handling and dispatch are retained in a separate original-cohort service account. Buying finished grain and repacking does not implement this manufacturing boundary. |
| market_state | Whole net grain at unique first final quality release; actual moisture/impurities/minor phases/size configuration, excluding separable packaging; later original-cohort service separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and first release of whole white fused alumina abrasive grain |
| How much | 1 kg net whole grain |
| How well | Actual declared grain size/chemistry/phase and applicable abrasive specification, passing manufacturer-recorded first final quality acceptance; no universal abrasive performance guarantee |
| How long or cycle | One manufacturing cycle to first release; use life/downstream grinding excluded; subsequent services retain original cohort and observed horizon |
| reference_flow_link | `finished_grain` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | White Fused Alumina `429f2b7f-592a-434c-92e2-43a6b4859300` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer and facility; production period and geography; virgin white fused grain grade; whole calcined alumina supply state and supplier route; electric-arc fusion and actual cooling/crystal state; minor phases and impurities with full assay basis; supplied free moisture and net whole mass; particle-size specification and actual distribution; actual crushing/separation/cleaning/drying stages; unique first-release cohort and tests; all rejected/held/reworked material disposition; raw/WIP/non-WIP-store inherited vectors; utilities and furnace/lining/electrode service boundary; packaging composition and supplier-included ownership; original-cohort post-release service horizon; provider geography/route/native-property restrictions; allocation justification and unresolved evidence |

Declare every qualifier in actual dataset metadata or equivalent complete fields. The finished_grain card also carries native restrictions and whole-grade conditions; missing qualifiers leave the definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Receipt of whole calcined alumina is the starting condition. Supplier calcination remains upstream unless actually performed inside the reported site; then identify its actual feed state and add the complete calcination inventory. Do not substitute calcined bauxite, hydroxide, natural mineral, purchased finished fused grain or a brown-fused recipe. Preserve the actual cooling/solidification route and all grade processing before first release. |
| native_extensive | each inventory exchange | Each native extensive property; not universally Mass | kg / MJ / m3 as applicable | Materials/species use kg, electrical energy MJ, compressed-air/gas volume m3 at actual conditions. Resolve each unit group/reference unit; do not infer density/item mass from name, secondary property or CAS. Collect original rate/cumulative quantity and convert first; apply calc_normalize once. |
| whole_grade | whole supply and product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Whole preparations and grain retain actual impurities/minor phases and supplied free water. Dry/oxide-equivalent bases are separate analytical accounts; never replace whole product mass with pure Al2O3 mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole purchased calcined alumina and actual supplied state; actual on-site calcination requires complete added inventory |
| starting_condition_role | Foreground manufacturing receipt gate; supplier mining/Bayer refining/calcination owned upstream unless actually on-site |
| product_classification_scope | Bounded white-fused-grain route within CPC3.0:37960, not all artificial corundum |
| recursive_input_rule | Actual same-category purchased fused input retains its supply state and distinct upstream inventory; no recursive substitution as new manufacture or finished-grain repacking in place of raw-to-grain manufacture |
| upstream_dataset_requirement | Match each actual supplied product/energy/fuel/water/service and waste treatment by technology/geography/time and native property; no duplicate supplier-included/on-site increments |
| disclosure | Declare manufacture/service gates, actual assets/utilities/water-energy conventions, conditional stages, full stock inheritance, allocation and unresolved evidence |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_classification | complete foreground boundary | CPC3.0:37960 names artificial corundum; this method selects a narrower whole white-fused abrasive-grain route on independent physical evidence. Neighbor37910 comprises bonded/coated abrasive articles. A title or native taxonomy is not an accepted mapping. | `un-cpc3-2025` |
| boundary_route | complete foreground boundary | Receipt of whole calcined alumina is the starting condition. Supplier calcination remains upstream unless actually performed inside the reported site; then identify its actual feed state and add the complete calcination inventory. Do not substitute calcined bauxite, hydroxide, natural mineral, purchased finished fused grain or a brown-fused recipe. Preserve the actual cooling/solidification route and all grade processing before first release. | `alteo-white-fused-alumina`; `wm-fused-mineral-process` |
| boundary_q | complete foreground boundary | Q is net whole grain mass newly passing its first final grade release during the reporting period. Exclude packaging and unreleased/rejected matter, but include the actual accepted grade impurities/minor phases/free moisture; do not use pure Al2O3 fraction. Same-cohort closing finished grain has already entered Q: do not add it as another production output or subtract its manufacturing burdens. Delivery, repeat inspection and returns do not create new Q. | `wm-fused-mineral-process`; `wm-duralum-special-white` |
| boundary_stock | complete foreground boundary | Maintain raw physical and inherited-inventory vectors for opening/closing raw stores, WIP, molten/solidified material awaiting grading, rework and unused/unassigned non-WIP service stores. Internal transfer vectors cancel at consolidation. Manufacturing B_close includes only those unfinished or unused/unassigned stores, never first-released FG. Stock-corrected consumption must not be deducted again. Retain failed lots, Q=0, startup/shutdown, idle and cleanup; no unit result when Q=0. | `jrc-ilcd-attributional-2010` |
| boundary_services | complete foreground boundary | Keep performed packing/storage/handling/dispatch/test/repair services in their original released cohort H with fixed original Q_H and observed horizon. A held FG cohort retains its performed service, even if closing FG remains. Carry only unused/unassigned service or charge forward, without deducting completed service. An optional consolidated report adds manufacturing plus actual service vectors and cancels internal Q once. Net-delivery methods are outside this denominator; any separately developed net-delivery variant requires complete opening/closing FG history, gross G/R, documented original-delivery reversal D_rev and actual incremental work/loss/water attribution. Returned mass is not presumed equal to the original delivery. | `jrc-ilcd-attributional-2010` |
| boundary_packaging | complete foreground boundary | For each packaging material keep opening empty plus WIP/FG-attached plus reusable stock O, external purchased empty P, first non-purchased external ingress I, external return received ER, closing complete stock C, packaging accompanying gross physical shipment S, external return outward EO and waste W: O+P+I+ER=C+S+EO+W, including observed attachments and moisture. Internal reuse cancels; no second purchase, net-grain Q or automatic co-product. Preserve I as a real physical ingress and one upstream owner, even when included in supplier price. Repair-part and water X_in/X_out deduplicate only overlapping other incoming/outgoing flow terms, never stocks. New water/material retained in closing stock remains both a real ingress and full closing wet mass; P/I already including it is counted once. Gross legs are never reduced by allocation shares. | `jrc-ilcd-attributional-2010` |
| boundary_assets | complete foreground boundary | Separate whole physical furnace, crusher, screen, filter and test-equipment stocks from current service burdens. Record actual construction/configuration, installed parts/fluids, new and removed parts, lining/electrode wear, repairs and remaining service capacity. Allocate service only through documented actual use and causal capacity; no fixed life or whole furnace per kg grain. A replaceable electrode or lining is a consumable/stock or service as actually operated, never both charged in full and depreciated again. Preserve each new/old material and water phase without removing an ingress because it remains installed. | `jrc-ilcd-attributional-2010` |
| boundary_atomic | complete foreground boundary | Inventory cards are conditional atoms, not a universal recipe. Establish actual presence/absence separately; missing is not zero. Add each real omitted material, supplied chemical formulation, fuel, gas, packaging component, waste and molecular or particulate species as its own card before claiming completeness. A purchased whole formulation is procured once; active ingredient, assay and carrier water are subaccounts, not additional purchases. Actual in-house preparation has separate purchased constituents, energy and losses. No presumed acid washing, steam/boiler, oxygen enrichment or ferrosilicon. | `epa-abrasive-manufacturing-1995`; `wm-fused-mineral-process` |
| boundary_physics | complete foreground boundary | Reconcile manufacturing, FG-service and consolidated gates independently with full wet physical mass and relevant Al/C/H/O/N or other measured elements. Internal gross transfers cancel only once. Distinguish free water, structural/phase water, real reaction water, liquid, vapour and particulate material; no default alumina dehydration or all-carbon-to-CO2 assumption. Measure carbon source and CO/CO2/other carbon fate independently. Keep actual air intake/exhaust species and inert gas/humidity transport; no assumed air fractions. PM/total Al/NOx/COD/VOC are indicators or measured classes, not pure Al2O3, NO/NO2 or a specific compound. Never fit two unknown species or reaction water with one residual. | `epa-abrasive-manufacturing-1995`; `wm-fused-mineral-process` |
| boundary_water_heat | complete foreground boundary | For each real external cooling-water or condensate supply/return specify owner, physical state, temperature/pressure and independently determined enthalpy basis plus supplier water/energy convention. A clean externally returned Product water stream remains physical output without free energy/water credit; polluted effluent and environmental discharge use their actual treatment/media. Mass carriers and heat MJ remain separate linked accounts, not duplicate provider purchase. Recirculation is internal. Do not invent steam or boiler because a furnace cools. | `epa-abrasive-manufacturing-1995`; `wm-fused-mineral-process` |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | jrc-ilcd-attributional-2010 |

## 6. Process Inventory Structure

Each card and description applies with the complete conditions in §§5/7/8/9. Amount cards reference the same calc_normalize; complete raw gross physical companion ledgers are never scaled by burden shares. Absence of a conditional atom requires evidence; add every actual extra flow as a card. An unbound UUID does not mean the physical exchange is absent.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feed` | Receipt and feed preparation | required | Always; actual supplied calcined alumina | Receive whole feed and retain supplier/internal preparation boundary | per reference flow; manufacturing Q or original service Q_H |
| `fusion` | Electric-arc fusion and actual cooling crystallization | required | Always; actual WFA route | Transform unfused calcined feed to solidified crystalline WFA | per reference flow; manufacturing Q or original service Q_H |
| `grain` | Crushing separation grading cleaning and first release | required | Physical cleaning/drying only where actually necessary; no acid default | Produce the declared complete abrasive grain grade and determine Q | per reference flow; manufacturing Q or original service Q_H |
| `utilities` | Actual metered utilities and external water interfaces | required | Each individual atom only where actual; no generic zero | Assign energy/water by actual stage and cohort without provider duplication | per reference flow; manufacturing Q or original service Q_H |
| `asset_control` | Equipment service pollution control and actual exits | required | Actual assets, repairs, waste and species; additional atoms if real | Keep physical service stocks, waste treatment and measured emissions | per reference flow; manufacturing Q or original service Q_H |
| `fg_service` | Original-cohort packing storage handling and dispatch | required | Actual performed service observed over declared horizon | Separate post-release services from new manufacture and preserve original Q_H | per reference flow; manufacturing Q or original service Q_H |

### Process: Receipt and feed preparation (`feed`)

#### Inputs

##### Product flows

###### Whole supplied calcined alumina (`calcined_alumina`)

Whole unfused calcined Bayer alumina feed, with actual impurities, moisture, particle state and supplier evidence. The native at-plant Bayer route is allowed only for compatible calcined feed; its broad corundum/hydrated wording and classification do not authorize natural corundum, hydroxide, bauxite or finished fused grain. Whole kg is purchased once; assay/water are subaccounts.

- Selected flow: alumina `7bdf8e03-06f3-4377-bd78-ec92647a53ab`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `alteo-white-fused-alumina`; `wm-fused-mineral-process`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Electric-arc fusion and actual cooling crystallization (`fusion`)

#### Inputs

##### Product flows

###### Actual graphite electrode consumption (`graphite_electrode`)

Use only actual graphite electrodes prepared as electrode material and supplied at plant. The native does not prescribe grade, carbon origin, graphite production footprint or wear rate. Separate receipt/installed/remnant stock, consumption and any returned fragments; no full electrode purchase plus duplicate service charge. Determine carbon species/fate independently, not complete stoichiometric CO2.

- Selected flow: Graphite electrode `c2c70bef-5b23-4f7c-8fc8-ae4b5a844396`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `wm-fused-mineral-process`

###### Actual fired alumina lining brick (`lining_brick`)

Conditional single actual fired high-alumina brick article in the furnace installation/repair BOM; native family also mentions silica/magnesia, which are not this selected exchange. Verify actual composition, firing and supplier. No assertion that every furnace uses this lining. Whole wet ingress and installed closing mass remain; only current assigned service/consumption is charged once.

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `wm-fused-mineral-process`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Internal cooled fused block (`fused_block`)

Internal solidified/crystallized white fused alumina from calcined alumina electric-arc fusion; native CAS1344-28-1, Product flow, no fixed grade/geography. Distinguish this intermediate from first-released grain; no duplicate Q or external purchase. Track full actual impurity/moisture/temperature state and transfer vector; cancel against the matching grain-stage input. Native generic standards wording is not certification.

- Selected flow: White Fused Alumina `429f2b7f-592a-434c-92e2-43a6b4859300`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `wm-fused-mineral-process`

##### Waste flows

###### Actual rejected fusion crust (`fusion_reject`)

Conditional actual distinct waste stream with measured full wet mass, composition, collection point, original cohort and treatment destination. Separate solids and water subaccounts without buying or emitting them twice. Keep all failure/sample/cleanup burdens; outward sale is not an automatic allocation transfer. Reject feed-grade dust, anaerobic sludge, metal smelting slag or part-degreasing-to-water records when route/state/type does not match.

- Selected flow: Rejected white fused alumina fusion crust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `epa-abrasive-manufacturing-1995`; `jrc-ilcd-attributional-2010`

##### Elementary flows

### Process: Crushing separation grading cleaning and first release (`grain`)

#### Inputs

##### Product flows

###### Internal fused block received for grain processing (`fused_block_in`)

Same internal calcined-alumina electric-arc fused and cooled/crystallized whole block as fused_block, CAS1344-28-1 Product flow. Retain full grade/impurities/moisture and transfer vector; native has no fixed grade/geography. No new upstream purchase, production Q or certification; cancel this physical/vector pair at consolidation.

- Selected flow: White Fused Alumina `429f2b7f-592a-434c-92e2-43a6b4859300`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `wm-fused-mineral-process`

###### Actual manganese-steel crusher jaw plate (`crusher_jaw`)

Conditional complete wear plate with actual alloy, heat-treatment and supplier. A before-heat-treatment machined-steel native cannot represent a hardened installed plate. New/old parts, wet contamination, installed stock and measured service stay separate.

- Selected flow: Manganese-steel crusher jaw plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `wm-fused-mineral-process`

###### Actual grain-washing liquid water (`grain_wash_water`)

Only actual physical washing/classification/cleanup; no presumed acid preparation. Record actual supplied water identity/owner and each water phase. A CN item-reference process-water record is not kg; an HK volume tap-water record is not a generic supply. Keep unresolved identity with independently measured volume/density or direct water mass.

- Selected flow: Treated process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `epa-abrasive-manufacturing-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First-released net whole abrasive grain (`finished_grain`)

Whole virgin white fused abrasive grain from calcined alumina electric-arc fusion then actual cooling/crystallization and grade processing; CAS1344-28-1 Product flow. Native has no fixed grade/geography and supports abrasives/refractories; here restrict to non-hollow abrasive grain with actual full minor phases/impurities/free moisture and particle configuration. Not pure assay mass, Bayer feed, natural/sintered/sol-gel corundum, wheel or refractory article. Native classification34220 is inconsistent taxonomy, not evidence against its explicit white-fused physical identity; no accepted classification mapping or standards certification follows. Net first-release Q only; no adding closing FG or counting repeat acceptance.

- Selected flow: White Fused Alumina `429f2b7f-592a-434c-92e2-43a6b4859300`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_release`
- Sources: `alteo-white-fused-alumina`; `wm-duralum-special-white`; `wm-white-alumina-family`; `wm-white-alumina-sds-2025`

###### Actual independently accepted other grain grade (`other_grade`)

Conditional genuinely useful independently specified white fused abrasive grain grade from the same calcined-alumina electric-arc/cooling route; CAS1344-28-1 Product flow, full impurity/moisture/size state, no native grade/geography fixed. Not automatic fines revenue or ferrosilicon. Keep gross output and separate Q_other; use the allocation hierarchy before one burden transfer. No addition to target-grade Q and no certification claim.

- Selected flow: White Fused Alumina `429f2b7f-592a-434c-92e2-43a6b4859300`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `wm-white-alumina-family`; `jrc-ilcd-attributional-2010`

##### Waste flows

###### Actual unreleased rejected grain (`unreleased_reject`)

Conditional actual distinct waste stream with measured full wet mass, composition, collection point, original cohort and treatment destination. Separate solids and water subaccounts without buying or emitting them twice. Keep all failure/sample/cleanup burdens; outward sale is not an automatic allocation transfer. Reject feed-grade dust, anaerobic sludge, metal smelting slag or part-degreasing-to-water records when route/state/type does not match.

- Selected flow: Unreleased white fused alumina grain waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `epa-abrasive-manufacturing-1995`; `jrc-ilcd-attributional-2010`

##### Elementary flows

### Process: Actual metered utilities and external water interfaces (`utilities`)

#### Inputs

##### Product flows

###### Actual supplied electrical energy (`electricity`)

Meter furnace, crushing, screening, drying, cooling, collection, QC and actual post-release services separately, including start/stop/idle and controls. Keep original kWh and exact unit conversion; no kg requirement. Reviewed CN1–35kV grid-consumption and US/Brazil alternatives cannot be universal identities. Select actual voltage/geography/provider before binding; do not add included generation fuel or transformation twice.

- Selected flow: Electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `wm-fused-mineral-process`

###### Actual diesel fuel for site handling (`diesel`)

Conditional whole actual diesel for site handling or the actual generator; native Mass product leaves grade, formulation, density, heating value, refinery, geography and provider unspecified. Collect those independently, distinguish fossil/biogenic carbon and actual exhaust. No fixed density/LHV, no duplicate fuel when a purchased service already owns it.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `wm-fused-mineral-process`

###### Actual natural gas for a real grain dryer (`dryer_gas`)

Conditional only if actual wet grain drying uses whole pipeline gas. Collect mixture, state, integrated meter volume, composition, independent density/carrier mass and heating value. Do not bind pure-methane CAS74-82-8 or use its unit secondary coefficient as density for a gas mixture. No furnace fuel or dryer is invented.

- Selected flow: Pipeline natural gas
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `epa-abrasive-manufacturing-1995`

###### Actual purchased compressed-air supply (`compressed_air`)

Conditional purchased whole air above atmospheric pressure, native Volume/m3, no specified pressure/temperature/dryness/oil grade or geography. Record actual supply and meter conditions and air mass independently; cumulative m3 is already integrated. If made on site, record compressor electricity/filters/oil/water and internal air without buying the air product again; do not count whole air plus its component purchases.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `wm-fused-mineral-process`

###### Actual external liquid cooling-water supply (`cooling_water`)

Conditional actual external cooling supply, with supplier ownership, quality, temperature/pressure, mass and thermal convention. Closed-loop circulation is not repeated external intake. Ingress retained even when water remains in full wet closing stock; deduplicate X only against overlapping flow terms. Do not copy a steam or HK tap-water supply.

- Selected flow: Liquid cooling water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `wm-fused-mineral-process`

###### Actual purchased deionized-water preparation (`di_water`)

Only actual100% water supplied by reverse osmosis plus ion-exchange deionization, production mix in factory, native Mass/kg. Not tap water, untreated cooling water or a chemical solution. Secondary0.001m3 property is not independent density evidence. If prepared on site, use its real raw water, consumables, electricity and losses, not the purchased whole supply plus ingredients.

- Selected flow: Water (desalinated; deionized) `c707e768-2a44-4b33-8218-e8dcdb345132`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `wm-fused-mineral-process`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Actual clean external liquid cooling-water return (`cooling_return`)

Conditional actual provider-owned clean return; record full water mass and measured state/enthalpy with supplier allocation convention, not automatic co-product, displaced heat or water credit. Pollution or an environmental receiving medium requires its actual waste/treatment/species route instead.

- Selected flow: Returned liquid cooling water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `wm-fused-mineral-process`

##### Waste flows

##### Elementary flows

### Process: Equipment service pollution control and actual exits (`asset_control`)

#### Inputs

##### Product flows

###### Actual furnace asset service (`arc_furnace`)

Conditional actual complete identified equipment/configuration, weighed in kg when a mass-based asset inventory is used. Keep full physical installed/opening/closing/repair/retired ledger separate from current assigned service vector; use actual service evidence and allocation hierarchy, not a fixed life, fabricated kg/item, or whole machine per kg grain. Additional real instruments/machines require separate cards.

- Selected flow: Configured electric-arc alumina fusion furnace
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `wm-fused-mineral-process`

###### Actual crusher asset service (`crusher`)

Conditional actual complete identified equipment/configuration, weighed in kg when a mass-based asset inventory is used. Keep full physical installed/opening/closing/repair/retired ledger separate from current assigned service vector; use actual service evidence and allocation hierarchy, not a fixed life, fabricated kg/item, or whole machine per kg grain. Additional real instruments/machines require separate cards.

- Selected flow: Configured abrasive-grain crusher
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `wm-fused-mineral-process`

###### Actual screening asset service (`screen`)

Conditional actual complete identified equipment/configuration, weighed in kg when a mass-based asset inventory is used. Keep full physical installed/opening/closing/repair/retired ledger separate from current assigned service vector; use actual service evidence and allocation hierarchy, not a fixed life, fabricated kg/item, or whole machine per kg grain. Additional real instruments/machines require separate cards.

- Selected flow: Configured grain screening machine
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `wm-fused-mineral-process`

###### Actual dust collector asset service (`dust_collector`)

Conditional actual complete identified equipment/configuration, weighed in kg when a mass-based asset inventory is used. Keep full physical installed/opening/closing/repair/retired ledger separate from current assigned service vector; use actual service evidence and allocation hierarchy, not a fixed life, fabricated kg/item, or whole machine per kg grain. Additional real instruments/machines require separate cards.

- Selected flow: Configured fabric-filter dust collector
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `wm-fused-mineral-process`

###### Actual quality instrument service (`test_rig`)

Conditional actual complete identified equipment/configuration, weighed in kg when a mass-based asset inventory is used. Keep full physical installed/opening/closing/repair/retired ledger separate from current assigned service vector; use actual service evidence and allocation hierarchy, not a fixed life, fabricated kg/item, or whole machine per kg grain. Additional real instruments/machines require separate cards.

- Selected flow: Configured grain particle-size test instrument
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `wm-fused-mineral-process`

###### Actual polyester filter bag replacement (`filter_bag`)

Conditional complete specified polyester bag, not mesh fabric or filament as a finished-bag substitute. Count full new and old bag masses plus adherent dust/water independently; no duplicate captured-dust term. Record actual other filter chemistry separately.

- Selected flow: Polyester needle-felt dust-filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `wm-fused-mineral-process`

###### Actual whole lubricating-oil formulation (`lubricant`)

Conditional actual mineral-oil-based preparation, full additives and supplied water as one purchase. Reviewed PAO/total-synthesis native conflicts with this identity and is not adopted. Use actual OEM-approved oil, fills/topups/drainage/leaks and new/old installed fluid inventory; record different chemistry as a separate actual atom.

- Selected flow: Mineral lubricating oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `wm-fused-mineral-process`

##### Waste flows

##### Elementary flows

###### Actual atmospheric oxygen intake (`air_oxygen`)

Molecular atmospheric O2 CAS7782-44-7, resource from air/renewable element, Mass/kg; not purchased oxygen enrichment or dissolved oxygen. Measure intake composition, actual gross dry/wet air and state independently, with each remaining atmospheric species separately recorded. Count whole compressed-air supply and component mass only as linked subaccounts, never duplicate inventory purchases.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

###### Actual atmospheric dinitrogen intake (`air_nitrogen`)

Actual molecular N2 CAS7727-37-9 resource from air/renewable element, Mass/kg; not purchased inert gas or a nitrogen compound. Independently measure amount/composition/state; no assumed air fraction. Record actual exhaust N2 on a separate outward card, never use this resource identity as emission or infer NOx stoichiometry.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

###### Atmospheric argon (`air_argon_in`)

Actual atmospheric monatomic argon CAS7440-37-1 as renewable element resource from air, Mass/kg; not purchased argon, radioactive argon41 or Argon40-specific isotope. Independent actual gross intake composition/state is required; count linked air component subaccounts without an extra whole-air purchase or assumed fraction.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

###### Atmospheric water vapour intake (`air_humidity`)

Conditional actual single molecular gas and stated direction/media, independently measured as part of gross air and wet-mass closure. Native resource and emission identities are not interchangeable. Preserve amount even if it passes unchanged; add other real species separately. No assumed atmosphere fractions and no total-air-plus-species double counting.

- Selected flow: Atmospheric water vapour intake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

#### Outputs

##### Product flows

##### Waste flows

###### Actual captured abrasive mineral dust (`captured_dust`)

Conditional actual distinct waste stream with measured full wet mass, composition, collection point, original cohort and treatment destination. Separate solids and water subaccounts without buying or emitting them twice. Keep all failure/sample/cleanup burdens; outward sale is not an automatic allocation transfer. Reject feed-grade dust, anaerobic sludge, metal smelting slag or part-degreasing-to-water records when route/state/type does not match.

- Selected flow: Captured white fused alumina mineral dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`; `jrc-ilcd-attributional-2010`

###### Actual wet mineral filter cake (`wet_sludge`)

Conditional actual distinct waste stream with measured full wet mass, composition, collection point, original cohort and treatment destination. Separate solids and water subaccounts without buying or emitting them twice. Keep all failure/sample/cleanup burdens; outward sale is not an automatic allocation transfer. Reject feed-grade dust, anaerobic sludge, metal smelting slag or part-degreasing-to-water records when route/state/type does not match.

- Selected flow: Wet alumina-grain washing filter cake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `epa-abrasive-manufacturing-1995`; `jrc-ilcd-attributional-2010`

###### Actual wastewater sent to treatment (`effluent`)

Conditional actual distinct waste stream with measured full wet mass, composition, collection point, original cohort and treatment destination. Separate solids and water subaccounts without buying or emitting them twice. Keep all failure/sample/cleanup burdens; outward sale is not an automatic allocation transfer. Reject feed-grade dust, anaerobic sludge, metal smelting slag or part-degreasing-to-water records when route/state/type does not match.

- Selected flow: Alumina-grain washing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `epa-abrasive-manufacturing-1995`; `jrc-ilcd-attributional-2010`

###### Actual spent alumina lining brick (`spent_lining`)

Conditional actual distinct waste stream with measured full wet mass, composition, collection point, original cohort and treatment destination. Separate solids and water subaccounts without buying or emitting them twice. Keep all failure/sample/cleanup burdens; outward sale is not an automatic allocation transfer. Reject feed-grade dust, anaerobic sludge, metal smelting slag or part-degreasing-to-water records when route/state/type does not match.

- Selected flow: Spent fired alumina lining brick
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `epa-abrasive-manufacturing-1995`; `jrc-ilcd-attributional-2010`

###### Actual discarded graphite electrode remnant (`spent_electrode`)

Conditional actual distinct waste stream with measured full wet mass, composition, collection point, original cohort and treatment destination. Separate solids and water subaccounts without buying or emitting them twice. Keep all failure/sample/cleanup burdens; outward sale is not an automatic allocation transfer. Reject feed-grade dust, anaerobic sludge, metal smelting slag or part-degreasing-to-water records when route/state/type does not match.

- Selected flow: Discarded graphite electrode remnant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `epa-abrasive-manufacturing-1995`; `jrc-ilcd-attributional-2010`

###### Actual removed manganese-steel jaw (`spent_jaw`)

Conditional actual distinct waste stream with measured full wet mass, composition, collection point, original cohort and treatment destination. Separate solids and water subaccounts without buying or emitting them twice. Keep all failure/sample/cleanup burdens; outward sale is not an automatic allocation transfer. Reject feed-grade dust, anaerobic sludge, metal smelting slag or part-degreasing-to-water records when route/state/type does not match.

- Selected flow: Removed manganese-steel crusher jaw plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `epa-abrasive-manufacturing-1995`; `jrc-ilcd-attributional-2010`

###### Actual spent polyester filter bag (`spent_filter`)

Conditional actual distinct waste stream with measured full wet mass, composition, collection point, original cohort and treatment destination. Separate solids and water subaccounts without buying or emitting them twice. Keep all failure/sample/cleanup burdens; outward sale is not an automatic allocation transfer. Reject feed-grade dust, anaerobic sludge, metal smelting slag or part-degreasing-to-water records when route/state/type does not match.

- Selected flow: Spent polyester dust-filter bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `epa-abrasive-manufacturing-1995`; `jrc-ilcd-attributional-2010`

###### Actual drained mineral lubricating oil (`spent_oil`)

Actual used and contaminated mineral lubricating-oil preparation, within native petroleum/synthetic used-oil Waste family at point of generation, Mass/kg, treatment route unspecified. Retain full water/additives/contamination, new/old installed fluid and drains with actual treatment/destination; no claim that native allows free recovery, burning or disposal credit.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_asset`
- Sources: `epa-abrasive-manufacturing-1995`; `jrc-ilcd-attributional-2010`

##### Elementary flows

###### carbon dioxide (fossil) actually emitted (`co2`)

Actual molecular CO2 CAS124-38-9, fossil carbon, emission to air unspecified subcompartment. Native synonyms such as dry ice do not establish emitted phase. Independently measure/speciate actual gas and fossil attribution from electrode/fuel/other carbon sources; never use a fixed total-carbon conversion or upstream electricity emissions again.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

###### carbon monoxide (fossil) actually emitted (`co`)

Actual gaseous molecular CO CAS630-08-0 from fossil carbon to air unspecified. Native cryogenic/flue-gas synonyms do not make a whole exhaust mixture CO. Determine actual CO separately from CO2 and unoxidized dust; actual different carbon source/media requires a different identity.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

###### Particulate matter, particle size unspecified actually emitted (`pm`)

One measured particulate emission class to air unspecified, mass basis, with size distribution genuinely unavailable. Native specifies no chemistry, stack height or LCIA factor; its clinker example and rate are not WFA defaults. Keep filterable/condensable and nonoverlapping size fractions distinguished in observations; do not double count total PM with subsets or assume all dust is Al2O3. If size/media is known use its appropriate specific identity.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

###### water vapour actually emitted (`vapour`)

Actual gaseous H2O CAS7732-18-5 to air unspecified; not liquid effluent, aerosol mass or purchased steam. Determine phase/source, moisture and actual reaction-water evidence independently. Water/ice/isotope synonyms do not license another chemical or phase. Retain incoming humidity and outgoing vapour separately; no arbitrary water density for other fluids.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

###### nitrogen monoxide actually emitted (`no`)

Only measured molecular NO CAS10102-43-9 emitted to air unspecified. Native loose HNO/nitroxyl/exhaust synonyms are not alternative adopted species. Total NOx reported as NO2 equivalent is not measured NO mass; resolve real composition, reference conditions and conversion before this card is usable. No sol-gel factor is used.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

###### Nitrogen dioxide gas actually emitted (`no2`)

Only actual independently speciated NO2 gas, not aggregate NOx, nitrous oxide or dinitrogen tetroxide. Native candidate tetroxide synonyms need resolution before binding; retain a concrete unbound molecule and measured actual mass.

- Selected flow: Nitrogen dioxide gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

###### Dinitrogen gas to air (`air_nitrogen_out`)

Actual molecular N2 gas CAS7727-37-9 emitted to air unspecified, not the input air-resource identity. Preserve actual independently measured gross exhaust and state; nitrogen/liquid/isotope aliases do not prescribe phase or NOx conversion. No assumed air composition, credit or total-air/species double counting.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

###### Oxygen gas to air (`air_oxygen_out`)

Actual molecular O2 gas CAS7782-44-7 emitted to air unspecified, not the renewable air-resource input or purchased oxygen. Native empty route/mix and broad liquid/singlet/isotope aliases do not establish another phase/species. Preserve independently measured actual gross flow and wet/dry state; no presumed atmosphere fractions, reaction stoichiometry or credit.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

###### Argon gas to air (`air_argon_out`)

Actual monatomic argon CAS7440-37-1 gas emitted to air unspecified, Mass/kg; not the air-resource input, radioactive argon41, soil/water emission or long-term/urban compartment. Preserve measured gross exhaust and state without assumed atmosphere fractions or an automatic pass-through credit; whole air and species are linked subaccounts, not duplicates.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-abrasive-manufacturing-1995`

### Process: Original-cohort packing storage handling and dispatch (`fg_service`)

#### Inputs

##### Product flows

###### Actual whole kraft shipping sack (`paper_sack`)

For this same qualified physical article, apply packaging_receipt_basis to the P/I/ER raw subledgers; standalone non-purchased receipt is I, even when retained unused at closing. Keep this card's original physical-versus-burden role and denominator. Conditional one actual paper sack compatible with the native at-plant paper/kraft bag family, open-mouth or valve configuration. Retain actual virgin/recycled fibre, layers, closure and supplier; no inherited environmental-benefit claim. A separately supplied PE liner has its own card, but a whole supplied composite bag owns included liner/closure once. Keep each O/P/I/ER/C/S/EO/W leg and original-cohort service burden.

- Selected flow: Paper bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `wm-duralum-special-white`

###### Actual separate polyethylene bag liner (`pe_film`)

For this same qualified physical article, apply packaging_receipt_basis to the P/I/ER raw subledgers; standalone non-purchased receipt is I, even when retained unused at closing. Keep this card's original physical-versus-burden role and denominator. One declared separate polyethylene-film component per row; CAS9002-88-4, Product flow, at-plant film, no fixed branching grade/geography. Not PET or PP film. If liner and stretch wrap are both supplied, instantiate distinct roles/rows. Included film in a whole purchased bag is a subaccount, not another purchase; all material legs and full attached/wet closing stock remain.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `wm-fused-mineral-process`

###### Actual wooden-board shipping pallet (`wood_pallet`)

For this same qualified physical article, apply packaging_receipt_basis to the P/I/ER raw subledgers; standalone non-purchased receipt is I, even when retained unused at closing. Keep this card's original physical-versus-burden role and denominator. Conditional whole pallet made of wood boards/slats at lumber mill, native Mass/kg; no standard size, one-pallet mass, life or geography is provided. Keep attached nails/moisture as supplied composition, and separate repairs only when separately supplied. Rental/returnable stock, repairs, external returns and gross shipping legs stay physical; do not buy each internal reuse again.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `wm-fused-mineral-process`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Actual post-release lost grain (`fg_grain_loss`)

Trace original release cohort, original burden, contamination/moisture and actual disposal/reprocessing increments. No new Q, automatic reversal of manufacture, restoration or sale credit. Any allowed postwork requires specification permission and subsequent testing/acceptance/disposition.

- Selected flow: Post-release white fused alumina grain waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `wm-fused-mineral-process`

###### Actual discarded paper sack (`paper_waste`)

One actual discarded kraft paper sack within the native on-site-generated GLO paper/cardboard packaging-waste family, Waste flow and Mass/kg. It does not prescribe treatment or certify recycling. Retain actual paper chemistry, contamination, full moisture/attachments, destination and all six material legs; no whole mixed packaging bundle or automatic credit.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `wm-fused-mineral-process`

###### Actual discarded polyethylene film (`pe_waste`)

Keep real PE chemistry, contamination and destination, not PET/PP waste; full gross outgoing weight and assigned treatment burden remain.

- Selected flow: Discarded polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `wm-fused-mineral-process`

###### Actual discarded wooden pallet (`pallet_waste`)

Whole actual old pallet with water/attachments. Retain new/old repair material and X leg rules; external sale alone does not transfer its accumulated service burden.

- Selected flow: Discarded wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: A_i / Q for manufacture; A_i,H / Q_H for actual original-cohort service. Each is the single normalization specified in section8.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `wm-fused-mineral-process`

##### Elementary flows

## 7. Allocation and Co-product Handling

The hierarchy below is restricted to a justified attributional allocation situation; industrial manufacturing pages/PDFs do not establish LCA allocation. All gross physical quantities and performed same-cohort FG services remain; partitioned burdens and physical conservation have separate ledgers.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared processes/cohorts/functions | Apply only to an explicitly justified attributional allocation situation. First use dedicated measurements and physical or virtual subdivision for each function/cohort/stage. Then identify exchange-specific determining physical causality, distinguishing embodied material from process-related loss/energy and service intensity. Do not choose physical versus economic allocation freely or apply one mass share to every exchange. | `jrc-ilcd-attributional-2010` |
| allocation_residual | shared processes/cohorts/functions | Only for the genuinely remaining inseparable common-process inventory use contemporaneous quantity times representative market value at the actual common exit condition/gate. Remove subsequent packaging/transport/conditioning from downstream prices; document currency/period, quality, quantity, market basis and uncertainty. Unknown values remain unresolved; no fixed ratio. Sum allocated inventories over all functions equals the original inventory. Physical gross outputs, stock and packaging legs remain unscaled. | `jrc-ilcd-attributional-2010` |
| allocation_failure | shared processes/cohorts/functions | Ordinary manufacturing failures, dust, rejected grain, samples, broken material and their treatment remain burdens of manufacture, including external sale or collection. No automatic T_other subtraction, avoided-product credit, free recycled feed or credit from an outward water/packaging leg. A transfer is allowed once only for a real independent other cohort/function plus justified allocation or burden-handover decision, with inherited vector and receiving account. Reuse/recycling requires the actual quality/state and consistent true-joint-process/treatment boundary; this PCR supplies no universal recycling factor. | `jrc-ilcd-attributional-2010` |
| allocation_rework | shared processes/cohorts/functions | Actual pre-release rework is internal with its inherited burden and new increments. Post-release regrading/reprocessing belongs to the original cohort service and requires manufacturer/specification permission, postwork tests, acceptance and disposition. A rejected grade is not assumed recoverable merely because it can be crushed again. A sold independent grade requires actual specifications, function, quality release and the allocation hierarchy; do not auto-promote fines or magnetic reject into co-products. | `jrc-ilcd-attributional-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect only unnormalized raw data and inherited vectors. “per reference flow” in aggregation_rule names the same output basis of calc_normalize; it performs no second division in the protocol. Manufacture uses Q and actual original-cohort service its original Q_H. Records cover the complete reporting period and observed service horizon including failures/Q0, start/stop, idle, cleanup, stores and every actual destination.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | feed | Material and intermediate ledger | raw record and independent measurement | gross receipt; supply formulation; assay; moisture; issue; return; opening/closing raw and WIP; physical handovers; inherited vectors; failure/rework | Calibrated net/tare weighing and traceable supply/production records; collect raw extensive values only, including whole preparation and separate subaccounts. | kg as received; independent species/water basis | each batch/event and continuous meters; opening/closing counts | complete manufacture period and declared original-cohort service horizon | actual site/provider/stage/cohort and each species; protocol process_id names its owner; cp_material spans feed/fusion/grain, cp_water spans grain/utilities/control, cp_asset spans fusion/grain/control | per reference flow | scale calibration; supplier assay; batch tickets; reconciliation |
| cp_release | grain | First-release grade ledger | raw record and independent measurement | lot/cohort; net whole kg; tare; free moisture; minor phases; size distribution; test result; held/reject disposition; unique first acceptance time | Weigh accepted whole grain on a calibrated scale; reconcile actual manufacturer grade tests, sampling and time-stamped first-release records; retain failed/Q=0 lots and no duplicate reinspection. | kg net whole grain; original test units | each batch/event and continuous meters; opening/closing counts | complete manufacture period and declared original-cohort service horizon | actual site/provider/stage/cohort and each species; protocol process_id names its owner; cp_material spans feed/fusion/grain, cp_water spans grain/utilities/control, cp_asset spans fusion/grain/control | per reference flow | calibration; signed release; full particle/chemical/crystal test context |
| cp_utility | utilities | Energy and compressed-air raw meters | raw record and independent measurement | stage/cohort; meter increments; rate series and intervals; kWh; MJ; m3 conditions; fuel kg; blend; LHV; density; outages; startstop/idle; upstream owner | Read calibrated cumulative meters or integrate a real rate over its measured intervals once; use actual extensive-property unit and document unit conversion, independent state/density and fuel/air component subaccounts. Collect no per-Q value. | kWh or MJ electrical energy; kg fuel; m3 gas/air with state | each batch/event and continuous meters; opening/closing counts | complete manufacture period and declared original-cohort service horizon | actual site/provider/stage/cohort and each species; protocol process_id names its owner; cp_material spans feed/fusion/grain, cp_water spans grain/utilities/control, cp_asset spans fusion/grain/control | per reference flow | meter calibration; time series; supply specification; measurement state |
| cp_water | utilities | Each actual water phase and wastewater | raw record and independent measurement | owner; incoming/return kg; cumulative volume; temperature/pressure; independent density; liquid/vapour/solid-bound phase; X_in/X_out; full wet opening/closing stock; assay; treatment route | Direct calibrated weighing or calibrated volume with independently measured density of that substance/state; preserve externally supplied/returned water and thermal convention, actual clean/dirty route and whole supplied carrier ownership. No residual-fit reaction water. | kg per phase; original m3 and enthalpy units separately | each batch/event and continuous meters; opening/closing counts | complete manufacture period and declared original-cohort service horizon | actual site/provider/stage/cohort and each species; protocol process_id names its owner; cp_material spans feed/fusion/grain, cp_water spans grain/utilities/control, cp_asset spans fusion/grain/control | per reference flow | weigh/meter calibration; independent sample/state; provider agreement; effluent record |
| cp_asset | asset_control | Actual asset consumable and repair services | raw record and independent measurement | asset/BOM; opening/closing/install/remove; net wet masses; new/old parts and water; service use; unused/unassigned service; wear; failure; maintenance; oil additions/drains; inherited vector | Weigh identified complete materials/parts and retained fluids; reconcile real service/maintenance logs, actual capacity use and inherited inventories. Stock and physical influx remain separate from allocated service; do not assume mass per item or fixed life. | kg per actual material/fluid; original service-time/capacity units | each batch/event and continuous meters; opening/closing counts | complete manufacture period and declared original-cohort service horizon | actual site/provider/stage/cohort and each species; protocol process_id names its owner; cp_material spans feed/fusion/grain, cp_water spans grain/utilities/control, cp_asset spans fusion/grain/control | per reference flow | BOM; scale; maintenance permission; time/use logs; supplier service data |
| cp_pack | fg_service | Each packaging material six-leg ledger | raw record and independent measurement | material/composition; O; P; I; ER; C; S; EO; W; attached WIP/FG; reusable stock; moisture; X_in/X_out; ownership; original cohort ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Weigh each component/whole supplied article with full moisture/attachments and reconcile all six external legs plus complete opening/closing stock. Preserve first non-purchased external ingress and one upstream owner; log internal reuse as cancelling transfers, no second purchase.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg per named packaging article/material | each batch/event and continuous meters; opening/closing counts | complete manufacture period and declared original-cohort service horizon | actual site/provider/stage/cohort and each species; protocol process_id names its owner; cp_material spans feed/fusion/grain, cp_water spans grain/utilities/control, cp_asset spans fusion/grain/control | per reference flow | scale/tare; supplier packaging scope; gross shipment/return/waste tickets |
| cp_service | fg_service | Original-cohort actual service | raw record and independent measurement | H; original Q_H; observation horizon; performed storage/packing/handling; opening/closing FG histories; gross dispatch/returns; original-delivery link; losses; actual postwork permission/tests/acceptance/disposition; unused service | Retain time-stamped services, measured increments and original cohort lineage; raw service account only, no renormalization by shipments or closing held mass. Repeat release is not new production. | original extensive units; kg physical FG; service time | each batch/event and continuous meters; opening/closing counts | complete manufacture period and declared original-cohort service horizon | actual site/provider/stage/cohort and each species; protocol process_id names its owner; cp_material spans feed/fusion/grain, cp_water spans grain/utilities/control, cp_asset spans fusion/grain/control | per reference flow | cohort history; work permission; postwork test; service meter; disposition |
| cp_emission | asset_control | Actual molecular particulate and waste observations | raw record and independent measurement | source/stage/cohort; species/CAS; carbon origin; medium/phase; gross air in/out; humidity; cumulative gas volume or rate/time; standard state; concentration basis; independent density; control capture; waste kg; detection limits; uncertainties | Use actual calibrated sampling/speciation and destination/treatment records. Convert concentration with matching dry/wet/reference-state cumulative volume; integrate rates only once. Keep unmeasured, nondetect and confirmed zero distinct; totals and subsets linked without duplication. | kg each actual species/particulate/waste; original instrument units | each batch/event and continuous meters; opening/closing counts | complete manufacture period and declared original-cohort service horizon | actual site/provider/stage/cohort and each species; protocol process_id names its owner; cp_material spans feed/fusion/grain, cp_water spans grain/utilities/control, cp_asset spans fusion/grain/control | per reference flow | method and calibration; gas state; raw spectra/sampling; detection limit; waste ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_raw | raw meters and quantities | Convert raw observations to each exchange native extensive unit before allocation. Cumulative volume is already integrated; only real rates use sum(rate×interval). For electricity use1kWh=3.6MJ. For other substances use independently measured density at the stated condition, never a secondary flow-property factor or water density by analogy. | raw measurements; explicit units; actual state; independent density | converted raw extensive observations |  |
| calc_q | finished_grain | Q = sum(unique newly first-released target-grade net whole kg). Keep gross release/hold/reject/rework records; actual impurities/free water remain. Closing FG is a partition of Q, not another output or manufacturing stock deduction. Q=0 retains burden and returns no unit value. | cp_release | Q | `wm-fused-mineral-process` |
| calc_manufacturing | manufacturing inventory vectors | A = B_open + V_new - B_close - T_other. Each term is a same-unit exchange vector after raw conversion and real allocation. B_open/B_close cover raw/WIP/unused-unassigned non-WIP stores only; no first-released FG. V_new includes actual failures/Q0/startstop/idle/cleanup and increments. T_other requires a real independent function/cohort and justified one-time allocation/handover; ordinary waste or sale is insufficient. Cancel internal transfers once and do not repeat stock-corrected consumption. | converted raw vectors; inherited store vectors; allocation decisions | A | `jrc-ilcd-attributional-2010` |
| calc_service | original cohort H | A_H = performed service vector assigned to original cohort H over the observed horizon. Keep its fixed original Q_H, full FG history, real losses and new permitted postwork. Deduct only unused/unassigned service already carried as such, once; never deduct performed service because FG remains held. No manufacture reversal or net-delivery denominator is inferred. | cp_service; cp_pack; actual utility/asset increments | A_H; Q_H | `jrc-ilcd-attributional-2010` |
| calc_normalize | all inventory rows except fixed finished_grain | For manufacture q_i = A_i / Q; for actual original-cohort service q_i,H = A_i,H / Q_H. Apply this division exactly once after raw conversion, stock/inheritance and real allocation. Amount cards and protocol aggregation labels reference this same calculation, never another division. Consolidated reporting sums compatible manufacturing/service vectors and cancels internal first-release Q once. Keep gross physical companion ledgers unscaled by burden shares. If the relevant Q or Q_H is zero retain raw vector and emit no unit result. | A; Q; A_H; Q_H | q_i; q_i,H |  |
| calc_physical | all physical gates and packaging | For each physical material/species: opening + external incoming = closing + external outgoing, with independently evidenced reaction/phase transformations stated explicitly. Do not add total wet waste and its water/solid subaccounts twice. For each packaging material O+P+I+ER=C+S+EO+W. X_in/out removes only duplicate other flow terms, never retained new influx or full closing wet stock. Gross physical legs are not burden vectors and are not scaled by economic allocation. One residual cannot determine multiple unknowns. | cp_material; cp_water; cp_asset; cp_pack; cp_emission | physical closure and unresolved residuals |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each product and exchange | Verify actual whole product, route, phase, grade, CAS where applicable, geography/media/type and every native property/reference-unit restriction. UUID identity is not a provider dataset or grade approval; unresolved auxiliaries need completion before actual dataset use. | direct native record; actual supply and process evidence |
| dq_representative | whole reporting period | Cover all operating modes, failed/Q0 runs, raw/WIP stocks and cohort history; disclose sampling, temporal/geographic representativeness, detection limits, uncertainty and actual gaps. Future factory values are requirements, not observations. | complete time records; stock counts; original cohort release history |
| dq_source | each constraint and amount | Keep independent primary route support, actual foreground records and LCA allocation sources in their own roles. Retain adjacent counterexamples and full supplier formulation context. No primary numeric recipes, SDS density/purity or EPA grit-dryer factor is a universal value. | full cited source; scope comparison; actual raw records |
| dq_allocation | each shared burden and exit | Retain subdivision attempts, determining causality per exchange, residual same-gate/state prices, conservation across all functions and uncertainty. Unresolved core route/terminal identity cannot be replaced by a mechanically passing check. | metering; technical relationship; market evidence;100% check |
| dq_bilingual | whole method | Keep English and Chinese quantities, qualifier elements, atomic rows, source IDs, rules and stage conditions aligned; retain actual missing evidence without scientific/translation approval claims. | paired source/structured field audit |

## 9. Validation Rules

Apply these rules with the complete premises in §§5/7 and raw quantities, formulas and quality requirements in §8. Unresolved/unmeasured items cannot masquerade as passes; these are not claims that future factory tests have already occurred.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_terminal | complete data package and raw context | Require the declared whole virgin white electric-fused abrasive grain and actual full manufacture/grade-release evidence. A hard native material/CAS/route/phase/type conflict or unresolved core terminal identity makes the concrete dataset unusable; do not use raw Bayer alumina, natural/sintered grains, gem sapphire, whole wheels or a formal checker to fill that gap. | `wm-fused-mineral-process`; `jrc-ilcd-attributional-2010` |
| validate_measurement | complete data package and raw context | Check unique finished_grain output,1kg reference, Q/Q_H lineage, all original units and conversion before the single calc_normalize. No missing/unknown conversion may be called pass. Q0 produces no unit result; first-release closing FG is not an extra production output or manufacturing B_close. | `wm-fused-mineral-process`; `jrc-ilcd-attributional-2010` |
| validate_closure | complete data package and raw context | Require independent wet physical mass and relevant element/species checks at manufacturing/service/consolidated gates, full packaging O/P/I/ER/C/S/EO/W closure and actual repair/water X overlap evidence. Retained new influx plus full closing wet stock stay. No gross legs reduced by burden shares, single residual for multiple unknowns, total/subset double count or waste-sale automatic T_other. | `wm-fused-mineral-process`; `jrc-ilcd-attributional-2010` |
| validate_completeness | complete data package and raw context | Account for all actual consumables, asset service, utilities, controls, ordinary losses and treatment, emissions and post-release increments. Missing records are unresolved, not confirmed zero; each additional actual atom needs a card and its own property/media/source support. Actual FG postwork requires manufacturer/spec permission, posttests, acceptance and disposition. | `wm-fused-mineral-process`; `jrc-ilcd-attributional-2010` |
| validate_approval | complete data package and raw context | Report which checks were performed, skipped or unresolved and their evidence. Arithmetic/schema/source-fidelity checks do not establish scientific review, translation review, accepted mapping, certification or publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Use completed manufacture data plus explicit service accounts after actual evidence/applicability review for matching grade/gate/reference basis |
| allowed_use | Attributional inventory of whole virgin white fused abrasive grain; actual original-cohort services disclosed separately |
| excluded_use | Natural corundum/emery; brown fused bauxite+coke+iron/ferrosilicon co-production; sintered/tabular/sol-gel alumina; zirconia-alumina and intentionally doped fusion routes; hollow alumina bubbles; gemstone or technical single-crystal sapphire; Bayer refinery alumina as finished reference; bonded whole wheels, coated abrasives, grinding spheres, complete refractory bricks and crucibles; used blasting-grain recycling and downstream use. Acid treatment or surface coating is not presumed; a real additional route needs renewed primary applicability and its separate whole formulation, utilities, emissions and wastes. |
| required_metadata | manufacturer and facility; production period and geography; virgin white fused grain grade; whole calcined alumina supply state and supplier route; electric-arc fusion and actual cooling/crystal state; minor phases and impurities with full assay basis; supplied free moisture and net whole mass; particle-size specification and actual distribution; actual crushing/separation/cleaning/drying stages; unique first-release cohort and tests; all rejected/held/reworked material disposition; raw/WIP/non-WIP-store inherited vectors; utilities and furnace/lining/electrode service boundary; packaging composition and supplier-included ownership; original-cohort post-release service horizon; provider geography/route/native-property restrictions; allocation justification and unresolved evidence |
| required_quality_disclosure | Complete actual scope/units/stocks/services/allocation/upstream ownership; performed/unresolved checks; representativeness and uncertainty; no scientific/translation/mapping/publication approval from this template |
| update_trigger | Material change in feed/fusion route, grade/phase/size, first-release gate, assets/utilities/water-energy conventions, supplier, allocation or measurement |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-2025` | official_guidance | UNSD, CPC Version3.0 Structure and Explanatory Notes,30June2025, pp186–187; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification title and adjacent bonded/coated abrasive boundary only; no accepted mapping or manufacturing recipe. |
| `alteo-white-fused-alumina` | literature | ALTEO Fused Alumina, White Fused Alumina; https://www.alteofusedalumina.com/products/white-fused-alumina/ | Manufacturer confirmation of calcined-alumina electric-arc fusion and synthetic abrasive mineral; distinguish bubble alumina. |
| `wm-fused-mineral-process` | literature | Washington Mills, Fused Mineral Production Process; https://www.washingtonmills.com/fused-minerals/fused-mineral-production-process | Raw receipt/storage, electric fusion, solidified ingot, crushing/grading and chemical/crystal/size quality control; multi-mineral context, no WFA numeric defaults. |
| `wm-duralum-special-white` | literature | Washington Mills, DURALUM Special White; https://www.washingtonmills.com/products/white-fused-aluminum-oxide/duralum-special-white | Real virgin fused white alumina abrasive terminal and applications; no same-plant recipe claim. |
| `wm-white-alumina-family` | literature | Washington Mills, White Fused Aluminum Oxide; https://www.washingtonmills.com/products/white-fused-aluminum-oxide | Distinguish angular/blocky abrasive grain from hollow bubbles, powders and refractory grades; actual product specification remains required. |
| `wm-white-alumina-sds-2025` | literature | Washington Mills, White Fused Aluminum Oxide SDS, revision14May2025 v2.0, sections1/3/9/13; https://www.washingtonmills.com/sites/default/files/2025-05/White%20Fused%20Aluminum%20Oxide_US%20SDS%20%5BEN%5D.pdf | Whole solid product/CAS identity, multiple-grade and withheld-trace-composition limits; no purity, density, hazard, emission or disposal default. |
| `epa-abrasive-manufacturing-1995` | official_guidance | US EPA AP-42 section11.31, January1995, complete10pages, figure11.31-1 and tables11.31-1/2; https://www.epa.gov/sites/default/files/2020-10/documents/c11s31.pdf | Qualitative crushing/screening and conditional washing/drying/separation plus emissions sampling scope. Brown bauxite/coke/iron fusion, sol-gel and wheel/coated routes are counterexamples; grit-dryer factors not adopted. |
| `jrc-ilcd-attributional-2010` | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March2010, §§7.9.2–7.9.3, printed255–272/PDF275–292; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation only where justified: subdivision/virtual subdivision, exchange-specific determining physical causality and residual common-process exit-state market value;100% inventory conservation. No industrial route or automatic recycling credit. |
