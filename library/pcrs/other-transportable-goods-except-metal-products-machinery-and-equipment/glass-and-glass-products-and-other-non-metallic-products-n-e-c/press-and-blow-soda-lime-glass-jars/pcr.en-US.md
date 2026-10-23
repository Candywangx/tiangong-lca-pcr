---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.press-and-blow-soda-lime-glass-jars
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
translation_status: canonical
---

# Press-and-blow soda-lime glass jars

## 1. Scope and Applicability

This attributional PCR covers complete manufacture of empty wide-mouth uncoloured soda-lime-silicate glass food jars: individually received glassmaking sand and carbonate/mineral ingredients with separately traced compatible cullet; weighing and mixing; air/natural-gas-fired regenerative tank melting, actual electric boost, fining and forehearth conditioning; gob shearing; wide-mouth press-and-blow forming on an individual-section machine; actual hot-end outer-surface coating when used; annealing and cooling; actual cold-end outer-surface lubrication when used; dimensional/visual/physical inspection and unique first quality release. Include actual batch transport, shear-liquid preparation, mould swabbing, compressed/cooling air generation, rejected-gob cooling and internal cullet recovery, utilities, emissions treatment, maintenance and all operating modes. Actual subsequent original-cohort packing, storage, handling, dispatch and return services remain separately disclosed. This is raw-material-to-jar manufacture, not buying finished jars and repacking them. [jrc-glass-bref-2013; emhart-making-containers; oi-glass-manufacture]

Exclude narrow-neck bottles by blow-and-blow or NNPB, wide-mouth jars by another forming route, ampoules and pharmaceutical vials, glass lids/stoppers/closures, coloured/opal/lead/borosilicate glass, tubing, flat glass and its fabrication, mirrors, insulating units, formed building blocks, glass fibres and woven/nonwoven products. Exclude decoration, printing, labels, inner-surface dealkalisation/fluorination, filling, capping, food processing, installed use and downstream end of life. Deliberate colour/decolour additive recipes or another furnace/fining/coating route require renewed applicability and every real additional material/species row; they cannot hide behind an assumed zero or an “other” bundle. Residual raw-material colour is measured rather than assigned a numerical whiteness default.

JRC section2.4 and figure2.5 identify the press/plunger blank, invert and final air-blow jar route, with the adjacent bottle route as countercontext; sections2.2–2.3 and3.3 supply raw-batch, melting, utility, coating and residue context. Emhart independently explains the press-and-blow jar mechanism, annealing, inspection and supply. O-I's manufacturing sheet corroborates the complete batch-to-inspected-container chain. Its product500766 catalog and publisher specification establish a real empty flint wide-mouth food-jar terminal; the photograph, technical table and final suitability caveat are read together. These are a transparent technical synthesis, not one common SKU, factory, recipe or contemporary order. The product offer does not prove that product500766 uses the selected furnace/forming/coating route. No catalog weight, capacity, refillability, certification, life, temperature, strength, density, cullet fraction, yield, furnace factor, emission factor or recipe is adopted. JRC's typical oxide table is not a purchase recipe; its historical per-tonne-melted-glass tables and pack-to-melt ratios are not first-release-Q data. Industrial evidence supplies no LCA allocation choice; ILCD supports only the limited attributional hierarchy in section7. [jrc-glass-bref-2013; emhart-making-containers; oi-glass-manufacture; oi-jar-500766; jrc-ilcd-2010]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.press-and-blow-soda-lime-glass-jars |
| classification_refs | CPC3.0:37191; narrower; no accepted mapping implied |
| covered_products | Empty wide-mouth uncoloured soda-lime press-and-blow food jars by the complete section1 route |
| excluded_products | Bottles; other forming/furnace routes; lids and closures; ampoules/vials; coloured/opal/lead/borosilicate glass; tubing; sheets; mirrors; insulating glazing; building blocks; glass fibres/fabrics/mats; decoration and inner treatment; filling and food processing |
| representative_product | One declared net dry empty jar configuration at first quality release without lid or packaging |
| production_route | Separate raw ingredients and cullet → batch → regenerative gas melting/fining/forehearth → gob → plunger blank/final blow → actual hot-end outer coating when used → anneal/cool → actual cold-end outer lubrication when used → QC → first release → separately observed original-cohort services |
| market_state | Empty annealed food jar, actual retained protective coating; closure and removable transport package separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide empty wide-mouth food-packing jar of declared drawing and inspection state |
| How much | 1 kg |
| How well | Declare actual drawing/finish, composition, annealing, coating and QC; no performance or certification default |
| How long or cycle | One complete manufacture to unique first quality release; later observed service interval separate, no life default |
| reference_flow_link | finished_jar |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wide-mouth jar drawing and finish; uncoloured soda-lime composition and measured mass state; virgin batch ingredients and individual whole supply forms; external cullet provenance and contamination; internal cullet/WIP history; regenerative natural-gas/air melting and actual boost; press/plunger blank and final blow route; actual coating formulation and retained mass; actual lehr and inspection/rejection specification; unique first-release Q cohort and time; actual post-release service interval and return history; raw and installed-stock exchange vectors; each packaging article and gross movements; species/compartments and independent water/carbon evidence; provider geography and electricity voltage/mix |

Declare every required qualifier in actual foreground metadata, product description or equivalent fields; missing qualifiers make the reference flow incomplete. Native limitations accompany the corresponding flow cards.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_release calibrated weighing and unique first quality release of net dry jar mass Q including actual retained coating and excluding removable packaging/closures. Count, capacity and secondary property coefficients establish no mass/density. |
| `raw_measurement` | all inventory rows | original physical property of each row | actual original units | Collect undivided raw records under each cp protocol. Convert true units/state, reconcile stock/history and actually allocate before calc_reference alone performs A_i/Q once; cards and aggregation reference the same x_i. Q=0 retains burden with no unit result. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual individual raw materials and compatible external cullet with whole supply form/composition and inherited burdens |
| starting_condition_role | Foreground manufacturing start, not purchased finished-jar terminal |
| product_classification_scope | CPC3.0:37191; narrower press-and-blow jar method |
| recursive_input_rule | Same-category returned jar/cullet preserves original provenance/history and actual processing increments; no recursive disappearance or repeated purchase/release |
| upstream_dataset_requirement | Match each material/preparation/package/energy to actual supplier form/route/geography and explicit transport, included package and water-energy convention |
| disclosure | Full manufacture, first-Q gate, each physical subgate, all stock exchange vectors, separately observed original-cohort service interval, unknowns and exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope` | all datasets | Only empty wide-mouth uncoloured soda-lime food jars by raw-batch air/natural-gas regenerative melting and wide-mouth plunger press-and-blow forming through actual hot-end outer coating when used, annealing/cooling, actual cold-end outer lubrication when used and unique first QC release are covered. Bottles; other forming/furnace routes; lids and closures; ampoules/vials; coloured/opal/lead/borosilicate glass; tubing; sheets; mirrors; insulating glazing; building blocks; glass fibres/fabrics/mats; decoration and inner treatment; filling and food processing remain outside this method. Real changed chemistry/route requires renewed applicability and all actual atomic exchanges; source product500766 does not prove the selected factory route. | `jrc-glass-bref-2013`; `emhart-making-containers`; `oi-jar-500766` |
| `boundary_route` | manufacture | From individually received raw ingredients and prepared external cullet, include receipt/storage, batch weighing/mixing, tank melting/fining/conditioning, gob shear and delivery, plunger blank pressing, inversion/final air blowing, take-out/ware handling, actual hot-end outer coating when used, annealing/cooling, actual cold-end outer lubrication when used, inspection/reject sorting and first release. Preserve batch, melt, forming, coating/anneal and QC subgate physical records even when inventory is consolidated. Do not replace manufacture with bought-finished-container packing. | `jrc-glass-bref-2013`; `emhart-making-containers`; `oi-glass-manufacture` |
| `boundary_utilities` | manufacture | Include actual compressor/fan/pump and treatment energy, shear dilution, mould swabbing, cullet-quench water/oil separation, emission control, maintenance and every failed/zero-output/start/stop/idle/hot-hold/cleanup/rework interval. Purchased heat, each backup fuel, process gas, water-treatment chemical or other genuinely used ingredient requires its own atomic row and upstream boundary. No generic utilities bundle or nominal zero is allowed. | `jrc-glass-bref-2013` |
| `boundary_q` | manufacture; services | Q is the sum of unique newly first-quality-released net dry finished-jar kg of the declared cohort, including retained actual coating and excluding removable packages/closures. Count each jar once; its closing FG is already in Q and is not added again as production output. Shipment, return, reinspection and service repair create no Q. Do not substitute net delivery or gross shipment as denominator. Actual post-release services retain original cohort, observed interval and future-coverage gaps separately. | `oi-glass-manufacture`; `emhart-making-containers`; `jrc-ilcd-2010` |
| `boundary_history` | all inventories | Reconcile opening/closing raw stock, prepared batch, molten furnace/forehearth glass, forming/annealing WIP, internal cullet and FG by physical quantity and each inherited exchange vector. For non-WIP installed refractory, moulds, filter bags and fluid charges also retain physical stock and full historical vector. Already consumption-corrected raw records are not corrected twice. Current additions follow actual consumption/service assignment; retained stock is not assumed fully consumed. | `jrc-ilcd-2010`; `jrc-glass-bref-2013` |
| `boundary_returns` | services | Link each real returned jar to original dispatch and first-release cohort, reverse its original dispatch quantity/vector, retain carried product/coating/water state and add only true incremental work/material/energy and measured mass/species changes. Opening FG, old returns and their histories never burden unrelated current Q. Re-melting a returned article transfers its original burden once into its actual new manufacturing cohort; it is not simultaneously a repair and a free new ingredient. | `jrc-ilcd-2010` |
| `boundary_packaging` | all packages | For each material/article and both incoming/outgoing supply, independently reconcile opening empty + attached WIP + attached FG + reusable inventory + new purchased + supplier-included physical arrival + external return received = corresponding closing + with gross physical dispatch + stand-alone external return sent + waste. These inventories and movement legs are mutually exclusive. Internal reuse/transfer cancels. Return received is not another purchase. Packaging is excluded from Q, and gross dispatch is not net product quantity or an automatic coproduct/credit. Identify actual moisture and any real repaired old/new wood/metal components separately. | `jrc-ilcd-2010`; `jrc-glass-bref-2013` |
| `boundary_formulation` | all supplied preparations | Each bought whole formulation is purchased once; assay, active ingredient, retained coating and carrier water/oil are child mass/element accounts, not second purchases. Real on-site preparation instead lists each actual purchased ingredient, added water, mixing energy and loss; cancel internal mixture transfer. Raw glass ingredients are not purchased as finished batch and repeated again. Other actually used precursor/sorbent/packaging forms require a new specific row and applicability assessment. | `jrc-glass-bref-2013` |
| `boundary_species` | all physical gates | Each actual species and outlet is atomic. NOx, SOx, total Sn/B/C, VOC as carbon, COD and aggregate metals/particles are analytical indicators, not arbitrary chemical masses. Keep NO, NO2, N2O and N2O4 distinct. Chemical formula/assay and independent reacted extent plus measured residual/capture support any stoichiometry; generic oxide or emission tables do not. Preserve all unknown species/quantities as unresolved, not zero or a fabricated split. | `jrc-glass-bref-2013` |
| `boundary_water_air` | manufacture; services | Use one consistent physical control volume for humid-air intake and gross gas/water exits. Independently measure actual intake composition, outlet residual O2/N2/Ar, CO2 sources and water phases. Separate air-carried H2O, free raw moisture, formulation carrier, actual evaporation/condensation, structural water and genuinely evidenced step-specific reaction water/fuel water. Integrated volume is already integrated; only a true rate is integrated over time. Density is independently measured for that substance and state. External heat-exchange water/condensate returns are Product returns with true thermal state/enthalpy and supplier water-energy convention, not invented steam/boilers or free credits. | `jrc-glass-bref-2013` |
| `boundary_completeness` | all datasets | Each manufacturing subgate, the FG service gate and their consolidation must close full wet physical mass and independently relevant elements (Si/Na/Ca/Mg/Al/C/H/O/S/Sn/Cl and real other constituents), with internal batch/melt/cullet/first-Q transfers cancelled. Reconcile measured product coating/water/part changes by cohort. A single residual cannot solve two unknowns; total mass/element closure does not prove molecular or reaction-water identity. Measured gaps beyond declared uncertainty remain a data-production hold. | `jrc-glass-bref-2013`; `jrc-ilcd-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Complete jar manufacture from batch to first release | required | Complete declared applicable route | core | finished_jar |
| services | Actual original-cohort post-release services | conditional | Actually occurring original-cohort services in observed interval | supporting | No new Q |

