---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.pallets-box-pallets-and-other-load-boards-of-wood-pallet-collars-of-wood
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# New nailed coniferous sawnwood pallets from purchased kiln-dried timber

## 1. Scope and Applicability

This manufacturing PCR covers new, unpainted, unwrapped pallets made by cutting/notching purchased kiln-dried coniferous solid sawn timber and assembling with steel nails, at an all-electric factory in mainland China. Blocks and stringers must both be solid sawn wood; disclose the actual design rather than assume EURO dimensions. Heat treatment, when required by the order, is completed on purchased wood before receipt and must be traceable in the upstream supply model. Kiln-dried alone does not prove phytosanitary treatment. Sources: `usda-pallet-2020`, `ippc-ispm15-2018`.

Excluded are resin-bound pressed/moulded wood pallets, composite blocks, plywood/OSB pallets, hardwood or mixed hardwood feedstocks, recovered pallet components, repairs/remanufacture, pool management, rental, cargo transport services, pallet collars and box pallets. Onsite drying, heat-treatment chambers, fumigation, painting and combustion are outside this selected route and require a separately complete method before use. Absence of these stages must be evidenced, not achieved by omitting operating equipment.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.pallets-box-pallets-and-other-load-boards-of-wood-pallet-collars-of-wood` |
| classification_refs | CPC 3.0 `31702`; narrower |
| covered_products | new nailed solid coniferous sawnwood pallets; solid block or stringer design |
| excluded_products | pressed wood; composite parts; repair; pool service; collars; box pallets; other routes in Section 1 |
| representative_product | accepted new pallet of the actual order configuration |
| production_route | purchased kiln-dried coniferous timber, supplier HT if required, electric cutting/notching, steel nailing, inspection, electric branding, unwrapped factory gate |
| market_state | new complete unpainted pallet, unloaded, declared moisture and treatment state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | manufacture of an accepted new pallet; this is a declared product unit, not cargo/reuse service |
| How much | 1 kg |
| How well | actual species, grade, dimensions, solid block/stringer design, deck/entry configuration, nail specification and documented order acceptance; rated load test basis disclosed |
| How long or cycle | one manufacture-to-gate reporting period; no lifetime, trip count or tonne-kilometres assigned |
| reference_flow_link | `pallet` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual scientific wood species and mixture shares; forest/supplier origin; moisture at receipt and gate with dry/wet basis; dimensions and tolerances; deck board count/thickness; solid block or stringer structure; entry/notch design; steel nail type, grade, coating, count and mass; net accepted pallet mass measurement; production dates and site; drying and HT provider, batch, process boundary and certificate when claimed; actual load rating/test basis or explicitly unverified; unpainted/unwrapped state; no reuse-service claim |

Declare these qualifiers in dataset metadata or process/reference-flow notes. A kg of pallet is not an equivalence claim for load capacity or service. A downstream per-piece view requires measured mass for that exact configuration; never assume kg/pallet. Cargo loading, damage, return transport, repair and completed rotations belong to a separately defined service model with primary records, without embedded substitution or circulation credits.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg accepted complete net pallet at the declared gate moisture, including installed nails. Measure accepted batch net mass Q using cp_accept; exclude rejects, packaging and cargo. No assumed individual weight. |
| moisture_basis | timber; pallet; sawdust_sale; offcut_sale; sawdust_waste; offcut_waste | Mass and dry-basis moisture | kg; kg/kg | Keep as-received and oven-dry wood mass separate using cp_material/cp_residue; apply moisture_wood in Section 8. Installed steel is not wood dry mass. Source: usda-wood-handbook-2021. |
| electric_unit | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Meter electrical work; convert kWh to MJ with 3.6 MJ/kWh. The database property label is a technical reference, not a fuel heating value or a delivered-heat claim. |

## 5. System Boundary

The foreground boundary begins with receipt of dried, debarked solid coniferous timber and purchased steel nails, and ends with acceptance and unwrapped factory-gate release. Aggregate wood preparation, assembly and acceptance into one foreground unit, while keeping stage meters and mass records separate. Internal wood/component transfers are not extra exchanges; both ends of an internal physical link, if a dataset decomposes stages, must carry the same quantity and state. Reject rework stays inside until accepted or segregated as material waste. Source: `usda-pallet-2020`.

Use linked upstream supply models for forestry, sawmilling, kiln drying, any claimed HT, nail manufacture, grid electricity, maintenance oil and actual inbound deliveries. No default delivery distance or vehicle load is permitted. A background mill-gate timber model needs a separately evidenced inbound transport model; a delivered model must not duplicate it. Foreground onsite thermal energy is absent only for the selected route. Upstream combustion emissions, including biogenic CO2, remain in the LCI; a climate-reporting convention cannot delete them. Store wood carbon only as a measured material balance, not as an assumed negative elementary exchange or reuse benefit.

Where HT is claimed, link the supplier treatment batch, energy/emission boundary and conformity records to received parts. ISPM 15 Annex 1 allows treatment before assembly; a conventional HT claim requires the entire wood profile, including core, to reach at least 56 °C for 30 continuous minutes. This treatment condition supplies no energy amount or drying endpoint. Do not default to steam heat: a heat purchase would need supplier net-delivered enthalpy evidence and a separately verified exchange. Changes requiring onsite HT or untreated green timber invalidate this route. Source: `ippc-ispm15-2018`.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | received_kiln_dried_solid_coniferous_timber |
| starting_condition_role | upstream supply interface, not a burden-free starting point |
| product_classification_scope | CPC 3.0 `31702`; narrower |
| recursive_input_rule | do not input finished pallets or recovered pallet parts in this new manufacture route |
| upstream_dataset_requirement | state/quantity-compatible wood/nail/energy/oil supply; evidenced drying and conditional HT; actual inbound transport; waste transport/treatment models |
| disclosure | actual scientific wood species and mixture shares; forest/supplier origin; moisture at receipt and gate with dry/wet basis; dimensions and tolerances; deck board count/thickness; solid block or stringer structure; entry/notch design; steel nail type, grade, coating, count and mass; net accepted pallet mass measurement; production dates and site; drying and HT provider, batch, process boundary and certificate when claimed; actual load rating/test basis or explicitly unverified; unpainted/unwrapped state; no reuse-service claim |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pallet_manufacture | Electric sawing, nailing and factory-gate acceptance | required | selected purchased kiln-dried timber route only | foreground manufacturing, stage records retained | 1 kg |

### Process: Electric sawing, nailing and factory-gate acceptance (`pallet_manufacture`)

#### Inputs

##### Product flows

###### Purchased coniferous timber (`timber`)

Actual species and grade, kiln-dried sawn solid wood only. Supplier records must identify moisture and any completed HT before receipt. Weigh net input; keep upstream drying/HT and inbound delivery once in the linked supply model.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_material; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### Steel nails (`nails`)

This broad identity is restricted here to one purchased steel nail specification per exchange. Record shank form, length, diameter, steel grade, coating and retained mass. Different nail specifications need separate dataset exchanges; no screw/bolt mix or generic fastener quantity.

- Selected flow: Steel fasteners `ebfe08f5-42c8-484e-b39a-684a35981c24`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_material; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_material`
- Sources: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### Low-voltage electricity (`electricity`)

