---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-continuously-shaped-along-any-of-its-edges-or-faces-including-strips-and-friezes-f-47bf9319
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Solid American red-oak interior baseboard mouldings from kiln-dried lumber

This method prescribes data collection for one declared product and actual production/service history. It supplies no factory recipe, species identification, measured inventory, certified performance, installed service life or scientific approval. A classification title or generic wood UUID cannot establish those facts.

## 1. Scope and Applicability

Cover individual, unassembled solid American red-oak interior wall-base mouldings, deliberately machined with a continuous longitudinal decorative edge or face profile, uncoated, unimpregnated, not finger-jointed, laminated, glued or veneer-wrapped. The foreground receives actual kiln-dried solid sawn lumber and includes receiving/stock handling, actual ripping/defect cutting, continuous profiling, trimming, dust capture/cleaning, quality inspection, and attributable actual packing/storage services. Sanding belongs only where actually performed and individually evidenced. Source support is qualitative: manufacturer process/defecting contexts and baseboard drawings, an independent solid non-glued product description, and wood measurement guidance. These sources are not one observed factory/SKU route. Sources: `ahc-moulding-catalogue`; `baird-manufacturing-2022`; `rack-red-oak-baseboard`; `usda-wood-handbook-2021`.

The function is a separate decorative/protective trim at the interior wall-to-floor junction, not a structural load-bearing element, furniture component or assembled floor. Declare actual botanical species or verified species mix, growing region/ecozone, lumber and face-acceptance grade, grain orientation, profile revision, dimensions/tolerances and acceptance moisture. American red oak is a commercial group, not proof of Quercus rubra. Unknown origin/species cannot be called verified American non-tropical material. Do not infer construction, uncoated state or grade from a trade name or photograph. Sources: `ahec-species-guide`; `ahc-moulding-catalogue`; `us-cs76-39`.

Exclude tropical or botanically unresolved material offered as verified non-tropical red oak; coniferous wood; bamboo; plain rectangular sawn/S4S or sanded stock without a continuous worked profile; veneer sheets; structural grade/support members; furniture/seat-frame parts; bonded, finger-jointed, wrapped or coated products; assembled flooring, doors and windows. Exclude log conversion, primary sawing and primary drying from this received-dry-stock foreground; retain their actual upstream burdens. Received ready-profiled moulding is not a shortcut input to this route. Different starting states or construction need a separately evidenced applicability decision. CPC 3.0 31219 is a narrower author applicability inference; no issuer/customs ruling or CPC-HS equivalence is asserted. Sources: `un-cpc3-notes`; `usda-wood-handbook-2021`.

No Baird SPL293 specification, drawing, selected finish, current supplier lot or observed batch route is established. Actual manufacturer conditions and any claimed certification must be evidenced at dataset production; no manufacturer sustainability claim, historical grading limit, dimension, moisture percentage, yield, density, energy, lifetime or price is a default here.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.wood-continuously-shaped-along-any-of-its-edges-or-faces-including-strips-and-friezes-f-47bf9319 |
| classification_refs | CPC 3.0 31219, narrower author inference; no accepted mapping implied |
| covered_products | Individual continuously profiled uncoated unassembled solid American red-oak interior baseboard mouldings from received kiln-dried solid lumber |
| excluded_products | Conifer/bamboo/tropical or unresolved claimed species; flat lumber; veneer; structural/furniture components; glued/jointed/laminated/wrapped/coated products; assembled floors; log-to-lumber or primary drying routes |
| representative_product | Actual declared species/mix, grade and profile of one accepted uncoated solid red-oak wall-base moulding |
| production_route | Received kiln-dried solid lumber → actual rip/defect cut → continuous profile/trim with actual dust capture and QA → unique first acceptance; actual later packing/storage services traced to original cohort |
| market_state | Unassembled uncoated interior trim; first-release wood moisture and net mass declared; packaging separate; shipment may occur later |

The methodological need is decorative face/profile acceptance with net shaped geometry, defect-end and machining residues, stock/drying histories, unique first acceptance and later services. It does not duplicate upstream lumber forming, assembled flooring, or a structural-support method. General metering principles are reusable; substrate identity, gate and product-specific records remain binding.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture separate solid American red-oak interior wall-base moulding for subsequent installation |
| How much | 1 kg accepted net profiled wood at actual first quality-release moisture, excluding packaging |
| How well | Actual verified species/mix/origin, unglued uncoated construction, continuous profile, grade, dimensional and face-quality acceptance; no certified structural or installed-service equivalence inferred |
| How long or cycle | Declared manufacturing period and actual service-accounting cutoff; each unique piece first accepted once; no assumed use duration |
| reference_flow_link | `accepted_profile` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | verified botanical species/mix and American growing origin/ecozone; stock grade and distinct face acceptance criteria; solid one-piece unglued non-finger-jointed uncoated unimpregnated construction; continuous profile drawing/revision and measured dimensions/tolerances; grain orientation when relevant; inlet kiln-dried state and supplier/primary-drying boundary; measured first-release moisture and method; calibrated net accepted wood mass with packaging tare excluded; unique cohort/piece acceptance and rework/return links; site/manufacturer and period; claimed certificates with actual scope; actual electricity and dust-control system; service cutoff and held-stock histories; upstream provider and capital-service coverage |

