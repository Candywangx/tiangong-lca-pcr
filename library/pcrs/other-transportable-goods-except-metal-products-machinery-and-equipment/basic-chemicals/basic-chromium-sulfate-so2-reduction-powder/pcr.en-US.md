---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.basic-chromium-sulfate-so2-reduction-powder
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Basic chromium sulfate tanning powder by sulfur-dioxide reduction

## 1. Scope and Applicability

This PCR defines a factory-gate technical basic chromium sulfate tanning powder made by reduction of purchased sodium dichromate with purchased sulfur dioxide, liquor adjustment, spray drying and paper/PE packaging. ATSDR identifies commercial SO2 reduction; the original Chinese patent documents the reduction/adjustment/drying sequence. The producer TDS confirms a commercial dry powder and distinguishes grades. These sources establish a physical route and market state, not a current factory recipe or quantities. [atsdr-chromium-2012; cn1099727a-route; chrompik-bcs-tds]

Exclude colouring preparations (34310/34340), vegetable tanning or colouring extracts (34320), generic non-tanning salts (34240), organic syntans, enzymes, pure non-basic chromium(III) sulfate, leather production, chromium recovery from tannery wastes, and organic-reductant manufacture. Liquid tanning-liquor delivery and on-site sulfur combustion need different boundary inventories. The inherited reference-flow selection is a conditional identity candidate; an independently accessible native record is required before adoption. A public TDS supports the physical product, not its Tiangong UUID. Actual supplied powder composition and compatible provider quantities remain dataset collection requirements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.basic-chromium-sulfate-so2-reduction-powder |
| classification_refs | CPC 3.0 34330; accepted narrower inorganic tanning powder subset under docs/adr/2026-11-22-accept-cpc-34330-basic-chromium-sulfate-tanning-powder.md |
| covered_products | Technical basic chromium sulfate tanning powder from the declared SO2 reduction route, with declared grade and retained sulfate/water |
| excluded_products | Syntans; enzymes; vegetable extracts; recovered tannery salts; organic reduction products; liquid delivery; non-basic Cr(III) sulfate |
| representative_product | Basic chromium sulfate tanning powder |
| production_route | Purchased dichromate dihydrate and SO2; aqueous reduction; measured basicity adjustment; spray drying; dust recovery; paper/PE packing |
| market_state | Accepted as-supplied net powder at factory gate; residual moisture and retained sodium sulfate declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Basic chromium sulfate tanning powder |
| How much | 1 kg accepted net as-supplied powder, excluding packaging |
| How well | Declared commercial grade: basicity, Cr content on stated assay basis, sulfate, water, insolubles and Cr(VI) detection limit; no assumed grade values |
| How long or cycle | One reconciled production reporting period covering batches, start/stop and stock changes; not service life |
| reference_flow_link | reference_product |


| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | basic chromium sulfate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU; supplier/site/period; CAS and actual mixture composition; SO2 reduction route; grade/basicity method; Cr assay basis and detection limit; retained sodium sulfate; moisture; net/gross distinction; packaging; treatment destinations |

Required qualifiers must accompany the dataset. Confirm a native product/property/unit-group identity chain against the actual powder, SKU, composition, supply geography and provider quantity before use. A producer TDS CAS does not prove every commercial mixture is one pure molecular species; the semantic reference here has no adopted UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass | kg | P is unique actual accepted net factory-gate delivery of the declared as-supplied powder cohort, excluding packaging; it is not first production release R. Weigh physical outward product and actual returns separately; normalize only once under normalize_exchange. |
| mixture_basis | chemical inputs and reference powder | Mass | kg | Retain total delivered mass, measured dry matter, active/species mass and carrier water separately; never normalize to Cr2O3 assay equivalent instead of product mass. |
| steam_basis | steam_import | Mass and independently measured enthalpy | kg; auxiliary MJ | Record actual absolute/gauge pressure, temperature, steam quality, supply/return enthalpies and condensate quantity. Match supplier reference definition before a heat conversion; unknown compatibility is pending. |
| pollutant_basis | air and effluent | Species mass | kg | Cr(III)/Cr(VI) are as Cr; sulfate is as SO4; sodium is as Na; SO2 is compound mass. Preserve total-Cr and particle-size reconciliation without adding overlapping descriptors. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased dihydrate crystals, SO2 and utilities at the chemical-manufacturing gate |
| starting_condition_role | Foreground production starting condition; not a zero-burden upstream boundary |
| product_classification_scope | One inorganic tanning-powder subset; no full 34330 applicability |
| recursive_input_rule | Purchased in-category powder/liquor must be separately inventoried with upstream provider and actual state; internal rework is not a purchased input |
| upstream_dataset_requirement | Bind chemicals, power, water, steam, packaging, transport and external waste treatment to compatible provider quantities and backgrounds |
| disclosure | Declare route, site, time, delivery state, unit operations, stock/recycle links, heat supply, abatement and receiving compartments |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_gate | bcs_manufacture | Include feed preparation, SO2 absorption/reduction, liquor adjustment, any actual purification, spray drying, product recovery, packing, cleaning and on-site abatement. Keep stage meters and transfers inside one foreground unit with one final output. | cn1099727a-route; eu-sic-2007 |
| boundary_losses | bcs_manufacture | Maintain physical Cr/S/Na/water ledgers and air/water/waste inventories; measure reaction conversion, salt retention, moisture and purification losses. Patent cases are not default recipes or zero-release evidence. | cn1099727a-route; eu-cww-2016 |
| boundary_extension | bcs_manufacture | Inventory every actual unlisted chemical, carrier, container, direct fuel, carbonate CO2 and returned condensate as a separate flow before claiming complete data. External treatment transfers and direct receiving-water emissions cannot share an outlet amount. | eu-cww-2016 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bcs_manufacture | SO2 reduction, conditioning, spray drying and delivery | required | Declared purchased-SO2/powder route | foreground_production | 1 kg reference flow |

