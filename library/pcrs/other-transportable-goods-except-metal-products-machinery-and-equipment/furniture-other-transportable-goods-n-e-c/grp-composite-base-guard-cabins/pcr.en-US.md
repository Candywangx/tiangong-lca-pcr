---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.grp-composite-base-guard-cabins
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Prefabricated buildings, of plastics


## 1. Scope and Applicability

This PCR covers new complete prefabricated GRP guard cabins predominantly made of plastics, with structural GRP walls/roof and an actual composite base/floor. The evidenced manufacturing route is a GRP/FRP composite cabin or guardhouse with a structural plastic-composite wall/roof system and an explicitly identified base/floor, doors, openings and included fixed fit-out. The reference is one real complete manufactured guard cabin, not a classification-derived placeholder. A complete matched building kit may be represented only after its entire configuration has passed the same first complete-set factory release; shipping the verified kit in pieces does not produce additional buildings. A panel, resin, glass fibre, cured shell without the required components, furniture, sanitary fixture, transport container or erection service cannot stand for this reference product.

CPC class3870 also includes incomplete buildings having the essential character of a building; that classification fact does not waive this method’s complete-set release gate. Assess the actual principal material and structural system with the BOM, drawings and supplier scope. A steel/aluminium load-bearing building with plastic cladding is outside this GRP route; a documented local metal skid, hinge or fixing is a component, not permission to conceal a complete metal frame. No numerical predominance threshold is invented. The evidence establishes real whole-building families, not a shared SKU, factory, recipe or performance guarantee.

The foreground covers actual receipt and storage, conditional in-house mould preparation/layup/core formation/cure, trimming and openings, shell joining, finishes, fixed-installation assembly and first complete-set quality release. It is a technical synthesis: manufacturer whole-building and panel evidence is combined with EPA resin-fabrication guidance only for the compatible actual route. Purchased formulated resin, gelcoat, mat, cured panel or complete fitted assembly carries its included upstream work once. Declare every make-or-buy boundary. Foundation, lifting/anchoring and final connections are downstream only after a real complete first factory acceptance. Actual first structural completion, mandatory fit-out or QC on site is manufacturing and must stay with its genuine producer/interfaces; it cannot be hidden as later service or forced to an incompatible at-plant reference. Use, occupancy, lifetime and end of life are outside the manufacture result. Retain measured post-release warehousing, packaging, handling and dispatch in a separate observed-service account, then combine by the original release cohort without a second production denominator.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.grp-composite-base-guard-cabins |
| classification_refs | CPC 3.0 38703; narrower product and route boundary |
| covered_products | Complete matched structural GRP guard cabins with actual composite base/floor; assembled units or actually verified complete kits of one disclosed configuration |
| excluded_products | Alternative HDG-base construction or plastic-clad metal-frame buildings; incomplete shell or separate panel; electrical cabinets lacking building scope; transport containers; furniture and sanitary ware alone; site construction services; other polymer routes without demonstrated equivalent manufacture |
| representative_product | Configured complete GRP guardhouse with declared structural walls/roof and composite base/floor plus actual doors/windows; no assumed dimensions or weight |
| production_route | Receipt of actual supplied formulations/reinforcement/core or cured components; actual moulding/curing where performed; trimming; joining and fixed fit-out; complete-set first release |
| market_state | New complete factory-released building at declared retained-fluid and fit-out state; transport packaging and temporary tooling excluded from net mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one declared complete prefabricated plastic-composite building configuration at first factory release |
| How much | 1 kg reference flow; a mass-normalized declared unit of complete buildings, not one kilogram of loose resin or panel |
| How well | The actual agreed complete-set specification and documented first quality release; no universal fire, thermal, weather or safety rating |
| How long or cycle | Manufacture through first complete-set release; observed later factory services are disclosed separately; no service-life assumption |
| reference_flow_link | finished_building |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Prefabricated buildings, of plastics `8cc4a903-f6b7-4ab2-a6d5-7ab42abbeb09` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | whole-building configuration and principal material evidence; actual structural shell and composite-base/floor supply scope; load-bearing frame identity; complete-set assembly or matched kit state; resin system and supplied formulation boundary; reinforcement form and core route; make-or-buy component register; geometry and face/layer definitions; door and glazing specification; interior and exterior finish inclusion; electrical installation inclusion; plumbing and retained-fluid state; serial and first release event; measured net mass and packaging tare; site and reporting period; supplier geography and electricity voltage; upstream gate and missing coverage; observed post-release horizon and original cohort; allocation and uncertainty |

