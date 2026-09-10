---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.refined-copper-and-copper-alloys-unwrought-master-alloys-of-copper
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Refined copper and copper alloys, unwrought; master alloys of copper

## 1. Scope and Applicability

This PCR applies to foreground data packages for refined copper, unwrought copper alloys, and copper master alloys leaving the producing facility in cathode, ingot, billet, cake, shot, or another declared unwrought form. It covers primary pyrometallurgical and hydrometallurgical routes, secondary copper refining, remelting and alloying, master-alloy production, product-form preparation, on-site emission control, and residue handling when those operations occur within the declared producer-gate boundary.

The PCR does not cover copper matte or cement copper, unrefined copper or anodes intended for electrolytic refining, copper ores and concentrates as final reference products, copper waste and scrap as final reference products, copper powders, or semi-finished and fabricated products such as rod, wire, sheet, strip, foil, tubes, fittings, cast components, or finished articles. A data package shall select one product grade, route, geography, technology period, and producer-gate form; it shall not use a generic average to conceal materially different pure-copper, alloy, master-alloy, primary, or secondary routes.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.refined-copper-and-copper-alloys-unwrought-master-alloys-of-copper |
| classification_refs | CPC 3.0: 41413, Refined copper and copper alloys, unwrought; master alloys of copper |
| covered_products | Refined copper, including cathode and other declared unwrought forms; unwrought copper alloys, including brass and bronze compositions; copper master alloys used to introduce alloying elements, including declared Cu-P, Cu-Ni, Cu-Zn-Pb, Cu-Be, or other compositions |
| excluded_products | Copper matte; cement copper; unrefined copper; copper anodes for electrolytic refining; ores and concentrates as final products; copper waste and scrap as final products; powders and flakes; semi-finished or fabricated copper products and finished articles |
| representative_product | Producer-gate refined copper or copper-alloy product in a declared unwrought form and grade |
| production_route | Route-specific: primary pyrometallurgical refining, primary hydrometallurgical recovery, secondary copper refining, copper-alloy remelting and composition adjustment, or copper master-alloy production |
| market_state | Unwrought refined metal, alloy, or master alloy at the producing facility gate, before downstream semi-fabrication or article manufacture |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Refined copper, unwrought copper alloy, or copper master alloy of the declared grade and producer-gate form |
| How much | 1,000 kg net product mass; packaging is recorded separately and is not included in the 1,000 kg |
| How well | Conforms to the declared chemical composition, purity or alloy designation, physical form, acceptance specification, and moisture or surface-condition requirement |
| How long or cycle | One representative production period, normalized to producer-gate output; the data package shall state the period and production-weighting method |
| reference_flow_link | The reference flow is the net conforming product leaving `product_forming_dispatch`; internal return material and packaging are not part of the reference amount |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Copper and copper alloys `39b46f9b-dec5-4c9a-9b23-9f38911fe7f7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product family: refined copper, copper alloy, or copper master alloy; chemical composition or grade; copper content or purity; unwrought form; primary, secondary, or mixed route; feed-origin and recycled-content basis; producer-gate location; technology route; production period; packaging inclusion statement |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Conforming reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net product mass on calibrated scales and normalize all foreground amounts to 1,000 kg. Exclude packaging, pallets, internal return material, off-specification product, adhering process liquid, and unremoved dross from the reference mass. |
| `dry_or_as_received_basis` | Ores, concentrates, secondary feeds, fluxes, and residues | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether each quantity is dry or as received. Record moisture measurements and convert to dry mass only where the chosen basis requires it; do not mix dry and wet bases in one balance. |
| `metal_content_basis` | Copper-bearing and alloying inputs, products, co-products, dusts, sludges, and slags | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg element and kg material | Record material mass and assayed copper or alloying-element fraction separately. Elemental mass shall be calculated from matched lot or period records and shall not replace total material mass. |
| `energy_carrier_preservation` | Electricity, fuels, steam, and recovered energy | Carrier-specific energy property | kWh or MJ | Preserve the metered carrier and unit. Convert only with a declared factor and heating-value basis; do not combine electricity, fuel mass, steam, and recovered heat into an undocumented energy total. |
| `water_balance_basis` | Withdrawn, recirculated, consumed, discharged, and transferred water | Volume or mass | m3 or kg | Keep withdrawal, recirculation, consumption, discharge, and water contained in products or residues as separate fields. State density when converting between volume and mass. |

## 5. System Boundary

The foreground boundary begins at the declared starting condition for the selected route and ends with conforming unwrought product and separately recorded packaging at the producer gate. It includes route-relevant feed preparation, smelting or leaching and solvent extraction/electrowinning, converting, fire refining, electrorefining, remelting, alloying, master-alloy addition, casting or cathode finishing, internal material returns, on-site utilities where measured, air- and water-pollution control, recovery of saleable co-products, and management of process residues and wastes up to transfer or final on-site treatment. Upstream extraction, concentration, secondary-material preparation, electricity and fuel production, purchased reagent production, transport, and external waste treatment require compatible upstream datasets when they fall outside the declared foreground.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Route-specific receipt or extraction point: ore for an integrated hydrometallurgical route; concentrate or copper-bearing intermediate for a pyrometallurgical route; prepared secondary copper-bearing material for a secondary route; or refined copper, segregated copper scrap, and alloying additions for an alloy or master-alloy route |
| starting_condition_role | First mass-accounted feed condition crossing the foreground boundary, with ownership, waste/product status, composition, moisture basis, origin, and preparation state declared |
| product_classification_scope | Refined copper, unwrought copper alloys, and copper master alloys only; intermediate matte, anode copper, residues, recovered metals, and downstream semi-fabricated forms retain their own flow identities |
| recursive_input_rule | A refined copper, unwrought copper-alloy, or copper master-alloy input used for remelting or composition adjustment is recorded as a distinct upstream product input with its own dataset and is not recursively expanded inside this foreground package |
| upstream_dataset_requirement | Use geographically, technologically, and temporally representative datasets for every material, energy carrier, transport service, and external treatment outside the foreground; disclose proxy use and coverage gaps |
| disclosure | Declare route, facilities and unit processes included, integrated versus purchased feed stages, primary/secondary feed shares and basis, scrap waste/product status, recycled-content method, co-product treatment, cut-offs, internal loops, abatement, residue destinations, geography, technology, and reference period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_declaration` | selected foreground route | Include every on-site unit operation between the declared starting condition and producer-gate product, and identify any integrated mining, concentration, secondary-feed preparation, acid production, utilities, recovery, or residue-treatment operation separately. | `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018` |
| `boundary_relevant_flows` | foreground inventory completeness | Account for all environmentally relevant product, waste, and elementary flows, including energy, water, process chemicals, direct air and water releases, slags, dusts, sludges, spent electrolyte, anode slime, dross, recovered metals, sulphuric acid, and other route-specific co-products. | `epd-pcr-2023-01-v2-0-1`; `eu-jrc-nfm-bref-2017` |
| `boundary_no_silent_recursion` | same-category product inputs | Stop recursion at a separately identified same-category input and link an upstream dataset; do not count its production both upstream and again within the consuming foreground process. | `epd-pcr-2023-01-v2-0-1` |
| `boundary_packaging_separation` | packaging | Include packaging production and treatment when within the study boundary, but report packaging mass separately from the 1,000 kg metal reference amount. | `epd-pcr-2023-01-v2-0-1` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feed_preparation` | Feed receipt, characterization, sorting, drying, crushing, blending, or pretreatment | required | Always include the route-specific operations that establish accepted feed and its mass/composition basis; zero-operation receipt still requires feed characterization records | Foreground feed definition and preparation | Mass and assayed composition of accepted feed transferred to the next production stage |
| `copper_recovery_refining` | Primary or secondary copper recovery and refining | conditional | Include when refined copper is produced from ore, concentrate, unrefined copper, anodes, or secondary copper-bearing material | Foreground recovery, smelting, leaching, converting, fire refining, electrorefining, or electrowinning | Mass of refined copper transferred to product finishing or alloy production |
| `alloy_master_alloy_melting` | Copper-alloy or copper master-alloy melting and composition adjustment | conditional | Include when the reference product is a copper alloy or master alloy, or when composition adjustment is a material step | Foreground melting, alloying, holding, sampling, and composition correction | Mass of conforming molten alloy transferred to casting |
| `product_forming_dispatch` | Cathode finishing, unwrought casting, inspection, packaging, and dispatch | required | Always include route-relevant product-form preparation and producer-gate acceptance | Foreground reference-product formation and dispatch | 1,000 kg net conforming reference product |
| `emission_residue_control` | On-site emission control, water treatment, and residue management | required | Include all controls and residue transfers serving included foreground operations; declare true zero flows with evidence | Foreground abatement, recovery, and final transfer accounting | Controlled stream mass and measured residual release or transfer |

### Process: Feed receipt and preparation (`feed_preparation`)

#### Inputs

##### Product flows

###### Route-specific copper-bearing feed and alloying additions (`metal_bearing_feed`)

Record each accepted feed lot or period stream separately as ore, concentrate, unrefined copper or anode, prepared secondary material, refined copper, segregated copper or alloy scrap, master alloy, or elemental alloying addition. Preserve product/waste status and composition rather than merging unlike feeds.

- Selected flow: Route-specific copper-bearing feed or alloying material
- Flow property / unit: Mass / kg material and kg declared element
- Amount rule: measured accepted mass and matched assay for each feed class
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Feed-preparation electricity, fuels, and heat (`feed_preparation_energy`)

Record metered electricity and each fuel or purchased heat carrier used for unloading, sorting, size reduction, drying, de-oiling, decoating, blending, or other declared preparation.

- Selected flow: Route-specific electricity, fuel, steam, or heat carrier
- Flow property / unit: Energy or mass / kWh, MJ, or kg as metered
- Amount rule: measured carrier use allocated to accepted prepared feed by documented meter or operating-hour records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Feed-preparation water and process aids (`feed_preparation_auxiliaries`)

Record water, fluxes, reductants, de-oiling media, and other aids only when consumed in a declared preparation operation; keep distinct chemical identities.

- Selected flow: Route-specific water and preparation aids
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured deliveries, tank changes, or meter readings minus documented returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_material_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared and characterized feed (`prepared_feed`)

Record the mass, moisture basis, copper and alloying-element composition, and destination of feed transferred to recovery, refining, or alloying.

- Selected flow: Prepared route-specific feed
- Flow property / unit: Mass / kg material and kg declared element
- Amount rule: transfer mass calculated from accepted feed, recorded removals, moisture change, and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per process output and reconciled to 1,000 kg reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

###### Removed non-feed material and preparation residues (`feed_preparation_rejects`)

Record sorted rejects, removed coatings, oils, dust, fines, moisture-bearing sludge, and other preparation residues by destination and waste/product status.

- Selected flow: Route-specific preparation reject or residue
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by residue class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_transfer_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct releases from feed preparation (`feed_preparation_direct_releases`)

Record measured dust, metals, combustion emissions, volatile organic compounds, and water releases from included preparation operations after control.

- Selected flow: Individually identified elementary release to air or water
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by matched flow and operating time, or direct mass measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_monitoring`
- Sources: `eu-jrc-nfm-bref-2017`

