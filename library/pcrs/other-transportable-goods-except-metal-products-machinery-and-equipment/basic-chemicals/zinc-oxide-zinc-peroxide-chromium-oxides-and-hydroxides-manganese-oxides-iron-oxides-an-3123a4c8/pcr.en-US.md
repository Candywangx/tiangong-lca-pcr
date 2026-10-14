---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.zinc-oxide-zinc-peroxide-chromium-oxides-and-hydroxides-manganese-oxides-iron-oxides-an-3123a4c8
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Uncoated zinc oxide powder from primary SHG zinc by the natural-gas muffle route

## 1. Scope and Applicability

Apply to single-species, uncoated ZnO powder (CAS 1314-13-2) made from primary refined SHG zinc ingots using fossil natural-gas-fired muffle vaporisation, external air oxidation, dry cooling/collection and paper-sack packing. Establish the actual crystalline phase, grade and primary feed provenance from batch and supplier records before applying this method. BREF §7.17.2.2.2 and Figure7.49 distinguish this route; Zochem supplies an actual manufacturing and powder specification example (`jrc-lvic-s-2007`, `zochem-report-2023`, `zochem-102-2023`).

Exclude ore/calcine direct reduction, electrothermal, rectification, retort and rotary-kiln variants, wet precipitation/calcination, secondary remelt feed, intentionally doped or surface-treated ZnO, pellets, dispersions, solutions, blends and other metal oxides/hydroxides/peroxides. Intended use alone never creates a different physical identity. No default purity, yield, feed ratio, energy use or emission factor is supplied. Single-producer and 2002-era BREF figures are contextual evidence only.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.zinc-oxide-zinc-peroxide-chromium-oxides-and-hydroxides-manganese-oxides-iron-oxides-an-3123a4c8 |
| classification_refs | CPC:3.0:34220; narrower |
| covered_products | Declared crystalline, untreated single-species ZnO powder from primary SHG zinc on the stated muffle route |
| excluded_products | Other routes, treated/doped/pelleted/formulated ZnO, secondary zinc and other species as excluded in Section1 |
| representative_product | Uncoated French-process powder; Grade102 is an illustrative producer example, not the default grade |
| production_route | Primary SHG zinc → gas-fired muffle vaporisation → external oxidation → dry filter collection → paper-sack dispatch |
| market_state | As-delivered powder at factory gate; packaging inventoried separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply untreated ZnO powder of the declared phase and grade |
| How much | 1 kg accepted net as-delivered powder |
| How well | Measured moisture, assay basis, particle size/surface area, trace metals and no intentional coating/doping, according to actual acceptance specification |
| How long or cycle | One declared production period to factory gate; no service lifetime or generic shelf-life assumption |
| reference_flow_link | finished |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Zinc oxide `d4ea0927-264f-45e4-b6d5-d68a0cced63e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU; ZnO CAS; actual crystal phase; no coating/doping; primary SHG zinc provenance; muffle/gas route; grade and analytical assay basis; measured water content; particle size/surface area; Pb/Cd and other impurities; production period/site; net/gross packaging basis; utility supply definitions; receiving media and waste endpoints |

The broad ZnO UUID identifies the ZnO chemical entity (CAS 1314-13-2), without a conflicting route, surface-coating or composite qualifier. Powder state is established by the actual product specification and acceptance records, not by an assumed database grade. It does not establish the actual SKU, purity, phase or a compatible background dataset. Declare every required qualifier in the foreground package; absent measurements stay pending.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use 1 kg of the whole accepted net as-delivered untreated ZnO powder, including accepted retained moisture and incidental constituents, excluding all packaging. Collect denominator A as total accepted net kg in the same period; quantify ZnO species and elemental Zn separately on reconciled assay bases, never as substitutes for A. |
| assay_basis | reference product and zinc_feed | Mass | kg | Record water fraction separately from ignited-basis assay and other ignition losses. Convert to delivered elemental/pure-species mass only with a documented lab basis reconciliation; drying loss is not automatically water and database grade values are not assay. |
| gas_volume | gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Match gas T/P, wet/dry composition and compressibility to the background cubic-metre definition. Use actual calorific tests when making an energy balance, not the non-reference mass coefficient. |
| electricity_units | electricity_mv | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert kWh at the actual 1–35kV user meter to MJ using the unit-group factor; do not treat electricity MJ as purchased heat. |
| element_basis | zn_air; pb_air; cd_air; zn_water | Mass | kg | Elemental analytical masses and oxide masses are different. Require chemical speciation, lab basis and provider/characterization compatibility before conversion or use. |
| physical_mass_ledger | all inventory rows | Mass | kg | Keep the unallocated mass ledger separate from the inventory quantity-property and energy ledgers. Convert actual gas/liquid volumes to kg only with measured density or a documented composition/T/P/compressibility determination at the same state; no database non-reference mass coefficient is a density. Count full powder and accompanying paper-sack, pallet and actual film dispatch masses, rejected material and all residues/releases, with stock changes and paired internal links. The 1 kg reference remains net powder; accompanying packaging is part of its supply function, not a separately credited co-product. Preserve full packaging receipts, dispatch and returns, and loose and installed filter/refractory stocks, actual installation/removal, wear and adhering material. Service-life burden attribution stays in a separate ledger and never changes the actual physical exchange or creates a zero maintenance burden solely because no replacement occurred during the measured period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of primary SHG zinc ingots and separately purchased utilities/consumables at the oxide site |
| starting_condition_role | foreground_start |
| product_classification_scope | Only the declared muffle ZnO subset of CPC34220; not whole-leaf coverage |
| recursive_input_rule | Internal captured/reworked ZnO stays in stage balance and is not repeatedly purchased; external ZnO feed would change the stated primary-zinc route and needs applicability review |
| upstream_dataset_requirement | Link primary zinc refining/mining and actual delivered utilities/packaging with compatible supplier, route, geography, time, grade and quantity basis; absence is an explicit incompleteness |
| disclosure | Declare aggregated foreground gate, stage map, transport inclusion, water and air interfaces, all omitted/conditional streams and uncertainty |

| rule_id | Rule | Sources |
| --- | --- | --- |
| boundary_line | Include receipt, melting, muffle vaporisation, external oxidation, cooling/filter collection, internal powder handling, packaging, control systems and actual maintenance/water treatment within one aggregate foreground unit. Record raw stage measurements and paired internal transfer quantities; only finished is the reference output. | jrc-lvic-s-2007 |
| boundary_interfaces | Keep refinery/ore processing upstream of received primary zinc, never omit their burden. Separately disclose receipt transport and prevent double inclusion with delivered backgrounds. Require an atomic measured row for any actual additional chemical, side salt, separated filter residue, dust shipment or release; distinguish product, co-product, waste and environmental release. No wet-route salt or sludge default. | jrc-lvic-s-2007 |
| boundary_air | Preserve oxidation/filter exhaust, combustion gases and handling fugitive dust by source, including startup, shutdown and baghouse upset/emergency operation. Unchanged inlet/outlet air carriers and humidity remain in a separate physical gas ledger. Do not claim BAT targets or historical zero water/soil values as actual site observations. | jrc-lvic-s-2007 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| muffle_line | Aggregate muffle ZnO line and gate dispatch | required | Declared route only; conditional utilities/wastes verified individually | foreground_production | 1 kg accepted net as-delivered powder |

Stage sequence: received zinc → melting → muffle vapour → external air oxidation → cooled/filter-captured powder → accepted sack packing. Internal metal and powder transfers retain measured equal quantities at both ends in cp_stage. Captured ZnO fume is solid powder, not emitted PM; retain captured-product, rework, solid-dust shipment and escaped-air quantities separately. Record physically separated shipped dust as its own concrete exchange with composition and receiver, without counting dust still attached to a spent filter twice. Separate skimmings, off-spec dispatch, filter escape, combustion stacks and actual water/maintenance streams. This aggregation retains each stage meter and prevents duplicated intermediate/final reference-product outputs.

### Process: Aggregate muffle zinc oxide line (`muffle_line`)

#### Inputs

##### Product flows

###### Primary SHG zinc ingot feed (`zinc_feed`)

Record net primary refined zinc ingots entering the line, supplier refining route, lot assay and Pb/Cd impurities. The broad ingot identity does not establish SHG purity. Ore, zinc calcine, zinc scrap and secondary remelt feed are outside this scope; upstream refining remains in the linked background.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Zinc ingot, Zn `c3a768f8-ac2e-4c8c-9688-ad8587c131ca`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_inputs; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-lvic-s-2007`

