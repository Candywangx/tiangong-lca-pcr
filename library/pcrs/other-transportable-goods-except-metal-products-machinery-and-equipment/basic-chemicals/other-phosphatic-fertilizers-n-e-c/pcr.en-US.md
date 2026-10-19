---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-phosphatic-fertilizers-n-e-c
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Unfortified electric-fused calcium magnesium phosphate powder

## 1. Scope and Applicability

This method covers one physical product and route: virgin phosphate rock and serpentine flux, with separately metered quartz correction if required, electric-furnace melting, rapid water quench, dewatering, drying, milling, screening and release of unfortified glassy calcium-magnesium phosphate powder. The fusion/quench structure is supported by IFA Chapter 3.2.1.2 and Zennoh Figures 1–2; Yoorin confirms a marketed electrofusion fertilizer family. The product is a variable-composition phosphate-silicate glass matrix, not a single pure molecular salt or a dry physical mixture of pure oxides. References establish method feasibility, not a surveyed recipe, audited plant or current SKU. (`ifa-fertilizer-china-2009`; `zennoh-fused-phosphate`; `yoorin-phosphate-products`)

Exclude acidulated single/triple superphosphate, ammonium phosphates, N/P/K blends, untreated ground phosphate rock, basic steelmaking slag, phosphorus-smelting by-product slag, sludge-ash or other secondary-feed fusion, blast/cyclone/open-hearth primary fusion, added sulfur/boron/manganese or other nutrient fortification, and binder-granulated or formulated liquid products. These changes alter feed histories, gas/solid balances or formulation and require a separately assessed method. Powder variants with actual particle-size and solubility specifications can use this method; no agronomic dose or crop-yield equivalence is asserted.

The foreground includes actual receipt, burden preparation, electrical fusion, water circuits, finishing and pollution controls in one plant unit. Natural gas in finishing, diesel handling, hydrated-lime treatment, replaceable electrode/lining and individual packaging components are conditional measured exchanges, not mandatory recipes. Additional installed fuels, chemicals, packaging, transport modes or pollutants require their own atomic rows before a complete dataset is claimed. No steam/heat purchase is assumed: if supplied, collect pressure/state/return, net heat balance and provider reference convention in a separate row and utility unit. Numeric historical temperatures, energy use, ore grades, market guarantees, yields and emission limits are not defaults. (`jrc-lvic-aaf-2007`; `jrc-cww-2016`)

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.other-phosphatic-fertilizers-n-e-c` |
| classification_refs | CPC 3.0 `34629`, proposed `narrower`; the leaf includes other phosphatic products and does not define this method |
| covered_products | Unfortified electric-fused virgin-rock/serpentine calcium-magnesium phosphate-silicate fertilizer powder, with optional measured quartz correction |
| excluded_products | Acidulated fertilizers; ammonium phosphates; N/P/K or nutrient-enriched blends; raw rock powder; metallurgical slags; secondary-feed fusion; fuel-fired primary fusion; binder granulation; solutions |
| representative_product | One actual accepted unfortified powder SKU with measured glass matrix, moisture, size distribution and nutrient assay; no standard recipe |
| production_route | Receipt and burden preparation → electric fusion → water quench/dewatering → drying/milling/screening → release/actual packaging; controls included |
| market_state | Factory-gate glassy powder at measured commercial moisture; product mass excludes packaging tare, not moisture actually included in supply |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of the specified unfortified fused phosphate fertilizer powder |
| How much | 1 kg net accepted commercial product |
| How well | Actual SKU assay and test methods for total/extractable P expressed as P2O5, Ca/Mg/Si basis, fluoride/trace contaminants, moisture, glass matrix, fineness and release acceptance |
| How long or cycle | One factory-gate release during the declared representative campaign; no crop service or lifetime claim |
| reference_flow_link | finished_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Phosphate fertiliser `9c196b01-6aad-4252-a6e8-f853853a830c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual SKU and batch; virgin phosphate-rock and serpentine origin/mineralogy; electric primary fusion; no added nutrient/binder or secondary-feed route; glass matrix; moisture and commercial mass basis; actual P2O5 assays and extraction method; Ca/Mg/Si/F/trace-element basis; particle size; product acceptance; packaging tare; plant/campaign; utility supplier conventions; water loops/outfalls; coproduct/waste destinations; allocation and model gate |

