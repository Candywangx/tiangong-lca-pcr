---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.langbeinite-fertilizer-cold-leaching
language: en-US
status: candidate
content_maturity: authored_methodology
sync_with: pcr.zh-CN.md
---

# Natural langbeinite fertilizer by cold leaching

## 1. Scope and Applicability

This attributional cradle-to-gate method covers bulk, uncoated, dried and screened natural langbeinite fertilizer. The mineral phase K2Mg2(SO4)3 is retained while mined ore is crushed, cold-leached with water to remove incidental sodium/potassium chlorides, washed to remove clay, debrined, dried and sized. One actual producer, product grade, ore source and collection period must be declared. The historical EPA description establishes this physical route, not a present target plant, industry yield, water demand or recipe. [epa-mineral-1975]

The product is a naturally combined potassium-magnesium sulfate mineral fertilizer with measured incidental NaCl, insolubles and moisture; it is neither an assumed pure reagent nor a physical blend of separately purchased sulfates. Manufacturer SDS/specification documents establish real commercial identity and measurement dimensions; their composition ranges, nutrient guarantees, moisture, density and size figures are not PCR defaults. Present IMC heavy-media production is a distinct route and does not establish cold-leaching at that site. [imc-kmag-sds-2026; imc-kmag-standard-2026; imc-heavy-media]

Exclude carnallite, raw sylvite/sylvinite fertilizer, polyhalite, kainite, refined KCl, single-species K2SO4, synthetic potassium-magnesium sulfate, nutrient-K/K2O-only flows, NPK blends, liquid fertilizer, compaction/agglomeration with additives, heavy-media/flotation separation and chemical conversion of langbeinite with KCl to K2SO4. EPA Figure 19 depicts that excluded conversion branch; its magnesium-chloride coproduct and waste loads must not be attributed automatically to retained langbeinite. CPC 3.0 34639 is wider; this PCR supports a proposed narrower mapping only. [un-cpc3-2025; epa-mineral-1975]

