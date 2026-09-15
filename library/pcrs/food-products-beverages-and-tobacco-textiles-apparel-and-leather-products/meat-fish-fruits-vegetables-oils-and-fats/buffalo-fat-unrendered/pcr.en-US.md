---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.buffalo-fat-unrendered
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Buffalo fat, unrendered

## 1. Scope and Applicability

This PCR applies to fat from buffaloes that remains as fatty tissue or raw fat material after slaughter, dressing, cutting, or trimming and has not been rendered. It covers physical recovery and trimming at the joint slaughter or cutting boundary, optional chilling or freezing, packaging, internal handling, and the declared transport handoff. The intended grade or route (food, feed, technical, or another declared route) shall be stated; food-route hygiene provisions apply only when the product is intended for human consumption.

The default foreground does not include thermal rendering, wet or dry rendering, extraction, melting intended to separate fat from tissue, refining, fractionation, hydrogenation, interesterification, deodorisation, or other conversion to rendered fat or oil. Rendered buffalo tallow and animal oils or fractions in CPC 21521-21529 are outside scope. In particular, CPC 21523 tallow and CPC 21529 marrow, bone, or foot oil and their fractions shall not be represented by this PCR. Fat from cattle, sheep, goats, pigs, poultry, or other animals is also outside scope.

UNSD CPC Version 3.0 is the authority for the classification boundary. Codex CXC 58-2005 supports applicable slaughter, dressing, inspection, hygiene, temperature-control, storage, packaging, and transport-control background for a food route. Codex CXS 211-1999 is used only to distinguish named rendered animal fats from this unrendered product; its rendered-fat descriptions, composition ranges, and quality values are not buffalo-unrendered-fat specifications and shall not be used as category defaults.

