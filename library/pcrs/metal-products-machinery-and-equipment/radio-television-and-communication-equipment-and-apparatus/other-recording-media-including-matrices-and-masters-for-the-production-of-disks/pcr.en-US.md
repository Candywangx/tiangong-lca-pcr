---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-recording-media-including-matrices-and-masters-for-the-production-of-disks
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Other recording media, including matrices and masters for the production of disks

## 1. Scope and Applicability

This PCR covers manufacture of unrecorded physical master and matrix blanks and unrecorded wax sound-recording blanks. Recorded masters, recorded wax blanks and gramophone records are outside this boundary. Magnetic media, laser-recordable optical media, solid-state storage and smart cards belong to their own product categories. The unrecorded condition is mandatory, including when the item is intended for later replication. These distinctions follow `un-cpc-3-0-notes-2025`.

The representative route is an aluminum-backed nitrocellulose lacquer blank supplied before audio cutting. Its recording surface and substrate require separate material accounting; coating losses, solvent release, quality rejection and protective packaging require explicit collection. This material construction is supported by `cci-recording-media-care`; application and drying are modelled using the general coating principles in `us-epa-ap42-industrial-coating`. These sources do not prescribe a universal lacquer recipe or production yield.

For wax blanks or another unrecorded master substrate, instantiate a separate product-specific foreground package: declare the actual formulation, substrate, forming and finishing operations, and each individual exchange. The representative lacquer inventory cannot be assigned to a wax blank. Do not expand all product variants into repeated copies of common utilities. This is foreground dataset-production guidance, not an assertion of full life cycle or environmental-label certification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-recording-media-including-matrices-and-masters-for-the-production-of-disks |
| classification_refs | CPC 3.0 47590; classification context from `un-cpc-3-0-structure-2025` and `un-cpc-3-0-notes-2025` |
| covered_products | Unrecorded master and matrix blanks; unrecorded wax sound-recording blanks |
| excluded_products | Recorded masters and stampers carrying recorded information; recorded wax blanks; gramophone records; magnetic and optical recording media; semiconductor storage; smart cards; recording equipment; recording services and intellectual-property originals |
| representative_product | Accepted unrecorded aluminum-backed nitrocellulose lacquer disc blank |
| production_route | Receipt of prepared aluminum disc substrates and formulated lacquer; conditional wet cleaning; coating and drying; inspection; protective packing |
| market_state | Dry, inspected, unrecorded blank ready for downstream cutting, with a declared substrate, dimensions and recording-surface specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply an unrecorded physical blank suitable for the declared downstream sound-master cutting operation |
| How much | Declared unit: 1 kg net accepted blanks of one design; disclose blank count and usable recording-surface area associated with that mass |
| How well | Meet the purchaser's documented dimensions, flatness, surface integrity, adhesion and cutting-compatibility specification; no recorded information at dispatch |
| How long or cycle | One production lot through factory dispatch; disclose supplier storage conditions and shelf-life evidence, with no assumed recording lifetime or replication count |
| reference_flow_link | `reference_blank` is the sole quantitative reference output of `inspection_pack`; it excludes packaging mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Unrecorded aluminum-backed nitrocellulose lacquer disc blank |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Unrecorded state; master-blank function; substrate material and alloy; coating formulation identifier and solids content; blank diameter and thickness; coated sides; usable recording area; net mass per blank; accepted count; surface and cutting acceptance specification; storage requirements; manufacturing geography and technology; reporting period; supplier starting condition; included packaging; foreground and upstream boundaries |