### Process: Copper recovery and refining (`copper_recovery_refining`)

#### Inputs

##### Product flows

###### Prepared copper-bearing feed (`recovery_prepared_feed`)

Record the prepared feed crossing into the declared pyrometallurgical, hydrometallurgical, or secondary refining route and reconcile it to `prepared_feed`.

- Selected flow: Prepared copper-bearing feed
- Flow property / unit: Mass / kg material and kg copper
- Amount rule: measured process feed with matched composition and inventory change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg refined copper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance_records`
- Sources: `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

###### Recovery and refining energy carriers (`recovery_refining_energy`)

Record electricity, fuels, oxygen, steam, and recovered energy separately for drying, smelting, converting, fire refining, electrorefining, leaching, solvent extraction, or electrowinning operations included in the route.

- Selected flow: Route-specific electricity, fuel, oxygen, steam, or recovered energy
- Flow property / unit: Energy, mass, or volume / kWh, MJ, kg, or Nm3
- Amount rule: measured use by carrier and included unit operation, net of separately metered exported energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg refined copper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

###### Recovery and refining water, fluxes, and reagents (`recovery_refining_auxiliaries`)

Record water and route-specific fluxes, reductants, sulphuric acid, extraction reagents, electrolyte additions, and other process chemicals by identity.

