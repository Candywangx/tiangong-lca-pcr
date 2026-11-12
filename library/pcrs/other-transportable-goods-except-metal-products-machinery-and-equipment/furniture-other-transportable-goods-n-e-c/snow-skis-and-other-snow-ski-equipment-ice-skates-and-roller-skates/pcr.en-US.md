---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.snow-skis-and-other-snow-ski-equipment-ice-skates-and-roller-skates
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
schema_version: 1
translation_status: canonical
---

# Wet-laid wood-core glass/epoxy alpine ski manufacture

## 1. Scope and Applicability

Manufacture of complete unbound alpine skis with supplied laminated sugar-maple wood-core blanks shaped on site, dry woven glass wet-laid with an actual epoxy system, supplied sintered UHMWPE bases, P-tex sidewalls, hardened steel edge profiles and decorated nylon topsheets. Include actual electric heated airbag pressing/curing, trim, base/edge grinding, bevel checks, wax/infrared/brush finishing and first quality release. A single ski is the physical product; one pair contains two skis. The source-supported material/operation synthesis defines an applicable route, not one measured current SKU, factory order, universal layup or factory inventory. Sources: `wagner-custom`; `wagner-materials`; `wagner-core`; `wagner-fiberglass`; `wagner-press`; `wagner-finish`; `wagner-graphics`.

Exclude bindings/boots/poles/skates, equipment sets, snowboard, cross-country/jumping skis of different structure, toys, incomplete cores/bases/edge strips/blanks, purchased-finished-ski repacking and snowfield use. Carbon/Titanal/aramid/prepreg/foam/all-metal routes, on-site core lamination or topsheet printing need a new evidence/applicability decision and actual added atomic inventory; never silently substitute them. Upstream supply preparation remains included once via linked compatible datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.snow-skis-and-other-snow-ski-equipment-ice-skates-and-roller-skates |
| classification_refs | CPC 3.0 38410; narrower; current accepted association: `classifications/mappings/cpc-3.0-to-pcr.yaml` and `docs/adr/cpc3-additional34-20261029-38410.md`; complete method scope/exclusions apply, not full-leaf or scientific/translation approval |
| covered_products | Complete wet-laid wood-core glass/epoxy unbound alpine ski |
| excluded_products | Different structures/routes and all equipment/parts/use exclusions in section 1 |
| representative_product | One complete declared alpine ski before binding mounting; actual mass not assumed |
| production_route | Supplied core/layers/edge preparation; wet layup; electric heated press cure; trim/grind/bevel/wax; release |
| market_state | New complete finished unbound ski at first quality-release gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a complete manufactured alpine ski in the declared unbound configuration |
| How much | 1 kg net first-released complete ski mass; measure each individual ski |
| How well | Actual manufacturer/specification conformity for declared structure and finished base/edge/bevel/wax state; no invented performance or certification |
| How long or cycle | One manufacturing first-release event; no use-life or slope-service claim |
| reference_flow_link | finished_ski |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Snow-skis and other snow-ski equipment, ice-skates and roller-skates `218cc119-aab7-4ba5-b8b0-2c05509e2df3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | one complete unbound alpine ski and unique serial/cohort; laminated sugar-maple core supply and actual moisture; dry woven glass and actual whole resin/hardener preparations; sintered UHMWPE base and actual P-tex sidewall state; hardened steel edge profile and supplied component boundary; actual decorated nylon topsheet and conditional rubber strip; actual shape/camber/rocker and approved material configuration; actual cure/base/edge/bevel/wax release records; measured net individual ski mass with calibration and no bindings/packaging; first-release Q and all raw/WIP per-exchange inherited vectors; original released-FG cohort Q_H and actual observed horizon H; actual supplier geography/period and native flow restrictions; complete gross packaging six-leg and asset/part/fluid custody; independent wet mass/carbon/element/water/species evidence |

Every required qualifier must be in the actual dataset metadata, reference comment, product/process description or equivalent full data-package context. Native family compatibility does not establish the actual supplier, recipe, conformity or measured mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| release_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the sum of measured net masses of unique complete skis first released in the selected cohort. Use calibrated weighing after actual finishing; exclude packaging, binding, poles and independent accessories. Record model/configuration, serial and actual moisture. First-released closing FG is already in Q, not a second product. No assumed per-ski kg or secondary-property mass. |
| native_units | all inventory rows | Actual native extensive property per card | native unit | Preserve each reference-property unit. Electricity is native Net calorific value/MJ; 1 kWh = 3.6 MJ only once. Hydraulic fluid is Volume/m3 and independently measured fluid density supplies physical kg. Mass rows use kg. Integrate true rates only; already integrated gas/liquid volumes are not multiplied by time. Count to mass requires measured same-configuration net M; Item(s) and item have factor 1 only as count. No inferred layer/area/density/weight coefficients. |
| single_result | all inventory rows | Actual numerator dimension | native unit | All collection records are raw and undivided. Section-8 calc_raw and attribution/service rules construct numerators; only calc_quotient divides N_i by Q_c once. Physical cards use FULL gross V_i and no stock/allocative correction; burden cards use attributable vectors once. Each card and aggregation references that same result. Q_c=0 retains all raw load and physical stocks with no unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Supplied laminated maple-core blanks, dry woven glass, whole formulated epoxy and hardener, sintered base/sidewall/steel edge components and decorated nylon topsheet; actual utilities and conditional auxiliaries |
| starting_condition_role | foreground starting gate; upstream supply linked once |
| product_classification_scope | CPC 3.0 38410 narrower semantic route |
| recursive_input_rule | Same-category ski intermediates need actual state/history and paired internal handoff; never replace full manufacture by purchasing finished skis then packing |
| upstream_dataset_requirement | Match supplied form, route, geography, period and actual whole formulation/article boundary; upstream completed operations are not repeated on site |
| disclosure | Manufacturing first release plus separately observed original-cohort service H; real stock/vector/physical gaps explicit |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_route | whole manufacture | Include preparation, layup/mixing, electric cure, finishing/inspection/wax, actual failed lots, zero-output operation, startup/shutdown, idle, cleaning, samples and rework. No assumed steam boiler, fuel, compressed-gas purchase or curing coefficient; add any real extra atomic input/output before numerical use. | wagner-core; wagner-press; wagner-finish |
| b_cohort | stocks and gates | Each exchange has opening raw/WIP/non-WIP unassigned burden vectors and physical stocks, current addition and complete closing states. Manufacturing closing burden excludes already first-released FG; its historical manufacturing stays with original Q. Already-net consumption is never stock-corrected again. Product-gate transfers cancel only matched internal legs. Gross mass never shrinks by burden/economic share. | ilcd-attributional-2010 |
| b_service | postrelease and dispatch | Retain actual storage, packaging, handling and shipment increments over observed H under original Q_H, including held FG. Mere delivery/retest does not make new Q; do not use net-delivery denominator. A future net-delivery study requires full opening/closing FG burden, gross G/R, actual original-delivery reversal and incremental rework bridge, without assuming returned mass equals original delivery. | ilcd-attributional-2010 |
| b_physical | all gross stocks and species | Independently close wet mass, relevant elements, carbon origins and actual chemical/free/phase water at manufacture, FG-service and consolidated gates. All constituents, provider activity and carrier water count once. Record natural adsorption/desorption as well as actual added/removed repair water. No closure residual may fit two unknowns; VOC/NOx/COD/total dust are indicators, not invented molecules. | ilcd-attributional-2010 |
| b_pack | packaging and assets | For each real packaging pool separately trace P + I + ER = C + gross S + EO + W with six event cards, full wet empty/attached WIP/FG/reusable stocks, supplier-included influx and one burden owner. Repair/water X_in/X_out removes only another same-side in/out overlap, never real retained influx or full closing mass. Whole wet article and separately added component bridge must be disjoint. Internal reuse cancels; packaging is excluded from ski Q. | ilcd-attributional-2010 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| prep | Supply acceptance and CNC component preparation | required | Actual declared operations and real exchanges only | manufacture | first-release Q |
| laminate | Wet layup and electrically heated pressing/curing | required | Actual declared operations and real exchanges only | manufacture | first-release Q |
| finish | Trim base grind edge finish wax and first release | required | Actual declared operations and real exchanges only | manufacture | first-release Q |
| service | Actual postrelease custody and service | conditional | Actual declared operations and real exchanges only | observed service and physical custody | original Q_H and H |
| packaging | Packaging custody and attributable service | conditional | Actual declared operations and real exchanges only | observed service and physical custody | original Q_H and H |
| assets | Assets parts fluids and actual service | conditional | Actual declared operations and real exchanges only | observed service and physical custody | original Q_H and H |

### Process: Supply acceptance and CNC component preparation (`prep`)

All cards inherit the full reference configuration, actual applicability condition and sections 4/5/7/8/9. A conditional absence requires evidence; missing information is not zero. All occurred operations retain their actual flows and loads even when permission, tests or acceptance fail.

#### Inputs

##### Product flows

###### Laminated sugar-maple ski-core blank (`maple_core_blank`)

Purchased laminated core blank, CNC perimeter and thickness-profile shaping on site. Retain actual laminate/adhesive/moisture/supply state and offcuts; no log sawing, drying or upstream core gluing repeated. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_material_prep. No second quotient or additional physical purchase.

- Selected flow: Laminated sugar-maple ski-core blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_material_prep.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material_prep
- Sources: wagner-core

###### Sintered UHMWPE ski-base sheet (`base_sheet`)

One supplied sintered ski-base sheet, with actual carbon/additives and surface preparation declared. Cut on site; no resin sintering or polymer manufacture repeated. Do not bind fibre-shaped UHMWPE or a PVA-labelled identity. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_material_prep. No second quotient or additional physical purchase.

- Selected flow: Sintered UHMWPE ski-base sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_material_prep.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material_prep
- Sources: wagner-materials

###### P-tex polyethylene ski-sidewall strip (`sidewall_strip`)

One supplied sidewall strip, not base sheet or a second purchase of the same nested component. Record actual polymer grade/form and tip/tail closure pieces separately if supplied independently. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_material_prep. No second quotient or additional physical purchase.

- Selected flow: P-tex polyethylene ski-sidewall strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_material_prep.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material_prep
- Sources: wagner-custom

###### Hardened steel ski-edge strip (`steel_edge`)

Actual hardened supplied edge profile cut/shaped as needed for the declared ski; count steel edge component once, not raw steel plus the whole supplied edge. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_material_prep. No second quotient or additional physical purchase.

- Selected flow: Hardened steel ski-edge strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_material_prep.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material_prep
- Sources: wagner-base

###### Carbide milling-tool wear (`carbide_wear`)

Actual auxiliary milling wear only. Native qualifiers: At plant. Native qualifiers: Generic tool-wear consumable for milling. Native interface is carbide tool WEAR as auxiliary CNC milling consumable, not a whole new machine or arbitrary tool-per-ski factor. Match actual carbide and milling route. Record full installed/new/removed tool custody separately; never buy full tool and the same wear burden twice. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_material_prep. No second quotient or additional physical purchase.

- Selected flow: Carbide cutting tool `94633cf9-686a-4903-b879-b65be812ba1e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_material_prep.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material_prep
- Sources: wagner-core