The patent also specifies its own sulfur burner and optional hot SO2-containing drying gas (description pp3–6/PDF6–9). Those heat and carrier-gas integrations are excluded here. Reuse only the supported reduction, conditioning and powder-recovery topology; establish the actual purchased-SO2 delivery and separate dryer heat service from site records. [cn1099727a-route]

Physical stage sequence: feed dissolution → gas-liquid reduction → measured adjustment/purification → spray dryer → recovered accepted powder → paper/PE packing. Recirculated scrubber liquid/dust has equal sending/receiving quantities and retains Cr, salts and water. Intermediate liquor is metered without another external reference output. Purchased SO2 production and utility generation remain upstream; adding an on-site sulfur burner changes this profile.

### Process: SO2 reduction, conditioning, spray drying and delivery (`bcs_manufacture`)

#### Inputs

##### Product flows

###### Sodium dichromate dihydrate (`dichromate`)

Weigh the actual incoming crystalline dihydrate feed and assay its water, chromium(VI), sodium and sulfate impurities. A purchased solution requires a separately identified solution row with measured salt and carrier-water fractions; do not reuse the crystalline supply amount as solution mass.

- Selected flow: Sodium dichromate dihydrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `atsdr-chromium-2012`; `cn1099727a-route`

###### Purchased sulfur dioxide (`sulfur_dioxide_feed`)

This route begins with purchased SO2, not an on-site sulfur burner. Measure SO2 delivery and feed, purity, phase and gas conditions; if gas mixtures are supplied, document carrier gas separately. Upstream SO2 production remains in the supplier system.

Confirm the actual supplied physical state, assay, geography, manufacturing route and provider reference quantity through the linked collection protocol before adopting a native flow identity. No supplier grade, voltage, purity or dose is a default.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `atsdr-chromium-2012`

###### Anhydrous sodium carbonate (`sodium_carbonate`)

Conditional actual basicity adjustment reagent. Measure reagent mass and assay rather than applying a patent dose or a fixed target basicity. Carbonate-derived CO2 needs its own measured emission row before a dataset is complete.

- Selected flow: Anhydrous sodium carbonate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cn1099727a-route`

###### Sulfuric acid (`sulfuric_acid`)

Conditional actual acidity/basicity adjustment. The SO2 route does not require the sulfuric-acid dose used for organic-reductant manufacture. Record supplied acid concentration, water and consumption separately from pure-H2SO4 equivalent.

Confirm the actual supplied physical state, assay, geography, manufacturing route and provider reference quantity through the linked collection protocol before adopting a native flow identity. No supplier grade, voltage, purity or dose is a default.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cn1099727a-route`

###### Sodium hydroxide (`sodium_hydroxide`)

Conditional actual dedicated caustic SO2 scrubbing; record delivered state/assay and dilution water separately. Product-liquor recovery does not imply NaOH consumption.

Confirm the actual supplied physical state, assay, geography, manufacturing route and provider reference quantity through the linked collection protocol before adopting a native flow identity. No supplier grade, voltage, purity or dose is a default.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `eu-sic-2007`; `eu-cww-2016`

###### Calcium hydroxide (`calcium_hydroxide`)

Conditional actual on-site chromium precipitation reagent. Include only if the installed treatment uses this substance; record purity, treatment efficiency, sludge and calcium-bearing outlet. A different precipitant needs another atomic row.

Confirm the actual supplied physical state, assay, geography, manufacturing route and provider reference quantity through the linked collection protocol before adopting a native flow identity. No supplier grade, voltage, purity or dose is a default.

- Selected flow: hydrated lime
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `eu-sic-2007`; `eu-cww-2016`

###### Supplied process water (`process_water`)

Include purchased treatment-grade water used in dilution, cleaning and scrubber make-up. Meter each stage and convert volume with measured density and conditions. Internal scrubber-liquor recycling is an internal link, not another purchased-water input.

- Selected flow: Process Water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources: `cn1099727a-route`; `eu-cww-2016`

###### Purchased electricity (`electricity`)

Measure pumps, fans, atomisation, mixing, conditioning, packing and on-site abatement separately. Record meter kWh and the exact background reference energy property; convert kWh to MJ without inferring a supplier NCV/GCV property.

Confirm the actual supplied physical state, assay, geography, manufacturing route and provider reference quantity through the linked collection protocol before adopting a native flow identity. No supplier grade, voltage, purity or dose is a default.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy `f6811440-ee37-11de-8a39-0800200c9a66` / kWh
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `eu-sic-2007`

The Energy/kWh binding is the measured electrical quantity only. The energy unit group defines 1 kWh = 3.6 MJ. This does not select an electricity commodity/provider, its geography/voltage or its native reference property. A provider with another property needs separately evidenced quantity compatibility; do not relabel electrical readings as fuel calorific value.

###### Imported saturated process steam (`steam_import`)

Conditional actual indirect heating for liquor conditioning or spray-dryer air. Measure steam mass, pressure, temperature, quality and condensate enthalpy/return. A steam mass or MJ label alone establishes no net delivered heat basis; supplier compatibility remains unresolved.

- Selected flow: Imported saturated process steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `cn1099727a-route`; `eu-sic-2007`

###### Multiwall paper sack (`paper_sack`)

This card records every actual purchase of the paper component, with acquisition event/lot and tare; first non-purchase receipts and traced returns use their own cards.

Include the measured paper component of the actual delivered sack. Do not use the producer example bag size as a default or include the PE liner twice.

Confirm the actual supplied physical state, assay, geography, manufacturing route and provider reference quantity through the linked collection protocol before adopting a native flow identity. No supplier grade, voltage, purity or dose is a default.