These qualifiers must be recorded in the foreground package. The declared mass unit is not a claim that equal masses of different blank designs deliver equivalent recording service. Downstream recording duration and replication yield require separate functional-unit modelling.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_reference_mass` | Accepted blanks and internal transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh dry blanks after conditioning, excluding sleeves and boxes. Convert count with measured lot-specific mean blank mass; retain sample count, variability and scale calibration. |
| `coating_basis` | Liquid lacquer and acetone | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record supplied formulation mass, dry solids and each solvent mass fraction separately. Do not equate liquid formulation mass with dry coating mass or count its ingredients again as purchased inputs. Convert volume only with supplier or measured density and temperature. |
| `alkali_basis` | Sodium hydroxide | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report NaOH mass from measured solution mass and assay; record dilution water separately only if added on site. Preserve the supplied concentration when linking an upstream dataset. |
| `electricity_conversion` | Electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve measured kWh and use the exact unit identity 1 kWh = 3.6 MJ; record grid, voltage and metering boundary. Do not use an energy unit conversion as an emission factor. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_unrecorded` | Product eligibility | End manufacture before recording or cutting information into the blank. Recorded master manufacture, electroforming from recorded masters and record pressing are separate downstream systems. | `un-cpc-3-0-notes-2025` |
| `boundary_foreground` | Site operations | Include attributable preparation, coating, drying, ventilation, inspection, rejects, packing and waste handover. Record upstream supplier stages and inbound delivery separately when they are outside site records. Disclose any excluded attributable operation with a rationale. | `us-epa-ap42-industrial-coating`; `ghg-protocol-product-standard-2011` |
| `boundary_emissions` | Coating and cleaning | Include releases from formulation, thinner and cleaning solvent. Determine every emitted chemical from actual composition and measurements or a reconciled species balance; the acetone row applies only when acetone is present. Include capture, recovery, treatment inputs and treatment products if operated on site. | `us-epa-ap42-industrial-coating` |
| `boundary_extension` | Other routes and ancillary equipment | Document route applicability before calculating values. If on-site substrate forming, wax forming, combustion, solvent abatement or refrigeration occurs, collect its individual material, energy, waste and elementary exchanges; absence must be evidenced, not inferred from missing rows. | `ghg-protocol-product-standard-2011` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared bare aluminum disc substrates and formulated nitrocellulose lacquer received at the manufacturing site; record each supplier's included fabrication and delivery stages |
| starting_condition_role | Foreground collection entry point; it does not remove the upstream burdens of substrate or lacquer manufacture |
| product_classification_scope | Unrecorded physical blanks identified by the CPC notes; residual classification is not evidence that unrelated media share this route |
| recursive_input_rule | A purchased unrecorded blank used for further finishing is an upstream same-category input with its exact state and supplier dataset. Do not recursively recreate it within the same foreground process. Match internal transfers once and cancel them in the aggregate. |
| upstream_dataset_requirement | Link delivered substrate, coating, chemicals, electricity and packaging to compatible upstream datasets and link outgoing wastes to actual treatment. Disclose gaps; a site-only package is gate-to-gate and must not be labelled cradle-to-gate. |
| disclosure | Declare site, dates, route, subcontracting, suppliers, background versions and geography, transport inclusion, on-site treatment, waste destinations and exclusions. Downstream cutting, playback, replication and final-product disposal are outside this production package. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `blank_coating` | Substrate preparation, lacquer application and drying | required | For the representative lacquer-blank route; wet cleaning and acetone use are conditional on actual records | Foreground manufacturing | Dry unrecorded coated blanks transferred to inspection |
| `inspection_pack` | Inspection, rejection and protective packing | required | Every supplied lot; sleeve and box rows apply only when used | Foreground finishing and dispatch | 1 kg accepted unrecorded blanks, excluding packaging mass |

The cards are a minimum collection pattern for the representative route. Record actual additional exchanges individually. All amounts are normalized to the same accepted-output denominator. Internal transfers are not additional final products, and their receiving and sending amounts must reconcile.

### Process: Substrate preparation, lacquer application and drying (`blank_coating`)

#### Inputs

##### Product flows

###### Bare aluminum disc substrate for lacquer recording blanks (`aluminium_substrate`)

Record purchased prepared discs by actual alloy, geometry and surface state; upstream disc forming remains in the supplier dataset.

- Selected flow: Bare aluminum disc substrate for lacquer recording blanks
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net substrate mass issued minus returns, including substrates ultimately rejected, divided by M_accept.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_materials`
- Sources: `cci-recording-media-care`

###### Formulated nitrocellulose lacquer for recording-disc coating (`nitrocellulose_lacquer`)

This is one supplied coating formulation, with recipe identifier, solids fraction and solvent composition. If mixed on site, replace its purchased-input boundary with separately measured ingredients.

- Selected flow: Formulated nitrocellulose lacquer for recording-disc coating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net liquid lacquer consumption corrected for stock changes and returns, divided by M_accept; retain dry-solids mass separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_materials`
- Sources: `us-epa-ap42-industrial-coating`

###### Process Water (`process_water`)

