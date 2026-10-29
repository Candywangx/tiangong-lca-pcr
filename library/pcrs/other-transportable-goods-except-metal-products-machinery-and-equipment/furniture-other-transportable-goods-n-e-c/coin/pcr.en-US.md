---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.coin
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Monometal copper-nickel circulation coins

## 1. Scope and Applicability

This PCR covers whole new homogeneous single-metal copper-nickel circulation coins made by actual blank conditioning where required and striking, ending at first quality release. The foreground begins with externally supplied whole coin blanks; completed alloy production/casting/rolling/punching and prior conditioning are carried once by the compatible provider. Subsequent actual counting/packaging/storage/handling/dispatch and postrelease work are recorded in original-cohort service accounts. This is a narrow product/manufacturing subset of CPC 38250, not a rule for every currency article.

Exclude unstruck blanks/discs, raw alloy and bullion, bimetallic/clad/plated/painted/coated coins, precious-metal/proof/collector products, medals/tokens/jewellery, monetary-value accounts, currency circulation/use life and mere finished-coin repacking. The educational PDF, live mint descriptions and independent US/UK context form a transparent technical synthesis, not a measured common contemporary factory/SKU/order. They distinguish bought blanks, coil preparation and special proof/plated branches. No nominal alloy percentage, piece weight, geometry, process setting, recipe, yield, service life or acceptance number is imposed.

Sources: un-cpc3-2025; ram-five-cents; ram-coin-making-2015; ram-about-coins-2015; ram-minting-process; usmint-coin-production-2021; royalmint-blank-bank. Equal mass does not establish equivalent monetary function, quality, wear or lifetime.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.coin |
| classification_refs | CPC 3.0 38250; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38250.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Whole homogeneous unplated monometal copper-nickel circulation coins |
| excluded_products | Unstruck blanks/raw alloy; bimetal/clad/plated/coated coins; precious-metal/proof/collector products; medals/tokens/jewellery; mere repacking; circulation/use/monetary accounts |
| representative_product | Monometal copper-nickel circulation coins |
| production_route | Whole supplied blanks → actual remaining conditioning → striking/quality sorting/testing → first release; separate subsequent original-cohort service |
| market_state | Complete net coins at first quality release with actual alloy/surface/specification and packaging boundary declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide manufacturing inventory of original-cohort first-released complete copper-nickel coins plus separate actual service |
| How much | 1 kg |
| How well | manufacturer/site/reporting period; declared single monometal homogeneous copper-nickel configuration and actual alloy assay; unplated/unclad/non-bimetal surface state; actual blank supplier and completed upstream operations; real annealing/cleaning/upsetting/lubrication/coining/testing sequence; actual specification acceptance and net-mass calibration/tare; first-release cohort Q_c and observed service horizon H; full raw/WIP/non-WIP burden vectors and released FG gross/return ledger; whole formulation composition and on-site blending boundary; actual energy/grid/thermal-carrier state and provider convention; every packaging pool six legs and full wet stocks; actual species/phase/media and independent elemental closure; assets/tool service and real new/used repair parts/fills; all failed/unauthorized/start-stop/idle/cleanup/Q-zero work; subdivision/causality/residual-gate evidence and uncertainty |
| How long or cycle | One original first-release cohort c and actual observed service horizon H; no default circulation life |
| reference_flow_link | `finished_coin` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Coin `e686bde0-1244-4040-b821-d8c912ff799d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/site/reporting period; declared single monometal homogeneous copper-nickel configuration and actual alloy assay; unplated/unclad/non-bimetal surface state; actual blank supplier and completed upstream operations; real annealing/cleaning/upsetting/lubrication/coining/testing sequence; actual specification acceptance and net-mass calibration/tare; first-release cohort Q_c and observed service horizon H; full raw/WIP/non-WIP burden vectors and released FG gross/return ledger; whole formulation composition and on-site blending boundary; actual energy/grid/thermal-carrier state and provider convention; every packaging pool six legs and full wet stocks; actual species/phase/media and independent elemental closure; assets/tool service and real new/used repair parts/fills; all failed/unauthorized/start-stop/idle/cleanup/Q-zero work; subdivision/causality/residual-gate evidence and uncertainty |

Native Product is Coin, a manufactured finished article at plant production mix with Mass reference; no fixed alloy, CAS, geometry, denomination, supplier geography or process settings. The isolated comment “383 Musical instruments” is a taxonomy/comment defect, disclosed rather than read as a physical musical-instrument identity. Use only the primary-supported complete struck monometal copper-nickel circulation coin specified here; not a blank, metal disc, raw alloy, medal, token, jewellery or monetary account. The family name does not approve plated, clad, bimetallic, precious-metal, proof or coated variants.

Declare every required qualifier in actual dataset metadata, process notes, reference comment, product description or equivalent. Q_c is observed cohort kg; the reference amount is 1 kg. Native Mass is the reference, with no count, nominal money or secondary-property conversion overriding it.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | finished_coin | Mass | kg | Use cp_release calibrated net weighing of newly first-released complete-coin Q_c; exclude packaging/free water/failures/samples; closing released FG already belongs to Q_c. |
| row_native_units | all inventory rows | Actual row-native extensive property | kg; MJ; m3; Item(s) | All cards share reference basis while each numerator preserves its real native unit; no blanket Mass/kg for energy/volume/count. Protocols collect undivided raw; single_quotient divides once by Q and card/aggregation only reference it. |
| mass_count_bridge | finished_coin | Mass; Number of items | kg; Item(s) | If count conversion is required, M is measured net mass divided by observed count for the same configuration/alloy/surface/moisture/release scope, with calibration/tare/sampling range/uncertainty. No default kg per coin or geometry/secondary-mass-derived density. Number of items → Item(s) equals item by factor 1, not any kg. |
| species_state | all physical exchanges | Actual species/phase property | kg; MJ; m3 | Separate assay/total elements/COD/VOC/PM from actual molecules/particles/ions; independently establish water phase and reaction evidence. Density belongs to the measured substance/state; cumulative volume is not multiplied by time. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Manufactured whole homogeneous unplated copper-nickel blanks with each completed upstream state declared |
| starting_condition_role | Burden-bearing manufacturing feed, not bought finished-coin repacking |
| product_classification_scope | Copper-nickel monometal circulating-coin subset of CPC 38250 |
| recursive_input_rule | One compatible blank provider; internal same-product/recycle handoffs and vectors match/cancel; no assumed onsite remelt or second purchase |
| upstream_dataset_requirement | Complete alloy/blank operations and each actual material/energy/tool/asset-service/ordinary-waste-treatment provider; compatible boundary/state and one owner each |
| disclosure | manufacturer/site/reporting period; declared single monometal homogeneous copper-nickel configuration and actual alloy assay; unplated/unclad/non-bimetal surface state; actual blank supplier and completed upstream operations; real annealing/cleaning/upsetting/lubrication/coining/testing sequence; actual specification acceptance and net-mass calibration/tare; first-release cohort Q_c and observed service horizon H; full raw/WIP/non-WIP burden vectors and released FG gross/return ledger; whole formulation composition and on-site blending boundary; actual energy/grid/thermal-carrier state and provider convention; every packaging pool six legs and full wet stocks; actual species/phase/media and independent elemental closure; assets/tool service and real new/used repair parts/fills; all failed/unauthorized/start-stop/idle/cleanup/Q-zero work; subdivision/causality/residual-gate evidence and uncertainty |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | p_mint | Start at whole supplied copper-nickel blanks with completed upstream manufacture borne once. Record receipt/inspection, only actual remaining annealing/quenching, cleaning/drying, rimming, application, striking, quality sorting/testing and first release. No onsite casting/rolling/blanking, proof burnishing, plating or extra finishing is presumed; a truly different route needs full additional atomic inventory and applicability review. | ram-coin-making-2015; ram-minting-process; usmint-coin-production-2021 |
| b_first_release | p_mint; p_service | Q_c is first-release net full-coin kg, not net deliveries. Closing released FG belongs to Q_c already; do not add it as another output or remove its manufacturing burden. Internal released-coin handoff and vector match/cancel. Subsequent storage/pack/handling/dispatch/return/rework have separate actual incremental service by original Q_c and H; no new Q on reinspection or redelivery. | ilcd-attributional-2010 |
| b_complete | all exchanges | Retain every actual failed/held/destructive-test/sample, zero-output, start-stop, idle, cleanup, unauthorized and rework event and its real flows/burdens. Work permission/posttests/acceptance/disposition govern legitimate postrelease work and continuing conformity; they do not erase work actually performed without permission or failed results. Natural humidity exchange is actual physics without fictional repair operations. Unknown is not zero. | ram-minting-process; usmint-coin-production-2021 |
| b_whole | every supplied article/preparation | Every real raw formulation, added chemical, tool, packaging material, water, fuel, energy, waste and species has its own atomic card. Buy whole preparations/articles once; assay/carrier/contained components are nested and disjoint. Actual site blending or added parts require specific separately purchased rows, energy and losses. Never conceal manufacturing inputs inside zero/other categories. | ram-minting-process; usmint-coin-production-2021 |
| b_physical | all gates | Manufacturing, FG and consolidated physical gates must agree with full gross materials/packaging/assets/parts/water/thermal carriers and each actual air species. No economic share scales physical legs. Internal same-product/water/recycle handoffs match and cancel; no second purchase, Q or credit. A real externally returned condensate/hot-water carrier is Product return with actual state/enthalpy and supplier convention. | ilcd-attributional-2010 |
| packaging_receipt_basis | packaging | For each actual whole packaging article, P records paid procurement (standalone or bundled, with or without a separate invoice). I records first non-purchased external ingress, including standalone gifts, loans, rental/pool issues and unpaid supplier-attached packaging; supplier attachment is only one I subset. ER requires the same item or an auditable matching batch linked to this site's own prior outward record; another party's prior use alone is not a return. P/I/ER are disjoint. The existing matching physical-article cards and raw subledgers cover these origins subject to every native material/form/state qualification; incompatible actual articles require their own atomic rows, never a substitute UUID. X_in/X_out remain separate measured material/water-change terms, not a substitute for whole-article receipt. Keep gross wet quantities, owner/custodian, payment/non-purchase basis, provenance, prior-outward links, actual state/unit and inherited manufacture/service vectors. A free receipt is neither a new manufacture nor automatically burden-free: attribute actual service and incremental transport/handling once to the proper original cohort/denominator and retain genuinely unused service separately, without a default lifetime or credit. Stock, physical gross legs and burden vectors remain separate. This is the declared conserving foreground-accounting implementation, not a claim that the cited source prescribes these variable names. | ilcd-attributional-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_mint | Whole-coin manufacture and first release | required | Actual in-scope manufacture | Manufacture/tests and all failures/controls | finished_coin |
| p_service | Original-cohort storage packing handling dispatch service | conditional | Whenever actual service occurs; retain real returns/postrelease work | Actual incremental service and physical legs; no new Q | original Q_c; H |

All external cards below disclose a full actual gross physical leg V, not a burden vector or stock-corrected amount. Their separate consumption/activity and environmental-burden coordinates are derived once in section 8 with one upstream owner, and are not added to these disclosures. Conditional cards apply only to real events; actual other substances/SKUs/states require their own atomic cards. Segregated packaging W cards and the mixed total are mutually exclusive for the same physical exit; per-pool W remains independently measured in either case.

### Process: Whole-coin manufacture and first release (`p_mint`)

#### Inputs

##### Product flows

###### Whole supplied copper-nickel coin blank (`blank_receipt`)

Receive whole homogeneous unplated copper-nickel blanks. Record full external receipt V and separate target-cohort consumption N; one compatible provider carries all completed alloy manufacture, casting, rolling, punching, prior heat/surface work and transport exactly once. No extra copper/nickel assay purchases. Declare whether annealing, rimming and washing are already complete; perform and count only real remaining work.

Native Product/Mass is a coin blank, with no fixed material, annealing state, surface, route, geography, CAS or synonyms. Current Coin classification and preserved older other-goods provenance do not make it a finished coin. Narrow to one whole supplied homogeneous copper-nickel blank with actual supplier alloy/assay and completed casting/rolling/punching/annealing/cleaning/rimming state declared; assay metals are subaccounts, not extra purchases. Bind only the actual blank supply state; not a steel core, plated disc, bimetal assembly or a second manufactured coin.

- Selected flow: Coin blanks (unspecified) `78ebd9cb-9cdf-493b-9357-e1287fa413e1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_blank_receipt`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `usmint-coin-production-2021`

###### Minting electricity (`mint_power`)

Meter actual receipt conditioning, annealing if present, upsetting, lubrication/application, coining, testing, counting, extraction and pollution controls, with all failed/start-stop/idle/cleanup loads. Electricity identity and supplier must match real grid geography, year, voltage and delivery boundary; Brazil medium-voltage, US-grid and CN low-voltage records are conditional interfaces, not universal supply. Native Product AC electricity is an energy-basis foreground use at the point of use, with supply technology, mix, provider geography, voltage, delivery boundary and line-loss convention unspecified. This broad interface does not resolve the actual provider or authorize DC; collect those facts and link one compatible supply burden. Preserve metered gross MJ and the distinct allocated burden coordinate.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mint_power`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Separately supplied tap water (`mint_water`)

