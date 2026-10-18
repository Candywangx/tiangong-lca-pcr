---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.disinfectants
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Peroxide–propylene glycol surface disinfectant: supplied liquid from purchased-reagent blending

## 1. Scope and Applicability

This PCR covers one physically blended aqueous surface-disinfectant route: purchased aqueous hydrogen peroxide, propylene glycol, orthophosphoric acid, sodium laureth sulfate, maleic acid, benzotriazole and separately added water. Sequential dilution and mixing produce an accepted supplied liquid at the blending-site gate, before downstream application. It is a narrower method within CPC 34664, not a method for every disinfectant. The patent establishes an example route, not commercial operating data. Actual formulation revision, assayed supplied state and product qualification define each dataset.

Exclude agricultural crop/seed fungicides, herbicides, insecticides, residual pesticide preparations, hand antiseptics, wipes, gels, peracetic-acid synthesis, chlorine formulations and upstream peroxide manufacture. The selected route uses purchased treated water and electrically driven mixing/transfer; no reaction synthesis, heating, combustion or packaged delivery is presumed. Additional actual ingredients, water treatment, heating/cooling, packaging, fuel or treatment operations require individually evidenced atomic additions before an extended dataset is used. No default concentration, kill rate, application rate, exposure, service life, emission factor or density is supplied.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.disinfectants |
| classification_refs | CPC 3.0 34664 Disinfectants; narrower |
| covered_products | Aqueous peroxide–propylene glycol surface-disinfectant liquid of the selected ingredient set |
| excluded_products | Agricultural fungicides; handrub; chlorine products; peracetic acid; bulk upstream peroxide; packaged articles |
| representative_product | Net supplied liquid with actual qualified composition and released batch identity |
| production_route | Purchased-reagent sequential dilution and physical mixing, quality release, holding and bulk transfer |
| market_state | Unpackaged bulk liquid, as supplied at blending-site gate; actual concentration and temperature declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a qualified surface-disinfectant formulation |
| How much | 1 kg net supplied liquid |
| How well | Actual product specification and label-supported claims; kg output alone is not a disinfection-service equivalence |
| How long or cycle | One supplied batch at release; no default use duration or shelf life |
| reference_flow_link | finished_liquid |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Disinfectant `93328a0a-7cd1-4f63-831b-e9ac5398506e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual ingredient identities and supplied forms; formulation revision; assayed active and water basis; supplier grade and route; site and reporting period; accepted supplied state; bulk transfer point; qualification and label limits; WIP and rework genealogy; upstream provider basis |

The generic native identity is Product flow / Mass, production mix at plant, with no specified geography, CAS, concentration, recipe or manufacturing route. Its inert-surface meaning is compatible with this conditional supplied formulation; its broad statement about killing 99.999% is not accepted as product performance. The UUID supplies identity only, not a background provider or whole-liquid formulation specification. Required qualifiers must be present in the dataset; missing qualifiers make its reference definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass of the whole accepted supplied liquid, including its water and solvents, excluding storage vessel and packaging. Active-ingredient mass is a separate subledger. |
| single_basis | all inventory denominators | Mass | kg | Normalize converted raw totals once to the same positive accepted supplied kg; keep actual numerator units. Never treat a concentration fraction as liquid mass or an integrated volume as a flow rate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Separately purchased reagents and treated water received at blending site; incoming composition and carried inventory burdens recorded |
| starting_condition_role | Purchased ingredients, not on-site synthesis or generic same-category shortcuts |
| product_classification_scope | CPC 3.0 34664; narrower surface-disinfectant formulation |
| recursive_input_rule | A purchased preformulated disinfectant is one complete solution input with its own upstream burden. It is not decomposed into duplicate procurement; replacing the selected ingredient route requires explicit boundary reassessment. |
| upstream_dataset_requirement | Match actual supplied reagent/solution, concentration basis, grade, route, geography and delivery; pure-active providers require explicit carrier and burden reconciliation |
| disclosure | State cut-offs, transport interface, bulk delivery, laboratory/services, cleaning, losses, shared-service allocation and all WIP burden transfers |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | blend | Include receiving, storage, sequential dilution/mixing, analytical release, holding, cleaning and transfer with all associated real burdens; physical mixing is not chemical synthesis. | `cn113491268-blending` |
| boundary_scope | reference product | Exclude agricultural crop/seed protection and upstream bulk chemicals from this foreground scope; retain their applicable upstream burdens rather than silently omitting them. | `un-cpc3-2025`; `wco-disinfectants-2022` |
| boundary_use | reference product | Downstream application, exposure and environmental fate are outside this production inventory. Any such model needs separate actual-use evidence and separately qualified emissions. | `nhc-low-temperature-2020` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| blend | Purchased-reagent blending and bulk supply | required | Selected ingredient route only; actual site operations evidenced | foreground | finished_liquid |

### Process: Purchased-reagent blending and bulk supply (`blend`)

#### Inputs

##### Product flows

###### Purchased aqueous peroxide reagent (`peroxide_solution`)

Record the complete supplied solution crossing the boundary, with actual assay and stabilizer/impurity composition. Neither a pure-H2O2 identity nor a fixed-strength catalogue record establishes the whole-solution procurement basis; retain an unbound specific solution row until its basis is verified. Active peroxide and carrier water are subledgers, never additional purchased flows.

- Selected flow: Aqueous hydrogen peroxide reagent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `cn113491268-blending`

###### Propylene glycol charge (`propylene_glycol`)

Record separately acquired propylene glycol, actual isomer/grade, assay and any water. A generic antifreeze, propylene carbonate or propylene oxide is not this exchange.

- Selected flow: Propylene glycol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `cn113491268-blending`

###### Phosphoric acid reagent (`phosphoric_solution`)

Record actual supplied acid solution mass and assay, not a dry P2O5 or nutrient equivalent. No assumed 85% concentration, wet/furnace process, or default impurity allowance. Include reagent water only in its subledger.

- Selected flow: Aqueous orthophosphoric acid reagent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `cn113491268-blending`

###### Sodium laureth sulfate ingredient (`sles`)

Use the actual supplied SLES grade with alkyl distribution, ethoxylation and assay. Record its entire purchased solution or paste once and carry water/salts as subledgers. Sodium dodecyl sulfate without ethoxy groups is a different substance.

- Selected flow: Sodium laureth sulfate formulation ingredient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `cn113491268-blending`

###### Maleic acid ingredient (`maleic_acid`)

Measure supplied maleic acid and its actual physical form, assay and moisture; do not substitute maleic anhydride and silently consume water.

- Selected flow: Maleic acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `cn113491268-blending`

###### Benzotriazole inhibitor (`benzotriazole`)

Record the actual separately purchased benzotriazole reagent, grade, assay and supplied form. The actual delivery point, carrier, formulation and supplier quantity basis require independent evidence before a native binding is used.

- Selected flow: Benzotriazole reagent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `cn113491268-blending`

###### Separately added water (`water`)

Use this binding only for supplied water made by ion exchange or reverse osmosis. Native name specifies production mix at plant and pure substance; comment also mentions distillation and consumption supply, but does not waive the narrower name or establish a water-quality standard. CAS 7732-18-5; geography unspecified. Supplier grade, actual treatment and transfer point must be evidenced. The patent does not establish water grade. Do not count water already inside purchased reagents here.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_material`
- Sources: `cn113491268-blending`