Meter electricity for sawing/notching, nail-driving compressor, electric handling, dust extraction and acceptance. Record stage subtotals and shared-meter attribution. Use this CN user-side <1 kV identity only with compatible supply geography/voltage and background quantity; no additional grid losses already included by supply.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use cp_energy; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_energy`
- Sources: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### Petroleum lubricating oil (`oil`)

Conditional on actual petroleum-fraction lubricating oil use. Weigh issues net of returns and stock changes and attribute to this line. This is maintenance oil, not fuel; the database heating-value descriptor is not a PCR factor. Other formulations require their own verified exchange.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_maintenance; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_maintenance`
- Sources: `usda-pallet-2020`, `usda-wood-handbook-2021`

#### Outputs

##### Product flows

###### Accepted finished pallet (`pallet`)

One final output after cutting, notching if required, nailing, inspection and electric branding where required. No intermediate output uses the finished-pallet UUID. Net accepted mass includes wood moisture and installed nails, excluding wrapping and cargo.

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: fixed_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: method_formula
- Collection protocol: `cp_accept`
- Sources: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### Sold untreated coniferous sawdust (`sawdust_sale`)

Conditional on actual separately sold coniferous sawdust with documented lawful product/co-product status, customer-accepted specification and continuing use; payment alone is insufficient. Wood material is a broad physical locator here, not a sawdust commodity background. Qualify this exchange with actual species, particle form/size, non-agglomerated and chemically untreated state, separately evidenced supplier HT when claimed, moisture, measured wet/dry mass and receiver. Exclude offcuts, bark, ground mixed fuel and any mass counted as waste or internal return. Receiver/provider reference quantity, moisture convention and downstream boundary compatibility remain to be verified before dataset use.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_residue; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residue`
- Sources: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### Sold untreated coniferous solid-wood offcuts (`offcut_sale`)

Conditional on actual separately sold coniferous solid-wood offcuts with documented lawful product/co-product status, customer-accepted specification and continuing use; payment alone is insufficient. Wood material is a broad physical locator here, not a generic scrap commodity background. Qualify this separate exchange with actual species, solid form/dimensions, non-agglomerated and chemically untreated state, separately evidenced supplier HT when claimed, moisture, measured wet/dry mass and receiver. Exclude chips, sawdust and any mass counted as waste or internal return. Receiver/provider reference quantity, moisture convention and downstream boundary compatibility remain to be verified before dataset use.

- Selected flow: Wood material `d07bf4c9-7cd0-46ad-a6b3-2fd11fe08f98`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_residue; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residue`
- Sources: `usda-pallet-2020`, `usda-wood-handbook-2021`