inclusion_condition: on-site aqueous substrate washing, rinsing or dilution occurs. Count supplied makeup only; internal recirculation is not fresh supply.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered supplied water mass, with measured density if converted from volume, divided by M_accept.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_utilities`
- Sources: `ghg-protocol-product-standard-2011`

###### Sodium hydroxide (`sodium_hydroxide`)

inclusion_condition: a documented NaOH substrate-cleaning bath is used. Record assay, dilution and discharge separately.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: NaOH solution issued times measured NaOH mass fraction, corrected for returns, divided by M_accept.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_materials`
- Sources: `ghg-protocol-product-standard-2011`

###### Electricity (`coating_electricity`)

Include preparation, application, electrical drying and ventilation; retain actual non-electric heat as separate exchanges if present.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Attributable measured kWh times 3.6, divided by M_accept.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_utilities`
- Sources: `ghg-protocol-product-standard-2011`

###### Acetone solvent (`acetone_solvent`)

inclusion_condition: acetone is separately added as thinner or cleaning solvent. Acetone already contained in supplied lacquer enters the species balance, not this purchased-input amount.

- Selected flow: Acetone solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net separately added acetone solvent mass corrected for stock changes, divided by M_accept.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `us-epa-ap42-industrial-coating`

#### Outputs

##### Product flows

###### Dry unrecorded aluminum-backed nitrocellulose lacquer disc blank awaiting inspection (`coated_blank_out`)

Internal transfer to inspection with measured substrate-plus-dry-coating mass; do not count it as a second final reference output.

- Selected flow: Dry unrecorded aluminum-backed nitrocellulose lacquer disc blank awaiting inspection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Dry transfer mass divided by M_accept; match coated_blank_in after documented stock changes.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_materials`
- Sources: `cci-recording-media-care`

##### Waste flows

###### Waste Alkaline Liquor (`alkaline_wash_liquor`)

inclusion_condition: spent NaOH substrate-washing liquor leaves the process. Record wet mass, pH, dissolved aluminum and actual treatment; this is one alkaline aqueous waste stream.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Exported spent liquor wet mass adjusted for storage, divided by M_accept.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_wastes`
- Sources: `ghg-protocol-product-standard-2011`

###### Solvent-bearing liquid nitrocellulose lacquer waste (`liquid_lacquer_waste`)

Collect unusable liquid coating separately from wash liquor and dry rejected discs; retain its solids and species composition.

- Selected flow: Solvent-bearing liquid nitrocellulose lacquer waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured exported liquid lacquer waste mass divided by M_accept; solvent content also enters the species balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_coating_wastes`
- Sources: `us-epa-ap42-industrial-coating`

##### Elementary flows

###### acetone (`acetone_air`)

inclusion_condition: acetone is present and released during coating, drying or cleaning. Record environmental air release, excluding recovered or destroyed acetone.

