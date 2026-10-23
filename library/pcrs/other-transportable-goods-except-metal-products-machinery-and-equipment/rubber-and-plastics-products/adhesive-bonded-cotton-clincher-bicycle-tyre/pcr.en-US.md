---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.adhesive-bonded-cotton-clincher-bicycle-tyre
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Adhesive-bonded cotton-based open-clincher bicycle tyre manufacture

## 1. Scope and Applicability

This PCR covers physical manufacture of complete new cotton-based open-clincher bicycle pneumatic tyres: receive uncoated woven corespun cloth, wet latex coating formulation, aramid bead cord, bead-area reinforcement strip and separately formed natural-rubber/silica tread cap; coat and dry the cloth, cut and orient the carcass, form and encapsulate folding beads, bond the cap with the actual adhesive, condition, inspect and pack the tyre. There is no whole-tyre mold vulcanization and no under-tread anti-puncture belt. This route is an evidence-supported synthesis of independent manufacturers, not a claim that one SKU supplies every unit operation. [vittoria-casing-2023; challenge-handmade; veloflex-record]

Exclude motorcycle tyres, whole-mold-cured nylon/radial tyres, solid/cushion tyres, inner tubes, closed sewn tubulars with integrated tubes, tubeless-ready barrier constructions, tread-cap or compound production sold alone, retreading and buying complete tyres for labeling. An open tubular is a clincher here; it is not a closed tubular. The separate consumer inner tube and rim are outside the supplied reference. No mileage, rolling resistance, pressure or safety approval is supplied by this manufacturing reference.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.adhesive-bonded-cotton-clincher-bicycle-tyre |
| classification_refs | CPC3.0 36112; narrower |
| covered_products | Complete adhesive-bonded latex-coated cotton/polyester corespun open clincher, aramid folding beads, separately formed tread cap and bead-area reinforcement, no puncture belt. |
| excluded_products | Motorcycle, nylon whole-mold-cured, tubular, tubeless-ready, solid, inner tube, retread, standalone tread or mere relabeling. |
| representative_product | Cotton-based open-clincher bicycle tyre with declared polyester core and aramid bead; no transferred nominal mass or pressure. |
| production_route | Prepared components to latex coating, cutting/bead formation, adhesive assembly, drying/conditioning, first quality release and packing; actual purchased-component manufacture remains upstream. |
| market_state | Complete new tyre at plant, dry/conditioned as actually released, excluding inner tube, rim and transport-packaging mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a complete declared open-clincher bicycle tyre, ready for subsequent installation with a separate inner tube. |
| How much | 1 kg net tyre at first positive manufacturing quality release; Q is newly released accepted net mass of the matched route/product/state cohort, not shipment mass. |
| How well | Conformity to the actual declared drawing, bead interface, materials, dimensions, bond acceptance and finished-quality criteria; no universal numerical specification. |
| How long or cycle | One manufacture and first quality-release cycle; no service-life or replacement equivalence inferred. |
| reference_flow_link | finished_tyre |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | New pneumatic tyres, of rubber, of a kind used on motorcycles or bicycles `433f8624-3103-4661-918b-2093658bda5f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer/site and period; product model and size; cotton/polyester corespun composition and moisture; aramid bead and reinforcement identity; actual tread-cap and adhesive formulations with carrier/solids; no puncture belt or included tube/rim; adhesive route and any upstream cap curing; first-release gate and Q cohort; drawing/bond/quality acceptance; WIP and finished-stock carried burdens; allocation meters and actual storage/packing/dispatch scope |

Every qualifier is mandatory in the concrete dataset. The native flow is a broad identity only: Production mix, at plant; Finished product, manufactured; no declared geography/locationOfSupply, CAS, recipe or grade. Do not infer CN, HK or another supply location, or a factory recipe, from this UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net accepted complete tyre mass at the stated moisture/conditioning state, excluding separate tube, rim and transport packaging. Counts require size/configuration-specific traceable net weights; never a borrowed SKU mass. |
| wet_supply | all material rows | Mass | kg | Whole wet formulation input is measured once. Rubber, solids, preservatives, solvent and carrier-water assays are composition subledgers, not duplicate external inputs. Track incoming and released moisture separately. |
| raw_then_report | all inventory rows | Actual numerator property | declared row unit | Collection retains unnormalized raw-period amounts and opening/closing WIP with carried burdens. Only report_once divides attributable numerator A_i by positive matched first-release Q. Rate times actual duration may form a raw amount; an already integrated volume has no extra time factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual purchased uncoated cloth, wet formulations, aramid cord, reinforcement strip and formed tread cap with supplier manufacture upstream; no purchased complete tyre. |
| starting_condition_role | foreground_boundary |
| product_classification_scope | CPC3.0 36112 narrower; adhesive-bonded cotton-based open clincher only |
| recursive_input_rule | A purchased complete tyre is not an allowed recursive input to this manufacturing route. Internal returns/rework remain identified stock with carried burdens and create no new Q. |
| upstream_dataset_requirement | Actual supplier/route/formulation and transport for each separate purchased article and wet preparation, including tread-cap compounding/molding/any curing and all retained coating constituents. |
| disclosure | One factory integrated manufacturing process with stage subledgers. Declare included storage, drying/conditioning, packing, handling and dispatch. Production release and finished warehouse/shipment are separate ledgers; cancel internal transfers when combined. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_complete | all inventory rows | Include actual coating, cloth cutting/orientation, bead forming/encapsulation, adhesive bonding, drying/conditioning, acceptance, material storage, packing, handling, failed runs, QA samples, ancillary services, waste and measured emissions. No omission of real burdens because a batch has zero output. | vittoria-casing-2023; challenge-handmade |
| b_supplied | all material rows | Purchased compounded articles/formulations are single whole commercial inputs with supplier burdens. Onsite compounding is outside this bounded starting condition until every separately acquired ingredient and its actual energy/losses is represented. Add every actual extra chemical, fuel, refrigerant, packaging component, waste composition and elemental species as a separate atomic card before dataset use. |  |
| b_gate | finished_tyre | Q is new first accepted quality-release net mass, not sales. Do not add closing finished inventory of the same Q again as production output. Opening/closing WIP and its carried burdens remain reconciled. Warehouse receipts/issues and opening/closing finished stock form a separate ledger; when extending scope retain actual stock residence, packaging, handling/dispatch and carried burdens by cohort, cancel internal transfers and never assume release equals shipment. Returns/reacceptance create no new output. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tyre_manufacture | Coating, bead construction, adhesive assembly, conditioning and first release | required | Complete declared route and site, with separately metered stages and all failed batches | foreground | finished_tyre |

### Process: Adhesive-bonded cotton clincher manufacture (`tyre_manufacture`)

#### Inputs

##### Product flows

###### Corespun carcass cloth (`carcass_cloth`)

Record one purchased fabric with its actual cotton and polyester composition, yarn structure, finish and moisture. Cutting, angled layup and latex coating are foreground steps, not a purchased finished tyre.

- Selected flow: Cotton-polyester corespun woven carcass cloth
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: vittoria-casing-2023; veloflex-record

###### Wet latex coating formulation (`latex_coating`)

Weigh the whole as-supplied wet coating formulation, including water, preservative and other declared constituents. Its assayed rubber and carrier-water amounts are subledgers, not additional purchases. If the same formulation also serves as adhesive, split actual withdrawals by role without duplicate procurement.

- Selected flow: Natural-rubber latex coating formulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: vittoria-casing-2023; challenge-handmade

###### Aramid folding bead cord (`bead_cord`)

Record the supplied aramid cord, including its actual sizing/coating, and foreground cutting, hoop forming and encapsulation. No steel belt or steel bead quantity is inferred.

- Selected flow: Aramid tyre-bead cord
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: veloflex-record

###### Bead-area sidewall reinforcement strip (`bead_strip`)

One separately supplied physical strip, with its actual textile/polymer composition and dimensions declared from the supplier BOM. It is bead-area protection, not an inferred under-tread puncture belt; do not invent the proprietary SPS composition.

- Selected flow: Bead-area sidewall reinforcement strip
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: veloflex-record

###### Separately formed tread cap (`tread_cap`)

One complete supplied tread-cap formulation/article. Its upstream dataset must include actual rubber grades, fillers, oils, chemicals, compounding, molding, any curing and losses. Do not also buy its constituents in this foreground. An onsite tread-compounding route requires explicit separate ingredient exchanges and process records before use.

- Selected flow: Natural-rubber silica tyre tread cap
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: vittoria-casing-2023; challenge-handmade; veloflex-record

###### Whole purchased bonding adhesive (`bond_adhesive`)

Record one actual supplied adhesive formulation by wet mass, solids and full carrier composition. Waterborne and solvent-bearing recipes must not be assumed interchangeable. Each extra separately acquired formulation, cleaner or additive needs its own atomic row; measured carrier emissions and residues remain separate outputs.

- Selected flow: Tyre tread-cap bonding adhesive formulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources: vittoria-casing-2023; challenge-handmade

###### Factory electricity (`electricity`)

Include coating/cutting/bead work, adhesive application, drying ventilation, conditioning, inspection, air compression, input storage and packing/handling loads, with failed and zero-output periods. Meter actual electricity; no claim of carbon neutrality or renewable mix.

- Selected flow: Electricity
- Flow property / unit: Electricity / kWh
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased drying heat (`purchased_heat`)

Only actual imported heat, distinguished from heat generated using already counted electricity or fuel. Actual onsite fuel, steam, refrigerant loss or compressed-air purchase requires its own specific exchange before dataset use; no generic energy-carrier substitution.

- Selected flow: Purchased process heat
- Flow property / unit: Energy / MJ
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Added process and cleaning water (`process_water`)

Added water crosses the boundary once; water already in purchased latex or glue is not a second supply. Use measured mass or integrated volume times independently measured density with temperature and unit conversion; never multiply integrated volume by duration.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials`
- Sources:

###### Corrugated shipping carton (`carton`)

Actual single carton composition, reuse count and tare; keep its mass outside net tyre reference Q while retaining its upstream and packing burdens.

- Selected flow: Corrugated cardboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources:

###### Paper identification label (`label`)

One actual paper label including adhesive as supplied. Track release liner as a separate waste; do not treat label application as complete tyre manufacture.

- Selected flow: Self-adhesive paper tyre label
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources:

###### Polypropylene carton strap (`strap`)

Record this strap only where actually used. No bundling with film, cartons or labels; any other packaging component needs its own row.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### First quality-released complete tyre (`finished_tyre`)

The unique terminal reference: complete adhesive-bonded cotton-based bicycle open clincher with aramid folding beads, no anti-puncture belt, inner tube, valve or rim supplied. Native identity is Production mix, at plant; Finished product, manufactured, with no stated geography/locationOfSupply, CAS, recipe or grade. The broad name does not establish a supplier inventory or extend this methodology to motorcycles, tubulars, molded nylon tyres or solid tyres.

- Selected flow: New pneumatic tyres, of rubber, of a kind used on motorcycles or bicycles `433f8624-3103-4661-918b-2093658bda5f`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: vittoria-casing-2023; challenge-handmade; veloflex-record

##### Waste flows