- Selected flow: Route-specific water, flux, reductant, or process reagent
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured consumption from meters, stock reconciliation, or issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg refined copper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_auxiliary_material_records`
- Sources: `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined copper transferred to finishing or alloying (`refined_copper_output`)

Record conforming refined copper mass and assay at the transfer point, including cathode, electrowon copper, or other accepted refined form; do not include anode copper or internal return material.

- Selected flow: Refined copper `176d7abf-4f6c-4584-a720-f9a518ce7d2d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conforming transfer mass and matched purity result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per recovery and refining process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_acceptance_records`
- Sources: `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

###### Recovered co-products and exported energy (`recovery_coproducts`)

Record each saleable or transferred co-product separately, such as sulphuric acid, iron silicate, precious-metal-bearing anode slime, nickel or copper sulphate, recovered lead/tin material, zinc-rich dust, or exported steam.

- Selected flow: Individually identified recovered co-product or exported energy carrier
- Flow property / unit: Mass or energy / kg, kWh, or MJ
- Amount rule: measured dispatch or transfer amount adjusted for inventory change and specification acceptance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg refined copper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_dispatch_records`
- Sources: `ica-copper-environmental-profile-2018`; `eu-jrc-nfm-bref-2017`

##### Waste flows

###### Recovery and refining residues and wastes (`recovery_refining_residues`)

Record slags, dusts, spent electrolyte, bleed treatment residues, sludges, hazardous waste, and unrecovered materials by composition, treatment status, and destination; separate internal returns from external waste transfers.

- Selected flow: Individually identified recovery or refining residue
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by residue class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg refined copper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_transfer_records`
- Sources: `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

##### Elementary flows

###### Direct releases from recovery and refining (`recovery_refining_direct_releases`)

Record individually measured releases to air and water after control, including route-relevant dust, metals, sulphur dioxide, nitrogen oxides, carbon monoxide, greenhouse gases, acid mist, chemical oxygen demand, and dissolved metals.

