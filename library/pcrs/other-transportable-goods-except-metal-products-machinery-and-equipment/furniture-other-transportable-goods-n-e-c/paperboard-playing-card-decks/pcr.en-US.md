---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.paperboard-playing-card-decks
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Complete paperboard playing-card deck manufacture

## 1. Scope and Applicability

This method addresses real complete paperboard playing-card decks: supplied card stock, printing, actual surface finishing, cutting/corner rounding, collation and first quality release supported by complete primary manufacturer descriptions. A deck is not a single sheet, board, ink or box. This is a transparent technical synthesis of compatible primary sources, not a claim of one SKU, factory or order; capabilities do not supply factory activity quantities. Stock may contain an opaque middle, supplier coat or additives as actually supplied. No default recipe, card count, dimensions, yield, mass, density, temperature/time, life, age, certification or emission factor is specified. All-plastic/PVC, metal-foil, electronic and special security routes need separate evidence and cannot inherit the paperboard method.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.paperboard-playing-card-decks |
| classification_refs | CPC 3.0 38570; narrower product and route boundary |
| covered_products | Complete printed and surface-finished paperboard playing-card decks with actual collated card configuration; actual rounded or separately declared other final cut shape |
| excluded_products | 100% plastic decks; digital card games; smart/magnetic cards; loose generic printed images; board-game boards/tokens; packaging as the reference product; special metal foil/electronics/security chemistry without separate evidence |
| representative_product | One complete paperboard playing-card deck of the actual released design and list; net cards include actual retained stock/ink/finish/moisture and exclude removable box/wrap |
| production_route | Complete supplied card stock → prepress/printing → actual surface finishing/setting → actual cutting/corner rounding → configuration-specific collation/QC/first release → actual packaging/storage/handling/dispatch; outsourced intermediate burdens preserved without duplicate in-house production |
| market_state | New complete net physical deck first quality released at the manufacturing gate; subsequent actual services attached to the original cohort over a declared horizon |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide complete physical paperboard playing-card decks of the declared card list |
| How much | 1 kg complete newly first-released net decks |
| How well | Complete configuration and actual print/surface/cut/corner/quality acceptance under the real specification; no default performance or certification |
| How long or cycle | Actual cohort manufacture and observed actual-service horizon H; no gameplay lifetime |
| reference_flow_link | first_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Playing cards `cb9becdd-f6bc-402d-bcd6-cf80a2a11b1b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual deck design and complete card identity/count/sequence list; independently weighed complete net deck and lot mass with calibrated scale and packaging tare; stock supplier and complete layered supply form including opaque middle and supplier coating/additives/moisture where present; actual dimensions and cut geometry with actual corners and configuration; each actual supplied ink colour/formulation/grade/carrier/CAS/carbon origin and separately added material; actual varnish composition and application/setting route without default polymer or cure schedule; actual print/cut/collation/quality specification and first-release timestamps/authorization; failed/zero-output/start-stop/idle/cleanup/sample/rework history; site and reporting period with original first-release cohort and actual service horizon; opening/closing raw/WIP/non-WIP/FG wet masses and every inherited exchange vector; gross FG legs and each packaging pool six legs and natural water exchange; native identity restrictions and actual unit/property/provider matching; actual molecular species/phase/medium/carbon origin and independent mass/element balances; allocation basis and one-time burden ownership with true unresolved gaps |

Retain every qualifier with the actual data package. Q is newly first-quality-released complete net product mass once; actual retained constituents and water count once and packaging is excluded. The complete first_release card also preserves native product restrictions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q = sum of independently weighed complete newly first-released net deck masses for the actual cohort; exclude removable packaging. Released closing FG is already in Q. Do not infer deck mass from nominal card count, dimensions, grammage or boxed gross weight. |
| native_units | each individual exchange | Actual native extensive property | row-specific | Preserve each actual kg/MJ/kWh/m3/h numerator independently. Energy is not Mass. Convert raw units before attribution; integrated volumes are not rates. Density requires independent measurement of that substance and state; no secondary-property inference. Number of items to item has factor 1 only as a physical unit alias and never supplies kg per deck. |
| single_division | all inventory rows | Declared reference-product Mass | kg | Protocols collect raw quantities only. c_once is the only division by cohort Q; every card and aggregation refers to that same result. Full gross physical leg V is never replaced by a stock-corrected, economic or service-burden numerator. Provider burden A is a separate dimension with one-time ownership. Q=0 keeps actual loads without a unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual complete supplied unprinted card stock and separate auxiliaries/utilities cross the plant gate; outsourced intermediate full history is retained with no duplicated in-house route |
| starting_condition_role | foreground_collection_gate |
| product_classification_scope | CPC 3.0 38570 physical paperboard-deck subset; the terminal is a complete collated net deck |
| recursive_input_rule | A bought complete deck is not raw card stock; repacking creates neither manufacture nor new Q. Actual original-cohort returns retain gross legs/history and equal internal handoffs cancel |
| upstream_dataset_requirement | Each actual whole stock/preparation/plate/packaging supply, utility, delivery and treatment matches form/route/state/unit/geography; upstream once |
| disclosure | Complete product/card list/supply/route, site/period/cohort/H, raw quantities/gross legs, wet stocks/inherited vectors, allocation/providers and true gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | complete route | Include actual preparation, make-ready, complete supplied stock, printing, surface treatment/setting, trimming/corner operation, actual deck collation, testing/first release and actual packing/handling/storage/dispatch. Record stages separately within one aggregate process and preserve losses, samples, rejected jobs and start-stop/idle/cleanup loads. | cartamundi-solutions;cartamundi-guide;fournier-quality |
| b_supply | supplied articles and formulations | One complete purchased stock or formulation has one upstream owner; opacity layers, supplier coat, formulation assay, carrier water and active ingredients are non-additive subaccounts. Actual onsite added preparation ingredients are separate real purchases with energy/losses. Bought preprinted intermediates and in-house equivalent components are disjoint or bridged with internal equal transfers cancelled. | fournier-quality;epa-offset-2006 |
| b_qgate | first-release and FG | Q is only newly first-quality-released complete net deck mass. One release remains counted when held as FG; do not add its closing mass to output or subtract its manufacturing burden. Returns/reinspection/redispatch are gross real events linked to original cohort and never new Q. Preserve opening/closing FG full wet physical mass and inherited history; aggregate internal production-to-FG Q cancels. Net-delivery-based modelling is outside this denominator and needs a complete independent delivery/return/reversal/history bridge. | fournier-quality;ilcd-allocation-2010 |
| b_services | postrelease work and uncertainty | Keep actual services performed for each original cohort within actual horizon H, even for stored FG; future unperformed service is unknown. Actual postrelease rework requires manufacturer/spec permission, postwork tests, acceptance and disposition evidence, but missing permission, failed tests or rejection never delete actual logistics/loads: retain original cohort and real hold/waste state. Natural sorption/desorption does not imply an invented repair operation or permit. | fournier-quality;ilcd-allocation-2010 |
| b_pack | each real packaging pool | Retain opening/closing empty, WIP-attached, FG-attached and reusable wet stock and six actual gross P/I/ER/S/EO/W legs in individual cards. P/I supplies are disjoint and supplier-included mass and one upstream owner remain explicit. Internal reuse cancels; no second procurement, product Q or automatic coproduct credit. X only de-duplicates another same-side flow term; full new influx and full wet closing stock coexist. A single actual mixed waste outlet has non-additive independently measured pool W subaccounts. | printninja-card-production;cartamundi-guide |
| b_atoms | physical streams | Add every additional actual material, individual supplied formulation, energy/fuel, fluid, new/old part, physical asset, waste outlet and molecular species as a specific atomic row with correct direction/type/phase/medium/native property. Conditional absence needs evidence; missing observations are not zero. Whole article and its ingredients must be disjoint or reconciled. No other/input/output basket hides actual manufacture. | epa-offset-2006;ilcd-allocation-2010 |
| b_species | mass and elements | Close full physical wet mass and each relevant element independently from actual molecular/phase and reaction-water evidence. Measure natural H2O uptake/release during manufacture and ordinary storage/handling; retain real influx even in closing stock. Distinguish free/phase/retained/structural/reaction water. Do not fit two unknowns from one residual, assign COD/VOC/NOx/PM indicators to a molecular mass, multiply integrated volumes by time or use water density for another substance. | epa-offset-2006;ilcd-allocation-2010 |
| b_utilities | utilities and assets | No boiler, steam loop, fuel route or fixed dryer is presumed. Where real, record carrier kg/phase/T/P/enthalpy and actual returned Product plus delivered heat MJ under one supplier agreement; no duplicate whole-provider demand. Distinguish full gross asset/part/fluid stock movements from actual fulfilled capital service; no fixed life, per-kg whole machine or scaling of physical mass by burden share. | ilcd-allocation-2010 |
| b_upstream | upstream and downstream | Link compatible actual stock, pulp/paper/coating, ink, plate, each auxiliary, utility, delivery and treatment backgrounds once. The foreground is complete deck manufacture, not bought-finished-deck repacking. Packaging is separate from net deck output. Gameplay, digital/software, retail, use life and downstream final disposal require separate models; no universal game performance, certification or service life is asserted. | cartamundi-solutions;fournier-quality |

### Complete applicability and accounting context

This method addresses real complete paperboard playing-card decks: supplied card stock, printing, actual surface finishing, cutting/corner rounding, collation and first quality release supported by complete primary manufacturer descriptions. A deck is not a single sheet, board, ink or box. This is a transparent technical synthesis of compatible primary sources, not a claim of one SKU, factory or order; capabilities do not supply factory activity quantities. Stock may contain an opaque middle, supplier coat or additives as actually supplied. No default recipe, card count, dimensions, yield, mass, density, temperature/time, life, age, certification or emission factor is specified. All-plastic/PVC, metal-foil, electronic and special security routes need separate evidence and cannot inherit the paperboard method.

Retain every qualifier with the actual data package. Q is newly first-quality-released complete net product mass once; actual retained constituents and water count once and packaging is excluded. The complete first_release card also preserves native product restrictions.

Retain stage subledgers: supply/prepress → print → finish/set → cut/corner → collate/inspect/first release → pack/handle/store/dispatch. Every physical card uses its complete actual gross leg V as c_once numerator; the separate provider-burden dimension A is assigned once. Physical disclosure itself never triggers procurement, provider load or credit. Actual original-cohort services retain original Q and observed H, never another current-period cohort output.

Protocols collect unnormalised raw quantities and actual states only. Their aggregation_rule identifies the same reference basis and performs no numeric normalization; the only division is c_once.

The exact native whole Product is Playing cards / 纸牌, production mix at plant, finished product manufactured, with Mass/kg reference. Preserve its complete original comments “Flow for Playing cards” and “出牌流程”; the loose Chinese comment is not silently rewritten or used alone to infer a gameplay Process. The complete Product type, manufactured state, actual physical deck family and full primary stock/printing/cutting/collation evidence together support this narrower complete paperboard deck. A sheet, ingredient, packaging or gameplay service cannot substitute. Actual grade/provider and field qualification still require evidence. Sources: fournier-quality;cartamundi-solutions;cartamundi-guide.

First acceptance means the complete actual card identity/count/sequence and all genuinely required print, surface, cut, collation and final packing-line checks have been completed. If actual approval occurs after boxing/sealing/wrapping, every necessary pre-release packaging operation remains manufacturing work even though removable packaging mass is excluded from net Q. If a genuinely complete accepted deck is released before later optional packing, keep the actual gate instead of inventing another compulsory stage. Subsequent real services use original cohort and observed H; source descriptions do not establish a universal release location or count threshold. Sources: fournier-quality;printninja-card-production.

Lock Q (original Q0) as the positive sum of unique complete-deck first-acceptance net masses at one fixed actual gate and measured state. Retain original event mass/date and a disjoint original-basis bridge of remaining net deliveries, every actual on-site accepted state including FG/holds/accepted samples/repair WIP, irreversible material/water losses and other terminal dispositions. Already accepted later destroyed decks remain in Q0; never-accepted destroyed samples do not enter Q. Returns/retests/rework/redispatch and later moisture change create no new reference event. Never restore lost water/material into survivors and count the loss again. Q0 is an event account, not another external physical output; Q=0 or unknown basis preserves raw totals without a unit result.

For each burden-vector dimension use L_open+L_new=A_cohort+A_true_other+L_close. L_new is the actual new material/service/provider/work/treatment burden addition before stock-consumption correction. L_open/close cover raw/WIP or genuinely unused/unassigned stores/service charges, never already first-accepted FG or performed service. Already stock-corrected consumption uses a reconciled equivalent ledger without opening/closing correction again. Own foreground/WIP history and provider aggregates versus included expanded inventories are not added twice. Ordinary waste/sample/reject sales do not create a real other function or automatic burden transfer. Physical stocks/transfers stay independent.

Keep three ledgers for every shared treatment/asset/packaging event: the one full actual receiver transfer Qt and complete actual provider quantity recorded once; independently known component/physical-cohort provenance; and distinct evidenced nonoverlapping environmental/treatment-service vectors per served original cohort in compatible provider units. Qt/Qanalysis is physical disclosure on a declared positive observation basis only; modeled demand uses attributable A/original Q0 or actual service A_h/original Qc. Never recharge full shared Qt to every cohort or shrink physical export by service shares. Unknown assignment remains unresolved; service shares and physical component origin are different evidence.

One contaminated tuck box/carton/film/pallet/cloth/filter waste is the whole actual wet receiver quantity including substrate, retained ink/glue/cleaner/residue and water once. Dry substrate and retained contents are nested nonadditive subledgers, not extra attached-material exports or repeated treatment demand unless truly separated before the boundary. Actual separately collected trim/ink/effluent streams remain distinct; mixed-only origins are children of one real mixed outlet. Full actual fleets/stocks/receiver/provider quantities do not shrink with service attribution.

For each real same-unit whole-wet package pool use O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. P separate purchase and I supplier-included ingress are disjoint. ER is an actual inward returned article with real empty/filled state; if filled, match net contents and packaging component inside one full receipt. S is actual filled outward shipment including real returned contents; EO only empty outward to supplier/other recipient. J and H2O are independently measured disjoint actual repair/retained increments and departures. X_in/out only reconcile duplicate OTHER same-side constituent terms before this balance, never another positive physical influx/outflux, actual P/I/ER, wet C, opposite leg or genuine retained water. Substrate-only balances link to whole contaminated W through composition, not forced equal mass. Returns create no new Q/cofunction/credit.

Synthetic checks only, not an empirical fraction/lifetime/default: one 10kg contaminated filter containing8kg substrate+2kg retained material serves old/new cohorts; receiver/provider quantity is10kg once. Independently evidenced hypothetical25%/75% compatible-unit treatment service gives2.5/7.5kg-equivalent modeled vectors, and original Qnew100kg/Qold200kg gives0.025/0.0375kg-equivalent per kg reference. Not2.5kg physical export and not full10kg demand again for both. A separate package check O2+P3+I1+ER4+actual retained1=C3+S4+EO2+wholeW2=11kg uses Wsubstrate1+retained1 nested once. Actual counts need independent records; no kg/item or installed filter inferred.

Preserve exact native electricity Net calorific value / 净热值, 低位热值 and energy-unit-group MJ. kWh times3.6 is electrical unit conversion only, not fuel calorific value or boiler evidence. This selected supply is CN grid-average to user at1–35kV, not a default low-voltage or European factory mix. Genuine on-site voltage conversion/utility production and losses remain in actual complete producers. Every actual combustion/treatment/steam/condensate operation requires its full real material/air/water/species/fuel/heat interfaces and provider convention; no assumed burner, fixed dryer or paper outsourcing.

The ink identity admits only an actual whole non-water-dissolved solvent/oil-based planographic preparation satisfying all native comments and grade/setting evidence, not water-based or UV/EB formulations by use-name alone. Each actual colour/SKU is separate; carrier/assay constituents are children, not duplicate purchases. The corn-starch identity is only actual whole unmodified corn/maize-starch powder with the native route/form; coated/modified/blended anti-setoff products need their own whole identity, never pure starch as proxy. Native moisture/sulfite examples and odd broad synonym strings do not supply recipes or measured moisture. Molecular gases require actual CAS/phase/origin/medium and independent speciation, not isotope/charcoal aliases or COD/VOC/NOx totals.

Preserve complete primary limits: Fournier distinguishes paper stock with actual opaque-glue/varnish construction from100%PVC, describes cutting and whole-deck QC, and makes55-card/12-check/performance claims that are not universal acceptance or recipe defaults. Do not infer supplied prevarnished stock versus actual postprint coating from a finished construction sentence without actual supply evidence. Cartamundi pages describe capabilities; its guide dimensions/bleeds/radii/CMYK coverage are design examples, not mass or chemical recipes or current legal certification. PrintNinja describes both rotary combined cutting/rounding and separate trim/smooth-round operations, optional linen embossing before cut, concurrent collation, real tuck-bottom glue/assembly/sealing and shrink heat. These alternatives are not simultaneously mandatory or quantitative independent factory LCI. Retain each actual operation and separate genuine make/buy providers once. Sources: cartamundi-production;cartamundi-solutions;cartamundi-guide;cartamundi-uk;fournier-quality;printninja-card-production.

EPA2006 is historical printing guidance: plate→blanket→substrate, conventional sheetfed absorption/oxidation versus heatset evaporation or radiation cure, and distinct ink/fountain/cleaning sources. Its retained/emitted percentages, alcohol shares and control/legal thresholds are not actual factory values or current obligations here. Keep whole formulations, true setting/reaction evidence, actual phase water and identified molecules independent; an unestablished essential matrix procedure remains a concrete-study hold. ILCD applies only in a justified attributional allocation-needed setting: subdivision/virtual subdivision and exchange-specific determining causality precede residual actual common-gate values. No recycling/QFD credit or future-SOP/checkpass waiver. Sources: epa-offset-2006;ilcd-allocation-2010.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| deck_manufacture | Complete deck manufacture and actual cohort services | required | Actual paperboard-deck structure and declared route; conditional exchanges only when real | foreground | 1 kg reference flow |

Retain stage subledgers: supply/prepress → print → finish/set → cut/corner → collate/inspect/first release → pack/handle/store/dispatch. Every physical card uses its complete actual gross leg V as c_once numerator; the separate provider-burden dimension A is assigned once. Physical disclosure itself never triggers procurement, provider load or credit. Actual original-cohort services retain original Q and observed H, never another current-period cohort output.

### Process: Complete deck manufacture (`deck_manufacture`)

#### Inputs

##### Product flows

###### Unprinted supplied playing-card stock sheet (`stock`)

One actual complete supplied card-stock article before printing, with its real fibre layers, opacity layer, supplier coatings, fillers, additives and moisture included once. Record complete supply form and upstream owner; contained black glue/coating is a non-additive component subledger, not a second purchase. Plain generic board for optical assembly is not this selection.

- Selected flow: Unprinted supplied playing-card stock sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_inputs`
- Sources: `fournier-quality`

