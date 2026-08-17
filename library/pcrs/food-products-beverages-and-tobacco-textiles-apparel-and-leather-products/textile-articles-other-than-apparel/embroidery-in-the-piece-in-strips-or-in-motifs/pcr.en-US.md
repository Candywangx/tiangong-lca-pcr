---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.embroidery-in-the-piece-in-strips-or-in-motifs
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Embroidery in the piece, in strips or in motifs

## 1. Scope and Applicability

This PCR applies to embroidery supplied as textile material in the piece, in strips, or as motifs at the embroidery manufacturing gate. It covers machine-made or hand-guided embroidery formed by stitching declared embroidery thread into or onto a declared textile substrate, including the backing or stabilizer actually incorporated or consumed by the foreground route. The foreground dataset shall identify whether the product is supplied as continuous piece goods, strip goods, or discrete motifs and shall not average these market states unless the production-weighted mix is documented.

The foreground boundary starts with received textile substrate, embroidery thread, and route-specific backing or stabilizer and ends with net saleable embroidery after framing or stabilization, embroidery, thread trimming, inspection, and packing. Digitizing or stitch-program preparation is included when performed by the reporting organization and its attributable electricity is recorded. Upstream fibre, yarn, fabric, thread, backing, electricity, and packaging production; inbound and outbound transport; incorporation into garments or other articles; use; and end of life are represented by separate datasets when relevant.

