---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uncured-sbr-belt-cover-compound-sheets
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Externally supplied uncured SBR-based belt-cover compound sheets


## 1. Scope and Applicability


This PCR covers only black, unreinforced, uncured SBR-based conveyor-belt cover compound sheets supplied by a Chinese facility to an independent downstream factory after actual industrial ingredient weighing, master mixing, cooling, complete final cure-package incorporation, sheeting/necessary straining, separation/cooling, QC, packing, included warehousing and factory dispatch handling. SBR may be blended with actual NR or BR according to the real specification. The sulfur cure system is fully incorporated but the bulk supply remains unvulcanized. Commercial sheet supply, mechanical compounding and inventory normalization together require a distinct methodology; the classification leaf alone does not authorize a PCR.

Exclude base-polymer production (including 34800 dry E-SBR), an unrestricted rubber category, incomplete-cure masterbatch, internal tyre-plant intermediates/tyre manufacture 36111/12/13, camelback 36115, reclaimed-rubber manufacture 36210, purchased waste-rubber reprocessing, liquid latex/adhesives, other polymer families, peroxide routes, reinforced belt builds and vulcanized sheets/finished belts. Routes or materials outside this subset require separate assessment; similar native names cannot override hard form/route/grade/CAS contradictions.

The evidence is a bounded synthesis of independent primary sources, not a claim that one SKU or factory proves every operation. Supplier pages provide no industrial recipe or quantities; collect actual batch recipes, uncured-supply acceptance and all real burdens. Technical sources: `sld-belt-compound`; `hitkari-uncured-belting`; `somi-belt-mixing`; `flevo-compound-supply`.


## 2. Product Category Identity


| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.uncured-sbr-belt-cover-compound-sheets |
| classification_refs | CPC 3.0 36220; this narrower subset only; scientific review and positive mapping pending |
| covered_products | Externally supplied unreinforced black sulfur-curable uncured SBR-based belt-cover compound sheets |
| excluded_products | Base polymers, tyre/retread intermediates, camelback, reclaimed rubber, cured articles and other exclusions in §1 |
| representative_product | Black sheet with complete actual recipe/cure package, batch inspection and independent dispatch evidence |
| production_route | Mechanical master/final mixing and sheet supply; no bulk-product vulcanization |
| market_state | Uncured sheet stock of finished compound, supplied by net mass for downstream forming/curing; not a finished belt |


## 3. Reference Flow


