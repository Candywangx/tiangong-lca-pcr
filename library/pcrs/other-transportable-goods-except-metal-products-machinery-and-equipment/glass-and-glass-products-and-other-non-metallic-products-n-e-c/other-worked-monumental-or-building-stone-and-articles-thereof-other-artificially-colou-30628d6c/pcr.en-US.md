---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.other-worked-monumental-or-building-stone-and-articles-thereof-other-artificially-colou-30628d6c
status: candidate
content_maturity: authored_methodology
translation_status: canonical
language: en-US
sync_with: pcr.zh-CN.md
---

# Cut and polished natural granite countertops

## 1. Scope and Applicability

This PCR covers the complete manufacture of an uninstalled, cut-to-drawing and polished natural granite countertop slab article, from a burden-bearing whole quarried granite block or explicitly processed granite slab to the first finished-countertop quality release, with separately accounted actual storage/packaging/dispatch service. A countertop is a finished building stone article; no cabinet, sink, furniture frame or installed kitchen is claimed. The reference is a verified physical granite-slab Product family, narrowed to the positively evidenced countertop route rather than to every article in CPC 37690. `un-cpc3-2025`; `nsi-countertops-2022`

The route is a transparent technical synthesis of surveyed primary manufacturing stages, not a claim that one SKU, factory or contemporary order supplied every observation. Keep actual geological mineral assemblage, fabric, weathering, moisture, shape and treatment state; pure silica/feldspar inputs cannot replace whole granite. Exclude worked marble/travertine/alabaster, ceramic tiles, agglomerated resin-bound stone, granules/powder as reference, flamed/bush-hammered stair products, unfinished quarry blanks as final product and installed systems. Resin used locally to fill natural fissures is recorded as its actual whole preparation and does not turn the natural geological body into a bulk agglomerated-stone route. Missing factory quantities or ordinary auxiliary UUIDs require collection; they do not justify inventing values.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.other-worked-monumental-or-building-stone-and-articles-thereof-other-artificially-colou-30628d6c |
| classification_refs | CPC 3.0 37690; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-37690.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Complete cut-to-drawing polished natural granite slab countertops at first quality release |
| excluded_products | Calcareous worked stone; ceramic tiles; resin-agglomerated stone; flamed treads; raw block as final product; integrated sink/cabinet/furniture/installed system |
| representative_product | Whole natural granite countertop slab with actual complete geometry and polished face/edge state |
| production_route | Primary block sawing and slab calibration/face polishing as needed; template-specific cutting/holes and edge polishing; actual local treatment and cleaning; specified testing and first release |
| market_state | Uninstalled finished countertop article of declared stone/configuration/moisture/treatment; no invented fixed thickness or lifetime |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the manufacturing inventory for 1 m2 actual net single-face projected area of first-quality-released whole natural granite countertop; no installed-service equivalence |
| How much | 1 m2 |
| How well | quarry and actual stone designation; petrographic mineral phases and fabric; weathering and defects; free moisture; full drawing-specific geometry and real holes or curved edges; thickness and net mass measured independently; actual polished face and edge finish; whole-product component boundary; local resin fill and impregnation formulation/state or evidenced absence; upstream block or prepared-slab processing split; site and year; machinery and provider scope; first quality-release event and acceptance specification/tests; Q area and separate mass/count; original cohort and WIP inherited vectors; gross FG and packaging ledgers; water/phase balances and actual dust/gas species; complete service horizon; allocation basis and residual gate values; uncertainty and evidence gaps |
| How long or cycle | One original first-release production cohort and its explicitly disclosed real postrelease service horizon; no default service life |
| reference_flow_link | `finished_countertop` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Granite slab product `d85d190e-3c45-46ab-98bb-a3a2c0db4441` |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | quarry and actual stone designation; petrographic mineral phases and fabric; weathering and defects; free moisture; full drawing-specific geometry and real holes or curved edges; thickness and net mass measured independently; actual polished face and edge finish; whole-product component boundary; local resin fill and impregnation formulation/state or evidenced absence; upstream block or prepared-slab processing split; site and year; machinery and provider scope; first quality-release event and acceptance specification/tests; Q area and separate mass/count; original cohort and WIP inherited vectors; gross FG and packaging ledgers; water/phase balances and actual dust/gas species; complete service horizon; allocation basis and residual gate values; uncertainty and evidence gaps |

Natural quarried granite with its real mineral assemblage and irregular interlocking crystals; manufactured by cutting and grinding/polishing for architectural countertop use. Native Product identity has Area as its sole reference property; it gives no fixed stone species/grade, geometry, thickness, mass, density, geographic supplier, resin treatment or certification. Declare the actual quarry/stone and petrography, weathering, free moisture, complete drawing and holes/edges, polished faces, any local fill/impregnation and every attached component. Not marble/travertine/alabaster, ceramic tile, agglomerated resin-stone, a pure mineral powder, a flamed tread or an installed kitchen/furniture system. A supplied finished countertop cannot substitute for block/slab manufacturing.

Declare every qualifier in the dataset metadata or reference/process comments. Missing qualifiers or unverified incompatible native identity leave the actual data package incomplete. The single declared reference is 1 m2; Q is the observed cohort total in the same area unit.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| area_reference | finished_countertop | Area | m2 | Q = sum of the actual single-face projected areas of newly first-quality-released complete countertops in the original cohort. Include closing released FG once. Use L × W only for a proved rectangle on the declared net projected-face basis with actual holes removed; use measured or traceable drawing-specific geometry for every curved or nonrectangular shape. Do not use a bounding rectangle, both faces, thickness surface area, raw slab area or dispatched area. cp_release_p_make records raw measurements and release flags. `nsi-countertops-2022`; `ilcd-detailed-2010` |
| normalize_basis | all inventory rows | Row-native extensive property | m2; kg; MJ; Item(s) | Every nonreference card references normalize_once after convert_raw and attribute_vector. Protocols collect un-divided raw amounts; aggregation/card text is a view of the same single A_j/Q result. Electricity keeps MJ (raw kWh × 3.6); material and gas masses keep kg; the area reference keeps m2; physical machine item stock is not a kg flow. Do not apply a blanket Mass/kg requirement to energy, area or volume-native future rows. `nsi-countertops-2022`; `ilcd-detailed-2010` Declared custody-only/gross physical disclosures instead use the same sole V_j/Q under normalize_once, replacing the burden numerator A_j/Q; actual burden vectors and physical ledgers stay separate, without another quotient or stock/economic correction of measured gross legs. |
| mass_count_conversion | finished_countertop | Mass and Area and Number of items | kg; m2; Item(s) | Net finished mass and count are independent metadata and physical-balance observations for the same measured configuration/moisture/acceptance scope, not secondary flow-property conversion coefficients. Any requested kg/item or kg/m2 conversion requires calibrated net weighing and actual matched geometry/count from cp_release_p_make. Number of items → Item(s) and item are identical physical units with factor 1; this does not establish an item mass or a stone density. No secondary coefficient supplies either. `nsi-countertops-2022`; `ilcd-detailed-2010` |
| water_and_species | all material and gas rows | Mass and actual native energy/volume if present | kg; actual row unit | Measure wet whole-material mass, free moisture, phase/chemical composition and real state independently. Do not force quartz or a single feldspar to represent whole granite. Mineral structural/adsorbed/free/phase water are distinct; no calcination or fixed reaction-water amount is assumed. Do not fit two unknowns using one balance residual; COD/VOC/NOx and total PM are indicators, not specific molecular/mineral mass. A cumulative gas/liquid volume is not multiplied by time; integrate only actual rates. Density belongs to the particular substance and measured temperature/pressure/composition. `nsi-countertops-2022`; `ilcd-detailed-2010` |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Whole quarried natural granite block, or an explicitly documented prepared granite slab bearing its actual completed upstream operations; never purchased finished countertop |
| starting_condition_role | Burden-bearing product supply to complete remaining manufacturing |
| product_classification_scope | Only the defined natural granite countertop part of CPC 3.0:37690 |
| recursive_input_rule | Internal recut/repolish material retains original inherited vectors and cancels internal transfers; external block/slab supply has one compatible provider vector; no same-product wrapping-only recursion |
| upstream_dataset_requirement | Link real quarry/block or prepared-slab processing, inbound transport, every material/formulation/energy/tool/asset service and ordinary waste treatment exactly once with disclosed coverage gaps |
| disclosure | quarry and actual stone designation; petrographic mineral phases and fabric; weathering and defects; free moisture; full drawing-specific geometry and real holes or curved edges; thickness and net mass measured independently; actual polished face and edge finish; whole-product component boundary; local resin fill and impregnation formulation/state or evidenced absence; upstream block or prepared-slab processing split; site and year; machinery and provider scope; first quality-release event and acceptance specification/tests; Q area and separate mass/count; original cohort and WIP inherited vectors; gross FG and packaging ledgers; water/phase balances and actual dust/gas species; complete service horizon; allocation basis and residual gate values; uncertainty and evidence gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | all manufacturing | A whole natural granite block undergoes real primary sawing, calibration and grinding/polishing, then template-specific cutting/holes and edge work, required local fill/impregnation, cleaning, actual specified inspection/testing and first quality release. Prepared slab input is an alternative supply boundary, not an excuse to omit/repeat its upstream sawing/finishing. Never reduce this method to purchasing and wrapping a finished countertop. | `nsi-countertops-2022` |
| b_gate | manufacturing and associated services | The first newly accepted whole-countertop release is Q. Keep all attributable transport/templating before that gate; keep actual postrelease storage, packing, lifting and dispatch in a separate original-cohort service account with a disclosed observation horizon. Installation/use/end of life are outside this gate and receive no invented life or certification. A quoted factory gate does not erase upstream supplies or ordinary waste treatment/transport. | `nsi-countertops-2022` |
| b_no_double | all source/provider interfaces | Keep each external whole-article/preparation receipt once and every actual single flow, phase and process state. Internal material/water transfers cancel with inherited vectors; no second provider charge for a completed upstream operation or complete outsourced service. Additional actual circuits, combustion gases, chemicals, wastes and material/water repairs require separate physical cards even when unlisted here. Distinguish actual zero, demonstrated absence and unknown; an unknown cannot be reported not_applicable. | `nsi-countertops-2022` |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | ilcd-detailed-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_make | Complete block/slab-to-countertop manufacturing | required | Actual remaining operations after the declared block/prepared-slab boundary; no finished-countertop purchase route | Foreground manufacturing or original-cohort service | per reference flow |
| p_control | Water and particulate controls and external treatment interfaces | required | Real manufacturing controls and actual resulting treatment; add each real circuit/species | Foreground manufacturing or original-cohort service | per reference flow |
| p_service | Original-cohort postrelease storage packaging and dispatch | required | Actual associated service horizon including original stock and return/rework events | Foreground manufacturing or original-cohort service | per reference flow |
| p_asset | Actual asset service and individual maintenance | conditional | Actually attributable owned/contracted equipment service and repairs; no default machine mass or life | Foreground manufacturing or original-cohort service | per reference flow |

The process map groups a complete physical route for data collection; preserve the actual primary-sawing, slab-polishing, template/cutting/edge-working and release stage subledgers. Each card is one exchange. Conditions identify possible actual exchanges, not a recipe or evidence that an unobserved flow is absent. Add every actual unlisted flow separately. Gross physical movements, inherited stock vectors and actual service charges remain separate; shared meters never justify a collection-label flow.

### Process: Complete block/slab-to-countertop manufacturing (`p_make`)

#### Inputs

##### Product flows

###### Whole natural granite block (`block_feed`)

Block-start route only. Receive the whole burden-bearing quarried block with real geological phases, defects, weathering and moisture; do not buy SiO2 or feldspar in place of stone. Include inbound handling and actual transport; quarry operations remain in the upstream block dataset.

- Selected flow: Whole natural granite block
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_p_make`
- Sources: `nsi-countertops-2022`

###### Prepared natural granite slab (`slab_feed`)

Alternative slab-start route only. Document whether the received slab is merely sawn or already calibrated, ground, polished, filled or impregnated. Its supplier vector must include every completed upstream operation; execute only the remaining actual operations locally. Never count both a parent block and its purchased slab.

- Selected flow: Prepared natural granite slab
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_p_make`
- Sources: `nsi-countertops-2022`

###### Purchased grid electricity (`make_power`)

Meter the actual receipt interface for block/slab handling, sawing, calibration, face polishing, template measurement, bridge/CNC cutting, holes, edge polishing and cleaning/inspection. Preserve stage submeter totals and voltage/location/year/provider; a generation-at-incineration identity or fixed foreign grid is not general factory electricity. Onsite generation uses its real fuel/exhaust ledger instead of a second purchased-kWh charge.