##### Waste flows

###### Collected waste sawdust (`sawdust_waste`)

One untreated collected sawdust stream leaving for documented offsite treatment; separate from emitted particulate and sold sawdust. Record receiving contractor and actual treatment; the identity does not select combustion or recycling.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_residue; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residue`
- Sources: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### Waste untreated coniferous solid-wood offcuts (`offcut_waste`)

Actual non-agglomerated coniferous solid-wood cutting offcuts and segregated wood from rejected pallets, leaving as waste. Record species, moisture, unimpregnated/uncoated condition, absence or actual level of adhesive contamination and receiving contractor/treatment. This broad physical identity is conditional: its isolated CPC agglomerated-waste classification conflicts with its names and woodworking description; supplier/source clarification is required. Exclude removed nails and any material counted as sale or internal return.

- Selected flow: Offcut `acc22294-8e77-4784-988f-2499be3c60eb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_residue; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residue`
- Sources: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### Rejected steel nails (`steel_waste`)

Weigh rejected or recovered steel nails crossing the boundary. This CN assembly scrap identity fits assembly rejects, not machining scrap; document coating and receiver without invented recycling credit.

- Selected flow: Scrap steel `0e66603a-40d3-4c52-9223-4c18d32c11fd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_residue; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_residue`
- Sources: `usda-pallet-2020`, `usda-wood-handbook-2021`

###### Used lubricating oil (`used_oil`)

Conditional on actual used oil removal; weigh collected waste oil, record contamination and authorized destination. Do not infer recovered mass equals fresh oil input or assign a treatment from identity alone.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_maintenance; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_maintenance`
- Sources: `usda-pallet-2020`, `usda-wood-handbook-2021`

##### Elementary flows

###### Outdoor fine wood dust (`pm25`)

Mass of particles up to PM2.5 released after controls to outdoor air, unspecified subcompartment. Use actual sampling or a documented site-specific emission model; captured dust is waste, not an air emission.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_air; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-dust-2014`

###### Outdoor intermediate wood dust (`pm_coarse`)

Mass of particles above PM2.5 and up to PM10 released after controls to outdoor air, unspecified subcompartment. Derive only from compatible nested measurements of the same source, period and PM definition.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_air; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-dust-2014`