| Field | Value |
| --- | --- |
| What | Supply qualified complete uncured belt-cover sheet stock downstream, without assigning finished-belt service life |
| How much | 1 kg reference flow actually net delivered at factory dispatch gate; packaging kept outside product net mass |
| How well | Meet actual commercial recipe, uncured state, dimensions and batch-release specification. Cured test-slab properties do not make the bulk supply vulcanized |
| How long or cycle | One actual measured reporting period and matched supplied cohorts with carried burdens; no default service life or inventory days |
| reference_flow_link | product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Uncured rubber belt compound `51822322-6f49-4de3-858f-f2327cc8d9e9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual Chinese production site and reporting period; commercial formulation and each base-polymer grade; black carbon-filled sulfur-curable uncured state and complete cure package; unreinforced sheet dimensions and supplied surface/release preparation; master/final mixing and actual finishing route; lot-specific QC acceptance and scope of cured test slabs; net product mass excluding detachable packaging and actual moisture; factory dispatch gate with actual net delivered Q distinct from newly released P; opening/closing WIP and finished-stock masses with carried burdens; unique dispatch return reinspection and redelivery links; packaging and included warehousing handling scope; native CN plant-mix scope and broad belt-compound identity limits |

Declare each required qualifier in dataset metadata, product description, reference-flow comment or equivalent consumable fields. cp_delivery determines Q from unique actual net deliveries; newly released P, mixing throughput, test slabs or reinspection/rework do not replace it. Preserve the full native limitations in the terminal product card in consumable dataset context.


## 4. Measurement and Unit Rules


| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg net delivered compound, excluding detachable packaging and retaining actual supplied moisture/retained release preparation state. Measure net mass under cp_delivery; do not assume volume density. |
| one_reporting_basis | all inventory rows | Physical quantity/energy declared by row | per 1 kg reference flow | All cards/protocols use the same net delivered Q. Collection retains raw numerators only. report_once performs one normalization after raw conversions and burden carry attribution; cards and aggregation_rule describe that same operation and do not divide again. |
| formulation_mass | all inventory rows | Mass and constituent subledger | kg | Count each whole commercial preparation/oil-extended polymer once by supplied mass; active, carrier-oil/rubber and water subledgers are not additional purchases. Convert phr only with the actual recipe, each base-rubber basis and real batch amounts, never from a datasheet. |


## 5. System Boundary



### Boundary Abstraction


| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased base rubbers, fillers, oils, ingredients and whole preparations at plant receipt, plus opening raw-material/WIP/finished/packaging stock with carried burdens |
| starting_condition_role | Foreground starting point for mechanical compounding and supply; not an upstream zero-burden cutoff |
| product_classification_scope | Narrow uncured-sheet subset of CPC3.0 36220; not the entire heterogeneous leaf |
| recursive_input_rule | Internal rubber/dust returns retain transfers and incremental processing burdens, not new purchases. Purchased same-category compound needs separate upstream data and state proof; do not recurse indefinitely or automatically include it in this primary compounding route |
| upstream_dataset_requirement | Match upstream datasets to each commercial input and actual utility route/region/year/supplied form. A native physical identity does not establish background plant quantities or provider compatibility |
| disclosure | Disclose measured period, site, recipe version, mixing/finishing/supply state, Q gate, P/Q differences, stock carry, packaging and included warehousing/dispatch, gaps and all native limits |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_complete_supply | compound_supply | Include actual ingredient weighing, all master/final mixing passes, cooling/straining/sheeting, separation treatment, real QC/test slabs, packing, finished-stock storage, handling and factory dispatch preparation, with actual burdens and wastes. Do not omit failed/zero-output runs, rework, shutdown cleaning or inventory carry. Do not apply the selected native identity to non-Chinese production or contradictory fixed routes. | `somi-belt-mixing`; `flevo-compound-supply` |
| boundary_delivery | product | Terminal gate remains actual net accepted delivered Q, not new release P. Keep gross physical dispatch G, actual physically received returned compound R_phys and each evidenced original accepted-delivery reversal quantity D_rev separate. Do not assume D_rev equals R_phys when moisture, retained preparation, loss/rework, period or acceptance state differs. Link reversals/redelivery to the original lot and its exchange-level burden history without another delivery or new production. Only when the same state and scope are independently verified may Q = G - D_rev describe the net bridge; Q remains the cp_delivery unique accepted-net definition. Opening/closing undelivered FG and their carried burdens stay outside Q until genuinely delivered. Internal release handovers cancel on consolidation; actual external returns remain physical movements and are not internal cancellations. |  |
| boundary_upstream_downstream | compound_supply | The foreground receipt boundary does not remove upstream material/utility burdens. Customer belt reinforcement, belt building, bulk curing and customer transport/use/end-of-life are outside this factory-delivery boundary and need downstream models; real onsite cured QC slabs remain inside. | `hitkari-uncured-belting`; `somi-belt-mixing` |


## 6. Process Inventory Structure



### Process Map


| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| compound_supply | Complete industrial compounding, finishing and independent supply | required | Actual supply route within §1; tag every exchange by stage and cohort | Weigh/master/final mix → cooling/sheeting/QC → packing/storage/dispatch; one integrated supply unit | per 1 kg reference flow |

Raw records for the integrated unit remain separated into those three stages. Masterbatch, final compound and release handover are internal states, not new external purchases or a second terminal product. Subprocess models must pair each physical transfer and cancel it; only product is the reference. Conditional cards below are concrete substance/preparation examples triggered only by the actual recipe, not a default industrial formulation. Add separate atomic rows for every genuinely different base-rubber grade, filler, additive, whole preparation, utility, fuel/refrigerant or emission.


### Process: Complete compounding and independent supply (`compound_supply`)


#### Inputs


##### Product flows


###### Dry styrene-butadiene rubber (`sbr`)

Required SBR base. Weigh each actual commercial grade separately, declaring styrene content, polymerization route, oil-extension and moisture. A polymer ingredient is not the finished compound. Expand one row per genuinely different purchased grade; never infer the grade from the final-sheet datasheet.


- Selected flow: Dry styrene-butadiene rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `sld-belt-compound`


###### Dry natural rubber (`nr`)

Conditional blend component only when the actual approved batch recipe uses it. Record each actual grade and received moisture; absence needs recipe evidence, not a nominal zero.


- Selected flow: Dry natural rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:


###### Polybutadiene rubber (`br`)

Conditional actual blend component. Preserve catalyst/grade and supplied form; never substitute SBS, SBR, EPDM or reclaimed rubber under this name.


- Selected flow: Polybutadiene rubber
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:


###### Carbon black (`carbon_black`)

Required reinforcing filler for the black-compound subset. Record each actual grade and charged mass separately, including dust diverted to capture, loss and return. No phr loading is prescribed.

Native Product identity is commercial solid carbon black, CAS1333-86-4, with Mass only and no fixed grade, particle aggregate, manufacturing route or geography. Its graphite-family classification is isolated metadata debt; names, CAS, synonyms and full chemical comment identify carbon black, not graphite, captured soot or an elementary dust emission. Confirm the actual reinforcing grade, supplied form/assay and compatible upstream provider; no density, performance or quantity follows from the UUID. A bought carrier-bound or other whole carbon-black preparation needs its own preparation representation, not a second constituent purchase.

- Selected flow: Carbon Black `dee14a4f-c02b-4bf5-affc-9e66b1d9a8ce`
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-rubber-process-2008`


###### Precipitated silica (`silica`)

Include only when actually charged in addition to carbon black. Record supplied moisture and treatment; do not purchase the same silica twice through a premix and constituent subledger.


- Selected flow: Precipitated silica
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:


###### Paraffinic rubber process oil (`process_oil`)

Actual purchased oil grade only if used. Record the whole delivered oil and its specification. Oil already within purchased oil-extended polymer or a preparation is a constituent subledger, not this second purchase. Add a separate specific row for any different real oil.