Declare every required qualifier in dataset metadata, process notes, reference-flow comment, product description or an equivalent foreground-package field. A missing qualifier leaves the reference definition incomplete. This mass declared unit does not establish area, occupancy-service or performance equivalence between configurations.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of independently measured net masses of uniquely identified complete buildings first released in the reporting cohort. Weigh complete configured units with calibrated scales or a traceable complete-kit mass reconciliation under cp_release. Include actual integral constituents and retained fluids once; exclude transport packaging and temporary jigs. Never infer unit mass from dimensions, density or a generic building count. |
| `raw_to_unit` | all inventory rows | row-specific native property | row-specific | Collect undivided raw quantities in original units. Convert rate/units and perform justified attribution before the single calculation in §8. Same-reference cards and protocol aggregation refer to that same calculation; no later second division. Q=0 retains actual burdens and inventory vectors but yields no unit result. |
| `material_state` | formulations and retained fluids | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Procure each supplied formulation as a whole once. Assay, monomer, solvent and carrier-water contents are non-additive subledgers, not extra purchases. Separately added substances cross as their own actual flows. Record wet mass, free/retained/structural water and reaction stoichiometry independently; thermoset cure is not upstream polyester polycondensation. Do not fit two unknowns with one mass residual. |
| `electricity_units` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Use the native energy property with its energy unit group; 1 kWh=3.6 MJ. The adopted MVAC identity is restricted to CN 1–35 kV consumption mix at user, grid-average supply. Other voltage/geography or a separate transformation service requires a compatible atomic row without buying the same power twice. |
| `physical_conversions` | all physical exchanges | actual measured property | native unit | Count and item are the same physical count only when the unit chain confirms factor1. Convert actual item/area/volume records to mass only with measured same-configuration net mass, surveyed face/layer scope or substance-specific density at recorded T/P/phase. A secondary volume property is not independent density evidence. Integrated volume is already an integral; multiply only a genuine rate by its actual duration. Whole-building M belongs only to that complete configuration. Each component or packaging count needs its own independently evidenced same-article/state mass bridge; do not multiply panel/bolt/package counts by building M. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received raw materials and supplied formulations, reinforcement, core stock and documented cured components at the reporting factory; each upstream gate and in-house operation is declared |
| starting_condition_role | foreground_start |
| product_classification_scope | Complete predominantly-plastics prefabricated buildings with the evidenced GRP manufacturing route |
| recursive_input_rule | A bought complete building is a separate upstream article input with its own condition and burden; inspection or delivery does not turn it into new manufacture. Do not recursively duplicate this PCR or its constituent resin/fibre. |
| upstream_dataset_requirement | Link each actual supplied formulation/article once to compatible material, process, form, geography, unit and supplied-state data; retain missing-provider coverage explicitly |
| disclosure | Factory and period; complete configuration; principal structure; component origin; all operations and unsuccessful loads; material/WIP/FG and inherited vectors; inbound logistics gate; actual service horizon; exclusions and upstream gaps |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `whole_building_gate` | reference product | Require positive BOM/drawing and supplier evidence for a whole predominantly-plastics building. Identify structural shell, base and floor, roof, insulation, doors/windows, inner/outer finishes, electrical and plumbing scope and included fixed equipment. Do not reclassify a complete steel/aluminium frame merely because its face is GRP. Retain a complete-set test and configuration record; loose shells cannot use the finished-building UUID. | `un-cpc3-prefabricated-buildings-2025`; `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `lloyds-grp-cubicles` |
| `make_buy_bridge` | component manufacture and assembly | For each wall, roof, base, door and fitted module choose disjoint site manufacture from actual purchased materials or receipt of the complete supplied article. If a bridge is necessary, identify unique transfer IDs and reconcile physical quantities and the complete inherited exchange vector. Cancel internal component handoffs on consolidation; keep actual raw fabrication burdens. Never purchase article mass and its already-included resin/fibre/core again or repeat upstream cure/galvanizing/glazing. | `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`; `uk-kiosks-technical-specification` |
| `first_release_once` | manufacture and finished goods | Q counts each complete building once at its first complete-set quality release, including released stock still held at closing. Closing FG already included in Q is not subtracted as manufacturing WIP or added as a second production output. A repeat test, dismantling, dispatch, return or delivery is not new Q. Failed, unauthorized or rejected activity and its physical inputs/outputs still exist and must be recorded; do not assume later repair or acceptance. | `eldapoint-grp-buildings` |
| `all_actual_loads` | all foreground stages | Include attributable unsuccessful production, trial, start/stop, idle, cure hold, cleanup, ventilation, tests, defect removal and actual rework/treatment even in zero-output intervals. Open/close raw stock and WIP by physical material and by each inherited exchange vector. Carry unfinished-production burdens to their actual future release, waste or transfer; never use missing data as zero. | `epa-polyester-fabrication-2008`; `jrc-ilcd-allocation-2010` |
| `gross_physical_gate` | manufacture, FG and consolidated balances | At each consistent total-mass gate retain opening wet stock plus all actual external receipts, equal to closing wet stock plus all gross external outputs including independently observed gaseous/liquid/solid losses. Chemical curing does not create matter. Reaction formation/consumption terms belong only to independently evidenced species balances and must conserve total mass and relevant elements. Track each relevant element separately from individual molecular emissions. Internal transfers cancel at the same physical gate. Only duplicate records of the same OTHER physical event on the same side may be removed as X; X cannot offset stock, an opposite-side flow or an existing card. Unexplained residuals stay unresolved rather than becoming an invented gas or water flow. | `epa-polyester-fabrication-2008` |
| `observed_services` | post-release operations | Preserve positive original Q0/Qc and real observed H for already complete accepted buildings. Record actual warehousing/handling/packing/faileddispatch/corrective work with fullphysicalreceiver/provider quantities once. Physical V/Qanalysis is diagnostic, never repeated linked full demand per cohort. Separately assign evidenced nonoverlapping compatible-unit A/originalQ0 or Ah/originalQc vectors. Keep original FG burdens, full wet stocks, removedparts/waste and linked dispatch/return history; no new manufacture or erasure by stock difference and no future unperformed service. Real pre-firstacceptance work remains manufacture. | `jrc-ilcd-allocation-2010`; `eldapoint-grp-buildings` |
| `packaging_pools` | each packaging article | Every actual same-unit whole-wet PEfilm/PPstrap/woodpallet pool uses O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C full empty/attached/reusablewetstocks; P independentpurchase, I other evidenced supplierincluded/issued ingress, ER actualinwardreturn, S_filled grossfilledoutward, EO_empty emptyoutward, W_whole actualwholecontaminatedwetwaste. Jnonwater/water changes realdisjoint, XonlyOTHERsame-sideduplicates, nottrueinflux/wetC/opposites. Reusecreatesnopurchase/Q/credit. | `jrc-ilcd-allocation-2010` |
| `atomic_extension` | actual route not yet enumerated | Conditional cards are activated only by actual route records; no default recipe is prescribed. Add a named single physical/chemical input or output card and raw protocol for every additional actual material, supplied mixture, fuel, gas, packaging, removed part, waste or released molecule. Supplier permission, acceptance or test status never authorizes omission of a physical flow. Do not hide unlisted actual manufacture in zero or an OTHER category. A genuine one-provider mixed waste has one weighed total and non-additive measured originW subledger; represent total or separately measured disjoint outlets once. Never substitute a Product flow for a Waste. | `epa-polyester-fabrication-2008`; `jrc-ilcd-allocation-2010` |
| `thermal_and_species` | heat, fluids and elementary exchanges | No steam/boiler, combustion or cooling loop is presumed. For actual imported process steam and externally returned condensate record gross kg, substance, T/P/phase and independent enthalpy plus supplier water/energy agreement. A single provider service must not be bought twice as both steam mass and heat MJ. Record actual individual gases and chemical destinations separately; N2, O2, Ar, H2O and carbon-bearing species are not an air/VOC residual. COD, total VOC and particulate indices are not specific molecular masses; distinguish captured waste from actual environmental emissions. | `epa-polyester-fabrication-2008` |
| `wip_vector_carry` | raw stock, WIP and non-WIP ledgers | For each exchange e and matched new-release cohort, form the production numerator A_e from current assigned raw burden plus its inherited opening-WIP vector minus the actual closing-WIP vector and vectors transferred to independently traced other destinations. Carry each retained raw-material supply vector with actual issues, not an extra purchase on every stock count. Never subtract released closing FG from this new-release numerator because it is already in Q. Non-WIP FG, packaging, asset, fluid and removed-component ledgers retain their complete physical stock and inherited vectors separately. Real natural moisture exchange is an observed material event, not presumed repair. Unresolved historical vectors remain disclosed and block a complete concrete cohort result; no residual vector is fabricated. | `jrc-ilcd-allocation-2010` |

### Complete source applicability and physical/modelled accounts

This PCR covers new complete prefabricated GRP guard cabins predominantly made of plastics, with structural GRP walls/roof and an actual composite base/floor. The evidenced manufacturing route is a GRP/FRP composite cabin or guardhouse with a structural plastic-composite wall/roof system and an explicitly identified base/floor, doors, openings and included fixed fit-out. The reference is one real complete manufactured guard cabin, not a classification-derived placeholder. A complete matched building kit may be represented only after its entire configuration has passed the same first complete-set factory release; shipping the verified kit in pieces does not produce additional buildings. A panel, resin, glass fibre, cured shell without the required components, furniture, sanitary fixture, transport container or erection service cannot stand for this reference product.

CPC class3870 also includes incomplete buildings having the essential character of a building; that classification fact does not waive this method’s complete-set release gate. Assess the actual principal material and structural system with the BOM, drawings and supplier scope. A steel/aluminium load-bearing building with plastic cladding is outside this GRP route; a documented local metal skid, hinge or fixing is a component, not permission to conceal a complete metal frame. No numerical predominance threshold is invented. The evidence establishes real whole-building families, not a shared SKU, factory, recipe or performance guarantee.

The foreground covers actual receipt and storage, conditional in-house mould preparation/layup/core formation/cure, trimming and openings, shell joining, finishes, fixed-installation assembly and first complete-set quality release. It is a technical synthesis: manufacturer whole-building and panel evidence is combined with EPA resin-fabrication guidance only for the compatible actual route. Purchased formulated resin, gelcoat, mat, cured panel or complete fitted assembly carries its included upstream work once. Declare every make-or-buy boundary. Foundation, lifting/anchoring and final connections are downstream only after a real complete first factory acceptance. Actual first structural completion, mandatory fit-out or QC on site is manufacturing and must stay with its genuine producer/interfaces; it cannot be hidden as later service or forced to an incompatible at-plant reference. Use, occupancy, lifetime and end of life are outside the manufacture result. Retain measured post-release warehousing, packaging, handling and dispatch in a separate observed-service account, then combine by the original release cohort without a second production denominator.

Declare every required qualifier in dataset metadata, process notes, reference-flow comment, product description or an equivalent foreground-package field. A missing qualifier leaves the reference definition incomplete. This mass declared unit does not establish area, occupancy-service or performance equivalence between configurations.

Every conditional card requires actual occurrence or documented absence, with no default recipe or zero amount. Card descriptions, supplied boundaries and limits are part of each exchange’s complete normative context. Each card refers to the same single normalize_exchange calculation in §8; collection protocols do not divide early. Internal component and release-to-services transfers cancel at consolidation while actual raw fabrication burdens remain.

This bounded subtype is a real complete guard cabin with structural GRP wall/roof and an actual composite base/floor, with actual doors, glazing/openings, insulation and declared fixed fit-out. Eissa explicitly offers human-use guard cabins/gatehouses and a composite-base alternative; Eldapoint explicitly manufactures off-site complete gatehouses and offers turnkey units needing only final utility connection. These are whole-building positive evidence, not a loose panel or an open-bottom equipment box. Actual BOM/drawings must establish the principal plastics/composite structure; a GRP label alone, exterior area or an invented mass/volume threshold cannot prove predominance. Local actual hinges/glazing/fixings do not authorize a hidden whole metal load-bearing frame. Sources: eissa-grp-kiosks; eldapoint-grp-buildings; un-cpc3-prefabricated-buildings-2025.

Keep the full source alternatives separate. Eissa composite floor/base versus HDG perimeter skid, insulated versus single-skin and optional fire-retardant/MEP variants are not one recipe. The selected subtype uses the evidenced composite-base branch; an actual HDG-base or predominantly metal structure is not silently substituted. Eldapoint panel manufacture is the same publisher as its buildings, not a second independent factory. Its plywood/OSB/foam/core alternatives and halogen-free statement do not establish Eissa's actual material; Eissa separately describes conditional halogenated/ATH-filled fire-resin variants. No cross-source recipe, thickness, density, fire/IP/thermal rating, life or environmental advantage is adopted. Sources: eissa-grp-kiosks; eldapoint-grp-panel-manufacture; eldapoint-grp-buildings.

UK Kiosks' complete two-page source has Worcester then Guardian headings, steel-supported/galvanized base, mould/oven treatment, fastening and sealing, glazing and optional electrics. Preserve that mixed heading/route as countercontext, not selected composite-base construction or a universal cure temperature. Lloyds' complete four-page source explicitly describes open-bottom cubicles lowered over electrical equipment with a metal base; factory preassembly and a kiosk name do not make that a whole guardhouse. Neither case negates another genuinely complete predominantly-plastics cabin. No same factory/SKU requirement is imposed. Sources: uk-kiosks-technical-specification; lloyds-grp-cubicles.

For the actual in-house compatible polyester branch, EPA describes fabrication from received finished liquid resins, reinforcement placement, gelcoat where actually used, cure, trimming and cleanup. Upstream polyester synthesis is distinct from thermoset crosslinking. Actual supplied laminating formulation, gelcoat, peroxide, release agent and any separately purchased chemicals cross once; monomer/carrier/additive children are non-additive. A generic native UPR name without supplied-formulation evidence is not used as a pure-polymer proxy for the complete mixture; the concrete laminating formulation stays unbound until actual whole-supply identity/provider fit is established. Other resin systems require their own actual atoms. No styrene fraction, peroxide dose, glass ratio or cure time is a default. Sources: epa-polyester-fabrication-2008; eldapoint-grp-panel-manufacture.

Preserve EPA's complete emission scope and table footnotes: monomer evaporation from resin/gelcoat is separate from cleanup-solvent emissions, reinforcement/trimming particulate and actual treatment outlets. The updated open-mould note reports underestimation by earlier factors and points to the version current at use. This PCR adopts no numerical emission factor, suppression/control percentage, monomer/catalyst range or universal heat recipe. Use actual qualified species-specific observations and raw flow/rate integration; VOC/COD/PM indices are not molecules. Actual polyurethane core reaction, retained/free/structural water, blowing species and CO2 formation need independent real evidence; do not conserve reacting species or treat upstream polycondensation water as factory cure by default. Unknown essential matrix/analytical/test procedures remain a concrete-study hold, not a future SOP or finite-pass waiver. Sources: epa-polyester-fabrication-2008.

Fix one actual complete-set first-acceptance factory gate, fit-out and retained-fluid state before collection. Whole manufactured-at-plant native identity is not a resin/panel/shell, warehouse receipt, incomplete equipment cubicle or an assumed kit. A matched complete transport kit needs actual whole-product configuration/state and the same unique acceptance; the wider classification's essential-character incomplete alternative does not waive this narrower gate. If real first structural completion, mandatory fit-out/QC or acceptance occurs on site, preserve that manufacturing producer/work/interfaces and do not paper it into optional later service or force an incompatible factory-finished UUID. Only actually complete already accepted units have later original-cohort lifting/anchoring/connections/disassembly/service histories. Actual final packing/QC before approval remains manufacturing. Sources: un-cpc3-prefabricated-buildings-2025; eissa-grp-kiosks; eldapoint-grp-buildings.

Measure M for each actual complete serial/configuration at its fixed acceptance state using calibrated whole net weighing, excluding removable packages, detached accessories and recoverable test loads. If actual separate module weighing is used, reconcile the same-state disjoint full BOM, included permanent fittings/retained water/actual finish and one complete acceptance event; do not weigh the complete unit and add its parts again. A count, drawing volume, catalogued density, nominal cabin size or another model's weight cannot establish M. The exact native mass chain remains kg; no conversion from item to kg without independent actual mass.

Q0 is the locked sum of positive net masses at unique original whole-cabin first-acceptance events, not another external physical output. On original acceptance basis partition it into disjoint net remaining deliveries, all actual accepted on-site states (released FG, accepted hold, accepted rework/returns), irreversible original-material/water losses and other terminal dispositions. A repeated return, retest or disassembly creates no new event. Keep full actual wet physical stocks and later retained increments separately with a measured state/quantity bridge to original basis. Do not restore lost water into survivors then add that water loss again. Actual zero-output periods Q=0 and unknown positive denominators retain absolute raw loads/stocks and unresolved unit results; Q=0 is not the positive original Q0 ledger.

For each exchange retain physical raw/WIP/non-WIP inventories separately from inherited environmental vectors. In A_i=B_open_i+U_new_i−B_close_i−T_other_i, U_new is actual new material/service/provider/work/treatment addition before stock correction. B contains only raw/WIP/genuinely unused-unassigned stores, not already accepted FG or performed service. If the starting consumption is already stock corrected, use its reconciled equivalent without a second deduction. Preserve failed/start-stop/idle/cleanup/rework/testing activity. Own inherited foreground/WIP and provider aggregate or decomposed upstream histories must have disjoint ownership; never add embedded provider manufacture again. Another original cohort/function transfer needs actual once-only handover evidence.

Maintain three ledgers for actual shared waste, asset or packaging service: one full actual receiver transfer Qt and full actual provider quantity once; known nested physical composition and actual cohort provenance; distinct evidenced nonoverlapping environmental/treatment-service vectors per served original cohort in compatible provider units. Physical Qt/Qanalysis is only disclosure on one declared positive observation basis, never a linked full provider recharge per cohort. Linked modeled demand is separately A/original Q0 or A_h/original Qc. Never shrink actual fleet/whole waste by a service share or repeat full receiver/provider Qt for each cohort. Unknown provenance, compatible units or assignment stays unresolved; no invented lifetime, fraction or cycle count.

For each actual same-unit whole-wet packaging article pool use O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, attached-WIP, attached-accepted-FG and reusable wet stocks. P independent new purchase, I other evidenced supplier-included/issued/loaned ingress and ER actual returned article inward have mutually exclusive custody histories. S_filled is the packaging component within an actual filled outward shipment including genuine returns; EO_empty is only outward empty articles. Filled inward ER reconciles net contents and packaging inside one actual receipt. J_in/out are real disjoint non-water repair/retained matter increments/departures; H2O_in/out are real water changes, excluding water already contained in whole streams. X only removes duplicate OTHER same-side component entries before the equation, never actual influx, wet C, opposite sides or another positive physical flow. Internal reuse gives no purchase, Q, co-function or recycling credit.

W_whole for a contaminated carton, film, pallet, cloth or filter is the actual whole receiver waste including substrate, retained GRP/foam dust, coating/adhesive/liquor and water once. Substrate and retained constituents are nested component ledgers, not additional attached-residue exports or extra treatment demand unless physically separated before the boundary. Separate actual captured powder/sludge or residue outlets remain their own real streams; a mixed receiver uses one total and non-additive origin subaccounts. Product versus Waste identity must fit actual condition; no intact Product UUID for a discarded contaminated article. Physical waste/stocks/provider quantities remain full regardless of attribution.

Synthetic arithmetic only, not empirical cabin mass, recipe, grade, life or service defaults: an actual hypothetical10kg contaminated filter consists of8kg substrate+2kg retained matter and is received/treated once. Independently evidenced hypothetical25%new/75%old compatible treatment service gives2.5/7.5kg-equivalent demand vectors; originalQnew100kg/Qold200kg gives0.025/0.0375kg-equivalent perkg, not2.5kg physical export or10kg charged to both. A separate whole-wet pool test O2+P3+I1+ER4+J_in2+H2O_in3=C4+S4+EO2+W2+J_out1+H2O_out2=15kg includes only disjoint extra increments; W2 contains1substrate+0.6retained+0.4water. Source document hardware counts and examples never become measured M or actual packaging quantities.

Keep the exact native electricity Net calorific value / 净热值, 低位热值 and MJ energy unit group; actual kWh×3.6 is electrical unit conversion only. The bound flow is CN1–35kV grid-average to user, not proof for a UAE/UK factory. Every actual drying/curing, ventilation, dust extraction, core work, thermal or treatment producer and all materials/chemicals, air, water, utilities, species, wastes and carrier returns stay present. An external-provider label cannot hide known foreground work; a true supplied whole module/heat/treatment has complete actual producer burdens and disjoint physical/provider history, not duplicated decomposed inventories. No assumed boiler, fuel, electricity factor or air composition.

The final product gate is actual complete manufacture and required conformity acceptance, not a universal source-derived test tolerance, coating count, building service life or certification. Actual final packing checks that precede first approval remain manufacturing. Later actual original-cohort handling, dispatch, maintenance and reassembly are reported only when performed during observed H with original Q0; authorization or successful repair does not delete failed/unauthorized work or logistics. ILCD allocation is conditional on justified attributional needs, prioritizes subdivision and evidenced determining physical causality before residual same-gate/state contemporaneous values; no arbitrary share or automatic avoided-product credit. Engineering/source/translation alignment checks do not establish scientific, study, mapping or publication acceptance. Sources: jrc-ilcd-allocation-2010; eldapoint-grp-buildings; eissa-grp-kiosks.

Every named film/PP-strap/wood-pallet pool is conditional on a real actual article with complete supplier/receiver history, not proof that each cabin uses that package. P is independent purchase, I evidenced supplier-included/issued/loaned ingress and ER returned inward, with mutually exclusive event custody. S_filled only actual filled outward packaging; EO_empty only empty outward; W_whole is the actual wet contaminated receiver mass. Water/J increments are real nonoverlapping changes, X only OTHER same-side duplicates; no purchase/Q/co-function credit on reuse.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Material receipt, conditional GRP moulding and finishing | conditional | Every actual material receipt/storage; in-house layup/core/cure only for site-made BOM positions | foreground fabrication | raw physical batch and inherited WIP vectors |
| assembly | Complete structural and fixed-installation assembly | required | Matched complete structural components with actual configured fit-out | foreground complete building assembly | same first-release cohort, internal transfers reconciled |
| release | First complete-set quality release | required | Each complete configured building or verified complete kit first released once | unique reference output | Q kg first complete-set release; finished_building |
| services | Observed post-release factory services | conditional | Actual service performed in H for original first-release cohort c | separate observed service account | original measured Qc kg; no new production |
| packaging | Actual phase-resolved packaging custody | conditional | Actual article and manufacturing/service phase recorded; no forced postrelease stage | physical custody with separate attributable vectors | positive original Q0; physical Qt/Qanalysis separately |

Every conditional card requires actual occurrence or documented absence, with no default recipe or zero amount. Card descriptions, supplied boundaries and limits are part of each exchange’s complete normative context. Each card refers to the same single normalize_exchange calculation in §8; collection protocols do not divide early. Internal component and release-to-services transfers cancel at consolidation while actual raw fabrication burdens remain.

### Process: Material receipt, conditional GRP moulding and finishing (`fabrication`)

#### Inputs

##### Product flows

###### Supplied laminating resin formulation (`laminating_resin`)

One actual supplied unsaturated-polyester laminating-resin formulation with independently evidenced monomer/carrier/additive composition, supplied state and complete upstream provider. A generic UPR family name alone does not establish this whole formulation; a pure polymer component cannot stand in for its full physical mixture. This specific formulation remains without a confirmed UUID. It is not PET, epoxy, vinyl ester, gelcoat or cured panel. Count the whole received formulation once; included styrene or other monomer, solvent, water, additive and upstream polymer synthesis are non-additive subledgers. Only actual separately supplied material crosses as another atomic input.

- Selected flow: Supplied unsaturated-polyester laminating-resin formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Supplied gelcoat formulation (`gelcoat`)

Whole purchased gelcoat, only when actually applied in-house. Preserve supplied chemistry and curing boundary; do not buy its resin, pigment or solvent again. Only the actual compatible whole gelcoat belongs here; an unrelated gel or coating liquid is not a substitute.

- Selected flow: Polyester gelcoat formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Chopped-strand reinforcement mat (`glass_mat`)

One actual supplied dry mat with binder and sizing already included. Record fibre chemistry, mat construction and delivered moisture/binder; do not substitute bare yarn, glass wool, molten-glass beads or cured FRP. No binder/fibre fraction assumed.

- Selected flow: Dry glass-fibre chopped-strand mat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Woven reinforcement cloth (`glass_cloth`)

One actual woven cloth supplied to layup, with its weave, sizing and chemistry documented. Conditional alternative/additional layer only when the laminate schedule requires it. Yarn or mat identity does not establish a woven article.

- Selected flow: Dry woven glass-fibre reinforcement fabric
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Added curing initiator formulation (`peroxide_formulation`)

Activate only for a documented MEKP-formulation addition. Weigh the entire purchased initiator formulation including actual carrier; active peroxide is an assay subledger. Ketone solvent, aldehydes or a pure chemical are not a verified formulation replacement. No dosage or catalyst default is prescribed.

- Selected flow: Methyl ethyl ketone peroxide curing formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Mould release wax formulation (`release_wax`)

Whole actual wax-based release product; no generic emulsion identity is substituted for a wax. Include real replenishment, residues and cleaning.

- Selected flow: Mould release wax formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### PVA release coating solution (`release_pva`)

Only an actually supplied aqueous PVOH release formulation. PVOH is not polyvinyl acetate. Supplied carrier water is included once; separately prepared solution requires disjoint polymer and measured added water cards instead of double purchasing this formulation.

- Selected flow: Polyvinyl alcohol aqueous release formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Cleanup acetone solvent (`acetone_input`)

Actual single supplied solvent chemistry and purity must be known. A hydrometallurgical 5 mol/L acetone solution and an indoor elementary emission are not this purchased solvent. Reclaimed internal solvent is a traced internal transfer, not a fresh purchase.

- Selected flow: Acetone cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Separately added mineral filler (`ath`)

Only separately added actual ATH for an evidenced formulation; already filled fire-retardant resin is purchased whole and its ATH is not added again. No fire-rating or filler fraction is inferred.

- Selected flow: Aluminium hydroxide filler
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Supplied cured insulation core (`rigid_core_board`)

Actual rigid core board fitted into the laminate, with no site foaming repeated. Queried flexible-polyfoam/bedding descriptions do not verify this rigid board. Use measured whole supplied board mass, not an assumed density or thickness.

- Selected flow: Rigid polyurethane insulation board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### In-house foaming polyol component (`polyol_blend`)

Conditional site-injected core route: purchase one actual formulated polyol-side blend once, not a pure polyol proxy. Its premixed catalyst, blowing agent and water are subledgers; actual separately dosed water/blowing substance requires its own atomic input. This route excludes the already-purchased cured-board amount for the same core.

- Selected flow: Formulated polyol blend for rigid polyurethane foam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### In-house foaming isocyanate component (`isocyanate_blend`)

Only a documented supplied pMDI component used on site; pure monomer elementary MDI is not the same formulation or flow type. No isocyanate index, reaction water, blowing gas or cure schedule is assumed; retain actual reaction/speciation evidence.

- Selected flow: Polymeric MDI component for rigid polyurethane foam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Metered compatible grid electricity (`fabrication_power`)

Use this native Product identity only for CN 1–35 kV grid-average consumption mix supplied to the user, as explicitly stated by its native names, geography and comments. It does not describe all world electricity, LV power, waste-incineration generation or a transformer service. Record actual voltage, supplier, meter boundary and any transformation already included; other supplies need a compatible separate atomic identity. Native reference property is Net calorific value with the energy unit group and MJ; it is not Mass or a combustion recipe. Preserve idle, startup, extraction, curing and failed-test demand at this stage, then use the single §8 normalization.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `epa-polyester-fabrication-2008`

###### Actual supplied tap water (`fabrication_water`)

Use only treated municipal/potable piped water supplied as a Product, with actual provider and local treatment coverage declared. It is not raw abstraction, deionized water, recovered condensate or resin carrier water already purchased. Native reference is Mass/kg; the secondary volume coefficient is not an independently measured density. Record gross supplied water, returned/recovered water, retained water, real drain and evaporation separately; a meter volume requires independent same-state density before conversion to kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources:

###### Conditional externally supplied steam (`steam_input`)

Only where actual external steam supply exists. Measure gross kg with phase, T/P, dryness/quality and independent enthalpy; disclose supplier water and heat service agreement. Do not invent a boiler, loop or heat purchase in addition to this same provider package.

- Selected flow: Water vapour as supplied process steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal`
- Sources:

###### Actual reusable GRP forming mould acquisition (`mould_acquisition`)

Only the actual complete supplied reusable GRP mould, measured at full gross physical article mass. It is an asset, not material incorporated in Q. Distinguish actual external acquisition, retained asset inventory and its conserved lifetime manufacturing-burden vector under cp_assets; allocate only that burden vector, never shrink the physical article. Other actual metal/wood mould constructions require specific separate cards, not an assumed GRP tool.

- Selected flow: Complete reusable GRP forming mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Actual reusable GRP mould returned from outside (`mould_return_received`)

Record an actual external return received in full kg with condition, ownership, asset ID and prior inherited burden. It is not new procurement, manufacturing burden or building Q. Internal reuse is cancelled rather than recorded as a new external receipt.

- Selected flow: Complete reusable GRP forming mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

#### Outputs

##### Product flows

###### Conditional external condensate return (`condensate_return`)

Actual condensate physically returned outside the boundary is a gross Product return, measured in kg at its real T/P/liquid phase and enthalpy. It is not tap-water repurchase, waste by default, a negative input or a service-share-scaled mass. Reconcile with the same steam supplier agreement.

- Selected flow: Returned steam condensate water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal`
- Sources:

###### Internal wall handoff (`wall_transfer_out`)

Only the actual site-made component passes to assembly under a unique internal transfer ID. Carry wet component mass and every inherited exchange vector; this is neither a whole-building release nor a new external sale. Cancel it against the matching assembly receipt in the consolidated foreground.

- Selected flow: Cured GRP structural wall panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication_bridge`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Internal roof handoff (`roof_transfer_out`)