###### Fossil pipeline natural gas (`gas`)

Measure furnace and auxiliary gas separately, with temperature, pressure, dry/wet composition and compressibility. Reference property is Volume, not Mass. Retain the native compressed, pipeline-delivered gaseous supply restriction; LPG, LNG delivered as liquid, biogas and bottled gas require different verified identities. Native CAS 74-82-8 and methane synonyms do not establish pure methane composition for the delivered natural-gas mixture. Reconcile meter cubic metres with the provider definition before linking its background; secondary mass coefficients are not density. No BREF gas consumption default.

Reference unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`。

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable period amount divided by A; collect with cp_inputs; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-lvic-s-2007`

###### Delivered medium-voltage electricity (`electricity_mv`)

This identity is restricted to CN grid-average 1–35 kV consumption mix to user. Confirm the actual CN supply location, metering connection and period; supply outside CN or a different voltage or generation mix needs a separately verified exchange. The Canadian producer example does not establish use of this CN electricity identity. Include fans, extraction, conveying, bagging, cooling and emergency operation. Convert metered kWh to MJ with 3.6 MJ/kWh; preserve the recorded Net calorific value property.

Reference unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`。

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Measured attributable period amount divided by A; collect with cp_inputs; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-lvic-s-2007`

###### Kraft paper product sacks (`paper_bag`)