The inventory below consolidates complete manufacturing subgates; cp protocols still trace each subgate. Conditional flows are recorded when real; only verified absence permits not_applicable, never unknown-as-zero. Add a specific atomic card for every real unlisted flow. Packaging/logistics cannot replace manufacture or purchase the same upstream burden twice.

### Process: Complete jar manufacture (`manufacture`)

#### Inputs

##### Product flows

###### silica sand (`silica`)

Individually received glassmaking quartz sand; weigh actual supplied lot with moisture and impurity assay. Establish actual phase, particle distribution and preparation route; a generic silica or a differently processed fixed-size sand is not automatically this supply. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_material`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: silica sand
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_material`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Anhydrous sodium carbonate soda ash (`soda`)

Whole separately purchased anhydrous soda ash; trace actual hydrate state, assay and supply route. Neither a fixed95% natural-alkali grade nor a hydrometallurgical-recovery route identifies an unspecified glass-grade supply. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_material`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Anhydrous sodium carbonate soda ash
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_material`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Limestone (`limestone`)

Whole carbonate rock input; actual assay and moisture determine retained mineral and separately evidenced reacted carbon. Native Product/Mass limestone explicitly leaves composition, purity, industrial grade, extraction route and provider unspecified; no fixed geography, CAS or other property is declared. Actual rock assay, supplied moisture, processing and upstream burdens must be established; this is not pure CaCO3 or burnt lime by default. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_material`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Limestone `6cf9f186-6e7e-40b5-800e-6759a429e7a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_material`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Dolomite (`dolomite`)

Only if the actual batch uses raw uncalcined dolomite; no implied purchased burnt dolomite or default Mg/Ca composition. Native Product/Mass is raw dolomite mineral/rock at plant production mix for glass batching, not calcinated/agglomerated dolomite. No fixed geography, assay, CAS, grade or physical conversion is established. Native unreported-quantity wording is no quantity evidence. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_material`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Dolomite `c15705ab-58b1-420f-ac59-3938bf8cda76`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_material`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Feldspar (`feldspar`)

Actual mineral batch constituent if used; analyze its alkali/alumina/silica contribution without transferring a typical-recipe estimate. Native Product/Mass is feldspar/alkali-feldspar mineral sand at plant production mix used as batch raw material; no CAS, fixed geography, chemistry or grade. Its comment mentions a typical soda-lime recipe estimate; none of that estimate is adopted as amount, composition or factor. Actual assay/provider state governs. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_material`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Feldspar `ec8f6638-6f17-4849-8ee4-fbe743d52e80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_material`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Anhydrous sodium sulfate (`sulfate`)

Actual separately supplied anhydrous sodium-sulfate fining input if used; water, assay, retained sulphur and measured gas species are separate child accounts. Actual mineral/synthetic route, crystal form and impurities must match the supplied material; do not treat an uncertain crystal structure as resolved. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_material`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Anhydrous sodium sulfate
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_material`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Carbon powder glass fining reductant (`batch_carbon`)

Conditional actual separately bought solid carbon reductant; distinguish elemental carbon from coke, coal and whole proprietary mixtures. Add a separate specific row if another real reductant occurs. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_material`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Carbon powder glass fining reductant
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_material`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Prepared external soda-lime container-glass cullet (`external_cullet`)

Actual externally supplied compatible prepared cullet; retain pre/post-consumer source, preparation burden, colour, composition, contaminants and end-of-waste status. Neither internal scrap nor wafer-route waste glass identifies this purchase. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_material`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Prepared external soda-lime container-glass cullet
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_material`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `jrc-glass-bref-2013`

###### Alternating current (`core_electricity`)

Submeter batch transport/mixing, actual boost, compressors, cooling fans/pumps, lehr electric heat, inspection and abatement across all operating modes; no equipment rating times nominal hours. Native Product identity is CN customer-side grid-average consumption mix at1–35kV, not generator output or a renewable contract. The reference property named Net calorific value is the MJ energy property, with native kWh factor3.6; it does not describe fuel mass or a heating value for glass. A different location, voltage or contractual mix requires a verified replacement, not inherited CN or emission factors. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_energy`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_energy`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-glass-bref-2013`

###### Natural gas (`furnace_gas`)

Actual natural gas burned in the regenerative melter and separately submetered forehearth/lehr furnace burners. Keep gas mass, state-specific volume and measured net heating value distinct; backup fuel requires its own actual species/form row. Native Product/Mass natural gas is burned in an industrial furnace, with no fixed composition, geography or heating value; it does not identify boiler-only fuel, LNG storage or a guaranteed methane purity. Record whole supplied gas at actual state and each combustion location. The preserved old source-classification399 is taxonomy history, not chemistry or route. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_energy`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Natural gas `c536902d-9d84-4984-8504-ab88cdbe8b7a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_energy`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources: `jrc-glass-bref-2013`

###### Process Water (`process_water`)

External treated industrial-water makeup for batch wetting, shear dilution, cullet cooling, circuit losses and cleaning. Record each destination; recirculation and purchased-formulation carrier water are not new supply. Native Product/Mass Process Water is treated industrial process/utility water, also naming reclaimed/recirculating water; no grade, supplier, geography or independent density is fixed, and the only declared property is Mass. Match actual supplied treatment and source. It is not raw abstraction, steam, internally circulating water repurchased, or water already in a bought formulation. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_water`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_water`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

