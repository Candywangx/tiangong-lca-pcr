---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.factory-assembled-steel-frame-mineral-wool-office-cabin
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
translation_status: canonical
---

# Complete factory-assembled steel-frame mineral-wool office cabin

## 1. Scope and Applicability

This PCR defines new manufacture of one complete factory-assembled, single-storey steel-frame office cabin, with mineral-wool floor/wall/roof insulation, the declared board/lining/floor-covering options, complete door/window and fixed electrical fit-out. The controlled actual configuration must show a whole prefabricated building predominantly made of metal; a structural skeleton, shipping container, component bundle or bought complete-cabin repackaging does not qualify. The manufacturer CLASSIC Line document establishes this architecture and distinguishes sanitary, corridor, material and flatpack alternatives. The SHEQ report supplies qualitative fabrication/coating/final-assembly context across its production network. Their combination is a transparent technical synthesis, not one proven contemporary SKU, factory or order. No source-specific quantity, performance or certification is transferred as a general default.

The selected supply terminal is an independently complete assembled office cabin at first factory quality release, rather than a multi-cabin building completed on site. Sanitary/plumbing, HVAC, loose furniture, transport-container cargo function, foundation/site crane/joining/utility/earthing work, occupancy, maintenance and end-of-life are excluded from this configuration. Changes within the selected configuration need a separately disclosed dataset and fresh applicability assessment; other source architecture options are outside this selected method. Flatpack/incomplete buildings can fall within the broader CPC class but this assembled-office method does not claim their coverage.

The selected configuration uses a real P5 particleboard floor, vinyl roll floor covering, coated-chipboard wall/ceiling lining and mineral-wool floor/wall/roof insulation. Cement-bonded board, OSB, plywood and PU/PIR/stone-wool sandwich alternatives in the source are not blended into this inventory. These are actual evidenced options defining a meaningful narrower method, not a prescribed grade recipe or a claim that all combinations belong to one observed SKU. Record the complete supplied permanent building content, including the actual dedicated earthing clamp and any separately supplied installation fastener even if delivered loose. Exclude only real transport/temporary protection and handling assets from net supply mass; do not omit required permanent hardware as packaging.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.factory-assembled-steel-frame-mineral-wool-office-cabin |
| classification_refs | CPC 3.0 38702; narrower product and route boundary |
| covered_products | New complete factory-assembled single-storey steel-frame office cabin with mineral-wool enclosure and configured fixed electrical installation |
| excluded_products | Freight/storage containers; steel/material/component-only supply; bare building skeleton; sanitary modules; site-joined multi-module buildings; flatpack kits; concrete/timber-dominant buildings; refurbishment and construction services |
| representative_product | One independently complete office cabin with its controlled whole-building inclusion list, geometry and acceptance state |
| production_route | Received cold-rolled sheet to frame cutting/forming/welding and actual primer/powder finish; galvanized-sheet/mineral-wool/timber/board envelope assembly; door/window/electrical fit-out; factory inspection and first release |
| market_state | New complete assembled office cabin at first factory quality release; actual retained moisture included; transport protection excluded; foundation, site earthing/utility connections and occupancy outside gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and first quality release of the complete configured metal office building |
| How much | 1 kg of the same complete first-released configured cabin; Q measured net kg over its first-release cohort |
| How well | Controlled whole-building inclusion list and actual configuration-specific factory checks passed; functional/performance claims require their own evidence and are not implied by classification or catalogue options |
| How long or cycle | One manufacturing release event per cabin; no assumed building service life or occupancy service |
| reference_flow_link | `finished_cabin` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Prefabricated buildings, of metal `2e810bc4-023d-4ad0-8466-3a3978f815e1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers |manufacturer/factory/geography/period; single complete office-cabin serial/configuration; predominantly metal building identity and non-freight status; whole supply inclusion/exclusion list; actual floor count and floor-area definition/measurement; external/internal geometry and openings; frame grade/sheet and joining route; supplier/site coating gates and actual formulations; floor/wall/roof layer and moisture specification; thermal/air/water/fire claims only as evidenced configuration data; doors/windows and installed electrical completeness; absence of sanitary/HVAC/loose fit-out in this configuration; purchased whole articles versus disjoint site constituents; first-release event and measured net kg Q; raw/WIP/FG and inherited exchange vectors; original Qc and post-release service horizon H; gross flows/returns/packaging pools and receiver gates; actual tests/failed lots/rework/idle/cleanup; source/native applicability and upstream gaps; actual P5 floor/vinyl/coated-chipboard selected assembly; complete supplied permanent earthing hardware and site commissioning interface |

Declare every qualifier in dataset metadata, reference comment or an equivalent complete record. One kg is a scaling basis for the whole building; it is not an isolated kilogram of steel.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| release_mass | reference product | Mass | kg | Q is the sum of measured net kg of each complete configured cabin first quality-released once in the cohort. Weigh on a calibrated scale or reconcile calibrated masses of the complete actual configuration; subtract only measured excluded transport/temporary items. Catalogue approximate weights are not Q. |
| single_normalization | all inventory rows | Declared native property | Declared native unit | Keep raw V in its original units; convert genuine rates by time integration and unit conversions before physical reconciliation and burden attribution. Already integrated volumes are not multiplied by time again. normalize_once produces the sole per-reference result. Collection retains raw quantities, never a pre-divided result. |
| native_chain | UUID-bearing rows | Exact reference property | Exact reference unit | A selected flow retains its full native restrictions and reference-property version to unit-group version and reference-unit chain. Number of items Item(s) and item differ only by spelling (factor 1); no item-to-kg, area-to-mass or density inference. Any needed conversion requires independent measured same-configuration net mass or actual geometry/material-specific density and state. |
| solid_volume | timber_stud; floor_board | Volume | m3 | Retain native solid-volume units for actual sawn timber and P5 particleboard. Measure supplied/used net solid geometry and moisture by lot; independently weigh wet mass for physical closure. Density conversion is allowed only from independent same-material measurement at the actual state, never a catalogue or secondary property factor. |
| water_energy | water and heat/fuel/electricity | Declared native property | Declared native unit | Separate supplied full formulations/articles from their non-additive assays; distinguish retained/free/liquid/vapour/structural/reaction water only with evidence. Electricity kWh times 3.6 gives MJ. Actual carrier water/condensate/hot-water returns need gross mass, phase, T/P, enthalpy and supplier water/energy ownership; one supply is not purchased again as both kg and heat MJ. No steam/boiler loop is assumed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased sheet/finished materials and complete components at their actual supplier gates; recorded initial raw/WIP/FG, fluid and packaging stocks |
| starting_condition_role | Foreground factory manufacture, with upstream extraction/steelmaking/rolling/galvanizing and supplier article manufacture linked separately |
| product_classification_scope | Complete metal prefabricated building within broader CPC38702; selected assembled single office-cabin configuration only |
| recursive_input_rule | An actual purchased same-category complete cabin is a distinct input with its original gate and inherited burdens; refurbishment or resale does not become this new-manufacture output and does not recursively duplicate manufacture |
| upstream_dataset_requirement | Link every actual supplied atomic material/article/utility and outsourced step to compatible grade, route, form, geography, composition, unit and provider gate; disclose unmatched input and prevent duplicated supplier work |
| disclosure | Factory boundary, true supplier/site split, whole configuration, actual observations and missing records; first-release Q versus shipment/service Qc; upstream/transport/treatment/capital coverage; no unsupported cradle-to-gate or performance claim |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_terminal | reference product | Accept only the complete configured office building, with frame/envelope/openings/fit-out confirmed against one controlled inclusion list. A material list, single beam, freight container, naked frame or component receipt alone cannot establish this terminal. Manufacturer examples support technical synthesis, not a claim of one SKU/factory/order. | `containex-classic-2025`; `unsd-cpc3-2025` |
| actual_manufacture | factory operations | Include actual receipt, cutting/punching/bending/welding, frame pretreatment/coating, envelope fabrication/assembly, electrical installation, inspection, rework, extraction and cleanup. Record actual physical/chemical inputs and exports rather than substituting bought finished-cabin packaging. Supplier-finished galvanized sheet, boards, doors/windows or electrical modules inherit supplier manufacture once; do not repeat steelmaking, galvanizing or article recipes. | `containex-sheq-production`; `containex-classic-2025` |
| article_bridge | all supplied articles | Use either whole supplied article/formulation or disjoint purchased constituents, or an explicitly reconciled bridge cancelling internal handoffs. Full article wet mass and its own wood/steel/glass/insulation/water/resin must not both be added. Assay/carrier-water/active fractions are non-additive subaccounts. Actual site mixing uses each separately purchased component, real energy, losses and actual recipe records. | `containex-classic-2025`; `containex-sheq-production` |
| gate_and_exclusions | production and post-release | Q occurs at first factory quality release, including that cohort retained in closing FG. Do not subtract closing FG from this already released output or add it again. Preserve actual packaging, storage, handling, shipment, reinspection and incremental repair in a distinct service account tied to original Qc and observed horizon H. Future unperformed service is unknown. Cancel internal release handoffs in consolidated accounting; foundations, site lifting/joining, site earthing/connections, occupancy and later life are separate. | `containex-classic-2025`; `containex-sheq-production` |
| nonzero_and_stock | all cohorts and physical gates | Keep failed/rejected/unauthorised/zero-output lots, start/stop, idle, cleanup, testing and actual rework loads. Opening/closing WIP has each actual physical material and inherited exchange-specific burden vector; transferred WIP carries both without loss or duplication. Raw and non-WIP stocks, finished goods, fluids, waste and reusable assets remain distinct. Reinspection/returns/authorisation do not create Q or erase actual loads. | `containex-sheq-production` |
| atomic_extension | actual exchanges | The cards are conditional single exchanges, not a mandatory recipe. Add every actual unlisted fastener, gasket/membrane/adhesive, cleaner, abrasive, fuel, gas, reaction species, captured dust, waste and destination as its own card before dataset closure. Supplier/SDS and process evidence define the identity. Unknown actual flux, shielding gas, coating chemistry, air/water route or molecular balance stays unresolved; absence needs evidence, not zero or a hidden other collection. | `containex-sheq-production` |

### Whole supply and source applicability

The selected configuration uses a real P5 particleboard floor, vinyl roll floor covering, coated-chipboard wall/ceiling lining and mineral-wool floor/wall/roof insulation. Cement-bonded board, OSB, plywood and PU/PIR/stone-wool sandwich alternatives in the source are not blended into this inventory. These are actual evidenced options defining a meaningful narrower method, not a prescribed grade recipe or a claim that all combinations belong to one observed SKU. Record the complete supplied permanent building content, including the actual dedicated earthing clamp and any separately supplied installation fastener even if delivered loose. Exclude only real transport/temporary protection and handling assets from net supply mass; do not omit required permanent hardware as packaging.

The factory gate is the complete manufactured single building supply, with its declared installed and supplied-to-install states. It is not a claim that foundation support, site lifting, hole sealing after transport-cover removal, protective earth connection, utility hookup, site structural arrangement or commissioning has already occurred. CLASSIC requires site foundations/support conditions and customer earthing/electrical checks before commissioning, and describes empty-road transport and a separate Transpack alternative. Retain those real downstream interfaces and source restrictions; no catalogue load, geometry, angle, torque, electrical rating or lifetime becomes a dataset default. An owned operation required to finish the selected factory supply is included wherever actually performed; moving its invoice or calling an unfinished module complete cannot remove it. Actual site-assembled/incomplete or multi-unit buildings require a separately evidenced route and are outside this selected terminal.

Every supplied sheet, insulation batt, board, door/window, harness, distribution assembly, luminaire, connector, clamp, formulation, fuel and packaging article requires a genuine complete matched upstream producer or a mutually exclusive expanded actual inventory. Cover actual metal extraction/steelmaking/rolling/galvanizing, fibre/binder and board production, electrical component/assembly manufacture, finishes, utilities, maintenance, packaging and waste as applicable. Whole supplied articles include their identified parts, resin/carrier water, coatings and installed hardware once. Source production photographs/capabilities are qualitative evidence, not a measured contemporary supplier order. No same-factory/SKU condition is imposed across independent evidence; an actual incompatible provider/route/form/geography/property remains unresolved. No complete cradle-to-gate claim before genuine provider interfaces and all actual owned manufacture are covered.

Include real factory cleaning, joining, pretreatment, coating/curing and their full chemical/species destinations at actual provider/site gates. The historical source describes primer plus powder coating but does not prescribe a nanochemical, degreasing/phosphate recipe, curing reaction, burner, gas ratio or emission factor. Record actual formulations/assays, purchased premix versus separately supplied gases, captured dust/filter/wipe, liquid purge and each real receiving medium. Actual on-site fuel use needs its complete molecular air/fuel/water/species and energy interface, with background carrier CO2 distinct from generated fossil/biogenic carbon. Do not infer complete combustion, a PM/NOx/VOC molecule, all solvent evaporation, conserved reacting species or residual-fit water. Unknown material chemistry or essential speciation/sampling applicability keeps the affected concrete inventory unresolved; ordinary unperformed lot QA alone does not mean there is no method.

The adopted whole Product is the manufactured finished predominantly-metal building family, production mix at plant, Mass/kg with its actual reference property/unit chain. It supplies no composition recipe, country, configuration, floor area or kg per building. Source-backed steel-frame whole-cabin manufacture and actual inclusion/acceptance records establish the selected product; steel, panels, transport containers, incomplete modules and erection services cannot substitute. Auxiliary native names include broad explanatory alternatives: particleboard is not OSB, sawn lumber is not a complete wooden frame, an exterior-window article retains its complete glazing/frame/hardware, powder coating is a dry supplied formulation and a low-voltage assembled distribution board is not a bare cabinet. Each actual bound material must fit every real hard field; qualifications cannot overwrite contradictions. Bound CN low-voltage electricity is only a conditional actual CN supply, never evidence that the European manufacturer example consumed CN electricity.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_pack | each actual material pool | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. All terms are actual kg for one material/asset pool. O/C are complete wet opening/closing empty, attached WIP, attached FG and reusable stocks. P is new external procurement, I is disjoint supplier-included whole packaging ingress, ER external return received, S full gross shipment-attached export, EO independent external return sent, W whole wet discard. J_in/J_out are independently measured non-water repair/replacement/deposit/residue or other pool transfers not already in those whole legs. H2O_in/H2O_out are independently measured actual water transfers not already embodied in whole legs, including natural adsorption/desorption without repair. Split real wet added/removed materials into disjoint J and water from actual measurements, with no default ratio/density. Full W contains substrate, retained residues and water once; its nested children are not extra J_out/H2O_out unless actually separated before crossing. Matched internal pool transfers cancel without new purchase, service or Q. |  |

The CLASSIC English original is a publisher translation and explicitly directs consultation of the German version in case of doubt; unresolved translation/technical ambiguity cannot be repaired by a keyword or a convenient native unit. The historical SHEQ production text identifies robotic/plasma processing, frame welding, primer/powder finishing, final assembly, inspection and loading; it does not establish a universal solid-wire MAG process, shielding-gas recipe, energy source or coating chemistry. The named consumable and equipment cards are conditional on actual documented operations. CLASSIC and SHEQ share a publisher and are distinct specification/historical production evidence, not two independent factory observations. Preserve all configuration, country, source-edition and certification limitations; no promotional environmental benefit is adopted.

## 6. Process Inventory Structure

All cards are individual physical exchanges and conditional evidence requirements, not a default BOM. At closure each actual independent item/formulation, process input, waste, chemical species and destination must have its own card. When a supplied article already includes a constituent, use a disjoint representation or reconciled article bridge with internal transfers cancelled; never add full article wet mass and its embodied materials again. A single physically mixed waste uses one total with independent non-additive measured originW subaccounts and one provider. No actual exchange may be hidden by zero, other, unresolved UUID or an absent card. Full row descriptions, including every supplier/native restriction, are part of the rule.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| frame | Frame fabrication and corrosion protection | required | Actual sheet processing, joining and declared frame surface route | foreground manufacture / actual cohort service | per 1 kg reference flow |
| envelope | Insulated enclosure manufacture and assembly | required | Actual disjoint components and declared complete layer configuration | foreground manufacture / actual cohort service | per 1 kg reference flow |
| fitout | Complete openings and fixed electrical fit-out | required | Controlled complete office-cabin supply list | foreground manufacture / actual cohort service | per 1 kg reference flow |
| release | Whole-cabin inspection and first quality release | required | Whole independent complete assembled cabin | foreground manufacture / actual cohort service | per 1 kg reference flow |
| support | Actual factory utilities and physical/species ledgers | required | Each individual input/output only when it actually occurs | foreground manufacture / actual cohort service | per 1 kg reference flow |
| postrelease | Actual post-release packaging and FG services | conditional | Only actually executed services and full gross movements through observed H, bound to original Qc | foreground manufacture / actual cohort service | per 1 kg reference flow |
| assets | Actual production and handling equipment fleet | conditional | Only actual physical fleet/service events; no mandatory equipment recipe | foreground support | per 1 kg reference flow |

### Process: Frame fabrication and corrosion protection (`frame`)

#### Inputs

##### Product flows

###### Cold-rolled non-alloy steel sheet for cabin frame (`steel_sheet`)

Received sheet/coil for actual cutting, punching, bending and welded floor/roof frames. Retain mill grade, thickness, surface and supplier state; zinc-coated stock is a separate supplied identity. Supplier rolling/steelmaking is upstream. Weigh issue and unused return separately; no catalogue steel-mass factor. At-plant production-mix steel sheet/plate, iron with minor carbon/manganese/sulfur/phosphorus/silicon, permitting cold or hot rolling. This card is restricted to the actual received cold-rolled non-alloy sheet with supplier grade/thickness/surface confirmed; it is not rod, alloy steel, already finished frame or a coating recipe. Generic supplier/grade absence does not invent values. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Steel sheet `13082a6a-e820-45ec-89f5-3c2c3650495b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frame`
- Sources: `containex-sheq-production`

###### Solid carbon-steel welding wire (`weld_wire`)

Only where actual welding uses this solid-wire consumable. Record designation, composition, spool issues/returns and weld procedure; the source proves welding, not this consumable or a universal MAG route. Add each actual electrode/flux separately if different. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Solid carbon-steel welding wire
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frame`
- Sources: `containex-sheq-production`

