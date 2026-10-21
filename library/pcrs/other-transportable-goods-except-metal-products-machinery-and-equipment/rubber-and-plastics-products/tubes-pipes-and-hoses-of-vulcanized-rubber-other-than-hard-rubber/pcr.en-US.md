---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.tubes-pipes-and-hoses-of-vulcanized-rubber-other-than-hard-rubber
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Unreinforced platinum-addition-cured solid silicone rubber tubing in coils

## 1. Scope and Applicability

This bounded method covers manufacturing single-layer, unreinforced solid VMQ silicone rubber tubing by platinum-catalyzed addition cure, supplied unprinted as bare loose coils without fittings, reels or retained mandrels. It starts from purchased filled HCR base and compatible catalyst paste, not silicone polymer synthesis or bought-finished-hose assembly. The supplier example R plus 4305/PT 1 establishes a real industrial route; actual grade/recipe, dimensions and finished supply specification remain product-specific. Independent manufacturer capabilities establish real solid VMQ/platinum tubing and coil supply, without claiming that manufacturer consumes that supplier grade. [wacker-silicone-processing; reiss-silicone-extrusion]

Exclude hard rubber, uncured tube, TPU/other thermoplastics, natural rubber, EPDM, NBR, FVMQ, peroxide/condensation-cured or cellular tubing, braided/wire-reinforced and multilayer hose, fittings/assemblies and medical/sterile product claims. These boundaries need an independent material method because whole silicone formulations, catalyst compatibility/inhibition, thermal cure and optional post-cure differ from tyres, inner tubes, reclaimed rubber or conveyor-belt construction. No common hose recipe, curing parameters, pressure class, density, service life or site emission factor is prescribed. Required dimensional, visual, cure and duty-specific test evidence comes from the actual approved supply specification and cp_quality. [wacker-silicone-processing; reiss-silicone-extrusion]