###### Uncoated carcass cloth offcuts (`fabric_trim`)

Keep uncoated textile offcuts separate from latex-coated trim and other waste compositions. Offsite recycling is a treatment route, not a free coproduct credit.

- Selected flow: Cotton-polyester carcass cloth offcuts
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

###### Latex-coated carcass offcuts (`coated_trim`)

Measure complete composite waste including coating solids and retained water; avoid counting its textile and rubber twice as additional waste.

- Selected flow: Latex-coated cotton-polyester carcass offcuts
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

###### Aramid cord offcuts (`aramid_trim`)

Measure rejected lengths and hoop-making offcuts with actual coating.

- Selected flow: Aramid cord offcuts
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

###### Bead reinforcement offcuts (`strip_trim`)

Retain the actual supplied strip composition and destination independently of carcass scrap.

- Selected flow: Bead-area reinforcement strip offcuts
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

###### Tread cap trimmings (`tread_trim`)

Actual excess tread and rejected caps. Upstream manufacture is not omitted merely because unused caps become waste.

- Selected flow: Natural-rubber silica tread-cap trimmings
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

###### Spent latex coating residue (`latex_residue`)

Record spent bath, skin and contaminated wet residue of this one formulation, including measured solids and water. Different contaminated compositions require separate exchanges.

- Selected flow: Spent natural-rubber latex coating formulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

###### Spent bonding adhesive (`adhesive_residue`)

Wet adhesive residue and its actual carrier content, separate from coated textiles and cleaning wastewater.

- Selected flow: Spent tyre bonding adhesive formulation
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

###### Rejected complete tyre (`rejected_tyre`)

Include failed assemblies and destructive QA samples. No first accepted output is created by rejected units or by returns accepted again. Internally repaired material remains internal with retained burdens.