- Selected flow: Multiwall paper sack paper component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `chrompik-bcs-tds`

###### Polyethylene film liner (`pe_liner`)

This card records every actual PE liner purchase with its own acquisition event/lot; first non-purchase receipts and traced returns use separate cards.

Include the actual separately weighed PE liner of the delivered paper sack; retain polymer grade and supplier. Bulk or another container requires documented distinct component rows before applying this profile.

Confirm the actual supplied physical state, assay, geography, manufacturing route and provider reference quantity through the linked collection protocol before adopting a native flow identity. No supplier grade, voltage, purity or dose is a default.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `chrompik-bcs-tds`

###### Multiwall paper sack paper component first non-purchase external receipt (`paper_first_received`)

Only first external receipt without purchase: accompanying incoming material, independently borrowed or free-supplied, whether or not its upstream burden is included. Weigh actual empty tare and identify sender, item/lot, upstream inclusion and service history; never classify first receipt as a return.

- Selected flow: Multiwall paper sack paper component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through cp_pack and normalized once from the matched cohort total under section 8; retain unallocated physical totals separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-2010`

###### Multiwall paper sack paper component traced same-item return (`paper_returned`)

Only the same physical item previously sent out by this site, with original outward event ID and matching identity/tare. If proof is absent, retain an unresolved external receipt, never invent a closed return. Carry inherited burdens once; current cleaning/repair is additional actual service, not a new purchase.

- Selected flow: Multiwall paper sack paper component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through cp_pack and normalized once from the matched cohort total under section 8; retain unallocated physical totals separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-2010`

###### Polyethylene film liner first non-purchase external receipt (`pe_first_received`)

Only first external receipt without purchase: accompanying incoming material, independently borrowed or free-supplied, whether or not its upstream burden is included. Weigh actual empty tare and identify sender, item/lot, upstream inclusion and service history; never classify first receipt as a return.

- Selected flow: Polyethylene film liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through cp_pack and normalized once from the matched cohort total under section 8; retain unallocated physical totals separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-2010`

###### Polyethylene film liner traced same-item return (`pe_returned`)

Only the same physical item previously sent out by this site, with original outward event ID and matching identity/tare. If proof is absent, retain an unresolved external receipt, never invent a closed return. Carry inherited burdens once; current cleaning/repair is additional actual service, not a new purchase.

- Selected flow: Polyethylene film liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through cp_pack and normalized once from the matched cohort total under section 8; retain unallocated physical totals separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-2010`

#### Outputs

##### Product flows

###### Basic chromium sulfate tanning powder (`reference_product`)

Accepted net as-supplied powder at the gate, excluding packaging. The technical product may retain sodium sulfate and residual water; it is not one kilogram of pure Cr(OH)SO4 or Cr2O3. Liquor between reduction and drying remains an internal stage, not a second reference output.

Required qualifiers must accompany the dataset. Confirm a native product/property/unit-group identity chain against the actual powder, SKU, composition, supply geography and provider quantity before use. A producer TDS CAS does not prove every commercial mixture is one pure molecular species; the semantic reference here has no adopted UUID.

- Selected flow: basic chromium sulfate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product`
- Sources: `atsdr-chromium-2012`; `cn1099727a-route`; `chrompik-bcs-tds`

###### Returned steam condensate (`condensate_return`)

Conditional actual liquid condensate physically returned across the boundary to the external steam supplier. Meter returned mass, temperature, pressure and enthalpy; do not treat steam input mass as automatically returned condensate. Supplier heat background and return credits must reconcile once. Milk evaporator condensate is a different source and is rejected.

- Selected flow: Returned steam condensate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility`
- Sources: `eu-sic-2007`

###### Multiwall paper sack paper component outward transfer (`paper_outward`)

Record each actual outward event and empty component tare, sender/receiver, contained product/cohort and item/lot ID; distinguish delivered packaging from return to an external owner. Preserve physical mass independently of burden attribution, and do not assume every purchased or received item is dispatched this period.

- Selected flow: Multiwall paper sack paper component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through cp_pack and normalized once from the matched cohort total under section 8; retain unallocated physical totals separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-2010`

###### Polyethylene film liner outward transfer (`pe_outward`)

Record each actual outward event and empty component tare, sender/receiver, contained product/cohort and item/lot ID; distinguish delivered packaging from return to an external owner. Preserve physical mass independently of burden attribution, and do not assume every purchased or received item is dispatched this period.

- Selected flow: Polyethylene film liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through cp_pack and normalized once from the matched cohort total under section 8; retain unallocated physical totals separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-2010`

##### Waste flows

###### Discarded multiwall paper sack paper component (`paper_pack_waste`)

Conditional actual external treatment transfer. Weigh the full contaminated component and record nested dry substrate, retained powder/water, receiver and event provenance without adding those constituents again as physical waste. This is neither an outward reusable product nor an air/water emission.