Only the actual site-made component passes to assembly under a unique internal transfer ID. Carry wet component mass and every inherited exchange vector; this is neither a whole-building release nor a new external sale. Cancel it against the matching assembly receipt in the consolidated foreground.

- Selected flow: Cured GRP roof panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication_bridge`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Internal base handoff (`base_transfer_out`)

Only the actual site-made component passes to assembly under a unique internal transfer ID. Carry wet component mass and every inherited exchange vector; this is neither a whole-building release nor a new external sale. Cancel it against the matching assembly receipt in the consolidated foreground.

- Selected flow: Cured GRP composite base and integral floor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication_bridge`
- Sources: `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008`

###### Actual external reusable GRP mould return (`mould_external_return`)

Record the actual functional asset returned outside at full gross mass, including all condition changes and its remaining vector. A legal/refused status does not erase actual movement. No co-product credit is automatic.

- Selected flow: Complete reusable GRP forming mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

##### Waste flows

###### Captured cured-composite trimming waste (`grp_trim_waste`)

One actually collected cured-GRP waste stream at its real moisture and composition. Do not use a boatyard-specific waste identity for a building plant or a Product-labelled fibre waste; other segregated outlets need their own actual cards. Dust captured here is not also atmospheric PM.

- Selected flow: Cured GRP trimming waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `epa-polyester-fabrication-2008`

###### Actual spent cleaning solvent (`spent_solvent`)

Actual separately collected solvent waste, including measured contaminants and water. Distinguish gross exported wet waste from internal solvent recovery and atmospheric acetone. One treatment provider receives this outlet once.

- Selected flow: Spent acetone cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `epa-polyester-fabrication-2008`

###### Uncured formulation waste (`uncured_resin_waste`)

Retain actual rejected, spilled or spent formulation and its wet mass, status and destination; supplier refusal or missing authorization does not erase it. Do not infer that it has cured or become a saleable co-product.

- Selected flow: Uncured polyester resin formulation waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fabrication`
- Sources: `epa-polyester-fabrication-2008`

###### Actual retired GRP mould waste (`mould_retirement_waste`)

Only an actual retired whole GRP tool exported as waste, at measured wet mass and documented waste status/provider. Conserve unassigned asset manufacturing burden explicitly; do not scale this physical waste by service fraction or substitute a Product UUID.

- Selected flow: Retired GRP forming mould waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

##### Elementary flows

###### Styrene to actual ambient air (`styrene_air`)

Conditional actual monomer emission only where composition identifies styrene and measurement separately resolves this molecule and its environmental compartment. Track supplied monomer, reacted/retained monomer, recovered monomer and actual releases independently; no resin fraction or AP-42 factor is assumed. Indoor and long-term or polymer-contaminated synonym records are not silently adopted.

- Selected flow: Styrene to actual ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `epa-polyester-fabrication-2008`

###### Acetone to actual ambient air (`acetone_air`)

Actual acetone molecule released from cleaning, separately from the purchased whole solvent and exported spent solvent. Identify real compartment and the full analytical mass basis. Total VOC cannot be relabelled acetone; incompatible indoor-media or chemical-alias records remain unresolved.

- Selected flow: Acetone to actual ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `epa-polyester-fabrication-2008`

###### Water vapour to actual ambient air (`water_vapour_air`)

Only actual H2O vapour with an independently measured water ledger and state; it is not a fitted mass residual. Keep formulation carrier water, cure/foaming reaction water, retained liquid and phase change distinct. Natural adsorption/desorption is not invented repair or second product.

- Selected flow: Water vapour to actual ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `epa-polyester-fabrication-2008`

###### Carbon dioxide from actual core foaming (`foam_co2_air`)

Only if actual reaction/blowing-agent evidence identifies CO2 formation and atmospheric release; identify its carbon source and retained cell gas separately. Do not assume water-blown foam or turn a whole gas/PM/VOC residual into CO2. Other actual blowing molecules require their own cards.

- Selected flow: Carbon dioxide from actual core foaming
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `epa-polyester-fabrication-2008`

### Process: Complete structural and fixed-installation assembly (`assembly`)

#### Inputs

##### Product flows

###### Matched wall component receipt (`wall_panel_in`)

Choose the actual complete supplied cured component or the matched internal component handoff for each BOM position. External article mass includes its cured resin, reinforcement, core, finish and included hardware once; do not repeat their purchases or curing. Internal handoffs carry the exact vector and cancel on consolidation. Mixed sourcing requires a reconciled transfer bridge, never article mass plus its full constituents.

- Selected flow: Cured GRP structural wall panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component_bridge`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `eldapoint-grp-panel-manufacture`

###### Matched roof component receipt (`roof_panel_in`)

Choose the actual complete supplied cured component or the matched internal component handoff for each BOM position. External article mass includes its cured resin, reinforcement, core, finish and included hardware once; do not repeat their purchases or curing. Internal handoffs carry the exact vector and cancel on consolidation. Mixed sourcing requires a reconciled transfer bridge, never article mass plus its full constituents.

- Selected flow: Cured GRP roof panel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component_bridge`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `eldapoint-grp-panel-manufacture`

###### Matched base component receipt (`base_panel_in`)

Choose the actual complete supplied cured component or the matched internal component handoff for each BOM position. External article mass includes its cured resin, reinforcement, core, finish and included hardware once; do not repeat their purchases or curing. Internal handoffs carry the exact vector and cancel on consolidation. Mixed sourcing requires a reconciled transfer bridge, never article mass plus its full constituents.

- Selected flow: Cured GRP composite base and integral floor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component_bridge`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `eldapoint-grp-panel-manufacture`

###### Complete GRP door assembly (`grp_door`)

Actual complete supplied door with recorded included frame, hinges, lock and gasket; included hardware is not purchased again. An uPVC door is a different actual article and needs its own card when used.

- Selected flow: Complete GRP door assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `uk-kiosks-technical-specification`

###### Complete glazed window assembly (`window`)

Only the documented whole supplied uPVC window, with glazing and fittings included once. Loose PVB, PV glass or PVC resin does not stand for this article. Other frame systems require actual separate identities.

- Selected flow: Complete uPVC glazed window assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `uk-kiosks-technical-specification`

###### Joint sealing formulation (`silicone_joint`)

One actual supplied neutral-curing silicone sealant formulation. Generic sealant-and-primer collection or a pure polymer is not a verified replacement. Supplied carrier, filler and cure components remain included; real separately applied primer requires its own chemical-specific card.

- Selected flow: Neutral-curing silicone joint sealant formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `uk-kiosks-technical-specification`

###### Separate door gasket (`epdm_gasket`)

Only separately supplied actual EPDM gasket not already included in the complete door. Record formulation, mass and replacement loss; a generic sealing-element family does not prove EPDM identity.

- Selected flow: EPDM rubber door gasket
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `uk-kiosks-technical-specification`

###### Separate joining bolt (`stainless_bolt`)

Only actual separately supplied stainless-steel bolts, with alloy and state evidenced. Screws, nuts and washers are separate actual articles if not delivered as one verified complete fixing set; a generic machinery fastener estimate or CN unspecified fastener does not prove this grade/form.

- Selected flow: Stainless-steel joining bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `uk-kiosks-technical-specification`

###### Fixed wiring harness (`electric_harness`)

Only actual complete supplied harness within fixed electrical scope. Record conductor, insulation, connectors and fitted length/configuration as subledgers; do not repurchase included copper. Separate loose wires and installation accessories actually procured need separate cards.

- Selected flow: Complete insulated copper wiring harness
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `uk-kiosks-technical-specification`

###### Fixed distribution board (`distribution_board`)

One actual complete supplied distribution-board assembly with its protection devices included. This optional fitted component is not the whole GRP building or a proxy for every electrical input.

- Selected flow: Complete building electrical distribution board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `uk-kiosks-technical-specification`

###### Fixed light fitting (`led_luminaire`)

Actual separately supplied fixed luminaire only, with included driver and housing once. No assumed fixture count, wattage, lifetime or use electricity.

- Selected flow: Complete LED luminaire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `uk-kiosks-technical-specification`

###### Ventilation louvre (`vent_louvre`)

Only actually fitted complete supplied louvre, with screen included if supplied. An active fan, HVAC unit or refrigerant is not implicit and needs its own actual atomic card if supplied.

- Selected flow: Complete GRP ventilation louvre assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `uk-kiosks-technical-specification`

###### Optional fixed wash-hand module (`plumbing_module`)

Only one actual complete supplied basin module with its explicitly included tap, trap and pipes. It is an optional component of a complete building, not a sanitary-ware substitute for the building. Independently procured sanitary fixtures and each pipe/fitting need separate cards if not in this supplied module.

- Selected flow: Complete fitted wash-hand basin module
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `eissa-grp-kiosks`; `eldapoint-grp-buildings`; `uk-kiosks-technical-specification`

###### Metered compatible grid electricity (`assembly_power`)

Use this native Product identity only for CN 1–35 kV grid-average consumption mix supplied to the user, as explicitly stated by its native names, geography and comments. It does not describe all world electricity, LV power, waste-incineration generation or a transformer service. Record actual voltage, supplier, meter boundary and any transformation already included; other supplies need a compatible separate atomic identity. Native reference property is Net calorific value with the energy unit group and MJ; it is not Mass or a combustion recipe. Preserve idle, startup, extraction, curing and failed-test demand at this stage, then use the single §8 normalization.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources: `epa-polyester-fabrication-2008`