###### Outdoor wood dust above PM10 (`pm_over10`)

Mass of particles above PM10 released after controls to outdoor air, unspecified subcompartment. Do not add total PM or PM10 again alongside these three disjoint bins. Indoor exposure is not this flow.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use cp_air; actual attributable amount divided by accepted net batch mass Q from cp_accept. No default quantity; nonapplicability or zero needs evidence.
- Value mode: calculated_value
- Specificity: site_specific
- Normalization basis: per 1 kg reference flow
- Basis kind: reference_flow
- Evidence kind: calculated_from_collection
- Collection protocol: `cp_air`
- Sources: `epa-sawmill-dust-2014`

## 7. Allocation and Co-product Handling

Maintain an unallocated physical ledger for wet/dry wood, water, nails and measured carbon, including receipts, gate product, residue destinations and stock changes. Separately maintain the environmental burden ledger. Subdivide and meter wood preparation separately from nailing/acceptance where co-products are sold. Only joint wood-preparation burdens are allocated by actual oven-dry mass of pallet wood components and eligible sold wood co-products at the split; wastes are excluded from the co-product denominator. Apply the pallet share to joint upstream timber and preparation burdens. Nailing, inspection and product-specific downstream energy belong wholly to pallets. Do not multiply co-product physical outputs or internal link quantities by the pallet allocation share. Source: `usda-pallet-2020`, §1.4 (stage distinction); `usda-wood-handbook-2021` (dry basis).