Excluded products are unembroidered narrow woven fabrics and trimmings, lace and tulle, tufted fabrics or carpets, quilted textile products whose defining operation is quilting, embroidered finished garments or made-up articles reported as those downstream products, and embroidery services without a saleable embroidered textile output. Printing, dyeing, coating, washing, heat setting, adhesive lamination, or other finishing is outside the default route and shall be added as a separate foreground process when performed for the declared product.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.embroidery-in-the-piece-in-strips-or-in-motifs |
| classification_refs | CPC 3.0: 27913 (exact scope reference) |
| covered_products | Embroidery in the piece, in strips, or in motifs, made on a declared textile substrate with declared embroidery-thread and backing composition |
| excluded_products | Unembroidered narrow fabrics and trimmings; lace and tulle; tufted carpets or fabrics; quilted textiles; finished garments and made-up articles classified by their downstream product identity; service-only records without a product output |
| representative_product | Net saleable machine-embroidered textile at the manufacturing gate, with form, substrate, thread, backing, stitch construction, dimensions, mass, and finishing state declared |
| production_route | Substrate receipt and preparation; optional backing or stabilization; stitch-program preparation where in scope; embroidery; thread trimming; inspection; and packing |
| market_state | Finished embroidery in piece, strip, or motif form at the embroidery manufacturing gate; form and incorporated materials shall be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Embroidered textile material delivered at the embroidery manufacturing gate |
| How much | 1 kg net saleable embroidery, excluding transport packaging |
| How well | Conforms to the declared piece, strip, or motif form and declared substrate, thread, backing, stitch construction, dimensions, appearance requirements, and finishing state |
| How long or cycle | One foreground production batch at the manufacturing gate; no use-phase service life is assigned to this intermediate textile product |
| reference_flow_link | ref_embroidery_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Embroidery in the piece, in strips or in motifs `0fed9734-6186-489c-a6a0-cca6894e944d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form: piece/strip/motif; substrate fibre composition and construction; embroidery-thread composition and count or linear density; backing or stabilizer material and whether retained; stitch type and stitch count or density; embroidered area and overall dimensions; colour count; net product mass and conditioning state; machine or hand-guided route; finishing state; site and production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh net saleable embroidery after declared conditioning and inspection. Exclude pallets, cartons, film, cores, and other transport packaging from the 1 kg reference amount. |
| `conditioning_state` | Product, substrate, thread, backing, intermediates, and textile waste | Mass | kg | Record the conditioning atmosphere or measured moisture state used for mass records. When a standard conditioned mass is reported, condition and test textile specimens consistently with ISO 139 or a declared equivalent method. |
| `fibre_composition` | Substrate, embroidery thread, and retained backing | Fibre mass fraction | % by mass | Record supplier composition for each incorporated textile component and retain representative verification. Where quantitative chemical analysis is required, use the applicable ISO 1833 method and record sampling, non-fibrous-matter removal, result, and tolerance. |
| `supplementary_area` | Product form and embroidered coverage | Area | m2 | Report overall product area and embroidered area as supplementary results where meaningful; do not replace the mass reference flow with area. State how motif count, strip length, or piece dimensions were converted to area. |
| `normalization_consistency` | All inventory rows | Row-specific property | Row-specific unit | Normalize each collected exchange to the same net saleable output mass and production period. Retain gross production, rejects, work-in-progress change, and moisture corrections so the 1 kg denominator is reproducible. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received textile substrate, embroidery thread, and any backing or stabilizer crossing the foreground boundary, each with supplier product identity, composition, quantity, moisture or conditioning state, origin, and upstream dataset reference |
| starting_condition_role | Purchased or internally transferred foreground inputs; their upstream fibre, yarn, fabric, thread, backing, and auxiliary-material production remains represented by linked upstream datasets |
| product_classification_scope | Embroidery supplied in piece, strip, or motif form; downstream garments, made-up articles, lace, tulle, tufted textiles, and quilted products remain outside this category |
| recursive_input_rule | When already embroidered material of the same category enters further in-scope embroidery or finishing, record it as a product input with its own upstream dataset and do not recreate already completed embroidery stages in the current package |
| upstream_dataset_requirement | Link representative datasets for each received substrate, thread, backing or stabilizer, electricity supply, packaging component, and off-site waste treatment route; add datasets for any route-specific chemicals, fuels, heat, water, or finishing service actually used |
| disclosure | Declare product form, site boundary, included and outsourced operations, substrate/thread/backing identities, stitch-program scope, equipment route, packing scope, production period, allocation choices, cut-offs, rejected output treatment, and unresolved data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | Foreground embroidery manufacture | Include receipt and preparation of substrate and thread, route-specific backing or stabilization, embroidery-machine operation, attributable compressor and direct-support electricity, thread trimming, inspection, and packing. Include digitizing and other finishing only when performed within the reporting organization for the declared output. | `cay-embroidery-energy-2018`; `iso-4915-stitch-types-1991` |
| `boundary_same_category_input` | Further embroidery or finishing of received embroidery | Treat received same-category embroidery as a disclosed product input with an upstream dataset and avoid double counting its completed operations. | `eu-pef-method-2021` |
| `boundary_cutoff` | Material, energy, waste, and emission flows | Avoid cut-offs. Any exclusion shall be quantified, justified, disclosed, and shall not conceal a route-defining input, hazardous substance, regulated emission, or significant material or energy flow; the cumulative PEF cut-off ceiling is an upper limit, not an automatic exclusion rule. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `substrate_preparation` | Substrate preparation and stabilization | required | Always include substrate receipt and preparation; include backing or stabilizer only when used | Foreground material preparation | Per kg prepared substrate transferred to embroidery and normalized to 1 kg net saleable embroidery |
| `embroidery_operation` | Embroidery operation | required | Always included | Foreground stitch formation | Per machine or production batch and normalized to 1 kg net saleable embroidery |
| `inspection_and_packing` | Thread trimming, inspection, and packing | required | Always include trimming and inspection; record each packaging component only when used | Foreground finalization | Per 1 kg net saleable embroidery |

### Process: Substrate preparation and stabilization (`substrate_preparation`)

#### Inputs

##### Product flows

###### Received textile substrate (`received_substrate`)

Record the single supplier product used as the textile substrate for the declared batch. Its exact fibre composition, fabric or sheet construction, dimensions, mass, moisture state, and upstream dataset shall accompany the exchange.

- Selected flow: Received textile substrate for embroidery, exact supplier product declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed substrate issued to the batch, less documented unopened returns and adjusted for work-in-progress change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `iso-1833-fibre-analysis-2020`

###### Embroidery backing or stabilizer (`embroidery_backing`)

Record the one backing or stabilizer product used in the declared route. Separate records are required when materially different backing products are used; do not combine paper, polymer film, nonwoven, and water-soluble backing in one exchange.

- Selected flow: Embroidery backing, exact product and composition declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed backing or stabilizer issued to the batch, net of unopened returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `iso-1833-fibre-analysis-2020`

###### Electricity for substrate preparation (`preparation_electricity`)

Record the electricity consumed by cutting, framing, hooping, stabilization, and directly attributable preparation equipment. Manual-only preparation records zero metered electricity with route evidence.

- Selected flow: Site electricity supply for substrate preparation
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or equipment meter reading for the preparation batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared substrate transferred to embroidery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources: `cay-embroidery-energy-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared substrate transferred to embroidery (`prepared_substrate`)