###### Purchased water steam (`purchased_steam`)

Only when real supplied steam is used for batch humidification or another documented operation; actual mass/pressure/temperature/enthalpy and supplier energy/water boundary. No default boiler or steam-generation system is inserted. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_water`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Purchased water steam
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_water`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

###### Liquid heat-exchange water (`external_cooling_in`)

Conditional externally supplied heat-exchange water only; inlet state and provider convention identify its mass and service energy. Internal cooling circulation is cancelled. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_water`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Liquid heat-exchange water
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_water`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

###### Water-soluble glass-shear lubricating-oil concentrate (`shear_concentrate`)

Buy the actual whole shear concentrate once; carrier water and active oil are assay subaccounts. For actual on-site formulation list each purchased constituent, dilution water, mixing energy and loss separately. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_formulation`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Water-soluble glass-shear lubricating-oil concentrate
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_formulation`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Sources: `jrc-glass-bref-2013`

###### Graphite-based glass-mould release preparation (`mould_release`)

Actual whole swabbing preparation for plunger/blank/neck-ring/blow mould; composition, oil/water carrier and consumed versus installed stock must be measured. It is not a purchase of pure graphite plus the same carrier again. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_formulation`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Graphite-based glass-mould release preparation
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_formulation`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Sources: `jrc-glass-bref-2013`

###### Mineral machine-lubricating oil (`machine_oil`)

Actual mechanical lubrication only; trace installed opening/closing fluid charge, makeup, drain, leaks and inherited vector. Do not add inventory correction twice to a meter already reporting consumption. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_aux`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Mineral machine-lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

###### Anhydrous tin tetrachloride (`sncl4`)

Conditional actual whole SnCl4 hot-end outer-surface CVD precursor; distinguish from titanium chloride and monobutyltin trichloride. Count retained coating in the finished jar and independently measure captured residue and actual gas species; no assumed hydrolysis yield or reaction-water factor. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_formulation`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Anhydrous tin tetrachloride
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_formulation`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Sources: `jrc-glass-bref-2013`

###### Polyethylene-based cold-end coating emulsion (`pe_emulsion`)

Actual whole supplied aqueous cold-end formulation when used; retain full supplier composition including dispersants and carrier. PE film, PET resin or dry PE is not this emulsion. Added site dilution water and mixing energy are separate; retained dry coating is part of first-release mass. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_formulation`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Polyethylene-based cold-end coating emulsion
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_formulation`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Sources: `jrc-glass-bref-2013`

###### Calcium hydroxide flue-gas sorbent (`sorbent_lime`)

Only actual supplied hydrated-lime sorbent for acid-gas control; measure assay, moisture and residual capture. No assumed removal efficiency; different real sorbent requires its own whole material row. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_formulation`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Calcium hydroxide flue-gas sorbent
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_formulation`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_formulation`
- Sources: `jrc-glass-bref-2013`

###### Woven polyester dust-filter bag (`filter_bag`)

Only if this actual fabric article is installed/replaced; measure whole new and retired bag, retained dust and installed stock separately. Other actual filter construction must be separately identified. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_aux`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Woven polyester dust-filter bag
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

###### Cast-iron glass-forming mould insert (`mould_insert`)

Conditional actual replacement of this single cast-iron part; whole measured new/retired mass and wear, refurbishment, installed history and service assignment. Other alloys/parts require separate atomic additions. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_aux`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Cast-iron glass-forming mould insert
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

###### Alumina-zirconia-silica refractory block (`refractory`)

Only actual AZS refractory replacement/consumption for the included furnace campaign; record full composition and new/in-service/retired stock with historical exchange vector. Do not assume every furnace uses this grade or full replacement each period. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_aux`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Alumina-zirconia-silica refractory block
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

###### Road freight transport by diesel lorry (`manufacture_road_freight`)

Only this actual separately purchased transport leg with payload, distance, vehicle/rail mode, empty movements and supplier boundary; upstream transport already included in a material dataset is not purchased twice. Site-owned vehicles require their real fuel/energy and emissions as separate atomic exchanges. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_transport`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Road freight transport by diesel lorry
- Flow property / unit: Transport mass-distance / tkm
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_transport`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `jrc-glass-bref-2013`

###### Rail freight transport by freight train (`manufacture_rail_freight`)

Only this actual separately purchased transport leg with payload, distance, vehicle/rail mode, empty movements and supplier boundary; upstream transport already included in a material dataset is not purchased twice. Site-owned vehicles require their real fuel/energy and emissions as separate atomic exchanges. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_transport`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Rail freight transport by freight train
- Flow property / unit: Transport mass-distance / tkm
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_transport`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Sources: `jrc-glass-bref-2013`

##### Waste flows

##### Elementary flows

###### Oxygen from atmospheric air (`air_oxygen`)

Molecular child of actual combustion, forming, cooling and hood air within the same physical control volume; measured humid-air intake and composition, not a purchased compressed-air product in addition to compressor energy. Do not impose a nominal air fraction. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Oxygen from atmospheric air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Dinitrogen from atmospheric air (`air_nitrogen`)

Molecular child of actual combustion, forming, cooling and hood air within the same physical control volume; measured humid-air intake and composition, not a purchased compressed-air product in addition to compressor energy. Do not impose a nominal air fraction. Native Elementary/Mass is molecular N2 CAS7727-37-9, Resources from air/Renewable element resources from air; no geography or air fraction. Use only actual gas intake from ambient air, not the N2 emission, purchased liquid nitrogen, nitrates or a nominal dry-air coefficient. Liquefied/isotope synonyms do not change the declared ambient molecular state. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Argon from atmospheric air (`air_argon`)

Molecular child of actual combustion, forming, cooling and hood air within the same physical control volume; measured humid-air intake and composition, not a purchased compressed-air product in addition to compressor energy. Do not impose a nominal air fraction. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Argon from atmospheric air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Water vapour carried by atmospheric air (`air_water`)

Molecular child of actual combustion, forming, cooling and hood air within the same physical control volume; measured humid-air intake and composition, not a purchased compressed-air product in addition to compressor energy. Do not impose a nominal air fraction. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Water vapour carried by atmospheric air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Carbon dioxide carried by atmospheric air (`air_co2`)

Molecular child of actual combustion, forming, cooling and hood air within the same physical control volume; measured humid-air intake and composition, not a purchased compressed-air product in addition to compressor energy. Do not impose a nominal air fraction. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Carbon dioxide carried by atmospheric air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

#### Outputs

##### Product flows

###### Glass Jar (`finished_jar`)

Unique first quality release of one declared wide-mouth uncoloured soda-lime press-and-blow jar after actual annealing, specified surface treatment and QC. Q is weighed net dry finished-article mass including retained coating but excluding removable packages; no lid/closure is part of Q. Closing finished stock of this cohort is already in Q. Native Product/Mass identity is Glass Jar at plant production mix, with glass-container/container-glass synonyms and jar/food-storage comments; no fixed composition, wide-mouth dimensions, forming route, geography, provider or grade. Use only the declared empty uncoloured soda-lime press-and-blow wide-mouth jar within this PCR; bottles, closures and filled product are excluded. Native food-resistance prose does not certify this use or supply a life/strength/density/item mass. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass.

- Selected flow: Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_release`
- Sources: `jrc-glass-bref-2013`; `emhart-making-containers`; `oi-glass-manufacture`; `oi-jar-500766`

###### Liquid heat-exchange water returned to supplier (`cooling_return`)

Only actual external Product return, measured independently of inlet at its true temperature/pressure/enthalpy and supplier agreement. Internal recirculation is not an export or recovered-heat credit. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_water`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Liquid heat-exchange water returned to supplier
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_water`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

###### Water condensate returned to steam supplier (`condensate_return`)

Only when real purchased steam yields an external returned condensate; trace provenance and mass/thermal state. Do not clone cooling-water return or assume a condensate stream exists. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_water`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Water condensate returned to steam supplier
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_water`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `jrc-glass-bref-2013`

##### Waste flows

###### Rejected soda-lime jar glass cullet (`export_cullet`)

Only actual externally sent rejected glass after segregated internal returns. Internal cullet is neither a new sale nor another virgin purchase and carries its original vector. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_residue`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Rejected soda-lime jar glass cullet
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-glass-bref-2013`

###### Captured mineral glass-batch dust (`batch_dust`)

Actual externally removed captured batch-house dust; retain original composition/moisture and separate internal recovery. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_residue`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Captured mineral glass-batch dust
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-glass-bref-2013`

###### Spent calcium-based flue-gas sorbent residue (`flue_residue`)

Actual sorbent reaction/captured salt/entrained-dust waste as one real supplied waste mixture; characterize composition and moisture without also exporting its constituents. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_residue`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Spent calcium-based flue-gas sorbent residue
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-glass-bref-2013`

###### Tin-containing hot-end coating capture residue (`coating_residue`)

Actual separate tin-containing hood/capture waste when not already part of flue residue; total tin assay does not identify a tin compound or gas species. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_residue`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Tin-containing hot-end coating capture residue
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-glass-bref-2013`

