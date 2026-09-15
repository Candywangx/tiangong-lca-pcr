---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.optical-media-not-recorded
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Optical media, not recorded

## 1. Scope and Applicability

This PCR governs foreground data for finished optical recording media supplied without recorded user content. It covers blank write-once and rewritable discs, including CD, DVD and Blu-ray formats, and blank optical-disc cartridges when their housing is declared. Factory tracking, addressing and format information do not by themselves make a blank disc recorded content (`un-cpc-3-0-structure-2025`, `ecma-359-2004`).

The representative manufacturing route is a dye-based DVD-R: resin conditioning and substrate moulding, recording-layer coating and drying, metallization, edge cleaning, bonding, testing and packing. The process map provides collection blocks for one aggregate foreground factory system; these blocks are not independently balanced unit-process datasets. Interstage disc transfers are production records, not additional external product inputs. Sources `nist-sp-500-252-2003` and `bayer-wo2011092200a1` support the layer and process distinctions.

Recorded content, replicated ROM discs, erased second-hand media, disc drives, magnetic media, solid-state storage devices, and separately supplied masters or stampers are excluded. Manufacturing a stamper used in production is an upstream input requirement, not an in-scope reference product. The Chinese title is an authored translation checked against `china-mof-optical-media-2013`; its terminology does not create an HS mapping.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.optical-media-not-recorded |
| classification_refs | CPC 3.0 47540; semantic context only |
| covered_products | New finished blank optical media with declared write-once or rewritable recording mechanism |
| excluded_products | Recorded and replicated content media; previously used erased discs; drives; magnetic and solid-state media; separately sold masters and stampers |
| representative_product | Blank 120 mm single-sided DVD-R with declared nominal 4.70 Gbyte capacity; dye and reflector composition specified by supplier |
| production_route | Condition resin; mould substrate; apply recording layer; dry; metallize; clean edges; bond if required; inspect and test; pack |
| market_state | Accepted finished unrecorded medium at factory gate, including required functional layers; detachable packaging inventoried separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply blank optical media capable of recording information in the declared format |
| How much | 1 kg net accepted media; disclose equivalent disc count and aggregate nominal writable capacity |
| How well | Meet declared format and manufacturer acceptance criteria; ECMA-359 applies only to a conforming DVD-R model, not to every optical format |
| How long or cycle | One manufacturing delivery; no assumed archival lifetime, number of rewrites or user recording cycles |
| reference_flow_link | `reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Optical media, not recorded `714535e8-24d4-44bf-8496-4837f638fdd4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Format and model; diameter; writable nominal capacity and capacity convention; layer and side count; write-once or rewritable; recording-layer chemistry; reflector composition; substrate material; protective and bonding layers; new unrecorded state; mean net medium mass and count; integral cartridge housing if any; detachable packaging; acceptance specification and test sampling; plant, geography, technology, reporting period and declared starting condition |