Record substrate after framing, hooping, and route-specific stabilization and reconcile it to received substrate, backing, offcuts, and work-in-progress.

- Selected flow: Prepared textile substrate for embroidery, declared batch intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed or controlled transfer mass to embroidery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

##### Waste flows

###### Backing or stabilizer offcuts (`backing_offcuts`)

Record backing or stabilizer offcuts leaving preparation, separated by exact material and treatment destination.

- Selected flow: Embroidery-backing offcuts, exact composition and destination declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed offcuts removed from the batch, net of verified internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared substrate transferred to embroidery
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

### Process: Embroidery operation (`embroidery_operation`)

#### Inputs

##### Product flows

###### Prepared textile substrate (`prepared_substrate_input`)

Record the prepared substrate entering stitch formation as the exact batch intermediate.

- Selected flow: Prepared textile substrate for embroidery, declared batch intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed or controlled transfer mass entering embroidery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Polyester embroidery thread (`polyester_thread`)

Record polyester embroidery thread only when it is used, by exact supplier product, colour lot, construction, and linear density.

- Selected flow: Polyester embroidery thread, exact supplier product declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed thread issued minus returned usable thread, reconciled with thread remaining on cones and thread trimmings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thread_mass_balance`
- Sources: `iso-1833-fibre-analysis-2020`; `iso-4915-stitch-types-1991`

###### Regenerated-cellulose embroidery thread (`regenerated_cellulose_thread`)

Record viscose, rayon, or other regenerated-cellulose embroidery thread only when used, by exact supplier product, colour lot, construction, and linear density.

- Selected flow: Regenerated-cellulose filament embroidery thread, exact supplier product declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed thread issued minus returned usable thread, reconciled with thread remaining on cones and thread trimmings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thread_mass_balance`
- Sources: `iso-1833-fibre-analysis-2020`; `iso-4915-stitch-types-1991`

###### Cotton embroidery thread (`cotton_thread`)

Record cotton embroidery thread only when used, by exact supplier product, colour lot, construction, and linear density.

- Selected flow: Cotton embroidery thread, exact supplier product declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed thread issued minus returned usable thread, reconciled with thread remaining on cones and thread trimmings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thread_mass_balance`
- Sources: `iso-1833-fibre-analysis-2020`; `iso-4915-stitch-types-1991`

###### Metallic embroidery thread (`metallic_thread`)

Record metallic embroidery thread only when used, with carrier yarn, metallic layer, coating, and supplier product identified.

- Selected flow: Metallic embroidery thread, exact supplier product and composition declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed thread issued minus returned usable thread, reconciled with thread remaining on cones and thread trimmings
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thread_mass_balance`
- Sources: `iso-4915-stitch-types-1991`

###### Electricity for embroidery machines and direct support (`embroidery_electricity`)

Record electricity for embroidery machines and the attributable share of direct support equipment, including compressed-air generation when it serves thread cutting or machine actuation. Do not combine purchased heat or fuels into this electricity exchange.