- Selected flow: Rejected adhesive-bonded bicycle tyre
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

###### Offsite cleaning wastewater (`wastewater`)

One actual collected wastewater stream with its wet mass, solids, sampled constituents and treatment destination. It is not elemental discharge to water. COD is a quality measure, not a species mass or closure substitute. Distinct solvent-cleaning waste is a separate required row if used.

- Selected flow: Latex-contaminated cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

###### Discarded carton board (`carton_waste`)

Actual incoming and packing carton waste, with reuse and outgoing packaging tracked separately.

- Selected flow: Waste corrugated cardboard
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

###### Label release liner (`liner_waste`)

One actual paper liner, including its coating; plastic liner needs a distinct specific row instead.

- Selected flow: Waste paper label release liner
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

###### Waste polypropylene strap (`strap_waste`)

Actual damaged and trimmed strap; outgoing useful strap belongs to the packaging subledger.

- Selected flow: Waste polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residuals`
- Sources:

##### Elementary flows

###### Measured water evaporation to air (`water_vapour`)

Measure or independently substantiate evaporation from carrier water, cleaning and conditioning; distinguish retained moisture and liquid effluent. Drying is a phase transfer, not invented reaction-water generation. Never fit both unknown reaction water and an unknown outlet to one residual.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

###### Ammonia from actual preserved latex (`ammonia_air`)

Conditional on actual ammonia-containing coating or adhesive and demonstrated release. Quantify NH3 independently of water and COD; do not infer ammonia from every latex or zero out a real measured release. Every other actual organic species needs its own named atomic emission row.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: A_i / Q; complete matched raw numerator divided once in the reporting operation defined in section 8.
- Value mode: Calculated (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_stages | all inventory rows | Prefer dedicated raw meters, weighing and run records by product/route. Allocate shared coating, drying/ventilation and plant services through demonstrated causal machine-hours, occupied capacity, metered energy or material throughput appropriate to that specific service. Record drivers for successful and failed/zero-output runs; do not use accepted-output share to erase failures. | jrc-ilcd-allocation-2010 |
| a_no_credit | all waste rows | No automatic coproduct or avoided-production credit for scrap, returns, offcuts or wastewater. Keep actual waste treatment burdens. Document any genuine sold co-product and justified allocation separately before using the dataset. Internal rework is recirculation, not an additional product; count external input only once and all extra processing each time. |  |
| a_once | all inventory rows | First reconcile raw stage/stock ledgers and allocate attributable raw burdens to the same first-release cohort. Retain burdens carried into opening WIP and defer burdens remaining in closing WIP with traceable unit/cohort identities. Failed burdens stay with the responsible production cohort or explicit carried stock; they cannot vanish. Only then apply report_once once. A zero Q is not a zero-burden dataset and cannot be normalized. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

Collection retains undivided raw-period amounts and complete stock/WIP carried burdens. aggregation_rule declares the final reporting basis only, referring to exactly the same single operation as the cards and report_once; no A_i/Q occurs during collection.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | tyre_manufacture | First-release output and stock reconciliation | foreground_record | QA owner and stock custodian retain unique tyre/batch identities, product/route/state, net weighed mass, first acceptance time, rejected/destructive samples, returns/rework, WIP opening/closing mass/composition/carried burdens, finished-stock opening/closing receipts/issues/carried burdens, release and shipment links. | Calibrated weighing and signed first-quality-release register; deduplicate returns and reacceptance. Keep production Q and warehouse issues separate. Record raw totals only, no division. | kg | Each lot/run and reconciled reporting period | One complete matched period with opening/closing WIP and finished-stock carried burdens | Declared factory and measured service/cohort scope | per 1 kg reference flow | Signed owner records, calibration/assays, supplier BOM, meter/stock reconciliation and full failure retention |
| cp_materials | tyre_manufacture | Raw material and formulation withdrawals | foreground_record | Material owner retains supplier/BOM/lot, full commercial preparation identity, purchased and withdrawn wet mass, solids/carrier assays and density/temperature, opening/closing raw stock and WIP, returns, failed runs, reused bath and transferred burden identities. | Weigh raw withdrawals/returns and reconcile full raw-period material ledger. Inventory changes and reused portions are tracked without duplicate purchase. Assay subledgers never add external inputs. No A_i/Q at collection. | kg | Each lot/run and reconciled reporting period | One complete matched period with opening/closing WIP and finished-stock carried burdens | Declared factory and measured service/cohort scope | per 1 kg reference flow | Signed owner records, calibration/assays, supplier BOM, meter/stock reconciliation and full failure retention |
| cp_energy | tyre_manufacture | Energy, ventilation and shared services | foreground_record | Utility owner retains stage meter start/end, kWh, imported MJ, run timestamps, actual machine-hours/service drivers by product, failures, idle/zero-output periods and storage/dispatch cohort attribution. | Read actual meters and attributable service logs; rate times duration only for a true rate. Electricity-derived heat is not another import. Preserve raw-period energy including drying and all actual site services before allocation; no normalization. | kWh; MJ | Each lot/run and reconciled reporting period | One complete matched period with opening/closing WIP and finished-stock carried burdens | Declared factory and measured service/cohort scope | per 1 kg reference flow | Signed owner records, calibration/assays, supplier BOM, meter/stock reconciliation and full failure retention |
| cp_packing | tyre_manufacture | Packing, handling and optional dispatch ledger | foreground_record | Packing/logistics owner retains each packaging SKU/composition/tare, issues, reuse, incoming/outgoing stock, packaged tyre links, storage time, handling work, shipment mass, carrier/service identity and carried burdens. | Weigh each component separately; separate tyre net mass from outgoing packaging. Retain real packaging, storage, handling and dispatch burdens within declared scope using separate production/warehouse ledgers; cancel internal transfers when combined. Raw numerators only. | kg | Each lot/run and reconciled reporting period | One complete matched period with opening/closing WIP and finished-stock carried burdens | Declared factory and measured service/cohort scope | per 1 kg reference flow | Signed owner records, calibration/assays, supplier BOM, meter/stock reconciliation and full failure retention |
| cp_residuals | tyre_manufacture | Atomic waste and rejection ledger | foreground_record | Waste owner retains each waste identity/composition, wet/dry mass and moisture, destination, rejected test specimens, actual returns/rework, onsite reuse, offsite treatment, manifest and stock/WIP burden links. | Weigh each actual waste separately over the complete period. Internal recirculation is reconciled with repeated processing energy, not repeated external material supply. Retain every failed batch and its burdens; do not infer zero waste from no sale. No normalization. | kg | Each lot/run and reconciled reporting period | One complete matched period with opening/closing WIP and finished-stock carried burdens | Declared factory and measured service/cohort scope | per 1 kg reference flow | Signed owner records, calibration/assays, supplier BOM, meter/stock reconciliation and full failure retention |
| cp_emissions | tyre_manufacture | Actual species, phase water and material closure | foreground_record | Environment owner retains actual wet-formulation composition/SDS/assays, independently supported emitted species, inlet/outlet concentration and dry/wet gas flow, integrated volumes or true rates/duration, blanks, temperature, retained moisture, effluent and phase/element ledgers. | Measure species and water independently where present, including captured fractions and treatment outlets. Integrated volume times concentration with consistent units forms a raw mass, not volume times time. No generic VOC-as-species or COD conversion; no invented reaction-water term to close a balance. Add actual named species rows before dataset use. | kg | Each lot/run and reconciled reporting period | One complete matched period with opening/closing WIP and finished-stock carried burdens | Declared factory and measured service/cohort scope | per 1 kg reference flow | Signed owner records, calibration/assays, supplier BOM, meter/stock reconciliation and full failure retention |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| report_once | all inventory rows | q_i = A_i / Q; A_i is the raw attributable exchange after actual unit conversion, raw service allocation and opening/closing WIP carried-burden reconciliation for the matched first-release cohort, including failures and all retained burdens; Q is unique positive first accepted net tyre mass in kg, never shipment mass or Q plus same-cohort closing finished inventory. This is the sole normalization; card amount rules and protocol aggregation refer to this same reporting operation, not sequential divisions. The reference row is 1 kg. | A_i; Q; cp_release; cp_materials; cp_energy; cp_packing; cp_residuals; cp_emissions | q_i |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all material rows | Supplier full name/grade/formulation and wet composition match this route; broad native identity is not recipe/provider compatibility. Distinguish supplied whole preparations from onsite separate ingredients. | Supplier BOM/SDS, assays, delivery and batch records |
| dq_mass | all inventory rows | Close physical material and element balances on matched boundaries using independent water/species evidence: external wet inputs plus opening material/WIP equal accepted net tyres, actual wastes/emissions, closing material/WIP and outgoing packaging with internal transfers canceled. Keep packaging on its own mass ledger. Explain residual uncertainty without fitting unknown outlets. | Calibrated balances, full composition and stock/phase/element worksheets |
| dq_completeness | all inventory rows | No omitted full failed lot, zero-output run, rework burden, actual ancillary input, emitted species or stock-carried burden. Explicit not_applicable requires evidence of absence; unknown is not zero. | Full-period ledger and stage/owner completeness review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | finished_tyre | Require one terminal Product output linked by finished_tyre with the reference UUID and 1 kg net first-quality-release basis in both languages; require all qualifiers and exact declared assembly route. Do not accept inner tubes, tread caps, solid tyres or repeated return acceptance as the terminal reference. |  |
| v_sources | all inventory rows | Check original-source limitations, BOM, exact native full names/type/property/unit support and any route/geography/grade conflict. Source independence does not turn a manufacturer example into a universal recipe, measured input, lifetime or emission factor. | vittoria-casing-2023; challenge-handmade; veloflex-record |
| v_ledger | all inventory rows | Check raw-period inputs/outputs, separate production and warehouse ledgers, positive nonduplicate Q, full WIP/stock carried burdens, failures, unit conversions, elemental/phase water and species closure, explicit shared-service allocation and exactly one report_once division. A missing measurement or unexplained balance is incomplete, never a fabricated zero. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | Supplier-specific complete open-clincher manufacturing inventory per kg first released net tyre, with actual supplier inputs linked upstream. |
| allowed_use | Only declared cotton-based adhesive-bonded open-clincher route/product/state/site scope; subsequent bicycle assembly may use measured tyre mass. |
| excluded_use | Universal motorcycle/bicycle coverage, tire-service equivalence, safety approval, pressure recommendation, uncollected factory inventory or automatic mapping acceptance. |
| required_metadata | All required qualifiers; gate/cohort; actual source/provider and upstream cap curing; full wet BOM, protocol owners, stock and allocation records. |
| required_quality_disclosure | UUID/provider gaps, original-source limitations, measured and missing quantities, stock-carried burdens, shared-service allocation, species/closure uncertainty and scientific review state. |
| update_trigger | Change in carcass, bead, cap/adhesive formulation, whole-tyre curing, tube/belt structure, starting condition, reference gate or new material/species requires applicability review and projection refresh. |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| vittoria-casing-2023 | literature | Ken Avery, Vittoria White Paper03, February2023, Bicycle Tire Casing Materials and Processes, printed pp.3 and6 (PDF pp.4 and7). https://mediahub.vittoria.com/m/9b1d26a647c16851/original/White-Paper-03-English-Version.pdf | Clincher bead versus tubular interface; latex impregnation of cotton cloth and adhesive bonding of a tread cap. Cotton can also be vulcanized: only its non-vulcanized assembly branch is used. No recipe, supplier quantity, drying schedule, lifespan or emissions factor. |
| challenge-handmade | handbook | Challenge North America, Handmade Tires, undated manufacturer technical page. https://us.challengetires.com/pages/tech-handmade | Independent manufacturer description of fabric casing, latex coating and adhesive assembly with natural-rubber tread. Marketing environmental/performance comparisons, general nylon composition and thread-count claims are excluded. No whole-chain no-vulcanization claim. |
| veloflex-record | handbook | Veloflex, Record Open Tubular, manufacturer article technical details. https://www.veloflex.it/en/clincher-tire-record.html | Concrete open-clincher example with Pes/Co corespun carcass, aramid folding beads, natural-rubber/silica tread and bead-area sidewall protection. Technical table says no protection belt, overriding generic RKB copy. No mass, pressure, lifetime or all-rim compatibility transferred. Not proof that all process steps share one SKU. |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment — Detailed guidance, First edition March2010, section7.9.3, printed pp.257–258 (PDF277–278); https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | LCA method support only within attributional cases where allocation rather than substitution is selected: virtual subdivision and flow-specific determining physical causality support dedicated raw meters/run records and service-specific shared coating, drying/ventilation and plant-service allocation. Manufacturing sources establish construction, not this LCA hierarchy. No default output/mass/time share, economic coefficient, recipe, yield/utility/emission factor, automatic coproduct or avoided-burden credit, or PEF/CFF conformity is established; actual service drivers, full site totals, failures and stock-cohort attribution remain required. |