- Selected flow: Individually identified elementary release to air or water
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by matched flow and operating time, or direct mass measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg refined copper output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_monitoring`
- Sources: `eu-jrc-nfm-bref-2017`

### Process: Copper-alloy and master-alloy melting (`alloy_master_alloy_melting`)

#### Inputs

##### Product flows

###### Copper base, segregated scrap, and alloying additions (`alloy_charge_materials`)

Record refined copper, clean segregated internal or external scrap, master alloys, and elemental alloying additions separately by grade, mass, assay, and waste/product status.

- Selected flow: Refined copper, segregated copper-alloy scrap, master alloy, or alloying addition
- Flow property / unit: Mass / kg material and kg declared element
- Amount rule: measured furnace charge mass with matched composition certificate or assay
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming alloy or master-alloy melt
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_input_records`
- Sources: `eu-jrc-nfm-bref-2017`

###### Alloy-melting energy and process aids (`alloy_melting_energy_aids`)

Record electricity or fuel, fluxes, cover materials, deoxidants, sampling consumables, and mould or launder treatments by carrier or material identity.

- Selected flow: Route-specific energy carrier or alloy-melting process aid
- Flow property / unit: Energy or mass / kWh, MJ, or kg
- Amount rule: measured carrier use and material issue records for the declared melt campaign
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming alloy or master-alloy melt
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_aid_campaign_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming molten alloy or master alloy (`conforming_alloy_melt`)

Record the accepted melt mass and final composition after sampling and adjustment, before transfer to casting.

- Selected flow: Declared copper alloy or copper master alloy
- Flow property / unit: Mass / kg material and kg declared element
- Amount rule: measured transferred melt mass and matched final composition result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per alloying process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_acceptance_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

###### Alloying dross, slag, dust, and off-specification material (`alloying_residues`)

Record dross, slag, captured dust, spills, and off-specification metal separately; identify internal remelt, external recovery, or waste treatment destination.

- Selected flow: Individually identified alloying residue or off-specification metal
- Flow property / unit: Mass / kg
- Amount rule: measured recovery or transfer mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming alloy or master-alloy melt
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_transfer_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct releases from melting and alloying (`alloying_direct_releases`)

Record measured dust, metals, zinc oxide, phosphorus compounds, beryllium where relevant, combustion emissions, and other route-specific releases after control.

- Selected flow: Individually identified elementary release to air or water
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by matched flow and operating time, or direct mass measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming alloy or master-alloy melt
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_monitoring`
- Sources: `eu-jrc-nfm-bref-2017`

### Process: Product forming and dispatch (`product_forming_dispatch`)

#### Inputs

##### Product flows

###### Accepted refined copper or conforming alloy melt (`forming_metal_input`)

Record the accepted metal entering cathode stripping and finishing, ingot or billet casting, shot formation, or another declared unwrought-form operation.

- Selected flow: Accepted refined copper or conforming copper-alloy melt
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled with upstream process output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance_records`
- Sources: `epd-pcr-2023-01-v2-0-1`; `eu-jrc-nfm-bref-2017`

###### Forming energy, water, mould treatments, and packaging (`forming_dispatch_inputs`)

Record electricity, fuel, cooling and washing water, release agents, strapping, pallets, wraps, and other packaging separately; packaging does not enter reference product mass.

- Selected flow: Route-specific energy, water, forming aid, or packaging material
- Flow property / unit: Energy, mass, or volume / kWh, MJ, kg, or m3
- Amount rule: measured use or stock reconciliation for accepted output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_forming_packaging_records`
- Sources: `epd-pcr-2023-01-v2-0-1`; `eu-jrc-nfm-bref-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net conforming producer-gate product (`reference_product_output`)

Record exactly 1,000 kg net conforming refined copper, unwrought copper alloy, or copper master alloy with the required qualifiers and product acceptance evidence.

- Selected flow: Copper and copper alloys `39b46f9b-dec5-4c9a-9b23-9f38911fe7f7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1,000 kg net conforming product at the producer gate
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: External source (`external_source`)
- Sources: `epd-pcr-2023-01-v2-0-1`; `ica-copper-environmental-profile-2018`
- Range: Reference-flow identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: net conforming producer-gate product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `epd-pcr-2023-01-v2-0-1`; `ica-copper-environmental-profile-2018`

###### Internal return metal (`internal_return_metal`)

Record cropped cathode, sprues, spills, off-specification metal, and other internal returns separately and link them to the receiving unit; they are neither reference product nor external recycled-content input.

- Selected flow: Internally returned copper or copper-alloy material
- Flow property / unit: Mass / kg
- Amount rule: measured internal transfer mass by source, destination, and composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_return_records`
- Sources: `epd-pcr-2023-01-v2-0-1`

##### Waste flows

###### Forming and packaging wastes (`forming_packaging_waste`)

Record non-returned metal losses, spent mould treatments, damaged packaging, and other waste by material and destination.