The selected native Product flow explicitly leaves species, form, dimensions, treatment, moisture, production route and provider unspecified and assigns quantity/source/boundary to process exchanges. Its actual Mass reference supports kg. Bind it here to the exact final profiled state above, and separately to received lumber only on the input row. Preserve its generic display name. Shared UUID does not make the two states interchangeable, create a provider, certify species or establish a measured batch. Missing required dataset qualifiers leave applicability incomplete. No volume-to-mass conversion is needed for this mass reference.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Q is sum of measured net wood masses of unique first accepted pieces in the matched production cohort, including accepted closing finished stock. Exclude packaging, rejected/WIP wood and opening already-accepted stock; cp_acceptance records corrections without a second acceptance. Every inventory amount uses per 1 kg reference flow. |
| `moisture_state` | wood physical ledger | Measured wet and oven-dry mass | kg | Use paired representative specimens; u=(m_wet−m_od)/m_od is dry-basis fraction and m_od=m_wet/(1+u). Convert percentage readings to fractions explicitly. Record method, sampling, constant mass, gradients and uncertainty per state. Kiln-dried is a documented operation, not a fixed moisture percentage. |
| `profile_geometry` | optional physical audit or conversion | Actual net solid volume and matched mass | m3; kg | Independently measure actual shaped area and length, or varying-section integration, with drawing/revision verification. V_net=sum(actual net section × actual length). If conversion is needed use paired measured density at the same species/moisture state. Bounding rectangles, nominal lumber/board feet, rounded sales lengths, bulk volume and literature density are not a bridge. Keep net wet mass, dry matter and volume separate. |
| `energy_quantity` | actual electricity | Electrical energy | MJ | Preserve raw metered kWh and supply point; convert kWh to MJ using 3.6 only after confirming electrical-energy quantity. Reconcile child/parent meters, generator delivery and included shared extraction/packing/idle services once. No grid, voltage, fuel or calorific basis is inferred from a common energy unit. |

Measurement definitions: `usda-wood-handbook-2021`. Historical commercial linear measurement and manufacturer profile drawings motivate explicit geometry records; they do not supply a numerical conversion: `us-cs76-39`; `ahc-moulding-catalogue`.

## 5. System Boundary

The rules in this complete section apply together with the scope, reference qualifiers and stock/service accounting below. A single flat rule does not waive its surrounding conditions.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received kiln-dried solid American red-oak sawn lumber; actual species/mix, grade, moisture, supplier gate and previous processing declared |
| starting_condition_role | Foreground inlet to profile manufacture, with separately linked actual upstream supply |
| product_classification_scope | Narrow uncoated unassembled red-oak baseboard subset inferred within CPC 3.0 31219 |
| recursive_input_rule | Ready-profiled purchases are outside this lumber-inlet route. Internal rework/returned pieces retain original identities, state and inherited burdens; never recursively regenerate their previous manufacture or count them as new first acceptance |
| upstream_dataset_requirement | Compatible forestry/harvest, primary sawmilling, kiln drying and delivery; actual electricity/generation, auxiliaries, component packaging, capital/facility services and waste-treatment providers, each with explicit boundary/quantity coverage |
| disclosure | Foreground and supplier gates; actual site/period/route, power/control condition, first-acceptance cohort and service cutoff; raw/WIP/unused/finished/return stocks; included and uncovered provider/capital activity; allocation, uncertainty and omitted scope |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | profile manufacture | Include actual receiving/handling, rip/defect crosscutting, continuous moulding, trimming, dust collection/conveyance/cleaning and QA; sanding only when recorded. Record first quality acceptance separately from dispatch. Qualitative manufacturer observations justify the process family, not an exact factory sequence or recipe. | `ahc-moulding-catalogue`; `baird-manufacturing-2022`; `baird-ordering-2019` |
| `boundary_supply_once` | wood and utility providers | Preserve forestry, harvest, sawing, primary drying, inbound freight, stock grade and moisture histories once. If the dry-stock handoff is internal to an integrated mill, link a separately measured compatible upstream unit instead of also charging purchased dry-lumber production. A supplier inventory containing profiling cannot be used unchanged as sawn-stock input. Record each provider's included/excluded stages and allocation; no duplication of primary drying as foreground conditioning. | `baird-manufacturing-2022`; `usda-wood-handbook-2021` |
| `boundary_services` | utilities and support work | Include actual attributable power for cutting/moulding, extraction, handling, QA, idle/startup/shutdown, cleaning and performed packing/storage/rework, including failed attempts. Separate generation from delivery and actual heat recovery; provider-covered combustion is not repeated as direct mill emissions. No boiler, fuel, thermal conditioning, compressed air, lubricant, abrasive or package chemistry is presumed. Every actually present extra material/service/waste/emission requires an additional concrete atomic interface and provider/basis review before dataset completeness. | `baird-manufacturing-2022`; `baird-residue-use-2020` |
| `boundary_capital` | full equipment and facility scope | Inventory actual saws, moulder/knives, capture/duct/filter/fan system, handling/QA/packing equipment, workshop/building and supporting utilities; include capital manufacture, installation/replacement, maintenance and end treatment once through compatible provider services or explicit separated inventories. For each asset record total service capacity/useful delivered service, actual cohort demand, commissioning/replacement history and relevant actual service unit. Reconcile all served products and downtime with tested causal drivers. Do not charge a full asset to one cohort or substitute a universal machine weight, lifetime or hours. Any declared exclusion requires an explicit scope, evidence-based significance/uncertainty and sensitivity justification; unknown total service/provider coverage remains an open dataset gap, not zero. |  |
| `boundary_residue` | wood and control outlets | Separate solid ends/defect pieces, moulder shavings, captured saw/sanding dust and actual escaping wood particulate by source, moisture and destination. Capture does not equal destruction. Reuse in other products, fuel transfer, sale, storage and waste are disjoint. Dust-capture practice supports collection requirements, not proof a named plant uses one device or an emission factor. Do not derive molecular emissions, fixed removal efficiency or particle-size splits from total dust. Add actual other pollutants/media separately on specific evidence. | `baird-residue-use-2020`; `epa-woodworking-1976` |
| `boundary_gate` | acceptance, stock and later services | Preserve raw/unused lumber, WIP, unused package, accepted held FG, rejected and returned stocks and their inherited burden vectors across cutoffs. Include actual performed services for the benefiting original cohort even if goods remain held, came from opening/nonpurchase stocks, or are not shipped. Later dispatch/reinspection/customer return/repacking creates no new Q. Installation, use, replacement and end-of-life of the baseboard require separate scenarios and are excluded; no avoided-production/waste or carbon-storage credit. | `baird-ordering-2019`; `usda-wood-handbook-2021` |