###### Purchased electricity (`electricity`)

Meter mixing, pumping, ventilation, cleaning, laboratory and attributable holding services. Retain actual voltage, source and geography. Shared equipment uses an independently justified service allocation, not nameplate power as a meter reading. No grid geography or voltage is assigned here.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_utilities`
- Sources:

#### Outputs

##### Product flows

###### Accepted bulk supplied liquid (`finished_liquid`)

This is the unique terminal reference Product output; count accepted net liquid once. Generic native inert-surface identity, production mix at plant, no specified CAS, formula, concentration or geography. Do not import its unsupported universal efficacy statement or infer an upstream provider.

- Selected flow: Disinfectant `93328a0a-7cd1-4f63-831b-e9ac5398506e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_release`
- Sources: `cn113491268-blending`

##### Waste flows

###### Spent aqueous cleaning liquid (`spent_wash`)

Record actual cleaning liquid sent across the boundary to identified treatment, with peroxide, organic constituents, water and recipient. This is a technosphere waste, not an elementary water discharge. No untreated release is implied.

- Selected flow: Peroxide-containing aqueous cleaning waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`
- Sources:

###### Discarded off-specification blend (`offspec_waste`)

Only permanently discarded material leaves as waste. Internal return and rework remain internal and retain original burdens until acceptance or disposal; never count them as fresh procurement or positive product.

- Selected flow: Off-specification peroxide propylene glycol blend waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`
- Sources:

##### Elementary flows

###### Oxygen released to air (`oxygen_air`)

Record only independently established oxygen release from this operation. Peroxide disappearance alone cannot distinguish decomposition from oxidation of organic ingredients. Air entrainment is not newly formed oxygen.

- Selected flow: Oxygen, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`
- Sources:

###### Water vapour to air (`water_air`)

Record actual evaporated water separately from liquid waste and peroxide mist. Carrier water, measured final water and independently supported reaction water remain distinct ledgers.

- Selected flow: Water vapour, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`
- Sources:

###### Hydrogen peroxide to air (`peroxide_air`)

Measure actual gas or aerosol peroxide crossing to air, retaining speciation, phase, capture efficiency and monitoring limits. No universal evaporation or exposure factor.

- Selected flow: Hydrogen peroxide, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`
- Sources:

###### Propylene glycol to air (`glycol_air`)

Record actual propylene glycol release, including separately measured aerosol. Non-detects retain limits and coverage and do not establish universal zero. Other detected species require separate atomic rows and independent identities.

- Selected flow: Propylene glycol, air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Actual attributable converted raw-period amount divided once by positive newly accepted supplied net kg, as specified in section 8.
- Value mode: foreground_record
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: process_output
- Evidence kind: collected_record
- Collection protocol: `cp_losses`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | blend | Attribute directly to the actual formulation campaign first. Allocate shared utilities, cleaning, laboratory and storage by measured causal service drivers with reconciliation; no mass-only split across different recipes without justification. No saleable co-product is presumed; actual recoveries and co-products require independent output identity and allocation evidence. |  |
| allocation_returns | all inventory rows | Retain failed/zero-output burdens, returns and rework; transfer WIP material and its embodied burdens together across period boundaries. An internal rework stream carries its original burden and is not a new purchase or a second accepted product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | blend | Ingredient charges and water | batch_material_records | owner: production material custodian; period; batch; SKU; supplier; route; location; lot; grade; chemical/isomer identity; supplied form; gross and tare; net mass; assay basis; uncertainty; component water and salts; independent density and temperature if volume measured; opening and closing stocks; return and rework IDs | Reconcile calibrated scales, goods receipt, actual charge tickets and supplier certificates; qualify a matrix-selective assay with laboratory owner; independently verify each solution procurement basis. Keep receipts, uncharged feed stores, actual production charges and unchanged returns as reconciled separate views of procurement, not additive purchases. Whole supplied liquids and constituent subledgers remain distinct. Retain the compatible attributable raw numerator without division, with complete-period and stock/WIP burden links. After verified raw-unit conversion and attribution, period_normalization alone divides by positive Q. Card amount formulas and aggregation_rule describe that same final reporting operation, not another division. Q=0 retains the complete raw and burden pool without a normalized result. | kg; mass fraction; L and kg/L only with measured conditions | Each delivery and charge | Full actual reporting period and linked opening/closing lots | Same site line product route and supplied state | per 1 kg reference flow | Scale calibration; original charge tickets; certificates; full composition and assay validation |
| cp_utilities | blend | Electricity and shared services | meter_and_service_records | owner: utilities engineer; meter IDs; readings; interval; batch equipment; voltage; geography; ventilation and laboratory service records; zero-output runs; allocation drivers; opening and closing WIP burden | Use calibrated submeter differences or a reconciled engineering allocation supported by actual service records, including start-up, failed batches, cleaning and holding. Preserve every attributable raw energy interval, including failed/zero-output, cleaning, holding and carried service shares. Retain the compatible attributable raw numerator without division, with complete-period and stock/WIP burden links. After verified raw-unit conversion and attribution, period_normalization alone divides by positive Q. Card amount formulas and aggregation_rule describe that same final reporting operation, not another division. Q=0 retains the complete raw and burden pool without a normalized result. | kWh | Each interval and batch campaign | Same complete actual period with carried-burden links | Same site line product route and supplied state | per 1 kg reference flow | Meter calibration and shared-service allocation reconciliation |
| cp_release | blend | Accepted supplied liquid and WIP | mass_and_release_records | owner: independent quality release officer; complete period; formulation revision; actual assays; selective assay recovery and interference; qualified label/state; batch net mass; release decision; temperature; unique lot IDs; opening/closing WIP mass and carried inventory burdens; internal transfers; failed lots; rework; returns; newly accepted supplied mass | Weigh net liquid excluding tank/container mass, reconcile tank withdrawals with batch release; independently assay supplied formulation and maintain traceable WIP genealogy. Product-specific low-temperature/efficacy qualification is separate from LCI mass acceptance. Define Q as net newly completed product counted once at its declared final production-acceptance gate, with unique lot/event history. Dispatch or withdrawal of old finished stock, reshipment, internal rework and reinspection/reacceptance of an already counted lot do not create another Q. Reconcile released finished-stock and actual handover records in a separate warehouse ledger; retain the attributable holding/transfer burdens for the matching accepted cohort. Closing unreleased stock/WIP and its carried burdens remain separate from accepted output. Retain the compatible attributable raw numerator without division, with complete-period and stock/WIP burden links. After verified raw-unit conversion and attribution, period_normalization alone divides by positive Q. Card amount formulas and aggregation_rule describe that same final reporting operation, not another division. Q=0 retains the complete raw and burden pool without a normalized result. | kg | Each batch release and period cut-off | Full actual matched period, with earlier and later lot genealogy | Same site line product route and supplied state | per 1 kg reference flow | Release certificates; scale/tank calibration; genealogy; independent label tests and selective assays |
| cp_losses | blend | Waste and individual emissions | weighing_speciation_and_monitoring | owner: environmental metrology officer; full period; waste net mass; composition; treatment recipient; retained samples; rejected mass; gas or liquid integrated volume; conditions; flow rate and duration only for rate records; measured species concentration; detection limit; captured and released fractions; water and elemental inventories; opening/closing retention | Reconcile disposal weighing, calibrated monitoring and independent species measurements; investigate missing mass. Validate reaction identity before assigning reaction water or oxygen; never fit unknown outlets with closure residuals. Preserve complete unnormalized waste and separately measured species totals and their stock/cohort attribution. Already integrated volumes receive no extra time multiplier. Retain the compatible attributable raw numerator without division, with complete-period and stock/WIP burden links. After verified raw-unit conversion and attribution, period_normalization alone divides by positive Q. Card amount formulas and aggregation_rule describe that same final reporting operation, not another division. Q=0 retains the complete raw and burden pool without a normalized result. | kg; m3 with declared conditions; kg/m3; h only for rate integration | Each waste shipment and emission interval | All normal, failed, zero-output, cleaning and holding operations in matched period | Same site line product route and supplied state | per 1 kg reference flow | Manifests; treatment interface; laboratory selectivity/recovery; monitors; physical and elemental closure investigation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | For each exchange, convert the complete raw-period numerator to its declared unit, then divide the compatible attributable quantity once by positive Q as defined by unique first production acceptance in cp_release. Attribute opening carried burdens plus current burdens minus only documented burdens carried in closing unreleased material/WIP or transferred out of that cohort; retain failed/zero-output runs and all rework/return burdens without counting internal transfers twice. Released finished goods and subsequent warehouse/dispatch are separately reconciled and do not create another Q or closing production-WIP subtraction; retain their matched actual holding/transfer burdens. Do not renormalize a previously normalized factor. Q=0 retains raw quantities and the complete burden pool without a normalized result. | cp_material; cp_utilities; cp_release; cp_losses | Exchange amount per 1 kg reference flow |  |
| solution_subledger | peroxide_solution; phosphoric_solution; sles; propylene_glycol; benzotriazole | Active constituent mass = complete supplied reagent mass times independently assayed mass fraction. Water and other constituents use their own measured fractions. Fractions must be on compatible bases; v/v is not w/w. These are subledgers within the one procurement row, not additional inputs. | cp_material; cp_release | Non-additive constituent mass ledger | `solvay-peroxide-assay-2019` |
| raw_conversion | all inventory rows | Use calibrated mass directly or volume times independently evidenced density at matched concentration and temperature. Rate times duration integrates a rate; an already integrated gas or liquid volume is multiplied by species concentration or independently verified density only, never duration again. No native secondary factor is a density measurement. | cp_material; cp_losses; cp_utilities | Converted raw quantity before normalization |  |
| physical_balance | all inventory rows | Close physical mass and elemental inventories separately from assays. For the production pool, actual complete charges plus opening unreleased material/WIP equal unique first-accepted output plus closing unreleased material/WIP, actual waste/releases and documented net transfers. Reconcile uncharged feed stores through a separate receipt/issue ledger; do not add receipts and production charges as two external inputs. Already accepted output is not closing production stock again. Keep released finished goods and subsequent bulk handovers in a separate warehouse ledger, retaining their matched material and embodied burdens. Internal recirculation cancels. Count whole liquids once, water in every carrier separately, and investigated uncertainty. Do not use COD, a single closure residual or peroxide disappearance to solve unknown reaction water and another unknown outlet. Any reaction/species and its water formation or consumption require independent evidence; mixing itself establishes no synthesis yield or reaction water. | cp_material; cp_release; cp_losses | Independent mass elemental water and species balances | `cn113491268-blending` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | Retain complete reagent identity, solution basis, route, grade, geography and provider compatibility. Blank auxiliary UUIDs require later verified binding, not surrogate chemicals. | Supplier certificates and native identity evidence |
| quality_assay | reference product | Laboratory owner must demonstrate matrix-specific selectivity, recovery and interference control for active peroxide and independently characterize water and other ingredients. The cited incoming-peroxide permanganate method does not establish selectivity in an organic blend; reject COD/residual-based speciation. Missing actual assay/qualification prevents use of that concrete dataset. | Validated laboratory procedure; recovery and blank/interference study; independent product qualification |
| quality_period | all inventory rows | Reconcile complete raw periods and unique accepted supplied output, including zero-output failures, rework, stock and WIP movements and carried burdens; retain original records, uncertainty and exclusions. | Full-period ledger and batch genealogy |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | finished_liquid | Require one terminal Product output linked by finished_liquid, the declared UUID, Mass/kg and net whole-liquid acceptance. Both languages must select the same physical output. |  |
| validate_ledgers | all inventory rows | Check complete solution procurement, separate constituent subledgers, physical and elemental closure, independent species/water evidence, full-period attribution and one normalization. Unexplained closure or unsupported species is an unresolved finding, not a fitted loss or zero. |  |
| validate_claims | reference product | Require actual product-specific assays and label/state qualification before using a concrete dataset. Neither the patent nor the generic native efficacy sentence establishes approved concentration, minimum-use temperature, killing effect, dose, exposure or emissions. | `nhc-low-temperature-2020`; `solvay-peroxide-assay-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Input to an explicitly scoped surface-disinfection model |
| allowed_use | Same supplied formulation state and verified upstream basis, with measured foreground inventory |
| excluded_use | Generic per-kg active ingredient, universal disinfectant, agricultural fungicide, handrub, efficacy equivalence or use-stage emission default |
| required_metadata | Formulation revision; complete solution procurement basis; assays; ingredient grades/routes; location; period; bulk supply interface; WIP genealogy; provider compatibility |
| required_quality_disclosure | Actual assay validation and label limits; inventory completeness; uncertainty; unbound auxiliary identities; native generic identity limitations; missing measurements |
| update_trigger | Changed formulation, assay method, supplier basis, grade, route, product state, label, site operation or period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UN Statistics Division, CPC 3.0 Explanatory Notes, 30 June 2025, p.167. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Sibling category boundary only; no recipe, effectiveness or accepted mapping. |
| wco-disinfectants-2022 | official_guidance | WCO, HS classification reference for Covid-19 medical supplies, edition 3.01, 15 January 2022, p.5. https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/covid_19/hs-classification-reference_edition-3_en.pdf?la=en | Prepared surface disinfectants versus bulk chemical feedstocks; HS2022 guidance, not a customs ruling or product approval. |
| cn113491268-blending | literature | CN113491268A, 一种低温过氧化氢消毒液及其制备方法, 12 October 2021, paragraphs 0038–0062, PDF pp.5–6. https://patents.google.com/patent/CN113491268A/zh | Primary patent examples support the selected ingredient set and sequential mixing only. Charge labels do not resolve supplied reagent assay, water grade or surfactant ethoxylation. Ratios, speed, duration, scale-up energy, temperature claims, shelf life, efficacy and environmental-safety claims are not defaults or approval. |
| nhc-low-temperature-2020 | official_guidance | 国家卫生健康委, 低温消毒剂卫生安全评价技术要求, attachment to 国卫办监督函〔2020〕1062号, pp.1–2. https://www.nhc.gov.cn/zhjcj/c100093/202012/b9c35590fd93459cadc5ae295a2e9279/files/1732842589101_90541.pdf | Historical Chinese guidance supports separate label-temperature qualification. It supplies no production recipe, LCI factor or universal kill rate. Current market compliance and actual product tests require separate verification. |
| solvay-peroxide-assay-2019 | method_factor | Solvay, Determination of Hydrogen Peroxide Concentration (20% to 70%), 08/19, FN 1167/01, p.1 Scope/Principle. https://www.solvay.com/sites/g/files/srpend616/files/2019-10/H2O2%20Determination%20of%20Hydrogen%20Peroxide%20Concentration%20-20%20to%2070-.pdf | Incoming aqueous-peroxide assay guidance is limited to its stated concentration and interference scope. Acid-permanganate oxidizable compounds interfere; do not apply it unvalidated to this organic formulated matrix or infer peroxide loss from COD. |