- Selected flow: Purchased grid electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_p_make`
- Sources: `nsi-countertops-2022`

###### Diesel fuel (`make_diesel`)

Conditional actual diesel equipment. Native mass-based fuel leaves grade, formulation, density, NCV, refinery route, geography and provider unspecified; obtain each from the real supply. Keep supply separate from combustion and retain carrier mass plus independently measured heat without charging the same fuel twice.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_p_make`
- Sources: `nsi-countertops-2022`

###### Propane fuel (`propane_fuel`)

Include only when this individual fuel actually supplies handling, templating travel, process equipment or attributable factory heating. Record the entire supplied fuel formulation, phase, actual combustion location, composition and carrier mass. No thermal flaming is implied by a conditional fuel card; this PCR selects a polished surface route.

- Selected flow: Propane fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_p_make`
- Sources: `nsi-countertops-2022`

###### Natural gas fuel (`natural_gas_fuel`)

Include only when this individual fuel actually supplies handling, templating travel, process equipment or attributable factory heating. Record the entire supplied fuel formulation, phase, actual combustion location, composition and carrier mass. No thermal flaming is implied by a conditional fuel card; this PCR selects a polished surface route.

- Selected flow: Natural gas fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_p_make`
- Sources: `nsi-countertops-2022`

###### Motor gasoline fuel (`gasoline_fuel`)

Include only when this individual fuel actually supplies handling, templating travel, process equipment or attributable factory heating. Record the entire supplied fuel formulation, phase, actual combustion location, composition and carrier mass. No thermal flaming is implied by a conditional fuel card; this PCR selects a polished surface route.

- Selected flow: Motor gasoline fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_p_make`
- Sources: `nsi-countertops-2022`

###### Light heating fuel oil (`heating_oil`)

Include only when this individual fuel actually supplies handling, templating travel, process equipment or attributable factory heating. Record the entire supplied fuel formulation, phase, actual combustion location, composition and carrier mass. No thermal flaming is implied by a conditional fuel card; this PCR selects a polished surface route.

- Selected flow: Light heating fuel oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_p_make`
- Sources: `nsi-countertops-2022`

###### Supplied process water (`process_water`)

Record actual externally supplied water for sawing, grinding, polishing and washing once at ingress, including supplier-included carried water under the correct owner. Internal recirculation is a separate subledger, not another purchase. Raw water abstraction needs its own source/compartment-specific elementary row if actually present. Determine mass from weighing or independent density at measured temperature; no universal water/slurry density. Native Product is externally supplied treated industrial process water, Mass/kg, without fixed geography or treatment grade. Match actual supplier treatment, quality and interface before use. Untreated abstraction requires its matching source/compartment identity, not this treated supply. Internal recycle and formulation-carried water are not another purchase; shared supply and stage transfers retain one upstream owner. No water/slurry density or treatment inventory is inferred.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_p_make`
- Sources: `nsi-countertops-2022`

###### Diamond-segmented stone saw blade (`saw_blade`)

Only an actual whole purchased blade for this stone and machine. Record steel core, bonded abrasive segments and any formulation as the whole supplied article once, with replacement/wear and remaining unassigned service. Do not substitute a wire-saw UUID or purchase constituent diamond again.

- Selected flow: Diamond-segmented stone saw blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_tool_p_make`
- Sources: `nsi-countertops-2022`

###### Diamond-beaded wire saw (`saw_wire`)

Conditional actual diamond-beaded stone-cutting wire article, not the saw machine, a blade, loose diamond or silicon-wafer cutting service. Native Product/Mass identity specifies stone cutting but no bead/bond/steel/rubber composition, grade, geography, durability or provider. Verify the whole supplied wire and actual renewal/wear; do not charge one full tool per countertop or count its materials twice.

- Selected flow: Diamond-beaded wire saw `923e61d0-0277-47dd-a2b9-032166c212ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_tool_p_make`
- Sources: `nsi-countertops-2022`

###### Bonded diamond stone-polishing pad (`polishing_pad`)

Whole supplied pad for the actual face/edge polishing system; retain its bond and backing composition, renewal, wear, dust and spent-pad fate. Loose diamond or a generic abrasive does not establish this finished pad identity.

- Selected flow: Bonded diamond stone-polishing pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_tool_p_make`
- Sources: `nsi-countertops-2022`

###### Silicon carbide polishing abrasive grain (`sic_abrasive`)

Only actual separately purchased loose SiC abrasive. Its grain grade and complete supplied formulation must be confirmed; the abrasive within a purchased bonded pad is a subaccount, not another purchased grain flow.

- Selected flow: Silicon carbide polishing abrasive grain
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_tool_p_make`
- Sources: `nsi-countertops-2022`

###### Epoxy stone-filling resin preparation (`fill_resin`)

Conditional actual local fissure fill permitted by the product specification. Purchase the complete identified resin component once including its carrier/additives; the separately supplied hardener has its own card. For another chemistry add its own specific preparation; bulk resin-agglomerated stone is excluded. Treatment already performed on a supplied slab stays upstream, not repeated locally.

- Selected flow: Epoxy stone-filling resin preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_p_make`
- Sources: `nsi-countertops-2022`

###### Epoxy stone-filling hardener preparation (`fill_hardener`)

Only the real separately supplied hardener component paired with the recorded resin. Keep supplier/SDS formulation and mixing/cure losses; no default mixing ratio, reaction water or assumed amine identity. Constituents and carrier water are subaccounts of this whole component.

- Selected flow: Epoxy stone-filling hardener preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_p_make`
- Sources: `nsi-countertops-2022`

###### Granite impregnating sealer preparation (`impregnating_sealer`)

Only actual factory-applied impregnation identified by its whole supply formulation, solvent/water carrier, retained amount and species-specific releases. Do not infer uncoated or untreated from the word polished, and do not move site-installation sealant into the factory without an actual event.

- Selected flow: Granite impregnating sealer preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_p_make`
- Sources: `nsi-countertops-2022`

###### Liquid granite-cleaning detergent preparation (`cleaner`)

Conditional real final cleaning preparation. Keep the whole purchased formulation and actual rinse/waste handling; active ingredient and carrier water are nested ledgers, never separate duplicate purchases. Identify every actually emitted solvent separately; VOC or COD is not a molecular mass.

- Selected flow: Liquid granite-cleaning detergent preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_p_make`
- Sources: `nsi-countertops-2022`

###### Cotton wiping cloth (`cotton_wipe`)

Only actual separate cleaning cloth; distinguish supplied whole rag from its cotton fibre input and track reuse/contaminated disposition without automatic credit.

- Selected flow: Cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_p_make`
- Sources: `nsi-countertops-2022`

##### Elementary flows

###### Oxygen in ambient intake air (`oxygen_in`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Only actual ordinary gaseous O2, CAS7782-44-7, Elementary Resource from air, Mass/kg. Independently measure actual gross species, phase, source and receiving compartment; not manufactured Product gas, dissolved/total element, liquid, isotope or ion. Canonical CAS/name/type/media governs noisy aliases; NO/HNO and NO2/N2O4 are not interchangeable molecular masses. No NOx equivalent, fixed air fraction, density or reaction factor is adopted; actual inlet and outlet ledgers remain separate.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### dinitrogen (`nitrogen_in`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Native dinitrogen is CAS 7727-37-9, a resource from air with Mass/kg, not air-separation nitrogen Product or an emission-to-air identity. No fixed purity, air proportion or geography.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### Water vapour in ambient intake air (`humidity_in`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species.

- Selected flow: Water vapour in ambient intake air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### Carbon dioxide in ambient intake air (`ambient_co2_in`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species.

- Selected flow: Carbon dioxide in ambient intake air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### Argon in ambient intake air (`argon_in`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Only actual ordinary gaseous Ar, CAS7440-37-1, Elementary Resource from air, Mass/kg. Independently measure actual gross species, phase, source and receiving compartment; not manufactured Product gas, dissolved/total element, liquid, isotope or ion. Canonical CAS/name/type/media governs noisy aliases; NO/HNO and NO2/N2O4 are not interchangeable molecular masses. No NOx equivalent, fixed air fraction, density or reaction factor is adopted; actual inlet and outlet ledgers remain separate.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

#### Outputs

##### Product flows

###### Granite slab product (`finished_countertop`)

Natural quarried granite with its real mineral assemblage and irregular interlocking crystals; manufactured by cutting and grinding/polishing for architectural countertop use. Native Product identity has Area as its sole reference property; it gives no fixed stone species/grade, geometry, thickness, mass, density, geographic supplier, resin treatment or certification. Declare the actual quarry/stone and petrography, weathering, free moisture, complete drawing and holes/edges, polished faces, any local fill/impregnation and every attached component. Not marble/travertine/alabaster, ceramic tile, agglomerated resin-stone, a pure mineral powder, a flamed tread or an installed kitchen/furniture system. A supplied finished countertop cannot substitute for block/slab manufacturing. This is the unique first-quality-release reference output. Q includes all newly first-released finished area including pieces left in closing FG; no second production output is created by dispatch or retest. Retain independent real net mass and count alongside area.

- Selected flow: Granite slab product `d85d190e-3c45-46ab-98bb-a3a2c0db4441`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: 1 m2
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release_p_make`
- Sources: `nsi-countertops-2022`

##### Waste flows

###### Natural granite fabrication offcut (`stone_offcut`)

Sawn/edge/hole cut-out and actual routing by wet mass and phase composition; sale or external aggregate processing is not automatic coproduct allocation.

- Selected flow: Natural granite fabrication offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_p_make`
- Sources: `nsi-countertops-2022`

###### Rejected natural granite countertop (`failed_countertop`)

Failed or broken whole pieces and destructive samples before first release stay outside Q with all attributable manufacturing/testing/treatment burdens.

- Selected flow: Rejected natural granite countertop
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_p_make`
- Sources: `nsi-countertops-2022`

###### Spent diamond-segmented stone saw blade (`spent_blade`)

Actual discarded blade/core/segments with separately measured wear; do not also discard its already transferred worn mass.

- Selected flow: Spent diamond-segmented stone saw blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_p_make`
- Sources: `nsi-countertops-2022`

###### Spent diamond-beaded stone-cutting wire (`spent_wire`)

Actual removed complete wire with real remaining bead/steel/coating composition and receiver.

- Selected flow: Spent diamond-beaded stone-cutting wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_p_make`
- Sources: `nsi-countertops-2022`

###### Spent bonded diamond polishing pad (`spent_pad`)

Actual residual pad after wear; retain bonded polymer/abrasive/backing and contaminated treatment.

- Selected flow: Spent bonded diamond polishing pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_p_make`
- Sources: `nsi-countertops-2022`

###### Detergent-contaminated cotton wiping cloth (`spent_cloth`)

Actual whole waste rag with retained cleaner/water separately assayed as subaccounts; do not add its wet constituents as extra outgoing waste mass.

- Selected flow: Detergent-contaminated cotton wiping cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_p_make`
- Sources: `nsi-countertops-2022`

##### Elementary flows

###### carbon dioxide (fossil) (`fossil_co2`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Native CAS 124-38-9 is fossil CO2 emission to air, unspecified subcompartment, Mass/kg. Broad synonyms mentioning dry ice/ions/isotopes do not change this CAS and declared neutral gas identity; they do not authorize those other phases or species. Exclude incoming ambient/pass-through CO2 and biogenic carbon.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### carbon monoxide (fossil) (`fossil_co`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Native CAS 630-08-0 is fossil neutral CO emission to air, unspecified subcompartment, Mass/kg. Exhaust/flue-gas and refrigerated-liquid synonyms are not permission to bind whole exhaust or a liquid phase.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### Nitrogen monoxide to air (`nitric_oxide`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Only actual ordinary gaseous NO, CAS10102-43-9, Elementary emission to current unspecified air, Mass/kg. Independently measure actual gross species, phase, source and receiving compartment; not manufactured Product gas, dissolved/total element, liquid, isotope or ion. Canonical CAS/name/type/media governs noisy aliases; NO/HNO and NO2/N2O4 are not interchangeable molecular masses. No NOx equivalent, fixed air fraction, density or reaction factor is adopted; actual inlet and outlet ledgers remain separate.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Only actual ordinary gaseous NO2, CAS10102-44-0, Elementary emission to current unspecified air, Mass/kg. Independently measure actual gross species, phase, source and receiving compartment; not manufactured Product gas, dissolved/total element, liquid, isotope or ion. Canonical CAS/name/type/media governs noisy aliases; NO/HNO and NO2/N2O4 are not interchangeable molecular masses. No NOx equivalent, fixed air fraction, density or reaction factor is adopted; actual inlet and outlet ledgers remain separate.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### Sulfur dioxide to air (`sulfur_dioxide`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Only actual ordinary gaseous SO2, CAS7446-09-5, Elementary emission to current unspecified air, Mass/kg. Independently measure actual gross species, phase, source and receiving compartment; not manufactured Product gas, dissolved/total element, liquid, isotope or ion. Canonical CAS/name/type/media governs noisy aliases; NO/HNO and NO2/N2O4 are not interchangeable molecular masses. No NOx equivalent, fixed air fraction, density or reaction factor is adopted; actual inlet and outlet ledgers remain separate.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### Methane to air (`methane_out`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Ordinary gaseous CH4 CAS74-82-8 requires independently established carbon origin and current receiving-air compartment before binding. A fossil-labelled identity cannot represent unknown/biogenic origin by default; methylenebis-dimethylaniline, solid carbon/graphite and isotope/radical aliases are not this ordinary gas. No fuel factor or carbon-origin split is inferred.