All qualifiers must be present in the concrete data package. The broad reference identity contains this physically defined subset and sets neither formulation nor nutrient concentration. It is not kg P, kg P2O5, pure calcium phosphate or another fertilizer route. Amount 1 kg is the normalization definition, not proof of field nutrient equivalence. Exactly one final product output uses this reference identity; stage handovers remain internal measurements.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| measure_reference | finished_product | Mass | kg | Weigh released commercial product net of package tare using calibrated scales; reconcile accepted lots and opening/closing product stocks for one campaign. No per-bag denominator. |
| measure_material | ore; serpentine; quartz; lime; electrode; refractory; oil; diesel; film; thread; waste outputs | Mass | kg | Record actual external mass, state, moisture and composition; distinguish wet parent mass, dry/active component and carrier water in explanatory ledgers without adding them twice. |
| measure_electricity | electricity | Net calorific value | MJ | The verified electric-flow property is named Net calorific value with an energy basis. Convert metered kWh to MJ by 3.6; collect actual supplier voltage/geography/mix/delivery and loss boundary separately. |
| measure_gas | gas | Volume | m3 | Meter and convert only to the provider-compatible gas volume at measured T/P, wet/dry composition and compressibility. Native secondary mass values do not establish density. Unknown conventions prevent a complete link. |
| measure_sacks | bag | Number of items | Item(s) | Count actual compatible sacks and defects; the flow is limited to 25 kg-format sacks. Separately weigh tare/material and measured fill for the mass ledger; never assume 25 kg fill or a generic sack mass. |
| measure_road | transport | Goods transport (mass*distance) | t*km | Sum actual loaded shipment tonnes times route kilometres, with provider load/backhaul boundaries; avoid fuel/transport or supplier-leg duplication. |
| measure_water_out | water_fresh | Volume | m3 | Use matched outfall volume; convert to water mass only with measured/traceable actual density/state and composition, not by confusing purchased water with emitted liquid. |
| measure_species | elementary outputs except water_fresh | Mass | kg | Match actual species, phase, origin and medium; retain dry/wet gas T/P/O2 reference conditions and compatible sampling flow. Resolve lump indicators before claiming species quantities. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Delivered virgin phosphate rock, serpentine and measured auxiliary supplies; supplying datasets cover extraction/beneficiation and delivery actually declared |
| starting_condition_role | Foreground process entry; not an assertion of zero upstream burden |
| product_classification_scope | Physical unfortified electric-fused powder subset; CPC context alone does not confer applicability |
| recursive_input_rule | Internal quench glass, collected dust and off-spec remelt are internal links measured at equal sending/receiving mass, not new purchased reference products |
| upstream_dataset_requirement | Compatible actual material and utility providers, verified quantity/state bases and transport; missing suppliers remain disclosed gaps |
| disclosure | Plant/stages/campaign; net release; feed and commercial moisture; utility modes; controls; recycle stocks; direct/sewer gates; residual destinations; allocation and exclusions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | fused_powder_unit | Include all actual receipt/crushing/burdening, electric furnace, quench/dewatering, drying/milling/screening, storage/dispatch, maintenance and air/water controls inside the chosen gate; stage meters remain separately retained. | `ifa-fertilizer-china-2009`; `zennoh-fused-phosphate` |
| boundary_supplies | external inputs | Connect actual mining/beneficiation, electrode/lining manufacture, utility generation and incoming delivery upstream; record shared-site subdivisions and each provider boundary. | `jrc-lvic-aaf-2007`; `jrc-cww-2016` |
| boundary_returns | physical links | Preserve equal internal transfer amounts and stocks for melt/quench glass, dust, rejected powder, water and recovered heat; internal circulation is not another purchased/emitted exchange or automatic avoided-product credit. | `jrc-lvic-aaf-2007` |
| boundary_outlets | environmental gates | Count collected dust/sludge as real external residuals only when leaving the unit; count air releases after control. For each liquid portion choose external treatment transfer or actual environmental outfall, retaining receiver, carrier water and pollutant load once. | `jrc-cww-2016` |
| boundary_downstream | supplied product | Field application, soil reactions, crop response, downstream nutrient blending and binder granulation are outside this production dataset. Producer promotional carbon or crop benefits do not establish credits. | `zennoh-fused-phosphate`; `yoorin-phosphate-products` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fused_powder_unit | Electric-fused phosphate powder production and actual controls | required | Declared virgin-rock/serpentine electric route; finishing utilities and package components conditional on actual equipment/supply | foreground production | finished_product; 1 kg net released powder |

Receipt/burden preparation → electric fusion → water quench → dewatering → drying → milling/screening → release/dispatch. Furnace, dryer, handling and mills feed their actual gas controls; liquid loops feed their actual collection/recycle/treatment/outfall. Retain separate stage mass, water, P/Ca/Mg/Si/F, carbon and heat ledgers. Unmodified glass moving between these stages is aggregated into this one foreground unit so the same material is not a second product output. (`ifa-fertilizer-china-2009`; `jrc-lvic-aaf-2007`)

### Process: Electric-fused powder plant (`fused_powder_unit`)

#### Inputs

##### Product flows

###### Phosphate-rock feed (`ore`)

Virgin phosphate rock delivered for the declared furnace burden. Collect mineralogy, moisture, total and extractable P, Ca/Mg/Si, fluoride, carbonate carbon and trace-element assays; actual beneficiation and supplier geography belong in the upstream dataset. No ore grade or burden proportion is assumed.

- Selected flow: Phosphate Ore `f71b42aa-e220-4371-8fa4-9aa8946a6262`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifa-fertilizer-china-2009`; `zennoh-fused-phosphate`

###### Serpentine flux (`serpentine`)

One actual serpentine rock flux, not isolated chrysotile asbestos or a manufactured serpentine electrical element. Require mineralogical and chemical acceptance, fibrous-mineral screening, moisture and measured charge mass.

- Selected flow: Serpentine rock flux
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifa-fertilizer-china-2009`; `zennoh-fused-phosphate`

###### Quartz corrective feed (`quartz`)

Conditional separate quartz addition to the actual burden. Record particle size, composition, measured mass and supplier; it is not silica glass or a fixed substitute for serpentine.