A separate primary industrial supply example is the AdvantaPure APST technical sheet: explicitly unreinforced platinum-cured silicone tubing supplied by coil length, distinct from spools and molded-fitting assemblies, with a single tube-wall ID/OD/thickness diagram. Only the bare loose-coil endpoint is adopted as independent structure evidence; APST, Reiss and WACKER are not asserted to be one SKU or recipe. APST cleanroom, test and packaging conditions belong to that source product; actual controlled-room HVAC/filtration/testing must be included where used. Double heat-sealed polybags do not establish PE composition; measure actual inner and outer bags and verify their polymer. No APST pressure, temperature, life or certification claim is transferred. [advantapure-apst-coils]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.tubes-pipes-and-hoses-of-vulcanized-rubber-other-than-hard-rubber |
| classification_refs | CPC 3.0:36230, narrower subset; no accepted mapping implied |
| covered_products | Single-layer solid VMQ unreinforced platinum-addition-cured unprinted tubing, bare loose coils |
| excluded_products | Hard rubber; green uncured tube; TPU/other thermoplastic hose; NR/EPDM/NBR/FVMQ tubing; peroxide/condensation cure; sponge; braids/wire/multilayers; fittings or finished-hose-only assembly; reels; sterile/medical claims |
| representative_product | Transparent solid HCR VMQ tubing made by the compatible R plus 4305 base/PT 1 catalyst route; actual grade and dimensions must be declared, not assumed |
| production_route | Purchased base and catalyst whole formulations; milling/straining; screw extrusion; atmospheric electric hot-air vulcanization; actual finishing/post-cure; inspection; coiling/packing; stock and dispatch |
| market_state | Net accepted dispatched bare tube coils, supplied length/geometry and quality declared, removable packaging excluded from tube mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the specified unreinforced silicone tube for a declared industrial fluid-transfer duty; equivalence requires duty-specific evidence |
| How much | 1 kg net accepted dispatched tubing, on the actual supplied moisture and post-cure basis |
| How well | Actual approved dimensions, tolerances, hardness/cure condition and application-specific acceptance tests; no universal pressure rating or food/medical approval |
| How long or cycle | One complete matched reporting period with linked stock/return histories; service life is not specified by mass or this manufacturing method |
| reference_flow_link | product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tubes, pipes and hoses of vulcanized rubber other than hard rubber `7ab7f1a9-1d4b-4bd1-83cb-a3096d984e3b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual VMQ base grade and catalyst formulation; solid single-layer wall without reinforcement; platinum addition cure and actual tunnel energy route; ID OD wall thickness tolerances and unprinted state; bare loose coils without fittings reel or mandrel; supplied length coil configuration and measured linear or whole-coil mass; net accepted factory dispatch gate and return corrections; actual acceptance tests and post-curing state; matched period Q WIP finished stocks and carried burdens; actual site supply geography and provider compatibility; packaging composition stock reuse and physical outgoing masses |

Declare every required qualifier in dataset metadata, process notes, reference comment or equivalent package fields; a missing qualifier leaves the reference incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_dispatch | all inventory rows | Mass | kg | Q is the unique positive net accepted dispatched tube mass, not quality-release production, length, coil count or gross packed mass. Record actual opening/closing WIP and finished goods and carry their burdens. Unshipped finished goods are not Q. Returns/reacceptance require linked reversal and final-delivery records; the same physical tube cannot count twice. |
| length_mass | all inventory rows | Mass | kg | Length conversion requires measured linear mass lambda in kg/m for the same grade, ID/OD, layer/cure/moisture state and supplied configuration. Weigh traceable net sample length on a calibrated scale, lambda = sample mass / measured length; sum actual length times matched lambda. Coil/count conversion uses measured net mass of that actual coil/configuration. Record calibration, sampling variation and uncertainty; nominal density or an invented mass cannot substitute. |
| wet_formulation | all inventory rows | Mass | kg | Whole supplied base/paste/cleaner mass is procurement; polymer, filler, platinum, solvent and carrier water are non-additive composition subledgers. On-site blending records actual separately acquired ingredients, energy and loss. Keep reaction-water evidence independent of moisture, evaporation, utility condensate and closure residuals. |
| raw_units | all inventory rows | Mass | kg | Retain actual physical numerator units. Convert metered volume using documented density at actual concentration/state, energy by explicit unit conversion and rate by matched duration. An already integrated gas/liquid volume is not multiplied by time again; secondary native property factors do not establish density. Execute only report_once after conversions and cohort attribution. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased solid HCR base and catalyst paste received at the manufacturing site; actual utilities, cleaning and packaging supplies |
| starting_condition_role | material_inputs |
| product_classification_scope | Only the section 1 silicone-tube subset of CPC 3.0:36230 |
| recursive_input_rule | Purchased finished tubing is separately disclosed as a foreground input, never a replacement for compounding/extrusion/cure. Internal recycles cancel on consolidation and retain burdens. Customer returns retain linked prior history. |
| upstream_dataset_requirement | Use actual compatible supplied formulation, catalyst, utility and packaging backgrounds; this cradle-to-dispatch foreground starts after their production without deleting upstream burdens. UUID identity is not a background inventory. |
| disclosure | Disclose site, period, actual supply origins, formulation grade, stage meters, electric tunnel, actual post-curing, packaging, stocks, returns, failed runs/rework, included storage/handling and outsourced operations |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | all inventory rows | Include receipt/storage, catalyst incorporation/milling/straining, screw extrusion, atmospheric electric thermal cure, cooling, actual post-cure/finishing, dimensional/cure/defect inspection and actual coiling/packing, finished storage and factory dispatch. Keep stage records although represented by one integrated process. Do not model connector assembly from purchased finished hose as this manufacturing route. | wacker-silicone-processing; reiss-silicone-extrusion; advantapure-apst-coils |
| boundary_actual | all inventory rows | The cards identify concrete collection exchanges, not a common recipe. Before quantitative data use add each actual pigment, reinforcement, release agent, cleaner, fuel, compressed-air supply, refrigerant, packaging core, waste, utility export and detected emission as its own atomic card with evidence; a changed base/structure/cure outside scope requires new applicability review. Demonstrably absent options may be not_applicable; UUID gaps cannot remove real burdens. | wacker-silicone-processing |
| boundary_stock | all inventory rows | Maintain separate raw-material, WIP, production-release, finished-warehouse and dispatch ledgers. Manufacturing release P and dispatched Q are independently measured; opening finished stock + release receipts + actual returned stock = dispatch transfers + closing stock + actual losses. For this net-delivery reference retain opening/closing WIP and finished-stock quantities, compositions and carried upstream burdens; allocate actual warehouse/rework/packing/handling to the matched delivered cohort and carry undelivered burdens forward. Cancel internal handoffs exactly once. | reiss-silicone-extrusion |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| hose_line | Integrated silicone tube manufacture and dispatch | required | Only section 1 route; retain independent raw stage records | foreground | product |

### Process: Integrated silicone tube manufacture and dispatch (`hose_line`)

#### Inputs

##### Product flows

###### Purchased HCR base compound (`hcr_base`)

The complete purchased solid VMQ base compound, exemplified by the ELASTOSIL R plus 4305 family, enters milling and straining. Record the actual grade, supplier formulation, crosslinker already present, supplied moisture and lot mass. Polymer, incorporated silica, additives and carrier water are constituent subledgers, not additional purchases. A broad polysiloxane identity alone does not confirm the whole filled commercial compound.

- Selected flow: HCR silicone rubber base compound for addition-cured tubing
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_material; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: wacker-silicone-processing

###### Purchased platinum catalyst paste (`pt_paste`)

The whole commercial catalyst paste, exemplified by ELASTOSIL AUX Batch PT 1, is a separate purchased formulation mixed with the compatible base. Measure paste mass and retain actual concentration/carrier information; do not purchase its platinum or carrier again. The supplier distinguishes extrusion PT 1 from molding PT 2. Published example dosages and temperatures are not this PCR recipe.

- Selected flow: Platinum catalyst paste for HCR silicone extrusion
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_material; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources: wacker-silicone-processing

###### Aqueous isopropanol cleaning formulation (`cleaner`)

Include only if the actual line uses this identified commercial cleaner. Record whole supplied solution, measured assay, carrier water, recovery and losses; this is a foreground collection option, not a supplier cleaning recommendation or a fixed concentration. Other actual cleaners require their own chemically specific cards before data use.

- Selected flow: Aqueous isopropanol cleaning formulation
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_material; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_material
- Sources:

###### Purchased water (`water`)

Meter external makeup and cleaning water with its actual quality and supply route; isolate cooling circulation from new intake. Water already in either formulation is not another purchased water input. Record any separate raw-water abstraction as its own elementary flow with source and compartment.

- Selected flow: Industrial supply water
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_water; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: wacker-silicone-processing

###### Line and dispatch electricity (`electricity`)

Include actual roll milling, straining, screw extrusion, electric hot-air tunnel, cooling, extraction, quality testing, optional electric post-curing, actual controlled-room HVAC/filtration, warehouse, packing and electric handling loads. Preserve warmup, standby, failures and rework. Split genuinely different supply/voltage exchanges; match actual geography and provider, not an inferred country.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Collect the matched un-divided raw quantity using cp_utility; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utility
- Sources: wacker-silicone-processing

###### Auxiliary steam if actually supplied (`steam`)

The selected curing route uses an electric atmospheric tunnel, not mandatory steam curing. Include external steam only for an actual included auxiliary operation; record supplied mass and pressure/temperature or enthalpy, direct injection and condensate separately. An absent steam system needs an evidenced not_applicable decision, not a copied zero or deleted actual burden.

- Selected flow: Industrial steam
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_utility; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_utility
- Sources: wacker-silicone-processing

###### Polyethylene coil bag (`film`)

Only where the bag polymer is actually confirmed as PE, weigh the supplied PE film bag as one actual packaging article, excluding separately supplied tape and label; collect inner/outer bags separately before aggregating the same identity, without assuming bag count or mass. Native identity is PE film, CAS 9002-88-4, production mix at plant; geography/locationOfSupply and grade are unspecified. Its leather/luggage classification is inconsistent metadata debt; the comment mentions PET as a competing material, not PE composition. This identity supplies no bag thickness, recycled content, supplier background or quantity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Corrugated shipping carton (`carton`)

Include the actual whole supplied carton with its actual board, incorporated adhesive and recycled content. Retain its own stock, reuse, returns and waste ledger; do not add constituent paper/glue procurement again. No carton is assumed for a bag-only supply configuration.

- Selected flow: Corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Paper identification label (`label`)

If used, weigh the complete supplied identification label, retaining incorporated adhesive and liner disposition separately from outgoing label mass. Other label materials require their own cards. This is not a fixed package bill of materials.

- Selected flow: Self-adhesive paper label
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Carton closing tape (`tape`)

If used, measure the actual complete supplied tape roll including adhesive and its core when present; its constituent polymer and adhesive are not duplicate inputs. Identify the core and its disposition independently when present.

- Selected flow: Polypropylene pressure-sensitive packing tape
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Actual customer-returned tubing (`returned_tube`)

Only actual physical customer returns cross this input boundary. Link the original dispatch, its reversal and carried burden, subsequent inspection/rework and final disposition; internal rework is not an external purchase. Reacceptance alone creates no additional output; never count the same returned/redelivered length twice in Q. Native reference: manufactured finished vulcanized rubber tubes/pipes/hoses excluding hard rubber, production mix at plant, Product flow, Mass/kg; no CAS, additional property, fixed base rubber, geography/locationOfSupply, layer structure, fitting state, specification or lifetime is supplied. The dataset must narrow that broad identity to single-layer solid VMQ, platinum addition cure, unreinforced, unprinted bare loose coils without fittings or reel, actual grade/geometry and the net dispatch gate. It is not a background process or evidence that every rubber hose is equivalent.

- Selected flow: Tubes, pipes and hoses of vulcanized rubber other than hard rubber `7ab7f1a9-1d4b-4bd1-83cb-a3096d984e3b`
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_dispatch; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: reiss-silicone-extrusion

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net accepted tubing dispatched in bare coils (`product`)

Unique terminal reference output, excluding all removable packaging. Q is actual net accepted dispatched tubing mass with linked return/cancellation corrections, not newly released production. Undelivered released stock stays outside Q and retains burdens. Native reference: manufactured finished vulcanized rubber tubes/pipes/hoses excluding hard rubber, production mix at plant, Product flow, Mass/kg; no CAS, additional property, fixed base rubber, geography/locationOfSupply, layer structure, fitting state, specification or lifetime is supplied. The dataset must narrow that broad identity to single-layer solid VMQ, platinum addition cure, unreinforced, unprinted bare loose coils without fittings or reel, actual grade/geometry and the net dispatch gate. It is not a background process or evidence that every rubber hose is equivalent.

- Selected flow: Tubes, pipes and hoses of vulcanized rubber other than hard rubber `7ab7f1a9-1d4b-4bd1-83cb-a3096d984e3b`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_dispatch
- Sources: reiss-silicone-extrusion; advantapure-apst-coils

###### Separately sold off-grade tubing (`offgrade_sale`)

Only if real saleable off-grade tubing leaves the plant: measure it separately, identify failed reference specifications and actual gate/value. It is not Q or a disposal waste; sharing the broad native UUID must not hide this distinct output. Native reference: manufactured finished vulcanized rubber tubes/pipes/hoses excluding hard rubber, production mix at plant, Product flow, Mass/kg; no CAS, additional property, fixed base rubber, geography/locationOfSupply, layer structure, fitting state, specification or lifetime is supplied. The dataset must narrow that broad identity to single-layer solid VMQ, platinum addition cure, unreinforced, unprinted bare loose coils without fittings or reel, actual grade/geometry and the net dispatch gate. It is not a background process or evidence that every rubber hose is equivalent.

- Selected flow: Tubes, pipes and hoses of vulcanized rubber other than hard rubber `7ab7f1a9-1d4b-4bd1-83cb-a3096d984e3b`
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_output; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_output
- Sources: ilcd-allocation-2010

###### PE bag accompanying delivered tubing (`out_film`)

Record the actual physical packaging leaving with the same delivered cohort, including returned/reused packaging movements where relevant. Its mass is excluded from net tube Q and included once in physical closure; this transfer is not another purchase or a default co-product credit. Native identity is PE film, CAS 9002-88-4, production mix at plant; geography/locationOfSupply and grade are unspecified. Its leather/luggage classification is inconsistent metadata debt; the comment mentions PET as a competing material, not PE composition. This identity supplies no bag thickness, recycled content, supplier background or quantity.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Carton accompanying delivered tubing (`out_carton`)

Record the actual physical packaging leaving with the same delivered cohort, including returned/reused packaging movements where relevant. Its mass is excluded from net tube Q and included once in physical closure; this transfer is not another purchase or a default co-product credit.

- Selected flow: Corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Label accompanying delivered tubing (`out_label`)

Record the actual physical packaging leaving with the same delivered cohort, including returned/reused packaging movements where relevant. Its mass is excluded from net tube Q and included once in physical closure; this transfer is not another purchase or a default co-product credit.

- Selected flow: Self-adhesive paper label
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Tape accompanying delivered tubing (`out_tape`)

Record the actual physical packaging leaving with the same delivered cohort, including returned/reused packaging movements where relevant. Its mass is excluded from net tube Q and included once in physical closure; this transfer is not another purchase or a default co-product credit.

- Selected flow: Polypropylene pressure-sensitive packing tape
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Steam condensate returned externally (`condensate`)

If supplied auxiliary steam actually condenses and returns to the utility provider, retain measured condensate mass and state as a Product output. Internal condensate circulation cancels internally; neither is water destruction or a credit for avoided new steam.

- Selected flow: Steam condensate
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_water; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: wacker-silicone-processing

###### Externally returned cooling water (`cooling_return`)

Where actual once-through supplied cooling water is returned as a utility product, meter outgoing mass/temperature separately. Internal recirculation is not an export; contaminated discharged water belongs to its actual waste/treatment route instead.

- Selected flow: Returned cooling water
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_water; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_water
- Sources: wacker-silicone-processing

##### Waste flows

###### Uncured compound loss (`uncured_waste`)

Weigh disposed mill/strainer/startup losses with whole composition; internal recoverable uncured trim retains its burden and is not another external purchase.

- Selected flow: Uncured silicone compound waste
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_output; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_output
- Sources: wacker-silicone-processing

###### Rejected cured tubing and test specimens (`cured_waste`)

Include unsold rejected tubing, cut ends and destructive test pieces sent to actual waste treatment; separate off-grade Product sales. Cure is not reversed by ordinary remilling; never count the same reject as sale and waste.

- Selected flow: Cured silicone rubber tubing waste
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_output; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_output
- Sources: wacker-silicone-processing

###### Aqueous process effluent (`wastewater`)

Measure actual aqueous cleaning/blowdown effluent and its composition, water and solids; retain on-site treatment energy/reagents and resulting atomic sludge/emissions if present. COD is a quality observation, not a mass/species conversion or reaction-water estimator.

- Selected flow: Aqueous silicone-line cleaning effluent
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_output; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_output
- Sources:

###### Spent isopropanol formulation (`spent_cleaner`)

If used, weigh the actual spent formulation separately from plain aqueous effluent; retain solvent/water assay, recovered mass and disposal route. Do not also report its full mass as an air emission.

- Selected flow: Spent aqueous isopropanol cleaning liquid
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_output; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_output
- Sources:

###### Discarded PE film bag (`waste_film`)

Record packaging damaged or discarded on site separately from film shipped with tubes and film retained for reuse.

- Selected flow: Waste polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Discarded carton (`waste_carton`)

Record actual disposed cartons independently of cartons accompanying deliveries and reusable stock.

- Selected flow: Waste corrugated cardboard carton
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Paper label backing waste (`waste_label`)

Record actual paper release liner separately from the outgoing complete label. Any other liner material requires a separate specific row.

- Selected flow: Waste paper release liner
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

###### Discarded paperboard tape core (`waste_tape_core`)

Where present, weigh actual cores separately; unused tape on discarded cores and other core materials require distinct specific rows.

- Selected flow: Waste paperboard tape core
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_pack; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_pack
- Sources:

##### Elementary flows

###### Actual water vapour release (`water_air`)

Use independently measured evaporated feed/carrier/cleaning water and moisture change in the same period. Platinum hydrosilylation adds Si-H across vinyl bonds; do not impose condensation-cure water formation or infer unknown reaction water from mass closure.

- Selected flow: Water vapour
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_emission; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emission
- Sources: wacker-silicone-processing

###### Measured D4 to air (`d4_air`)

Conditional on actual species-specific detection/attribution: integrate D4 concentration with matched exhaust volume and control performance. The guide permits low-molecular material removal but does not prove this species occurs or give an emission factor. Screen actual volatiles and add every other identified species separately.

- Selected flow: Octamethylcyclotetrasiloxane
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_emission; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emission
- Sources: wacker-silicone-processing

###### Measured D5 to air (`d5_air`)

Conditional on actual species-specific detection/attribution; distinguish D5 from D4, aerosol, captured material and residual product volatiles. No total VOC or closure residual may be assigned to D5 without independent composition evidence.

- Selected flow: Decamethylcyclopentasiloxane
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_emission; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emission
- Sources: wacker-silicone-processing

###### Actual isopropanol evaporation (`ipa_air`)

Only for the actual isopropanol cleaner option: measure species-specific evaporative loss and reconcile remaining solvent in spent cleaner/recovery. Actual absence is evidenced, not assumed.

- Selected flow: Isopropanol
- Flow property / unit: Mass / kg
- Amount rule: Collect the matched un-divided raw quantity using cp_emission; report the numerator once per reference flow under the sole section 8 reporting rule.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: cp_emission
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | all inventory rows | This is attributional foreground accounting. Establish the study decision context and justify why subdivision, virtual subdivision and where applicable substitution/system expansion cannot avoid allocation under ILCD 2010 7.9.2/7.9.3. These are not freely interchangeable options and do not assert full ILCD/PEF conformance. | ilcd-allocation-2010 |
| allocation_causality | all inventory rows | Directly assign lot materials and dedicated meters; use virtual subdivision and determining physical causality separately for each exchange before residual allocation. Justify each shared service driver from its actual function: e.g. measured line occupation/time and load for tunnel duty or occupied space times storage duration when causally determining. Equal mass shares are not a universal rule and mere correlation is insufficient. Preserve startup, failure, zero-output, rejects and rework burdens within the cohort that caused them. | ilcd-allocation-2010 |
| allocation_residual | all inventory rows | Only remaining burdens without an identifiable determining physical relation use justified relative market values of real co-functions in their actual condition/quantity at the same joint-process exit gate. Document actual amounts, time-representative prices, grade and conditioning/transport/packaging adjustments; delivered retail prices must not stand for raw off-grade exit value. Retain uncertainty/sensitivity and the 100 percent inventory reconciliation. Do not assign one economic share to already directly assigned exchanges. | ilcd-allocation-2010 |
| allocation_loss | all inventory rows | Saleable off-grade tubing, actual waste for treatment, utility returns and customer returns have different physical and accounting roles. Determine actual destination/value and preserve outgoing quantities independently; no fixed recovery share, avoided-product credit or arbitrary negative inventory is authorized. Internal uncured reuse retains carried burdens and actual reuse energy/loss, without a second purchase or product output. | ilcd-allocation-2010 |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collection protocols retain un-divided raw period numerators and complete WIP/finished-stock carried burdens. The aggregation_rule and amount cards refer to the same report_once reporting operation, not collection-side A/Q or successive division.

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_dispatch | hose_line | product | dispatch_and_stock | tube/coil ID; grade; actual acceptance and dispatch timestamps; release P; net dispatched mass; returns/reversals; cancellations; final accepted length; measured lambda or coil net mass; tare; opening/closing WIP and FG; carried burden by lot | Owner: quality manager and dispatch/production accountant. Weigh actual accepted dispatched bare coils on calibrated scales or use traceable actual matched length and measured linear mass; record whole-coil net mass for count records. Collect complete un-divided period ledgers, independently reconcile P and warehouse movements, deduplicate final deliveries and link prior returns/burdens. Include failed/zero-output/rework lots; do not divide by Q during collection. | kg; m | each lot and full continuous intervals | same complete period and product/route/state delivered cohort, including linked prior carryover | actual declared site and included stages | per 1 kg reference flow | calibration, lot traceability, raw ledgers, independent analyses and complete carryover reconciliation |
| cp_material | hose_line | material | receipt_dosing_and_stock | row_id; stage; lot; whole supplied mass; composition/assay; carrier/free water; receipts; opening/closing stock; charged mass; returned/reused compound; spills; failed runs; WIP and FG carried input burdens | Owner: materials accountant and mixing operator. Collect raw scale/receipt/issue/stock records for each whole commercial formulation and separately purchased ingredient; reconcile its non-additive constituent/water subledger, actual mixing/straining losses and return/rework histories. Retain original units, WIP/FG carryover and un-divided raw period numerators, including unsuccessful batches. | kg; m3 | each lot and full continuous intervals | same complete period and product/route/state delivered cohort, including linked prior carryover | actual declared site and included stages | per 1 kg reference flow | calibration, lot traceability, raw ledgers, independent analyses and complete carryover reconciliation |
| cp_utility | hose_line | utility | meters_and_stage_operation | row_id; supply/voltage; stage; meter start/end; rate; duration; already integrated volume; state/density; kWh; steam mass/enthalpy; cooling; post-cure; startup/standby; rework; warehouse/handling; carried utility burdens | Owner: utilities engineer. Preserve complete raw stage meters and time/load records from receiving through electric cure, actual post-cure, controls, storage/packing/dispatch and all failed/rework/standby operations. Identify actual separately supplied utilities and returns. Do not normalize; do not multiply already integrated volumes by time. Preserve opening/closing WIP/FG carried utility burdens and actual allocation evidence. | kWh; MJ; kg; m3 | each lot and full continuous intervals | same complete period and product/route/state delivered cohort, including linked prior carryover | actual declared site and included stages | per 1 kg reference flow | calibration, lot traceability, raw ledgers, independent analyses and complete carryover reconciliation |
| cp_water | hose_line | water | water_and_return_balance | row_id; supply quality; liquid mass/volume; actual density/state; formulation water; cooling recirculation; utility returns; steam injection; condensate; water vapour; WIP/FG moisture; reaction evidence | Owner: water/utility engineer and laboratory analyst. Independently meter external water, steam and real return outlets, and assay formulation/stock water. Preserve raw physical phase and moisture ledgers; ideal hydrosilylation is addition, not condensation-water formation. Actual side-reaction species/water require independent reaction and measurement support, never residual fitting. No A/Q at collection. | kg; m3 | each lot and full continuous intervals | same complete period and product/route/state delivered cohort, including linked prior carryover | actual declared site and included stages | per 1 kg reference flow | calibration, lot traceability, raw ledgers, independent analyses and complete carryover reconciliation |
| cp_pack | hose_line | packaging | article_stock_and_outgoing_mass | row_id; article/composition; whole purchased mass; constituent subledger; opening/closing unused and reused stock; receipts; returns; discarded pieces; liner/core; actual outgoing packaging by dispatched cohort; carried burdens | Owner: packaging custodian and dispatch accountant. Weigh each actual complete supplied article and the actual mass leaving with tubing, separating liners/cores/waste, return to supplier, external reuse transfers and internal repeated use. Keep complete un-divided stock/movement and burden ledgers including packaging already on opening/closing FG. Reused material is not another procurement; packaging is not net tube Q. | kg; piece | each lot and full continuous intervals | same complete period and product/route/state delivered cohort, including linked prior carryover | actual declared site and included stages | per 1 kg reference flow | calibration, lot traceability, raw ledgers, independent analyses and complete carryover reconciliation |
| cp_output | hose_line | waste | outputs_weighing_and_destination | row_id; stage; stream; wet mass; moisture; species; cured/uncured state; sale/waste status; actual destination/value; internal recycle; test loss; failures/rework; stock/burden carryover | Owner: environment manager and production accountant. Independently weigh each actual saleable off-grade output and waste stream, keep manifests/analysis and collection/treatment interfaces. Reconcile failed batches, trim, destructive tests, cure state and real return/rework movements without double counting. Preserve complete un-divided raw period quantities and WIP/FG carried burdens; do not solve an unknown outlet from another unknown reaction-water residual. | kg; m3 | each lot and full continuous intervals | same complete period and product/route/state delivered cohort, including linked prior carryover | actual declared site and included stages | per 1 kg reference flow | calibration, lot traceability, raw ledgers, independent analyses and complete carryover reconciliation |
| cp_emission | hose_line | emission | species_and_exhaust_measurement | row_id; species; air/water compartment; sampling method; concentration; exhaust rate; duration; integrated volume; actual/standard state; water; captured/recovered mass; residual product volatiles; abnormal operations; carried burdens | Owner: environmental measurement lead. Collect independently speciated representative raw tests and matching complete exhaust/water records for routine, startup, failure, cleaning and actual post-cure. Screen actual species before assigning any D4/D5/IPA value, reconcile captured/recycled outputs and residuals, and add any newly identified species as a separate card. Keep un-divided raw numerators and carryover; concentration times integrated volume receives no extra duration. | kg; mg/m3; m3 | each lot and full continuous intervals | same complete period and product/route/state delivered cohort, including linked prior carryover | actual declared site and included stages | per 1 kg reference flow | calibration, lot traceability, raw ledgers, independent analyses and complete carryover reconciliation |
| cp_quality | hose_line | quality | grade_and_release_tests | lot; base/catalyst identity; layers; ID/OD/wall; actual cure/post-cure; acceptance specification; inspection/pressure/leak/tensile test if specified; release P; test specimen mass; failures; linkage to dispatched cohort | Owner: quality manager. Retain actual approved product specification, lot traceability, dimensional/cure/visual results and only duty-specific validated performance tests. Weigh test losses and link them to the real manufactured cohort. No supplier marketing range, nominal density, food-contact statement, universal hose pressure or service lifetime is an observed site result. Raw records only. | kg; m; actual test units | each lot and full continuous intervals | same complete period and product/route/state delivered cohort, including linked prior carryover | actual declared site and included stages | per 1 kg reference flow | calibration, lot traceability, raw ledgers, independent analyses and complete carryover reconciliation |
| cp_allocation | hose_line | shared_burden | exchange_specific_attribution | row_id; shared process; actual co-functions; direct meters; time/load/space; allocation rationale; exit condition/quantities; representative price; conditioning/transport adjustments; uncertainty; sum before/after | Owner: LCA practitioner and site process accountant. Collect un-divided actual shared totals, identify exchange-specific determining causal relationships and virtual subdivision first, then collect same-gate market values only for justified residual burdens. Preserve full decision and sensitivity evidence. No fixed share or double assignment of already attributed exchanges. | actual exchange units; h; currency | each lot and full continuous intervals | same complete period and product/route/state delivered cohort, including linked prior carryover | actual declared site and included stages | per 1 kg reference flow | calibration, lot traceability, raw ledgers, independent analyses and complete carryover reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| report_once | all inventory rows | a_i = A_i / Q; reconcile raw-material and unused/reusable packaging stock withdrawals and actual supplier returns before forming A_i, so unused receipts do not become consumption. A_i is the complete raw-period exchange numerator after raw-unit conversions and exchange-specific attribution to the net-delivered cohort, including actual failed/zero-output runs, losses, rework, storage, packing and dispatch. Add attributable opening WIP/FG carried burdens and subtract closing WIP/FG carried burdens, with explicit linked return/cancellation transfers and burden corrections; retain unresolved carryovers rather than forcing release P = dispatch Q. Q is the unique positive net accepted dispatched tube mass from cp_dispatch. This is the sole normalization: cards and aggregation_rule describe this same reporting operation and do not perform sequential division. Reference output is 1 kg. | A_i; Q; cp_dispatch; cp_material; cp_utility; cp_water; cp_pack; cp_output; cp_emission; cp_quality; cp_allocation | a_i |  |
| physical_closure | all inventory rows | For the independent complete physical plant ledger, opening raw materials + opening WIP + opening FG + all real external mass inputs and actual customer/utility/packaging returns = closing raw materials + closing WIP + closing FG + real external tube/off-grade Product exits + every outgoing packaging article + utility returns + wastes + measured species emissions. Include actually exchanged air/oxygen or other species where material; electricity/heat is not a mass input. Cancel internal stage/recycle/warehouse transfers once. This plant ledger is not the delivered-cohort burden numerator A_i; do not normalize it or omit undelivered stocks to force closure. Track C/Si/H/O and any actual additives by composition, and independently support each real species/reaction-water term and physical moisture/phase change. Do not fit two unknowns to one residual. | cp_dispatch; cp_material; cp_water; cp_pack; cp_output; cp_emission | physical_ledger | wacker-silicone-processing |
| package_closure | all inventory rows | For each specific packaging article, opening unused/reused/FG-attached stock + actual receipts/returns = closing unused/reused/FG-attached stock + actual mass accompanying deliveries + actual external supplier/reuse returns + wastes/losses. Track liners and cores separately and internal repeated use without new procurement. Outgoing packaging is a physical Product output even when it is part of the tube delivery function; it never enters net tube Q or creates a second purchase. | cp_pack; cp_dispatch | packaging_ledger |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Confirm actual whole formulations, solid VMQ/addition route, no reinforcement/fittings and native restrictions in every applicable card; match supplier backgrounds independently. | supplier certificates and direct identities |
| quality_period | all inventory rows | Complete raw period and delivered cohort must include failure, rework, return and WIP/FG carryover quantities/burdens with unique Q. Missing carryover cannot be silently set to zero. | calibrated weighing, warehouse and burden ledgers |
| quality_method | all inventory rows | No default recipe, cycle, fixed loss, density, pressure/performance, life, volatile factor or economic share is established. Retain raw measures and uncertainty; actual additional exchanges need atomic expansion before quantitative use. | actual process records, tests and source conditions |
| quality_sources | all inventory rows | Keep technical mechanism/capability evidence separate from independent LCA allocation evidence and factory measurements. Industrial sources support a bounded technical synthesis, not a claim that one manufacturer uses the other supplier grade. | source conditions and actual foreground evidence |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | all inventory rows | Reject hard/uncured/thermoplastic or other-base tubing, reinforced/multilayer/assembled fitting products and mere finished-hose assembly as this reference. Confirm the actual grade, layer and net delivered coil configuration; broader native UUID does not expand applicability. | wacker-silicone-processing; reiss-silicone-extrusion; advantapure-apst-coils |
| validate_reference | all inventory rows | Reference link product selects the unique actual terminal Product output, agreeing with its UUID in both languages. Returns and saleable off-grade tubing retain their real shared UUID and distinct physical roles; neither is hidden or added to Q. Verify net measured mass/length conversion, positive Q, separate release P, matched stock/burden carryover and one report_once. | reiss-silicone-extrusion |
| validate_completeness | all inventory rows | Reconcile complete physical, formulation/water and packaging ledgers independently of attributed LCA numerators; include every real Product/utility return/packaging exit, waste and measured species. Preserve real failed/zero-output/rework/storage/handling burdens and distinguish internal transfers. No COD, secondary property factor or closure residual establishes unknown density, species or reaction water. | wacker-silicone-processing |
| validate_allocation | all inventory rows | Audit exchange-specific determining causality and virtual subdivision first; only justified residual burdens may receive same-exit-state market-value allocation. Reconcile all allocated inventories to the original and preserve price/condition and sensitivity evidence. | ilcd-allocation-2010 |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Use as an upstream manufacturing-and-dispatch dataset for the exact declared bare silicone coil supply configuration after foreground completion and review |
| allowed_use | Mass-based supply with declared grade, dimensions, state, actual gate, applicable native identity and complete inventory; functional comparison only with independent performance/service evidence |
| excluded_use | All-hose averages, fittings/assemblies, TPU, other elastomers, reinforcement, sterile/medical certification, lifetime predictions or default recipes/factors |
| required_metadata | Every reference qualifier; protocol owners; un-divided raw inputs; distinct P and Q; WIP/FG and carried burdens; whole formulations and water; actual packaging/exits; site/provider and native limits |
| required_quality_disclosure | Measurement, period completeness, uncertainty, actual not_applicable reasons, auxiliary UUID/provider gaps, native film classification debt and any unresolved stock/species relationship; methodology scientific review remains pending |
| update_trigger | Changed base/catalyst, cure/heat route, layers, supplier, geometry, fitting/coil state, packaging, boundary gate, performance evidence, emission species or stock accounting |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| wacker-silicone-processing | handbook | Wacker Chemie AG, Solid and Liquid Silicone Rubber — Material and Processing Guidelines, sections 1.3/1.4, 4.3, 5.2, 6.1, pp. 10,13,37,41,45-46,66. https://www.wacker.com/h/medias/6709-EN.pdf | Industrial addition-cure chemistry, whole compound/catalyst route, extrusion/atmospheric thermal cure and conditional post-cure. Technical examples, not a universal formulation, process setting, performance/life, activity value or LCA allocation rule. |
| reiss-silicone-extrusion | literature | Reiss Manufacturing, Silicone Rubber Extrusions, capability and FAQ page. https://reissmfg.com/extrusion/ | Independent industrial VMQ solid/platinum extrusion, actual tubing and cut/coil/spool/package capabilities. Use only the unreinforced bare-coil solid subset; source does not identify a Wacker recipe, fixed layer/SKU, acceptance limit or lifetime. |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook — General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, complete 7.9.2/7.9.3, printed pp. 255-272 (PDF 275-292). https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional decision context, subdivision/virtual subdivision, exchange-specific determining physical causality, only residual same-process-exit-condition market values, consistency and 100 percent rule. No fixed economic shares, avoided credits or full PEF claim. |
| advantapure-apst-coils | handbook | NewAge Industries AdvantaPure, AdvantaSil APST Unreinforced Tubing technical sheet, 2/3/21, pp. 1-3. https://www.advantapure.com/wp-content/uploads/2022/03/AdvantaSil_APST_Silicone_Tubing-1.pdf | Real unreinforced platinum-cured single-wall coil supply, geometry and packaging endpoint, distinguished from spools and fitting assemblies. Structure/supply evidence only, not a WACKER recipe, Reiss production, universal pressure/temperature/life or certification; verify bag polymer separately and retain actual controlled-room loads. |