###### Argon–carbon-dioxide welding shielding premix (`shield_premix`)

Conditional on the actual purchased premix and weld procedure. Purchase the whole supplied mixture once; measure composition and cylinder net mass or state-specific volume/density. Constituents are non-additive subaccounts. Pure gases require separate disjoint supply rows; no assumed blend ratio. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Argon–carbon-dioxide welding shielding premix
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frame`
- Sources: `containex-sheq-production`

###### Frame corrosion-protection primer formulation (`primer`)

One actual purchased primer used before powder coating. The historical report describes nanotechnology primer but gives no recipe, resin or bath concentration. Retain supplier SDS, supplied full formulation including carrier water, additions, tank stocks and real losses; assay and water are subaccounts, never additional purchases. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Frame corrosion-protection primer formulation
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frame`
- Sources: `containex-sheq-production`

###### Frame powder-coating formulation (`powder`)

One supplier-confirmed complete powder formulation. Record polymer/crosslinker/pigment/filler content without inventing a recipe. Weigh new additions, reusable powder pool, overspray and waste; internal recovered overspray is not purchased again. Actual pretreatment, application and cure conditions/energy must be collected. At-plant complete free-flowing dry powder paint for charged-surface application and actual heat/UV cure. No resin, solvent fraction, temperature, cure duration, efficiency or performance value is fixed. One supplier formulation is purchased once; ordinary composition/provider gaps require records and do not permit a wet-paint or finished coated-component substitution. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Powder coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frame`
- Sources: `containex-sheq-production`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Segregated steel fabrication offcut waste (`steel_scrap`)

Actual steel offcuts leaving this gate, with alloy/coating/contamination and receiver declared. Full gross exported quantity is separate from generation and closing stock. Internal reuse cancels; no automatic saleable-product status or avoided-steel credit. CN at-plant cutting/forming steel offcut Waste only, with no yield/rate provided. Other geography, oily/welding sludge, demolished steel or another actual scrap state requires a matching identity; no5% yield assumption or automatic recycling credit. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Steel scrap `f80ac6d2-641b-4a7c-a309-1142663d01d8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_physical_frame`
- Sources: `containex-sheq-production`

###### Spent frame-pretreatment sludge (`coating_sludge`)

Only actual wet sludge from this coating route. Retain dry solids, water and actual hazardous constituents as subaccounts of the one wet export, not duplicate Waste purchases/outputs. Missing composition requires analysis, not residual fitting. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Spent frame-pretreatment sludge
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_physical_frame`
- Sources: `containex-sheq-production`

###### Unrecoverable frame powder-coating waste (`powder_waste`)

Only powder that actually leaves for waste management; distinguish reusable booth inventory, filter-held powder and dispatched waste. Contamination and receiver govern the identity. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Unrecoverable frame powder-coating waste
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_physical_frame`
- Sources: `containex-sheq-production`

##### Elementary flows

### Process: Insulated enclosure manufacture and assembly (`envelope`)

#### Inputs

##### Product flows

###### Finished galvanized steel cabin cladding sheet (`galv_sheet`)

Purchased galvanized sheet for the roof, underfloor or external wall, separately identified by application and coating state in raw records. Purchased prepainted sheet already includes supplier coating; do not add zinc or supplier paint again. Actual site profiling/cutting is retained. Different grades/coatings require separate rows. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Finished galvanized steel cabin cladding sheet
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_envelope`
- Sources: `containex-classic-2025`

###### Finished mineral-wool cabin insulation batt (`mineral_wool`)

Actual mineral-wool route only, for floor/roof/wall quantities kept separately. Retain fibre family, binder, facing, water content, dimensions and supplied mass. Rock wool and glass wool are not automatically interchangeable; no density, thermal rating or thickness is prescribed. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Finished mineral-wool cabin insulation batt
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_envelope`
- Sources: `containex-classic-2025`

###### Finished sawn timber cabin wall stud (`timber_stud`)

For the source-supported mineral-wool wall timber frame and actual roof crossmembers. Retain species, treatment, grade, moisture and measured mass; distinguish stock from installed timber and offcuts. No species, dry density or preservative recipe is inferred. At-plant sawn/planed dimensional construction lumber; pine and oak are examples, not prescribed species. Native reference Volume/m3 must be retained. Measure actual solid dimensions/volume with moisture/state; independently weigh wet physical mass for closure or use independently measured same-material density at that state. No secondary coefficient or default density converts m3 to kg. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Lumber `ca253295-1699-4c83-9933-9467a136a4fc`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_envelope`
- Sources: `containex-classic-2025`

###### Finished P5 particleboard cabin floor panel (`floor_board`)

Only the declared actual P5 floor option. Cement-bonded board, OSB and plywood shown nearby are alternatives, not simultaneous recipe ingredients; a different actual option requires its own atomic card. Purchased board includes its resin and supplier manufacture once. One actual P5 particleboard floor panel within the finished wood-chip/shaving/resin board family, not every alternative in the broad official Chinese display. UF is described as common, not a mandatory recipe. Native Volume/m3 remains; collect actual panel net solid volume and independent wet mass/moisture, with no default density. No coating/laminate or supplier resin is repurchased. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Particle Board `f4a05509-d5ba-4e62-a3fa-9cc2bf91ef5a`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_envelope`
- Sources: `containex-classic-2025`

###### Finished coated particleboard cabin lining panel (`lining_board`)

Actual coated chipboard wall/ceiling/partition lining. Identify each specification and supplied finish; supplier resin/coating is embedded, not repurchased. Sheet-metal/plasterboard lining alternatives are outside this declared configuration unless separately specified and inventoried. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Finished coated particleboard cabin lining panel
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_envelope`
- Sources: `containex-classic-2025`

###### Finished vinyl cabin floor-covering sheet (`vinyl_floor`)

One actual supplied finished flooring formulation, including backing/fillers. Record roll mass, laid area and cut losses; hot seam welding occurs only where performed. Do not reconstruct this article as virgin PVC plus duplicated finished flooring. One complete finished vinyl/plastic floor-covering roll within the at-plant manufactured covering-article family. Wall/ceiling/tile alternatives in its official basename are not additional purchases or a combined physical exchange. Confirm actual vinyl formulation/backing and installed state; raw PVC resin or laminate wood flooring is not this article. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Floor coverings of plastics, in rolls or in the form of tiles, wall or ceiling coverings of plastics `97494e7c-4947-433c-9b86-cf2baa643329`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_envelope`
- Sources: `containex-classic-2025`

###### Supplied silicone construction sealant formulation (`silicone_sealant`)

Only actual factory-applied silicone sealant with supplier composition, carrier and cure system confirmed. Site-only transport-hole sealing is outside this gate. Other actual sealants/adhesives require their own cards; no cure by-product or water reaction is assumed. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Supplied silicone construction sealant formulation
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_envelope`
- Sources: `containex-classic-2025`

###### Finished elastomer cabin weather gasket (`weather_gasket`)

One specified finished gasket article where actually fitted to the envelope. Identify polymer, section, full supplied composition and mass; do not substitute raw rubber or assume a vapour membrane. Any actual separate air/vapour/water membrane or fastening tape needs its own card and measured quantity. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Finished elastomer cabin weather gasket
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_envelope`
- Sources: `containex-classic-2025`

###### Finished steel cabin-frame bolt (`steel_bolt`)

One specified bolt article used to connect posts to floor/roof. Purchased coating is included once; actual nuts, washers, screws, rivets and inserts are distinct articles requiring separate cards when present, not a fastener collection. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Finished steel cabin-frame bolt
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_envelope`
- Sources: `containex-classic-2025`

###### Finished steel cabin lining screw (`steel_screw`)

One actual screw product for envelope fitment. Retain dimensions, alloy and finish, issued/unused stock and installed mass; separate other physical fasteners rather than hiding them in this row. GLO production mix at plant; assembly auxiliary steel screw only, with no fixed grade/coating or supplier established. It does not identify a bolt/nut/rivet/washer or a whole fastener collection; actual specification and upstream provider still require review. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Steel screw `895204f6-6425-4814-afc5-cb97e530e892`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_envelope`
- Sources: `containex-classic-2025`

###### Supplied floor-covering adhesive formulation (`floor_cover_adhesive`)

Only one actual whole supplied flooring adhesive if used for the selected P5/vinyl route. Strip welding and bonding are not assumed identical; separately supplied hardener or primer needs its own card.

- Selected flow: Supplied floor-covering adhesive formulation
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_envelope`
- Sources: `containex-sheq-production`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Particleboard cutting-offcut waste (`board_offcut`)

Only this actual segregated board-offcut stream; retain coating/resin and moisture. Export mass, on-site retained stock and generation differ. A genuinely mixed waste may instead use one MixedWaste card with measured non-additive origin subaccounts and a single provider; never force a fictitious separated export. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Particleboard cutting-offcut waste
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_physical_envelope`
- Sources: `containex-classic-2025`

###### Mineral-wool insulation-offcut waste (`wool_offcut`)

Actual segregated mineral-wool offcut export, with fibre/binder/facing and moisture retained. Captured dust and attached WIP inventory are separate states; no assumed harmless or recoverable status. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Mineral-wool insulation-offcut waste
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_physical_envelope`
- Sources: `containex-classic-2025`

##### Elementary flows

### Process: Complete openings and fixed electrical fit-out (`fitout`)

#### Inputs

##### Product flows

###### Finished insulated steel cabin door assembly (`door`)

Purchase the complete door leaf/frame/seal/hardware assembly once with its actual inclusion list. The manufacturer describes coated galvanized steel leaves and insulated options; actual component masses are non-additive article subaccounts. Independently supplied hardware is disjoint, not repurchased inside the assembly. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Finished insulated steel cabin door assembly
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fitout`
- Sources: `containex-classic-2025`

###### Finished double-glazed plastic-frame cabin window assembly (`window`)

One actual complete office window with declared frame polymer, glazing, gas fill, seal, shutter and hardware inclusion. Supplier glass/frame/gas manufacture is upstream; do not also purchase those embodied constituents. Catalogue glazing dimensions and gas are not universal measurements. At-plant manufactured exterior-window family, one complete supplied plastic-frame double-glazed office window with its actual shutter/hardware inclusions. The native comment lists optional trim/shutter/flashing and new/replacement installation examples; these do not require a specific frame material, installation flange or additional purchases. Confirm actual complete-article inclusions; glazing alone is not this article. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Exterior Window `7a7a325e-e8b3-4497-bf32-fca70491694a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fitout`
- Sources: `containex-classic-2025`

###### Finished insulated copper cabin cable harness (`wire_harness`)

Actual complete supplied wiring harness only where purchased in this form; retain national electrical configuration, conductor/insulation specification and connector inclusion. If site-wired from cable reels, replace with each actual cable and connector product, with internally fabricated harness handoffs cancelled. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Finished insulated copper cabin cable harness
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fitout`
- Sources: `containex-classic-2025`

###### Finished cabin electrical distribution-board assembly (`distribution_board`)

One purchased complete board with actual protective devices and mounting state. Record the inclusion list; separate site-fitted protection devices only if not already in this article. Rating is configuration metadata, not consumed electricity. One finished at-plant equipped electrical distribution-board assembly, voltage not exceeding1000V. The broad native family also names consoles/cabinets/bases, but this card is one complete cabin board only; it does not identify a socket, empty enclosure, high-voltage board or separate device collection. Actual ratings and supplied device list require records. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Boards, consoles, cabinets and other bases, equipped with electrical switching etc. apparatus, for electric control or the distribution of electricity, for a voltage not exceeding 1000 V `961bc3fa-a52f-47fe-afc0-0abac92f5fd1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fitout`
- Sources: `containex-classic-2025`

###### Finished LED cabin luminaire (`led_luminaire`)