- Selected flow: Individually identified forming or packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by waste class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_transfer_records`
- Sources: `epd-pcr-2023-01-v2-0-1`

##### Elementary flows

###### Direct releases from forming and dispatch (`forming_direct_releases`)

Record measured combustion, casting, cooling, washing, and packaging-operation releases after control.

- Selected flow: Individually identified elementary release to air or water
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by matched flow and operating time, or direct mass measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_monitoring`
- Sources: `eu-jrc-nfm-bref-2017`

### Process: Emission and residue control (`emission_residue_control`)

#### Inputs

##### Product flows

###### Abatement energy and treatment reagents (`abatement_inputs`)

Record electricity, fuel, water, lime, flocculants, sorbents, filter media, and other treatment inputs by the control system served.

- Selected flow: Route-specific energy carrier or treatment reagent
- Flow property / unit: Energy, mass, or volume / kWh, MJ, kg, or m3
- Amount rule: measured use or stock reconciliation assigned to included foreground operations
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_abatement_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Waste flows

###### Off-gas dust, wastewater, bleed, slag, and residue streams received for control (`streams_to_control`)

Record each controlled stream at its origin and receiving control system without duplicating the same mass as a final release.

- Selected flow: Individually identified off-gas, wastewater, bleed, slag, dust, or residue stream
- Flow property / unit: Mass or volume / kg, Nm3, or m3
- Amount rule: measured transfer or matched flow record to the control system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_abatement_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered materials and reusable treatment outputs (`recovered_treatment_outputs`)

Record recovered copper-bearing dust, zinc oxide, acid, metals, water, or heat as internal return or external co-product according to its actual destination and acceptance status.

- Selected flow: Individually identified recovered material, water, or energy carrier
- Flow property / unit: Mass, volume, or energy / kg, m3, kWh, or MJ
- Amount rule: measured recovered amount by destination and acceptance status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_dispatch_records`
- Sources: `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018`

##### Waste flows

###### Final treatment residues and externally transferred wastes (`final_treatment_residues`)

Record filter dust, gypsum, water-treatment sludge, spent media, hazardous residues, and other final transfers by composition, classification, and destination.

- Selected flow: Individually identified final treatment residue or waste
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass by residue class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_transfer_records`
- Sources: `eu-jrc-nfm-bref-2017`

##### Elementary flows

###### Residual controlled releases to air and water (`controlled_elementary_releases`)

Record each measured release after treatment using the final discharge point, matched flow, operating period, and detection-limit treatment.