The utility variant represented here uses purchased treated water, grid electricity delivered at 1–35 kV and fossil pipeline natural gas for direct-contact drying, with dry collection and/or water-only dust capture. Confirm this configuration from site records before applying it. The Canadian potash code supports these dryer/control mechanisms in its own sector; it does not prove the target plant or transfer KCl chemistry. Different fuel, purchased steam/heat, a control reagent, binder/coating or packaging requires applicability review and separately verified atomic exchanges. This version requires contained liquid wastes transferred to a verified external receiver; direct liquid discharge, uncontrolled seepage or onsite evaporation-pond disposal requires an expanded receiving-medium inventory before use. [eccc-potash-2017; jrc-cww-2016]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.langbeinite-fertilizer-cold-leaching |
| classification_refs | CPC 3.0 34639; proposed narrower relation |
| covered_products | Bulk natural langbeinite mineral fertilizer, cold-leached/washed, dried and screened; declared grade and incidental impurities |
| excluded_products | Other minerals, synthesized/blended fertilizers, states and routes listed in Section 1 |
| representative_product | Natural langbeinite fertilizer retaining K2Mg2(SO4)3, measured as delivered |
| production_route | Mined ore → crushing → cold impurity leaching/washing → debrining → drying → screening → bulk loadout |
| market_state | Uncoated solid, accepted net bulk product at plant gate; actual moisture/assay/size declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply natural langbeinite fertilizer providing K, Mg and S; no crop-yield equivalence claim |
| How much | 1 kg accepted as-delivered net product |
| How well | Verified natural langbeinite mineral identity, measured nutrient/impurity/moisture assay and actual contractual particle-size grade |
| How long or cycle | One plant-gate delivery; field application and crop cycle excluded |
| reference_flow_link | langbeinite_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Potassium fertiliser `dd008d87-16e4-4e85-a048-b9949f6fbca6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual producer/site/SKU and natural ore origin; verified retained langbeinite mineral phase and CAS 14977-37-8; cold-leach/wash route; measured langbeinite/NaCl/insolubles/water and K/Mg/S assays with wet/dry and nutrient-equivalent bases; particle size and uncoated bulk state; net accepted mass; collection period and stock/recycle reconciliation; dryer/fuel/control configuration; actual utility and waste receiver/provider definitions; allocation/exclusions and upstream evidence |

The selected UUID is the broad formulation-unspecified agricultural potassium fertilizer at plant on physical mass basis. This restricted langbeinite subset has no contrary identity limitation in that record. The data producer must establish the qualifiers independently; the UUID does not establish a langbeinite-specific background inventory, assay or manufacturing route. Never substitute the separately denominated K2O fertilizer flow. Missing qualifiers prevent a concrete data package from being complete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reference is 1 kg accepted as-delivered net product. Q is accepted net product mass over the same accounting period, excluding rejects, internal recycles, packaging and other outputs. All inventory rows use this same denominator. |
| mineral_nutrient_basis | langbeinite_product; ore; leach_brine; clay_tailings; captured_dust | Mass | kg | Keep whole product/ore, dry solids, langbeinite mineral, elemental K/Mg/S, Na/Cl and analytical K2O-equivalent quantities separate. Measure water and assay bases; nutrient equivalents are not emitted K2O or additional physical products. No single-producer percentage is a default. [imc-kmag-sds-2026; imc-kmag-standard-2026] |
| gas_volume | gas | Volume | m3 | Meter actual fossil pipeline gaseous fuel. Record temperature, absolute pressure, wet/dry basis, composition, compressibility and provider m3 definition; reconcile the meter conversion to that provider. Background compatibility remains pending until these agree. Secondary database mass factors are not density. Do not also count internally generated dryer heat as a purchased heat input. |
| electricity_basis | electricity | Net calorific value | MJ | Preserve the verified electrical reference property Net calorific value/MJ. Meter kWh and convert with 3.6 MJ/kWh; retain actual region, year, 1–35 kV consumer supply and loss boundary. This property name does not imply a fuel heating-value measurement. |
| nitrogen_species | no_air; no2_air; n2o_air | Mass | kg | Record actual NO, NO2 and N2O separately. Total NOx or NO2-equivalent reporting alone does not quantify either species; obtain speciation and reconcile monitor/LCI/LCIA definitions before converting. Never assume all NOx is NO2; N2O is excluded from NOx, and total NOx is not added again. [jrc-cww-2016; epa-gas-ap42] |
| particulate_intervals | pm25_air; pm25_10_air; pmover10_air | Mass | kg | Use mutually exclusive particle intervals on the same source/time/method basis. If comparable cumulative measurements exist, PM2.5–10 is PM10 minus PM2.5 and >PM10 is total suspended PM minus PM10. Do not add total PM/PM10 again; retain filterable/condensable definitions and unsupported fractions as pending. Captured dust is a separate waste shipment, not an air release. [eccc-potash-2017] |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Natural mined langbeinite-bearing ore delivered to aboveground cold-leach processing, with actual mineral/impurity/moisture composition and upstream extraction/transport burden |
| starting_condition_role | background_dataset |
| product_classification_scope | CPC 3.0 34639; narrower natural langbeinite fertilizer and cold-leach route only |
| recursive_input_rule | A same-category finished fertilizer input is not untreated mined ore. Purchased refined langbeinite requires a finishing-only boundary with its prior burdens and separate applicability review; do not recurse or silently replace the ore route. |
| upstream_dataset_requirement | Actual ore mining/transport; treated water supply; grid electricity; fossil pipeline gas at compatible volume basis; verified waste receiver transport/treatment including relevant long-term salt releases and closure/aftercare. Missing background coverage is incomplete, not zero. |
| disclosure | Declare outsourced mining and waste services, site boundary, internal recycle/stocks, utilities and control equipment, full accounting period, allocation, capital/maintenance exclusions and their significance, and receiver release scenario/time horizon. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_route | cold_leach | Include ore receipt/crushing, selective impurity washing, debrining, drying, screening, storage/loadout and actual pollution controls. Aggregate these into one foreground unit to preserve one final product exchange; retain separate stage meters and physical handoffs with equal amounts on both ends and reconciled composition/stock changes. No KCl reaction, MgCl2 coproduct or flotation recipe is assumed. | epa-mineral-1975 |
| boundary_streams | cold_leach | Inventory all actual wastewater/waste gas origins, water flow and salt/species loads, residues, fugitive dust, startup/shutdown and control failures. CWW BAT2/3 inventory/monitoring concepts are used as transferable recording methods; chemical-sector legal scope, biological treatment assumptions and BAT emission limits/frequencies are not applied to this mineral route. | jrc-cww-2016; eccc-potash-2017 |
| boundary_receivers | cold_leach | Contain leach/control wastewater for external verified salt-compatible treatment, separately from wet clay tailings and collected dry dust. Receiver acceptance, composition, transport, final fate and long-term salt/water releases are required. An actual direct outfall, seepage or onsite evaporation pond lies outside this inventory variant and requires atomic water/species/medium rows and treatment expansion before use. A legal no-discharge description is not proof of actual zero release. | epa-mineral-1975; jrc-cww-2016 |
| boundary_downstream | cold_leach | Exclude agricultural use, nutrient substitution credit, crop yield, distribution after plant gate and packaging from the bulk reference. Retain burdens through waste management. Other actual consumed materials or releases cannot be omitted as an exclusion; reassess applicability and add atomic exchanges. | un-cpc3-2025 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| cold_leach | Integrated cold-leach natural langbeinite fertilizer production | required | Product/route/utility/contained-waste variant in Sections 1–3 | foreground | langbeinite_product; 1 kg |

### Process: Integrated cold-leach production (`cold_leach`)

Separate receipt, leach/wash, debrining, dryer, screen and control records remain available inside this unit. A card is one physical boundary exchange; mixtures describe a single identified material stream. Only evidence of actual absence justifies not_applicable; an unknown amount or non-detect is not zero. Additional identified gas species or separately collected waste streams require new atomic rows and review. Sources screen relevance, not positive quantities.

#### Inputs

##### Product flows

###### Natural langbeinite-bearing mined ore (`ore`)

Weigh received ore and stock changes; assay retained double-sulfate mineral, NaCl/KCl, clay/gangue and moisture. Upstream mining/haul burden is mandatory. A precise compatible ore UUID remains unresolved.

- Selected flow: Natural langbeinite-bearing mined ore
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `epa-mineral-1975`

Measure physical mass; flow identity UUID unresolved.

###### Externally treated makeup water (`water`)

Meter net external treated water for cold leaching, washing and water-only dust control; reconcile branch meters and internal recycle separately. Record water quality, dissolved salts and supplier treatment; raw resource withdrawal is a different boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `epa-mineral-1975`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Purchased medium-voltage electricity (`electricity`)

Meter the delivered 1–35 kV consumer supply, including crusher, pumps, centrifuge, fans, screens and controls. Reconcile process meters/shared services; measured kWh times 3.6 gives MJ. This UUID is restricted to CN, 1–35 kV, grid-average consumption mix to user; actual year/loss boundaries must also match. Another geography, voltage, supply mix or delivery interface requires a separately verified identity.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eccc-potash-2017`