Capital and stock/service rollforwards are explicit methodological collection requirements in cp_assets and cp_stocks, not measurements inferred from the cited manufacturer sources. Different legal/certification requirements are not established by this method.

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `profile_mill` | Dry-stock profiling, capture, first acceptance and actual attributable services | required | Matching solid red-oak lumber-inlet route; optional operations only with actual records | One foreground aggregate with separately measured physical stages, stock and burden ledgers | `accepted_profile` |

Internal stage transfers remain matched records, not duplicate external exchanges. Cards below represent gross physical exchanges divided by Q, prior to burden allocation. A physically conditional destination is quantified only when demonstrated; unknown is not absence. Waste treatment/generation boundaries and capital/service interfaces must be added individually where the actual scope requires them. No numerical inventory range is prescribed.

### Process: Dry-stock profile manufacture (`profile_mill`)

#### Inputs

##### Product flows

###### Received kiln-dried solid red-oak sawn lumber (`wood_stock`)

Actual received kiln-dried uncoated unglued solid lumber only. Verify species/mix/origin, stock grade, moisture, supplier and drying boundary. Use issues from current and opening/nonpurchase lots; unused returns retain original history. The shared native name does not mean ready-profiled input.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net actual lumber issued to this cohort after verified unused-stock returns, from cp_stocks, divided by Q; retain dry matter, moisture and stock burdens independently.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stocks`
- Sources: `baird-manufacturing-2022`; `usda-wood-handbook-2021`

###### Electrical energy used at the actual supply boundary (`electricity`)

One actual electrical supply, including its attributable linked extraction/handling/QA/cleaning and performed packing/storage services. Split distinct supplies/voltages into separate rows; no foreign grid or unverified generator provider is selected.

- Selected flow: Electrical energy supplied to the profiling site
- Flow property / unit: Electrical energy / MJ
- Amount rule: Metered attributable electrical-energy total from cp_energy divided by Q; raw failed-run, idle and cleanup consumption remains in the cohort numerator.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `baird-manufacturing-2022`

###### Paperboard shipping box issued to packing (`box_in`)

Conditional on this actual packaging component, with measured board composition and mass. A published customer packing account supports a qualitative cardboard example only; no standard package recipe. Other actually used components need their own rows.

- Selected flow: Paperboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: Actual component issue P_box from cp_pack divided by Q; retain opening/current/returned-unused source histories and component-specific burdens; do not replace issue by purchases or wood mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `baird-ordering-2019`

##### Waste flows

No waste input is presumed; actual recovered external waste feedstock would require a separate applicability and identity review.

##### Elementary flows

No elementary input is presumed; add any actually evidenced withdrawal as its own row.

#### Outputs

##### Product flows

###### Unique accepted uncoated solid red-oak profiled baseboard (`accepted_profile`)

Only the qualified final profile defined in section 3; input lumber, sold residues and packaging are not this reference output. First acceptance includes qualifying held FG and excludes opening accepted goods. cp_acceptance supplies the same cohort Q and unique first-acceptance ledger at measured first-release moisture.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_acceptance`
- Sources: `ahc-moulding-catalogue`; `rack-red-oak-baseboard`

###### Untreated solid red-oak end and defect cuttings transferred for actual product use (`offcuts_product`)

Conditional on documented actual product function/recipient, including downstream manufacture or separately bounded fuel supply. Do not assume a sale, fuel destination, waste status or a zero inherited burden. Split destinations and contaminated material where actually different.

- Selected flow: Untreated solid red-oak end and defect cuttings
- Flow property / unit: Mass / kg
- Amount rule: Measured actual destination portion from cp_residues divided by Q; exclude the same portion from waste, stock and other product destinations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `baird-residue-use-2020`

###### Untreated red-oak moulder shavings transferred for actual product use (`shavings_product`)

Conditional on documented actual product function/recipient, including downstream manufacture or separately bounded fuel supply. Do not assume a sale, fuel destination, waste status or a zero inherited burden. Split destinations and contaminated material where actually different.

- Selected flow: Untreated red-oak moulder shavings
- Flow property / unit: Mass / kg
- Amount rule: Measured actual destination portion from cp_residues divided by Q; exclude the same portion from waste, stock and other product destinations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `baird-residue-use-2020`

###### Captured untreated red-oak machining dust transferred for actual product use (`dust_product`)

Conditional on documented actual product function/recipient, including downstream manufacture or separately bounded fuel supply. Do not assume a sale, fuel destination, waste status or a zero inherited burden. Split destinations and contaminated material where actually different.

- Selected flow: Captured untreated red-oak machining dust
- Flow property / unit: Mass / kg
- Amount rule: Measured actual destination portion from cp_residues divided by Q; exclude the same portion from waste, stock and other product destinations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `baird-residue-use-2020`