Only actual separate water receipts/makeup cross the boundary here. Whole bought preparations/articles already containing water are counted once; actual site dilution, washing, cooling or cleaning water is additional real influx even when retained in full wet closing material. Preserve original meter units and independently measured state-specific kg for closure; m3-to-kg requires actual density; internal reuse cancels without another purchase.

Native Product is treated potable/public tap-water supply at factory production mix with Mass/kg reference and a secondary Volume property. No fixed supplier geography, CAS, grade or treatment train is prescribed; actual treatment/quality and provider boundary must match. Do not derive density from secondary-property factors. It is not count-native process water, raw abstraction, steam or a cleaning preparation; independently measure mass/state and any needed density for the actual water.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mint_water`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Separately purchased anhydrous citric acid (`citric_powder`)

Conditional only where citric acid is actually purchased separately for the real quench/cleaning preparation. Retain delivered mass, moisture/assay, tank opening/closing and losses. Not an extra purchase when citric acid is already contained in one bought whole cleaning formulation; do not impose the US quench recipe on every mint.

Native Product/Mass is colourless crystalline citric acid CAS 77-92-9 at plant production mix, with citric-acid synonyms and no fixed supplier geography, purity or manufacturing route. Medicament classification does not impose pharmaceutical grade or prove cleaning suitability. Only actual separately supplied anhydrous citric acid with verified grade/state is bound; monohydrate, citrate salt and delivered aqueous preparation need their own compatible identity. Generic environmental-benefit prose is not impact evidence.

- Selected flow: Citric Acid `80e2772b-119c-4565-a919-a70939d89dff`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_citric_powder`
- Sources: `usmint-coin-production-2021`

###### Aqueous coin-cleaning preparation (`coin_cleaner`)

One actual whole supplied cleaning formulation used in real blank/coin cleaning; document supplier composition, actual coin compatibility, water, active agents and inhibitor assays as nested subaccounts. Laundry detergent and printer-cleaner records do not establish this identity. If made on site, replace this purchased-whole row by each separately purchased specific material plus real mixing energy/losses and internal formulation handoff, counted once.

- Selected flow: Aqueous coin-cleaning preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coin_cleaner`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Separately supplied aqueous anti-tarnish preparation (`antitarnish_additive`)

Only an actual independently supplied anti-tarnish formulation not already inside the whole cleaner. Record full supplier/SDS identity, carrier water and real chemical constituents; no invented inhibitor species, dose or default coating. If absent demonstrate absence; if real instantiate every specific formulation and actual disposal.

- Selected flow: Separately supplied aqueous anti-tarnish preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_antitarnish_additive`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Whole supplied aqueous stamping lubricant (`stamping_lubricant`)

Only actual application to the blank/die or real conditioning circuit, with supplier permission/compatibility and actual residues, bath stocks, spills and spent-liquid fates. The whole preparation is purchased once; separately added water/citric acid is real only outside that supplied formulation. No fixed lubrication quantity or assumption that every coin needs lubricant.

Native Product/Mass Cutting Fluid is a metalworking coolant/lubricant family explicitly including stamping and oil/water/emulsifier preparations; no fixed grade, CAS, geography or recipe. Narrow to one actual whole supplied oil-in-water stamping-lubricant preparation with declared constituents and compatibility. Do not substitute a fixed PAO synthetic oil, rolling oil, pure mineral oil or compressed air. Its carrier water/oil/emulsifier assays are nested, not additional procurement; actual on-site blending requires disjoint purchased substances and real mixing losses/energy.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stamping_lubricant`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Supplied protective nitrogen gas (`protective_nitrogen`)

Conditional on an actually used N2 protective atmosphere for on-site annealing; absence of oxygen does not itself identify nitrogen. Record actual gas composition, mass and supply state; hydrogen/argon or any additional real gas gets its own specific card rather than being hidden in this one.

Native Product/Mass Nitrogen gas has no fixed route, supplier geography, purity or secondary property. Use only actual gaseous molecular N2 supplied for the real protective atmosphere; not liquid nitrogen, NOx, air or an automatic oxygen-free recipe. Confirm actual gas purity and delivery boundary. Its real external vent is a distinct elementary event; no new purchase for internal circulation. Do not also book the purchased N2 as an atmospheric Resource input; purchased gas, actual ambient ingress and actual vent are distinct owners and events.

- Selected flow: Nitrogen gas `4f19ca0f-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_protective_nitrogen`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Pipeline natural gas for actual on-site heat (`furnace_natural_gas`)

Conditional on a real gas-fired annealing/drying unit. Preserve gross delivered volume and independently evidenced composition/state, density and calorific basis; no multiplying cumulative m3 by time. Keep carrier mass, fuel energy and full species outputs independently. Do not also buy heat/steam from the same on-site combustion or use a methane-CAS compressed-gas interface for an incompatible mixture.

- Selected flow: Pipeline natural gas for actual on-site heat
- Flow property / unit: Volume / m3
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_furnace_natural_gas`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Purchased process heat (`external_heat`)

Conditional actual externally supplied thermal energy. Preserve real MJ, enthalpy/supply-return states and supplier water/energy convention. A CN natural-gas industrial-heat identity does not cover any geography or thermal basis. This energy coordinate excludes a second whole provider for carrier-water mass and never duplicates on-site fuel-derived heat.

- Selected flow: Purchased process heat
- Flow property / unit: Actual thermal energy / MJ
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_external_heat`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### External steam carrier water (`external_steam_mass`)

Only real external ordinary-water steam crossing the gate, with measured kg, quality, temperature/pressure/enthalpy and matching thermal-service receipt; one provider ownership is shared with the real energy coordinate, not duplicated.

- Selected flow: External steam carrier water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_external_steam_mass`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### External hot-water carrier (`external_hotwater_mass`)

Only actual externally supplied liquid heating water with independently measured mass and inlet/return enthalpy. No boiler/hot-water loop is assumed from a dryer description.

- Selected flow: External hot-water carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_external_hotwater_mass`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Complete steel coin-striking die (`coin_die_asset`)

Record one actual whole finished steel striking die, its received/installed/closing/retired mass, retained coatings/fluids and real new/used condition. Do not bind an optical-disc stamper, raw steel or holder assembly as the die. Its production/maintenance service belongs once to actual eligible cohorts, supported by usage records; no fixed life, strikes-per-die or one whole die per kg. No design, pattern or security-feature instructions are specified.

- Selected flow: Complete steel coin-striking die
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coin_die_asset`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Complete coin-striking press (`press_asset`)

Physical receipt of one actual new/used complete press only if it occurs; measure actual configuration/net mass and count independently. Keep gross asset movement, installed fluid/parts, wear and actual service burden distinct. No invented machine weight, power, service life or entire machine purchase per kg; separately supplied parts/fills are disjoint from whole-machine receipt. Native Product/Mass family covers complete manufactured metal-forming and die-stamping presses at plant production mix, without a fixed drive type, machine mass, lifetime, supplier geography or dimensions. Narrow to the actual complete coin-striking press; an intermediate hydraulic platform, stand-alone die, optical-disc stamper or printing press does not match. Whole received machine and disjoint later parts/fills have one owner; measured mass/count and actual service attribution remain separate.

