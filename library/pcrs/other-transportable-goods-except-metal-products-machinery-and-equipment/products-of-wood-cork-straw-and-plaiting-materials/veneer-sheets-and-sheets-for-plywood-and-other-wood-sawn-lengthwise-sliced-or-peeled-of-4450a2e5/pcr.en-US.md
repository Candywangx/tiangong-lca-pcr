---
schema_version: 1
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.veneer-sheets-and-sheets-for-plywood-and-other-wood-sawn-lengthwise-sliced-or-peeled-of-4450a2e5
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Unbonded rotary-cut and sliced non-tropical hardwood veneer

## 1. Scope and Applicability

This method covers untreated non-tropical hardwood veneer logs converted by rotary peeling or knife slicing, clipped, dried, accepted and delivered as unbonded, unbacked single wood sheets, with finished thickness <=6 mm. The inlet is untreated veneer logs received at the mill; conditioning and flitch preparation are included. Do not infer this delivery from purchased dry veneer or plywood. Declare delivery moisture, dimensional tolerance, grade and buyer specification; no universal moisture target, species density, heat consumption, yield or emission factor is specified. [usda-wood-handbook-2021; epa-plywood-2002]

Unbonded knife-cut coniferous, tropical hardwood and other hardwood veneers form a common method family; species changes process parameters and exchanges and does not alone justify three method identities. This record has one non-tropical hardwood reference object. Thin sawn sheets, even <=6 mm, involve kerf and different yield and are outside this knife-cut route. Exclude green veneer sale, adhesive or glue-thread composing, coatings/preservatives, backing, substrate-bonded decorative panels, plywood and LVL. Clipping, edge matching and mechanical grouping without adhesive or glue thread may be included; actual adhesive composing needs another reviewed boundary, with its glue inputs visible. [un-cpc-3; usda-wood-handbook-2021; epa-plywood-2002]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.products-of-wood-cork-straw-and-plaiting-materials.veneer-sheets-and-sheets-for-plywood-and-other-wood-sawn-lengthwise-sliced-or-peeled-of-4450a2e5 |
| classification_refs | CPC 3.0 31513; narrower; scope and accepted decisions: `classifications/mappings/cpc-3.0-to-pcr.yaml` and its referenced ADRs |
| covered_products | Unbonded rotary-cut/sliced non-tropical hardwood sheets <=6 mm, dried for delivery at a declared buyer moisture specification |
| excluded_products | Thin sawn sheets; green sale; adhesive composing/backing; substrate-bonded veneer panels; plywood; LVL; coniferous and tropical reference objects |
| representative_product | Dried unbonded non-tropical hardwood sheet for later veneering or core manufacture |
| production_route | Log receipt/storage → debarking/bucking/flitch preparation → water or steam conditioning → rotary peeling or slicing → clipping → drying/redrying/cooling → grading/adhesive-free matching → packing and delivery |
| market_state | Single unbonded, unbacked, adhesive-free sheet at acceptance/delivery gate; packaging mass separate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply unbonded non-tropical hardwood sheet for later veneering/core manufacture; no claim of structural-panel functional equivalence |
| How much | 1 kg net delivered veneer |
| How well | Thickness <=6 mm; buyer moisture, dimensions, grade and defect criteria; non-tropical hardwood with no adhesive/backing |
| How long or cycle | One accepted delivery from a declared production period; no service-life claim |
| reference_flow_link | `veneer_delivery` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of other non-coniferous wood `7a8c3cba-0c6b-422a-ac79-b7032d874bcb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and non-tropical status; thickness/area/dimensions; peeling or slicing; no adhesive/backing/substrate; grade/defects; measured dry-basis delivery moisture and buyer tolerance; site/period; net mass; delivery/packing gate; conditioning and dryer/combustion technology |

The official flow display is retained verbatim; its reference to plywood is interpreted with the record’s subsequent-use/sheet context and does not change the unbonded delivery gate. Record every qualifier in the actual data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference quantity and all inventory denominators are 1 kg reference flow. Use calibrated weighing of net veneer at the same accepted delivery moisture, excluding packaging; oven-dry mass, area or volume cannot replace it directly. cp_output retains complete-period accepted production and stock correction. |
| wood_moisture | all physical wood ledgers | Mass / moisture | kg | Dry-basis moisture fraction u=(wet mass−oven-dry mass)/oven-dry mass; wet-basis w=(wet mass−oven-dry mass)/wet mass; u=w/(1−w). Sample and oven-dry to constant mass using cp_balance; do not mix percentages and fractions. Each state uses its own moisture. |
| volume_compatibility | natural_gas, external_woodchips, sold_woodchips | Volume | m3 | Gas T/P/composition/wet-dry basis and compressibility, and chip solid/bulk/packing convention must agree with supplier reference. Unknown compatibility leaves quantity linkage incomplete; a database secondary mass coefficient is not density. |
| steam_basis | purchased_steam_heat | Net delivered heat | MJ | Supplier background definition must correspond to the measured steam-inlet minus return/loss enthalpy boundary; MJ or calorific value alone does not establish this basis. Unknown compatibility remains unresolved. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Untreated non-tropical hardwood veneer logs received at mill; declare bark, moisture, storage loss, supply gate and freight |
| starting_condition_role | Foreground inlet; upstream forestry/log production retained through traceable background |
| product_classification_scope | Dried delivered peeled/sliced unbonded subset within 31513 |
| recursive_input_rule | Purchased same-category dry veneer is outside this log-inlet route; do not recursively duplicate log-to-veneer production. Use an explicit downstream matching boundary with supplier data. Internal redrying does not create another reference-product output. |
| upstream_dataset_requirement | Forestry/log supply, actual inbound freight, water/power/heat/fuels, packaging and off-site waste treatment need state/geography/time/quantity-compatible backgrounds; an identity UUID is not a completed dataset. |
| disclosure | Disclose inlet/outlet state, species, route, every stage and heat source, abatement, delivery moisture, stock, packaging, infrastructure/equipment treatment, unmeasured scope and background gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_gate | Aggregate debarking, bucking/flitch preparation, actual water/steam conditioning, peeling or slicing, clipping, drying/redrying, cooling, grading, adhesive-free matching and packing into one veneer_mill foreground unit, retaining separate stage meters. Veneer acceptance/delivery precedes adhesive layup/hot pressing. | `epa-plywood-2002`; `usda-wood-handbook-2021` |
| boundary_heat | Distinguish purchased steam, on-site boilers and direct firing. On-site combustion includes fuel, operation/abatement, ash and actual emissions; purchased steam retains supplier upstream production without invented site combustion. Attribute each heat portion once. | `epa-plywood-2002`; `epa-wood-boiler-2022` |
| boundary_completeness | Separate physical process topology from allocated burden accounts. Both ends of an internal fuel transfer use identical wet mass, moisture and dry mass; no external exchange is added for the aggregated unit. Add and verify every other actual atomic flow. Any cut-off/equipment exclusion needs boundary, quantitative relevance and sensitivity, without an unsupported default threshold. | `epa-plywood-2002` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| veneer_mill | Log-to-unbonded-veneer delivery | required | Declared knife-cut dried-sheet route; fuels, packaging and co-products included under row conditions | foreground production | 1 kg reference flow |

Log receipt/debarking/bucking → flitch preparation and conditioning → peeling or slicing → clipping → drying/redrying/cooling → grading/adhesive-free matching/packing → veneer delivery. Stage physical ledgers branch to bark, cores, offcuts, sawdust and removed water; included boilers receive internal residue transfers and produce ash/emissions. Never multiply physical outputs mechanically by burden allocation shares.

### Process: Log-to-unbonded-veneer delivery (`veneer_mill`)

#### Inputs

##### Product flows

###### Non-tropical hardwood veneer logs (`veneer_logs`)

Required: untreated non-tropical hardwood veneer logs at mill receipt, including declared bark and inlet moisture. Weigh receipt and storage change; trace forest/roadside supply and inbound freight separately.

- Selected flow: Non-tropical hardwood veneer logs
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Alternating current (`electricity_lv`)

Conditional: actual grid consumption at the <1 kV user interface. Submeter conditioning, peeling/slicing, clipping, drying/redrying, cooling and packing. Include conversion and losses inside the declared boundary once; 1 kWh = 3.6 MJ. Do not substitute a power-plant generation flow.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Alternating current (`electricity_mv`)

Conditional: actual grid consumption at the 1–35 kV user interface. Submeter conditioning, peeling/slicing, clipping, drying/redrying, cooling and packing. Include conversion and losses inside the declared boundary once; 1 kWh = 3.6 MJ. Do not substitute a power-plant generation flow.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Water, tap (`tap_water`)

Conditional: purchased tap water for log conditioning, washing or boiler makeup. Meter net imported mass; reconcile recirculation, condensate, wood uptake, evaporation and wastewater. Supplier source and treatment remain site-specific; direct abstraction requires separately identified resource flows.

- Selected flow: Water, tap `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Net delivered heat from saturated process steam (`purchased_steam_heat`)