###### Grid electricity (`prep_electricity`)

Meter actual operation and associated start/stop, idle, ventilation, cleanup, test and rework electricity. Electric press/infrared heat is included in its electrical meter, never a second purchased heat or steam. Native qualifiers: 1–35 kV. Native qualifiers: consumption mix, to user. Native qualifiers: grid-average electricity supply. Use only an actual 1–35 kV grid-average consumption-mix supply to user. Native reference is Net calorific value/MJ used as extensive electrical energy, not kg or a fuel purchase. Supplier geography/period and transformation boundary remain to be matched; lower voltage or dedicated generation needs another compatible atomic row. No waste-incineration identity or automatic upstream-loss add-on. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_utilities_prep. No second quotient or additional physical purchase.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole section-8 quotient result x_i; cp_utilities_prep.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities_prep
- Sources: ilcd-attributional-2010

###### Treated industrial supply water (`prep_water`)

Conditional actual purchased water for this operation, cleaning/cooling or humidity control. Keep true supply state/provider, raw volume or wet mass and measured density; gross water is not electrical/heat energy. No Brazilian HIPS or Hong Kong water identity is presumed. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_utilities_prep. No second quotient or additional physical purchase.

- Selected flow: Treated industrial supply water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_utilities_prep.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities_prep
- Sources: ilcd-attributional-2010

###### Treatment service for laminated maple-core machining waste (`core_shavings_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_waste_prep. No second quotient or additional physical purchase.

- Selected flow: Treatment service for laminated maple-core machining waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_prep.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_prep
- Sources: ilcd-attributional-2010

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Laminated maple-core machining waste (`core_shavings`)

Actual segregated wet machining outlet including existing core adhesive, not untreated pure lumber by assumption. Preserve actual manufacturing and treatment burdens despite sale/export/failure; a true separate function needs an explicit justified handover, never automatic subtraction. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_waste_prep.

- Selected flow: Laminated maple-core machining waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_prep.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_prep
- Sources: wagner-core; ilcd-attributional-2010

##### Elementary flows

### Process: Wet layup and electrically heated pressing/curing (`laminate`)

All cards inherit the full reference configuration, actual applicability condition and sections 4/5/7/8/9. A conditional absence requires evidence; missing information is not zero. All occurred operations retain their actual flows and loads even when permission, tests or acceptance fail.

#### Inputs

##### Product flows

###### Dry woven glass-fibre cloth (`glass_cloth`)

One actual dry woven reinforcement cloth supply; cutting and wet-out on site. Finished supplied prepreg is outside this wet-cloth route; never buy cloth and its whole prepreg together. No default layer count, areal mass or glass/resin fraction. Native qualifiers: Production mix, at plant. Native qualifiers: Finished product, manufactured. Dry woven glass cloth only: no yarn, wool, stitched nonwoven, prepreg or cured composite. Native comment mentions textile class 27/271; disclose that isolated taxonomy text but do not infer a different physical identity or ignore a material/form conflict. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_material_laminate. No second quotient or additional physical purchase.

- Selected flow: Woven fabrics (including narrow fabrics) of glass fibres `59caf1b9-5a05-4eef-8ba2-bc94aa28f43f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_material_laminate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material_laminate
- Sources: wagner-fiberglass

###### Formulated epoxy laminating resin component A (`epoxy_a`)

Whole supplied resin-side preparation used in actual wet layup. Supplier formulation and resin chemistry must be established; do not infer DGEBA from the word epoxy. Measure mix loss/pot residue and separate purchased hardener. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_material_laminate. No second quotient or additional physical purchase.

- Selected flow: Formulated epoxy laminating resin component A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_material_laminate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material_laminate
- Sources: wagner-press

###### Epoxy curing-agent preparation component B (`hardener_b`)

One actual supplied curing-agent formulation for the specified epoxy system; chemical family and mixing requirements come from its true supplier, not a guessed pure amine. On-site mixing energy, loss and cure residues remain foreground. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_material_laminate. No second quotient or additional physical purchase.

- Selected flow: Epoxy curing-agent preparation component B
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_material_laminate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material_laminate
- Sources: wagner-press

###### Decorated nylon ski-topsheet sheet (`nylon_topsheet`)

Purchased decorated nylon topsheet is the final layup layer; supplier printing/dye, transfer paper and energy are upstream in that one article. No on-site printing/dye purchase or reapplication is assumed. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_material_laminate. No second quotient or additional physical purchase.

- Selected flow: Decorated nylon ski-topsheet sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_material_laminate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material_laminate
- Sources: wagner-graphics

###### Vulcanised rubber ski-damping strip (`rubber_damping`)

Conditional actual supplied rubber damping strip if present in the approved BOM; not a tyre compound, assumed thickness or mandatory extra layer. If no such part is used, retain evidence of absence. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_material_laminate. No second quotient or additional physical purchase.

- Selected flow: Vulcanised rubber ski-damping strip
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_material_laminate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_material_laminate
- Sources: wagner-factory

###### Grid electricity (`laminate_electricity`)

Meter actual operation and associated start/stop, idle, ventilation, cleanup, test and rework electricity. Electric press/infrared heat is included in its electrical meter, never a second purchased heat or steam. Native qualifiers: 1–35 kV. Native qualifiers: consumption mix, to user. Native qualifiers: grid-average electricity supply. Use only an actual 1–35 kV grid-average consumption-mix supply to user. Native reference is Net calorific value/MJ used as extensive electrical energy, not kg or a fuel purchase. Supplier geography/period and transformation boundary remain to be matched; lower voltage or dedicated generation needs another compatible atomic row. No waste-incineration identity or automatic upstream-loss add-on. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_utilities_laminate. No second quotient or additional physical purchase.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole section-8 quotient result x_i; cp_utilities_laminate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities_laminate
- Sources: wagner-press

###### Treated industrial supply water (`laminate_water`)

Conditional actual purchased water for this operation, cleaning/cooling or humidity control. Keep true supply state/provider, raw volume or wet mass and measured density; gross water is not electrical/heat energy. No Brazilian HIPS or Hong Kong water identity is presumed. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_utilities_laminate. No second quotient or additional physical purchase.

- Selected flow: Treated industrial supply water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_utilities_laminate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities_laminate
- Sources: ilcd-attributional-2010

###### Treatment service for uncured epoxy-mix waste (`uncured_resin_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_waste_laminate. No second quotient or additional physical purchase.

- Selected flow: Treatment service for uncured epoxy-mix waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_laminate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_laminate
- Sources: ilcd-attributional-2010

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Uncured epoxy-mix waste (`uncured_resin`)

One actual pot-residue/uncured mixture outlet; resin/hardener subaccounts are not additional waste totals. Preserve actual manufacturing and treatment burdens despite sale/export/failure; a true separate function needs an explicit justified handover, never automatic subtraction. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_waste_laminate.

- Selected flow: Uncured epoxy-mix waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_laminate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_laminate
- Sources: wagner-press; ilcd-attributional-2010

##### Elementary flows

### Process: Trim base grind edge finish wax and first release (`finish`)

All cards inherit the full reference configuration, actual applicability condition and sections 4/5/7/8/9. A conditional absence requires evidence; missing information is not zero. All occurred operations retain their actual flows and loads even when permission, tests or acceptance fail.

#### Inputs

##### Product flows

###### Prepared soft ski-conditioning wax (`soft_wax`)

Whole supplied soft base-conditioning wax, applied at finishing. Measure supplied/retained/removed wax and any real vapour independently, not a pure paraffin assumption. Native qualifiers: Production mix, at plant. Native qualifiers: Finished product, manufactured. One supplied prepared ski-wax formulation for this card alone, not all waxes or its constituent chemicals. Composition, fluorination status, supplier and intended conditioning/running grade require real specification; native family imposes no fixed composition or performance. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_finish. No second quotient or additional physical purchase.

- Selected flow: Artificial waxes and prepared waxes `554ecf09-e83f-4f0d-b777-342cf04a7643`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_finish
- Sources: wagner-finish

###### Prepared ski-running wax (`running_wax`)

A separate actual temperature-specific running-wax formulation followed by real infrared heating and brushing. No prescribed wax mass, temperature, dwell time, fluorination or glide-life claim. Native qualifiers: Production mix, at plant. Native qualifiers: Finished product, manufactured. One supplied prepared ski-wax formulation for this card alone, not all waxes or its constituent chemicals. Composition, fluorination status, supplier and intended conditioning/running grade require real specification; native family imposes no fixed composition or performance. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_finish. No second quotient or additional physical purchase.

- Selected flow: Artificial waxes and prepared waxes `554ecf09-e83f-4f0d-b777-342cf04a7643`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_finish
- Sources: wagner-finish

###### Steel band-saw blade (`saw_blade`)

Actual blade consumption for scarf/flash trim. Native qualifiers: production mix, at plant, GLO. Native qualifiers: auxiliary cutting consumable for sawing or shearing. Native cutting consumable is steel saw blade/shear knife, GLO production mix, at plant, with no wear rate. This card selects actual band-saw blade consumption for trimming; not a carbide cutter or whole bandsaw. Full new/used custody and service are separate and disjoint. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_finish. No second quotient or additional physical purchase.

- Selected flow: Steel saw blades or shear knives `970801c9-08c1-4d9c-999d-4b66609430be`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_finish
- Sources: wagner-finish

###### Ski-finishing abrasive belt (`abrasive_belt`)

Actual whole belt with measured grit/backing/binder and service use; no CN-specific provider assumed. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_finish. No second quotient or additional physical purchase.

- Selected flow: Ski-finishing abrasive belt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_finish
- Sources: wagner-finish

###### Ski-base grinding stone (`grinding_stone`)

Whole actual stone for base structuring; no unsupported abrasive chemistry, grade or wear rate. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_finish. No second quotient or additional physical purchase.

- Selected flow: Ski-base grinding stone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_finish
- Sources: wagner-finish

###### Rubber-bonded gummy edge stone (`gummy_stone`)

One actual supplied gummy stone for tip/tail edge detuning. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_finish. No second quotient or additional physical purchase.

- Selected flow: Rubber-bonded gummy edge stone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_finish
- Sources: wagner-finish

###### Diamond-coated edge-finishing stone (`diamond_stone`)

One supplied diamond-coated tool article, not loose industrial diamond. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_finish. No second quotient or additional physical purchase.

- Selected flow: Diamond-coated edge-finishing stone
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_finish
- Sources: wagner-finish

###### Ski-wax rotary brush (`roto_brush`)

Whole actual rotary brush for buffing, with its real bristle/body composition and measured service. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_finish. No second quotient or additional physical purchase.

- Selected flow: Ski-wax rotary brush
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_finish
- Sources: wagner-finish

###### Grid electricity (`finish_electricity`)