###### Printed and varnished playing-card stock sheet (`printed_stock`)

Conditional actual outsourced intermediate with its complete stock/ink/finish history. Choose disjoint supplied-intermediate versus in-house raw-stock/ink/finish legs, or use a reconciled component bridge with equal internal handoffs cancelled. It is not the finished deck and does not erase upstream printing burdens.

- Selected flow: Printed and varnished playing-card stock sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_inputs`
- Sources: `cartamundi-solutions`; `fournier-quality`

###### black supplied offset ink (`ink_black`)

One whole supplied black ink preparation only when that colour is actually used; record the colour and exact SKU separately from all other inks. Purchase its carrier and ingredients once, with assay and retained/evaporated constituents as non-additive subaccounts. Use only one actual colour of whole as-supplied non-water solvent/oil-based planographic paste ink compatible with offset/lithographic printing. Native synonyms positively include offset and lithographic ink; no fixed heatset or radiation-cure route is specified. The native comment describes oil-based solvents and possible glycol-ether/glycol-ester carriers: those examples are not a compulsory recipe or permission to assume a dryer. Confirm the actual grade, complete formulation, carrier, CAS constituents, carbon origin, setting mechanism and supplier background. Water-dissolved, UV/EB, incompatible heatset and other hard-incompatible formulations do not use this binding.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_formulations`
- Sources: `epa-offset-2006`