- Selected flow: Machine-tools for working metal by forging, hammering or die-stamping, machine-tools for working metal by bending, folding, straightening, flattening, shearing, punching or notching, other presses for working metal or metal carbides `ef918c66-bff0-4bd0-b84b-2912b75af3e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_press_asset`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Complete replacement bearing (`replacement_bearing_in`)

Actual new/used independent bearing receipt, not another whole press or loose steel material. Keep measured wet/filled whole state and assigned service separate.

Native Product/Mass family is a manufactured complete ball or roller bearing at plant production mix. Use one actual compatible replacement bearing with declared metallurgy, seals, retained lubricant and new/used state; not raw steel, loose balls, an entire press or a wind-turbine-specific pitch bearing. Whole bearing production/fill is owned once; independent later oil top-up is a separate measured supply, without an assumed lifetime.

- Selected flow: Ball or roller bearings `9b10184f-db9d-4cc7-94b5-02ab19ca370d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_replacement_bearing_in`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Machine lubricating-oil preparation (`maintenance_oil_in`)

Only independently supplied actual complete maintenance-oil preparation outside fluid already in a whole received press/bearing. Keep full formulation, opening/closing in-machine charge, real topup/drain/leak, actual compatibility and failure events. Fixed PAO/native-route conflicts are not ignored.

- Selected flow: Machine lubricating-oil preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_maintenance_oil_in`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

##### Waste flows

##### Elementary flows

###### Atmospheric H2O vapour uptake (`mint_humidity_in`)

Record independently evidenced natural humidity uptake by blanks/coins, packaging, tools and stores during real handling/storage as well as any operation. Preserve the complete incoming mass and full wet closing stocks together. This is not tap-water supply, liquid mist or a second purchase of water inside a supplied wet article; natural humidity exchange requires no invented repair permit.

- Selected flow: Atmospheric H2O vapour uptake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mint_humidity_in`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual ambient molecular O2 ingress (`oxygen_ingress`)

Only actual measured air intake for a real thermal/ventilation operation; record this individual gas mass, actual composition/state and consumed/unconsumed portions. Do not add an aggregate-air exchange on top of its disjoint species or treat it as a purchased gas cylinder.

Native Elementary/Mass CAS 7782-44-7; exact compartment Resources / Resources from air / Renewable element resources from air. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_oxygen_ingress`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual ambient molecular N2 ingress (`nitrogen_ingress`)

Only actual measured air intake for a real thermal/ventilation operation; record this individual gas mass, actual composition/state and consumed/unconsumed portions. Do not add an aggregate-air exchange on top of its disjoint species or treat it as a purchased gas cylinder.

Native Elementary/Mass CAS 7727-37-9; exact compartment Resources / Resources from air / Renewable element resources from air. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity. This atmospheric Resource excludes nitrogen already owned by purchased protective gas or a whole purchased-air supply.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nitrogen_ingress`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Ambient molecular CO2 in actual air ingress (`ambient_co2_in`)

Only measured inlet molecular CO2, separate from newly formed fossil CO2. Record origin and throughflow; no emission identity is reversed into a Resource without confirmation.

- Selected flow: Ambient molecular CO2 in actual air ingress
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ambient_co2_in`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Ambient argon ingress (`argon_in`)

Conditional actual Ar in independently measured air; preserve same-side gross mass without an invented air composition fraction. Native Elementary/Mass argon CAS 7440-37-1 is Resources from air / Renewable element resources from air. Use only independently evidenced actual atmospheric Ar; no default air fraction, purchased protective-gas duplication, ion/isotope substitution or reversal of an emission record.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_argon_in`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

#### Outputs

##### Product flows

###### External condensate return (`condensate_return`)

Only actual condensate returned to the thermal supplier as a Product return, with mass/state/enthalpy and provider water boundary. Not waste, automatic coproduct or credit; separately collected discarded condensate needs an actual Waste/receiving-medium card.

- Selected flow: External condensate return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_condensate_return`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### External heating-water return (`hotwater_return`)

Only real liquid heating-water return to the supplier with actual kg and thermal state. Supply/return physical mass stays gross and cannot be scaled by allocation of thermal burden.

- Selected flow: External heating-water return
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_hotwater_return`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### First-released complete coin (`finished_coin`)

This unique reference output represents newly first-quality-released full net coins Q_c in original cohort c. Calibrated net weighing and actual release criteria govern; no blank/reject/sample, free water, packaging, nominal denomination or sales value belongs in Q_c. Closing released FG is already included, cannot be added again or deducted from manufacturing burden. Physical transfer into p_service matches and cancels on consolidation.

Native Product is Coin, a manufactured finished article at plant production mix with Mass reference; no fixed alloy, CAS, geometry, denomination, supplier geography or process settings. The isolated comment “383 Musical instruments” is a taxonomy/comment defect, disclosed rather than read as a physical musical-instrument identity. Use only the primary-supported complete struck monometal copper-nickel circulation coin specified here; not a blank, metal disc, raw alloy, medal, token, jewellery or monetary account. The family name does not approve plated, clad, bimetallic, precious-metal, proof or coated variants.

- Selected flow: Coin `e686bde0-1244-4040-b821-d8c912ff799d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: `ram-minting-process`; `ram-five-cents`; `ilcd-attributional-2010`

##### Waste flows

###### Removed spent bearing (`removed_bearing_out`)

Only actual removed bearing classified as waste, including its independently measured retained lubricant, moisture and contamination. No intact Product identity for a failed bearing; resale/removal alone does not subtract original manufacturing/service burden.

- Selected flow: Removed spent bearing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_removed_bearing_out`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Spent lubricating-oil preparation (`spent_oil_out`)

One actual drained/collected whole oil preparation with water and contamination subaccounts; independently measured real export and treatment once, not inferred by subtracting two unknown stocks. Native Waste/Mass used lubricating oil covers actual petroleum-based or synthetic lubricant contaminated through use at its point of generation; treatment route and provider are unspecified. Use the actual whole spent preparation and its measured nonadditive water/contamination subaccounts, not unused product oil or an assumed recycling/combustion credit. One receiver owns treatment; original maintenance and performed-service burdens remain.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_spent_oil_out`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Rejected copper-nickel coin (`rejected_coin_waste`)

One actual separately exported failed whole-coin stream, including deformed coins if genuinely performed. Weigh net metal and real attached residues/moisture; assay copper and nickel separately without making two scrap purchases. Radioactive copper mixed-waste and nickel-smelter-slag identities do not match. Failures, destructive samples and treatment remain original manufacturing burden; external sale grants no automatic debit/credit. Record actual destruction/deformation, custody and destination when they occur, with all real work and emissions. Recycling or remelting at an external receiver has one declared treatment owner; do not invent an on-site furnace or relabel failed coins as new output. Any real internal recovery has matching material and burden handoffs, cancellation and full additional operations; it does not generate a second purchase or credit.

- Selected flow: Rejected copper-nickel coin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_rejected_coin_waste`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Collected copper-nickel metal fines (`metal_fines_waste`)

Only a real separately collected solid alloy-fines stream from actual handling/rimming/cleaning/coining. Not automatic stamping offcuts: no site blanking/casting is assumed for purchased blanks. Keep alloy species/phase and each outlet; exported particulate waste is not simultaneously an atmospheric emission.

- Selected flow: Collected copper-nickel metal fines
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_metal_fines_waste`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Spent aqueous coin-cleaning liquid (`spent_cleaning_liquid`)

One actual separately collected whole spent cleaning bath, with carrier water, dissolved chemicals/metals and suspended particles as nonadditive subaccounts. Measure full wet export, independent volume/density/state and receiving treatment. Do not also emit its contained ions to natural water at this gate; onsite treatment and true environmental release require distinct actual cards.

- Selected flow: Spent aqueous coin-cleaning liquid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_spent_cleaning_liquid`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Wet copper-nickel-bearing cleaning sludge (`coin_wash_sludge`)

Only actual separately collected wet sludge from real cleaning/liquid treatment with independently measured dry solids, free/bound water and actual mineral/chemical species. Total Cu/Ni and COD do not establish hydroxide molecular mass. A water-treatment chemical labelled Sludge is not automatically this waste.

- Selected flow: Wet copper-nickel-bearing cleaning sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coin_wash_sludge`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Retired steel coin-striking die (`spent_striking_die`)

Only a real separately retired whole steel die classified as waste; retain gross metal/coating/attached oil and moisture, asset id and actual receiver. Production/service burdens and inherited vectors remain reconciled; retirement/resale does not create avoided-steel credit or erase previously performed service. No fixed life is inferred.

- Selected flow: Retired steel coin-striking die
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_spent_striking_die`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Retired complete coin-striking press (`retired_coin_press`)

Only real whole-press disposal with actual configuration, retained fluids/parts and complete gross mass. Disjoint independently removed fluids/parts are bridged and not counted again within the whole press. Physical asset stocks and actual service charges remain separate; no per-kg entire-machine retirement or fabricated lifetime.

- Selected flow: Retired complete coin-striking press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_retired_coin_press`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

##### Elementary flows

###### H2O vapour to actual air (`mint_h2o_out`)

Measure actual evaporation/desorption and any reaction-generated ordinary water separately by origin before the full gross outlet is combined. Natural storage/handling moisture loss is included without inventing extra operations. Liquid droplets, wastewater and free/structural water are distinct; no one residual fits multiple unknowns.

Ordinary H2O vapour only; not liquid droplets, ice, heavy/tritiated water or evapotranspiration. Native Elementary/Mass CAS 7732-18-5; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_mint_h2o_out`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual copper in air outlet (`copper_air`)

Conditional on an independently measured actual metal/ion species represented by the native metal convention in its correct air compartment. Keep particulate/dissolved speciation and chemical mass versus elemental content independent; bulk alloy fines, PM and total-metal indicators cannot be copied as this exchange. Prefer a distinct species if required by the selected LCIA method.

Native Elementary/Mass CAS 7440-50-8; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Native metallic-CAS convention also represents ions unless the applied LCIA differentiates them; prefer the differentiated ion where applicable. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: copper `fe0acd60-3ddc-11dd-a7a0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_copper_air`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual nickel in air outlet (`nickel_air`)