Declare every required qualifier in the foreground package. Mass normalization supports production inventories, not equal-service comparisons between formats. A comparative storage-service study must additionally specify usable capacity, recording success, rewriting, retention duration and drive compatibility; neither nominal capacity nor a longevity statement establishes that service. Format and material evidence: `ecma-359-2004`, `cci-notes-19-1`.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_media_mass` | reference_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted media without detachable packaging. Include integral cartridge parts only when declared part of the reference object. |
| `count_mass` | acceptance and packaging | Mass | kg | Calculate accepted mass from lot count times measured mean net medium mass; retain sampling, tare and calibration records. Never assign a universal disc mass. |
| `energy_conversion` | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the electricity carrier; 1 kWh = 3.6 MJ is a unit identity. Do not interpret the database property label as a fuel or convert a shared meter into multiple carriers. |
| `formulated_input` | dye, adhesive and lacquer | Mass | kg | Record supplied formulation mass and constituent fractions. Purchased premix and its constituents must not both be external inputs; an on-site mixing route must instead record its actual individual purchased ingredients. |
| `gas_water_conversion` | argon and water | Mass | kg | Preserve metered volume records and convert with documented composition, density, temperature and pressure; circulating throughput is not make-up consumption. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of specified substrate resin, supplied coating formulations, reflector feedstock and packaging at the manufacturing site |
| starting_condition_role | Foreground entry state for a factory-gate partial life-cycle inventory |
| product_classification_scope | Finished new unrecorded optical medium; upstream resin and chemical production are distinct product categories |
| recursive_input_rule | If purchased blank media enter the same category, record their actual state and quantity with an upstream supplier dataset and model only subsequent operations; do not recreate their prior production or substitute them for virgin resin |
| upstream_dataset_requirement | Attach compatible supplier or background datasets for actual material form, chemistry, energy supply, transport and treatment. A flow UUID establishes identity, not an upstream inventory. |
| disclosure | Disclose supplier geography, subcontracted steps, transport legs, treatment destinations, excluded stages, internal recovery, integral housings and the aggregation boundary |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory` | foreground system | Include attributable production, rejected and test-consumed discs, packing and site services. Link upstream manufacture, inbound transport and external waste treatment when constructing the cradle-to-gate result. | `wri-wbcsd-product-standard-2011` |
| `boundary_partial` | downstream use | Exclude customer recording, reading, distribution after the factory gate and post-consumer treatment from this partial result; disclose the limitation and add separate scenarios for a whole-life assessment. | `wri-wbcsd-product-standard-2011` |
| `boundary_route` | format instantiation | For rewritable media, document the actual phase-change alloy, each dielectric formulation and initialization step; for Blu-ray, document its actual recording and cover-layer technology. Add one concrete exchange per actual material or release, with no reuse of dye quantities across these routes. | `nist-sp-500-252-2003`, `cci-notes-19-1` |
| `boundary_completeness` | site collection | Reconcile the full recipe, utilities ledger and waste register against the cards. Add actual coating additives, edge cleaners, gases, fuels, refrigerant losses, tooling amortization, cartridge parts and packaging components as separate exchanges where present. Missing data are not zero and small mass alone does not justify excluding thin functional layers. | |
| `boundary_transfers` | outsourced and internal stages | Retain interstage counts in cp_output. Include subcontracted operations once; purchased semifinished substrates require their own upstream identity and replace only the operations already performed. Internal regrind and solvent recovery remain internal transfers with their processing burdens. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `disc_manufacture` | Substrate and functional-layer manufacture | required | Every production route; instantiate its actual layer chemistry | foreground production | 1 kg net accepted finished media |
| `disc_bonding` | Bonding and UV curing | conditional | Disc construction bonds substrates with UV-curable adhesive | foreground finishing | Same accepted-media denominator |
| `disc_lacquering` | CD protective lacquer application | conditional | The CD construction uses a separate protective lacquer | foreground finishing | Same accepted-media denominator |
| `site_services` | Metered site services | required | Include actual attributable services, with water rows conditional | foreground support | Same accepted-media denominator |
| `pack_release` | Packing, acceptance and factory release | required | Every accepted output; actual packaging components only | foreground output | 1 kg net accepted media |

All cards are boundary exchanges of the aggregate system. Conditional cards require a recorded applicability decision. An absent exchange may be marked not applicable only with evidence; a missing quantity remains a data gap. Process and route descriptions define applicability, not default numerical recipes.

### Process: Substrate and functional-layer manufacture (`disc_manufacture`)

#### Inputs

##### Product flows

###### Substrate resin (`polycarbonate`)

Record this external exchange through the specified collection protocol.

- Selected flow: Polycarbonate granulate `0c945ca0-edf2-41f3-ba9e-23af3e75c6d1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net external resin consumed, excluding internally recirculated sprues; weigh both DVD halves.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `nist-sp-500-252-2003`

###### Reflective-layer silver (`silver`)

Inclusion condition (`inclusion_condition`): Monometal silver reflector is used; a silver alloy needs its own composition-specific exchange.

- Selected flow: silver `7db0c01b-7605-4e92-90a1-c4bc6dd8e157`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed silver target consumption and reconciled target inventory; distinguish deposited silver, recoverable target remnants and coating-chamber losses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `nist-sp-500-252-2003`, `bayer-wo2011092200a1`

###### Recording-layer formulation (`azo_dye_solution`)

Inclusion condition (`inclusion_condition`): Verified product recipe uses an azo dye solution. Other dye families require separate recipe-specific exchanges.

- Selected flow: Optical-disc azo dye coating solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh one supplied coating formulation; retain formulation identifier, dye identity, solids fraction and every solvent mass fraction. Do not also count its constituents as purchased inputs.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources: `nist-sp-500-252-2003`

###### Sputtering gas (`argon_gas`)

Inclusion condition (`inclusion_condition`): Purchased gaseous argon feeds sputtering.

- Selected flow: Gaseous argon
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Meter delivered gas and convert to mass using supplier density at declared pressure and temperature; exclude internal gas circulation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources:

###### Equipment-cleaning solvent (`isopropanol`)

Inclusion condition (`inclusion_condition`): Equipment cleaning uses isopropanol; this is not a default dye carrier or universal edge-cleaning recipe.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed external isopropanol use corrected for stock changes; identify purity and exclude internal recovered-solvent circulation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials`
- Sources:

#### Outputs

##### Waste flows

###### External moulding scrap (`pc_moulding_scrap`)

Inclusion condition (`inclusion_condition`): Uncoated polycarbonate is discarded across the site boundary.

- Selected flow: Clean polycarbonate moulding scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh clean uncoated polymer scrap leaving the site for treatment; disclose destination and distinguish internal regrind.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Coated rejects including destructive tests (`metallized_disc_reject`)

Inclusion condition (`inclusion_condition`): Coated or bonded discs fail quality tests or are sacrificed for testing.

- Selected flow: Rejected metallized optical disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh rejected coated discs by composition and treatment destination; include recording tests that consume saleable output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent coating formulation (`spent_dye_solution`)

Inclusion condition (`inclusion_condition`): Azo coating solution is discarded rather than internally recovered.

- Selected flow: Spent optical-disc azo dye coating solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh externally discarded liquid of the same declared coating formulation; retain solvent composition, solids and treatment destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### External spent cleaning solvent (`spent_isopropanol`)

Inclusion condition (`inclusion_condition`): Isopropanol cleaning generates a separately collected spent solvent.

- Selected flow: Spent isopropanol cleaning solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh the isopropanol cleaning waste solution and measure its solvent fraction; document contamination and recovery or treatment destination.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Direct cleaning-solvent release (`isopropanol_air`)

Inclusion condition (`inclusion_condition`): Isopropanol crosses to outdoor air; specify release location.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured release or species-resolved solvent balance after recovery and abatement; subtract solvent retained in waste and product.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`
- Sources:

###### Direct dye-carrier release (`tetrafluoropropanol_air`)

Inclusion condition (`inclusion_condition`): Supplier formulation confirms this solvent and a direct release occurs.

TianGong supplies no Chinese baseName for this flow; the aligned Chinese Selected flow retains its canonical English name.

- Selected flow: 2,2,3,3-Tetrafluoro-1-propanol `8a309c78-e251-11e6-bf01-fe55135034f3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate only this species from the documented coating formulation and measured recovery, retention and abatement; do not equate all VOC to this compound.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_releases`
- Sources:

### Process: Bonding and UV curing (`disc_bonding`)

#### Inputs

##### Product flows

###### DVD bonding formulation (`uv_bonding_adhesive`)

Inclusion condition (`inclusion_condition`): The declared disc construction uses UV-curable acrylate bonding.

- Selected flow: UV-curable acrylate DVD bonding adhesive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh the complete supplied adhesive formulation issued to bonding, corrected for recoverable returns and inventory; record cured mass retained in discs.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bonding`
- Sources: `bayer-wo2011092200a1`

### Process: CD protective lacquer application (`disc_lacquering`)

#### Inputs

##### Product flows

###### CD protective coating (`uv_cd_lacquer`)

Inclusion condition (`inclusion_condition`): A CD route has a UV-curable acrylate protective lacquer; absent for the representative bonded DVD-R.