- Selected flow: Methane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### oxygen (`oxygen_out`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Native CAS 7782-44-7 is an emission to air with unspecified subcompartment, Mass/kg; do not reuse this outgoing identity for atmospheric-resource intake or purchased liquid oxygen. No default conversion from total air.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### Dinitrogen in exhaust air (`nitrogen_out`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Only actual ordinary gaseous N2, CAS7727-37-9, Elementary emission to current unspecified air, Mass/kg. Independently measure actual gross species, phase, source and receiving compartment; not manufactured Product gas, dissolved/total element, liquid, isotope or ion. Canonical CAS/name/type/media governs noisy aliases; NO/HNO and NO2/N2O4 are not interchangeable molecular masses. No NOx equivalent, fixed air fraction, density or reaction factor is adopted; actual inlet and outlet ledgers remain separate.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### Argon in exhaust air (`argon_out`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Only actual ordinary gaseous Ar, CAS7440-37-1, Elementary emission to current unspecified air, Mass/kg. Independently measure actual gross species, phase, source and receiving compartment; not manufactured Product gas, dissolved/total element, liquid, isotope or ion. Canonical CAS/name/type/media governs noisy aliases; NO/HNO and NO2/N2O4 are not interchangeable molecular masses. No NOx equivalent, fixed air fraction, density or reaction factor is adopted; actual inlet and outlet ledgers remain separate.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### Pass-through atmospheric carbon dioxide to air (`ambient_co2_out`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species.

- Selected flow: Pass-through atmospheric carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### water vapour (`water_vapour_out`)

Conditional actual measured species and phase at the declared gas gate. Keep gross inlet/outlet mass independent of attributable LCA loads; atmospheric pass-through and reaction/evaporation increments stay separately identified. Use independently measured state and speciation; integrate actual rates only. No air aggregate plus duplicated constituent exchanges; no NOx/VOC/COD total as this species. Native CAS 7732-18-5 is ordinary water vapour emitted to air, unspecified subcompartment, Mass/kg. Synonyms for ice/heavy/tritiated water are not adopted; no liquid-water or isotope substitution. Separately source inlet humidity, free-water evaporation and independently demonstrated cure/combustion water; mineral structural water is not assumed released.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_p_make`
- Sources: `nsi-countertops-2022`

###### Crystalline quartz machining particles (`quartz_particles`)

Only this independently identified mineral phase actually emitted to air after controls. Resolve the measured particle-size fraction and compartment; total PM, whole granite, bulk oxide assay or pure mineral Product powder cannot establish this exchange. Record other actual geological/tool/binder particles separately rather than fit unknown mineral fractions to a residual.

- Selected flow: Crystalline quartz machining particles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_particles_p_make`
- Sources: `nsi-countertops-2022`

###### Potassium-feldspar machining particles (`kfeldspar_particles`)

Only this independently identified mineral phase actually emitted to air after controls. Resolve the measured particle-size fraction and compartment; total PM, whole granite, bulk oxide assay or pure mineral Product powder cannot establish this exchange. Record other actual geological/tool/binder particles separately rather than fit unknown mineral fractions to a residual.

- Selected flow: Potassium-feldspar machining particles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_particles_p_make`
- Sources: `nsi-countertops-2022`

###### Albite machining particles (`albite_particles`)

Only this independently identified mineral phase actually emitted to air after controls. Resolve the measured particle-size fraction and compartment; total PM, whole granite, bulk oxide assay or pure mineral Product powder cannot establish this exchange. Record other actual geological/tool/binder particles separately rather than fit unknown mineral fractions to a residual.

- Selected flow: Albite machining particles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_particles_p_make`
- Sources: `nsi-countertops-2022`

###### Biotite machining particles (`biotite_particles`)

Only this independently identified mineral phase actually emitted to air after controls. Resolve the measured particle-size fraction and compartment; total PM, whole granite, bulk oxide assay or pure mineral Product powder cannot establish this exchange. Record other actual geological/tool/binder particles separately rather than fit unknown mineral fractions to a residual.

- Selected flow: Biotite machining particles
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_particles_p_make`
- Sources: `nsi-countertops-2022`

### Process: Water and particulate controls and external treatment interfaces (`p_control`)

#### Inputs

##### Product flows

###### Purchased grid electricity (`control_power`)

Actual settling, filter pressing, pumping, dust collection and treatment meter; subtract only verified overlap with p_make or complete external-provider scopes, never a fictitious treatment-free service.

- Selected flow: Purchased grid electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_p_control`
- Sources: `nsi-countertops-2022`

###### Supplied treatment makeup water (`control_water`)

Only separate external makeup; a transfer of process_water or reclaimed internal water is not another purchase. Include actual water retained in wet closing stock without cancelling its real influx. Native Product is externally supplied treated industrial process water, Mass/kg, without fixed geography or treatment grade. Match actual supplier treatment, quality and interface before use. Untreated abstraction requires its matching source/compartment identity, not this treated supply. Internal recycle and formulation-carried water are not another purchase; shared supply and stage transfers retain one upstream owner. No water/slurry density or treatment inventory is inferred.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_p_control`
- Sources: `nsi-countertops-2022`

###### Aluminium sulfate aqueous flocculant preparation (`flocculant`)

Conditional actual identified aluminium-sulfate preparation only. The NSI material table uses a proxy and does not establish this chemistry at a new plant; confirm the real supplier/formulation or add the actual separate flocculant instead. Whole solution is purchased once; solids assay and carried water are nested.

- Selected flow: Aluminium sulfate aqueous flocculant preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material_p_control`
- Sources: `nsi-countertops-2022`

#### Outputs

##### Product flows

###### Externally returned heat-exchanger water (`heat_water_return`)

Only if a real separate external heat-water circuit exists. Record water composition/phase, actual temperature/pressure/enthalpy and supplier agreement on water and energy ownership. Do not duplicate a complete supplied heat service or invent steam/boiler/condensate; internal returns cancel.

- Selected flow: Externally returned heat-exchanger water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_p_control`
- Sources: `nsi-countertops-2022`

##### Waste flows

###### Wet granite-machining filter cake (`wet_sludge`)

Weigh the actual whole wet cake; independently measure free water, geological phases, tool-derived solids and retained chemical preparation. Slurry inlet, internal recovered water and cake are linked subledgers; do not export them all as the same water/solids. Do not use paper sludge or glass-batch dust identities.

- Selected flow: Wet granite-machining filter cake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_p_control`
- Sources: `nsi-countertops-2022`

###### Granite-processing wastewater for external treatment (`wastewater_transfer`)

Only real external transfer of the remaining liquid stream, measured separately from wet cake and internal recycling. Record whole wet mass, suspended phases, dissolved species, COD as an indicator, receiver and actual treatment burden. No direct-to-river elementary release of transferred wastewater.