###### Paperboard shipping box leaving with dispatched goods (`box_out`)

Conditional actual gross shipping quantity of this component, separately measured from wood output. It can include packages attached earlier or returned and reused; disclose the complete physical-control period and original cohort. Held package stock is not shipment.

- Selected flow: Paperboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: Measured gross S_box from cp_pack divided by Q for the stated cohort/service cutoff; no copied 1 kg wood output or assumed one-box-per-product ratio.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `baird-ordering-2019`

##### Waste flows

###### Discarded untreated solid red-oak offcuts and rejected profiles (`offcuts_waste`)

Conditional actual discarded portion sent across the defined boundary to its documented treatment recipient. Distinguish generated waste held in stock from external dispatch, and split contamination/treatment routes into specific additional rows. No automatic disposal route or avoided-waste credit.

- Selected flow: Discarded untreated solid red-oak offcuts and rejected profiles
- Flow property / unit: Mass / kg
- Amount rule: Measured gross external waste quantity from cp_residues divided by Q; retain generated/held/transferred quantities and their separate burden histories. No duplicate product or air destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `baird-residue-use-2020`

###### Discarded untreated red-oak moulder shavings (`shavings_waste`)

Conditional actual discarded portion sent across the defined boundary to its documented treatment recipient. Distinguish generated waste held in stock from external dispatch, and split contamination/treatment routes into specific additional rows. No automatic disposal route or avoided-waste credit.

- Selected flow: Discarded untreated red-oak moulder shavings
- Flow property / unit: Mass / kg
- Amount rule: Measured gross external waste quantity from cp_residues divided by Q; retain generated/held/transferred quantities and their separate burden histories. No duplicate product or air destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `baird-residue-use-2020`

###### Discarded captured untreated red-oak machining dust (`dust_waste`)

Conditional actual discarded portion sent across the defined boundary to its documented treatment recipient. Distinguish generated waste held in stock from external dispatch, and split contamination/treatment routes into specific additional rows. No automatic disposal route or avoided-waste credit.

- Selected flow: Discarded captured untreated red-oak machining dust
- Flow property / unit: Mass / kg
- Amount rule: Measured gross external waste quantity from cp_residues divided by Q; retain generated/held/transferred quantities and their separate burden histories. No duplicate product or air destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `baird-residue-use-2020`

###### Discarded paperboard shipping box (`box_waste`)

Conditional actual discarded portion sent across the defined boundary to its documented treatment recipient. Distinguish generated waste held in stock from external dispatch, and split contamination/treatment routes into specific additional rows. No automatic disposal route or avoided-waste credit.

- Selected flow: Discarded paperboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: Measured gross external waste quantity from cp_pack divided by Q; retain generated/held/transferred quantities and their separate burden histories. No duplicate product or air destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `baird-ordering-2019`

##### Elementary flows

###### Actual wood particulate released to outdoor air (`wood_dust_air`)

Conditional measured escaping wood particulate at actual outlets and fugitive sources, distinct from captured solids. Declare filterable/condensable and size-sampling scope and receiving subcompartment. A total-dust observation does not identify molecular species or disjoint size fractions. Workplace exposure limits are not emitted mass.

- Selected flow: Wood dust emitted to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Measured actual non-overlapping emitted wood-dust mass from cp_air divided by Q; do not add nested PM totals, captured dust or unidentified molecular emissions. Unmeasured releases remain unresolved.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-woodworking-1976`

## 7. Allocation and Co-product Handling

These rules govern burden attribution after the physical and stock accounts are closed. They do not change physical reference output, create credits or authorize a universal mass, revenue, machine-hour or floor-area allocation.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_physical` | all physical rows and transfers | Preserve unallocated native physical quantities V, complete wood/water/component stocks and full residue destination portions. Reconcile transfers before burdens. Product, waste, internal fuel, water and inventory changes are not multiplied by a burden share; terminal reference remains 1 kg. |  |
| `allocation_direct` | attributable activity | Avoid allocation through measured subdivision and direct cohort attribution. Include actual failed runs, rejects, idle/cleaning and rework assigned by their causal histories, not only successful pieces. Assign dedicated profile cutting and QA to the actual benefiting cohort; physical losses do not erase incurred activity. Tested shared-service drivers must reflect subtype-specific actual causes and reconcile all recipients and idle time; machine hours or output kg are not universal causes. |  |
| `allocation_residual` | inseparable joint function | If residual joint burdens remain, identify the actual joint operation, functions and real market/product use of each eligible coproduct at its split, distinguish waste/internal transfer, and substantiate a physical causal allocation method or a justified economic method using actual same-period quantity/value evidence and sensitivity. Declare eligible denominators, units, boundaries and shares; ensure the method is defined and shares conserve burdens. Missing, nonpositive or undefined denominators/prices/service totals require a method hold for the dependent allocation, not equal shares, discarded evidence, extrapolated prices or an avoided-production credit. |  |
| `allocation_stocks_services` | raw, WIP, held FG, returns and later service | Carry original lot/cohort burden vectors through opening/closing all states, including nonpurchase/returned/unused stock. Add actually performed services to the benefiting original cohort even when still held or shipped later; do not spread them only over current shipments or all current first acceptance. Returned/reinspected product retains its original Q identity. Keep cross-period service corrections/version disclosure separate from repeated output; H held-stock quantity is never a normalization denominator. Unknown historical burdens are an explicit coverage gap. |  |
| `allocation_provider_assets` | provider and capital services | Attribute compatible stock, energy, waste and asset services once; separate provider-covered from uncovered activity and internal transferred burdens. Actual cohort service demand/actual total justified asset service is usable only with compatible service units and substantiated attribution, complete recipient/downtime reconciliation and nonzero total. Missing life/service data cannot be replaced by a machine-weight/lifetime/hour default or a full-asset charge. Apply and disclose justified exclusions only under boundary_capital. |  |

