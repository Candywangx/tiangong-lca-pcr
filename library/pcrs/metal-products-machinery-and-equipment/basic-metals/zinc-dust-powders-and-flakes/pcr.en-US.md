---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.zinc-dust-powders-and-flakes
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Zinc dust, powders and flakes

## 1. Scope and Applicability

This PCR applies to foreground production of zinc supplied as dust, powder, or flakes at the producing facility gate. It covers declared atomization of molten zinc, recovery of zinc dust from a zinc-oxide bed, and milling of zinc particles into flake form. The data package shall model only the route actually used.

The boundary starts with purchased zinc, zinc oxide, zinc powder, energy carriers, process media, and additives crossing the facility boundary and ends with net conforming loose product at the facility gate. Upstream production of those inputs is represented by linked datasets. Packaging, transport from the facility gate, downstream coating or chemical use, zinc oxide manufacture, primary zinc smelting, and zinc-scrap treatment are outside this PCR unless the study explicitly expands and discloses its boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.zinc-dust-powders-and-flakes |
| classification_refs | CPC 3.0: 41544, Zinc dust, powders and flakes |
| covered_products | Metallic zinc dust; metallic zinc powder; metallic zinc flakes; declared zinc-alloy particles sold within the same category |
| excluded_products | Unwrought zinc ingots; zinc bars, rods, profiles, wire, plates, sheets, strip, or foil; zinc oxide or other zinc compounds sold as products; zinc scrap; formulated coatings containing zinc particles |
| representative_product | Zinc dust or powder meeting the producer's declared zinc content, particle-size distribution, and apparent or tapped density specification |
| production_route | Atomization and recovery from molten zinc; zinc-dust recovery from a zinc-oxide bed; or milling and finishing of zinc powder into flakes |
| market_state | Dry or declared solvent-wetted particulate product at the producing facility gate, with product form, moisture or solvent content, additives, and packaging inclusion stated |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide zinc dust, zinc powder, or zinc flake of the declared composition and particle form at the producing facility gate |
| How much | 1 kg net conforming product, excluding packaging unless packaging is explicitly included in the study boundary |
| How well | Meets the producer's declared zinc content or alloy composition, particle-size distribution, morphology, apparent or tapped density, and moisture or residual-solvent specification |
| How long or cycle | One production batch or campaign; no service lifetime is assigned |
| reference_flow_link | The reference amount equals the net mass of conforming product after internal recycle, off-spec material, and retained process media are accounted for |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Zinc dust `4d92b8d4-6633-4238-b0e2-9096db3e8882` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; zinc content or alloy composition; particle-size distribution; particle morphology; apparent or tapped density; production route; dry or solvent-wetted state; moisture or residual-solvent content; surface treatment and additives; packaging inclusion; geography; technology; reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all zinc-bearing product or waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net mass on the declared product-state basis. State whether residual solvent, moisture, alloying elements, and surface additives are included. |
| `gas_reference_conditions` | Natural gas, compressed air, and other volume-based gases | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record meter conditions and convert gas volumes to the dataset's declared reference temperature and pressure before normalization. |
| `electricity_energy` | Electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity separately from fuels and convert kWh to MJ with the declared conversion; do not combine energy carriers. |
| `net_product_normalization` | All foreground inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg | Divide campaign totals by net conforming product mass. Internal recycle is not counted as a new external input or additional reference output. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased zinc, zinc oxide, or zinc powder at the facility receiving point, with grade and physical state declared |
| starting_condition_role | Foreground product input linked to an upstream dataset |
| product_classification_scope | Metallic zinc dust, powders, and flakes corresponding to CPC 3.0 subclass 41544 |
| recursive_input_rule | When zinc dust or powder in this same category is used to make flakes, record the upstream supplier dataset once as an input and do not recursively rebuild it under this PCR |
| upstream_dataset_requirement | Link each purchased material, fuel, electricity, gas, water, solvent, and additive to a geography-, technology-, and time-representative upstream dataset |
| disclosure | Declare route, starting material, zinc grade, product form, internal recycle, abatement, packaging inclusion, and any omitted route-specific exchange |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_selection` | foreground_system_boundary | Include only the declared route processes, but include every operation from the selected starting material through recovery, classification, and net conforming product at the facility gate. | `eu-jrc-nfm-bref-2017`; `eu-cn-explanatory-notes-zinc-2019`; `us-patent-7021573-zinc-flake` |
| `sb_upstream_linkage` | purchased_inputs | Treat purchased inputs as product flows with upstream datasets; do not absorb upstream production into the foreground unit process. |  |
| `sb_direct_releases` | direct_environmental_exchanges | Report measured direct releases after abatement as elementary flows and report collected residues separately from emitted material. | `eu-jrc-nfm-bref-2017` |
| `sb_packaging` | packaging | Exclude packaging from the reference product mass and default boundary; when packaging is included by study scope, add each actual packaging component as a separate atomic product input and disclose the change. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feed_melting` | Zinc feed preparation and melting | conditional | Include when the atomization route receives solid zinc rather than measured molten zinc | Foreground preparation of molten zinc | kg molten zinc transferred |
| `atomization_finishing` | Atomization, cooling, recovery, and classification | conditional | Include when zinc dust or powder is produced by air, water, inert-gas, or centrifugal atomization | Foreground particle formation and product recovery | kg net conforming zinc dust or powder |
| `dust_recovery_finishing` | Zinc-dust recovery and classification | conditional | Include when saleable zinc dust is recovered from a zinc-oxide bed rather than produced by atomization | Foreground dust recovery | kg net conforming recovered zinc dust |
| `flake_milling_finishing` | Zinc flake milling, cooling, recovery, and classification | conditional | Include when zinc powder or dust is milled into flake form | Foreground morphology conversion and product finishing | kg net conforming zinc flake |

