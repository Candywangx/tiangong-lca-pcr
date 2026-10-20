---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.water-quenched-pa6-round-monofilament
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Water-quenched PA6 round monofilament manufacture and net delivery

## 1. Scope and Applicability

This method covers one industrial PA6 monofilament route, not all synthetic fibres. Product formation starts with complete purchased pellets and ends at actual net factory delivery. A multi-hole die can make many separate monofilaments; it does not make the reference object a multifilament bundle. The direct-spun round solid identity, measured fineness and geometry must be demonstrated. No method quantities are factory observations. [basf-monofilaments; sanchyi-monofilament-line; wco-hs2022-ch54]

The existing PET filter mesh and PP rope methods start from filament and make another article; staple preparation/ring-spinning and filament-yarn methods do not govern monofilament extrusion. Shared accounting principles do not establish identical product applicability.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.other-chemical-products-man-made-fibres.water-quenched-pa6-round-monofilament |
| classification_refs | CPC 3.0 35530, narrower candidate scope; no positive mapping decision |
| covered_products | Virgin unfilled PA6 single solid round monofilament, at least 67 dtex and no cross-sectional dimension above 1 mm; direct pellet melt extrusion, water quench, hot-water then hot-air drawing, hot-air relaxation/annealing and individual winding; undyed, uncoated industrial supply |
| excluded_products | Multifilament yarn, mother-yarn splitting, tow, staple, PA66 and PA6/66 blends, PP/PET monofilament, synthetic strip, slit film tape, ordinary packaging strap, sheet/film, plastic profiles above 1 mm, filled/recycled/solution-spun material, finished net/mesh/rope, sterile medical sutures and retail fishing-line conversion |
| representative_product | Nominal 0.20 mm PA6 round monofilament for industrial textile conversion; actual diameter, linear mass, grade, colour and conditioned supply moisture are measured, not inferred from the nominal diameter |
| production_route | Purchased PA6 pellets; moisture-controlled receiving and drying only when needed; electric melting/filtering/extrusion; water quench; hot-water drawing followed by PA hot-air drawing; hot-air annealing/relaxation; winding/inspection; actual storage, packing, handling and factory dispatch |
| market_state | Bulk individually wound monofilament at actual net-delivery gate, with declared supply moisture and detachable core/packaging excluded from product kg; no weaving, braiding or sterilisation |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Industrial monofilament supplied for later textile conversion, not a textile-service lifetime |
| How much | 1 kg net PA6 monofilament actually delivered for the declared cohort after return reconciliation |
| How well | Declared grade, round solid section, measured dtex/diameter, acceptance tests and conditioned supply moisture; no universal strength or heat-resistance guarantee |
| How long or cycle | One declared net-delivery cohort; production and storage history traced across periods; no use-life equivalence |
| reference_flow_link | delivered_monofilament |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Polyamide 6 monofilament `61fa6be2-e90f-41af-aba5-86209fb72896` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | PA6 grade and complete supplied composition including embedded additives; virgin unfilled single-solid-round direct-spun form; measured cross section and at least 67 dtex; drawing annealing winding and colour/coating state; supply moisture and conditioning protocol; measured net product mass excluding core and packaging; site and raw production plus delivery cohort periods; actual net-delivery gate Q and unique return-adjusted consignment IDs; opening closing WIP and finished-goods masses plus carried burden vectors; native reference temperature descriptor and classification/translation limitations; electricity voltage geography provider and water supply route |