Conditional: purchased saturated steam supplying conditioning or indirect dryers. Obtain supplier definition and measure inlet pressure, temperature, dryness, steam mass, condensate return mass/enthalpy and meter boundary. Resolve net delivered heat to supplier reference before linking; a generic MJ or gross calorific value is insufficient. No fuel/combustion for this purchased portion is also counted on site.

- Selected flow: Net delivered heat from saturated process steam
- Flow property / unit: Energy / MJ
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### natural gas in the gaseous state (`natural_gas`)

Conditional: pipeline gaseous natural gas burned on site. Reference property is Volume, not Mass. Record absolute T/P, dry/wet basis, composition, compressibility and supplier background m3 definition; convert with verified gas state relations. A secondary mass coefficient is not density. Unknown meter/background compatibility makes the quantity linkage incomplete.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Wood Chip (`external_woodchips`)

Conditional: purchased untreated wood chips burned in the included boiler. Reference Volume does not specify solid or bulk. Measure actual volume convention, packing/voids, mass, moisture and supplier reference quantity together; require compatibility. Do not impose a database-derived density, heating value or species. Internal chipped residues are recorded only in the physical transfer ledger, not as another imported exchange.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### Diesel fuel (`diesel`)

Conditional: actual diesel consumed by included yard handling. Weigh or use measured density at recorded temperature for volume conversion. Fuel grade, provider, heating value and combustion technology must be collected; identity does not establish refinery burdens or emissions.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### lubricating oil (`pao_lubricant`)