###### cyan supplied offset ink (`ink_cyan`)

One whole supplied cyan ink preparation only when that colour is actually used; record the colour and exact SKU separately from all other inks. Purchase its carrier and ingredients once, with assay and retained/evaporated constituents as non-additive subaccounts. Use only one actual colour of whole as-supplied non-water solvent/oil-based planographic paste ink compatible with offset/lithographic printing. Native synonyms positively include offset and lithographic ink; no fixed heatset or radiation-cure route is specified. The native comment describes oil-based solvents and possible glycol-ether/glycol-ester carriers: those examples are not a compulsory recipe or permission to assume a dryer. Confirm the actual grade, complete formulation, carrier, CAS constituents, carbon origin, setting mechanism and supplier background. Water-dissolved, UV/EB, incompatible heatset and other hard-incompatible formulations do not use this binding.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_formulations`
- Sources: `epa-offset-2006`

###### magenta supplied offset ink (`ink_magenta`)

One whole supplied magenta ink preparation only when that colour is actually used; record the colour and exact SKU separately from all other inks. Purchase its carrier and ingredients once, with assay and retained/evaporated constituents as non-additive subaccounts. Use only one actual colour of whole as-supplied non-water solvent/oil-based planographic paste ink compatible with offset/lithographic printing. Native synonyms positively include offset and lithographic ink; no fixed heatset or radiation-cure route is specified. The native comment describes oil-based solvents and possible glycol-ether/glycol-ester carriers: those examples are not a compulsory recipe or permission to assume a dryer. Confirm the actual grade, complete formulation, carrier, CAS constituents, carbon origin, setting mechanism and supplier background. Water-dissolved, UV/EB, incompatible heatset and other hard-incompatible formulations do not use this binding.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_formulations`
- Sources: `epa-offset-2006`

###### yellow supplied offset ink (`ink_yellow`)

One whole supplied yellow ink preparation only when that colour is actually used; record the colour and exact SKU separately from all other inks. Purchase its carrier and ingredients once, with assay and retained/evaporated constituents as non-additive subaccounts. Use only one actual colour of whole as-supplied non-water solvent/oil-based planographic paste ink compatible with offset/lithographic printing. Native synonyms positively include offset and lithographic ink; no fixed heatset or radiation-cure route is specified. The native comment describes oil-based solvents and possible glycol-ether/glycol-ester carriers: those examples are not a compulsory recipe or permission to assume a dryer. Confirm the actual grade, complete formulation, carrier, CAS constituents, carbon origin, setting mechanism and supplier background. Water-dissolved, UV/EB, incompatible heatset and other hard-incompatible formulations do not use this binding.

- Selected flow: Solvent-based planographic printing ink `38e48719-f415-4f0f-a3e7-2893d2fbaffd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_formulations`
- Sources: `epa-offset-2006`

###### As-supplied playing-card overprint varnish (`varnish`)

One actual complete purchased overprint-varnish formulation, including supplied carrier, only where the declared paperboard deck is varnished. Do not infer aqueous/PVC/acrylic/UV chemistry or the native gloss-paint drying schedule. Capture supplier specification, wet preparation and retained coat separately without adding the coat or carrier again.

- Selected flow: As-supplied playing-card overprint varnish
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_formulations`
- Sources: `fournier-quality`

###### As-supplied offset fountain concentrate (`fountain_concentrate`)

One actual fountain concentrate purchased as a complete preparation, distinct from separately added water or alcohol. Record actual dilution, bath opening/closing wet mass and component fate. If ready-to-use complete solution is supplied instead, use a disjoint whole-solution row rather than duplicate dilution ingredients.

- Selected flow: As-supplied offset fountain concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_formulations`
- Sources: `epa-offset-2006`

###### As-supplied offset-press blanket wash (`blanket_wash`)

One actual whole supplied offset blanket/roller wash, including its carrier. Require formulation, supplier use and state; inkjet printhead cleaner is not compatible evidence. Actual washing loss, retained liquid, contaminated cloth and final species are collected separately.

- Selected flow: As-supplied offset-press blanket wash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_formulations`
- Sources: `epa-offset-2006`

###### Supplied isopropanol (`ipa_input`)

Conditional separately purchased molecular isopropanol CAS 67-63-0 added onsite; do not add what is already in a supplied whole formulation. Capture actual purity, carrier and solution ownership; no default alcohol percentage or density.

- Selected flow: Supplied isopropanol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_formulations`
- Sources: `epa-offset-2006`

###### Finished imaged aluminium offset printing plate (`plate`)

Actual complete ready-imaged coated aluminium plate entering the press; bare cut/grained/anodized substrate and a polystyrene PS article are not substitutes. For onsite plate making, add each true purchased plate/preparation and actual development water/energy/waste, with the internal finished plate handoff cancelled. Record make-ready and failed plates.

- Selected flow: Finished imaged aluminium offset printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_inputs`
- Sources: `cartamundi-production`; `epa-offset-2006`

###### Corn-starch anti-setoff powder (`anti_setoff`)

Conditional actual single corn-starch anti-setoff powder preparation; verify source and supply form instead of assuming it is present or that other powders are chemically identical. Its carriers/ingredients are not bought a second time. Only actual unmodified corn/maize-starch powder from the described sulfite-soak, crushing, screening, sedimentation, drying and grinding route, supplied as one whole material at plant. Native comments mention slight fat/protein and strong hygroscopicity; their stated process/moisture examples are not factory defaults, a formulation recipe or a measured delivery-water fraction. Confirm actual supply route, powder form, additives and moisture. Modified/coated anti-setoff blends or other starches require separate compatible identities; no duplicate whole-preparation plus constituents.

- Selected flow: corn starch `982918a4-54b1-4792-9ee5-2f3155d4e929`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_inputs`
- Sources: `epa-offset-2006`

###### Supplied cotton press-cleaning cloth (`cloth`)

Conditional one actual supplied cotton cleaning-cloth article. Track new/returned cloth and actual laundering separately; no generic textile bundle or second purchase on internal reuse.

- Selected flow: Supplied cotton press-cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_inputs`
- Sources: `epa-offset-2006`

###### Alternating current (`electricity`)

Measure each real stage meter and shared-support causal remainder, including prepress, make-ready, printing, coating, cutting, collation, QC, packing, idle, failed jobs and actual postrelease services. No drying heat or emission factor is inferred from electricity. Conditional binding only for actual CN 1–35 kV alternating-current grid-average consumption mix delivered to the user. It is not low-voltage, a named renewable tariff, electricity generation or a voltage-conversion service. Reference property is Net calorific value through the verified energy unit group with MJ reference; convert metered kWh exactly by 3.6 before attribution. Match period and provider; any different voltage, geography or route needs its own compatible identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `cartamundi-production`; `epa-offset-2006`

###### Tap water (`water`)

Separately supplied liquid water for real fountain preparation, cleaning or other demonstrated operation; preserve the separate use subledger and wet opening/closing baths. Volume already integrated by a meter is not multiplied by time; kg conversion needs independently measured substance-specific density and state. One separately supplied treated municipal liquid tap-water Product at plant under the native water-production/supply route. Local treatment and source vary and require matching background. Mass is the reference through kg; the secondary volume coefficient is not a measured density and must not be used as a default. Whole purchased ink, varnish or concentrate carrier water is not purchased again here.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `epa-offset-2006`

###### Purchased process heat (`heat`)

Only a real external heat service, measured MJ at the declared delivery/return enthalpy boundary and supplier convention; no steam, boiler, furnace, temperature or heat requirement is presumed. Heat already in metered electricity or a complete steam-provider demand is not purchased again.

- Selected flow: Purchased process heat
- Flow property / unit: Actual thermal energy / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `ilcd-allocation-2010`

###### Supplied industrial natural gas (`gas`)

Conditional actual onsite auxiliary gas use, not presumed conventional ink drying. Collect composition, actual fuel mass/volume, T/P/compressibility and independently determined heating value; no furnace-specific row, fixed methane fraction or automatic emission factor.

- Selected flow: Supplied industrial natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `ilcd-allocation-2010`

###### Supplied water steam heat carrier (`steam_in`)

Conditional actual external steam physical gross inlet. Measure kg, water phase/quality, T/P and specific enthalpy independently; couple to the one real supplier demand and heat account, not a second purchase. No onsite boiler circuit is implied.

- Selected flow: Supplied water steam heat carrier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `ilcd-allocation-2010`

###### Playing cards (`fg_return`)

Actual previously released deck physically returned from outside, recorded at full current measured mass and original delivery link; trace original cohort, retained/new water, losses and burden history. Reinspection or return does not create new first-release output. Incompatible damaged material becomes its true held/waste state; do not apply a finished Product identity to waste. One complete collated physical paperboard playing-card deck of the declared design and actual card list. The native identity is a manufactured finished Product at-plant production mix with Mass reference; it is not a printing service, uncut sheet, box, software or a durability service. No fixed card count, mass, stock composition or performance follows from the generic family. The original Chinese comment literally reads 出牌流程. Admission here is an explicit inference from the complete EN/ZH names, Product type, finished at-plant state, Mass reference and actual primary physical-deck evidence together; the comment is not rewritten and CPC metadata alone is insufficient. Match the actual primary manufacturer construction and release configuration.

- Selected flow: Playing cards `cb9becdd-f6bc-402d-bcd6-cf80a2a11b1b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_fg`
- Sources: `fournier-quality`

###### Treatment of actual printing-shop solid waste (`solid_treatment`)

Conditional one actual external treatment service for its linked waste outlet and state; record actual recipient, treatment route and measured service unit. If treatment is onsite collect each real input and final species instead; no duplicate offsite service or default credit.

- Selected flow: Treatment of actual printing-shop solid waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ilcd-allocation-2010`