###### Glass-cullet cooling-loop purge wastewater (`cooling_purge`)

Actual wet purge crossing to treatment; independently measure water, glass solids, oil and dissolved constituents. Do not count sludge and the same removed solids twice. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_residue`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Glass-cullet cooling-loop purge wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-glass-bref-2013`

###### Glass-line cleaning wastewater (`cleanup_water`)

Actual segregated cleaning effluent, complete wet mass/composition and destination; not an assumed water-input residual. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_residue`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Glass-line cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-glass-bref-2013`

###### Separated glass-fines sludge (`sludge`)

Actual separately removed wet sludge after solids/oil separation; independent dry-glass, water and contamination analysis. Internal return is cancelled separately. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_residue`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Separated glass-fines sludge
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_residue`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue`
- Sources: `jrc-glass-bref-2013`

###### Spent mineral lubricating oil (`waste_oil`)

Actual drained oil not retained in installed charges, wastewater or another waste; preserve water/contamination and destination. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_aux`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

###### Retired cast-iron glass-mould insert (`retired_mould`)

Actual distinct retired part, worn mass and recovered/refurbished route; historical vectors follow the part without arbitrary salvage credit. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_aux`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Retired cast-iron glass-mould insert
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

###### Spent alumina-zirconia-silica refractory block (`retired_refractory`)

Actual AZS refractory waste corresponding to the campaign stock; separate residual glass and other refractory grades. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_aux`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Spent alumina-zirconia-silica refractory block
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

###### Spent woven polyester dust-filter bag (`spent_filter`)

Actual retired whole bag; characterize attached dust and avoid re-exporting it as separate dust. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_aux`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Spent woven polyester dust-filter bag
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_aux`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_aux`
- Sources: `jrc-glass-bref-2013`

##### Elementary flows

###### carbon dioxide (fossil) (`co2_fuel`)

Actual generated fossil-fuel/carbon-origin CO2 to air; keep mineral and ambient carried CO2 in separately measured source ledgers. This is no generic total-carbon conversion factor. Native Elementary/Mass is CO2 CAS124-38-9 of fossil origin emitted to unspecified air, not water, land-use-change, biogenic or a generic carbon-accounting correction. No geography or factor is fixed. Retain carbonate and atmospheric pass-through source accounts separately and select a verified other compartment when an actual more specific outlet is used. No reference-flow synonym noise authorizes a different chemical. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Carbon dioxide from mineral-carbonate decomposition (`co2_mineral`)

Actual carbonate-origin CO2 requires supplier chemical formula/assay plus independently evidenced reacted extent, retained carbonate and captured/exported carbon; no Table2.4 inversion or fixed batch-to-CO2 coefficient. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Carbon dioxide from mineral-carbonate decomposition
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Carbon dioxide returned from intake air (`co2_air_return`)

Measured atmospheric pass-through CO2 for gross physical closure; paired with its actual inlet and excluded from generated-emission totals. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Carbon dioxide returned from intake air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### water vapour (`water_vapor`)

Actual gross H2O release to air; separately trace air-carried, free moisture, formulation carrier, evaporation, fuel-generated and genuinely evidenced reaction-water contributions. Never infer all water from one mass residual. Native Elementary/Mass is ordinary H2O vapour CAS7732-18-5 to unspecified air, without geography or phase-conversion factor. Its expansive synonym list also contains ice, liquid, heavy/tritiated water and unrelated fragments; these are not adopted identities or permission to alter isotope/phase. Use only ordinary gaseous H2O; liquid wastewater and steam supply stay separate. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Dinitrogen returned to air (`nitrogen_out`)

Actual molecular N2 discharge with measured inlet, nitrates if really used and NO/NO2 separately; a resource-from-air UUID cannot label this emission. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Dinitrogen returned to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### oxygen (`oxygen_out`)

Actual unreacted or genuinely released molecular O2 to air; measure remaining oxygen and its source rather than infer nominal excess air. No dissolved/ionic/singlet oxygen or purchased liquid oxygen identity follows. Native Elementary/Mass is molecular O2 CAS7782-44-7 to unspecified air; no geography or residual-oxygen factor. Synonyms include liquid, singlet/ionic and dissolved forms; these do not identify the actual ordinary gaseous outlet. The corresponding atmospheric intake needs its own resource identity rather than reusing an emission UUID. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Argon returned to air (`argon_out`)

Actual measured molecular argon in gross gas balance with matched intake; no default air composition. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Argon returned to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Nitrogen monoxide to air (`no_air`)

Only actual molecular NO with species-specific measurement; NOx reported as NO2-equivalent is not this amount. Nitrous oxide candidates are not NO. Native Elementary/Mass is molecular NO CAS10102-43-9 to unspecified air, without a fixed geography or factor. Synonyms include correct nitric oxide/NO but also HNO/nitroxyl and a French dioxide term; those are not adopted species. Use only independently measured ordinary gaseous NO consistent with the basename and CAS; no NOx-equivalent, NO2, N2O, HNO or default speciation. A changed outlet requires a compatible reference. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Nitrogen dioxide to air (`no2_air`)

Actual NO2 measured separately from NO, N2O and N2O4; name, CAS and molecular-state evidence must agree. Do not invent NOx speciation or identify a different molecule by an analytical-equivalent label. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### sulfur dioxide (`so2_air`)

Actual molecular SO2 to air from measured fuel/batch/retained-sulphur balance and species sampling; SOx or sulphur totals do not supply the molecule mass. Native Elementary/Mass is molecular SO2 CAS7446-09-5 to unspecified air with sulphur-dioxide synonyms; no fixed geography, concentration or factor. It is not SOx-as-SO2 analytical equivalence, sulphate ion, elemental sulphur or a product gas. Verify any changed compartment before reuse. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### hydrogen chloride (`hcl_air`)

Actual gaseous HCl to air from real furnace/coating operation after abatement; no aqueous hydrochloric-acid mixture or assumed SnCl4 conversion is represented. Native Elementary/Mass is HCl CAS7647-01-0 specifically to non-urban air or from high stacks. Use only that evidenced outlet; other HCl outlets remain separate. Synonyms include aqueous acids and formulations, which do not turn this molecular gaseous emission into a purchased acid solution. No concentration, capture efficiency, geography or reaction yield is supplied. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: hydrogen chloride `08a91e70-3ddc-11dd-97fc-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Hydrogen fluoride to air (`hf_air`)

Conditional actually detected HF from raw/cullet contamination; no intentional fluoride formulation in scope and no HF default from a sector range. Native Elementary/Mass is molecular HF CAS7664-39-3 to unspecified air, without fixed geography/grade or emission factor. Isotope, hydrofluoric-acid and formulation synonyms do not identify actual isotope-enriched gas, aqueous acid or elemental F2; use only the actual ordinary HF gas. It remains conditional on independently evidenced occurrence, not a sector-table default. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Carbon monoxide to air (`co_air`)

Conditional actual incomplete-combustion CO at its measured gaseous species and medium; preserve start/stop and failures. Native Elementary/Mass is fossil-origin molecular CO CAS630-08-0 to unspecified air, without fixed geography or factor. Cryogenic-liquid/flue-gas synonyms do not mean this whole exhaust mixture or liquid CO. Use only measured fossil CO; other carbon origins require separate explicit rows and cannot be assigned fossil by assumption. Neither total carbon nor CO2 is this amount. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Tin tetrachloride vapour to air (`sncl4_air`)

Only chemically confirmed unreacted SnCl4 vapour; total Sn is not this species. If the real tin species differs, add it explicitly without guessed split. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Tin tetrachloride vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Tin dioxide aerosol to air (`sno2_air`)

Only chemically confirmed particulate SnO2 with measured size fraction; avoid overlapping total particulate and component inventories. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Tin dioxide aerosol to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Polyethylene cold-end coating aerosol to air (`pe_mist`)

Only actual characterized PE aerosol, excluding carrier water in its polymer mass; a total VOC measurement cannot establish PE or any other organic molecule. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Polyethylene cold-end coating aerosol to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Quartz particulate to air (`silica_air`)

Actual characterized quartz fraction of batch dust with phase and non-overlapping size bins; not all glass dust or every Si-containing particle. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Quartz particulate to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Soda-lime glass particulate to air (`glass_particulate`)

Actual amorphous container-glass particle release with independently measured composition and non-overlapping size fractions. Crystalline quartz and total dust are not this particle identity. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Soda-lime glass particulate to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Mineral lubricating-oil mist to air (`oil_mist`)

Actual characterized whole mineral-oil aerosol from machinery/shears with formulation-specific composition, separating graphite/PE and carrier water; VOC as carbon does not identify this aerosol. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Mineral lubricating-oil mist to air
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

###### Hydrogen chloride to unspecified air (`hcl_fugitive`)