Meter actual operation and associated start/stop, idle, ventilation, cleanup, test and rework electricity. Electric press/infrared heat is included in its electrical meter, never a second purchased heat or steam. Native qualifiers: 1–35 kV. Native qualifiers: consumption mix, to user. Native qualifiers: grid-average electricity supply. Use only an actual 1–35 kV grid-average consumption-mix supply to user. Native reference is Net calorific value/MJ used as extensive electrical energy, not kg or a fuel purchase. Supplier geography/period and transformation boundary remain to be matched; lower voltage or dedicated generation needs another compatible atomic row. No waste-incineration identity or automatic upstream-loss add-on. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_utilities_finish. No second quotient or additional physical purchase.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole section-8 quotient result x_i; cp_utilities_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities_finish
- Sources: ilcd-attributional-2010

###### Treated industrial supply water (`finish_water`)

Conditional actual purchased water for this operation, cleaning/cooling or humidity control. Keep true supply state/provider, raw volume or wet mass and measured density; gross water is not electrical/heat energy. No Brazilian HIPS or Hong Kong water identity is presumed. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_utilities_finish. No second quotient or additional physical purchase.

- Selected flow: Treated industrial supply water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_utilities_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities_finish
- Sources: ilcd-attributional-2010

###### Aqueous equipment-cleaning preparation (`cleaner`)

Conditional whole actual supplied preparation; identify formulation before use. Water already inside it is a subledger, separate dilution water is an actual additional flow. Collect actual mixing/cleanup loss; no printing-ink-cleaner or metal-ore substitute. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_finish. No second quotient or additional physical purchase.

- Selected flow: Aqueous equipment-cleaning preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_finish
- Sources: ilcd-attributional-2010

###### Grinding-coolant concentrate preparation (`coolant`)

Conditional whole actual supplied preparation; identify formulation before use. Water already inside it is a subledger, separate dilution water is an actual additional flow. Collect actual mixing/cleanup loss; no printing-ink-cleaner or metal-ore substitute. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_finish. No second quotient or additional physical purchase.

- Selected flow: Grinding-coolant concentrate preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_finish
- Sources: ilcd-attributional-2010

###### Treatment service for cured laminated-ski trim waste (`trim_waste_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_waste_finish. No second quotient or additional physical purchase.

- Selected flow: Treatment service for cured laminated-ski trim waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_finish
- Sources: ilcd-attributional-2010

###### Treatment service for wet ski-grinding sludge (`grinding_sludge_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_waste_finish. No second quotient or additional physical purchase.

- Selected flow: Treatment service for wet ski-grinding sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_finish
- Sources: ilcd-attributional-2010

###### Treatment service for ski-finishing cleaning wastewater (`process_wastewater_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_waste_finish. No second quotient or additional physical purchase.

- Selected flow: Treatment service for ski-finishing cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_finish
- Sources: ilcd-attributional-2010

###### Treatment service for rejected laminated alpine ski (`rejected_ski_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_waste_finish. No second quotient or additional physical purchase.

- Selected flow: Treatment service for rejected laminated alpine ski
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_finish
- Sources: ilcd-attributional-2010

###### Treatment service for spent ski-finishing abrasive belt (`spent_abrasive_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_attribution; N_i = A_m_i; cp_waste_finish. No second quotient or additional physical purchase.

- Selected flow: Treatment service for spent ski-finishing abrasive belt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_finish
- Sources: ilcd-attributional-2010

##### Waste flows

##### Elementary flows

###### Molecular oxygen (`finish_o2_in`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_finish.

- Selected flow: Molecular oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_finish
- Sources: ilcd-attributional-2010

###### Molecular dinitrogen (`finish_n2_in`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. CAS 7727-37-9. Native compartment: Resources / Resources from air / Renewable element resources from air. Molecular N2 resource from air only; native CAS 7727-37-9 excludes total nitrogen, NOx and dissolved/chemically bound nitrogen. No liquefied nitrogen supply or gas-production provider is implied. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_finish.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_finish
- Sources: ilcd-attributional-2010

###### Stable argon gas (`finish_ar_in`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_finish.

- Selected flow: Stable argon gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_finish
- Sources: ilcd-attributional-2010

###### Water vapour (`finish_h2o_in`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_finish.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_finish
- Sources: ilcd-attributional-2010

#### Outputs

##### Product flows

###### Complete first-released alpine ski (`finished_ski`)

Unique finished reference output after actual cure, shape/base/edge finishing, bevel check, waxing and the declared manufacturer/specification release checks. Count only first release; retained released FG is included. An actual single ski is complete in its declared unbound component boundary; a pair is two separately identified skis, never one unspecified equipment set. Native qualifiers: Production mix, at plant. Native qualifiers: Finished product, manufactured. This broad manufactured Product family is restricted here to one complete unbound wood-core glass/epoxy alpine ski, not poles, bindings, skates, snowboard, ski blank or components. No specific material, grade, phase, geography or provider is asserted by the native record; the primary product boundary and actual BOM supply that specificity. Native reference is Mass/kg; packaging and bindings are excluded from net ski mass.

- Selected flow: Snow-skis and other snow-ski equipment, ice-skates and roller-skates `218cc119-aab7-4ba5-b8b0-2c05509e2df3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_release
- Sources: wagner-custom; wagner-finish

##### Waste flows

###### Cured laminated-ski trim waste (`trim_waste`)

One actual mixed flash/trim outlet with glass, epoxy and any actual wood/polymer/steel fractions measured disjointly; not boatyard-specific GRP. Preserve actual manufacturing and treatment burdens despite sale/export/failure; a true separate function needs an explicit justified handover, never automatic subtraction. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_waste_finish.

- Selected flow: Cured laminated-ski trim waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_finish
- Sources: wagner-finish; ilcd-attributional-2010

###### Wet ski-grinding sludge (`grinding_sludge`)

Only a real separate wet grinding outlet, including actual carrier water, wax and abrasive; distinguish wastewater and dry collected dust. No generic sludge composition is invented. Preserve actual manufacturing and treatment burdens despite sale/export/failure; a true separate function needs an explicit justified handover, never automatic subtraction. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_waste_finish.

- Selected flow: Wet ski-grinding sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_finish
- Sources: wagner-finish; ilcd-attributional-2010

###### Ski-finishing cleaning wastewater (`process_wastewater`)

One actually separate wastewater outlet; wet total includes solutes once, COD is an indicator not a named chemical. Preserve actual manufacturing and treatment burdens despite sale/export/failure; a true separate function needs an explicit justified handover, never automatic subtraction. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_waste_finish.

- Selected flow: Ski-finishing cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_finish
- Sources: wagner-finish; ilcd-attributional-2010

###### Rejected laminated alpine ski (`rejected_ski`)

Actual separate rejected whole ski or destructive sample outlet only. If included in trim/sludge outlet, use its independent source pool without a second Waste total. No Q or automatic credit. Preserve actual manufacturing and treatment burdens despite sale/export/failure; a true separate function needs an explicit justified handover, never automatic subtraction. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_waste_finish.

- Selected flow: Rejected laminated alpine ski
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_finish
- Sources: wagner-finish; ilcd-attributional-2010

###### Spent ski-finishing abrasive belt (`spent_abrasive`)

Actual worn belt outlet if separately removed; whole backing/binder/grit once and dust fractions disjoint. Preserve actual manufacturing and treatment burdens despite sale/export/failure; a true separate function needs an explicit justified handover, never automatic subtraction. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_waste_finish.

- Selected flow: Spent ski-finishing abrasive belt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_finish
- Sources: wagner-finish; ilcd-attributional-2010

##### Elementary flows

###### Molecular oxygen (`finish_o2_out`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. CAS 7782-44-7. Native compartment: Emissions / Emissions to air / Emissions to air, unspecified. Molecular gaseous species only; non-long-term unspecified-air emission, not an atmospheric-resource input, dissolved constituent, aggregate air or purchased gas. Match actual receiving medium; resolve a more specific compartment when measured. Native Mass/kg is extensive; gross throughflow is distinct from formation or net uptake. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_finish.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_finish
- Sources: ilcd-attributional-2010

###### Molecular dinitrogen (`finish_n2_out`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. CAS 7727-37-9. Native compartment: Emissions / Emissions to air / Emissions to air, unspecified. Molecular gaseous species only; non-long-term unspecified-air emission, not an atmospheric-resource input, dissolved constituent, aggregate air or purchased gas. Match actual receiving medium; resolve a more specific compartment when measured. Native Mass/kg is extensive; gross throughflow is distinct from formation or net uptake. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_finish.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_finish
- Sources: ilcd-attributional-2010

###### Stable argon gas (`finish_ar_out`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_finish.

- Selected flow: Stable argon gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_finish
- Sources: ilcd-attributional-2010

###### Water vapour (`finish_h2o_out`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. CAS 7732-18-5. Native compartment: Emissions / Emissions to air / Emissions to air, unspecified. Molecular gaseous species only; non-long-term unspecified-air emission, not an atmospheric-resource input, dissolved constituent, aggregate air or purchased gas. Match actual receiving medium; resolve a more specific compartment when measured. Native Mass/kg is extensive; gross throughflow is distinct from formation or net uptake. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_finish.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_finish.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_finish
- Sources: ilcd-attributional-2010

### Process: Actual postrelease custody and service (`service`)

All cards inherit the full reference configuration, actual applicability condition and sections 4/5/7/8/9. A conditional absence requires evidence; missing information is not zero. All occurred operations retain their actual flows and loads even when permission, tests or acceptance fail.

#### Inputs

##### Product flows

###### Grid electricity (`service_electricity`)

Meter actual operation and associated start/stop, idle, ventilation, cleanup, test and rework electricity. Electric press/infrared heat is included in its electrical meter, never a second purchased heat or steam. Native qualifiers: 1–35 kV. Native qualifiers: consumption mix, to user. Native qualifiers: grid-average electricity supply. Use only an actual 1–35 kV grid-average consumption-mix supply to user. Native reference is Net calorific value/MJ used as extensive electrical energy, not kg or a fuel purchase. Supplier geography/period and transformation boundary remain to be matched; lower voltage or dedicated generation needs another compatible atomic row. No waste-incineration identity or automatic upstream-loss add-on. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_utilities_service. No second quotient or additional physical purchase.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the sole section-8 quotient result x_i; cp_utilities_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities_service
- Sources: ilcd-attributional-2010

###### Treated industrial supply water (`service_water`)

Conditional actual purchased water for this operation, cleaning/cooling or humidity control. Keep true supply state/provider, raw volume or wet mass and measured density; gross water is not electrical/heat energy. No Brazilian HIPS or Hong Kong water identity is presumed. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_utilities_service. No second quotient or additional physical purchase.

- Selected flow: Treated industrial supply water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_utilities_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_utilities_service
- Sources: ilcd-attributional-2010

###### Complete released alpine ski received for service (`service_ski_received`)

Physical custody leg only, paired to original serial/cohort and gross shipment/return records. This is not an external purchase, new first-release Q or a reason to subtract held-FG manufacturing. Cross-process same-product handoff is paired and cancels on consolidation; actual external returns are not silently cancelled. Native qualifiers: Production mix, at plant. Native qualifiers: Finished product, manufactured. This broad manufactured Product family is restricted here to one complete unbound wood-core glass/epoxy alpine ski, not poles, bindings, skates, snowboard, ski blank or components. No specific material, grade, phase, geography or provider is asserted by the native record; the primary product boundary and actual BOM supply that specificity. Native reference is Mass/kg; packaging and bindings are excluded from net ski mass. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_service.

- Selected flow: Snow-skis and other snow-ski equipment, ice-skates and roller-skates `218cc119-aab7-4ba5-b8b0-2c05509e2df3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_service
- Sources: ilcd-attributional-2010