- Selected flow: Chromium-contaminated discarded multiwall paper sack paper component
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through cp_pack and normalized once from the matched cohort total under section 8; retain unallocated physical totals separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-2010`

###### Discarded polyethylene film liner (`pe_pack_waste`)

Conditional actual external treatment transfer. Weigh the full contaminated component and record nested dry substrate, retained powder/water, receiver and event provenance without adding those constituents again as physical waste. This is neither an outward reusable product nor an air/water emission.

- Selected flow: Chromium-contaminated discarded polyethylene film liner
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through cp_pack and normalized once from the matched cohort total under section 8; retain unallocated physical totals separately.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources: `ilcd-lca-2010`



###### Discarded off-specification basic chromium sulfate powder (`offspec_powder`)

Only actual powder leaving for treatment, with chromium valences, salt content, moisture and receiver acceptance. Internal rework and captured powder returned to liquor are internal recovery, excluded from this waste amount.

- Selected flow: Discarded off-specification basic chromium sulfate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `cn1099727a-route`; `eu-sic-2007`

###### Chromium hydroxide precipitation sludge (`chromium_sludge`)

Conditional actual on-site effluent-treatment sludge; measure wet mass, dry solids, Cr(III)/Cr(VI), salts, treatment-reagent residues and receiving facility. Do not equate dry chromium content with total sludge mass.

- Selected flow: Chromium hydroxide precipitation sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `eu-sic-2007`; `eu-cww-2016`

###### Spent chromium-contaminated polyester filter cloth (`spent_filter`)

Conditional actual polyester filter cloth leaving treatment, identified from equipment records, retained liquid and contamination. Another substrate requires a distinct row; do not assume this media is installed.

- Selected flow: Spent chromium-contaminated polyester filter cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `eu-sic-2007`

###### Chromium-sulfate aqueous purge to external treatment (`aqueous_purge`)

One actual segregated liquid outlet transferred to a treatment operator. Measure volume, density, dissolved/suspended solids, chromium species and salt loading. Direct receiving-water discharges are different outlets; do not also enter this transfer as local elementary emissions.

- Selected flow: Chromium-sulfate aqueous purge to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources: `eu-cww-2016`

##### Elementary flows

###### Sulfur dioxide to outdoor air, unspecified (`so2_air`)

Actual residual SO2 beyond final abatement, including fugitive/start-stop releases. Separate feed, reacted sulfur, recovered liquor and outlet species; sulfite/sulfate are not SO2.

- Selected flow: sulfur dioxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `cn1099727a-route`; `eu-cww-2016`

###### Water vapour to outdoor air, unspecified (`water_vapour_air`)

Evaporated carrier water leaving the dryer/conditioning and control system. Reconcile retained moisture, condensate and liquid purge; this is not freshwater withdrawal.

- Selected flow: water vapour
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `cn1099727a-route`; `eu-cww-2016`

###### Chromium(III) to outdoor air, unspecified (`cr3_air`)

Measure particulate chromium valence and kg Cr basis at the final exhaust. Do not substitute total chromium or chromium(VI); species and particle-size records must reconcile.

- Selected flow: chromium (iii)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `cn1099727a-route`; `eu-cww-2016`

###### Chromium(VI) to outdoor air, unspecified (`cr6_air`)

Only measured unreduced/oxidised chromium(VI) on kg Cr basis. A product non-detect specification is not proof of zero air release; retain quantification limit and sampling context.

- Selected flow: chromium (vi)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `cn1099727a-route`; `eu-cww-2016`

###### Particulates, diameter less than 2.5 micrometres, to outdoor air (`pm_fine`)

Residual particle-size interval below 2.5 micrometres. Keep chemical composition and size mass ledger; do not add overlapping total dust to this interval.

- Selected flow: particles (PM2.5)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `cn1099727a-route`; `eu-cww-2016`

###### Particulates, diameter 2.5 to 10 micrometres, to outdoor air (`pm_coarse`)

Disjoint 2.5 to 10 micrometre interval. Derive from aligned simultaneous cumulative measurements only when cut conventions and uncertainty support subtraction. Preserve original measurements and propagated uncertainty; a negative difference is an inconsistency requiring review, not a value to clip to zero.

- Selected flow: particles (PM2.5 - PM10)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `cn1099727a-route`; `eu-cww-2016`

###### Particulates, diameter greater than 10 micrometres, to outdoor air (`pm_over10`)

Separate above-10-micrometre interval, not PM10. Captured and recycled powder is not emitted dust. Generic particle mass and chemical constituent mass are related descriptions, never additive physical losses.

- Selected flow: particles (> PM10)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `cn1099727a-route`; `eu-cww-2016`

###### Chromium(III) to freshwater, unspecified (`cr3_water`)

Conditional actual direct discharge beyond on-site treatment, kg Cr(III) as Cr. Require validated speciation and sampling preservation; total chromium is a closure check, not a valence inference.

- Selected flow: chromium (iii)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `eu-cww-2016`

###### Chromium(VI) to freshwater, unspecified (`cr6_water`)

Conditional direct residual Cr(VI) as Cr with matrix-validated laboratory method and quantification limit; do not use dichromate compound mass without stoichiometric conversion.

- Selected flow: chromium (vi)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `eu-cww-2016`

###### Sulfate to freshwater, unspecified (`sulfate_water`)

Conditional measured dissolved sulfate load on SO4 mass basis. Retained product sodium sulfate, sulfite and SO2 have separate ledgers; no default complete oxidation or removal.

- Selected flow: sulfate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `eu-cww-2016`

###### Sodium ion to freshwater, unspecified (`sodium_water`)

Conditional actual dissolved sodium load as Na. Sodium sulfate mass is not sodium-ion mass. Match receiving-water compartment, actual external outlet and same-period volume.

- Selected flow: Sodium, ion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `eu-cww-2016`

###### Liquid water discharge to freshwater, unspecified (`water_discharge`)

Conditional physical liquid water released into freshwater after on-site treatment. Derive the H2O component from measured effluent mass/density and dissolved/suspended components, retain kg as the exchange quantity and volume/density as auxiliary records; convert only for an independently verified provider convention. Record gross saline effluent separately; never treat it as pure water and add the solutes again. It is neither water withdrawal nor externally transferred wastewater.

- Selected flow: Water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `eu-cww-2016`

###### carbon dioxide (fossil) (`carbonate_co2`)

Conditional actual carbonate basicity adjustment. Determine released CO2 from measured reagent carbon, retained dissolved carbon and air monitoring. This binding applies only to documented fossil/geological carbonate carbon; if carbon is recent biological origin, add the corresponding separate biogenic CO2 row and retain it in LCI. Unknown provenance is pending, not zero or automatically fossil.

- Selected flow: carbon dioxide (fossil)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Actual measured quantity per 1 kg reference flow, collected through the stated protocol and normalized once from the matched same-period total under section 8; incomplete cohort or stock attribution prohibits a unit result.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air`
- Sources: `cn1099727a-route`; `eu-cww-2016`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_physical | bcs_manufacture | Keep unallocated stage mass and Cr/S/Na/water balances separately from the attributed environmental-burden ledger. Never multiply physical outputs or internal transfer amounts by an allocation fraction. | eu-sic-2007; eu-cww-2016; ilcd-lca-2010 |
| allocation_sulfate | bcs_manufacture | Sodium sulfate retained in the sold powder is a constituent, not a separate coproduct. No automatic credit or allocation to retained salt. A separately recovered, sold sulfate stream needs a new measured product row and an explicit reviewed coproduct treatment before use. | cn1099727a-route |
| allocation_shared | bcs_manufacture | Submeter shared utilities by stage and campaign; where impossible document the measured physical service driver, period and uncertainty, reconcile to the site total and disclose other products. No universal allocation percentage or economic price is assumed. | eu-sic-2007; ilcd-lca-2010 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Collect unallocated stage totals, inventories and internal links first. P is the same-period accepted net as-supplied powder mass in kg after stock and rework reconciliation. Protocol aggregation fields below state the final common basis; the normalization rule retains the measured numerator and division by P. Reaction consumption/formation of H2O and incoming gas humidity must be reconciled separately from moisture evaporation.