Only actual HCl released at a separately identified unspecified-air outlet, excluding the measured high-stack HCl row. Compartment choice follows real outlet evidence rather than a convenient UUID. Native Elementary/Mass is HCl CAS7647-01-0 to unspecified air; it is a different compartment record from the separate high-stack HCl row. No fixed geography, concentration or capture factor. Its acid/formulation/isotope synonyms do not change this ordinary molecular gaseous HCl; no purchased solution or total-chloride substitution is permitted. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_species`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: hydrogen chloride `fe0acd60-3ddc-11dd-aab0-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_species`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_species`
- Sources: `jrc-glass-bref-2013`

### Process: Original-cohort post-release services (`services`)

#### Inputs

##### Product flows

###### Alternating current (`service_electricity`)

Only separately observed packing, warehouse, handling, dispatch and true incremental return/rework service energy assigned to its original first-release cohort; no new manufacture Q. Native Product identity is CN customer-side grid-average consumption mix at1–35kV, not generator output or a renewable contract. The reference property named Net calorific value is the MJ energy property, with native kWh factor3.6; it does not describe fuel mass or a heating value for glass. A different location, voltage or contractual mix requires a verified replacement, not inherited CN or emission factors. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200c9a66` → `93a60a57-a3c8-11da-a746-0800200c9a66` → MJ; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_service_energy`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_service_energy`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_energy`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Wooden pallets (`pack_pallet`)

Conditional one actual whole packaging article, including physically received supplier-included packaging, new purchase and external return separately. Trace mutually exclusive empty/attached-WIP/attached-FG/reusable stocks; wood/paper moisture and repaired old/new parts are independently recorded if real. Gross movement is not repeated purchase burden. Native Product/Mass identifies wooden-board/slat pallets from a lumber-mill production mix, without fixed geography, grade, dimensions, moisture, treatment, species or provider. Current electricity classification17100 is an isolated taxonomy error against coherent wood/pallet name and route; the preserved source classification is wood packaging. Use one actual wood pallet, never a mixed pallet family or assumed dry wood. Measure water and actual repairs/new components separately; no count-to-kg default. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Cardboard interlayer pad (`pack_pad`)

Conditional one actual whole packaging article, including physically received supplier-included packaging, new purchase and external return separately. Trace mutually exclusive empty/attached-WIP/attached-FG/reusable stocks; wood/paper moisture and repaired old/new parts are independently recorded if real. Gross movement is not repeated purchase burden. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Cardboard interlayer pad
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Polyethylene film (`pack_film`)

Conditional one actual whole packaging article, including physically received supplier-included packaging, new purchase and external return separately. Trace mutually exclusive empty/attached-WIP/attached-FG/reusable stocks; wood/paper moisture and repaired old/new parts are independently recorded if real. Gross movement is not repeated purchase burden. Native Product/Mass is polyethylene film at plant production mix, CAS9002-88-4, with no fixed grade, geography or provider. Its luggage/leather classification is an isolated taxonomy defect against coherent PE name/CAS/film comments. The mention of competing PET does not make this PET. Match the actual whole PE film and additives; no resin-to-film substitution or density/item coefficient. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Polypropylene transport strap (`pack_strap`)

Conditional one actual whole packaging article, including physically received supplier-included packaging, new purchase and external return separately. Trace mutually exclusive empty/attached-WIP/attached-FG/reusable stocks; wood/paper moisture and repaired old/new parts are independently recorded if real. Gross movement is not repeated purchase burden. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Glass Jar (`release_transfer`)

Internal physical transfer of newly released jars into the separately observed service gate; cancel against manufacture output on consolidation without cancelling the single reference production account. This is not a second purchase or Q. Native Product/Mass identity is Glass Jar at plant production mix, with glass-container/container-glass synonyms and jar/food-storage comments; no fixed composition, wide-mouth dimensions, forming route, geography, provider or grade. Use only the declared empty uncoloured soda-lime press-and-blow wide-mouth jar within this PCR; bottles, closures and filled product are excluded. Native food-resistance prose does not certify this use or supply a life/strength/density/item mass. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_service`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_service`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-glass-bref-2013`; `emhart-making-containers`; `oi-glass-manufacture`; `oi-jar-500766`; `jrc-ilcd-2010`

###### Glass Jar (`returned_jars`)

Actual returned physical jars linked to original dispatch and original first-release cohort; reverse its original dispatch vector before adding true repair/cleaning/repacking increments. Reinspection and return create no new first-release Q. Native Product/Mass identity is Glass Jar at plant production mix, with glass-container/container-glass synonyms and jar/food-storage comments; no fixed composition, wide-mouth dimensions, forming route, geography, provider or grade. Use only the declared empty uncoloured soda-lime press-and-blow wide-mouth jar within this PCR; bottles, closures and filled product are excluded. Native food-resistance prose does not certify this use or supply a life/strength/density/item mass. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_service`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_service`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-glass-bref-2013`; `emhart-making-containers`; `oi-glass-manufacture`; `oi-jar-500766`; `jrc-ilcd-2010`

###### Wooden pallets (`return_received_pallet`)

Actual separately measured packaging return received from outside; retain condition, attached contents, original issue and historical vector. This leg is excluded from new-acquisition quantity; also remove it from any supplier-included-package total to prevent duplication. Native Product/Mass identifies wooden-board/slat pallets from a lumber-mill production mix, without fixed geography, grade, dimensions, moisture, treatment, species or provider. Current electricity classification17100 is an isolated taxonomy error against coherent wood/pallet name and route; the preserved source classification is wood packaging. Use one actual wood pallet, never a mixed pallet family or assumed dry wood. Measure water and actual repairs/new components separately; no count-to-kg default. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Cardboard interlayer pad (`return_received_pad`)

Actual separately measured packaging return received from outside; retain condition, attached contents, original issue and historical vector. This leg is excluded from new-acquisition quantity; also remove it from any supplier-included-package total to prevent duplication. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Cardboard interlayer pad
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Polyethylene film (`return_received_film`)

Actual separately measured packaging return received from outside; retain condition, attached contents, original issue and historical vector. This leg is excluded from new-acquisition quantity; also remove it from any supplier-included-package total to prevent duplication. Native Product/Mass is polyethylene film at plant production mix, CAS9002-88-4, with no fixed grade, geography or provider. Its luggage/leather classification is an isolated taxonomy defect against coherent PE name/CAS/film comments. The mention of competing PET does not make this PET. Match the actual whole PE film and additives; no resin-to-film substitution or density/item coefficient. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Polypropylene transport strap (`return_received_strap`)

Actual separately measured packaging return received from outside; retain condition, attached contents, original issue and historical vector. This leg is excluded from new-acquisition quantity; also remove it from any supplier-included-package total to prevent duplication. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Road freight transport by diesel lorry (`services_road_freight`)

Only this actual separately purchased transport leg with payload, distance, vehicle/rail mode, empty movements and supplier boundary; upstream transport already included in a material dataset is not purchased twice. Site-owned vehicles require their real fuel/energy and emissions as separate atomic exchanges. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_service_transport`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Road freight transport by diesel lorry
- Flow property / unit: Transport mass-distance / tkm
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_service_transport`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_transport`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Rail freight transport by freight train (`services_rail_freight`)

Only this actual separately purchased transport leg with payload, distance, vehicle/rail mode, empty movements and supplier boundary; upstream transport already included in a material dataset is not purchased twice. Site-owned vehicles require their real fuel/energy and emissions as separate atomic exchanges. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_service_transport`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Rail freight transport by freight train
- Flow property / unit: Transport mass-distance / tkm
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_service_transport`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service_transport`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Glass Jar (`dispatch_jars`)

