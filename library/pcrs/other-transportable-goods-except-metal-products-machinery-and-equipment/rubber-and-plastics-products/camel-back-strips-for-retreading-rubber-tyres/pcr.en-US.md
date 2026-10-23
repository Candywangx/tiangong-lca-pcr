---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.camel-back-strips-for-retreading-rubber-tyres
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Uncured extruded camel-back strips with cushion backing for tractor-rear and OTR retreading

## 1. Scope and Applicability

This is an integrated manufacturing method for uncured die-profile camelback with a factory-applied uncured cushion layer, selected for tractor-rear/OTR retreading. It joins independently bounded manufacturer product evidence and historical industrial process evidence; it does not claim a single cited factory supplies every unit operation. The manufacturing chain includes separately traced tread/cushion mixing, milling, extrusion/forming, backing application, cooling/conditioning, trimming, inspection, real rework and attributable packaging/warehouse/handling/dispatch records. It does not start from bought finished strips. Recipes, yields, temperatures, pressure, times, layer ratio and shelf life are actual foreground facts, with no universal numerical defaults. [surya-camelback; patent-camelback-1965; epa-camelback-1973]

The manufacturer companion page identifies cushion/bonding gum as unvulcanized. Its general illustration uses a vulcanized tread and does not establish a specific Power Booster SKU for this camelback. Do not transfer its variant temperatures, times, thicknesses, package sizes or storage limits; verify the actual backing and acceptance from foreground records. [surya-cushion-state]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.camel-back-strips-for-retreading-rubber-tyres |
| classification_refs | CPC 3.0 36115; narrower |
| covered_products | Extruded uncured rubber tread profiles with an applied uncured cushion-gum backing for tractor-rear and OTR hot-mould retreading |
| excluded_products | Pre-vulcanized interchangeable treads; arbitrary compounded rubber without the supplied tread profile; narrow-ribbon direct winding; finished new or retreaded whole tyres; inner tubes, flaps and tyre innerliners; fast-moving commercial-vehicle use in this selected subset; onsite rubber reclamation and buy-finished-strip repacking. CPC 36220 explicitly excludes camelback, but this alone does not establish new methodology. |
| representative_product | One declared profile and tread/cushion batch combination, uncured and newly quality released; no fixed layer ratio or formulation |
| production_route | Actual separately acquired solid elastomers and individual supplied ingredients/preparations → separately traced tread/cushion mixing and milling → die-profile extrusion/forming and cushion application → cooling/conditioning and cutting → first quality release, with actual attributable rework, packaging and logistics ledgers. Internal compound/trim transfers cancel; subsequent casing application and tyre mould cure are outside this strip production method. |
| market_state | Finished supplied but still uncured cushion-backed strip; no claimed tyre-distance function |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a declared uncured profiled tread and backing for subsequent tractor-rear/OTR mould retreading |
| How much | 1 kg newly first-quality-released net two-layer rubber strip; Q is production release mass, not net delivery |
| How well | Actual declared profile, layer bond/condition, compound cure-state and acceptance specification; no unverified universal test threshold |
| How long or cycle | One manufacturing first-release cycle with actual included cohort handling; no operational tyre life asserted |
| reference_flow_link | new_camelback |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | "Camel-back" strips for retreading rubber tyres `ce4921de-ce26-4e35-8d49-4d283f73db0c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | declared site and actual data period; tractor-rear or OTR intended retread and casing/mould compatibility; uncured extruded profile dimensions and net mass of both rubber layers; separate tread and cushion recipe/compound batch identities; actual supplied preparations and their full wet composition/assays; actual acceptance tests and declared storage/shelf-life conditions without universal thresholds; first manufacturing quality-release gate and unique new Q cohort; separate WIP/finished/returned-stock mass and burden carry; actual packaging/release-liner removal and reuse/return boundary; complete native identity limitations and supplier/provider compatibility |

Q is the unique positive net mass in kg first accepted at the manufacturing quality-release gate for the same product/profile, two-layer route, uncured state and matched cohort; both rubber layers are included and removable release liner/transport packaging are excluded. Q is newly released production, not actual dispatch. Do not add closing finished stock of the same Q as another production output. Keep finished warehousing, packaging, handling and dispatch in a separate real ledger and cancel internal production-to-warehouse handoffs on consolidation. Returns/reinspection do not create new Q. A previously released return retains its original mass and burden; incremental rework is attributed once to the appropriate original cohort, with old-cohort stocks/burdens kept separate from current new production.

The native Product flow names a manufactured finished camel-back strip, with production mix at plant, no specified recipe, grade, profile dimensions, cure state, geography/locationOfSupply or medium, no CAS, and only reference Mass. The broad native name does not prove the selected cushion-backed uncured profile, actual supplier, site or quantities. Apply this card only to the independently verified uncured extruded tread plus uncured cushion-gum backing for tractor-rear/OTR use; the selected manufacturer page excludes fast-moving commercial vehicles. No native global or CN/HK supply scope is invented. Finished means a finished supplied strip, not a vulcanized tyre.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference output is 1 kg net uncured two-layer rubber at first manufacturing acceptance, excluding removable liners/packaging; use cp_release and cp_stock to distinguish new production Q from finished stock, reacceptance and dispatch. |
| one_division | all inventory rows | Declared row property | declared row unit | Collection protocols retain unnormalized raw numerators with complete same-cohort WIP/stock burden carry. report_once is the sole A_i/Q operation; card expressions and aggregation rules describe that same report operation and never divide successively. |
| raw_conversion | all inventory rows | Actual measured basis | declared raw unit | Mass from volume requires actual compatible density and conditions. Only a rate is multiplied by duration; already integrated gas/liquid volume receives no extra time. Preserve utility mass, state and enthalpy separately, and formulation wet mass versus component assays without duplicate inputs. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Acquired identified raw solid elastomers, separate ingredients/whole supplied preparations, utilities and packaging entering the integrated two-layer strip line |
| starting_condition_role | foreground_start |
| product_classification_scope | A bounded cushion-backed uncured-profile subset of CPC 36115, not all tread or rubber products |
| recursive_input_rule | Internal compound, strip and trim transfers remain stage subledgers and cancel in the consolidated process; returned finished strips preserve original burdens and never become new virgin purchases or new Q. Do not replace integrated manufacturing by purchase of finished strips. |
| upstream_dataset_requirement | Independently match each actual supplied material/formulation, energy and packaging by full physical identity, grade/form, route, geography/supply location and exact property/unit; upstream acquisition and transport enter once. A UUID supplies identity, not provider quantities. |
| disclosure | Declare every stage owner and actual recipe/formulation, included utility generation, failed/rework/return histories, WIP/finished stock mass and burdens, first-release versus dispatch gate, packaging reuse/returns and all actual external outlets. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_integrated | p_camelback | Retain complete actual onsite compounding and profile manufacture of both rubber layers plus real attributable cooling, tests, rework, packaging, storage and handling. Stage records are detailed inside one consolidated unit process; do not replace it with bought finished-strip packing. | surya-camelback; epa-camelback-1973 |
| boundary_downstream | p_camelback | The selected supplied object is uncured, with factory-applied cushion backing. Casing inspection/buffing/building and whole-tyre mould vulcanization belong to subsequent retreading; pre-cured tread manufacture cannot be treated as this same gate. | surya-camelback; patent-camelback-1965 |
| boundary_stocks | all inventory rows | Q is the unique positive net mass in kg first accepted at the manufacturing quality-release gate for the same product/profile, two-layer route, uncured state and matched cohort; both rubber layers are included and removable release liner/transport packaging are excluded. Q is newly released production, not actual dispatch. Do not add closing finished stock of the same Q as another production output. Keep finished warehousing, packaging, handling and dispatch in a separate real ledger and cancel internal production-to-warehouse handoffs on consolidation. Returns/reinspection do not create new Q. A previously released return retains its original mass and burden; incremental rework is attributed once to the appropriate original cohort, with old-cohort stocks/burdens kept separate from current new production. | epa-camelback-1973 |
| boundary_actual_atoms | all inventory rows | Every actual purchased formulation is one complete supplied input; constituents are subledgers. This inventory is a conditional atomic starting set, not a prescribed recipe. Record every additional actual ingredient, auxiliary, fuel, refrigerant, package, external Product/utility return, waste and elementary species on its own card before quantitative use; establish absent/not_applicable cases from real evidence. | epa-camelback-1973 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_camelback | Integrated uncured cushion-backed camelback manufacture | required | Selected two-layer profile and route; separate layer/stage ledgers retained | foreground | 1 kg reference flow; first quality release |

### Process: Integrated camelback manufacture (`p_camelback`)

#### Inputs

##### Product flows

###### Dry natural rubber recipe charge (`natural_rubber`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: Dry natural rubber
- Flow property / unit: Mass / kg
- Amount rule: A_natural_rubber / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Dry styrene-butadiene rubber recipe charge (`sbr`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: Dry styrene-butadiene rubber
- Flow property / unit: Mass / kg
- Amount rule: A_sbr / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Dry polybutadiene rubber recipe charge (`br`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: Dry polybutadiene rubber
- Flow property / unit: Mass / kg
- Amount rule: A_br / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Furnace carbon black recipe charge (`carbon_black`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: Furnace carbon black
- Flow property / unit: Mass / kg
- Amount rule: A_carbon_black / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Precipitated silica recipe charge (`silica`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: Precipitated silica
- Flow property / unit: Mass / kg
- Amount rule: A_silica / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Zinc oxide recipe charge (`zinc_oxide`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: Zinc oxide
- Flow property / unit: Mass / kg
- Amount rule: A_zinc_oxide / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Stearic acid recipe charge (`stearic_acid`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: Stearic acid
- Flow property / unit: Mass / kg
- Amount rule: A_stearic_acid / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Elemental sulfur recipe charge (`sulfur`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: Elemental sulfur
- Flow property / unit: Mass / kg
- Amount rule: A_sulfur / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### N-cyclohexyl-2-benzothiazolesulfenamide recipe charge (`cbs`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: N-cyclohexyl-2-benzothiazolesulfenamide
- Flow property / unit: Mass / kg
- Amount rule: A_cbs / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### N-(1,3-dimethylbutyl)-N′-phenyl-p-phenylenediamine recipe charge (`antioxidant`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: N-(1,3-dimethylbutyl)-N′-phenyl-p-phenylenediamine
- Flow property / unit: Mass / kg
- Amount rule: A_antioxidant / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Mineral rubber process oil recipe charge (`process_oil`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: Mineral rubber process oil
- Flow property / unit: Mass / kg
- Amount rule: A_process_oil / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Microcrystalline petroleum wax recipe charge (`wax`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: Microcrystalline petroleum wax
- Flow property / unit: Mass / kg
- Amount rule: A_wax / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### C5 hydrocarbon tackifier resin recipe charge (`tackifier`)

Conditional on the actual weighed recipe of each tread/cushion batch. Sum complete as-supplied charges for this single material across the two layer subledgers; retain batch destinations, failed batches and losses. No formulation, proportion or compulsory ingredient is inferred from this candidate card.

- Selected flow: C5 hydrocarbon tackifier resin
- Flow property / unit: Mass / kg
- Amount rule: A_tackifier / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Purchased rubber-bound sulfur preparation (`sulfur_preparation`)

Only when that whole preparation is actually purchased. Weigh its full supplied mass and assay sulfur/carrier as subledgers, not extra sulfur/rubber procurement. Do not also charge neat-sulfur or polymer cards for its constituents; any separately bought neat charges remain separate. Record actual product composition, grade and curative state.

- Selected flow: Rubber-bound sulfur predispersion
- Flow property / unit: Mass / kg
- Amount rule: A_sulfur_preparation / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Separately acquired anti-tack talc (`talc`)

Only for actual onsite preparation of talc slurry; record dry talc and separately acquired makeup water, mixing energy and losses. Not a second charge for talc already included in a purchased aqueous preparation. Record where anti-tack is used so it does not silently substitute for a clean bonding face.

- Selected flow: Talc powder
- Flow property / unit: Mass / kg
- Amount rule: A_talc / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Whole purchased aqueous anti-tack preparation (`anti_tack`)

Use only if this commercial formulation is actually supplied. Charge the full wet formulation once; measured talc, other actives and carrier water remain constituent subledgers. Onsite dilution water is separately acquired makeup, not duplicate carrier procurement.

- Selected flow: Aqueous talc-based anti-tack preparation
- Flow property / unit: Mass / kg
- Amount rule: A_anti_tack / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Actual rubber cement consumption (`cement`)

Conditional on actual layer/end bonding or repair use. Record one whole supplied cement formulation with supplier identity, solvent/solid assay and full wet mass; never assume a solvent recipe or apply the downstream casing cement by default. Each emitted solvent is separately identified and measured in cp_emission.

- Selected flow: Solvent-borne rubber bonding cement
- Flow property / unit: Mass / kg
- Amount rule: A_cement / Q; complete matched raw numerator from cp_material and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_material
- Sources: epa-camelback-1973

###### Equipment lubricant makeup (`lubricant`)

Record attributable actual machine/handling lubricant makeup and leaks by stage; lubricant is separate from rubber process oil in the recipe.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: A_lubricant / Q; complete matched raw numerator from cp_utility and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-camelback-1973

###### Metered electricity (`electricity`)

Retain actual metered or causally attributed mixing, milling, shaping, cushion application, cooling pumps, dust extraction, tests, rework, warehouse and loading electricity. Stage meter owners and meter coverage must prevent double attribution.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: A_electricity / Q; complete matched raw numerator from cp_utility and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-camelback-1973

###### Fresh process and cooling makeup (`water`)

Meter real external water for mixing dilution, sheet/strip cooling and cleaning separately in stage subledgers. Recirculation is not repeated external withdrawal; purchased preparation carrier is not new water procurement. Record discharges, evaporation and moisture retention separately.

- Selected flow: Fresh process water
- Flow property / unit: Mass / kg
- Amount rule: A_water / Q; complete matched raw numerator from cp_utility and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-camelback-1973

###### Purchased steam if actually used (`steam`)

Conditional on real purchased steam for process temperature control or actual ancillary service. It is not tyre-vulcanization steam in this uncured strip route. Record supplied mass and enthalpy/conditions and actual condensate return; avoid additionally charging fuel for the same purchased service.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: A_steam / Q; complete matched raw numerator from cp_utility and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-camelback-1973

###### Purchased hot-water service (`hot_water`)

Conditional on a real purchased heat-transfer water service. Record supply/return water masses and temperatures and separately supported net heat; no density is inferred from a secondary flow-property coefficient. Internal utility circulation is not another purchase.

- Selected flow: Hot water
- Flow property / unit: Mass / kg
- Amount rule: A_hot_water / Q; complete matched raw numerator from cp_utility and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-camelback-1973

###### Actual handling fuel (`diesel`)

Only actual onsite diesel-powered handling or included dispatch use; keep own combustion separate from a purchased transport service and its upstream fuel to avoid duplicate supply. Record actual exhaust by species when included.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: A_diesel / Q; complete matched raw numerator from cp_utility and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-camelback-1973

###### Polyethylene release film incoming supply (`release_film`)

Use only the actual separately supplied removable release film; distinguish it from any permanent rubber backing.

- Selected flow: Polyethylene release film
- Flow property / unit: Mass / kg
- Amount rule: A_release_film / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Coated cotton release fabric incoming supply (`release_cloth`)

Conditional on this reusable release cloth actually used. Record initial/new supply, reuse cycles, coating/provider limits, returns and losses; do not buy it anew at every reuse.

- Selected flow: Coated cotton release fabric
- Flow property / unit: Mass / kg
- Amount rule: A_release_cloth / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Corrugated shipping carton incoming supply (`carton`)

Record the actual single corrugated carton composition and mass; this is a concrete unresolved identity, not a generic packaging UUID.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: A_carton / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Polyethylene terephthalate strapping incoming supply (`strapping`)

Conditional on this actual strapping polymer and gauge; no generic packaging selector.

- Selected flow: Polyethylene terephthalate strapping
- Flow property / unit: Mass / kg
- Amount rule: A_strapping / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Wooden transport pallet incoming supply (`pallet`)

Record pallet mass, actual reuse/return and ownership; amortize real new pallet provision without treating each internal turn as procurement.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: A_pallet / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Previously released strip returned across boundary (`returned_strip`)

The native Product flow names a manufactured finished camel-back strip, with production mix at plant, no specified recipe, grade, profile dimensions, cure state, geography/locationOfSupply or medium, no CAS, and only reference Mass. The broad native name does not prove the selected cushion-backed uncured profile, actual supplier, site or quantities. Apply this card only to the independently verified uncured extruded tread plus uncured cushion-gum backing for tractor-rear/OTR use; the selected manufacturer page excludes fast-moving commercial vehicles. No native global or CN/HK supply scope is invented. Finished means a finished supplied strip, not a vulcanized tyre. This conditional external return retains original batch mass and carried burdens, does not increase Q and is not a fresh recipe ingredient. Keep physical receipts and incremental rework with the original cohort; purely internal warehouse moves are not external exchanges.

- Selected flow: "Camel-back" strips for retreading rubber tyres `ce4921de-ce26-4e35-8d49-4d283f73db0c`
- Flow property / unit: Mass / kg
- Amount rule: A_returned_strip / Q; complete matched raw numerator from cp_stock and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_stock
- Sources: surya-camelback; patent-camelback-1965

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Polyethylene release film leaving with product or returned (`release_film_out`)

Actual externally supplied/returned packaging mass, separate from net rubber Q; retain the packaging stock/return ledger. No second purchase and no additional rubber output is created.

- Selected flow: Polyethylene release film
- Flow property / unit: Mass / kg
- Amount rule: A_release_film_out / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Coated cotton release fabric leaving with product or returned (`release_cloth_out`)

Actual externally supplied/returned packaging mass, separate from net rubber Q; retain the packaging stock/return ledger. No second purchase and no additional rubber output is created.

- Selected flow: Coated cotton release fabric
- Flow property / unit: Mass / kg
- Amount rule: A_release_cloth_out / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Corrugated shipping carton leaving with product or returned (`carton_out`)

Actual externally supplied/returned packaging mass, separate from net rubber Q; retain the packaging stock/return ledger. No second purchase and no additional rubber output is created.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: A_carton_out / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Polyethylene terephthalate strapping leaving with product or returned (`strapping_out`)

Actual externally supplied/returned packaging mass, separate from net rubber Q; retain the packaging stock/return ledger. No second purchase and no additional rubber output is created.

- Selected flow: Polyethylene terephthalate strapping
- Flow property / unit: Mass / kg
- Amount rule: A_strapping_out / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Wooden transport pallet leaving with product or returned (`pallet_out`)

Actual externally supplied/returned packaging mass, separate from net rubber Q; retain the packaging stock/return ledger. No second purchase and no additional rubber output is created.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: A_pallet_out / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### New first-released uncured cushion-backed profile (`new_camelback`)

The native Product flow names a manufactured finished camel-back strip, with production mix at plant, no specified recipe, grade, profile dimensions, cure state, geography/locationOfSupply or medium, no CAS, and only reference Mass. The broad native name does not prove the selected cushion-backed uncured profile, actual supplier, site or quantities. Apply this card only to the independently verified uncured extruded tread plus uncured cushion-gum backing for tractor-rear/OTR use; the selected manufacturer page excludes fast-moving commercial vehicles. No native global or CN/HK supply scope is invented. Finished means a finished supplied strip, not a vulcanized tyre. Q is the unique positive net mass in kg first accepted at the manufacturing quality-release gate for the same product/profile, two-layer route, uncured state and matched cohort; both rubber layers are included and removable release liner/transport packaging are excluded. Q is newly released production, not actual dispatch. Do not add closing finished stock of the same Q as another production output. Keep finished warehousing, packaging, handling and dispatch in a separate real ledger and cancel internal production-to-warehouse handoffs on consolidation. Returns/reinspection do not create new Q. A previously released return retains its original mass and burden; incremental rework is attributed once to the appropriate original cohort, with old-cohort stocks/burdens kept separate from current new production.

- Selected flow: "Camel-back" strips for retreading rubber tyres `ce4921de-ce26-4e35-8d49-4d283f73db0c`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: product_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: identity_reference
- Collection protocol: cp_release
- Sources: surya-camelback; patent-camelback-1965; epa-camelback-1973

###### Reaccepted previously released strip leaving boundary (`reaccepted_strip`)

The native Product flow names a manufactured finished camel-back strip, with production mix at plant, no specified recipe, grade, profile dimensions, cure state, geography/locationOfSupply or medium, no CAS, and only reference Mass. The broad native name does not prove the selected cushion-backed uncured profile, actual supplier, site or quantities. Apply this card only to the independently verified uncured extruded tread plus uncured cushion-gum backing for tractor-rear/OTR use; the selected manufacturer page excludes fast-moving commercial vehicles. No native global or CN/HK supply scope is invented. Finished means a finished supplied strip, not a vulcanized tyre. Conditional real return-loop outlet only; reconcile against returned_strip and original stock. This is the same previously released physical product, never another newly released kg in Q or an avoided-product credit.

- Selected flow: "Camel-back" strips for retreading rubber tyres `ce4921de-ce26-4e35-8d49-4d283f73db0c`
- Flow property / unit: Mass / kg
- Amount rule: A_reaccepted_strip / Q; complete matched raw numerator from cp_stock and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_stock
- Sources: surya-camelback; patent-camelback-1965

###### Actual exported uncured compound offcut (`sold_offcut`)

Only if actually sold as a usable compound product; preserve real composition, uncured state, outlet mass and exit value. It is not an accepted camelback strip. In-process trim return remains internal, and waste-classified scrap belongs on its waste card.

- Selected flow: Uncured rubber compound offcut
- Flow property / unit: Mass / kg
- Amount rule: A_sold_offcut / Q; complete matched raw numerator from cp_output and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-camelback-1973

###### Actual exported condensate (`condensate_return`)

Record real condensate crossing back to the utility supplier or another process, with its temperature and enthalpy. It is an external Product outlet in physical closure; internal return circulation cancels on consolidation. Do not assume full steam return.

- Selected flow: Steam condensate
- Flow property / unit: Mass / kg
- Amount rule: A_condensate_return / Q; complete matched raw numerator from cp_utility and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-camelback-1973

###### Actual exported heat-transfer return water (`hot_water_return`)

Conditional actual utility return paired with purchased hot-water service, including mass and temperature. Treat the physical water return and net heat separately without duplicate service burdens.

- Selected flow: Heat-transfer return water
- Flow property / unit: Mass / kg
- Amount rule: A_hot_water_return / Q; complete matched raw numerator from cp_utility and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_utility
- Sources: epa-camelback-1973

##### Waste flows

###### Discarded uncured rubber scrap outlet (`rubber_scrap`)

Actual discarded strip/compound, including failed batches, startup and test material; internal rework is not external waste.

- Selected flow: Discarded uncured rubber scrap
- Flow property / unit: Mass / kg
- Amount rule: A_rubber_scrap / Q; complete matched raw numerator from cp_output and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-camelback-1973

###### Discarded expired camelback strip outlet (`expired_strip`)

Actual unusable stock or irreparable returned strips; no new production and no automatic recycling credit.

- Selected flow: Discarded expired camelback strip
- Flow property / unit: Mass / kg
- Amount rule: A_expired_strip / Q; complete matched raw numerator from cp_output and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-camelback-1973

###### Captured carbon-black-rich compounding dust outlet (`captured_dust`)

One actual collected waste stream with measured composition; internal verified return is reconciled instead of counted as both waste and new purchase.

- Selected flow: Captured carbon-black-rich compounding dust
- Flow property / unit: Mass / kg
- Amount rule: A_captured_dust / Q; complete matched raw numerator from cp_output and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-camelback-1973

###### Discarded talc anti-tack slurry outlet (`talc_purge`)

Actual separately measured anti-tack purge with solids/water assay; not a residual fitted from total water use.

- Selected flow: Discarded talc anti-tack slurry
- Flow property / unit: Mass / kg
- Amount rule: A_talc_purge / Q; complete matched raw numerator from cp_output and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-camelback-1973

###### Discharged cooling-water purge outlet (`cooling_purge`)

Measure actual external cooling purge; internal circulation does not create a repeated withdrawal/discharge.

- Selected flow: Discharged cooling-water purge
- Flow property / unit: Mass / kg
- Amount rule: A_cooling_purge / Q; complete matched raw numerator from cp_output and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-camelback-1973

###### Oily equipment washwater outlet (`washwater`)

Actual cleaning wastewater, separately from cooling purge and talc slurry; measured contaminants guide treatment linkage.

- Selected flow: Oily equipment washwater
- Flow property / unit: Mass / kg
- Amount rule: A_washwater / Q; complete matched raw numerator from cp_output and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-camelback-1973

###### Waste mineral lubricating oil outlet (`waste_lubricant`)

Actual spent equipment lubricant; reconcile inventory, losses and export separately from recipe oil.

- Selected flow: Waste mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: A_waste_lubricant / Q; complete matched raw numerator from cp_output and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_output
- Sources: epa-camelback-1973

###### Discarded corrugated cardboard outlet (`waste_carton`)

Actual carton damage/offcuts under packaging stock balance.

- Selected flow: Discarded corrugated cardboard
- Flow property / unit: Mass / kg
- Amount rule: A_waste_carton / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Discarded polyethylene release film outlet (`waste_film`)

Actual damaged/used film leaving as waste, separate from liner shipped with the strips.

- Selected flow: Discarded polyethylene release film
- Flow property / unit: Mass / kg
- Amount rule: A_waste_film / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Discarded coated cotton release fabric outlet (`waste_cloth`)

Actual end-of-use release cloth; retain coating identity and reuse cycles.

- Selected flow: Discarded coated cotton release fabric
- Flow property / unit: Mass / kg
- Amount rule: A_waste_cloth / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Discarded PET strapping outlet (`waste_strapping`)

Actual PET strapping waste from the packaging ledger.

- Selected flow: Discarded PET strapping
- Flow property / unit: Mass / kg
- Amount rule: A_waste_strapping / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

###### Discarded wooden transport pallet outlet (`waste_pallet`)

Actual discarded pallet mass, distinct from reusable pallet returned as Product.

- Selected flow: Discarded wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: A_waste_pallet / Q; complete matched raw numerator from cp_pack and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_pack
- Sources: epa-camelback-1973

##### Elementary flows

###### Water vapour to air emission (`water_vapour`)

Actual evaporation from cooling/drying/cleaning after separate moisture and liquid-discharge measurements; no invented reaction water.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A_water_vapour / Q; complete matched raw numerator from cp_emission and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-camelback-1973

###### Carbon black particulate to air emission (`carbon_black_air`)

Measure actual escaped carbon-black particulate at the declared air boundary; captured dust is a separate waste/internal-return stream.

- Selected flow: Carbon black particulate to air
- Flow property / unit: Mass / kg
- Amount rule: A_carbon_black_air / Q; complete matched raw numerator from cp_emission and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-camelback-1973

###### Toluene to air emission (`toluene_air`)

Conditional only if actual supplied cement/analysis identifies toluene; no solvent composition or emission fraction is presumed.

- Selected flow: Toluene to air
- Flow property / unit: Mass / kg
- Amount rule: A_toluene_air / Q; complete matched raw numerator from cp_emission and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-camelback-1973

###### n-Hexane to air emission (`hexane_air`)

Conditional only for analytically identified n-hexane; retain concentration, volume and common gas conditions.

- Selected flow: n-Hexane to air
- Flow property / unit: Mass / kg
- Amount rule: A_hexane_air / Q; complete matched raw numerator from cp_emission and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-camelback-1973

###### Carbon dioxide, fossil, to air emission (`co2_air`)

Only included real fossil combustion; reconcile measured/independently calculated fuel carbon, not a purchased-energy duplicate.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: A_co2_air / Q; complete matched raw numerator from cp_emission and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-camelback-1973

###### Carbon monoxide to air emission (`co_air`)

Only actual included combustion with species-specific evidence; no default emission factor.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: A_co_air / Q; complete matched raw numerator from cp_emission and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-camelback-1973

###### Nitrogen monoxide to air emission (`no_air`)

Record NO separately from NO2 if present in actual exhaust; do not relabel aggregate NOx as measured individual NO.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: A_no_air / Q; complete matched raw numerator from cp_emission and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-camelback-1973

###### Nitrogen dioxide to air emission (`no2_air`)

Record actual NO2 species evidence; unknown speciation remains a disclosed measurement gap, never a fitted closure outlet.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: A_no2_air / Q; complete matched raw numerator from cp_emission and cp_stock, divided once in the reporting operation defined in section 8.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: cp_emission
- Sources: epa-camelback-1973

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | p_camelback | Use these rules only for an attributional study context requiring allocation, consistent with the declared study goal. First distinguish a separable black-box line, genuine joint production, shared services and internal trim recycling; these are not interchangeable. No automatic substitution/recycling credit or whole-PEF/ILCD conformity is asserted. | ilcd-2010-allocation |
| allocation_causal | all inventory rows | First collect separable stage data and use subdivision/virtual subdivision to assign exclusive ingredient, layer, meter and service burdens. Then determine physical causality separately for each remaining exchange: embodied mass where it determines material use, actual processing/energy demand for mixing/extrusion, and limiting occupied area/volume with duration for storage or limiting mass/volume with distance/time for handling. Justify the actual determining cause; a mass or revenue ratio alone is not evidence for every exchange. | ilcd-2010-allocation |
| allocation_residual | all inventory rows | Only the remaining burdens that cannot be assigned by the preceding determining physical causality/virtual subdivision may use justified economic allocation. Use each real co-function output quantity and its market value at the same joint-process exit and specific state/quality/bulk condition; remove subsequent packaging, storage, transport or processing value where those stages are outside that exit. Document price source/period, residual burden pool and reasons no causal assignment is possible; retain uncertainty. Do not freely choose physical versus economic, set a fixed share, turn waste/returns into newly accepted product or grant avoided virgin-product credit. Allocated inventories sum to the original burden. | ilcd-2010-allocation |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Collection retains undivided raw numerators. aggregation_rule declares only the final reporting basis and refers to the sole report_once operation in section 8, the same operation described on the cards; it never performs A/Q during collection or divides successively.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | p_camelback | new_camelback | quality_release_ledger | cohort/profile; layer batch ids; actual net weights; first release/reinspection flags; test results; liner tare; Q | Quality owner weighs/validates first accepted complete uncured strips using calibrated scales and traces unique lot events. Keep positive new mass, zero-output/failed lots and old return events separately. This protocol collects raw counts/masses and never A/Q. Original aggregation reconciliation (collection still retains undivided raw quantities): sum unique first-positive net accepted kg once as Q; reinspection and dispatch do not add Q. | kg | each batch and first acceptance | complete matched actual production/cohort window | declared plant and product/profile/two-layer route | per 1 kg reference flow | calibration; lot release/test records; duplicate-event reconciliation |
| cp_material | p_camelback | individual recipe and formulation inputs | recipe_charge_ledger | actual supplied material/brand/formulation; layer and stage; gross/net charges; assay/solids/moisture; returns; recipe revision; failed lots; internal transfers | Compounding owner retains raw weigh tickets for each tread and cushion batch through nonproductive/final mixing and milling. Record whole purchased preparations once and constituent subledgers separately. Reconcile every ingredient and any additional actual one as its own atomic card; do not turn an unknown recipe into a presumed zero. No normalization here. Original aggregation reconciliation (collection still retains undivided raw quantities): retain raw attributable numerator A_i after stock/cohort attribution; report_once is the only A_i/Q. | kg | each charge/batch | all attributable runs including failures and rework | both layer mixing/milling and actual compound storage | per 1 kg reference flow | scale tickets; supplier CoA; full formulation; stage batch links |
| cp_utility | p_camelback | each utility lubricant and fuel | metered_utility_ledger | stage meter owner/coverage; start/end meters; duration only for rates; integrated volumes; conditions/density/enthalpy; lubricant and fuel stocks; supply and returns | Utility owner collects raw separate mixing, shaping, cushion application, cooling, dust control, tests and ancillary warehouse/handling records. Keep purchased steam/heat separate from onsite generation; record every real utility Product return. Meter shares require cp_allocation evidence. No A/Q at collection. Original aggregation reconciliation (collection still retains undivided raw quantities): raw-unit conversions precede report_once; retain A_i before division. | kg; kWh; MJ; m3 | meter intervals and batch events | same matched cohort including idle startup failed runs and rework | declared meter/utility boundary for all included stages | per 1 kg reference flow | meter calibration; utility invoices; return meters; heat and fuel records |
| cp_output | p_camelback | each scrap coproduct and liquid outlet | physical_outlet_ledger | stream identity/composition/state; raw weight/volume and density; waste/product decision; recipient; offcut returns; failed/expired material; liquid/solid assays | Production/environment owner records actual cutting/conditioning/testing offcuts, rejects, dust, purges and washwater separately. Track internal trim return to the correct layer batch and real external exports; a stock residual is not a measured outlet. Record all actual additional external Product/utility outlets atomically. No A/Q. Original aggregation reconciliation (collection still retains undivided raw quantities): retain raw outlet A_i; reconcile physical/element ledgers before sole report_once division. | kg; m3 | each outlet and reconciliation interval | same production/cohort window with failed runs | complete line and pollution-control boundary | per 1 kg reference flow | weighbridge/waste tickets; recipient; composition assays; return trace |
| cp_emission | p_camelback | each actual elementary species | species_measurement_ledger | chemical species and air medium; concentration/time profile; integrated volume; gas conditions; actual fuel/solvent assays; control capture; moisture and stock changes | Environment owner identifies actual emitted species and obtains measured mass or concentration with matched integrated gas/liquid volume and conditions. Rates alone receive duration; integrated volume never does. Add actual species-specific cards where present; total VOC/COD or closure residual cannot substitute for species or reaction-water evidence. No A/Q. Original aggregation reconciliation (collection still retains undivided raw quantities): convert raw species mass first, then same report_once once; retain unmeasured scope explicitly. | kg; mg/m3; m3 | representative complete measurement intervals | matched operating failed/rework and control periods | declared outlet and fugitive air boundaries | per 1 kg reference flow | analytical methods; sampling calibration; gas basis; capture/outlet reconciliation |
| cp_stock | p_camelback | WIP finished and returned lots | mass_and_carried_burden_ledger | opening/closing WIP by layer/stage; mass and each carried exchange burden; first releases Q; opening/closing finished lots; actual dispatch; customer returns/reacceptance; prior cohort and internal handoffs | Production and warehouse owners jointly reconcile original raw period numerators and stock/carried burdens, including zero-output failures and all rework. Keep production and finished-warehouse accounts separate; cancel handoffs only on consolidation. Closing finished mass already released in Q is not another production outlet. Old returned material retains original burden; assign real incremental rework to its proper original cohort without counting a second release. Do not charge prior-cohort stock to current new Q or discard it. No normalization at collection. Original aggregation reconciliation (collection still retains undivided raw quantities): cohort-match raw A_i with opening carried burdens less closing carried burdens where still unfinished; transfer finished cohorts without adding another Q; use sole report_once only after attribution. | kg; original exchange units | each stage/lot event and period boundary | complete declared cohort periods, including carried prior-period WIP/finished/return histories | all included stages plus finished warehouse and dispatch interface | per 1 kg reference flow | signed stocktake; lot genealogy; per-exchange burden rollforward; return and dispatch records |
| cp_pack | p_camelback | each packaging/release article and real handling | packaging_and_handling_ledger | each article composition; opening/closing unused and attached stock; new external procurement; package mass on released/dispatched/returned lots; damage/waste; return/reuse cycles; real handling/warehouse events | Packaging owner maintains a complete independent physical stock account for each material, including packaging leaving with product, waste, outward returns, incoming reuse and ending stocks. Packaging contributes burdens but never net rubber Q. A reused article is not purchased again. Preserve real packaging, storage and shipping loads; utility/fuel quantities are owned by cp_utility and attributed once, not duplicated here. No A/Q. Original aggregation reconciliation (collection still retains undivided raw quantities): preserve raw packaging/service A_i and complete material rollforward; same sole report_once operation after attribution. | kg; actual handling service units | each package/dispatch/return and stocktake | same matched original product cohort with actual storage/dispatch period disclosed | packaging store, production release, finished warehouse and factory loading | per 1 kg reference flow | package weights/BOM; stock and reuse logs; dispatch manifests; stage cost/meter linkage |
| cp_allocation | p_camelback | shared services and any genuine joint products | attributional_allocation_evidence | declared attributional goal; distinguishable stages; per-exchange causal quantities; limiting capacity/time; all real joint outputs and exit-state quantities/prices; residual burden pool; price source and period | LCA owner first separates/subdivides stages and virtually assigns exclusive material/utility burdens. For each still-shared exchange establish its determining physical cause; only remaining unassignable burdens use justified same-process exit-condition market value. Keep the residual pool and reasons inspectable; no fixed allocation shares or credits. Collect raw amounts, never A/Q. Original aggregation reconciliation (collection still retains undivided raw quantities): attribute complete raw A_i before report_once; allocated totals must equal the pre-allocation inventory. | original exchange units; kg; currency | each shared service/co-product and relevant price interval | same site, actual exit condition and relevant production/value period | actual joint process and all co-functions, with separate packaging/transport stages | per 1 kg reference flow | process/meter causal evidence; justified subdivision limits; actual value records; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| report_once | all inventory rows | a_i = A_i / Q; A_i is the complete same-product/profile, two-layer route, uncured state and matched-cohort raw numerator after conversion and justified attribution, including failed/zero-output runs, real rework and opening less unfinished closing WIP carried exchange burdens. Keep original finished/return cohorts and real storage/packaging/handling/dispatch burdens in their separate ledgers, cancel internal handoffs and charge incremental return work once to its proper cohort. Q is unique new first-positive accepted net kg from cp_release and must exceed zero; never add same-Q closing finished stock or reacceptance. This is the sole normalization; cards and aggregation_rule point to this same operation, never successive divisions. The reference output is 1 kg. | A_i; Q; cp_release; cp_material; cp_utility; cp_output; cp_emission; cp_stock; cp_pack; cp_allocation | a_i | epa-camelback-1973; ilcd-2010-allocation |
| physical_closure | all inventory rows | Keep three explicit audit gates. Production: opening WIP + external mass-bearing production receipts + internal receipts = new first-released Q + actual already-released rework transfers + every other real production Product outlet (including sold compound, exported condensate and heat-transfer return water) + actual waste/elementary mass outlets + closing WIP + other internal transfers out. Finished warehouse: opening finished stock + new Q received + real external returned strips + internal rework receipts = actual external dispatch/reacceptance + transfers to rework + actual waste + closing finished stock. Q already contains same-cohort closing finished stock, which is never another production outlet. Each external crossing is entered once by its receiving/exporting owner; internal movements have equal paired entries. Consolidated line/warehouse/handling physical closure: opening WIP and finished stock + all actual external mass-bearing inputs and returned strips = actual external finished-strip dispatch + all other actual external Product/utility outlets + waste/elementary mass outlets + closing WIP and finished stock; cancel Q and every internal handoff rather than adding the nested ledgers. The reference quantity remains first release, not this physical dispatch mass; never equate the two gates. For each packaging material independently reconcile opening unused/attached/reusable stock + new external procurement + real external return receipts = packaging actually leaving attached to external product dispatch or as real outward return + waste + closing unused/attached/reusable stock. Packaging attached to new Q is only an internal stock transfer if still in the finished warehouse. Include all packaging masses and stocks once in the consolidated physical account, while never adding them to net rubber Q or procuring a reused article twice. Energy and service units are separate from mass closure. Audit each relevant element using actual compositions independently of whole physical mass; actual species or reaction water require independent evidence, never residual fitting. | cp_material; cp_utility; cp_output; cp_emission; cp_release; cp_stock; cp_pack | physical_and_element_accounts | epa-camelback-1973 |
| raw_convert | all inventory rows | Use actual assayed supplied formulation mass and separate constituent subledgers; onsite dilution/blending uses separately acquired materials and real energy/loss. Volume times compatible measured density yields mass; matched species concentration times integrated volume yields species mass after unit conversion. Multiply by duration only for a true rate, never an integrated volume. Distinguish water incorporated, physically evaporated, discharged and carried with stock; any actual reaction/species needs independent mechanism/assay evidence, not COD or fitted closure. No normalization occurs in this rule. | cp_material; cp_utility; cp_emission; cp_stock; cp_pack | converted_raw_numerators | epa-camelback-1973 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_native | new_camelback | The native Product flow names a manufactured finished camel-back strip, with production mix at plant, no specified recipe, grade, profile dimensions, cure state, geography/locationOfSupply or medium, no CAS, and only reference Mass. The broad native name does not prove the selected cushion-backed uncured profile, actual supplier, site or quantities. Apply this card only to the independently verified uncured extruded tread plus uncured cushion-gum backing for tractor-rear/OTR use; the selected manufacturer page excludes fast-moving commercial vehicles. No native global or CN/HK supply scope is invented. Finished means a finished supplied strip, not a vulcanized tyre. | Full native identity, exact property/unit versions and independent supplied-form evidence |
| dq_recipe | all inventory rows | No numerical recipe, yield, utility intensity, emission fraction, layer ratio, cure temperature or shelf life is supplied by this PCR. Collect complete actual BOMs/whole preparations and add missing atomic exchanges. Auxiliary UUID/provider matching remains an actual identity/data task, not proof of missing core methodology. | Recipe revisions; full supplier formulation; plant measurements and acceptance evidence |
| dq_period | all inventory rows | Q is the unique positive net mass in kg first accepted at the manufacturing quality-release gate for the same product/profile, two-layer route, uncured state and matched cohort; both rubber layers are included and removable release liner/transport packaging are excluded. Q is newly released production, not actual dispatch. Do not add closing finished stock of the same Q as another production output. Keep finished warehousing, packaging, handling and dispatch in a separate real ledger and cancel internal production-to-warehouse handoffs on consolidation. Returns/reinspection do not create new Q. A previously released return retains its original mass and burden; incremental rework is attributed once to the appropriate original cohort, with old-cohort stocks/burdens kept separate from current new production. | cp_release/cp_stock signed mass and burden reconciliation; all zero-output and return events |
| dq_allocation | all inventory rows | Retain exchange-specific causal assignments before residual economic allocation; all shares reconcile to the actual original burden. Declare attributional scope and residual uncertainty, not full method-program compliance. | ilcd-2010-allocation; cp_allocation |
| dq_packages | all inventory rows | Keep complete independent physical packaging stock, attachments, return/reuse, waste and outgoing product-package records; do not erase real warehouse/shipping loads, add packaging to Q or procure the same reused material twice. | cp_pack; cp_stock; cp_utility |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | new_camelback | Verify both rubber layers remain uncured in the supplied strip and declared profile/Tractor-Rear-OTR scope is supported. The reference UUID is a broad finished-strip identity, not proof of recipe, supplier geography or quantitative provider compatibility; preserve all limitations in this output card and dq_native. | surya-camelback; patent-camelback-1965 |
| validate_gate | all inventory rows | Q is the unique positive net mass in kg first accepted at the manufacturing quality-release gate for the same product/profile, two-layer route, uncured state and matched cohort; both rubber layers are included and removable release liner/transport packaging are excluded. Q is newly released production, not actual dispatch. Do not add closing finished stock of the same Q as another production output. Keep finished warehousing, packaging, handling and dispatch in a separate real ledger and cancel internal production-to-warehouse handoffs on consolidation. Returns/reinspection do not create new Q. A previously released return retains its original mass and burden; incremental rework is attributed once to the appropriate original cohort, with old-cohort stocks/burdens kept separate from current new production. | epa-camelback-1973 |
| validate_complete | all inventory rows | Require complete raw period numerators, failed/zero-output runs, WIP/finished/returned inventory and carried burdens, all actual external Product/utility outlets and packaging physical subledgers. Check atomically resolved exchanges, original-unit conversions, whole-preparation nonduplication and physical/element/species evidence independently; do not fit unknown water or emission to closure. | epa-camelback-1973 |
| validate_allocation | all inventory rows | Check declared attributional applicability, subdivision/virtual subdivision, per-exchange determining physical causality and only then documented residual exit-value allocation. Scientific approval and mapping acceptance require separate review; no fixed share, avoided-product credit or programme-compliance claim is implied. | ilcd-2010-allocation |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Qualified supplied uncured cushion-backed camelback strip input to a separately modelled tractor-rear/OTR retreading process |
| allowed_use | Same declared profile/layer-state route and explicit first-release basis, with actual provider compatibility and cohort/packaging burden reconciliation |
| excluded_use | Pre-cured interchangeable tread, generic compound, whole new/retreaded tyre, innerliner/tube/flap, narrow direct-wound ribbon or fast-moving commercial use; no tyre-kilometre or lifetime equivalence |
| required_metadata | All reference qualifiers, actual recipe/formulation and layer identities, full native restrictions, stage owners, site/time, acceptance gate and first Q, WIP/finished/return and packaging physical/burden ledgers, actual providers and attributional allocation evidence |
| required_quality_disclosure | Actual measured/estimated/missing quantities, unmeasured species, identity/provider gaps, stock/cohort completeness and residual causal/value uncertainty; packaging and dispatch completeness are explicit |
| update_trigger | Product/profile/layer or cure-state change; route/recipe/formulation, site/provider, acceptance gate, stock handling or allocation-method change |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| surya-camelback | handbook | Surya Rubber Industries, Unconventional Hot Rubber; https://www.suryarubbers.com/products/unconventional-hot-rubber | Actual uncured extruded camelback with cushion-gum backing; tractor-rear/OTR scope and fast-moving-commercial-vehicle exclusion; no recipe, cure-setting or performance default. |
| patent-camelback-1965 | literature | US3223572A, Machine for building a tread on pneumatic tires, 1965, conventional camelback background; https://patents.google.com/patent/US3223572A/en | Historical supplied die-profile uncured strip and later tyre mould cure; narrow-ribbon winding invention is not this route. No historic dimensions, service life or settings adopted. |
| epa-camelback-1973 | official_guidance | US EPA, 1973 Development Document for Tire and Synthetic Segment of Rubber Processing, printed pp.13,15,16,19 (PDF21,23,24,27); https://nepis.epa.gov/Exe/ZyPDF.cgi/20011LOU.PDF?Dockey=20011LOU.PDF | Historical dry-compounding/milling, extrusion, cushion application, cooling and genuine trim return, linked explicitly to camelback. Technical synthesis with the manufacturer source, not one factory/SKU; no numeric recipe, yield, efficiency, emission factor, current regulation or LCA allocation inferred. |
| ilcd-2010-allocation | official_guidance | European Commission JRC, ILCD Handbook, General guide for LCA, Detailed guidance, First edition March 2010, complete §§7.9.2–7.9.3, printed pp.255–272; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Limited to attributional multifunctional-process situations requiring allocation; subdivision/virtual subdivision and exchange-specific determining physical causality precede residual exit-condition market-value allocation. No free physical/economic choice, automatic recycling credit, fixed share, consequential claim or full-PEF/ILCD compliance claim. |
| surya-cushion-state | handbook | Surya Rubber Industries, Unvulcanised Rubber Strip Gum; https://www.suryarubbers.com/products/unvulcanised-rubber-strip-gum | Unvulcanized cushion/bonding-gum family identity only; page illustrates a vulcanized-tread use, not the same camelback SKU. No recipe, cure setting, dimensions, pack size or shelf-life default transferred. |