- Selected flow: Paraffinic rubber process oil
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `somi-belt-mixing`


###### Zinc oxide powder (`zinc_oxide`)

Conditional separately purchased activator. Preserve assay and physical grade; zinc oxide contained in a bought preparation is not duplicated.


- Selected flow: Zinc oxide powder
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `epa-rubber-process-2008`


###### Stearic acid (`stearic_acid`)

Conditional separately acquired ingredient from actual batch records, not an assumed common recipe. Distinguish a commercial fatty-acid mixture from pure stearic acid.


- Selected flow: Stearic acid
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:


###### Elemental sulfur powder (`sulfur`)

For the selected sulfur-curable route record actual sulfur grade and charge, with low-temperature final addition as specified by the real process. This card represents separately acquired powder only; an oil-treated sulfur preparation requires its own whole-preparation row. No cure yield or reaction water is inferred.

Native Product identity is sulfur described as a light-yellow brittle crystal or powder, with Mass only; no fixed CAS, grade, production route or geography is declared. Use it only for the actual independently supplied elemental powder selected here, with supplier grade/assay and compatibility evidence. It is not an oil-treated, rubber-bound or wet cure preparation, sulfur dioxide, a pesticide or an assumed phr dose; those different real supplies require their own whole-preparation/chemical rows. No recipe, yield or reaction-water quantity follows from identity.

- Selected flow: Sulfur `9b418f5d-0b3e-4e95-b2ae-bd8518c122c6`
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `somi-belt-mixing`; `epa-rubber-process-2008`


###### Rubber-bound dibenzothiazyl disulfide preparation (`mbts_preparation`)

Conditional concrete accelerator preparation when actually purchased. Weigh the entire supplied preparation, record MBTS assay, binder and other constituents in subledgers and reconcile their mass fractions. Do not add a duplicate purchase of MBTS or carrier rubber. A different accelerator requires its own chemical/preparation row; this example is not a mandated industrial recipe.


- Selected flow: Rubber-bound dibenzothiazyl disulfide preparation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:


###### Polymerized 2,2,4-trimethyl-1,2-dihydroquinoline (`tmq`)

Conditional actual antidegradant. Record commercial form and assay; another antioxidant is another atomic exchange. Do not infer use from a nominal hardness or tensile specification.


- Selected flow: Polymerized 2,2,4-trimethyl-1,2-dihydroquinoline
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:


###### Aqueous zinc-stearate anti-tack dispersion (`anti_tack`)

Conditional purchased batch-off dispersion. Count whole wet preparation once; assay solids and carrier water separately without duplicate procurement. Meter added dilution water separately and track bath opening/closing stock, film retained on product, evaporation, bleed and sludge. If a different real release preparation is used, give it its own specific row.


- Selected flow: Aqueous zinc-stearate anti-tack dispersion
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_material and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: `flevo-compound-supply`; `somi-belt-mixing`


###### Alternating-current electricity (`electricity`)

Collect separately tagged actual electricity for bale cutting, weighing, every master/final mixing pass, mills, straining, sheeting, cooling, air compressors, dust collection, testing, packaging, warehouses and dispatch handling. Include failed runs and rework. Do not convert installed power or nameplate capacity into consumption.


- Selected flow: Alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_utility and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `somi-belt-mixing`


###### Purchased industrial water (`water`)

Measure actual external makeup for process contact, cooling, anti-tack dilution and cleaning with stage tags. Closed-loop circulation is not new water purchase. Record discharge and evaporation independently; supplied preparation carrier water remains its subledger.


- Selected flow: Purchased industrial water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_utility and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources: `somi-belt-mixing`


###### Purchased saturated steam (`steam`)

Conditional actual utility for the compounding/supply facility only, including documented QC test-slab preparation. Record pressure/temperature and delivered enthalpy in MJ; keep steam mass and condensate return in the physical utility ledger. Downstream belt vulcanization steam is excluded. The steam MJ card is the sole owner of the actual purchased supplier steam-production, treatment and delivery water/heat background; the paired steam_water_supply kg physical view does not add a second steam or water provider. Reconcile separately measured inlet, return and other outlet mass/state/enthalpy and hold-up; do not assume equal supply/return mass or quality or automatic condensate credit.


- Selected flow: Purchased saturated steam
- Flow property / unit: Thermal energy / MJ
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_utility and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:


###### Supplied saturated-steam water mass (`steam_water_supply`)

Only when external saturated steam is actually used by this compounding/supply facility or documented QC test-slab preparation, record gross steam-water kg crossing the supplier interface. This conditional card does not require steam use or include downstream belt vulcanization. Pair it with steam MJ and external condensate kg; it is a physical utility-water view, while the steam heat card owns the supplier production/treatment/delivery water/energy background once. Do not add the same water procurement or supplier background again. Independently retain actual supplied pressure, temperature, dryness/quality, phase and specific enthalpy; opening/closing line/equipment hold-up; actual external condensate return, bleed, liquid drains or vapour leaks and each real receiver. Do not assume equal supply/return mass or quality. Reagent carrier water and internal circulation are not new purchases. Actual different supplies, phases or destinations require separate atomic rows; MJ, ordinary liquid process water, pressure-fixed steam or a heat-only UUID cannot substitute for this mass inlet. Gross physical mass is not reduced by burden-stock vectors or economic allocation; associated burden attribution retains its own exchange vectors. UUID remains a specific grade/state matching gap, not absence of an exchange.