- Selected flow: Individually identified elementary release to air or water
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by matched discharge flow and operating time, or direct mass measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_release_monitoring`
- Sources: `eu-jrc-nfm-bref-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | shared foreground operations | First avoid allocation by subdividing unit operations or using separately metered material, energy, emission, and production records. Document the subdivision and retained shared services. | `epd-pcr-2023-01-v2-0-1`; `ica-copper-environmental-profile-2018` |
| `allocation_internal_loops` | internal copper, alloy, dust, acid, water, and energy returns | Keep internal returns inside the foreground mass and energy balances. Do not treat an internal loop as a co-product, recycled-content input, avoided burden, or duplicate upstream input. | `epd-pcr-2023-01-v2-0-1` |
| `allocation_coproducts` | saleable metals, acid, slag products, recovered compounds, and exported energy | Identify each co-product and its point of separation. When subdivision is not possible, use a documented physical causal relation; if none can be supported, use economic allocation with a declared representative price period and sensitivity check. Do not apply substitution credit silently. | `ica-copper-environmental-profile-2018`; `epd-pcr-2023-01-v2-0-1` |
| `allocation_scrap_status` | secondary copper-bearing inputs and metal outputs sent for recycling | Declare whether each stream is waste or a product at the foreground boundary and the end-of-waste basis used. Unknown-origin scrapyard material is treated as waste for the EPD-PCR allocation convention; report alternative conventions separately rather than mixing them. | `epd-pcr-2023-01-v2-0-1` |
| `allocation_route_transparency` | primary, secondary, mixed, alloy, and master-alloy datasets | Report primary and secondary feed shares, copper-content basis, internal return share, co-product method, and allocated burdens by route. A mixed dataset shall be production-weighted from separately documented route inventories. | `ica-copper-environmental-profile-2018`; `eu-jrc-nfm-bref-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_input_records` | `feed_preparation`; `alloy_master_alloy_melting` | Copper-bearing feed and alloy additions | Weighbridge, scale, receiving, batch, certificate, and assay records | material_id; supplier_or_source; product_or_waste_status; gross_mass; tare_mass; moisture; copper_fraction; alloying_element_fractions; lot_time; destination | Reconcile accepted net mass to inventory movement and match each lot with representative composition evidence | kg material; kg element; mass fraction | Per lot, aggregated monthly | At least 12 representative consecutive months or the full shorter campaign | Every included facility and route | Sum accepted dry or as-received mass consistently; calculate elemental mass only from matched mass and composition | Scale calibration; assay method; certificate traceability; stock reconciliation |
| `cp_energy_records` | `feed_preparation`; `copper_recovery_refining` | Electricity, fuel, oxygen, steam, and heat | Meter, invoice, tank, and operating-hour records | carrier_id; meter_start; meter_end; purchase; stock_change; export; lower_or_higher_heating_value; unit_operation; period | Prefer submetering; otherwise allocate by documented operating driver and reconcile to site totals | kWh; MJ; kg; Nm3 | Continuous or per delivery, aggregated monthly | Same period as product output | Every included unit operation and shared utility | Net carrier use equals measured input plus stock decrease minus export and documented non-foreground use | Meter calibration; invoice reconciliation; heating-value source; allocation rationale |
| `cp_auxiliary_material_records` | `feed_preparation`; `copper_recovery_refining` | Water, fluxes, reductants, acids, extraction reagents, electrolyte additions, and other aids | Meter, issue, purchase, tank, and stock records | material_id; quantity; concentration; opening_stock; closing_stock; return; unit_operation; period | Reconcile deliveries and stock changes; record solution concentration and recovered returns separately | kg; m3; mass fraction | Per delivery or batch, aggregated monthly | Same period as product output | Every included unit operation | Consumption equals receipts plus opening stock minus closing stock minus documented returns or transfers | Meter calibration; inventory reconciliation; chemical specification |
| `cp_material_balance_records` | `feed_preparation`; `copper_recovery_refining`; `product_forming_dispatch` | Process transfers and metal balance | Transfer scales, inventories, assays, and production logs | stream_id; input_mass; output_mass; inventory_start; inventory_end; moisture; element_fraction; internal_return; period | Reconcile total material and copper or declared alloying elements over matched boundaries and periods | kg material; kg element | Per batch where available, reconciled monthly and annually | Same period as product output | Each included process and facility | Input plus inventory decrease equals output, transfer, release, and residue within documented uncertainty | Balance closure; scale calibration; matched assays; investigation log |
| `cp_product_acceptance_records` | `copper_recovery_refining`; `alloy_master_alloy_melting`; `product_forming_dispatch` | Refined copper, alloy melt, and producer-gate product | Scale, batch, laboratory, and release records | product_id; grade; form; net_mass; copper_fraction; alloying_element_fractions; impurity_results; release_status; timestamp | Match net mass with the released batch or period and the applicable composition or purity specification | kg; mass fraction | Per batch or dispatch | Full reference period | Every included production line and product grade | Sum only released conforming product; track off-specification and internal returns separately | Scale calibration; laboratory QA; product certificate; release authorization |
| `cp_coproduct_dispatch_records` | `copper_recovery_refining`; `emission_residue_control` | Co-products, recovered outputs, and exported energy | Scale, meter, inventory, sales, and transfer records | output_id; mass_or_energy; composition; acceptance_status; destination; revenue_basis_if_used; timestamp | Match physical dispatch or internal transfer to specification and destination | kg; kWh; MJ | Per dispatch, aggregated monthly | Same period as product output | Every included facility | Sum accepted dispatches and adjust for inventory change; keep internal returns separate | Scale or meter calibration; certificate; destination receipt; price-period evidence if allocated economically |
| `cp_residue_transfer_records` | all processes | Rejects, slag, dross, dust, sludge, spent media, wastewater residue, and waste | Scale, manifest, laboratory, and destination records | residue_id; mass; moisture; composition; hazard_status; internal_or_external; destination; treatment; timestamp | Measure transfer mass and retain classification and destination evidence | kg; mass fraction | Per transfer, aggregated monthly | Same period as product output | Every included facility | Sum by residue identity and destination; subtract documented internal returns from external transfers | Scale calibration; waste manifest; assay; treatment receipt |
| `cp_direct_release_monitoring` | all processes | Direct air and water releases | Continuous monitor, stack test, discharge sampling, flow meter, and operating records | release_id; compartment; concentration; flow; duration; detection_limit; oxygen_or_moisture_reference; control_status; period | Match concentration with representative flow and operating time; preserve below-detection treatment and reference conditions | kg; mg/Nm3; mg/L; Nm3; m3 | Continuous where available and at permit or representative test frequency | Same period as product output | Every included discharge point | Calculate mass release per point and pollutant, then sum without duplicating controlled streams and final discharge | Calibration; accredited test; sampling plan; permit report; data-coverage statement |
| `cp_energy_and_aid_campaign_records` | `alloy_master_alloy_melting` | Campaign energy and process aids | Meter, furnace log, batch, issue, and stock records | campaign_id; product_grade; carrier_use; aid_mass; charge_mass; tap_mass; start_time; end_time | Reconcile campaign-specific use to accepted melt and record shared-load allocation | kWh; MJ; kg | Per melt campaign | Representative campaigns covering the reference period | Each alloy or master-alloy furnace and grade family | Production-weight accepted campaigns; disclose excluded or abnormal campaigns | Meter calibration; batch log; stock reconciliation; campaign coverage |
| `cp_forming_packaging_records` | `product_forming_dispatch` | Forming inputs and packaging | Meter, batch, packaging issue, and dispatch records | product_grade; accepted_mass; energy; water; mould_treatment; packaging_material; packaging_mass; pallet_mass; dispatch_id | Match forming and packaging inputs to accepted dispatched output | kWh; MJ; kg; m3 | Per batch or dispatch, aggregated monthly | Same period as product output | Every included forming and dispatch line | Sum by product grade; keep packaging outside net metal reference mass | Dispatch reconciliation; packaging specification; meter calibration |
| `cp_internal_return_records` | `product_forming_dispatch` | Internal metal returns | Transfer scale, batch, source, and destination records | return_id; source_process; destination_process; mass; composition; timestamp | Record one transfer identity at source and destination | kg | Per transfer, aggregated monthly | Same period as product output | Entire included foreground | Count once in each process balance but eliminate as an external foreground input/output at system level | Transfer reconciliation; scale calibration; matched source and destination logs |
| `cp_abatement_records` | `emission_residue_control` | Controlled streams and treatment inputs | Control-system meter, operating, maintenance, reagent, and transfer records | control_id; source_stream; flow; operating_time; reagent; energy; captured_mass; discharge_point; downtime | Match control operation to source operation and final release or residue records | kg; m3; Nm3; kWh; h | Continuous or per batch, aggregated monthly | Same period as served production | Every included control system | Reconcile received stream, captured output, residual release, and inventory change | Monitor calibration; maintenance log; downtime record; reagent reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All foreground rows | normalized amount = period amount / net conforming period output × 1,000 kg | period flow amount; net conforming producer-gate product mass | Flow amount per 1,000 kg reference product | `epd-pcr-2023-01-v2-0-1`; `ica-copper-environmental-profile-2018` |
| `calc_dry_mass` | Moisture-bearing materials | dry mass = as-received mass × (1 - measured moisture mass fraction) | as-received mass; matched moisture fraction | Dry mass and retained as-received mass | `eu-jrc-nfm-bref-2017` |
| `calc_element_mass` | Copper and alloying-element balances | element mass = material mass × matched element mass fraction | material mass; assay or certificate fraction | kg copper or declared alloying element | `eu-jrc-nfm-bref-2017` |
| `calc_material_balance` | Each process and total foreground | closure difference = inputs + inventory decrease - products - co-products - wastes - elementary releases - inventory increase; report the difference and investigated causes | Matched material transfers, inventories, composition, releases, and residues | Material and element balance closure statement | `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018` |
| `calc_recycled_content` | Secondary or mixed-route products | external recycled content = eligible external secondary-material mass entering the foreground / net reference product mass; report both material-mass and copper-content bases and exclude internal returns | External secondary input mass and copper content; internal return mass; net product mass | Recycled-content fractions with stated basis | `epd-pcr-2023-01-v2-0-1` |
| `calc_direct_release` | Air and water releases | mass release = matched concentration × discharge flow × operating duration, with unit and reference-condition conversion documented | Concentration; flow; time; detection-limit rule; reference conditions | kg release per pollutant and discharge point | `eu-jrc-nfm-bref-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and all route outputs | Product family, grade, composition or purity, unwrought form, route, location, period, and acceptance specification shall be traceable to released product records. | Product certificates, laboratory results, batch release, and dispatch records |
| `dq_temporal_representativeness` | Foreground inventory | Use at least 12 consecutive representative months unless a shorter campaign is the full production cycle; disclose shutdowns, abnormal campaigns, missing periods, and production weighting. | Production calendar, meter coverage, campaign list, and completeness calculation |
| `dq_route_separation` | Primary, secondary, alloy, and master-alloy routes | Separate materially different routes, furnaces, feed classes, and product grades where metering or records permit; justify every aggregation. | Process map, meter map, batch records, and aggregation rationale |
| `dq_measurement_control` | Mass, composition, energy, water, and emissions | Use calibrated instruments and documented laboratory or monitoring methods; state detection-limit and missing-data treatment. | Calibration certificates, QA/QC records, accredited test reports, and substitution log |
| `dq_balance_completeness` | Material, copper, alloying-element, water, and energy balances | Reconcile included flows over matched periods and investigate material gaps; do not force closure by hiding discrepancies in an unspecified loss flow. | Balance workbook, inventory reconciliation, investigation record, and signed review |
| `dq_upstream_compatibility` | Upstream and external treatment datasets | Assess geography, technology, time, product identity, recycled-content convention, and boundary compatibility; disclose proxies and excluded stages. | Dataset metadata, source review, proxy register, and coverage statement |
| `dq_allocation_transparency` | Shared operations and co-products | Retain subdivision, causal, physical, economic, and sensitivity evidence sufficient to reproduce allocated amounts. | Metering map, allocation workbook, price-period evidence, and sensitivity results |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail if the product is not a refined copper, unwrought copper alloy, or copper master alloy, or if grade/composition, unwrought form, route, producer gate, and reference period are missing. | `unsd-cpc-3-0`; `epd-pcr-2023-01-v2-0-1` |
| `validate_reference_mass` | Reference amount | Fail unless the net conforming reference product is exactly 1,000 kg on the Mass property and packaging and internal returns are excluded from that mass. | `epd-pcr-2023-01-v2-0-1`; `ica-copper-environmental-profile-2018` |
| `validate_route_processes` | Process map | Fail if a route-relevant recovery, refining, alloying, master-alloy, product-forming, abatement, or residue-management operation is omitted without an upstream dataset or explicit exclusion rationale. | `eu-jrc-nfm-bref-2017`; `ica-copper-environmental-profile-2018` |
| `validate_feed_status` | Primary and secondary feed | Fail if feed identity, mass basis, composition, product/waste status, origin, or internal-return treatment is missing or inconsistent across receipt and process transfer records. | `epd-pcr-2023-01-v2-0-1`; `eu-jrc-nfm-bref-2017` |
| `validate_balance` | Material and element balances | Fail if material and copper or declared alloying-element balances are absent, use unmatched periods, or contain an unexplained closure difference hidden as an unspecified loss. | `eu-jrc-nfm-bref-2017` |
| `validate_direct_releases` | Air and water inventory | Fail if controlled streams are counted both before and after treatment, or if a calculated release lacks matched concentration, flow, duration, units, and detection-limit treatment. | `eu-jrc-nfm-bref-2017` |
| `validate_coproduct_allocation` | Co-products and shared operations | Fail if a co-product is omitted, an internal return is credited as a co-product, or an allocation/substitution method lacks a separation point, rationale, representative period, and reproducible calculation. | `ica-copper-environmental-profile-2018`; `epd-pcr-2023-01-v2-0-1` |
| `validate_data_coverage` | Foreground period | Fail if temporal, facility, route, or product-grade coverage is not reported, or if missing data and proxies are not disclosed. | `epd-pcr-2023-01-v2-0-1` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Producer-gate foreground inventory for one declared refined copper, unwrought copper-alloy, or copper master-alloy product and route |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review, quality review, and publication controls |
| allowed_use | Upstream supply modelling for downstream semi-fabrication and product systems when product identity, geography, technology, time, recycled-content convention, allocation, and producer-gate boundary are compatible |
| excluded_use | Direct comparison of unlike grades, pure copper versus alloys or master alloys, primary versus secondary routes, or different recycled-content and co-product conventions without harmonization; use as a semi-finished or finished-product dataset; use as a generic copper proxy when required qualifiers are unknown |
| required_metadata | PCR id and version when published; product family; grade and composition; purity or copper content; unwrought form; primary/secondary/mixed route and feed shares; recycled-content basis; facilities and included unit operations; geography; technology; reference period; net reference mass; packaging; upstream datasets; co-products; allocation and cut-off methods; data coverage |
| required_quality_disclosure | Meter and assay coverage; calibration and laboratory methods; material and element balance closure; temporal and site coverage; route aggregation; direct-emission monitoring coverage; missing-data and detection-limit treatment; proxy datasets; allocation sensitivity; unresolved limitations |
| update_trigger | Change in grade or product form, route or furnace technology, feed origin or primary/secondary share, recycled-content convention, co-product treatment, system boundary, abatement, facility mix, allocation method, upstream electricity or major material dataset, or evidence that materially changes normalized results |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | United Nations Statistics Division. Central Product Classification, Version 3.0, structure and classification resources. https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-09). | Product-category scope and CPC 41413 identity |
| `epd-pcr-2023-01-v2-0-1` | `standard` | EPD International. PCR 2023:01, Fabricated metal products, except construction products, version 2.0.1, publication date 2026-02-25, valid until 2029-07-29. https://www.environdec.com/pcr-library/pcr_164859f7-28a7-42a3-3bec-08d9945ab091 (retrieved 2026-08-09). | CPC 414 applicability, 1 tonne producer-gate declared unit, packaging separation, life-cycle boundary, process-flow disclosure, scrap status, allocation, and data-quality framework |
| `eu-jrc-nfm-bref-2017` | `official_guidance` | European Commission, Joint Research Centre. Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries. EUR 28648 EN, 2017. DOI: 10.2760/8224. https://op.europa.eu/en/publication-detail/-/publication/c0bc6046-651c-11e7-b2f2-01aa75ed71a1 (retrieved 2026-08-09). | Primary and secondary copper routes, electrorefining, hydrometallurgy, copper-alloy ingots, master-alloy production, inputs, residues, emissions, and abatement process decomposition |
| `ica-copper-environmental-profile-2018` | `dataset` | International Copper Association. Copper Environmental Profile: Copper Cathode Life Cycle Assessment, 2018. https://copperalliance.org/wp-content/uploads/2021/08/ICA-EnvironmentalProfileHESD-201803-FINAL-LOWRES-1.pdf (retrieved 2026-08-09). | Copper cathode route coverage, cradle-to-gate boundary, 1,000 kg functional unit, primary and secondary data collection, co-product identities, and co-product treatment alternatives |
