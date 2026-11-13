---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.factory-assembled-welded-joint-concrete-storage-building
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Complete factory-assembled welded-joint concrete storage building

Every rule is conditioned on this complete factory article, actual supply form and actual configuration. Wider classification scope and adjacent source variants do not expand this route; actual foreground quantities require separate collection.

## 1. Scope and Applicability

This PCR defines one bounded manufacturing route for a complete factory-assembled, predominantly concrete storage building used to store goods/supplies. It is a whole manufactured warehouse article, including its concrete floor, walls and roof, steel door/vent assemblies, joined and finished state. The route synthesizes the CXT storage-building supply evidence and the complete Schweitzer reinforced-concrete fabrication specification; it does not assert one current SKU, factory order or universal recipe. Each foreground package must demonstrate its actual complete storage configuration and weld-joint route. The source specification also uses generic vault/toilet language, leaves electrical scope TBD and cites optional systems; those statements do not establish fitted plumbing/electrical/insulation or finished habitation. No numerical design or performance claims transfer from either brochure or historical specification.

Exclude isolated wall panels, floor/roof slabs, beams, columns, pipes, ready-mixed concrete, steel-frame/plastic-faced cabins and freight containers; bare shells, open-floor covers, site-assembled kits, multi-module buildings completed onsite, containment/sump designs, prestressed/post-tensioned alternatives, and plumbing/electrical/HVAC-fitted buildings are outside this selected route. A distinct actual variant needs a renewed complete applicability/BOM/route assessment within this same PCR identity, with every real added atomic flow; no parallel leaf or material PCR is created. Actual departures cannot be hidden as zero. Site foundation, outbound transportation, placement/crane erection, site connections and subsequent use/maintenance/end of life are separate lifecycle modules, with actual post-release factory services retained below.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.factory-assembled-welded-joint-concrete-storage-building |
| classification_refs | CPC 3.0 38704; narrower product and route boundary |
| covered_products | Complete factory-assembled non-prestressed reinforced-concrete goods-storage buildings of one declared welded-joint configuration |
| excluded_products | Exclude isolated wall panels, floor/roof slabs, beams, columns, pipes, ready-mixed concrete, steel-frame/plastic-faced cabins and freight containers; bare shells, open-floor covers, site-assembled kits, multi-module buildings completed onsite, containment/sump designs, prestressed/post-tensioned alternatives, and plumbing/electrical/HVAC-fitted buildings are outside this selected route. A distinct actual variant needs a renewed complete applicability/BOM/route assessment within this same PCR identity, with every real added atomic flow; no parallel leaf or material PCR is created. Actual departures cannot be hidden as zero. Site foundation, outbound transportation, placement/crane erection, site connections and subsequent use/maintenance/end of life are separate lifecycle modules, with actual post-release factory services retained below. |
| representative_product | One complete concrete storage building with floor roof walls installed steel door screened vent and actual finishes |
| production_route | Raw receipt → actual batching/reinforcement/mould preparation → placing/compaction → real curing → demould/repair → welded joint and grout/seal assembly → supplied door/vent and actual finishes → complete-building tests and first release |
| market_state | Whole factory product at first quality release before site foundation placement or utility connection; packaging excluded from net product |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one declared complete weather-enclosed concrete goods-storage building as a manufactured article |
| How much | 1 kg of the complete net first-released building; not 1 kg concrete alone or a service per floor area |
| How well | Actual drawing/configuration and whole-building inspection requirements; no assumed strength fire resistance insulation air tightness or certification |
| How long or cycle | Unique first-quality-release event; no service life or use period is assigned |
| reference_flow_link | finished_building |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Commercial buildings `88e0df46-375e-4cac-80e6-3cf781f63625` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual manufacturer site geography and reporting period; one complete concrete-dominant goods-storage building and warehouse use; same-configuration roof floor walls door vent and full supplied completion BOM; non-prestressed welded-joint reinforced-concrete route without open floor or containment sump; actual reinforcement grade shape mesh and cast-in anchored plate supply forms; whole cement sand gravel water and whole admixture/finish formulations with disjoint ownership; actual mould preparation batching compaction curing demoulding repair assembly finishing and tests; actual SCC alternative and actual heat or moist-curing history without default cycle; declared absence or actual separate applicability of insulation windows plumbing electrical and HVAC; unique complete-building first-quality-release Q with measured net wet mass and time; actual dimensions and independent configuration mass M when count or geometry is additionally used; opening closing raw WIP non-WIP physical stocks and every inherited exchange vector; failed Q=0 start-stop idle cleanup test rework and real treatment loads; released FG original cohort Qc observed horizon H gross dispatch returns and original delivery reverse; each package empty attached-WIP attached-FG reusable pools P I ER S EO W and one supplier owner; full asset part fluid carrier-water physical movements versus assigned service burdens; independently measured free bound reaction phase water and actual species carbon sources and receiving media; actual acceptance tests no assumed dimensions density life yield certification or emission factor; native product restrictions provider gates actual upstream transport and ordinary identity/data gaps |

When constructing a foreground package, declare every Required qualifier in metadata or equivalent fields; an omitted qualifier makes the reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `m_reference` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure unique newly first-released complete net building mass Q with cp_release. Include integral concrete/steel/door/vent/finish and actual retained water once; exclude packaging. The reference representation is 1 kg; dispatched quantity and closing released FG are not separate new manufacture. |
| `m_native` | all inventory rows | Actual native extensive property | row-specific | Preserve each row native unit and independent full wet mass. kWh * 3.6 = MJ once; integrate only true rates over observed time, never time-multiply an integrated volume. Volume-to-mass requires independent actual-substance density at measured temperature/pressure/composition. Count-to-mass uses independently measured actual configuration mass M with calibration and scope; Item(s) and item are factor-one count aliases. No building kg/item, floor area/height, thickness, density or service life is inferred from a secondary coefficient. |
| `m_once` | all inventory rows | Declared row-native quantity | per reference flow | Collection captures undivided raw records. raw_units and attribute_vector prepare extensive A_i and full physical V_i before normalization. normalize_once performs A_i/Q_i or V_i/Q_i once; cards and aggregation only reference this same operation. Q_i=Q for manufacture and Q_i=Qc for actual original-cohort services; Q_i=0 retains all burdens with no unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual separate supplied cement fine sand coarse gravel water steel reinforcement mesh and anchored plates plus whole admixtures/finishes and complete purchased door/vent kits; all suppliers and inbound gates declared |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC 3.0:38704; selected complete storage-building route |
| recursive_input_rule | A bought whole building or bought complete concrete shell does not replace this manufacturing route. A real bought intermediate must enter at its own burden-bearing gate with an explicit disjoint bridge; do not rebuy its concrete/reinforcement. A returned original building retains original Qc and actual incremental work only. |
| upstream_dataset_requirement | One compatible provider gate per whole supply with actual recipe/form route geography period and packaging/transport scope; unresolved provider is not zero burden |
| disclosure | Complete configured BOM; source-specific technical synthesis; actual supply/route/quality gate; measured water/mass; stocks and exchange histories; original-cohort services; upstream ownership; exclusions and uncertainty |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `b_complete` | all processes | Begin with the actual burden-bearing supplies, not packing of a purchased finished building. Retain every actual material-preparation, steel cold-bending/tie or finished-mesh placement, mould/whole-release-agent operation, batching/mixing, placing and real vibration (or evidenced SCC alternative), curing/stripping, permitted patching, welded joint/grout/seal assembly, door/vent fitment, actual finishes and complete-building inspection through first release. Internal panel/slab/module handoffs cancel and never create another Q. | `cxt-schweitzer-2023`; `cxt-storage-brochure` |
| `b_supply` | all inventory rows | Each purchased formulation or supplied article is acquired once as a whole, including its carrier water, active chemicals, embedded metal, coatings and supplied fixings. Analytical components remain non-additive subledgers. Use either disjoint separate supplies or a reconciled whole/component bridge with internal transfer cancellation; never whole wet article plus the same components again. Actual onsite formulation includes every separately purchased material and real energy/loss. Add every actually present missing material, fuel, molecule, waste or export as a specific card; no hidden other/zero collections. | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |
| `b_release` | finished_building; service | Q is newly first-quality-released net whole-building mass. Its roof/floor/walls/integral supplies and actual retained water count once, excluding packaging. Released closing FG is already in Q; do not subtract it from manufacturing output or associated assigned manufacture burden. Gross dispatch, return, relocation, reinspection, repaired original goods and internal module handoffs do not create new manufacture. Maintain original Qc/history and actual observed H services even for goods still stored. | `cxt-storage-brochure`; `jrc-ilcd-2010` |
| `b_water` | manufacture; service | Keep full wet physical mass independently from every burden vector. Independently evidence free/absorbed water, chemically bound/structural water, actual reaction and phase changes, evaporation, liquid outlets and retained wet stocks. Hydration does not create extra wet mass; neither bound water nor carbonation CO2 uptake follows from curing alone. Relevant elements and actual species/media/carbon origins are independent constraints; do not fit two unknowns with one residual or rename COD/VOC/NOx/PM indicators as a molecule. | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |
| `b_gates` | all processes | Use the disjoint calc_manufacture_gate, calc_fg_gate and complete calc_packaging pools. Match/cancel true internal Q_internal/F_to/F_back and other source/destination crossings once; T_pack is within the packaging pool, not an extra net-building flow. Full asset stocks are already in manufacture and have non-additive fleet subledgers. Real J/H2O remain explicit; X only removes duplicate OTHER same-side observations, never real crossings, C or Q. | `jrc-ilcd-2010`; `cxt-schweitzer-2023` |
| `b_losses` | manufacture; service | Keep failed/Q=0 production, start-stop, idle, cleanup, samples, testing, real repair/rework and actual treatment, plus raw/WIP/unassigned non-WIP stocks and each inherited exchange vector. Permission, tests and acceptance govern authorization and hold/rejection only: unauthorized or unsuccessful work still consumed real resources and caused real exits. No presumed restoration or new Q. Natural moisture exchange is not a fictitious repair. | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |
| `b_packaging_assets` | packaging; cp_asset | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. All terms are actual kg for one material/asset pool. O/C are complete wet opening/closing empty, attached WIP, attached FG and reusable stocks. P is new external procurement, I is disjoint supplier-included whole packaging ingress, ER external return received, S full gross shipment-attached export, EO independent external return sent, W whole wet discard. J_in/J_out are independently measured non-water repair/replacement/deposit/residue or other pool transfers not already in those whole legs. H2O_in/H2O_out are independently measured actual water transfers not already embodied in whole legs, including natural adsorption/desorption without repair. Split real wet added/removed materials into disjoint J and water from actual measurements, with no default ratio/density. Full W contains substrate, retained residues and water once; its nested children are not extra J_out/H2O_out unless actually separated before crossing. Matched internal pool transfers cancel without new purchase, service or Q. Raw-observation reconciliation is L_in_observed - X_in = P + I + ER + J_in + H2O_in and L_out_observed - X_out = S + EO + W + J_out + H2O_out. L is an observation-side sum only, never an extra physical exchange/provider demand. Map each X by exact event/component/unit/side to a duplicate OTHER observation already counted once on the same canonical side. Every real J/H2O remains once; X cannot cancel true retained influx, C/O, an opposite-side movement or a nested W child merely because it remains in stock. Disjoint observations use X=0. Internal attachment/reuse is not a boundary crossing. Material transferred from an internal repair/asset pool has matched source/destination entries; its purchase and inherited burden are not repeated. Unknown water/material stays unresolved; do not fit a residual. Actual customer disposal beyond the declared factory/service gate is a separately disclosed downstream event, not a fictional factory W. Keep actual asset/part/installed-fluid gross physical ledgers independent of assigned service vectors; no default life or article mass. | `jrc-ilcd-2010` |
| `b_later` | all processes | Site earthwork/foundation, outgoing transport, unloading/placement, site utility connection or later use/maintenance are separately identified outside first manufacturing release. Report actually performed factory post-release packing/storage/handling/dispatch/retest/return/rework services by original Qc/H; unknown future services remain unknown. A source supply/warranty or certification statement is not LCA approval or evidence of a performance value. | `cxt-schweitzer-2023`; `cxt-storage-brochure`; `easiset-2008-alternatives` |

### Complete source, whole-native and producer applicability

The storage brochure positively describes a complete delivered storage building and separately describes open-floor pump/utility structures, containment sumps and post-tensioned containment variants. Its broad final-page pre-plumbed/wired marketing and optional electrical/insulation/HVAC packages do not prove that the selected no-MEP storage configuration has those systems. The February 2023 Schweitzer specification supplies a real concrete preparation, reinforcement, compaction-or-SCC, cure, patch/reject, welded plate/grout/seal joining and door/vent/finish programme. It also uses vault/toilet wording, electrical TBD and source-specific numeric design and test claims. This is explicitly independent technical synthesis of a real complete-storage terminal and an actual fabrication method, not proof that every page describes one measured order or SKU. The independent 2008 Easi-Set example includes field assembly, post-tensioned floor/roof and an EPDM alternative; those are contrary route examples, not inputs to the selected non-prestressed welded-joint method. Actual drawings and supply/route records must admit the chosen configuration; source silence alone does not prove absence of prestress, MEP or another actual operation. No source dimension, strength, dose, cure cycle, life, certification or default weight is transferred.