One installed supplied luminaire article. Retain actual power/driver/housing inclusion and installed count/mass; factory test electricity is independently metered and never inferred from rating alone. One complete manufactured at-plant luminaire designed solely for LED light sources; no LED module/driver-only or fluorescent fitting substitution. Use actual full article mass and inclusion list, no assumed wattage, lifetime or luminous performance. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Luminaires and lighting fittings, designed for use solely with light-emitting diode (LED) light sources `3253c9d6-cf81-41e6-8997-f59f437c3f2d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fitout`
- Sources: `containex-classic-2025`

###### Finished cabin electrical socket outlet (`socket`)

One specified complete socket article where not embedded in a purchased harness/panel. Retain national type, contacts, box and faceplate inclusion; switches and external CEE connectors need separate cards if actually supplied independently. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Finished cabin electrical socket outlet
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fitout`
- Sources: `containex-classic-2025`

###### Finished cabin light switch (`light_switch`)

Actual separately supplied complete switch, including its real contacts/body once; not another charge when already included in a purchased wired module.

- Selected flow: Finished cabin light switch
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `containex-classic-2025`

###### Finished cabin CEE inlet connector (`cee_inlet`)

Actual complete externally recessed inlet connector at the declared national electrical configuration. Keep its included contacts/housing/fasteners once and distinguish mating supply cable outside the factory supply.

- Selected flow: Finished cabin CEE inlet connector
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `containex-classic-2025`

###### Supplied cabin protective earthing clamp (`earthing_clamp`)

The CLASSIC source explicitly supplies a clamp for installation on site by the customer. Include the real dedicated permanent clamp in the declared complete supply mass even if delivered loose, with fitment state recorded; it is not transport tare or proof of commissioned site earthing.

- Selected flow: Supplied cabin protective earthing clamp
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `containex-classic-2025`

###### Supplied steel earthing-clamp fastening screw (`earthing_fastener`)

One separately supplied clamp fastening screw only if outside the complete clamp article; do not duplicate hardware included in that article or assume the catalogue torque or size as a dataset value.

- Selected flow: Supplied steel earthing-clamp fastening screw
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fitout`
- Sources: `containex-classic-2025`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Whole-cabin inspection and first quality release (`release`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete factory-assembled steel-frame office cabin (`finished_cabin`)

The unique first-quality-release reference output is the whole configured single-storey office cabin: welded and coated steel frame, insulated floor/walls/roof, actual weather/air seals, floor/lining, complete door/window and fixed electrical installation. No sanitary/plumbing/HVAC/loose furniture is included in this declared configuration. Weigh net permanent content including actual retained moisture once; exclude transport protection and lifting assets. A positively compatible whole-building native identity is required; steel/components or a freight container cannot substitute. At-plant production mix of finished manufactured buildings predominantly of metal only. No fixed geography, steel grade, geometry, fit-out, certification or performance is supplied by this broad native family. Use only the complete configured assembled office building established by the primary source and actual inclusion/QC records; no component, bare structure or freight container substitution. First release is the only production reference; other same-UUID movements are gross cohort service transfers. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Prefabricated buildings, of metal `2e810bc4-023d-4ad0-8466-3a3978f815e1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release`
- Sources: `containex-classic-2025`; `containex-sheq-production`

##### Waste flows

##### Elementary flows

### Process: Actual factory utilities and physical/species ledgers (`support`)

#### Inputs

##### Product flows

###### Purchased alternating-current electricity (`electricity`)

Meter the actual purchased voltage/geography/contract supply once for fabrication, extraction, coating, fitment, tests, cleanup, start/stop and idle loads. Internal voltage transformation is not another purchase. Separate own generation/export and keep original kWh; 1 kWh = 3.6 MJ. No grid UUID or emission factor is inferred. CN user-side grid-average consumption mix below 1 kV only; other geography/voltage, generator output, renewable contract and distribution service require another matching flow. Native comments cover delivery to users; check upstream provider boundaries to avoid duplicate generation/transmission. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `containex-sheq-production`

###### Supplied process water (`water`)

Only actual external cleaning, pretreatment or factory test water. Record full delivered mass and state; internally recirculated water is not another purchase. Do not infer high-pressure cabin cleaning, a sanitary commissioning test, steam or a boiler from a generic factory route. Product flow of treated industrial process water, Mass/kg; no fixed local supply route/geography or purity is established. Class18000 natural-water placement is retained as a classification inconsistency, while Product type, name and treatment comment consistently describe supplied industrial water. Do not use for direct resource uptake, untreated water, steam or already recirculating inventory, or duplicate purchases. Actual treatment and provider must match. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `containex-sheq-production`

###### Supplied gaseous natural gas (`natural_gas`)

Conditional on an actual factory burner/curing or heating installation. Retain supplier composition, volume T/P and wet/dry basis, calorific value and measured consumption; no standard temperature or emission factor is assumed. Electrical-only curing does not activate this row. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Supplied gaseous natural gas
- Flow property / unit: Volume / m3
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `containex-sheq-production`

###### Supplied diesel fuel (`diesel`)

Only actual site-controlled handling equipment or generation. Weigh issue and tank stocks, or use independently measured fuel-specific density at recorded conditions; transport-service fuel already in a provider dataset is not bought twice. Mass-reference diesel fuel material identity only; grade/formulation/density/heating value/refinery/geography/provider unspecified. Do not infer any of those or substitute an agricultural-energy/combustion-service row. Actual site fuel and upstream provider remain separately verified. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities`
- Sources: `containex-sheq-production`

###### Supplied frame-cleaning preparation (`frame_cleaning_preparation`)

One actual supplied whole cleaning preparation at its real formulation/state. Only where used; the production source gives no universal degreaser/phosphate recipe. Record real disjoint separately supplied ingredients and any bath maintenance as their own cards.

- Selected flow: Supplied frame-cleaning preparation
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `containex-sheq-production`

###### Supplied cleaning wipe substrate (`cleaning_wipe`)

One actual expendable wipe substrate, distinct from a maintained reusable cloth fleet; add real retained cleaning preparation/water only once to the full contaminated outlet.

- Selected flow: Supplied cleaning wipe substrate
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `containex-sheq-production`

###### Complete supplied extraction-filter cartridge (`extraction_filter`)

One actual complete installed filter cartridge including its housing/media as supplied; no prescribed fleet size, replacement interval or assumed dust capture efficiency.

- Selected flow: Complete supplied extraction-filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `containex-sheq-production`

###### Supplied machine lubricating oil preparation (`lubricating_oil`)

One actual specified supplied lubricant formulation. Retain opening/in-place/new/closing fluid and measured leakage/removal separately from equipment service burden, with no assumed change interval.

- Selected flow: Supplied machine lubricating oil preparation
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `containex-sheq-production`

###### User-side alternating-current electricity (`electricity_other`)

Actual user-side AC supply outside the separately bound CN <1kV grid-average flow. Record exact geography, voltage, period, supply mix and upstream gate; each meter belongs to one disjoint supply card. This specific UUID remains unresolved, not a permission to use the bound CN flow for a European factory.

- Selected flow: User-side alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources: `containex-sheq-production`


##### Waste flows

##### Elementary flows

###### Molecular oxygen from air (`oxygen_in`)

Only independently evidenced molecular O2 crossing a defined combustion/process-air gate; keep gross inlet and reaction balance. No virtual oxygen purchase or fixed air-composition coefficient. Molecular O2 CAS7782-44-7, Mass/kg renewable element resource from air only; not a purchased gas or emission. Retain actual atmosphere-to-process uptake and independent speciation; broad liquid/ionic aliases are not assumed actual states. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Molecular nitrogen from air (`nitrogen_in`)

Only measured molecular N2 carrier/combustion-air uptake for the actual installation. Preserve gross throughput; do not net against discharge or equate with NOx. Dinitrogen N2 CAS7727-37-9, Mass/kg renewable element resource from air only; not purchased nitrogen or an emission. No assumed air composition or cryogenic state. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Argon from air (`argon_in`)

Only independently measured argon in an actual accounted air stream; keep its own inlet separate from purchased welding mixture and outlet. Elemental argon Ar CAS7440-37-1, Mass/kg renewable element resource from air only; actual measured uptake, not purchased shielding mix, emission or assumed air fraction. Isotopic aliases are not enriched/radioactive-source evidence. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Water vapour from air (`water_vapour_in`)

Only actual measured moisture uptake or process-air humidity, with configuration/state and free/retained water reconciliation. Ambient equilibrium uptake is not a purchased material, reaction water, repair, or additional Q. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Water vapour from air
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Molecular carbon dioxide in incoming process air (`ambient_co2_in`)

Only independently measured background CO2 carried into an explicitly accounted physical air stream, with origin distinct from fuel carbon; not a virtual gas purchase, negative-emission claim or fixed atmospheric fraction.

- Selected flow: Molecular carbon dioxide in incoming process air
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`


#### Outputs

##### Product flows

##### Waste flows

###### Cabin-factory pretreatment and cleaning wastewater (`effluent`)

One actual combined effluent export only if it is physically combined. Retain full wet quantity, composition, sewer/offsite destination and treatment gate. COD, conductivity and suspended solids are indicators/subaccounts, not additional molecular-mass exports. Separate actual different destinations and sludge. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Cabin-factory pretreatment and cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_physical`
- Sources: `containex-sheq-production`

###### Mixed cabin-factory solid waste (`mixed_waste`)

Conditional on one genuinely mixed dispatched waste. Obtain independent measured origin subaccounts for timber, vinyl, sealant cartridge and other actual content without adding them to the mixed total. Choose the total once with one compatible management provider; separately exported streams remain separate. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Mixed cabin-factory solid waste
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_physical`
- Sources: `containex-sheq-production`

###### Whole spent contaminated cleaning wipe (`spent_wipe`)

Only this actual separately transferred whole contaminated stream, substrate/retained formulation/dust/water included once. If physically co-collected in one mixed outlet, retain this as a measured non-additive origin child instead of an additional external exchange/treatment demand.

- Selected flow: Whole spent contaminated cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_physical`
- Sources: `containex-sheq-production`

###### Whole spent contaminated extraction-filter cartridge (`spent_filter`)

Only this actual separately transferred whole contaminated stream, substrate/retained formulation/dust/water included once. If physically co-collected in one mixed outlet, retain this as a measured non-additive origin child instead of an additional external exchange/treatment demand.

- Selected flow: Whole spent contaminated extraction-filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_physical`
- Sources: `containex-sheq-production`

###### Whole collected used machine lubricating oil (`used_oil`)

Only this actual separately transferred whole contaminated stream, substrate/retained formulation/dust/water included once. If physically co-collected in one mixed outlet, retain this as a measured non-additive origin child instead of an additional external exchange/treatment demand.

- Selected flow: Whole collected used machine lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_physical`
- Sources: `containex-sheq-production`


##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_co2`)

Actual direct fossil combustion or verified process release only; supplier upstream emissions are excluded. Use measured molecular CO2 or carbon-specific measured fuel/speciation balance with actual control performance. A VOC or total-carbon indicator is not CO2. Ordinary molecular fossil CO2 CAS124-38-9, Mass/kg, emission to unspecified air only. Broad aliases mention ions, dry ice and isotope terms; they do not change the declared molecular fossil/air identity. No biogenic, delayed correction, long-term, soil/water or other specified air-compartment substitution. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Water vapour to air (`water_vapour_out`)

Record actual molecular H2O vapour separately from liquid wastewater, retained/free water and any independently evidenced reaction water. Measure humidity flow and conditions; no generic water-density conversion for gas and no residual solving of two unknowns. Natural desorption does not create repair or new product output. Ordinary H2O CAS7732-18-5 vapour emission to unspecified air only, Mass/kg. The inherited synonym list also contains isotopic/bound/liquid-water terms; those names are not evidence to reinterpret this CAS/phase as heavy/tritiated water, bound water or liquid effluent. Actual specific air compartment needs another matching identity. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Molecular nitrogen to air (`nitrogen_out`)

Only actual molecular N2 from measured carrier/combustion air or shielding discharge. Record gross molecular throughput and origin separately; NOx is not N2. Do not invent all ventilation air from a default air ratio. Dinitrogen N2 CAS7727-37-9, Mass/kg emission to unspecified air only, distinct from air resource uptake, NOx, supplied cryogenic nitrogen or another emission compartment. Synonym references to liquified nitrogen do not set the actual air-discharge state. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Molecular oxygen to air (`oxygen_out`)

Only actual unreacted molecular O2 at the measured discharge gate, separate from oxygen in water/oxides and oxygen consumed in reaction. Record origin and complete state/speciation evidence. Molecular O2 CAS7782-44-7, Mass/kg to unspecified air, distinct from atmospheric resource uptake, supplied liquid oxygen, oxide-bound oxygen and other air/soil/water compartments. Broad liquid/ionic/excited-state aliases do not establish those supplied states or alter actual O2 speciation. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Argon to air (`argon_out`)

Only actual elemental argon from the purchased premix or independently measured air throughput, at its real receiving compartment. Do not convert a gas-mixture indicator into argon mass without composition/state evidence. Elemental argon Ar CAS7440-37-1, Mass/kg to unspecified air only; no purchased-gas, other medium or other air compartment substitution. Isotopic aliases do not assert enriched/radioactive argon. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Carbon monoxide to air (`carbon_monoxide`)

Only the actual separately identified molecular species emitted to the declared air medium by real factory combustion, welding, curing or fugitive release. Record origin, state, control and measurement; no factor, assumed complete combustion or conversion of NOx/VOC/CO/C total into this molecule. Add every other actual identified molecular species separately.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Nitrogen monoxide to air (`nitrogen_monoxide`)

Only the actual separately identified molecular species emitted to the declared air medium by real factory combustion, welding, curing or fugitive release. Record origin, state, control and measurement; no factor, assumed complete combustion or conversion of NOx/VOC/CO/C total into this molecule. Add every other actual identified molecular species separately.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Only the actual separately identified molecular species emitted to the declared air medium by real factory combustion, welding, curing or fugitive release. Record origin, state, control and measurement; no factor, assumed complete combustion or conversion of NOx/VOC/CO/C total into this molecule. Add every other actual identified molecular species separately.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Methane to air (`methane_air`)

Only the actual separately identified molecular species emitted to the declared air medium by real factory combustion, welding, curing or fugitive release. Record origin, state, control and measurement; no factor, assumed complete combustion or conversion of NOx/VOC/CO/C total into this molecule. Add every other actual identified molecular species separately.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

###### Background molecular carbon dioxide in outgoing process air (`ambient_co2_out`)

Actual carrier-air background CO2 discharged, traced separately from newly generated fossil CO2 and any biogenic source. Preserve gross physical transfer without charging it again as combustion formation or inventing a neutralizing credit.