Before allocating burdens, record every material movement with sending/receiving stage, gross wet mass, dry matter, water, species content, stock change and return link. For external logistics and treatment, retain the actual mode, distance, load, service quantity and provider inclusion boundary; add each actual transport or treatment exchange separately when not already included upstream. No default freight mode, distance, carrier, fuel or treatment credit is established.

Cr2O3 is an assay equivalent, not proof of oxide particles or Cr(III) alone: convert its stated mass to elemental Cr using twice the atomic mass of Cr divided by the molar mass of Cr2O3, retaining the laboratory assay scope and wet/dry basis. Convert dihydrate and anhydrous salt masses only using the declared molecular composition and hydrate molar-mass ratio; track crystal water separately. Basicity is a separate method-defined hydroxyl-equivalent result; record the actual analytical procedure and endpoint, not pH or a Cr2O3 percentage substituted for basicity. [cn1099727a-route; chrompik-bcs-tds]

Require separate total-element Cr and Cr(VI) laboratory results on matched sample, time and dissolved/particulate basis. EPA 6010D measures elements by ICP-OES and requires appropriate preparation; it does not establish valence. EPA 7199 measures dissolved Cr(VI) in specified aqueous matrices after filtration, with sulfate/chloride overload and reducing-matrix interference controls. Its filtrate cannot be subtracted from an unfiltered total-Cr result as if both represented the same material. Preserve filtration fractions, preparation, preservation, blanks, recovery, dilution, detection/quantification limits and uncertainty. Identify Cr(III) by an independently matrix-validated speciation procedure. Total chromium is only a closure check; do not infer either valence by subtraction. Preserve a negative difference and its uncertainty for investigation; do not clip it, force all total Cr into Cr(III), or treat a non-detect as zero. A missing method or unresolved speciation keeps the relevant measurement incomplete. [epa-crvi-7199; epa-elements-6010d]

EPA 0061 provides a Cr(VI) stationary-source sampling and analytical example for its stated incinerator/combustor matrices, with valence-conversion interference controls. It does not by itself verify this spray-dryer exhaust or product-powder assay. Require demonstrated applicability of the actual laboratory sampling/extraction/speciation procedure before using the air or powder valence results. [epa-stack-crvi-0061]

For technical basic chromium sulfate, IS 6301:1971 Appendix A-4 uses matched chromium and combined-acid titrations. Use its complete analytical procedure or a laboratory-validated equivalent; retain dissolution/insoluble fraction, aliquot/dilution factors, standardized titrant concentrations, blank correction, endpoints and replicate uncertainty. Let a and b be the chromium and acid titres corrected to equivalent aliquots and the stated common titrant basis: basicity = 100*(a-b)/a, with a positive. Do not apply this expression to uncorrected volumes or pH. Its chromium assay deliberately oxidizes chromium, so it measures assay chromium rather than original valence. The standard is historical analytical evidence, not a current legal requirement, operating recipe or default grade. [bis-bcs-1971]

The Japanese Customs study independently reports basicity from chromium and neutralisation titrations on chrome tanning substances (§2.5); its synthesis recipes and sodium-sulfate classification conclusions are not adopted here. [customs-bcs-1996]