Conditional: fully synthetic PAO lubricating oil matching the direct-read route and actual equipment specification. Record makeup and inventory change. Mineral oil is not this identity and requires its own atomic row and verification if used.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`

###### Polyethylene film (`pe_film`)

Conditional: polyethylene film used to wrap accepted sheets. Collect polymer specification, net used mass and reusable/recycled fractions. Packaging is excluded from veneer reference mass and attributed to veneer alone.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

###### Polypropylene packaging strap (`pp_strap`)

Conditional: actual polypropylene strapping for the sheet bundle. Weigh and record specification; polypropylene resin, fibres, twine and mixed packaging are not this fabricated strap.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packaging`

###### Road freight transport of veneer logs by truck (`inbound_truck`)

Required when upstream log background ends before mill receipt: record net log mass and actual loaded distance, vehicle capacity, load factor, empty return and fuel/terrain. Link a compatible truck transport service without duplicating diesel already in that service or inbound transport embedded in log supply.

- Selected flow: Road freight transport of veneer logs by truck
- Flow property / unit: Transport service / t km
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_transport`

#### Outputs

##### Product flows

###### Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of other non-coniferous wood (`veneer_delivery`)

1 kg accepted unbonded rotary-cut or sliced non-tropical hardwood veneer, thickness <=6 mm, at declared delivery moisture, excluding transport packaging. The manufactured sheet record includes downstream use as a veneer/core, not a bonded substrate. Use only this product-output reference.

- Selected flow: Veneer sheets and sheets for plywood and other wood sawn lengthwise, sliced or peeled, of a thickness not exceeding 6 mm, of other non-coniferous wood `7a8c3cba-0c6b-422a-ac79-b7032d874bcb`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `product_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Collection protocol: `cp_output`
- Sources: `usda-wood-handbook-2021`

###### Untreated non-tropical hardwood bark sold for fuel (`sold_bark`)

Conditional: bark actually sold as a co-product; record physical dry and wet masses, value and destination. Mutually exclusive with waste bark and internal combustion for the same portion.

- Selected flow: Untreated non-tropical hardwood bark sold for fuel
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Non-tropical hardwood peeler core (`peeler_core`)

Conditional: actual residual core sold from rotary peeling; record diameter, species, dry/wet mass and moisture. It is not sawnwood or veneer. Slicing flitch residues require a separate identity.

- Selected flow: Non-tropical hardwood peeler core
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Untreated non-tropical hardwood veneer offcuts sold (`sold_offcuts`)

Conditional: uncoated veneer clippings sold without chipping; weigh and separate from waste trim, internal fuel and chipped products.

- Selected flow: Untreated non-tropical hardwood veneer offcuts sold
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Untreated non-tropical hardwood sawdust sold (`sold_sawdust`)

Conditional: sold sawdust generated by log bucking or flitch preparation; physical amount unchanged by burden allocation. It is not a waste-flow identity.

- Selected flow: Untreated non-tropical hardwood sawdust sold
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Non-tropical hardwood residual slicing flitch (`residual_flitch`)