No cattle yield, composition, price, or allocation factor may be transferred to buffalo. Where buffalo-specific published quantitative evidence is absent, this PCR requires buffalo batch and site records. The only permitted provisional fallback in the inventory is the explicitly labelled, auditable equipment-energy `reasoned_estimate`; it contains no cross-species default and shall be replaced when submetered or otherwise verified process energy becomes available.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.buffalo-fat-unrendered |
| classification_refs | CPC 3.0: 21513, Buffalo fat, unrendered (exact classification reference) |
| covered_products | Unrendered fat physically separated from buffalo carcasses or parts after slaughter, dressing, cutting, or trimming; loose, bulk, or packaged; at the declared ambient, chilled, or frozen handoff state |
| excluded_products | Rendered tallow; rendered animal fats and oils in CPC 21521-21529; marrow, bone, or foot oils and fractions; refined, fractionated, hydrogenated, or otherwise modified fats; fats from non-buffalo species; mixtures whose buffalo-unrendered-fat mass is not separately measured |
| representative_product | One declared lot of unrendered buffalo fatty tissue or raw fat material at the producer's dispatch handoff |
| production_route | Buffalo slaughter/dressing and physical fat separation or trimming; optional chilling/freezing; packaging and internal handling; optional declared transport to a customer handoff; no rendering or refining |
| market_state | Unrendered fatty tissue or raw fat material with grade/intended use, anatomical or source-tissue description, temperature state, packaging state, and handoff point declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide unrendered buffalo fatty tissue or raw buffalo fat material at a declared handoff point for a declared downstream use |
| How much | 1 kg net product mass, excluding packaging and transport equipment |
| How well | Buffalo identity is traceable; the material remains unrendered; tissue/source description, intended grade or use, acceptance status, temperature state, and packaging state are declared |
| How long or cycle | At the declared handoff; any storage duration, shelf-life statement, and chilled or frozen holding time are reported rather than assumed |
| reference_flow_link | 1 kg of the reference product output at the declared handoff, after measured batch quantities are normalized |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Buffalo fat, unrendered `788db006-278e-41d6-ac60-d33b1d3edf34` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species: buffalo; material_state: unrendered; tissue_or_source_description; intended_grade_or_use; post_mortem_or_acceptance_status where applicable; temperature_state and handoff_temperature; packaging_state; lot_or_batch; geography; declared_handoff_point; storage_duration when applicable |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net unrendered buffalo-fat output after normalizing measured accepted handoff mass; do not include packaging, pallets, containers, ice, or transport equipment. |
| `weighing_state` | Reference product and co-products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record gross, tare, net mass, weighing time, temperature state, scale identifier, and lot; do not convert between anatomical tissue states or animal species with assumed composition factors. |
| `batch_mass_balance` | Joint slaughter, dressing, and separation batch | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile measured buffalo input and all product, co-product, retained, condemned, waste, and measured loss outputs on the same batch basis; disclose any residual rather than forcing balance through a cattle or generic yield. |
| `utility_units` | Water, electricity, fuels, and refrigerants | Quantity property appropriate to the selected flow | kg, m3, kWh, MJ, or another declared SI-compatible unit | Retain the measured billing or meter unit and document every conversion to the normalized reference flow; separate energy carriers and do not combine mass and energy quantities. |
| `transport_service` | Included transport to the declared handoff | Mass and distance | t·km | Calculate tonne-kilometres from actual shipped net mass and actual route distance; record payload, empty return, and cold-chain condition separately when material. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified buffaloes entering the slaughter/dressing operation that jointly produces the fat, or an upstream buffalo slaughter/dressing dataset that ends at the same post-mortem-approved separation point |
| starting_condition_role | Joint-production starting condition for attribution of buffalo production and slaughter burdens before direct fat recovery, trimming, conditioning, and handoff |
| product_classification_scope | Unrendered buffalo fat only; CPC 3.0 code 21513 is a classification reference and does not expand the boundary to rendered fats or other species |
| recursive_input_rule | Purchased unrendered buffalo fat entering the foreground is recorded once as a technosphere product input with an upstream dataset ending at its supplier handoff; do not recursively recreate its prior slaughter and separation inside the receiving process |
| upstream_dataset_requirement | Use traceable buffalo-production and supplier datasets for live buffaloes and purchased inputs; an upstream unrendered-fat dataset must disclose the same species, state, handoff, and joint-production allocation basis |
| disclosure | Declare actual starting point, facility operations, tissue/source description, inspection or acceptance status where applicable, temperature route, storage duration, packaging, included transport, handoff point, excluded operations, and all allocation choices |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_joint_origin` | Slaughter, dressing, cutting, and fat separation | Include the operation where unrendered buffalo fat is physically separated and the joint outputs needed to apply the co-product rules. When that operation is represented upstream, its allocated result and handoff shall be explicit. | `unsd-cpc-3-21513`; `eu-pef-2021-2279` |
| `boundary_unrendered` | All foreground operations | Do not include rendering or refining in the default foreground. Heating whose purpose or effect is to render, melt out, extract, refine, or fractionate fat changes the product state and requires a rendered-fat PCR or separately declared downstream system. | `unsd-cpc-3-21513`; `codex-cxs-211-1999` |
| `boundary_conditioning` | Cooling, freezing, storage, and packaging | Include actual electricity, refrigerant, water, packaging, product loss, and waste for conditioning and packaging performed before the declared handoff; record temperature and holding time rather than applying a generic buffalo-fat assumption. | `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031` |
| `boundary_transport_handoff` | Transport | The default handoff is producer dispatch after loading, so outbound transport is excluded. Include transport only when the declared reference product is delivered to another handoff, and then record actual route, payload, temperature control, and return assumptions. | `eu-pef-2021-2279` |
| `boundary_hygiene` | Product intended for human consumption | Record post-mortem acceptance, hygienic separation, contamination control, temperature control, storage, and packaging controls applicable to the actual food route. This PCR does not create legal limits or certify food compliance. | `codex-cxc-58-2005` |
| `boundary_inventory_completeness` | Foreground facility | Inventory water, energy, raw materials, waste water, waste gas or direct air-emission streams, and residues at the process or facility level appropriate to the operation. EU BAT values or legal applicability thresholds are not imported into this PCR. | `eu-fdm-bat-2019-2031` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `slaughter_fat_recovery` | Buffalo slaughter, dressing, and unrendered-fat recovery | required | Always include directly or through a traceable upstream joint-production dataset | Establish joint outputs, physical separation, and direct recovery burdens without rendering | Per measured joint-production batch, normalized to 1 kg accepted unrendered buffalo fat at handoff |
| `temperature_conditioning` | Chilling, freezing, and cold storage | conditional | Include when cooling, freezing, or controlled storage occurs before the declared handoff | Bring and maintain the product at its declared temperature state | Per 1 kg conditioned unrendered buffalo fat, with actual holding time |
| `packaging_handoff` | Packaging, internal handling, and dispatch handoff | required | Include the actual bulk, reusable-container, or packaged route through loading | Establish net handoff mass, packaging, handling, and dispatch losses | Per 1 kg net unrendered buffalo fat at dispatch |
| `transport_to_handoff` | Transport to a delivered handoff | conditional | Include only when the declared handoff is beyond producer dispatch | Represent the actual delivery route without duplicating a background transport service | Per 1 kg delivered product and actual tonne-kilometres |

### Process: Buffalo slaughter, dressing, and unrendered-fat recovery (`slaughter_fat_recovery`)

#### Inputs

##### Product flows

###### Allocated live-buffalo or upstream joint-production input (`buffalo_joint_input`)

Record the buffalo input that gives rise to the joint slaughter outputs. The amount assigned to unrendered fat is calculated with the allocation rules in section 7; it is never derived from a cattle yield or cattle allocation factor.

- Selected flow: Site-selected live-buffalo product flow or a traceable upstream buffalo joint-production dataset
- Flow property / unit: Mass / kg
- Amount rule: measured buffalo input multiplied by the calculated buffalo-fat allocation factor, divided by accepted unrendered-fat output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unrendered buffalo fat at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_joint_batch`
- Sources: `eu-pef-2021-2279`