Collect actual sack construction and empty net mass, including integral layers and adhesive in the purchased sack background. Use the broad paper-bag identity only for the verified actual kraft sack. Do not count the same liner in both sack and film rows. Integral layers remain in the complete purchased sack mass; a separately supplied liner needs its own actual atomic material exchange and verified identity. PE pallet wrap is not a substitute for a liner. No manufacturer bag size is a universal default.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Paper Bag `0a8faf13-9861-4805-bcee-a212c6dceb04`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_inputs; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `zochem-102-2023`

###### Wood pallet at dispatch (`pallet`)

Conditional on actual wood pallet use. Collect wood species, treatment, mass, receiver and verified reuse trips. Record full physical receipt, dispatch, return and stock masses; a reused pallet still moves at its whole mass. Account new manufacture, repairs and transport service burdens separately using verified reuse records, never replacing physical dispatch mass with mass divided by reuse trips. This broad platform identity is not an assumed EURO pallet.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Pallets, box pallets and other load boards, of wood, pallet collars of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_inputs; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `zochem-102-2023`

###### Polyethylene pallet wrap (`pe_wrap`)

Conditional on actual PE wrap, with polymer/CAS, grade, layers and supplier verified. The physical name and CAS support PE film; the source CPC luggage classification is inconsistent and needs provider clarification. Film is not assumed to be present.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_inputs; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `zochem-102-2023`

###### Purchased process water makeup (`cooling_water`)

Conditional on actual cooling or cleaning demand. Measure fresh delivered treated water only, with density if converting volume to mass. Internal cooling circulation is not repeated purchased input. Air cooling alone does not imply liquid water demand. Direct abstraction requires a separate verified water-resource row and pumping/treatment inventory.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_water; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvic-s-2007`

###### Replacement dry ZnO collection filter bag (`filter_bag`)

Collect actual fibre/polymer, dimensions and replacement mass at the baghouse. This row is replacement filter media, not the packaging sack. UUID unresolved; grain-cleaning consumables and exhaust gas are incompatible candidates.

- Selected flow: Dry ZnO collection filter bag
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_inputs; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-lvic-s-2007`

###### Replacement furnace refractory bricks (`refractory`)

Conditional on actual replacement. Verify fired refractory composition, zinc contact and service interval; the selected native ceramic-brick classification excludes siliceous-earth products. Other lining forms require their own verified identity. Weigh material replaced within the period; do not assume a high-alumina recipe or extrapolate construction bricks.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Refractory bricks `daa9b8ab-d153-43e0-a265-48e14527f6dc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_inputs; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inputs`
- Sources: `jrc-lvic-s-2007`

##### Waste flows

None inherent in the declared route; record actual additional atomic exchanges before dataset completion.

##### Elementary flows

###### Atmospheric molecular oxygen entering line (`oxygen`)

Renewable element resource from air, CAS 7782-44-7. Quantify oxygen in measured oxidation, combustion and cooling air; preserve residual exhaust oxygen separately. The reaction 2 Zn + O2 → 2 ZnO is a stoichiometric balance, not an oxygen-purchase or perfect-yield default.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Atmospheric molecular nitrogen entering line (`nitrogen_in`)

Renewable element resource from air, CAS 7727-37-9. Preserve incoming air nitrogen in the physical gas balance. Unchanged carrier nitrogen is paired with the exhaust row; NOx and N2O conversions are separately measured.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

#### Outputs

##### Product flows

###### Accepted uncoated ZnO powder at gate (`finished`)

Only the whole accepted net as-delivered powder is the reference product, including accepted retained moisture and incidental constituents. Exclude packaging mass; keep actual moisture, ignited/dry assay and crystalline phase as qualifiers. Pure ZnO and elemental Zn masses are separate analytical quantities. Captured powder moving to bagging is internal to this aggregate line, not a second reference output.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Zinc oxide `d4ea0927-264f-45e4-b6d5-d68a0cced63e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference`
- Sources: `zochem-102-2023`

##### Waste flows

###### Zinc oxide-bearing muffle skimmings (`dross`)

Record gross skimmings, metallic Zn/ZnO fractions, moisture, trace metals and receiving recycler. Use the unspecified zinc-slag identity only for actual oxide-bearing slag/dross confirmed by composition and receiver; it is not pure zinc scrap. Recycling does not make the physical outflow zero or grant a default credit.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: zinc slag (unspecified) `1fe4a169-ae95-4eb8-b3d4-f5db63d1ca23`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_residue; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `jrc-lvic-s-2007`