The actual whole native reference is a Product flow, production mix at plant, finished manufactured article whose complete English and Chinese comments explicitly include warehouses. Its construction/commercial classification is retained as evidence/counterevidence and does not itself establish CPC38704 mapping. Use its actual Mass/kg reference for the complete predominantly-concrete factory goods-storage building, not an item/area conversion, installed-site handover, concrete panel, utility cover or construction service. It supplies no material recipe, geometry, country, site completion or kg/building. Every actual bound auxiliary must meet its full native hard fields and complete provider gate; no name-only proxy or chosen-language shortcut. Tap water remains reference Mass with an actual secondary Volume meanValue0.001, which is not a measured density or permission to change reference units. Natural coarse gravel, whole Portland cement, actual welded metal mesh, complete supplied water-reducer, PE film and whole wooden load platform retain their actual form/family/route limits; no fine-sand, arbitrary rock, PET, pure additive or loose timber substitution.

The terminal is the complete factory-assembled floor/roof/all-wall/installed-door/screened-vent storage article before site foundation placement and utility connection. CXT installation provisions and the independent Easi-Set source keep real site preparation, base/soil conditions, truck/crane access, placement and site interfaces visible as later stages. Any actual owned work required before this whole factory supply is finished stays included wherever performed; an unfinished site kit or field-assembled building cannot be relabelled complete to move manufacture out. Actual source tests, concrete sampling/compaction/curing and nonconforming-unit dispositions must be evidenced, while unperformed routine site/lot QA is not evidence that a method does not exist. Complete physical net wet building mass is measured by a calibrated whole-article or fully measured nonoverlapping same-configuration component bridge, including retained water once; no brochure mass, generic density or area-to-kg bridge.

Each actual cement/aggregate/admixture, reinforcement/mesh/anchored plate, door/vent article, grout/seal/finish preparation, utility, asset and package requires a genuine compatible complete producer or a mutually exclusive expanded actual inventory. Include real extraction/calcination/clinker/grinding, aggregate preparation, steel manufacture/forming/welding, formulation manufacture, upstream utilities, maintenance, packaging and wastes as applicable. A supplied door kit/mesh/whole formulation contains its actual hardware/wire/carrier water once. Real purchased wet-concrete or shell intermediates need an independently evidenced disjoint gate and inherited history, never a paper supplier boundary hiding owned batching/casting/joining or replacing the complete required manufacture with finished-building packing. Original provider-embedded inventories and own earlier raw/WIP/asset histories are separate owned vectors, each transferred once. Ordinary unknown supplier quantities/identities stay explicit; unknown essential chemistry/species sampling applicability cannot be waived by future SOP, ordinary QA or a finite pass.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete concrete storage-building manufacture and first release | required | All actual operations; each conditional atomic exchange needs occurrence or evidenced absence | foreground_manufacturing | finished_building; Q |
| packaging | Each package physical custody and burden ownership | required | All actual operations; each conditional atomic exchange needs occurrence or evidenced absence | physical_custody_and_actual_burden | finished_building; Qc; H |
| service | Original-cohort actual post-release services | required | All actual operations; each conditional atomic exchange needs occurrence or evidenced absence | original_cohort_incremental_service | finished_building; Qc; H |

### Process: Complete concrete storage-building manufacture and first release (`manufacture`)

#### Inputs

##### Product flows

###### Whole supplied Portland cement (`cement`)

Use one actual grey hydraulic Portland-cement powder supply at its supplier gate. Native synonyms include OPC and Type I; the conflicting tile/brick classification does not change the coherent powder identity. Verify actual low-alkali type, supplier and cementitious additions; do not substitute clinker, mortar or a whole precast article. Purchased blended cement contains its own constituents once.

- Selected flow: Cement, portland cement `3c9e98a5-0a1e-4a18-9545-1475a87fcab7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Fine aggregate (`fine_sand`)

Record the actual separately supplied natural fine aggregate and its mineralogy, grading, free moisture and absorption. Resin-coated sand, coarse gravel and a manufactured sand with a different actual geography or route cannot substitute for this natural fine-aggregate supply.

- Selected flow: Natural fine sand
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Coarse natural gravel (`coarse_gravel`)

Use one supplied natural coarse gravel fraction. Native identity describes mostly rounded fragments coarser than sand and typically above 2 mm; this is not a specified #67 grading certificate or a universal size limit. Match the actual specified grading, mineralogy and supply state; do not apply to manufactured sand, recycled aggregate or arbitrary crushed rock.

- Selected flow: Gravel Sand `73f1241c-e77d-4e9e-b290-e755a40acf81`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Metered supplied process water (`water`)

Only actual treated municipal/potable piped supply; no geographic provider is established by the generic identity. Keep measured mass for mixing, curing, etching, testing and cleaning in separate operation subledgers. Native secondary Volume factor is not a density measurement. Recycled water and formulation carrier water are not purchased again.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_utility for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `cxt-schweitzer-2023`

###### Whole air-entraining preparation (`air_entrainer`)

Record the actual purchased whole preparation with formulation identifier, carrier water and active-content subledger. Require an actual air-entraining whole preparation with its own supplied identity; a generic chemical mixture or water reducer does not establish that identity.

- Selected flow: Concrete air-entraining admixture preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Whole water-reducing preparation (`water_reducer`)

The native Product family explicitly covers a water-reducing admixture for cementitious mixtures. Count the actual whole supplied preparation once, including carrier water and additives. The identity specifies no recipe, solids, dosage, ASTM performance or factory provider; measure these independently, and do not rebuy active polymer or carrier water.

- Selected flow: Water reducer `d13b6302-2c5a-4d75-a18b-020b61e7ca60`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Reinforcing bar supply (`reinforcing_bar`)

Record actual reinforcing bars, supplied shape and grade before actual cold bending/tie assembly. Match actual bar versus coil form and grade, without importing another material family's fixed low-alloy chemistry or rolling route into the actual ASTM A615 supply. No prestress, steel fraction or onsite steelmaking is inferred.

- Selected flow: Carbon-steel concrete reinforcing bar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### One purchased welded reinforcing mesh (`reinforcing_mesh`)

Use only one actual finished iron/steel welded wire grid for reinforcement, with actual wire material and ASTM A185 specification documented. The native family includes weaving or welding and several common metals; retain this narrower steel-welded application and no assumed mesh dimensions/coating. Do not buy constituent wire again when a finished mesh is purchased.

- Selected flow: Wire Mesh `f225c346-5bf4-489e-9342-9e1dcedca6ae`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Anchored joint plate article (`weld_plate`)

One actual supplied plate-and-anchor article cast into the concrete for welded building joints. Its integral anchors are counted in the whole article; raw steel-sheet identities do not establish this supplied finished form. If actual onsite fabrication is chosen instead, use disjoint raw inputs and all real fabrication burdens under a documented bridge.

- Selected flow: Steel weld plate with cast-in anchors
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Carbon-steel welding wire (`welding_wire`)

Conditional on this actual welding consumable crossing the boundary. Preserve its actual formulation/composition, supplied form and usage; a wire, coated electrode and each shielding-gas species are separate alternatives or real co-inputs, never a combined gas or assumed welding recipe.

- Selected flow: Carbon-steel welding wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Flux-coated steel welding electrode (`welding_electrode`)

Conditional on this actual welding consumable crossing the boundary. Preserve its actual formulation/composition, supplied form and usage; a wire, coated electrode and each shielding-gas species are separate alternatives or real co-inputs, never a combined gas or assumed welding recipe.

- Selected flow: Flux-coated steel welding electrode
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Carbon dioxide shielding gas (`shield_co2`)

Conditional on this actual welding consumable crossing the boundary. Preserve its actual formulation/composition, supplied form and usage; a wire, coated electrode and each shielding-gas species are separate alternatives or real co-inputs, never a combined gas or assumed welding recipe.

- Selected flow: Carbon dioxide shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Argon shielding gas (`shield_argon`)

Conditional on this actual welding consumable crossing the boundary. Preserve its actual formulation/composition, supplied form and usage; a wire, coated electrode and each shielding-gas species are separate alternatives or real co-inputs, never a combined gas or assumed welding recipe.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Whole concrete-mould release preparation (`release_agent`)

Actual supplied whole release preparation for the concrete-contact mould. Supplier oil/emulsion/chemistry and carrier are measured, not inferred from a generic lubricant. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Whole concrete-mould release preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Liquid membrane-forming concrete curing compound (`curing_compound`)

Only if actually used; preserve the complete supplied preparation and its solvent/water/solids. Moist curing alone does not imply this input. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Liquid membrane-forming concrete curing compound
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Non-shrink cementitious grout preparation (`grout`)

Actual whole purchased grout for floor/wall coving and joints. If mixed onsite from separately purchased ingredients, replace this procurement with the disjoint actual ingredients, preparation energy and loss. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Non-shrink cementitious grout preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Cementitious patching mortar preparation (`repair_mortar`)

Actual whole patch material for permitted superficial voids, with all failed/unapproved repair consumption retained. It does not authorize structural repair or imply restoration. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Cementitious patching mortar preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Paintable polyurethane joint sealant preparation (`joint_sealant`)

Whole actual elastomeric joint sealant. A PU filler/foam or liquid wood-floor finish is not verified as this supplied sealant; resin and carrier are not separate purchases. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Paintable polyurethane joint sealant preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Fine-aggregate cementitious bonding coating preparation (`cement_coating`)

Only the real whole supplied bonding coating when present; do not rebuy its cement and fine aggregate. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Fine-aggregate cementitious bonding coating preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Water-based chemical-resistant urethane coating preparation (`floor_coating`)

Actual complete one-part floor coating; supplied water, binder and additives are one procurement. A generic indoor coating or UV wood coating does not prove compatibility. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Water-based chemical-resistant urethane coating preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Modified acrylic water-repellent penetrating stain preparation (`acrylic_stain`)

Actual whole interior/exterior stain; keep each differing formulation in a separate row. Cast-in texture is not separate purchased brick cladding. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Modified acrylic water-repellent penetrating stain preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Clear acrylic anti-graffiti sealer preparation (`acrylic_sealer`)

Actual whole clear sealer; do not combine with stain, urethane or another weatherproofing preparation. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Clear acrylic anti-graffiti sealer preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Direct-to-metal alkyd paint preparation (`alkyd_paint`)

Only actual onsite metal finish or touch-up, excluding paint already embodied in a purchased coated door or vent. Keep whole supplied solvent/solids and actual dry-film loss once. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Direct-to-metal alkyd paint preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Hydrochloric acid solution (`etch_acid`)

Conditional actual acid etching before paint; record whole solution mass, measured assay and carrier-water subledger. No prescribed concentration or neutralization recipe is inferred from this methodology. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Hydrochloric acid solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Aqueous industrial detergent preparation (`detergent`)

Only one actual supplied cleaning preparation; supplier composition, washout and outlet state are measured. If cleaning uses water alone this card is absent with evidence. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

- Selected flow: Aqueous industrial detergent preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### One complete galvanized steel door kit (`door_kit`)

One actual complete supplied galvanized-steel door/frame/hardware assembly, with the true included hinges/lock/sweep/stop and supplier or local finish scope once. Parts already included are non-additive; real separately supplied pieces need individual cards and measured histories. This concrete whole-article UUID is unresolved; a bare frame/profile or a broad title cannot substitute for the finished supplied kit.

- Selected flow: Complete galvanized-steel door/frame/hardware assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### One complete screened wall vent (`vent_kit`)

One actual bought vent including the specified stainless-steel cover, aluminium louvre, screen, fasteners and supplied coating where included. Composition, inclusion list and actual assembly state are required; no extra purchase of its constituent metals. Add disjoint separate articles only if truly supplied separately.

- Selected flow: Screened metal wall-vent assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_material for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Actual factory electricity (`electricity`)

Meter actual batching, bending, vibrating, welding, curing controls, lifting, finishing, tests and cleanup electricity by operation. The electricity identity must match the actual building-factory geography, voltage, meter and loss/provider boundary; another country or a remediation-specific operating identity is not evidence of this supply.

- Selected flow: Alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Use m_once and cp_utility for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `cxt-schweitzer-2023`

###### Actual diesel use (`diesel`)

Only actual diesel-powered handling or heating within the declared gate. Native mass-based fuel leaves grade, formulation, density, calorific value, refinery route, geography and provider unspecified; no values follow from identity. Actual combustion/abatement species require independent cards and evidence.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_utility for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `cxt-schweitzer-2023`

###### Actual purchased useful heat (`purchased_heat`)

Only actual externally supplied heat with measured delivery/return enthalpy and one supplier heat/water convention. Cold-weather heat provision in a specification does not prove steam curing, a boiler or this exchange. Separate a real heat carrier physically without purchasing its heat twice.

- Selected flow: Purchased useful thermal energy
- Flow property / unit: Energy / MJ
- Amount rule: Use m_once and cp_utility for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `cxt-schweitzer-2023`

###### Liquid heat-transfer water received (`carrier_water_in`)

Only this actual external Product carrier-water leg. Keep full gross measured mass, liquid phase, temperature, pressure, enthalpy and supplier water/energy ownership; not scaled by heat burden share, not Waste by default. No carrier circuit or steam is presumed; a real different phase requires its own specific card.

- Selected flow: Liquid heat-transfer water received
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_utility for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `cxt-schweitzer-2023`

###### Steel concrete casting mould (`mould`)

Conditional actual whole supplied asset, replacement article or single named installed fluid. Record new/used state, full gross physical receipts, measured mass and installed/spare opening/closing pools independently of its service-burden vector. Reuse and current duty do not shrink physical receipts or imply one new purchase per building.

- Selected flow: Steel concrete casting mould
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Concrete compaction vibrator (`vibrator`)

Conditional actual whole supplied asset, replacement article or single named installed fluid. Record new/used state, full gross physical receipts, measured mass and installed/spare opening/closing pools independently of its service-burden vector. Reuse and current duty do not shrink physical receipts or imply one new purchase per building.

- Selected flow: Concrete compaction vibrator
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Replacement concrete-vibrator electric motor (`motor`)

Conditional actual whole supplied asset, replacement article or single named installed fluid. Record new/used state, full gross physical receipts, measured mass and installed/spare opening/closing pools independently of its service-burden vector. Reuse and current duty do not shrink physical receipts or imply one new purchase per building.

- Selected flow: Replacement concrete-vibrator electric motor
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Mineral hydraulic oil (`hydraulic_oil`)

Conditional actual whole supplied asset, replacement article or single named installed fluid. Record new/used state, full gross physical receipts, measured mass and installed/spare opening/closing pools independently of its service-burden vector. Reuse and current duty do not shrink physical receipts or imply one new purchase per building.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete concrete batching mixer (`batch_mixer_receipt`)

Only the actual complete equipment article received or held in the physical fleet; preserve supplied configuration, all included parts/fluids once and full opening/receipt/in-use/closing mass/count. Provider service demand, actual duty, maintained history and compatible units are separate. This conditional equipment identity is not a mandatory factory list, life, capacity or whole machine per building kg.

- Selected flow: Complete concrete batching mixer
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete factory building-handling crane (`handling_crane_receipt`)

Only the actual complete equipment article received or held in the physical fleet; preserve supplied configuration, all included parts/fluids once and full opening/receipt/in-use/closing mass/count. Provider service demand, actual duty, maintained history and compatible units are separate. This conditional equipment identity is not a mandatory factory list, life, capacity or whole machine per building kg.

- Selected flow: Complete factory building-handling crane
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete factory forklift (`forklift_receipt`)

Only the actual complete equipment article received or held in the physical fleet; preserve supplied configuration, all included parts/fluids once and full opening/receipt/in-use/closing mass/count. Provider service demand, actual duty, maintained history and compatible units are separate. This conditional equipment identity is not a mandatory factory list, life, capacity or whole machine per building kg.

- Selected flow: Complete factory forklift
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete building weighing scale (`release_scale_receipt`)

Only the actual complete equipment article received or held in the physical fleet; preserve supplied configuration, all included parts/fluids once and full opening/receipt/in-use/closing mass/count. Provider service demand, actual duty, maintained history and compatible units are separate. This conditional equipment identity is not a mandatory factory list, life, capacity or whole machine per building kg.

- Selected flow: Complete building weighing scale
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete concrete compression testing machine (`compression_tester_receipt`)

Only the actual complete equipment article received or held in the physical fleet; preserve supplied configuration, all included parts/fluids once and full opening/receipt/in-use/closing mass/count. Provider service demand, actual duty, maintained history and compatible units are separate. This conditional equipment identity is not a mandatory factory list, life, capacity or whole machine per building kg.

- Selected flow: Complete concrete compression testing machine
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete reusable concrete-work cleaning cloth (`reusable_cloth_receipt`)

Only this actual reusable article and the named real physical receipt/functional transfer/whole contaminated retirement event. Maintain physical fleet and actual cleaning/service history independently; no invented reuse count, life or new purchase at every cleaning. Whole wet discard contains the substrate and retained formulations/water once.

- Selected flow: Complete reusable concrete-work cleaning cloth
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Supplied expendable cleaning wipe substrate (`expendable_wipe`)

One actual separately supplied expendable wipe substrate, distinct from the reusable cloth fleet or its separately supplied cleaner; record actual supply composition, moisture and gross issue.

- Selected flow: Supplied expendable cleaning wipe substrate
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_material for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `cxt-schweitzer-2023`

###### Supplied non-potable mixing and cleaning water (`nonpotable_water`)

Only an actual independently supplied non-potable water grade outside the bound treated tap-water identity. Keep full real supply state/quality, actual concrete/process admission and independent density/physical mass; internal recycled water is a matched pool transfer, not another external purchase. No permission to use potable/native secondary coefficients for another water.

- Selected flow: Supplied non-potable mixing and cleaning water
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_utility for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `cxt-schweitzer-2023`


##### Waste flows

##### Elementary flows

###### Oxygen from atmosphere (`oxygen_in`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Nitrogen from atmosphere (`nitrogen_in`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Nitrogen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Argon from atmosphere (`argon_in`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Argon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Water vapour from atmosphere (`humidity_in`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Carbon dioxide from atmosphere (`co2_in`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

#### Outputs

##### Product flows

###### Liquid heat-transfer water returned to supplier (`carrier_water_return`)

Only this actual external Product carrier-water leg. Keep full gross measured mass, liquid phase, temperature, pressure, enthalpy and supplier water/energy ownership; not scaled by heat burden share, not Waste by default. No carrier circuit or steam is presumed; a real different phase requires its own specific card.

- Selected flow: Liquid heat-transfer water returned to supplier
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_utility for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `cxt-schweitzer-2023`

###### Complete storage building first release (`finished_building`)

The adopted native Product family explicitly includes warehouses and is a manufactured finished product at plant with Mass reference. This row is only a whole factory-complete concrete goods-storage building with roof, floor, all walls, installed door and vent, joint/finish state and actual supplied completion list. It is not a component, site foundation or installed building delivery. The broader construction classification is disclosed; warehouse product meaning and manufactured state positively match this bounded article. Other commercial building uses and non-storage utility shelters are outside this selection.

- Selected flow: Commercial buildings `88e0df46-375e-4cac-80e6-3cf781f63625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources: `cxt-storage-brochure`; `cxt-schweitzer-2023`