###### Metered electricity and other energy for separation (`separation_energy_metered`)

Record each metered electricity, steam, fuel, or other energy carrier used for slaughter-area operations and physical fat separation, with shared use allocated on a documented meter or engineering basis.

- Selected flow: Site-selected electricity or energy-carrier product flow, one row per carrier
- Flow property / unit: Energy or mass / kWh, MJ, or kg as applicable
- Amount rule: measured process energy divided by accepted unrendered-fat output after direct attribution and joint-process allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unrendered buffalo fat at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eu-fdm-bat-2019-2031`

###### Provisional equipment-model energy fallback (`separation_energy_provisional`)

Use this row only when process-specific metering is unavailable. It is an auditable, non-numeric reasoned estimate based on the actual equipment and operating records, and is mutually exclusive with the metered amount for the same carrier and period.

- Selected flow: Site-selected electricity or energy-carrier product flow, one row per carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: sum of equipment rated power multiplied by recorded runtime and a documented equipment-specific load factor, divided by accepted unrendered-fat output; disclose every load factor and uncertainty
- Value mode: Modelled estimate (`modelled_estimate`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unrendered buffalo fat at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Reasoned estimate (`reasoned_estimate`)
- Collection protocol: `cp_utilities`
- Sources:

###### Process and sanitation water (`recovery_water`)

Record water crossing the facility boundary for applicable slaughter, cleaning, sanitation, and physical separation operations; exclude water assigned to unrelated products through measured subdivision.

- Selected flow: Site-selected water-supply product flow
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: measured water use directly attributable to fat recovery plus the documented allocated share of joint-process water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unrendered buffalo fat at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

###### Cleaning, sanitation, and other operating materials (`operating_materials`)

Record each chemical, consumable, or other product input that crosses the boundary for the applicable route. Do not infer a formulation or dose from another animal species.

- Selected flow: Site-selected operating-material product flow, one row per material
- Flow property / unit: Mass / kg
- Amount rule: measured purchase, issue, or dosing records attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unrendered buffalo fat at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_operating_materials`
- Sources: `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unrendered buffalo-fat reference output (`unrendered_buffalo_fat_output`)

This is accepted unrendered buffalo fatty tissue or raw fat material leaving the process chain in the declared state.

- Selected flow: Buffalo fat, unrendered `788db006-278e-41d6-ac60-d33b1d3edf34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed at 1 kg after normalization from measured net accepted handoff mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product output at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_fat_output`
- Sources: `unsd-cpc-3-21513`

###### Other buffalo slaughter and cutting co-products (`joint_co_products`)

Record each separately marketable buffalo output, such as carcass/meat, edible offal, hide/skin, bones, or other declared material, as its own product flow with measured mass and disposition.

- Selected flow: Site-selected co-product flow, one row per output
- Flow property / unit: Mass / kg
- Amount rule: measured saleable or transferred mass for the joint-production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured joint-production batch and reported per 1 kg accepted unrendered buffalo fat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_joint_batch`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Condemned, rejected, or non-product tissue and residues (`rejected_tissue_residues`)

Record actual mass, reason for rejection, regulatory category where applicable, destination, and treatment route. Do not relabel rendered output or another animal's fat as unrendered buffalo fat.

- Selected flow: Site-selected waste flow, one row per waste class and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or condemned mass leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unrendered buffalo fat at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

###### Process waste water (`process_wastewater`)

Record waste-water volume or mass and the treatment handoff, with relevant measured characteristics when available and required by the applicable facility context.

- Selected flow: Site-selected waste-water flow
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: measured discharge or treatment-transfer quantity attributable to the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unrendered buffalo fat at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Direct foreground emissions (`direct_recovery_emissions`)

Record each measured or calculated direct emission from on-site fuel use or process operation as the corresponding elementary flow. Do not duplicate emissions already represented by a purchased electricity, fuel, or treatment dataset.

- Selected flow: Corresponding Tiangong elementary flow, one row per emitted substance and compartment
- Flow property / unit: Mass / kg
- Amount rule: measured direct emission or value calculated from the recorded foreground fuel/activity and a separately documented applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted unrendered buffalo fat at the declared handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Chilling, freezing, and cold storage (`temperature_conditioning`)