At least one of `atomization_finishing`, `dust_recovery_finishing`, or `flake_milling_finishing` shall be included. Route conditions are applied to individual exchanges; unlisted recipe additives, process media, or direct releases shall be added as separate atomic rows when they cross the selected foreground boundary.

### Process: Zinc feed preparation and melting (`feed_melting`)

#### Inputs

##### Product flows

###### Unwrought zinc feed (`fm_zinc_feed`)

Received metallic zinc is weighed when it enters the melter.

- Selected flow: zinc `418775bb-a062-4748-87dd-73a5ee633bb4`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-weighed external zinc feed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_melting_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Electricity for feed preparation and melting (`fm_electricity`)

Meter electricity used by charging, induction or resistance heating, pumps, and local extraction assigned to this process.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity allocated to the melting campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg molten zinc transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_melting_inputs`
- Sources:

###### Natural gas for gas-fired melting (`fm_natural_gas`)

Include only when gaseous natural gas is combusted in the melter or holding furnace.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Reference-condition-corrected metered natural-gas volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg molten zinc transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_melting_inputs`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Molten zinc transferred to atomization (`fm_molten_zinc_out`)

This is a foreground-only intermediate linked directly to `ar_molten_zinc_in`.

- Selected flow: Molten zinc
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balance-calculated molten zinc transferred from the melter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per melting campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_melting_outputs`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

###### Zinc dross sent to external recovery or disposal (`fm_zinc_dross`)

Record net zinc dross leaving the foreground after any measured internal return.

- Selected flow: Zinc dross
- Flow property / unit: Mass / kg
- Amount rule: Weighed net dross by destination and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg molten zinc transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_melting_outputs`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Fossil carbon dioxide from natural-gas combustion (`fm_co2_fossil`)

Include direct fossil carbon dioxide only when on-site natural-gas combustion occurs.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or calculation from metered fuel using a documented carbon-balance factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg molten zinc transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_melting_outputs`
- Sources:

###### Zinc released to air from melting (`fm_zinc_to_air`)

Report measured zinc passing the final air-emission control boundary.

- Selected flow: zinc `08a91e70-3ddc-11dd-94e3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration multiplied by corrected dry gas volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg molten zinc transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_melting_outputs`
- Sources: `eu-jrc-nfm-bref-2017`

### Process: Atomization, cooling, recovery, and classification (`atomization_finishing`)

#### Inputs

##### Product flows

###### Molten zinc received from melting (`ar_molten_zinc_in`)

Use the same foreground internal-flow identity and quantity as `fm_molten_zinc_out`, or measure purchased molten zinc at receipt.

- Selected flow: Molten zinc
- Flow property / unit: Mass / kg
- Amount rule: Matched inter-process transfer or measured purchased molten-zinc mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming atomized product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomization_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Electricity for atomization and recovery (`ar_electricity`)

Meter electricity for pressure generation, atomizer drives, cooling, conveying, filtration, and classification.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity allocated to the atomization campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming atomized product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomization_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Compressed air as atomizing medium (`ar_compressed_air`)

Include only for air-atomized production and record delivered air at declared reference conditions.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume / m3
- Amount rule: Reference-condition-corrected metered compressed-air volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming atomized product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomization_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Process water as atomizing or make-up cooling medium (`ar_process_water`)

Include only water crossing the foreground boundary for water atomization or cooling-system make-up; exclude recirculated internal water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water mass or volume converted using documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming atomized product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomization_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

###### Nitrogen gas for inert atmosphere (`ar_nitrogen`)

Include when purchased or on-site-supplied gaseous nitrogen crosses the atomizer boundary.

- Selected flow: Nitrogen gas `92233c86-8e75-441c-94de-03cc91bc7c10`
- Flow property / unit: Mass / kg
- Amount rule: Metered or supplier-recorded nitrogen gas mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming atomized product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomization_inputs`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net conforming zinc dust or powder (`ar_zinc_dust_out`)