#### Outputs

##### Product flows

###### Internal complete building to inspection (`inspection_building_out`)

Record the actual pre-release complete article, its net wet mass and inherited vector under the same serial. This internal handoff is not Q and is cancelled against release-stage receipt; failures return to the same WIP/vector ledger.

- Selected flow: Configured GRP building awaiting first complete-set release
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_component_bridge`
- Sources: `eldapoint-grp-buildings`

##### Waste flows

###### Actual combined factory waste outlet (`mixed_factory_waste`)

Only where one actual mixed outlet and one provider exist. Weigh total wet waste and independently measure originW by constituent/source as a non-additive subledger. Total and constituent subledgers are not both added; separately exported disjoint streams get separate cards. The landfill service name does not verify this waste composition.

- Selected flow: Mixed GRP-building assembly waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assembly`
- Sources:

### Process: First complete-set quality release (`release`)

#### Inputs

##### Product flows

###### Internal complete building receipt (`inspection_building_in`)

Match the exact assembly transfer and inherited vector. Reinspection and outsourced testing do not duplicate material purchases or building production.

- Selected flow: Configured GRP building awaiting first complete-set release
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release_bridge`
- Sources: `eldapoint-grp-buildings`

###### Metered compatible grid electricity (`release_power`)

Use this native Product identity only for CN 1–35 kV grid-average consumption mix supplied to the user, as explicitly stated by its native names, geography and comments. It does not describe all world electricity, LV power, waste-incineration generation or a transformer service. Record actual voltage, supplier, meter boundary and any transformation already included; other supplies need a compatible separate atomic identity. Native reference property is Net calorific value with the energy unit group and MJ; it is not Mass or a combustion recipe. Preserve idle, startup, extraction, curing and failed-test demand at this stage, then use the single §8 normalization.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `epa-polyester-fabrication-2008`

###### Actual supplied tap water (`release_water`)

Use only treated municipal/potable piped water supplied as a Product, with actual provider and local treatment coverage declared. It is not raw abstraction, deionized water, recovered condensate or resin carrier water already purchased. Native reference is Mass/kg; the secondary volume coefficient is not an independently measured density. Record gross supplied water, returned/recovered water, retained water, real drain and evaporation separately; a meter volume requires independent same-state density before conversion to kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

#### Outputs

##### Product flows

###### First complete-set released building (`finished_building`)

Use the native Product family only for an actual complete prefabricated building predominantly made of plastics at the stated manufactured factory gate. It carries Mass/kg and no fixed dimensions, grade, configuration, item mass or geography. The whole-building material/structural restriction applies here and throughout every consumer context: a plastic-clad metal frame, loose panel, resin, fibre or equipment cabinet is not this output. Q is measured once at first complete-set release; closing released FG is already included. Net mass contains the actual integral configuration and retained water/fluids once and excludes packaging. This declaration is the unique reference row.

- Selected flow: Prefabricated buildings, of plastics `8cc4a903-f6b7-4ab2-a6d5-7ab42abbeb09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `un-cpc3-prefabricated-buildings-2025`; `eissa-grp-kiosks`; `eldapoint-grp-buildings`

##### Waste flows

###### Actual released test wastewater (`test_wastewater`)

Record only actual gross wastewater leaving to treatment with measured composition and retained/final test-water state. COD is an indicator, not a specific chemical mass. If direct discharge occurs instead, create actual species-specific elementary flows and retain their measured carrier water without also buying the same treatment.

- Selected flow: GRP-building test wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

### Process: Observed post-release factory services (`services`)

#### Inputs

##### Product flows

###### Metered compatible grid electricity (`service_power`)

Use this native Product identity only for CN 1–35 kV grid-average consumption mix supplied to the user, as explicitly stated by its native names, geography and comments. It does not describe all world electricity, LV power, waste-incineration generation or a transformer service. Record actual voltage, supplier, meter boundary and any transformation already included; other supplies need a compatible separate atomic identity. Native reference property is Net calorific value with the energy unit group and MJ; it is not Mass or a combustion recipe. Preserve idle, startup, extraction, curing and failed-test demand at this stage, then use the single §8 normalization.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `epa-polyester-fabrication-2008`

###### Actual supplied tap water (`service_water`)

Use only treated municipal/potable piped water supplied as a Product, with actual provider and local treatment coverage declared. It is not raw abstraction, deionized water, recovered condensate or resin carrier water already purchased. Native reference is Mass/kg; the secondary volume coefficient is not an independently measured density. Record gross supplied water, returned/recovered water, retained water, real drain and evaporation separately; a meter volume requires independent same-state density before conversion to kg.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources:

###### Released building received for services (`released_building_receipt`)

Record actual first-release internal transfer or external return with original cohort, serial, wet net mass and inherited vector. Cancel only matched internal release transfers; a return links and reverses its original dispatch where appropriate. Do not purchase new manufacturing burden or generate Q. Use this Product only for the same complete predominantly-plastics building family and Mass/kg factory-manufactured identity; no loose panel or plastic-clad metal structure. Physical gross movement is not reduced by an allocation share.

- Selected flow: Prefabricated buildings, of plastics `8cc4a903-f6b7-4ab2-a6d5-7ab42abbeb09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `un-cpc3-prefabricated-buildings-2025`; `jrc-ilcd-allocation-2010`

###### Actual replacement complete GRP door (`replacement_door_in`)

Only a real replacement during H, with actual whole supplied door contents and original-cohort attribution. Retain full physical replacement mass and removed-door waste/functional-return status; do not reduce mass by service share. Replacement is an incremental event, not a second whole-building manufacture or Q.

- Selected flow: Complete GRP replacement door assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `eldapoint-grp-buildings`

#### Outputs

##### Product flows

###### Gross physical building dispatch (`building_dispatch`)

Record gross actual dispatched building net mass and its original release cohort. This is a service physical output, never a second reference quantity or a net-of-return production claim. Packaging is separately recorded and excluded from building mass; preserve all failed/refused actual shipments and linked returns. Closing FG remains a physical stock with its inherited vector, not a new output. Use this Product only for the same complete predominantly-plastics building family and Mass/kg factory-manufactured identity; no loose panel or plastic-clad metal structure. Physical gross movement is not reduced by an allocation share.

- Selected flow: Prefabricated buildings, of plastics `8cc4a903-f6b7-4ab2-a6d5-7ab42abbeb09`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources: `un-cpc3-prefabricated-buildings-2025`; `jrc-ilcd-allocation-2010`

##### Waste flows

###### Actual removed damaged door (`removed_door`)

Only an actual physical removal/drain during H. Retain full wet mass, composition, original cohort, status and destination; return as Product only with actual functional return evidence using a distinct compatible card. Replacement and genuine incremental work are separately measured and do not create new Q. No service share may shrink this gross outlet.

- Selected flow: Removed GRP door waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources:

###### Actual post-release test drain (`retained_test_water_out`)

Only an actual physical removal/drain during H. Retain full wet mass, composition, original cohort, status and destination; return as Product only with actual functional return evidence using a distinct compatible card. Replacement and genuine incremental work are separately measured and do not create new Q. No service share may shrink this gross outlet.

- Selected flow: Post-release test wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_services`
- Sources:

### Process: Actual phase-resolved packaging custody (`packaging`)

#### Inputs

##### Product flows

###### PE protective film — P (`pe_film_purchase`)

Actual P article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Actual PE film CAS9002-88-4 only; native luggage classification/PET comparison retained as countercontext, no PET/foam/multilayer substitution.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### PE protective film — I (`pe_film_included`)

Actual I article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Actual PE film CAS9002-88-4 only; native luggage classification/PET comparison retained as countercontext, no PET/foam/multilayer substitution.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### PE protective film — ER inward (`pe_film_return_received`)

Actual ER article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Actual PE film CAS9002-88-4 only; native luggage classification/PET comparison retained as countercontext, no PET/foam/multilayer substitution.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### PP packaging strap — P (`pp_strap_purchase`)

Actual P article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### PP packaging strap — I (`pp_strap_included`)

Actual I article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### PP packaging strap — ER inward (`pp_strap_return_received`)

Actual ER article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### Wooden transport pallet — P (`wood_pallet_purchase`)

Actual P article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Native explicit finished wooden load-platform Product at plant, only one actual pallet with integral constituents; not separate collars/boards or unfinished wood stock. Actual waste rows remain specific Waste, not a forced Product UUID.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### Wooden transport pallet — I (`wood_pallet_included`)

Actual I article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Native explicit finished wooden load-platform Product at plant, only one actual pallet with integral constituents; not separate collars/boards or unfinished wood stock. Actual waste rows remain specific Waste, not a forced Product UUID.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### Wooden transport pallet — ER inward (`wood_pallet_return_received`)

Actual ER article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Native explicit finished wooden load-platform Product at plant, only one actual pallet with integral constituents; not separate collars/boards or unfinished wood stock. Actual waste rows remain specific Waste, not a forced Product UUID.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### PE protective film — S_filled outward (`pe_film_dispatch`)

Actual S_filled article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Actual PE film CAS9002-88-4 only; native luggage classification/PET comparison retained as countercontext, no PET/foam/multilayer substitution.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### PE protective film — EO_empty outward (`pe_film_external_return`)

Actual EO_empty article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Actual PE film CAS9002-88-4 only; native luggage classification/PET comparison retained as countercontext, no PET/foam/multilayer substitution.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### PP packaging strap — S_filled outward (`pp_strap_dispatch`)

Actual S_filled article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### PP packaging strap — EO_empty outward (`pp_strap_external_return`)

Actual EO_empty article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### Wooden transport pallet — S_filled outward (`wood_pallet_dispatch`)

Actual S_filled article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Native explicit finished wooden load-platform Product at plant, only one actual pallet with integral constituents; not separate collars/boards or unfinished wood stock. Actual waste rows remain specific Waste, not a forced Product UUID.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### Wooden transport pallet — EO_empty outward (`wood_pallet_external_return`)

Actual EO_empty article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Native explicit finished wooden load-platform Product at plant, only one actual pallet with integral constituents; not separate collars/boards or unfinished wood stock. Actual waste rows remain specific Waste, not a forced Product UUID.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

##### Waste flows

###### PE protective film — W_whole wet waste (`pe_film_waste`)

Actual W_whole article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Actual PE film CAS9002-88-4 only; native luggage classification/PET comparison retained as countercontext, no PET/foam/multilayer substitution.

- Selected flow: Waste polyethylene protective film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### PP packaging strap — W_whole wet waste (`pp_strap_waste`)

Actual W_whole article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens.