Conditional: the actual residual flitch sold after knife slicing. Weigh wet/dry mass, record geometry and moisture; distinguish from rotary peeler core, clipped veneer and thin sawn sheets.

- Selected flow: Non-tropical hardwood residual slicing flitch
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Wood Chip (`sold_woodchips`)

Conditional: actual chipped untreated residue sold across the gate. Use measured compatible solid/bulk volume and packing, not an inferred kg/m3 coefficient. Do not rename unchipped veneer offcuts as chips. Sold and internally burned portions must be disjoint.

- Selected flow: Wood Chip `3fa2a6a7-224c-4d99-bd55-a214f0a83161`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

##### Waste flows

###### Non-tropical hardwood residual slicing flitch waste (`waste_flitch`)

Conditional: residual slicing flitch actually discarded off site, not sold or internally burned. Weigh and disclose treatment; source generation mass and destination portions must reconcile.

- Selected flow: Non-tropical hardwood residual slicing flitch waste
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Non-tropical hardwood peeler core waste (`waste_peeler_core`)

Conditional: rotary peeler core actually discarded off site, excluding sold cores and internally burned cores. Weigh dry/wet quantities and preserve treatment route.

- Selected flow: Non-tropical hardwood peeler core waste
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Bark (`waste_bark`)

Conditional: actual debarking residue leaving as waste; weigh waste transfer and moisture. Exclude sold bark and internally combusted bark. Record treatment destination; this flow identity specifies no allocation or amount.

- Selected flow: Bark `a2536c07-fbe1-4a12-90fb-21bd2e99b74e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### sawdust waste (`waste_sawdust`)

Conditional: untreated collected sawdust leaving for off-site combustion/recycling, generated by actual cutting/milling. Captured dust is not an air emission. Do not count material sold as a product or burned internally again here.

- Selected flow: sawdust waste `e1a44d20-d968-4d64-bd7c-253a1441ab35`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Uncoated non-tropical hardwood veneer trim waste (`waste_trim`)

Conditional: rejected unchipped veneer trim exported as waste; weigh dry/wet masses and destination, separately from sold offcuts.

- Selected flow: Uncoated non-tropical hardwood veneer trim waste
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residues`

###### Hardwood log-conditioning wastewater (`conditioning_wastewater`)

Conditional: spent log-conditioning water sent to off-site treatment; meter volume and density/mass, dissolved/suspended material and treatment contract. Do not represent untreated wastewater as an elementary discharge. Included on-site treatment instead requires its own atomic inputs, sludge and pollutant discharges.

- Selected flow: Hardwood log-conditioning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`

###### Untreated wood-boiler bottom ash (`bottom_ash`)

Conditional: on-site untreated wood fuel combustion produces collected bottom ash; weigh separately from fly ash and measure residual carbon. Imported heat does not cause this foreground ash.

- Selected flow: Untreated wood-boiler bottom ash
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`

###### Untreated wood-boiler fly ash (`fly_ash`)

Conditional: boiler air-control device captures fly ash; weigh separately from bottom ash and stack PM. Preserve treatment and carbon content.

- Selected flow: Untreated wood-boiler fly ash
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`

###### Spent PAO lubricating oil (`spent_pao`)

Conditional: spent synthetic PAO oil actually transferred to a waste handler; measure quantity and contamination. Do not use mineral-oil waste or fresh lubricant identity.

- Selected flow: Spent PAO lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`

##### Elementary flows

###### acetic acid (`acetic_acid`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement. Speciation is site-specific; do not transfer softwood dryer/plywood press factors. Retain screening results, detection limits and unmeasured organic scope; an undifferentiated VOC total is not added to constituent emissions.

- Selected flow: acetic acid `08a91e70-3ddc-11dd-92c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### carbon dioxide (biogenic) (`co2_bio`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement. Retain biogenic CO2 in LCI even if a greenhouse-gas reporting convention excludes it from a total.

- Selected flow: carbon dioxide (biogenic) `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### carbon dioxide (fossil) (`co2_fossil`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### carbon monoxide (biogenic) (`co_bio`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement.

