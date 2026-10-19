---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.medicaments-for-therapeutic-or-prophylactic-uses
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Direct-compressed acarbose50mg uncoated tablets in100-tablet bottles

## 1. Scope and Applicability

This PCR covers one finished pharmaceutical product subset: acarbose50mg uncoated oral tablets made by dry blending and direct compression of externally supplied API and excipients, counted into tightly closed100-tablet bottles and quality released. It is an environmental activity-data collection and inventory method. The50mg strength identifies active content, not a therapeutic dose, tablet weight, functional equivalence or patient outcome. (`fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`)

The2015 FDA PRECOSE label documents a real50mg tablet and100-count bottle presentation (NDC50419-861-51); it is historical identity evidence, not a current-label claim. The Huadong patent independently documents a feasible dry-blend/direct-compression route. It does not establish PRECOSE or any current SKU's recipe or route. A concrete dataset must independently trace the actual full formulation, route, ingredient supply and complete packaging; never assemble a fictitious manufacturer recipe by joining the two sources. No patent recipe, blending time, yield, dose, humidity, shelf life or emissions number is a default.

Exclude API fermentation/purification as this foreground product, all other actives/strengths, fixed-dose combinations, wet or dry granulation, coated/modified-release tablets, capsules, liquids, injections, herbal medicines, blister or bulk-tablet supply and repackaging of already finished tablets. Retain compatible upstream API/excipient burdens. The production profile ends at the unique new quality release of fully packed tablets; post-release warehousing/dispatch is a separate finished-goods account and must remain visible whenever that extension is included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.medicaments-for-therapeutic-or-prophylactic-uses |
| classification_refs | CPC3.0:35260; narrower |
| covered_products | Acarbose50mg uncoated tablets, dry blend/direct compression,100-count closed bottle |
| excluded_products | Other medicines, APIs as final product, other routes, strengths, dosage forms and pack presentations |
| representative_product | Actual qualifying50mg tablet SKU; historical PRECOSE100-count bottle is physical presentation evidence only, with no inferred proprietary route |
| production_route | Receipt/dispensing → dry blending/lubrication → direct compression/dedusting → bottle filling/closure/labelling → testing/unique new release |
| market_state | Complete tightly closed100-tablet bottle with actual closure, label and any evidenced seal/leaflet/outer packaging; net-tablet mass excludes packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply the specified finished acarbose tablet product |
| How much | 1kg net accepted finished tablets in100-tablet bottles at new quality release |
| How well | Actual approved product specification and batch acceptance: identity, labelled50mg content, assay/uniformity, moisture, physical integrity, dissolution/disintegration and package integrity; no clinical equivalence claim |
| How long or cycle | One declared representative manufacturing/release cohort and period; no treatment course or patient lifetime |
| reference_flow_link | finished_tablets |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Acarbose tablet `e0ae1660-e0d6-4830-aadd-126c4c1a6aa4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Manufacturer/site/country/period; actual SKU/lot and approved specification; complete formula and each acquired ingredient grade/state/assay/moisture; direct-compression route evidence; uncoated50mg strength; measured whole-tablet net mass;100 tablets/bottle and complete packaging bill; unique new release gate and cohort; failed/reworked/returned batches; opening/closing WIP and carried burdens; finished-stock/dispatch account; utilities/geography/provider; waste and emissions destinations |

Declare all qualifiers in the concrete package metadata or equivalent fields. The native tablet record has no geography, strength, packaging or route restriction beyond production mix at plant. Its35240 classification is a disclosed metadata inconsistency, not proof that the explicit finished tablet is pure sugar. No scientific or mapping approval follows from this identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | Use1kg net whole-tablet mass at unique new packed-product quality release. cp_release measures Q; include API, excipients and actual moisture, exclude all packaging and destroyed samples. |
| count_mass | finished_tablets | Mass | kg | For each same-SKU/lot cohort measure net whole-tablet mass from calibrated tare-corrected weighing or representative counted tablet samples. Q=sum(N_lot×measured mean tablet mass_lot in kg).100 tablets/bottle converts counts only;50mg active/tablet never substitutes for whole-tablet mass. Do not pool incompatible configurations. |
| electricity_conversion | electricity | Net calorific value | MJ | Record raw metered kWh or MJ.1kWh=3.6MJ from the exact native energy unit chain; preserve CN,<1kV,grid-average to-user restrictions and do not interpret NCV as a fuel dose. |
| raw_units | all inventory rows | Actual declared property | kg; MJ | Convert raw quantities before the sole normalize_period operation. A rate multiplied by its matching duration yields a total; an already integrated liquid/gas volume gets no extra time factor. Volume-to-mass needs independently measured density at actual state, never a secondary native-property factor assumed to be density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received qualified API/excipients and complete purchased packaging articles; no upstream API reactor inside this foreground |
| starting_condition_role | foreground_gate_input |
| product_classification_scope | CPC35260 narrower finished-tablet subset only |
| recursive_input_rule | Internal same-batch returns/rework retain identity and burden without new production. Purchased finished tablets/repacking are outside this route; purchased premixes remain one whole input with compatible upstream burdens, never duplicated as constituent purchases. |
| upstream_dataset_requirement | API fermentation/purification, excipient manufacture, actual packaging manufacture, transport and utilities require compatible supplier/state/geography/period references; waste transfers require actual treatment receivers |
| disclosure | Release gate, upstream starting states, complete formula and pack, actual pre/post-release storage boundary, stage meters, WIP/carried burdens, returns/rework, support systems and destinations |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_gate | formulation | Include receipt, dispensing/sieving when used, blending/lubrication, compression, dedusting, filling/closure/labelling, actual pre-release storage/handling, quality tests, cleaning/changeover, HVAC/dehumidification, abatement, failed/zero-output runs and rework. Keep stage records within one aggregated foreground process. | `huadong-acarbose-direct-compression-2007`; `ifc-pharma-biotech-2007` |
| b_release_gate | finished_tablets | Q is unique positive newly quality-released packed-tablet net mass, not actual deliveries. In the production account never add closing finished stocks from the same Q as another output. Finished-goods storage/dispatch has its own opening/closing mass and carried burdens, real packaging/handling/shipping loads, returns and deliveries. When combined, cancel internal release handovers once and do not treat Q and deliveries as equal. Returned previously released goods create no new Q on reacceptance. Their physical return/restore handovers, historical burdens and new reinspection/rework loads remain in a separately linked finished-goods restoration subaccount; never charge an unrelated new-release cohort or omit these loads. Never-released WIP rework remains within the production cohort and enters Q only at its first accepted release. | `ifc-pharma-biotech-2007` |
| b_completion | all inventory rows | The cards are an explicit initial stream map, not a cut-off list. A concrete site must add each actual cleaning formulation, fuel, refrigerant, filter, desiccant, secondary pack, waste packaging and direct species as separate atomic exchanges before claiming completeness. Record a whole purchased formulation once; constituents/carrier water are analyses. Preserve all actual burdens; zero requires evidence. | `ifc-pharma-biotech-2007` |
| b_outlets | formulation | Base profile exports wastewater and solid wastes to evidenced receivers and has no on-site API synthesis, combustion or effluent treatment. If any is actually within the declared boundary, extend all associated inputs and species/medium-specific outputs rather than omitting them. Treatment emissions occur at the declared treatment boundary, not again at the waste-transfer row. | `ifc-pharma-biotech-2007` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| formulation | Dry formulation through packed-product quality release | required | All qualifying product cohorts | foreground | finished_tablets |

One aggregated process preserves all stage-level raw records. Internal blends, press returns and unpacked tablets are not additional final outputs. Actual support chemicals/pack components or emissions not present in this starting map must be added individually with their own identities and protocols; unresolved matching never licenses omitted consumption.

### Process: Dry formulation through packed-product release (`formulation`)

#### Inputs

##### Product flows

###### Acarbose API powder (`acarbose_api`)

Weigh the whole purchased powder, including actual residual moisture and impurities. Native CAS56180-94-0 and amorphous-powder identity support fermentation-derived acarbose; the awkward English producing-organism wording is not a yield or purity factor. Retain supplier, assay basis, residual solvents, route, grade and upstream fermentation/purification burdens. Assayed active mass is a subledger, never a second purchase.

- Selected flow: acarbose `4f6cb86c-01e5-46a5-85ff-a546e3f38bce`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ingredients`
- Sources: `fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

###### Microcrystalline cellulose filler (`mcc`)

Record actual whole supplied filler mass and pharmaceutical grade, particle-size distribution and moisture. The broad native record does not fix grade or supplier; its plant-fibre70%/30% commentary supplies no composition, dosage or crystallinity default for this input.

- Selected flow: Microcrystalline cellulose `b4f87810-9ef0-44c8-a735-e696c40653e9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ingredients`
- Sources: `fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