Property UUID: `93a60a56-a3c8-11da-a746-0800200c9a66`; unit-group UUID: `93a60a57-a3c8-11da-a746-0800200c9a66`.

###### Fossil pipeline gas for direct drying (`gas`)

Collect metered direct-dryer gas only for the declared configuration; retain operating and startup/shutdown records and provider volume-basis reconciliation. No default heating value, evaporation ratio or efficiency. Fossil identity excludes biomethane blends; those require separate biogenic carbon rows and reassessment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `eccc-potash-2017`, `epa-gas-ap42`

Property UUID: `93a60a56-a3c8-22da-a746-0800200c9a66`; unit-group UUID: `93a60a57-a3c8-12da-a746-0800200c9a66`.

#### Outputs

##### Product flows

###### Accepted bulk langbeinite fertilizer (`langbeinite_product`)

One final net as-delivered output retaining natural langbeinite. Broad K-fertilizer identity applies only with verified mineral/route/grade qualifiers; no nutrient-only denominator, synthesized blend or intermediate duplicate output.

- Selected flow: Potassium fertiliser `dd008d87-16e4-4e85-a048-b9949f6fbca6`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product`
- Sources: `imc-kmag-sds-2026`, `imc-kmag-standard-2026`, `epa-mineral-1975`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

##### Waste flows

###### Inorganic langbeinite leach purge brine (`leach_brine`)

One externally transferred aqueous purge stream after contained leach/wash and water-only control collection. Measure whole solution mass, density, water and Na/K/Mg/Cl/sulfate loads, including dissolved mineral loss. No exact compatible UUID verified; never substitute organic concentrated-saline or manganese-washing wastewater. Recipient, salinity acceptance and fate must be established.

- Selected flow: Inorganic langbeinite leach purge brine
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `epa-mineral-1975`, `jrc-cww-2016`

Measure physical mass; flow identity UUID unresolved.

###### Separated wet insoluble tailings (`clay_tailings`)

One mixed wet clay/gangue tailings shipment, with entrained brine/salt/mineral and solids/water content measured. Broad beneficiation-tailings identity is conditional on these actual characteristics and the receiving treatment. Keep distinct from bulk purge and dry captured dust; internal solids return is not an external output.

- Selected flow: Tailings, unspecified `39cedcf1-3637-4d05-b243-0bb86092c70a`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `epa-mineral-1975`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### Dry captured mineral dust transferred out (`captured_dust`)

One collected inorganic mineral dust shipment from dry crushing/sizing/handling or dryer controls. Determine langbeinite/impurity/moisture composition, contamination and recipient. Broad industrial dust identity does not prescribe disposal. Internal dust return is recorded only as a physical recycle, not both external waste and product.

- Selected flow: Dust `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Sources: `imc-kmag-sds-2026`, `eccc-potash-2017`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