- Selected flow: carbon monoxide (biogenic) `8a313a02-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### carbon monoxide (fossil) (`co_fossil`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### methane (biogenic) (`ch4_bio`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement.

- Selected flow: methane (biogenic) `fe0acd60-3ddc-11dd-a8e8-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### methane (fossil) (`ch4_fossil`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### nitrous oxide (`n2o`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### Nitrogen oxides (`nox`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement. Record the NOx mass convention and require matching elementary-flow/background convention; unknown NO/NO2-equivalent definition is incomplete. Do not add individually speciated NO/NO2 on top of this reported total.

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### sulfur dioxide (`so2`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### particles (PM2.5) (`pm25`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement. Particle bins are disjoint: <=2.5, >2.5–10 and >10 micrometres; never add PM10 or total PM as another exchange over those bins. Preserve filterable/condensable and test-method compatibility.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### particles (PM2.5 - PM10) (`pm_between`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement. Particle bins are disjoint: <=2.5, >2.5–10 and >10 micrometres; never add PM10 or total PM as another exchange over those bins. Preserve filterable/condensable and test-method compatibility.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### particles (> PM10) (`pm_coarse`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement. Particle bins are disjoint: <=2.5, >2.5–10 and >10 micrometres; never add PM10 or total PM as another exchange over those bins. Preserve filterable/condensable and test-method compatibility.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### water vapour (`vapour`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement. Reconcile wood-water loss, conditioning evaporation and combustion water separately; use cp_balance to avoid counting water removal twice.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_balance`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### formaldehyde (`formaldehyde`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement. Speciation is site-specific; do not transfer softwood dryer/plywood press factors. Retain screening results, detection limits and unmeasured organic scope; an undifferentiated VOC total is not added to constituent emissions.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### methanol (`methanol`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement. Speciation is site-specific; do not transfer softwood dryer/plywood press factors. Retain screening results, detection limits and unmeasured organic scope; an undifferentiated VOC total is not added to constituent emissions.

- Selected flow: methanol `fe0acd60-3ddc-11dd-a935-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### acetaldehyde (`acetaldehyde`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement. Speciation is site-specific; do not transfer softwood dryer/plywood press factors. Retain screening results, detection limits and unmeasured organic scope; an undifferentiated VOC total is not added to constituent emissions.

- Selected flow: acetaldehyde `fe0acd60-3ddc-11dd-a7a5-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

###### phenol (`phenol`)

Conditional: actual outdoor-air release from included conditioning, dryer, boiler, abatement or handling, measured by source and time. Record this exact substance/size and carbon origin; use cp_emissions and sum non-overlapping release points after controls. No database amount, universal factor or zero by lack of measurement. Speciation is site-specific; do not transfer softwood dryer/plywood press factors. Retain screening results, detection limits and unmeasured organic scope; an undifferentiated VOC total is not added to constituent emissions.

- Selected flow: phenol `fe0acd60-3ddc-11dd-aa41-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Collect the actual net row exchange; normalize by same-period accepted net veneer mass. Retain complete physical accounts first.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Compartment: outdoor air / unspecified subcompartment; short-term

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocation_physical | First submeter separable veneer/co-product-specific burdens by equipment/stage. For inseparable common wood-conversion burdens only, use measured oven-dry wood masses at the same physical node and period: a_v=D_v/(D_v+sum(D_c)). This is this method’s reviewable physical-allocation choice; CORRIM supplies a softwood-plywood mass-allocation precedent, not hardwood veneer shares, density or yield. Test physical causality and disclose sensitivity to alternative allocation. | `corrim-western-plywood-2025`; `usda-wood-handbook-2021` |
| allocation_ledgers | Allocation acts on common environmental burdens, not on physical log, delivered veneer, co-product, waste, water or carbon balances. Internally burned residues are not simultaneously sold co-products in the allocation denominator; preserve identical physical transfers. Sale, internal use, waste and stock portions are disjoint. Define economic co-product/waste status and destination; no automatic substitution credit. | `corrim-western-plywood-2025` |
| allocation_specific | If drying serves veneer alone, drying energy/emissions, redrying and final packaging belong wholly to veneer; cores/bark that bypass the dryer receive none of that stage. Split shared boiler/site-service burdens by metered delivered heat/respective service before attributing actual served stages. | `epa-plywood-2002`; `corrim-western-plywood-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