The delivery denominator P and first production release R belong to distinct gates. Carry opening/closing raw, WIP and finished-product cohorts across periods with unchanged material identity and each original exchange unit; a prior cohort cannot receive current burdens by mass alone. Correct a prior delivery return against that original delivery cohort and its original denominator/burden record; physical return U in this period is not automatically a subtraction from this period P. Retain current return handling burdens and inherited returned-stock burdens separately. Physical outlet totals remain unallocated observations; dividing a full-period outlet by P is only a disclosed period ratio unless its cohort attribution is proved. A delivery-cohort unit inventory requires the matching physical-service attribution and provider quantity as well as the burden bridge; unresolved attribution prohibits the unit result.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | bcs_manufacture | reference_product | foreground_record | Calibrated net product mass; batch; grade; moisture; basicity; analytical procedure/version; original sample dissolution and insolubles; matched aliquot/dilution factors; standardized titrant concentrations and blank-corrected a/b titres; endpoints; replicates and uncertainty; total Cr and Cr(VI) method/LOQ; sodium sulfate; opening/closing stock; rework ; period/cohort and original movement IDs; R first production release; D_gross outward product before return netting; U actual received returns; M physical loss/rework removals; accepted net delivery P; opening/closing raw/WIP/FG masses and per-exchange original-unit carried burden vectors; return burden provenance/original reversal; failed/zero-output/idle/cleaning/rework records; row_id; current-activity basis (gross receipts or stock-reconciled issues/consumption); linked raw receipt/issue/return reconciliation IDs; raw-stock adjustment already applied flag; original-unit same-exchange vector/lot/stage provenance; physical return U versus original delivery/burden reversal IDs | Weigh net accepted same-grade product excluding packaging; reconcile production/dispatch and stocks; sample representative batches with matrix-validated assays Retain undivided delivery, return, release, stock and burden records for the complete matched period including failed/zero-output work. P is unique actual accepted net delivery, not R. No collection division; normalize_exchange alone reports the final per-kg result. | kg | Each batch/stage; representative outlet monitoring including events | Same representative reporting period across all rows | Declared line, grade and treatment outlets | per 1 kg reference flow | Calibration; sampling coverage; assay method/LOQ; supplier records; missing data and uncertainty disclosure |
| cp_material | bcs_manufacture | chemical feeds | foreground_record | Delivered and used mass; assay; SKU; phase; concentration; salt/water fractions; supplier; stoichiometry; grade; stock changes | Weigh batches/tank stock changes with calibrated equipment; retain COA/SDS and measurements; gas conversion uses actual T/P/composition/Z; not theoretical dose | kg | Each batch/stage; representative outlet monitoring including events | Same representative reporting period across all rows | Declared line, grade and treatment outlets | per 1 kg reference flow | Calibration; sampling coverage; assay method/LOQ; supplier records; missing data and uncertainty disclosure |
| cp_water | bcs_manufacture | process_water | foreground_record | Stage inlet volumes; density; temperature; recycle/purge; cleaning periods; water quality | Use calibrated stage meters and actual density; reconcile new water, retained water, condensate, evaporated water and transfers without counting recycle twice | m3; kg | Each batch/stage; representative outlet monitoring including events | Same representative reporting period across all rows | Declared line, grade and treatment outlets | per 1 kg reference flow | Calibration; sampling coverage; assay method/LOQ; supplier records; missing data and uncertainty disclosure |
| cp_utility | bcs_manufacture | electricity; steam_import; condensate_return | foreground_record | Stage power kWh; steam kg; supply pressure/temperature/quality; condensate kg and enthalpy; losses; background definition | Submeter stages; match background supply geography/period and exact reference property; retain steam inlet/outlet enthalpy balance and physical condensate return | kWh; MJ; kg | Each batch/stage; representative outlet monitoring including events | Same representative reporting period across all rows | Declared line, grade and treatment outlets | per 1 kg reference flow | Calibration; sampling coverage; assay method/LOQ; supplier records; missing data and uncertainty disclosure |
| cp_pack | bcs_manufacture | paper_sack; pe_liner; paper_first_received; pe_first_received; paper_returned; pe_returned; paper_outward; pe_outward; paper_pack_waste; pe_pack_waste | foreground_record | Component mass; polymer grade; tare; item/lot and original outward IDs; B/E/T/O/W movements; opening/closing stock; ownership and supplier burden inclusion; services and inherited burden; number used; scrap; net contents | Weigh actual paper and PE components separately; reconcile used components and product shipped; add other real components independently | kg | Each batch/stage; representative outlet monitoring including events | Same representative reporting period across all rows | Declared line, grade and treatment outlets | per 1 kg reference flow | Calibration; sampling coverage; assay method/LOQ; supplier records; missing data and uncertainty disclosure |
| cp_waste | bcs_manufacture | solid waste and aqueous_purge | foreground_record | Outlet; wet mass; dry solids; density; Cr valences; salts; destination; receiver acceptance; stock/recovery | Weigh or meter each actual segregated outlet and validate composition; retain transfer manifests; subtract internal recovery from external loss ledger | kg | Each batch/stage; representative outlet monitoring including events | Same representative reporting period across all rows | Declared line, grade and treatment outlets | per 1 kg reference flow | Calibration; sampling coverage; assay method/LOQ; supplier records; missing data and uncertainty disclosure |
| cp_air | bcs_manufacture | air emissions | foreground_record | Outlet/fugitive point; flow; sampling interval; dry/wet basis; T/P/O2; species concentration; Cr valences; dust size; LOQ; control bypass | Sample actual final exhaust and fugitives; integrate simultaneous concentration and corrected gas flow over normal/start-stop/bypass operation; reconcile captured dust and recycle separately | kg | Each batch/stage; representative outlet monitoring including events | Same representative reporting period across all rows | Declared line, grade and treatment outlets | per 1 kg reference flow | Calibration; sampling coverage; assay method/LOQ; supplier records; missing data and uncertainty disclosure |
| cp_effluent | bcs_manufacture | freshwater emissions | foreground_record | Direct outlet; receiving water; flow; density; dissolved/suspended solids; sodium; sulfate; total Cr and valences; method; LOQ | Sample actual post-treatment direct outlet with matched time-weighted/flow-weighted chemistry and water flow; external transfer outlets excluded; preserve valence stability | kg; m3 | Each batch/stage; representative outlet monitoring including events | Same representative reporting period across all rows | Declared line, grade and treatment outlets | per 1 kg reference flow | Calibration; sampling coverage; assay method/LOQ; supplier records; missing data and uncertainty disclosure |