- Selected flow: Supplied saturated-steam water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; A_i is this direction actual measured gross steam-water mass, reported once per reference flow by the single section 8 operation; collect under cp_utility without burden-vector reduction of physical mass.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:


###### Polyethylene separation film (`separator_film`)

Actual interleaving film for uncured sheets, distinct from stretch wrap. Reconcile net material issued, retained film, recoverable reuse stock and scrap; reusable internal circulation is not repurchase.


- Selected flow: Polyethylene separation film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_pack and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `flevo-compound-supply`


###### Polyethylene stretch wrapping film (`stretch_film`)

Actual dispatch wrapping only. Weigh material separately from product Q and separation film.


- Selected flow: Polyethylene stretch wrapping film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_pack and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sld-belt-compound`


###### Corrugated shipping carton (`carton`)

Conditional actual shipping carton with supplier composition and measured tare. No generic packaging UUID or universal carton rate is assumed.


- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_pack and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sld-belt-compound`


###### Wooden transport pallet (`pallet`)

Actual wood pallet acquisition or attributable reuse service, with tare and actual pool/loss ledger. Whole purchased article once; do not repurchase embodied wood through a subledger.


- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_pack and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources: `sld-belt-compound`; `flevo-compound-supply`


#### Outputs


##### Product flows


###### Uncured rubber belt compound (`product`)

Terminal externally supplied, unreinforced black SBR-based, sulfur-curable compound sheets after all actual mixing, finishing, QC release, packing, included warehousing and factory dispatch handling. Native identity: production mix, at plant, CN; mixing and compounding, uncured; Product flow; reference Mass, with no additional property, fixed grade, CAS or separate locationOfSupply/compartment declared. Its comment identifies the belt-plant mixing-step reference product, 1 kg; it does not prove an external shipment, SBR recipe, finished sheet specification or background supplier intensity. Adopt the broad physical belt-compound identity only for this independently qualified final-supply subset in China, with actual recipe/form, full cure-pack incorporation, release and shipment proof. A masterbatch without the full actual cure package, tyre intermediate, camelback, reinforced green belt or cured sheet cannot use this terminal row. Q is actual net delivered product mass, not newly released production.


- Selected flow: Uncured rubber belt compound `51822322-6f49-4de3-858f-f2327cc8d9e9`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `generic`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_delivery`
- Sources: `sld-belt-compound`; `hitkari-uncured-belting`; `somi-belt-mixing`


###### Polyethylene separation film (`supplied_separator`)

Actual separator film physically leaving with gross compound shipments G, including a real redelivery. This is the outward leg of the previously issued article, not another purchase, net rubber Q or a coproduct. Independently record return receipts, empty returns, waste and stock in cp_pack; a distinct external return direction needs its own atomic row before use.

- Selected flow: Polyethylene separation film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_pack and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:


###### Polyethylene stretch wrapping film (`supplied_wrap`)

Actual measured wrap physically leaving with gross shipments G, including any actual return/redelivery shipment, excluding rubber net Q. Do not reduce outward wrapping mass by the rubber delivery reversal or net Q; stock/returned/waste quantities remain separate.

- Selected flow: Polyethylene stretch wrapping film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_pack and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:


###### Corrugated shipping carton (`supplied_carton`)

Actual measured carton accompanying gross physical shipments G. External returned-carton receipts and distinct empty-return outputs remain separate directions in cp_pack and individual cards where actual; do not use net deliveries or an ownership credit as physical outward mass.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_pack and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:


###### Wooden transport pallet (`supplied_pallet`)

Actual measured complete pallet accompanying gross physical shipments G. Distinguish acquisition, external returns received, a distinct empty pallet return outward and lifecycle pool/service attribution; no pallet movement is a new rubber output or a second purchase. Add a separate actual empty-return direction card where needed, and never reduce gross pallet outward mass by reuse or net Q.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_pack and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:


###### Returned steam condensate (`condensate`)

Conditional external utility return. Weigh or integrate metered volume with actual density; retain temperature/enthalpy where relevant and avoid counting it as new water supply.


- Selected flow: Returned steam condensate
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_utility and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_utility`
- Sources:


##### Waste flows


###### Uncured SBR-based compound waste (`rubber_reject`)

Actual unrecoverable trim, off-spec and failed compound exiting to treatment. Internal reusable trim remains in the return/WIP ledger, not waste, new purchased rubber or new production. Saleable off-grade material requires a separate qualified external product row and allocation decision before modelling.


- Selected flow: Uncured SBR-based compound waste
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_outlet and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:


###### Vulcanized rubber laboratory test waste (`cured_test_scrap`)

Conditional QC slab/test residue from within the supply boundary; retain its actual preparation burden even though bulk product remains uncured. Do not turn cured test mass into Q.


- Selected flow: Vulcanized rubber laboratory test waste
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_outlet and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:


###### Carbon-black-containing collected mixing dust (`captured_dust`)