- Selected flow: Quartz `ddee14c5-2a28-4224-9b84-68dc5956972f`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `ifa-fertilizer-china-2009`; `zennoh-fused-phosphate`

###### Purchased alternating-current electricity (`electricity`)

Meter the electric furnace, handling, quench pumps, dryer, mill, screening, dust collection, effluent treatment and packaging separately before summing the plant boundary. The broad use-point flow has no voltage, country, mix or loss default; provider compatibility must be demonstrated.

- Selected flow: Alternating current `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Natural gas for finishing heat (`gas`)

Conditional pipeline gaseous natural gas burned in the actual dryer or auxiliary burner, not the primary electric-fusion heat or purchased steam. Record volume at declared temperature, pressure, moisture and composition, compressibility, supplier volume convention and metered stage duty. Unknown conditions leave the background link incomplete; the record secondary mass coefficient is not a density.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Purchased makeup water (`water`)

Net external industrial water for quenching, cooling, scrubbing, cleaning and treatment; meter each header. Internal circulation is a physical ledger, not another external purchase. Separate reagent-carried water. Self-abstraction requires its own verified resource row and pumping/treatment boundary.

- Selected flow: Water for industrial use `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Hydrated lime reagent (`lime`)

Conditional industrial hydrated-lime solid used for measured scrubber/effluent neutralisation or precipitation. Require Ca(OH)2 assay and dosing; bought slurry requires separate active-solid and carrier-water ledgers, never a pure-solid UUID for the entire slurry. No treatment recipe is imposed.

- Selected flow: hydrated lime `0ef11ca4-62b6-4a66-b5d9-76d6539ec86e`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Consumed graphite electrode (`electrode`)

For an electrode-consuming electric furnace, measure graphite installed, remaining stocks, withdrawn electrode and consumed mass over the same campaign. Distinguish oxidation to gas from physically removed stubs; do not assume every input kilogram becomes CO2.

- Selected flow: Electrode consumption `c2c70bef-5b23-4f7c-8fc8-ae4b5a844396`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Sintered magnesia lining replacement (`refractory`)

Conditional fired magnesite bricks of the actual sintered MgO lining; verify grade, composition and supplier route. Assign measured replacements over the served production campaign, retaining wear into product and removed solids separately. Other linings need their own atomic identities.

- Selected flow: fired magnesite brick `251839cf-ed91-4e67-b17c-3eb546eecd40`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Mineral-oil-based formulated lubricating oil (`oil`)

Conditional actual maintenance lubricant including its declared additives, grade and contamination control. Pure mineral oil and PAO-specific records do not establish the identity of the complete formulated oil. Record net consumption and stock change.

- Selected flow: Mineral-oil-based formulated lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maintenance`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Diesel for on-site handling (`diesel`)

Conditional diesel burned by on-site loaders or handling vehicles. Use actual fuel mass; if recorded in litres, measure supplier/batch density and temperature before conversion. External freight already represented by a transport dataset is not duplicated here.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Woven polypropylene sacks (`bag`)

Conditional 25 kg-format PP sacks matching the flow-specific packaging format, counted as Item(s); this is not a 25 kg reference product or a default fill mass. Weigh actual sack material for the physical mass ledger. The bag specification must identify whether liner and sewing thread are already included. Other sack sizes require a compatible identity.

- Selected flow: Woven polypropylene bag `9bfaad07-355e-467a-9bab-f95094e7c869`
- Flow property / unit: Number of items / Item(s)
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Separate polyethylene liner (`film`)

Conditional separate actual PE film liner, not PET or polymer granulate. Count once: omit a separate purchased liner if already included in the sack supply. Verify polymer/CAS, grade, thickness, recycled content and mass.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Separate polyester sewing thread (`thread`)

Conditional purchased polyester sewing thread measured separately only when not included in the sack supplier boundary. Declare polymer, construction, finish and measured mass; filament, cloth and yarn records that exclude sewing thread cannot stand in for it.

- Selected flow: Separate polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Incoming road freight service (`transport`)

Actual road legs for ore, flux and other supplies, in t*km, excluding legs already included in the supplying dataset. Collect shipped mass, route distance, vehicle/load/backhaul and supplier scope. Add other real transport modes separately; this is a service, not vehicle manufacture.

- Selected flow: Freight Truck `d55f1329-cd61-44c0-8000-9367d38d5634`
- Flow property / unit: Goods transport (mass*distance) / t*km
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released unfortified fused fertilizer powder (`finished_product`)

The sole quantitative reference: net accepted glassy phosphate fertilizer powder from electric fusion of virgin phosphate rock with serpentine, with conditional quartz correction, water quench, dewatering, drying, milling and screening. No added N/K/S/micronutrient fortification, binder granulation, secondary slag or sludge-ash feed is covered. Packaging tare is excluded.

- Selected flow: Phosphate fertiliser `9c196b01-6aad-4252-a6e8-f853853a830c`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_product`
- Sources: `ifa-fertilizer-china-2009`; `zennoh-fused-phosphate`

##### Waste flows

###### Collected phosphate mineral dust sent off-site (`dust_waste`)

Measure one physically collected mineral-dust waste sent to a declared receiver, with origin, composition, moisture and hazard classification. Dust returned internally is retained only in the internal ledger; feed-grade dust and airborne emissions are different exchanges.