Packaging is reconciled by material and physical item/lot: K0 + B + E + T = O + W + K1, where B is every real purchase, E first non-purchase external receipts (including accompanying, borrowed or free items), T proved same-item returns from this site’s own earlier outward event, O outward reusable/product transfers, W complete waste transfers, and K0/K1 stocks. Internal movements are links, not external receipts. Purchase or ownership alone does not determine burden inclusion. For E and B inspect supplier inclusion to avoid charging an embedded packaging burden twice; missing burden evidence is not zero. For T preserve original service/transfer history and inherited burden once, with new handling/cleaning separately. First receipt is E even if an upstream provider already includes its burden; it never becomes T on that ground. Record other actual packaging materials as additional atomic cards. Use measured service attribution to the delivered product cohort and the P gate, with residual service/stock burden carried forward; never equate current purchases or outward mass automatically with consumed packaging burden.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_exchange | all inventory rows | P is unique positive actual accepted net factory-gate delivery kg of the same supplied powder, not newly released R. Retain the complete matched site/grade/route/state period, including failed/zero-output, startup/shutdown, idle, cleaning, rejects, rework and treatment. Keep physical production/WIP separate from FG: F0 + R + U = D_gross + F1 + M, with actual received returns U, pre-return-netting outward product D_gross excluding tare and independently recorded losses/rework removals M. Derive net accepted P from unique deliveries and original return corrections; never add U and subtract an already return-netted P in that physical balance. Each undivided burden numerator A_i keeps its exchange unit: the once-reconciled current-activity contribution plus separately evidenced opening WIP/FG carry and traced net return carry after original reversal, minus evidenced closing WIP/FG carry and justified other-cofunction assignments. Burden vectors are not physical kg subtracted from energy. Retain full unallocated physical outputs; burden allocation never scales their masses. normalize_exchange alone reports A_i / P after conversion and carry attribution; physical outlet rows retain their full matched physical numerator / P. The reference is1kg; card/protocol/other per-kg result labels mean this same reporting operation, never further division. For P<=0 or unresolved cohort/carry attribution preserve all raw burdens/stocks and report no unit result; do not discard failed campaigns or borrow another cohort denominator. For each material/feed row affected by raw stocks, record whether current activity is gross external receipts at the chosen raw-material gate or an already stock-reconciled issued/charged/consumed quantity under its linked protocol. Reconcile receipts, external returns and opening/closing raw stock exactly once. If current activity is already that reconciled issue/consumption, do not again add opening raw-stock carry or subtract closing raw-stock carry; attach the original source/lot burden represented by that issue once rather than creating another purchase. If a row instead starts from gross receipts, use its raw-stock reconciliation once to derive the issued contribution, and do not also treat the resulting issues as another addition. Apply the separately evidenced WIP/FG cohort bridge at the unchanged declared product gate only after this raw-material step. Complete carried vectors contain each original exchange in its own unit and lot/stage provenance, not physical stock kg or an impact score. Physical return receipt U and its inherited stock vector are distinct from the signed correction of the original delivery and original burden vector: identify both events and apply each once; do not reverse again if already included in the reported net correction. Unresolved activity basis, stock/transfer linkage or original return vector makes the normalized result incomplete; retain raw records without a finite unit result. Other metered inputs and physical outputs retain their own verified raw measurement basis; do not invent raw-stock adjustments for them. | P; cp_product; applicable row protocol | Exchange per 1 kg reference flow | `eu-sic-2007`; `jrc-ilcd-lci-2010` |
| chemistry_ledger | chemical feeds and product | Use measured supplied mass and component mass fractions to reconcile Cr, sulfur, sodium and water; correct hydrated salt, Cr2O3 assay equivalent and carrier water on explicitly declared molecular bases. The ideal reaction is a reconciliation aid, never a recipe/yield/emission default. | cp_material; cp_product; cp_waste; cp_air; cp_effluent | Unallocated species and water ledger | atsdr-chromium-2012; cn1099727a-route |
| emission_load | air and freshwater emission rows | Integrate matched concentration times corrected gas/liquid flow over measured time; convert stated compound or elemental bases and units before division by P. Non-detects retain interval and LOQ; not zero. | cp_air; cp_effluent; cp_product | Species load per 1 kg reference flow | eu-cww-2016 |
| water_component | water_discharge | Determine H2O mass from gross effluent mass less measured dissolved and suspended non-water components; retain the component in kg; volume conversion is auxiliary or requires an explicitly compatible provider convention. Retain gross solution volume as auxiliary monitoring data, not a second water exchange. | cp_effluent | Water component per 1 kg reference flow | eu-cww-2016 |
| electricity_units | electricity | Convert metered kWh to MJ using 3.6 MJ/kWh only if the verified provider reference requires MJ; otherwise retain kWh. Confirm the native property and provider quantity independently; no fuel heating-value assumption follows. | cp_utility | kWh, or compatible converted MJ, per 1 kg reference flow | eu-sic-2007 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all flows | Confirm physical name, CAS, route, state, compartment, reference property/unit and provider quantity independently; wrong route/species cannot be cured with qualifiers. | Native identity chain and primary supplier records |
| quality_period | whole unit | Same-period reporting includes representative campaigns, cleaning, start/stop, bypass and rejects; identify missing outlets before complete data. | cp_product; cp_air; cp_effluent |
| quality_numerics | all amounts | No imported default yield, purity, recipe, energy, abatement efficiency or range from historical/single-producer cases. Derive actual values from protocols and retain uncertainty. | atsdr-chromium-2012; cn1099727a-route; chrompik-bcs-tds |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | bcs_manufacture | Require exactly one final product output linked by reference_product and a verified compatible product/property/unit-group identity chain; unresolved identity remains incomplete and cannot imply coverage. | chrompik-bcs-tds |
| validate_balance | bcs_manufacture | Reconcile physical product, retained salts/water, inventory change, internal recycling, external wastes and species losses before assigning burdens. Do not sum PM2.5, PM10 and total dust as disjoint fractions, or chemical constituent and carrier mass as separate physical losses. | eu-cww-2016 |
| validate_transfer | bcs_manufacture | Check every outlet destination: direct air/freshwater emissions are elementary; external-treatment liquid/sludge transfers are waste. Preserve residual Cr(VI), LOQ and actual receiving water; no generic correction flow or unrelated wastewater substitute. | eu-sic-2007; eu-cww-2016 |
| validate_dataset | bcs_manufacture | Require matched bilingual amounts/denominators, finite unit conversion, actual route, supplier quantity compatibility and complete atomic inventory including conditional extensions before dataset completeness. Authored or validated data never substitutes for independent methodology review. | eu-sic-2007 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Prospective foreground manufacturing gate profile; candidate requires independent review and dataset-specific completion |
| downstream_use | Upstream input to actual chrome tanning only after identity and data completion |
| allowed_use | The defined purchased-SO2 reduction and powder delivery route, grade and period |
| excluded_use | Liquid product; pure compound mass; tannin/syntan/enzyme; tannery recovery; organic reduction; on-site sulfur burner; compliance approval |
| required_metadata | Reference qualifiers; physical route; chemical composition; primary metering; upstream providers; allocation driver; treatment destinations |
| required_quality_disclosure | Unresolved flow identities; data/sampling coverage; component balance; provider compatibility; uncertainty; non-detect limits; added atomic rows |
| update_trigger | Change of supplier grade, CAS/mixture, state, reductant, heat route, abatement, coproduct separation or classification decision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD CPC 3.0 Structure and complete Explanatory Notes, 30 June 2025, printed pp162–163 (PDF pp162–163), 34320/34330/34340. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Mixed classification scope only; no manufacture recipe or independent PCR identity |
| atsdr-chromium-2012 | official_guidance | ATSDR, Toxicological Profile for Chromium (September 2012), Chapter 5 §5.1, printed 351/PDF 1 of chapter. https://www.atsdr.cdc.gov/toxprofiles/tp7-c5.pdf | Commercial dichromate/SO2 reduction route existence; historical evidence, not current quantities |
| cn1099727a-route | literature | CN1099727A, 碱式硫酸铬的制造方法 (1995-03-08), original Chinese description pp1–7/PDF4–10 and Figure1/PDF11. https://patents.google.com/patent/CN1099727A | Reduction/adjustment/spray drying, dust/liquor recovery topology and conditional basicity reagents; no example quantities, temperatures, savings or zero-pollution claims adopted |
| eu-sic-2007 | official_guidance | European Commission, SIC BREF (August 2007), Figure2.2 printed20/PDF50,§§3.7.2–3.7.3 printed42/PDF72. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/sic_bref_0907.pdf | Generic chemical plant boundary, measurement and waste-destination principles; no nickel/pigment recipe or factor |
| eu-cww-2016 | official_guidance | European Commission, CWW BREF (2016), BAT2–4, printed543–544/PDF573–574. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/CWW_Bref_2016_published.pdf | Waste gas/water stream inventory, actual pollutant loads and sampling basis; not generic discharge amount or blanket legal applicability |
| chrompik-bcs-tds | literature | Chrompik, Basic Chrome Sulphate Technical Data Sheet, p1, undated producer document, accessed 2026-11-21. https://chrompik.com/upload/TDS_BCS.pdf | Actual dry powder tanning product, CAS12336-95-7 and paper/PE packaging; grade examples are not defaults and this TDS does not establish its plant route |
| ilcd-lca-2010 | official_guidance | European Commission JRC, ILCD Handbook — General guide for Life Cycle Assessment — Detailed guidance, first edition March 2010, §§7.9.2–7.9.3, printed256–257/PDF276–277. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional subdivision and physically justified allocation, subject to declared modelling situation; no default percentage or coproduct credit |
| epa-crvi-7199 | official_guidance | EPA Method 7199, Revision 0, December 1996, §§1–3,6,8–9. https://www.epa.gov/sites/default/files/2015-12/documents/7199.pdf | Dissolved aqueous Cr(VI) analysis, filtration/preservation and matrix interference; not total Cr or powder/exhaust method approval |
| epa-elements-6010d | official_guidance | EPA Method 6010D, Revision 5, July 2018, §§1,3,9,11. https://www.epa.gov/sites/default/files/2015-12/documents/6010d.pdf | Elemental analysis and appropriate preparation/QC; no chromium valence assignment |
| epa-stack-crvi-0061 | official_guidance | EPA Method 0061, Revision 0, December 1996, §§1–3,6–8. https://www.epa.gov/sites/default/files/2015-12/documents/0061.pdf | Cr(VI) sampling/analysis and valence interference in stated combustion matrices; applicability to tanning-powder dryer unverified |
| jrc-ilcd-lci-2010 | official_guidance | European Commission JRC, ILCD Handbook: General guide for Life Cycle Assessment—Detailed guidance, first edition March2010, sections7.4.2.6–7 and7.4.2.9, printed pp.200–204 / PDF pp.220–224. https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Complete operational/service cycle and matching-period reference scaling only. Historical stock/cohort burden vectors, once-only raw-stock reconciliation and nonpositive-output hold are this PCR consistency implementation, not a literal handbook ledger or formula. No site quantity, recipe, emission factor, gate choice or default allocation. |
| bis-bcs-1971 | official_guidance | Indian Standards Institution, IS 6301:1971, Appendix A-4, printed pp8–10/PDF pp12–14. https://law.resource.org/pub/in/bis/S02/is.6301.1971.pdf | Historical basic chromium sulfate analytical basicity procedure only; no current compliance or grade default |
| customs-bcs-1996 | literature | Kumazawa and Ina, Analysis of chrome tanning substances, Central Customs Laboratory Report 35 (1996), §2.5, printed p12/PDF p2. https://www.customs.go.jp/ccl_search/e_info_search/organics/r_35_03_e.pdf | Independent observed use of chromium/neutralisation titrations; no synthesis recipe or classification threshold |