- Selected flow: Waste polypropylene transport strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`

###### Wooden transport pallet — W_whole wet waste (`wood_pallet_waste`)

Actual W_whole article event only; record empty/filled condition, full gross wet physical article mass and custody once, disjoint from all other legs. Each real compatible pool closes O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out. O/C include empty, WIP-attached, accepted-FG-attached and reusable wet stocks. P independent purchase, I supplier-included/issued/loaned ingress and ER actual return received are disjoint. S_filled is only packaging within actual filled outward shipments; EO_empty only empty outward. J non-water and H2O changes are actual nonoverlapping increments/departures not already inside whole streams. X only OTHER same-side duplicate components, never true influx or wet C. W_whole includes substrate, retainedresin/dust/liquor and water once, nested components not extra exports/provider demand. No fixed composition/mass/count/life or reuse credit. Complete actual matched provider and upstream packaging history must be disjoint from already embedded supply burdens. Native explicit finished wooden load-platform Product at plant, only one actual pallet with integral constituents; not separate collars/boards or unfinished wood stock. Actual waste rows remain specific Waste, not a forced Product UUID.

- Selected flow: Waste wooden transport pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Complete actual physical event in its native unit per declared positive observation basis; shared event recorded once. Linked modeled demand uses separate evidenced attributable vectors per each original positive cohort reference mass and compatible provider units. Keep raw physical and burden ledgers; no second division; zero or unknown basis has no unit result.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-allocation-2010`