- Selected flow: Collected phosphate mineral dust sent off-site
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Dewatered inorganic quench/scrubber-treatment sludge (`sludge`)

One physically combined inorganic treatment-sludge stream only if actually mixed. Weigh wet output, dry solids, fluoride/phosphate/metals and receiver acceptance. Keep separate unmixed sludge origins as separate dataset rows; biological or oil sludge is not this flow.

- Selected flow: Dewatered inorganic quench/scrubber-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Spent sintered magnesia lining (`refractory_waste`)

Conditional removed MgO-brick lining with actual contamination and receiver. Reconcile removed mass, wear into product, dust and remaining lining; aluminium-process refractories or magnesium smelting slag are not interchangeable.

- Selected flow: Spent sintered magnesia lining
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Used lubricating oil (`oil_waste`)

Actual used lubricating oil handed to a declared receiver; record contamination, water, mass and treatment. Do not borrow another record fixed oil/water percentages or assume incineration/recycling.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Quench/scrubber wastewater transferred for external treatment (`effluent`)

Conditional liquid wastewater transferred to an external treatment operator, in measured wet mass and declared composition. It is an alternative gate to the direct-outfall water/pollutant rows for the same liquid; emissions subsequently released by the receiver belong in its treatment dataset.

- Selected flow: Quench/scrubber wastewater transferred for external treatment
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Rejected fused phosphate glass sent off-site (`offspec`)

Conditional discarded fused fertilizer glass, with measured composition, moisture and receiver status. Internal remelt is an internal return, not waste leaving the gate or a second reference product. Float-glass cullet is a different material.

- Selected flow: Rejected fused phosphate glass sent off-site
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Withdrawn graphite electrode stubs (`spent_electrode`)

Conditional physically removed electrode graphite, with contamination and receiver. Separate it from oxidised carbon and internal electrode stocks. Battery-recycling graphite does not match this origin.

- Selected flow: Withdrawn graphite electrode stubs
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

##### Elementary flows

###### Fine particles to outdoor air (`pm25`)

PM2.5 actually crossing the site boundary from feed handling, furnace, dryer, mill, screening or packing after installed controls. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Middle-size particles to outdoor air (`pm10`)

Only the disjoint PM2.5–PM10 mass, not total PM10 added to PM2.5. Retain comparable size-resolved tests. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Large particles to outdoor air (`pmover10`)

Only particles above PM10 crossing the boundary; settled or collected material and internal returns are not this air exchange. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Hydrogen fluoride to outdoor air (`hf`)

Conditional speciated HF from mineral-fusion gas after controls. Total fluoride reported as F cannot be inserted as kg HF without supported speciation and conversion. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: hydrogen fluoride `08a91e70-3ddc-11dd-9804-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Silicon tetrafluoride to outdoor air (`sif4`)

Conditional SiF4 measured at the environmental outlet; avoid counting the same fluoride again as HF or total fluoride. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: silicium tetrafluoride `fe0acd60-3ddc-11dd-a706-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Fossil-origin carbon dioxide to outdoor air (`co2`)

Fossil gas, diesel and petrochemical/coal-derived electrode carbon oxidised to CO2, measured or calculated from a collected carbon balance. Geological carbonate carbon is a separate ledger and row. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Geogenic carbonate carbon dioxide to outdoor air (`geogenic_co2`)

Conditional mineral-carbonate decomposition CO2 from actual feed assay and carbon/species balance; no fossil-fuel or biogenic correction flow is assumed to identify it. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: Geogenic carbonate carbon dioxide to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Fossil-origin carbon monoxide to outdoor air (`co`)

Measured fossil-origin CO; distinguish electrode/gas oxidation from carbonate carbon and reconcile with the carbon ledger. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Nitrogen monoxide to outdoor air (`no`)

Actual NO after furnace/finishing/handling controls. Aggregate NOx as NO2-equivalent alone does not prove the NO mass; collect speciation or disclose the missing split. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Nitrogen dioxide to outdoor air (`no2`)

Actual NO2 species mass, not NOx total substituted for it. Do not duplicate the same NOx load in both NO and NO2; N2O is separate. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Sulfur dioxide to outdoor air (`so2`)

Conditional SO2 from measured feed/fuel sulfur and outlet monitoring; no sulfur-oxide family approximation or universal sulfur-to-SO2 conversion is imposed. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Fossil methane to outdoor air (`methane`)

Conditional unburned/leaked fossil methane from actual gas or fuel handling; not a delayed-emission correction flow. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Nitrous oxide to outdoor air (`n2o`)

Conditional measured N2O from installed combustion or other identified source, outside the NO/NO2 load. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Water vapour to outdoor air (`water_air`)

Actual net vapour from quench, drying and cooling; distinguish moisture removed from product, reagent water, combustion water and measured inlet humidity. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Cadmium to outdoor air (`cadmium_air`)

Conditional relevant Cd load from mineral/feed characterization and outlet testing; report elemental-Cd mass and disjoint gas/particle speciation, not cadmium distearate. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: cadmium `08a91e70-3ddc-11dd-9674-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Mercury to outdoor air (`mercury_air`)

Conditional relevant Hg load; species and phase must support the selected elemental-Hg representation. Methylmercury compounds are not substitutes. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: mercury `fe0acd60-3ddc-11dd-a8c4-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Arsenic to outdoor air (`arsenic_air`)