###### Native starch filler (`native_starch`)

Conditional actual separately acquired native starch. Record botanical origin, grade, moisture and whole supply mass. Broad granular plant-starch identity is compatible but not proof of pharmaceutical qualification. It does not identify pregelatinised starch or a purchased co-processed excipient mixture.

- Selected flow: Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ingredients`
- Sources: `fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

###### Compressible starch excipient (`compressible_starch`)

Conditional actual separately purchased compressible starch. Confirm modification/pregelatinisation, botanical origin, composition, moisture and SKU; a native-starch flow is not silently substituted for a physically modified grade. A purchased mixture is recorded whole once, with constituents as analyses only.

- Selected flow: Compressible starch excipient
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ingredients`
- Sources: `huadong-acarbose-direct-compression-2007`

###### Colloidal silicon dioxide glidant (`colloidal_silica`)

Actual pharmaceutical glidant grade only; record surface treatment, form, moisture and whole acquired mass. Quartz sand, crystalline silica, silicate and a generic industrial route are not assumed equivalent.

- Selected flow: Colloidal anhydrous silicon dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ingredients`
- Sources: `fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

###### Magnesium stearate lubricant (`magnesium_stearate`)

Native CAS557-04-0 powder/direct-tablet-pressing identity is compatible. Record actual pharmaceutical grade, fatty-acid distribution, plant/animal origin, moisture and supplier. No ideal-pure-stearate assay or lubricant ratio is prescribed.

- Selected flow: Magnesium stearate `569f27cc-2b97-4005-a20b-00b68d70ede3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_ingredients`
- Sources: `fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