The rules are declared foreground accounting requirements implemented by cp_stocks, cp_pack, cp_assets and cp_attribution. Sources documenting operations do not establish a site's allocation causality or numerical shares.

## 8. Foreground Data Collection, Calculation, and Quality Rules

Use an explicit cohort index c throughout: Q_c is the frozen unique first-acceptance quantity of that origin cohort. Later performed services update A_c against that same original Q_c, never the current period's unrelated Q. A reporting period may contain several old/new cohorts, which remain separate unless their complete scope and original denominators genuinely match. Physical receipts/shipments P, N_ext, E_R, S, E_O and W are retained gross at the control boundary and tagged to their actual origin cohort/state; period-wide totals are not divided by one selected cohort Q. Unknown origin or inherited burden remains unresolved.

Collect and preserve unnormalised native-unit observations first. A is the attributable, unnormalised environmental-burden vector after justified subdivision/allocation; V is the separate gross physical exchange vector; neither is a volume label here. Q is the unique accepted net wood kg. H_s denotes measured held quantity in stock state s, never output for normalization. For actual density audit use V_net explicitly. Distinguish measured zero, demonstrated absence, below detection and unknown.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | profile_mill | accepted_profile | calibrated scale and acceptance register | site; period; service cutoff; unique piece/cohort; actual manufacturer; species/mix/origin and claimed certificates; inlet and face grade; drawing/revision; dimensions; first-acceptance timestamp; net mass; tare; moisture; reject/rework/return links; opening and closing accepted FG | Weigh qualified net wood excluding packaging; link release to actual profile/specification/face QA and prior state; reconcile first-acceptance records with held FG and shipments without re-counting returned/reinspected pieces | kg | every first acceptance and correction | complete matched manufacturing period and explicit service cutoff | actual factory and one fixed product/species/grade/profile scope | per 1 kg reference flow | calibrated weights, traceable sample method, QA records, unique-id reconciliation and uncertainty |
| cp_stocks | profile_mill | wood_stock; every wood stock state | lot movement and inherited-burden register | raw/unused, WIP, accepted FG, rejected and returned states; opening/closing wet/dry mass and moisture; purchases/nonpurchase receipts; issues; unused returns; transfer IDs; supplier gates; species/grade; source harvest/sawing/kiln/freight; original cohort; provider inclusions; burden vectors and later service records | Reconcile calibrated movements and actual provider documents per lot/state, with equal stage handoffs; match delivered dry stock; separate actual past primary drying from profile activity; retain original burdens on returns and unused/opening stock | kg and original native burden units kept separately | every movement and reporting cutoff | full matched period plus prior-lot history and actual subsequent services to cutoff | all relevant storage and internal stage boundaries, receiving and delivery providers | per 1 kg reference flow | stocktake, weighbridge/scale/tare, invoices, kiln/state records, transfer matching, provider-boundary and burden lineage |
| cp_energy | profile_mill | electricity; all actual powered stages/services | calibrated meters and actual operating logs | supply/provider/geography/voltage; generation/delivery/heat recovery coverage; meter hierarchy; start/end kWh; stages; actual equipment; idle/startup/shutdown/failed/cleanup/rework; packing/held-stock service recipients; causal drivers | Meter actual electrical demand and reconcile total supply/child meters and all served products; retain original cohort attribution and any independently evidenced unit conversion | kWh; converted MJ | meter intervals and operations | full production and performed-service coverage to declared cutoff | actual site and matched providers/served equipment | per 1 kg reference flow | meter calibration, hierarchy, observed operation, service-demand and provider reconciliation; uncertainty |
| cp_residues | profile_mill | offcuts_product; shavings_product; dust_product; offcuts_waste; shavings_waste; dust_waste | weighed generation, stock and destination register | source operation; material/state/moisture; generation; opening/closing held residues/rejected profiles; sale/internal fuel/manufacture/waste portions; recipient and function; contamination; shipment; rework links; original burden history | Separately weigh actual solid ends/rejects, shavings and captured dust; reconcile generation, stocks and each disjoint physical destination without inferring molecular emissions | kg; separate dry kg and water kg | every lot/control-container transfer and cutoff | complete failed and successful production/service pool | actual line, collectors, residue store and receiving provider | per 1 kg reference flow | calibrated weighing, moisture sampling, recipient manifests/product function, stocktake and no duplicate destination |
| cp_pack | profile_mill | box_in; box_out; box_waste; each extra actual component | component-specific stock and service record | component k; composition/unit mass; unused/WIP/held-FG/returned stocks opening and closing; P_k actual issue/attachment transfers; N_ext,k gross new external receipts; E_R,k external returned receipts; S_k gross shipments; E_O,k other external outputs including supplier returns; W_k external waste; original package/cohort/provider burdens; actual later packing/repacking service | Weigh this actual component and match physical attachments and all stock states; retain each original purchase/nonpurchase/return history. Keep internal P transfers equal between subledgers, external receipts/outputs gross, and customer/supplier returns explicit rather than fabricated net shipments | kg per individual component; service native units separate | each issue, attachment, shipment, return and stocktake | matched physical-control period and original cohort service cutoff, including opening/closing held goods | unused store, packing, FG store, dispatch/returns and actual component provider | per 1 kg reference flow | component tare/specification, gross shipping/return records, stocktake, matched subledgers and provider/service coverage |
| cp_air | profile_mill | wood_dust_air; each additional actual specific emission | outlet and fugitive measurement | source/outlet and indoor/outdoor fate; control device/condition; measured gas volume and dust concentration; sampling/filterable/condensable/size basis; moisture correction; detection limits; failures/cleanup; fugitive scope; overlap | Integrate actual compatible outlet sampling over operation and investigate fugitive paths; keep captured material separate; no exposure-limit factor or unsampled molecular/PM split; add actual species with independent identity/measurement only | kg emitted wood particulate | representative actual operating/control states and events | matched complete pool with sample representativeness disclosed | each actual outlet/receiving compartment and fugitive path | per 1 kg reference flow | sampling method, calibration/blanks, measured gas state/volume, detection and uncertainty, scope and non-overlap |
| cp_geometry | profile_mill | wood physical audit | dimensional scan and paired moisture specimens | profile revision; actual net area/length; curves/rebates; volume state; paired wet and oven-dry mass; sampling and constant-mass method; species/grain/moisture; uncertainties | Verify actual net section rather than bounding rectangle; sample matching material moisture/density independently where conversion/audit is needed; retain primary measurements | m2; m; m3; kg; moisture fraction, separate fields | each relevant profile/state and representative lot | same material state as audited quantity | actual inlet/product/residue samples kept distinct | per 1 kg reference flow | drawing/scan verification, instrument calibration, specimens and constant-mass record; uncertainty |
| cp_assets | profile_mill | equipment/facility service coverage | asset and service-provider register | all saw/moulder/tool/control/handling/QA/packing/building assets and supporting utilities; mass/composition if actual provider requires; manufacture/install/repair/replacement/end-treatment scope; provider-covered/uncovered activity; total delivered service and actual cohort use with units; life/recipient/downtime records; exclusions | Inventory the full actual scope; obtain compatible service-provider or separated asset inventories and tested subtype-specific actual service drivers, reconcile all recipients; document justified significance/exclusion sensitivity instead of default weight/life/hours | actual declared service unit and original burden units separately | asset/service change and reporting cutoff | actual service period and justified total-service history | whole relevant facility with explicit covered/uncovered supplier scope | per 1 kg reference flow | asset/provider documents, service totals, measured use, causality, exclusion/sensitivity and uncertainty; gaps retained |
| cp_attribution | profile_mill | all physical and burden rows | unnormalised physical/burden reconciliation | V native physical totals; Q; all stock vectors; failed/zero-output events; dedicated/shared activity; actual joint functions/markets/recipient quantities/values; driver/units; denominator signs; shares; A; later services | Close physical totals first; subdivide causal actual operations; separately justify any residual allocation; carry stock/cohort/provider histories and performed later services; no allocation of physical quantities | individual native exchange units; Q kg | complete accounting cycle and corrections | matched original cohort, full period and declared services | actual joint operation, suppliers, recipients and stock states | per 1 kg reference flow | traceable balances, causality/market evidence, complete recipient pool, nonzero method denominators, sensitivity and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_unique_output | accepted_profile | Q=sum(net first-accepted wood kg by unique identity), including accepted closing FG; opening accepted goods, WIP, repeats, dispatch and returns create no new Q. Correct the original cohort on mistaken acceptance; never silently net Q to shipments. | cp_acceptance; cp_stocks | positive cohort Q or retained zero-output case |  |
| calc_physical | all inventory rows | Collect gross native totals V_i and actual component/wood stock adjustments independently; physical card amount=V_i/Q after scope reconciliation. Terminal accepted_profile=1 kg. Keep shipment S, receipts and held states independent; neither burdens nor wood mass fabricate other physical exchanges. Q=0 retains unnormalised absolute activity and requires review, with no divided result. | cp_acceptance; cp_stocks; cp_residues; cp_pack; cp_energy; cp_air | physical native exchange per 1 kg reference flow |  |
| calc_burden | all inventory rows | Build A from actual attributable current activity plus inherited lot/stock/provider burdens and performed later services for the original cohort, after justified residual allocation. Publish A_i/Q once, with a separate unallocated physical V account. Never allocate first and again multiply normalised amounts, or use shipments/held H as denominator. Failed/idle/rework costs remain. Unknown causal method or nonpositive/undefined denominator holds the dependent allocated result. | cp_attribution; cp_acceptance; cp_assets; cp_stocks; cp_pack | attributable inventory in each original burden unit per 1 kg reference flow |  |
| calc_wood_stock | wood physical and burden histories | For each actual state/lot: opening+external receipts+internal in=closing+internal out+external products/wastes+actual losses. Match state/moisture on transfers; dry wood and water reconcile separately. For each burden vector: opening inherited+new provider burdens+internal inherited in+actual added services=closing carried+internal inherited out+outgoing carried burdens; reconcile internal terms once across the aggregate. Carry unused, WIP, FG, rejected and returned histories; unmeasured terms are gaps, not balance-plug emissions. | cp_stocks; cp_residues; cp_geometry; cp_attribution | closed native state accounts with inherited burden vectors | `usda-wood-handbook-2021` |
| calc_pack_stock | box_in; box_out; box_waste | For each actual component k across ALL unused/WIP/held-FG/returned states: opening_k+N_ext,k+E_R,k=closing_k+S_k+E_O,k+W_k. P_k is actual internal issue/attachment transfer and cancels across matched subledgers, not a second external receipt/output. Separate generated/held waste and discarded external W. Retain full source/cohort burden vectors and actual packing/repacking services; nonpurchase and returned opening stock are not free. Add actual extra components and external interfaces individually. No net-Q copy, assumed return or fictional one-package ratio. | cp_pack; cp_stocks; cp_attribution | component physical reconciliation and separate attributable burdens |  |
| calc_moisture_geometry | wood physical ledger | Use u=(m_wet−m_od)/m_od and m_od=m_wet/(1+u) with actual paired samples. Only a measured compatible conversion permits m_u=rho_u×V_net; geometry, moisture and species states must match. No universal density, nominal volume, shrinkage factor or fixed acceptance moisture. | cp_geometry; cp_acceptance; cp_stocks | actual dry matter/water and optional solid-volume audit | `usda-wood-handbook-2021` |
| calc_energy_air | electricity; wood_dust_air | Electrical MJ=actual kWh×3.6; keep raw meter/submeter/provider coverage. Emitted dust mass integrates compatible concentration×matching gas volume over actual operation with blank/state/unit corrections plus separately evidenced fugitives. Reject overlapping samples/nested size totals. Capture, workplace concentration and unidentified total organic compounds cannot supply molecular emission masses. | cp_energy; cp_air | energy and actual non-overlapping wood particulate mass | `epa-woodworking-1976` |
| calc_asset_service | actual added asset interfaces | Attribute only actual compatible cohort demand against an evidenced total delivered asset service and tested causal service definition; reconcile recipients/downtime and provider coverage. Preserve native service units and original asset burdens before A/Q. If total service, compatible provider or justified exclusion is unavailable, hold that dependent completeness claim rather than invent a weight/lifetime/hour or charge the full asset. | cp_assets; cp_attribution | actual asset service contribution or explicit unresolved/excluded coverage |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | reference and every actual exchange | Confirm concrete material/state, Product/Waste/Elementary role, actual supplier and native quantity support. Wood material's generic Mass binding requires every row-specific qualifier; its administrative owner is not the manufacturer. Other blank UUIDs remain specific unresolved identities, never guessed versions or defaults. | actual product/provider/native records; cp_acceptance; cp_stocks |
| quality_pool | production and later services | Cover all shifts, failed/zero-output runs, startup/shutdown/idle/cleanup, rework, opening/closing all stocks, returns and actual services to the original cohort. Disclose coverage dates and prior history gaps; no selected-successful-batch average. | cp_attribution; cp_stocks; cp_pack |
| quality_completeness | actual whole route and support scope | Screen all actual auxiliaries, packaging components, capital/facility services, utilities, emissions and waste media; instantiate each extra interface atomically before completeness. Quantify uncertainty/uncovered providers and explain justified exclusions; low mass or absent data is not an automatic cutoff. | cp_assets; cp_energy; cp_residues; cp_air; cp_pack |
| quality_basis | measurements and inference | Retain calibration, sampling, detection limits and measured uncertainty. Classify source-supported qualitative route separately from collected quantities; no invented numerical guardrail or universal allocation/density. Historical sources do not establish current legal/certification conformity or a specific observed factory route. | cp_geometry; all original protocols and source scope |