- Selected flow: acetone `08a91e70-3ddc-11dd-9520-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured or reconciled species-balance acetone release divided by M_accept; record method and uncertainty.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `us-epa-ap42-industrial-coating`

### Process: Inspection, rejection and protective packing (`inspection_pack`)

#### Inputs

##### Product flows

###### Dry unrecorded aluminum-backed nitrocellulose lacquer disc blank awaiting inspection (`coated_blank_in`)

Receive the matching internal coated-blank transfer. A purchased coated blank instead requires a disclosed upstream dataset and removes duplicated in-house coating burdens.

- Selected flow: Dry unrecorded aluminum-backed nitrocellulose lacquer disc blank awaiting inspection
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Received dry blank mass divided by M_accept; reconcile with coated_blank_out.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Sources: `cci-recording-media-care`

###### Protective paper sleeve for recording disc (`paper_sleeve`)

inclusion_condition: a paper sleeve is supplied. Declare paper grade, coating and sleeve mass; retain any other actual packaging component in its own row.

- Selected flow: Protective paper sleeve for recording disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Issued sleeve mass minus unused returns, divided by M_accept.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Sources: `ghg-protocol-product-standard-2011`

###### corrugated board boxes (`corrugated_box`)

inclusion_condition: corrugated board boxes protect the dispatched blanks. Record board grade and net packaging mass separately from the blank reference mass.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net box consumption mass divided by M_accept, using a documented shipment allocation for shared boxes.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Sources: `ghg-protocol-product-standard-2011`

###### Electricity (`packing_electricity`)

Record inspection and packing equipment electricity separately from coating to prevent shared-meter double counting.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; Units of energy `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Attributable measured kWh times 3.6, divided by M_accept.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack_energy`
- Sources: `ghg-protocol-product-standard-2011`

#### Outputs

##### Product flows

###### Unrecorded aluminum-backed nitrocellulose lacquer disc blank (`reference_blank`)

The sole accepted reference output excludes packaging, rejects and blanks with recorded information. Retain acceptance evidence and lot-specific mass-to-count conversion.

- Selected flow: Unrecorded aluminum-backed nitrocellulose lacquer disc blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: M_accept / M_accept = 1 kg per declared unit; M_accept must be measured and positive.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Sources: `un-cpc-3-0-notes-2025`

##### Waste flows

###### Rejected nitrocellulose lacquer-coated aluminum disc (`rejected_disc`)

Include failed blanks and destructive samples leaving as waste, with coating retained; record internal rework separately and disclose treatment destination.

- Selected flow: Rejected nitrocellulose lacquer-coated aluminum disc
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured rejected composite disc mass sent to treatment, divided by M_accept.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net accepted unrecorded blank output, excluding packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dispatch`
- Sources: `ghg-protocol-product-standard-2011`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | Shared manufacturing | Separate lines and meters first. For residual shared consumption, use a demonstrated causal driver, such as occupied equipment time or coated area for identical recipes, and retain the numerator and denominator. Equal mass alone does not establish equivalence between blank designs. | `ghg-protocol-product-standard-2011` |
| `allocation_rejects` | Rejects and internal rework | Keep failed blanks, destructive acceptance samples and unrecovered coating losses within the lot burden. Internal rework is an internal transfer, not a saleable co-product or avoided virgin-material credit. | `ghg-protocol-product-standard-2011` |
| `allocation_coproduct` | Saleable recoveries | For a genuine co-product use a justified physical relationship; if no applicable physical relationship exists, document economic or another justified allocation. Record the recovery boundary and recipient; apply one consistent recycling method and disclose it. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_coating_materials` | blank_coating | Substrate, lacquer and alkali inputs; coated transfer | Weighing and stock records | lot_id; supplier; substrate_alloy; received_mass; opening_stock; closing_stock; issued_mass; returned_mass; formulation_id; solids_fraction; NaOH_fraction; transfer_mass | Calibrated weighing, stock reconciliation, supplier specification and assay | kg; mass fraction | Every lot and stock closure | All lots in the declared continuous reporting period, including startup and rework | Named coating site and subcontractor handovers | Sum net consumption and transfers separately, then divide by accepted dry output mass | Scale calibration; invoices; formulation and assay records; linked lot tickets |
| `cp_coating_utilities` | blank_coating | Water and electricity | Meter records | meter_id; timestamps; opening_reading; closing_reading; process_assignment; shared_driver; water_density; water_temperature | Meter deltas; documented physical allocation if shared | kg; m3; kWh | Every shift or metered campaign | Same period as production; include drying and ventilation outside active coating time | Coating, preparation and attributable auxiliary equipment | Net meter delta allocated once; density-based water conversion and exact energy conversion; normalize by accepted output | Calibration; meter diagram; bills; driver reconciliation |
| `cp_solvent_balance` | blank_coating | Acetone supply and air release | Composition, test and balance records | species; formulation_mass; solvent_fraction; added_solvent_mass; inventory_change; residual_in_product; waste_solvent_mass; recovered_export; destruction_mass; stack_mass; fugitive_mass | Supplier composition plus site assay, stock balance and representative stack/fugitive measurements; log control-system operation | kg/species | Each formulation and campaign; after recipe or control change | Same complete production period | Whole coating and cleaning solvent system including drying and local recovery | Per-species input equals air release plus product retention, wastes, recovery export, destruction and inventory increase; internal recovered reuse cancels | Composition certificate; test method; sampling coverage; residual and recovery records; closure uncertainty |
| `cp_coating_wastes` | blank_coating | Alkaline wash liquor and liquid lacquer waste | Waste handover records | stream_id; batch; wet_mass; water_fraction; solvent_fraction; pH; destination; carrier; transfer_date | Weigh separately at each transfer; sample stream composition; verify treatment receiver | kg; mass fraction; pH | Each transfer and representative sampling campaign | All transfers and stock changes in the production period | Coating site to named treatment handover | Net exported wet mass per stream, with composition; no combination of spent lacquer and wash liquor | Weighbridge tickets; waste manifests; analytical results; treatment contract |
| `cp_dispatch` | inspection_pack | Coated transfer, packaging, accepted and rejected blanks | Lot inspection and dispatch records | lot_id; incoming_blank_mass; accepted_count; unit_mass_samples; accepted_mass; reject_mass; stock_change; sleeve_mass; box_mass; surface_test; dimensions; cutting_test; unrecorded_check; storage_conditions | Calibrated weighing and count reconciliation; purchaser-specific inspection; packaging issue and return records | kg; count; mm; m2 | Every lot; sample unit mass and quality under a documented acceptance plan | Same period as coating including rejects and opening/closing stock | Named inspection and packing site | Reconcile transfer to accepted output, rejects and stock; net packaging consumption per accepted output; no averaging of incompatible designs | Test records; sampling plan; scale certificates; dispatch tickets; packaging specifications |
| `cp_pack_energy` | inspection_pack | Inspection and packing electricity | Meter and equipment records | meter_id; kWh; run_time; standby_time; allocation_driver; lot_id | Submeter or validated equipment study reconciled to facility meter | kWh | Each lot or shift | Same period as accepted output | Inspection and packing equipment | Attribute once, include measured standby, convert to MJ and normalize | Calibration; equipment study; facility reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot` | Every inventory row | q_i = Q_i / M_accept, with M_accept > 0; combine compatible lots by sum(Q_i)/sum(M_accept), never an unweighted mean of lot intensities. Q_i is allocated net consumption, transfer, waste or release in the declared period. | Protocol-specific Q_i; accepted dry mass from cp_dispatch | Exchange per 1 kg accepted blank | `ghg-protocol-product-standard-2011` |
| `blank_mass_balance` | Dry blank transfers | M_in = M_accept + M_reject + delta_M_stock for inspection; account separately for any sampled or reworked material. Pair coated_blank_out and coated_blank_in before aggregation. | cp_coating_materials; cp_dispatch | Lot and transfer reconciliation; accepted yield from actual records | `ghg-protocol-product-standard-2011` |
| `solvent_species_balance` | Acetone and each additional actual solvent | E_air = M_in - M_retained - M_waste - M_recovered_export - M_destroyed - delta_M_stock. M_in includes the species in supplied lacquer and separately added solvent. Validate with measurements and uncertainty; negative results require investigation, not clipping to zero. A destruction term requires a balanced treatment model. | cp_solvent_balance | Species-specific residual air release; distinguish measured from balance-derived results | `us-epa-ap42-industrial-coating` |
| `coating_solids_check` | Lacquer deposition | Compare dry coating gain against supplied nonvolatile solids less solids in wastes and stock change. Retain substrate mass and residual-solvent correction; do not force unmatched mass into a generic emission. | cp_coating_materials; cp_solvent_balance; cp_coating_wastes | Evidence of coating and solvent balance closure | `us-epa-ap42-industrial-coating` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and route | Preserve unrecorded status and all reference qualifiers. Historic media composition is not a modern supplier recipe or production-intensity dataset. | Supplier and acceptance records; `un-cpc-3-0-notes-2025`; `cci-recording-media-care` |
| `dq_coverage` | Foreground records | Cover a disclosed continuous period with startup, standby, rework, failures and stock changes. Assess temporal, geographic and technological representativeness, completeness and reliability; never treat absent data as zero. | Protocol records and coverage matrix; `ghg-protocol-product-standard-2011` |
| `dq_uncertainty` | Balances and allocation | Retain measurement uncertainty, analytical detection limits, shared-meter drivers and unmeasured residuals. Establish site-specific balance acceptance from instrument uncertainty; investigate exceptions. | Calibration, sampling and balance review; `ghg-protocol-product-standard-2011` |
| `dq_composition` | Coating and wastes | Obtain actual formulation and waste composition. Protect confidential detail through controlled evidence access while retaining enough information for independent verification. | Formulation certificate, assay and waste test; `us-epa-ap42-industrial-coating` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | Reference definition | Require exactly one accepted reference output, net mass basis, all qualifiers and evidence of the unrecorded state. Reject a recorded master or final pressing as the reference product. | `un-cpc-3-0-notes-2025` |
| `validate_inventory` | Exchanges and traceability | Require one atomic exchange per row, direction and type consistency, unit compatibility, and a collected or calculated amount linked to a protocol. Do not replace a missing flow identity with an approximate material or an aggregate waste label. | `ghg-protocol-product-standard-2011` |
| `validate_balance` | Production and solvent balances | Reconcile internal transfers, accepted mass, rejects, stock and packaging. Close solvent balances by species and state the uncertainty. Do not enter electricity-supply emissions again as direct foreground emissions. | `us-epa-ap42-industrial-coating`; `ghg-protocol-product-standard-2011` |
| `validate_applicability` | Conditional exchanges and route extensions | Document actual absence for nonapplicable cards. Add separate rows for any actual solvent, fuel, treatment input, treatment output or emission outside the representative pattern before claiming complete site coverage. | `us-epa-ap42-industrial-coating`; `ghg-protocol-product-standard-2011` |
| `validate_evidence` | Quantities and downstream use | Use actual foreground records for quantities. Generic coating tables and preservation conditions cannot supply disc-manufacture ranges. Separate gate-to-gate results from upstream-completed results and disclose missing stages and data. | `cci-recording-media-care`; `us-epa-ap42-industrial-coating`; `ghg-protocol-product-standard-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Production input for a matching unrecorded master blank in downstream recording or replication models |
| allowed_use | Matching material, dimensions, surface specification, technology, geography and delivery boundary; convert to count only with documented blank mass |
| excluded_use | Recorded content, recorded stampers, pressed records, optical or magnetic media, solid-state devices; unsupported cross-design service comparison; complete playback or consumer-life-cycle claims from site-only data |
| required_metadata | All reference qualifiers; dataset owner and version; reporting period; supplier and background links; manufacturing route; process map; allocation; transport boundary; waste treatment; protocol identifiers |
| required_quality_disclosure | Coverage by process and exchange; measurement and model uncertainty; composition quality; sampling; internal-transfer reconciliation; missing identities or datasets; excluded stages; comparability restrictions |
| update_trigger | Change in substrate, formulation, geometry, acceptance specification, coating or drying technology, electricity supply, abatement, waste destination, packaging, supplier boundary or representativeness of the reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | UNSD, CPC 3.0 structure, 30 June 2025, row 47590. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; retrieved 2026-09-09 | Classification identity; independence_key: un-cpc-3-0-2025 |
| `un-cpc-3-0-notes-2025` | official_guidance | UNSD, CPC 3.0 explanatory notes, 30 June 2025, p. 260, subclasses 47540, 47550, 47590 and 47610. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf ; retrieved 2026-09-09 | Original-text eligibility and recorded/unrecorded exclusions; independence_key: un-cpc-3-0-2025 |
| `cci-recording-media-care` | official_guidance | Joe Iraci, Canadian Conservation Institute (2020), Caring for audio, video and data recording media, Cat. No. CH57-4/6-2-2020E-PDF, ISBN 978-0-660-35113-1; Table 1 and sections on deterioration of lacquer discs. https://www.canada.ca/en/conservation-institute/services/preventive-conservation/guidelines-collections/caring-audio-video-data-recording-media.html ; retrieved 2026-09-09 | Substrate/coating construction and surface-condition relevance; historical preservation guidance, not manufacturing quantities; independence_key: cci-caring-recording-media |
| `us-epa-ap42-industrial-coating` | official_guidance | US EPA, AP-42 section 4.2.2.1, General Industrial Surface Coating, April 1981, reformatted January 1995, process description and emissions discussion, pp. 1-3. https://www.epa.gov/sites/default/files/2020-10/documents/c4s02_2a.pdf ; retrieved 2026-09-09 | Application/drying and coating/cleanup solvent accounting. General US coating guidance is used only for physical method principles; no default density, solvent fraction, emission factor or control efficiency adopted; independence_key: us-epa-ap42-4-2-2-1 |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, chapters 7-9 and 13. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; retrieved 2026-09-09 | Boundary disclosure, data quality and allocation principles adapted to this inventory; this PCR does not claim certification or restrict LCA to greenhouse gases; independence_key: wri-wbcsd-product-standard-2011 |