Gross actual physical dispatch only, separated from stand-alone outward returns and incoming returns in the movement ledger. This is not new production, not a net-delivery denominator, and not automatically a co-product; inherited original-cohort vectors and any actual mass/composition change remain reconciled. Native Product/Mass identity is Glass Jar at plant production mix, with glass-container/container-glass synonyms and jar/food-storage comments; no fixed composition, wide-mouth dimensions, forming route, geography, provider or grade. Use only the declared empty uncoloured soda-lime press-and-blow wide-mouth jar within this PCR; bottles, closures and filled product are excluded. Native food-resistance prose does not certify this use or supply a life/strength/density/item mass. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_service`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_service`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-glass-bref-2013`; `emhart-making-containers`; `oi-glass-manufacture`; `oi-jar-500766`; `jrc-ilcd-2010`

###### Wooden pallets (`out_pallet`)

Gross actual physical dispatch only, separated from stand-alone outward returns and incoming returns in the movement ledger. This is not new production, not a net-delivery denominator, and not automatically a co-product; inherited original-cohort vectors and any actual mass/composition change remain reconciled. Native Product/Mass identifies wooden-board/slat pallets from a lumber-mill production mix, without fixed geography, grade, dimensions, moisture, treatment, species or provider. Current electricity classification17100 is an isolated taxonomy error against coherent wood/pallet name and route; the preserved source classification is wood packaging. Use one actual wood pallet, never a mixed pallet family or assumed dry wood. Measure water and actual repairs/new components separately; no count-to-kg default. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Cardboard interlayer pad (`out_pad`)

Gross actual physical dispatch only, separated from stand-alone outward returns and incoming returns in the movement ledger. This is not new production, not a net-delivery denominator, and not automatically a co-product; inherited original-cohort vectors and any actual mass/composition change remain reconciled. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Cardboard interlayer pad
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Polyethylene film (`out_film`)

Gross actual physical dispatch only, separated from stand-alone outward returns and incoming returns in the movement ledger. This is not new production, not a net-delivery denominator, and not automatically a co-product; inherited original-cohort vectors and any actual mass/composition change remain reconciled. Native Product/Mass is polyethylene film at plant production mix, CAS9002-88-4, with no fixed grade, geography or provider. Its luggage/leather classification is an isolated taxonomy defect against coherent PE name/CAS/film comments. The mention of competing PET does not make this PET. Match the actual whole PE film and additives; no resin-to-film substitution or density/item coefficient. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Polypropylene transport strap (`out_strap`)

Gross actual physical dispatch only, separated from stand-alone outward returns and incoming returns in the movement ledger. This is not new production, not a net-delivery denominator, and not automatically a co-product; inherited original-cohort vectors and any actual mass/composition change remain reconciled. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Wooden pallets (`return_sent_pallet`)

Actual separately measured stand-alone outward return, excluding packaging already counted with gross product dispatch. Retain physical condition and original-cohort vector; no automatic waste or coproduct status. Native Product/Mass identifies wooden-board/slat pallets from a lumber-mill production mix, without fixed geography, grade, dimensions, moisture, treatment, species or provider. Current electricity classification17100 is an isolated taxonomy error against coherent wood/pallet name and route; the preserved source classification is wood packaging. Use one actual wood pallet, never a mixed pallet family or assumed dry wood. Measure water and actual repairs/new components separately; no count-to-kg default. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Wooden pallets `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Cardboard interlayer pad (`return_sent_pad`)

Actual separately measured stand-alone outward return, excluding packaging already counted with gross product dispatch. Retain physical condition and original-cohort vector; no automatic waste or coproduct status. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Cardboard interlayer pad
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Polyethylene film (`return_sent_film`)

Actual separately measured stand-alone outward return, excluding packaging already counted with gross product dispatch. Retain physical condition and original-cohort vector; no automatic waste or coproduct status. Native Product/Mass is polyethylene film at plant production mix, CAS9002-88-4, with no fixed grade, geography or provider. Its luggage/leather classification is an isolated taxonomy defect against coherent PE name/CAS/film comments. The mention of competing PET does not make this PET. Match the actual whole PE film and additives; no resin-to-film substitution or density/item coefficient. Native reference property → unit group → reference unit: `93a60a56-a3c8-11da-a746-0800200b9a66` → `93a60a57-a4c8-11da-a746-0800200c9a66` → kg; no secondary property supplies an independent density or item mass. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Polypropylene transport strap (`return_sent_strap`)

Actual separately measured stand-alone outward return, excluding packaging already counted with gross product dispatch. Retain physical condition and original-cohort vector; no automatic waste or coproduct status. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

##### Waste flows

###### Discarded wooden pallet (`waste_pallet`)

Only this actual segregated waste; weigh moisture/composition at the actual outlet. Keep external return, reuse and waste mutually exclusive and retain original-cohort history; no arbitrary avoided-product credit. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Discarded wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Discarded cardboard interlayer pad (`waste_pad`)

Only this actual segregated waste; weigh moisture/composition at the actual outlet. Keep external return, reuse and waste mutually exclusive and retain original-cohort history; no arbitrary avoided-product credit. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Discarded cardboard interlayer pad
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Discarded polyethylene film (`waste_film`)

Only this actual segregated waste; weigh moisture/composition at the actual outlet. Keep external return, reuse and waste mutually exclusive and retain original-cohort history; no arbitrary avoided-product credit. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Discarded polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Discarded polypropylene transport strap (`waste_strap`)

Only this actual segregated waste; weigh moisture/composition at the actual outlet. Keep external return, reuse and waste mutually exclusive and retain original-cohort history; no arbitrary avoided-product credit. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_packaging`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Discarded polypropylene transport strap
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_packaging`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources: `jrc-glass-bref-2013`; `jrc-ilcd-2010`

###### Broken returned soda-lime glass jar (`service_broken_jar`)

Only this actual segregated waste; weigh moisture/composition at the actual outlet. Keep external return, reuse and waste mutually exclusive and retain original-cohort history; no arbitrary avoided-product credit. The concrete atomic flow UUID is unbound; match actual supply form or species/compartment before use, never a collection-flow substitute. Quantity linkage: x_i is exactly this row’s single `calc_reference` result from undivided raw `cp_service`, after `calc_raw_conversion`, `calc_history` and actual allocation; the same1kg reference basis, not item-to-kg conversion. No later division is permitted.