Measure actual separately collected solid waste, composition and destination. Returned dust is an internal transfer; captured dust is not the same outlet as uncaptured air emissions.


- Selected flow: Carbon-black-containing collected mixing dust
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_outlet and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources: `somi-belt-mixing`; `epa-rubber-process-2008`


###### Rubber-compounding process wastewater (`wastewater`)

Measure external liquid discharge including actual bath bleed and cleaning wastewater; retain suspended solids, dissolved species and treatment interface. Do not combine sludge or condensate return into this liquid row.


- Selected flow: Rubber-compounding process wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_outlet and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:


###### Zinc-stearate-containing batch-off sludge (`sludge`)

Conditional distinct wet sludge when the stated dispersion is used; record wet mass, solids and species. Its water is not also wastewater discharge.


- Selected flow: Zinc-stearate-containing batch-off sludge
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_outlet and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_outlet`
- Sources:


###### Waste polyethylene film (`pe_scrap`)

Actual discarded film, separate from film supplied with Q, returned for reuse or remaining in stock.


- Selected flow: Waste polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_pack and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:


###### Waste corrugated cardboard (`carton_scrap`)

Actual discarded carton material with destination, excluding reused/returned cartons.


- Selected flow: Waste corrugated cardboard
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_pack and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:


###### Waste wood from transport pallets (`wood_scrap`)

Actual discarded wooden pallet fraction; a returned serviceable pallet is not waste.


- Selected flow: Waste wood from transport pallets
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_pack and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:


##### Elementary flows


###### Particulate matter smaller than 10 micrometres, to air (`pm_air`)

Collect actual measured PM10 for this mixing/finishing/handling route where present, including fugitive scope and abatement. Keep particle fractions non-overlapping; total dust is not automatically PM10.


- Selected flow: Particulate matter smaller than 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_emission and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources: `epa-rubber-process-2008`


###### Styrene, to air (`styrene_air`)

Conditional separately identified mixing/finishing species. Use species-specific evidence, not a generic VOC number or SBR monomer-content inference. Each other actually detected species receives its own exact flow row.


- Selected flow: Styrene, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_emission and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources:


###### Water vapour, to air (`water_vapour`)

Actual evaporated water from cooling/batch-off/cleaning. Distinguish free water, supplied carrier water, steam and any independently established actual reaction water. This uncured route has no assumed vulcanization-water term; do not fit both unknown water and an unknown loss outlet to one residual.


- Selected flow: Water vapour, to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete raw period numerator divided once in the single reporting operation in section 8; collect under cp_emission and establish applicability from actual records.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_emission`
- Sources:


## 7. Allocation and Co-product Handling


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_scope | compound_supply | Apply the following ILCD7.9.2/7.9.3 hierarchy only within the declared attributional study case. First subdivide or virtually subdivide and trace dedicated materials, operations, tests and supply burdens by exchange; one generic physical or revenue fraction cannot cover the plant. | `ilcd-allocation-2010` |
| allocation_physical | compound_supply | For each remaining shared exchange identify determining physical causality and attribute using a measured/quantifiable relationship, for example actual operation electricity or processing service with intensity evidence, and storage constrained by actual area/volume and duration. Neither mass nor machine time is an unevidenced default; different exchanges may have different determining drivers. | `ilcd-allocation-2010` |
| allocation_remaining | compound_supply | Only for residual shared burdens that cannot reasonably be assigned by the preceding steps, document why and then use actual coproduct market values at the same process exit location/state and quantity/quality. Retain price period, currency and product quantities and evidence any deductions for subsequent packing/transport value. This is not free physical/economic choice and imposes no fixed share. Allocated shares must reproduce original total burdens; unsupported relationships remain for review. | `ilcd-allocation-2010` |
| allocation_returns | compound_supply | Internal trim and return reprocessing create no new coproduct, negative purchase or default credit. For externally sold off-grade compound/recovery outlets establish each Product/Waste identity, actual recipient/treatment boundary and applicable method before adding separate atomic rows and attribution. No fixed recycling rate or avoided-burden credit is supplied. Packaging accompanying goods is not a coproduct. |  |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules


Collection methods retain undivided raw-period numerators. aggregation_rule declares only the final reporting basis and denotes the same single report_once operation, not normalization during collection.


### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.


| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | compound_supply | terminal product and inventory | weighing and cohort ledger | lot; recipe; route; supplied sheet and moisture/release-preparation state; site; release event; new released mass P; unique dispatch ID; gross physical bare dispatch G; actual received returned mass R_phys and condition; original accepted-delivery quantity/vector reversal D_rev; return/redelivery and original reporting-cohort links; unique net accepted Q; disjoint opening/closing raw WIP finished bath/utility/equipment stocks and per-exchange carried vectors; actual rework additions/removals and repair WIP; packaging tare | Owner: production/QC and warehouse custodian jointly. Retain undivided actual period and cohort records; independently weigh every gross physical dispatch and return excluding detachable packaging, with supplied/returned moisture and retained preparation states. Keep P separate. Determine unique accepted-net Q using evidenced original delivery reversals and redelivery deduplication; never infer original reversal mass/vector from changed physical return mass or erase real gross movements. Carry prior FG and every inherited exchange vector with its original cohort, distinguish already assigned history from genuinely new rework/storage/packing increments, and record actual adjustments to prior delivery attribution. Q is not replaced by P, throughput or a first-release service denominator. At Q<=0 retain all real records, loads and historical corrections and issue no unit result. | kg | each event and period reconciliation | whole actual reporting period and opening/closing cohort links | actual Chinese supplier site and dispatch gate | per 1 kg reference flow | scale calibration; release/dispatch/return chain; physical stock count; prior-period burden ledger |
| cp_material | compound_supply | each atomic ingredient | batch weigh records and supplier specification | ingredient and grade ID; as-supplied gross/tare/net; assay; moisture; carrier composition; receipt/issue/return; opening/closing stock; batch pass; failed runs; WIP transfer and carried burden | Owner: batch-room materials custodian. Record unnormalised period amounts for every actual grade and pass, including failed or zero-output batches, off-spec rework and carried opening/closing WIP. Distinguish purchased whole formulations from assayed constituents and internally blended preparations. Do not infer industrial ingredients from cured-property datasheets. | kg | each receipt and batch charge | same raw period and product/route/form cohort as cp_delivery | weighing master/final mixing and bath preparation | per 1 kg reference flow | supplier CoA; signed recipe; scales; batch IDs; transfer ledger |
| cp_utility | compound_supply | each atomic utility and utility return | stage-tagged meter records | meter start/end; integrated volume; rate and duration where used; unit; pressure; temperature; enthalpy; density; steam/condensate mass; stage; failed runs; allocation driver; inventory burden transfer; steam_dryness_quality_phase; opening_closing_steam_condensate_line_equipment_holdup; each_actual_inlet_return_bleed_leak_mass_T_P_specific_enthalpy; actual_phase_receiver; sole_supplier_background_owner | Owner: utilities engineer. Retain raw electricity, external water makeup, thermal supply and actual return quantities for all included operations, including QC, cooling, compressors, capture, storage, packing and dispatch preparation. Record measured process-specific demand before shared loads. Rate times duration yields an amount; an already integrated volume receives no additional time multiplier. No division by Q during collection. Only if external steam is actually used by the facility or real QC, independently measure steam_water_supply, external condensate and actual bleed/leaks/hold-up without equal-state or equal-mass assumptions; heat MJ and physical kg stay separate. The steam heat card owns the supplier water/energy background once; the paired kg view creates no duplicate purchase or automatic credit. Physical quantities are not burden-allocated downward; existing single reporting and net-delivery Q rules remain. | kWh; MJ; kg; m3 | continuous or each meter interval | same actual period with opening/closing WIP and finished-stock burden carry | all included supplier operations | per 1 kg reference flow | meter calibration; supply bills; property/temperature records; allocation decision by exchange |
| cp_pack | compound_supply | each packaging input outward movement and waste | independent physical packaging ledger | specific article and composition; measured tare; actual new acquisition; actual external return received separately; opening/closing empty stock; attached-WIP stock; attached-FG stock; reusable pool; actual gross outward with each shipment; distinct outward empty return; waste; ownership and original cohort/vector; actual reconditioning/handling increments | Owner: packaging and warehouse custodian. Retain every raw physical direction independently of rubber net Q: opening empty/attached-WIP/attached-FG/reusable + actual new acquisitions + external returns received = corresponding closing stocks + actual outward with gross shipments + distinct empty returns outward + actual waste. Internal reuse cancels and is not another acquisition. A supplier-included article is physically recorded with its upstream-inclusion convention, not repurchased through its constituents. Separate physical quantity from consumed/pool-service burden attribution; allocation, reused turns, net product delivery or return reversal cannot reduce gross package movements. A distinct actual external return direction not represented by an existing specific atomic card requires its own article/direction card before data completeness is claimed. Measure actual pool/service evidence, not a default life. | kg | each movement and stocktake | same actual period and supplied cohort; carry pre-existing stock burden | packaging area warehouse and dispatch gate | per 1 kg reference flow | tare weights; purchase/movement records; packaging pool counts; waste receipts |
| cp_outlet | compound_supply | each material outlet | outlet weights and waste manifests | outlet ID; wet/dry mass; composition; destination; captured versus emitted; internal return ID; WIP and bath inventories; treatment interface; off-grade sale status | Owner: production and environmental custodian. Measure raw separate physical outlets and actual tests, including zero-output losses, test slabs, trim, dust, bath bleed and sludge. Distinguish internal return from external sale/waste and liquid water from sludge moisture. Preserve related treatment and rework burdens; unmeasured losses remain gaps, not invented residual outlets. | kg | each batch and dispatch | complete actual period including failed runs and carried inventories | supplier production and effluent interfaces | per 1 kg reference flow | weighbridge; analyses; waste manifests; return ledger |
| cp_emission | compound_supply | each elementary species and compartment | species-resolved emission measurements | species; compartment; concentration; gas/liquid actual flow; wet/dry conditions; pressure; temperature; reference conditions; integrated volume; rate-duration; control inlet/outlet; fugitive scope; detection limit | Owner: environmental engineer/laboratory. Retain raw species-specific period results and convert compatible concentration and total flow to emitted mass with documented conditions, without dividing by Q. Keep PM fractions and captured solids non-overlapping. Screening VOC/COD is not a molecular emission inventory or a fitted mass/water closure. Add one card for every other actual species and real fuel/refrigerant exchange before delivering a dataset. | kg; mg/m3; m3; h | campaign monitoring aligned to operating conditions | same actual period with startup shutdown failures and rework | process and fugitive emission interfaces | per 1 kg reference flow | species method; blank/calibration; detection limits; operating log; total volume trace |