- Selected flow: UV-curable acrylate CD protective lacquer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weigh one supplied lacquer formulation net of returned liquid; record composition and cured retention.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lacquer`
- Sources: `nist-sp-500-252-2003`

### Process: Metered site services (`site_services`)

#### Inputs

##### Product flows

###### Purchased electricity (`electricity`)

Record this external exchange through the specified collection protocol.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Meter all attributable drying, moulding, coating, vacuum, curing, testing, packing, compressed-air generation and cooling electricity, including allocated standby. Convert kWh to MJ.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Supplied make-up water (`process_water`)

Inclusion condition (`inclusion_condition`): The site takes supplied process water for its attributable operations.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Meter supplied make-up water mass; record supply quality, source and density conversion. Do not count recirculating cooling-loop throughput.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources:

#### Outputs

##### Waste flows

###### External cooling blowdown (`cooling_blowdown`)

Inclusion condition (`inclusion_condition`): Evaporative cooling produces blowdown sent to external treatment.

- Selected flow: Cooling-tower blowdown wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Meter blowdown mass and composition to external treatment; retain water chemistry and destination, without treating this as an elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources:

##### Elementary flows

###### Evaporative water loss (`evaporated_water`)

Inclusion condition (`inclusion_condition`): Evaporative water loss occurs.

- Selected flow: Water vapour emitted to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measure or calculate evaporation from make-up minus blowdown, retained water, drift and inventory change; report drift separately if present.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources:

### Process: Packing, acceptance and factory release (`pack_release`)

#### Inputs

##### Product flows

###### Shipping box (`corrugated_box`)

Inclusion condition (`inclusion_condition`): Corrugated board boxes accompany the shipped discs.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count boxes used and multiply by measured tare mass per box; include packing rejects and identify recycled fibre content.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

###### Disc-stack spindle (`pp_spindle`)

Inclusion condition (`inclusion_condition`): A polypropylene spindle is supplied with the discs.

- Selected flow: Polypropylene optical-disc packaging spindle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count polypropylene spindle components and multiply by measured component mass; a cover of another polymer requires a separate exchange.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`
- Sources:

#### Outputs

##### Product flows

###### Accepted blank media (`reference_product`)

Record this external exchange through the specified collection protocol.

- Selected flow: Optical media, not recorded `714535e8-24d4-44bf-8496-4837f638fdd4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Normalize accepted net media output to 1 kg, excluding detachable packaging and rejected or test-recorded discs; retain accepted count and measured mean disc mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted media at factory gate; common denominator Q
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output`
- Sources: `un-cpc-3-0-structure-2025`, `ecma-359-2004`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared production | Prefer submetering and campaign subdivision. For unavoidable shared loads use a measured causal driver, such as machine time under matched loading; count allocation is justified only for equivalent products and routes. | `wri-wbcsd-product-standard-2011` |
| `allocation_losses` | rejects and recycling | Keep yield losses with accepted output. Record external scrap transfers, their status and recycling convention; do not credit avoided virgin resin or silver without an explicitly justified model. | `wri-wbcsd-product-standard-2011` |
| `allocation_reconcile` | allocation factors | Retain driver totals and assigned shares; allocated campaign quantities must reconcile to the original meter or ledger. Internal recovery is not a saleable co-product and creates no avoided-production credit. | |

## 8. Foreground Data Collection, Calculation, and Quality Rules