Evidence of sale, customer-accepted product specification, lawful product/co-product status and continuing actual use distinguishes a co-product from waste; revenue alone establishes neither product status nor a reason to allocate burdens to a residue. Each residue mass follows exactly one sale/waste path. With no co-product the pallet share is one. Unknown mass, unresolved actual product status/use, incompatible receiver/provider quantity or moisture basis, or inseparable stage meters must remain explicit gaps in a production dataset. Assign waste handling to its generating activity and disclose the chosen offsite background boundary. No default avoided fuel/material burden, recycling credit, lifetime extension or system expansion is included.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_accept | pallet_manufacture | pallet | acceptance and weighing | lot; configuration; species; dimensions; block/stringer; nail specification; accepted count; tare; accepted net batch mass Q; moisture; rejects; gate | Calibrated scale weighing of accepted complete pallets without wrapping or cargo; reconcile order and reject records. Keep measured piece weights only as supplementary actual records. | kg | every lot | same reporting period and accepted configuration | actual line/site and suppliers | per 1 kg reference flow | calibration; traceable original records; sampling coverage; reconciliation |
| cp_material | pallet_manufacture | timber; nails | receipts, stock and issues | supplier; species; grade; dimensions; wood moisture; wet and oven-dry sample masses; nail type/coating/count; mass; opening/closing stock; returns; supplier kiln/HT batches; inlet transport | Weigh net materials by lot, reconcile supplier and stock records. Oven-dry representative species/lot wood samples to constant mass under a documented method; calibrated moisture meters require species and temperature correction evidence. Verify supplier treatment and delivery boundaries. | kg; kg/kg | every lot and stock close | same reporting period and accepted configuration | actual line/site and suppliers | per 1 kg reference flow | calibration; traceable original records; sampling coverage; reconciliation |
| cp_energy | pallet_manufacture | electricity | stage meter readings | meter; voltage; supply geography; timestamps; readings; preparation/nailing/extraction/handling/branding subtotals; allocation driver; reporting lot | Use calibrated interval meters; reconcile line totals and invoices. Separate preparation from downstream assembly and acceptance; meter electric compressor and handling, including idle demand attributable to production. | kWh; MJ | continuous, close each reporting period | same reporting period and accepted configuration | actual line/site and suppliers | per 1 kg reference flow | calibration; traceable original records; sampling coverage; reconciliation |
| cp_residue | pallet_manufacture | sawdust_sale; offcut_sale; sawdust_waste; offcut_waste; steel_waste | segregated weigh tickets and destinations | source stage; residue type; wet/dry mass; moisture; sale or waste; particle/solid form and dimensions; treatment state; receiver; accepted product specification; lawful status/use evidence; provider/downstream reference quantity and moisture basis; invoice/manifest; recovered nails; internal return; stock; measured carbon fraction if used | Weigh separate bins and document destination, sale/use and treatment. Verify actual customer specification, lawful product/co-product status and continuing use before treating a sold stream as product; verify receiver/provider native mass-moisture and boundary compatibility separately from the broad UUID. Sample wood moisture using the same dry-basis method. Separate wood and steel from rejects; count internal rework once and reconcile unallocated physical balances before allocating burdens. | kg; kg/kg | each bin/dispatch and period close | same reporting period and accepted configuration | actual line/site and suppliers | per 1 kg reference flow | calibration; traceable original records; sampling coverage; reconciliation |
| cp_maintenance | pallet_manufacture | oil; used_oil | maintenance issues and waste tickets | oil formulation; issue/return masses; stocks; machine hours; used-oil mass/contamination; receiver; reporting period | Weigh fresh and used oil separately; trace service intervals and attribute to equipment using documented operating hours. Unknown uncollected oil remains a balance gap, not an assumed emission. | kg | each maintenance event | same reporting period and accepted configuration | actual line/site and suppliers | per 1 kg reference flow | calibration; traceable original records; sampling coverage; reconciliation |
| cp_air | pallet_manufacture | pm25; pm_coarse; pm_over10 | post-control outdoor emissions | source; subcompartment; sampling method; PM definition; size cut; concentration; exhaust volume and conditions; operating duration; control efficiency; fugitive pathway; uncertainty | Measure post-control stack and outdoor fugitive mass over representative operation or use a documented site-specific engineering model with validated inputs. Keep filterable/condensable definitions aligned; no automatic EPA indoor zero or PTE factor. Identify genuinely absent pathways with records. | kg | representative tests with continuous activity coverage | same reporting period and accepted configuration | actual line/site and suppliers | per 1 kg reference flow | calibration; traceable original records; sampling coverage; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | all inventory rows | For each row, normalized amount = attributable period exchange / accepted net batch mass Q. Product output = Q / Q = 1 kg. Q must be positive and from cp_accept; retain each numerator unit. | period exchange; Q; cp_accept | row amount per 1 kg reference flow |  |
| moisture_wood | timber; pallet; sawdust_sale; offcut_sale; sawdust_waste; offcut_waste | Dry-basis moisture fraction u = (wet wood mass - oven-dry wood mass) / oven-dry wood mass; dry wood mass = wet wood mass / (1 + u). For pallets remove measured installed steel mass before applying wood moisture. No constant u or density. | wood mass; measured u; cp_material; cp_residue | dry wood and retained water | usda-wood-handbook-2021 |
| electric_conversion | electricity | Electrical work in MJ = metered kWh × 3.6; retain stage totals, apply the allocation rule to joint preparation only, then normalize_batch. | metered kWh; cp_energy | attributable MJ per reference flow |  |
| joint_wood_share | timber; electricity; oil | Pallet share = oven-dry mass of pallet wood components at split / (that mass + oven-dry mass of eligible sold wood co-products at split). Use only on joint preparation and associated upstream burdens; exclusive downstream burdens remain full. Physical row masses remain unchanged. | stage meters; cp_residue; dry mass at split | burden allocation share | usda-pallet-2020 |
| dust_partition | pm25; pm_coarse; pm_over10 | For identical source, period and measurement definition: fine = PM2.5; middle = PM10 - PM2.5; coarse = total PM - PM10. Require total PM ≥ PM10 ≥ PM2.5 ≥ 0. Incompatible or missing measurements stay pending; never assume a particle fraction. | compatible nested emissions; cp_air | three disjoint emitted masses | epa-sawmill-dust-2014 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| config_trace | all inventory rows | Same species/configuration, moisture and treatment state, gate and reporting period; a database flow identity alone is not a compatible background dataset. | order, supplier and measured records |
| balance | all inventory rows | Reconcile unallocated dry wood, retained water, installed/rejected steel and stocks. If carbon accounting is used, measure species/lot carbon fraction and trace wood carbon to product, residues and actual releases; disclose residuals and uncertainty. Never solve missing water/carbon by fabricating emissions. | physical ledger and distinct burden ledger |
| coverage | all inventory rows | Record applicable, absent and unknown exchanges separately. No lookup means no UUID; no activity data means no default amount. Verify the actual physical qualifiers, lawful product status/use and receiver/provider quantity-moisture compatibility before a dataset uses conditional sold-residue identities. | row evidence, meters, sampling and waste destinations |