###### Rejected uncoated zinc oxide powder leaving gate (`offspec`)

Conditional on rejected powder leaving for treatment/recovery. Weigh separately from accepted product and internal rework. Keep assay, particle state and receiver; do not replace with zinc metal scrap. Product-classified sold downgraded powder requires a separately justified co-product treatment and cannot silently enter this waste row.

- Selected flow: Rejected uncoated zinc oxide powder
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_residue; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `jrc-lvic-s-2007`

###### Spent ZnO-contaminated filter bag (`spent_filter`)

Conditional on discarded collection media. Collect dry media mass, retained ZnO, moisture and receiver; retained dust is not added again as emitted air PM or as separately shipped dust unless physically separated and weighed. UUID unresolved.

- Selected flow: Spent ZnO-contaminated filter bag
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_residue; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `jrc-lvic-s-2007`

###### Spent zinc-contaminated furnace refractory (`spent_refractory`)

Conditional on removed refractory. Measure actual composition, attached zinc, mass and receiver. Brick-production waste does not match used contaminated furnace lining; retain blank UUID.

- Selected flow: Spent zinc-contaminated furnace refractory
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_residue; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `jrc-lvic-s-2007`

###### Untreated ZnO-line cleaning wastewater to offsite treatment (`wastewater`)

Conditional on actual cleaning wastewater sent offsite. Record volume, density, dissolved/suspended zinc and receiver; do not also count the receiver effluent as direct site emission. Manganese-slag washwater and paper-mill wastewater have incompatible origin. No routine wet-precipitation wastewater is assumed in this dry route.

- Selected flow: Untreated ZnO-line cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_water; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvic-s-2007`

###### Zinc-bearing onsite wastewater-treatment sludge (`sludge`)

Conditional on actual onsite sludge separation. Measure dry solids, water, zinc compounds and receiver. Zinc slag is not a sludge identity; do not transfer wet-chemical ZnO sludge quantities to this route.

- Selected flow: Zinc-bearing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_residue; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue`
- Sources: `jrc-lvic-s-2007`

##### Elementary flows

###### Residual molecular oxygen to outdoor air (`oxygen_out`)

CAS 7782-44-7; outdoor air unspecified. Collect exhaust flow and dry/wet oxygen content for combined physical balance, including dilution air. No total inlet oxygen may be mistaken for chemical consumption.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Molecular nitrogen in exhaust to outdoor air (`nitrogen_air`)

CAS 7727-37-9; outdoor air unspecified. Reconcile unchanged carrier nitrogen with the inlet and measured conversions, rather than inventing removal or assigning all nitrogen to NOx.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Fossil carbon dioxide from gas firing (`co2`)

Outdoor air unspecified, CAS 124-38-9. Collect fuel carbon and combustion measurements for complete-period carbon balance; exclude upstream background emissions from the direct stack row. No historical BREF factor.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Fossil carbon monoxide from incomplete combustion (`co`)

Outdoor air unspecified, CAS 630-08-0. Measure source concentration, exhaust flow and operating hours; preserve fossil origin and align wet/dry and oxygen-reference corrections.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Monitored nitrogen oxides in outdoor exhaust (`nox`)

Outdoor air unspecified. Mass/kg alone does not prove NO2-equivalent basis: collect analytical NO/NO2 convention and explicit provider/LCIA definition before supplying a quantity. Exclude N2O; do not add individual NO/NO2 again to the same aggregate. Unknown conversion remains pending.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Nitrogen oxides `f79d0f8f-2b0e-49cb-bed0-b1ea0fbd8625`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Sulfur dioxide in outdoor exhaust (`so2`)

Outdoor air unspecified, CAS 7446-09-5. Collect fuel sulphur and source-specific monitoring. Do not substitute sulphur oxides aggregate or assume gas sulphur and SO2 emissions are zero.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Fossil methane slip or line leakage (`ch4`)

Outdoor air unspecified, CAS 74-82-8. Collect burner slip and gas-line leak records separately by source, then sum nonoverlapping releases. Correction flows for delayed emissions are not substitutes.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Nitrous oxide in combustion exhaust (`n2o`)

Outdoor air unspecified, CAS 10024-97-2. Require source-specific measurements or an independently justified applicable method; do not infer an amount from NOx or a historical generic factor.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Emitted particulate PM2.5 (`pm25`)

Outdoor air unspecified; this disjoint bin is at most 2.5 micrometres. Measure escaping filter/handling and furnace sources after control, retaining source separation. Apply Method201A only within its stationary dry-filterable scope and sampling limitations; handle condensable PM separately. Never add nested total PM10 to the three bins or count captured/reused product as air release.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-201a-2020`

###### Emitted particulate between PM2.5 and PM10 (`pm10`)

Outdoor air unspecified; this disjoint bin is above 2.5 and at most 10 micrometres. Measure escaping filter/handling and furnace sources after control, retaining source separation. Apply Method201A only within its stationary dry-filterable scope and sampling limitations; handle condensable PM separately. Never add nested total PM10 to the three bins or count captured/reused product as air release.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-201a-2020`