The following are PCR-designed collection protocols. Collect a representative continuous reporting period that captures normal production, startups, changeovers, rejects and idle operation; declare dates and explain representativeness. Every raw record carries site, line, campaign, model, unit, date, source-record identifier and responsible reviewer. Do not substitute a patent example for a plant record.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials` | disc_manufacture | individual material inputs | stock and dosing records | material and formulation id; composition; receipts; opening and closing stock; external returns; internal recovery; issued mass; density; gas conditions | weigh issues and returns; reconcile with purchases; retain supplier specification | kg; original gas volume | each lot and stock reconciliation | full declared campaign series | each manufacturing line and outsourced step | external consumption by material divided by accepted mass Q | calibrated scales; BOM; formulation sheet; reconciled ledger |
| `cp_bonding` | disc_bonding | individual material inputs | stock and dosing records | material and formulation id; composition; receipts; opening and closing stock; external returns; internal recovery; issued mass; density; gas conditions | weigh issues and returns; reconcile with purchases; retain supplier specification | kg; original gas volume | each lot and stock reconciliation | full declared campaign series | each manufacturing line and outsourced step | external consumption by material divided by accepted mass Q | calibrated scales; BOM; formulation sheet; reconciled ledger |
| `cp_lacquer` | disc_lacquering | individual material inputs | stock and dosing records | material and formulation id; composition; receipts; opening and closing stock; external returns; internal recovery; issued mass; density; gas conditions | weigh issues and returns; reconcile with purchases; retain supplier specification | kg; original gas volume | each lot and stock reconciliation | full declared campaign series | each manufacturing line and outsourced step | external consumption by material divided by accepted mass Q | calibrated scales; BOM; formulation sheet; reconciled ledger |
| `cp_energy` | site_services | electricity | meter records | opening and closing meter; kWh; line runtime; standby; shared load; allocation driver | interval submetering and utility-bill reconciliation | kWh and MJ | each meter interval and campaign | same period as Q | site and production/support submeters | attributable meter differences times 3.6 divided by Q | calibration; bill check; allocation calculation |
| `cp_water` | site_services | make-up, blowdown and evaporation separately | meters and water balance | incoming mass or volume; density; blowdown; evaporation; drift; retained water; stock changes; composition; treatment destination | meter each boundary stream; close water balance | kg; original m3 | each campaign and discharge event | same period as Q | attributable cooling and process-water systems | each stream divided by Q; internal recirculation excluded | meter calibration; analysis; destination records; balance residual |
| `cp_waste` | disc_manufacture | individual waste streams | transfer and test records | stream id; wet mass; polymer or solvent fraction; metal content; rejected count; internal recovery; destination | separate weighing and waste-composition records | kg and count | each transfer and reject lot | same period as Q | each generating line and external recipient | total external stream mass divided by Q | weighing tickets; treatment contract; test log |
| `cp_releases` | disc_manufacture | each named atmospheric species | emission measurement or solvent balance | species; formulation mass fraction; input; recovery; retained product and waste; abatement; release compartment | integrate concentration and exhaust volume or use species-resolved balance | kg per species | each campaign with operating-state coverage | same period as Q | coating and cleaning emission points | direct post-abatement species mass divided by Q | method report; recovery records; detection limits; uncertainty |
| `cp_packaging` | pack_release | box and spindle separately | packing counts and tare | component identity; polymer or fibre grade; issued count; component mass; returns; rejected packaging | count and representative component weighing | count and kg | each packaging configuration and lot | same period as Q | packing lines | each component count times mean mass divided by Q | packing BOM; sampled tare; reconciliation |
| `cp_output` | pack_release | reference product and yield | production and acceptance records | model; interstage counts; accepted count; net disc mass sample; rejects; destructive-test count; WIP changes; nominal capacity; specification | calibrated weighing, counters and documented optical acceptance testing | kg; count; declared capacity unit | each production lot | same period as inputs | every included production stage | Q is accepted count times measured mean net mass, reconciled with stock | signed release; test results; tare check; counter and scale calibration |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize` | all external exchanges | q_i = X_i / Q, where X_i is the allocated campaign exchange and Q is accepted net medium mass; Q must be positive | cp_materials; cp_bonding; cp_lacquer; cp_energy; cp_water; cp_waste; cp_releases; cp_packaging; cp_output | exchange per 1 kg accepted media | |
| `accepted_mass` | reference_product | Q = sum of accepted lot counts multiplied by their sampled mean net mass; exclude packaging and destructive-test discs | cp_output | accepted kg and equivalent count | |
| `material_consumption` | purchased materials | External consumption = opening stock + receipts - closing stock - external unused returns; account for WIP changes and internal transfers explicitly | cp_materials; cp_bonding; cp_lacquer; cp_output | consumed material mass | |
| `solvent_balance` | each solvent release | Release = solvent input - retained product - solvent in external waste - recovered solvent exported - solvent destroyed - inventory increase; internally recycled solvent cancels. Negative residuals trigger investigation. | cp_materials; cp_bonding; cp_lacquer; cp_releases; cp_waste | direct release of one solvent species | |
| `yield_balance` | physical completeness | Reconcile incoming external material with accepted product, external rejects, recoverable output, emissions and stock changes; preserve separate polymer, reflector and solvent balances | cp_materials; cp_bonding; cp_lacquer; cp_output; cp_waste; cp_releases | documented residual and investigation | |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all materials and media | Preserve format, recording mechanism, composition, supply form and quality designation; supplier evidence must confirm the representative recipe applies | BOM, specification and signed acceptance |
| `dq_coverage` | all stages | Reconcile records with the process map; disclose unmeasured flows, missing suppliers, treatment coverage and estimates without turning blanks into zero | completeness register and ledger checks |
| `dq_measurement` | normalized amounts | Use common dates and product boundaries; disclose sampling, calibration, allocations, detection limits and uncertainty | raw records and calculation workbook |
| `dq_range` | quantitative QA | Assess results with plant balances and measurement uncertainty; this PCR supplies no empirical production interval or archival-lifetime default | balance review and documented evidence gaps |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference object | Verify new unrecorded market state, all qualifiers and the link to reference_product; exclude recorded rejects from accepted output. | `un-cpc-3-0-structure-2025`, `ecma-359-2004` |
| `validate_units` | inventory | Confirm positive Q, net-mass normalization, explicit unit conversions, and one material or species per exchange. A UUID cannot substitute for a missing quantity. | |
| `validate_route` | process coverage | Every required process has collection evidence; every conditional process and card has a declared applicability decision. Alternate recording chemistries require complete instantiated BOM and emissions coverage. | |
| `validate_balance` | yields and releases | Check polymer, metal, solvent and water balances; investigate residuals using measured uncertainty and document the action. Do not force balance by creating an unnamed waste or emission. | |
| `validate_conformance` | product quality | Retain applicable format tests, acceptance criteria and sampling basis. ECMA-359 conformance is a specification claim and does not supply an empirical inventory range. | `ecma-359-2004` |
| `validate_boundary` | downstream dataset | Disclose the partial boundary, missing upstream links, treatment destinations and unresolved exchanges; claims of complete life-cycle coverage require the omitted stages. | `wri-wbcsd-product-standard-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after dataset-specific review |
| downstream_use | Supply of blank optical media to recording, distribution or storage-service models |
| allowed_use | Format- and route-matched factory-gate production; linking to separately declared downstream scenarios |
| excluded_use | Unqualified substitution for another recording technology, recorded-content production, drives, universal archive life or equal-service comparisons by mass alone |
| required_metadata | PCR identity and version; reference qualifiers; site and dates; net mass/count conversion; process boundary; supplier and treatment links; packaging; allocation; collection methods |
| required_quality_disclosure | Unresolved identities and amounts; missing stages; representativeness; measured versus calculated values; uncertainty; conformance evidence; review status |
| update_trigger | Change of recording chemistry, format, functional layers, supplier, energy mix, yield, recovery, packaging, site or supporting specification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | [UN Statistics Division, CPC Version 3.0 structure (30 June 2025)](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv); retrieved 2026-09-09; independence_key: `un-cpc-3-0-structure-2025` | CPC 47540 identity and adjacent unrecorded-media categories. |
| `china-mof-optical-media-2013` | `official_guidance` | [China Ministry of Finance hosted bilingual tariff table, p. 165, row 6779](https://gss.mof.gov.cn/gzdt/zhengcefabu/201306/P020130708509079068339.pdf); retrieved 2026-09-09; independence_key: `mof-p020130708509079068339` | Chinese terminology only; no tax rate or classification mapping is adopted. |
| `nist-sp-500-252-2003` | `official_guidance` | [F. R. Byers, Care and Handling of CDs and DVDs, NIST SP 500-252 (2003), section 3](https://nvlpubs.nist.gov/nistpubs/legacy/sp/NISTspecialpublication500-252.pdf); retrieved 2026-09-09; independence_key: `nist-sp-500-252` | Polycarbonate, recording-layer distinctions, reflective metals, CD lacquer and DVD construction. |
| `ecma-359-2004` | `standard` | [ECMA-359, 1st edition (December 2004), clauses 1, 2, 7, 14 and 26](https://ecma-international.org/wp-content/uploads/ECMA-359_1st_edition_december_2004.pdf); retrieved 2026-09-09; independence_key: `ecma-359-ed1-2004` | DVD-R format, blank-state preformatting and conformance scope; no production ranges. |
| `cci-notes-19-1` | `official_guidance` | [Canadian Conservation Institute, Longevity of Recordable CDs, DVDs and Blu-rays, Notes 19/1](https://www.canada.ca/en/conservation-institute/services/conservation-preservation-publications/canadian-conservation-institute-notes/longevity-recordable-cds-dvds.html); retrieved 2026-09-09; independence_key: `cci-notes-19-1` | Material-dependent recording routes, Blu-ray distinctions and limitations on lifetime claims. |
| `bayer-wo2011092200a1` | `literature` | [Bayer MaterialScience, High Speed DVDs, WO 2011/092200 A1 (4 August 2011), description pp. 12-13; original English publication reproduced with HK1177810A](https://patentimages.storage.googleapis.com/ea/32/ff/60d39479719181/HK1177810A.pdf); retrieved 2026-09-09; independence_key: `wo2011092200a1` | Technical route example: resin drying, moulding, dye spin coating and drying, sputtering, edge cleaning and UV bonding. Patent case quantities are not general benchmarks. |
| `wri-wbcsd-product-standard-2011` | `standard` | [WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 6-9](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf); retrieved 2026-09-09; independence_key: `ghg-protocol-product-standard-2011` | Reference-flow disclosure, partial life-cycle boundaries, primary data and allocation hierarchy. |