- Selected flow: Site electricity supply for embroidery operation
- Flow property / unit: Energy / kWh
- Amount rule: Submetered batch electricity; where one meter serves multiple lines, retain the meter total and documented allocation driver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources: `cay-embroidery-energy-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Embroidered textile transferred to final inspection (`embroidered_intermediate`)

Record the embroidered intermediate before final trimming and inspection, with stitch program, stitch type, stitch count, colour count, substrate, thread, and backing state linked to the batch.

- Selected flow: Embroidered textile before final inspection, declared batch intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed or controlled transfer mass after embroidery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_quality_records`
- Sources: `iso-4915-stitch-types-1991`

##### Waste flows

###### Embroidery-thread trimmings (`thread_trimmings_waste`)

Record thread trimmings as separate waste records by fibre or material composition and destination when they are not internally reused.

- Selected flow: Embroidery-thread trimmings, exact composition and destination declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed thread trimmings removed from the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

###### Defective embroidery removed during machine operation (`defective_embroidery_waste`)

Record substrate, thread, and retained backing in embroidered pieces rejected during machine operation, separated by composition and treatment destination.

- Selected flow: Defective embroidered textile from machine operation, exact composition and destination declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed defective embroidered material removed before final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

### Process: Thread trimming, inspection, and packing (`inspection_and_packing`)

#### Inputs

##### Product flows

###### Embroidered textile entering final inspection (`embroidered_intermediate_input`)

Record the embroidered batch intermediate entering final thread trimming and inspection.