### Calculation Rules


| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| report_once | all inventory rows | a_i = A_i / Q, once for a positive unique net accepted delivery Q from cp_delivery. Build undivided burden-bearing input A_i after raw unit/state conversions, disjoint raw/WIP/FG/bath/utility/equipment stock-vector carry and dedicated/shared attribution, correcting each stock once rather than adding receipts and already stock-corrected consumption together. Retain failed/zero-output runs, actual QC/rework/storage/packing and old-cohort histories, carry undelivered burdens and separate already assigned returned-production traces from genuine new increments. For physical gross shipment/return/package-outward, paired steam-water inlet and utility-return records, A_i is the measured physical direction quantity attributed to that actual cohort; associated burden allocation/stock carry remains a separate vector and never reduces an actual gross movement. Retain all raw acquisition, return, outlet and stock quantities independently. The product reference numerator is Q, so Q/Q=1 kg is the net view, not a third gross dispatch. Cards and aggregation_rule reuse this single stored result with no second division. At Q<=0 keep all real quantities/burdens and historical corrections without a unit result; do not use P or another cohort denominator. | A_i; Q; cp_delivery; cp_material; cp_utility; cp_pack; cp_outlet; cp_emission | a_i |  |
| raw_conversions | all inventory rows | Convert actual net weighing to kg; volume needs measured/evidenced density of the same supplied substance and state. Rate × duration produces a numerator; integrated volume gets no extra duration. Concentration and total gas/liquid quantity require matching conditions; retain electricity kWh and heat MJ with evidenced unit conversions. Steam enthalpy is not density. All conversions precede report_once. | cp_material; cp_utility; cp_pack; cp_outlet; cp_emission | converted raw numerators |  |
| physical_closure | compound_supply | Independently of normalization close each raw physical material/element control volume: opening disjoint stocks + actual external physical inflows = closing disjoint stocks + all actual gross external physical outflows. Use G for actual gross compound dispatch and R_phys for actual external returned compound; Q is a derived net reporting view, not an extra or substitute gross outflow. In FG, opening FG + internal release P + R_phys + actual rework material additions + opening repair WIP + independently evidenced moisture/species gains = closing FG + G + actual FG/rework waste or material removals + closing repair WIP + independently evidenced moisture/species losses. Close raw/WIP, bath, utility/equipment charge and separate packaging stocks without overlap; pair internal production/FG/repair transfers and cancel only those internal movements on consolidation. Retain every actual Product outlet, utility return, waste and emission. The net Q/Q reference output and the gross physical ledger are alternative linked views, never additive physical outputs. Only the verified same-state bridge can substitute Q for G minus the corresponding reversal; do not add R_phys again to that net view. Production does not add closing FG again after counting the same P. Packaging uses actual gross shipments/returns, not net Q. Actual aqueous/carrier/species and reaction-water terms require independent evidence; no COD or shared residual may fit two unknown sinks. | cp_delivery; cp_material; cp_utility; cp_pack; cp_outlet; cp_emission | raw mass element and burden reconciliations |  |
| formulation_subledger | compound_supply | Book each purchased preparation by its actual whole supplied mass and assayed active/carrier/water subledgers, with no duplicate procurement. Onsite preparation uses separately purchased actual ingredients and real blending energy/losses. Packaging has a separate physical subledger covering opening/closing stock, accompanying outward goods, discard, return and reuse; its tare is excluded from Q. | cp_material; cp_pack; cp_delivery | nonduplicated formulation and packaging ledgers |  |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |


### Data Quality Requirements


| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Before UUID adoption inspect complete native name components, official EN/ZH names, CAS, route/form/grade, geography/locationOfSupply, type/compartment and every property. Follow exact referenced property version → exact unit-group version → reference unit; never latest or secondary-property-as-density. | query hit, complete state100 direct read and exact support chain; reject hard contradictions and disclose metadata debt |
| coverage | compound_supply | Complete actual recipe, all-stage exchanges and applicability conditions; retain failed/zero-output/rework runs and opening/closing stock with carried burdens. Ordinary auxiliary UUID/future provider gaps do not erase atomic exchanges; real methodological or final-reference gaps require review. | batch recipe, complete ledgers/meters, QC and dispatch evidence; unmeasured is not zero |
| evidence_limits | compound_supply | Technical synthesis does not claim one SKU/factory. No universal recipe, yield, energy/water intensity, reaction water, allocation share or lifetime. Data validity needs actual year, region, cohort, measurement and uncertainty evidence. | `sld-belt-compound`; `hitkari-uncured-belting`; `somi-belt-mixing`; `flevo-compound-supply`; `epa-rubber-process-2008`; `ilcd-allocation-2010` |
| allocation_quality | compound_supply | Retain attributional case, subdivision and physical-causality judgment by exchange; only remaining burdens may use evidenced same-process-exit market values, with price/driver uncertainty disclosed. | `ilcd-allocation-2010` |