###### Treatment of actual printing wastewater (`liquid_treatment`)

Conditional one actual external treatment service for its linked waste outlet and state; record actual recipient, treatment route and measured service unit. If treatment is onsite collect each real input and final species instead; no duplicate offsite service or default credit.

- Selected flow: Treatment of actual printing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `ilcd-allocation-2010`

###### tuck separate external purchase (`tuck_p`)

One tuck pool event: separate external purchase. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap.

- Selected flow: Finished printed paperboard tuck box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### tuck supplier-included physical ingress (`tuck_i`)

One tuck pool event: supplier-included physical ingress. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap.

- Selected flow: Finished printed paperboard tuck box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### tuck external return received (`tuck_er`)

One tuck pool event: external return received. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap.

- Selected flow: Finished printed paperboard tuck box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### carton separate external purchase (`carton_p`)

One carton pool event: separate external purchase. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap.

- Selected flow: Finished corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### carton supplier-included physical ingress (`carton_i`)

One carton pool event: supplier-included physical ingress. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap.

- Selected flow: Finished corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### carton external return received (`carton_er`)

One carton pool event: external return received. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap.

- Selected flow: Finished corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### film separate external purchase (`film_p`)

One film pool event: separate external purchase. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. One actual finished polyethylene film article, CAS 9002-88-4, at-plant production mix and Mass/kg. Native branching variants do not identify a measured grade or gauge; record actual polymer, additives, form, thickness, grade and provider. The comment compares PET with PE but does not make PET the selected polymer. PET, PVC, polypropylene, granulate and incompatible laminated structures do not use this film identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### film supplier-included physical ingress (`film_i`)

One film pool event: supplier-included physical ingress. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. One actual finished polyethylene film article, CAS 9002-88-4, at-plant production mix and Mass/kg. Native branching variants do not identify a measured grade or gauge; record actual polymer, additives, form, thickness, grade and provider. The comment compares PET with PE but does not make PET the selected polymer. PET, PVC, polypropylene, granulate and incompatible laminated structures do not use this film identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### film external return received (`film_er`)

One film pool event: external return received. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. One actual finished polyethylene film article, CAS 9002-88-4, at-plant production mix and Mass/kg. Native branching variants do not identify a measured grade or gauge; record actual polymer, additives, form, thickness, grade and provider. The comment compares PET with PE but does not make PET the selected polymer. PET, PVC, polypropylene, granulate and incompatible laminated structures do not use this film identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### pallet separate external purchase (`pallet_p`)

One pallet pool event: separate external purchase. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. One assembled whole wooden pallet used as a portable platform for one unit load handled, stored or transported by mechanical appliances. Native manufactured Product family also contains box pallets, platforms and collars; those alternatives are not extra items in this card. Use only the actual complete pallet with measured wet mass, species/composition, attached fasteners, treatment, condition and supplier. This is not the boards/slats-only row, a repair plank, a steel nail or an automatic credit on return.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### pallet supplier-included physical ingress (`pallet_i`)

One pallet pool event: supplier-included physical ingress. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. One assembled whole wooden pallet used as a portable platform for one unit load handled, stored or transported by mechanical appliances. Native manufactured Product family also contains box pallets, platforms and collars; those alternatives are not extra items in this card. Use only the actual complete pallet with measured wet mass, species/composition, attached fasteners, treatment, condition and supplier. This is not the boards/slats-only row, a repair plank, a steel nail or an automatic credit on return.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### pallet external return received (`pallet_er`)

One pallet pool event: external return received. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. One assembled whole wooden pallet used as a portable platform for one unit load handled, stored or transported by mechanical appliances. Native manufactured Product family also contains box pallets, platforms and collars; those alternatives are not extra items in this card. Use only the actual complete pallet with measured wet mass, species/composition, attached fasteners, treatment, condition and supplier. This is not the boards/slats-only row, a repair plank, a steel nail or an automatic credit on return.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### Untreated sawn pallet repair wood (`repair_wood`)

Actual separately added repair wood, not a whole pallet; record species, moisture, treatment and full gross input even when retained in closing pallet stock.

- Selected flow: Untreated sawn pallet repair wood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `printninja-card-production`

###### Finished steel pallet repair nail (`repair_nail`)

Actual new steel nail, not steel sheet or whole pallet; retain full gross input and embedded mass once. One actual finished steel nail within the broad steel-fastener Product family, used as an auxiliary in actual assembly at plant in China. Native type is unspecified; synonyms list bolts/screws/nuts/rivets without establishing a nail grade, coating or supplier. The broad family is physically compatible only with a real steel fastener of the declared nail shape; record steel composition, coating, finished condition and measured wet/attached mass. It is not raw steel, sheet, plastic, a complete pallet, or a whole machine; other geography or hard form/route conflicts need another identity.