Conditional on an independently measured actual metal/ion species represented by the native metal convention in its correct air compartment. Keep particulate/dissolved speciation and chemical mass versus elemental content independent; bulk alloy fines, PM and total-metal indicators cannot be copied as this exchange. Prefer a distinct species if required by the selected LCIA method.

Native Elementary/Mass CAS 7440-02-0; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Native metallic-CAS convention also represents ions unless the applied LCIA differentiates them; prefer the differentiated ion where applicable. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: nickel `08a91e70-3ddc-11dd-96c8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_nickel_air`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual dissolved Cu(II) to fresh water (`cuion_freshwater`)

Only a real independently verified dissolved divalent ion released to fresh water within the chosen foreground gate. Whole exported spent solution, total metal, particulate metal or wastewater sent to external treatment is not this environmental release. Preserve actual concentration/species, receiving medium, flow volume and mass conversion; do not solve two unknowns with one residual.

Native Elementary/Mass CAS 15158-11-9; exact compartment Emissions / Emissions to water / Emissions to fresh water. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: copper (ii) `1fc4267e-82f9-49d2-9848-63fe45433132`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_cuion_freshwater`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual dissolved Ni(II) to fresh water (`niion_freshwater`)

Only a real independently verified dissolved divalent ion released to fresh water within the chosen foreground gate. Whole exported spent solution, total metal, particulate metal or wastewater sent to external treatment is not this environmental release. Preserve actual concentration/species, receiving medium, flow volume and mass conversion; do not solve two unknowns with one residual.

Native Elementary/Mass CAS 14701-22-5; exact compartment Emissions / Emissions to water / Emissions to fresh water. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: nickel (ii) `41e90548-2125-4f20-a437-ca5d083fec53`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_niion_freshwater`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual fossil molecular CO2 outlet (`gas_co2normal`)

Only if this real species is present in actual on-site furnace/conditioning/extraction exhaust, verified independently with actual wet/dry state, full gross amount and correct receiving air. Preserve inlet throughflow separately from net formation/consumption; no generic NOx/SOx/VOC/total-carbon conversion into a molecule, no assumed complete combustion or fictional gas-fired unit. Additional actual species require their own card.

Native Elementary/Mass CAS 124-38-9; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity. The selected identity requires independently evidenced fossil carbon in actual CO2. Keep ambient inlet-throughflow and biogenic CO2 separately identified; neither automatically becomes this fossil exchange.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_co2normal`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual fossil molecular CO outlet (`gas_co`)

Only if this real species is present in actual on-site furnace/conditioning/extraction exhaust, verified independently with actual wet/dry state, full gross amount and correct receiving air. Preserve inlet throughflow separately from net formation/consumption; no generic NOx/SOx/VOC/total-carbon conversion into a molecule, no assumed complete combustion or fictional gas-fired unit. Additional actual species require their own card.

Native Elementary/Mass CAS 630-08-0; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity. The selected identity requires actual molecular CO with independently evidenced fossil-carbon origin; total carbon, ambient throughflow or biogenic CO cannot be silently assigned to it.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_co`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual molecular NO outlet (`gas_no`)

Only if this real species is present in actual on-site furnace/conditioning/extraction exhaust, verified independently with actual wet/dry state, full gross amount and correct receiving air. Preserve inlet throughflow separately from net formation/consumption; no generic NOx/SOx/VOC/total-carbon conversion into a molecule, no assumed complete combustion or fictional gas-fired unit. Additional actual species require their own card.

Native Elementary/Mass CAS 10102-43-9; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_no`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual molecular NO2 outlet (`gas_no2`)

Only if this real species is present in actual on-site furnace/conditioning/extraction exhaust, verified independently with actual wet/dry state, full gross amount and correct receiving air. Preserve inlet throughflow separately from net formation/consumption; no generic NOx/SOx/VOC/total-carbon conversion into a molecule, no assumed complete combustion or fictional gas-fired unit. Additional actual species require their own card.

Native Elementary/Mass CAS 10102-44-0; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_no2`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual fossil molecular CH4 outlet (`gas_methane`)

Only if this real species is present in actual on-site furnace/conditioning/extraction exhaust, verified independently with actual wet/dry state, full gross amount and correct receiving air. Preserve inlet throughflow separately from net formation/consumption; no generic NOx/SOx/VOC/total-carbon conversion into a molecule, no assumed complete combustion or fictional gas-fired unit. Additional actual species require their own card.

Native Elementary/Mass CAS 74-82-8; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity. The selected identity requires actual molecular CH4 of independently evidenced fossil origin; biogas/biogenic methane and ambient throughflow require their own origin-compatible accounts.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_methane`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual molecular SO2 outlet (`gas_so2`)

Only if this real species is present in actual on-site furnace/conditioning/extraction exhaust, verified independently with actual wet/dry state, full gross amount and correct receiving air. Preserve inlet throughflow separately from net formation/consumption; no generic NOx/SOx/VOC/total-carbon conversion into a molecule, no assumed complete combustion or fictional gas-fired unit. Additional actual species require their own card.

Native Elementary/Mass CAS 7446-09-5; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_so2`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual molecular N2 exhaust (`gas_n2air`)

Only if this real species is present in actual on-site furnace/conditioning/extraction exhaust, verified independently with actual wet/dry state, full gross amount and correct receiving air. Preserve inlet throughflow separately from net formation/consumption; no generic NOx/SOx/VOC/total-carbon conversion into a molecule, no assumed complete combustion or fictional gas-fired unit. Additional actual species require their own card.

Native Elementary/Mass CAS 7727-37-9; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_n2air`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual unconsumed molecular O2 exhaust (`gas_o2air`)

Only if this real species is present in actual on-site furnace/conditioning/extraction exhaust, verified independently with actual wet/dry state, full gross amount and correct receiving air. Preserve inlet throughflow separately from net formation/consumption; no generic NOx/SOx/VOC/total-carbon conversion into a molecule, no assumed complete combustion or fictional gas-fired unit. Additional actual species require their own card.

Native Elementary/Mass CAS 7782-44-7; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_gas_o2air`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Actual argon exhaust (`argon_out`)

Conditional actual Ar outlet paired with real inlet and losses, not assumed molecular formation. Native Elementary/Mass argon CAS 7440-37-1 is Emissions to air, unspecified. Preserve actual gross Ar vent mass and independent origin/throughflow; no net-formation assumption, ocean/water/soil compartment substitution or aggregate-air duplicate.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_argon_out`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

### Process: Original-cohort storage packing handling dispatch service (`p_service`)

#### Inputs

##### Product flows

###### Storage packing and handling electricity (`service_power`)

Meter actual original-cohort storage, counting, bag/box handling, dispatch, returns and postrelease operations during observed H, including actual failures. Retain work already performed even when released coins remain in stock. Use real grid/voltage/year/provider; do not charge an entire future service period. Native Product AC foreground electricity has unspecified supply technology, voltage, provider geography and mix at the actual point of use; those remain separate compatibility evidence, not invented grid defaults. One actual supplier owns the burden, distinct from gross meter MJ. H is the observed interval of real service, never an additional divisor or assumed future life.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_power`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Tap water for actual service cleaning (`service_water`)

Only actual separate water receipts/makeup cross the boundary here. Whole bought preparations/articles already containing water are counted once; actual site dilution, washing, cooling or cleaning water is additional real influx even when retained in full wet closing material. Preserve original meter units and independently measured state-specific kg for closure; m3-to-kg requires actual density; internal reuse cancels without another purchase.

Native Product is treated potable/public tap-water supply at factory production mix with Mass/kg reference and a secondary Volume property. No fixed supplier geography, CAS, grade or treatment train is prescribed; actual treatment/quality and provider boundary must match. Do not derive density from secondary-property factors. It is not count-native process water, raw abstraction, steam or a cleaning preparation; independently measure mass/state and any needed density for the actual water.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_water`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

###### Internal receipt of original first-released coin (`released_coin_internal`)

Match the same whole-coin cohort/quantity/state and manufacturing vector from finished_coin. This internal receipt creates neither external purchase nor a second Q. Released opening/closing FG stays in original manufacturing cohort; real incremental service is a separate coordinate.

Native Product is Coin, a manufactured finished article at plant production mix with Mass reference; no fixed alloy, CAS, geometry, denomination, supplier geography or process settings. The isolated comment “383 Musical instruments” is a taxonomy/comment defect, disclosed rather than read as a physical musical-instrument identity. Use only the primary-supported complete struck monometal copper-nickel circulation coin specified here; not a blank, metal disc, raw alloy, medal, token, jewellery or monetary account. The family name does not approve plated, clad, bimetallic, precious-metal, proof or coated variants.

- Selected flow: Coin `e686bde0-1244-4040-b821-d8c912ff799d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg; matching internal transfer with no new purchase/production
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_released_coin_internal`
- Sources: `ilcd-attributional-2010`

###### Customer-returned complete coin (`coin_customer_return`)

Record actual returned whole-coin physical mass/state and original delivery/cohort link, never assume it equals historical dispatched mass or restores conformity. Actual added water, contamination, losses and work remain independent. Product identity applies only to the compatible whole coin; irreversibly discarded material uses its real Waste card.

Native Product is Coin, a manufactured finished article at plant production mix with Mass reference; no fixed alloy, CAS, geometry, denomination, supplier geography or process settings. The isolated comment “383 Musical instruments” is a taxonomy/comment defect, disclosed rather than read as a physical musical-instrument identity. Use only the primary-supported complete struck monometal copper-nickel circulation coin specified here; not a blank, metal disc, raw alloy, medal, token, jewellery or monetary account. The family name does not approve plated, clad, bimetallic, precious-metal, proof or coated variants.

- Selected flow: Coin `e686bde0-1244-4040-b821-d8c912ff799d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coin_customer_return`
- Sources: `ilcd-attributional-2010`

###### Polyethylene coin bag (`pack_pe_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Separate paid procurement receipt. Only actual paid standalone or bundled whole packaging, preserving full physical V=P and one actual upstream owner. Do not count the same paid standalone or bundled receipt again as I or ER; retain one upstream burden owner. This is one polyethylene coin bag pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