###### Electricity for formulation and packaging (`electricity`)

Retain mixing, compression, dedusting, HVAC/dehumidification, cleaning, quality control, pre-release holding and packaging electricity, including attributable idle/failed runs. Native identity is explicitly CN, <1kV, grid-average consumption mix to user. It covers only that actual supply; other geography, voltage or generation requires a reviewed replacement, while all measured electricity remains in the inventory.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `ifc-pharma-biotech-2007`

###### Treated process water for cleaning (`cleaning_water`)

Record supplied treated water for equipment/facility cleaning and actual on-site purification losses/energy if included. Native geography, grade and treatment route are unspecified; it does not establish sterile water, injection water, tap-water treatment or a supplier. No manufacturing granulation water is assumed for the direct-compression route.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utilities`
- Sources: `ifc-pharma-biotech-2007`

###### Primary100-tablet bottle body (`bottle_body`)

One actual bottle body, weighed without closure or contents. Confirm material, layers, dimensions, supplier and pharmaceutical-contact specification; do not infer HDPE or glass from a label that says only bottle.

- Selected flow: Primary100-tablet bottle body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `fda-precose-label-2015`; `ifc-pharma-biotech-2007`

###### Tablet-bottle closure (`bottle_closure`)

Actual separately supplied closure; record polymer/metal, liner construction and mass. If supplied as one inseparable assembly, retain the assembly mass and avoid counting its liner again.

- Selected flow: Tablet-bottle closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `fda-precose-label-2015`; `ifc-pharma-biotech-2007`

###### Bottle-mouth tamper seal (`bottle_seal`)

Conditional actual separately supplied seal, retaining complete laminate/coating composition and mass. It is not universally required by the historical label; absence requires actual packaging evidence.

- Selected flow: Bottle-mouth tamper seal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `fda-precose-label-2015`; `ifc-pharma-biotech-2007`

###### Printed bottle label (`bottle_label`)

Actual supplied printed label as one article; record substrate, adhesive/ink already included by its provider, mass and reject labels. Do not separately repurchase constituents already included in that article.

- Selected flow: Printed bottle label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `fda-precose-label-2015`; `ifc-pharma-biotech-2007`

###### Printed paper product leaflet (`leaflet`)

Conditional actual leaflet, with measured mass, paper and print supplier boundary. Electronic information is not silently given the mass or impacts of a paper leaflet.

- Selected flow: Printed paper product leaflet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `fda-precose-label-2015`; `ifc-pharma-biotech-2007`

###### Corrugated shipping carton (`shipping_carton`)

Conditional actual single corrugated carton used before the selected release gate; record measured mass, composition and bottle count. Post-release transport packaging remains in the finished-goods account when that extension is claimed, never omitted or charged twice.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packaging`
- Sources: `fda-precose-label-2015`; `ifc-pharma-biotech-2007`