## 9. Validation Rules


| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | product | Confirm SBR base, carbon black, full sulfur cure package, uncured/unreinforced sheet state and independent external supply within selected native Chinese plant-compounding scope. Reject polymer, tyre/retread intermediates, camelback, reclaimed rubber, reinforced green belt or cured sheet substitution. | `sld-belt-compound`; `hitkari-uncured-belting` |
| validate_q | all inventory rows | product must be the unique reference_flow_link terminal Product output with the reference UUID. Q must be unique positive actual net delivery, not P or gross throughput. Reconcile same-product/route/supply-state opening/closing WIP/finished stock with carried burdens, failure/rework and deduplicated return/redelivery, and apply report_once only once. |  |
| validate_mass | compound_supply | Check physical_closure and formulation_subledger including all actual external Product outlets/utility returns, packaging accompanying goods and complete packaging opening/closing/discard/return/reuse. Do not double-count preparation constituents, internal returns or stock after release, or invent species/reaction water from residuals. |  |
| validate_evidence | compound_supply | Original sources, all applicability limits and native restrictions must remain in consumable normative context; bilingual projection must preserve every field. Equal Schema/IDs alone cannot establish ingredient/supply-state, dimensions, missing core methodology or actual compatibility. Allocation follows only the declared attributional hierarchy; scientific review remains separate. | `ilcd-allocation-2010`; `epa-rubber-process-2008` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |


## 10. Published Dataset Profile


| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Supply a genuinely matched uncured cover-sheet input to downstream belt manufacture; model forming/curing separately |
| allowed_use | Evidence-matched supplied state, route/recipe, site-region and period with explicit 1 kg net-delivery and packaging scope |
| excluded_use | Default substitute for arbitrary rubber, base polymer, tyre compound, camelback, reclaimed rubber or cured articles; full ILCD/PEF or scientific-approval claims |
| required_metadata | All Required qualifiers, raw protocol owners, Q/P and stock carry, allocation case/method, upstream provider compatibility, species/packaging/utility outlets |
| required_quality_disclosure | Actual measurement/period coverage, gaps/uncertainty, technical-synthesis source limits and complete native Chinese plant broad-identity limits; disclose unmatched auxiliaries |
| update_trigger | Material changes to recipe/base-rubber grade, cure package, supplied form/state, operations/boundary, measurement/Q gate, stock attribution or supporting native/method evidence |


## 11. Data Sources


| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| sld-belt-compound | literature | Xiamen SLD Rubber, SBR Rubber Compound for Belt, web snapshot 2026-10-16, https://www.sldrubber.com/sbr-rubber-compound-for-belt.html | SBR-based belt covering compound offered in China in flaky form with film/carton/pallet packaging. Does not establish uncured state, exact formula, black filler, cure package, quantities, performance or shelf life for this category. |
| hitkari-uncured-belting | literature | Hitkari Rubber Industries, Industries We Serve, Conveyor Belting subsection, web snapshot 2026-10-16, https://hitkarirubber.com/industries/ | Independent Indian manufacturer evidence for commercially supplied uncured conveyor-belting sheets, including wear-cover use. Not evidence of the Chinese supplier’s SKU/recipe, and adjacent retreading/matting sections are outside this subset. |
| somi-belt-mixing | literature | SOMI Conveyor Beltings Ltd., Stage Wise Process, steps 1–5, web snapshot 2026-10-16, https://somiconveyor.com/our-usp | Industrial two-stage master/final mixing, curative addition, sheet formation, cooling, dust collection and utilities. Indian belt-plant case, not the same SKU or a universal process duration, equipment intensity, recipe or yield. Later fabric coating, belt building and curing are excluded; no magnetic-field mechanism is adopted. |
| flevo-compound-supply | literature | Flevo Rubber Compounding, Production, web snapshot 2026-10-16, https://www.rubbercompounding.nl/production/?lang=de | Independent Dutch compounder’s internal mixing, finishing, sheet supply and customer-specific separation/packaging options. Does not establish a belt-cover recipe, mandatory release agent, packaging or supply quantity. |
| epa-rubber-process-2008 | official_guidance | US EPA, Emission Factor Documentation for AP-42 Section 4.12 Manufacture of Rubber Products, Draft Final November 2008, §§2.1 and 4.1.1, https://www.epa.gov/sites/default/files/2020-10/documents/db04s12.pdf | Historical US process/ingredient-specific mixing-emission context. No universal numerical factor or recipe is transferred, downstream vulcanization factors are excluded, and this technical report is not the LCA allocation authority. |
| ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, complete §§7.9.2–7.9.3, printed pp.255–272, https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | LCA method authority for the declared attributional case: subdivision/virtual subdivision, exchange-specific determining physical causality and only then market value for remaining burdens at the same process exit condition. Not unrestricted physical/economic choice, consequential substitution, fixed shares, blanket recycling credits or full ILCD/PEF compliance. |