Conditional relevant As load from feed/outlet characterization on a declared elemental-As basis; extend separately for measured compounds incompatible with this representation. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: arsenic `08a91e70-3ddc-11dd-91d7-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Lead to outdoor air (`lead_air`)

Conditional relevant Pb load on an elemental-Pb basis; tetraethyllead is not an elemental-lead match. This row has no default amount and uses outdoor air, subcompartment unspecified.

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Liquid water to freshwater (`water_fresh`)

Only liquid volume actually released to a demonstrated freshwater receiving body after on-site treatment. It is an emission, not abstraction or purchased water. These direct releases and an off-site wastewater transfer cannot both represent the same liquid. Quantities are collected only where applicable.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume / m3
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Fluoride ion to freshwater (`fluoride`)

Actual dissolved fluoride-ion mass on an F basis at the direct outfall. Elemental F2, aqueous HF and fluorosilicate are not automatic matches. These direct releases and an off-site wastewater transfer cannot both represent the same liquid. Quantities are collected only where applicable.

- Selected flow: fluoride `08a91e70-3ddc-11dd-93fb-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Phosphate to freshwater (`phosphate`)

Actual phosphate-species load expressed as PO4 mass. Collect measured speciation and distinguish dissolved/particulate/other P; total-P assay alone cannot prove all P is phosphate. These direct releases and an off-site wastewater transfer cannot both represent the same liquid. Quantities are collected only where applicable.