##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `dedicated_first` | attributional multifunctional process | Use independent dedicated measurement and actual or virtual subdivision first. Isolate building-specific materials, tooling, labour-linked activities and tests. Identify all co-functions and receiving cohorts, including rejected work and idle loads. A multifunctional product comparison and its QFD discussion is a separate case; it is not a licence to allocate this factory process by optional product features. | `jrc-ilcd-allocation-2010` |
| `causality_per_exchange` | remaining joint exchanges | For each exchange remaining after subdivision identify the determining physical causal relationship: how a quantitative change in a particular output/function changes that input or emission. Collect the independent driver and mechanism. A kg, area, machine-hour or revenue share alone is not causal proof, and one driver need not apply to all exchanges. Preserve directly traced constituent flows and emissions before any residual common-process allocation. | `jrc-ilcd-allocation-2010` |
| `residual_market_value` | genuinely unresolved common process | Only genuinely remaining non-causal common-process burdens use contemporaneous market values for the actual quantities, condition and same process gate, after demonstrating why subdivision and determining physical causality do not resolve them. Reconcile further purification, packaging or transport out of prices at other gates. State currency, period, co-output quantities, price evidence, residual burden population and sensitivity; no fixed fraction, arbitrary physical/economic choice or automatic avoided-product credit. | `jrc-ilcd-allocation-2010` |
| `assets_and_rework` | tooling, reusable assets and real losses | Conserve each reusable mould/rack/asset manufacturing-burden vector across all cohorts and periods: evidenced total service or an explicit forecast with uncertainty governs lifetime shares whose cumulative total cannot exceed one. Do not allocate a fresh full asset to every period. Real consumed replacements, repairs and their waste/returns are full physical events; only the manufacturing-burden share is apportioned. Internal regrind/recovered solvent retains its vector without new purchase or automatic credit. | `jrc-ilcd-allocation-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The protocol aggregation_rule identifies the eventual reference basis only. All protocols collect undivided raw amounts; conversion and true attribution precede the single normalize_exchange calculation. Collection and aggregation do not divide a second time.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_fabrication | fabrication | each actual raw-material and fabrication exchange | raw_foreground_records | event_id; time; site; cohort; serial or lot; row_id; actual material and supplied state; supplier and upstream gate; original amount and unit; received/issued/returned/exported quantity; opening and closing raw stock; opening and closing WIP; all inherited exchange vectors; rejected and zero-output load; calibration; method; uncertainty; actual_fixed_gate_phase; original_positive_Q0_event; original_basis_dispositions; actual_wet_stock_state_bridge; U_new_before_stock_correction; own_provider_history_nonoverlap; actual_receiver_Qt_once; full_actual_provider_quantity_once; nested_component_provenance; evidenced_nonoverlapping_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side | Weigh whole formulations and article lots; reconcile receipts, withdrawals, unused returns and physical stock changes separately from gross receipt records. Log actual mould/layup/core/curing/finishing states, all failed lots, cleanup, idle and start/stop. Use calibrated stage meters; do not infer a recipe from product mass. Record supplier-included carrier water and active contents only as subledgers. Keep full physical/provider quantities once, component/cohort provenance separately and actual per-original-cohort modeled vectors; actual pre-firstacceptance work remains manufacture, later work only after genuine complete acceptance. J nonwater/water extra changes are disjoint from whole-stream constituents; X only OTHER same-side duplicates. | kg; MJ | each physical event and meter interval | full reporting campaign including zero-output intervals and all open/close inventories | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |
| cp_component_bridge | assembly | each complete component and internal transfer | raw_foreground_records | event_id; time; site; cohort; serial or lot; row_id; actual material and supplied state; supplier and upstream gate; original amount and unit; received/issued/returned/exported quantity; opening and closing raw stock; opening and closing WIP; all inherited exchange vectors; rejected and zero-output load; calibration; method; uncertainty; BOM position; origin external/internal; transfer_id; included constituent/operation list; wet mass; inherited vector; matched sender and receiver; make-or-buy mask; actual_fixed_gate_phase; original_positive_Q0_event; original_basis_dispositions; actual_wet_stock_state_bridge; U_new_before_stock_correction; own_provider_history_nonoverlap; actual_receiver_Qt_once; full_actual_provider_quantity_once; nested_component_provenance; evidenced_nonoverlapping_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side | Reconcile each component as disjoint make or buy, or a measured bridge with exact transfer cancellation. Retain actual component counts and independent weighed masses; matched dimensions do not establish article completeness or create a density. Keep full physical/provider quantities once, component/cohort provenance separately and actual per-original-cohort modeled vectors; actual pre-firstacceptance work remains manufacture, later work only after genuine complete acceptance. J nonwater/water extra changes are disjoint from whole-stream constituents; X only OTHER same-side duplicates. | kg; actual count | each physical event and meter interval | all component receipts, fabrication handoffs and failed/reworked transfers in the same reporting cohort | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |
| cp_assembly | assembly | each actual assembly and fitted-component exchange | raw_foreground_records | event_id; time; site; cohort; serial or lot; row_id; actual material and supplied state; supplier and upstream gate; original amount and unit; received/issued/returned/exported quantity; opening and closing raw stock; opening and closing WIP; all inherited exchange vectors; rejected and zero-output load; calibration; method; uncertainty; actual_fixed_gate_phase; original_positive_Q0_event; original_basis_dispositions; actual_wet_stock_state_bridge; U_new_before_stock_correction; own_provider_history_nonoverlap; actual_receiver_Qt_once; full_actual_provider_quantity_once; nested_component_provenance; evidenced_nonoverlapping_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side | Use BOM-controlled issue/return weights, actual fitting records and calibrated energy meters; preserve whole supplied assemblies and their inclusion lists. Record actual sealing/coating, cutting, drilling, joining, fit-out and failed/replacement work. Add row-specific actual missing consumables and outlets before calculation. Keep full physical/provider quantities once, component/cohort provenance separately and actual per-original-cohort modeled vectors; actual pre-firstacceptance work remains manufacture, later work only after genuine complete acceptance. J nonwater/water extra changes are disjoint from whole-stream constituents; X only OTHER same-side duplicates. | kg; MJ | each physical event and meter interval | complete assembly and rework history for each first-release cohort | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |
| cp_release | release | first complete-set reference output and actual testing exchanges | raw_foreground_records | event_id; time; site; cohort; serial or lot; row_id; actual material and supplied state; supplier and upstream gate; original amount and unit; received/issued/returned/exported quantity; opening and closing raw stock; opening and closing WIP; all inherited exchange vectors; rejected and zero-output load; calibration; method; uncertainty; complete configuration; measured net release mass; actual retained fluid mass; scale tare; first-release decision/time; previous release flag; opening/closing released FG; actual test water/power; Q and original cohort Qc; actual_fixed_gate_phase; original_positive_Q0_event; original_basis_dispositions; actual_wet_stock_state_bridge; U_new_before_stock_correction; own_provider_history_nonoverlap; actual_receiver_Qt_once; full_actual_provider_quantity_once; nested_component_provenance; evidenced_nonoverlapping_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side | Weigh the complete configured building on calibrated scales excluding measured packaging and temporary tooling; for matched complete kits retain traceable weighed component totals with no overlap or missing parts. Inspect included roof/base/floor/doors/windows and declared fit-out against signed drawings and complete-set test records. Deduplicate first release by serial and configuration. Collect failed tests and retained/drained water as raw events; sum eligible first-release net masses only to establish Q. Keep full physical/provider quantities once, component/cohort provenance separately and actual per-original-cohort modeled vectors; actual pre-firstacceptance work remains manufacture, later work only after genuine complete acceptance. J nonwater/water extra changes are disjoint from whole-stream constituents; X only OTHER same-side duplicates. | kg; MJ | each physical event and meter interval | every actual first complete-set release and all unsuccessful tests; retain original cohort Qc beyond the period | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |
| cp_species | fabrication | each actual molecular release and retained/reacted species | raw_foreground_records | sample_id; analytical species; CAS where known; compartment; wet/dry and T/P state; original concentration and basis; integrated exhaust volume or genuine flow rate; actual time; capture; actual composition assays; reacted/retained/recovered/exported mass; independent water and carbon balances; detection limits; originW where mixed; actual_fixed_gate_phase; original_positive_Q0_event; original_basis_dispositions; actual_wet_stock_state_bridge; U_new_before_stock_correction; own_provider_history_nonoverlap; actual_receiver_Qt_once; full_actual_provider_quantity_once; nested_component_provenance; evidenced_nonoverlapping_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side | Measure each actual molecular mass independently; reconcile calibration, blanks, detection limits, wet/dry correction and actual exhaust state. Integrate a genuine rate only once. Use measured monomer and solvent assays to reconcile rather than assigning total VOC to one molecule. Record each actual gas/aqueous/solid destination separately; unknowns remain unknown. Keep full physical/provider quantities once, component/cohort provenance separately and actual per-original-cohort modeled vectors; actual pre-firstacceptance work remains manufacture, later work only after genuine complete acceptance. J nonwater/water extra changes are disjoint from whole-stream constituents; X only OTHER same-side duplicates. | kg; actual analytical units | each physical event and meter interval | all actual application, cure, foaming, cleaning and failure intervals during the reporting campaign | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |
| cp_thermal | fabrication | actual supplied steam and returned condensate | raw_foreground_records | provider; agreement boundary; gross supplied steam kg; gross returned condensate kg; T; P; phase; quality; independent enthalpy; meter; water service and heat service included; internal reuse; actual failures and losses; actual_fixed_gate_phase; original_positive_Q0_event; original_basis_dispositions; actual_wet_stock_state_bridge; U_new_before_stock_correction; own_provider_history_nonoverlap; actual_receiver_Qt_once; full_actual_provider_quantity_once; nested_component_provenance; evidenced_nonoverlapping_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side | Only for a real documented steam system: weigh/meter both gross physical directions, use actual state-dependent enthalpy evidence and reconcile supplier water/energy convention. Do not substitute standard water density or add a second heat purchase for the same service. Keep full physical/provider quantities once, component/cohort provenance separately and actual per-original-cohort modeled vectors; actual pre-firstacceptance work remains manufacture, later work only after genuine complete acceptance. J nonwater/water extra changes are disjoint from whole-stream constituents; X only OTHER same-side duplicates. | kg; MJ as non-additive enthalpy subledger | each physical event and meter interval | actual supplied/returned intervals only; absent system documented | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |
| cp_services | services | each observed original-cohort service and gross physical movement | raw_foreground_records | event_id; time; site; cohort; serial or lot; row_id; actual material and supplied state; supplier and upstream gate; original amount and unit; received/issued/returned/exported quantity; opening and closing raw stock; opening and closing WIP; all inherited exchange vectors; rejected and zero-output load; calibration; method; uncertainty; original cohort c; original release Qc; horizon H; opening/closing released FG; inherited manufacture vector; gross dispatch; linked return and reverse original dispatch; failed/refused event; actual incremental work; removed component; retained fluid; unknown future service; actual_fixed_gate_phase; original_positive_Q0_event; original_basis_dispositions; actual_wet_stock_state_bridge; U_new_before_stock_correction; own_provider_history_nonoverlap; actual_receiver_Qt_once; full_actual_provider_quantity_once; nested_component_provenance; evidenced_nonoverlapping_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side | Trace serial/cohort through actual stock, dispatch and return tickets. Meter only performed storage, handling, packing and corrective work; separate original manufacture from actual increments. Record complete gross physical components, fluids and wastes even for rejected or unauthorized events; never shrink material by a burden/price share or invent future work. Keep full physical/provider quantities once, component/cohort provenance separately and actual per-original-cohort modeled vectors; actual pre-firstacceptance work remains manufacture, later work only after genuine complete acceptance. J nonwater/water extra changes are disjoint from whole-stream constituents; X only OTHER same-side duplicates. | kg; MJ | each physical event and meter interval | actual H for each original measured Qc; future events excluded and unknown | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |
| cp_packaging | packaging | actual P/I/ER/S_filled/EO_empty/W_whole article events | raw_foreground_records | article_identity; actual_empty_filled_condition; actual_pre_post_acceptance_phase; original_positive_Q0_Qc; actual_H; O_empty_WIP_FG_reusable_wet_stocks; P_independent_purchase; I_supplier_included_issued_loaned; ER_inward_return; C_empty_WIP_FG_reusable_wet_stocks; S_filled_gross_outward; EO_empty_outward; W_whole_receiver_mass; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side_duplicate_only; nested_substrate_retainedmatter_water; actual_receiver_Qt_once; full_provider_quantity_once; compatible_service_units; evidenced_nonoverlapping_original_cohort_vectors; own_provider_history_nonoverlap; Qanalysis | Independently count/weigh each real whole article and custody event. Reconcile O+P+I+ER+J_in+H2O_in=C+S_filled+EO_empty+W_whole+J_out+H2O_out with full wet O/C, actual mutually exclusive P/I/ER and filledS/emptyEO, whole contaminatedW. J is real disjoint non-water matter change, H2O is actual disjoint water change excluding whole-stream contents; X removes only OTHER same-side duplicate children, never true influx/wetC/opposite legs. Retain full receiver/provider quantities once, separate component/provenance and compatible per-original-cohort A/originalQ0 vectors. Actual packaging work/energy is charged once to its producing manufacturing stage before firstacceptance or actual later service stage; custody bookkeeping creates no extra work/purchase. | kg; actual article count | each physical event and meter interval | Complete manufacturing cohort including failures/Q=0 and actual observed postrelease H, all wet opening/closing stocks; stages remain disjoint | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |
| cp_joint | assembly | attribution and residual multifunctionality | raw_foreground_records | exchange_id; actual dedicated amount; all co-functions and cohorts; subdivision/virtual-subdivision evidence; mechanism; driver amounts; unresolved residual population; common gate; contemporaneous quantity/state/price/currency; sensitivity; tooling service and cumulative shares; actual_fixed_gate_phase; original_positive_Q0_event; original_basis_dispositions; actual_wet_stock_state_bridge; U_new_before_stock_correction; own_provider_history_nonoverlap; actual_receiver_Qt_once; full_actual_provider_quantity_once; nested_component_provenance; evidenced_nonoverlapping_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side | Apply the §7 hierarchy separately by exchange using raw quantities. Record what remains after dedicated assignment, causal relations and actual common-gate price evidence only for the genuine residual. Keep gross physical mass accounts separate from allocated burden shares. Keep full physical/provider quantities once, component/cohort provenance separately and actual per-original-cohort modeled vectors; actual pre-firstacceptance work remains manufacture, later work only after genuine complete acceptance. J nonwater/water extra changes are disjoint from whole-stream constituents; X only OTHER same-side duplicates. | native unit; price and driver units | each physical event and meter interval | same actual manufacturing/service period and receiving population | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |
| cp_assets | fabrication | each actual complete reusable asset and physical return/waste | raw_foreground_records | asset_id; supplied construction; actual acquisition gross kg; external returned-received gross kg; external functional return gross kg; retired waste gross kg; opening and closing complete physical asset; all inherited exchange vectors; actual service already performed; evidenced total life service or forecast uncertainty; cumulative manufacturing shares; remaining burden; repair and replacement event IDs; actual_fixed_gate_phase; original_positive_Q0_event; original_basis_dispositions; actual_wet_stock_state_bridge; U_new_before_stock_correction; own_provider_history_nonoverlap; actual_receiver_Qt_once; full_actual_provider_quantity_once; nested_component_provenance; evidenced_nonoverlapping_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side | Count/weigh actual complete supplied tools independently. Reconcile full physical opening/receipts/returns/waste/closing without service-share scaling. Keep asset manufacture as one conserved vector across cohorts and periods; record actual service and total-life evidence separately. Real replacements/repair materials and outlets require their own physical event cards, never an assumed future recovery. Keep full physical/provider quantities once, component/cohort provenance separately and actual per-original-cohort modeled vectors; actual pre-firstacceptance work remains manufacture, later work only after genuine complete acceptance. J nonwater/water extra changes are disjoint from whole-stream constituents; X only OTHER same-side duplicates. | kg; actual service unit | each physical event and meter interval | actual tool life history, this reporting period and retained unknown future service | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |
| cp_fabrication_bridge | fabrication | each complete component and internal transfer | raw_foreground_records | event_id; time; site; cohort; serial or lot; row_id; actual material and supplied state; supplier and upstream gate; original amount and unit; received/issued/returned/exported quantity; opening and closing raw stock; opening and closing WIP; all inherited exchange vectors; rejected and zero-output load; calibration; method; uncertainty; BOM position; origin external/internal; transfer_id; included constituent/operation list; wet mass; inherited vector; matched sender and receiver; make-or-buy mask; actual_fixed_gate_phase; original_positive_Q0_event; original_basis_dispositions; actual_wet_stock_state_bridge; U_new_before_stock_correction; own_provider_history_nonoverlap; actual_receiver_Qt_once; full_actual_provider_quantity_once; nested_component_provenance; evidenced_nonoverlapping_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side | Reconcile each component as disjoint make or buy, or a measured bridge with exact transfer cancellation. Retain actual component counts and independent weighed masses; matched dimensions do not establish article completeness or create a density. Keep full physical/provider quantities once, component/cohort provenance separately and actual per-original-cohort modeled vectors; actual pre-firstacceptance work remains manufacture, later work only after genuine complete acceptance. J nonwater/water extra changes are disjoint from whole-stream constituents; X only OTHER same-side duplicates. | kg; actual count | each physical event and meter interval | all component receipts, fabrication handoffs and failed/reworked transfers in the same reporting cohort | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |
| cp_release_bridge | release | each complete component and internal transfer | raw_foreground_records | event_id; time; site; cohort; serial or lot; row_id; actual material and supplied state; supplier and upstream gate; original amount and unit; received/issued/returned/exported quantity; opening and closing raw stock; opening and closing WIP; all inherited exchange vectors; rejected and zero-output load; calibration; method; uncertainty; BOM position; origin external/internal; transfer_id; included constituent/operation list; wet mass; inherited vector; matched sender and receiver; make-or-buy mask; actual_fixed_gate_phase; original_positive_Q0_event; original_basis_dispositions; actual_wet_stock_state_bridge; U_new_before_stock_correction; own_provider_history_nonoverlap; actual_receiver_Qt_once; full_actual_provider_quantity_once; nested_component_provenance; evidenced_nonoverlapping_service_vectors; compatible_provider_units; original_Q0_each_cohort; Qanalysis; J_in; J_out; H2O_in; H2O_out; X_OTHER_same_side | Reconcile each component as disjoint make or buy, or a measured bridge with exact transfer cancellation. Retain actual component counts and independent weighed masses; matched dimensions do not establish article completeness or create a density. Keep full physical/provider quantities once, component/cohort provenance separately and actual per-original-cohort modeled vectors; actual pre-firstacceptance work remains manufacture, later work only after genuine complete acceptance. J nonwater/water extra changes are disjoint from whole-stream constituents; X only OTHER same-side duplicates. | kg; actual count | each physical event and meter interval | all component receipts, fabrication handoffs and failed/reworked transfers in the same reporting cohort | actual declared factory and linked supplier/contractor scope | per 1 kg reference flow | retained original tickets, meter calibration, identity/BOM evidence, signed status, balance residual and uncertainty |


### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `convert_raw_units` | all inventory rows | A_native = converted raw measured exchange; convert kWh to MJ with factor3.6 and weigh/convert physical units only with independent same-state evidence. Integrated quantities are not multiplied by duration again. Preserve raw original values and conversion uncertainty. | raw_measurement; unit_conversion_evidence | A_native |  |
| `attribute_raw` | all inventory rows | A = directly assigned or justified allocated A_native after dedicated/virtual subdivision, exchange-specific causality and only the genuine residual common-process allocation. For each exchange, add the actual opening-WIP vector to current assigned raw burden and subtract the actual closing-WIP and separately traced other-destination vectors; preserve raw-stock inherited vectors on actual issue. Released closing FG is already in Q and is not subtracted. Retain true losses and zero-output intervals. Gross physical article/fluid/waste/packaging movements remain full actual quantities, not burden-share-scaled quantities. | A_native; cp_joint; inherited_exchange_vectors | A | `jrc-ilcd-allocation-2010` |
| `normalize_exchange` | all inventory rows | Convert actual native extensive units once. Physical V/Qanalysis or Qt/Qanalysis discloses the one actual whole event/provider quantity once, not a full shared provider link per cohort. Separately compute each original served cohort modeled A/originalQ0 or Ah/originalQc using evidenced nonoverlapping vectors and compatible units. A=Bopen+U_new−Bclose−Tother uses U_new BEFORE stock correction and only genuinely unused raw/WIP carry; never acceptedFG or performedservice, no second correction or repeated own/provider history. Zero/unknown basis retainsrawtotals and unresolvedunitresult. | V; Qt; Qanalysis; A; originalQ0; Ah; originalQc; U_new; raw_WIP_vectors; actual_causal_evidence | a |  |
| `component_reconciliation` | component bridge | Match sender/receiver transfer IDs and physical mass plus every inherited exchange vector. Cancel equal internal movements at consolidation; actual external supplied article or separately purchased disjoint constituents enter once. Never add a supplied article mass and its already-included formulation/fibre/core again. | cp_component_bridge; BOM_origin_mask; inherited_exchange_vectors | reconciled_component_ledger | `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008` |
| `physical_balances` | all material and species gates | Keep independent total wet-mass and relevant element balances: opening + gross receipts = closing + all gross external outputs, including actual emissions/losses. Independently evidenced chemical formation/consumption applies to species balances only and must conserve the total-mass and element gates. Include actual phase-crossing water/gas quantities, not invented mass. Cancel matching internal transfers. Every flow has its own inherited burden vector; retain the complete wet closing stock. Do not use X except removal of a duplicate same-side OTHER record of the same actual event. Species and free/retained/reaction/phase water require independent observations; one residual cannot resolve two unknowns. | cp_fabrication; cp_species; cp_release; cp_services | physical_reconciliation |  |
| `packaging_reconciliation` | each packaging pool | Convert actual native extensive units once. Physical V/Qanalysis or Qt/Qanalysis discloses the one actual whole event/provider quantity once, not a full shared provider link per cohort. Separately compute each original served cohort modeled A/originalQ0 or Ah/originalQc using evidenced nonoverlapping vectors and compatible units. A=Bopen+U_new−Bclose−Tother uses U_new BEFORE stock correction and only genuinely unused raw/WIP carry; never acceptedFG or performedservice, no second correction or repeated own/provider history. Zero/unknown basis retainsrawtotals and unresolvedunitresult. | V; Qt; Qanalysis; A; originalQ0; Ah; originalQc; U_new; raw_WIP_vectors; actual_causal_evidence | reconciled_packaging_pool |  |
| `cohort_consolidation` | manufacture and observed services | For each original cohort preserve its first-release manufacturing vector once and add only actual H service increments normalized on the same original Qc. Internal release-to-services product transfers cancel; closing FG remains stock and already counted first-release Q is not reduced. Gross physical dispatch/return/removed-part/waste/fluid records remain full native quantities over original Qc. Preserve original-dispatch reversal and actual incremental rework attribution; no future service forecast is presented as executed work. | cp_release; cp_services; cp_packaging; inherited_exchange_vectors | original_cohort_result | `jrc-ilcd-allocation-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_scope | whole building and every exchange | Require positive principal-material and complete-set evidence plus actual form, state, route, constituent/grade, supplier geography, type, media and full native restrictions. A UUID does not prove supplier applicability or a finished-building performance claim. | BOM; drawings; full supplier specification; complete native record and support chain |
| mass_and_inventory | Q, stocks and inherited vectors | Measured complete-set Q and each raw/WIP/FG wet stock must reconcile physically and by inherited exchange vector. Repeat tests, shipping and returned articles never create new production. Packaging tare and integral retained fluids must be evidenced independently. | scale certificates; event-linked serial ledger; raw/WIP/FG balances; vector history |
| time_and_coverage | all included operations | Use the complete actual campaign and observed service horizon; retain all failures, zero-output, idle, start/stop, cleanup, wastes and unmetered intervals. Unknown amounts and absent upstream datasets remain explicit gaps with uncertainty; no fixed yield, life, cure schedule, emissions or certification is invented. | meter logs; job histories; missingness register; original supplier/contractor evidence |
| sources_and_units | all calculations and sources | Retain original raw units, conversion conditions, source-specific scope and any contrary evidence. Manufacturer examples support architecture/process possibilities, not LCA allocation or a universal quantitative recipe. Use current compatible provider data before publishing a concrete dataset. | native originals; actual measurements; method/assay records; source applicability ledger |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_complete_reference` | finished_building | Confirm a complete predominantly-plastics building and the unique finished_building Product output, Mass/kg and matching configuration. Require every qualifier and first-release net mass evidence. Incomplete shells, unrelated panel/fibre UUIDs and plastic-clad metal frames fail this reference gate. | `un-cpc3-prefabricated-buildings-2025`; `eissa-grp-kiosks` |
| `validate_make_buy` | all component rows | Reconcile the disjoint origin mask, complete supplied contents and every internal component vector. Reject double-purchased article constituents, duplicated cure/foam/glazing operations and unmatched handoffs. | `eldapoint-grp-panel-manufacture`; `epa-polyester-fabrication-2008` |
| `validate_measurement` | all inventory rows | Preserve raw collection followed by original-unit conversion, justified attribution and exactly one division by matched Q or original Qc. Q=0 has no unit result. Confirm current projection and finite bilingual reference consistency separately from physical/scientific evidence; an unsupported true relationship remains unresolved. | `jrc-ilcd-allocation-2010` |
| `validate_mass_species` | all physical and element gates | Check total wet mass, each relevant element and each independently observed chemical/water state separately. Preserve full wet closing stock, all retained constituents, actual gross return/outlets and measured originW without double addition. Do not close gaps with invented water, gas, repair, density or a COD/VOC/PM molecule. | `epa-polyester-fabrication-2008` |
| `validate_services_packaging` | services | Reconcile original manufacture, opening/closing FG, actual H service, gross dispatch/return and original reversals on original Qc. Verify each packaging pool and its I/ER/S/EO/W cards; internal reuse is not procurement, Q or credit. Neither logistics nor acceptance may shrink real physical movement or produce a second Q. | `jrc-ilcd-allocation-2010` |
| `validate_native_identity` | UUID-bearing cards and unresolved atomic rows | Require positive whole-article identity and complete original native evaluation including all properties and exact referenced property→unit-group→unit support. Keep native type, CAS, route, structure, grade, form, geography and media limits in consumer-visible descriptions. Blank auxiliary UUIDs retain specific atomic names and require later provider identity resolution; they do not justify a fictitious collection binding or removal of actual loads. | `epa-polyester-fabrication-2008` |
| `validate_no_default_claims` | dataset profile | Do not declare full upstream coverage, performance equivalence, scientific approval, translation review, release or a full-life assessment from engineering checks or manufacturer marketing claims. Quantitative provider gaps and actual core-method gaps are disclosed according to their real significance. | `jrc-ilcd-allocation-2010` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Compatible whole-building component of a declared construction model, or downstream study of the same complete factory configuration; retain original release and service boundaries |
| allowed_use | Attributional manufacture inventory per kg complete building with disclosed upstream coverage and actual optional observed-service module |
| excluded_use | Loose panel/resin substitution; plastic-clad metal frame; universal recipe; claimed certification, service-life comparison, occupancy service or full-life result without separate evidence |
| required_metadata | whole-building configuration and principal material evidence; actual structural shell and composite-base/floor supply scope; load-bearing frame identity; complete-set assembly or matched kit state; resin system and supplied formulation boundary; reinforcement form and core route; make-or-buy component register; geometry and face/layer definitions; door and glazing specification; interior and exterior finish inclusion; electrical installation inclusion; plumbing and retained-fluid state; serial and first release event; measured net mass and packaging tare; site and reporting period; supplier geography and electricity voltage; upstream gate and missing coverage; observed post-release horizon and original cohort; allocation and uncertainty |
| required_quality_disclosure | Actual measured Q/Qc; raw/WIP/FG and inherited vectors; source applicability; unresolved auxiliary identities and missing providers; observation horizon; allocation/sensitivity; wet-mass and species reconciliation |
| update_trigger | Changed structural system, polymer/formulation, core route, component gate, included fit-out, provider unit/voltage/geography, first-release definition, source or evidence of an omitted actual exchange |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-prefabricated-buildings-2025` | official_guidance | UN Statistics Division, CPC Ver.3.0 Explanatory Notes (30 June 2025), PDF p.195, class 3870 and subclasses 38701–38704; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Predominantly-plastics building identity; assembled/unassembled and incomplete-building alternatives.  |
| `eissa-grp-kiosks` | literature | Eissa Fiber Glass LLC, GRP Kiosks & Equipment Enclosures, undated publisher HTML; https://www.eissafiber.com/GRP-Kiosk ; retrieved 2026-10-23 | Positive complete-cabin product family; GRP walls/roof, composite-base or skid alternative, doors and optional fixed installations. Qualitative architecture only. |
| `eldapoint-grp-buildings` | literature | Eldapoint Group, Bespoke GRP Kiosks & Buildings, undated complete publisher HTML; https://www.eldapoint-group.co.uk/products/prefabricated-buildings-and-cabins/fibreglass-grp-buildings-and-kiosks/ ; retrieved 2026-10-23 | Factory manufacture of complete gatehouses; blank or fitted configurations, final utility connection boundary and quality-control context. Not proof of a particular site or specification. |
| `eldapoint-grp-panel-manufacture` | literature | Eldapoint Group, Fibreglass GRP Panel Manufacture, undated complete publisher HTML; https://www.eldapoint-group.co.uk/capabilities/fabrication-and-assembly/fibreglass-grp-panel-manufacture/ ; retrieved 2026-10-23 | In-house reinforcement/resin/gelcoat moulding and conditional core insertion; related to the same manufacturer building family, not an independent second manufacturer. |
| `epa-polyester-fabrication-2008` | official_guidance | US EPA, AP-42 §4.4 Polyester Resin Plastic Products Fabrication, February 2007 text and Table4.4-2 update May2008, complete nine-page PDF; https://www.epa.gov/sites/default/files/2020-10/documents/c04s04.pdf ; retrieved 2026-10-23 | Technical synthesis of supplied liquid-resin fabrication, layup, cure, release, cleaning and monomer-specific losses. Distinguish resin synthesis from cure; table notes warn about open-mould emission factors. No recipe, ratio, factor, temperature or cure time adopted. |
| `uk-kiosks-technical-specification` | literature | UK Kiosks, Worcester Range GRP Kiosk Technical Specification (second page headed Guardian Range), undated two-page PDF; https://www.ukkiosks.com/wp-content/uploads/2020/04/Worcester-Range-Technical-Specification.pdf ; retrieved 2026-10-23 | Counter-route: steel-supported base, GRP/polyurethane panels, actual oven treatment, fastened/sealed assembly, supplied glazing and optional electrics. Preserve mixed range headings; no dimensions, density, temperature or performance adopted. |
| `lloyds-grp-cubicles` | literature | Lloyds Composites, Polyester FRP/GRP Cubicles/Kiosks, undated four-page brochure; https://lloydscomposites.com/wp-content/uploads/2024/02/Kiosk-brochure.pdf ; retrieved 2026-10-23 | Counterexample: preassembled electrical-equipment cubicles may be open-bottom with a metal base. A kiosk label, panel or equipment cabinet alone does not prove the complete building scope. |
| `jrc-ilcd-allocation-2010` | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA—Detailed guidance, first edition March2010, §§7.9.2–7.9.3, printed pp.255–268; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional multifunctional-process hierarchy and exchange-specific causality; residual common-gate market values. Complete method scope and adjacent multifunctional-product/QFD exception retained. Not industrial recipe evidence. |