#### Inputs

##### Product flows

###### Unrendered buffalo fat entering temperature conditioning (`fat_to_conditioning`)

Record the measured unrendered fat entering conditioning and preserve lot identity and state.

- Selected flow: Buffalo fat, unrendered `788db006-278e-41d6-ac60-d33b1d3edf34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass entering conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_conditioning`
- Sources: `codex-cxc-58-2005`

###### Conditioning electricity and energy (`conditioning_energy`)

Record metered or documented allocated energy by carrier for chilling, freezing, and storage over the actual holding time.

- Selected flow: Site-selected electricity or energy-carrier product flow, one row per carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: measured conditioning energy allocated by product mass, equipment time, or another documented causal driver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned product output and actual storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_conditioning`
- Sources: `codex-cxc-58-2005`; `eu-fdm-bat-2019-2031`

###### Refrigerant make-up (`refrigerant_makeup`)

Record actual refrigerant additions allocated to the relevant equipment and period.

- Selected flow: Site-selected refrigerant product flow
- Flow property / unit: Mass / kg
- Amount rule: measured refrigerant make-up attributed to the conditioning equipment and inventory period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned product output and actual storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_conditioning`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned unrendered buffalo fat (`conditioned_fat_output`)

Record net mass and actual temperature state after conditioning; cooling or freezing does not authorize rendering.

- Selected flow: Buffalo fat, unrendered `788db006-278e-41d6-ac60-d33b1d3edf34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass leaving conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conditioned product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_temperature_conditioning`
- Sources: `codex-cxc-58-2005`

##### Waste flows

###### Conditioning loss or rejected product (`conditioning_loss`)

Record mass loss, rejected material, and destination without assuming a buffalo-specific storage-loss factor.

- Selected flow: Site-selected waste or recovery flow according to actual disposition
- Flow property / unit: Mass / kg
- Amount rule: measured input mass minus accepted output and other measured retained or transferred masses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conditioned product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_temperature_conditioning`
- Sources:

##### Elementary flows

###### Refrigerant released to air (`refrigerant_release`)

Record the corresponding refrigerant elementary flow when a release is measured or calculated from a verified equipment mass balance.

- Selected flow: Corresponding Tiangong refrigerant emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or opening charge plus additions minus closing charge and documented recovery, allocated to the conditioning period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conditioned product output and actual storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_temperature_conditioning`
- Sources: `eu-fdm-bat-2019-2031`

### Process: Packaging, internal handling, and dispatch handoff (`packaging_handoff`)

#### Inputs

##### Product flows

###### Unrendered buffalo fat entering handoff preparation (`fat_to_handoff`)

Record the lot and measured product mass entering packaging or bulk loading.

- Selected flow: Buffalo fat, unrendered `788db006-278e-41d6-ac60-d33b1d3edf34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net product mass entering handoff preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net product dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fat_output`
- Sources:

###### Primary, secondary, and transport packaging (`packaging_materials`)

Record each packaging material, reusable container, liner, label, pallet, or other packaging item crossing the boundary; record reuse cycles or return rates from actual records.

- Selected flow: Site-selected packaging product flow, one row per material
- Flow property / unit: Mass or count / kg or item, converted to kg where needed with documented item mass
- Amount rule: measured issued packaging minus documented returns, normalized to net dispatched product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net product dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_handoff`
- Sources: `eu-pef-2021-2279`

###### Internal handling energy (`handling_energy`)

Record metered electricity or fuel for pumps, conveyors, forklifts, or other handling performed up to loading.

- Selected flow: Site-selected electricity or fuel product flow, one row per carrier
- Flow property / unit: Energy or mass / kWh, MJ, or kg as applicable
- Amount rule: measured or documented allocated handling energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net product dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_handoff`
- Sources: `eu-fdm-bat-2019-2031`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net unrendered buffalo fat at dispatch (`dispatch_output`)

Record net mass, package or bulk state, temperature, lot, and timestamp at the dispatch handoff.

- Selected flow: Buffalo fat, unrendered `788db006-278e-41d6-ac60-d33b1d3edf34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net dispatched mass, normalized to 1 kg reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product at dispatch handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_fat_output`
- Sources: `unsd-cpc-3-21513`

##### Waste flows

###### Packaging scrap and handoff product loss (`packaging_handoff_waste`)

Record packaging scrap and product loss separately by material and destination.