Required qualifiers must appear in concrete dataset metadata or equivalent fields. Missing qualifiers leave that data package incomplete. One kg is a mass normalization, not equal length, strength or service life.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is the strictly positive unique net actually delivered monofilament mass for one matched product/route/state cohort, weighed with calibrated tare subtraction and stated supply-moisture conditioning. Core, pallet, packaging and machinery mass are excluded. Q is not automatically the newly quality-released production P. |
| linear_conversion | length or bobbin records | Mass and length separately | kg; m; dtex; tex | Measure net monofilament mass M and measured length L of the same homogeneous conditioned lot using cp_release/cp_delivery; raw length l converts to l*M/L kg, and bobbin counts require measured net masses for that exact bobbin cohort. dtex is g per 10000 m and tex is g per 1000 m, not volume density. Area applies only with an independently measured same-product kg per area; this monofilament is not a film sheet. No nominal-diameter density shortcut. |
| energy_unit | make_electricity; dispatch_electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain the native energy reference and unit group Units of energy 93a60a57-a3c8-11da-a746-0800200c9a66. Raw metered kWh is converted to MJ by factor 3.6 before the sole normalization. Metered integrated energy is not multiplied by time again. |
| water_volume | quench_makeup; process_effluent; water_vapour | Mass and volume separately | kg; m3 | An integrated liquid/gas volume is already an amount, not a rate; no extra duration factor. Convert volume only using actual temperature/pressure/state and independently evidenced liquid density or gas humidity/composition. The tap-water secondary 0.001 m3/kg coefficient is not a measured plant density. Track wet/dry and standard/actual gas conditions explicitly. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased complete PA6 pellet formulation received at monofilament plant; no onsite polymerisation |
| starting_condition_role | Technosphere material input with upstream polymer burdens retained |
| product_classification_scope | One direct-spun PA6 monofilament route within the synthetic-monofilament category; no strip or whole-leaf coverage claim |
| recursive_input_rule | Purchased monofilament is a separately identified upstream prepared input requiring its own dataset and omitted-stage disclosure; it cannot masquerade as pellets. Internal released monofilament is paired and cancelled on consolidation, with no second supplier burden. |
| upstream_dataset_requirement | Match complete resin formulation and supply state, actual electricity voltage/geography, water, oil and packaging providers; generic physical UUIDs do not establish any supplier inventory |
| disclosure | Gate-to-gate production plus actual pre-dispatch storage, packing and handling through net dispatch. Link upstream materials, inbound transport and waste treatment separately; customer transport, conversion, use and end-of-life require separate modules. Declare actual included and omitted operations; no complete cradle-to-grave claim. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | manufacture | Include actual receiving/drying, electric melt filtration/extrusion, quenching-water system, hot-water plus hot-air drawing, annealing, take-up and quality release, including changeover, failed/zero-output runs, start-up, idle auxiliaries, rejects and rework. The two independent manufacturers support this selected line; do not append slitting or polymerisation. | basf-monofilaments; basf-extrusion-guide; sanchyi-monofilament-line |
| boundary_delivery | dispatch | Include the actual storage duration, humidity control, rewinding/reinspection, packaging, internal movement and loading needed by the delivered cohort. Do not delete these burdens when production precedes delivery. Production release P is an internal transfer, not the terminal denominator Q. Warehouse and production balances are separate, with paired transfers cancelled only on consolidation. |  |
| boundary_formulations | purchased inputs | Weigh each complete purchased PA6 formulation or supplied solution once; assay polymer, embedded additives and moisture only as constituent subledgers. Do not procure the embedded additive or carrier water again. Additional onsite mixing, spin finish, dyeing, coating, non-electric heat or cleaning chemistry requires a reviewed expansion with every actual atomic input and outlet; do not silently omit it. | basf-extrusion-guide |
| boundary_water_species | manufacture | Separate purchased make-up from internal recirculation, liquid effluent, droplet carry-out, retained product moisture and net air-borne water transfer. Melting, crystallisation, cooling, drawing and moisture drying are physical changes and do not themselves form reaction water. Any hydrolysis, degradation or reaction-water claim needs independent reaction/species evidence; do not solve an unknown water term and unknown outlet from one residual. | basf-extrusion-guide |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| monofilament_make | Pellet receiving, extrusion, quenching, drawing, annealing, winding and release | required | Entire selected PA6 route; conditional drying and individual outlets follow actual occurrence | foreground production with WIP carry | per 1 kg reference flow |
| dispatch | Finished-goods storage, packing, handling and net dispatch | required | Actual delivered cohort including prior production and return histories | foreground delivery with FG burden carry | per 1 kg reference flow |

### Process: Monofilament manufacture (`monofilament_make`)

#### Inputs

##### Product flows

###### Complete supplied PA6 pellets (`pa6_pellets`)

Native complete PA6 granulate, at-plant GLO, granulate route; no CAS, grade, moisture or additive recipe given. Its comment describes use as a representative engineering polymer for moulded housings/insulation where composition was unquantified. This input-role context is not an explicit conflicting polymer or manufacturing route. Use only the broad PA6 pellet identity; it supplies no extrusion-grade qualification or supplier quantities. Include embedded additives/moisture in the purchased whole, with assay subledgers.

- Selected flow: Polyamide 6 (PA6) granulate `55be6cb7-2fb9-4c6f-b37f-08c849c72cf5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources: basf-monofilaments; basf-extrusion-guide

###### Manufacturing electricity (`make_electricity`)

Native CN, 1–35 kV consumption mix to user, grid-average supply. This UUID applies only to that China medium-voltage interface, not arbitrary low voltage, renewable-only electricity or another geography; match the actual provider and conversion losses separately. Its reference is Net calorific value/MJ, not Mass. Meter drying if actual, melt heaters/drives, filtration, pumps, drawing, annealing, winding, compressed-air generation and attributable idle/load losses; no nameplate substitution.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_make`
- Sources: sanchyi-monofilament-line