- Selected flow: Steel fasteners `691b2092-38f6-4125-bfb4-cab3d86af41f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `printninja-card-production`

###### As-supplied paperboard-box closure adhesive (`pack_glue`)

One real whole purchased box-closure adhesive; no default PVAc chemistry, polymer CAS, solids or water fraction. Exclude adhesive already included in the complete bought box.

- Selected flow: As-supplied paperboard-box closure adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `printninja-card-production`

###### Industrial sheetfed offset press (`press_acquisition`)

One actual press physical acquisition; equipment type, configuration, serial/asset identity and real operating history are required. Physical opening/closing installed stock and this full gross asset leg are recorded independently of service attribution. New/old parts and installed fluids must each be added as actual specific atomic flows with wet stock reconciliation; no service share scales hardware mass or grants a retirement credit.

- Selected flow: Industrial sheetfed offset press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

###### Fulfilled industrial sheetfed offset press service (`press_service`)

One actual press fulfilled equipment service; equipment type, configuration, serial/asset identity and real operating history are required. Collect actual fulfilled hours and exchange-specific service burden for the original first-release cohort and actual observation horizon; unperformed future service is unknown. No fixed life, default utilization or one machine per kg. Already performed service is not removed because FG remains stored; only genuinely unused/unassigned charge may carry forward.

- Selected flow: Fulfilled industrial sheetfed offset press service
- Flow property / unit: Time / h
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

###### Playing-card varnish coating unit (`coater_acquisition`)

One actual coater physical acquisition; equipment type, configuration, serial/asset identity and real operating history are required. Physical opening/closing installed stock and this full gross asset leg are recorded independently of service attribution. New/old parts and installed fluids must each be added as actual specific atomic flows with wet stock reconciliation; no service share scales hardware mass or grants a retirement credit.

- Selected flow: Playing-card varnish coating unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

###### Fulfilled playing-card varnish coating unit service (`coater_service`)

One actual coater fulfilled equipment service; equipment type, configuration, serial/asset identity and real operating history are required. Collect actual fulfilled hours and exchange-specific service burden for the original first-release cohort and actual observation horizon; unperformed future service is unknown. No fixed life, default utilization or one machine per kg. Already performed service is not removed because FG remains stored; only genuinely unused/unassigned charge may carry forward.

- Selected flow: Fulfilled playing-card varnish coating unit service
- Flow property / unit: Time / h
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

###### Playing-card cutting and corner-rounding unit (`cutter_acquisition`)

One actual cutter physical acquisition; equipment type, configuration, serial/asset identity and real operating history are required. Physical opening/closing installed stock and this full gross asset leg are recorded independently of service attribution. New/old parts and installed fluids must each be added as actual specific atomic flows with wet stock reconciliation; no service share scales hardware mass or grants a retirement credit.

- Selected flow: Playing-card cutting and corner-rounding unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

###### Fulfilled playing-card cutting and corner-rounding unit service (`cutter_service`)

One actual cutter fulfilled equipment service; equipment type, configuration, serial/asset identity and real operating history are required. Collect actual fulfilled hours and exchange-specific service burden for the original first-release cohort and actual observation horizon; unperformed future service is unknown. No fixed life, default utilization or one machine per kg. Already performed service is not removed because FG remains stored; only genuinely unused/unassigned charge may carry forward.

- Selected flow: Fulfilled playing-card cutting and corner-rounding unit service
- Flow property / unit: Time / h
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

###### Playing-card deck collating and inspection unit (`collator_acquisition`)

One actual collator physical acquisition; equipment type, configuration, serial/asset identity and real operating history are required. Physical opening/closing installed stock and this full gross asset leg are recorded independently of service attribution. New/old parts and installed fluids must each be added as actual specific atomic flows with wet stock reconciliation; no service share scales hardware mass or grants a retirement credit.

- Selected flow: Playing-card deck collating and inspection unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

###### Fulfilled playing-card deck collating and inspection unit service (`collator_service`)

One actual collator fulfilled equipment service; equipment type, configuration, serial/asset identity and real operating history are required. Collect actual fulfilled hours and exchange-specific service burden for the original first-release cohort and actual observation horizon; unperformed future service is unknown. No fixed life, default utilization or one machine per kg. Already performed service is not removed because FG remains stored; only genuinely unused/unassigned charge may carry forward.

- Selected flow: Fulfilled playing-card deck collating and inspection unit service
- Flow property / unit: Time / h
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

##### Waste flows

##### Elementary flows

###### oxygen (`oxygen_in`)

Actual measured atmospheric O2 inlet for actual oxidative setting, combustion or ventilation; no inlet inferred solely to force a balance. Molecular O2, CAS 7782-44-7, taken as an elementary renewable element resource from air, Mass/kg. Only actual air uptake in the declared physical ledger is recorded; the synonym list containing liquid oxygen does not turn this atmospheric resource into purchased bottled gas or water. Reaction uptake and unreacted throughput require independent measurements and must not duplicate aggregate air.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### dinitrogen (`nitrogen_in`)

Actual measured atmospheric N2 gross inlet in the chosen physical air gate. Molecular N2, CAS 7727-37-9, elementary renewable element resource from air, Mass/kg. This is not total nitrogen excluding N2 and not a purchased nitrogen gas. Measure the actual gross inlet separately from the molecular N2 outlet; do not derive it from a NOx total or a default dry-air fraction.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### argon (`argon_in`)

Actual measured atmospheric Ar gross inlet in the chosen physical air gate. Ar, CAS 7440-37-1, elementary renewable element resource from air, Mass/kg. Use actual measured molecular/atomic argon air uptake, independently from N2, O2 and H2O and from the outlet. Do not also count aggregate air, bottled industrial gas or a fixed air-composition fraction.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### Atmospheric water vapour uptake (`humidity_in`)

Actual H2O uptake into stock, WIP, FG or packaging during ordinary handling/storage as well as manufacturing, measured independently of other mass changes. No repair permission or additional operation is invented for natural sorption; preserve full wet closing stock and this real influx together.

- Selected flow: Atmospheric water vapour uptake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### Atmospheric molecular carbon dioxide uptake (`ambient_co2_in`)

Actual molecular atmospheric CO2 entering the selected gross physical air gate, independently measured in its real gas state. Do not assume concentration or carbon-origin allocation; it is not purchased industrial CO2, net sequestration or a fossil-emission correction credit.

- Selected flow: Atmospheric molecular carbon dioxide uptake
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `ilcd-allocation-2010`

#### Outputs

##### Product flows

###### Returned liquid water condensate (`condensate_return`)

Conditional actual external Product return to the heat supplier, with full gross kg, liquid phase, T/P and enthalpy. Do not infer an equal return, subtract it silently from intake, turn it into a Waste or grant an automatic energy/material credit.

- Selected flow: Returned liquid water condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `ilcd-allocation-2010`

###### Playing cards (`fg_ship`)

Actual gross external shipment of a complete net deck, packaging excluded, measured independently of returns and first release. This is a physical dispatch disclosure, not a second production quantity, purchase or automatic provider demand. Preserve all original cohort links and actual hold decisions. One complete collated physical paperboard playing-card deck of the declared design and actual card list. The native identity is a manufactured finished Product at-plant production mix with Mass reference; it is not a printing service, uncut sheet, box, software or a durability service. No fixed card count, mass, stock composition or performance follows from the generic family. The original Chinese comment literally reads 出牌流程. Admission here is an explicit inference from the complete EN/ZH names, Product type, finished at-plant state, Mass reference and actual primary physical-deck evidence together; the comment is not rewritten and CPC metadata alone is insufficient. Match the actual primary manufacturer construction and release configuration.

- Selected flow: Playing cards `cb9becdd-f6bc-402d-bcd6-cf80a2a11b1b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_fg`
- Sources: `fournier-quality`

###### Playing cards (`first_release`)

Quantitative reference: one newly first-quality-released complete net deck configuration; the declared 1 kg is a normalization of actual cohort Q, not a claimed deck weight. First release transfers into the FG ledger internally; matching transfer cancels in the combined physical gate. Closing released FG is already within Q and is not added as another production output or removed as manufacturing burden carryover. One complete collated physical paperboard playing-card deck of the declared design and actual card list. The native identity is a manufactured finished Product at-plant production mix with Mass reference; it is not a printing service, uncut sheet, box, software or a durability service. No fixed card count, mass, stock composition or performance follows from the generic family. The original Chinese comment literally reads 出牌流程. Admission here is an explicit inference from the complete EN/ZH names, Product type, finished at-plant state, Mass reference and actual primary physical-deck evidence together; the comment is not rewritten and CPC metadata alone is insufficient. Match the actual primary manufacturer construction and release configuration.

- Selected flow: Playing cards `cb9becdd-f6bc-402d-bcd6-cf80a2a11b1b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_release`
- Sources: `cartamundi-guide`; `fournier-quality`

###### tuck gross physical shipment outward (`tuck_s`)

One tuck pool event: gross physical shipment outward. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap.

- Selected flow: Finished printed paperboard tuck box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### tuck external return outward (`tuck_eo`)

One tuck pool event: external return outward. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap.

- Selected flow: Finished printed paperboard tuck box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### carton gross physical shipment outward (`carton_s`)

One carton pool event: gross physical shipment outward. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap.

- Selected flow: Finished corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### carton external return outward (`carton_eo`)

One carton pool event: external return outward. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap.

- Selected flow: Finished corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### film gross physical shipment outward (`film_s`)

One film pool event: gross physical shipment outward. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. One actual finished polyethylene film article, CAS 9002-88-4, at-plant production mix and Mass/kg. Native branching variants do not identify a measured grade or gauge; record actual polymer, additives, form, thickness, grade and provider. The comment compares PET with PE but does not make PET the selected polymer. PET, PVC, polypropylene, granulate and incompatible laminated structures do not use this film identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### film external return outward (`film_eo`)

One film pool event: external return outward. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. One actual finished polyethylene film article, CAS 9002-88-4, at-plant production mix and Mass/kg. Native branching variants do not identify a measured grade or gauge; record actual polymer, additives, form, thickness, grade and provider. The comment compares PET with PE but does not make PET the selected polymer. PET, PVC, polypropylene, granulate and incompatible laminated structures do not use this film identity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### pallet gross physical shipment outward (`pallet_s`)

One pallet pool event: gross physical shipment outward. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. One assembled whole wooden pallet used as a portable platform for one unit load handled, stored or transported by mechanical appliances. Native manufactured Product family also contains box pallets, platforms and collars; those alternatives are not extra items in this card. Use only the actual complete pallet with measured wet mass, species/composition, attached fasteners, treatment, condition and supplier. This is not the boards/slats-only row, a repair plank, a steel nail or an automatic credit on return.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### pallet external return outward (`pallet_eo`)

One pallet pool event: external return outward. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. One assembled whole wooden pallet used as a portable platform for one unit load handled, stored or transported by mechanical appliances. Native manufactured Product family also contains box pallets, platforms and collars; those alternatives are not extra items in this card. Use only the actual complete pallet with measured wet mass, species/composition, attached fasteners, treatment, condition and supplier. This is not the boards/slats-only row, a repair plank, a steel nail or an automatic credit on return.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### Externally returned liquid water (`liquid_water_return`)

Only an actual external Product water return distinct from condensate and wastewater; measure full gross kg and state, with one original supplier convention. Do not manufacture a loop or use burden allocation to shrink the return.

- Selected flow: Externally returned liquid water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_utilities`
- Sources: `ilcd-allocation-2010`

##### Waste flows

###### Printed varnished paperboard card-trimming waste (`card_trim`)

Only actual separately exported paperboard trimmings. Wet mass includes retained coatings/ink/water once; no waste-sheet food-log or packaging-only identity.

- Selected flow: Printed varnished paperboard card-trimming waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `epa-offset-2006`; `fournier-quality`

###### Rejected paperboard playing-card waste (`reject_deck`)

Actual separate damaged/off-spec/sample deck waste; record failed Q=0, sampling and final treatment without subtracting production or handling burdens merely because sold or sent out.

- Selected flow: Rejected paperboard playing-card waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `epa-offset-2006`; `fournier-quality`

###### Mixed printing-shop solid waste (`mixed_print_waste`)

One actual mixed collected physical waste outlet. Independently measure non-additive origin/component subaccounts; use total or actual disjoint outlet fractions once, with one treatment/provider. Do not re-add card trim, ink, cloth or packaging already inside this outlet.

- Selected flow: Mixed printing-shop solid waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `epa-offset-2006`; `fournier-quality`

###### Spent offset ink residue (`waste_ink`)

Actual separate spent ink outlet in its measured wet state; not an on-disc-printing waste identity. Retained solvents/pigments are components of the whole residue, not second outlets.

- Selected flow: Spent offset ink residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `epa-offset-2006`; `fournier-quality`

###### Spent coated aluminium printing plate (`waste_plate`)

Actual separate complete spent plate; aluminium/coating subaccounts are non-additive unless there are real separated streams. Capture failed plates and treatment once.

- Selected flow: Spent coated aluminium printing plate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `epa-offset-2006`; `fournier-quality`

###### Contaminated cotton press-cleaning cloth (`waste_cloth`)

Actual separate discarded cloth outlet including retained wash/ink/water once. A true laundry-service return is a distinct Product-service route; do not report the same cloth as both waste and mixed waste.

- Selected flow: Contaminated cotton press-cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `epa-offset-2006`; `fournier-quality`

###### Printing and cleaning liquid wastewater (`wastewater`)

One actual external liquid wastewater outlet with destination and treatment ownership. COD, VOC, colour and total nitrogen are non-additive indicators, not particular chemical masses. No direct-to-water/degreasing row is presumed applicable to treatment transfer.