##### Waste flows

##### Elementary flows

###### Molecular oxygen (`service_o2_in`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_service.

- Selected flow: Molecular oxygen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_service
- Sources: ilcd-attributional-2010

###### Molecular dinitrogen (`service_n2_in`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. CAS 7727-37-9. Native compartment: Resources / Resources from air / Renewable element resources from air. Molecular N2 resource from air only; native CAS 7727-37-9 excludes total nitrogen, NOx and dissolved/chemically bound nitrogen. No liquefied nitrogen supply or gas-production provider is implied. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_service.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_service
- Sources: ilcd-attributional-2010

###### Stable argon gas (`service_ar_in`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_service.

- Selected flow: Stable argon gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_service
- Sources: ilcd-attributional-2010

###### Water vapour (`service_h2o_in`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_service.

- Selected flow: Water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_service
- Sources: ilcd-attributional-2010

#### Outputs

##### Product flows

###### Complete released alpine ski dispatched (`service_ski_dispatched`)

Physical custody leg only, paired to original serial/cohort and gross shipment/return records. This is not an external purchase, new first-release Q or a reason to subtract held-FG manufacturing. Cross-process same-product handoff is paired and cancels on consolidation; actual external returns are not silently cancelled. Native qualifiers: Production mix, at plant. Native qualifiers: Finished product, manufactured. This broad manufactured Product family is restricted here to one complete unbound wood-core glass/epoxy alpine ski, not poles, bindings, skates, snowboard, ski blank or components. No specific material, grade, phase, geography or provider is asserted by the native record; the primary product boundary and actual BOM supply that specificity. Native reference is Mass/kg; packaging and bindings are excluded from net ski mass. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_service.

- Selected flow: Snow-skis and other snow-ski equipment, ice-skates and roller-skates `218cc119-aab7-4ba5-b8b0-2c05509e2df3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_service
- Sources: ilcd-attributional-2010

##### Waste flows

##### Elementary flows

###### Molecular oxygen (`service_o2_out`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. CAS 7782-44-7. Native compartment: Emissions / Emissions to air / Emissions to air, unspecified. Molecular gaseous species only; non-long-term unspecified-air emission, not an atmospheric-resource input, dissolved constituent, aggregate air or purchased gas. Match actual receiving medium; resolve a more specific compartment when measured. Native Mass/kg is extensive; gross throughflow is distinct from formation or net uptake. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_service.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_service
- Sources: ilcd-attributional-2010

###### Molecular dinitrogen (`service_n2_out`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. CAS 7727-37-9. Native compartment: Emissions / Emissions to air / Emissions to air, unspecified. Molecular gaseous species only; non-long-term unspecified-air emission, not an atmospheric-resource input, dissolved constituent, aggregate air or purchased gas. Match actual receiving medium; resolve a more specific compartment when measured. Native Mass/kg is extensive; gross throughflow is distinct from formation or net uptake. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_service.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_service
- Sources: ilcd-attributional-2010

###### Stable argon gas (`service_ar_out`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_service.

- Selected flow: Stable argon gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_service
- Sources: ilcd-attributional-2010

###### Water vapour (`service_h2o_out`)

Record this one actual gaseous species across the declared physical gate, including ordinary ventilation, compressed-air losses and natural storage adsorption/desorption where relevant. Gross inlet/outlet and net formation are distinct; do not duplicate aggregate air plus these species. Humidity exchange needs no repair permission. Never derive species from NOx/VOC/COD/total dust or one residual used to fit two unknowns. CAS 7732-18-5. Native compartment: Emissions / Emissions to air / Emissions to air, unspecified. Molecular gaseous species only; non-long-term unspecified-air emission, not an atmospheric-resource input, dissolved constituent, aggregate air or purchased gas. Match actual receiving medium; resolve a more specific compartment when measured. Native Mass/kg is extensive; gross throughflow is distinct from formation or net uptake. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_service.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_service
- Sources: ilcd-attributional-2010

### Process: Packaging custody and attributable service (`packaging`)

All cards inherit the full reference configuration, actual applicability condition and sections 4/5/7/8/9. A conditional absence requires evidence; missing information is not zero. All occurred operations retain their actual flows and loads even when permission, tests or acceptance fail.

#### Inputs

##### Product flows

###### Corrugated ski-shipping carton (`carton_p`)

Conditional opening wet custody stock for this one actual corrugated ski-shipping carton pool; record FULL wet physical V_carton_P, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Corrugated ski-shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Corrugated ski-shipping carton (`carton_i`)

Conditional external new ingress for this one actual corrugated ski-shipping carton pool; record FULL wet physical V_carton_I, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Corrugated ski-shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Corrugated ski-shipping carton (`carton_er`)

Conditional external return received for this one actual corrugated ski-shipping carton pool; record FULL wet physical V_carton_ER, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Corrugated ski-shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Corrugated ski-shipping carton (`carton_charge`)

This card carries only the one attributable upstream/service burden of the same real article, linked to the six-leg custody ledger and actual owner. It is not additional physical ingress or purchase beside I. Only unused/unassigned closing charge carries; service already performed for the original cohort is retained even for held FG. No fixed number of reuse cycles or lifetime. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_pack. No second quotient or additional physical purchase.

- Selected flow: Corrugated ski-shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Polyethylene ski sleeve (`film_p`)

Conditional opening wet custody stock for this one actual polyethylene ski sleeve pool; record FULL wet physical V_film_P, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. Native qualifiers: production mix，at plant. CAS 9002-88-4 polyethylene film for one actual sleeve/wrap pool; no fixed branching or film-making route is imposed. Native discussion compares PET with PE; this is not permission to identify a PET sleeve as PE. Whole supplied film and embedded additives are purchased once. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Polyethylene ski sleeve (`film_i`)

Conditional external new ingress for this one actual polyethylene ski sleeve pool; record FULL wet physical V_film_I, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. Native qualifiers: production mix，at plant. CAS 9002-88-4 polyethylene film for one actual sleeve/wrap pool; no fixed branching or film-making route is imposed. Native discussion compares PET with PE; this is not permission to identify a PET sleeve as PE. Whole supplied film and embedded additives are purchased once. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Polyethylene ski sleeve (`film_er`)

Conditional external return received for this one actual polyethylene ski sleeve pool; record FULL wet physical V_film_ER, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. Native qualifiers: production mix，at plant. CAS 9002-88-4 polyethylene film for one actual sleeve/wrap pool; no fixed branching or film-making route is imposed. Native discussion compares PET with PE; this is not permission to identify a PET sleeve as PE. Whole supplied film and embedded additives are purchased once. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Polyethylene ski sleeve (`film_charge`)

This card carries only the one attributable upstream/service burden of the same real article, linked to the six-leg custody ledger and actual owner. It is not additional physical ingress or purchase beside I. Only unused/unassigned closing charge carries; service already performed for the original cohort is retained even for held FG. No fixed number of reuse cycles or lifetime. Native qualifiers: production mix，at plant. CAS 9002-88-4 polyethylene film for one actual sleeve/wrap pool; no fixed branching or film-making route is imposed. Native discussion compares PET with PE; this is not permission to identify a PET sleeve as PE. Whole supplied film and embedded additives are purchased once. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_pack. No second quotient or additional physical purchase.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Wooden shipping pallet (`pallet_p`)

Conditional opening wet custody stock for this one actual wooden shipping pallet pool; record FULL wet physical V_pallet_P, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. Native qualifiers: Production mix, in the lumber mill. Native qualifiers: Wooden boards/slats. Whole wooden board/slat pallet at lumber-mill production interface, not a repair plank, nail, plastic pallet or photovoltaic-installation-specific identity. Declare actual wood species, wet mass, included components and compatible upstream provider. No service life or fixed pallet count-to-mass. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Wooden shipping pallet (`pallet_i`)

Conditional external new ingress for this one actual wooden shipping pallet pool; record FULL wet physical V_pallet_I, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. Native qualifiers: Production mix, in the lumber mill. Native qualifiers: Wooden boards/slats. Whole wooden board/slat pallet at lumber-mill production interface, not a repair plank, nail, plastic pallet or photovoltaic-installation-specific identity. Declare actual wood species, wet mass, included components and compatible upstream provider. No service life or fixed pallet count-to-mass. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Wooden shipping pallet (`pallet_er`)

Conditional external return received for this one actual wooden shipping pallet pool; record FULL wet physical V_pallet_ER, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. Native qualifiers: Production mix, in the lumber mill. Native qualifiers: Wooden boards/slats. Whole wooden board/slat pallet at lumber-mill production interface, not a repair plank, nail, plastic pallet or photovoltaic-installation-specific identity. Declare actual wood species, wet mass, included components and compatible upstream provider. No service life or fixed pallet count-to-mass. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Wooden shipping pallet (`pallet_charge`)

This card carries only the one attributable upstream/service burden of the same real article, linked to the six-leg custody ledger and actual owner. It is not additional physical ingress or purchase beside I. Only unused/unassigned closing charge carries; service already performed for the original cohort is retained even for held FG. No fixed number of reuse cycles or lifetime. Native qualifiers: Production mix, in the lumber mill. Native qualifiers: Wooden boards/slats. Whole wooden board/slat pallet at lumber-mill production interface, not a repair plank, nail, plastic pallet or photovoltaic-installation-specific identity. Declare actual wood species, wet mass, included components and compatible upstream provider. No service life or fixed pallet count-to-mass. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_pack. No second quotient or additional physical purchase.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Treatment service for discarded corrugated ski-shipping carton (`carton_w_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_packaging. No second quotient or additional physical purchase.

- Selected flow: Treatment service for discarded corrugated ski-shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_packaging
- Sources: ilcd-attributional-2010

###### Treatment service for discarded polyethylene ski sleeve (`film_w_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_packaging. No second quotient or additional physical purchase.

- Selected flow: Treatment service for discarded polyethylene ski sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_packaging
- Sources: ilcd-attributional-2010

###### Treatment service for discarded wooden shipping pallet (`pallet_w_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_packaging. No second quotient or additional physical purchase.

- Selected flow: Treatment service for discarded wooden shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_packaging
- Sources: ilcd-attributional-2010

###### Treatment service for mixed ski-shipping packaging waste (`mixed_packaging_waste_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_packaging. No second quotient or additional physical purchase.

- Selected flow: Treatment service for mixed ski-shipping packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_packaging
- Sources: ilcd-attributional-2010

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Corrugated ski-shipping carton (`carton_s`)

Conditional gross dispatch out for this one actual corrugated ski-shipping carton pool; record FULL wet physical V_carton_S, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Corrugated ski-shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Corrugated ski-shipping carton (`carton_eo`)

Conditional external return out for this one actual corrugated ski-shipping carton pool; record FULL wet physical V_carton_EO, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Corrugated ski-shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Polyethylene ski sleeve (`film_s`)