###### External quench/drawing-water make-up (`quench_makeup`)

Native treated municipal tap-water production/supply, production mix at factory, geography unspecified; local source/treatment quality varies. Mass is reference; secondary Volume=0.001 per kg is not a measured density. Do not substitute raw withdrawal, deionised water, a Hong Kong treatment-plant volume-reference identity, or repeated recirculating tank volume.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources: sanchyi-monofilament-line

###### Equipment lubricating oil (`mineral_oil`)

Actual purchased mineral equipment lubricant only; no assumed spin finish. Track stock, leaks and spent oil, not an invented per-tonne consumption. An absent oil exchange requires maintenance evidence.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_material`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Quality-released internal monofilament (`released_monofilament`)

Native identity: PA6 monofilament, direct-spun quality; production/preparation of nylon fibre; production mix at factory; geography unspecified. Its name also carries Temperature range 100-150°C: retain this descriptor and verify actual grade applicability independently; it is neither an extrusion setting nor a demonstrated universal service rating. The native CPC35520 assignment is inconsistent with the declared >=67 dtex scope; record this classification debt without converting the physical monofilament into multifilament yarn. The Chinese general comment mistranslates polycaprolactam as 聚己内酯; PA6 basename/synonyms and English identity govern chemical interpretation, not polycaprolactone. No CAS is supplied. Actual cross section, grade, acceptance and moisture remain foreground evidence. This is internal newly released mass P, paired with warehoused_monofilament, not an additional final product or Q. Reinspection of returned stock never creates new P.

- Selected flow: Polyamide 6 monofilament `61fa6be2-e90f-41af-aba5-86209fb72896`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_release`
- Sources: basf-monofilaments; yusheng-pa6-monofilament

##### Waste flows

###### Exported PA6 purge and offcut waste (`pa6_scrap`)

One segregated PA6 waste exchange to its actual treatment destination; moisture/contamination declared. Internal measured regrind is a tracked return within production, not external purchased resin or an avoided-product credit. A native nylon waste entry fixed to cast/cut/dry is not adopted for this extrusion scrap.

- Selected flow: Unrecycled PA6 extrusion and monofilament scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_make`
- Sources:

###### Quench/drawing liquid effluent (`process_effluent`)

Actual liquid purge/overflow and cleaning-water outlet to treatment; not an elementary river discharge by default. Analyse dissolved caprolactam and other actual constituents as subledgers, not duplicate full wastewater mass. No COD-to-species conversion.

- Selected flow: PA6 monofilament quench and drawing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_water`
- Sources:

###### Spent equipment oil (`spent_oil`)

Segregate actual spent mineral oil; do not identify a synthetic PAO provider as mineral oil or assume all purchased oil is immediately emitted.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_waste_make`
- Sources:

##### Elementary flows

###### Net process water vapour to air (`water_vapour`)

Net water transfer from evaporation/drying after subtracting measured inlet air humidity on the same dry-air basis; liquid droplets and final product moisture are separate ledgers. Declare actual air subcompartment. Ambient background through-flow is cancelled, not fictitious reaction water. Native Elementary/Mass, CAS7732-18-5, emissions to air unspecified; no route/geography or quantitative factor. This is not indoor, long-term, high-stack, upper-atmosphere or plant evapotranspiration identity. Verify actual subcompartment or select another directly verified identity. Broad native water/isotope synonyms do not override ordinary-water CAS and vapour medium.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: basf-extrusion-guide

###### Actual caprolactam release (`caprolactam_air`)

Conditional actual measured substance-specific release from PA6 processing; not the whole exhaust-air mass or a residual mass. Capture/filter recovery is internal until exported as a separately identified stream. A thermal warning is no numerical emission factor; independently identify other actual species in separate cards before use. Native Elementary/Mass, caprolactam CAS105-60-2, emissions to air unspecified; no geography, production route or quantity factor supplied. Do not use it for dissolved caprolactam in wastewater, indoor air, long-term air or whole exhaust. Broad native synonyms including polymer terms do not override the named monomer CAS. Verify actual air subcompartment before use.

- Selected flow: caprolactam `fe0acd60-3ddc-11dd-9fcf-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_species`
- Sources: basf-extrusion-guide

### Process: Storage packing and delivery (`dispatch`)

#### Inputs

##### Product flows

###### Internal receipt from production (`warehoused_monofilament`)

Native identity: PA6 monofilament, direct-spun quality; production/preparation of nylon fibre; production mix at factory; geography unspecified. Its name also carries Temperature range 100-150°C: retain this descriptor and verify actual grade applicability independently; it is neither an extrusion setting nor a demonstrated universal service rating. The native CPC35520 assignment is inconsistent with the declared >=67 dtex scope; record this classification debt without converting the physical monofilament into multifilament yarn. The Chinese general comment mistranslates polycaprolactam as 聚己内酯; PA6 basename/synonyms and English identity govern chemical interpretation, not polycaprolactone. No CAS is supplied. Actual cross section, grade, acceptance and moisture remain foreground evidence. Pair actual P and carried burdens with released_monofilament. Opening finished goods retain prior burdens; this receipt is not repurchased and is cancelled at consolidation.

- Selected flow: Polyamide 6 monofilament `61fa6be2-e90f-41af-aba5-86209fb72896`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock`
- Sources: basf-monofilaments