###### Emitted particulate above PM10 (`pmover10`)

Outdoor air unspecified; this disjoint bin is above 10 micrometres. Measure escaping filter/handling and furnace sources after control, retaining source separation. Apply Method201A only within its stationary dry-filterable scope and sampling limitations; handle condensable PM separately. Never add nested total PM10 to the three bins or count captured/reused product as air release.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-201a-2020`

###### Filterable particulate with unresolved size distribution (`pm_unsized`)

Outdoor air unspecified. Use measured total filterable particulate only for sources or time intervals whose aerodynamic fractions are unavailable; this row is mutually exclusive with the three size bins for the same mass. Do not assume a size distribution or reuse the source record clinker-case amount. Keep source/time keys and unresolved LCIA coverage explicit.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-201a-2020`

###### Separately measured condensable particulate (`pm_condensable`)

Outdoor air unspecified, particle size unspecified. Conditional on actual condensable particulate established by a suitable separate method under the Method201A applicability note. Keep it separate from the same source filterable fraction and document temperature, blank correction and chemical composition. No presumed emission or generic characterization factor.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-201a-2020`

###### Airborne zinc on analytical elemental basis (`zn_air`)

Outdoor air unspecified; quantity is measured zinc-as-element mass, with sampled chemical speciation documented. Use this elemental analytical identity only if the provider and characterization accept that basis. It is not kg of ZnO, PbO or CdO and does not imply metallic aerosol. Keep its overlap with particulate totals flagged; do not add metal mass again in the physical solids balance. Unconfirmed species/basis requires a separate exact exchange.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: zinc `08a91e70-3ddc-11dd-94e3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Airborne lead on analytical elemental basis (`pb_air`)

Outdoor air unspecified; quantity is measured lead-as-element mass, with sampled chemical speciation documented. Use this elemental analytical identity only if the provider and characterization accept that basis. It is not kg of ZnO, PbO or CdO and does not imply metallic aerosol. Keep its overlap with particulate totals flagged; do not add metal mass again in the physical solids balance. Unconfirmed species/basis requires a separate exact exchange.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: lead `4d9a8790-3ddd-11dd-91dc-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Airborne cadmium on analytical elemental basis (`cd_air`)

Outdoor air unspecified; quantity is measured cadmium-as-element mass, with sampled chemical speciation documented. Use this elemental analytical identity only if the provider and characterization accept that basis. It is not kg of ZnO, PbO or CdO and does not imply metallic aerosol. Keep its overlap with particulate totals flagged; do not add metal mass again in the physical solids balance. Unconfirmed species/basis requires a separate exact exchange.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: cadmium `08a91e70-3ddc-11dd-9674-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Water vapour to outdoor air (`water_air`)

Outdoor air unspecified, CAS 7732-18-5; kg vapour, not steam heat. Track combustion-generated, product-moisture and cooling evaporation separately; inlet humidity is a physical ledger input and is not invented as water withdrawal. Distinguish gross exhaust moisture from net introduced water.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_air; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `jrc-lvic-s-2007`

###### Liquid water actually discharged to freshwater (`water_fresh`)

Conditional on actual direct freshwater discharge, CAS 7732-18-5. Reference property is Volume/m3. Verify receiving medium and water-carrier volume after onsite treatment; reconcile carrier water, dissolved/suspended matter and measured whole effluent volume/mass, without assuming pure-water density or adding constituent masses twice; this is not abstraction and not an offsite wastewater treatment transfer. River, sea and sewer endpoints are not interchangeable.

Reference unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`。

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Measured attributable period amount divided by A; collect with cp_water; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvic-s-2007`

###### Zinc in actual direct freshwater discharge (`zn_water`)

Conditional on actual direct freshwater release. Quantify analysed zinc-as-element using contemporaneous effluent flow and dissolved/particulate fractions; confirm species/provider basis. Preserve dissolved Zn mass separately from suspended Zn-bearing solids, and aggregate only nonoverlapping fractions compatible with this native total-element/ion scope; prefer a differentiated ion identity when required by the selected LCIA method. For the physical wet-stream ledger count measured whole effluent mass once; its constituent Zn is not an additional mass outflow. Water-carrier volume in water_fresh and whole effluent volume/mass are distinct quantities requiring measured composition and density reconciliation. Wastewater sent offsite is not this direct release. No wet-process zinc emission default.

Reference unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`。

- Selected flow: zinc `08a91e70-3ddc-11dd-94e7-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured attributable period amount divided by A; collect with cp_water; unknown quantity is pending, absence requires evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `jrc-lvic-s-2007`