Conditional gross dispatch out for this one actual polyethylene ski sleeve pool; record FULL wet physical V_film_S, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. Native qualifiers: production mix，at plant. CAS 9002-88-4 polyethylene film for one actual sleeve/wrap pool; no fixed branching or film-making route is imposed. Native discussion compares PET with PE; this is not permission to identify a PET sleeve as PE. Whole supplied film and embedded additives are purchased once. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Polyethylene ski sleeve (`film_eo`)

Conditional external return out for this one actual polyethylene ski sleeve pool; record FULL wet physical V_film_EO, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. Native qualifiers: production mix，at plant. CAS 9002-88-4 polyethylene film for one actual sleeve/wrap pool; no fixed branching or film-making route is imposed. Native discussion compares PET with PE; this is not permission to identify a PET sleeve as PE. Whole supplied film and embedded additives are purchased once. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Wooden shipping pallet (`pallet_s`)

Conditional gross dispatch out for this one actual wooden shipping pallet pool; record FULL wet physical V_pallet_S, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. Native qualifiers: Production mix, in the lumber mill. Native qualifiers: Wooden boards/slats. Whole wooden board/slat pallet at lumber-mill production interface, not a repair plank, nail, plastic pallet or photovoltaic-installation-specific identity. Declare actual wood species, wet mass, included components and compatible upstream provider. No service life or fixed pallet count-to-mass. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Wooden shipping pallet (`pallet_eo`)

Conditional external return out for this one actual wooden shipping pallet pool; record FULL wet physical V_pallet_EO, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. Native qualifiers: Production mix, in the lumber mill. Native qualifiers: Wooden boards/slats. Whole wooden board/slat pallet at lumber-mill production interface, not a repair plank, nail, plastic pallet or photovoltaic-installation-specific identity. Declare actual wood species, wet mass, included components and compatible upstream provider. No service life or fixed pallet count-to-mass. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

##### Waste flows

###### Discarded corrugated ski-shipping carton (`carton_w`)

Conditional actual discard outlet for this one actual corrugated ski-shipping carton pool; record FULL wet physical V_carton_W, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Discarded corrugated ski-shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Discarded polyethylene ski sleeve (`film_w`)

Conditional actual discard outlet for this one actual polyethylene ski sleeve pool; record FULL wet physical V_film_W, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Discarded polyethylene ski sleeve
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Discarded wooden shipping pallet (`pallet_w`)

Conditional actual discard outlet for this one actual wooden shipping pallet pool; record FULL wet physical V_pallet_W, not stock-corrected consumption, assigned service or economic share. P is a stock event, not procurement. All opening/closing empty, attached-WIP, attached-FG and reusable states remain complete. Supplier-included ingress is measured even without separate invoice. Whole article includes actual water/components once; component bridge must be disjoint. X only deduplicates another same-side incoming/outgoing term; it never cancels real retained influx. Internal reuse is neither I nor ER. A real single mixed discard outlet uses one Waste card and disjoint pool-W subledger, not duplicate waste totals. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Discarded wooden shipping pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

###### Mixed ski-shipping packaging waste (`mixed_packaging_waste`)

Conditional only when actual discarded carton/PE-film/wood packaging shares ONE physical mixed outlet. Measure that real full wet stream and each disjoint material-pool W contribution; do not add the total and its source pools. Per-pool W cards then expose source-account events only, not separate external outlets. One actual treatment/provider owner applies; separate outlet cards/providers activate only for truly separate outlets. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_pack.

- Selected flow: Mixed ski-shipping packaging waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_pack.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_pack
- Sources: ilcd-attributional-2010

##### Elementary flows

### Process: Assets parts fluids and actual service (`assets`)

All cards inherit the full reference configuration, actual applicability condition and sections 4/5/7/8/9. A conditional absence requires evidence; missing information is not zero. All occurred operations retain their actual flows and loads even when permission, tests or acceptance fail.

#### Inputs

##### Product flows

###### Electrically heated ski press (`press_new`)

Conditional actual new receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Electrically heated ski press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Electrically heated ski press (`press_used`)

Conditional actual used receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Electrically heated ski press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Electrically heated ski press (`press_service`)

Only the measured attributable capital/repair/consumable service burden linked to the actual physical article, utilization and original cohort. Not another physical receipt or purchase. Dedicated service first; causal duration/intensity and justified residual allocation next. Carry only unused/unassigned charge, never already performed service for held FG. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_assets. No second quotient or additional physical purchase.

- Selected flow: Electrically heated ski press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: ilcd-attributional-2010

###### Steel ski-press cassette (`cassette_new`)

Conditional actual new receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Steel ski-press cassette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Steel ski-press cassette (`cassette_used`)

Conditional actual used receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Steel ski-press cassette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Steel ski-press cassette (`cassette_service`)

Only the measured attributable capital/repair/consumable service burden linked to the actual physical article, utilization and original cohort. Not another physical receipt or purchase. Dedicated service first; causal duration/intensity and justified residual allocation next. Carry only unused/unassigned charge, never already performed service for held FG. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_assets. No second quotient or additional physical purchase.

- Selected flow: Steel ski-press cassette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: ilcd-attributional-2010

###### Ski-press rubber airbag (`airbag_new`)

Conditional actual new receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Ski-press rubber airbag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Ski-press rubber airbag (`airbag_used`)

Conditional actual used receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Ski-press rubber airbag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Ski-press rubber airbag (`airbag_service`)

Only the measured attributable capital/repair/consumable service burden linked to the actual physical article, utilization and original cohort. Not another physical receipt or purchase. Dedicated service first; causal duration/intensity and justified residual allocation next. Carry only unused/unassigned charge, never already performed service for held FG. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_assets. No second quotient or additional physical purchase.

- Selected flow: Ski-press rubber airbag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: ilcd-attributional-2010

###### Sawn-wood pallet repair plank (`repair_plank_new`)

Conditional actual new receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Sawn-wood pallet repair plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Sawn-wood pallet repair plank (`repair_plank_used`)

Conditional actual used receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Sawn-wood pallet repair plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Sawn-wood pallet repair plank (`repair_plank_service`)

Only the measured attributable capital/repair/consumable service burden linked to the actual physical article, utilization and original cohort. Not another physical receipt or purchase. Dedicated service first; causal duration/intensity and justified residual allocation next. Carry only unused/unassigned charge, never already performed service for held FG. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_assets. No second quotient or additional physical purchase.

- Selected flow: Sawn-wood pallet repair plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: ilcd-attributional-2010

###### Steel pallet repair nail (`repair_nail_new`)

Conditional actual new receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Steel pallet repair nail (`repair_nail_used`)

Conditional actual used receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Steel pallet repair nail (`repair_nail_service`)

Only the measured attributable capital/repair/consumable service burden linked to the actual physical article, utilization and original cohort. Not another physical receipt or purchase. Dedicated service first; causal duration/intensity and justified residual allocation next. Carry only unused/unassigned charge, never already performed service for held FG. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_assets. No second quotient or additional physical purchase.

- Selected flow: Steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: ilcd-attributional-2010

###### Hydraulic-fluid top-up (`hydraulic_fill_new`)

Conditional actual new receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. Whole hydraulic-fluid formulation, mineral or synthetic base oil plus actual additives, for hydraulic power/lubrication/heat transfer only. Native reference is Volume/m3; preserve it and independently measure this fluid density at actual temperature for physical kg closure. No inferred water density, grease or coolant substitution; initial integral fill and top-up are disjoint. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Hydraulic-fluid top-up (`hydraulic_fill_used`)

Conditional actual used receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. Whole hydraulic-fluid formulation, mineral or synthetic base oil plus actual additives, for hydraulic power/lubrication/heat transfer only. Native reference is Volume/m3; preserve it and independently measure this fluid density at actual temperature for physical kg closure. No inferred water density, grease or coolant substitution; initial integral fill and top-up are disjoint. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Hydraulic-fluid top-up (`hydraulic_fill_service`)

Only the measured attributable capital/repair/consumable service burden linked to the actual physical article, utilization and original cohort. Not another physical receipt or purchase. Dedicated service first; causal duration/intensity and justified residual allocation next. Carry only unused/unassigned charge, never already performed service for held FG. Whole hydraulic-fluid formulation, mineral or synthetic base oil plus actual additives, for hydraulic power/lubrication/heat transfer only. Native reference is Volume/m3; preserve it and independently measure this fluid density at actual temperature for physical kg closure. No inferred water density, grease or coolant substitution; initial integral fill and top-up are disjoint. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_assets. No second quotient or additional physical purchase.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: ilcd-attributional-2010

###### Formulated lubricating grease (`grease_new`)

Conditional actual new receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Formulated lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Formulated lubricating grease (`grease_used`)

Conditional actual used receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Formulated lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Formulated lubricating grease (`grease_service`)

Only the measured attributable capital/repair/consumable service burden linked to the actual physical article, utilization and original cohort. Not another physical receipt or purchase. Dedicated service first; causal duration/intensity and justified residual allocation next. Carry only unused/unassigned charge, never already performed service for held FG. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_assets. No second quotient or additional physical purchase.

- Selected flow: Formulated lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: ilcd-attributional-2010

###### Dust-collection filter cartridge (`filter_new`)

Conditional actual new receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Dust-collection filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Dust-collection filter cartridge (`filter_used`)

Conditional actual used receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Dust-collection filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Dust-collection filter cartridge (`filter_service`)

Only the measured attributable capital/repair/consumable service burden linked to the actual physical article, utilization and original cohort. Not another physical receipt or purchase. Dedicated service first; causal duration/intensity and justified residual allocation next. Carry only unused/unassigned charge, never already performed service for held FG. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_assets. No second quotient or additional physical purchase.

- Selected flow: Dust-collection filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: ilcd-attributional-2010

###### Treated asset-repair supply water (`assets_water_in`)

Actual separate treated Product supply-water input or separately discharged Waste wastewater outlet in asset/part/pallet handling or repair where it occurs, as specified by this card direction/type; not direct natural-water abstraction or an elemental water release. A real reusable water Product return or true elementary release needs its own distinct card and actual receiving/thermal state before use. No fictional coolant/steam boiler. Natural vapour exchange is in the gas ledger. X only removes another incoming/outgoing flow overlap; retain new real water influx and full wet closing article/part mass together. Whole wet received article includes its existing water once. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_assets.

- Selected flow: Treated asset-repair supply water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_assets
- Sources: ilcd-attributional-2010

###### Treatment service for removed electrically heated ski press (`press_removed_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_assets. No second quotient or additional physical purchase.

- Selected flow: Treatment service for removed electrically heated ski press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_assets
- Sources: ilcd-attributional-2010

###### Treatment service for removed steel ski-press cassette (`cassette_removed_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_assets. No second quotient or additional physical purchase.

- Selected flow: Treatment service for removed steel ski-press cassette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_assets
- Sources: ilcd-attributional-2010

###### Treatment service for removed ski-press rubber airbag (`airbag_removed_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_assets. No second quotient or additional physical purchase.