##### Elementary flows

###### particles (PM2.5) (`pm25_air`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID.

- Selected flow: particles (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eccc-potash-2017`, `imc-kmag-sds-2026`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### particles (PM2.5 - PM10) (`pm25_10_air`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID.

- Selected flow: particles (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eccc-potash-2017`, `imc-kmag-sds-2026`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### particles (> PM10) (`pmover10_air`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID.

- Selected flow: particles (> PM10) `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eccc-potash-2017`, `imc-kmag-sds-2026`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### carbon dioxide (fossil) (`co2_fossil`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### carbon monoxide (fossil) (`co_fossil`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### methane (fossil) (`ch4_fossil`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID.

- Selected flow: methane (fossil) `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### nitrogen monoxide (`no_air`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID. Total NOx/NO2-equivalent alone remains pending speciation.

- Selected flow: nitrogen monoxide `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### nitrogen dioxide (`no2_air`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID. Total NOx/NO2-equivalent alone remains pending speciation.

- Selected flow: nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### nitrous oxide (`n2o_air`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID.

- Selected flow: nitrous oxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### sulfur dioxide (`so2_air`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID.

- Selected flow: sulfur dioxide `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### benzene (`benzene_air`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID.

- Selected flow: benzene `08a91e70-3ddc-11dd-9202-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### formaldehyde (`formaldehyde_air`)

Quantify this specific outdoor-air release after controls over the same period, covering relevant stacks, fugitive paths and startup/shutdown. Preserve species/particle interval, sampling gas basis, source flow and uncertainty; no default emission factor or positive release is implied by its UUID.

- Selected flow: formaldehyde `08a91e70-3ddc-11dd-941b-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-gas-ap42`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

###### water vapour (`water_vapor_air`)

Measure or close the water balance for actual process-water evaporation plus fuel-generated water released to outdoor air. Keep mineral/product/residue water, inlet-air humidity and exhaust-water terms distinct; count no liquid brine waste again as vapor.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measured or evidence-calculated external exchange per 1 kg reference flow; collect under the linked protocol and calculate as specified in Section 8; unknown is not zero.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `epa-mineral-1975`, `eccc-potash-2017`, `jrc-cww-2016`

Property UUID: `93a60a56-a3c8-11da-a746-0800200b9a66`; unit-group UUID: `93a60a57-a4c8-11da-a746-0800200c9a66`.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_single_product | cold_leach | For the declared single-grade campaign, attribute attributable processing burdens to accepted langbeinite output; retain rejects, mineral losses and waste-management burdens. No automatic credit for NaCl, MgCl2, soluble nutrients or fine dust. A verified sale of another grade or external mineral concentrate requires explicit coproduct accounting. | epa-mineral-1975 |
| allocation_shared | cold_leach | First subdivide stage meters and campaigns using physical causation. If genuine joint saleable outputs remain inseparable, declare a justified physical allocation basis; where that cannot represent causation, use documented representative revenue allocation and sensitivity. Record prices/grade/period and uncertainty. Never apply an allocation fraction to physical outputs or material balances: allocate only environmental burdens after recording actual whole streams. | jrc-cww-2016; epa-mineral-1975 |

The hierarchy in allocation_shared is this PCR's transparent modelling convention; these sources support physical process/stream distinctions, not a mandated economic allocation factor. Offsite conversion of sold fines to K2SO4 is a separate process; internal returning fines are no coproduct. The physical process graph, whole mass/water/K/Mg/S/Na/Cl balance, and allocated burden ledger remain separate and reconcilable.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | cold_leach | langbeinite_product | acceptance and assay | producer/site/SKU; net accepted mass Q; mineral phase; moisture; K/Mg/S; NaCl/insolubles; particle size; wet/dry basis; stocks/rejects | Calibrated net weighing and traceable representative lot mineral/chemical/moisture tests; verify natural ore and cold-leach route against process records; aggregation calculation: Sum accepted as-delivered net output Q; inventory numerator for each row divided by Q kg, per 1 kg reference flow | kg; mass fractions | Each accepted lot and period reconciliation | Complete declared period including startup/shutdown; state dates and coverage, normally annual or justified full campaign | Same grade/site/boundary as inventories | per 1 kg reference flow | Scale calibration, tare/loadout records, assay methods/sampling, grade acceptance, stock reconciliation |
| cp_material | cold_leach | ore | receiving and assays | received net ore; opening/closing stocks; mine origin; langbeinite/NaCl/KCl/clay/gangue/water assay; upstream mining/transport | Weigh received ore, reconcile stocks and actual processing charge; analyze representative mineral/element/water composition, with method uncertainty; aggregation calculation: Net processed external ore / Q kg accepted output, per 1 kg reference flow | kg; mass fractions | Each receipt/charge and accounting period | Same complete period as Q | Actual ore supply and cold-leach plant | per 1 kg reference flow | Weighbridge, sampling/mineral tests, mine/supplier records, upstream data scope |
| cp_utilities | cold_leach | water; electricity; gas | meters and provider definitions | each external meter; branch/stage readings; recycle; water treatment/salts; gas T/P/dry basis/composition/Z/provider m3 definition; electricity region/year/voltage/losses | Calibrated input/submeters and supplier primary records; reconcile shared utilities by causal allocation; verify water treatment, gas reference-volume conversion and consumer electricity boundary; aggregation calculation: Each attributable external utility numerator / Q kg accepted output, per 1 kg reference flow; internal circulations excluded | kg; m3; kWh; MJ | Continuous/shift records and invoices with period reconciliation | Same complete period as Q including downtime and controls | Plant and each utility provider | per 1 kg reference flow | Meter calibration/coverage, provider basis/analysis, stage reconciliation, documented shared allocation |
| cp_residues | cold_leach | leach_brine; clay_tailings; captured_dust | waste transfer and characterization | separate stream mass; volume/density when used; water/solids/salts/mineral composition; stock changes; recycled fraction; receiver acceptance/transport/fate | Calibrated transfer weighing or metered volume with measured matched density; representative chemical/mineral/moisture tests; confirm receiver and treatment including long-term releases; aggregation calculation: Each actual whole external waste stream / Q kg accepted output, per 1 kg reference flow; reconcile inventory and recycle separately | kg; m3; mass fractions | Each transfer and representative tests after changes, reconciled each period | Same complete period as Q; declare receiver scenario horizon | Each distinct site exit and external receiver | per 1 kg reference flow | Shipment/receiver records, compatible treatment dataset, samples/density, salinity conditions, closure/aftercare assumptions |
| cp_air | cold_leach | individual elementary outputs | source monitoring and balances | source/stack/fugitive path; actual species; particle interval/filterable-condensable basis; flow/concentration/hours; T/P/wet-dry/O2 corrections; operating state; water/fuel carbon; non-detect limits | Representative calibrated source-specific testing and continuous operating/flow records; integrate concentration times matched gas flow and duration, or documented physically valid species/carbon/water balance; no transplanted boiler factors; aggregation calculation: Sum each nonduplicated species/particle release / Q kg accepted output, per 1 kg reference flow | kg; concentration; gas volume/time | Representative tests at changed conditions with continuous operating-time records | Same complete period as Q including startups/upsets; disclose unmeasured states | Dryer, crusher, screens, handling, dust controls and gas leaks separately | per 1 kg reference flow | Sampling/QA, detection limits, gas-basis/speciation compatibility, fugitive coverage, balance closure, uncertainty |

These are future collection requirements, not claims that a current plant/SKU survey was performed. Select representative period/sampling from actual process variability; no source case is an industry default.

Retain raw, unallocated external totals for the same route, supplied state, grade and complete period, including attributable failed and zero-accepted-output batches, downtime, starts/stops, returns and rework. Reconcile opening/closing work in progress and finished stocks with accumulated inventory burdens, documenting carry-in/carry-out attribution without lost or duplicated burdens. Q counts final accepted as-delivered production once, reconciled with loadout and stocks; exclude final rejects and do not recount returned, reworked and reaccepted material. Apply normalize_period once to each reconciled raw numerator; protocol aggregation and row/calculation descriptions denote that same division. Preserve the existing Q > 0 requirement; a wholly zero-output period needs a justified wider representative period or an incomplete result.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_period | all inventory rows | For each row j, x_j = A_j / Q; A_j is the attributable measured or justified calculated external exchange over the common period in its declared numerator unit; Q is accepted net product kg from cp_product; x_j is exchange per 1 kg reference flow. Product output equals 1 kg. Use Q > 0; keep shared allocation only on burdens. Retain raw, unallocated external totals for the same route, supplied state, grade and complete period, including attributable failed and zero-accepted-output batches, downtime, starts/stops, returns and rework. Reconcile opening/closing work in progress and finished stocks with accumulated inventory burdens, documenting carry-in/carry-out attribution without lost or duplicated burdens. Q counts final accepted as-delivered production once, reconciled with loadout and stocks; exclude final rejects and do not recount returned, reworked and reaccepted material. Apply normalize_period once to each reconciled raw numerator; protocol aggregation and row/calculation descriptions denote that same division. Preserve the existing Q > 0 requirement; a wholly zero-output period needs a justified wider representative period or an incomplete result. | A_j; Q; cp_product; row-linked protocol | Normalized inventory in each row's declared unit per 1 kg reference flow | epa-mineral-1975; jrc-cww-2016 |
| composition_balance | ore; langbeinite_product; leach_brine; clay_tailings; captured_dust | For each measured physical stream, component mass = whole stream mass × measured component mass fraction on the same wet/dry basis. Dry solids = wet mass × (1 − measured water fraction). Reconcile K, Mg, S, Na, Cl and mineral losses with stock change and internal returns. Analytical K2O equivalent is only a separately declared nutrient reporting calculation, not physical K2O output. | whole masses; water/assays; stocks; internal returns | Whole material/component balance and measured recovery, without default yield | epa-mineral-1975; imc-kmag-sds-2026; imc-kmag-standard-2026 |
| air_load | individual elementary outputs | Integrate matched species concentration × actual gas flow × operating time, with all recorded sampling/standard/wet-dry corrections and unit conversions; measured non-detects retain bounds. For water, reconcile process evaporation and fuel-generated water separately from ambient humidity. Retain any unmeasured species or NOx speciation as pending; no total-VOC proxy for a species and no duplicated cumulative PM. | matched source tests; flow; hours; gas basis; carbon/water balance; cp_air | Species/interval mass released over period, then normalize_period | jrc-cww-2016; eccc-potash-2017; epa-gas-ap42 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | product; ore | Verify natural double-sulfate mineral and cold-leach impurity removal; assay real SKU/grade and mineral loss; avoid KCl/K2SO4/synthetic/blended substitutes. Broad flow identity does not prove provider inventory. | Mineral/assay/route/producer records; imc-kmag-sds-2026; epa-mineral-1975 |
| dq_completeness | all inventory rows | Resolve missing flow identities/backgrounds, characterize each residue and air source, retain uncertainties, absent-flow evidence and unmeasured scope. Check different waste streams/added chemicals and all identified gas species before claiming completeness. | Row-linked protocols, original records and full physical stream map |
| dq_balance | cold_leach | Keep separate whole-stream mass, mineral/element, water, fuel carbon and energy balances, with measured tolerances/uncertainties justified by calibration and sample variability; no invented tolerance, recovery, density or energy norm. Physical internal links have equal quantities at both ends. | Weighing, assays, meters, source tests, stocks, allocation ledger |
| dq_sources | sources and providers | Historical/single-producer material supports only its stated physical/method scope. No universal recipe, assay, density, emission factor, efficiency or disposal claim. Require actual utility/receiver dataset boundaries and study-year/geographic representativeness. | Source limits, actual provider definitions, uncertainty/sensitivity |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | langbeinite_product | Confirm all required qualifiers, physical mass denominator, natural mineral and actual cold-leach/utility/waste route before use. There is exactly one final reference output; an identity link or methodology candidate is not independent scientific approval. | epa-mineral-1975; imc-kmag-sds-2026 |
| validate_measurement | all inventory rows | Require Q > 0, one common period/denominator, declared numerator units, calibration and traceable aggregation; both languages must agree. Gas volume/provider or NO/NO2 monitor-basis incompatibility remains pending, not converted by assumption. | jrc-cww-2016 |
| validate_environment | individual elementary outputs; residues | No PM interval overlap, no NOx/species duplication, no waste/air double counting and no omitted mineral loss or offsite receiver burden. If biogenic fuel is introduced, retain its biogenic CO2 in LCI under new atomic rows; no greenhouse-gas reporting convention deletes physical releases. Direct outfalls/seepage require expanded atomic receiving-medium exchanges. | eccc-potash-2017; epa-gas-ap42; jrc-cww-2016 |
| validate_uncertainty | cold_leach | Missing UUID, unknown amount, provider mismatch, unmeasured emission or excluded actual route prevents a concrete inventory completeness claim. Report accepted inputs, performed/skipped checks and remaining findings; no unresolved state is presented as zero or scientifically reviewed. | jrc-cww-2016 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Attributional cradle-to-gate natural langbeinite fertilizer production dataset once required records/backgrounds are complete |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Declared natural langbeinite grade and cold-leach route at matching plant-gate physical mass basis; separately assess any nutrient reporting |
| excluded_use | Full CPC34639 coverage, alternative minerals/routes, synthesized sulfate/NPK mixtures, liquid or additive-granulated supply, crop-yield equivalence, direct-outfall variant or generic provider substitution |
| required_metadata | Producer/site/SKU, ore origin/mineral/assay/water and grade, route/utility/control/waste receiver configuration, period/Q, allocation, upstream coverage and field data methods |
| required_quality_disclosure | Conditional broad reference identity, unresolved identities, background/quantity compatibility, measured coverage and uncertainty, source applicability limits, exclusions and long-term receiver scenarios |
| update_trigger | Change in mine/grade/assay, process/utility/control/waste route, provider basis, study year or new identity/source evidence; reassess applicability before reuse |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025, rows 34631/34632/34639; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification scope only; not PCR identity, production chemistry or approved mapping |
| epa-mineral-1975 | official_guidance | US EPA 440/1-75/059b, Mineral Mining and Processing, Vol II, October 1975; printed pp80–81 (PDF85–86), contrast Figure19 printed83/PDF88; https://www.epa.gov/sites/default/files/2020-02/documents/mineral-mining_dd_vol-2_1975.pdf | Historical retained-langbeinite cold leach/wash/debrine/dry/size route; distinguish excluded conversion to K2SO4. No facility quantities, waste loads, historical regulatory limits or industry defaults |
| imc-kmag-sds-2026 | handbook | International Minerals Carlsbad, K-Mag all grades SDS IMC260001, 1 March 2026, §§1/3/9/15, PDF1/3/5; https://www.kmag.com/wp-content/uploads/2026/03/SDS-Kmag.pdf | Real natural double-sulfate CAS14977-37-8, commercial solid state, incidental NaCl and dust hazard; single producer limits, no composition/density defaults or cold-leach attribution |
| imc-kmag-standard-2026 | handbook | IMC, K-Mag Standard specification, revised03/26, one page incl. disclaimer; https://www.kmag.com/wp-content/uploads/2026/03/2026-K-Mag-Standard-Spec-Sheet.pdf | Distinguish product mass, K2O equivalent, Mg/S, chloride, moisture and particle grade; actual assay required, no transferred guarantee/typical-value defaults |
| imc-heavy-media | handbook | IMC About, History and plant description, dated web snapshot 14 October 2026; https://www.kmag.com/about/ | Counterevidence: current producer uses heavy media; do not claim all langbeinite is cold-leached or that its current plant is represented here |
| jrc-cww-2016 | official_guidance | JRC CWW BREF2016, scope PDF29, BAT2/3/4 printed543–544/PDF573–574; https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | Transferable wastewater/gas-origin and stream-parameter recording/monitoring methods only; no chemical-sector legal coverage, biological treatment default, BAT levels or monitoring frequency imposed on mineral beneficiation |
| eccc-potash-2017 | official_guidance | ECCC, Code of Practice for Management of PM2.5 Emissions in the Potash Sector, September2017, §§2.1.2.5–.9, Table3-2, R11/12; PDF15/20/27; https://www.canada.ca/content/dam/eccc/documents/pdf/cepa/20250707-eng.pdf | Potash debrining/dryer/screening/dust-control mechanisms and sources; conditional configuration only, no KCl chemistry, quantities, intensity or universal recipe |
| epa-gas-ap42 | official_guidance | US EPA AP42 §1.4 Natural Gas Combustion, original header10/26, PDF1–3/§§1.4.1–1.4.3 and disclaimer; https://www.epa.gov/sites/default/files/2020-09/documents/1.4_natural_gas_combustion.pdf | Boiler/furnace combustion species screen and source-test preference only. No boiler factors, fuel composition, temperature, efficiency or default emissions imported into direct-contact mineral drying |