##### Waste flows

No exchange presumed; actual occurrence requires its own atomic row.

##### Elementary flows

No exchange presumed; actual occurrence requires its own atomic row.

#### Outputs

##### Product flows

###### Released bottle-packed acarbose50mg tablets (`finished_tablets`)

Exactly one terminal Product output:1kg net finished tablets including all excipients and actual moisture, excluding every packaging component.100 tablets per tightly closed bottle is the supply configuration;50mg is the labelled active content per tablet, not tablet mass. Native production mix at plant has unspecified geography/route/strength/pack; its CPC35240 classification disagrees with its explicit tablet name/comment. Retain that classification debt; no CAS is given for the formulated product, and the API CAS is not copied to the mixture. Qualify the narrower finished product through actual batch and packaging records.

- Selected flow: Acarbose tablet `e0ae1660-e0d6-4830-aadd-126c4c1a6aa4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_release`
- Sources: `fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007`

##### Waste flows

###### Discarded acarbose tablets (`rejected_tablets`)

Actual discarded off-spec tablets and destroyed quality-control samples; retain active content, excipients, wet mass, destination and treatment acceptance. Reworkable tablets remaining within this gate are internal, not this waste and not new output.

- Selected flow: Discarded acarbose tablets
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wastes`
- Sources: `ifc-pharma-biotech-2007`

###### Discarded tablet-formulation dust (`collected_dust`)

Collected powder actually discarded from weighing, mixing, compression and dedusting; measure composition/moisture and receiver. Powder legitimately returned internally is tracked by batch with no new purchase or output; it is not emitted dust.

- Selected flow: Discarded acarbose formulation dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wastes`
- Sources: `ifc-pharma-biotech-2007`

###### Exported tablet-line cleaning effluent (`cleaning_effluent`)

Actual whole wastewater exported to treatment, separately measuring water, suspended solids, acarbose and cleaning constituents, COD/TOC and destination. COD/BOD is an analytical oxygen-demand indicator, not an effluent mass, active-mass measurement or elementary emission identity.