- Selected flow: Background molecular carbon dioxide in outgoing process air
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_species`
- Sources: `containex-sheq-production`

### Process: Actual post-release packaging and FG services (`postrelease`)

#### Inputs

##### Product flows

###### Polyethylene cabin transport-protection film (`pe_film`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only actual supplied PE film; retain polymer, additives, new additions and attached/empty/reusable stocks. Other actual transport-cover polymers need distinct cards. Film is excluded from net cabin Q. This card is new external procurement P only. Opening/closing O/C is stock, not procurement; ER is a distinct actual external-return-received card. At-plant polyethylene film/sheet Product, CAS9002-88-4 and Mass/kg, not a finished PE bag or PET. The comment compares PET as a competing polymer, not as this composition. Confirm actual PE grade/formulation/thickness and full gross film movement; no density or use share is inferred. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Timber cabin transport bearer (`timber_bearer`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only actual timber transport bearer; distinguish species/treatment/moisture and reusable ownership from permanently installed timber. No assumed reuse count or automatic coproduct on return. This card is new external procurement P only. Opening/closing O/C is stock, not procurement; ER is a distinct actual external-return-received card. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Timber cabin transport bearer
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Reusable steel cabin transport rack (`steel_rack`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only actual rack crossing this gate; track asset identity, opening/closing stock, external receipt/return and gross shipment. Its physical mass is never reduced by a burden/service share and is never permanent cabin Q. This card is new external procurement P only. Opening/closing O/C is stock, not procurement; ER is a distinct actual external-return-received card. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Reusable steel cabin transport rack
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Returned previously released steel-frame office cabin (`returned_cabin`)

Full gross actual returned cabin, identified to original delivery/release cohort and inherited burdens. Reverse the original delivery movement where appropriate; neither return nor inspection creates new production Q. Keep actual incremental repair services separate; natural moisture change is not invented repair. At-plant production mix of finished manufactured buildings predominantly of metal only. No fixed geography, steel grade, geometry, fit-out, certification or performance is supplied by this broad native family. Use only the complete configured assembled office building established by the primary source and actual inclusion/QC records; no component, bare structure or freight container substitution. First release is the only production reference; other same-UUID movements are gross cohort service transfers. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Prefabricated buildings, of metal `2e810bc4-023d-4ad0-8466-3a3978f815e1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postrelease`
- Sources: `containex-sheq-production`

###### Polyethylene cabin transport-protection film (`pe_film_return_received`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only an actual externally returned, still-functional polyethylene cabin transport-protection film. Record full gross ER by original material/asset identity, state and source; no new upstream purchase/manufacture is assigned to this return. Damaged/changed material needs its actual separate state or waste identity. I and P remain disjoint. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Polyethylene cabin transport-protection film
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Timber cabin transport bearer (`timber_bearer_return_received`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only an actual externally returned, still-functional timber cabin transport bearer. Record full gross ER by original material/asset identity, state and source; no new upstream purchase/manufacture is assigned to this return. Damaged/changed material needs its actual separate state or waste identity. I and P remain disjoint. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Timber cabin transport bearer
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Reusable steel cabin transport rack (`steel_rack_return_received`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only an actual externally returned, still-functional reusable steel cabin transport rack. Record full gross ER by original material/asset identity, state and source; no new upstream purchase/manufacture is assigned to this return. Damaged/changed material needs its actual separate state or waste identity. I and P remain disjoint. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Reusable steel cabin transport rack
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Polyethylene cabin transport-protection film (`pe_film_ingress`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. This is only actual supplier-bundled whole article ingress I, disjoint from new P and external-return ER. Preserve its full wet mass, supplier inclusion/tare and one burden owner even when no separate price exists. It is not another constituent of cabin Q.

- Selected flow: Polyethylene cabin transport-protection film
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Timber cabin transport bearer (`timber_bearer_ingress`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. This is only actual supplier-bundled whole article ingress I, disjoint from new P and external-return ER. Preserve its full wet mass, supplier inclusion/tare and one burden owner even when no separate price exists. It is not another constituent of cabin Q.

- Selected flow: Timber cabin transport bearer
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Reusable steel cabin transport rack (`steel_rack_ingress`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. This is only actual supplier-bundled whole article ingress I, disjoint from new P and external-return ER. Preserve its full wet mass, supplier inclusion/tare and one burden owner even when no separate price exists. It is not another constituent of cabin Q.

- Selected flow: Reusable steel cabin transport rack
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Supplied wooden transport-bearer repair slat (`pack_repair_slat`)

Only actual separately supplied repair material, not a prescribed repair recipe. Preserve full wet physical receipt/stock and independent burden once. When actually transferred into the packaging pool, split its non-water J_in and H2O_in from independently observed composition; the internal source/destination entries cancel without another purchase.

- Selected flow: Supplied wooden transport-bearer repair slat
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Supplied steel transport-bearer repair nail (`pack_repair_nail`)

Only actual separately supplied repair material, not a prescribed repair recipe. Preserve full wet physical receipt/stock and independent burden once. When actually transferred into the packaging pool, split its non-water J_in and H2O_in from independently observed composition; the internal source/destination entries cancel without another purchase.

- Selected flow: Supplied steel transport-bearer repair nail
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Previously released complete steel-frame office cabin (`gross_cabin_dispatch`)

Full gross actual dispatch V of previously released cabins, tied to original first-release cohort Qc. This is a physical finished-goods service handoff, not a second production output, new release or a reduction of first-release Q by closing finished-goods stock. Rejected or unauthorised dispatches retain their actual flows and loads without acquiring accepted status. At-plant production mix of finished manufactured buildings predominantly of metal only. No fixed geography, steel grade, geometry, fit-out, certification or performance is supplied by this broad native family. Use only the complete configured assembled office building established by the primary source and actual inclusion/QC records; no component, bare structure or freight container substitution. First release is the only production reference; other same-UUID movements are gross cohort service transfers. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Prefabricated buildings, of metal `2e810bc4-023d-4ad0-8466-3a3978f815e1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_postrelease`
- Sources: `containex-sheq-production`

###### Polyethylene cabin transport-protection film (`pe_film_out`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only full gross S of this actual material attached to physically dispatched cabins, independently of net Q or burden shares. Keep original asset/material identity and receiver/state. EO is a separate external-return-sent card; internal reuse cancels. Gross physical polyethylene cabin transport-protection film leaving attached to gross dispatched cabins, with each movement and destination separately identified. Internal reuse cancels; no net-Q, allocation or future-use scaling. Reconcile the entire packaging pool; movement is not automatic coproduct credit. At-plant polyethylene film/sheet Product, CAS9002-88-4 and Mass/kg, not a finished PE bag or PET. The comment compares PET as a competing polymer, not as this composition. Confirm actual PE grade/formulation/thickness and full gross film movement; no density or use share is inferred. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Timber cabin transport bearer (`timber_bearer_out`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only full gross S of this actual material attached to physically dispatched cabins, independently of net Q or burden shares. Keep original asset/material identity and receiver/state. EO is a separate external-return-sent card; internal reuse cancels. Gross physical timber cabin transport bearer leaving attached to gross dispatched cabins, with each movement and destination separately identified. Internal reuse cancels; no net-Q, allocation or future-use scaling. Reconcile the entire packaging pool; movement is not automatic coproduct credit. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Timber cabin transport bearer
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Reusable steel cabin transport rack (`steel_rack_out`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only full gross S of this actual material attached to physically dispatched cabins, independently of net Q or burden shares. Keep original asset/material identity and receiver/state. EO is a separate external-return-sent card; internal reuse cancels. Gross physical reusable steel cabin transport rack leaving attached to gross dispatched cabins, with each movement and destination separately identified. Internal reuse cancels; no net-Q, allocation or future-use scaling. Reconcile the entire packaging pool; movement is not automatic coproduct credit. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Reusable steel cabin transport rack
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Polyethylene cabin transport-protection film (`pe_film_external_return`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only independent actual external return EO of this material/asset to its identified owner/receiver at full gross physical quantity. Exclude shipment-attached S already in the shipment card. Retain real state and original burden ledger; no coproduct credit or allocated mass reduction. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Polyethylene cabin transport-protection film
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Timber cabin transport bearer (`timber_bearer_external_return`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only independent actual external return EO of this material/asset to its identified owner/receiver at full gross physical quantity. Exclude shipment-attached S already in the shipment card. Retain real state and original burden ledger; no coproduct credit or allocated mass reduction. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Timber cabin transport bearer
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Reusable steel cabin transport rack (`steel_rack_external_return`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only independent actual external return EO of this material/asset to its identified owner/receiver at full gross physical quantity. Exclude shipment-attached S already in the shipment card. Retain real state and original burden ledger; no coproduct credit or allocated mass reduction. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Reusable steel cabin transport rack
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

##### Waste flows

###### Polyethylene cabin transport-protection film waste (`pe_film_waste`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only this actual packaging material discarded to an identified receiver, at full gross wet mass. Keep closing waste stock and embedded/empty packaging stocks separate. Do not count material constituents and a genuinely mixed waste export simultaneously. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Polyethylene cabin transport-protection film waste
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Timber cabin transport bearer waste (`timber_bearer_waste`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only this actual packaging material discarded to an identified receiver, at full gross wet mass. Keep closing waste stock and embedded/empty packaging stocks separate. Do not count material constituents and a genuinely mixed waste export simultaneously. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Timber cabin transport bearer waste
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Reusable steel cabin transport rack waste (`steel_rack_waste`)

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only this actual packaging material discarded to an identified receiver, at full gross wet mass. Keep closing waste stock and embedded/empty packaging stocks separate. Do not count material constituents and a genuinely mixed waste export simultaneously. Use normalize_once once for this card; raw collection is not pre-divided.

- Selected flow: Reusable steel cabin transport rack waste
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Discarded wooden transport-bearer repair slat (`pack_removed_slat`)

Only an actually separated removed whole item transferred as waste, with substrate/contamination/water included once. Use disjoint J_out/H2O_out or whole W; if it remains inside a whole bearer/rack/mixed wet W it is a non-additive origin, not another exit.

- Selected flow: Discarded wooden transport-bearer repair slat
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`

###### Discarded steel transport-bearer repair nail (`pack_removed_nail`)

Only an actually separated removed whole item transferred as waste, with substrate/contamination/water included once. Use disjoint J_out/H2O_out or whole W; if it remains inside a whole bearer/rack/mixed wet W it is a non-additive origin, not another exit.