###### Steel concrete casting mould (`mould_external_transfer`)

Only an actual external transfer/return of the complete still-functional article at its current configuration. Keep full physical mass/count and installed fluids/parts once, independently of actual service burdens; no assumed resale or avoided manufacture. Internal fleet transfers are matched and cancelled.

- Selected flow: Steel concrete casting mould
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Concrete compaction vibrator (`vibrator_external_transfer`)

Only an actual external transfer/return of the complete still-functional article at its current configuration. Keep full physical mass/count and installed fluids/parts once, independently of actual service burdens; no assumed resale or avoided manufacture. Internal fleet transfers are matched and cancelled.

- Selected flow: Concrete compaction vibrator
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Concrete-vibrator replacement electric motor (`motor_external_transfer`)

Only an actual external transfer/return of the complete still-functional article at its current configuration. Keep full physical mass/count and installed fluids/parts once, independently of actual service burdens; no assumed resale or avoided manufacture. Internal fleet transfers are matched and cancelled.

- Selected flow: Concrete-vibrator replacement electric motor
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete concrete batching mixer (`batch_mixer_external_transfer`)

Only actual whole still-functional external transfer/return with its complete measured article state, not an assigned service fraction or automatic avoided-production credit. Own inherited history and matching internal fleet handovers remain separate.

- Selected flow: Complete concrete batching mixer
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete factory building-handling crane (`handling_crane_external_transfer`)

Only actual whole still-functional external transfer/return with its complete measured article state, not an assigned service fraction or automatic avoided-production credit. Own inherited history and matching internal fleet handovers remain separate.

- Selected flow: Complete factory building-handling crane
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete factory forklift (`forklift_external_transfer`)

Only actual whole still-functional external transfer/return with its complete measured article state, not an assigned service fraction or automatic avoided-production credit. Own inherited history and matching internal fleet handovers remain separate.

- Selected flow: Complete factory forklift
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete building weighing scale (`release_scale_external_transfer`)

Only actual whole still-functional external transfer/return with its complete measured article state, not an assigned service fraction or automatic avoided-production credit. Own inherited history and matching internal fleet handovers remain separate.

- Selected flow: Complete building weighing scale
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete concrete compression testing machine (`compression_tester_external_transfer`)

Only actual whole still-functional external transfer/return with its complete measured article state, not an assigned service fraction or automatic avoided-production credit. Own inherited history and matching internal fleet handovers remain separate.

- Selected flow: Complete concrete compression testing machine
- Flow property / unit: Number of items / item
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Complete reusable concrete-work cleaning cloth (`reusable_cloth_external_transfer`)

Only this actual reusable article and the named real physical receipt/functional transfer/whole contaminated retirement event. Maintain physical fleet and actual cleaning/service history independently; no invented reuse count, life or new purchase at every cleaning. Whole wet discard contains the substrate and retained formulations/water once.

- Selected flow: Complete reusable concrete-work cleaning cloth
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`


##### Waste flows

###### Segregated waste concrete (`concrete_waste`)

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

- Selected flow: Segregated waste concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_outlet for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources: `cxt-schweitzer-2023`

###### Concrete washout wastewater (`washwater`)

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

- Selected flow: Concrete washout wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_outlet for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources: `cxt-schweitzer-2023`

###### Concrete washout sludge (`sludge`)

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

- Selected flow: Concrete washout sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_outlet for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources: `cxt-schweitzer-2023`

###### Welding slag (`weld_waste`)

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

- Selected flow: Welding slag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_outlet for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources: `cxt-schweitzer-2023`

###### Waste alkyd paint preparation (`paint_waste`)

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

- Selected flow: Waste alkyd paint preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_outlet for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources: `cxt-schweitzer-2023`

###### Spent mineral hydraulic oil (`spent_oil`)

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_outlet for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources: `cxt-schweitzer-2023`

###### Discarded steel casting mould (`scrap_mould`)

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

- Selected flow: Discarded steel casting mould
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_outlet for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources: `cxt-schweitzer-2023`

###### One actual mixed construction-material Waste (`mixed_waste`)

Record one actual externally transferred mixed construction-material Waste stream with one treatment provider. Use the actual mixed physical construction-material identity and receiving gate. Do not substitute domestic refuse, a Product flow or a treatment-service label for the real Waste mixture. Full measured mixed mass is additive once; independently measured originW components are non-additive, or use actual segregated outlets instead. No default landfill or disposal credit.

- Selected flow: Mixed construction waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_outlet for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources: `cxt-schweitzer-2023`

###### Whole discarded concrete compaction vibrator (`vibrator_retirement`)

Only a real whole contaminated retirement including substrate/installed residues/water once. A component inside a co-collected whole wet receiver Qt is a non-additive measured origin, not another physical export or treatment demand. Actual separated components have independent transfer IDs and disjoint units.

- Selected flow: Whole discarded concrete compaction vibrator
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Whole discarded concrete-vibrator replacement electric motor (`motor_retirement`)

Only a real whole contaminated retirement including substrate/installed residues/water once. A component inside a co-collected whole wet receiver Qt is a non-additive measured origin, not another physical export or treatment demand. Actual separated components have independent transfer IDs and disjoint units.

- Selected flow: Whole discarded concrete-vibrator replacement electric motor
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Whole discarded complete concrete batching mixer (`batch_mixer_retirement`)

Actual whole contaminated receiver transfer including article substrate/installed residues/water once. Preserve full gross physical Qt independently of nonoverlapping environmental/service A vectors. If a mixed outlet already contains it, keep the origin non-additive rather than a second exit.

- Selected flow: Whole discarded complete concrete batching mixer
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Whole discarded complete factory building-handling crane (`handling_crane_retirement`)

Actual whole contaminated receiver transfer including article substrate/installed residues/water once. Preserve full gross physical Qt independently of nonoverlapping environmental/service A vectors. If a mixed outlet already contains it, keep the origin non-additive rather than a second exit.

- Selected flow: Whole discarded complete factory building-handling crane
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Whole discarded complete factory forklift (`forklift_retirement`)

Actual whole contaminated receiver transfer including article substrate/installed residues/water once. Preserve full gross physical Qt independently of nonoverlapping environmental/service A vectors. If a mixed outlet already contains it, keep the origin non-additive rather than a second exit.

- Selected flow: Whole discarded complete factory forklift
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Whole discarded complete building weighing scale (`release_scale_retirement`)

Actual whole contaminated receiver transfer including article substrate/installed residues/water once. Preserve full gross physical Qt independently of nonoverlapping environmental/service A vectors. If a mixed outlet already contains it, keep the origin non-additive rather than a second exit.

- Selected flow: Whole discarded complete building weighing scale
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Whole discarded complete concrete compression testing machine (`compression_tester_retirement`)

Actual whole contaminated receiver transfer including article substrate/installed residues/water once. Preserve full gross physical Qt independently of nonoverlapping environmental/service A vectors. If a mixed outlet already contains it, keep the origin non-additive rather than a second exit.

- Selected flow: Whole discarded complete concrete compression testing machine
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Whole discarded contaminated concrete-work cleaning cloth (`reusable_cloth_retirement`)

Only this actual reusable article and the named real physical receipt/functional transfer/whole contaminated retirement event. Maintain physical fleet and actual cleaning/service history independently; no invented reuse count, life or new purchase at every cleaning. Whole wet discard contains the substrate and retained formulations/water once.

- Selected flow: Whole discarded contaminated concrete-work cleaning cloth
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_asset for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_asset`
- Sources: `cxt-schweitzer-2023`

###### Whole spent contaminated cleaning wipe (`spent_wipe`)