## 7. Allocation and Co-product Handling

| rule_id | Rule | Sources |
| --- | --- | --- |
| allocation_hierarchy | Maintain a complete unallocated physical ledger first. Test subdivision and system expansion, then a demonstrable physical relationship, then another justified relationship such as measured relative market value. Document why earlier choices are unavailable; expanded-system results describe the expanded system. No automatic allocation or recycling credit based on the historic dross table. | ec-pef-2021 |
| allocation_ledgers | Classify exported skimmings/off-grade material using composition, legal status, receiver function and actual sale records. Record full physical quantities and equal internal links; allocation shares partition burdens, not the existence or measured mass of product/co-product outputs. Retain nonallocated and allocated burden ledgers separately. For economic allocation use same-period gate prices and quantities, disclose sensitivity, and never assume free recycling or replacement of primary zinc. | ec-pef-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_reference | muffle_line | finished | Acceptance/weighing/lab | lot/SKU; gross/tare/net accepted kg; water assay; ZnO assay with dry/ignited basis; all ignition losses; crystalline phase; particle size; impurities; reject/rework; period | Use calibrated sack/lot weighing and traceable lab methods; reconcile acceptance/shipment and stock. Declare actual XRD or equivalent phase evidence and sampling coverage; no supplier nominal substituted for lot result. Sum accepted net kg for A in declared period; all results per 1 kg reference flow | kg | each lot | Same declared period; include startup/shutdown and maintenance | One declared line and its attributable auxiliaries | per 1 kg reference flow | scale calibration; lab reports; COA; stock reconciliation |
| cp_inputs | muffle_line | zinc_feed; gas; electricity_mv; paper_bag; pallet; pe_wrap; filter_bag; refractory | Meter/invoice/stock | row_id; source; opening/purchases/closing; net use; lot purity/CAS; material recipe; zinc primary refining provenance; gas T/P/wetness/composition/Z; actual electricity voltage/mix; package construction/liners; full receipts/dispatch/returns; reuse service records; loose/installed filter and refractory opening/closing stocks; actual installed/removed/worn masses; replacement/service period | Calibrated source/stage meters and weighed receipts; reconcile supplier definitions and attributable stock consumption; account standby/emergency energy; separate electricity and gas. Sum each attributable exchange / A; per 1 kg reference flow | kg; m3; MJ | each lot; continuous meters | Same declared period; include startup/shutdown and maintenance | One declared line and its attributable auxiliaries | per 1 kg reference flow | meter calibration; supplier primary records; unit conversion |
| cp_air | muffle_line | oxygen; nitrogen_in; oxygen_out; nitrogen_air; co2; co; nox; so2; ch4; n2o; pm25; pm10; pmover10; pm_unsized; pm_condensable; zn_air; pb_air; cd_air; water_air | Stack/air/leak monitoring | row_id; source; operating mode/hours; air/exhaust flow; T/P/humidity; dry/wet and oxygen-reference convention; gas species concentration; PM bins/condensable limits; analytical metals/speciation; fuel C/H/O/N/S and water composition; combustion/oxidation/cooling inlet flows and humidity; argon and other actual carriers; reaction water; gross/net source masses; detection limits; NOx quantity definition | Collect source-specific actual monitoring with compatible volume/concentration bases, source operating-time logs and laboratory speciation. Use Method201A only for suitable stationary filterable dry PM; retain its droplet, temperature and isokinetic restrictions, and separately resolve condensable/unsized PM. Unknown emissions remain pending, never zero. Sum nonoverlapping source masses / A; per 1 kg reference flow; retain inlet/outlet carrier balance | kg | continuous or representative measured modes plus complete hours | Same declared period; include startup/shutdown and maintenance | One declared line and its attributable auxiliaries | per 1 kg reference flow | method reports; calibration/blanks; detection limits; hours; provider definition |
| cp_residue | muffle_line | dross; offspec; spent_filter; spent_refractory; sludge | Weighbridge/lab/receiver | row_id; mass; dry matter/water; Zn metal/ZnO and Pb/Cd; adhering powder; legal status; receiver and function; sale/treatment record; internal reuse; shipment date | Weigh each distinct shipment including actual removed filter/refractory material and adhering powder; record separated dust separately, sample composition and confirm receiver acceptance; match stock/rework and distinguish co-product sale from waste. No assumed complete recycling. Sum actual external quantities / A; per 1 kg reference flow; internal returns recorded separately | kg | each shipment/replacement | Same declared period; include startup/shutdown and maintenance | One declared line and its attributable auxiliaries | per 1 kg reference flow | scale ticket; lab; signed receiver records |
| cp_water | muffle_line | cooling_water; wastewater; sludge; water_fresh; zn_water | Water meter/lab/transfer | source; purchased makeup; cleaning and cooling demand; circulation; evaporation; whole effluent volume/mass; water-carrier volume; density and dissolved/suspended fractions; dissolved/particulate Zn; sludge water; endpoint; permit; time | Use calibrated meters and paired laboratory samples; reconcile actual water balance and receiver. Distinguish offsite untreated wastewater, onsite sludge and direct final freshwater effluent; supplement each actual pollutant individually. Each purchased/discharged exchange / A; per 1 kg reference flow; internal circulation excluded from new intake | kg; m3 | meter interval and each discharge/cleaning | Same declared period; include startup/shutdown and maintenance | One declared line and its attributable auxiliaries | per 1 kg reference flow | meters; lab; endpoint and treatment evidence |
| cp_stage | muffle_line | all inventory rows | Stage material/energy ledger | stage IDs; paired transfers; feed metal mass; vapour/captured powder; accepted/rejected/reused quantities; Zn/O/H/C/N/S and other measured elemental fractions; water generation/consumption; complete gas carriers; loose/installed stores; all residual outputs; furnace energy meters, declared energy/enthalpy basis, reaction and stored energy, exported heat, losses and internal heat recovery; accompanying package dispatch masses and handoff; gas/liquid density at recorded state with basis | Retain melting/vaporisation/oxidation/filter/packing measurements, pair link ends at identical physical amount and reconcile elemental and gas/water balances before allocating burdens. Period physical totals and balances / A; per 1 kg reference flow; retain unnormalised ledger | kg; m3; MJ | each batch plus period stock reconciliation | Same declared period; include startup/shutdown and maintenance | One declared line and its attributable auxiliaries | per 1 kg reference flow | paired stage logs; elemental assay; stock and energy reconciliation |
| cp_allocation | muffle_line | all inventory rows | Function/price/burden records | actual outputs/receivers; directly attributable meters; allocation decision; physical relation; same-period price and quantity; burden shares; sensitivity; recycling handoff | Document hierarchy and each actual function; retain physical outflows and separately partition shared burdens. Credit requires representative substantiation and compatible study method. Attributable burden / A; per 1 kg reference flow; physical output quantities stay complete | kg; currency; share | declared study period | Same declared period; include startup/shutdown and maintenance | One declared line and its attributable auxiliaries | per 1 kg reference flow | receiver/price evidence; alternatives; share sum and sensitivity |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| period_normalisation | all inventory rows | A = accepted net as-delivered product kg in the period; exchange per kg = attributable measured period exchange / A. Preserve full physical outputs; allocate only the burden ledger where justified. | cp_reference; cp_inputs; cp_air; cp_residue; cp_water; cp_allocation | Exchange per 1 kg reference flow | ec-pef-2021 |
| source_release | co2; co; nox; so2; ch4; n2o; pm25; pm10; pmover10; pm_unsized; pm_condensable; zn_air; pb_air; cd_air; water_air; zn_water | Integrate matching concentration × source flow × time after reconciling unit, T/P, moisture, oxygen correction, speciation and sampling mode. Nonoverlapping sources are summed; unknown quantity definitions cannot be converted. | cp_air; cp_water | Measured period release to named medium before division by A | jrc-lvic-s-2007; epa-201a-2020 |
| physical_balance | all inventory rows | First reconcile total period mass, full powder and packaging dispatch/returns, residues/releases and stock changes using measured same-state density or a documented state conversion. For each actual element, including Zn, O, H, C, N and S: measured elemental input + opening elemental stock = elemental outputs + closing elemental stock. Include Pb/Cd and other measured retained constituents as applicable. Water-species accounting includes input water and inlet humidity plus combustion/reaction-generated water, minus consumed water, with all liquid/vapour/product water and stocks; water is not a conserved element. Pure Zn oxidation 2 Zn + O2 → 2 ZnO produces no water; fuel water formation requires actual fuel composition and conversion evidence, not a pure-methane or complete-combustion default. Keep the complete inlet/outlet air carrier ledger, including measured argon and other constituents; distinguish oxidation, combustion and cooling air and gross exhaust from net process releases. Internal links cancel only after matching both ends. Stoichiometry checks reaction consistency, not yield, purity or thermal efficiency. Separately reconcile supplied chemical/electrical energy, reaction energy and opening stored energy against output/stored energy, measured exported heat and losses on a declared thermodynamic basis; count internal heat recovery once. Never count the same fuel reaction energy both as calorific input and as additional reaction heat. Unmeasured quantities and discrepancies stay explicit. | cp_reference; cp_stage; cp_air; cp_water; cp_residue | Unallocated physical ledger and discrepancy with uncertainty | jrc-lvic-s-2007 |
| disjoint_pm | pm25; pm10; pmover10 | On the same source/time and filterable basis: PM2.5–10 = measured PM10 minus measured PM2.5; PM>10 = measured total filterable PM minus measured PM10 when that total is independently valid. Never invent size fractions; unknown or negative differences require investigation. Preserve condensable and metal-overlap annotations separately. | cp_air | Three nonoverlapping bins; condensable scope disclosed | epa-201a-2020 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | Actual CAS/phase/grade/route, material state, medium and provider quantity basis must match. Unknown UUID stays a named atomic flow with unresolved metadata, never a near-match substitution. | cp_reference; cp_inputs; cp_air; cp_residue; cp_water |
| coverage | all inventory rows | Collect a disclosed representative period and all attributable modes; quantify measurement uncertainty and unknown/conditional flows. No positive quantity or zero is inferred from a database identity, BAT limit or historical mean. | cp_stage; cp_air |
| balance | all inventory rows | Reconcile unallocated total mass, elemental Zn/O/H/C/N/S and other measured constituents, water generation/consumption, gas carriers, installed/loose stock and energy; assign any unexplained difference for review. Do not force closure by an invented unmeasured loss. | cp_stage |
| source_scope | all inventory rows | Retain supplier lot results and method applicability; producer grade tables and BREF historic quantities cannot become universal defaults. Separate chemical species from analytical elemental basis and PM from its overlapping constituents. | zochem-102-2023; jrc-lvic-s-2007; epa-201a-2020 |