- Selected flow: Discarded steel transport-bearer repair nail
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`
- Sources: `containex-sheq-production`


##### Elementary flows

### Process: Actual production and handling equipment fleet (`assets`)

#### Inputs

##### Product flows

###### Complete CNC sheet-cutting machine (`cnc_cutter_receipt`)

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

- Selected flow: Complete CNC sheet-cutting machine
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete hydraulic forming press (`hydraulic_press_receipt`)

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

- Selected flow: Complete hydraulic forming press
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete welding robot (`welding_robot_receipt`)

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

- Selected flow: Complete welding robot
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete powder-coating curing oven (`coating_oven_receipt`)

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

- Selected flow: Complete powder-coating curing oven
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete overhead cabin-handling crane (`overhead_crane_receipt`)

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

- Selected flow: Complete overhead cabin-handling crane
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete cabin-handling forklift (`forklift_receipt`)

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

- Selected flow: Complete cabin-handling forklift
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete cabin weighing scale (`release_scale_receipt`)

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

- Selected flow: Complete cabin weighing scale
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete electrical-installation tester (`electrical_tester_receipt`)

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

- Selected flow: Complete electrical-installation tester
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete CNC sheet-cutting machine (`cnc_cutter_transfer`)

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

- Selected flow: Complete CNC sheet-cutting machine
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete hydraulic forming press (`hydraulic_press_transfer`)

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

- Selected flow: Complete hydraulic forming press
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete welding robot (`welding_robot_transfer`)

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

- Selected flow: Complete welding robot
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete powder-coating curing oven (`coating_oven_transfer`)

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

- Selected flow: Complete powder-coating curing oven
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete overhead cabin-handling crane (`overhead_crane_transfer`)

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

- Selected flow: Complete overhead cabin-handling crane
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete cabin-handling forklift (`forklift_transfer`)

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

- Selected flow: Complete cabin-handling forklift
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete cabin weighing scale (`release_scale_transfer`)

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

- Selected flow: Complete cabin weighing scale
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Complete electrical-installation tester (`electrical_tester_transfer`)

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

- Selected flow: Complete electrical-installation tester
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

##### Waste flows

###### Whole discarded complete cnc sheet-cutting machine (`cnc_cutter_retirement`)

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

- Selected flow: Whole discarded complete cnc sheet-cutting machine
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Whole discarded complete hydraulic forming press (`hydraulic_press_retirement`)

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

- Selected flow: Whole discarded complete hydraulic forming press
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Whole discarded complete welding robot (`welding_robot_retirement`)

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

- Selected flow: Whole discarded complete welding robot
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Whole discarded complete powder-coating curing oven (`coating_oven_retirement`)

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

- Selected flow: Whole discarded complete powder-coating curing oven
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Whole discarded complete overhead cabin-handling crane (`overhead_crane_retirement`)

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

- Selected flow: Whole discarded complete overhead cabin-handling crane
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Whole discarded complete cabin-handling forklift (`forklift_retirement`)

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

- Selected flow: Whole discarded complete cabin-handling forklift
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Whole discarded complete cabin weighing scale (`release_scale_retirement`)

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

- Selected flow: Whole discarded complete cabin weighing scale
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

###### Whole discarded complete electrical-installation tester (`electrical_tester_retirement`)

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

- Selected flow: Whole discarded complete electrical-installation tester
- Flow property / unit: Mass / kg
- Amount rule: B_e / Q; actual post-release service uses B_e / original Qc.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources: `containex-sheq-production`

##### Elementary flows


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_context | study method | These attributional rules apply only when the declared decision context requires allocation: Situation C2, or cases of A/B/C1 after documenting the situation-specific failure/infeasibility of subdivision, virtual subdivision and substitution/system expansion under ILCD. Do not export this hierarchy to consequential studies or infer LCA allocation from a manufacturing report. | `jrc-ilcd-2010` |
| dedicated_first | all exchanges | Assign dedicated material/article issues and operation records directly. Subdivide physically distinguishable lines, work orders, booths and tests; then virtual-subdivide exchange-specific embodied components and auxiliaries where quantitative relations are known. Keep full receiving populations and opening/closing burden vectors. | `jrc-ilcd-2010` |
| determining_causality | remaining shared exchanges | Identify a determining physical causal relation separately for each remaining exchange, supported by measured operation drivers and real technology. Mass, area, arc time, occupied cure time or number of units is allowed only if it actually determines that exchange; one physical driver is not automatically valid for all resources. Include idle, failed/reworked lots and allocation sensitivity. | `jrc-ilcd-2010` |
| residual_market | only residual common process | Only a genuinely remaining common-process burden may use contemporaneous market values of the real cofunctions at the same process gate and actual state, after dedicated/virtual/causal assignment. The allocated burden vectors across all recipients must sum exactly to the original pre-allocation vector, with no omitted recipient. Preserve price basis, time, amounts, receiving population, exclusions, uncertainties and sensitivity. Do not arbitrarily choose physical/economic allocation, prescribe shares or transfer actual material throughputs by a burden share. | `jrc-ilcd-2010` |
| no_automatic_credit | waste and reusable assets | Scrap/waste/packaging returns retain gross physical flow, actual legal/product state and receiver. No automatic avoided-steel, recovered-powder or reusable-rack credit. Capital/reusable asset manufacture, when included, uses one conserved lifetime burden ledger with an evidenced total-service denominator, uncertainty and reconciliation; no invented future reuse or charging whole asset manufacture each period. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Protocols collect raw original observations only. Their aggregation_rule states the target reference basis for grouping, never permission to divide raw collection values. Preserve every raw unit/rate/state and inherited vector. Convert raw units/rates and perform real attribution before the single normalize_once calculation; card amounts and reporting aggregation reuse that same result. Q is first-released complete net kg; actual finished-goods services and all associated gross physical movements bind to original cohort Qc and observed horizon H. No future service, assumed restoration, new output on reinspection or removal of failed/unauthorised activity is permitted.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_frame | frame | steel/weld/primer/powder | raw manufacturing record |sheet grade/form; issue/return mass; weld procedure/consumables; primer/powder formulation; bath/powder stocks; actual operation/cure energy/losses; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |Calibrated weighing, stock records, actual CNC/weld/coating logs and supplier SDS; identify dedicated versus shared work and all rejected/reworked lots Keep raw undivided physical quantities, actual complete wet stocks and own inherited WIP/fleet history once; reconcile full receiver Qt independently of nonoverlapping original-cohort A/Q. | kg; original utility units | each receipt/issue and run | complete actual cohort including failed/start/stop/idle/cleanup | named factory and outsourced gate | per 1 kg reference flow | calibration; mill/SDS/BOM; signed operations and stock balances |
| cp_envelope | envelope | enclosure materials | raw article/material record |supply identity; complete article inclusion; layer specification; issue/return; moisture; cutting loss; WIP/FG physical and inherited vectors; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |Weigh supplied and used articles/constituents; reconcile disjoint BOM, cut plans, actual layer build and all internal transfers without duplicate article composition Keep raw undivided physical quantities, actual complete wet stocks and own inherited WIP/fleet history once; reconcile full receiver Qt independently of nonoverlapping original-cohort A/Q. | kg; actual geometry units | each lot and transfer | whole actual cohort and opening/closing inventory | named envelope workshop | per 1 kg reference flow | supplier declarations; calibrated mass; moisture method; reconciled bridge |
| cp_fitout | fitout | door/window/electrical article | raw component record |serial/configuration; supplied article mass/count; included glass/frame/hardware/wiring; loose versus fixed; unused/failed returns; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |Reconcile complete supplied-article inclusion lists with installed and rejected components; actual wiring/assembly logs distinguish purchased harness from site wiring Keep raw undivided physical quantities, actual complete wet stocks and own inherited WIP/fleet history once; reconcile full receiver Qt independently of nonoverlapping original-cohort A/Q. | kg; item; original geometry | each configuration and installation | whole actual cohort | named final-assembly workshop | per 1 kg reference flow | supplier BOM and configured assembly record; calibration; independent count/mass basis |
| cp_release | release | first-release Q | raw quality/mass event |cabin serial/configuration; complete inclusion list; calibrated gross/tare/net kg; retained water; first release timestamp; failures; WIP/FG stocks and inherited vectors; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |Verify complete cabin against controlled configuration and actual weld/coating/envelope/electrical inspection records; weigh net permanent content. Electrical site earthing/commissioning is a separate gate; catalogue tests/ratings are not factory measurements Keep raw undivided physical quantities, actual complete wet stocks and own inherited WIP/fleet history once; reconcile full receiver Qt independently of nonoverlapping original-cohort A/Q. | kg | each first-release event | complete cohort with opening/closing stocks | named factory QC gate | per 1 kg reference flow | signed first-release register; scale calibration; actual test conditions/results and nonconformance dispositions |
| cp_utilities | support | electricity/fuel/water | raw meter and stock record |meter/asset and route; original kWh/MJ/kg/m3; true rate intervals; composition; T/P/phase; density/calorific evidence; own generation; stock changes; actual shared-driver population; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |Read actual meters and fuel/water stocks, integrate only real rates, convert units separately, then assign dedicated/shared burdens under allocation rules; identify all cleanup, start/stop, idle and failed operations Keep raw undivided physical quantities, actual complete wet stocks and own inherited WIP/fleet history once; reconcile full receiver Qt independently of nonoverlapping original-cohort A/Q. | original meter units | meter interval and each issue | whole cohort and actual service H | named site/provider meter boundaries | per 1 kg reference flow | calibration; bills and tank balances; driver studies and exclusions |
| cp_physical | support | every material/waste/stock | raw gross physical ledger |atomic material/species; gross inbound/outbound and destination; full wet opening/closing raw/WIP/nonWIP/FG/fluid/waste; non-additive origin; inherited exchange vector; internal handoff id; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |Use independent weighing/sampling and receiver tickets; keep generation distinct from export and stocks. Reconcile manufacture/FG/consolidated mass and relevant elements independently. X deduplicates only a proven same-side OTHER actual flow, never inventories/opposite side/card existence Keep raw undivided physical quantities, actual complete wet stocks and own inherited WIP/fleet history once; reconcile full receiver Qt independently of nonoverlapping original-cohort A/Q. | kg; original native units | each movement and stock close | opening through closing with original inherited cohorts | factory, FG and consolidated gates | per 1 kg reference flow | weigh tickets; analyses; receiver/state evidence; independent residual explanation |
| cp_species | support | each actual gas/water species | raw molecular/state record |molecular identity/CAS; origin and carbon source; receiving medium; inlet/outlet; phase/T/P; integrated volume or rate/time; humidity; measured species and independent elemental constraints; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |Measure/speciate actual streams and controls; keep N2/O2/Ar/H2O/CO2 and each other true species separately. Distinguish aggregate indicators, captured matter, supplied mixture subaccounts, reaction/free/retained/structural water and actual gas/liquid outlets Keep raw undivided physical quantities, actual complete wet stocks and own inherited WIP/fleet history once; reconcile full receiver Qt independently of nonoverlapping original-cohort A/Q. | kg; original gas/liquid measurement units | each actual operation/sample | whole actual cohort and relevant service H | actual combustion/process/ventilation gates only | per 1 kg reference flow | calibration; laboratory speciation; independent mass/element closure and uncertainty |
| cp_packaging | postrelease | each actual packaging material | raw packaging pool |material/asset; opening empty/attached-WIP/attached-FG/reusable; P purchases; ER external-return-received; closing corresponding stock; S gross-shipped; EO external-return-sent; W waste; internal reuse; destination; I_supplier_included; J_in; J_out; H2O_in; H2O_out; O; C; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; wet_material_assay; full_W_nested_components | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. All terms are actual kg for one material/asset pool. O/C are complete wet opening/closing empty, attached WIP, attached FG and reusable stocks. P is new external procurement, I is disjoint supplier-included whole packaging ingress, ER external return received, S full gross shipment-attached export, EO independent external return sent, W whole wet discard. J_in/J_out are independently measured non-water repair/replacement/deposit/residue or other pool transfers not already in those whole legs. H2O_in/H2O_out are independently measured actual water transfers not already embodied in whole legs, including natural adsorption/desorption without repair. Split real wet added/removed materials into disjoint J and water from actual measurements, with no default ratio/density. Full W contains substrate, retained residues and water once; its nested children are not extra J_out/H2O_out unless actually separated before crossing. Matched internal pool transfers cancel without new purchase, service or Q. Raw-observation reconciliation is L_in_observed - X_in = P + I + ER + J_in + H2O_in and L_out_observed - X_out = S + EO + W + J_out + H2O_out. L is an observation-side sum only, never an extra physical exchange/provider demand. Map each X by exact event/component/unit/side to a duplicate OTHER observation already counted once on the same canonical side. Every real J/H2O remains once; X cannot cancel true retained influx, C/O, an opposite-side movement or a nested W child merely because it remains in stock. Disjoint observations use X=0. Internal attachment/reuse is not a boundary crossing. Material transferred from an internal repair/asset pool has matched source/destination entries; its purchase and inherited burden are not repeated. Unknown water/material stays unresolved; do not fit a residual. Actual customer disposal beyond the declared factory/service gate is a separately disclosed downstream event, not a fictional factory W. | kg; actual native unit | each receipt/dispatch/return/waste and close | original release cohorts through observed H | factory storage/carrier handover/actual receiver gates | per 1 kg reference flow |packaging movement tickets; material/asset identities; measured pool closure; independent wet-stock/material/water readings and exact same-side duplicate evidence |
| cp_postrelease | postrelease | FG and actual service | raw cohort/service ledger |original release serial/Qc; H; full opening/closing FG physical mass and inherited vectors; gross shipments/returns; original-delivery reversal; actual storage/handling/test/repair/cleanup loads; packaging link; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |Trace actual movements to original release, including failed/refused/unauthorised movements. Retain original burdens and all actual incremental services; reinspection/delivery/return or natural moisture change never creates new production. Future unperformed service remains unknown; separately identify actual repair materials/waste cards Keep raw undivided physical quantities, actual complete wet stocks and own inherited WIP/fleet history once; reconcile full receiver Qt independently of nonoverlapping original-cohort A/Q. | kg; original service/exchange unit | each actual movement/service and close | original first release through actual observed H | FG store, handler and carrier gate | per 1 kg reference flow | release/delivery/return register; measured actual service records; inherited-burden conservation |
|cp_assets|assets|each actual named equipment article and service|foreground_record|asset_id; configuration; full_gross_mass_count; opening_inuse_closing_fleet; external_receipts_transfers_retirement; installed_fluids_parts; actual_service_use; maintenance_history; original_Q0_Qc; observed_H; provider_unit_scope; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |Weigh/record the whole actual fleet and each real movement, maintain disjoint observed service and maintenance records, full wet retirements and compatible upstream provider units. No lifetime or equipment-mass share default. Keep raw undivided physical quantities, actual complete wet stocks and own inherited WIP/fleet history once; reconcile full receiver Qt independently of nonoverlapping original-cohort A/Q. |kg; item; actual provider service unit|each physical event and actual usage interval|whole observed cohort and original fleet history|all actual production/handling gates|per 1 kg reference flow|asset register; calibrated scale; service logs; maintenance/receiver records|
| cp_physical_frame | frame | every material/waste/stock | raw gross physical ledger |atomic material/species; gross inbound/outbound and destination; full wet opening/closing raw/WIP/nonWIP/FG/fluid/waste; non-additive origin; inherited exchange vector; internal handoff id; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |Use independent weighing/sampling and receiver tickets; keep generation distinct from export and stocks. Reconcile manufacture/FG/consolidated mass and relevant elements independently. X deduplicates only a proven same-side OTHER actual flow, never inventories/opposite side/card existence Keep raw undivided physical quantities, actual complete wet stocks and own inherited WIP/fleet history once; reconcile full receiver Qt independently of nonoverlapping original-cohort A/Q. | kg; original native units | each movement and stock close | opening through closing with original inherited cohorts | Actual Frame fabrication and corrosion protection gate, disjoint meter/asset/provider | per 1 kg reference flow | weigh tickets; analyses; receiver/state evidence; independent residual explanation |
| cp_physical_envelope | envelope | every material/waste/stock | raw gross physical ledger |atomic material/species; gross inbound/outbound and destination; full wet opening/closing raw/WIP/nonWIP/FG/fluid/waste; non-additive origin; inherited exchange vector; internal handoff id; actual_stage_event; original_Q0_Qc; observed_H; gross_V; independent_burden_A; whole_receiver_Qt; nonadditive_origin; matched_internal_history |Use independent weighing/sampling and receiver tickets; keep generation distinct from export and stocks. Reconcile manufacture/FG/consolidated mass and relevant elements independently. X deduplicates only a proven same-side OTHER actual flow, never inventories/opposite side/card existence Keep raw undivided physical quantities, actual complete wet stocks and own inherited WIP/fleet history once; reconcile full receiver Qt independently of nonoverlapping original-cohort A/Q. | kg; original native units | each movement and stock close | opening through closing with original inherited cohorts | Actual Insulated enclosure manufacture and assembly gate, disjoint meter/asset/provider | per 1 kg reference flow | weigh tickets; analyses; receiver/state evidence; independent residual explanation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_once | all inventory rows | For each physical exchange set B_e to its full gross actual V_e in the native unit after recorded unit/state conversion; for a burden exchange set B_e to its dedicated/causally attributed A_e. r_e = B_e / Q exactly once for manufacturing, or B_e / original Qc for separately declared post-release service. Q and Qc are kg of the same complete configuration. If the relevant denominator is zero retain B_e without a unit result. Cards and protocol target bases reference this one result, never a second division. | B_e; V_e; A_e; Q; Qc; cp_release; cp_physical; cp_postrelease | r_e | `containex-sheq-production`; `jrc-ilcd-2010` |
| raw_conversion | all inventory rows | Preserve original meter, weighing and state fields. Integrate a genuine rate over the recorded interval once; retain already integrated volume unchanged. Use independently measured substance-specific density/state for any volume/mass bridge and the exact native property/unit support for any unit conversion. Then reconcile physical balances and attribute A_e before normalize_once. No inferred density, part mass or carrier enthalpy. | cp_utilities; cp_species; cp_physical | converted raw quantities | `containex-sheq-production` |
| stock_and_cohort | all inventory rows | Maintain each material physical opening+external receipts=closing+external outputs+evidenced transformation, with internal handoffs cancelled once and reaction/element checks independent. Carry each inherited exchange vector with WIP and FG by its real cohort. At first release transfer Q internally to FG; it is already in production Q even if retained at close. In FG trace original delivery/reversal, returns and actual incremental services against original Qc; do not recreate manufacture. | cp_physical; cp_release; cp_postrelease | reconciled physical and burden ledgers | `containex-sheq-production` |
| pack_pool | all inventory rows | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. All terms are actual kg for one material/asset pool. O/C are complete wet opening/closing empty, attached WIP, attached FG and reusable stocks. P is new external procurement, I is disjoint supplier-included whole packaging ingress, ER external return received, S full gross shipment-attached export, EO independent external return sent, W whole wet discard. J_in/J_out are independently measured non-water repair/replacement/deposit/residue or other pool transfers not already in those whole legs. H2O_in/H2O_out are independently measured actual water transfers not already embodied in whole legs, including natural adsorption/desorption without repair. Split real wet added/removed materials into disjoint J and water from actual measurements, with no default ratio/density. Full W contains substrate, retained residues and water once; its nested children are not extra J_out/H2O_out unless actually separated before crossing. Matched internal pool transfers cancel without new purchase, service or Q. | O; P; I; ER; J_in; H2O_in; C; S; EO; W; J_out; H2O_out; L_in_observed; L_out_observed; X_in; X_out; cp_packaging; cp_postrelease | per-material packaging closure | `containex-sheq-production` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| configuration | all rows | Controlled assembled single-cabin BOM and complete inclusion/geometry/layer/electrical records; identify all real deviations and actual configuration-specific tests without borrowing catalogue performance. | signed BOM, drawings, supplier content and QC |
| identity | all selected flows | Verify all native basename/synonym/comment/CAS/route/grade/form/media/type/geography/properties and exact support chain; actual supplied articles require positive family compatibility. Blank auxiliary identities and provider gaps remain individually disclosed. | complete direct native record and applicability decision |
| coverage | whole cohort | All raw/WIP/nonWIP/FG and packaging/fluids/assets/wastes, each inherited exchange vector, Q=0/failed/reworked/idle/cleanup loads and actual observed post-release H retained; no future-service completeness claim. | independent physical/element/vector/cohort reconciliations |
| uncertainty | all calculations | Record measurement resolution/calibration, missing actual quantities, independent species/water constraints, source temporal/site limitations, upstream/provider gaps and allocation sensitivity; do not declare unknown relationships passing. | instrument and laboratory records; gap register and sensitivity |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| whole_configuration | reference and supplier coverage | Verify whole-building core compatibility and the same assembled single-cabin configuration across BOM, weighing, tests, native restrictions and bilingual records. Distinguish approved/permitted configuration from actually executed movement/work. A failed or unauthorised unit retains its full actual physical flow and burden without accepted output. | `containex-classic-2025`; `containex-sheq-production` |
| quantity_and_inheritance | manufacture / FG / consolidated | Independently close total physical mass and relevant elemental balances at manufacturing, finished-goods and consolidated gates using consistent inclusion and measured moisture/species. Keep full wet closing stocks and raw/WIP/non-WIP/FG exchange-specific inherited vectors; explain residuals with independent measurements. One residual cannot fit two unknowns. Cancel internal release and component handoffs only once. | `containex-sheq-production` |
| packaging_conservation | each packaging material |For each actual packaging material, reconcile opening empty plus attached WIP/FG plus reusable stock, purchases and external returns received against closing corresponding stocks plus gross shipment-attached export plus independent external returns sent plus waste. Separate each actual movement direction and destination; internal reuse cancels. Do not use net product Q, stock difference, burden share or economic/service share as a substitute for gross exported physical quantity. O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. All terms are actual kg for one material/asset pool. O/C are complete wet opening/closing empty, attached WIP, attached FG and reusable stocks. P is new external procurement, I is disjoint supplier-included whole packaging ingress, ER external return received, S full gross shipment-attached export, EO independent external return sent, W whole wet discard. J_in/J_out are independently measured non-water repair/replacement/deposit/residue or other pool transfers not already in those whole legs. H2O_in/H2O_out are independently measured actual water transfers not already embodied in whole legs, including natural adsorption/desorption without repair. Split real wet added/removed materials into disjoint J and water from actual measurements, with no default ratio/density. Full W contains substrate, retained residues and water once; its nested children are not extra J_out/H2O_out unless actually separated before crossing. Matched internal pool transfers cancel without new purchase, service or Q. Raw-observation reconciliation is L_in_observed - X_in = P + I + ER + J_in + H2O_in and L_out_observed - X_out = S + EO + W + J_out + H2O_out. L is an observation-side sum only, never an extra physical exchange/provider demand. Map each X by exact event/component/unit/side to a duplicate OTHER observation already counted once on the same canonical side. Every real J/H2O remains once; X cannot cancel true retained influx, C/O, an opposite-side movement or a nested W child merely because it remains in stock. Disjoint observations use X=0. Internal attachment/reuse is not a boundary crossing. Material transferred from an internal repair/asset pool has matched source/destination entries; its purchase and inherited burden are not repeated. Unknown water/material stays unresolved; do not fit a residual. Actual customer disposal beyond the declared factory/service gate is a separately disclosed downstream event, not a fictional factory W. | `containex-sheq-production` |
| species_and_state | air/water/reactions | Keep each actual molecular gas, carbon source, medium, phase, gross inlet and outlet separately. COD/VOC/NOx/PM indicators do not establish molecular masses. Reaction, structural, free, liquid and vapour water require independent evidence; evaporation/absorption and retained water are not invented reaction or repair. Genuine gas/liquid rates are integrated once; already integrated volume stays volume. Every density is substance- and state-specific, never default water density. | `containex-sheq-production` |
| source_and_data | all actual quantities and references | Retain full source context and supplier/route/state applicability, exact native identity/property/unit chain, actual records and uncertainty. No default dimensions, area, thickness, density, unit weight, yield, temperature, time, lifetime, certification, performance, factory energy, installation share or emissions factor. Unresolved core/closure and missing actual observations remain explicit holds; ordinary auxiliary/provider identity gaps are disclosed individually. | `containex-classic-2025`; `containex-sheq-production` |
| one_division | all calculations | Every physical exchange uses gross V in its real native unit and cohort denominator Q or original Qc; no allocation share shrinks physical logistics. Only attributable burdens A are subdivided/allocated. Apply normalize_once once after raw conversion and attribution; cards and aggregation refer to that same result. Q=0 retains actual loads and flows without a per-unit result. Closing FG already first released belongs in Q; delivery/retest/return never creates another Q. | `containex-sheq-production`; `jrc-ilcd-2010` |


### Original acceptance cohort and complete physical history

Q0 denotes the locked positive original first-acceptance cohort mass; Q=0 denotes a zero-output observation. They are different accounts. Original-cohort service uses the same original Q0=Qc and observed H, not a new mass or a second normalization.

Lock original cohort c and original Q0=Qc=sum(M_e) at unique first conforming whole-cabin acceptance events e. Each M_e is calibrated complete net wet cabin kg at that event with the actual integral supplied components once, packaging and test assets excluded. Manufacturing Q is the original Qc of the declared manufacturing cohort. Do not recompute Qc from present surviving mass, net shipment, later reinspection or wet/dry changes. Failed/no-release Q=0 retains all raw loads and no normalized result. Opening raw/WIP carries its measured physical stock and inherited exchange vector once; an opening accepted cabin retains its original Qc and manufacture history, not a new purchase or acceptance.

For every original accepted event partition its original-acceptance basis into disjoint net external possession, on-site released FG, quarantine, repair/rework WIP, internal use, irreversible destroyed/lost portions and other documented terminal dispositions. Their current/terminal sum equals original Qc independently of present wet physical mass. Gross dispatch and returns remain complete physical events; a return reverses the corresponding external possession before later redispatch moves the same surviving entitlement. Split partial loss and survival on a documented original basis; do not restore lost water/parts to the survivor and also export the loss. Present wet stocks, evaporation, removed/new parts and all physical exits have their own conservation bridge. Unknown genealogy or cohort assignment stays unresolved with complete raw totals; loops, postacceptance destruction, retest and failed work create no new Q.

### Whole contaminated exits and nonoverlapping provider demand

Record actual receiver-transfer t and full wet whole outlet Qt once: discarded hardware, packaging, wipe, swab, cloth, filter or equipment substrate plus actually retained solvent, dust, formulation residues and water. Dry substrate, contained chemical and water ledgers are reconciled non-additive children. They become separate external waste exits only after real physical separation before the boundary with separate transfer IDs. Package W or removed-part origins within one mixed outlet are traced children, never a second export or second treatment demand. Actual receiver receipts and total treatment demand remain Qt, independent of environmental attribution.

Assign environmental/service vectors A_tc to nonoverlapping original cohorts from demonstrated causal demand and the allocation hierarchy. Reconcile sum_c(A_tc) plus actual other-function/unassigned vectors to the one actual total provider demand. Physical Qt remains in one event register; reports link to it rather than charge the full event again to each cohort or shrink the physical export by an allocation fraction. Physical V/D context disclosures are non-additive across overlapping reports. Treatment and service inventory is independently assigned A_tc/D, using manufacturing Q or original Qc with observed H; it is not an extra full Qt/D for every cohort. Keep genuinely unknown allocation unresolved. Supplier-embedded history/treatment and fully expanded corresponding direct inventories are mutually exclusive representations, not additive purchases.



### Actual complete producers and equipment fleet

Every supplied sheet, insulation batt, board, door/window, harness, distribution assembly, luminaire, connector, clamp, formulation, fuel and packaging article requires a genuine complete matched upstream producer or a mutually exclusive expanded actual inventory. Cover actual metal extraction/steelmaking/rolling/galvanizing, fibre/binder and board production, electrical component/assembly manufacture, finishes, utilities, maintenance, packaging and waste as applicable. Whole supplied articles include their identified parts, resin/carrier water, coatings and installed hardware once. Source production photographs/capabilities are qualitative evidence, not a measured contemporary supplier order. No same-factory/SKU condition is imposed across independent evidence; an actual incompatible provider/route/form/geography/property remains unresolved. No complete cradle-to-gate claim before genuine provider interfaces and all actual owned manufacture are covered.

Preserve the actual CNC cutter, press, welding equipment, curing oven, handling crane/forklift, scale and electrical tester as physical fleets with opening, receipts, in-use, external transfers, retirement and closing states separate from service demand. Record actual installed parts/fluids, observed operation, maintenance, removed/new materials, leakage and whole contaminated disposal once, linked to original cohorts and compatible provider service units. No assumed life, future replacement count, guessed equipment mass or one whole machine per cabin kg. A real crane/forklift or complete upstream service and its expanded fuel/electricity/maintenance inventory are mutually exclusive; an actual owned machine cannot be hidden in a paper purchased service.

### Packaging wet physical balance and observations

O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. All terms are actual kg for one material/asset pool. O/C are complete wet opening/closing empty, attached WIP, attached FG and reusable stocks. P is new external procurement, I is disjoint supplier-included whole packaging ingress, ER external return received, S full gross shipment-attached export, EO independent external return sent, W whole wet discard. J_in/J_out are independently measured non-water repair/replacement/deposit/residue or other pool transfers not already in those whole legs. H2O_in/H2O_out are independently measured actual water transfers not already embodied in whole legs, including natural adsorption/desorption without repair. Split real wet added/removed materials into disjoint J and water from actual measurements, with no default ratio/density. Full W contains substrate, retained residues and water once; its nested children are not extra J_out/H2O_out unless actually separated before crossing. Matched internal pool transfers cancel without new purchase, service or Q.

Raw-observation reconciliation is L_in_observed - X_in = P + I + ER + J_in + H2O_in and L_out_observed - X_out = S + EO + W + J_out + H2O_out. L is an observation-side sum only, never an extra physical exchange/provider demand. Map each X by exact event/component/unit/side to a duplicate OTHER observation already counted once on the same canonical side. Every real J/H2O remains once; X cannot cancel true retained influx, C/O, an opposite-side movement or a nested W child merely because it remains in stock. Disjoint observations use X=0. Internal attachment/reuse is not a boundary crossing. Material transferred from an internal repair/asset pool has matched source/destination entries; its purchase and inherited burden are not repeated. Unknown water/material stays unresolved; do not fit a residual. Actual customer disposal beyond the declared factory/service gate is a separately disclosed downstream event, not a fictional factory W.


### Complete consumed applicability paragraphs

#### Source chapter 1 / 1

This PCR defines new manufacture of one complete factory-assembled, single-storey steel-frame office cabin, with mineral-wool floor/wall/roof insulation, the declared board/lining/floor-covering options, complete door/window and fixed electrical fit-out. The controlled actual configuration must show a whole prefabricated building predominantly made of metal; a structural skeleton, shipping container, component bundle or bought complete-cabin repackaging does not qualify. The manufacturer CLASSIC Line document establishes this architecture and distinguishes sanitary, corridor, material and flatpack alternatives. The SHEQ report supplies qualitative fabrication/coating/final-assembly context across its production network. Their combination is a transparent technical synthesis, not one proven contemporary SKU, factory or order. No source-specific quantity, performance or certification is transferred as a general default.

#### Source chapter 1 / 2

The selected supply terminal is an independently complete assembled office cabin at first factory quality release, rather than a multi-cabin building completed on site. Sanitary/plumbing, HVAC, loose furniture, transport-container cargo function, foundation/site crane/joining/utility/earthing work, occupancy, maintenance and end-of-life are excluded from this configuration. Changes within the selected configuration need a separately disclosed dataset and fresh applicability assessment; other source architecture options are outside this selected method. Flatpack/incomplete buildings can fall within the broader CPC class but this assembled-office method does not claim their coverage.

#### Source chapter 1 / 3

The selected configuration uses a real P5 particleboard floor, vinyl roll floor covering, coated-chipboard wall/ceiling lining and mineral-wool floor/wall/roof insulation. Cement-bonded board, OSB, plywood and PU/PIR/stone-wool sandwich alternatives in the source are not blended into this inventory. These are actual evidenced options defining a meaningful narrower method, not a prescribed grade recipe or a claim that all combinations belong to one observed SKU. Record the complete supplied permanent building content, including the actual dedicated earthing clamp and any separately supplied installation fastener even if delivered loose. Exclude only real transport/temporary protection and handling assets from net supply mass; do not omit required permanent hardware as packaging.

#### Source chapter 3 / 1

Declare every qualifier in dataset metadata, reference comment or an equivalent complete record. One kg is a scaling basis for the whole building; it is not an isolated kilogram of steel.

#### Source chapter 6 / 1

All cards are individual physical exchanges and conditional evidence requirements, not a default BOM. At closure each actual independent item/formulation, process input, waste, chemical species and destination must have its own card. When a supplied article already includes a constituent, use a disjoint representation or reconciled article bridge with internal transfers cancelled; never add full article wet mass and its embodied materials again. A single physically mixed waste uses one total with independent non-additive measured originW subaccounts and one provider. No actual exchange may be hidden by zero, other, unresolved UUID or an absent card. Full row descriptions, including every supplier/native restriction, are part of the rule.

#### Source chapter 6 / 2

Received sheet/coil for actual cutting, punching, bending and welded floor/roof frames. Retain mill grade, thickness, surface and supplier state; zinc-coated stock is a separate supplied identity. Supplier rolling/steelmaking is upstream. Weigh issue and unused return separately; no catalogue steel-mass factor. At-plant production-mix steel sheet/plate, iron with minor carbon/manganese/sulfur/phosphorus/silicon, permitting cold or hot rolling. This card is restricted to the actual received cold-rolled non-alloy sheet with supplier grade/thickness/surface confirmed; it is not rod, alloy steel, already finished frame or a coating recipe. Generic supplier/grade absence does not invent values. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 3

Only where actual welding uses this solid-wire consumable. Record designation, composition, spool issues/returns and weld procedure; the source proves welding, not this consumable or a universal MAG route. Add each actual electrode/flux separately if different. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 4

Conditional on the actual purchased premix and weld procedure. Purchase the whole supplied mixture once; measure composition and cylinder net mass or state-specific volume/density. Constituents are non-additive subaccounts. Pure gases require separate disjoint supply rows; no assumed blend ratio. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 5

One actual purchased primer used before powder coating. The historical report describes nanotechnology primer but gives no recipe, resin or bath concentration. Retain supplier SDS, supplied full formulation including carrier water, additions, tank stocks and real losses; assay and water are subaccounts, never additional purchases. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 6

One supplier-confirmed complete powder formulation. Record polymer/crosslinker/pigment/filler content without inventing a recipe. Weigh new additions, reusable powder pool, overspray and waste; internal recovered overspray is not purchased again. Actual pretreatment, application and cure conditions/energy must be collected. At-plant complete free-flowing dry powder paint for charged-surface application and actual heat/UV cure. No resin, solvent fraction, temperature, cure duration, efficiency or performance value is fixed. One supplier formulation is purchased once; ordinary composition/provider gaps require records and do not permit a wet-paint or finished coated-component substitution. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 7

Actual steel offcuts leaving this gate, with alloy/coating/contamination and receiver declared. Full gross exported quantity is separate from generation and closing stock. Internal reuse cancels; no automatic saleable-product status or avoided-steel credit. CN at-plant cutting/forming steel offcut Waste only, with no yield/rate provided. Other geography, oily/welding sludge, demolished steel or another actual scrap state requires a matching identity; no5% yield assumption or automatic recycling credit. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 8

Only actual wet sludge from this coating route. Retain dry solids, water and actual hazardous constituents as subaccounts of the one wet export, not duplicate Waste purchases/outputs. Missing composition requires analysis, not residual fitting. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 9

Only powder that actually leaves for waste management; distinguish reusable booth inventory, filter-held powder and dispatched waste. Contamination and receiver govern the identity. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 10

Purchased galvanized sheet for the roof, underfloor or external wall, separately identified by application and coating state in raw records. Purchased prepainted sheet already includes supplier coating; do not add zinc or supplier paint again. Actual site profiling/cutting is retained. Different grades/coatings require separate rows. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 11

Actual mineral-wool route only, for floor/roof/wall quantities kept separately. Retain fibre family, binder, facing, water content, dimensions and supplied mass. Rock wool and glass wool are not automatically interchangeable; no density, thermal rating or thickness is prescribed. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 12

For the source-supported mineral-wool wall timber frame and actual roof crossmembers. Retain species, treatment, grade, moisture and measured mass; distinguish stock from installed timber and offcuts. No species, dry density or preservative recipe is inferred. At-plant sawn/planed dimensional construction lumber; pine and oak are examples, not prescribed species. Native reference Volume/m3 must be retained. Measure actual solid dimensions/volume with moisture/state; independently weigh wet physical mass for closure or use independently measured same-material density at that state. No secondary coefficient or default density converts m3 to kg. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 13

Only the declared actual P5 floor option. Cement-bonded board, OSB and plywood shown nearby are alternatives, not simultaneous recipe ingredients; a different actual option requires its own atomic card. Purchased board includes its resin and supplier manufacture once. One actual P5 particleboard floor panel within the finished wood-chip/shaving/resin board family, not every alternative in the broad official Chinese display. UF is described as common, not a mandatory recipe. Native Volume/m3 remains; collect actual panel net solid volume and independent wet mass/moisture, with no default density. No coating/laminate or supplier resin is repurchased. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 14

Actual coated chipboard wall/ceiling/partition lining. Identify each specification and supplied finish; supplier resin/coating is embedded, not repurchased. Sheet-metal/plasterboard lining alternatives are outside this declared configuration unless separately specified and inventoried. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 15

One actual supplied finished flooring formulation, including backing/fillers. Record roll mass, laid area and cut losses; hot seam welding occurs only where performed. Do not reconstruct this article as virgin PVC plus duplicated finished flooring. One complete finished vinyl/plastic floor-covering roll within the at-plant manufactured covering-article family. Wall/ceiling/tile alternatives in its official basename are not additional purchases or a combined physical exchange. Confirm actual vinyl formulation/backing and installed state; raw PVC resin or laminate wood flooring is not this article. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 16

Only actual factory-applied silicone sealant with supplier composition, carrier and cure system confirmed. Site-only transport-hole sealing is outside this gate. Other actual sealants/adhesives require their own cards; no cure by-product or water reaction is assumed. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 17

One specified finished gasket article where actually fitted to the envelope. Identify polymer, section, full supplied composition and mass; do not substitute raw rubber or assume a vapour membrane. Any actual separate air/vapour/water membrane or fastening tape needs its own card and measured quantity. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 18

One specified bolt article used to connect posts to floor/roof. Purchased coating is included once; actual nuts, washers, screws, rivets and inserts are distinct articles requiring separate cards when present, not a fastener collection. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 19

One actual screw product for envelope fitment. Retain dimensions, alloy and finish, issued/unused stock and installed mass; separate other physical fasteners rather than hiding them in this row. GLO production mix at plant; assembly auxiliary steel screw only, with no fixed grade/coating or supplier established. It does not identify a bolt/nut/rivet/washer or a whole fastener collection; actual specification and upstream provider still require review. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 20

Only one actual whole supplied flooring adhesive if used for the selected P5/vinyl route. Strip welding and bonding are not assumed identical; separately supplied hardener or primer needs its own card.

#### Source chapter 6 / 21

Only this actual segregated board-offcut stream; retain coating/resin and moisture. Export mass, on-site retained stock and generation differ. A genuinely mixed waste may instead use one MixedWaste card with measured non-additive origin subaccounts and a single provider; never force a fictitious separated export. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 22

Actual segregated mineral-wool offcut export, with fibre/binder/facing and moisture retained. Captured dust and attached WIP inventory are separate states; no assumed harmless or recoverable status. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 23

Purchase the complete door leaf/frame/seal/hardware assembly once with its actual inclusion list. The manufacturer describes coated galvanized steel leaves and insulated options; actual component masses are non-additive article subaccounts. Independently supplied hardware is disjoint, not repurchased inside the assembly. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 24

One actual complete office window with declared frame polymer, glazing, gas fill, seal, shutter and hardware inclusion. Supplier glass/frame/gas manufacture is upstream; do not also purchase those embodied constituents. Catalogue glazing dimensions and gas are not universal measurements. At-plant manufactured exterior-window family, one complete supplied plastic-frame double-glazed office window with its actual shutter/hardware inclusions. The native comment lists optional trim/shutter/flashing and new/replacement installation examples; these do not require a specific frame material, installation flange or additional purchases. Confirm actual complete-article inclusions; glazing alone is not this article. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 25

Actual complete supplied wiring harness only where purchased in this form; retain national electrical configuration, conductor/insulation specification and connector inclusion. If site-wired from cable reels, replace with each actual cable and connector product, with internally fabricated harness handoffs cancelled. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 26

One purchased complete board with actual protective devices and mounting state. Record the inclusion list; separate site-fitted protection devices only if not already in this article. Rating is configuration metadata, not consumed electricity. One finished at-plant equipped electrical distribution-board assembly, voltage not exceeding1000V. The broad native family also names consoles/cabinets/bases, but this card is one complete cabin board only; it does not identify a socket, empty enclosure, high-voltage board or separate device collection. Actual ratings and supplied device list require records. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 27

One installed supplied luminaire article. Retain actual power/driver/housing inclusion and installed count/mass; factory test electricity is independently metered and never inferred from rating alone. One complete manufactured at-plant luminaire designed solely for LED light sources; no LED module/driver-only or fluorescent fitting substitution. Use actual full article mass and inclusion list, no assumed wattage, lifetime or luminous performance. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 28

One specified complete socket article where not embedded in a purchased harness/panel. Retain national type, contacts, box and faceplate inclusion; switches and external CEE connectors need separate cards if actually supplied independently. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 29

Actual separately supplied complete switch, including its real contacts/body once; not another charge when already included in a purchased wired module.

#### Source chapter 6 / 30

Actual complete externally recessed inlet connector at the declared national electrical configuration. Keep its included contacts/housing/fasteners once and distinguish mating supply cable outside the factory supply.

#### Source chapter 6 / 31

The CLASSIC source explicitly supplies a clamp for installation on site by the customer. Include the real dedicated permanent clamp in the declared complete supply mass even if delivered loose, with fitment state recorded; it is not transport tare or proof of commissioned site earthing.

#### Source chapter 6 / 32

One separately supplied clamp fastening screw only if outside the complete clamp article; do not duplicate hardware included in that article or assume the catalogue torque or size as a dataset value.

#### Source chapter 6 / 33

The unique first-quality-release reference output is the whole configured single-storey office cabin: welded and coated steel frame, insulated floor/walls/roof, actual weather/air seals, floor/lining, complete door/window and fixed electrical installation. No sanitary/plumbing/HVAC/loose furniture is included in this declared configuration. Weigh net permanent content including actual retained moisture once; exclude transport protection and lifting assets. A positively compatible whole-building native identity is required; steel/components or a freight container cannot substitute. At-plant production mix of finished manufactured buildings predominantly of metal only. No fixed geography, steel grade, geometry, fit-out, certification or performance is supplied by this broad native family. Use only the complete configured assembled office building established by the primary source and actual inclusion/QC records; no component, bare structure or freight container substitution. First release is the only production reference; other same-UUID movements are gross cohort service transfers. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 34

Meter the actual purchased voltage/geography/contract supply once for fabrication, extraction, coating, fitment, tests, cleanup, start/stop and idle loads. Internal voltage transformation is not another purchase. Separate own generation/export and keep original kWh; 1 kWh = 3.6 MJ. No grid UUID or emission factor is inferred. CN user-side grid-average consumption mix below 1 kV only; other geography/voltage, generator output, renewable contract and distribution service require another matching flow. Native comments cover delivery to users; check upstream provider boundaries to avoid duplicate generation/transmission. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 35

Only actual external cleaning, pretreatment or factory test water. Record full delivered mass and state; internally recirculated water is not another purchase. Do not infer high-pressure cabin cleaning, a sanitary commissioning test, steam or a boiler from a generic factory route. Product flow of treated industrial process water, Mass/kg; no fixed local supply route/geography or purity is established. Class18000 natural-water placement is retained as a classification inconsistency, while Product type, name and treatment comment consistently describe supplied industrial water. Do not use for direct resource uptake, untreated water, steam or already recirculating inventory, or duplicate purchases. Actual treatment and provider must match. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 36

Conditional on an actual factory burner/curing or heating installation. Retain supplier composition, volume T/P and wet/dry basis, calorific value and measured consumption; no standard temperature or emission factor is assumed. Electrical-only curing does not activate this row. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 37

Only actual site-controlled handling equipment or generation. Weigh issue and tank stocks, or use independently measured fuel-specific density at recorded conditions; transport-service fuel already in a provider dataset is not bought twice. Mass-reference diesel fuel material identity only; grade/formulation/density/heating value/refinery/geography/provider unspecified. Do not infer any of those or substitute an agricultural-energy/combustion-service row. Actual site fuel and upstream provider remain separately verified. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 38

One actual supplied whole cleaning preparation at its real formulation/state. Only where used; the production source gives no universal degreaser/phosphate recipe. Record real disjoint separately supplied ingredients and any bath maintenance as their own cards.

#### Source chapter 6 / 39

One actual expendable wipe substrate, distinct from a maintained reusable cloth fleet; add real retained cleaning preparation/water only once to the full contaminated outlet.

#### Source chapter 6 / 40

One actual complete installed filter cartridge including its housing/media as supplied; no prescribed fleet size, replacement interval or assumed dust capture efficiency.

#### Source chapter 6 / 41

One actual specified supplied lubricant formulation. Retain opening/in-place/new/closing fluid and measured leakage/removal separately from equipment service burden, with no assumed change interval.

#### Source chapter 6 / 42

Actual user-side AC supply outside the separately bound CN <1kV grid-average flow. Record exact geography, voltage, period, supply mix and upstream gate; each meter belongs to one disjoint supply card. This specific UUID remains unresolved, not a permission to use the bound CN flow for a European factory.

#### Source chapter 6 / 43

Only independently evidenced molecular O2 crossing a defined combustion/process-air gate; keep gross inlet and reaction balance. No virtual oxygen purchase or fixed air-composition coefficient. Molecular O2 CAS7782-44-7, Mass/kg renewable element resource from air only; not a purchased gas or emission. Retain actual atmosphere-to-process uptake and independent speciation; broad liquid/ionic aliases are not assumed actual states. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 44

Only measured molecular N2 carrier/combustion-air uptake for the actual installation. Preserve gross throughput; do not net against discharge or equate with NOx. Dinitrogen N2 CAS7727-37-9, Mass/kg renewable element resource from air only; not purchased nitrogen or an emission. No assumed air composition or cryogenic state. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 45

Only independently measured argon in an actual accounted air stream; keep its own inlet separate from purchased welding mixture and outlet. Elemental argon Ar CAS7440-37-1, Mass/kg renewable element resource from air only; actual measured uptake, not purchased shielding mix, emission or assumed air fraction. Isotopic aliases are not enriched/radioactive-source evidence. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 46

Only actual measured moisture uptake or process-air humidity, with configuration/state and free/retained water reconciliation. Ambient equilibrium uptake is not a purchased material, reaction water, repair, or additional Q. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 47

Only independently measured background CO2 carried into an explicitly accounted physical air stream, with origin distinct from fuel carbon; not a virtual gas purchase, negative-emission claim or fixed atmospheric fraction.

#### Source chapter 6 / 48

One actual combined effluent export only if it is physically combined. Retain full wet quantity, composition, sewer/offsite destination and treatment gate. COD, conductivity and suspended solids are indicators/subaccounts, not additional molecular-mass exports. Separate actual different destinations and sludge. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 49

Conditional on one genuinely mixed dispatched waste. Obtain independent measured origin subaccounts for timber, vinyl, sealant cartridge and other actual content without adding them to the mixed total. Choose the total once with one compatible management provider; separately exported streams remain separate. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 50

Only this actual separately transferred whole contaminated stream, substrate/retained formulation/dust/water included once. If physically co-collected in one mixed outlet, retain this as a measured non-additive origin child instead of an additional external exchange/treatment demand.

#### Source chapter 6 / 51

Only this actual separately transferred whole contaminated stream, substrate/retained formulation/dust/water included once. If physically co-collected in one mixed outlet, retain this as a measured non-additive origin child instead of an additional external exchange/treatment demand.

#### Source chapter 6 / 52

Only this actual separately transferred whole contaminated stream, substrate/retained formulation/dust/water included once. If physically co-collected in one mixed outlet, retain this as a measured non-additive origin child instead of an additional external exchange/treatment demand.

#### Source chapter 6 / 53

Actual direct fossil combustion or verified process release only; supplier upstream emissions are excluded. Use measured molecular CO2 or carbon-specific measured fuel/speciation balance with actual control performance. A VOC or total-carbon indicator is not CO2. Ordinary molecular fossil CO2 CAS124-38-9, Mass/kg, emission to unspecified air only. Broad aliases mention ions, dry ice and isotope terms; they do not change the declared molecular fossil/air identity. No biogenic, delayed correction, long-term, soil/water or other specified air-compartment substitution. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 54

Record actual molecular H2O vapour separately from liquid wastewater, retained/free water and any independently evidenced reaction water. Measure humidity flow and conditions; no generic water-density conversion for gas and no residual solving of two unknowns. Natural desorption does not create repair or new product output. Ordinary H2O CAS7732-18-5 vapour emission to unspecified air only, Mass/kg. The inherited synonym list also contains isotopic/bound/liquid-water terms; those names are not evidence to reinterpret this CAS/phase as heavy/tritiated water, bound water or liquid effluent. Actual specific air compartment needs another matching identity. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 55

Only actual molecular N2 from measured carrier/combustion air or shielding discharge. Record gross molecular throughput and origin separately; NOx is not N2. Do not invent all ventilation air from a default air ratio. Dinitrogen N2 CAS7727-37-9, Mass/kg emission to unspecified air only, distinct from air resource uptake, NOx, supplied cryogenic nitrogen or another emission compartment. Synonym references to liquified nitrogen do not set the actual air-discharge state. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 56

Only actual unreacted molecular O2 at the measured discharge gate, separate from oxygen in water/oxides and oxygen consumed in reaction. Record origin and complete state/speciation evidence. Molecular O2 CAS7782-44-7, Mass/kg to unspecified air, distinct from atmospheric resource uptake, supplied liquid oxygen, oxide-bound oxygen and other air/soil/water compartments. Broad liquid/ionic/excited-state aliases do not establish those supplied states or alter actual O2 speciation. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 57

Only actual elemental argon from the purchased premix or independently measured air throughput, at its real receiving compartment. Do not convert a gas-mixture indicator into argon mass without composition/state evidence. Elemental argon Ar CAS7440-37-1, Mass/kg to unspecified air only; no purchased-gas, other medium or other air compartment substitution. Isotopic aliases do not assert enriched/radioactive argon. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 58

Only the actual separately identified molecular species emitted to the declared air medium by real factory combustion, welding, curing or fugitive release. Record origin, state, control and measurement; no factor, assumed complete combustion or conversion of NOx/VOC/CO/C total into this molecule. Add every other actual identified molecular species separately.

#### Source chapter 6 / 59

Only the actual separately identified molecular species emitted to the declared air medium by real factory combustion, welding, curing or fugitive release. Record origin, state, control and measurement; no factor, assumed complete combustion or conversion of NOx/VOC/CO/C total into this molecule. Add every other actual identified molecular species separately.

#### Source chapter 6 / 60

Only the actual separately identified molecular species emitted to the declared air medium by real factory combustion, welding, curing or fugitive release. Record origin, state, control and measurement; no factor, assumed complete combustion or conversion of NOx/VOC/CO/C total into this molecule. Add every other actual identified molecular species separately.

#### Source chapter 6 / 61

Only the actual separately identified molecular species emitted to the declared air medium by real factory combustion, welding, curing or fugitive release. Record origin, state, control and measurement; no factor, assumed complete combustion or conversion of NOx/VOC/CO/C total into this molecule. Add every other actual identified molecular species separately.

#### Source chapter 6 / 62

Actual carrier-air background CO2 discharged, traced separately from newly generated fossil CO2 and any biogenic source. Preserve gross physical transfer without charging it again as combustion formation or inventing a neutralizing credit.

#### Source chapter 6 / 63

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only actual supplied PE film; retain polymer, additives, new additions and attached/empty/reusable stocks. Other actual transport-cover polymers need distinct cards. Film is excluded from net cabin Q. This card is new external procurement P only. Opening/closing O/C is stock, not procurement; ER is a distinct actual external-return-received card. At-plant polyethylene film/sheet Product, CAS9002-88-4 and Mass/kg, not a finished PE bag or PET. The comment compares PET as a competing polymer, not as this composition. Confirm actual PE grade/formulation/thickness and full gross film movement; no density or use share is inferred. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 64

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only actual timber transport bearer; distinguish species/treatment/moisture and reusable ownership from permanently installed timber. No assumed reuse count or automatic coproduct on return. This card is new external procurement P only. Opening/closing O/C is stock, not procurement; ER is a distinct actual external-return-received card. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 65

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only actual rack crossing this gate; track asset identity, opening/closing stock, external receipt/return and gross shipment. Its physical mass is never reduced by a burden/service share and is never permanent cabin Q. This card is new external procurement P only. Opening/closing O/C is stock, not procurement; ER is a distinct actual external-return-received card. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 66

Full gross actual returned cabin, identified to original delivery/release cohort and inherited burdens. Reverse the original delivery movement where appropriate; neither return nor inspection creates new production Q. Keep actual incremental repair services separate; natural moisture change is not invented repair. At-plant production mix of finished manufactured buildings predominantly of metal only. No fixed geography, steel grade, geometry, fit-out, certification or performance is supplied by this broad native family. Use only the complete configured assembled office building established by the primary source and actual inclusion/QC records; no component, bare structure or freight container substitution. First release is the only production reference; other same-UUID movements are gross cohort service transfers. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 67

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only an actual externally returned, still-functional polyethylene cabin transport-protection film. Record full gross ER by original material/asset identity, state and source; no new upstream purchase/manufacture is assigned to this return. Damaged/changed material needs its actual separate state or waste identity. I and P remain disjoint. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 68

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only an actual externally returned, still-functional timber cabin transport bearer. Record full gross ER by original material/asset identity, state and source; no new upstream purchase/manufacture is assigned to this return. Damaged/changed material needs its actual separate state or waste identity. I and P remain disjoint. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 69

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only an actual externally returned, still-functional reusable steel cabin transport rack. Record full gross ER by original material/asset identity, state and source; no new upstream purchase/manufacture is assigned to this return. Damaged/changed material needs its actual separate state or waste identity. I and P remain disjoint. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 70

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. This is only actual supplier-bundled whole article ingress I, disjoint from new P and external-return ER. Preserve its full wet mass, supplier inclusion/tare and one burden owner even when no separate price exists. It is not another constituent of cabin Q.

#### Source chapter 6 / 71

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. This is only actual supplier-bundled whole article ingress I, disjoint from new P and external-return ER. Preserve its full wet mass, supplier inclusion/tare and one burden owner even when no separate price exists. It is not another constituent of cabin Q.

#### Source chapter 6 / 72

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. This is only actual supplier-bundled whole article ingress I, disjoint from new P and external-return ER. Preserve its full wet mass, supplier inclusion/tare and one burden owner even when no separate price exists. It is not another constituent of cabin Q.

#### Source chapter 6 / 73

Only actual separately supplied repair material, not a prescribed repair recipe. Preserve full wet physical receipt/stock and independent burden once. When actually transferred into the packaging pool, split its non-water J_in and H2O_in from independently observed composition; the internal source/destination entries cancel without another purchase.

#### Source chapter 6 / 74

Only actual separately supplied repair material, not a prescribed repair recipe. Preserve full wet physical receipt/stock and independent burden once. When actually transferred into the packaging pool, split its non-water J_in and H2O_in from independently observed composition; the internal source/destination entries cancel without another purchase.

#### Source chapter 6 / 75

Full gross actual dispatch V of previously released cabins, tied to original first-release cohort Qc. This is a physical finished-goods service handoff, not a second production output, new release or a reduction of first-release Q by closing finished-goods stock. Rejected or unauthorised dispatches retain their actual flows and loads without acquiring accepted status. At-plant production mix of finished manufactured buildings predominantly of metal only. No fixed geography, steel grade, geometry, fit-out, certification or performance is supplied by this broad native family. Use only the complete configured assembled office building established by the primary source and actual inclusion/QC records; no component, bare structure or freight container substitution. First release is the only production reference; other same-UUID movements are gross cohort service transfers. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 76

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only full gross S of this actual material attached to physically dispatched cabins, independently of net Q or burden shares. Keep original asset/material identity and receiver/state. EO is a separate external-return-sent card; internal reuse cancels. Gross physical polyethylene cabin transport-protection film leaving attached to gross dispatched cabins, with each movement and destination separately identified. Internal reuse cancels; no net-Q, allocation or future-use scaling. Reconcile the entire packaging pool; movement is not automatic coproduct credit. At-plant polyethylene film/sheet Product, CAS9002-88-4 and Mass/kg, not a finished PE bag or PET. The comment compares PET as a competing polymer, not as this composition. Confirm actual PE grade/formulation/thickness and full gross film movement; no density or use share is inferred. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 77

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only full gross S of this actual material attached to physically dispatched cabins, independently of net Q or burden shares. Keep original asset/material identity and receiver/state. EO is a separate external-return-sent card; internal reuse cancels. Gross physical timber cabin transport bearer leaving attached to gross dispatched cabins, with each movement and destination separately identified. Internal reuse cancels; no net-Q, allocation or future-use scaling. Reconcile the entire packaging pool; movement is not automatic coproduct credit. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 78

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only full gross S of this actual material attached to physically dispatched cabins, independently of net Q or burden shares. Keep original asset/material identity and receiver/state. EO is a separate external-return-sent card; internal reuse cancels. Gross physical reusable steel cabin transport rack leaving attached to gross dispatched cabins, with each movement and destination separately identified. Internal reuse cancels; no net-Q, allocation or future-use scaling. Reconcile the entire packaging pool; movement is not automatic coproduct credit. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 79

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only independent actual external return EO of this material/asset to its identified owner/receiver at full gross physical quantity. Exclude shipment-attached S already in the shipment card. Retain real state and original burden ledger; no coproduct credit or allocated mass reduction. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 80

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only independent actual external return EO of this material/asset to its identified owner/receiver at full gross physical quantity. Exclude shipment-attached S already in the shipment card. Retain real state and original burden ledger; no coproduct credit or allocated mass reduction. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 81

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only independent actual external return EO of this material/asset to its identified owner/receiver at full gross physical quantity. Exclude shipment-attached S already in the shipment card. Retain real state and original burden ledger; no coproduct credit or allocated mass reduction. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 82

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only this actual packaging material discarded to an identified receiver, at full gross wet mass. Keep closing waste stock and embedded/empty packaging stocks separate. Do not count material constituents and a genuinely mixed waste export simultaneously. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 83

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only this actual packaging material discarded to an identified receiver, at full gross wet mass. Keep closing waste stock and embedded/empty packaging stocks separate. Do not count material constituents and a genuinely mixed waste export simultaneously. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 84

Apply the complete disjoint J_in/J_out and H2O_in/H2O_out wet pool balance pack_pool; I is supplier-included ingress, O/C stocks. Preserve real increments and whole W once; X only reconciles duplicate OTHER observations on the same side. Only this actual packaging material discarded to an identified receiver, at full gross wet mass. Keep closing waste stock and embedded/empty packaging stocks separate. Do not count material constituents and a genuinely mixed waste export simultaneously. Use normalize_once once for this card; raw collection is not pre-divided.

#### Source chapter 6 / 85

Only an actually separated removed whole item transferred as waste, with substrate/contamination/water included once. Use disjoint J_out/H2O_out or whole W; if it remains inside a whole bearer/rack/mixed wet W it is a non-additive origin, not another exit.

#### Source chapter 6 / 86

Only an actually separated removed whole item transferred as waste, with substrate/contamination/water included once. Use disjoint J_out/H2O_out or whole W; if it remains inside a whole bearer/rack/mixed wet W it is a non-additive origin, not another exit.

#### Source chapter 6 / 87

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

#### Source chapter 6 / 88

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

#### Source chapter 6 / 89

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

#### Source chapter 6 / 90

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

#### Source chapter 6 / 91

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

#### Source chapter 6 / 92

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

#### Source chapter 6 / 93

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

#### Source chapter 6 / 94

Only the actual complete physical equipment crossing the asset gate, including real installed parts/fluids once. Record configuration and full mass/count in opening/receipts/in-use/closing fleet, separately from compatible provider service demand and actual usage/maintenance history. This conditional named article is not a mandatory tool list, lifetime, replacement schedule or whole machine per cabin kg.

#### Source chapter 6 / 95

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

#### Source chapter 6 / 96

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

#### Source chapter 6 / 97

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

#### Source chapter 6 / 98

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

#### Source chapter 6 / 99

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

#### Source chapter 6 / 100

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

#### Source chapter 6 / 101

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

#### Source chapter 6 / 102

Only an actual whole still-functional external transfer/return of this equipment at its measured configuration/state, not its service burden, imaginary resale or avoided production credit. Matched internal fleet transfers cancel.

#### Source chapter 6 / 103

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

#### Source chapter 6 / 104

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

#### Source chapter 6 / 105

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

#### Source chapter 6 / 106

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

#### Source chapter 6 / 107

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

#### Source chapter 6 / 108

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

#### Source chapter 6 / 109

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

#### Source chapter 6 / 110

Only actual whole contaminated retired equipment including substrate/installed residue/water once. If one physical mixed receiver event already includes it, keep it as non-additive measured origin; actual full receiver demand is independent of cohort burden attribution.

#### Source chapter 8 / 1

Protocols collect raw original observations only. Their aggregation_rule states the target reference basis for grouping, never permission to divide raw collection values. Preserve every raw unit/rate/state and inherited vector. Convert raw units/rates and perform real attribution before the single normalize_once calculation; card amounts and reporting aggregation reuse that same result. Q is first-released complete net kg; actual finished-goods services and all associated gross physical movements bind to original cohort Qc and observed horizon H. No future service, assumed restoration, new output on reinspection or removal of failed/unauthorised activity is permitted.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Compatible complete steel-frame office-cabin manufacture at the declared configuration and first-release gate |
| allowed_use | Use foreground results with explicit supplier manufacturing, actual logistics and waste-treatment links; post-release services separately tagged by original Qc and observed H |
| excluded_use | Freight container, single steel component, bare kit, sanitary module, multi-module site building, installation/operation/occupant service; unsupported structural/fire/thermal/certification/lifetime claims |
| required_metadata | All reference qualifiers; exact native restrictions; one supply inclusion and supplier/site bridge; process/stock/cohort and gross flow boundaries |
| required_quality_disclosure | Actual measurement and normalization basis; open core/closure/auxiliary/provider/source gaps; study context and allocation evidence; observed period and unperformed future services |
| update_trigger | Configuration, enclosure/fit-out, input supply state, welding/coating route, first-release gate, provider/native identity, measurement or source-method change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes (30 June 2025), p195 and p216; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category boundary: assembled/unassembled/incomplete building versus structural parts; no manufacturing quantity or native-identity approval |
| containex-classic-2025 | handbook | CONTAINEX, Technical description CLASSIC Line Standard, 30.06.2025, §§1–3 and6–8, pp4–26; https://catalog.containex.com/catalog/CONTAINEX/en/catalogs/Technische-Beschreibung-Sanitaer/pdf/Technische-Beschreibung-Sanitaer.pdf | Complete cabin architecture, alternative layers/articles, electrical supply/onsite interface and assembled versus flatpack state. Approximate masses, dimensions, ratings, certification and alternative configurations are not default recipe/data |
| containex-sheq-production | handbook | CONTAINEX, SHEQ Report, retained historical publisher edition, §§7.1 and7.5 pp49 and55–57; https://catalog.containex.com/catalog/containex/en/catalogs/CTX-SHEQ-Report/pdf/CTX-SHEQ-Report.pdf | Qualitative component fabrication/welding, frame primer/powder finish, final assembly/inspection/loading. PCR collection and conservation protocols are author methodological requirements, not measured factory results; no current plant/SKU certification or numerical performance adopted |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA Detailed guidance, first edition March 2010, §§7.9.2–7.9.3 pp255–272 (PDF275–292); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Conditional attributional allocation hierarchy, subdivision/virtual subdivision, determining exchange-specific physical causality and residual common-process market value in real gate state; does not establish industrial route or default coefficients |