- Selected flow: Site-selected waste flow, one row per material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured discarded packaging or product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net product dispatched
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_handoff`
- Sources: `eu-fdm-bat-2019-2031`

##### Elementary flows

### Process: Transport to a delivered handoff (`transport_to_handoff`)

#### Inputs

##### Product flows

###### Product at producer dispatch (`fat_for_transport`)

Record the shipped net mass and dispatch condition when a delivered handoff is declared.

- Selected flow: Buffalo fat, unrendered `788db006-278e-41d6-ac60-d33b1d3edf34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net shipped mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg delivered product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_transport_handoff`
- Sources:

###### Transport service to delivered handoff (`transport_service_input`)

Use an appropriate background transport service when the carrier is outside foreground control. If owned transport is modelled with foreground fuel and direct emissions, omit this service row to prevent double counting.

- Selected flow: Site-selected transport-service product flow for the actual mode and temperature condition
- Flow property / unit: Transport service / t·km
- Amount rule: actual route distance multiplied by shipped net tonnes, adjusted only for documented allocation, payload, and return assumptions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg delivered product
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_handoff`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net unrendered buffalo fat at delivered handoff (`delivered_output`)

Record net accepted mass, temperature, package condition, delivery time, and losses at the delivered handoff.

- Selected flow: Buffalo fat, unrendered `788db006-278e-41d6-ac60-d33b1d3edf34`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net accepted delivery mass, normalized to 1 kg when the delivered handoff defines the reference flow
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference product at delivered handoff
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_transport_handoff`
- Sources: `unsd-cpc-3-21513`

##### Waste flows

###### Transport loss or rejected delivery (`transport_loss`)

Record measured product loss or rejected mass and its destination; do not assume a generic cold-chain loss percentage.

- Selected flow: Site-selected waste or recovery flow according to actual disposition
- Flow property / unit: Mass / kg
- Amount rule: measured shipped mass minus accepted delivery mass and documented retained or returned mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg delivered product
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport_handoff`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_first` | Joint slaughter, dressing, cutting, separation, chilling, packaging, and transport operations | Subdivide and directly assign inputs, emissions, wastes, and treatment flows that are causally attributable to unrendered buffalo-fat recovery or to another output before allocating residual joint burdens. | `eu-pef-2021-2279` |
| `alloc_joint_residual` | Residual joint slaughter and dressing burdens | When subdivision is not possible, calculate site- and period-specific economic allocation among all marketable buffalo outputs using measured output mass and matched net revenue or price records: allocation factor i = (mass i × price i) / sum(mass j × price j). Report every output, value basis, currency, period, and factor. | `eu-pef-2021-2279` |
| `alloc_no_cattle_proxy` | Buffalo-fat allocation | Do not use cattle, pig, sheep, or goat slaughter mass fractions, prices, yields, composition, or default allocation factors. Recommendation (EU) 2021/2279 provides slaughter defaults for cattle, pigs, sheep, and goats, not buffalo; absence of buffalo site data makes the allocation incomplete rather than authorising a cattle proxy. | `eu-pef-2021-2279` |
| `alloc_fat_specific_operations` | Fat trimming, conditioning, packaging, and delivery | Assign operations performed solely for the unrendered-fat output directly to that output. Do not dilute these burdens across carcass meat, offal, hide, or other joint outputs. | `eu-pef-2021-2279` |
| `alloc_waste_and_negative_value` | Condemned material, residues, and outputs without a positive market function | Record actual classification and destination. Assign treatment burdens to the process that generates the waste; apply no avoided-burden or negative-value credit unless a separately declared downstream modelling method and evidence justify it. | `eu-pef-2021-2279`; `codex-cxc-58-2005` |
| `alloc_sensitivity` | Economic allocation result | If prices are volatile, related-party, missing, or materially change the result, disclose the issue and test a documented alternative price period and mass-allocation sensitivity. The reported primary model remains the site-specific economic allocation unless the study goal mandates another reviewed method. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_joint_batch` | `slaughter_fat_recovery` | buffalo input, joint outputs, and allocation evidence | batch production and sales/transfer records | buffalo lot and species evidence; live or received mass; accepted and rejected status; mass of fat, carcass/meat, offal, hide/skin, bone, residues, and every other output; output destination; net revenue or matched price; currency; date | calibrated scales linked to batch records and finance or transfer records | kg and currency/kg | each joint-production batch; prices matched to the inventory period | representative production period, with season and exceptional batches disclosed | every included slaughter/cutting site | sum physical quantities by output and calculate allocation from matched period-specific values; preserve zero-value and waste outputs separately | scale calibration; batch reconciliation; species and lot traceability; invoices or approved transfer-pricing basis; reviewer sign-off |
| `cp_fat_output` | `slaughter_fat_recovery`; `packaging_handoff` | accepted unrendered-fat mass and state | lot weighing and handoff record | gross mass; tare; net mass; scale id; date/time; lot; tissue/source description; intended grade/use; acceptance status; unrendered declaration; temperature state and value; package/bulk state; handoff point | calibrated net weighing and lot inspection | kg and °C where applicable | each lot and each handoff | full inventory period | every included site and handoff | sum accepted net mass by declared state; keep rejected, retained, and transferred masses separate | calibration certificate; lot record; state and temperature record; acceptance or dispatch documentation |
| `cp_utilities` | `slaughter_fat_recovery` | electricity, fuels, steam, water, and provisional energy fallback | meter, invoice, equipment, and production records | meter readings; carrier; billing quantity; submeter boundary; equipment id; rated power; runtime; documented load factor if fallback used; allocation driver; conversion factor | direct metering preferred; reconciled invoice allocation second; equipment model only as labelled fallback | kWh, MJ, kg, or m3 by carrier | meter interval or each production shift; at least monthly reconciliation | same period as production output | each included facility and relevant utility boundary | direct meter assignment first; otherwise allocate by documented causal driver; never use metered and fallback energy for the same carrier/period | meter calibration or invoice; equipment nameplate; runtime log; calculation sheet; double-count check |
| `cp_operating_materials` | `slaughter_fat_recovery` | cleaning, sanitation, and operating materials | purchase, issue, and dosing records | material identity; amount purchased/issued; opening and closing stock; dosing record; process assignment; waste or return | inventory reconciliation and dosing logs | kg, L, or documented item unit | each issue or batch; monthly reconciliation | same period as production output | each included facility | consumption = opening stock + receipts - closing stock - documented transfer; allocate shared use by documented driver | inventory record; supplier record; dosing equipment check |
| `cp_waste_emissions` | `slaughter_fat_recovery`; `temperature_conditioning`; `packaging_handoff` | wastes, wastewater, direct emissions, and treatment handoff | waste tickets, discharge meters, monitoring records, and emission calculations | waste identity and mass; destination; wastewater volume and available characteristics; emitted substance and compartment; direct activity data; factor and source when calculated | direct measurement or calculation from collected foreground activity and documented factor | kg, m3, or parameter-specific unit | each shipment or monitoring interval | same period as production output | each included site and discharge/emission point | sum by flow and destination/compartment; keep direct emissions separate from background-service emissions | weigh tickets; laboratory/monitoring record; calculation sheet; treatment acceptance record |
| `cp_temperature_conditioning` | `temperature_conditioning` | product mass, time-temperature state, conditioning energy, refrigerant, and losses | lot, logger, meter, and refrigeration-service records | input/output mass; entry/exit time; temperature readings; set point; storage duration; energy by carrier; refrigerant type; opening/closing charge where available; additions; recovery; rejected/lost mass | calibrated scale and temperature logger; energy meter; refrigeration service mass balance | kg, °C, h, kWh/MJ, and kg refrigerant | each lot; continuous or risk-based temperature record; each refrigerant service event | full conditioning period in the inventory | each included cold room, freezer, or conditioning unit | aggregate mass and energy by actual holding time and causal driver; calculate refrigerant release from verified mass balance | logger and scale calibration; meter records; service reports; lot reconciliation |
| `cp_packaging_handoff` | `packaging_handoff` | packaging, internal handling, scrap, and loading | material issue, return, equipment, and dispatch records | material identity; item count; item mass; issued/returned/reused count; handling energy; scrap; product loss; dispatch lot, mass, temperature, and time | count and weigh packaging; meter or fuel log for handling; dispatch scale | kg, item, kWh/MJ, °C | each lot or dispatch; monthly reconciliation | full inventory period | each packaging and loading location | convert counts with measured item mass; apply actual reuse/return cycles; normalize to net dispatched mass | supplier specification or sampled item weight; inventory reconciliation; dispatch record |
| `cp_transport_handoff` | `transport_to_handoff` | delivered mass and transport service | shipment, carrier, route, and receipt records | origin/destination; mode; vehicle class; route distance; net shipped and accepted mass; payload; empty return; refrigeration condition; dispatch/receipt time and temperature; loss or rejection | carrier documents, route record, dispatch and receipt scales/loggers | km, kg, t·km, h, °C | each shipment | all included deliveries in the inventory period | each declared route and handoff | tonne-kilometres = shipped net tonnes × actual distance; model return and refrigeration only from documented route data | bill of lading; carrier record; route evidence; dispatch/receipt reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground flows | normalized amount = period or batch flow amount / accepted net unrendered buffalo-fat mass at the declared reference handoff | matched-period flow amount; accepted handoff mass | amount per 1 kg reference flow | `eu-pef-2021-2279` |
| `calc_economic_allocation` | Residual joint slaughter/dressing burdens | allocation factor i = (mass i × matched net price i) / sum(mass j × matched net price j); allocated flow to fat = residual joint flow × buffalo-fat factor | measured masses; matched prices or net revenues; residual joint flow after subdivision | site-specific allocation factors and allocated buffalo-fat flow | `eu-pef-2021-2279` |
| `calc_energy_fallback` | `separation_energy_provisional` | provisional energy = sum(rated power × recorded runtime × documented load factor), separated by energy carrier; replace with metered or verified allocated energy when available | equipment id and rated power; runtime; documented load factor; accepted fat output | provisional kWh or MJ per 1 kg reference flow with uncertainty disclosure |  |
| `calc_mass_balance` | Joint batch and each conditioning/handoff process | residual = measured inputs - measured products - measured co-products - measured wastes - measured retained/transferred mass; report residual magnitude and explanation | all matched mass records | mass-balance residual and reconciliation status | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `calc_refrigerant_release` | Refrigeration equipment | release = opening charge + additions - closing charge - documented recovery; allocate only to the relevant equipment, period, and products | charge, addition, recovery, and equipment/product operation records | kg refrigerant emission per 1 kg conditioned output | `eu-fdm-bat-2019-2031` |
| `calc_transport_service` | Included delivered handoff | t·km = actual route km × shipped net kg / 1,000; keep empty return and refrigeration as separately documented model parameters | route distance; shipped mass; payload/return/cold-chain records | t·km per delivered reference flow | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_species_state_identity` | Reference product and joint input | Trace buffalo species, lot, unrendered state, tissue/source description, and intended grade/use through the handoff; segregate other species and rendered material. | supplier/animal identity; batch and lot records; product declaration; separation record; `unsd-cpc-3-21513` |
| `dq_temporal_match` | All foreground records | Use production, utility, price, waste, conditioning, packaging, and transport records from matched periods; disclose shutdowns, exceptional batches, seasonality, and missing intervals. | dated records and coverage table; `eu-pef-2021-2279` |
| `dq_mass_and_allocation` | Joint production | Reconcile batch mass and preserve every marketable or waste output used in allocation; retain source records for mass, value, currency, period, and direct-attribution decisions. | batch mass balance; scale calibration; invoices/transfer basis; allocation workbook; `eu-pef-2021-2279` |
| `dq_process_completeness` | Foreground facility | Check water, energy, raw materials, waste water, direct emissions/waste gas where relevant, and residues; document zero, not applicable, excluded, or unavailable status rather than omitting a category silently. | process flow sheet; meter and material inventory; waste/emission register; `eu-fdm-bat-2019-2031` |
| `dq_hygiene_food_route` | Product intended for human consumption | Retain applicable inspection/acceptance, hygienic separation, temperature, storage, contamination-control, and packaging evidence. Do not interpret this PCR as a legal compliance determination. | inspection/acceptance and process-control records; temperature logs; sanitation records; `codex-cxc-58-2005` |
| `dq_reasoned_estimate` | Provisional separation energy | Keep equipment, runtime, load-factor rationale, uncertainty, and double-count checks. Replace the estimate when process submetering, a verified utility allocation, or materially changed equipment/operation becomes available. | equipment nameplate; runtime log; calculation and uncertainty record; replacement review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The reference product UUID shall be `788db006-278e-41d6-ac60-d33b1d3edf34`; the Mass property UUID shall be `93a60a56-a3c8-11da-a746-0800200b9a66`; the Units of mass UUID shall be `93a60a57-a4c8-11da-a746-0800200c9a66`; and the reference amount shall be 1 kg net product. |  |
| `validate_unrendered_scope` | Product and process boundary | Fail if rendering, extraction, refining, or another conversion to rendered fat is included in the default foreground or if the reference output is tallow, oil, a fraction, or another rendered product. | `unsd-cpc-3-21513`; `codex-cxs-211-1999` |
| `validate_buffalo_identity` | Product and allocation | Fail if another species is mixed into the reference mass or if cattle or other-species yield, composition, price, mass fraction, or allocation defaults are used for buffalo. | `unsd-cpc-3-21513`; `eu-pef-2021-2279` |
| `validate_required_qualifiers` | Reference-flow metadata | Fail if species, unrendered state, tissue/source description, intended grade/use, temperature state, packaging state, lot, geography, or handoff point is missing; require acceptance status for an applicable food route. | `unsd-cpc-3-21513`; `codex-cxc-58-2005` |
| `validate_mass_balance` | Joint batch and foreground processes | Require measured input/output reconciliation and an explained residual; fail if missing co-products, wastes, retained material, or losses could materially alter normalization or allocation. | `eu-pef-2021-2279`; `eu-fdm-bat-2019-2031` |
| `validate_allocation` | Joint slaughter/dressing burdens | Require direct subdivision before residual allocation and complete site-specific buffalo output mass/value evidence for economic allocation. A cattle or generic allocation proxy is not acceptable. | `eu-pef-2021-2279` |
| `validate_conditioning_handoff` | Cooling, freezing, storage, packaging, and transport | Require actual state, temperature, holding time, packaging, dispatch point, and included transport route. Fail on unexplained duplicate transport service and foreground fuel/emissions. | `codex-cxc-58-2005`; `eu-pef-2021-2279` |
| `validate_inventory_completeness` | Foreground inventory | Require an explicit status and evidence for water, energy, raw materials, wastewater, direct emissions/waste gas where relevant, and residues. Do not apply EU BAT legal thresholds or performance values as PCR defaults. | `eu-fdm-bat-2019-2031` |
| `validate_reasoned_estimate` | Provisional energy row | Permit `separation_energy_provisional` only when metered or verified allocated energy is unavailable, inputs and uncertainty are disclosed, no amount is copied from another animal species, and a replacement trigger is recorded. |  |
| `validate_cxs_limit` | Product specification | Do not apply CXS 211-1999 rendered-fat composition or quality values to unrendered buffalo fat; the source supports only the rendered/unrendered distinction and limitation. | `codex-cxs-211-1999` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for unrendered buffalo fat at a declared producer-dispatch or delivered handoff |
| downstream_use | May serve as a reviewed `secondary_dataset` or `background_dataset` for systems that require unrendered buffalo fatty tissue or raw fat material and preserve the declared state and allocation context |
| allowed_use | Product-footprint and LCA modelling with matched buffalo species, unrendered state, grade/use, geography, technology, temperature route, handoff, and allocation interpretation |
| excluded_use | Rendered tallow or oil; CPC 21521-21529 rendered fats; other animal species; undisclosed mixed-species fat; legal food-compliance certification; application of cattle defaults; comparative claims without the applicable PEF/verification requirements |
| required_metadata | PCR id and version; product UUID; CPC reference; buffalo traceability; tissue/source description; unrendered declaration; intended grade/use; post-mortem or acceptance status where applicable; geography; technology; inventory period; temperature and storage; packaging; handoff; transport; co-products; allocation formula, factors, masses, values, period, and currency; data sources |
| required_quality_disclosure | Coverage and calibration of foreground records; mass-balance residual; missing data; reasoned-estimate use and uncertainty; representativeness; allocation sensitivity; excluded processes; direct/background emission split; hygiene evidence scope for a food route |
| update_trigger | New buffalo-specific evidence; change in product state, tissue mix, grade, slaughter or separation route, equipment, energy source, cooling/freezing, packaging, handoff, transport, co-product markets, allocation result, regulation, Tiangong UUID identity, or replacement of the provisional energy estimate |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21513` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, subclass 21513 “Buffalo fat, unrendered”, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Authoritative product identity and classification boundary: includes fat from buffaloes unrendered; excludes rendered buffalo tallow and marrow, bone, or foot oil/fractions. It does not supply LCA yields, composition, or allocation factors. |
| `codex-cxc-58-2005` | `standard` | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005, adopted 2005, editorial amendments 2013. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf (retrieved 2026-08-11) | Applicable food-route background for slaughter/dressing process control, post-mortem inspection, hygienic separation, contamination prevention, temperature control, storage, packaging, and transport. It is not used as an LCA quantity source or as a universal legal threshold. |
| `codex-cxs-211-1999` | `standard` | Codex Alimentarius, Standard for Named Animal Fats, CXS 211-1999, amended 2024. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B211-1999%252FCXS_211e.pdf (retrieved 2026-08-11) | Distinguishes named rendered fats such as premier jus and edible tallow from this unrendered category. Its rendered-fat descriptions, composition tables, and quality values are explicitly not product specifications or LCA defaults for unrendered buffalo fat. |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, Annex I Product Environmental Footprint Method. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Functional-unit/reference-flow structure, system-boundary completeness, company-specific foreground data, direct subdivision, and residual slaughter co-product allocation framework. Its slaughter defaults cover cattle, pigs, sheep, and goats, not buffalo; no such default is transferred here. |
| `eu-fdm-bat-2019-2031` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2019/2031 of 12 November 2019 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-11) | Process-inventory and monitoring completeness for water, energy, raw materials, wastewater, waste gas/direct emissions, and residues where applicable. It is not used to extend legal applicability, monitoring frequencies, emission levels, or performance thresholds to this PCR. |