## 9. Validation Rules

| rule_id | Rule | Evidence |
| --- | --- | --- |
| validate_scope | Require primary SHG zinc and gas-fired muffle route evidence, actual untreated ZnO SKU/CAS/phase, lab assay basis and no formulation. Different metal/route/state/treated variant fails applicability; using CPC34220 label alone fails scope. | cp_reference; cp_inputs |
| validate_reference | Exactly one reference output, finished, is 1 kg net as-delivered powder. Each inventory amount and collection aggregation uses accepted net period kg A and the same denominator in both languages. No purity/dry/element conversion silently changes the reference. | cp_reference |
| validate_streams | Verify each atomic UUID, type, species, medium, property/unit and provider compatibility, all unresolved gaps and measured side streams. Apply conditional absence only with evidence. Reconcile paired internal links and unallocated physical totals before allocated burdens; avoid nested PM and metal-mass double counting. | cp_stage; cp_residue; cp_air |
| validate_completeness | Unknown utility definitions, NOx mass basis, unresolved emission/speciation, missing amount/purity or unsupported water endpoint make the foreground package incomplete. Scientific review, accepted classification mapping and complete background coverage are separate from mechanical target checks. | cp_inputs; cp_air; cp_water |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared primary-SHG gas-muffle uncoated ZnO powder supply after completing measured inventory and compatible background links |
| excluded_use | Whole CPC34220 coverage; other oxides/routes; generic nanoparticle or treated-product claims; default purity/recipe/emissions; unsupported comparative or compliance claims |
| required_metadata | Required qualifiers; source/period/route/stage map; reference denominator; supplier backgrounds and quantities; waste endpoints; monitoring methods; allocation decisions |
| required_quality_disclosure | Unresolved identities/provider bases; missing measurements/coverage; balance differences; uncertainty; source-specific restrictions and independent review state |
| update_trigger | Changed feed provenance, furnace/fuel, phase/grade/coating, utility supply, residue receiver, air/water endpoint or new measured source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| jrc-lvic-s-2007 | official_guidance | European Commission, LVIC-S BREF (August2007), §§7.17.2.2.2, 7.17.3, 7.17.5; printed578/582/583/591, PDF623/627/628/636. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/lvic-s_bref_0907.pdf | Muffle route, separate gases/filter collection/skimmings, historical-table limitations and route-specific BAT context; not default quantities |
| zochem-report-2023 | literature | Zochem ULC, 2023 Supply Chains Act Report, attested24May2024, §3.2–3.3, PDF5. https://www.zochem.com/wp-content/uploads/2024/05/Zochem-S-211-Report-05.23-final-version.pdf | Producer-original confirmation of actual SHG/muffle/ambient-air route and packaging; spend fractions not material quantities |
| zochem-102-2023 | literature | Zochem, French Process Zinc Oxide Grade102 TDS, effective24JUL2023, PDF1. https://www.zochem.com/wp-content/uploads/2024/02/Grade-102_2023.pdf | One grade distinguishes powder and treated102T, assay/moisture/particle tests and actual sack/pallet packing; no universal specification or shelf life |
| ec-pef-2021 | official_guidance | Commission Recommendation(EU)2021/2279, AnnexI §4.5, PDF63–64. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | General multifunctionality decision hierarchy only; no animal-sector or default recycling rules and no full PEF-compliance claim |
| epa-201a-2020 | method_factor | US EPA Method201A, 7October2020, §§1–2, PDF1–2. https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf | Measured filterable disjoint particulate fractions and sampling/condensable limits; use current applicable local method for actual site; no emission factor |