- Selected flow: phosphate `08a91e70-3ddc-11dd-9787-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

###### Suspended inorganic solids to freshwater (`tss`)

Actual undissolved solid mass at the direct outfall; dissolved solids and a water-unspecified identity do not establish the requested freshwater suspended-solid match. These direct releases and an off-site wastewater transfer cannot both represent the same liquid. Quantities are collected only where applicable.

- Selected flow: Suspended inorganic solids to freshwater
- Flow property / unit: Mass / kg
- Amount rule: Collect the actual applicable campaign exchange in the declared unit; divide by accepted net commercial powder mass Q from cp_product for the same campaign. Unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `jrc-cww-2016`; `jrc-lvic-aaf-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | all physical streams | Preserve unallocated actual product, residue, water, gas and stock quantities and equal internal link endpoints. Product and co-product physical outputs are never multiplied by an allocation share. | `jrc-lvic-aaf-2007`; `jrc-cww-2016` |
| allocation_single | normal single-product unit | With one commercial fertilizer output, assign its attributable measured production and controls to that product; do not create fictional slag, nutrient coproducts or ash credits. Returned dust/glass/water has no external product function by itself. | `epa-lca-principles-2006` |
| allocation_multi | actual additional valuable output | Establish actual product/waste status, specification, receiver and function. If a commercial coproduct exists, add its separate measured physical output before modelling: first use subdivision or justified system expansion; otherwise a demonstrated causal physical relationship, or justified matched-period economic relation where physical causality is unavailable. No automatic wet-mass/equal share or avoided-product credit. | `epa-lca-principles-2006` |
| allocation_ledger | product burden reporting | Keep direct assignments, shared pools, factors summing to unity and sensitivity in a burden ledger separate from physical balances. Waste treatment stays attributed to its generating route; any credit requires explicit system/receiver evidence and absence of duplicate credit. | `epa-lca-principles-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | fused_powder_unit | net released product | measured_record | batch/SKU; gross/tare/net; accepted/rejected lots; stocks; commercial water; P2O5 total and declared extractant-soluble fraction; Ca/Mg/Si/F; trace elements; glass matrix; fineness; acceptance | Calibrated dispatch scales and lot-representative laboratory assays with specified extraction/test methods; reconcile stocks and actual supply state, retain unallocated release mass Q. | kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |
| cp_material | fused_powder_unit | individual feeds and treatment reagent | measured_record | row/lot; supplier; received/charged/stocks; wet/dry/active fractions; mineral phases; P/Ca/Mg/Si/F; carbonate carbon; trace metals; particle size; fibrous minerals; receiver | Calibrated weights and representative feed/reagent assays, not literature burden ratios. Track structural water released from minerals separately from free feed moisture and purchased carrier water. | kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |
| cp_energy | fused_powder_unit | electricity and on-site diesel | measured_record | stage meter/time; kWh; delivered voltage; actual supply mix/geography; loss boundary; load; diesel mass; volume/density/T; shared-service cause | Integrate calibrated stage meters; weigh actual diesel or convert measured litres using batch-compatible density. Assign shared services from measured drivers and retain stage measurements. | MJ; kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |
| cp_gas | fused_powder_unit | finishing pipeline gas | measured_record | metered volume; T/P absolute; humidity; gas composition; compressibility; supplier reference T/P/wet-dry; actual NCV/GCV; dryer/auxiliary duty | Meter actual headers and record volume-reference conventions and traceable equation of state. Measure heat duty and fuel quality separately; an MJ unit or secondary mass coefficient is not a delivery-basis proof. | m3; MJ | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |
| cp_water | fused_powder_unit | external makeup and internal water ledger | measured_record | supply header; makeup; internal quench/cooling/scrubber circulation; water in feeds/reagents/product/sludge; structural water; evaporation; blowdown; density/T; condensate; stock changes | Meter net external supply and all actual loop exits. Record origin and treatment in suppliers; structural/combustion water is a formation term, not another bought-water exchange. | kg; m3 | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |
| cp_maintenance | fused_powder_unit | electrode lining and formulated lubricant | measured_record | actual grade/composition; installed/withdrawn/stocks; service campaign and output; graphite fossil carbon; lining wear; lubricant additives; receiver | Weigh actual replacements, withdrawals and stock changes over the served campaign; separate oxidation, wear into product and removed residuals; record the complete lubricant specification. | kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |
| cp_pack | fused_powder_unit | each actual sack liner and sewing thread | measured_record | supplier included components; sack format; Item(s); damaged units; actual fill/tare; PP/PE/PET grade and finish; wet/material mass; actual discarded material; reuse/receiver | Count bags and weigh representative tare/components and actual fill, separating each purchased component once. Reconcile damaged sacks, liner and thread cuttings in additional atomic waste rows where produced. | Item(s); kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |
| cp_transport | fused_powder_unit | incoming road legs | measured_record | shipment tonnes; actual route kilometres; vehicle type; payload; backhaul; mode; supplying dataset transport boundary | Actual weighbridge/invoices and route records; sum tonnes × kilometres for each road leg once and demonstrate compatibility with the service provider. Other actual modes require separately defined rows. | t*km | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |
| cp_waste | fused_powder_unit | each physically distinct external residual | measured_record | stream origin; wet mass; dry solids; water; F/P/C/metals; oil/graphite/lining composition; hazard status; receiver/specification; actual treatment; recycle/stocks | Weigh and sample each residual at its real exit and retain signed receiver/treatment evidence. Unmixed origins remain separate; internal returns are excluded from external totals. | kg | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |
| cp_air | fused_powder_unit | each gas and particle release | measured_record | source/outlet/control; flow and sampling intervals; T/P/O2 wet-dry bases; species concentrations; PM2.5/PM10/total comparable tests; F species; NO/NO2/N2O; carbon origin; trace-metal speciation; limits; diffuse emissions | Matched outlet flow and representative laboratory monitoring of relevant species after actual controls, covering normal and start/stop states. Retain dry feed-handling/milling/packing diffuse dust and collected solids separately; no inferred zero from electric heating. | kg; m3; concentration; time | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |
| cp_effluent | fused_powder_unit | each liquid gate and outfall species | measured_record | source; sewer/direct split; receiving medium; inlet/outlet volume and density; pH/T; TSS; F species; total/dissolved/particulate P and phosphate speciation; metals/COD where relevant; samples/limits; sludge water | Measure paired liquid flows and representative samples at pre/final treatment and real outfalls. Link the receiving environment or external operator; do not turn transferred wastewater into a direct elementary release. Add relevant actual species individually. | kg; m3; concentration; time | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |
| cp_stage | fused_powder_unit | unallocated balances and burden accounting | measured_record | stage IDs; matched transfers; stocks; external feed/output; P/Ca/Mg/Si/F and trace impurities; H/O water ledger; fossil/geogenic/biogenic carbon; furnace/dryer heat; shared allocation cause; actual coproduct price/status | Preserve measured physical stage balances and equal link endpoints before allocating burdens. Measure losses, product assay, carbonate decomposition, electrode oxidation, internal reuse and heat recovery. Document actual causal/economic relations and uncertainty; never close balances by invented yield. | kg; MJ | each lot/transfer; continuous meters integrated; representative outlet campaigns | complete declared representative campaign including starts/stops, cleaning and stock reconciliation | same foreground unit and actual supplier/receiver interfaces | per 1 kg reference flow | calibration; test/speciation/detection limits; receipts; samples; timestamps; coverage and uncertainty |

Retain raw unallocated totals for one matched route, supplied state, grade and representative campaign, including all attributable failed and zero-accepted-output batches, start/stop, cleaning, idle, returns and rework. Reconcile opening/closing work in progress and finished stocks with accumulated inventory burdens, documenting carry-in/carry-out attribution without lost or duplicated burdens. Q is strictly positive final accepted net commercial production reconciled with release, dispatch and stocks; exclude final rejects and do not recount returned, reworked and reaccepted material. Apply normalize_campaign once to each reconciled raw exchange total. Row-specific conversion and calculation descriptions, including the Q division in road_service, denote that same normalization rather than another division. A complete campaign with Q <= 0 requires a justified wider representative period or an incomplete result.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_campaign | all inventory rows | N = campaign external exchange in its declared unit / Q; Q is the same-campaign accepted net commercial powder mass in kg from cp_product. Preserve numerator, Q, stocks and stage measurements. Retain raw unallocated totals for one matched route, supplied state, grade and representative campaign, including all attributable failed and zero-accepted-output batches, start/stop, cleaning, idle, returns and rework. Reconcile opening/closing work in progress and finished stocks with accumulated inventory burdens, documenting carry-in/carry-out attribution without lost or duplicated burdens. Q is strictly positive final accepted net commercial production reconciled with release, dispatch and stocks; exclude final rejects and do not recount returned, reworked and reaccepted material. Apply normalize_campaign once to each reconciled raw exchange total. Row-specific conversion and calculation descriptions, including the Q division in road_service, denote that same normalization rather than another division. A complete campaign with Q <= 0 requires a justified wider representative period or an incomplete result. | cp_product; row-specific protocol | quantity per 1 kg reference flow | jrc-cww-2016 |
| material_components | wet feeds; lime; product; sludge | Component mass = measured wet parent mass × measured mass fraction. Dry/active matter, free carrier water and relevant structural water are explanatory parts, not extra purchased parent exchanges. | cp_material; cp_water; cp_product; cp_waste | physical component ledger | jrc-lvic-aaf-2007 |
| electricity_conversion | electricity | MJ = measured kWh × 3.6; this defined unit conversion is not a furnace or dryer consumption default. | cp_energy | compatible energy per reference kg |  |
| load_species | air and direct freshwater species | Retain raw period species mass before normalization. With compatible concentration and gas/liquid flow rate, integrate concentration × flow rate × the matched interval duration using explicit units. If the gas/liquid quantity is already an integrated volume, sum concentration × matched volume and do not multiply by duration again. Apply normalize_campaign once to the resulting raw period load. For element versus compound reporting, use measured speciation and the declared molar-mass ratio; total NOx or total F/P alone does not prove individual species. | cp_air; cp_effluent | raw period species mass before normalize_campaign | jrc-cww-2016 |
| particle_bins | pm25; pm10; pmover10 | Fine = PM2.5; middle = comparable PM10 − PM2.5; large = comparable total PM − PM10. Independently tested disjoint bins may replace differences. Negative/incomparable differences require review, not clipping; do not add nested totals. | cp_air | disjoint particle mass ledger | jrc-cww-2016 |
| gas_volume | gas | Provider-compatible volume is calculated from metered volume using the recorded actual and provider T/P absolute, wet/dry composition and compressibility convention with a traceable equation of state. No fixed density, NCV or default correction factor. | cp_gas | provider volume ledger and normalized m3 |  |
| carbon_balance | co2; geogenic_co2; co; methane; electrode | For each carbon origin: measured inputs = carbon in products/residuals + carbon in actual emitted species + stock change, with stated uncertainty. Oxidised fossil electrode carbon converted to CO2 uses 44/12 only for the CO2-assigned carbon; use corresponding molar ratios for CO/CH4. Mineral carbonate carbon and any real biogenic carbon stay separate and are not deleted from LCI. | cp_material; cp_maintenance; cp_air; cp_stage | origin-specific unallocated carbon ledger | jrc-lvic-aaf-2007 |
| phosphorus_basis | ore; finished_product; phosphate | P2O5 assay is an analytical expression, not a pure oxide addition. Record total and extractant-soluble fractions and wet/dry denominator separately. PO4 mass from a measured phosphate-as-P load uses molar mass PO4 / molar mass P only after confirming that phosphate fraction; do not treat all total P as PO4. | cp_material; cp_product; cp_effluent | analytical P ledger and speciated load | zennoh-fused-phosphate |
| water_energy_balance | stage links; water; water_air; water_fresh | Reconcile external free water, feed/reagent water, structural water release and combustion water with retained product/sludge moisture, vapour, liquid exits and stocks; reconcile furnace/finishing electricity/fuel with measured useful duty, cooling/quench heat and losses. Report residuals without invented yield, evaporation or steam credit. For actual neutralisation, precipitation or other reactions, retain independently evidenced water formation/consumption and dry-species formation/consumption terms from measured chemical forms and reaction extents. Complete-boundary total mass and elements conserve; individual water or dry species need not. Do not infer those reaction terms by forcing a residual, COD or assumed formula to close. | cp_water; cp_gas; cp_energy; cp_stage | physical water/H/O and energy ledgers | jrc-lvic-aaf-2007 |
| road_service | transport | Road service = sum(shipped kg / 1000 × actual leg km), before dividing by Q; demonstrate actual load/backhaul provider basis and keep included upstream legs from being counted again. | cp_transport; cp_product | t*km per reference kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | product and feeds | Require measured unfortified glassy powder and virgin-rock/serpentine electric route; neither a category label nor a broad fertilizer UUID establishes composition or nutrient basis. Resolve contrary CAS/route fields before linking. | actual SKU, mineralogy, assays and process diagram |
| dq_measurement | all rows | Calibrated units, compatible supplier/receiver basis, matched campaign Q and representative time coverage; record uncertainty and independent stage readings. No borrowed purity, recipe, energy, yield or default emission rate. | cp_product; cp_stage; row protocols |
| dq_balances | physical streams | Keep unallocated mass, water/H/O, P/Ca/Mg/Si/F, trace-element, carbon-origin and energy ledgers, including dust capture, electrode oxidation, lining wear, coproducts, liquid transfers and stocks. Report residuals with uncertainty rather than inventing closure. | cp_stage; jrc-lvic-aaf-2007 |
| dq_completeness | active actual exchanges | Capture normal/start/stop, cleaning, maintenance, diffuse dust and every relevant species; add actual extra chemicals, packaging wastes/filter media, transport or controls individually. Missing measurements or identities remain unknown, not zero. | stream register; cp_air; cp_effluent |
| dq_source_scope | all sources | IFA is a historical industry synthesis, Zennoh a distributor handbook and Yoorin a producer family; they do not establish universal quantities. JRC general balance/monitoring rules apply only in their stated scope, not other fertilizer chapters or legal limits. EPA is general historical LCA guidance, not a current standards-compliance claim. | source sections and actual applicability |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference and feeds | Demonstrate the stated virgin-rock/serpentine electric fusion and unfortified glassy powder scope; excluded feeds/routes cannot be waived with a broad fertilizer name. Declare whole commercial kg separately from analytical P/P2O5. | `ifa-fertilizer-china-2009`; `zennoh-fused-phosphate` |
| validate_reference | finished_product | Exactly one completed final reference product output; denominator and collection aggregation are per 1 kg net commercial release in both languages. Equal internal handovers remain physical stage records. | `jrc-lvic-aaf-2007` |
| validate_supply | utilities and components | Verify actual energy/volume/count properties, gas conditions, electricity provider, package inclusions and wet/active/water bases. Missing supplier conventions prevent a complete background link even with a valid flow identity. | `jrc-cww-2016` |
| validate_species | elementary releases | Require true species, carbon origin and air/freshwater medium. Do not substitute F2 for HF/fluoride, total NOx for NO or NO2, N2O for NOx, dissolved solids for suspended solids, or correction flows for real emissions. Keep PM bins and captured/emitted mass disjoint; real biogenic CO2 remains in LCI. | `jrc-cww-2016` |
| validate_physical | balances and allocation | Reconcile physical outputs and equal internal links before burden allocation; no reduced physical coproduct output, disappearing water, invented carbonate conversion or duplicate dust/wastewater burden. | `jrc-lvic-aaf-2007`; `epa-lca-principles-2006` |
| validate_completeness | concrete dataset | Every active actual row needs quantity evidence, identity decision, property/unit, state, provider/receiver and route applicability. Unresolved identity, lump-only species assay, unknown quantity or unsupported conversion prevents a complete dataset claim; method authorship is not scientific approval or site verification. | `jrc-cww-2016` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for the specified unfortified electric-fused powder |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Actual compatible powder supply to an explicitly assessed product system, with measured commercial and nutrient bases |
| excluded_use | Generic all-phosphatic-fertilizer average; kg nutrient without explicit assay conversion; excluded fusion/acidulation/secondary-feed routes; direct field-use impacts or crop/climate-credit claims |
| required_metadata | SKU, feed origins/assays, route, glass matrix, moisture/fineness, acceptance, Q/campaign, providers, utility conventions, packages, treatment/outfalls, stocks, coproduct/waste status, allocation and system gate |
| required_quality_disclosure | Actual measurements and uncertainty; source applicability; unknown or missing quantities/identities; background compatibility; closures and residuals; scientific-review state |
| update_trigger | Feed/route/grade/utility/packaging/control/receiver change, new primary evidence, confirmed identity correction, or failed quantity/physical compatibility |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | [UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf) | pp./PDF165–166: phosphatic/superphosphate and multi-nutrient hierarchy. Classification context only; the residual label is not a recipe or whole-leaf method identity. |
| ifa-fertilizer-china-2009 | handbook | [IFA, The Chemical Fertilizer Industry in China: A Review and its Outlook, May 2009](https://www.fertilizer.org/wp-content/uploads/2023/01/2009_ifa_fertilizerindustrychina.pdf) | Chapter3.2.1.2, p39/PDF57 and translation disclaimer PDF4: mineral-flux electric fusion, water quench and finishing. Historical national/plant quantities and performance, ore thresholds and other furnace routes are not defaults. |
| zennoh-fused-phosphate | handbook | [Zennoh, Fertilizer Q&A Chapter2: Fused phosphate (ようりん), publisher handbook](https://www.zennoh.or.jp/operation/hiryou/pdf/02_yourin.pdf) | pp76–78/PDF1–3, Figures1–2: fusion/quench/finishing and glass-network identity; distinguishes nutrient-enriched grades. Does not make mineral-slag feed interchangeable with virgin serpentine or impose handbook grade guarantees. |
| yoorin-phosphate-products | handbook | [Yoorin, phosphate products, producer page](https://www.yoorin.com.br/pt/nossas-solucoes/fosfatados-yoorin) | Product-family electrofusion statement and listed Mg/Master/S/B-Mag variants support a marketed physical family and exclusions. Promotional agronomic/climate claims and product recipes are not defaults or credits; actual SKU required. |
| jrc-lvic-aaf-2007 | official_guidance | [European Commission JRC, LVIC-AAF BREF, August 2007](https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic_aaf.pdf) | Sections1.5.1–1.5.2 pp33–34/PDF61–62: general fertilizer-site mass/water/carbon/energy balance and measurement. Does not supply a thermal-fusion recipe or apply acidulation-specific chapters/limits. |
| jrc-cww-2016 | official_guidance | [European Commission JRC, Common Waste Water and Waste Gas Treatment/Management Systems in the Chemical Sector, 2016, JRC103096](https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf) | BAT2–4 pp543–544/PDF573–574: chemical-plant stream register and relevant outlet/load monitoring. Actual relevant species determine the sampling plan; no BAT-AEL conversion to LCI or legal compliance claim. |
| epa-lca-principles-2006 | official_guidance | [US EPA, Life Cycle Assessment: Principles and Practice, EPA/600/R-06/060, May 2006](https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1000L86.TXT) | Chapter3, allocation, pp28–29: general industrial subdivision/expansion, physical and alternative/economic relationship hierarchy. Historical method guidance only; no generic fraction, plant recipe or assertion of current ISO compliance. |