Native Product/Mass polyethylene bag, CAS 9002-88-4 and PE-bag synonym, at plant production mix for packing/transport/storage; no fixed grade, dimensions, closure or geography. Bind one actual whole PE coin sachet/bag of compatible construction. Not PET, woven PP, raw film or a bag-plus-liner collection. Integral closure/carrier moisture belongs once to the whole article; separately supplied closure/liner is a disjoint new article requiring its own card. Used returns must remain physically compatible reusable Product; waste has a separate Waste identity.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pe_p`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Polyethylene coin bag (`pack_pe_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. first non-purchased external ingress. Only first non-purchased receipt of this same packaging, standalone or unpaid supplier-attached. Preserve full physical V=I for actual first non-purchased receipt, with one inherited upstream owner; a paid bundled packaging receipt belongs to P rather than I even without a separate invoice; never omit the real mass or buy it twice. This is one polyethylene coin bag pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

Native Product/Mass polyethylene bag, CAS 9002-88-4 and PE-bag synonym, at plant production mix for packing/transport/storage; no fixed grade, dimensions, closure or geography. Bind one actual whole PE coin sachet/bag of compatible construction. Not PET, woven PP, raw film or a bag-plus-liner collection. Integral closure/carrier moisture belongs once to the whole article; separately supplied closure/liner is a disjoint new article requiring its own card. Used returns must remain physically compatible reusable Product; waste has a separate Waste identity.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pe_i`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Polyethylene coin bag (`pack_pe_er`)

External return received. Only actual empty/loaded reusable article returned from outside; preserve full V=ER, real condition, cohort/return owner and burden vector. An external return is not new production/purchase; contaminated/discarded waste needs its real Waste route. This is one polyethylene coin bag pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

Native Product/Mass polyethylene bag, CAS 9002-88-4 and PE-bag synonym, at plant production mix for packing/transport/storage; no fixed grade, dimensions, closure or geography. Bind one actual whole PE coin sachet/bag of compatible construction. Not PET, woven PP, raw film or a bag-plus-liner collection. Integral closure/carrier moisture belongs once to the whole article; separately supplied closure/liner is a disjoint new article requiring its own card. Used returns must remain physically compatible reusable Product; waste has a separate Waste identity.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pe_er`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Corrugated shipping carton (`pack_carton_p`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_carton_p`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Corrugated shipping carton (`pack_carton_i`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_carton_i`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Corrugated shipping carton (`pack_carton_er`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_carton_er`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Wood transport pallet (`pack_pallet_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Separate paid procurement receipt. Only actual paid standalone or bundled whole packaging, preserving full physical V=P and one actual upstream owner. Do not count the same paid standalone or bundled receipt again as I or ER; retain one upstream burden owner. This is one wood transport pallet pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

Native Product/Mass family is a manufactured wooden portable load platform at plant production mix; the comment also includes collars/platform variants. Narrow here to one complete actual wood pallet, not its separate repair board, a fixed EURO pallet, plastic rack or a whole machinery asset. Declare wood/fasteners/integral moisture and actual new/used state; no fixed trips or life. Whole article’s contained components are not repurchased; independently supplied repair parts remain separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pallet_p`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Wood transport pallet (`pack_pallet_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. first non-purchased external ingress. Only first non-purchased receipt of this same packaging, standalone or unpaid supplier-attached. Preserve full physical V=I for actual first non-purchased receipt, with one inherited upstream owner; a paid bundled packaging receipt belongs to P rather than I even without a separate invoice; never omit the real mass or buy it twice. This is one wood transport pallet pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

Native Product/Mass family is a manufactured wooden portable load platform at plant production mix; the comment also includes collars/platform variants. Narrow here to one complete actual wood pallet, not its separate repair board, a fixed EURO pallet, plastic rack or a whole machinery asset. Declare wood/fasteners/integral moisture and actual new/used state; no fixed trips or life. Whole article’s contained components are not repurchased; independently supplied repair parts remain separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pallet_i`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Wood transport pallet (`pack_pallet_er`)

External return received. Only actual empty/loaded reusable article returned from outside; preserve full V=ER, real condition, cohort/return owner and burden vector. An external return is not new production/purchase; contaminated/discarded waste needs its real Waste route. This is one wood transport pallet pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

Native Product/Mass family is a manufactured wooden portable load platform at plant production mix; the comment also includes collars/platform variants. Narrow here to one complete actual wood pallet, not its separate repair board, a fixed EURO pallet, plastic rack or a whole machinery asset. Declare wood/fasteners/integral moisture and actual new/used state; no fixed trips or life. Whole article’s contained components are not repurchased; independently supplied repair parts remain separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pallet_er`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Steel blank transport drum (`pack_drum_p`)

This P card records paid procurement of this same qualified article, standalone or bundled; non-purchased first ingress and true returns use I and ER. Separate paid procurement receipt. Only actual paid standalone or bundled whole packaging, preserving full physical V=P and one actual upstream owner. Do not count the same paid standalone or bundled receipt again as I or ER; retain one upstream burden owner. This is one steel blank transport drum pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

- Selected flow: Steel blank transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_drum_p`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Steel blank transport drum (`pack_drum_i`)

This I card records first non-purchased receipt of this same qualified article: standalone gift, loan, rental/pool issue or unpaid supplier-attached receipt. Supplier-delivery examples below are a subset, not an exclusive origin condition. Exclude paid P and true ER. first non-purchased external ingress. Only first non-purchased receipt of this same packaging, standalone or unpaid supplier-attached. Preserve full physical V=I for actual first non-purchased receipt, with one inherited upstream owner; a paid bundled packaging receipt belongs to P rather than I even without a separate invoice; never omit the real mass or buy it twice. This is one steel blank transport drum pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

- Selected flow: Steel blank transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_drum_i`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Steel blank transport drum (`pack_drum_er`)

External return received. Only actual empty/loaded reusable article returned from outside; preserve full V=ER, real condition, cohort/return owner and burden vector. An external return is not new production/purchase; contaminated/discarded waste needs its real Waste route. This is one steel blank transport drum pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

- Selected flow: Steel blank transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_drum_er`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Sawn wood pallet repair board (`repair_wood_in`)

One actual separately received sawn wood board, not a whole pallet or manufactured particleboard. New/used state, species, coating, fasteners separately supplied and actual moisture are recorded; retained closing board mass does not erase real influx.

- Selected flow: Sawn wood pallet repair board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair_wood_in`
- Sources: `ilcd-attributional-2010`

###### Steel pallet repair nail (`repair_steel_in`)

One actual independently supplied steel nail, not whole wood pallet/drum/bearing. Count only additions outside integral whole-article components; preserve real mass even when retained in closing packaging. Native Product/Mass steel-fastener family is at-plant GLO production mix for fabrication/assembly; the complete family includes nails and has no fixed coating, grade or supplier. Narrow this card to its one actual independently supplied compatible steel nail, with metallurgy/finish and actual new/used state documented; no copper/aluminium substitution or second whole-pallet provider.

- Selected flow: Steel fasteners `ebfe08f5-42c8-484e-b39a-684a35981c24`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair_steel_in`
- Sources: `ilcd-attributional-2010`

##### Waste flows

##### Elementary flows

###### Atmospheric H2O vapour uptake (`service_humidity_in`)

Record independently evidenced natural humidity uptake by blanks/coins, packaging, tools and stores during real handling/storage as well as any operation. Preserve the complete incoming mass and full wet closing stocks together. This is not tap-water supply, liquid mist or a second purchase of water inside a supplied wet article; natural humidity exchange requires no invented repair permit.

- Selected flow: Atmospheric H2O vapour uptake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_humidity_in`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

#### Outputs

##### Product flows

###### Gross dispatched complete coin (`coin_dispatch`)

Record actual external gross physical G in the real accepted state, original cohort and delivery identifiers; it is a full gross-leg V, not net sales, new production or an allocated burden vector. Full returns/redeliveries are separate and never create new Q.

Native Product is Coin, a manufactured finished article at plant production mix with Mass reference; no fixed alloy, CAS, geometry, denomination, supplier geography or process settings. The isolated comment “383 Musical instruments” is a taxonomy/comment defect, disclosed rather than read as a physical musical-instrument identity. Use only the primary-supported complete struck monometal copper-nickel circulation coin specified here; not a blank, metal disc, raw alloy, medal, token, jewellery or monetary account. The family name does not approve plated, clad, bimetallic, precious-metal, proof or coated variants.

- Selected flow: Coin `e686bde0-1244-4040-b821-d8c912ff799d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_coin_dispatch`
- Sources: `ilcd-attributional-2010`

###### Polyethylene coin bag (`pack_pe_s`)

Gross physical shipment. Only real article leaving with gross physical goods shipment; V=S is complete packaging mass regardless of net sales or economic shares. Keep the product Q independent and article tare separate from coin net mass. This is one polyethylene coin bag pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

Native Product/Mass polyethylene bag, CAS 9002-88-4 and PE-bag synonym, at plant production mix for packing/transport/storage; no fixed grade, dimensions, closure or geography. Bind one actual whole PE coin sachet/bag of compatible construction. Not PET, woven PP, raw film or a bag-plus-liner collection. Integral closure/carrier moisture belongs once to the whole article; separately supplied closure/liner is a disjoint new article requiring its own card. Used returns must remain physically compatible reusable Product; waste has a separate Waste identity.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pe_s`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Polyethylene coin bag (`pack_pe_eo`)

External empty return. Only actual article returned to an external owner, with full V=EO, condition and custody receipt. Not internal reuse or an automatic coproduct/avoided-purchase credit. This is one polyethylene coin bag pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

Native Product/Mass polyethylene bag, CAS 9002-88-4 and PE-bag synonym, at plant production mix for packing/transport/storage; no fixed grade, dimensions, closure or geography. Bind one actual whole PE coin sachet/bag of compatible construction. Not PET, woven PP, raw film or a bag-plus-liner collection. Integral closure/carrier moisture belongs once to the whole article; separately supplied closure/liner is a disjoint new article requiring its own card. Used returns must remain physically compatible reusable Product; waste has a separate Waste identity.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pe_eo`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Corrugated shipping carton (`pack_carton_s`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_carton_s`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Corrugated shipping carton (`pack_carton_eo`)

One actual complete corrugated-paperboard transport carton of the declared construction and configuration, not a collection of cartons, plastic bags, film, liners or other packaging. The compatible atomic Product-flow UUID remains unresolved. Record the actual board/flute/ply configuration, fibre composition, coatings/lamination, wet condition, integral adhesives/fasteners and supplier scope; no generic fibre fraction, treatment, size, weight or lifetime is assumed. Include integral supplied constituents once within the whole carton, while actually separate inserts, tape or other materials retain their own disjoint rows and one upstream owner. Keep this card's existing P/I/ER/S/EO role as defined by the packaging boundary and raw protocol, including packaging_receipt_basis where present; a new provider identity must not change that event definition. Retain the complete measured wet gross quantity and the original event/gate/custody/cohort in the card's stated Mass/kg unit, whether immediately used or retained at closing. Keep opening/closing empty, attached and reusable stock, internal reuse and independently measured material/water-change legs; no stock, burden or economic-share correction shrinks the gross leg. Actual manufacture/service burdens are attributed once separately using the existing original-cohort rule and sole normalization; a gross receipt or outflow alone creates no new manufacture, procurement burden, provider link or credit. Resolve a physically compatible carton identity/provider before binding it; missing identity is disclosed and never replaced with a mixed packaging category or an invented UUID.

- Selected flow: Corrugated transport carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_carton_eo`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Wood transport pallet (`pack_pallet_s`)

Gross physical shipment. Only real article leaving with gross physical goods shipment; V=S is complete packaging mass regardless of net sales or economic shares. Keep the product Q independent and article tare separate from coin net mass. This is one wood transport pallet pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

Native Product/Mass family is a manufactured wooden portable load platform at plant production mix; the comment also includes collars/platform variants. Narrow here to one complete actual wood pallet, not its separate repair board, a fixed EURO pallet, plastic rack or a whole machinery asset. Declare wood/fasteners/integral moisture and actual new/used state; no fixed trips or life. Whole article’s contained components are not repurchased; independently supplied repair parts remain separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pallet_s`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Wood transport pallet (`pack_pallet_eo`)

External empty return. Only actual article returned to an external owner, with full V=EO, condition and custody receipt. Not internal reuse or an automatic coproduct/avoided-purchase credit. This is one wood transport pallet pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

Native Product/Mass family is a manufactured wooden portable load platform at plant production mix; the comment also includes collars/platform variants. Narrow here to one complete actual wood pallet, not its separate repair board, a fixed EURO pallet, plastic rack or a whole machinery asset. Declare wood/fasteners/integral moisture and actual new/used state; no fixed trips or life. Whole article’s contained components are not repurchased; independently supplied repair parts remain separate.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pallet_eo`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Steel blank transport drum (`pack_drum_s`)

Gross physical shipment. Only real article leaving with gross physical goods shipment; V=S is complete packaging mass regardless of net sales or economic shares. Keep the product Q independent and article tare separate from coin net mass. This is one steel blank transport drum pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

- Selected flow: Steel blank transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_drum_s`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Steel blank transport drum (`pack_drum_eo`)

External empty return. Only actual article returned to an external owner, with full V=EO, condition and custody receipt. Not internal reuse or an automatic coproduct/avoided-purchase credit. This is one steel blank transport drum pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

- Selected flow: Steel blank transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_drum_eo`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

##### Waste flows

###### Discarded polyethylene coin bag (`pack_pe_w`)

Segregated waste exit. Only if this packaging pool actually has its own segregated external Waste outlet; V=W is complete measured wet waste. If the real outlet is one mixed packaging stream, this conditional segregated exchange is inactive and W is instead a separately measured nonadditive pool subaccount of packaging_mixed_waste. Never emit both pool and mixed total for one physical exit; treatment/provider once. This is one polyethylene coin bag pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

- Selected flow: Discarded polyethylene coin bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pe_w`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Discarded corrugated shipping carton (`pack_carton_w`)

Segregated waste exit. Only if this packaging pool actually has its own segregated external Waste outlet; V=W is complete measured wet waste. If the real outlet is one mixed packaging stream, this conditional segregated exchange is inactive and W is instead a separately measured nonadditive pool subaccount of packaging_mixed_waste. Never emit both pool and mixed total for one physical exit; treatment/provider once. This is one corrugated shipping carton pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector. Native Waste/Mass is cardboard packaging scrap, including damaged boxes, generated during actual packing at plant GLO with treatment unspecified. Bind only the compatible separately collected cardboard outlet from this packing route; other origins or mixed exits keep their actual separate unbound/compatible identity. The native comment contains an industry-average estimate, which is not adopted as an amount, yield or site fact; independently measure the whole wet waste and its disjoint composition.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_carton_w`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Discarded wood transport pallet (`pack_pallet_w`)

Segregated waste exit. Only if this packaging pool actually has its own segregated external Waste outlet; V=W is complete measured wet waste. If the real outlet is one mixed packaging stream, this conditional segregated exchange is inactive and W is instead a separately measured nonadditive pool subaccount of packaging_mixed_waste. Never emit both pool and mixed total for one physical exit; treatment/provider once. This is one wood transport pallet pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

- Selected flow: Discarded wood transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_pallet_w`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Discarded steel blank transport drum (`pack_drum_w`)

Segregated waste exit. Only if this packaging pool actually has its own segregated external Waste outlet; V=W is complete measured wet waste. If the real outlet is one mixed packaging stream, this conditional segregated exchange is inactive and W is instead a separately measured nonadditive pool subaccount of packaging_mixed_waste. Never emit both pool and mixed total for one physical exit; treatment/provider once. This is one steel blank transport drum pool only. Whole wet article, integral lid/closure/lining and components are counted once, with disjoint supplementary material accounts; preserve full physical gross leg, never substitute stock-corrected consumption or an allocated burden vector.

- Selected flow: Discarded steel blank transport drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack_drum_w`
- Sources: `ram-coin-making-2015`; `ram-minting-process`; `ilcd-attributional-2010`

###### Single mixed packaging waste outlet (`packaging_mixed_waste`)

Only when actual pools leave through one mixed external collection. Preserve one atomic Waste exchange with independently weighed full V and each PE/carton/wood/steel pool W as nonadditive protocol subaccounts. Conditional segregated W cards are inactive for the same material/event; measured pool W sum must reconcile to total, with contaminants/water separately identified and no extra constituent treatment/provider.

Native Waste/Mass mixed packaging waste generated at plant, with mixed-material and damaged/offcut packaging context. Bind only one actual externally collected mixed packaging outlet; preserve every packaging-pool W subaccount and its independently measured total. Do not bind segregated PE, wood, steel or paper waste to this mixed identity or sum its constituents as extra external Waste exchanges. One receiver/treatment/provider applies once.

- Selected flow: Packaging waste, mixed `cf748dc8-a0d3-411f-aab6-168e7ee54a6e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging_mixed_waste`
- Sources: `ilcd-attributional-2010`

###### Removed wood pallet board (`repair_wood_out`)

Only real segregated removed board waste with full wet mass and contamination. If it joins the single mixed outlet, its W is a nonadditive wood-pool subaccount rather than another external Waste exchange.

- Selected flow: Removed wood pallet board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair_wood_out`
- Sources: `ilcd-attributional-2010`

###### Removed steel pallet nail (`repair_nail_out`)

Only actual segregated removed nail waste, retaining real metal and contamination; if included in mixed waste, retain a nonadditive steel subaccount instead of another external exchange.

- Selected flow: Removed steel pallet nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_repair_nail_out`
- Sources: `ilcd-attributional-2010`

###### Postrelease discarded copper-nickel coin (`service_rejected_coin`)

Only an actual separately discarded whole-coin stream after storage, return or postrelease work. Preserve full gross mass, added water/contamination/losses, original cohort and actual disposition. Rework requires manufacturer/specification permission and actual posttests/acceptance; actual unauthorized or failed work and waste remain recorded without assuming damage recovery, creating Q or removing original manufacturing/performed-service burden. Retain actual destruction/deformation and external recovery/treatment custody and energy even if work was unauthorized or failed. Waste departure is not a new Product release and does not erase historical manufacture or performed service.

- Selected flow: Postrelease discarded copper-nickel coin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_rejected_coin`
- Sources: `ilcd-attributional-2010`

###### Spent service cleaning water (`service_washwater_waste`)

Only an actual separately collected whole aqueous service-cleaning outlet with independently measured full wet mass, volume/density, real chemicals/solids and receiver. Contained water/ions are nonadditive subaccounts; actual natural-water release and outside treatment remain distinct, owned once.

- Selected flow: Spent service cleaning water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_washwater_waste`
- Sources: `ilcd-attributional-2010`

##### Elementary flows

###### H2O vapour to actual air (`service_h2o_out`)

Measure actual evaporation/desorption and any reaction-generated ordinary water separately by origin before the full gross outlet is combined. Natural storage/handling moisture loss is included without inventing extra operations. Liquid droplets, wastewater and free/structural water are distinct; no one residual fits multiple unknowns.

Ordinary H2O vapour only; not liquid droplets, ice, heavy/tritiated water or evapotranspiration. Native Elementary/Mass CAS 7732-18-5; exact compartment Emissions / Emissions to air / Emissions to air, unspecified. No fixed grade, provider geography or process quantity. The full synonym/comment list includes broader labels that do not override this actual species, phase, isotope/origin or medium. Use only separately evidenced compatible actual species/state in this direction. Do not infer it from total element, COD, VOC, PM, NOx/SOx, change of phase or a residual. An incompatible receiving medium needs its own verified identity.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Reuse the single section 8 complete gross-physical result for this row and original cohort; no further normalization.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service_h2o_out`
- Sources: `ram-minting-process`; `usmint-coin-production-2021`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_subdivide | all burden coordinates | Use an attributional manufacturing goal and establish whether allocation is actually needed. Assign dedicated lots/tools/operations/services first; perform real or defensible virtual subdivision before sharing any remaining burden. Industrial minting descriptions do not themselves authorize an LCA allocation factor. | ilcd-attributional-2010 |
| a_causal | each residual inseparable exchange | Identify and quantify the determining physical causal relation separately for each actual exchange and all cofunctions at the real process state; justify its driver and denominator. Do not choose mass/count/time/energy arbitrarily or apply one factor to every coordinate. Keep all real physical gross legs full and separate. | ilcd-attributional-2010 |
| a_residual | genuinely remaining joint-process burdens | Only a documented remainder after subdivision and exchange-specific causality may use contemporaneous actual market values in the actual condition at the common process gate or relevant treatment-input gate. Preserve all cofunctions, price/gate adjustments/currency/period and sensitivity; face denomination, precious-metal value or retail coin value is not the environmental denominator or a default allocation key. No fixed recovery ratio or automatic avoided-primary-metal credit. | ilcd-attributional-2010 |
| a_waste | ordinary failures and material/service losses | Ordinary manufacture waste, rejects, samples and their treatment remain assigned to original manufacturing/service even when exported or sold. A vector transfer T_other requires a real distinct other function/cohort plus justified allocation/handover and receipt, applied once; external departure alone is insufficient. Physical gross amounts remain full. Any broader recycling/system-model decision needs evidence beyond this manufacturing rule. | ilcd-attributional-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Every protocol collects and retains undivided raw readings, stocks and ownership vectors. The aggregation_rule field declares the basis of the eventual result view only; it does not divide the collected raw fields. Section 8 single_quotient is the only normalization, with full gross V and its separate consumption/burden coordinate ownership explicitly distinguished.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | p_mint | finished_coin | release and weighing | original cohort/configuration/alloy/surface state; raw gross/tare/net kg; calibration/uncertainty; complete coin count; first release/hold/failures/destructive samples; opening/closing released FG; dated authorized acceptance record; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Weigh same-configuration released complete net coins on calibrated scales with separately established packaging/free-liquid tare; reconcile counted pieces/surface/moisture/specification and unique first release; no assumed coin mass. | kg; Item(s) | each lot and first-release event | complete manufacturing observation including failures and zero output | actual original matched configuration/cohort at this gate | per reference flow | calibration/weighing originals/specification and acceptance/cohort uniqueness/uncertainty |
| cp_blank_receipt | p_mint | blank_receipt | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_mint_power | p_mint | mint_power | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | MJ | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_mint_water | p_mint | mint_water | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_mint_humidity_in | p_mint | mint_humidity_in | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_mint_h2o_out | p_mint | mint_h2o_out | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_service_power | p_service | service_power | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | MJ | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_service_water | p_service | service_water | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_service_humidity_in | p_service | service_humidity_in | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_service_h2o_out | p_service | service_h2o_out | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_citric_powder | p_mint | citric_powder | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_coin_cleaner | p_mint | coin_cleaner | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_antitarnish_additive | p_mint | antitarnish_additive | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_stamping_lubricant | p_mint | stamping_lubricant | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_protective_nitrogen | p_mint | protective_nitrogen | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_furnace_natural_gas | p_mint | furnace_natural_gas | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | m3 | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_external_heat | p_mint | external_heat | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | MJ | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_external_steam_mass | p_mint | external_steam_mass | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_external_hotwater_mass | p_mint | external_hotwater_mass | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_condensate_return | p_mint | condensate_return | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_hotwater_return | p_mint | hotwater_return | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_coin_die_asset | p_mint | coin_die_asset | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_press_asset | p_mint | press_asset | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_replacement_bearing_in | p_mint | replacement_bearing_in | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_removed_bearing_out | p_mint | removed_bearing_out | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_maintenance_oil_in | p_mint | maintenance_oil_in | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_spent_oil_out | p_mint | spent_oil_out | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_released_coin_internal | p_service | released_coin_internal | internal matching record | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_coin_dispatch | p_service | coin_dispatch | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_coin_customer_return | p_service | coin_customer_return | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_rejected_coin_waste | p_mint | rejected_coin_waste | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_metal_fines_waste | p_mint | metal_fines_waste | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_spent_cleaning_liquid | p_mint | spent_cleaning_liquid | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_coin_wash_sludge | p_mint | coin_wash_sludge | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_copper_air | p_mint | copper_air | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_nickel_air | p_mint | nickel_air | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_cuion_freshwater | p_mint | cuion_freshwater | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_niion_freshwater | p_mint | niion_freshwater | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_gas_co2normal | p_mint | gas_co2normal | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_gas_co | p_mint | gas_co | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_gas_no | p_mint | gas_no | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_gas_no2 | p_mint | gas_no2 | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_gas_methane | p_mint | gas_methane | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_gas_so2 | p_mint | gas_so2 | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_gas_n2air | p_mint | gas_n2air | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_gas_o2air | p_mint | gas_o2air | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_oxygen_ingress | p_mint | oxygen_ingress | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_nitrogen_ingress | p_mint | nitrogen_ingress | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_ambient_co2_in | p_mint | ambient_co2_in | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_argon_in | p_mint | argon_in | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_argon_out | p_mint | argon_out | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pe_p | p_service | pack_pe_p | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pe_i | p_service | pack_pe_i | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pe_er | p_service | pack_pe_er | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pe_s | p_service | pack_pe_s | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pe_eo | p_service | pack_pe_eo | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pe_w | p_service | pack_pe_w | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_carton_p | p_service | pack_carton_p | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_carton_i | p_service | pack_carton_i | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_carton_er | p_service | pack_carton_er | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_carton_s | p_service | pack_carton_s | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_carton_eo | p_service | pack_carton_eo | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_carton_w | p_service | pack_carton_w | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pallet_p | p_service | pack_pallet_p | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pallet_i | p_service | pack_pallet_i | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pallet_er | p_service | pack_pallet_er | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pallet_s | p_service | pack_pallet_s | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pallet_eo | p_service | pack_pallet_eo | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_pallet_w | p_service | pack_pallet_w | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_drum_p | p_service | pack_drum_p | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_drum_i | p_service | pack_drum_i | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence ; packaging receipt origin; payment/non-purchase evidence; owner/custodian; same-item prior outward ID | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges.  For packaging only, apply packaging_receipt_basis; standalone non-purchase is I, never invented ER or X. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_drum_er | p_service | pack_drum_er | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_drum_s | p_service | pack_drum_s | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_drum_eo | p_service | pack_drum_eo | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_pack_drum_w | p_service | pack_drum_w | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_packaging_mixed_waste | p_service | packaging_mixed_waste | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_repair_wood_in | p_service | repair_wood_in | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_repair_steel_in | p_service | repair_steel_in | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_repair_wood_out | p_service | repair_wood_out | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_repair_nail_out | p_service | repair_nail_out | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_service_rejected_coin | p_service | service_rejected_coin | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_service_washwater_waste | p_service | service_washwater_waste | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_spent_striking_die | p_mint | spent_striking_die | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |
| cp_retired_coin_press | p_mint | retired_coin_press | raw physical event and linked ownership | event/original cohort/configuration/H; this card direction and physical event; undivided original amount/unit/rate-or-cumulative flag; complete gross V; phase/composition/medium/density evidence; opening/closing raw/WIP/non-WIP/FG/installed charge; per-flow inherited vector; one provider/treatment owner; failures/hold/rework/missingness; actual_originating_process_id; actual_row_id; event_id; real_direction; physical_gate; original_cohort_Q_c; observed_H_not_divisor; actual_F_in_F_out; OTHER_same_side_duplicate_X_in_X_out_evidence | Use calibrated scales/meters and original custody records for this specific real card event; independently verify composition/medium and rate integration/density state; never invent quantities, replace gaps by zero or repurchase. For each packaging pool collect independent P/I/ER/gross S/EO/W and empty/attached/reusable wet stocks, independently measured mixed total and nonadditive pool W, with disjoint actual whole-article/supplemental part-water bridges. | kg | each real event and opening/closing cutoff | complete manufacture or original-cohort service H including all failures/idle/cleanup | same physical gate/direction/process as this card; disjoint cohorts and stores | per reference flow | calibration/supply and custody originals/SDS or species analysis/phase-medium/stocktake/treatment receipts/completeness and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| raw_units | all inventory rows | Preserve original readings before normalization. Convert actual g to kg by 0.001 and kWh to MJ by 3.6 only when these actual units apply; preserve each row native extensive property. Integrate true rates over measured time, never multiply already integrated liquid/gas volume by time. Volume-to-mass requires independently measured substance/state density, never a generic secondary-property coefficient. | raw_value; raw_unit; state; duration; density | U_j | ilcd-attributional-2010 |
| physical_consumption | ordinary consumed-material coordinates | For the same disjoint physical pool use N_j = O_j + U_j - C_j - H_j, with only legitimate documented non-target physical handoff H_j; include opening/closing raw/WIP and non-WIP stores exactly once. Already stock-corrected consumption is used directly, without a second O-C adjustment. This N is distinct from full gross-leg V and from environmental vectors; ordinary waste is not H_j and cannot erase its embodied consumption. | O_j; U_j; C_j; H_j; stock_basis | N_j | ilcd-attributional-2010 |
| manufacturing_vectors | p_mint burden coordinates | A_make_c = B_open_c + U_burden_c - B_close_c - T_other_c. B carries per-flow inherited vectors of raw/WIP and only unused/unassigned non-WIP material/service charges; exclude all released FG. U contains each compatible upstream provider and actual manufacturing/test/ordinary-waste-treatment loads once, including failures/idle/cleanup/rework/Q-zero. No production deduction for released FG still held. Match all internal vectors; T_other needs a real distinct function/cohort and justified receipt. | B_open_c; U_burden_c; B_close_c; T_other_c | A_make_c | ilcd-attributional-2010 |
| service_vectors | p_service burden coordinates | A_service_c_H = S_open_unused_c + U_service_c_H - S_close_unused_c - T_service_other_c_H. Keep real performed original-cohort service even when FG is still held; carry only unused/unassigned service/material charge, not performed work. Physical FG opening/closing/returns carry historical manufacture and service vectors for custody reconciliation without treating held released FG as new manufacture or subtracting its production. Record actual gross G/R and original delivery reversal bridge if an alternative net-delivery model is ever proposed; this PCR fixes first release, so that alternative is not silently substituted. | S_open_unused_c; U_service_c_H; S_close_unused_c; T_service_other_c_H | A_service_c_H | ilcd-attributional-2010 |
| packaging_balance | each physical packaging pool | For each PE bag/carton/wood pallet/steel drum independently use O_pack + P + I + ER + F_in - X_in = C_pack_wet + gross S + EO + W + F_out - X_out. O and C include complete empty, attached WIP/FG and reusable wet stocks once. F_in/F_out are independently measured real additional material/water/part contributions entering/leaving this pool outside its other gross terms. X_in/X_out remove ONLY the proved overlapping portion already in an OTHER same-side actual incoming/outgoing flow term; a stock, opposite-side flow, card presence or unmeasured assumption is never an X. Real added repair material/water retained at closing remains both actual influx and complete closing wet mass. Use whole wet articles OR a disjoint measured component/water decomposition, with explicit matching internal component-to-article bridges that cancel on consolidation. Do not add constituents to their whole or net gross receipt/dispatch by returns. For one actual mixed Waste outlet choose one independently weighed total OR its complete independently measured origin-W partitions with the same single provider and nonadditive composition ledger; never sum both or force unknown shares from a residual. Distinct actual segregated outlets remain distinct. | O_pack; P; I; ER; C_pack_wet; S; EO; W; F_in; F_out; X_in; X_out | physical_pool_closure | ilcd-attributional-2010 |
| mass_species_closure | manufacture and FG and consolidated gates | Independently reconcile full gross physical mass and relevant Cu/Ni/C/H/O/N/other actual elements using raw non-WIP/WIP/FG, assets/parts/fills, each wet package, thermal carriers and every actual incoming/outgoing gas/liquid/solid species. Keep free, reaction, phase and structural water separate, with reaction evidence for reaction water. Assay/total element/COD/VOC/PM are not molecular identities. Full wet stocks and real influx coexist; one residual cannot fit two unknowns. No aggregate air or whole waste plus additive species duplication. At each physical gate reconcile opening full entities + external gross inputs + matched internal inputs = closing full entities + external gross outputs + matched internal outputs, by each real mass coordinate, before internal cancellation. Net accepted-coin Q excludes packaging/free water while physical wet FG retains its separately measured attached water/contamination bridge. Asset receipts/retirements, installed parts/fills and each inherited exchange vector remain distinct from consumed N or assigned A. | gross_legs; wet_stocks; species; assays; state; independent_measurements | closure_residual_and_uncertainty | ilcd-attributional-2010 |
| single_quotient | all inventory rows | For original cohort c and observed horizon H choose exactly one undivided numerator per coordinate: full actual gross physical V_j_c_H for every gross-disclosure card; target N_j for its separately identified consumed-material coordinate; A_make_c or A_service_c_H for its separate environmental-burden coordinate. Execute result_j_c_H = numerator_j_c_H / Q_c exactly once. Card amounts and protocol aggregation reference this identical result, never re-stock-correct or economically allocate gross V, never divide twice and never add physical and burden coordinates. Reference output and matching internal transfer are 1 kg. Q_c=0 retains all actual raw loads and yields no per-unit result; cohorts/configurations and horizons remain separate. H only selects the actually observed service interval; never divide its accrued load by H again. Q_c remains the original first-release mass even for held, returned or subsequently failed coins. | V_j_c_H; N_j; A_make_c; A_service_c_H; Q_c; cp_release | result_j_c_H | ilcd-attributional-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all bound/unresolved cards | Preserve actual configuration/all native restrictions/official Chinese name and real provider compatibility; absent UUID retains concrete flow and applicability gap. | complete direct record/supplier specification/species analysis/permission and state evidence |
| dq_time | all cohorts and service | Fix observation period/original Q_c/H; retain all failed/zero-output/unauthorized/rework loads and disposition. Performed service is not deducted for held FG. | event ledger/meters/original delivery-return/acceptance/stock vectors |
| dq_balance | physical and burden coordinates | Full gross physical amounts unscaled economically; every package six legs/single mixed outlet exclusivity/real additions/removals F and OTHER same-side duplicate X/full wet stocks/tool assets and services separate, with per-flow vector closure; unknown residuals remain pending. Apply packaging_balance F/X definitions and whole-wet/component exclusivity; no stock or opposite-side cancellation. | independent measurements/stocktake/assay/custody and burden ownership/uncertainty |
| dq_sources | each modelling rule | Distinguish original acquisition/reuse from current extraction/read/agent applicability, retaining failures; industrial sources are not LCA allocation authority; no factory quantities fabricated from nominal examples. | complete original/context/counterexamples/original-extraction hashes/applicability limits |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | reference and each adopted flow | Verify whole manufactured monometal copper-nickel coin terminal and actual blank supply state, every native basename/synonym/comment/CAS/grade/route/form/geography/media/type/property restriction and official Chinese display. A classifier or name alone is insufficient; hard material/phase/route conflicts block that binding. No monetary denominator or secondary-mass-derived default M. | ram-five-cents; ram-coin-making-2015 |
| v_complete | all actual operations and rows | Require every real material/preparation/water/energy/tool/packaging/waste/species event and all raw fields/ten card fields/qualifiers/descriptions/protocols/calculation Inputs/Output/source_ids/quality evidence in both renderings and projection, including complete heading/ancestor applicability. Unknown relationships are review-required, never invented zero or a claimed pass. | ilcd-attributional-2010 |
| v_accounts | all gates and coordinates | Verify first-release Q_c exactly once, closing released FG treatment, original-cohort actual service, full gross packaging six legs and disjoint mixed/segregated outlets, wet stock/real additions/removals F and OTHER same-side duplicate X, raw/WIP/non-WIP inherited vectors, internal handoff cancellation, native numerator units, physical/element/species closure, and one normalization. No external sale/removal alone permits burden deduction or credit. Apply packaging_balance F/X definitions and whole-wet/component exclusivity; no stock or opposite-side cancellation. | ilcd-attributional-2010 |
| v_no_defaults | factory instance | Do not supply assumed alloy percentages, item mass, thickness/diameter, pressure/speed/temperature/time, recipe, yield, lifetime, wear, inspection limits or certification values. Actual specification permission/posttests/acceptance/disposition is mandatory for any real postrelease work; actual unauthorized or failed events remain fully inventoried. | ram-minting-process; usmint-coin-production-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Evidence-bound first-release manufacturing vector and separate actual service, clearly distinguishing physical-gross disclosure/consumption activity/environmental burden coordinates |
| allowed_use | Attributional manufacturing studies with compatible configuration/alloy/surface/terminal/supply state/period/upstream |
| excluded_use | Purchasing-power/face-value comparisons; default life/wear/recycling credit; unstruck/bimetal/plated/precious-metal/proof branches; unproven cradle-to-gate completeness |
| required_metadata | manufacturer/site/reporting period; declared single monometal homogeneous copper-nickel configuration and actual alloy assay; unplated/unclad/non-bimetal surface state; actual blank supplier and completed upstream operations; real annealing/cleaning/upsetting/lubrication/coining/testing sequence; actual specification acceptance and net-mass calibration/tare; first-release cohort Q_c and observed service horizon H; full raw/WIP/non-WIP burden vectors and released FG gross/return ledger; whole formulation composition and on-site blending boundary; actual energy/grid/thermal-carrier state and provider convention; every packaging pool six legs and full wet stocks; actual species/phase/media and independent elemental closure; assets/tool service and real new/used repair parts/fills; all failed/unauthorized/start-stop/idle/cleanup/Q-zero work; subdivision/causality/residual-gate evidence and uncertainty |
| required_quality_disclosure | Distinguish engineering from scientific/translation review, source scope, ordinary UUID/provider gaps, true core holds, unmeasured/unknown scope and uncertainty; nominal data or checks do not establish full coverage |
| update_trigger | Changed product/alloy/surface/supplied blank state/actual manufacturing terminal/native identity/Q gate/original-cohort service/provider or treatment boundary/material species |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Coin subclass and adjacent jewellery/other-article classification context only; not methodology acceptance or a creation mandate. |
| ram-five-cents | official_guidance | Royal Australian Mint, Five Cents. https://ramint.gov.au/collect/national-coin-collection/circulating-coins/five-cents | Positive complete copper-nickel circulating-coin product identity; nominal composition/dimensions/counts are not imposed on a generic factory instance. |
| ram-coin-making-2015 | official_guidance | Royal Australian Mint, The coin-making process, educational factsheet (2015 PDF metadata), complete pp.1–2. https://www.ramint.gov.au/sites/default/files/2025-04/factsheets-coin-making-process.pdf | Supplied blanks shipped in drums and downstream whole striking/packing terminal; environmental tooling/service collection context only, no design or operating settings transferred. |
| ram-minting-process | official_guidance | Royal Australian Mint, Minting process. https://www.ramint.gov.au/collect/coin-production/minting-process | Rimming/coining and inspection/counting/bagging/storage distinctions; proof/collector conditioning as contrary context, not a universal circulating-coin route or numeric factory recipe. |
| ram-about-coins-2015 | official_guidance | Royal Australian Mint, About our coins, complete three-page educational factsheet. https://ramint.gov.au/sites/default/files/2025-04/factsheets-about-australian-coins.pdf | Copper-nickel manufactured coin evidence with adjacent silver/copper and aluminium-alloy/noncircular counterexamples; historical effigy and nominal figures are not defaults or current approval. |
| usmint-coin-production-2021 | official_guidance | U.S. Mint, Coin Production, Stephanie Meredith with Denver/Philadelphia staff, April 2021; current full article. https://www.usmint.gov/learn/production-process/coin-production | Conditional actual annealing/quench/wash/upsetting/coining/reject/pack architecture and separate coil versus bought-planchet states; no copied machine settings, formulation dose or same-SKU claim. |
| royalmint-blank-bank | official_guidance | The Royal Mint Museum, From Blank to Bank exhibition. https://www.royalmint.com/the-royal-mint-experience/explore-the-exhibition/from-blank-to-bank/ | Complete blank-to-manufactured-coin context and explicit plated-steel/metal-preparation countercontext; no transfer of UK plant recipe, lifetime, trial standards or design guidance. |
| ilcd-attributional-2010 | handbook | European Commission JRC, ILCD Handbook: General guide for LCA — Detailed guidance, first edition March 2010, sections 7.9.2–7.9.3, PDF pp.275–292 / printed pp.255–272. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctionality framework: subdivision/virtual subdivision, exchange-specific determining physical causality and genuinely residual common-gate market value; accounting rules below are explicit product-method derivations, not a claim this Handbook gives mint data or automatic recycling credit. |