Record saleable material after cooling, fabric-filter recovery, classification, and internal recycle.

- Selected flow: Zinc dust `4d92b8d4-6633-4238-b0e2-9096db3e8882`
- Flow property / unit: Mass / kg
- Amount rule: Weighed net conforming product leaving the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomization_outputs`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

###### Zinc released to air from atomization and recovery (`ar_zinc_to_air`)

Report measured zinc passing the final fabric filter or other air-emission control boundary.

- Selected flow: zinc `08a91e70-3ddc-11dd-94e3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration multiplied by corrected dry gas volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming atomized product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_atomization_outputs`
- Sources: `eu-jrc-nfm-bref-2017`

### Process: Zinc-dust recovery and classification (`dust_recovery_finishing`)

#### Inputs

##### Product flows

###### Zinc oxide feed to the recovery bed (`dr_zinc_oxide`)

Include only externally supplied zinc oxide crossing the selected recovery-process boundary.

- Selected flow: zinc oxide `1512d759-45f7-4cf2-a42c-d02a8f71a19f`
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry-basis zinc oxide feed with composition recorded
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming recovered zinc dust
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_recovery_inputs`
- Sources: `eu-cn-explanatory-notes-zinc-2019`

###### Electricity for dust recovery and classification (`dr_electricity`)

Meter electricity for recovery equipment, conveying, filtration, and classification.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity allocated to the recovery campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming recovered zinc dust
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_recovery_inputs`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net conforming recovered zinc dust (`dr_zinc_dust_out`)

Record the mass of saleable recovered zinc dust after classification and internal return.

- Selected flow: Zinc dust `4d92b8d4-6633-4238-b0e2-9096db3e8882`
- Flow property / unit: Mass / kg
- Amount rule: Weighed net conforming recovered product leaving the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dust_recovery_outputs`
- Sources: `eu-cn-explanatory-notes-zinc-2019`

##### Waste flows

##### Elementary flows

###### Zinc released to air from dust recovery (`dr_zinc_to_air`)

Report measured zinc passing the final air-emission control boundary.

- Selected flow: zinc `08a91e70-3ddc-11dd-94e3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration multiplied by corrected dry gas volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming recovered zinc dust
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dust_recovery_outputs`
- Sources:

### Process: Zinc flake milling, cooling, recovery, and classification (`flake_milling_finishing`)

#### Inputs

##### Product flows

###### Zinc powder or dust feed (`fl_zinc_powder_in`)

Record purchased or transferred zinc particles used as the milling feed and declare their grade and particle-size distribution.

- Selected flow: Zinc dust `4d92b8d4-6633-4238-b0e2-9096db3e8882`
- Flow property / unit: Mass / kg
- Amount rule: Weighed zinc-particle feed to the milling campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming zinc flake
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_milling_inputs`
- Sources: `us-patent-7021573-zinc-flake`

###### Electricity for milling and finishing (`fl_electricity`)

Meter electricity for milling, cooling, solvent recovery, drying, conveying, and classification.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity allocated to the flake-production campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming zinc flake
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_milling_inputs`
- Sources: `us-patent-7021573-zinc-flake`

###### White spirit for wet milling (`fl_white_spirit`)

Include only fresh and externally supplied white spirit used as the wet-milling solvent; account for recovered internal solvent separately in the mass balance.