- Selected flow: Printing and cleaning liquid wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_waste`
- Sources: `epa-offset-2006`; `fournier-quality`

###### tuck actual separately exported waste (`tuck_w`)

One tuck pool event: actual separately exported waste. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. This separate Waste exchange exists only for a real separate outlet. If collection leaves as one mixed packaging waste, retain this pool W as an independently measured non-additive origin subaccount in cp_pack and export only mixed_pack_waste; no second material outlet/provider.

- Selected flow: Used finished printed paperboard tuck box waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### carton actual separately exported waste (`carton_w`)

One carton pool event: actual separately exported waste. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. This separate Waste exchange exists only for a real separate outlet. If collection leaves as one mixed packaging waste, retain this pool W as an independently measured non-additive origin subaccount in cp_pack and export only mixed_pack_waste; no second material outlet/provider.

- Selected flow: Used finished corrugated shipping carton waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### film actual separately exported waste (`film_w`)

One film pool event: actual separately exported waste. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. This separate Waste exchange exists only for a real separate outlet. If collection leaves as one mixed packaging waste, retain this pool W as an independently measured non-additive origin subaccount in cp_pack and export only mixed_pack_waste; no second material outlet/provider.

- Selected flow: Used polyethylene film waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### pallet actual separately exported waste (`pallet_w`)

One pallet pool event: actual separately exported waste. Weigh the complete actual article in its real wet/attached condition and retain opening/closing empty stock plus attached WIP/FG and reusable stock. P and I are disjoint supply legs with one upstream owner; supplier-included ingress is not omitted because its price is bundled. All six legs are gross, never multiplied by economic, service or burden shares. X corrections de-duplicate only another same-side incoming/outgoing term; they do not cancel a real influx retained in closing stock. Whole-article mass and component bridge cannot overlap. This separate Waste exchange exists only for a real separate outlet. If collection leaves as one mixed packaging waste, retain this pool W as an independently measured non-additive origin subaccount in cp_pack and export only mixed_pack_waste; no second material outlet/provider.

- Selected flow: Used pallets, box pallets and other load boards, of wood, pallet collars of wood waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `cartamundi-guide`; `printninja-card-production`

###### Mixed used playing-card packaging waste (`mixed_pack_waste`)

One actual mixed packaging waste outlet, only where the real recipient receives that mixture. Each pool W remains independently measured for reconciliation and is non-additive to this whole outlet. Use one whole outlet/provider or genuinely disjoint physical outlets once, never both; sale does not create a burden exemption.

- Selected flow: Mixed used playing-card packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `printninja-card-production`

###### Removed pallet wood waste (`removed_wood`)

Actual old removed wood and its real wet state/destination, including failed repairs. Do not equate its mass to new dry repair wood.

- Selected flow: Removed pallet wood waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `printninja-card-production`

###### Removed steel pallet nail waste (`removed_nail`)

Actual removed old steel nail, separately weighed only if a real separate outlet; mixed collection has one whole waste exchange and non-additive origin account.

- Selected flow: Removed steel pallet nail waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_pack`
- Sources: `printninja-card-production`

###### Retired industrial sheetfed offset press (`press_retirement`)

One actual press actual retirement waste; equipment type, configuration, serial/asset identity and real operating history are required. Physical opening/closing installed stock and this full gross asset leg are recorded independently of service attribution. New/old parts and installed fluids must each be added as actual specific atomic flows with wet stock reconciliation; no service share scales hardware mass or grants a retirement credit.

- Selected flow: Retired industrial sheetfed offset press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

###### Retired playing-card varnish coating unit (`coater_retirement`)

One actual coater actual retirement waste; equipment type, configuration, serial/asset identity and real operating history are required. Physical opening/closing installed stock and this full gross asset leg are recorded independently of service attribution. New/old parts and installed fluids must each be added as actual specific atomic flows with wet stock reconciliation; no service share scales hardware mass or grants a retirement credit.

- Selected flow: Retired playing-card varnish coating unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

###### Retired playing-card cutting and corner-rounding unit (`cutter_retirement`)

One actual cutter actual retirement waste; equipment type, configuration, serial/asset identity and real operating history are required. Physical opening/closing installed stock and this full gross asset leg are recorded independently of service attribution. New/old parts and installed fluids must each be added as actual specific atomic flows with wet stock reconciliation; no service share scales hardware mass or grants a retirement credit.

- Selected flow: Retired playing-card cutting and corner-rounding unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

###### Retired playing-card deck collating and inspection unit (`collator_retirement`)

One actual collator actual retirement waste; equipment type, configuration, serial/asset identity and real operating history are required. Physical opening/closing installed stock and this full gross asset leg are recorded independently of service attribution. New/old parts and installed fluids must each be added as actual specific atomic flows with wet stock reconciliation; no service share scales hardware mass or grants a retirement credit.

- Selected flow: Retired playing-card deck collating and inspection unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_assets`
- Sources: `cartamundi-production`; `ilcd-allocation-2010`

##### Elementary flows

###### Molecular oxygen emitted to air (`oxygen_out`)

Actual unreacted molecular O2 gross outlet; reaction consumption is separately reconciled and not guessed from one total-mass residual.

- Selected flow: Molecular oxygen emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### dinitrogen (`nitrogen_out`)

Actual N2 gross physical outlet, with inlet and any molecular changes independently established. Molecular N2, CAS 7727-37-9, elementary emission to air unspecified, Mass/kg, actual measured gross outlet in the declared horizon. It is not total nitrogen excluding N2, a resource uptake or a long-term/stratospheric release. Separate actual inlet and chemical reactions; no default air composition.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### argon (`argon_out`)

Actual Ar gross physical outlet measured separately from the actual inlet and other species. Ar, CAS 7440-37-1, actual gross elementary emission to air unspecified, Mass/kg. This is not atmospheric resource extraction, long-term release or a fixed dry-air share. Match actual outlet medium and measured amount independently of other air species.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### water vapour (`water_vapour`)

Actual H2O release includes ordinary natural desorption from stock/WIP/FG/packaging and any real process water evaporation. Separately measured origins are non-additive subaccounts of the one actual outlet. Free, retained, phase-change and chemically produced/consumed water are different facts; reaction water needs independent chemistry evidence. H2O vapour, CAS 7732-18-5, actual elementary emission to air unspecified, Mass/kg. Applies to actual drying, cleaning, handling, storage sorption/desorption or other demonstrated release with origin separately measured. Native broad water/isotope/ice synonyms do not authorize liquid wastewater, purchased steam, heavy water or structural/reaction water substitution. Do not use a non-urban/high-stack identity without that actual medium.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### isopropanol (`ipa_air`)

Conditional actual separately speciated isopropanol release; collection is after any actual capture/abatement and excludes collected liquid residue. Isopropanol, CAS 67-63-0, molecular elementary emission to air unspecified, Mass/kg. Apply only if this actual ingredient is present and this species is separately verified at the outlet; it is not n-propanol, total VOC, total solvent loss or the whole supplied fountain/wash formulation.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### carbon dioxide (fossil) (`co2_fossil`)

Conditional actual fossil CO2 release from proven onsite operations; no electricity-background CO2 is duplicated. CO2, CAS 124-38-9, fossil-origin elementary emission to air unspecified, Mass/kg; actual generated and inlet/outlet contributions are separately reconciled. Native isotope/ion/solid synonyms do not alter the selected gas species or fossil origin. No correction-flow, biogenic, delayed or long-term credit is implied; provider electricity emissions stay upstream once.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### methane (fossil) (`methane_fossil`)

Conditional actual fossil CH4 release from proven onsite operations, measured independently. CH4, CAS 74-82-8, fossil-origin elementary emission to air unspecified, Mass/kg. Requires actual molecular methane and carbon-source evidence; not natural-gas aggregate, VOC total, biogenic methane or an automatic combustion-factor estimate.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### nitrogen monoxide (`no_air`)

Conditional actual molecular NO outlet, not an assumed companion of fuel or NOx data. Molecular NO, CAS 10102-43-9, elementary emission to air unspecified, Mass/kg. Bind only separately measured actual NO after capture/control at the physical outlet. NOx or nitrogen-as-N does not establish NO mass; no default speciation or emission factor.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### nitrogen dioxide (`no2_air`)

Conditional actual molecular NO2 outlet, not NOx expressed as NO2 equivalent. Molecular NO2, CAS 10102-44-0, elementary emission to air unspecified, Mass/kg. Require actual species-specific outlet evidence; do not call NOx expressed as NO2 the measured NO2 molecule and do not count both the indicator and its sub-species.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `epa-offset-2006`; `ilcd-allocation-2010`

###### Unchanged atmospheric molecular carbon dioxide released to air (`ambient_co2_out`)

Actual unchanged atmospheric CO2 gross outlet component, independently reconciled with the inlet and any true reaction uptake. Keep source-resolved molecular parts disjoint: unchanged ambient plus genuinely generated source-specific CO2 equals the actual measured whole CO2 outlet once; do not add a second whole outlet or automatic credit.

- Selected flow: Unchanged atmospheric molecular carbon dioxide released to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `ilcd-allocation-2010`

###### Fossil-origin molecular carbon monoxide emitted to air (`co_fossil`)

Only actual molecular CO CAS 630-08-0 with verified fossil carbon origin and real outlet medium. A biogenic CO candidate, CO2, total carbon, VOC or assumed combustion factor is not this identity or amount. Collect the actual disjoint molecular outlet and any inlet independently. Molecular CO, CAS 630-08-0, fossil-origin elementary emission to air unspecified, Mass/kg. Native molecular/isotope/liquid synonyms do not authorize a different phase, carbon origin or recipient. Use only actual independently speciated fossil CO at the real outlet, not biogenic CO, total carbon, CO2, VOC or a default fuel factor. Preserve gross inlet/outlet and source origin independently.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses the separately evidenced attributable vector per each original positive cohort reference mass, with compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_species`
- Sources: `ilcd-allocation-2010`

## 7. Allocation and Co-product Handling