- Selected flow: Treatment service for removed ski-press rubber airbag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_assets
- Sources: ilcd-attributional-2010

###### Treatment service for removed sawn-wood pallet repair plank (`repair_plank_removed_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_assets. No second quotient or additional physical purchase.

- Selected flow: Treatment service for removed sawn-wood pallet repair plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_assets
- Sources: ilcd-attributional-2010

###### Treatment service for removed steel pallet repair nail (`repair_nail_removed_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_assets. No second quotient or additional physical purchase.

- Selected flow: Treatment service for removed steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_assets
- Sources: ilcd-attributional-2010

###### Treatment service for removed hydraulic-fluid top-up (`hydraulic_fill_removed_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_assets. No second quotient or additional physical purchase.

- Selected flow: Treatment service for removed hydraulic-fluid top-up
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_assets
- Sources: ilcd-attributional-2010

###### Treatment service for removed formulated lubricating grease (`grease_removed_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_assets. No second quotient or additional physical purchase.

- Selected flow: Treatment service for removed formulated lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_assets
- Sources: ilcd-attributional-2010

###### Treatment service for removed dust-collection filter cartridge (`filter_removed_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_assets. No second quotient or additional physical purchase.

- Selected flow: Treatment service for removed dust-collection filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_assets
- Sources: ilcd-attributional-2010

###### Treatment service for asset-repair wastewater (`assets_water_out_treatment`)

Conditional actual provider service for this uniquely linked physical waste outlet only. Collect real receiver operation, native extensive service unit and justified activity conversion. One real mixed outlet gets one provider, with source-pool W not another total. On-site treatment instead needs all actual atomic inputs/outputs; no automatic recycling/energy credit or deduction of ordinary manufacturing waste burden. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient after calc_raw and calc_service; N_i = A_h_i; cp_waste_assets. No second quotient or additional physical purchase.

- Selected flow: Treatment service for asset-repair wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_waste_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_waste_assets
- Sources: ilcd-attributional-2010

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Returned electrically heated ski press (`press_returned`)

Actual externally returned reusable/qualified Product article or fluid only, not a Waste removal. Match real owner, new/used state, received/returned identity and qualification. Record FULL gross physical V with full wet stocks; no automatic new procurement, service credit or transferred burden. Conditional actual returned receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Returned electrically heated ski press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Returned steel ski-press cassette (`cassette_returned`)

Actual externally returned reusable/qualified Product article or fluid only, not a Waste removal. Match real owner, new/used state, received/returned identity and qualification. Record FULL gross physical V with full wet stocks; no automatic new procurement, service credit or transferred burden. Conditional actual returned receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Returned steel ski-press cassette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Returned ski-press rubber airbag (`airbag_returned`)

Actual externally returned reusable/qualified Product article or fluid only, not a Waste removal. Match real owner, new/used state, received/returned identity and qualification. Record FULL gross physical V with full wet stocks; no automatic new procurement, service credit or transferred burden. Conditional actual returned receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Returned ski-press rubber airbag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Returned sawn-wood pallet repair plank (`repair_plank_returned`)

Actual externally returned reusable/qualified Product article or fluid only, not a Waste removal. Match real owner, new/used state, received/returned identity and qualification. Record FULL gross physical V with full wet stocks; no automatic new procurement, service credit or transferred burden. Conditional actual returned receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Returned sawn-wood pallet repair plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Returned steel pallet repair nail (`repair_nail_returned`)

Actual externally returned reusable/qualified Product article or fluid only, not a Waste removal. Match real owner, new/used state, received/returned identity and qualification. Record FULL gross physical V with full wet stocks; no automatic new procurement, service credit or transferred burden. Conditional actual returned receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Returned steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Returned hydraulic-fluid top-up (`hydraulic_fill_returned`)

Actual externally returned reusable/qualified Product article or fluid only, not a Waste removal. Match real owner, new/used state, received/returned identity and qualification. Record FULL gross physical V with full wet stocks; no automatic new procurement, service credit or transferred burden. Conditional actual returned receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. Whole hydraulic-fluid formulation, mineral or synthetic base oil plus actual additives, for hydraulic power/lubrication/heat transfer only. Native reference is Volume/m3; preserve it and independently measure this fluid density at actual temperature for physical kg closure. No inferred water density, grease or coolant substitution; initial integral fill and top-up are disjoint. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Hydraulic Fluid `30691a38-a947-4b41-991e-194f6c9aa88f`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Returned formulated lubricating grease (`grease_returned`)

Actual externally returned reusable/qualified Product article or fluid only, not a Waste removal. Match real owner, new/used state, received/returned identity and qualification. Record FULL gross physical V with full wet stocks; no automatic new procurement, service credit or transferred burden. Conditional actual returned receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Returned formulated lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Returned dust-collection filter cartridge (`filter_returned`)

Actual externally returned reusable/qualified Product article or fluid only, not a Waste removal. Match real owner, new/used state, received/returned identity and qualification. Record FULL gross physical V with full wet stocks; no automatic new procurement, service credit or transferred burden. Conditional actual returned receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Returned dust-collection filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

##### Waste flows

###### Removed electrically heated ski press (`press_removed`)

Conditional actual removed receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Removed electrically heated ski press
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Removed steel ski-press cassette (`cassette_removed`)

Conditional actual removed receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Removed steel ski-press cassette
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Removed ski-press rubber airbag (`airbag_removed`)

Conditional actual removed receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Removed ski-press rubber airbag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Removed sawn-wood pallet repair plank (`repair_plank_removed`)

Conditional actual removed receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Removed sawn-wood pallet repair plank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Removed steel pallet repair nail (`repair_nail_removed`)

Conditional actual removed receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Removed steel pallet repair nail
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Removed hydraulic-fluid top-up (`hydraulic_fill_removed`)

Conditional actual removed receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Removed hydraulic-fluid top-up
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Removed formulated lubricating grease (`grease_removed`)

Conditional actual removed receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Removed formulated lubricating grease
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Removed dust-collection filter cartridge (`filter_removed`)

Conditional actual removed receipt/removal of this one article or fluid. Preserve full physical mass/volume and opening/closing installed/store wet stocks independently of current service burden. Integral parts/fluid in a received whole machine/article are not a second input; separately added real parts/fluids remain influx even when retained in closing stock. New/used histories, tests and disposition are explicit. Occurred unauthorized/failed work still retains all flows/loads; permission and posttests decide continuing conformity. No fixed asset lifetime or one machine per kg. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_assets.

- Selected flow: Removed dust-collection filter cartridge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_assets
- Sources: wagner-press; ilcd-attributional-2010

###### Asset-repair wastewater (`assets_water_out`)

Actual separate treated Product supply-water input or separately discharged Waste wastewater outlet in asset/part/pallet handling or repair where it occurs, as specified by this card direction/type; not direct natural-water abstraction or an elemental water release. A real reusable water Product return or true elementary release needs its own distinct card and actual receiving/thermal state before use. No fictional coolant/steam boiler. Natural vapour exchange is in the gas ledger. X only removes another incoming/outgoing flow overlap; retain new real water influx and full wet closing article/part mass together. Whole wet received article includes its existing water once. No flow UUID is bound; this remains one specified physical exchange. Match actual supplier/form/route/state/medium/type before dependent numerical use. This auxiliary identity gap alone does not imply a core product hold. Use the sole x_i from calc_quotient with N_i = FULL actual gross V_i for this event leg; no stock correction or allocation of V_i; cp_physical_assets.