- Selected flow: Embroidered textile before final inspection, declared batch intermediate
- Flow property / unit: Mass / kg
- Amount rule: Weighed or controlled transfer mass entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_quality_records`
- Sources:

###### Polyethylene film packaging (`polyethylene_film_packaging`)

Record polyethylene film only when it leaves the foreground gate with the product; identify polymer grade and recycled content.

- Selected flow: Polyethylene film for embroidery packaging, exact grade declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed film issued to packed saleable output, net of unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Corrugated-board packaging (`corrugated_board_packaging`)

Record corrugated board only when it leaves the foreground gate with the product; identify board grade and recycled content.

- Selected flow: Corrugated board for embroidery packaging, exact grade declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed corrugated board issued to packed saleable output, net of unused returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Electricity for trimming, inspection, and packing (`inspection_electricity`)

Record electricity used by powered trimming, inspection lighting or equipment, counting, labelling, and packing equipment.

- Selected flow: Site electricity supply for trimming, inspection, and packing
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or dedicated equipment meter reading for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`
- Sources: `cay-embroidery-energy-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable embroidery (`reference_output`)

Record the inspected net product mass before transport packaging is added and link it to the declared piece, strip, or motif form and all required qualifiers.

- Selected flow: Embroidery in the piece, in strips or in motifs `0fed9734-6186-489c-a6a0-cca6894e944d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net saleable embroidery at the declared conditioning state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_quality_records`
- Sources: `un-cpc-3-0-27913-2025`

##### Waste flows

###### Final-inspection rejected embroidery (`final_reject_waste`)

Record embroidered material rejected at final inspection, separated by exact substrate, thread, backing composition, and treatment destination.

- Selected flow: Final-inspection rejected embroidered textile, exact composition and destination declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed final rejects removed from saleable output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable embroidery
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared embroidery lines and support systems | First avoid allocation through batch-level metering, time-resolved records, equipment subdivision, or separate production runs. | `eu-pef-method-2021` |
| `allocation_physical` | Shared electricity, preparation, inspection, and packing burdens | When subdivision is not feasible, allocate using a documented physical driver causally related to resource use, such as machine operating time, stitch count, compressed-air operating time, processed substrate mass, or packed mass. Do not use output mass alone when stitch density or machine time materially drives consumption. | `eu-pef-method-2021`; `cay-embroidery-energy-2018` |
| `allocation_rejects` | Saleable output and rejected embroidery | Assign inputs and processing burdens to the batch before separating saleable output from rejects. Credit recycling or recovered material only under the declared downstream modelling method; do not subtract waste mass from input records without traceable internal reuse. | `eu-pef-method-2021` |
| `allocation_economic_exception` | Joint products lacking a defensible physical relationship | Use economic allocation only when subdivision and a causal physical relationship are not feasible; document prices, period, currency, calculation, and sensitivity. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `substrate_preparation`; `embroidery_operation` | substrate, backing, and intermediates | warehouse issue, return, scale, and work-in-progress records | batch_id; supplier_product_id; material_composition; opening_mass; issued_mass; returned_mass; closing_mass; transfer_mass; moisture_or_conditioning_state | Calibrated weighing and batch reconciliation | kg | Each batch | Representative continuous 12-month period or all batches in a shorter declared campaign | All in-scope lines and storage points | Sum net issues and transfers by exact material; reconcile opening + receipts - returns - closing inventory to outputs and waste; normalize to net saleable output | Scale calibration; supplier specification; stock reconciliation; exception log |
| `cp_thread_mass_balance` | `embroidery_operation` | each embroidery-thread material | cone issue/return records, cone weights, and trimming collection | batch_id; thread_product_id; fibre_composition; colour_lot; linear_density; full_cone_mass; issued_cones; returned_cone_mass; empty_cone_mass; trimming_mass | Weigh thread issued, returned, remaining, and trimmed by exact product | kg | Each batch and thread product | Same production period as reference output | Every in-scope machine and thread store | Net thread consumed = issued thread mass - usable returned thread mass - unchanged stock; reconcile with incorporated thread and trimmings | Calibrated balance; cone tare control; lot traceability; reconciliation variance |
| `cp_electricity_records` | `substrate_preparation`; `embroidery_operation`; `inspection_and_packing` | electricity | utility meter, submeter, machine meter, and operating log | meter_id; opening_reading; closing_reading; batch_id; machine_id; operating_time; stitch_count; compressor_operating_time; allocation_driver | Prefer submeters; otherwise retain total meter data and a causal physical allocation driver | kWh | Meter interval and each batch | Representative continuous 12-month period or declared campaign | All in-scope machines and direct support systems | Difference meter readings; deduct only separately metered out-of-scope loads; allocate shared loads with the declared driver; normalize to net saleable mass | Meter calibration or utility bill reconciliation; machine log; allocation worksheet |
| `cp_waste_records` | `substrate_preparation`; `embroidery_operation`; `inspection_and_packing` | backing offcuts, thread trimmings, defective embroidery, and final rejects | segregated container weights and waste transfer records | batch_id; waste_id; material_composition; gross_mass; tare_mass; net_mass; internal_reuse_mass; destination; transporter_or_treatment_reference | Weigh each specific waste stream and record destination | kg | Each batch or container | Same production period as reference output | All in-scope waste collection points | Sum net waste by exact composition and destination; subtract only verified internal reuse returned to the same inventory | Scale checks; photographs or labels; transfer note; recycler or treatment receipt |
| `cp_product_and_quality_records` | `embroidery_operation`; `inspection_and_packing` | intermediate and saleable embroidered product | production order, stitch program, quality inspection, dimension, count, and scale records | batch_id; product_form; substrate_id; thread_ids; backing_id; stitch_type; stitch_count; stitch_density; colour_count; embroidered_area; piece_or_strip_dimensions; gross_output_mass; reject_mass; net_saleable_mass; conditioning_state | Link production and inspection records to calibrated output weighing | kg; m2; count; m | Each batch | Same production period as inventory | All in-scope embroidery and inspection lines | Sum net accepted mass after final inspection; retain rejects separately; normalize all exchanges to accepted mass | Scale calibration; approved specification; stitch-program revision; inspection report; batch genealogy |
| `cp_packaging_records` | `inspection_and_packing` | each packaging component | packaging issue, return, specification, and packed-unit records | batch_id; packaging_product_id; material_grade; recycled_content; issued_mass; returned_mass; packed_units | Weigh or use verified piece mass multiplied by packed quantity for each component | kg | Each batch and packaging component | Same production period as reference output | All in-scope packing lines | Net packaging issued = issued - returned; report separately from reference product mass | Supplier specification; piece-mass verification; stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | Every inventory row | normalized exchange = collected exchange for the batch / net saleable embroidery mass from the same batch | collected exchange; net saleable mass | row-specific unit per kg net saleable embroidery | `eu-pef-method-2021` |
| `calc_thread_consumption` | Each embroidery-thread product | net thread consumption = issued thread mass - usable returned thread mass - closing stock increase; reconcile the result with incorporated thread and thread-trimming waste | thread issue, return, stock, product, and waste records | kg thread consumed per batch and per kg product |  |
| `calc_batch_mass_balance` | Substrate, backing, thread, product, and textile waste | mass-balance residual = total material inputs + opening work-in-progress - net saleable output - separately measured waste - closing work-in-progress - documented returns; investigate and disclose non-zero residuals | material, output, waste, return, and work-in-progress records | kg and % of material input |  |
| `calc_shared_electricity` | Shared electricity meters | allocated electricity = shared meter consumption x declared causal-driver share; report meter total, all allocation shares, and residual | meter consumption; machine time, stitch count, compressor time, processed mass, or another documented causal driver | kWh assigned to the batch | `eu-pef-method-2021`; `cay-embroidery-energy-2018` |
| `calc_supplementary_area` | Piece, strip, or motif reporting | Determine product and embroidered area from controlled dimensions or design data; state treatment of repeats, open areas, and partial motifs | width; length; motif count; motif dimensions; digitized embroidered area | m2 per kg and declared form-specific supplementary result |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product, substrate, thread, backing, packaging, and waste | Preserve exact supplier product or waste-stream identity, composition, production route, and Tiangong UUID where verified; unresolved UUIDs shall not be replaced with broader collection flows. | Supplier specifications; batch genealogy; composition records; UUID verification record |
| `dq_temporal` | Foreground activity data | Use a representative continuous 12-month period where available. Shorter campaigns shall state dates, coverage, seasonality, product mix, downtime, and why the period is representative. | Meter dates; production calendar; coverage calculation; campaign justification |
| `dq_completeness` | Material and energy balance | Include all route-defining materials, electricity, measured wastes, and actual finishing operations. Quantify and justify exclusions and demonstrate that they meet the declared cut-off rule. | Completeness checklist; mass balance; energy reconciliation; cut-off assessment |
| `dq_measurement` | Mass, electricity, dimensions, and counts | Use calibrated instruments or verified supplier/utility records; retain units, resolution, uncertainty where available, and conversion factors. | Calibration certificates; utility bills; scale and meter checks; conversion worksheet |
| `dq_representativeness` | Upstream and treatment datasets | Match geography, technology, time, substrate/thread/backing composition, electricity supply, packaging grade, and waste destination as closely as practicable; disclose proxies and their limitations. | Dataset selection log; data-quality rating; proxy justification |
| `dq_conditioning` | Textile mass comparisons | Use one declared moisture or conditioning basis for substrate, intermediates, product, and textile waste or document corrections explicitly. | ISO 139 conditioning record or equivalent; moisture measurement; correction worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Product category and reference flow | Confirm exact CPC 27913 scope, piece/strip/motif form, reference UUID, Mass property, kg unit, and all required qualifiers; reject downstream garments, lace, tulle, tufted, quilted, or service-only outputs. | `un-cpc-3-0-27913-2025` |
| `validate_atomic_inventory` | Process inventory | Confirm every card represents one concrete material, energy, waste, or product exchange. Reject combined utilities, mixed material selectors, plural waste collections, and UUIDs that were not confirmed by exact public-row readback. |  |
| `validate_mass_balance` | Substrate, backing, thread, product, rejects, waste, and work-in-progress | Require a batch mass-balance calculation and investigation of unexplained residuals; do not force closure by changing measured records. | `eu-pef-method-2021` |
| `validate_electricity` | Preparation, embroidery, and finalization electricity | Confirm meter boundaries, allocation drivers, operating periods, and kWh units. Shared electricity shall reconcile to the meter total without overlap or omitted residual. | `cay-embroidery-energy-2018`; `eu-pef-method-2021` |
| `validate_composition` | Substrate, thread, and retained backing | Confirm declared composition from supplier records and representative verification; where ISO 1833 is used, record the applicable part, sampling, result, and tolerance. | `iso-1833-fibre-analysis-2020` |
| `validate_conditioning` | Reference and balance masses | Confirm that textile masses share a declared conditioning or moisture basis and that packaging is excluded from the reference amount. | `iso-139-conditioning-2005` |
| `validate_sources_and_quality` | Dataset package | Confirm all cited sources resolve, foreground records cover the declared period and site, proxies and cut-offs are disclosed, and unresolved UUIDs remain explicit. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground embroidery-manufacturing dataset that may be published as a `secondary_dataset` or `background_dataset` after review and completion |
| downstream_use | Product-system modelling of embroidery supplied in piece, strip, or motif form and incorporation into downstream apparel, furnishing, accessory, or other textile-product models |
| allowed_use | Use when product form, substrate, thread, backing, stitch construction, equipment route, electricity supply, finishing state, geography, production period, and gate boundary are materially representative |
| excluded_use | Do not use as a proxy for lace, tulle, tufted or quilted textiles, embroidery services without product output, embroidered garments or made-up articles, or materially different substrate/thread/finishing routes without documented adjustment |
| required_metadata | PCR id and version; product form; CPC reference; reference-flow UUID; substrate, thread, backing, and packaging identities and composition; stitch type/count/density; dimensions and embroidered area; conditioning state; site and period; process coverage; electricity supply; allocation; cut-offs; waste destinations; upstream datasets; unresolved identities |
| required_quality_disclosure | Primary-data coverage; instrument and calibration evidence; mass-balance residual; meter allocation; temporal, geographical, and technological representativeness; composition verification; proxy use; exclusions; uncertainty; review status |
| update_trigger | Change in product form, substrate/thread/backing composition, stitch construction, machine technology, compressor arrangement, electricity supply, finishing route, packaging, waste treatment, site, allocation method, or production mix that materially changes the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-27913-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 explanatory notes, subclass 27913, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact product-category scope and exclusions from neighbouring textile categories |
| `eu-pef-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Functional unit and reference flow, system boundary, company-specific data, allocation hierarchy, cut-off disclosure, data quality, validation, and proxy reporting |
| `iso-139-conditioning-2005` | `standard` | ISO 139:2005, Textiles — Standard atmospheres for conditioning and testing; confirmed 2025. https://www.iso.org/standard/35179.html | Consistent textile conditioning and mass-comparison evidence |
| `iso-1833-fibre-analysis-2020` | `standard` | ISO 1833-1:2020, Textiles — Quantitative chemical analysis — Part 1: General principles of testing. https://www.iso.org/standard/74881.html | Quantitative fibre-composition verification for substrate, thread, and retained textile backing |
| `iso-4915-stitch-types-1991` | `standard` | ISO 4915:1991, Textiles — Stitch types — Classification and terminology; confirmed 2021. https://www.iso.org/standard/10932.html | Consistent declaration of stitch construction and process/product qualifiers |
| `cay-embroidery-energy-2018` | `literature` | Çay, A. (2018). Energy consumption and energy saving potential in clothing industry. Energy, 159, 74–85. https://doi.org/10.1016/j.energy.2018.06.128 | Peer-reviewed evidence that embroidery plants require explicit foreground electricity and direct-support energy records and that machine, compressor, and lighting loads should be measured or causally allocated |