###### Storage packing handling electricity (`dispatch_electricity`)

Native CN, 1–35 kV consumption mix to user, grid-average supply. This UUID applies only to that China medium-voltage interface, not arbitrary low voltage, renewable-only electricity or another geography; match the actual provider and conversion losses separately. Its reference is Net calorific value/MJ, not Mass. Actual humidity-control/storage/rewinding/packing and electric handling/charging losses are included for the delivered cohort, with measured storage time. The baseline is electric; actual fuelled handling requires an expansion.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_energy_dispatch`
- Sources:

###### Paperboard winding core (`paper_core`)

Native one cylindrical paperboard winding core, at-plant production mix, geography and manufacturing route unspecified; yarn-core use is explicit. It is one complete core, not a cardboard material mixture or plastic spool. Measure actual paperboard/composition/provider and consumption separately; no fixed recycled share or mass.

- Selected flow: Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Corrugated shipping carton (`corrugated_carton`)

One actual complete shipping carton, if used; retain its complete material composition and actual net consumed mass, including rejects. Independently confirm this physically specific whole-carton identity, composition, supplier and background boundary; no fixed fibre recipe or recycled share is assumed. Keep the core, wrapping film and every other actual packaging component as separate exchanges.

- Selected flow: Corrugated shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### LDPE protective wrapping film (`ldpe_wrap`)

Actual detachable protective LDPE film only, not synthetic monofilament strip; whole film purchase consumption and scrap retained. Different packaging requires its own atomic row. Native Product/Mass LDPE foil with no CAS, location, route, grade or secondary property stated; only non-self-adhesive non-cellular unreinforced unlaminated unsupported LDPE film is represented. It gives no supplier inventory, film thickness or recycled share.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Terminal net delivered monofilament (`delivered_monofilament`)

Native identity: PA6 monofilament, direct-spun quality; production/preparation of nylon fibre; production mix at factory; geography unspecified. Its name also carries Temperature range 100-150°C: retain this descriptor and verify actual grade applicability independently; it is neither an extrusion setting nor a demonstrated universal service rating. The native CPC35520 assignment is inconsistent with the declared >=67 dtex scope; record this classification debt without converting the physical monofilament into multifilament yarn. The Chinese general comment mistranslates polycaprolactam as 聚己内酯; PA6 basename/synonyms and English identity govern chemical interpretation, not polycaprolactone. No CAS is supplied. Actual cross section, grade, acceptance and moisture remain foreground evidence. This unique reference row represents 1 kg net actually delivered product under cp_delivery. Count each physical accepted consignment only once after returns; returned/reaccepted or redispatched material never creates new production. Retain packaging and warehousing burdens while excluding their mass from the reference product.

- Selected flow: Polyamide 6 monofilament `61fa6be2-e90f-41af-aba5-86209fb72896`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_delivery`
- Sources: yusheng-pa6-monofilament; wco-hs2022-ch54

##### Waste flows

###### Discarded paperboard packaging (`paperboard_waste`)

Segregated actual paperboard core/carton waste to treatment, with adhesive/contamination stated. Undelivered sound packaging remains stock, not immediate waste.

- Selected flow: Discarded paperboard packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Discarded LDPE wrap (`ldpe_waste`)

Actual separate LDPE packaging scrap; no automatic avoided virgin-film credit.