- Selected flow: Acarbose tablet-line cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_wastes`
- Sources: `ifc-pharma-biotech-2007`

##### Elementary flows

###### Residual formulation particulate to air (`dust_air`)

Actual post-control particulate released to the declared air compartment, including fugitives. Retain particle-size basis, active/species composition, air conditions and abatement records. Do not add collected filter dust again or assume every particle is pure API. An unresolved native UUID does not permit omission.

- Selected flow: Acarbose formulation particulate to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable quantity per 1 kg reference flow.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emissions`
- Sources: `ifc-pharma-biotech-2007`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_single_product | formulation | This profile has one reference product. Separate other products/strengths/routes and use stage submeters or documented physical causal drivers for shared HVAC, cleaning, equipment and quality control; retain the raw shared totals and allocation fractions. Do not allocate by clinical potency, dose or patient outcome. | ifc-pharma-biotech-2007; jrc-ilcd-2010-allocation |
| a_rework | all inventory rows | Keep actual internal recovery/rework loads and failed-run burdens in the matched cohort once. Waste transfer earns no assumed avoided-product credit. A sold second product or solvent/material recovery outside this single-output profile needs an explicit reviewed multi-output extension, not renaming a co-product as waste. | `ifc-pharma-biotech-2007` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Every collection_method retains unnormalised raw-period numerators and complete stock/WIP carried burdens. The aggregation_rule basis and inventory-card amounts label the result of the single normalize_period reporting operation; they do not instruct a separate collection-side or sequential A/Q division.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | formulation | Quality-unit owner: denominator and release identity | foreground_record | SKU; lot; route; strength; pack; net tablet mass; measured mean tablet mass; counted tablets/bottles; first release ID/time; prior-release/return IDs; destroyed sample count; Q; opening/closing finished stock; deliveries | Record unique new accepted fully packed tablets with calibrated tare-corrected weighing and lot-specific counted checks. Match release ledger to production and packaging records; exclude rejects, destroyed samples and previously released returns. Retain raw Q, count and mass records without dividing inputs. | kg; tablet; bottle | Each lot and reporting period | Full matched production/release period including start/end cut-off | Quality unit and final packing station | per 1 kg reference flow | Calibration/tare records; batch release and packing reconciliation; duplicate-release audit |
| cp_ingredients | formulation | Materials and manufacturing owner: ingredients | foreground_record | Ingredient identity/SKU/lot; complete supply form; supplier route/grade; full formula; gross/tare/net acquisitions; returns; raw-material opening/closing stocks; issued amount; assay basis; moisture; premix components | Reconcile actual consumed whole commercial supplies from receipts, issues and stock ledgers; supplier returns retain their exact disposition. Keep active/water/component analyses separate from procurement. Preserve all raw converted masses for failed runs, rework and matched lots; no A/Q here. | kg | Each receipt/issue/lot | Complete representative period and linked lots | Receiving/dispensing/blending; materials owner | per 1 kg reference flow | Invoices; approved batch formula; CoAs; scales; stock and issue records |
| cp_utilities | formulation | Engineering owner: utilities and support systems | foreground_record | Meter IDs/readings; kWh/MJ; water mass or volume/density/state; start/end; voltage; country; supplier; HVAC/dehumidification/idle hours; raw shared loads and allocation drivers | Capture full raw differential meter totals for every actual stage and attributable support operation, including failed/zero-output runs, cleaning and holding. Derive unmetered shares only with documented causal evidence and preserve totals. Rates require duration; integrated totals do not. Keep numerator units and provider boundary explicit; no output division. | MJ; kWh; kg; m3 | Continuous meters; period/lot reconciliation | Same product/route/state cohort and complete period | Utilities/HVAC/cleaning/QC/packing within gate | per 1 kg reference flow | Meter calibration; bills; supply contracts; allocation worksheets; density evidence |
| cp_packaging | formulation | Packaging owner: complete pack supply | foreground_record | SKU;100-tablet bottle configuration; body/closure/seal/label/leaflet/carton IDs; layers/materials; supplied component masses/counts; rejects; stock changes; provider boundary | Weigh each actual acquired article/component and reconcile issues, wastage and opening/closing stock with packed bottles. Include supplied coatings/inks/liners once; never guess material or pack mass from the historical label. Segregate pre-release packaging from later shipping-pack account without deleting either. Collect raw totals only. | kg; item | Each component lot and packing run | Matched production and packing cohort | Packing line and packaging stores | per 1 kg reference flow | Supplier specifications/BOM; component weighing; packing records; rejects |
| cp_wip | formulation | Production accounting owner: WIP/rework and carried burdens | foreground_record | Opening/closing WIP by stage/lot; mass/composition; opening carried burdens by exchange; raw new period loads; closing carried burdens by exchange; failed/zero-output runs; internal return IDs; release handover IDs | Maintain unnormalised mass and exchange-burden ledgers by the same product/route/state cohort. Retain complete opening and complete closing carried burdens, including unconsumed opening carry still in closing WIP, using traceable process progress/physical drivers. The reporting equation adds complete opening carry and subtracts complete closing carry once, without separately subtracting unconsumed opening carry again. Keep failed-run and rework loads once; internal circulation is not a new external purchase/output. Retain all raw ledger entries; do not divide by Q. | kg; MJ and each original exchange unit | Every lot movement and period cut-off | Full period plus preceding WIP carry-in and future carry-out links | Manufacturing, QA and accounting joint sign-off | per 1 kg reference flow | Lot genealogy; signed WIP count; stage completion and burden worksheets |
| cp_wastes | formulation | Environmental owner: discarded streams | foreground_record | Stream/lot; wet mass; moisture; API and other composition; QC destroys; collected dust; wastewater; COD/TOC; receiver and treatment; transfers and returned waste | Measure every actual discarded stream and destination before mixing where necessary; distinguish retained/reworked solids, collected waste and actual emissions. Wastewater is whole wet transfer; analytical species are subledgers. Retain raw period totals, failed runs and treatment-chain references without division or assumed credit. | kg; analytical units retained | Each transfer with representative sampling | Complete matched period including cleanouts and rejected lots | Waste/effluent gate and actual receivers | per 1 kg reference flow | Weigh tickets; manifests; lab methods; receiver acceptance; zero-output run log |
| cp_emissions | formulation | Environmental monitoring owner: air releases | foreground_record | Actual air compartment; vent/fugitive ID; particulate/active composition; particle size; concentrations; gas state; flow-rate/time or integrated volume; control performance; detection limits; monitoring coverage | Use calibrated post-control measurements or an independently justified species-specific model with full temporal coverage including upsets. Concentration times matched integrated gas volume gives raw mass; a rate is integrated once. Do not infer species, API fraction, water formation or emitted mass from COD, inventory residual or guideline limits. Retain raw masses and uncertainty, no A/Q. | kg; raw concentration/volume units retained | Representative normal/upset sampling and continuous records as applicable | Complete matched period and documented extrapolation coverage | Every actual included air outlet and fugitives | per 1 kg reference flow | Calibration; sampling protocols; detection limits; full composition and control evidence |
| cp_finished_goods | formulation | Logistics/accounting owner: separate post-release ledger | foreground_record | Opening/closing finished stock and carried burdens; release receipts; deliveries; returns; reacceptance IDs; actual warehouse energy; storage duration; added packaging; handling/shipping loads; destinations | Record all actual post-release operations in a separate account. Retain inventory burdens and cohort linkage; unreleased WIP is separate. If an expanded delivery system is reported, combine with production only after internal handovers cancel and a delivery denominator with its own opening/closing stock burdens is declared. Never silently replace production Q by delivery quantity or omit included loads. | kg; item; MJ; duration; transport units | Each movement and period cut-off | Actual finished-stock/dispatch period with carried-burden links | Post-release warehouse/dispatch, separately owned | per 1 kg reference flow | Warehouse counts; stock valuation by exchange; dispatch/return records; bills |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For each exchange e, first convert raw units and reconcile the complete matched cohort: A_e = raw period attributable burden_e + complete opening WIP carried burden_e - complete closing WIP carried burden_e. Keep failed/zero-output and rework burdens once. Q is unique positive newly quality-released packed-tablet net mass. Report a_e=A_e/Q once per1kg reference flow. Card formulas and protocol aggregation labels describe this same reporting operation, never a second division. With Q=0 retain the raw burden/carry ledger and report no finite unit dataset. | cp_release; cp_ingredients; cp_utilities; cp_packaging; cp_wip; cp_wastes; cp_emissions | One normalized inventory per1kg net released tablets | `ifc-pharma-biotech-2007` |
| physical_balance | formulation | Keep unallocated physical mass, dry solids, water, active and relevant elemental balances separate from burden allocation. Opening WIP + actual incoming materials = unique newly released tablets + closing WIP + actual discarded/air/water outlets, allowing evidenced transfers; packaging has its own balance and finished stocks from Q are not a second production output. Dry blending/compression prescribes no chemical reaction water. Investigate independent measured moisture/evaporation/cleaning water and any actual degradation species; never solve unknown reaction water and unknown outlet from the same residual. | cp_ingredients; cp_release; cp_wip; cp_wastes; cp_emissions | Independent raw mass/composition closure and explained uncertainty | `ifc-pharma-biotech-2007` |
| finished_goods_reconcile | finished_tablets | Production Q enters finished-goods stock as an internal receipt once; deliveries follow their own opening stock + release receipts + physical returns - closing stock - actual losses ledger. Previously released returns retain historical burdens and no new Q. If reporting actual delivery, attribute opening/closing finished-stock burdens and all included warehouse/packing/handling/dispatch loads to that delivery cohort and cancel internal release transfers; undelivered goods are excluded from delivered Q. This is a separate extension, not a second normalization of the base production inventory. | cp_finished_goods; cp_release; cp_wip | Separate release and delivery ledgers with internal cancellation | `ifc-pharma-biotech-2007` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Confirm full native name components, CAS where present, form/route/grade/geography/type, all properties and exact referenced property/unit-group versions. Flow identity is separate from supplier/background and quantitative compatibility. Reference tablet35240 classification debt remains explicit; no automatic mapping. | Native originals and supplier/batch evidence |
| dq_completeness | formulation | Retain the full formula, purchased supply states, complete packaging, all raw period inputs/burdens, failed and zero-output runs, rework, WIP and carried burdens. Verify all included supports/outlets; missing quantities require collection, not zero substitution. | Signed material/energy/stock reconciliation and stage records |
| dq_temporal | formulation | Match site, product, direct-compression route, strength, packaging, release gate and cohort across numerator/denominator. Document representativeness, uncertainty and extrapolation; retain all limitations. | Meter dates; lot genealogy; sampling/calibration and uncertainty records |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | finished_tablets | Reject a missing reference identity, wrong dosage form/strength/route/pack or absent net-tablet weighing/count conversion. Confirm the explicit link selects exactly one terminal Product output consistent with reference UUID in both languages. Do not hide an intermediate/co-product with the same UUID. | `fda-precose-label-2015`; `huadong-acarbose-direct-compression-2007` |
| v_gate_stock | formulation | Check unique new release IDs, raw Q>0 and exact cohort. Fail duplicate returned/reaccepted production, omitted failed-run/rework burdens, missing WIP/finished-stock carry ledgers, production Q plus same-Q closing finished-stock output, unexplained release-delivery equality or any repeated A/Q division. | `ifc-pharma-biotech-2007` |
| v_mass_species | all inventory rows | Check unallocated mass/water/active and relevant element balances independently from allocation and actual species evidence. Reject pure-active output as whole tablets, duplicate formulation constituents, integrated-volume times time, COD as species/mass, assumed reaction-water closure or waste transferred and emitted twice. | `ifc-pharma-biotech-2007` |
| v_provider | all inventory rows | Review native and provider restrictions, complete actual formula/pack records, raw fields/protocol ownership and all conditional occurrences. Empty auxiliary UUIDs require matching before concrete dataset use, not fabricated evidence. A method/format check does not grant clinical, scientific, GMP or mapping approval. | `ifc-pharma-biotech-2007` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Traceable environmental modelling of the same qualified finished tablet product, with exact gate and mass basis |
| allowed_use | Supplier/site-specific secondary formulation inventory and background links with explicit scope/quality disclosure |
| excluded_use | Clinical selection/dosing, efficacy comparisons, default medical equivalence, manufacturing recipe/operating settings, all-medicament proxies, API or other dosage-form substitution and automatic regulatory/scientific approval |
| required_metadata | All reference qualifiers; source/projection identity; actual full formula and supply/pack BOM evidence; stage boundary, release/cohort and separate finished-stock account; allocation; providers/receivers; raw protocol records |
| required_quality_disclosure | Historical FDA presentation and independent patent-route evidence do not identify one proprietary SKU recipe; native tablet classification debt; unspecified native ingredient grade/geography; explicit CN<1kV electricity limit; unresolved auxiliary identities; site data/coverage/uncertainty and review status |
| update_trigger | Change in active/strength/formulation, route, dosage form, net-mass/count basis, pack configuration, release/delivery gate, utility/provider/geography, stock treatment or waste/emission boundary |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| fda-precose-label-2015 | official_guidance | FDA, PRECOSE label,03/2015, NDA020482 supplement027, Reference ID3713301, pp1,12–13. https://www.accessdata.fda.gov/drugsatfda_docs/label/2015/020482s027lbl.pdf | Historical acarbose50mg tablet identity, excipient names,100-tablet bottle and moisture/storage presentation only. Not current-label verification, tablet mass, proprietary route, complete pack composition, clinical equivalence or a recipe/operating default. |
| huadong-acarbose-direct-compression-2007 | literature | Hangzhou Zhongmei Huadong Pharmaceutical, CN101019874A, published2007-08-22, specification pp3–4/5, PDF pp6–7; retained Chinese scanned original. https://patents.google.com/patent/CN101019874A/zh | Applicant evidence for a feasible acarbose dry-blend/direct-compression route and separate filler/glidant/lubricant roles. No patent quantity, mixing order/time prescription, yield, environmental factor or linkage to the historical FDA product is adopted. |
| ifc-pharma-biotech-2007 | official_guidance | IFC/World Bank Group, EHS Guidelines for Pharmaceuticals and Biotechnology Manufacturing,30 April2007, §§1.1,2.1, AnnexA secondary manufacturing, pp1–5,12,19. https://www.ifc.org/content/dam/ifc/doc/2000/2007-pharma-biotech-ehs-guidelines-en.pdf | Qualitative formulation/packaging, HVAC, dust, cleaning effluent, waste and monitoring coverage; site collection design. Sector guidance is not an emission measurement, mandatory universal operation, regulatory compliance conclusion or clinical evidence. Release/WIP/stock accounting equations are explicit PCR author modelling rules, not quoted IFC equations. |
| jrc-ilcd-2010-allocation | handbook | European Commission JRC, ILCD Handbook General guide Detailed guidance, first edition March 2010, section 7.9.3, PDF pp277–278 / printed pp257–258; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Virtual subdivision and determining physical causality for attributional shared-service burden assignment only. No product-specific route, composition, yield, emission or utility factor, fixed allocation share, substitution credit or full PEF conformity is supplied. Stock and normalization rules remain PCR-specific consistency reasoning. |