- Selected flow: Asset-repair wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the sole section-8 quotient result x_i; cp_physical_assets.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_physical_assets
- Sources: ilcd-attributional-2010

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_hierarchy | each attributable exchange | Use attributional modelling where allocation is required. First separate dedicated operations or virtual subdivision and embodied components. For remaining each exchange demonstrate its determining physical causal relationship and actual driver; generic mass share, press-pair count or economic share is not automatic. Only genuinely unresolved residual common-process flows use justified contemporaneous market values at the real common process gate and actual exit state. Document price period, quantities, all cofunctions and conservation. No fixed percentages or substitution credit. | ilcd-attributional-2010 |
| a_waste | failures samples residues and treatment | Ordinary manufacturing waste, rejects, samples, sale or off-site treatment does not remove manufacturing or actual treatment load. A burden transfer requires a real independent other cohort/function, justified allocation/handover and exactly one vector transfer. Full gross physical legs remain unchanged. Treatment of one real mixed outlet has one provider owner; disjoint source pools are not additional total/provider claims. | ilcd-attributional-2010 |
| a_service | assets packaging and observed H | Use actual fulfilled service with the original cohort and causal duration/intensity. Physical asset/new/used part/fluid custody and full wet stocks are separate from capital/repair/service burdens; no assumed life or per-kg whole machine. Only unused/unassigned service/charge carries to closing, not service already performed for retained FG. Postrelease work requires manufacturer/spec permission and actual posttests/acceptance/disposition for continuing conformity; failure never deletes actual loads. | ilcd-attributional-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | finish | finished_ski | calibrated first-release record | serial; model; complete_configuration; net_mass; gross_mass; tare; moisture; calibration; actual_spec; cure_record; base_edge_bevel_wax_checks; first_release_id; Q; original_Q_H; H | Calibrated net weighing of each complete unbound ski after actual finishing, exclude packaging and bindings; verify unique first release and actual specification acceptance. Q includes first-released closing FG once; unknown mass is not invented. | kg | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_material_prep | prep | each supplied material and mix | receiving batch mix and per-flow stock record | row_id; whole_supplier_article; composition; supplied_state; lot; raw_unit; gross; tare; water; opening_raw; opening_WIP; opening_unassigned_nonWIP; each_inherited_vector; receipts; actual_consumption; already_net_flag; closing_raw; closing_WIP; closing_unassigned_nonWIP; losses; mixing_energy; provider_owner | Weigh actual whole supplied preparations/articles once. For on-site epoxy mixing collect each actual purchased component, mix energy and loss; no repeated resin/fibre inside supplied prepreg. Record per-flow historical burden vectors independently of wet physical stocks, including all failed/idle/cleanup/rework and zero-output operation. | kg; original native unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_material_laminate | laminate | each supplied material and mix | receiving batch mix and per-flow stock record | row_id; whole_supplier_article; composition; supplied_state; lot; raw_unit; gross; tare; water; opening_raw; opening_WIP; opening_unassigned_nonWIP; each_inherited_vector; receipts; actual_consumption; already_net_flag; closing_raw; closing_WIP; closing_unassigned_nonWIP; losses; mixing_energy; provider_owner | Weigh actual whole supplied preparations/articles once. For on-site epoxy mixing collect each actual purchased component, mix energy and loss; no repeated resin/fibre inside supplied prepreg. Record per-flow historical burden vectors independently of wet physical stocks, including all failed/idle/cleanup/rework and zero-output operation. | kg; original native unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_finish | finish | each finishing wax tool and residue | finishing operation and conformity record | row_id; actual_material; supplied_form; actual_units; tool_custody; wear; waxing; removed_fraction; species; tests; disposition; inherited_vector; stocks; actual_energy; permission | Record band trim, profile, belt/stone/gummy/diamond work, wax/infrared/brush and actual acceptance without inventing temperatures, layers, wax composition or wear. Whole mixtures and their constituents have disjoint accounts. | kg; actual extensive unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_utilities_prep | prep | each actual utility | meter and boundary record | row_id; original_unit; original_reading; rate_or_integral; time; meter; supply_voltage; actual_geography; period; provider_boundary; water_density_temperature; already_net; process; failure; start_stop; idle; cleanup; cohort; H | Collect raw undivided readings. Meter electrical and electric-heat use once; convert kWh once. Keep water/carrier physical kg distinct from energy. No boiler/steam/condensate copied from another route. If a real heat carrier is later used add its actual carrier mass and Product return with measured thermal state/enthalpy and one supplier water-energy owner, not a second heat purchase. | MJ; kWh; kg; actual native unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_utilities_laminate | laminate | each actual utility | meter and boundary record | row_id; original_unit; original_reading; rate_or_integral; time; meter; supply_voltage; actual_geography; period; provider_boundary; water_density_temperature; already_net; process; failure; start_stop; idle; cleanup; cohort; H | Collect raw undivided readings. Meter electrical and electric-heat use once; convert kWh once. Keep water/carrier physical kg distinct from energy. No boiler/steam/condensate copied from another route. If a real heat carrier is later used add its actual carrier mass and Product return with measured thermal state/enthalpy and one supplier water-energy owner, not a second heat purchase. | MJ; kWh; kg; actual native unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_utilities_finish | finish | each actual utility | meter and boundary record | row_id; original_unit; original_reading; rate_or_integral; time; meter; supply_voltage; actual_geography; period; provider_boundary; water_density_temperature; already_net; process; failure; start_stop; idle; cleanup; cohort; H | Collect raw undivided readings. Meter electrical and electric-heat use once; convert kWh once. Keep water/carrier physical kg distinct from energy. No boiler/steam/condensate copied from another route. If a real heat carrier is later used add its actual carrier mass and Product return with measured thermal state/enthalpy and one supplier water-energy owner, not a second heat purchase. | MJ; kWh; kg; actual native unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_utilities_service | service | each actual utility | meter and boundary record | row_id; original_unit; original_reading; rate_or_integral; time; meter; supply_voltage; actual_geography; period; provider_boundary; water_density_temperature; already_net; process; failure; start_stop; idle; cleanup; cohort; H | Collect raw undivided readings. Meter electrical and electric-heat use once; convert kWh once. Keep water/carrier physical kg distinct from energy. No boiler/steam/condensate copied from another route. If a real heat carrier is later used add its actual carrier mass and Product return with measured thermal state/enthalpy and one supplier water-energy owner, not a second heat purchase. | MJ; kWh; kg; actual native unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_physical_finish | finish | each real molecule and water state | independent species and wet physical gate record | row_id; physical_gate; inlet; outlet; wet_opening; wet_closing; CAS; phase; actual_species; concentration; rate; integrated_volume; temperature; pressure; measured_density; moisture; natural_adsorption; natural_desorption; reaction_water; free_water; actual_X_in; actual_X_out; overlap_other_inout; whole_article_bridge; independent_element_carbon_constraints | Measure independent species/phase and wet mass/element/carbon/water constraints. Integrate only true rates and use that substance/state density. Natural adsorption/desorption is actual flow without a repair-permission fiction. X removes only other same-side in/out overlap, never retained real influx. No aggregate air plus constituent duplication or total-indicator molecule inference. | kg; original gas/liquid extensive unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_physical_service | service | each real molecule and water state | independent species and wet physical gate record | row_id; physical_gate; inlet; outlet; wet_opening; wet_closing; CAS; phase; actual_species; concentration; rate; integrated_volume; temperature; pressure; measured_density; moisture; natural_adsorption; natural_desorption; reaction_water; free_water; actual_X_in; actual_X_out; overlap_other_inout; whole_article_bridge; independent_element_carbon_constraints | Measure independent species/phase and wet mass/element/carbon/water constraints. Integrate only true rates and use that substance/state density. Natural adsorption/desorption is actual flow without a repair-permission fiction. X removes only other same-side in/out overlap, never retained real influx. No aggregate air plus constituent duplication or total-indicator molecule inference. | kg; original gas/liquid extensive unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_physical_assets | assets | each real molecule and water state | independent species and wet physical gate record | row_id; physical_gate; inlet; outlet; wet_opening; wet_closing; CAS; phase; actual_species; concentration; rate; integrated_volume; temperature; pressure; measured_density; moisture; natural_adsorption; natural_desorption; reaction_water; free_water; actual_X_in; actual_X_out; overlap_other_inout; whole_article_bridge; independent_element_carbon_constraints | Measure independent species/phase and wet mass/element/carbon/water constraints. Integrate only true rates and use that substance/state density. Natural adsorption/desorption is actual flow without a repair-permission fiction. X removes only other same-side in/out overlap, never retained real influx. No aggregate air plus constituent duplication or total-indicator molecule inference. | kg; original gas/liquid extensive unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_service | service | original cohort custody and actual increments | serial service and shipment return record | serial; original_Q_H; H; historical_FG_vector; opening_FG; closing_FG; gross_G; gross_R; actual_original_delivery; D_rev_if_delivery_study; postwork_permission; actual_work; posttests; acceptance; disposition; actual_service; unused_charge; provider_owner | Keep original manufacturing vectors with the first-release cohort. Collect actual service over observed H, including held FG, failed/unauthorized work and real custody legs. Delivery/retest is no new Q. Paired internal handoff cancels at consolidation, not real external gross legs. Only unused/unassigned service carries. | kg; h; original native service unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_pack | packaging | each carton film pallet P I ER S EO W and charge | per-pool six-event wet custody and owner record | pool_id; row_id; article_identity; wet_P; wet_I; wet_ER; wet_C; gross_S; EO; W; opening_empty; opening_attached_WIP; opening_attached_FG; opening_reusable; closing_same_states; supplier_included_ingress; component_bridge; water; actual_X_in; actual_X_out; overlap_other_inout; mixed_outlet; disjoint_source_pool_W; provider_owner; fulfilled_service; unused_charge; original_Q_H; H | Measure six actual legs per article plus full wet C. Whole wet P/I includes existing components/water once. Preserve extra retained material/water influx together with full wet closing mass; X never removes it due to closing retention. Record FULL gross V independent of allocated burden. One mixed outlet has one Waste total and one treatment provider; source W pools stay disjoint. Same article charge row links one upstream/service vector, not second procurement. | kg; original count with independently measured same-configuration wet tare | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_assets | assets | each new used removed article fluid and service | serial asset part fluid custody and utilization record | row_id; serial; actual_material; configuration; new_or_used; opening_installed; opening_store; full_wet_receipt; integral_fill; actual_topup; actual_new_part; actual_old_part; water; gross_removal; external_return; waste; full_wet_closing; actual_X_in; actual_X_out; overlap_other_inout; whole_component_bridge; actual_hours; capacity; causal_driver; inherited_burden; service_owner; unused_charge; permission; tests; disposition | Separate complete gross physical custody from actual assigned capital/repair/service burdens. New/used/removal cards express actual event and destination, not fixed replacement. Preserve true installed fluid and separately added water/parts even if retained; whole article and additions are disjoint. Wear-input interface does not duplicate whole-tool procurement. Failed work retains loads; only unused charge carries. | kg; m3 for hydraulic fluid; h; actual native extensive unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_waste_prep | prep | each actual outlet and one provider | receiver operation source-pool and unique provider record | row_id; actual_outlet; disjoint_source_pool; wet_total; component_water; source_W; original_service_unit; measured_activity_conversion; receiver; route; included_transport; one_provider_owner; original_cohort; actual_incurred_burden; treatment_residues; actual_species; uncertainty | Retain actual wet outlet and one actual treatment activity per real outlet in its native service unit. If one mixed outlet exists, only one physical Waste/treatment provider is active and each source W remains independently traceable without adding total and parts. Do not delete manufacture/treatment because waste is sold or shipped away. | kg actual wet outlet; provider native service unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_waste_laminate | laminate | each actual outlet and one provider | receiver operation source-pool and unique provider record | row_id; actual_outlet; disjoint_source_pool; wet_total; component_water; source_W; original_service_unit; measured_activity_conversion; receiver; route; included_transport; one_provider_owner; original_cohort; actual_incurred_burden; treatment_residues; actual_species; uncertainty | Retain actual wet outlet and one actual treatment activity per real outlet in its native service unit. If one mixed outlet exists, only one physical Waste/treatment provider is active and each source W remains independently traceable without adding total and parts. Do not delete manufacture/treatment because waste is sold or shipped away. | kg actual wet outlet; provider native service unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_waste_finish | finish | each actual outlet and one provider | receiver operation source-pool and unique provider record | row_id; actual_outlet; disjoint_source_pool; wet_total; component_water; source_W; original_service_unit; measured_activity_conversion; receiver; route; included_transport; one_provider_owner; original_cohort; actual_incurred_burden; treatment_residues; actual_species; uncertainty | Retain actual wet outlet and one actual treatment activity per real outlet in its native service unit. If one mixed outlet exists, only one physical Waste/treatment provider is active and each source W remains independently traceable without adding total and parts. Do not delete manufacture/treatment because waste is sold or shipped away. | kg actual wet outlet; provider native service unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_waste_packaging | packaging | each actual outlet and one provider | receiver operation source-pool and unique provider record | row_id; actual_outlet; disjoint_source_pool; wet_total; component_water; source_W; original_service_unit; measured_activity_conversion; receiver; route; included_transport; one_provider_owner; original_cohort; actual_incurred_burden; treatment_residues; actual_species; uncertainty | Retain actual wet outlet and one actual treatment activity per real outlet in its native service unit. If one mixed outlet exists, only one physical Waste/treatment provider is active and each source W remains independently traceable without adding total and parts. Do not delete manufacture/treatment because waste is sold or shipped away. | kg actual wet outlet; provider native service unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |
| cp_waste_assets | assets | each actual outlet and one provider | receiver operation source-pool and unique provider record | row_id; actual_outlet; disjoint_source_pool; wet_total; component_water; source_W; original_service_unit; measured_activity_conversion; receiver; route; included_transport; one_provider_owner; original_cohort; actual_incurred_burden; treatment_residues; actual_species; uncertainty | Retain actual wet outlet and one actual treatment activity per real outlet in its native service unit. If one mixed outlet exists, only one physical Waste/treatment provider is active and each source W remains independently traceable without adding total and parts. Do not delete manufacture/treatment because waste is sold or shipped away. | kg actual wet outlet; provider native service unit | each actual event/lot and meter interval | full opening history through cohort and observed H | actual gate configuration and provider | per reference flow | Raw evidence; calibration; actual identity/specification; full per-flow vector and wet stock bridge; uncertainty and disposition; aggregation reuses the sole calc_quotient result without dividing raw records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_q | finished_ski | Q = sum of actual net masses of unique complete skis first quality-released in the cohort; first-released closing FG is included once, not a second product. | net_individual_masses; unique_release_ids; cp_release | Q | wagner-finish; wagner-custom |
| calc_raw | all inventory rows | Convert raw numerator quantities to their actual native extensive units before attribution, with original rate/integral and measured density/thermal state retained. 1 kWh = 3.6 MJ once; no gas/liquid integral multiplied by time. Store full gross V and physical stocks independently of load vectors. | raw_records; cp_utilities_prep; cp_utilities_laminate; cp_utilities_finish; cp_utilities_service; cp_physical_finish; cp_physical_service; cp_physical_assets | converted_raw | ilcd-attributional-2010 |
| calc_attribution | maple_core_blank; base_sheet; sidewall_strip; steel_edge; glass_cloth; epoxy_a; hardener_b; nylon_topsheet; rubber_damping; soft_wax; running_wax; carbide_wear; saw_blade; abrasive_belt; grinding_stone; gummy_stone; diamond_stone; roto_brush; prep_electricity; prep_water; laminate_electricity; laminate_water; finish_electricity; finish_water; cleaner; coolant; core_shavings_treatment; uncured_resin_treatment; trim_waste_treatment; grinding_sludge_treatment; process_wastewater_treatment; rejected_ski_treatment; spent_abrasive_treatment | For each manufacturing load dimension, A_m_i = B_open_i + U_i - B_close_raw_WIP_unassigned_i - T_other_i after real conversion, dedicated subdivision, exchange-specific determining physical causality and only justified residual allocation. B_close excludes already first-released FG. Each historical vector and non-WIP unassigned store is explicit. Already stock-corrected U is not corrected again. T_other requires true other cohort/function and one justified handover; ordinary failures/waste/sales/treatment do not qualify automatically. | converted_raw; each_inherited_vector; raw_WIP_unassigned_stocks; actual_handover_decision | A_m_i | ilcd-attributional-2010 |
| calc_service | service_electricity; service_water; carton_charge; film_charge; pallet_charge; press_service; cassette_service; airbag_service; repair_plank_service; repair_nail_service; hydraulic_fill_service; grease_service; filter_service; carton_w_treatment; film_w_treatment; pallet_w_treatment; mixed_packaging_waste_treatment; press_removed_treatment; cassette_removed_treatment; airbag_removed_treatment; repair_plank_removed_treatment; repair_nail_removed_treatment; hydraulic_fill_removed_treatment; grease_removed_treatment; filter_removed_treatment; assets_water_out_treatment | For original cohort Q_H and observed H (Q_H equals manufacturing Q for service performed within that manufacturing cohort), A_h_i retains actual fulfilled storage/handling/packaging/asset/treatment/postwork increments and assigned unused opening charge; subtract only genuinely unused/unassigned closing service/charge and justified one-time true other-function transfer. Do not subtract performed service because FG is held. Historical manufacturing is not repurchased. Physical gross V is separate. | actual_service_records; original_Q_H; H; one_owner_vectors; unused_charge | A_h_i | ilcd-attributional-2010 |
| calc_quotient | all inventory rows | x_i = N_i / Q_c once only. N_i is A_m_i for a manufacturing-load dimension, A_h_i for actual service load, or FULL actual gross leg V_i for physical-only disclosure. Q_c is manufacturing Q or original Q_H for that observed service/custody cohort. Never replace V_i with B_open+U-B_close or an economic share. Physical V creates no new procurement/provider/credit or new Q. Q_c=0 retains numerators and stocks without a unit result. Cards and aggregation reference the same x_i without further division. | A_m_i; A_h_i; full_gross_V_i; Q; original_Q_H; cp_release | x_i | ilcd-attributional-2010 |
| calc_physical | all inventory rows | For each manufacture/FG-service/consolidated gate independently reconcile full wet opening + actual gross external inflows = full wet closing + actual gross external outflows. Related element/carbon/chemical/free/phase-water constraints are independent. Packaging per pool P+I+ER=C+S+EO+W; internal reuse cancels. X_in/X_out only removes a duplicate OTHER same-side inflow/outflow term, never real retained influx or full wet closing mass. Whole article/independent additions/source-W pools are disjoint; only matched internal product handoffs cancel. | full_wet_stocks; full_gross_V_i; independent_species_constraints; disjoint_component_overlap_bridge | closure_findings | ilcd-attributional-2010 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Actual whole supplied material/article identity and all native CAS/material/form/phase/grade/route/geography/medium/type restrictions must agree. Official Chinese displays match each selected UUID; blank UUID is never zero or a collection flow. | Supplier BOM/specification and native originals |
| dq_raw | all raw records and Q | Keep calibration, original units, moisture/thermal/density state, full event/stock/vector bridge, uncertainty and raw failures. Future site quantities remain collection requirements, never measured claims. | Raw weighing meter and batch logs |
| dq_scope | all sources and gates | Complete primary context and contrary routes are retained. Qualitative technical synthesis is distinct from a measured factory BOM; auxiliary/provider gaps block dependent numerical use, while true missing core identity or route holds usable methodology. | Full sources and declared applicability |
| dq_service | assets packaging actual postwork | Permission/tests/acceptance determine continuing conformity but never erase occurred failed or unauthorized flows/loads. Natural humidity exchange needs no invented repair permission. One mixed outlet has one total/provider; full six physical packaging legs remain atomic. | True service custody and disposition records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_terminal | reference and first release | Require the complete declared unbound alpine-ski terminal and actual approved structure/supply states; no core/base/blank/footwear or wrong snowboard route substitutes. A verified physically compatible broad manufactured family can be narrowed with positive primary evidence; name/CPC/SKU similarity cannot override hard native conflicts. Core identity gaps are true holds; ordinary auxiliary/provider/measurement gaps are separately explicit. | wagner-custom; wagner-materials; wagner-finish |
| v_normalize | every card and raw field | Check raw unit/rate conversion and real attribution before the sole x_i=N_i/Q_c. For gross cards N_i is FULL actual V_i, never stock-adjusted use, burden vector or economic fraction; its disclosure creates no second purchase/provider/credit. Q includes closing first-released FG once. Services retain original Q_H and actual H. Q0 keeps actual loads without unit results. | ilcd-attributional-2010 |
| v_balance | physical and burden gates | Independently verify wet mass/elements/carbon/water/species, inherited raw/WIP/non-WIP vectors, FG histories, full packaging six legs, asset/new-used part/fluid custody and one mixed outlet/provider. Preserve retained real influx and full wet closing mass together; stock-corrected use is not corrected twice. | ilcd-attributional-2010 |
| v_truth | projection native context and review | Check every source id/type/reference/use, rule source_ids, native reference-property/group/unit, all card fields/descriptions/qualifiers and normative ancestor context. Schema/current fingerprints/finite measurement checks do not prove scientific/translation approval, factory quantities, accepted mapping, whole classification coverage or publication. Real unsupported relationships remain review-required. | ilcd-attributional-2010; wagner-press; wagner-finish |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacture methodology; actual documented completed packages only |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Matching complete unbound wood-core glass/epoxy alpine-ski manufacture under first-release Q with separately observed original-cohort service H |
| excluded_use | Whole CPC38410 coverage, different structures/routes, parts/sets/use-life, assumed factory coefficients, certification and unreviewed numerical defaults |
| required_metadata | one complete unbound alpine ski and unique serial/cohort; laminated sugar-maple core supply and actual moisture; dry woven glass and actual whole resin/hardener preparations; sintered UHMWPE base and actual P-tex sidewall state; hardened steel edge profile and supplied component boundary; actual decorated nylon topsheet and conditional rubber strip; actual shape/camber/rocker and approved material configuration; actual cure/base/edge/bevel/wax release records; measured net individual ski mass with calibration and no bindings/packaging; first-release Q and all raw/WIP per-exchange inherited vectors; original released-FG cohort Q_H and actual observed horizon H; actual supplier geography/period and native flow restrictions; complete gross packaging six-leg and asset/part/fluid custody; independent wet mass/carbon/element/water/species evidence |
| required_quality_disclosure | Actual source scope, technical synthesis versus measured factory records, every dependent identity/provider/quantity gap, full raw-vector/gross-stock completeness and uncertainty |
| update_trigger | Changed product/supply/epoxy/laminate/cure/finish/gate/native identity, new evidence, observed omission or substantive review |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3 | official_guidance | UNSD CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 38410 context only; no whole-leaf scope or accepted mapping. |
| wagner-custom | handbook | Wagner Custom Skis, https://www.wagnerskis.com/pages/wagner-custom-skis | Complete ski and Essential wood-core/glass/P-tex/steel-edge architecture; supplied state and alternatives, no quantitative BOM. |
| wagner-materials | handbook | Wagner, Digging in Deeper to Specific Ski Materials, https://www.wagnerskis.com/blogs/journal/need-know-great-ski-materials | Laminated maple-core option; sintered UHMWPE base and steel edges; actual materials alternatives and whole ski manufacturing context. No SKU-specific recipe or performance default. |
| wagner-base | handbook | Wagner Factory Tour: Base Materials and Steel Edges, https://www.wagnerskis.com/blogs/journal/wagner-factory-tour-base-materials-steel-edges | Actual supplied base/edge options and physical snow-contact interface; no thickness or life assumed. |
| wagner-core | handbook | Wagner Factory Tour: Wood Cores, https://www.wagnerskis.com/blogs/journal/wagner-factory-tour-wood-cores | CNC shaping of supplied wood-core blocks, perimeter and thickness profile. |
| wagner-fiberglass | handbook | Wagner, What’s in Our Skis and Why, 6 December 2024, https://www.wagnerskis.com/blogs/journal/whats-in-our-skis-and-why | Dry glass-cloth epoxy wet-out; wood/carbon/metal alternatives are not combined as one factory BOM. |
| wagner-press | handbook | Wagner Factory Tour: The Ski Press, https://www.wagnerskis.com/blogs/journal/wagner-factory-tour-ski-press | Wet layup from base to topsheet, cassette, chosen tip/tail/camber blocks, electric heating and airbag pressing. No cure temperature, pressure, time, layer count or yield inferred. |
| wagner-finish | handbook | Wagner Factory Tour: Ski Finishing and Tuning, https://www.wagnerskis.com/blogs/journal/wagner-factory-tour-ski-finishing-tuning | Bandsaw/sidewall profile, belt/stone grinding, gummy/diamond tip-tail finish, bevel check, conditioning/running wax, infrared heat and brush; gate before binding mounting. |
| wagner-graphics | handbook | Wagner Factory Tours: Graphics, https://www.wagnerskis.com/blogs/journal/wagner-factory-tour-graphics | Nylon topsheet and supplier dye-sublimation context; purchased decorated sheet moves printing upstream without omitting its burden. |
| wagner-factory | handbook | Wagner Factory Skis, https://www.wagnerskis.com/pages/wagner-factory-skis | Positive complete-ski construction and actual conditional rubber damping; distinct carbon/Titanal/aramid routes are counterexamples, not automatic added layers. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General Guide Detailed Guidance, First edition March 2010, sections 7.9.2–7.9.3, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision/virtual subdivision; exchange-specific determining physical causality; justified residual common-process-gate market value. Collection/stock/gross accounting here operationalizes that attribution without claiming ILCD conformity, numerical factors, automatic waste allocation or substitution. |