- Selected flow: White spirit and special boiling point industrial spirits `5fb93398-c4c6-4b60-bb16-ca956bc35985`
- Flow property / unit: Mass / kg
- Amount rule: Weighed fresh solvent make-up entering the milling campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming zinc flake
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_milling_inputs`
- Sources: `us-patent-7021573-zinc-flake`

###### Stearic acid milling lubricant (`fl_stearic_acid`)

Include only when stearic acid is actually added to the milling recipe; record other lubricants as separate atomic rows.

- Selected flow: Stearic acid
- Flow property / unit: Mass / kg
- Amount rule: Batch-weighed fresh stearic acid addition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming zinc flake
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_milling_inputs`
- Sources: `us-patent-7021573-zinc-flake`

###### Process water for mill cooling make-up (`fl_process_water`)

Include only water crossing the foreground boundary as cooling-system make-up; exclude recirculated internal water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up water mass or volume converted using documented density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming zinc flake
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_milling_inputs`
- Sources: `us-patent-7021573-zinc-flake`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net conforming zinc flake (`fl_zinc_flake_out`)

Record saleable flake after milling, media separation, drying when applicable, classification, and internal recycle.

- Selected flow: Zinc flake
- Flow property / unit: Mass / kg
- Amount rule: Weighed net conforming flake leaving the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_flake_milling_outputs`
- Sources: `us-patent-7021573-zinc-flake`

##### Waste flows

##### Elementary flows

###### Zinc released to air from milling and finishing (`fl_zinc_to_air`)

Report measured zinc passing the final air-emission control boundary.