- Selected flow: Broken returned soda-lime glass jar
- Flow property / unit: Mass / kg
- Amount rule: Use this row’s once-calculated x_i result; collect undivided raw quantities with `cp_service`.
- Value mode: Calculated from collection (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_service`
- Sources: `jrc-glass-bref-2013`; `emhart-making-containers`; `oi-glass-manufacture`; `oi-jar-500766`; `jrc-ilcd-2010`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_boundary` | all datasets | This section applies only to the complete section1 raw-to-first-release empty wide-mouth uncoloured soda-lime press-and-blow jar and explicitly matched original-cohort services. Bottles, closures, other glass chemistries or furnace/forming routes, decoration/filling and downstream use are excluded; do not extrapolate to the broad classification. | `jrc-glass-bref-2013`; `emhart-making-containers`; `jrc-ilcd-2010` |
| `allocation_scope` | all datasets | Apply this hierarchy only to an attributional study requiring allocation. Declare goal, included coproduct functions, common-process gate, stocks and temporal scope. A different modelling situation, recycling transfer convention or product comparison needs its own method decision; neither industrial process diagrams nor this candidate imply whole-ILCD conformity. | `jrc-ilcd-2010` |
| `allocation_subdivide` | all exchanges | First assign dedicated measured inputs/operations and actual or virtual subdivision to the receiving product/cohort. Preserve separately metered batch, furnace, forehearth, mould cooling/compression, lehr, surface treatment, inspection and services; evaluate each shared exchange independently. A common furnace does not justify one arbitrary global ratio. | `jrc-ilcd-2010` |
| `allocation_causality` | remaining common exchanges | For each remaining exchange identify the determining physical causal relationship and quantify its actual driver, considering real energy/enthalpy demand, processing duration, capacity constraint, occupancy or handled quantity only where causally determining. Different exchanges can need different drivers; mass, price or equal shares are not interchangeable author choices. Retain evidence, numerator, denominator and reconciliation. | `jrc-ilcd-2010` |
| `allocation_residual` | genuinely residual common exchanges | Only what genuinely remains after subdivision and exchange-specific causality uses the co-functions’ contemporaneous market values in their actual condition at the same common-process exit/entry gate. Preserve quantities, price period, product/waste/service status and sensitivity; future retail value, arbitrary fixed shares or a total plant revenue shortcut are not this basis. Missing required causal/value evidence remains unresolved. | `jrc-ilcd-2010` |
| `allocation_returns` | cullet; rejects; packaging; services | Internal cullet/rework cancels as internal physical transfer and retains every inherited burden, with actual recooling/remelting/cleanup increments. External cullet has an explicitly declared upstream waste/preparation/transport convention. Rejected jars, packaging returns and recovered heat are not automatic coproducts or avoided-product credits. Maintain all failed/zero-Q burdens and their real causal assignment without exporting them to unrelated accepted production. | `jrc-ilcd-2010`; `jrc-glass-bref-2013` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | manufacture | silica; soda; limestone; dolomite; feldspar; sulfate; batch_carbon; external_cullet | Raw measurement and history record | actual whole supplier lot; wet/dry mass; assay and chemical formula; moisture; cullet origin/contamination; opening/closing raw batch melt WIP internal cullet; each inherited vector | Calibrated weighing/tare and issue/receipt records, independent composition/moisture analysis, furnace/forehearth stock and route records; separate native ingredient, supplied mixture and oxide child accounts. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | kg | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_release | manufacture | finished_jar | Raw measurement and history record | unique jar/lot identifier; actual drawing/finish; annealed state; coating retained dry mass; bare net article scale mass; first inspection/release time; rejects; Q; WIP/FG moves | Calibrated net dry finished-jar weighing excluding removable packages/closures and linked to dimensional/visual/physical QC and true first release. Sum unique new first-release kg as Q; no capacity/density/item-weight assumption. Aggregation method: Sum unique newly first-released net dry finished-jar kg as Q; shipment, reinspection and same-cohort closing FG are not additional production. Raw collection is undivided; calc_reference alone normalizes. | kg | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_energy | manufacture | core_electricity; furnace_gas | Raw measurement and history record | start/end meter; carrier; original unit; integrated amount or true rate/time; actual voltage/geography/mix; gas composition/density/state/NCV; operation failure hot hold idle cleanup; causal driver; cohort | Calibrated submeter for batch/melt/forehearth/compression/cooling/lehr/coating/QC/treatment and separately observed services; reconcile fuel/electric invoices and actual allocation. Record gas whole mass independently of heating-value energy. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | kWh; MJ; kg; actual gas-volume state | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_water | manufacture | process_water; purchased_steam; external_cooling_in; cooling_return; condensate_return | Raw measurement and history record | water source/phase; integrated mass/volume or true rate/time; independently measured density/temperature/pressure; inlet/return enthalpy; supply convention; installed opening/closing charge; evaporation carryover purge condensate; source of reaction water | Meter actual external makeup, actual steam and real cooling-water/condensate returns separately; weigh/measure installed-fluid change, moisture and each outlet. Cancel recirculation; no assumed water density for oils/emulsions or invented steam route. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | kg; m3; K; Pa; MJ | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_formulation | manufacture | shear_concentrate; mould_release; sncl4; pe_emulsion; sorbent_lime | Raw measurement and history record | single whole preparation; supplier/SDS; chemical formula/assay; free/structural/carrier water; active and retained constituents; actual purchased inputs; added water; mixing energy; opening/closing preparation; loss/residue | Independently weigh whole formulation and actual site mixing ingredients; verify purchased-whole versus on-site-prepared route and measure carrier/active subaccounts. Any inferred reaction requires independently evidenced formula and conversion; retain observed gas and coating assays. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | kg; kWh | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_aux | manufacture | machine_oil; filter_bag; mould_insert; refractory; waste_oil; retired_mould; retired_refractory; spent_filter | Raw measurement and history record | actual single part/material/fluid; form/grade/composition; new whole and retired mass; installed opening/closing quantity and per-exchange history vector; wear retained product waste; repair old/new components; leak/drain destination | Calibrated new/retired/installed weighing and actual service-life/campaign records; trace original/replacement burdens and real wear/retention without assuming full consumption or nominal life. Keep installed non-WIP charge apart from work in progress. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | kg | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_residue | manufacture | export_cullet; batch_dust; flue_residue; coating_residue; cooling_purge; cleanup_water; sludge | Raw measurement and history record | one waste physical stream; source operation; wet/dry mass; independent glass/water/oil/salt/species assays; opening/closing residue/history; actual capture; internal return; external status/destination | Segregated calibrated waste/purge/sludge/capture weighing with independent moisture and composition, discharge records and destination receipts. Separate internal cullet recovery; do not count both a whole mixture and its exported constituents. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | kg | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_species | manufacture | air_oxygen; air_nitrogen; air_argon; air_water; air_co2; co2_fuel; co2_mineral; co2_air_return; water_vapor; nitrogen_out; oxygen_out; argon_out; no_air; no2_air; so2_air; hcl_air; hf_air; co_air; sncl4_air; sno2_air; pe_mist; silica_air; glass_particulate; oil_mist; hcl_fugitive | Raw measurement and history record | molecule/CAS and phase/particle structure; compartment/outlet; concentration and detection limit; actual integrated gas/liquid volume or true rate/time; temperature/pressure/humidity; independently measured substance density; raw/fuel/air carbon origin; free/carrier/structural/reaction water | Independent species sampling at matched intake/outlets and all operating modes; preserve actual dry/wet/reference-state conversions once. Indicators NOx/totalSn/totalC/VOC/COD do not supply a species split. Actual formula/assay and measured reacted extent are required for calculated reaction contributions, with independent retained/captured amounts. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | kg; actual concentration/volume/state units | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_service | services | dispatch_jars; service_broken_jar; release_transfer; returned_jars | Raw measurement and history record | original release and dispatch identifiers; each cohort Q/vector; opening/closing FG; gross shipment; return/reverse; reinspection; real rework/material removal/addition/water changes; observed storage/handling interval; actual incremental burdens | Link physical jar movement to its original cohort and reverse original dispatch before assigning actual increments. Track new-release internal transfer, old FG and returns separately. No repeated first release, assumed net delivery or reassignment to unrelated current production. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | kg; h; actual item count with measured net mass | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_packaging | services | pack_pallet; pack_pad; pack_film; pack_strap; out_pallet; out_pad; out_film; out_strap; waste_pallet; waste_pad; waste_film; waste_strap; return_received_pallet; return_sent_pallet; return_received_pad; return_sent_pad; return_received_film; return_sent_film; return_received_strap; return_sent_strap | Raw measurement and history record | one article/form/composition; moisture; mutually exclusive empty/attachedWIP/attachedFG/reusable opening/closing stock; new purchase; supplier-included physical arrival; return received; gross dispatch attached; stand-alone return sent; waste; original vector; actual repair components | Weigh each real article/leg independently; match incoming-material supplier packaging inclusion before assigning new acquisition, retain external return identifiers and cancel internal reuse. Actual wood/paper water and real repair parts need separate atomic quantities. Count-to-mass conversion requires independently weighed same configuration, never a default kg/item. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | kg; actual item count with measured mass | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_transport | manufacture | manufacture_road_freight; manufacture_rail_freight | Raw measurement and history record | actual origin/destination; measured payload; distance; mode/vehicle; empty legs; provider boundary and upstream inclusion; cohort; causal capacity limitation | Use actual freight records for purchased transport service; derive undivided tkm from actual payload and distance after checking scope. If own vehicles occur, list actual individual fuel/energy/emission exchanges and do not also purchase the same transport service. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | tkm; kg; km | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_service_energy | services | service_electricity | Raw measurement and history record | start/end meter; carrier; original unit; integrated amount or true rate/time; actual voltage/geography/mix; gas composition/density/state/NCV; operation failure hot hold idle cleanup; causal driver; cohort | Calibrated submeter for batch/melt/forehearth/compression/cooling/lehr/coating/QC/treatment and separately observed services; reconcile fuel/electric invoices and actual allocation. Record gas whole mass independently of heating-value energy. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | kWh; MJ; kg; actual gas-volume state | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |
| cp_service_transport | services | services_road_freight; services_rail_freight | Raw measurement and history record | actual origin/destination; measured payload; distance; mode/vehicle; empty legs; provider boundary and upstream inclusion; cohort; causal capacity limitation | Use actual freight records for purchased transport service; derive undivided tkm from actual payload and distance after checking scope. If own vehicles occur, list actual individual fuel/energy/emission exchanges and do not also purchase the same transport service. Aggregation method: Sum undivided raw amounts for each actual exchange/cohort; convert, reconcile history and actually allocate first. Only calc_reference produces per-reference-flow x_i; do not divide in raw collection or aggregation again. | tkm; kg; km | Each event and period reconciliation | Full production period with all modes; actual original-cohort service window separately | Each actual line/furnace/circuit/stock and service gate | per 1 kg reference flow | Calibration; raw records; composition/state assays; complete physical/history ledgers; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_raw_conversion` | all inventory rows | Convert each raw amount to its row unit once before allocation: native kWh ×3.6 = MJ; kg remains kg. Only true rates are time-integrated; already integrated volumes are not multiplied by duration. Mass/volume requires independently measured density for that material/state. A count with Item(s)/item factor1 still supplies no kg/item. A real count-to-mass conversion requires measured net mass for the same configuration and stated sampling/weighing method; capacity never determines glass mass. | cp_material; cp_energy; cp_water; cp_formulation; cp_aux; cp_species; cp_packaging; cp_transport; cp_service_energy; cp_service_transport | converted undivided raw_i | `jrc-glass-bref-2013` |
| `calc_history` | all inventory rows | For each physical stock and exchange vector: opening inherited burden + assigned actual additions + real returned/original-dispatch reverse = closing inherited burden + actual completed-cohort burden + other traced destinations. Preserve raw batch/melt/WIP/cullet/FG and separate non-WIP installed stocks; correct a consumption basis only once. Apply section7 allocation to remaining actual shared exchanges before normalization. Internal transfers cancel without losing their original burden. For the manufacturing account the closing vector includes only not-yet-first-released raw/batch/melt/WIP/internal-cullet stock and the separately reconciled residual installed stock; newly first-released FG is the first-Q transfer, never also a manufacturing closing-FG debit. The FG-service vector ledger is separate: opening FG vector + first-Q internal transfer + actual returned original-dispatch reversal + true incremental service additions = closing FG vector + gross-dispatch destination vectors + actual other external destinations. Preserve each original cohort; this ledger neither adds another Q nor reassigns opening FG to current Q. | cp_material; cp_release; cp_aux; cp_formulation; cp_service; cp_packaging | A_i converted history-reconciled actually allocated undivided numerator | `jrc-ilcd-2010` |
| `calc_reference` | all inventory rows | x_i = A_i / Q; A_i is this converted history-reconciled actually allocated undivided exchange numerator for its originating first-release cohort; Q is unique newly first-quality-released net dry finished-jar kg of that cohort. Divide exactly once for Q>0; Q=0 retains raw burden and investigation/future assignment but no unit result. Cards and aggregation reference this same x_i without dividing again. Manufacturing and separately observed service vectors remain distinct; closing FG already belongs to Q. | cp_release; cp_material; cp_energy; cp_water; cp_formulation; cp_aux; cp_residue; cp_species; cp_service; cp_packaging; cp_transport; cp_service_energy; cp_service_transport | x_i per 1 kg reference flow | `jrc-ilcd-2010` |
| `calc_physical` | all inventory rows | At each manufacturing subgate, FG-service gate and combined gate, opening physical quantities + actual external inputs = closing quantities + actual gross product/waste/species exits, cancelling internal batch/melt/cullet/Q transfers. Reconcile wet mass, relevant elements and water phases independently from molecular species and genuine step-specific reaction/fuel water evidence. Include true coating/parts/water changes and their cohort histories. Gross air and package ledgers stay physical even when their burden accounting differs. No one residual solves two unknowns. Manufacturing physical closing excludes newly first-released FG: its Q outlet is the service gate’s internal inlet. The FG-service physical gate independently reconciles opening FG + new-Q transfer + actual returned jars + actual added material/water = closing FG + gross physical jar dispatch + actual other jar/waste/species destinations, retaining real coating/parts/moisture changes. Consolidation cancels the internal Q transfer; the single reference-production Q remains an accounting reference, not an extra external physical exit alongside FG and gross shipments. | cp_material; cp_release; cp_water; cp_formulation; cp_aux; cp_residue; cp_species; cp_service | independent physical/elemental and molecular/source closures | `jrc-glass-bref-2013`; `jrc-ilcd-2010` |
| `calc_packaging` | all inventory rows | Per single article: opening empty + attachedWIP + attachedFG + reusable + new purchase + supplier-included physical arrival + external-return-received = corresponding closing + with gross physical dispatch + stand-alone external-return-sent + waste. Mutually exclusive legs prevent duplication. Cancel internal reuse; separately assign actual acquisition/service burden to the original cohort. Moisture and real repair new/old components reconcile separately and never enter jar Q. | cp_packaging; cp_service | article gross physical balance and undivided assigned burden | `jrc-ilcd-2010` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_terminal | all datasets | Actual jar drawing, composition, blank-press/final-blow route, annealing/coating/QC evidence and calibrated net mass establish the terminal; a manufacturer offer alone does not establish the future site route or suitability. | drawing; batch record; furnace/forming/lehr logs; coating supplier data; release and weighing records |
| dq_temporal | all inventory rows | Use the same full production period for raw quantities, Q and stock vectors, including failures/idle/cleanup. Disclose each actually observed post-release service window, retained old cohorts, incomplete future coverage and later increments. | period ledger; calibration; all-mode logs; cohort-return history |
| dq_identity | all UUID-bearing rows | Retain native restrictions and actual provider/form match; external evidence controls methodology while UUIDs identify physical rows. Concrete unbound flows require real future matching, not a collection-label substitute. | native record review; actual supplier assay/SDS; stated geography/voltage/state |
| dq_closure | all physical gates | Retain independent calibration, sampling/detection limits, moisture/species uncertainty, raw conversion, causal assignment and full physical/history balances. Unknown core relationships or missing required stocks/species closure remain unresolved; a successful engineering check cannot certify measured data. | complete raw ledgers; independent assays; outlet sampling; balance and uncertainty report |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | all datasets | These checks concern only the complete section1 raw-to-first-release empty wide-mouth uncoloured soda-lime press-and-blow jar and its original-cohort services. Unproved product, manufacture, stock/species relationships or later service interval remain explicitly unresolved; these engineering checks cannot extend the method to bottles, closures or other routes. | `jrc-glass-bref-2013`; `emhart-making-containers`; `jrc-ilcd-2010` |
| `validate_terminal` | all datasets | Verify empty wide-mouth uncoloured soda-lime jar, actual batch-to-regenerative-melt and press/plunger-blank/final-blow route, annealing and first QC release. A purchased jar, bottle route, broad classification match or supplier catalog alone cannot prove the foreground route. | `jrc-glass-bref-2013`; `emhart-making-containers`; `oi-jar-500766` |
| `validate_basis` | all inventory rows | Use finished_jar as the unique linked Product output and 1kg net dry finished jar as reference. Every other exchange collects undivided raw records and uses calc_reference x_i once after conversion/history/actual allocation. Q=0 retains raw burdens and produces no unit result. Do not infer kg/item, density, yield or a glass mass from container capacity. | `jrc-ilcd-2010` |
| `validate_ledgers` | all physical gates | Check independent wet-mass/element, molecular/water-source, manufacturing-WIP, non-WIP installed-stock, first-release FG and per-article packaging balances. Original-return reversals and actual repair mass/composition changes must agree with each cohort Q. No guessed residual, hidden inventory stream, double correction, old-FG burden transfer or repeated first release can pass. | `jrc-glass-bref-2013`; `jrc-ilcd-2010` |
| `validate_native` | all UUID-bearing rows | Recheck all native names, synonyms/comments, CAS, fixed grade/form/route/geography/medium/type and every exact referenced flow-property to unit-group reference-unit chain. Each card carries its binding limitations; ordinary provider/auxiliary UUID gaps remain concrete and tracked. A contradictory CAS, form, structure or route is not repaired by classification; isolated taxonomy noise is disclosed separately. UUID identity never supplies a quantitative factor or provider approval. | `jrc-ilcd-2010` |
| `validate_evidence` | all datasets | Keep source-specific scope, counterexamples, uncertainty, temporal/site coverage and observed service window visible. Missing true core terminal/route evidence, required histories, valid measurement or physical/species closure is a hold; routine future factory measurement, unspecified provider or a concrete auxiliary identity gap alone does not make the method draft. Schema/projection/finite checks establish engineering consistency, not scientific/translation approval, accepted mapping or publication. | `jrc-ilcd-2010`; `oi-jar-500766` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Empty food-jar purchase and packaging modelling for declared configuration/route |
| allowed_use | Attributional use after actual site data, physical/history/species closure, native matching and independent method judgement |
| excluded_use | Uncovered bottles/closures/routes; filled food; performance/life/certification; default reuse; whole37191 coverage; automatic credits |
| required_metadata | wide-mouth jar drawing and finish; uncoloured soda-lime composition and measured mass state; virgin batch ingredients and individual whole supply forms; external cullet provenance and contamination; internal cullet/WIP history; regenerative natural-gas/air melting and actual boost; press/plunger blank and final blow route; actual coating formulation and retained mass; actual lehr and inspection/rejection specification; unique first-release Q cohort and time; actual post-release service interval and return history; raw and installed-stock exchange vectors; each packaging article and gross movements; species/compartments and independent water/carbon evidence; provider geography and electricity voltage/mix |
| required_quality_disclosure | Actual measurement period/site, source differences, species/water/carbon evidence, native restrictions, allocation, stock history, observed service interval and unknowns |
| update_trigger | Changed jar finish/composition/batch, furnace/forming/coating/annealing/QC gate, supplier, data period, stock/returns/package route or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-glass-bref-2013 | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Manufacture of Glass (2013), doi10.2791/69502; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/GLS_Adopted_03_2012_0.pdf | Qualitative raw-batch chemistry and regenerative melting (2.2–2.3); press-and-blow jar versus bottle and post-forming/annealing/QC/coating (2.4 and figure2.5); actual inputs, downstream/aqueous/waste/energy completeness (3.3). Tables2.4/3.9/3.10/3.19/3.21 and adjacent caveats prohibit recipe/factor/yield/species defaults. |
| emhart-making-containers | handbook | Bucher Emhart Glass, Making Glass Containers; https://www.emhartglass.com/node/26 | Independent primary mechanism: raw materials, furnace/forehearth, gob feeder, plunger-pressed parison and final blown jar versus blow-and-blow bottle, take-out, annealing, inspection and empty-container supply (steps1–11). No numerical defaults. |
| oi-glass-manufacture | handbook | O-I, How Glass is Made; https://www.o-i.com/wp-content/uploads/2019/04/How-a-Glass-Bottle-is-Made.pdf | Publisher one-page seven-stage manufacturing original confirms raw ingredients, melting, gob separation, blown container, annealing, pre-shipment inspection with rejected-bottle remelt, and packing/shipping. Generic bottle infographic is not proof of the selected jar SKU route; its temperature is not a method value. |
| oi-jar-500766 | handbook | O-I Glass Catalog, product500766 1 Gallon Jar; publisher five-page specification https://glass-catalog.com/na-en/index.php/actions/butPdfCreation/index/generatePdf?destination=detail&shapeCodes=500766 | Real empty flint wide-mouth food jar terminal. Read original PDF photo/category p1–3, technical table p4 and suitability/not-a-drawing/withdrawal caveat p5 together. Neither catalog mass/capacity/refillable flag nor product-specific finish is a PCR default; actual drawing, suitability and manufacture must be established independently. |
| jrc-ilcd-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for Life Cycle Assessment—Detailed guidance, First edition March2010, sections7.9.2–7.9.3; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Limited attributional allocation: actual/virtual subdivision, exchange-specific determining physical causality, genuinely residual common-gate market value at actual condition; traceable foreground accounting and disclosure. Does not establish industrial recipe, emission chemistry, avoided credits or whole-handbook conformity. |