One actual separate full wet wipe outlet, with substrate, captured concrete/paint/preparation and water once. When truly co-collected inside mixed_waste, keep only a non-additive measured origin, never a second Qt or provider demand.

- Selected flow: Whole spent contaminated cleaning wipe
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_outlet for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources: `cxt-schweitzer-2023`


##### Elementary flows

###### Oxygen to air (`oxygen_out`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Nitrogen to air (`nitrogen_out`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Nitrogen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Argon to air (`argon_out`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Argon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Water vapour to air (`water_vapour`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Carbon dioxide to air (`co2_out`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Carbon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Carbon monoxide to air (`carbon_monoxide`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Carbon monoxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Nitrogen monoxide to air (`nitrogen_monoxide`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Nitrogen monoxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Nitrogen dioxide to air (`nitrogen_dioxide`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Sulfur dioxide to air (`sulfur_dioxide`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

###### Silicon dioxide to air (`silica_air`)

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

- Selected flow: Silicon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_species for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: `cxt-schweitzer-2023`

### Process: Each package physical custody and burden ownership (`packaging`)

#### Inputs

##### Product flows

###### External purchased receipt — Polyethylene protective film (`pack_film_p`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual P leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### Supplier-included incoming package — Polyethylene protective film (`pack_film_i`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual I leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### External return received — Polyethylene protective film (`pack_film_er`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual ER leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### External purchased receipt — One wooden load pallet (`pack_pallet_p`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual P leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### Supplier-included incoming package — One wooden load pallet (`pack_pallet_i`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual I leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### External return received — One wooden load pallet (`pack_pallet_er`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual ER leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### External purchased receipt — Steel transport strapping (`pack_strap_p`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual P leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### Supplier-included incoming package — Steel transport strapping (`pack_strap_i`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual I leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### External return received — Steel transport strapping (`pack_strap_er`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual ER leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### Supplied wooden pallet repair board (`pack_repair_board`)

Only actual separate repair material, not a prescribed repair event or recipe. Preserve gross physical receipt, spare/retained wet stock and one burden owner. Actual entry into the packaging pool has disjoint measured non-water J_in and H2O_in, with paired internal source/destination history and no second purchase.

- Selected flow: Supplied wooden pallet repair board
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `cxt-schweitzer-2023`

###### Supplied steel pallet repair nail (`pack_repair_nail`)

Only actual separate repair material, not a prescribed repair event or recipe. Preserve gross physical receipt, spare/retained wet stock and one burden owner. Actual entry into the packaging pool has disjoint measured non-water J_in and H2O_in, with paired internal source/destination history and no second purchase.