- Selected flow: zinc `08a91e70-3ddc-11dd-94e3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration multiplied by corrected dry gas volume for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming zinc flake
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_flake_milling_outputs`
- Sources: `us-patent-7021573-zinc-flake`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | multi_route_or_shared_equipment | Prefer process subdivision, route-specific meters, batch records, and operating-time attribution before applying allocation. |  |
| `allocation_internal_recycle` | internal_zinc_recycle | Do not allocate burdens to zinc dust, off-spec particles, or dross returned within the same foreground system; subtract internal returns once so they are neither new external inputs nor additional outputs. | `eu-jrc-nfm-bref-2017` |
| `allocation_exported_coproduct` | exported_zinc_bearing_output | When a zinc-bearing output has an intended external use and independently measured quantity, apply a documented physical causal relation where defensible; otherwise apply mass allocation and report a sensitivity case. |  |
| `allocation_waste_treatment` | wastes | Assign collection and treatment burdens to the foreground product unless a reviewed downstream dataset documents a different cut-off; do not use an avoided-burden credit without explicit disclosure. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_melting_inputs` | `feed_melting` | External zinc, electricity, and natural-gas inputs | Scale tickets; batch sheets; electricity meter; gas meter | input identity; gross and tare mass; meter opening and closing; reference conditions; batch id | Reconcile calibrated meters and batch weights to the same campaign | kg; MJ; m3 | Each batch and monthly meter reconciliation | Complete declared representative production period | All equipment serving the declared melting route | Sum external inputs; allocate shared meters by documented operating time or submeter; normalize to molten zinc transferred | Calibration records; invoices; batch reconciliation; meter logs |
| `cp_feed_melting_outputs` | `feed_melting` | Molten zinc, dross, fossil CO2, and zinc-to-air outputs | Transfer scale; residue tickets; fuel analysis; stack records | transferred mass; dross mass; fuel carbon; gas flow; zinc concentration; moisture; oxygen; operating hours | Match output and emission records to the melting campaign and final abatement boundary | kg; Nm3 | Each transfer or residue shipment; emissions at permit frequency | Same period as melting inputs | Melter, holding furnace, and assigned abatement | Calculate net transferred zinc and period emissions; retain destination-specific dross totals | Scale calibration; laboratory reports; stack-test QA; carbon-balance worksheet |
| `cp_atomization_inputs` | `atomization_finishing` | Molten zinc, electricity, compressed air, process water, and nitrogen | Transfer scale; batch sheet; utility meters | zinc mass; electricity; gas or air volume and reference conditions; water make-up; route id | Record only utilities used by the declared atomization route | kg; MJ; m3 | Each campaign with monthly reconciliation | Complete declared representative production period | Atomizer, cooling, conveying, and filtration equipment | Sum by campaign; exclude recirculated water and internal gases; normalize to conforming output | Calibration; batch route record; meter reconciliation |
| `cp_atomization_outputs` | `atomization_finishing` | Conforming product and zinc-to-air emission | Product scales; classifier records; filter records; stack measurements | product mass; product grade; particle-size distribution; gas flow; zinc concentration | Reconcile product, internal returns, collected dust, and emitted zinc | kg; Nm3 | Each batch; emissions at permit frequency | Same period as atomization inputs | Atomizer through final classifier and abatement outlet | Net saleable product equals dispatched conforming mass; calculate emitted zinc from corrected gas and concentration | Scale calibration; particle-size report; stack-test QA; mass balance |
| `cp_dust_recovery_inputs` | `dust_recovery_finishing` | Zinc oxide and electricity inputs | Feed scale; composition certificate; electricity meter | dry feed mass; zinc content; moisture; electricity; campaign id | Reconcile dry-basis feed and energy to each recovery campaign | kg; MJ | Each campaign with monthly reconciliation | Complete declared representative production period | Recovery bed, conveying, and classification equipment | Convert feed to dry basis; sum electricity; normalize to conforming recovered dust | Scale and meter calibration; supplier certificate; laboratory assay |
| `cp_dust_recovery_outputs` | `dust_recovery_finishing` | Conforming recovered dust and zinc-to-air emission | Product scales; classifier records; stack measurements | product mass; zinc content; particle-size distribution; gas flow; zinc concentration | Reconcile recovered dust and measured final releases to the campaign | kg; Nm3 | Each batch; emissions at permit frequency | Same period as recovery inputs | Recovery unit through final classifier and abatement outlet | Sum net conforming product and calculate period zinc release | Scale calibration; laboratory assay; stack-test QA; mass balance |
| `cp_flake_milling_inputs` | `flake_milling_finishing` | Zinc feed, electricity, solvent, lubricant, and cooling-water inputs | Batch sheets; scales; utility meters; solvent inventory | zinc mass; electricity; fresh solvent; recovered solvent; lubricant; water make-up; route id | Record fresh external inputs separately from internal recovery | kg; MJ | Each milling campaign with monthly reconciliation | Complete declared representative production period | Mill, cooling, solvent recovery, drying, and classifier | Sum fresh inputs by campaign; do not count recovered internal solvent as a new external input | Scale and meter calibration; material issue slips; solvent inventory closure |
| `cp_flake_milling_outputs` | `flake_milling_finishing` | Conforming zinc flake and zinc-to-air emission | Product scales; morphology and size tests; stack measurements | product mass; zinc content; morphology; particle-size distribution; gas flow; zinc concentration | Reconcile product, internal returns, retained solvent, and final zinc release | kg; Nm3 | Each batch; emissions at permit frequency | Same period as milling inputs | Mill through final classifier and abatement outlet | Sum net conforming product; calculate period zinc emission; normalize to reference flow | Scale calibration; morphology and size reports; stack-test QA; campaign mass balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | Normalized amount = campaign exchange amount divided by net conforming reference-product mass | campaign exchange; net conforming product mass | kg, MJ, or m3 per kg reference product |  |
| `calc_gas_reference_volume` | volume-based gas rows | Correct measured gas volume to the declared reference temperature and pressure using the documented meter or ideal-gas correction | measured volume; pressure; temperature; compressibility if used | reference-condition m3 |  |
| `calc_zinc_air_release` | zinc elementary-flow rows | Zinc released = corrected dry-gas volume multiplied by measured zinc mass concentration, with unit conversion | dry-gas volume; zinc concentration; sampling duration | kg zinc released | `eu-jrc-nfm-bref-2017` |
| `calc_internal_transfer_match` | `fm_molten_zinc_out`; `ar_molten_zinc_in` | The paired internal transfer quantities shall be equal for the same campaign after inventory-boundary reconciliation | transfer mass; batch id | matched internal molten-zinc mass |  |
| `calc_net_external_input` | recycled zinc or solvent | Net external input = purchased input crossing the boundary; internally recovered material is tracked in the process balance but not added again as an external input | purchase records; internal return records | net external input |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain zinc assay or alloy composition, product form, particle-size distribution, morphology, density specification, moisture or solvent state, and additive declaration for every represented product family. | Batch certificate of analysis and product specification |
| `dq_route_identity` | process map | Identify the actual atomization, recovery, or milling route and mark every conditional row as applicable or not applicable with a reason. | Process flow diagram, equipment list, and signed route declaration |
| `dq_mass_balance` | zinc-bearing rows | Reconcile zinc-bearing inputs, net product, internal returns, dross, retained samples, stock change, and measured releases over the same period; investigate unexplained imbalance. | Campaign and annual zinc mass-balance worksheet |
| `dq_meter_quality` | measured inputs and outputs | Use calibrated scales and meters or document the uncertainty and correction applied to uncalibrated instruments. | Current calibration certificates and data-quality exception log |
| `dq_temporal_representativeness` | foreground dataset | Use a representative consecutive production period and disclose shutdowns, trials, abnormal campaigns, and proxy periods. | Production calendar and coverage assessment |
| `dq_source_linkage` | purchased inputs | Record supplier, geography, technology, and reference period for each upstream dataset and explain material proxy choices. | Upstream dataset crosswalk and supplier records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_flow` | foreground_dataset_conformance | Confirm that the reference output is exactly 1 kg net conforming product after normalization and that all required qualifiers are populated. |  |
| `val_route_completeness` | process_map | Confirm that at least one product-forming route is included, each included process has all applicable atomic exchanges, and every omitted conditional row has a documented reason. | `eu-jrc-nfm-bref-2017`; `eu-cn-explanatory-notes-zinc-2019`; `us-patent-7021573-zinc-flake` |
| `val_uuid_semantics` | uuid_bearing_rows | Confirm each UUID remains state 100 and matches the selected flow's English and Chinese baseName, flow type, classification, property, unit group, and product state. |  |
| `val_internal_transfer` | internal_molten_zinc | Confirm `fm_molten_zinc_out` equals `ar_molten_zinc_in` for every linked campaign and is not counted as an external input. |  |
| `val_zinc_balance` | zinc_mass_balance | Confirm all zinc-bearing inputs, products, residues, internal returns, stock changes, and direct zinc releases reconcile for the declared period; report the imbalance and investigation threshold used. | `eu-jrc-nfm-bref-2017` |
| `val_air_emissions` | direct_air_releases | Confirm zinc and fossil carbon dioxide rows represent direct foreground releases after abatement and do not duplicate upstream electricity or fuel-supply emissions. | `eu-jrc-nfm-bref-2017` |
| `val_no_unresolved_proxy` | publication_readiness | Reject publication if any unresolved flow is replaced by a semantic proxy or if unresolved UUID and range-evidence needs remain undisclosed. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset or background_dataset after review and publication |
| downstream_use | Foreground or background modelling of zinc dust, powder, or flake supplied at the producing facility gate |
| allowed_use | Product systems whose required zinc particle form, composition, route, geography, technology, and reference period are compatible with the dataset disclosures |
| excluded_use | Unwrought zinc; zinc oxide or other compounds; zinc scrap treatment; fabricated zinc products; coating manufacture; a different particle form or production route without documented representativeness |
| required_metadata | PCR id and version; product form; zinc content or alloy composition; particle-size distribution; morphology; apparent or tapped density; route; dry or solvent-wetted state; moisture or solvent content; additives; packaging inclusion; geography; technology; reference period; upstream datasets; allocation; cut-offs |
| required_quality_disclosure | Data coverage; mass-balance result; meter and scale quality; emission measurement method; proxy inputs; route exclusions; unresolved identities or range gaps; uncertainty limitations |
| update_trigger | Change in particle-forming route, feed grade, product specification, abatement, energy supply, solvent system, allocation, site geography, or data period that materially changes representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-09-04 | Official product classification identity and hierarchy |
| `eu-cn-explanatory-notes-zinc-2019` | Official guidance (`official_guidance`) | European Union, consolidated Combined Nomenclature explanatory notes, zinc entries, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:02019XC0329(02)-20190724, retrieved 2026-09-04 | Distinguishing atomized zinc powder and zinc dust recovered from a zinc-oxide bed |
| `eu-jrc-nfm-bref-2017` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Non-Ferrous Metals Industries, 2017, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf, retrieved 2026-09-04 | Melting, atomization, inert cooling, fabric-filter recovery, product handling, and direct zinc-emission measurement relevance |
| `us-patent-7021573-zinc-flake` | Literature (`literature`) | US7021573B2, Process for dry milling zinc powder to produce zinc flake, https://patents.google.com/patent/US7021573B2/en, retrieved 2026-09-04 | Flake morphology and conditional milling, solvent, lubricant, cooling, and classification operations |
| `china-mof-2026-tariff-product-names` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, 2026 tariff list, entries 79031000 and 79039000, https://m.mof.gov.cn/zcfb/202604/P020260428407579725260.pdf, retrieved 2026-09-04 | Professional Chinese product terminology for zinc dust, zinc powder, and flake-form powder |