- Selected flow: Granite-processing wastewater for external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_p_control`
- Sources: `nsi-countertops-2022`

### Process: Original-cohort postrelease storage packaging and dispatch (`p_service`)

#### Inputs

##### Product flows

###### Wooden pallets (`wood_pallet`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Existing card is P only: actual separate new purchase; supplier-included I and external return receipt ER are distinct cards. Whole wet article enters once. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass wood-board/slat pallet has no CAS, species, grade, fixed dimensions, moisture, geography, supplier or life. The native CPC 17100 electricity classification is inconsistent with its mutually coherent wood name, route and preserved wood-packaging source classification; disclose this isolated taxonomy defect without treating electricity as a pallet. Confirm actual whole wooden pallet and supplier, not a steel A-frame.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polyethylene film (`pe_film`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Existing card is P only: actual separate new purchase; supplier-included I and external return receipt ER are distinct cards. Whole wet article enters once. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass film CAS 9002-88-4 is PE from ethylene, not PET, agricultural film or resin granulate; no fixed thickness, density, grade, geography or provider. The unrelated CPC luggage classification is disclosed; physical PE-film identity rests on the coherent name, CAS, synonym and comment. Confirm stretch/shrink specification and additives independently.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polyfoam (`pu_foam`)

Existing card is P only: actual separate new purchase; supplier-included I and external return receipt ER are distinct cards. Whole wet article enters once. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass Polyfoam describes polyurethane foam, including flexible/rigid/semirigid forms, with air or CO2 cells and no fixed grade or provider. Use only an actually supplied compatible polyurethane cushion, not EPS, PE foam, foam chemicals or a blowing-agent emission. Whole cured article is counted once.

- Selected flow: Polyfoam `fc100bf7-8ec9-4f3b-b18f-493f1bff70ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Corrugated shipping carton (`corrugated_carton`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Existing card is P only: actual separate new purchase; supplier-included I and external return receipt ER are distinct cards. Whole wet article enters once. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. A carton with unverified fibre ratio cannot bind a flow hard-coded to 16.6% primary and 83.4% recycled fibre. Measure the real carton composition/provider; retain its actual ingress and waste.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polypropylene shipping strap (`pp_band`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Existing card is P only: actual separate new purchase; supplier-included I and external return receipt ER are distinct cards. Whole wet article enters once. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Finished strap is not PP granulate, a woven bag or waste PP.

- Selected flow: Polypropylene shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Steel shipping strap (`steel_band`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Existing card is P only: actual separate new purchase; supplier-included I and external return receipt ER are distinct cards. Whole wet article enters once. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Finished strap is not a thick structural plate or structural machinery.

- Selected flow: Steel shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Wooden shipping crate (`wood_crate`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Existing card is P only: actual separate new purchase; supplier-included I and external return receipt ER are distinct cards. Whole wet article enters once. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Only a separate whole crate; wooden pallet/risers already included in a purchased whole crate are subaccounts. Native whole finished manufactured wood-packing family positively includes solid/slatted cases and crates, Mass/kg at plant. Select only the actual whole wooden shipping crate with measured construction, treatment, integral fasteners, moisture and compatible supplier. Other family boxes, cable drums and separate raw boards are not this article; no geometry, weight or life assumed. Embedded constituents enter once.

- Selected flow: Packing cases, boxes, crates, drums and similar packings, of wood, cable-drums of wood `39feb4f9-43da-4106-aa3c-f52afb654078`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Reusable steel transport A-frame (`steel_aframe`)

Existing card is P only: actual separate new purchase; supplier-included I and external return receipt ER are distinct cards. Whole wet article enters once. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Track actual frame physical asset stock and current justified packaging service, never one complete frame per m2 or per shipment by default. No assumed mass or life.

- Selected flow: Reusable steel transport A-frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Purchased grid electricity (`service_power`)

Actual storage, lifting, packaging and dispatch service after first release, assigned to the original manufacturing cohort Q with its real observation horizon. Keep performed service even if FG remains in stock; only unused/unassigned service charge is carried forward. No second complete manufacturing vector or new production on retest.

- Selected flow: Purchased grid electricity
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_p_service`
- Sources: `nsi-countertops-2022`

###### Diesel fuel (`service_diesel`)

Actual warehouse/dispatch equipment fuel; native Mass identity leaves grade, formulation, density, NCV, refinery, geography and provider unspecified. Preserve gross actual activity and original-cohort service attribution independently. Add other actual service fuels separately, not hidden in this row.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_fuel_p_service`
- Sources: `nsi-countertops-2022`

###### Wooden pallets I (`wood_pallet_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Actual supplier-included packaging ingress standalone or attached to another external supply; not a second purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass wood-board/slat pallet has no CAS, species, grade, fixed dimensions, moisture, geography, supplier or life. The native CPC 17100 electricity classification is inconsistent with its mutually coherent wood name, route and preserved wood-packaging source classification; disclose this isolated taxonomy defect without treating electricity as a pallet. Confirm actual whole wooden pallet and supplier, not a steel A-frame.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Wooden pallets ER (`wood_pallet_er`)

Actual intact external return received into the article ownership pool; not internal reuse or a new purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass wood-board/slat pallet has no CAS, species, grade, fixed dimensions, moisture, geography, supplier or life. The native CPC 17100 electricity classification is inconsistent with its mutually coherent wood name, route and preserved wood-packaging source classification; disclose this isolated taxonomy defect without treating electricity as a pallet. Confirm actual whole wooden pallet and supplier, not a steel A-frame.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polyethylene film I (`pe_film_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Actual supplier-included packaging ingress standalone or attached to another external supply; not a second purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass film CAS 9002-88-4 is PE from ethylene, not PET, agricultural film or resin granulate; no fixed thickness, density, grade, geography or provider. The unrelated CPC luggage classification is disclosed; physical PE-film identity rests on the coherent name, CAS, synonym and comment. Confirm stretch/shrink specification and additives independently.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polyethylene film ER (`pe_film_er`)

Actual intact external return received into the article ownership pool; not internal reuse or a new purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass film CAS 9002-88-4 is PE from ethylene, not PET, agricultural film or resin granulate; no fixed thickness, density, grade, geography or provider. The unrelated CPC luggage classification is disclosed; physical PE-film identity rests on the coherent name, CAS, synonym and comment. Confirm stretch/shrink specification and additives independently.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polyfoam I (`pu_foam_i`)

Actual supplier-included packaging ingress standalone or attached to another external supply; not a second purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass Polyfoam describes polyurethane foam, including flexible/rigid/semirigid forms, with air or CO2 cells and no fixed grade or provider. Use only an actually supplied compatible polyurethane cushion, not EPS, PE foam, foam chemicals or a blowing-agent emission. Whole cured article is counted once.

- Selected flow: Polyfoam `fc100bf7-8ec9-4f3b-b18f-493f1bff70ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polyfoam ER (`pu_foam_er`)

Actual intact external return received into the article ownership pool; not internal reuse or a new purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass Polyfoam describes polyurethane foam, including flexible/rigid/semirigid forms, with air or CO2 cells and no fixed grade or provider. Use only an actually supplied compatible polyurethane cushion, not EPS, PE foam, foam chemicals or a blowing-agent emission. Whole cured article is counted once.

- Selected flow: Polyfoam `fc100bf7-8ec9-4f3b-b18f-493f1bff70ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Corrugated shipping carton I (`corrugated_carton_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Actual supplier-included packaging ingress standalone or attached to another external supply; not a second purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. A carton with unverified fibre ratio cannot bind a flow hard-coded to 16.6% primary and 83.4% recycled fibre. Measure the real carton composition/provider; retain its actual ingress and waste.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Corrugated shipping carton ER (`corrugated_carton_er`)

Actual intact external return received into the article ownership pool; not internal reuse or a new purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. A carton with unverified fibre ratio cannot bind a flow hard-coded to 16.6% primary and 83.4% recycled fibre. Measure the real carton composition/provider; retain its actual ingress and waste.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polypropylene shipping strap I (`pp_band_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Actual supplier-included packaging ingress standalone or attached to another external supply; not a second purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Finished strap is not PP granulate, a woven bag or waste PP.

- Selected flow: Polypropylene shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polypropylene shipping strap ER (`pp_band_er`)

Actual intact external return received into the article ownership pool; not internal reuse or a new purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Finished strap is not PP granulate, a woven bag or waste PP.

- Selected flow: Polypropylene shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Steel shipping strap I (`steel_band_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Actual supplier-included packaging ingress standalone or attached to another external supply; not a second purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Finished strap is not a thick structural plate or structural machinery.

- Selected flow: Steel shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Steel shipping strap ER (`steel_band_er`)

Actual intact external return received into the article ownership pool; not internal reuse or a new purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Finished strap is not a thick structural plate or structural machinery.

- Selected flow: Steel shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Wooden shipping crate I (`wood_crate_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. Actual supplier-included packaging ingress standalone or attached to another external supply; not a second purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. first non-purchased external ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Only a separate whole crate; wooden pallet/risers already included in a purchased whole crate are subaccounts. Native whole finished manufactured wood-packing family positively includes solid/slatted cases and crates, Mass/kg at plant. Select only the actual whole wooden shipping crate with measured construction, treatment, integral fasteners, moisture and compatible supplier. Other family boxes, cable drums and separate raw boards are not this article; no geometry, weight or life assumed. Embedded constituents enter once.

- Selected flow: Packing cases, boxes, crates, drums and similar packings, of wood, cable-drums of wood `39feb4f9-43da-4106-aa3c-f52afb654078`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Wooden shipping crate ER (`wood_crate_er`)

Actual intact external return received into the article ownership pool; not internal reuse or a new purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Only a separate whole crate; wooden pallet/risers already included in a purchased whole crate are subaccounts. Native whole finished manufactured wood-packing family positively includes solid/slatted cases and crates, Mass/kg at plant. Select only the actual whole wooden shipping crate with measured construction, treatment, integral fasteners, moisture and compatible supplier. Other family boxes, cable drums and separate raw boards are not this article; no geometry, weight or life assumed. Embedded constituents enter once.

- Selected flow: Packing cases, boxes, crates, drums and similar packings, of wood, cable-drums of wood `39feb4f9-43da-4106-aa3c-f52afb654078`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Reusable steel transport A-frame I (`steel_aframe_i`)

Actual supplier-included packaging ingress standalone or attached to another external supply; not a second purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Track actual frame physical asset stock and current justified packaging service, never one complete frame per m2 or per shipment by default. No assumed mass or life.

- Selected flow: Reusable steel transport A-frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Reusable steel transport A-frame ER (`steel_aframe_er`)

Actual intact external return received into the article ownership pool; not internal reuse or a new purchase. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Track actual frame physical asset stock and current justified packaging service, never one complete frame per m2 or per shipment by default. No assumed mass or life.

- Selected flow: Reusable steel transport A-frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### First-release internal granite-countertop custody receipt (`fg_release_in`)

Actual accepted whole-countertop first-release transfer from p_make, matched to the same unique Q and independent Rmass. This is an internal custody receipt, not an external purchase, new production or second reference output; cancel the matched area/mass transfer once on consolidation. Only the actual intact cut/ground/polished natural-granite finished countertop; actual single-face net outline/holes and independent mass, never density or kg/m2 assumptions.

- Selected flow: Granite slab product `d85d190e-3c45-46ab-98bb-a3a2c0db4441`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cohort_p_service`
- Sources: `nsi-countertops-2022`

###### Actual intact granite countertop return received (`fg_return_in`)

Only an actual intact return still physically compatible with the finished natural-granite Product family. Link original dispatch, release cohort, actual changed net outline/holes/moisture and independently measured mass. Damaged/rejected waste uses damaged_return_in, not a qualifying Product restoration; no new Q or manufacture reversal. Only the actual intact cut/ground/polished natural-granite finished countertop; actual single-face net outline/holes and independent mass, never density or kg/m2 assumptions.

- Selected flow: Granite slab product `d85d190e-3c45-46ab-98bb-a3a2c0db4441`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cohort_p_service`
- Sources: `nsi-countertops-2022`

###### Actual separately supplied packaging repair wood board (`repair_wood`)

One actual sawn repair board with measured species, treatment, dimensions, moisture and supplier state. It is not a whole pallet/crate, engineered board or sawdust. Actual separately supplied metal fasteners, glue or coatings require their own concrete atomic records before use. Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once.

- Selected flow: Actual separately supplied packaging repair wood board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_changes`
- Sources: `nsi-countertops-2022`

###### Actual treated service-water addition (`service_water`)

Only actual matching externally supplied treated industrial water, Mass/kg, for observed countertop/packaging service. Actual supplier treatment/quality and upstream boundary must match; raw abstraction, internal recirculation and water already inside a whole cleaner/article are not another purchase. No fixed density, geography or treatment process. Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_changes`
- Sources: `nsi-countertops-2022`

##### Waste flows

###### Actual damaged natural-granite countertop waste received (`damaged_return_in`)

One actual incoming damaged/rejected granite-countertop waste stream from original dispatch. Measure whole stone, actual retained treatment and water, missing portions and contamination in kg independently of historical area. Preserve original manufacture and actual service vectors; not an intact Product return, new purchase or automatic credit. Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once.

- Selected flow: Actual damaged natural-granite countertop waste received
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cohort_p_service`
- Sources: `nsi-countertops-2022`

##### Elementary flows

###### Actual service atmospheric water-vapour uptake (`service_humidity`)

Only independently observed ordinary atmospheric H2O vapour ingress into stored/handled countertops or packages. Not purchased liquid, rainfall or an emission. A matching Resource phase/native extensive property is required before binding; Water,inair Volume alone and an assumed density do not establish this Mass/kg identity. Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once.

- Selected flow: Actual service atmospheric water-vapour uptake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_changes`
- Sources: `nsi-countertops-2022`

#### Outputs


##### Product flows

###### Wooden pallets S (`wood_pallet_s`)

Actual article leaving with gross physical shipments only, separate from countertop production Q. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass wood-board/slat pallet has no CAS, species, grade, fixed dimensions, moisture, geography, supplier or life. The native CPC 17100 electricity classification is inconsistent with its mutually coherent wood name, route and preserved wood-packaging source classification; disclose this isolated taxonomy defect without treating electricity as a pallet. Confirm actual whole wooden pallet and supplier, not a steel A-frame.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Wooden pallets EO (`wood_pallet_eo`)

Actual intact article returned externally to supplier/pool only; not shipment S, internal reuse or credit. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass wood-board/slat pallet has no CAS, species, grade, fixed dimensions, moisture, geography, supplier or life. The native CPC 17100 electricity classification is inconsistent with its mutually coherent wood name, route and preserved wood-packaging source classification; disclose this isolated taxonomy defect without treating electricity as a pallet. Confirm actual whole wooden pallet and supplier, not a steel A-frame.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polyethylene film S (`pe_film_s`)

Actual article leaving with gross physical shipments only, separate from countertop production Q. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass film CAS 9002-88-4 is PE from ethylene, not PET, agricultural film or resin granulate; no fixed thickness, density, grade, geography or provider. The unrelated CPC luggage classification is disclosed; physical PE-film identity rests on the coherent name, CAS, synonym and comment. Confirm stretch/shrink specification and additives independently.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polyethylene film EO (`pe_film_eo`)

Actual intact article returned externally to supplier/pool only; not shipment S, internal reuse or credit. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass film CAS 9002-88-4 is PE from ethylene, not PET, agricultural film or resin granulate; no fixed thickness, density, grade, geography or provider. The unrelated CPC luggage classification is disclosed; physical PE-film identity rests on the coherent name, CAS, synonym and comment. Confirm stretch/shrink specification and additives independently.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polyfoam S (`pu_foam_s`)

Actual article leaving with gross physical shipments only, separate from countertop production Q. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass Polyfoam describes polyurethane foam, including flexible/rigid/semirigid forms, with air or CO2 cells and no fixed grade or provider. Use only an actually supplied compatible polyurethane cushion, not EPS, PE foam, foam chemicals or a blowing-agent emission. Whole cured article is counted once.

- Selected flow: Polyfoam `fc100bf7-8ec9-4f3b-b18f-493f1bff70ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polyfoam EO (`pu_foam_eo`)

Actual intact article returned externally to supplier/pool only; not shipment S, internal reuse or credit. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Native Product/Mass Polyfoam describes polyurethane foam, including flexible/rigid/semirigid forms, with air or CO2 cells and no fixed grade or provider. Use only an actually supplied compatible polyurethane cushion, not EPS, PE foam, foam chemicals or a blowing-agent emission. Whole cured article is counted once.

- Selected flow: Polyfoam `fc100bf7-8ec9-4f3b-b18f-493f1bff70ad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Corrugated shipping carton S (`corrugated_carton_s`)

Actual article leaving with gross physical shipments only, separate from countertop production Q. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. A carton with unverified fibre ratio cannot bind a flow hard-coded to 16.6% primary and 83.4% recycled fibre. Measure the real carton composition/provider; retain its actual ingress and waste.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Corrugated shipping carton EO (`corrugated_carton_eo`)

Actual intact article returned externally to supplier/pool only; not shipment S, internal reuse or credit. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. A carton with unverified fibre ratio cannot bind a flow hard-coded to 16.6% primary and 83.4% recycled fibre. Measure the real carton composition/provider; retain its actual ingress and waste.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polypropylene shipping strap S (`pp_band_s`)

Actual article leaving with gross physical shipments only, separate from countertop production Q. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Finished strap is not PP granulate, a woven bag or waste PP.

- Selected flow: Polypropylene shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Polypropylene shipping strap EO (`pp_band_eo`)

Actual intact article returned externally to supplier/pool only; not shipment S, internal reuse or credit. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Finished strap is not PP granulate, a woven bag or waste PP.

- Selected flow: Polypropylene shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Steel shipping strap S (`steel_band_s`)

Actual article leaving with gross physical shipments only, separate from countertop production Q. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Finished strap is not a thick structural plate or structural machinery.

- Selected flow: Steel shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Steel shipping strap EO (`steel_band_eo`)

Actual intact article returned externally to supplier/pool only; not shipment S, internal reuse or credit. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Finished strap is not a thick structural plate or structural machinery.

- Selected flow: Steel shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Wooden shipping crate S (`wood_crate_s`)

Actual article leaving with gross physical shipments only, separate from countertop production Q. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Only a separate whole crate; wooden pallet/risers already included in a purchased whole crate are subaccounts. Native whole finished manufactured wood-packing family positively includes solid/slatted cases and crates, Mass/kg at plant. Select only the actual whole wooden shipping crate with measured construction, treatment, integral fasteners, moisture and compatible supplier. Other family boxes, cable drums and separate raw boards are not this article; no geometry, weight or life assumed. Embedded constituents enter once.

- Selected flow: Packing cases, boxes, crates, drums and similar packings, of wood, cable-drums of wood `39feb4f9-43da-4106-aa3c-f52afb654078`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Wooden shipping crate EO (`wood_crate_eo`)

Actual intact article returned externally to supplier/pool only; not shipment S, internal reuse or credit. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Only a separate whole crate; wooden pallet/risers already included in a purchased whole crate are subaccounts. Native whole finished manufactured wood-packing family positively includes solid/slatted cases and crates, Mass/kg at plant. Select only the actual whole wooden shipping crate with measured construction, treatment, integral fasteners, moisture and compatible supplier. Other family boxes, cable drums and separate raw boards are not this article; no geometry, weight or life assumed. Embedded constituents enter once.

- Selected flow: Packing cases, boxes, crates, drums and similar packings, of wood, cable-drums of wood `39feb4f9-43da-4106-aa3c-f52afb654078`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Reusable steel transport A-frame S (`steel_aframe_s`)

Actual article leaving with gross physical shipments only, separate from countertop production Q. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Track actual frame physical asset stock and current justified packaging service, never one complete frame per m2 or per shipment by default. No assumed mass or life.

- Selected flow: Reusable steel transport A-frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Reusable steel transport A-frame EO (`steel_aframe_eo`)

Actual intact article returned externally to supplier/pool only; not shipment S, internal reuse or credit. Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Track actual frame physical asset stock and current justified packaging service, never one complete frame per m2 or per shipment by default. No assumed mass or life.

- Selected flow: Reusable steel transport A-frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Gross physical dispatch of granite countertops (`fg_dispatch`)

Actual gross outgoing finished-countertop custody at measured net single-face projected area, real holes/curves and independent net mass. Not a second manufacture output or net delivery; original Q and actual H remain unchanged. No bounding rectangle, summed faces/edge surfaces or assumed kg/m2. Only the actual intact cut/ground/polished natural-granite finished countertop; actual single-face net outline/holes and independent mass, never density or kg/m2 assumptions.

- Selected flow: Granite slab product `d85d190e-3c45-46ab-98bb-a3a2c0db4441`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cohort_p_service`
- Sources: `nsi-countertops-2022`

##### Waste flows

###### Discarded wooden pallet (`discarded_wood_pallet`)

Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Actual W leg only, with measured contamination and real treatment; not a second recording of S/EO or a coproduct credit. This is a separate Waste exchange only when that material is actually transferred separately. For one actual co-collected outlet this W is a measured non-additive origin subaccount of mixed_pack_waste, not another whole-stream waste or treatment.

- Selected flow: Discarded wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Discarded polyethylene film (`discarded_pe_film`)

Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Actual W leg only, with measured contamination and real treatment; not a second recording of S/EO or a coproduct credit. This is a separate Waste exchange only when that material is actually transferred separately. For one actual co-collected outlet this W is a measured non-additive origin subaccount of mixed_pack_waste, not another whole-stream waste or treatment.

- Selected flow: Discarded polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Discarded polyurethane foam cushion (`discarded_pu_foam`)

Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Actual W leg only, with measured contamination and real treatment; not a second recording of S/EO or a coproduct credit. This is a separate Waste exchange only when that material is actually transferred separately. For one actual co-collected outlet this W is a measured non-additive origin subaccount of mixed_pack_waste, not another whole-stream waste or treatment.

- Selected flow: Discarded polyurethane foam cushion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Discarded corrugated shipping carton (`discarded_corrugated_carton`)

Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Actual W leg only, with measured contamination and real treatment; not a second recording of S/EO or a coproduct credit. This is a separate Waste exchange only when that material is actually transferred separately. For one actual co-collected outlet this W is a measured non-additive origin subaccount of mixed_pack_waste, not another whole-stream waste or treatment.

- Selected flow: Discarded corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Discarded polypropylene shipping strap (`discarded_pp_band`)

Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Actual W leg only, with measured contamination and real treatment; not a second recording of S/EO or a coproduct credit. This is a separate Waste exchange only when that material is actually transferred separately. For one actual co-collected outlet this W is a measured non-additive origin subaccount of mixed_pack_waste, not another whole-stream waste or treatment.

- Selected flow: Discarded polypropylene shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Discarded steel shipping strap (`discarded_steel_band`)

Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Actual W leg only, with measured contamination and real treatment; not a second recording of S/EO or a coproduct credit. This is a separate Waste exchange only when that material is actually transferred separately. For one actual co-collected outlet this W is a measured non-additive origin subaccount of mixed_pack_waste, not another whole-stream waste or treatment.

- Selected flow: Discarded steel shipping strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Discarded wooden shipping crate (`discarded_wood_crate`)

Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Actual W leg only, with measured contamination and real treatment; not a second recording of S/EO or a coproduct credit. This is a separate Waste exchange only when that material is actually transferred separately. For one actual co-collected outlet this W is a measured non-additive origin subaccount of mixed_pack_waste, not another whole-stream waste or treatment.

- Selected flow: Discarded wooden shipping crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Discarded reusable steel transport a-frame (`discarded_steel_aframe`)

Only this actual single packaging article. Retain all six gross legs P/I/ER/S/EO/W and full opening/closing empty, WIP-attached, FG-attached and reusable wet stocks under packaging_balance. Supplier-included ingress I remains a real physical input with one upstream owner. Reuse is not a fresh purchase; gross shipment S follows real shipped articles, not economic allocation. Whole-article constituents are nested; separately entering repair material/water is retained even in closing stock. Actual W leg only, with measured contamination and real treatment; not a second recording of S/EO or a coproduct credit. This is a separate Waste exchange only when that material is actually transferred separately. For one actual co-collected outlet this W is a measured non-additive origin subaccount of mixed_pack_waste, not another whole-stream waste or treatment.

- Selected flow: Discarded reusable steel transport a-frame
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_p_service`
- Sources: `nsi-countertops-2022`

###### Post-release damaged natural granite countertop (`returned_stone_waste`)

Record real returned/damaged product and added materials/water/losses under the original cohort. Rework is permitted only with manufacturer/specification permission, postwork tests, acceptance and disposition; broken granite is not assumed restored. Original shipment/reversal links are historical, not new Q. This row is actual outgoing service-gate removal/disposition only; actual ingress uses damaged_return_in or the intact Product return card, never a combined in/out leg. When physically co-collected, retain only its measured origin subaccount, not a second whole Waste. Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once.

- Selected flow: Post-release damaged natural granite countertop
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cohort_p_service`
- Sources: `nsi-countertops-2022`

###### Actual separately removed packaging repair wood (`removed_wood`)

Native Wood waste Waste/Mass includes wood products and packaging residues. Match actual separately removed wood-board treatment, contamination/coatings/hazards and receiver. Agglomerated-waste classification is disclosed taxonomy debt, not a required briquette/landfill or default recycling credit. If already inside whole pallet/crate W or actual mixed waste, this is only that event non-additive component subaccount, never another waste/treatment. Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once.

- Selected flow: Wood waste `2ef9d37a-2fbf-42f6-8ccf-5d6677d5cfd8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_changes`
- Sources: `nsi-countertops-2022`

###### Actual separately collected aqueous service wastewater (`service_wastewater`)

One actual separately collected aqueous stream with independent liquid mass, granite/tool/packaging solids, real cleaning/treatment constituents and destination. Not fixed-concentration alkaline liquor, clean water to river or a treatment service. Whole wastewater contains carried components once, with one actual treatment owner. Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once.

- Selected flow: Actual separately collected aqueous service wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_changes`
- Sources: `nsi-countertops-2022`

###### Actual single co-collected countertop packaging waste stream (`mixed_pack_waste`)

Conditional only when one real co-collected stream of the identified wood/paper/polymer/steel packaging residues leaves the actual recorded boundary. Independently measure the whole wet mass, material origins, moisture, actual granite/chemical contamination, hazard class and receiver. Record one Waste exchange and one actual treatment. Article W and any co-collected damaged-stone origin are independently measured non-additive subaccounts summing to this event, not invented separated outlets or component-plus-whole double counting. Separate real streams use their own specific Waste rows. Shared custody does not reassign original manufacture to a new service function. Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once.

- Selected flow: Actual single co-collected countertop packaging waste stream
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_changes`
- Sources: `nsi-countertops-2022`

##### Elementary flows

###### Actual service H2O vapour to current air (`service_vapour`)

Only actual ordinary gaseous H2O CAS7732-18-5 to current unspecified air, Mass/kg, from real storage/handling or work. Match independently measured phase/species and receiving compartment; not droplets, ice, heavy/tritiated water or ether aliases. A known different subcompartment needs its own matching identity. Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_changes`
- Sources: `nsi-countertops-2022`

### Process: Actual asset service and individual maintenance (`p_asset`)

#### Inputs

##### Product flows

###### Stone-cutting saw machine (`saw_asset`)

Only actual attributable saw asset service; collect physical item stock separately from current burden service. Do not assume one machine per m2, lifetime, capacity or mass; no item-to-kg conversion without same-configuration calibrated net mass and configuration scope. Entire-provider service and owned asset cannot both supply the same burden.

- Selected flow: Stone-cutting saw machine
- Flow property / unit: Number of items / Item(s)
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_p_asset`
- Sources: `nsi-countertops-2022`

###### Stone-polishing machine (`polisher_asset`)

Actual polisher asset service only. Retain individual machine stock, justified current service fraction and remaining unassigned charge independently; the actual owned machine is not an abrasive pad. Preserve newly installed and removed parts/fluids as separate physical flows.

- Selected flow: Stone-polishing machine
- Flow property / unit: Number of items / Item(s)
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset_p_asset`
- Sources: `nsi-countertops-2022`

###### Steel machine bearing (`repair_bearing`)

Conditional actual new whole bearing; retain grade, configuration, lubricant already included, installed wet stocks and removed bearing. A steel plate cannot represent this manufactured part. New material/water inflow is retained even if still in closing installed stock.

- Selected flow: Steel machine bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair_p_asset`
- Sources: `nsi-countertops-2022`

###### Mineral-oil hydraulic fluid preparation (`hydraulic_fluid`)

Actual whole supplied hydraulic formulation, not generic PAO lubricating oil or an assumed pure chemical. Retain additions, drained fluid, contamination, water phase, leaks and installed wet closing stock once.

- Selected flow: Mineral-oil hydraulic fluid preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair_p_asset`
- Sources: `nsi-countertops-2022`

###### Mineral lubricating oil preparation (`lubricating_fluid`)

Only actual specified whole mineral lubricant; do not bind the candidate hard-limited to fully synthetic PAO. Procurement, opening/closing stocks, replacement and actual service charge are separate facts; new retained oil is still a real influx.

- Selected flow: Mineral lubricating oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair_p_asset`
- Sources: `nsi-countertops-2022`

###### Supplied equipment-maintenance water (`repair_water`)

Only actual separately entering water at maintenance/installed-fluid gate; retain true phase, chemistry, temperature and closing wet mass. X_in/X_out only prevent duplicate other incoming/outgoing terms, not cancellation against a stock. Native Product is externally supplied treated industrial process water, Mass/kg, without fixed geography or treatment grade. Match actual supplier treatment, quality and interface before use. Untreated abstraction requires its matching source/compartment identity, not this treated supply. Internal recycle and formulation-carried water are not another purchase; shared supply and stage transfers retain one upstream owner. No water/slurry density or treatment inventory is inferred.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water_p_asset`
- Sources: `nsi-countertops-2022`

#### Outputs

##### Waste flows

###### Removed steel machine bearing (`removed_bearing`)

Only this actual removed part or whole drained fluid with measured retained material/water and separate treatment fate. Preserve gross stock/movement; no sale-based manufacturing burden deduction or automatic coproduct credit.

- Selected flow: Removed steel machine bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair_p_asset`
- Sources: `nsi-countertops-2022`

###### Spent hydraulic fluid (`spent_hydraulic`)

Only this actual removed part or whole drained fluid with measured retained material/water and separate treatment fate. Preserve gross stock/movement; no sale-based manufacturing burden deduction or automatic coproduct credit.

- Selected flow: Spent hydraulic fluid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair_p_asset`
- Sources: `nsi-countertops-2022`

###### Spent mineral lubricating oil (`spent_lubricant`)

Only this actual removed part or whole drained fluid with measured retained material/water and separate treatment fate. Preserve gross stock/movement; no sale-based manufacturing burden deduction or automatic coproduct credit.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 normalized result for this row and original cohort; no further division.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair_p_asset`
- Sources: `nsi-countertops-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_scope | all processes | This is an attributional manufacturing methodology. Establish whether multifunctionality actually exists and allocation rather than substitution is appropriate for the declared decision context. Apply dedicated measurement and real or virtual subdivision first, including saw lines, polishers, treatment and serial services. Do not select mass, energy, area or economic shares arbitrarily. | `ilcd-detailed-2010` |
| a_causality | each remaining exchange | For each still-shared nonfunctional exchange demonstrate its determining physical causal relationship to each cofunction at the actual process state. A technical extensive-property driver is acceptable only with that causal proof. Keep the derivation, measurement, uncertainty and all functions; never apply a single unproved area or mass split to every material, energy and emission coordinate. | `ilcd-detailed-2010` |
| a_residual | genuinely residual shared flows only | Only after documented subdivision and exchange-specific causality are exhausted, use contemporaneous actual market value of cofunctions in the same condition at the common process exit gate, or relevant input gate for treatment services. Preserve real quantities and gate prices, currency, period, adjustments and sensitivity; no downstream retail value, negative-waste-price shortcut, fixed percentage or automatic credit. Missing or inconsistent gate evidence remains a hold for that dataset. | `ilcd-detailed-2010` |
| a_waste | offcuts and rejects and samples and treatment | Ordinary manufacturing waste, failures, destructive samples and treatment burdens stay with the original manufacturing function even when sold or externally treated. A transfer vector Tlegitimate exists only for a genuinely distinct other function/cohort with justified allocation/handover and a receipt; apply once and preserve all gross physical legs unscaled. Internal recycling cancels physical transfer but preserves inherited burdens; it creates neither procurement nor automatic coproduct credit. | `ilcd-detailed-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material_p_make | p_make | block_feed; slab_feed; fill_resin; fill_hardener; impregnating_sealer; cleaner; cotton_wipe | measured_foreground_record | row_id; cohort_id; stage; supplier; delivery_id; supplied_formulation; original_amount; original_unit; opening_stock; closing_stock; external_returns; upstream_owner; moisture; independent_phase_assay; inherited_vector | Weigh each real whole supplied block/slab or preparation separately; reconcile receipt, specification, batch, carried water and stock on matched wet/dry bases. Keep every actually purchased component and actual onsite mixing energy/loss, while nested assay/active/carrier constituents are not purchased again. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Calibrated scale; supplier specification/SDS; paired stock/phase records; vector provenance |
| cp_energy_p_make | p_make | make_power | measured_foreground_record | row_id; cohort_id; stage; meter_start; meter_end; raw_kWh_or_MJ; voltage; geography; year; provider_boundary; operation_status; duration_if_rate; dedicated_or_shared_meter; service_horizon | Meter each real energy interface and stage, including startup, failed/zero-output, idle, cleanup, rework and controls. Preserve raw energy totals and shared-service evidence; distinguish complete external service from local generation. Record the actual template/site-measurement travel required before fabrication as separate attributed fuel or transport activity rather than post-gate installation. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | MJ | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Meter calibration; interval completeness; energy bills; provider scope; zero-output logs |
| cp_fuel_p_make | p_make | make_diesel; propane_fuel; natural_gas_fuel; gasoline_fuel; heating_oil | measured_foreground_record | row_id; cohort_id; stage; fuel_name; whole_supply_formula; raw_amount; original_unit; cumulative_or_rate; duration_if_rate; phase; temperature; pressure; independent_density; measured_NCV; composition; carbon_origin; provider_boundary; operating_status | Use calibrated mass or volume metering of each real fuel and matched independent density/NCV/speciation for its actual state. Preserve carrier mass, heat and supplier/combustion ownership as separate observations of one fuel receipt. No assumed boiler/steam or generic burn factor, and no time multiplier on cumulative volumes. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Meter/scale calibration; fuel analysis; measured state; provider and carbon-origin evidence |
| cp_water_p_make | p_make | process_water | measured_foreground_record | row_id; cohort_id; stage; source; interface; raw_mass_or_volume; cumulative_or_rate; time_if_rate; temperature; pressure; independent_density; free_water; structural_water; phase; dissolved_species; suspended_phases; upstream_owner; internal_return; external_return; actual_enthalpy; supplier_water_energy_agreement; opening_wet_stock; closing_wet_stock | Measure true external water receipts/returns separately from internal recirculation, wet cake, product moisture and external wastewater. Use substance-specific state/density rather than the value for pure water on a slurry. Retain complete wet stocks and every real entering material/water leg; identify heat-water agreements only for actual circuits. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Calibrated water meters; independent density and solids/moisture analysis; source/receiver tickets; thermal state |
| cp_tool_p_make | p_make | saw_blade; saw_wire; polishing_pad; sic_abrasive | measured_foreground_record | row_id; cohort_id; tool_id; actual_machine; stone_configuration; supplied_whole_article; grade; bond; backing; opening_unused_or_installed; purchased; replaced; worn_mass; retired_residual_mass; closing_unused_or_installed; service_use; inherited_service_charge; remaining_unassigned_charge | Record whole purchased tools and real renewals separately from constituent assays and wear transferred into sludge/dust. Use actual service data and measured residual/wear; no default life or per-machine mass and no one-tool-per-product assumption. Dedicate/subdivide service first. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Purchase/replacement log; measured wear/residual; supplier tool specification; actual service derivation |
| cp_release_p_make | p_make | finished_countertop | measured_foreground_record | cohort_id; piece_id; original_first_release_flag; first_release_timestamp; acceptance_specification; performed_tests; pass_fail; stone_designation; petrography; configuration; polished_finish; local_fill_and_impregnation; full_drawing; shape; real_holes; measured_net_single_face_area; calibrated_net_mass; packaging_tare; moisture; measured_count; thickness; uncertainty | Check the actual manufacturer/project specification, geometry, finish, defects and all tests actually required for this countertop before the first release. Record each newly accepted whole piece once; measure net single-face projected geometry including real holes/curves and independent calibrated net mass/count at the same configuration/moisture. No invented strength/radiation/slip threshold, thickness, density, certification or service life. Earlier raw/slab QC is not finished-countertop release. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | m2 | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Original first-release register; full drawing; actual inspection/test reports; calibrated geometry and weighing; rejection log |
| cp_waste_p_make | p_make | stone_offcut; failed_countertop; spent_blade; spent_wire; spent_pad; spent_cloth | measured_foreground_record | row_id; cohort_id; waste_event; whole_wet_mass; independent_moisture; geological_phase_assay; tool_and_chemical_content; internal_recycle; external_receiver; treatment; transport; sale; original_burden_owner; distinct_other_function_decision; transfer_receipt | Weigh each actual offcut, failed piece, sample, tool, rag and cake separately; reconcile wet mass with independently measured composition and real receiver/transport/treatment tickets. Retain manufacturing and treatment loads for ordinary waste; a sale alone does not create a legitimate transfer. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Calibrated scale; phase/composition sampling; waste/treatment receipts; allocation/handover decision if any |
| cp_energy_p_control | p_control | control_power | measured_foreground_record | row_id; cohort_id; stage; meter_start; meter_end; raw_kWh_or_MJ; voltage; geography; year; provider_boundary; operation_status; duration_if_rate; dedicated_or_shared_meter; service_horizon | Meter each real energy interface and stage, including startup, failed/zero-output, idle, cleanup, rework and controls. Preserve raw energy totals and shared-service evidence; distinguish complete external service from local generation. Record the actual template/site-measurement travel required before fabrication as separate attributed fuel or transport activity rather than post-gate installation. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | MJ | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Meter calibration; interval completeness; energy bills; provider scope; zero-output logs |
| cp_water_p_control | p_control | control_water; wastewater_transfer; heat_water_return | measured_foreground_record | row_id; cohort_id; stage; source; interface; raw_mass_or_volume; cumulative_or_rate; time_if_rate; temperature; pressure; independent_density; free_water; structural_water; phase; dissolved_species; suspended_phases; upstream_owner; internal_return; external_return; actual_enthalpy; supplier_water_energy_agreement; opening_wet_stock; closing_wet_stock | Measure true external water receipts/returns separately from internal recirculation, wet cake, product moisture and external wastewater. Use substance-specific state/density rather than the value for pure water on a slurry. Retain complete wet stocks and every real entering material/water leg; identify heat-water agreements only for actual circuits. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Calibrated water meters; independent density and solids/moisture analysis; source/receiver tickets; thermal state |
| cp_material_p_control | p_control | flocculant | measured_foreground_record | row_id; cohort_id; stage; supplier; delivery_id; supplied_formulation; original_amount; original_unit; opening_stock; closing_stock; external_returns; upstream_owner; moisture; independent_phase_assay; inherited_vector | Weigh each real whole supplied block/slab or preparation separately; reconcile receipt, specification, batch, carried water and stock on matched wet/dry bases. Keep every actually purchased component and actual onsite mixing energy/loss, while nested assay/active/carrier constituents are not purchased again. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Calibrated scale; supplier specification/SDS; paired stock/phase records; vector provenance |
| cp_waste_p_control | p_control | wet_sludge | measured_foreground_record | row_id; cohort_id; waste_event; whole_wet_mass; independent_moisture; geological_phase_assay; tool_and_chemical_content; internal_recycle; external_receiver; treatment; transport; sale; original_burden_owner; distinct_other_function_decision; transfer_receipt | Weigh each actual offcut, failed piece, sample, tool, rag and cake separately; reconcile wet mass with independently measured composition and real receiver/transport/treatment tickets. Retain manufacturing and treatment loads for ordinary waste; a sale alone does not create a legitimate transfer. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Calibrated scale; phase/composition sampling; waste/treatment receipts; allocation/handover decision if any |
| cp_gas_p_make | p_make | oxygen_in; nitrogen_in; humidity_in; ambient_co2_in; argon_in; fossil_co2; fossil_co; nitric_oxide; nitrogen_dioxide; sulfur_dioxide; methane_out; oxygen_out; nitrogen_out; argon_out; ambient_co2_out; water_vapour_out | measured_foreground_record | row_id; cohort_id; species; CAS; inlet_or_outlet; physical_phase; compartment; cumulative_volume; actual_rate; interval_if_rate; measured_temperature; pressure; wet_dry_basis; humidity; independent_density_or_molar_state; measured_species_fraction; atmospheric_background; fuel_origin; treatment_device; uncertainty; actual_source_process_id; manufacturing_or_performed_service; original_Q_H | Measure matched gross inlet/outlet state and actual species independently across real operating states. Preserve atmospheric pass-through and generated increments, water origins and unnormalized physical masses. No fixed air fraction, total air double counting, NOx-to-NO/NO2 assumption or residual fit for two unknown gases; unknown species stays an explicit data gap. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. Record actual combustion/source events including service_diesel when actually burned, with explicit source-process/cohort/H and source-specific gross and attributed vectors. Central collection never moves a service emission into manufacturing or creates an aggregate duplicate: dataset authoring must retain each actual source-process exchange and its original service ownership. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Gas/speciation QA/QC; instrument state and calibration; wet/dry consistency; background and carbon origin |
| cp_particles_p_make | p_make | quartz_particles; kfeldspar_particles; albite_particles; biotite_particles | measured_foreground_record | row_id; cohort_id; source_stage; independent_mineral_phase; particle_size_fraction; particulate_mass; sampling_method; inlet_capture_outlet; compartment; free_moisture; tool_bond_particles; uncertainty; total_PM_subledger | Use representative source-specific particulate sampling with independently validated mineral-phase and size analysis after controls. Keep inlet/captured/outlet flows distinct. Total PM is a QA subledger and must not be added to its resolved phase exchanges or treated as pure quartz. Add each other real mineral/tool/polymer phase separately. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Sampling calibration; phase-sensitive analytical method; size/medium evidence; mass and capture reconciliation |
| cp_pack_p_service | p_service | wood_pallet; discarded_wood_pallet; pe_film; discarded_pe_film; pu_foam; discarded_pu_foam; corrugated_carton; discarded_corrugated_carton; pp_band; discarded_pp_band; steel_band; discarded_steel_band; wood_crate; discarded_wood_crate; steel_aframe; discarded_steel_aframe; wood_pallet_i; wood_pallet_er; wood_pallet_s; wood_pallet_eo; pe_film_i; pe_film_er; pe_film_s; pe_film_eo; pu_foam_i; pu_foam_er; pu_foam_s; pu_foam_eo; corrugated_carton_i; corrugated_carton_er; corrugated_carton_s; corrugated_carton_eo; pp_band_i; pp_band_er; pp_band_s; pp_band_eo; steel_band_i; steel_band_er; steel_band_s; steel_band_eo; wood_crate_i; wood_crate_er; wood_crate_s; wood_crate_eo; steel_aframe_i; steel_aframe_er; steel_aframe_s; steel_aframe_eo | measured_foreground_record | row_id; cohort_id; article_id; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; P_purchased; I_supplier_included_ingress; ER_external_return_received; S_gross_shipped_out; EO_external_return_out; W_waste; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; wet_state; X_in_material_water; X_out_material_water; whole_article_components; upstream_owner; internal_reuse; current_service_charge; actual_atomic_leg_row_id; independent_component_W_and_mixed_event_total; actual_material_water_phase; original_Q_H ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Weigh each actual packaging article and all receipt/return/shipment/discard movements on matched wet states. first non-purchased external ingress has both physical presence and exactly one upstream burden owner. Whole P/I article components are already included; separately entering repair/water remains an influx even when retained in full wet closing stock. Physical legs do not shrink with a burden share. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. Resolve each six-direction article using its actual atomic cards; collect original cohort/Q/H and real measured repair material/water phases. One actual mixed Waste has one whole event/treatment, with conserving non-additive component W/origin subaccounts.  Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Gross receipts/shipments; wet-state stock counts/weights; supplier scope; return IDs; repair/water records |
| cp_energy_p_service | p_service | service_power | measured_foreground_record | row_id; cohort_id; stage; meter_start; meter_end; raw_kWh_or_MJ; voltage; geography; year; provider_boundary; operation_status; duration_if_rate; dedicated_or_shared_meter; service_horizon | Meter each real energy interface and stage, including startup, failed/zero-output, idle, cleanup, rework and controls. Preserve raw energy totals and shared-service evidence; distinguish complete external service from local generation. Record the actual template/site-measurement travel required before fabrication as separate attributed fuel or transport activity rather than post-gate installation. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | MJ | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Meter calibration; interval completeness; energy bills; provider scope; zero-output logs |
| cp_fuel_p_service | p_service | service_diesel | measured_foreground_record | row_id; cohort_id; stage; fuel_name; whole_supply_formula; raw_amount; original_unit; cumulative_or_rate; duration_if_rate; phase; temperature; pressure; independent_density; measured_NCV; composition; carbon_origin; provider_boundary; operating_status | Use calibrated mass or volume metering of each real fuel and matched independent density/NCV/speciation for its actual state. Preserve carrier mass, heat and supplier/combustion ownership as separate observations of one fuel receipt. No assumed boiler/steam or generic burn factor, and no time multiplier on cumulative volumes. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Meter/scale calibration; fuel analysis; measured state; provider and carbon-origin evidence |
| cp_cohort_p_service | p_service | returned_stone_waste; fg_release_in; fg_return_in; fg_dispatch; damaged_return_in | measured_foreground_record | original_cohort; original_Q; original_release_vector; observation_horizon; opening_FG; newly_first_released_area_and_mass; gross_G; gross_R; original_shipment_link; added_material_water; actual_losses; closing_FG; postwork_permission; postwork_tests; acceptance; disposition; performed_service; unused_unassigned_service_charge; fg_release_in; fg_return_in; fg_dispatch; damaged_return_in; actual_net_projected_area; independent_mass; row_id | Reconcile all real FG movements by original release cohort, independent area/mass/configuration and actual service horizon. Shipment, return, repeat acceptance and postwork are not new output Q. Postrelease work needs manufacturer/specification permission, tests and disposition; measure real added water/material and losses instead of assuming returned mass equals original delivered mass. Retain performed services, even for stocked FG. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. Collect row_id and each actual native-area custody leg plus independent kg; internal first-release receipt matches p_make Q/Rmass and cancels once, never external procurement. Intact Product and damaged Waste returns are separate actual states and directions.  Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once. | m2; kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Original release and shipment IDs; matched stock bridges; actual rework permission/test/disposition; service records |
| cp_asset_p_asset | p_asset | saw_asset; polisher_asset | measured_foreground_record | row_id; asset_id; configuration; opening_items; purchased_items; transferred_in; transferred_out; retired_items; closing_items; inherited_unassigned_charge_vector; real_service_use; justified_current_service_equivalent; remaining_unassigned_charge; repair_overlap; complete_provider_scope; measured_net_mass_if_requested | Audit each physical machine/item stock separately from the actual service-burden vector. Document real dedicated/shared service, current charge derivation, remaining capacity/charge and uncertainty without a fixed machine mass, life or future production. Item(s) and item have factor 1; a kg conversion requires same-configuration calibrated net mass and full scope rather than a secondary coefficient. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | Item(s) | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Asset register; actual service and charge derivation; remaining unassigned vector; uncertainty and provider reconciliation |
| cp_repair_p_asset | p_asset | repair_bearing; hydraulic_fluid; lubricating_fluid; removed_bearing; spent_hydraulic; spent_lubricant | measured_foreground_record | row_id; equipment_id; cohort_id; opening_installed_wet_mass; new_purchase; old_removed; return_in; return_out; real_X_in_by_material_and_water_phase; real_X_out; closing_installed_wet_mass; composition; water_state; actual_service_charge; leak_or_waste_fate; provider_scope | Measure each real new/old part and supplied/drained fluid separately, including actual water phases. Preserve every real addition plus full wet closing installed stock. X terms only remove duplicate other incoming/outgoing terms, not stock; charge attributable maintenance once and do not deduct a performed service because FG is still stored. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. Same-side corresponding-flow-only dedup never erases retained influx. Record actual unapproved/failed work and disposition; permission governs work/continued qualifying configuration, not factual collection. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Maintenance order; calibrated new/old weights; fluid/water analysis; installed-stock and treatment records |
| cp_water_p_asset | p_asset | repair_water | measured_foreground_record | row_id; cohort_id; stage; source; interface; raw_mass_or_volume; cumulative_or_rate; time_if_rate; temperature; pressure; independent_density; free_water; structural_water; phase; dissolved_species; suspended_phases; upstream_owner; internal_return; external_return; actual_enthalpy; supplier_water_energy_agreement; opening_wet_stock; closing_wet_stock | Measure true external water receipts/returns separately from internal recirculation, wet cake, product moisture and external wastewater. Use substance-specific state/density rather than the value for pure water on a slurry. Retain complete wet stocks and every real entering material/water leg; identify heat-water agreements only for actual circuits. Raw aggregation condition: preserve un-divided raw extensive totals and inherited vectors; convert_raw then attribute_vector; normalize_once is the only final division, referenced by aggregation rather than repeated. | kg | Each event/meter interval and matched cohort close; representative sampling of every actual state | Whole original cohort including failed/zero-output/startstop/idle/cleanup and linked real service horizon | Actual individual physical gate and declared supplier/equipment/configuration | per reference flow | Calibrated water meters; independent density and solids/moisture analysis; source/receiver tickets; thermal state |
| cp_service_changes | p_service | repair_wood; service_water; service_humidity; removed_wood; service_wastewater; service_vapour; mixed_pack_waste | measured_foreground_record | row_id; original_cohort/Q/H; actual board_or_article_owner; phase/species; actual added/removed wet/dry material; supplier/treatment; natural storage uptake/evaporation; actual permission/posttests/acceptance/disposition; disjoint hold/repairWIP; actual one mixed event/total/components; uncertainty | Independently weigh/sample each actual wood/water/whole waste stream, phase/composition and destination; dry matter and water require independent evidence, not two unknowns fitted by one residual.  Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once. | kg | each actual event and stock boundary | complete original Q period and actual observed service H | actual named service/external gates | per reference flow | calibration phase assays owner/disposition tickets |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | each raw extensive observation | Convert raw units and state before attribution: kWh × 3.6 gives MJ; independently measured substance-specific density converts actual volume to mass; integrate an observed rate over its real interval only, never multiply an already cumulative volume by time. Fuel carrier mass and heat, complete purchased formulations and their assay subaccounts remain distinct views with one burden owner. No conversion invents unmeasured density, item mass, species or allocation. | raw_amount; original_unit; true_rate_if_present; actual_interval; independent_state_density; measured_NCV; whole_supply_owner | converted extensive observations in each row unit | `nsi-countertops-2022` |
| release_q | finished_countertop | Q = sum of actual net single-face projected m2 of each newly first-quality-released whole countertop in the original cohort. Include released closing FG once; subtract actual holes on the declared projection and use actual drawing-specific curves. Raw slab QC, dispatch, returns, retest and later service create no new Q. Independently sum first-release net physical mass Rmass for mass balance; Q is never substituted for that mass. | cp_release_p_make; original_first_release_flag; actual_projected_area; real_holes_and_curves; independent_net_mass | Q in m2; separate Rmass in kg | `nsi-countertops-2022` |
| attribute_vector | each extensive inventory coordinate j | A_j = Bopen_j + R_j + Sperformed_j - Bclose_j - Tlegitimate_j. R_j is current converted manufacturing activity attributed once by justified subdivision/allocation; Sperformed_j is real performed postrelease service of the original cohort in its observation horizon. Every event enters exactly one term. Bopen/Bclose retain per-exchange raw/WIP and unused/unassigned material/tool/service vectors; manufacturing Bclose excludes first-released FG. Closing FG cannot remove manufacturing already counted in Q or performed services. Tlegitimate requires a_waste and a unique handover receipt for a real other function/cohort. Already stock-corrected R is not stock-corrected twice. Preserve gross physical ledgers separately and cancel internal transfers with their vectors once. Independently record each raw/WIP/truly unused-unassigned non-WIP physical quantity and every complete historical exchange vector; a mass total cannot replace the vector. | Bopen_j; converted_raw_R_j; justified_attribution; Sperformed_j; Bclose_j; Tlegitimate_j; inherited_vectors | Unnormalized attributed A_j; independent gross physical ledger; independent measured gross V_j | `ilcd-detailed-2010` |
| normalize_once | each nonreference inventory row j | q_j = A_j / Q; A_j = attributed extensive amount for the original cohort in the row-native numerator unit; q_j = that amount per 1 m2 reference flow. Execute once only when Q > 0. For postrelease services use linked original-cohort Q and disclose the actual observation horizon. Cards and aggregation reference this single result without another division; the selected finished reference row is the 1 m2 identity. At Q = 0 retain all real loads and stock vectors and issue no unit result. For custody-only physical disclosures of packaging P/I/ER/S/EO/W, FG movements including internal first-release receipt/intact returns/dispatch and damaged Waste ingress/egress, actual repair material/water X legs, declared physical asset movements, real thermal-carrier legs/Product returns and paired internal transfers, the numerator is instead independently measured full gross V_j in its native extensive unit. Use this same sole q_j=V_j/Q once: manufacturing cohort Q, or the same original Q/actual H for postrelease. Do not add history, stock-correct measured gross legs, economically scale them or create another purchase/provider/credit. Actual manufacture and supply/cleaning/repair/treatment burdens stay in A_j separately; the override never deletes them. Carrier kg/state/enthalpy and actual heat MJ are dimensions of one real whole provider; internal circulation cancels and no boiler/heat supply is presumed. | A_j; Q; original_cohort; service_horizon_if_applicable; V_j | q_j in row-native numerator unit per 1 m2 reference flow | `ilcd-detailed-2010` |
| manufacturing_mass | physical manufacturing gate | On each real wet-state boundary: opening raw/WIP/installed-material stocks plus all actual incoming material/water/gas and returns = closing raw/WIP/installed-material stocks plus Rmass plus every actual outgoing offcut/reject/sample/sludge/liquid/gas and external return. Use real masses and independent phases; do not scale physical legs by allocation or add gross air and its same constituent masses. Internal stage transfers cancel. First-released FG is an output transfer Rmass once, not a second closing manufacturing stock. Parts/water included in a whole supplied article are subaccounts; additional real influx retained in closing wet stock is not cancelled. Report unexplained residual and uncertainty without fitting unknowns. | gross_in_out; opening_wet_stocks; closing_wet_stocks; Rmass; independent_phase_and_species_evidence | Manufacturing physical residual; phase and water residuals separately | `nsi-countertops-2022` |
| fg_service_balance | FG service gate and combined gate | FGopen + Rmass + gross_R + actual_postrelease_material_water_in = FGclose + gross_G + actual_service_waste_samples_gas_liquid + actual_return_out. Track area and independent real mass/configuration; gross_R need not equal the original shipped mass. Retain original shipment and reversal links, postwork permission/tests/acceptance/disposition and real incremental rework. Combining manufacturing and service cancels Rmass once; never add Q and its released closing FG as two product outputs. This PCR does not normalize by net deliveries; a net-delivery dataset would require a separately complete historical opening/closing FG burden and original-delivery reversal bridge. Record every actual movement and caused load, including unapproved, failed or rejected work. Permission, configuration, required postwork tests and acceptance govern work authorization and continued qualifying-stock eligibility, never whether actual facts are recorded. Natural storage/handling moisture exchange requires no fabricated work permission. Preserve actual hold/disjoint repair-WIP/waste disposition once under original Q and observed H; do not presume restored broken granite. Deduplicate actual material/water only against the same corresponding measured same-side flow term, never a stock, opposite flow or merely an existing card. Actual retained influx and full wet closing stock both remain; a whole wet P/I article embeds its water once. | cp_cohort_p_service; original_Q; Rmass; gross_G; gross_R; actual_added_material_water; losses; permission_tests_disposition | FG and combined gross mass bridge; unchanged original Q | `nsi-countertops-2022` |
| packaging_balance | each individual packaging article | O_empty + O_attached_WIP + O_attached_FG + O_reusable + P + I + ER + X_in = C_empty + C_attached_WIP + C_attached_FG + C_reusable + S + EO + W + X_out. P is actual purchased whole article; I first non-purchased external ingress; ER external returns received; S gross physical shipment; EO external returns out; W real waste. Internal reuse cancels. X_in/out is each real separately entering/leaving repair material and water species, de-duplicated only against other incoming/outgoing terms, never against closing stock. Whole P/I constituents already counted enter no extra X; newly added material/water retained in closing stock remains a real influx plus full closing wet mass. Retain one upstream owner and real current packaging service without adding packaging to Q or automatically crediting returns. X deduplicates only the same measured corresponding same-side flow term, never an opposite leg or merely an existing card. For one actual co-collected waste stream, article W and actual co-collected stone origins are independently measured conserving non-additive subaccounts; never add components plus the whole event or duplicate treatment. | cp_pack_p_service; opening_full_wet_stocks; P; I; ER; S; EO; W; X_in; X_out; closing_full_wet_stocks; upstream_owner | Gross packaging residual and separate burden-owner reconciliation | `nsi-countertops-2022` |
| asset_and_repair | each machine and each actual part/fluid | Physical asset opening + purchases + transfer_in = closing + transfer_out + retirements, in real Item(s), independently of current service burden. For each installed part/fluid retain opening wet mass plus actual incoming/new/return/X_in = closing full wet mass plus real old-removed/outgoing/return/waste/X_out. X only prevents duplication with other flow terms, never cancels actual influx because it remains in closing stock. Assign justified current service/repair once; carry only unused/unassigned charge, not a performed service for retained FG. Do not charge a whole machine per m2 or fabricate a mass/lifetime/capacity; reconcile complete-provider service overlap. X only deduplicates the same measured corresponding same-side term, never an opposite flow/existing card; real influx and complete wet closing stock both remain. | cp_asset_p_asset; cp_repair_p_asset; cp_water_p_asset; gross_physical_legs; service_vector; provider_scope | Independent asset and repair physical balances; current and remaining service vectors | `ilcd-detailed-2010` |
| phase_element_balance | manufacturing and treatment and gas gates | Reconcile total wet physical mass independently from real mineral-phase, relevant-element and water-species balances. Measure phase identity, free versus adsorbed/structural water, carried formulation water, tool/binder solids and actual chemical change separately; mechanical sawing/polishing is not blanket SiO2 production, calcination or invented cure water. Resolve atmospheric O2/N2/Ar/CO2/H2O gross passages and demonstrated generated species without a second air-aggregate exchange. Unknown composition or one residual cannot establish two unknown phases/species. | independent_wet_mass; phase_analysis; elemental_assay; independent_water_and_gas_state; actual_chemical_change | Separate mass and phase and relevant-element and species-water residuals | `nsi-countertops-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | reference and every adopted UUID | Natural quarried granite with its real mineral assemblage and irregular interlocking crystals; manufactured by cutting and grinding/polishing for architectural countertop use. Native Product identity has Area as its sole reference property; it gives no fixed stone species/grade, geometry, thickness, mass, density, geographic supplier, resin treatment or certification. Declare the actual quarry/stone and petrography, weathering, free moisture, complete drawing and holes/edges, polished faces, any local fill/impregnation and every attached component. Not marble/travertine/alabaster, ceramic tile, agglomerated resin-stone, a pure mineral powder, a flamed tread or an installed kitchen/furniture system. A supplied finished countertop cannot substitute for block/slab manufacturing. | `nsi-countertops-2022`; `ilcd-detailed-2010`; the linked original foreground records and full native restrictions |
| dq_supply | each supplied block/slab and formulation | Verify actual supply form and completed upstream steps, quarry geography and mineralogy, whole-formulation composition and exactly one upstream burden owner. Preserve every native flow restriction in the card and complete inherited context; a generic provider gap needs real collection, while an incompatible CAS/material/form/route/type/media cannot be excused by classification. | `nsi-countertops-2022`; `ilcd-detailed-2010`; the linked original foreground records and full native restrictions |
| dq_complete | whole original production cohort | Cover all failures, zero-output, startup/shutdown, idle, cleanup, sampling, rejects and actual rework plus opening/closing raw/WIP and every inherited exchange vector. Missing records are unknown, not zero or absence. Add every actual unlisted single formulation/material/utility/asset/packaging/waste/species with its own card/protocol; collection labels and other/zero hiding are prohibited. | `nsi-countertops-2022`; `ilcd-detailed-2010`; the linked original foreground records and full native restrictions |
| dq_sources | all transferred source claims | NSI describes surveyed multi-stone production and several factory stages, not one contemporary granite SKU/factory/order. Use the positively supported physical route as transparent technical synthesis; do not transfer its numerical averages, estimated energy increment, proxy materials, implied zero emissions, density, thickness, loss fractions, distances or life. Qualitative ILCD allocation evidence cannot establish an industrial route, and industrial sources cannot establish allocation. | `nsi-countertops-2022`; `ilcd-detailed-2010`; the linked original foreground records and full native restrictions |
| dq_release | first quality release and original service | Retain actual required tests and acceptance/disposition before the original finished release. Later repeat testing or dispatch does not generate Q; rework permission and postwork testing/acceptance are real evidence requirements, not an assumption that broken stone can be restored. Keep performed services for stored FG and report only unused/unassigned service as remaining charge. | `nsi-countertops-2022`; `ilcd-detailed-2010`; the linked original foreground records and full native restrictions |
| dq_physical | mass and phase and packaging and assets | Use independent calibrated geometry/mass/state/speciation observations and aligned manufacturing/FG/combined physical gates. Preserve gross legs without economic shrinking, and full closing wet stocks plus real material/water influx. Keep one residual and uncertainty per independent balance; do not solve multiple unknowns from one closure or infer pure quartz from PM. | `nsi-countertops-2022`; `ilcd-detailed-2010`; the linked original foreground records and full native restrictions |
| dq_uncertainty | future foreground dataset | Record meter/scale/geometry/speciation calibration, sampling coverage, dates and actual site/supplier, missing items, native/provider compatibility, allocation derivations, actual service horizon and sensitivity. A method with required future measurements contains no fabricated factory quantities; an incomplete actual dataset remains inconclusive and cannot claim a measured result. | `nsi-countertops-2022`; `ilcd-detailed-2010`; the linked original foreground records and full native restrictions |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_reference | Reference and unique finished row | Natural quarried granite with its real mineral assemblage and irregular interlocking crystals; manufactured by cutting and grinding/polishing for architectural countertop use. Native Product identity has Area as its sole reference property; it gives no fixed stone species/grade, geometry, thickness, mass, density, geographic supplier, resin treatment or certification. Declare the actual quarry/stone and petrography, weathering, free moisture, complete drawing and holes/edges, polished faces, any local fill/impregnation and every attached component. Not marble/travertine/alabaster, ceramic tile, agglomerated resin-stone, a pure mineral powder, a flamed tread or an installed kitchen/furniture system. A supplied finished countertop cannot substitute for block/slab manufacturing. Verify the selected whole product, native Product/Area identity and all qualifiers; unsupported exact native core identity is a core hold, not an authored-methodology shortcut. | `nsi-countertops-2022`; `un-cpc3-2025` |
| v_basis | All measurement relationships | Reference amount 1 m2, finished row, actual area Q, raw protocol basis and single A_j/Q result must agree in both languages. Execute every finite measurement check with no skipped relationships; unknown semantics require review. A mechanical pass is neither a measured factory result nor scientific/translation/mapping approval. | `ilcd-detailed-2010` |
| v_physical | All physical gates and stocks | Check manufacturing_mass, fg_service_balance, packaging_balance, asset_and_repair and phase_element_balance independently with full gross legs, real wet stocks and added material/water retained. Do not subtract ordinary waste loads or already performed service; do not remove released closing FG from first-release Q or count it as a second product. | `nsi-countertops-2022`; `ilcd-detailed-2010` |
| v_completeness | Atomic inventory and sources | Every actual exchange needs its own physical/chemical name, native extensive unit, condition, collection/calculation chain and source. Recheck each adopted UUID against its full compatible native state and property/unit chain; unresolved auxiliary identity is explicit, not a generic binding waiver. Distinguish missing, absent and measured zero; failed/zero-output campaigns remain in burden/stock accounting and issue no unit result for Q=0. | `nsi-countertops-2022`; `ilcd-detailed-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Attributional first-release granite-countertop manufacturing inventory with separately attributed original-cohort service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared compatible natural granite slab countertop supply and building-LCA foreground modelling with actual qualifiers and real source coverage |
| excluded_use | All-37690 coverage; ceramic/artificial/calcareous stone; flamed treads; purchased-finished wrapping shortcut; installed-system or lifetime/certification performance; unqualified kg/item conversion; incomplete actual datasets |
| required_metadata | quarry and actual stone designation; petrographic mineral phases and fabric; weathering and defects; free moisture; full drawing-specific geometry and real holes or curved edges; thickness and net mass measured independently; actual polished face and edge finish; whole-product component boundary; local resin fill and impregnation formulation/state or evidenced absence; upstream block or prepared-slab processing split; site and year; machinery and provider scope; first quality-release event and acceptance specification/tests; Q area and separate mass/count; original cohort and WIP inherited vectors; gross FG and packaging ledgers; water/phase balances and actual dust/gas species; complete service horizon; allocation basis and residual gate values; uncertainty and evidence gaps |
| required_quality_disclosure | Full measured and missing foreground scope; exact native/provider compatibility; raw/WIP/FG and service histories; physical balances; normalization and allocation evidence; uncertainty; upstream source coverage; no reported scientific or translation approval by an engineering check |
| update_trigger | Change in geological stone/configuration, geometry/finish/treatment, supply stage, actual plant route, source/provider identity or gate/normalization/allocation; new evidence or corrected measurements |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD. CPC Ver. 3.0 Explanatory Notes, updated 30 June 2025, PDF p.185 and adjacent pp.182-186. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; Retrieved 2026-10-20 | Classification scope only: 37690 versus 37610 and cement/artificial stone; not product geometry or LCA allocation. |
| nsi-countertops-2022 | literature | Natural Stone Institute / Sustainable Minds. Life Cycle Assessment of Natural Stone Countertops, final October 2022, §§2-3, Figure 2 p.12, §§3.2.2-3.2.3 pp.18-21, Figure 3, Table 15 p.26, limitations pp.27-28. https://transparencycatalog.com/assets/uploads/pdf/Final_LCA-report_Stone-Countertop_Oct252022.pdf; Retrieved 2026-10-20 | Primary surveyed block/slab processing and complete countertop fabrication chain, likely consumable and packaging roles, upstream/local and installation separation. No transfer of its mixed-stone averages, assumed density/thickness, energy uplift, proxy materials, transport distances, no-emission reporting or service life to a new granite factory. Industrial evidence does not establish allocation. |
| ilcd-detailed-2010 | official_guidance | European Commission JRC. ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, §7.9.2-7.9.3, printed pp.255-272 / PDF pp.275-292. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; Retrieved 2026-10-20 | Qualitative attributional multifunctionality method where allocation is justified: dedicated/virtual subdivision, exchange-specific determining physical causality and residual common-process-gate market value. Not granite manufacturing evidence, numeric factors, consequential substitution or automatic waste credit. |