All protocols use the same production period, mill-inlet and delivery states. Retain stage raw totals, stock and transfers before normalization by accepted net delivered veneer mass W; W>0 excludes packaging and rejects. The protocol aggregation basis “per 1 kg reference flow” means this actual ratio, not per sheet/bundle/m3 or oven-dry kg. Where co-products occur, retain complete physical inventories beside allocated environmental burden accounts.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | veneer_mill | veneer_delivery | weighing/acceptance | lot; species; route; thickness; dimensions; grade; wet net mass; packaging tare; delivery moisture; stock; rejects | Weigh accepted net sheets with calibrated scales, paired with cp_balance moisture tests, grade and buyer acceptance; record final delivery gate and reconcile beginning/end stock. | kg; dry-basis fraction | each lot/shift; emissions by representative operating mode | same complete production period including stock, startup/shutdown and redrying | declared mill and included equipment/interfaces | per 1 kg reference flow | calibration, raw records, sample coverage, supplier definition and uncertainty |
| cp_materials | veneer_mill | veneer_logs; tap_water; pao_lubricant | purchase/receipt/meter | lot; species; inlet state; mass; moisture; stock; supplier; water meter; PAO specification | Use calibrated weighing/meters and invoices with supplier/interface records; separate stage uses and recycle loops. Record actual chemicals individually if present. | kg | each lot/shift; emissions by representative operating mode | same complete production period including stock, startup/shutdown and redrying | declared mill and included equipment/interfaces | per 1 kg reference flow | calibration, raw records, sample coverage, supplier definition and uncertainty |
| cp_energy | veneer_mill | electricity_lv; electricity_mv; natural_gas; external_woodchips; diesel; purchased_steam_heat | meter/fuel/enthalpy | stage; technology; meter; MJ/kWh; fuel mass/volume; T/P; moisture; Z; composition; packing; steam/condensate state; supplier definition | Submeter each stage and utility inlet, including redrying/idle operation and abatement. Measure density/state/enthalpy as applicable; reconcile purchased and internally generated heat portions without overlap. | MJ; kg; m3 | each lot/shift; emissions by representative operating mode | same complete production period including stock, startup/shutdown and redrying | declared mill and included equipment/interfaces | per 1 kg reference flow | calibration, raw records, sample coverage, supplier definition and uncertainty |
| cp_packaging | veneer_mill | pe_film; pp_strap | weighing/issue | component; specification; mass issued; stock; returns; net used mass; accepted output | Weigh each actual component and reconcile issue/return/stock, excluding all packaging from cp_output net veneer mass. | kg | each lot/shift; emissions by representative operating mode | same complete production period including stock, startup/shutdown and redrying | declared mill and included equipment/interfaces | per 1 kg reference flow | calibration, raw records, sample coverage, supplier definition and uncertainty |
| cp_transport | veneer_mill | inbound_truck | route/activity | log mass; route; loaded km; empty return; vehicle/fuel/load; upstream transport inclusion | Use weighbridge, delivery and route logs; derive actual freight work and check supply dataset gates. Yard handling diesel is distinct from included road transport service. | t km | each lot/shift; emissions by representative operating mode | same complete production period including stock, startup/shutdown and redrying | declared mill and included equipment/interfaces | per 1 kg reference flow | calibration, raw records, sample coverage, supplier definition and uncertainty |
| cp_residues | veneer_mill | bark; cores; offcuts; chips; sawdust | weighing/dispatch/balance | stage; species; wet mass; dry mass; moisture; volume; packing; sold/internal/waste/stock split; value; destination | Weigh each residue stream at its source and each sale/transfer; use measured moisture and volume convention. Reconcile both ends of internal transfers before burden allocation. | kg; m3 | each lot/shift; emissions by representative operating mode | same complete production period including stock, startup/shutdown and redrying | declared mill and included equipment/interfaces | per 1 kg reference flow | calibration, raw records, sample coverage, supplier definition and uncertainty |
| cp_wastes | veneer_mill | conditioning_wastewater; bottom_ash; fly_ash; spent_pao | meter/test/waste-transfer | waste species; quantity; density; solids; residual carbon; contamination; handler; treatment route | Meter/weigh each waste independently and retain treatment manifests and wastewater tests. Distinguish off-site treatment from actual on-site discharge. | kg | each lot/shift; emissions by representative operating mode | same complete production period including stock, startup/shutdown and redrying | declared mill and included equipment/interfaces | per 1 kg reference flow | calibration, raw records, sample coverage, supplier definition and uncertainty |
| cp_emissions | veneer_mill | outdoor air substance/size rows | stack/fugitive sampling | source; stage; operating time; flow rate; concentration; species; fossil/biogenic share; particle bin; sampling train; controls; detection limit; test uncertainty | Use source-resolved accredited or validated stack/fugitive testing representative of operating modes, startup and abatement. Specify dry/wet gas and standard state; preserve unmeasured/BDL scope and uncertain speciation. Do not scale softwood surveys to hardwood. | kg | each lot/shift; emissions by representative operating mode | same complete production period including stock, startup/shutdown and redrying | declared mill and included equipment/interfaces | per 1 kg reference flow | calibration, raw records, sample coverage, supplier definition and uncertainty |
| cp_balance | veneer_mill | all wood/water/carbon states; vapour | paired moisture and balance | stage; species; sample location; wet mass; oven-dry constant mass; moisture; water/steam; condensate; fuel C; ash C; veneer C; transfers; stock; uncertainty | Immediately weigh representative veneer samples spanning sheet locations/lots; oven-dry to constant mass at 101–105 °C using validated laboratory protocol and weighing intervals. Calibrate electrical moisture instruments by species against oven-dry tests. Measure retained wood/fuel/ash carbon; keep wood evaporation separate from combustion-generated water. | kg; fraction | each lot/shift; emissions by representative operating mode | same complete production period including stock, startup/shutdown and redrying | declared mill and included equipment/interfaces | per 1 kg reference flow | calibration, raw records, sample coverage, supplier definition and uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalization | all inventory rows | q_i = sum(Q_i)/W; Q_i is the actual row exchange in the same period; W is accepted net delivered veneer kg after packaging and stock correction. Reference output is fixed at 1 kg. Preserve actual physical quantities separately from burden allocation. | Q_i; W; cp_output; linked row protocol | q_i |  |
| moisture_balance | wood, residues and fuel | u=(m_wet−m_dry)/m_dry; m_dry=m_wet/(1+u); m_water=m_wet−m_dry. Measure u for each state; divide percentages by 100 first. Reconcile dry wood in/out and stock change; water ledger separates conditioning uptake, evaporation and return. | m_wet; m_dry; cp_balance; cp_residues | dry wood and water accounts | `usda-wood-handbook-2021` |
| wood_volume | same-state veneer and chips | Use only measured same-state net volume V, mass m and moisture: rho=m/V; veneer V=sum(area×thickness), chip V requires solid/bulk and packing convention. Different states cannot share a density. | V; m; cp_balance; cp_residues | state-specific conversion | `usda-wood-handbook-2021` |
| emission_load | each air emission row | For each substance L=sum(c×gas_flow×operating_time)+measured fugitive release, after compatible concentration/gas-state unit conversion. Separate combustion carbon origins from actual fuel-carbon accounts; never infer zero from missing measurement. Retain actual releases before allocation beside allocated loads. | c; gas_flow; operating_time; cp_emissions; cp_balance | species mass load | `epa-plywood-2002`; `epa-wood-boiler-2022` |
| pm_partition | pm25, pm_between, pm_coarse | If one comparable test supplies cumulative PM2.5, PM10 and total PM: fine=PM2.5, middle=PM10−PM2.5, coarse=total PM−PM10. All must be nonnegative with identical test/filterable/condensable boundaries. If incompatible or unknown, retain the gap without invented size fractions. | matched test totals; cp_emissions | disjoint PM masses | `epa-plywood-2002` |
| heat_balance | purchased_steam_heat | Q_net=m_s×h_s−m_return×h_return−undelivered losses within the declared boundary; supplier definition, boundary and enthalpy states must correspond. This does not turn a gross-calorific property into net delivered heat or add site fuel for the same portion. | steam and return states; supplier definition; cp_energy | compatible net delivered heat |  |
| physical_carbon | all wood and combustion accounts | Multiply state dry mass by measured carbon fraction; reconcile inlet, delivery, sales, internal fuel, ash residual carbon, CO2/CO/CH4 carbon and stock; equal internal transfers cancel. Convert actual CO2 carbon to CO2 mass by stoichiometric 44/12, using each other substance’s own molecular mass. Unmeasured carbon/organics do not establish closure; report residual and uncertainty. | measured carbon; masses; cp_balance; cp_emissions | physical carbon account | `epa-wood-boiler-2022` |
| burden_allocation | common burden ledger | B_v=B_common×a_v+B_veneer_specific; a_v uses the stated measured dry masses at the same node; do not mechanically multiply physical q_i by a_v. Retain stage selection, co-product shares, pre/post allocation burdens and sensitivity. | dry masses; stage burdens; cp_residues; cp_energy | allocated veneer burdens | `corrim-western-plywood-2025` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | Check substance/state/type/compartment/reference property/unit for each row; retain blank UUIDs and unknown quantity compatibility explicitly. | supplier and direct identity records |
| dq_representative | veneer_mill | Cover species, route, grade, season, redrying, downtime, fuels and abatement; regional softwood surveys are not hardwood industry parameters. | stratified raw records and uncertainty |
| dq_balance | physical ledgers | Reconcile stage dry wood, water, carbon and internal transfers, reporting residual; pre/post allocation accounts traceable, without invented universal tolerance. | calibrations; balance residuals; buyer tolerances |
| dq_completeness | all flows | Add and verify actual additional atomic materials/water/fuels/wastes/emissions; disclose unmeasured scope, detection limits, equipment/infrastructure exclusions and background differences. | complete site flow register and coverage review |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validation_reference | Exactly one product output matches veneer_delivery/reference UUID; net amount is 1 kg, all inventory/collection denominators agree, and moisture/species/thickness/delivery gate are explicit. No second reference output or species UUID selector. |  |
| validation_routes | Veneer must be adhesive-free/unbacked; document actual conditioning, knife cutting, clipping, drying, redrying, cooling, matching and packing. No duplicate heat portions, upstream log freight or internal fuel transfers. Thin sawn sheets or bonded products cannot pass this gate. | `epa-plywood-2002`; `usda-wood-handbook-2021` |
| validation_balance | Check dry wood/water/carbon, disjoint co-product destinations and stock; allocation does not shrink physical quantities. PM bins do not overlap; VOC constituents are not added to their total; biogenic CO2 remains in LCI; captured material is not also emitted. | `epa-plywood-2002`; `epa-wood-boiler-2022` |
| validation_gaps | Blank UUIDs, unverified supplier volume/steam enthalpy/NOx convention, unmeasured physical flows/emissions, unknown moisture or allocation causality remain explicitly incomplete, never completed/zero. Method measurement-declaration checks do not establish a complete site package or scientific approval. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground log-to-unbonded-dried-veneer production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Input to later veneering/core production only when species, knife-cut route, delivery state and measurement basis match; disclose review and gaps |
| excluded_use | Complete structural-panel functional comparisons; thin sawn sheets; automatic coniferous/tropical substitution; plywood/LVL products; green sale; generic factors without basis |
| required_metadata | All reference qualifiers; period; equipment/heat sources; sampling/moisture; supply gates; stock/physical balances; pre/post allocation ledgers; method sources |
| required_quality_disclosure | Measured/calculated distinction; uncertainty, unmeasured scope, detection limits, blank UUIDs, supplier-basis compatibility, geography/species representativeness and independent-review state |
| update_trigger | Changes to species, cutting/drying/heat supply, delivery moisture/grade/gate; added adhesive/backing; new flow identity/evidence; changed basis/allocation/emissions |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3 | official_guidance | UN Statistics Division, CPC Ver.3.0, 30 June 2025 structure; subclasses 31511–31513. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Leaf scope includes knife-cut and longitudinally sawn thin sheets; species classification does not establish separate methodology |
| usda-wood-handbook-2021 | handbook | USDA Forest Products Laboratory, Wood handbook—wood as an engineering material, FPL-GTR-282 (2021), printed 10–3 to 10–4 and 13–1 to 13–2; PDF pp.255–256,323–324. https://www.govinfo.gov/content/pkg/GOVPUB-A13-PURL-gpo158673/pdf/GOVPUB-A13-PURL-gpo158673.pdf | Knife/saw distinctions, pre-bonding veneer, wood moisture and constant-mass oven drying; no generic yield/density/drying target adoption |
| epa-plywood-2002 | official_guidance | US EPA, AP-42 §10.5 Plywood Manufacturing (January 2002), printed 10.5–1 to 10.5–4, Figure10.5-1. https://www.epa.gov/sites/default/files/2020-10/documents/c10s05.pdf | Conditioning, peeling/slicing, clipping, drying/redrying, composing/bonding gates and dryer/combustion emission distinction; no geography/species factor adoption |
| epa-wood-boiler-2022 | official_guidance | US EPA, AP-42 §1.6 Wood Residue Combustion in Boilers (March 2022), pp.1.6–1 to 1.6–3. https://www.epa.gov/system/files/documents/2022-03/c1s6_final.pdf | Actual wood-fuel boiler scope, PM, combustion gases and carbon origin; greenhouse-gas reporting does not delete biogenic LCI CO2; no efficiency/carbon-conversion/emission factor transfer |
| corrim-western-plywood-2025 | literature | CORRIM, Life Cycle Assessment of Softwood Plywood Production – Western Region, edited July22,2025; 2022/2023 primary survey; PDF p.16, §3.2.6. https://corrim.org/wp-content/uploads/2025/07/LCA-Report-Western-Plywood-Report-Final-07222025.pdf | Mass-allocation and dedicated packaging method precedent; US Western softwood-plywood survey is not quantitative hardwood/tropical-veneer evidence |