## 9. Validation Rules

Require exactly one final pallet reference output, positive accepted batch mass and identical bilingual reference basis. Check every row against its physical type, actual material state, direct-record reference property/unit and foreground collection protocol. Split nail specifications and additional actual consumables into atomic dataset exchanges; material route changes require method review. Reconcile period boundaries, stock/rework and two-ended internal links before normalizing.

Reject a pressed-wood, recovered-parts or repair/pool dataset under this PCR. Reject missing upstream drying/claimed HT/inbound transport, duplicated grid losses or residue destinations, allocated physical outputs, nested dust double counting, or invented mass, density, load rating or trip credit. Claimed HT needs supplier batch/conformity evidence; measurements for a different species/geometry cannot prove it. Identity gaps and unknown emissions are unresolved rather than zero. These authoring rules do not claim semantic TIDAS approval or an independently approved methodology.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | kg-based manufacture of this specified new pallet route; upstream input to a separately evidenced service model |
| excluded_use | unqualified cargo/load-service comparison; repair, rental or pool service; automatic reuse/substitution credit |
| required_metadata | actual scientific wood species and mixture shares; forest/supplier origin; moisture at receipt and gate with dry/wet basis; dimensions and tolerances; deck board count/thickness; solid block or stringer structure; entry/notch design; steel nail type, grade, coating, count and mass; net accepted pallet mass measurement; production dates and site; drying and HT provider, batch, process boundary and certificate when claimed; actual load rating/test basis or explicitly unverified; unpainted/unwrapped state; no reuse-service claim |
| required_quality_disclosure | primary collection coverage, dry/wet and stock balance, stage allocation, upstream provider compatibility, HT evidence, residue destinations, unresolved conditional identities and emission uncertainty |
| update_trigger | change of species, dimensions/structure, nails/coating, drying/HT location, voltage/geography, onsite thermal/fuel equipment or sale/treatment route |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| usda-pallet-2020 | literature | [USDA Forest Service, FPL-RP-707 (2020)](https://research.fs.usda.gov/download/treesearch/61866.pdf), §1.2.2, §1.4, §2.5; printed pp. 6, 8, 16–17 | manufacturing stages and stage allocation distinction only; US 2016 survey and service assumptions do not supply defaults |
| ippc-ispm15-2018 | standard | [IPPC ISPM 15, 2018, published 2019](https://www.ippc.int/static/media/files/publication/en/2019/02/ISPM_15_2018_En_WoodPackaging_Post-CPM13_Rev_Annex1and2_Fixed_2019-02-01.pdf), §2.1, Annex 1; printed pp. 7, 12 | processed-wood distinction and supplier part HT boundary/claim conditions; no energy factor |
| usda-wood-handbook-2021 | handbook | [USDA FPL-GTR-282 (2021)](https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf), Chapters 4, 13; printed pp. 4–1, 13–2 | dry-basis moisture and oven-dry sampling; no universal density or default moisture |
| epa-sawmill-dust-2014 | official_guidance | [EPA Region 10 sawmill PM PTE memorandum, 8 May 2014](https://www.epa.gov/sites/default/files/2016-09/documents/spmpteef_memo.pdf), activity table and notes, printed pp. 1–2 | nested size definitions and dust screening only; PNW Indian Country PTE factors exclude boilers and are not actual pallet-emission defaults |