- Selected flow: Discarded LDPE wrapping film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_pack`
- Sources:

###### Non-reworked PA6 handling rejects (`dispatch_pa6_reject`)

Actual returned or damaged monofilament leaving the system for treatment, separately from reusable returned stock and internal rework. Preserve its carried production/storage burdens in the attribution policy.

- Selected flow: Rejected PA6 monofilament to treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: x_i = A_i / Q, applied exactly once; A_i is this row's undivided same-cohort numerator after raw conversion and complete stock/burden attribution; Q is the unique net delivered kg defined in section 8.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_stock`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all inventory rows | Avoid allocation using line/lot meters and origin-specific stock/burden tracking first. Shared energy requires demonstrated actual load/run-time relationship, storage uses actual cohort dwell/load, and packaging uses actual component consumption. Do not allocate different diameters or grades simply by metres. Disclose remaining allocation, uncertainty and sensitivity; mass allocation is not an automatic default. | jrc-ilcd-allocation-2010 |
| allocation_rework | rework and scrap | Do not credit internal regrind or returned product as avoided virgin material or new output. Retain all repeat extrusion/drawing/inspection/storage burdens. Actual exported scrap treatment remains included; a genuine saleable co-product requires a separately declared identity, allocation method and review before use. No negative burden or cut-off is inferred from a waste label. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | monofilament_make | resin and equipment oil | weighing and purchase stock ledger | owner material custodian; batch/grade; complete supply formulation; opening/receipts/closing; net kg; polymer/additive/water assays; regrind lots; oil issues and returns | Owner material custodian retains undivided raw period consumption, procurement and assay subledgers. Reconcile actual issue/return/stock weights; allocate no amount by Q here. Include all failed/zero-output runs and rework; prevent duplicate embedded-constituent procurement. The aggregation label is the result basis of the sole section-8 reporting operation, not an additional division during collection. | kg | each receipt issue and stock close | actual production history for matched delivered cohort, including prior-period carry | monofilament plant and selected line | per 1 kg reference flow | calibrated scales; invoices; COA/SDS; reconciled ledgers |
| cp_energy_make | monofilament_make | manufacturing electricity | submeter and operating log | owner line energy engineer; meter start/end; kWh; interval; voltage; country; running/idle/failed runs; dryer; pumps; air compressor; draw/anneal/winder loads; shared-use evidence | Energy engineer records raw integrated kWh for all attributable operating and auxiliary loads; main-meter reconcile and direct assignment first. If measured rate is used, integrate rate over actual duration once; integrated readings receive no extra time factor and no division here. The aggregation label is the result basis of the sole section-8 reporting operation, not an additional division during collection. | kWh; MJ | each shift and campaign | full matched production history including zero-output periods | manufacture and its electric utilities | per 1 kg reference flow | meter calibration; load log; voltage/provider; allocation evidence |
| cp_water | monofilament_make | external water and liquid effluent | water-system balance and assays | owner utility engineer; make-up meter; integrated volume; temperature density; loop opening/closing; circulation; purge overflow droplets; product retained moisture; wastewater mass; constituent assays | Utility engineer retains raw external make-up and each physical outlet; read actual water-system records. Internal loop turnovers are not fresh water. Independently measure state/density, wastewater and water in polymer/product/air; retain every stock change without normalization. The aggregation label is the result basis of the sole section-8 reporting operation, not an additional division during collection. | kg; m3 | meter interval and bath change | same production history and stock cut-offs | quench drawing and actual cleaning outlets | per 1 kg reference flow | water meters; density/state evidence; effluent assays; routing records |
| cp_release | monofilament_make | newly quality-released monofilament P and WIP | lot production and quality ledger | owner production quality lead; unique lots; net mass; core tare; measured length; dtex; diameter; grade/form; moisture conditioning; first acceptance; failures/rework; opening/closing WIP mass and burden vectors | Quality lead weighs net conditioned product with calibrated scales and performs lot-specific geometric/linear-mass tests. Record raw P once at first positive production release; no new P from reinspection. Preserve incomplete/failed lots and WIP carried burdens. Do not divide by P or Q here. The aggregation label is the result basis of the sole section-8 reporting operation, not an additional division during collection. | kg; m; dtex; mm | each lot and WIP cut-off | all actual production periods serving delivery cohort | selected production line to warehouse handover | per 1 kg reference flow | first acceptance IDs; calibration; QC; WIP stage/burden reconciliation |
| cp_waste_make | monofilament_make | PA6 scrap and spent oil | segregated weighing and handover | owner waste custodian; row substance; contamination moisture; kg; generation lot; internal rework; opening/closing waste; treatment destination | Waste custodian retains undivided separately weighed physical streams, reconciling internal returns and external handover. Include failed runs and rejects; no automatic avoided-product credit. The aggregation label is the result basis of the sole section-8 reporting operation, not an additional division during collection. | kg | each generation and shipment | matched actual production history | manufacturing waste gates | per 1 kg reference flow | scales; segregation; transfer notes; treatment contracts |
| cp_species | monofilament_make | net air water and caprolactam | substance-specific sampling and air balance | owner environmental engineer; substance/CAS when known; compartment; inlet/outlet humidity; dry-air mass; integrated gas volume or rate/time; temperature pressure; concentration; capture; droplets; detection limits; uncertainty | Environmental engineer retains raw inlet/outlet air and compound records, integrates rates once or uses already integrated volumes, and subtracts background only on matched state/dry-air bases. Determine actual species independently from total physical/element balances. No residual or COD fitting, no assumed reaction water, and no normalization here. The aggregation label is the result basis of the sole section-8 reporting operation, not an additional division during collection. | kg; m3 | representative campaigns and actual emission episodes | complete matched run coverage including failures | actual vents and room-air export with stated subcompartment | per 1 kg reference flow | laboratory method; blanks; humidity/state instruments; detection/coverage limits |
| cp_stock | dispatch | internal receipt, FG stock and PA6 rejects | warehouse mass and burden ledger | owner warehouse custodian; paired release/receipt IDs; P; opening/closing FG kg; burden vectors by origin lot; returns/rework; damage/reject kg; storage duration; dispatch gate | Warehouse custodian records undivided FG and WIP-interface movements, segregated by product/route/state and origin lot, preserving prior-period burdens and current storage increments. Reconcile production and warehouse separately. No division and no counting closing FG as a second production output. The aggregation label is the result basis of the sole section-8 reporting operation, not an additional division during collection. | kg | each movement and stock close | all periods and storage days for delivered cohort | actual warehouse, return and rework gates | per 1 kg reference flow | paired lots; stock count; stage burden ledger; return/reject records |
| cp_energy_dispatch | dispatch | warehouse packing handling electricity | electric submeter and storage-time ledger | owner warehouse energy lead; raw kWh; humidity control; storage days; rewinding; packing; loading; charging losses; idle time; shared load assignment; voltage/geography | Warehouse energy lead retains raw period numerators, including failed packing, returned/reworked consignments and closing-stock storage increments, with load/time attribution. Carry undelivered-stock burdens forward; do not allocate all warehouse energy to current dispatch by assumption. No division here. The aggregation label is the result basis of the sole section-8 reporting operation, not an additional division during collection. | kWh; MJ | each metering period and lot dwell | matched storage/delivery history including opening FG | actual warehouse packing and loading | per 1 kg reference flow | meter log; charging record; storage-time allocation evidence |
| cp_pack | dispatch | core carton wrap and segregated waste | component weighing and stock records | owner packing lead; complete component/provider; kg consumed; opening receipts closing; reusable-core rotations/losses; scrap; delivered pack tare; core mass; unreleased pack lots | Packing lead weighs each complete component and waste separately, retains raw stock/consumption and actual reuse/loss records. Allocate reusable cores by supported actual service cycles, without putting core mass in product kg. No generic whole-pack mixture and no normalization here. The aggregation label is the result basis of the sole section-8 reporting operation, not an additional division during collection. | kg | each packed lot and stock close | matched delivered cohort and its retained stock | actual winding-core and dispatch packaging gate | per 1 kg reference flow | component scales; supplier specifications; reuse ledger; tare; waste notes |
| cp_delivery | dispatch | terminal actual net delivered Q | unique consignment and return reconciliation | owner dispatch quality lead; lot/consignment unique IDs; actual forward dispatch kg D; return kg R; return credit corrections; redispatch links; calibrated gross/tare/net; moisture conditioning; actual accepted net Q; unreleased/undelivered exclusions | Dispatch quality lead retains undivided raw D and each R with the physical lot and prior delivery credit. Match dispatch acceptance and net weighing; cancel returned credits and link redispatch so each accepted physical kg contributes once. Adjust the original cohort and restore returned burdens where returns cross periods. Keep stock/carry records; do not divide any raw numerator here. The aggregation label is the result basis of the sole section-8 reporting operation, not an additional division during collection. | kg | each consignment return and settlement | explicit delivery cohort with settled returns or disclosed provisional correction | factory net-dispatch gate, not customer-use gate | per 1 kg reference flow | dispatch/return acceptance; calibrated tare; cohort deduplication; moisture records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_units | make_electricity; dispatch_electricity; quench_makeup; process_effluent; water_vapour; caprolactam_air | Convert raw meter/assay records to each row unit before attribution: kWh*3.6 = MJ; raw length l*M/L = kg only with same conditioned lot measurements. Use independently measured state/density/humidity for liquid or gas conversion. Integrated volumes get no extra duration. This rule performs no division by Q. | cp_energy_make; cp_energy_dispatch; cp_water; cp_species; cp_release; cp_delivery | raw amount A_i in row unit |  |
| cohort_attribution | all inventory rows | For each burden component i, A_i = B_open,i + B_period,i + B_return_correction,i - B_close,i - B_other_cohort,i. B_open retains opening WIP/FG burdens, B_period contains the complete actual matched raw period inputs and attributable shared/storage/rework burdens, B_close is independently identified ending WIP/undelivered FG carry, and B_other_cohort is a documented transfer to another product/route/state cohort, not an arbitrary residual. Preserve all raw records; carry independently identified ending WIP and undelivered FG vectors forward. Associate failure/zero-output burdens and unrecoverable reject treatment with the actual causal cohort. Reconcile other-cohort transfers explicitly. Returned-stock burdens are restored from the original credited cohort without repurchasing or creating output. This produces undivided A_i attributable to Q, not a pre-normalized coefficient. | cp_release; cp_stock; cp_material; cp_energy_make; cp_energy_dispatch; cp_delivery; cp_waste_make; cp_pack; cp_water; cp_species | undivided cohort amount A_i and retained ending burden vectors |  |
| delivery_quantity | delivered_monofilament | Q is the sum of actual net kg credited to unique accepted physical consignments in the declared delivery cohort after linked return/re-delivery corrections. Reconcile raw forward D and return R movements with stock and original delivery credits; repeated dispatch or reacceptance cannot add another copy of the same kg. Cross-period returns correct the original credited cohort and restore its carried burdens. Q excludes all undelivered FG and WIP; a nonpositive or unsettled unquantifiable Q cannot support a completed dataset. | cp_delivery; cp_stock; cp_release | Q |  |
| normalize_delivery | all inventory rows | The sole reporting normalization is x_i = A_i / Q, with Q the unique strictly positive return-adjusted actual net delivered kg of the same product/route/state cohort. A_i is the undivided amount from convert_units and cohort_attribution; do not divide it elsewhere first. The reference output is 1 kg. Card formulas and protocol aggregation text refer to this same operation, never sequential divisions. P, reel count, machine mass and all produced-plus-closing-stock totals are not alternative denominators. | A_i; Q; cp_delivery; cp_stock | row quantity per 1 kg reference flow |  |
| reconcile_ledgers | monofilament_make; dispatch | Production ledger: opening raw material and WIP plus external material receipts equals new release P plus closing raw/WIP plus exported waste and independently measured net material releases, with internal regrind cancelled. Do not append closing finished-goods stock as another production output of P. Warehouse ledger: opening FG plus P plus physical returns equals raw forward dispatch D plus closing FG plus actual rejects/rework exports, with paired rework transfers explicit. Consolidate by cancelling P/receipt, then derive return-adjusted unique Q with prior-cohort credit corrections. Keep packaging, water and oil subledgers; mass uncertainty is not a chemical species. | cp_material; cp_release; cp_stock; cp_delivery; cp_water; cp_species; cp_pack; cp_waste_make | physical balances, cohort corrections and unexplained residuals |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | all rows | Demonstrate the declared PA6 direct pellet route, one round solid filament and actual supply state. Mother-yarn splitting, multifilament/tow, copolyamide, slitting, coatings or chemical treatment require separate applicability review. | basf-monofilaments; sanchyi-monofilament-line; yusheng-pa6-monofilament |
| quality_completeness | all protocols | Retain full actual history with failures, zero-output periods, rework, returns, opening/closing WIP/FG and burden carry. Future measurement/provider gaps are disclosed; never replace them with zero or an invented factor. Detection limits and unmeasured scope remain explicit. | cp_material; cp_energy_make; cp_water; cp_release; cp_stock; cp_delivery |
| quality_identity | UUID-bearing cards | Preserve complete native names, route, location, physical form, reference property and official Chinese basename. CN 1–35 kV electricity applies only to that interface. PA6 classification/Chinese-comment defects and the 100–150°C native descriptor remain explicit; actual grade/temperature capability requires supplier evidence. Generic identity is not a background provider or scientific approval. | cp_material; cp_release; cp_energy_make; cp_energy_dispatch |
| quality_balances | water polymer air and packaging | Check total physical mass and relevant C/H/N/O ledgers independently of measured actual chemical species, air humidity and free/retained water. Quantify measurement uncertainty; never label closure residual as caprolactam, particulate, CO2 or reaction water. | cp_water; cp_species; cp_material; cp_release; cp_stock; cp_pack |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validation_reference | delivered_monofilament | Require the explicit terminal Product row, reference UUID agreement, 1 kg net actual delivered basis, complete required qualifiers and unique physical consignment reconciliation. Internal released/received rows deliberately share the PA6 UUID and must remain visible, paired and cancelled. |  |
| validation_measurement | all inventory rows | All applicable final exchanges use the same 1 kg delivery basis, raw conversions before exactly one A_i/Q. Q must be positive finite; raw failed batches with no output remain in burdens. Check net product M/L conversions, native property/unit chains and conditioned supply moisture; no tex-density or integrated-volume/time error. |  |
| validation_stock | manufacture and dispatch | Reconcile independent production and warehouse ledgers and carried burden vectors. Undelivered ending FG is not in Q and retains burdens; opening FG is not burden-free. Returned reaccepted product cannot create new P or duplicate Q. Retain real packaging, storage, handling, dispatch and rework burdens through the chosen gate. |  |
| validation_species | water and chemical balances | Separately verify make-up, circulation, effluent, droplets, product moisture and net gas humidity; preserve actual substance/medium identities and independent emission evidence. Thermal phase changes do not prove chemical water formation; uncertainty cannot be solved by two residual-derived unknowns. Missing data is inconclusive, not a zero. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | manufacturing_foreground_with_actual_factory_net_delivery |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | The declared water-quenched direct-spun PA6 monofilament route with validated actual cohort records and matched upstream providers |
| excluded_use | Whole CPC35530 coverage, strip/film/strap, multifilament/tow, medical or lifetime equivalence, polymerisation inventories and automatic supplier/grade certification |
| required_metadata | PCR id/version; product/grade/form/diameter/dtex; moisture conditioning; site; native limits; process configuration; production and delivery periods; P/D/R/Q; WIP/FG mass and burden carry; return links; packaging; actual providers; allocation and cut-offs |
| required_quality_disclosure | Meter/weighing/species coverage and uncertainty; failed-run/rework/stock attribution; unresolved flow UUIDs/providers; source limitations; native classification and translation debt; unverified temperature descriptor; missing environmental scope; scientific review pending |
| update_trigger | Change in grade, polymer, direct-spinning route, drawing/heat supply, finish, product moisture, geometry, delivery gate, returns/stock attribution, provider geography or new contrary evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0, 30 June 2025, printed p174, 35510/35520/35530 and 36310; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Current classification titles and adjacent boundaries only. The 35530 note supplies no industrial recipe or inventory; no accepted mapping is established. |
| wco-hs2022-ch54 | official_guidance | WCO, HS 2022, Chapter 54, note 1 and headings 5402/5404; https://www.wcotradetools.org/en/harmonized-system/2022/en/1154 | Physical discrimination: synthetic monofilament at least 67 dtex with no cross-sectional dimension above 1 mm, versus thinner filament yarn and plastic profiles; strip remains a different form. HS evidence supplements the sparse current CPC description, without claiming a new correspondence acceptance. |
| basf-monofilaments | handbook | BASF, Monofilaments, publisher web snapshot 16 October 2026; https://chemicals.basf.com/global/en/Monomers/polyamides-and-precursors/monofilaments | PA6 grades and direct extrusion, quenching, drawing and relaxation. PA6/66 copolyamide grades and thick-profile cases excluded; no numerical operating settings or service rating adopted. |
| basf-extrusion-guide | handbook | BASF, Ultramid Properties and Extrusion Processing Guide, undated guide (PDF metadata October 2021), pp10-11 and14-15; https://chemicals.basf.com/dam/jcr%3A794caec6-5ccb-4345-8cc5-26f39840adca/basf/chemicals/north-america/nylon-polyamides/gated-pdfs/BASF_Ultramid_Properties_and_Extrusion_Processing_Guide.pdf | Monofilament process decomposition, pre-dried moisture-protected resin supply and grade/additive distinctions. Table 5 is an example, not the chosen factory or an inventory factor. Thermal-decomposition discussion requires independent species evidence, not automatic emissions. |
| sanchyi-monofilament-line | handbook | SAN CHYI MACHINERY, Monofilament Extrusion Lines, SC-MFP / SC-MFN, publisher rendered-DOM snapshot 16 October 2026; https://www.sanchyi.com/catalog/index.php?index_m1_id=23 | Independent equipment maker supports melt filtration/extrusion, water quench, electrically heated water drawing, PA additional hot-air drawing, hot-air annealing and winding. Multiple polymers and winder designs are offered; only the declared PA6 line configuration is within scope. No throughput/nameplate-energy default. |
| yusheng-pa6-monofilament | handbook | YUSHENG, Nylon Monofilament Yarn, Nylon 6 specification table, publisher web snapshot 16 October 2026; https://www.yushengmax.com/products/nylon-monofilament-yarn/ | Commercial PA6 single-solid-filament identity, including nominal 0.20 mm product. Supplier also offers mother-yarn splitting; that route is excluded here. The 0.30 mm linear-density/tenacity cells have unresolved dimensional inconsistency and are not conversion factors. No supplier recipe, thermal rating, tolerance or performance default is adopted. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment, Detailed guidance, first edition March2010, §7.9.3, printed257–258/PDF277–278; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional direct assignment, virtual subdivision and flow-specific determining physical causality for shared production, storage and packing burdens. No PA6 grade, operating recipe, factory quantity, loss/yield/intensity factor, universal mass allocation, substitution credit or claim that the handbook literally prescribes this PCR stock-ledger implementation. Other frameworks require goal-consistent independent review. |