These rules retain the complete section 5 scope, cohort and physical gates; industrial evidence does not replace ILCD allocation context.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_context | attributional inventory only | Use this hierarchy only where the study goal supports attributional allocation; consequential substitution and comparisons of different game functions need their own justified framework. Manufacturer technical descriptions do not supply allocation evidence. | ilcd-allocation-2010 |
| a_exclusive | each exchange | First isolate dedicated operations and exclusive exchange portions by subdivision or virtual subdivision. For the true remaining common process identify exchange-specific determining physical causality with actual data; do not choose mass, time, area or price freely from a menu. | ilcd-allocation-2010 |
| a_residual | only unresolved causal remainder | Only where a determining physical relationship genuinely remains unavailable after justified investigation may residual common-process inventory use contemporaneous market values at the same process gate and actual state/quality/bulk condition. Remove downstream processing/packing/transport value differences; document prices, quantities, currency, period, sensitivity and unresolved uncertainty. No fixed share. | ilcd-allocation-2010 |
| a_conserve | burden vectors versus gross physics | For each exchange j conserve the sum of assigned burden vectors over cohorts/functions plus actual raw/WIP/unused stores. Released closing FG does not remove already performed manufacture/service. Gross physical V of FG, packaging, assets, fluids, carriers and wastes remains complete and is never scaled by load/economic/service shares. No stock correction twice after a consumption record has already been stock corrected. | ilcd-allocation-2010 |
| a_waste | ordinary losses and recovery | Ordinary failed output, trim, rejected decks, samples and their actual treatment remain in manufacture/associated service burdens even if sent away or sold. Transfer a burden vector only once where a real independent other cohort/function and a justified allocation/handover establishes it. Internal reuse and waste sale give no automatic avoided-product credit; a true recycling allocation needs its own complete route/status evidence. | ilcd-allocation-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect unnormalised raw quantities and actual states only. Their aggregation_rule identifies the same reference basis and performs no numeric normalization; the only division is c_once.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | deck_manufacture | new complete net decks | scale and first-quality-release register | deck_design; card_identity_list; actual_card_count; configuration; lot; timestamp; new_first_release; calibrated_gross; packaging_tare; net_deck_kg; moisture; hold; sample; rejected; zero_output | Weigh complete net decks independently on a calibrated scale or use traceable actual calibrated lot weighing; independently tare the actual box/wrap. Reconcile the actual card list and first-release event, not merely a boxed SKU or nominal count. | kg | each event and complete cohort | actual manufacture and original-cohort observed H | actual site and actual supplier/recipient | per 1 kg reference flow | raw quantities/calibration/wet state/configuration/origin/history/vectors; missing explicit |
| cp_inputs | deck_manufacture | one supplied atomic article | receipts and wet-stock ledger | material_identity; supplier; supply_form; gross_receipt; whole_wet_mass; embedded_constituents; opening_raw; closing_raw; opening_WIP; closing_WIP; nonWIP_stock; inherited_exchange_vector; returns; failed_jobs | Collect full gross actual physical legs with batch identity and complete wet-state stock. Independently measure constituent subaccounts and inherit every upstream exchange vector; state whether a consumption record is already stock corrected. | kg | each event and complete cohort | actual manufacture and original-cohort observed H | actual site and actual supplier/recipient | per 1 kg reference flow | raw quantities/calibration/wet state/configuration/origin/history/vectors; missing explicit |
| cp_formulations | deck_manufacture | one actual whole formulation | purchase mixing and component-fate ledger | SKU; colour; CAS; grade; supply_wet_mass; assay; carrier; added_material; bath_open; bath_close; retained; captured; emitted; waste; carbon_origin; losses | Weigh each complete supplied preparation once; onsite mixing separately records each real purchased ingredient and real mixing energy/loss. Assay/carrier/active-material balances are non-additive; use actual physical and chemical evidence, not default SDS fractions. | kg | each event and complete cohort | actual manufacture and original-cohort observed H | actual site and actual supplier/recipient | per 1 kg reference flow | raw quantities/calibration/wet state/configuration/origin/history/vectors; missing explicit |
| cp_utilities | deck_manufacture | one real utility or carrier leg | independent meters and supplier convention | meter_unit; meter_start; meter_end; integrated_volume; true_rate; duration; substance_density; phase; T; P; enthalpy; fuel_composition; heating_value; heat_MJ; carrier_kg; external_Product_return; provider_owner; stage; cohort; horizon | Retain actual original extensive units and raw meter records. Convert before attribution; integrate only true rates and use independent state-specific density/enthalpy. Record real external Product returns at full gross quantity and avoid one supplier charged twice for carrier mass and heat. | actual kg; MJ; kWh; m3 | each event and complete cohort | actual manufacture and original-cohort observed H | actual site and actual supplier/recipient | per 1 kg reference flow | raw quantities/calibration/wet state/configuration/origin/history/vectors; missing explicit |
| cp_fg | deck_manufacture | one FG gross event | first-release-cohort wet-state ledger | original_cohort; original_Q; H; opening_FG_wet; first_release_transfer; gross_shipment; actual_return; original_delivery_link; incoming_new_water; outgoing_loss; closing_FG_wet; inherited_vector; performed_service; permission; posttests; acceptance; disposition | Measure gross legs and full physical inventories independently; preserve each original burden vector and actual newly performed service. Returns and reinspection never create Q; do not equate returned wet mass to original delivery or omit new water and actual losses. | kg | each event and complete cohort | actual manufacture and original-cohort observed H | actual site and actual supplier/recipient | per 1 kg reference flow | raw quantities/calibration/wet state/configuration/origin/history/vectors; missing explicit |
| cp_pack | deck_manufacture | one actual packaging pool/event | six-leg wet-stock and ownership ledger | pool; material_identity; P; I; ER; gross_S; EO; W; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; closing_empty; closing_attached_WIP; closing_attached_FG; closing_reusable; X_in; X_out; natural_H2O_in; natural_H2O_out; new_parts; old_parts; full_wet_mass; upstream_owner; mixed_origin_W; actual_whole_receiver_Qt_once; actual_full_provider_quantity_once; nested_component_bridge; actual_physical_cohort_provenance; evidenced_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; real_disjoint_repair_retained_increment; real_disjoint_departure; X_is_only_duplicate_component_reconciliation | Weigh each actual card event in its complete wet state, including supplier-included ingress; preserve all six legs. Independently measure each pool W even in one mixed outlet. De-duplicate only another same-side actual leg, never closing stock or the opposite side; whole article and separately supplied components require a disjoint bridge. One actual whole contaminated receiver/provider quantity is recorded once; distinct evidenced nonoverlapping service vectors use each served original cohort and compatible provider units. Actual full fleets/stocks/waste remain unchanged. X is only duplicate other same-side reconciliation, not another physical influx/outflux; all real retained repair/water increments remain. | kg | each event and complete cohort | actual manufacture and original-cohort observed H | actual site and actual supplier/recipient | per 1 kg reference flow | raw quantities/calibration/wet state/configuration/origin/history/vectors; missing explicit |
| cp_waste | deck_manufacture | one actual waste outlet and treatment | weighbridge receiver and treatment records | actual_outlet; waste_type; phase; wet_mass; destination; real_sale; mixed_origin; nonadditive_component; treatment_owner; treatment_route; actual_service_unit; aftercontrol_species; actual_whole_receiver_Qt_once; actual_full_provider_quantity_once; nested_component_bridge; actual_physical_cohort_provenance; evidenced_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; real_disjoint_repair_retained_increment; real_disjoint_departure; X_is_only_duplicate_component_reconciliation | Measure actual gross physical waste and one linked actual treatment demand, preserving failed output and Q=0 burdens. One mixture total and non-additive origin accounts cannot become multiple exports/providers. Direct releases have species and media, not a generic wastewater chemical substitute. One actual whole contaminated receiver/provider quantity is recorded once; distinct evidenced nonoverlapping service vectors use each served original cohort and compatible provider units. Actual full fleets/stocks/waste remain unchanged. X is only duplicate other same-side reconciliation, not another physical influx/outflux; all real retained repair/water increments remain. | actual kg; actual service unit | each event and complete cohort | actual manufacture and original-cohort observed H | actual site and actual supplier/recipient | per 1 kg reference flow | raw quantities/calibration/wet state/configuration/origin/history/vectors; missing explicit |
| cp_assets | deck_manufacture | one actual asset part fluid or fulfilled service | asset stock and actual service register | asset_identity; configuration; opening_installed; closing_installed; gross_acquisition; gross_retirement; actual_service_hours; service_charge; new_part; removed_part; installed_fluid; phase_water; permission; posttests; original_cohort; H; unassigned_unused_charge; actual_whole_receiver_Qt_once; actual_full_provider_quantity_once; nested_component_bridge; actual_physical_cohort_provenance; evidenced_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; real_disjoint_repair_retained_increment; real_disjoint_departure; X_is_only_duplicate_component_reconciliation | Record full gross asset/part/fluid movements separately from actual fulfilled service. Independently measure each new/old part and wet stock; no fixed lifetime, no entire machine per kg, no physical mass scaled by economic share. Only actual unused/unassigned service charge may carry forward. One actual whole contaminated receiver/provider quantity is recorded once; distinct evidenced nonoverlapping service vectors use each served original cohort and compatible provider units. Actual full fleets/stocks/waste remain unchanged. X is only duplicate other same-side reconciliation, not another physical influx/outflux; all real retained repair/water increments remain. | actual kg; h | each event and complete cohort | actual manufacture and original-cohort observed H | actual site and actual supplier/recipient | per 1 kg reference flow | raw quantities/calibration/wet state/configuration/origin/history/vectors; missing explicit |
| cp_species | deck_manufacture | one real molecule/phase/medium | species-resolved physical and elemental ledger | molecule; CAS; phase; medium; inlet_gross; outlet_gross; actual_generated; actual_consumed; carbon_origin; raw_concentration; true_rate; integrated_volume; duration; independent_density; free_water; retained_water; structural_water; reaction_water; ordinary_sorption; ordinary_desorption; stock; uncertainty | Independently measure actual species, actual wet stocks, natural humidity exchange and each relevant element. Integrate concentration with actual corresponding flow only with correct state; one total-mass residual cannot establish two unknown species or water/reaction amounts. Keep VOC/COD/NOx/PM indicators separate from molecules and phase changes. | actual kg; raw concentration; actual volume | each event and complete cohort | actual manufacture and original-cohort observed H | actual site and actual supplier/recipient | per 1 kg reference flow | raw quantities/calibration/wet state/configuration/origin/history/vectors; missing explicit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_release | first_release | Q = sum of actual newly first-quality-released complete net deck masses; exclude packaging and any previously released deck. Closing released FG is within Q. | net_deck_kg; first_release_event; cohort | Q | cartamundi-guide;fournier-quality |
| c_raw_units | all inventory rows | Convert each raw extensive quantity to its actual native reference unit before attribution. For electricity E_MJ = 3.6 * E_kWh; integrated volumes stay volumes; true rates alone are integrated; substance-specific measured density and state are needed for mass/volume conversion. | raw_meter; true_rate; duration; state; independent_density | V | ilcd-allocation-2010 |
| c_burden | all inventory rows | Keep physical V complete and independent. For each exchange j: L_open,j + L_new,j = A_cohort,j + A_true_other,j + L_close,j. L_close includes only actual raw/WIP/unassigned non-WIP and genuinely unused service charge, never released closing FG or performed service. If a collected load is already stock-corrected consumed load do not apply opening/closing again. Genuine other-function transfer requires justified allocation/handover once; ordinary waste/reject/sample sales are not A_true_other.  L_new is the new burden addition before stock correction; an already consumed load uses its reconciled equivalent ledger without repeating stock corrections or provider-expanded history. | L_open; L_new; L_close; causal_assignment; genuine_handover | A | ilcd-allocation-2010 |
| c_once | all inventory rows | q_phys=V/Qanalysis is only physical disclosure of the once-only full actual event using a declared positive observation basis. Linked modeled demand is the separately evidenced attributable vector A/Q0 or A_h/original_Qc per each original positive cohort in compatible provider units, exactly once. Never charge full shared Qt/provider quantity again to every cohort or scale physical V by service allocation. Zero/unknown basis preserves raw totals without unit result. | V; Qanalysis; A; Q0; A_h; original_Qc; H | x | ilcd-allocation-2010 |
| c_pack | all inventory rows | For each same-unit actual whole-wet pool: O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. J and H2O are actual disjoint repair/retained increments and departures. X_in/out only reconcile duplicate OTHER same-side constituent terms before this equation; X is not another added physical stream and never erases true P/I/ER, wet C, opposite flows or real retained influx. Whole W includes nested substrate/residue/water once, linked to any substrate-only balance by composition. Internal reuse cancels; origin W in one mixed receiver is nonadditive. No normalization here. | O; P; I; ER; S_filled; EO_empty; W_whole; J_in; J_out; H2O_in; H2O_out; X_in; X_out; C | pool_balance | printninja-card-production;ilcd-allocation-2010 |
| c_physical | all inventory rows | Close each stage and combined wet-mass gate plus each relevant element using independently measured opening/closing stocks and complete actual external gross legs. Matched internal stock→print→cut→collation→first-release→FG handoffs cancel with equal physical quantities and inherited vectors. Quantitative-reference Q is not added again beside its closing FG. Do not infer water, oxygen, emission species or reaction extent from an underdetermined residual; no normalization in this rule. | all_actual_gross_legs; wet_stocks; component_assay; independent_species; inherited_vectors | physical_and_element_balances | ilcd-allocation-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | each physical row | Match full product/material/chemical/type/route/geography/media and exact native support. Ordinary UUID/provider gaps do not remove real exchanges; genuinely incompatible bindings stay absent. | complete native record and actual supplier specification |
| dq_measurement | all actual records | Retain calibration, raw meter units, actual configurations, full wet mass, phase, uncertainty and complete original records; missing is not zero and no recipe/yield/density/mass defaults. | calibration and raw linked logs |
| dq_context | cohorts and scope | Retain original acquisition/source scope, real supplier/site/period, actual service H, all conditions and exclusions, original cohort and one-time provider ownership. No contemporaneous common-order claim for the technical synthesis. | source scope and linked cohort ledger |
| dq_completeness | full route | Audit each actual six-leg packaging pool and gross physical stream, failed/Q=0 loads, inherited vectors and elemental balances. True missing terminal/measurement/methodology evidence remains an explicit hold rather than a success count. | full raw-to-typed cell and semantic audit |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_core | reference and route | Require one compatible manufactured physical Playing cards Product reference with exact native property/unit support, and actual complete paperboard deck/configuration evidence. A board, ink, single-sheet, box or software identity does not replace the core. Ordinary auxiliary/provider gaps remain explicit; a genuinely unresolved core identity or terminal route prevents usable authored guidance. | fournier-quality;cartamundi-guide |
| v_q | denominator and once-only normalization | Reconcile actual Q against first-release records and net deck weighing; no assumed 52/54-card count, dimensions-to-mass, grammage-to-deck-mass, boxed gross weight or service-life denominator. c_once performs each raw physical/burden division once; Q=0 has no per-unit result. Every row/protocol must share this cohort basis in both languages. | fournier-quality;ilcd-allocation-2010 |
| v_ledgers | all physical and burden gates | Independently reconcile wet raw/WIP/non-WIP/FG/packaging/asset/part/fluid mass, each inherited exchange vector, gross legs and relevant elements. Closing released FG neither new Q nor manufacturing Bclose; service horizon and original cohort retained. X only removes duplicate same-side terms and never real retained influx. One actual mixed waste outlet has one provider and non-additive measured origin pools. | ilcd-allocation-2010 |
| v_atoms | each adopted flow | Verify actual material/CAS/form/phase/grade/route/geography/type/media against the complete native record and all properties plus exact property-to-unit-group chain; preserve official Chinese basename. A successful query or Schema does not waive incompatibility. Add actual missing atomic flows before a dataset completeness claim. | ilcd-allocation-2010 |
| v_permission | actual postrelease work | Retain manufacturer/spec permission, postwork testing, acceptance and disposition for actual rework; do not presume restored broken cards. Unauthorized/failed/rejected actual work retains every real flow and load under its original cohort and actual hold/waste disposition. Natural moisture exchange is measured without inventing repairs. | fournier-quality |
| v_quality | unknowns and release claims | Unknown observations, molecular speciation, provider matches or unsupported relations are explicit unresolved fields, never zero or a claimed pass. Engineering/schema/fingerprint checks establish declared consistency only; science review, translation review and formal publication need their own independent evidence. | ilcd-allocation-2010 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Background only for an actual compatible deck construction/route/unit/time/geography |
| allowed_use | Attributional paperboard-deck manufacturing inventory with complete qualifiers/uncertainty; gross physical disclosure and provider-demand dimensions explicitly separate |
| excluded_use | All-plastic/digital/electronic cards, unlike-function comparison, fixed lifetime/certification, unsupported completeness or treating gross cards automatically as procurement demand |
| required_metadata | Complete qualifiers, original Q/cohort/H, source edition/scope, actual site/providers/route, native property/units and ownership per dimension |
| required_quality_disclosure | Complete methodology/boundary/mass-vectors/allocation/gaps; scientific/translation review independent and engineering checks grant no approval |
| update_trigger | Changed product/supply form/formulation/route/unit chain/raw or service data/site conditions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| cartamundi-production | extension_guidance | https://cartamundi.com/en/production/ | Complete manufacturer printing capability; route support only |
| cartamundi-solutions | extension_guidance | https://cartamundi.com/en/cardgame-boardgame-solutions/ | Whole card-game production scope and upstream/finishing stage coverage; not a measured recipe |
| cartamundi-guide | handbook | Cartamundi Customer Information and Design Guidelines (2024 URL), complete 23-page PDF: https://www.cartamundi.de/wp-content/uploads/2024/05/CMDE_EN_CustomerInformation.pdf | Card sequence, card versus memo/puzzle/box distinction and alternative cut/corner geometry; printed examples are not default sizes/counts |
| cartamundi-uk | extension_guidance | https://cartamundi.com/en/games-and-print-services-cartamundi-uk/ | Physical collated sets and configuration-dependent card count; no fixed count |
| fournier-quality | extension_guidance | https://www.nhfournier.es/en/fournier/fournier-quality/ | Card-stock supply structure, ink/varnish/cutting/QC and contrasting PVC route; no universal 55-card or performance specification |
| printninja-card-production | extension_guidance | https://printninja.com/card-game-production/ | Independent producer description of trimming/rounding/collation and separate tuck-box/film packaging; scope-compatible technical synthesis, not one factory/SKU with other sources |
| epa-offset-2006 | official_guidance | EPA-453/R-06-002 (September 2006), complete primary: https://www3.epa.gov/airquality/ctg_act/200609_voc_epa453_r-06-002_litho_letterpress_printing.pdf | Conventional sheetfed versus heatset/radiation setting; separate ink/fountain/cleaning and emission-origin survey. Historical percentages/control limits are not defaults or claimed current legal requirements |
| ilcd-allocation-2010 | official_guidance | ILCD Handbook — General guide for LCA, Detailed guidance, first edition March 2010, §§7.9.2–7.9.3 and contextual annex14.4: https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Only justified attributional subdivision, exchange-specific determining physical causality, residual same-gate actual-state contemporaneous value, conservation and explicit recovery-method limits; not an industrial process recipe or universal ILCD conformity claim |