- Selected flow: Supplied steel pallet repair nail
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `cxt-schweitzer-2023`


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accompanying gross physical shipment — Polyethylene protective film (`pack_film_s`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual S leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### External package return sent — Polyethylene protective film (`pack_film_eo`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual EO leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### Accompanying gross physical shipment — One wooden load pallet (`pack_pallet_s`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual S leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### External package return sent — One wooden load pallet (`pack_pallet_eo`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual EO leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### Accompanying gross physical shipment — Steel transport strapping (`pack_strap_s`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual S leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### External package return sent — Steel transport strapping (`pack_strap_eo`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual EO leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

- Selected flow: Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

##### Waste flows

###### Actual package waste — Polyethylene protective film (`pack_film_w`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual W leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

- Selected flow: Waste Polyethylene protective film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### Actual package waste — One wooden load pallet (`pack_pallet_w`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual W leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

- Selected flow: Waste One wooden load pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### Actual package waste — Steel transport strapping (`pack_strap_w`)

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual W leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

- Selected flow: Waste Steel transport strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

###### Discarded wooden pallet repair board (`pack_removed_board`)

Only an actually separated removed whole item exported as waste, substrate/residues/water once. Use disjoint J_out/H2O_out or full W, never both. If inside whole pallet/mixed wet W it is only a non-additive origin.

- Selected flow: Discarded wooden pallet repair board
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `cxt-schweitzer-2023`

###### Discarded steel pallet repair nail (`pack_removed_nail`)

Only an actually separated removed whole item exported as waste, substrate/residues/water once. Use disjoint J_out/H2O_out or full W, never both. If inside whole pallet/mixed wet W it is only a non-additive origin.

- Selected flow: Discarded steel pallet repair nail
- Flow property / unit: Mass / kg
- Amount rule: Use m_once and cp_packaging for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `cxt-schweitzer-2023`


##### Elementary flows

### Process: Original-cohort actual post-release services (`service`)

#### Inputs

##### Product flows

###### Internal first-release transfer received (`fg_receipt`)

Ledger-only physical movement of the same whole factory-manufactured storage building under its native warehouse Product family; keep roof/floor/walls/door/vent and actual completeness restrictions. Use full actual measured current wet mass V at the original cohort Qc and observed horizon H. Preserve original release identity, original delivery reverse and inherited history separately; no new production, procurement, old manufacturing recharge or automatic return credit. Damaged material that is truly Waste uses a Waste card.

- Selected flow: Commercial buildings `88e0df46-375e-4cac-80e6-3cf781f63625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_service for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `cxt-storage-brochure`; `jrc-ilcd-2010`

###### Actual external original building return (`fg_return`)

Ledger-only physical movement of the same whole factory-manufactured storage building under its native warehouse Product family; keep roof/floor/walls/door/vent and actual completeness restrictions. Use full actual measured current wet mass V at the original cohort Qc and observed horizon H. Preserve original release identity, original delivery reverse and inherited history separately; no new production, procurement, old manufacturing recharge or automatic return credit. Damaged material that is truly Waste uses a Waste card.

- Selected flow: Commercial buildings `88e0df46-375e-4cac-80e6-3cf781f63625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_service for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `cxt-storage-brochure`; `jrc-ilcd-2010`

###### Observed post-release electricity (`service_power`)

Actual observed packing, storage, handling, dispatch, retest and incremental rework electricity under original Qc/H; retain executed work on closing FG. Future unknown service is not treated as executed. Verify actual supplier, voltage, geography and boundary independently; another source-specific operating identity cannot establish this actual supply.

- Selected flow: Alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Use m_once and cp_service for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `cxt-storage-brochure`; `jrc-ilcd-2010`

###### Observed post-release water (`service_water`)

Actual treated municipal/potable water for performed post-release services only. Keep native Mass with independently measured conversion if metered volume; original Qc/H, actual wastewater/wet stock and no second formulation water purchase.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_service for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `cxt-schweitzer-2023`; `jrc-ilcd-2010`

###### Observed post-release diesel (`service_diesel`)

Only actual incremental diesel service assigned to original Qc/H, never an assumed haul distance. Native mass fuel leaves grade, formulation, density, heating value, refinery, geography and provider unspecified; measure independently and add every actual combustion species/outlet under the same original cohort.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_service for the actually assigned extensive numerator; raw records remain undivided.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Gross complete-building dispatch (`fg_dispatch`)

Ledger-only physical movement of the same whole factory-manufactured storage building under its native warehouse Product family; keep roof/floor/walls/door/vent and actual completeness restrictions. Use full actual measured current wet mass V at the original cohort Qc and observed horizon H. Preserve original release identity, original delivery reverse and inherited history separately; no new production, procurement, old manufacturing recharge or automatic return credit. Damaged material that is truly Waste uses a Waste card.

- Selected flow: Commercial buildings `88e0df46-375e-4cac-80e6-3cf781f63625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_service for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `cxt-storage-brochure`; `jrc-ilcd-2010`

##### Waste flows

###### Original-cohort discarded building material (`service_building_waste`)

Only actual original-cohort material that becomes one separately handled Waste stream. Record full wet physical mass, actual mixed composition and treatment provider once; do not reuse a Product UUID or duplicate origin components of an already recorded mixed stream.

- Selected flow: Discarded concrete storage-building material
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use m_once and cp_service for this full measured native V_i leg; burden vector reported separately.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_service`
- Sources: `jrc-ilcd-2010`; `cxt-storage-brochure`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `a_hierarchy` | all inventory rows | Only for attributional cases in which allocation is required by the declared study context: first dedicate data and perform actual or virtual subdivision. For remaining shared exchanges establish the exchange-specific determining physical causal relationship and actual driver. Only genuinely remaining common-process burdens use contemporaneous actual market value of the co-functions at that same process gate, physical state and period. Justify fractions and sensitivity per exchange; no free physical/economic choice, fixed ratio, automatic avoided-production credit or general ILCD-compliance claim. | `jrc-ilcd-2010` |
| `a_history` | all inventory rows | Preserve a physical stock quantity and an inherited extensive-unit vector for every raw, WIP and non-WIP stock. Manufacturing A_i = B_open_i + C_i + T_in_i - B_close_i - T_out_i after actual raw conversion and justified assignment. B_close_i excludes already first-released FG; use only raw/WIP/unused-unassigned stores and do not repeat a stock correction already present in a net issue. Failed goods and waste do not automatically transfer their burdens away; T_out needs an actual other cohort/function and one justified burden handover. | `jrc-ilcd-2010` |
| `a_physical` | all physical movement rows | Physical movement numerators are full measured V_i in their own native units, not A_i, inventory differences, economic fractions, service shares or inherited manufacturing charges. Show V_i/Q for manufacturing-owned movements or V_i/Qc for original-cohort services once. Separately retain actual supply/operation/treatment and justified capital-service vectors with one upstream owner; physical disclosure creates no additional purchase or credit. Only normalize_once divides by product quantity. | `jrc-ilcd-2010` |
| `a_service` | service; packaging; cp_asset | A_service_i_c_H retains actual incremental work already performed for original cohort c over observed H, including stored closing FG, retest and actual rework. Carry only genuinely unused/unassigned service stores; do not defer executed work into unknown future service. Original manufacture/history and delivery reverse remain separately traceable. For an actual mixed Waste record total once with one provider and independently measured originW as non-additive; use real segregated outlets instead only where disjoint. | `jrc-ilcd-2010` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | manufacture | Whole-building first release and raw/WIP history | lot and serialized quality/weighing records |building_id; configuration; actual complete BOM; first_release_time; measured_net_wet_mass; packaging_tare; scale_calibration; moisture_state; test_status; opening_raw; closing_raw; opening_WIP; closing_WIP; non_WIP_pools; each_inherited_exchange_vector; failed_Q_equals_zero; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |Calibrated complete-building weighing or traceable same-configuration net weighing records, with real tare and contemporaneous release/BOM match. Declare complete drawing and tests before selecting the whole output; reject an incomplete article as Q. Independently survey actual geometry when used, never brochure dimensions. Final aggregation definition: Sum measured unique first-release net masses as Q; 1 kg reference flow; keep raw/WIP and non-WIP exchange vectors separately without subtracting closing released FG. Keep raw full physical quantities, independent actual burden vectors and each own/provider history once; full wet receiver Qt is not a cohort share. Distinguish original positive Q0=Qc from zero-output Q=0. | kg | each unique first release and every stock boundary | all attempted lots through first release including failed periods | actual configured storage-building factory | per reference flow | BOM/drawing and route; calibration and tare; test/hold records; serial uniqueness; source and stock vector links |
| cp_material | manufacture | Each actual atomic supply and formulation | receipt issue batch and operation records |row_id; supplier; formulation_id; supply_form; raw_quantity; raw_unit; operation; moisture; assay; carrier_water; opening; receipts; closing; issue_basis; inherited_exchange_vector; provider_scope; loss; failed_work; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |Weigh whole actual supplies and trace meters/receipts to issues and complete-building lots. Separate true purchased ingredients from non-additive assays. Record raw/WIP/unassigned store quantities and per-exchange histories; explicitly state gross occurrence versus already-stock-corrected net issue. Track concrete preparation, rebar/mesh, mould, casting, real compaction/cure, stripping, repair, joint assembly, door/vent fitment and finishes by operation. Final aggregation definition: Keep raw native extensive records undivided; reconcile quantities and justified attribution before normalize_once; report per reference flow by that same one operation. Keep raw full physical quantities, independent actual burden vectors and each own/provider history once; full wet receiver Qt is not a cohort share. Distinguish original positive Q0=Qc from zero-output Q=0. | native kg; actual raw unit retained | each delivery issue and operation | all attempts tests cleanup and work on original returned goods | actual manufacturing and supply gates | per reference flow | Delivery/BOM/SDS/TDS; supplier state/route; assays; disjoint bridge; traceable scales and stock histories |
| cp_utility | manufacture | Each energy fuel water and thermal carrier | meter interval and supplier agreement |row_id; meter; raw_start; raw_end; raw_unit; interval; true_rate; integrated_quantity; T; P; phase; independent_density; enthalpy_in; enthalpy_return; supplier_heat_water_owner; standby; cleanup; lot; inherited_vector; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |Collect each meter/whole-fuel issue independently for actual preparation, casting, curing, welding, lifting, tests, start-stop, idle and cleaning. Match voltage/geography/loss boundaries; distinguish rate from integrated readings. Measure each real carrier physical gross mass/state and heat-delivery/return basis with one supplier convention; no invented steam or boiler. Final aggregation definition: Keep raw native extensive records undivided; reconcile quantities and justified attribution before normalize_once; report per reference flow by that same one operation. Keep raw full physical quantities, independent actual burden vectors and each own/provider history once; full wet receiver Qt is not a cohort share. Distinguish original positive Q0=Qc from zero-output Q=0. | kg; MJ; original m3 or rate if measured | each observed meter interval or issue | all included actual work and zero-output intervals | actual factory and supplier delivery/return gates | per reference flow | Calibration; real intervals; actual substance density and phase; provider inclusion and water/heat agreement |
| cp_outlet | manufacture | Each actual Waste stream | weighing composition and transfer manifest |stream_id; origin; gross_wet_mass; solids; water; treatment_provider; destination; actual_treatment; opening; closing; originW; inherited_exchange_vector; segregation_state; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |Measure complete actual wet stream and destination, including rejected concrete, washout and coating residues. One real mixed stream has one additive total and non-additive independently measured origins, or real disjoint segregated exports. Keep retained wet residue and actual treatment burdens; no Product substitute or default credit. Final aggregation definition: Keep raw native extensive records undivided; reconcile quantities and justified attribution before normalize_once; report per reference flow by that same one operation. Keep raw full physical quantities, independent actual burden vectors and each own/provider history once; full wet receiver Qt is not a cohort share. Distinguish original positive Q0=Qc from zero-output Q=0. | native kg plus independent composition | each generation stock boundary and external transfer | all actual generation including failures and cleanup | actual generation storage and receiving gate | per reference flow | Calibrated weights; composition samples; actual receiver; total/origin reconciliation |
| cp_species | manufacture | Actual independent species water and elements | species-specific measurement and independent balances |species; phase; receiving_medium; gross_in; gross_out; net_transform; carbon_origin; concentration; gas_volume; rate_or_integral; dry_wet_basis; T; P; humidity; independent_reaction; free_water; bound_water; retained_water; element_assay; uncertainty; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |Identify each actual molecular/particulate species independently, then measure concentration and actual compatible air/gas or liquid amount. Reconcile full wet mass, actual free/structural/reaction/phase water and relevant element balances independently; include atmospheric O2/N2/Ar/H2O gross legs where physically exchanged without treating them as purchases. Do not solve simultaneous unknown evaporation/hydration/carbonation by one residual. Final aggregation definition: Keep raw native extensive records undivided; reconcile quantities and justified attribution before normalize_once; report per reference flow by that same one operation. Keep raw full physical quantities, independent actual burden vectors and each own/provider history once; full wet receiver Qt is not a cohort share. Distinguish original positive Q0=Qc from zero-output Q=0. | species kg; measured original gas/liquid units retained | each actual route and measured interval | all actual production loss control and treatment periods | actual material and receiving-media boundary | per reference flow | Species methods/calibration; independent water/element assays; actual uncertainty and unidentified mass retained |
| cp_asset | manufacture | Each actual whole asset part and fluid | asset stock receipt and service log |article_id; new_used; native_count; measured_net_mass; actual_configuration; opening_spare; closing_spare; installed_open; installed_close; receipt; removal; fluid_charge; gross_exit; inherited_vector; actual_service_driver; driver_denominator; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |Count the actual configured whole article and weigh independently if mass is needed. Keep full new/used/repair/installed-fluid physical receipt and stock movements separate from its actual assigned manufacture/service vector. Use an evidenced actual duty/capacity relationship for service assignment; no assumed lifetime or item mass. Final aggregation definition: Keep raw native extensive records undivided; reconcile quantities and justified attribution before normalize_once; report per reference flow by that same one operation. Keep raw full physical quantities, independent actual burden vectors and each own/provider history once; full wet receiver Qt is not a cohort share. Distinguish original positive Q0=Qc from zero-output Q=0. | item; kg; actual fluid native unit | each receipt service removal and stock boundary | entire observed manufacturing and original-cohort service | actual factory asset owner | per reference flow | Register; actual calibrated mass and configuration; physical pools; duty evidence and one upstream charge |
| cp_packaging | packaging | Each named package and all six legs | component custody and burden ownership |package_id; material; empty_open; WIP_attached_open; FG_attached_open; reusable_open; P; I; ER; S; EO; W; empty_close; WIP_attached_close; FG_attached_close; reusable_close; actual_moisture; internal_reuse; owner; physical_V; inherited_vector; cohort; H; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; O; C; J_in; J_out; H2O_in; H2O_out; L_in_observed; L_out_observed; X_in; X_out; matched_pool_event; independent_added_removed_wet_composition; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment |Measure each single material/article and every actual external leg, including supplier-included incoming packaging. Trace gross shipment attachments and returns; reconcile empty/WIP/FG/reusable pools and natural moisture independently. Cancel internal reuse and one internal attached transfer; maintain one burden owner and no duplicate upstream procurement. Final aggregation definition: Keep raw native extensive records undivided; reconcile quantities and justified attribution before normalize_once; report per reference flow by that same one operation. Keep raw full physical quantities, independent actual burden vectors and each own/provider history once; full wet receiver Qt is not a cohort share. Distinguish original positive Q0=Qc from zero-output Q=0. O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. All terms are actual kg for one material/asset pool. O/C are complete wet opening/closing empty, attached WIP, attached FG and reusable stocks. P is new external procurement, I is disjoint supplier-included whole packaging ingress, ER external return received, S full gross shipment-attached export, EO independent external return sent, W whole wet discard. J_in/J_out are independently measured non-water repair/replacement/deposit/residue or other pool transfers not already in those whole legs. H2O_in/H2O_out are independently measured actual water transfers not already embodied in whole legs, including natural adsorption/desorption without repair. Split real wet added/removed materials into disjoint J and water from actual measurements, with no default ratio/density. Full W contains substrate, retained residues and water once; its nested children are not extra J_out/H2O_out unless actually separated before crossing. Matched internal pool transfers cancel without new purchase, service or Q. Raw-observation reconciliation is L_in_observed - X_in = P + I + ER + J_in + H2O_in and L_out_observed - X_out = S + EO + W + J_out + H2O_out. L is an observation-side sum only, never an extra physical exchange/provider demand. Map each X by exact event/component/unit/side to a duplicate OTHER observation already counted once on the same canonical side. Every real J/H2O remains once; X cannot cancel true retained influx, C/O, an opposite-side movement or a nested W child merely because it remains in stock. Disjoint observations use X=0. Internal attachment/reuse is not a boundary crossing. Material transferred from an internal repair/asset pool has matched source/destination entries; its purchase and inherited burden are not repeated. Unknown water/material stays unresolved; do not fit a residual. Actual customer disposal beyond the declared factory/service gate is a separately disclosed downstream event, not a fictional factory W. | native kg; independent wet mass and actual article count | every real leg and stock boundary | all manufacturing and observed Qc/H services | actual supply factory custody and external return gates | per reference flow | All six cards; gross attachment weights; independent pool closures; owner and reuse proof |
| cp_service | service | Original-cohort observed services and FG | original release stock delivery return and incremental work |original_building_id; original_Qc; H_start; H_end; FG_open; Q_internal; external_return_current_mass; original_delivery_reverse; F_to; F_back; gross_dispatch; FG_close; waste; sample; X_FG_in; X_FG_out; actual_service_raw; inherited_manufacture_vector; unused_service_vector; actual_stage_event; original_positive_Q0_Qc; disjoint_original_dispositions; current_wet_stock; full_gross_V; inherited_own_WIP; provider_embedded_owner; full_receiver_Qt; nonoverlapping_cohort_A_vectors; O_FG; C_FG; J_FG_in; J_FG_out; H2O_FG_in; H2O_FG_out; raw_FG_observation_duplicates; physical_pool_membership; foreground_external_flag; matched_internal_event; nonadditive_child; T_pack_internal_attachment ; L_FG_in_observed; L_FG_out_observed |Track serialized whole original buildings with separate current wet physical movement, original delivery reverse and historical manufacture. Meter all actually executed services including closing stored FG and actual rework, adding each true input/species/Waste under its original cohort. No future unknown service or reinspection creates Q. Final aggregation definition: Keep raw native extensive records undivided; reconcile quantities and justified attribution before normalize_once; report per reference flow by that same one operation. Keep raw full physical quantities, independent actual burden vectors and each own/provider history once; full wet receiver Qt is not a cohort share. Distinguish original positive Q0=Qc from zero-output Q=0. Actual J_FG/H2O_FG are real independent transfers; X_in/out are only exact same-side OTHER duplicate observations, never physical increments or stock corrections. | kg; MJ; each actual native unit | each observed movement work event and H boundary | actual elapsed observation horizon H only | actual factory post-release account; separately disclosed site work | per reference flow | Original release and delivery IDs; traceable Qc; current wet masses; executed service logs and full inherited vectors |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `raw_units` | all inventory rows | Convert each original raw observation to its actual native extensive unit before attribution or product division. kWh * 3.6 = MJ once. Integrate true measured rates only; a cumulative volume is already integrated. Density must independently match that same substance/state; native secondary coefficients are not density measurements. Additional geometry/count conversions require actual configured measurements, no generic building mass. | `raw_observations`; `actual_units`; `observed_intervals`; `independent_state_conversion` | converted_raw | `jrc-ilcd-2010` |
| `attribute_vector` | all inventory rows | After dedicated assignment/subdivision and justified causal or genuine residual allocation, manufacturing A_i = B_open_i + C_i + T_in_i - B_close_i - T_out_i in each exchange unit. B_close_i is only unreleased raw/WIP/unused-unassigned non-WIP; never released FG. Retain all failed Q=0 startup idle cleanup testing repair and treatment loads in C_i. State whether raw occurrence or stock-adjusted net issue is used and do not correct stocks twice. Each physical pool and each inherited exchange vector are independent. Original-cohort service A_service_i_c_H includes actual executed increments and carries only unused/unassigned stores. All physical movement legs keep full independent V_i, not this burden difference or a share. | `converted_raw`; `B_open_i`; `C_i`; `T_in_i`; `B_close_i`; `T_out_i`; `original_Qc`; `H`; `actual_service_records` | A_i; A_service_i_c_H; V_i | `jrc-ilcd-2010` |
| `normalize_once` | all inventory rows | a_i = A_i / Q_i; Q_i = Q for manufacturing or original Qc for actual original-cohort services over H. For a separately disclosed physical movement substitute full native V_i for A_i in this same division. Use Q_i once only; cards and protocol aggregation reference the same result, without another division. Q_i=0 keeps raw records, actual burdens and stocks with no unit result. finished_building is the fixed 1 kg representation of measured unique Q, not a second production or normalization. | `A_i`; `A_service_i_c_H`; `V_i`; `Q`; `Qc`; `H`; `cp_release` | a_i | `jrc-ilcd-2010` |
| `calc_manufacture_gate` | manufacture | O_M + R_M + F_to + J_M_in + H2O_M_in = C_M + Q_internal + F_back + E_M + J_M_out + H2O_M_out. All terms are complete actual wet kg at the manufacturing gate. O_M/C_M include raw/WIP/unreleased non-WIP and the actual production-asset/installed-fluid stocks physically inside this gate; the asset fleet is a non-additive subledger of these quantities. This gate excludes the separately owned packaging pool and net accepted FG states. R_M/E_M are disjoint complete actual inward/outward crossings of this gate, with every event flagged as a foreground-external transfer or an actual paired internal transfer. They include materials, utilities, gases, receiver wastes and real asset/part/fluid movements once. Q_internal is the unique net new-building first-release handoff; F_to/F_back are original-FG work handoffs, not new production. J_M/H2O_M are independently measured real non-water/water crossings not already contained in those whole legs, never closure residuals. All real internal transfers have matching source/destination IDs and cancel once in the foreground total; only foreground-external events remain exports/imports. Total mass/element closure does not assume each reacting species is conserved. | `O_M`; `R_M`; `F_to`; `J_M_in`; `H2O_M_in`; `C_M`; `Q_internal`; `F_back`; `E_M`; `J_M_out`; `H2O_M_out` | manufacture_physical_reconciliation | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |
| `calc_fg_gate` | service; packaging | O_FG + Q_internal + R_FG + F_back + J_FG_in + H2O_FG_in = C_FG + G_FG + F_to + W_FG + samples_FG + J_FG_out + H2O_FG_out. O_FG/C_FG include all actual wet net accepted-building states on site: released stock, quarantine/hold, repair/rework and internal use with disjoint membership, separate from original Q0=Qc entitlement. Packages and production assets are excluded from these net-building states. Q_internal matches manufacture once; R_FG is full current-state external return, not the original historical delivery reversal. G_FG is gross net-building dispatch; W_FG and samples_FG are actual whole wet net-building exits. J_FG/H2O_FG are real independent non-water/water transfers not already in those legs, including retained additions and natural uptake/loss without repair. A real component transfer to this gate pairs with its source register; no repeated purchase/history. X only removes exact duplicate OTHER same-side raw observations, never a physical flow, C, Q or real increment. The package pool includes all empty/attached-WIP/attached-FG/reusable states: T_pack is only an internal change of attachment/location inside that pool, not another manufacturing/FG import/export. Combine the disjoint net-building and packaging views by cancelling Q_internal, F_to/F_back and every other true paired internal crossing once. Do not add asset or whole-article constituent subledgers again. Apply the separate complete calc_packaging material pools, then cancel actual matched internal package/asset transfers only once. | `O_FG`; `Q_internal`; `R_FG`; `F_back`; `J_FG_in`; `H2O_FG_in`; `C_FG`; `G_FG`; `F_to`; `W_FG`; `samples_FG`; `J_FG_out`; `H2O_FG_out`; `cp_service`; `cp_packaging` | FG_package_and_combined_physical_reconciliation | `jrc-ilcd-2010`; `cxt-schweitzer-2023`; `cxt-storage-brochure` |
| `calc_packaging` | each actual package | O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. All terms are actual kg for one material/asset pool. O/C are complete wet opening/closing empty, attached WIP, attached FG and reusable stocks. P is new external procurement, I is disjoint supplier-included whole packaging ingress, ER external return received, S full gross shipment-attached export, EO independent external return sent, W whole wet discard. J_in/J_out are independently measured non-water repair/replacement/deposit/residue or other pool transfers not already in those whole legs. H2O_in/H2O_out are independently measured actual water transfers not already embodied in whole legs, including natural adsorption/desorption without repair. Split real wet added/removed materials into disjoint J and water from actual measurements, with no default ratio/density. Full W contains substrate, retained residues and water once; its nested children are not extra J_out/H2O_out unless actually separated before crossing. Matched internal pool transfers cancel without new purchase, service or Q. | `O`; `P`; `I`; `ER`; `J_in`; `H2O_in`; `C`; `S`; `EO`; `W`; `J_out`; `H2O_out`; `cp_packaging` | packaging_wet_closure | `jrc-ilcd-2010` |
| `water_species_check` | all physical gates | Independently reconcile full wet mass, every relevant element and real molecular/particulate species in each phase. Separate free/absorbed water, chemically bound structural/reaction water, water vapour, liquid outlets and retained wet stock with independent tests and uncertainty. Hydration or carbonation is an actual independently evidenced reaction, never a default uptake/emission factor or residual that fits several unknowns. COD/VOC/NOx/PM measurements remain metrics unless independent speciation proves a named exchange. | `wet_mass`; `element_assays`; `actual_species`; `phases`; `free_water`; `bound_water`; `reaction_evidence`; `retained_water`; `liquid_outlets`; `humidity`; `uncertainty` | independent_water_element_species_reconciliation | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all inventory rows | Verify actual product/formulation/material grade route shape polymer/CAS geography phase media type and complete native property chain. Adopted official names are not supplier approval; empty UUID retains one specific exchange. | Full native direct and support evidence; real BOM and provider match |
| `dq_gate` | finished_building | Prove one complete storage building with roof floor all walls door vent and actual finished state, together with actual non-prestressed welded-joint drawing. No component or generic installed construction can establish this gate. | Whole product supply documents; actual drawing; complete acceptance and weigh record |
| `dq_completeness` | all processes | Every failure, zero-output interval, test, cleanup, rework and true physical inlet/outlet remains; identify missing real cards and actual unresolved quantities rather than report zero. | Operation and stock ledgers; meter reconciliation; uncertainty register |
| `dq_stocks` | all physical gates | Each physical stock and every inherited exchange vector are complete independently; product/packaging/assets/parts/fluids and actual carrier returns retain full gross movements. | Independent manufacture FG package and combined gates; elemental/water tests |
| `dq_sources` | all rules | Maintain source version and full applicability context; manufacturer numeric limits are not inventory defaults and different publications are not one SKU. Industrial fabrication evidence does not establish allocation. | Full originals and bounded verified context; source-use assessment; attributional ILCD scope |
| `dq_period` | service; manufacture | Measure actual site/period/configuration and original Qc/H; never invent future service, recipe, dimensions, density, kg/item, life, performance, yield or emission factors. | Contemporaneous measured records; actual test status and explicit gaps |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `v_complete` | finished_building | Require the actual complete storage-building gate, coherent Mass/kg and unique finished_building link, actual first-release Q and disjoint BOM. A raw concrete flow, panel, container or unspecified installed building is insufficient. Missing true core/form/route evidence requires a hold; ordinary auxiliary/provider/future measurement gaps alone do not change the core identity. | `cxt-storage-brochure`; `cxt-schweitzer-2023` |
| `v_once` | all inventory rows | Raw collection stays undivided, conversion and real assignment precede the only normalize_once division, and card/aggregation references never divide again. Require finite checking of both languages, complete actual scopes and explicit Q=0 handling; an unsupported relationship stays unresolved. | `jrc-ilcd-2010` |
| `v_physical` | all processes | Check manufacture FG package and combined physical gates independently of burden allocation, including full wet stocks and gross external receipts/returns, all molecular species/media, water phases and actual reaction evidence. A closed aggregate mass residual does not establish two missing species or a second unknown water process. | `cxt-schweitzer-2023`; `jrc-ilcd-2010` |
| `v_no_duplicates` | all inventory rows | Check whole formulations/articles and disjoint bridges, each package P/I/ER/S/EO/W and one supplier owner, mixed Waste total versus non-additive originW, physical V versus service/burden A, Q versus original Qc/H, and one actual treatment provider. No automatic coproduct, credit, repeated manufacture or erasure of unauthorized/failed work. | `jrc-ilcd-2010` |
| `v_evidence` | all inventory rows | Each selected native UUID must match the true complete article or named physical/chemical exchange, all native identity restrictions and the exact reference-property/unit-group/reference-unit chain. Preserve official Chinese names, every qualifier, description, source and complete normative context. Source possession or engineering checking does not establish scientific/translation approval, mapping acceptance, certification or publication. | `unsd-cpc3-2025`; `cxt-schweitzer-2023`; `jrc-ilcd-2010` |


### Original acceptance cohort and complete physical history

Q0 denotes the locked positive original first-acceptance cohort mass; Q=0 denotes a zero-output observation. They are different accounts. Original-cohort service uses the same original Q0=Qc and observed H, not a new mass or a second normalization.

Lock original cohort c and original Q0=Qc=sum(M_e) at unique first conforming whole-building acceptance events e. Each M_e is calibrated complete net wet building kg at that event with the actual integral supplied components once, packaging and test assets excluded. Manufacturing Q is the original Qc of the declared manufacturing cohort. Do not recompute Qc from present surviving mass, net shipment, later reinspection or wet/dry changes. Failed/no-release Q=0 retains all raw loads and no normalized result. Opening raw/WIP carries its measured physical stock and inherited exchange vector once; an opening accepted building retains its original Qc and manufacture history, not a new purchase or acceptance.

For every original accepted event partition its original-acceptance basis into disjoint net external possession, on-site released FG, quarantine, repair/rework WIP, internal use, irreversible destroyed/lost portions and other documented terminal dispositions. Their current/terminal sum equals original Qc independently of present wet physical mass. Gross dispatch and returns remain complete physical events; a return reverses the corresponding external possession before later redispatch moves the same surviving entitlement. Split partial loss and survival on a documented original basis; do not restore lost water/parts to the survivor and also export the loss. Present wet stocks, evaporation, removed/new parts and all physical exits have their own conservation bridge. Unknown genealogy or cohort assignment stays unresolved with complete raw totals; loops, postacceptance destruction, retest and failed work create no new Q.

### Whole contaminated exits and nonoverlapping provider demand

Record actual receiver-transfer t and full wet whole outlet Qt once: discarded hardware, packaging, wipe, swab, cloth, filter or equipment substrate plus actually retained solvent, dust, formulation residues and water. Dry substrate, contained chemical and water ledgers are reconciled non-additive children. They become separate external waste exits only after real physical separation before the boundary with separate transfer IDs. Package W or removed-part origins within one mixed outlet are traced children, never a second export or second treatment demand. Actual receiver receipts and total treatment demand remain Qt, independent of environmental attribution.

Assign environmental/service vectors A_tc to nonoverlapping original cohorts from demonstrated causal demand and the allocation hierarchy. Reconcile sum_c(A_tc) plus actual other-function/unassigned vectors to the one actual total provider demand. Physical Qt remains in one event register; reports link to it rather than charge the full event again to each cohort or shrink the physical export by an allocation fraction. Physical V/D context disclosures are non-additive across overlapping reports. Treatment and service inventory is independently assigned A_tc/D, using manufacturing Q or original Qc with observed H; it is not an extra full Qt/D for every cohort. Keep genuinely unknown allocation unresolved. Supplier-embedded history/treatment and fully expanded corresponding direct inventories are mutually exclusive representations, not additive purchases.




### Independent manufacturing, FG and package physical bridges

O_M + R_M + F_to + J_M_in + H2O_M_in = C_M + Q_internal + F_back + E_M + J_M_out + H2O_M_out. All terms are complete actual wet kg at the manufacturing gate. O_M/C_M include raw/WIP/unreleased non-WIP and the actual production-asset/installed-fluid stocks physically inside this gate; the asset fleet is a non-additive subledger of these quantities. This gate excludes the separately owned packaging pool and net accepted FG states. R_M/E_M are disjoint complete actual inward/outward crossings of this gate, with every event flagged as a foreground-external transfer or an actual paired internal transfer. They include materials, utilities, gases, receiver wastes and real asset/part/fluid movements once. Q_internal is the unique net new-building first-release handoff; F_to/F_back are original-FG work handoffs, not new production. J_M/H2O_M are independently measured real non-water/water crossings not already contained in those whole legs, never closure residuals. All real internal transfers have matching source/destination IDs and cancel once in the foreground total; only foreground-external events remain exports/imports. Total mass/element closure does not assume each reacting species is conserved.

O_FG + Q_internal + R_FG + F_back + J_FG_in + H2O_FG_in = C_FG + G_FG + F_to + W_FG + samples_FG + J_FG_out + H2O_FG_out. O_FG/C_FG include all actual wet net accepted-building states on site: released stock, quarantine/hold, repair/rework and internal use with disjoint membership, separate from original Q0=Qc entitlement. Packages and production assets are excluded from these net-building states. Q_internal matches manufacture once; R_FG is full current-state external return, not the original historical delivery reversal. G_FG is gross net-building dispatch; W_FG and samples_FG are actual whole wet net-building exits. J_FG/H2O_FG are real independent non-water/water transfers not already in those legs, including retained additions and natural uptake/loss without repair. A real component transfer to this gate pairs with its source register; no repeated purchase/history. X only removes exact duplicate OTHER same-side raw observations, never a physical flow, C, Q or real increment. The package pool includes all empty/attached-WIP/attached-FG/reusable states: T_pack is only an internal change of attachment/location inside that pool, not another manufacturing/FG import/export. Combine the disjoint net-building and packaging views by cancelling Q_internal, F_to/F_back and every other true paired internal crossing once. Do not add asset or whole-article constituent subledgers again.

O + P + I + ER + J_in + H2O_in = C + S + EO + W + J_out + H2O_out. All terms are actual kg for one material/asset pool. O/C are complete wet opening/closing empty, attached WIP, attached FG and reusable stocks. P is new external procurement, I is disjoint supplier-included whole packaging ingress, ER external return received, S full gross shipment-attached export, EO independent external return sent, W whole wet discard. J_in/J_out are independently measured non-water repair/replacement/deposit/residue or other pool transfers not already in those whole legs. H2O_in/H2O_out are independently measured actual water transfers not already embodied in whole legs, including natural adsorption/desorption without repair. Split real wet added/removed materials into disjoint J and water from actual measurements, with no default ratio/density. Full W contains substrate, retained residues and water once; its nested children are not extra J_out/H2O_out unless actually separated before crossing. Matched internal pool transfers cancel without new purchase, service or Q.

Raw-observation reconciliation is L_in_observed - X_in = P + I + ER + J_in + H2O_in and L_out_observed - X_out = S + EO + W + J_out + H2O_out. L is an observation-side sum only, never an extra physical exchange/provider demand. Map each X by exact event/component/unit/side to a duplicate OTHER observation already counted once on the same canonical side. Every real J/H2O remains once; X cannot cancel true retained influx, C/O, an opposite-side movement or a nested W child merely because it remains in stock. Disjoint observations use X=0. Internal attachment/reuse is not a boundary crossing. Material transferred from an internal repair/asset pool has matched source/destination entries; its purchase and inherited burden are not repeated. Unknown water/material stays unresolved; do not fit a residual. Actual customer disposal beyond the declared factory/service gate is a separately disclosed downstream event, not a fictional factory W.



Raw gate observation reconciliation is L_M_in_observed - X_M_in = R_M + F_to + J_M_in + H2O_M_in and L_M_out_observed - X_M_out = Q_internal + F_back + E_M + J_M_out + H2O_M_out. For FG it is L_FG_in_observed - X_FG_in = Q_internal + R_FG + F_back + J_FG_in + H2O_FG_in and L_FG_out_observed - X_FG_out = G_FG + F_to + W_FG + samples_FG + J_FG_out + H2O_FG_out. L terms are observation sums only. Each X is a documented duplicate OTHER observation on that exact event/component/unit/side; the corresponding canonical real crossing remains once, and no X cancels opening/closing stocks, true retained increments or the reference event. Package X_in/out and FG X_FG_in/out are different pool-owned observations, not physical balancing flows. Unknown true transfers stay unresolved, not filled by X.

### Complete consumed applicability paragraphs

#### Source chapter 1 / 1

This PCR defines one bounded manufacturing route for a complete factory-assembled, predominantly concrete storage building used to store goods/supplies. It is a whole manufactured warehouse article, including its concrete floor, walls and roof, steel door/vent assemblies, joined and finished state. The route synthesizes the CXT storage-building supply evidence and the complete Schweitzer reinforced-concrete fabrication specification; it does not assert one current SKU, factory order or universal recipe. Each foreground package must demonstrate its actual complete storage configuration and weld-joint route. The source specification also uses generic vault/toilet language, leaves electrical scope TBD and cites optional systems; those statements do not establish fitted plumbing/electrical/insulation or finished habitation. No numerical design or performance claims transfer from either brochure or historical specification.

#### Source chapter 1 / 2

Exclude isolated wall panels, floor/roof slabs, beams, columns, pipes, ready-mixed concrete, steel-frame/plastic-faced cabins and freight containers; bare shells, open-floor covers, site-assembled kits, multi-module buildings completed onsite, containment/sump designs, prestressed/post-tensioned alternatives, and plumbing/electrical/HVAC-fitted buildings are outside this selected route. A distinct actual variant needs a renewed complete applicability/BOM/route assessment within this same PCR identity, with every real added atomic flow; no parallel leaf or material PCR is created. Actual departures cannot be hidden as zero. Site foundation, outbound transportation, placement/crane erection, site connections and subsequent use/maintenance/end of life are separate lifecycle modules, with actual post-release factory services retained below.

#### Source chapter 3 / 1

When constructing a foreground package, declare every Required qualifier in metadata or equivalent fields; an omitted qualifier makes the reference definition incomplete.

#### Source chapter 6 / 1

Use one actual grey hydraulic Portland-cement powder supply at its supplier gate. Native synonyms include OPC and Type I; the conflicting tile/brick classification does not change the coherent powder identity. Verify actual low-alkali type, supplier and cementitious additions; do not substitute clinker, mortar or a whole precast article. Purchased blended cement contains its own constituents once.

#### Source chapter 6 / 2

Record the actual separately supplied natural fine aggregate and its mineralogy, grading, free moisture and absorption. Resin-coated sand, coarse gravel and a manufactured sand with a different actual geography or route cannot substitute for this natural fine-aggregate supply.

#### Source chapter 6 / 3

Use one supplied natural coarse gravel fraction. Native identity describes mostly rounded fragments coarser than sand and typically above 2 mm; this is not a specified #67 grading certificate or a universal size limit. Match the actual specified grading, mineralogy and supply state; do not apply to manufactured sand, recycled aggregate or arbitrary crushed rock.

#### Source chapter 6 / 4

Only actual treated municipal/potable piped supply; no geographic provider is established by the generic identity. Keep measured mass for mixing, curing, etching, testing and cleaning in separate operation subledgers. Native secondary Volume factor is not a density measurement. Recycled water and formulation carrier water are not purchased again.

#### Source chapter 6 / 5

Record the actual purchased whole preparation with formulation identifier, carrier water and active-content subledger. Require an actual air-entraining whole preparation with its own supplied identity; a generic chemical mixture or water reducer does not establish that identity.

#### Source chapter 6 / 6

The native Product family explicitly covers a water-reducing admixture for cementitious mixtures. Count the actual whole supplied preparation once, including carrier water and additives. The identity specifies no recipe, solids, dosage, ASTM performance or factory provider; measure these independently, and do not rebuy active polymer or carrier water.

#### Source chapter 6 / 7

Record actual reinforcing bars, supplied shape and grade before actual cold bending/tie assembly. Match actual bar versus coil form and grade, without importing another material family's fixed low-alloy chemistry or rolling route into the actual ASTM A615 supply. No prestress, steel fraction or onsite steelmaking is inferred.

#### Source chapter 6 / 8

Use only one actual finished iron/steel welded wire grid for reinforcement, with actual wire material and ASTM A185 specification documented. The native family includes weaving or welding and several common metals; retain this narrower steel-welded application and no assumed mesh dimensions/coating. Do not buy constituent wire again when a finished mesh is purchased.

#### Source chapter 6 / 9

One actual supplied plate-and-anchor article cast into the concrete for welded building joints. Its integral anchors are counted in the whole article; raw steel-sheet identities do not establish this supplied finished form. If actual onsite fabrication is chosen instead, use disjoint raw inputs and all real fabrication burdens under a documented bridge.

#### Source chapter 6 / 10

Conditional on this actual welding consumable crossing the boundary. Preserve its actual formulation/composition, supplied form and usage; a wire, coated electrode and each shielding-gas species are separate alternatives or real co-inputs, never a combined gas or assumed welding recipe.

#### Source chapter 6 / 11

Conditional on this actual welding consumable crossing the boundary. Preserve its actual formulation/composition, supplied form and usage; a wire, coated electrode and each shielding-gas species are separate alternatives or real co-inputs, never a combined gas or assumed welding recipe.

#### Source chapter 6 / 12

Conditional on this actual welding consumable crossing the boundary. Preserve its actual formulation/composition, supplied form and usage; a wire, coated electrode and each shielding-gas species are separate alternatives or real co-inputs, never a combined gas or assumed welding recipe.

#### Source chapter 6 / 13

Conditional on this actual welding consumable crossing the boundary. Preserve its actual formulation/composition, supplied form and usage; a wire, coated electrode and each shielding-gas species are separate alternatives or real co-inputs, never a combined gas or assumed welding recipe.

#### Source chapter 6 / 14

Actual supplied whole release preparation for the concrete-contact mould. Supplier oil/emulsion/chemistry and carrier are measured, not inferred from a generic lubricant. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 15

Only if actually used; preserve the complete supplied preparation and its solvent/water/solids. Moist curing alone does not imply this input. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 16

Actual whole purchased grout for floor/wall coving and joints. If mixed onsite from separately purchased ingredients, replace this procurement with the disjoint actual ingredients, preparation energy and loss. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 17

Actual whole patch material for permitted superficial voids, with all failed/unapproved repair consumption retained. It does not authorize structural repair or imply restoration. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 18

Whole actual elastomeric joint sealant. A PU filler/foam or liquid wood-floor finish is not verified as this supplied sealant; resin and carrier are not separate purchases. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 19

Only the real whole supplied bonding coating when present; do not rebuy its cement and fine aggregate. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 20

Actual complete one-part floor coating; supplied water, binder and additives are one procurement. A generic indoor coating or UV wood coating does not prove compatibility. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 21

Actual whole interior/exterior stain; keep each differing formulation in a separate row. Cast-in texture is not separate purchased brick cladding. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 22

Actual whole clear sealer; do not combine with stain, urethane or another weatherproofing preparation. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 23

Only actual onsite metal finish or touch-up, excluding paint already embodied in a purchased coated door or vent. Keep whole supplied solvent/solids and actual dry-film loss once. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 24

Conditional actual acid etching before paint; record whole solution mass, measured assay and carrier-water subledger. No prescribed concentration or neutralization recipe is inferred from this methodology. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 25

Only one actual supplied cleaning preparation; supplier composition, washout and outlet state are measured. If cleaning uses water alone this card is absent with evidence. Assay constituents are non-additive subledgers; actual onsite preparation instead records every separately purchased material and real energy/loss.

#### Source chapter 6 / 26

One actual complete supplied galvanized-steel door/frame/hardware assembly, with the true included hinges/lock/sweep/stop and supplier or local finish scope once. Parts already included are non-additive; real separately supplied pieces need individual cards and measured histories. This concrete whole-article UUID is unresolved; a bare frame/profile or a broad title cannot substitute for the finished supplied kit.

#### Source chapter 6 / 27

One actual bought vent including the specified stainless-steel cover, aluminium louvre, screen, fasteners and supplied coating where included. Composition, inclusion list and actual assembly state are required; no extra purchase of its constituent metals. Add disjoint separate articles only if truly supplied separately.

#### Source chapter 6 / 28

Meter actual batching, bending, vibrating, welding, curing controls, lifting, finishing, tests and cleanup electricity by operation. The electricity identity must match the actual building-factory geography, voltage, meter and loss/provider boundary; another country or a remediation-specific operating identity is not evidence of this supply.

#### Source chapter 6 / 29

Only actual diesel-powered handling or heating within the declared gate. Native mass-based fuel leaves grade, formulation, density, calorific value, refinery route, geography and provider unspecified; no values follow from identity. Actual combustion/abatement species require independent cards and evidence.

#### Source chapter 6 / 30

Only actual externally supplied heat with measured delivery/return enthalpy and one supplier heat/water convention. Cold-weather heat provision in a specification does not prove steam curing, a boiler or this exchange. Separate a real heat carrier physically without purchasing its heat twice.

#### Source chapter 6 / 31

Only this actual external Product carrier-water leg. Keep full gross measured mass, liquid phase, temperature, pressure, enthalpy and supplier water/energy ownership; not scaled by heat burden share, not Waste by default. No carrier circuit or steam is presumed; a real different phase requires its own specific card.

#### Source chapter 6 / 32

Conditional actual whole supplied asset, replacement article or single named installed fluid. Record new/used state, full gross physical receipts, measured mass and installed/spare opening/closing pools independently of its service-burden vector. Reuse and current duty do not shrink physical receipts or imply one new purchase per building.

#### Source chapter 6 / 33

Conditional actual whole supplied asset, replacement article or single named installed fluid. Record new/used state, full gross physical receipts, measured mass and installed/spare opening/closing pools independently of its service-burden vector. Reuse and current duty do not shrink physical receipts or imply one new purchase per building.

#### Source chapter 6 / 34

Conditional actual whole supplied asset, replacement article or single named installed fluid. Record new/used state, full gross physical receipts, measured mass and installed/spare opening/closing pools independently of its service-burden vector. Reuse and current duty do not shrink physical receipts or imply one new purchase per building.

#### Source chapter 6 / 35

Conditional actual whole supplied asset, replacement article or single named installed fluid. Record new/used state, full gross physical receipts, measured mass and installed/spare opening/closing pools independently of its service-burden vector. Reuse and current duty do not shrink physical receipts or imply one new purchase per building.

#### Source chapter 6 / 36

Only the actual complete equipment article received or held in the physical fleet; preserve supplied configuration, all included parts/fluids once and full opening/receipt/in-use/closing mass/count. Provider service demand, actual duty, maintained history and compatible units are separate. This conditional equipment identity is not a mandatory factory list, life, capacity or whole machine per building kg.

#### Source chapter 6 / 37

Only the actual complete equipment article received or held in the physical fleet; preserve supplied configuration, all included parts/fluids once and full opening/receipt/in-use/closing mass/count. Provider service demand, actual duty, maintained history and compatible units are separate. This conditional equipment identity is not a mandatory factory list, life, capacity or whole machine per building kg.

#### Source chapter 6 / 38

Only the actual complete equipment article received or held in the physical fleet; preserve supplied configuration, all included parts/fluids once and full opening/receipt/in-use/closing mass/count. Provider service demand, actual duty, maintained history and compatible units are separate. This conditional equipment identity is not a mandatory factory list, life, capacity or whole machine per building kg.

#### Source chapter 6 / 39

Only the actual complete equipment article received or held in the physical fleet; preserve supplied configuration, all included parts/fluids once and full opening/receipt/in-use/closing mass/count. Provider service demand, actual duty, maintained history and compatible units are separate. This conditional equipment identity is not a mandatory factory list, life, capacity or whole machine per building kg.

#### Source chapter 6 / 40

Only the actual complete equipment article received or held in the physical fleet; preserve supplied configuration, all included parts/fluids once and full opening/receipt/in-use/closing mass/count. Provider service demand, actual duty, maintained history and compatible units are separate. This conditional equipment identity is not a mandatory factory list, life, capacity or whole machine per building kg.

#### Source chapter 6 / 41

Only this actual reusable article and the named real physical receipt/functional transfer/whole contaminated retirement event. Maintain physical fleet and actual cleaning/service history independently; no invented reuse count, life or new purchase at every cleaning. Whole wet discard contains the substrate and retained formulations/water once.

#### Source chapter 6 / 42

One actual separately supplied expendable wipe substrate, distinct from the reusable cloth fleet or its separately supplied cleaner; record actual supply composition, moisture and gross issue.

#### Source chapter 6 / 43

Only an actual independently supplied non-potable water grade outside the bound treated tap-water identity. Keep full real supply state/quality, actual concrete/process admission and independent density/physical mass; internal recycled water is a matched pool transfer, not another external purchase. No permission to use potable/native secondary coefficients for another water.

#### Source chapter 6 / 44

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 45

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 46

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 47

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 48

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 49

Only this actual external Product carrier-water leg. Keep full gross measured mass, liquid phase, temperature, pressure, enthalpy and supplier water/energy ownership; not scaled by heat burden share, not Waste by default. No carrier circuit or steam is presumed; a real different phase requires its own specific card.

#### Source chapter 6 / 50

The adopted native Product family explicitly includes warehouses and is a manufactured finished product at plant with Mass reference. This row is only a whole factory-complete concrete goods-storage building with roof, floor, all walls, installed door and vent, joint/finish state and actual supplied completion list. It is not a component, site foundation or installed building delivery. The broader construction classification is disclosed; warehouse product meaning and manufactured state positively match this bounded article. Other commercial building uses and non-storage utility shelters are outside this selection.

#### Source chapter 6 / 51

Only an actual external transfer/return of the complete still-functional article at its current configuration. Keep full physical mass/count and installed fluids/parts once, independently of actual service burdens; no assumed resale or avoided manufacture. Internal fleet transfers are matched and cancelled.

#### Source chapter 6 / 52

Only an actual external transfer/return of the complete still-functional article at its current configuration. Keep full physical mass/count and installed fluids/parts once, independently of actual service burdens; no assumed resale or avoided manufacture. Internal fleet transfers are matched and cancelled.

#### Source chapter 6 / 53

Only an actual external transfer/return of the complete still-functional article at its current configuration. Keep full physical mass/count and installed fluids/parts once, independently of actual service burdens; no assumed resale or avoided manufacture. Internal fleet transfers are matched and cancelled.

#### Source chapter 6 / 54

Only actual whole still-functional external transfer/return with its complete measured article state, not an assigned service fraction or automatic avoided-production credit. Own inherited history and matching internal fleet handovers remain separate.

#### Source chapter 6 / 55

Only actual whole still-functional external transfer/return with its complete measured article state, not an assigned service fraction or automatic avoided-production credit. Own inherited history and matching internal fleet handovers remain separate.

#### Source chapter 6 / 56

Only actual whole still-functional external transfer/return with its complete measured article state, not an assigned service fraction or automatic avoided-production credit. Own inherited history and matching internal fleet handovers remain separate.

#### Source chapter 6 / 57

Only actual whole still-functional external transfer/return with its complete measured article state, not an assigned service fraction or automatic avoided-production credit. Own inherited history and matching internal fleet handovers remain separate.

#### Source chapter 6 / 58

Only actual whole still-functional external transfer/return with its complete measured article state, not an assigned service fraction or automatic avoided-production credit. Own inherited history and matching internal fleet handovers remain separate.

#### Source chapter 6 / 59

Only this actual reusable article and the named real physical receipt/functional transfer/whole contaminated retirement event. Maintain physical fleet and actual cleaning/service history independently; no invented reuse count, life or new purchase at every cleaning. Whole wet discard contains the substrate and retained formulations/water once.

#### Source chapter 6 / 60

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

#### Source chapter 6 / 61

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

#### Source chapter 6 / 62

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

#### Source chapter 6 / 63

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

#### Source chapter 6 / 64

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

#### Source chapter 6 / 65

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

#### Source chapter 6 / 66

Record the full gross actual segregated Waste outlet with receiving treatment provider, current wet composition and origin. Only a real separately collected outlet gets this card; material already included in mixed_waste is a non-additive origin subledger and is not exported twice. Actual treatment, retained residues and recovery burdens remain.

#### Source chapter 6 / 67

Record one actual externally transferred mixed construction-material Waste stream with one treatment provider. Use the actual mixed physical construction-material identity and receiving gate. Do not substitute domestic refuse, a Product flow or a treatment-service label for the real Waste mixture. Full measured mixed mass is additive once; independently measured originW components are non-additive, or use actual segregated outlets instead. No default landfill or disposal credit.

#### Source chapter 6 / 68

Only a real whole contaminated retirement including substrate/installed residues/water once. A component inside a co-collected whole wet receiver Qt is a non-additive measured origin, not another physical export or treatment demand. Actual separated components have independent transfer IDs and disjoint units.

#### Source chapter 6 / 69

Only a real whole contaminated retirement including substrate/installed residues/water once. A component inside a co-collected whole wet receiver Qt is a non-additive measured origin, not another physical export or treatment demand. Actual separated components have independent transfer IDs and disjoint units.

#### Source chapter 6 / 70

Actual whole contaminated receiver transfer including article substrate/installed residues/water once. Preserve full gross physical Qt independently of nonoverlapping environmental/service A vectors. If a mixed outlet already contains it, keep the origin non-additive rather than a second exit.

#### Source chapter 6 / 71

Actual whole contaminated receiver transfer including article substrate/installed residues/water once. Preserve full gross physical Qt independently of nonoverlapping environmental/service A vectors. If a mixed outlet already contains it, keep the origin non-additive rather than a second exit.

#### Source chapter 6 / 72

Actual whole contaminated receiver transfer including article substrate/installed residues/water once. Preserve full gross physical Qt independently of nonoverlapping environmental/service A vectors. If a mixed outlet already contains it, keep the origin non-additive rather than a second exit.

#### Source chapter 6 / 73

Actual whole contaminated receiver transfer including article substrate/installed residues/water once. Preserve full gross physical Qt independently of nonoverlapping environmental/service A vectors. If a mixed outlet already contains it, keep the origin non-additive rather than a second exit.

#### Source chapter 6 / 74

Actual whole contaminated receiver transfer including article substrate/installed residues/water once. Preserve full gross physical Qt independently of nonoverlapping environmental/service A vectors. If a mixed outlet already contains it, keep the origin non-additive rather than a second exit.

#### Source chapter 6 / 75

Only this actual reusable article and the named real physical receipt/functional transfer/whole contaminated retirement event. Maintain physical fleet and actual cleaning/service history independently; no invented reuse count, life or new purchase at every cleaning. Whole wet discard contains the substrate and retained formulations/water once.

#### Source chapter 6 / 76

One actual separate full wet wipe outlet, with substrate, captured concrete/paint/preparation and water once. When truly co-collected inside mixed_waste, keep only a non-additive measured origin, never a second Qt or provider demand.

#### Source chapter 6 / 77

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 78

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 79

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 80

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 81

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 82

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 83

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 84

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 85

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 86

Conditional on this independently identified molecular or particulate species crossing the real air boundary. Record full gross ingress/egress and separate net transformation, actual phase/media, wet/dry concentration and integration basis; each fossil/mineral/biogenic carbon origin separately if present. Ambient carrier species are not purchased gases. PM, NOx, VOC and COD metrics are not this molecule, and one closure residual cannot identify multiple unknowns. Carbonation uptake is not presumed from curing.

#### Source chapter 6 / 87

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual P leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

#### Source chapter 6 / 88

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual I leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

#### Source chapter 6 / 89

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual ER leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

#### Source chapter 6 / 90

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual P leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

#### Source chapter 6 / 91

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual I leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

#### Source chapter 6 / 92

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual ER leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

#### Source chapter 6 / 93

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual P leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

#### Source chapter 6 / 94

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual I leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

#### Source chapter 6 / 95

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual ER leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

#### Source chapter 6 / 96

Only actual separate repair material, not a prescribed repair event or recipe. Preserve gross physical receipt, spare/retained wet stock and one burden owner. Actual entry into the packaging pool has disjoint measured non-water J_in and H2O_in, with paired internal source/destination history and no second purchase.

#### Source chapter 6 / 97

Only actual separate repair material, not a prescribed repair event or recipe. Preserve gross physical receipt, spare/retained wet stock and one burden owner. Actual entry into the packaging pool has disjoint measured non-water J_in and H2O_in, with paired internal source/destination history and no second purchase.

#### Source chapter 6 / 98

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual S leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

#### Source chapter 6 / 99

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual EO leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

#### Source chapter 6 / 100

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual S leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

#### Source chapter 6 / 101

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual EO leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

#### Source chapter 6 / 102

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual S leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

#### Source chapter 6 / 103

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual EO leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

#### Source chapter 6 / 104

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual W leg of one identified polyethylene protective film. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native film is polyethylene CAS 9002-88-4, not PET or a laminate; its luggage classification is inconsistent and disclosed.

#### Source chapter 6 / 105

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual W leg of one identified one wooden load pallet. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Native family is a finished portable wooden handling platform; record one actual pallet with composition, fixings and moisture, not raw timber or a whole cabin weight.

#### Source chapter 6 / 106

Apply complete calc_packaging with disjoint J_in/J_out and H2O_in/H2O_out, whole wet O/C and all six real directions. Natural humidity can occur without repair. X only removes duplicate OTHER same-side observations, never C or genuine increments. Only this actual W leg of one identified steel transport strapping. Keep full gross native quantity and independently measured wet physical mass; opening/closing empty, WIP-attached, FG-attached and reusable pools are complete. P is purchased once; I carries one upstream owner with no second procurement; ER/EO are actual returns and S follows gross shipment rather than net product Q. Internal reuse cancels; W is a real Waste outlet and not a coproduct. Actual steel strapping is a specific article; alloy and finish require supplier evidence.

#### Source chapter 6 / 107

Only an actually separated removed whole item exported as waste, substrate/residues/water once. Use disjoint J_out/H2O_out or full W, never both. If inside whole pallet/mixed wet W it is only a non-additive origin.

#### Source chapter 6 / 108

Only an actually separated removed whole item exported as waste, substrate/residues/water once. Use disjoint J_out/H2O_out or full W, never both. If inside whole pallet/mixed wet W it is only a non-additive origin.

#### Source chapter 6 / 109

Ledger-only physical movement of the same whole factory-manufactured storage building under its native warehouse Product family; keep roof/floor/walls/door/vent and actual completeness restrictions. Use full actual measured current wet mass V at the original cohort Qc and observed horizon H. Preserve original release identity, original delivery reverse and inherited history separately; no new production, procurement, old manufacturing recharge or automatic return credit. Damaged material that is truly Waste uses a Waste card.

#### Source chapter 6 / 110

Ledger-only physical movement of the same whole factory-manufactured storage building under its native warehouse Product family; keep roof/floor/walls/door/vent and actual completeness restrictions. Use full actual measured current wet mass V at the original cohort Qc and observed horizon H. Preserve original release identity, original delivery reverse and inherited history separately; no new production, procurement, old manufacturing recharge or automatic return credit. Damaged material that is truly Waste uses a Waste card.

#### Source chapter 6 / 111

Actual observed packing, storage, handling, dispatch, retest and incremental rework electricity under original Qc/H; retain executed work on closing FG. Future unknown service is not treated as executed. Verify actual supplier, voltage, geography and boundary independently; another source-specific operating identity cannot establish this actual supply.

#### Source chapter 6 / 112

Actual treated municipal/potable water for performed post-release services only. Keep native Mass with independently measured conversion if metered volume; original Qc/H, actual wastewater/wet stock and no second formulation water purchase.

#### Source chapter 6 / 113

Only actual incremental diesel service assigned to original Qc/H, never an assumed haul distance. Native mass fuel leaves grade, formulation, density, heating value, refinery, geography and provider unspecified; measure independently and add every actual combustion species/outlet under the same original cohort.

#### Source chapter 6 / 114

Ledger-only physical movement of the same whole factory-manufactured storage building under its native warehouse Product family; keep roof/floor/walls/door/vent and actual completeness restrictions. Use full actual measured current wet mass V at the original cohort Qc and observed horizon H. Preserve original release identity, original delivery reverse and inherited history separately; no new production, procurement, old manufacturing recharge or automatic return credit. Damaged material that is truly Waste uses a Waste card.

#### Source chapter 6 / 115

Only actual original-cohort material that becomes one separately handled Waste stream. Record full wet physical mass, actual mixed composition and treatment provider once; do not reuse a Product UUID or duplicate origin components of an already recorded mixed stream.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Configured cradle-to-first-factory-release inventory for one complete concrete storage-building article with separately disclosed actual original-cohort services |
| allowed_use | Use only after the actual product/route/provider/measurement/quality scope matches this complete article and the actual data are reviewed |
| excluded_use | Component or fresh-concrete inventory; installed-building delivery; habitation/energy/fire certification; whole CPC coverage; default factory recipe or service life; unobserved future services |
| required_metadata | All Required qualifiers; actual configured BOM and complete release; upstream and waste gates; original Qc/H; every native identity restriction |
| required_quality_disclosure | Actual tests and unresolved quantities/providers; source-specific synthesis; stock and species closure uncertainty; scientific and translation review state |
| update_trigger | Changed concrete/steel supply formulation; new prestress/insulation/MEP or site-completion route; altered complete gate; provider/property/source change; new measured foreground evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-2025` | `official_guidance` | UN Statistics Division. CPC Version 3.0, Structure and Explanatory Notes, 30 June 2025, class 3870 and subclass 38704; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Category context: predominant concrete; broader class includes incomplete essential-character buildings. The present route explicitly selects a complete factory article. |
| `cxt-storage-brochure` | `handbook` | CXT / L.B. Foster. Multipurpose and Utility Buildings, complete four-page publisher brochure, undated retained edition, pages 2–4; https://lbfoster.com/assets/brochures/cxt-utility-buildings-4page.pdf | Positive whole storage-building supply; adjacent open-floor utility/containment/post-tensioned and optional insulation/electrical/HVAC contexts kept distinct. Photos are not a measured BOM or geometry. |
| `cxt-schweitzer-2023` | `handbook` | CXT Incorporated. Schweitzer Multipurpose Building Specifications, revised February 2023, complete 8 pages, especially sections 5–9; https://www.lbfoster.com/assets/datasheets/cxt-precast-buildings/schweitzer_multipurpose_specs-v5.pdf | Technical synthesis of actual concrete preparation/reinforcement, placing/conditional SCC, cure, patching, welded joints, supplied door/vent and finishes/testing versus installation. Generic vault/toilet wording and electrical TBD do not establish one fitted storage SKU; no numeric recipe/performance transfer. |
| `easiset-2008-alternatives` | `handbook` | Easi-Set Industries / Shea Concrete. Easi-Set Precast Concrete Buildings, Pre-Assembled or Field Assembled, Section 13120, December 2008, complete 5 pages, sections 1.01, 2.01 and 3; https://sheaconcrete.com/wp-content/uploads/2024/04/standard-specs-1.pdf | Independent manufacturer counterexample: preassembly versus field assembly, post-tensioned roof/floor and membrane alternative, separate site preparation. Not evidence that CXT storage has these options or the same recipe/order. |
| `jrc-ilcd-2010` | `official_guidance` | European Commission JRC. ILCD Handbook, General guide for Life Cycle Assessment — Detailed guidance, First edition March 2010, sections 7.9.2–7.9.3, PDF pages 275–292 / printed 255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional situations requiring allocation: subdivision/virtual subdivision, exchange-specific determining physical causality and only genuine residual common-process same-state gate market value. Not industrial recipe evidence or universal ILCD approval. |