## 9. Validation Rules

Validation requires the complete scope and accounting conditions above. A finite declaration check is not a factory inventory, scientific approval, formal translation review or completeness of all future dataset records.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | applicability and reference | Verify actual solid American red-oak species/mix/origin, grades, continuous drawing/profile, uncoated unglued unassembled state, kiln-stock inlet and first-release moisture/net mass. Excluded material/construction or missing evidence blocks the dependent dataset applicability; no manufacturer SKU/title/UUID substitutes for facts. | `un-cpc3-notes`; `ahec-species-guide`; `rack-red-oak-baseboard` |
| `validate_reference` | all row quantities | Exactly one accepted_profile reference product output is 1 kg; input wood may share its broad UUID with an explicitly different state. Same complete cohort Q links every normalization in both languages; held closing accepted wood counts once, opening accepted wood/dispatch/return/reinspection does not create Q. Zero Q stays unnormalised. |  |
| `validate_physical` | material, dust and package balances | Retain actual dry wood/water, all stock-state and component P/N_ext/E_R/S/E_O/W accounts, actual extra interfaces and matched internal links. Do not equate purchased quantity, gross shipments, net first acceptance, captured dust and escaping emissions. Reconcile measured uncertainty; no fabricated returns, correction emission or molecular split closes unknowns. | `usda-wood-handbook-2021`; `epa-woodworking-1976` |
| `validate_attribution` | burden accounts | Verify original lot/cohort/provider histories, carried raw/unused/WIP/FG/return vectors and later performed services even on held/nonpurchase stocks. A/Q is applied once; H and shipments are not denominators. Test actual shared drivers and residual joint function/market evidence, compatible native units and positive defined denominators; unresolved allocation/asset service retains a hold on dependent results. Physical quantities remain unallocated. |  |
| `validate_completeness` | dataset release | Check actual equipment/facility capital scope, provider-covered/uncovered inventory, utility supply, every specific auxiliary/waste/emission and disjoint residue fate. Require actual support or justified declared exclusion with sensitivity; unknown identity/provider/measurement/history is explicit incomplete coverage, never zero or approved. Keep biogenic content and inherited forestry/combustion accounting once; no default storage/substitution/avoided-waste credit. | `baird-residue-use-2020`; `usda-wood-handbook-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific profile-manufacturing inventory with explicit stock, provider and actual later-service coverage |
| downstream_use | secondary_dataset; background_dataset after actual dataset completion and independent review |
| allowed_use | Matching red-oak uncoated solid baseboard route and declared first-acceptance/actual-service scope, with all qualifiers and compatible upstream links |
| excluded_use | Entire CPC leaf; observed SPL293/factory claim; log-forming or primary drying dataset; structural/installed-service equivalence; glued/coated/assembled substitutes; certified EPD or universal parameter/credit |
| required_metadata | PCR identity and source hashes; actual site/manufacturer/period/service cutoff; all reference qualifiers; Q and separate V/A ledgers; stock/return/provider/capital histories; control, power, component packing, causal allocation and actual extra interfaces |
| required_quality_disclosure | Candidate scientific/formal-translation review status; measured/calculated/unknown scope, identity/provider/history gaps, detection/uncertainty, justified exclusions, capital service coverage, attribution holds and source applicability limits |
| update_trigger | Species/origin/grade/profile/construction, kiln-supply or utility boundary, equipment/control/capital service, packing/return/stock/service cutoff, allocation/measurements, supplier evidence or native identity changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ahc-moulding-catalogue` | literature | AHC Hardwood Group, 6th edition Moulding Catalogue, publication date unknown; PDF pp.5–6 (printed1–2),24–25 (base introduction/B-1). https://ahchardwood.com/wp-content/uploads/2025/03/AHC-Moulding-Catalog-2025.pdf | Independent actual manufacturer process/services and baseboard geometry/function context; no Baird linkage, actual red-oak SKU route or numerical dimension/yield default |
| `baird-manufacturing-2022` | literature | Baird Brothers, Improving Manufacturing Processes While Respecting the Past: A Conversation With Zach Baird, June13,2022, purchased-grade-lumber, drying/rough-mill/custom knives/moulder/QA and power discussions. https://blog.bairdbrothers.com/improving-manufacturing-processes-while-respecting-the-past-a-conversation-with-zach-baird/ | Qualitative real operation/equipment/power and supplier-stage context; not a current SPL293 lot/route or equipment/energy default |
| `baird-ordering-2019` | literature | Baird Brothers, Beautiful American Hardwood is Only a Few Clicks Away, December10,2019, finish options, defect cutting/random lengths and customer packing account. https://blog.bairdbrothers.com/beautiful-american-hardwood-is-only-a-few-clicks-away/ | Acceptance/length/finish/dispatch distinction and conditional cardboard-box prompt; anecdotal packaging is not a standard recipe, return rate or material formulation |
| `baird-residue-use-2020` | literature | Baird Brothers, Sustainability is important; quality hardwood products come from quality sources, August26,2020, modified October23,2023; cutoff reuse, waste heat/generator discussions. https://blog.bairdbrothers.com/sustainability-is-important-quality-hardwood-products-come-from-quality-sources/ | Actual site residue/service uses motivate destination/provider screening; no universal destination, boiler route, zero-waste or environmental-benefit claim |
| `rack-red-oak-baseboard` | literature | Hardwood Rack, Red Oak Colonial Baseboard4.5 inch, undated product snapshot; solid/no glue-up/no finger joints and color/clarity selection description, linked product photos. https://www.hardwoodrack.com/red-oak-colonial-baseboard-4-5/ | Independent real product-form corroboration only; no inferred actual species/grade/kiln/coating/supplier relationship; dimensions/prices/options are not defaults |
| `ahec-species-guide` | handbook | AHEC, Sustainable American Hardwoods: A guide to species, publication date unknown, PDF16–17/printed14–15. https://www.americanhardwood.org/sites/default/files/publications/download/2017-04/AHEC%20Sustainable%20American%20Hardwoods.pdf | American red-oak commercial group and regional variability; no botanical lot identification or density/shrinkage/strength/moisture default |
| `us-cs76-39` | standard | US National Bureau of Standards, Hardwood Interior Trim and Molding, Commercial Standard CS76-39 (1939), PDF3–5/printed1–3, face grading, workmanship and design/measurement. https://www.govinfo.gov/content/pkg/GOVPUB-C13-b92063d8fb78ebb3a611760fb4b0dc32/pdf/GOVPUB-C13-b92063d8fb78ebb3a611760fb4b0dc32.pdf | Historical qualitative distinction of face-grade/template/linear commercial measurement from actual product geometry; no current legal/compliance claim or numerical criterion adopted |
| `usda-wood-handbook-2021` | handbook | USDA Forest Products Laboratory, Wood Handbook—Wood as an Engineering Material, FPL-GTR-282 (2021), printed4-1,4-11 Table4-5,13-2 and13-6 (PDF95,105,324,328). https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Moisture, state-dependent density/volume, representative constant-mass measurement and actual drying distinction; no default species density, target moisture, yield or drying energy |
| `un-cpc3-notes` | official_guidance | UNSD CPC Version3.0 Explanatory Notes, retained source publication date not independently established, PDF/printed137–143 and187–188. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification title/ancestor/adjacent veneer, conifer/bamboo, assembled-floor, structural and furniture contexts; no product-specific ruling or CPC-HS equivalence |
| `epa-woodworking-1976` | official_guidance | US EPA, Supplement No.6 to Compilation of Air Pollutant Emission Factors, Second Edition, April1976, §10.4 Woodworking Operations, printed10.4-1–10.4-2/PDF59–60 including Table10.4-1 footnotes; publisher explicitly marks this an historical version. https://19january2021snapshot.epa.gov/sites/static/files/2020-11/documents/ap42_2ndsup6_april1976.pdf | Historical qualitative sawing/planing/moulding/sanding dust collection and particulate/residue distinction only; no historical factor, removal efficiency, current compliance or exact factory device claim |
