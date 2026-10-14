---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.cryogenic-air-separation-gases
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
translation_status: canonical
---

# Cryogenic air separation gases

## 1. Scope and Applicability

This PCR covers a common foreground manufacturing/separation boundary for oxygen (O2), nitrogen (N2) and argon (Ar) obtained by cryogenic distillation of ambient air. It covers each separately specified gas or liquid product, not one interchangeable “industrial gas”. The reference configuration has electrically heated prepurifier regeneration, turbine/air-cycle refrigeration, undosed water or air cooling, no combustion utility, no steam import, no chemical-refrigerant circuit and no hydrogen deoxygenation of argon. Actual separation, compression or internal pumping/vaporisation, liquefaction, storage and bulk loading up to the declared plant gate are included. Source support: `eiga-asu-environment-2025` §§2.1, 4.3; `linde-air-separation-2019` pp10–11; `eiga-air-gases-pcf-2026` §4.1.

The electrical regeneration route is described in `eiga-asu-environment-2025` §4.3.2.1, but the cited examples do not establish an actual combined undosed/no-combustion plant. Treat this as a restricted applicability condition requiring equipment, heater-energy, chemical-receipt and supply records. EIGA §4.3.4.1 explicitly describes chemical treatment in recirculating cooling water. Air cooling does not prove zero water in compressor intercoolers, direct-contact cooling, prepurification or maintenance; neither a diagram nor a cooling label proves absence of a chemical or fuel exchange. Retain every actual stream and require a scope review when the restricted configuration is not demonstrated.

Exclude hydrogen manufacture, recovered or well-derived CO2, acetylene, nitrous oxide, PSA/VPSA or membrane production, other rare-gas extraction, non-metal oxygen compounds, intentional formulated gas mixtures, aqueous gas solutions, chemical refrigerants, fired utilities, chemically dosed cooling circuits, imported finished-gas backup, cylinder filling and customer logistics/use. Those routes require separately evidenced foreground exchanges and an applicability review before this reference configuration may be used. This configuration requires nonzero accepted GOX production; do not invent GOX output for a liquid-only or nitrogen-only plant.

An O2/N2/Ar product contains measured trace impurities but is not an intentional multigas blend. Reference mass means total supplied product mass at the declared quality, not pure-species-equivalent mass. No water carrier or active-substance concentration is presumed. Every supplied auxiliary formulation is collected as one identified material, with its actual components and moisture separately documented; a formulated material must not be modelled as a pure active ingredient.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.cryogenic-air-separation-gases |
| classification_refs | CPC 3.0 34210; narrower scope suggestion only, no accepted mapping |
| covered_products | Separately specified GOX, GAN, GAR, LOX, LIN and LAR from the same cryogenic ASU, in the reference configuration |
| excluded_products | Hydrogen; recovered CO2; PSA/membrane gases; other rare gases; gas mixtures and solutions; inorganic oxygen compounds of non-metals |
| representative_product | Accepted gaseous oxygen at plant gate (GOX), with the complete same-ASU co-product ledger |
| production_route | Air filtration/compression → cooling and regenerable adsorption → cold production and cryogenic rectification → argon rectification where installed → product pressure/state conditioning and storage/loading |
| market_state | Pipeline-ready gas or bulk cryogenic liquid at specified purity, moisture, pressure and temperature; product/state quantities kept separate |

## 3. Reference Flow

This is an intermediate-product declared unit, not a complete end-use functional comparison. The following functional-unit fields describe its declared service. The reference configuration uses GOX as its single denominator. An independently reviewed dataset for another product must select its own verified reference object and denominator consistently; it must not reuse this GOX denominator as a kg of liquid or a kg of nitrogen.

| Field | Value |
| --- | --- |
| What | Supply industrial oxygen as a separately specified gaseous intermediate |
| How much | 1 kg reference flow |
| How well | Actual certified grade, O2 purity, individual impurity limits and moisture; actual gate pressure and temperature; no generic purity assumption |
| How long or cycle | One accepted plant-gate delivery; collection covers one complete operating year, including start/stop and storage changes |
| reference_flow_link | gox |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Plant/train; operating year; cryogenic route; regeneration/cooling configuration; species and actual purity/SKU; each impurity and moisture basis; gas/liquid state; gate and custody point; pressure (absolute or gauge); temperature; wet/dry basis; volume reference conditions and compressibility if used; provider reference unit; all co-products and rejects/losses; allocation evidence |

All required qualifiers must appear in the dataset metadata, reference-flow comment or equivalent package fields. A UUID alone supplies neither the foreground quantity nor a compatible background dataset. `eiga-air-gases-pcf-2026` §4.1 supports kg product and declared purity/pressure; this PCR deliberately ends at the plant gate, not that document's customer gate.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use cp_products to determine accepted net supplied GOX mass G at the stated gate, excluding tanks, piping and packaging. All inventory and collection aggregations use per 1 kg reference flow. G must be positive. |
| gas_volume_basis | gox, gan, gar, oxygen_intake, nitrogen_intake, argon_intake, oxygen_return, nitrogen_return, argon_return | Mass | kg | Keep original gas volume, absolute pressure, temperature, water content, composition, meter reference state and compressibility. Derive density from these measured/specification fields or a traceable validated conversion. Never infer operating density from a database coefficient. Reconcile supplier normal-volume conventions before any provider link. |
| liquid_basis | lox, lin, lar | Mass | kg | Use calibrated mass meters or weigh tanks/vehicles with tare and heel correction. Volume-to-mass conversion requires measured temperature, liquid composition and validated density. Gas normal volume is not liquid volume. Native coefficient metadata is not a density default. |
| purity_basis | all product outputs | Mass | kg | Separate product mass from pure-species mass. Convert mole/volume purity to mass fractions using actual composition and traceable molecular masses; no generic product/pure-species substitution. Product impurities enter component balances, not extra product rows. |
| water_units | cooling_water, compressor_condensate, cooling_bleed, evaporated_water, direct_water | Mass or Volume as specified by the individual row | kg or m3 | Keep native direct_water Volume/m3. Water mass balances use measured density and temperature to reconcile volume records. Distinguish make-up, internal recirculation, condensed intake humidity, evaporation, bleed and discharge. |
| electricity_units | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | This is the native electricity reference-property label, not a fuel-burning assumption. Retain meter kWh and convert with 1 kWh = 3.6 MJ. State voltage, supply mix, transformation and losses; do not apply a fuel heat basis to electrical work. |

No yield, purity, recipe, net loss, energy intensity or emission factor is fixed by this PCR. Protocols determine them from actual site records. Source support: `eiga-air-gases-pcf-2026` §§4.1–4.6; `eiga-asu-environment-2025` §4.3; `linde-air-separation-2019` pp10–11.

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ambient air at the inlet and externally supplied electricity, tap water and actual consumables; no imported finished-gas stock |
| starting_condition_role | environmental_resource_and_upstream_product_inputs |
| product_classification_scope | The O2/N2/Ar cryogenic subset of CPC 34210 only |
| recursive_input_rule | Do not invent a self-supply gas input for internal reflux, purge or cooling. Purchased same-category gas is outside this reference configuration and requires separately evidenced upstream dataset and identity review. |
| upstream_dataset_requirement | External utility/consumable suppliers and waste treatment must match actual product, grade, geography, time, native reference unit and boundary; flow identity alone is insufficient. |
| disclosure | Disclose gate, period, meter coverage, process configuration, all six state/species outputs, rejects, stocks, emissions, waste destinations and the unallocated/allocated ledgers; disclose plant-gate departure from EIGA customer-gate CFP. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_applicability | asu | Only this cryogenic O2/N2/Ar reference configuration with nonzero GOX, electrically heated regeneration, undosed cooling, no combustion/steam/chemical refrigerant or hydrogen deoxygenation, no imported finished gas, and plant-gate bulk/pipeline supply is covered. Actual equipment and supply records must establish applicability before using the inventory or allocation rules. | eiga-asu-environment-2025; linde-air-separation-2019; eiga-air-gases-pcf-2026 |
| boundary_complete | asu | Include inlet filtration/compression, prepurification/regeneration, cold production, air and argon rectification, real product state/pressure conditioning, storage/loading and attributable operational maintenance. Retain independent stage measurement without inventing duplicate intermediate product exchanges. | linde-air-separation-2019; eiga-asu-environment-2025 |
| boundary_internal | physical_ledger | Record reflux, crude argon, return liquid oxygen and internal nitrogen cooling/purge as internal links of equal amount at both ends; they cancel in the aggregated ASU. Exported saleable product, discarded material and environmental return are distinct. | linde-air-separation-2019; eiga-air-gases-pcf-2026 |
| boundary_emissions | asu | Establish a source/receiver stream register. Airborne contaminants entering and then returning to the same atmosphere remain in a gross physical ledger; report any relocation, capture or net new emissions separately. Do not invent a fossil or biogenic CO2 origin for ambient CO2, a removal credit, or a commodity CO2 output. Any actual fossil/biogenic emissions stay in the LCI independent of CFP exclusions. | eiga-asu-environment-2025; jrc-cww-bref-2016 |
| boundary_completeness | site_survey | Check actual SDS/BOM, drains, vents and maintenance records. Additional actual atomic flows, including pollutant species, contaminated dust, sludge or insulation replacement, must be identified, quantified and linked before declaring a dataset complete; no aggregate chemical/energy/waste selector can replace them. Evidence of absent excluded configurations is required. | eiga-asu-environment-2025; jrc-cww-bref-2016 |
| boundary_whole_mass | physical_ledger | Reconcile the whole measured ASU mass as well as O2/N2/Ar components: ambient-air and supplied-water/material boundary receipts plus opening stocks equal all accepted products, final atmospheric returns, condensate, treatment-bound bleed or direct water discharge, separately removed solid/oil wastes and closing stocks. Keep humidity, ambient CO2, captured impurities and measured minor species in the gross physical ledger without assigning fictitious product or carbon-credit identities. Do not count product impurities again outside their product mass. Every residual needs uncertainty and investigation. Service-period averaging of consumable burdens belongs in the burden ledger, never fabricated physical receipts in a year without replacement. Retain separate whole wet-air, compressed-air and final vent stream measurements; O2/N2/Ar cards project their components and do not add another whole-air mass. Wet residue carriers include H2O and impurities; component analyses and energy cannot be added as extra carrier mass. Keep compressor/intercooler and prepurification drains, phase losses and stocks separately traceable. Any supplied/returned containers crossing the gate have a separate material/tare/custody/stock register; retain each actual atomic exchange and separate its service burden from physical movement. | linde-air-separation-2019; eiga-asu-environment-2025; jrc-cww-bref-2016 |
| boundary_gate | downstream | Exclude post-gate distribution, cylinder filling, customer storage/use and end of life. Upstream supplies and downstream waste treatment remain model links. Do not advertise a plant-gate dataset as cradle-to-customer or a full use-phase comparison. | eiga-air-gases-pcf-2026 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| asu | Integrated cryogenic ASU and gate conditioning | required | Declared reference configuration with nonzero GOX | joint_manufacturing_and_separation | 1 kg reference flow |

The aggregated ASU contains four measured stages: (1) inlet filtering and air compression; (2) cooling, adsorption and regeneration; (3) cold production and O2/N2/Ar rectification; (4) gas-pressure conditioning or liquid loading/storage. Draw the actual process graph and assign meters/raw records to these stages. Internal streams are physical links, not additional external product inventory rows. Argon rectification and each liquid product apply only when installed/produced. An absent stream needs an equipment or production record, never an invented zero.

The cards below carry the **unallocated joint physical inventory per 1 kg GOX**. Co-product quantities are actual gate ratios. Section 7 separately assigns environmental burdens to products; allocated burdens must not be confused with this physical process ledger.

Keep whole wet-air inlet mass and whole compressed-air/tailgas/vent-stream masses in a stream register with measured H2O, CO2 and minor species. O2/N2/Ar resource and emission cards are component projections of those same streams; do not add whole ambient-air or whole vent mass again to their species sum. A whole wet residue or wastewater carrier already includes its water and impurities: species analyses are component/impact records, not extra carrier mass. Keep thermal loads and electrical work outside material-mass sums. Measure compressor/intercooler and prepurification condensate at each actual drain separately, including stock changes and its actual receiver; the compressor_condensate card aggregates only compatible air-process condensate after retaining that separate drain ledger. Adsorbed humidity subsequently returned in regeneration gas is vapour, not invented liquid condensate. Record all gas/liquid phase losses independently before any allocation.

Supplied and returned containers crossing the selected gate require an independent physical register by actual material, container id, tare, contents, heel, custody movement and opening/closing stock. They never enter accepted gas mass. If containers or handling chemicals really cross the boundary, add each actual atomic exchange with its own identity before completing the dataset; excluding cylinder filling or averaging a reuse/service burden does not erase a physical container movement or justify an assumed lifetime. No container material or quantity is prescribed here.

### Process: Integrated cryogenic ASU (`asu`)


#### Inputs

##### Product flows

###### Site electricity (`electricity`)

Use this identity only for actual CN 1–35 kV grid-average supply to the user. Record the provider loss boundary and transformation; another geography, voltage or supply route needs its own verified identity. Keep phase meters for air compression, regeneration, cold production, argon rectification, liquefaction and delivery pressure conditioning.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66`; unit group `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Actual boundary amount of this atomic flow from cp_energy / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Supplied cooling make-up water (`cooling_water`)

Only actual tap water, with no deliberate chemical dosing in this reference configuration. Collect net boundary make-up, not recirculation volume. Measure density when converting a water meter to kg and verify the provider mass basis.

- Selected flow: Water, tap `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_water / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Prepurifier molecular-sieve replacement (`zeolite_adsorbent`)

Collect one supplied pellet grade, including binder, moisture and composition, supplier specification and actual replacement service interval. This is formulated adsorbent mass, not pure zeolite mass; no 13X recipe is presumed.

- Selected flow: Regenerable zeolite molecular-sieve pellets
- Flow property / unit: Mass / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_consumables / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Conditional prepurifier alumina (`alumina_adsorbent`)

Only if this separate adsorbent is installed; collect actual grade, binder, water and service interval. Do not substitute smelter-grade alumina or a conflicting CAS record. Absence requires an equipment/BOM record.

- Selected flow: Activated alumina adsorbent beads
- Flow property / unit: Mass / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_consumables / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Air-inlet filter replacement (`inlet_filter`)

One assembled cartridge grade; collect material composition and dry replacement mass. Do not use activated carbon or an ultrafiltration membrane as this identity.

- Selected flow: Mechanical air-inlet filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_consumables / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Mineral lubricating oil (`lubricating_oil`)

Applicable only to actual petroleum-fraction lubricating oil. Collect formulated grade and receipts/stock changes; exclude synthetic PAO and wax/solvent lubricants. Native calorific metadata is not a combustion or amount default.

- Selected flow: Lubricating oil `66628f20-9d33-4997-bd6c-6357453fa268`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_consumables / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

##### Waste flows

##### Elementary flows

###### Environmental oxygen intake (`oxygen_intake`)

O2 component of ambient air, resource from air. Use measured intake and composition; never purchased oxygen or an oxygen emission.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_air / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Environmental nitrogen intake (`nitrogen_intake`)

N2 component of ambient air, resource from air; not total nitrogen excluding N2, ammonia, NOx or fertiliser N.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_air / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Environmental argon intake (`argon_intake`)

Natural nonradioactive argon in air, resource from air; not a radioactive noble-gas aggregate or Argon-40 activity flow.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_air / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`


#### Outputs

##### Product flows

###### Accepted gaseous oxygen reference output (`gox`)

Final gaseous O2 product after actual pressure conditioning at the declared plant gate. Record actual purity and moisture; reference mass is supplied gas mass, including certified trace impurities, excluding tanks and piping. Do not create a second same-UUID intermediate product output.

- Selected flow: oxygen `4f19ca15-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_products`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Accepted gaseous nitrogen co-product (`gan`)

Final gaseous N2 from the same cryogenic ASU; measure accepted gate mass independently. The selected native gas identity has a 1.0 Mass reference coefficient, a GLO production-mix field and a protective-atmosphere use description. That use is not an exclusive grade or manufacturer specification. The record does not establish a cryogenic production route, actual purity, pressure or supplier; verify those separately. Do not substitute a vented bottling make-up service for accepted gas product.

- Selected flow: Nitrogen gas `50626f35-0e0d-4139-b9f9-7e9ff238ba62`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual accepted gate mass of this product from cp_products / G; retain the complete physical ratio
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_products`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Accepted gaseous argon co-product (`gar`)

Only actual separated gaseous Ar, with rectification and pressure conditioning included. Broad gaseous identity does not certify purity, route or provider data. No intentional welding-gas mixtures.

- Selected flow: Argon, gaseous `f83a939c-a58f-44de-a593-d9c9ffb584e4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual accepted gate mass of this product from cp_products / G; retain the complete physical ratio
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_products`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Accepted liquid oxygen co-product (`lox`)

Final liquid O2 after liquefaction and bulk loading at the declared gate. Use tank weighing or calibrated liquid mass measurement. The selected native identity explicitly names liquid molecular oxygen and has a 1.0 Mass reference coefficient. Its aquaculture-use description supplies no exclusive grade, manufacturer or production-route restriction; do not infer medical purity or a cryogenic supplier from its examples. Establish actual route, grade, composition, pressure, temperature and gate from plant records.

- Selected flow: Liquid Oxygen `2e810cb4-86c3-4f0c-aad9-ccd73443338e`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual accepted gate mass of this product from cp_products / G; retain the complete physical ratio
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_products`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Accepted liquid nitrogen co-product (`lin`)

This selected identity requires certified purity ≥99.9%, liquid-air fractionation and the native GJB 3403A-2019 specification; this is a record applicability condition, not a generic purity default. Record actual temperature, pressure and mass. Another grade requires a separately verified identity.

- Selected flow: Liquid Nitrogen `dd17be27-229a-4236-ae93-29835cf7e1a8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual accepted gate mass of this product from cp_products / G; retain the complete physical ratio
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_products`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Accepted liquid argon co-product (`lar`)

Final liquid Ar from argon rectification, including actual liquefaction/storage/loading. Preserve actual physical mass; do not multiply it by a burden allocation share.

- Selected flow: Argon, liquid `e34ce81d-4b72-4ea7-b914-9ca973e2f017`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual accepted gate mass of this product from cp_products / G; retain the complete physical ratio
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_products`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

##### Waste flows

###### Spent molecular-sieve waste (`spent_sieve`)

Actual removed molecular-sieve pellets with moisture, binder, captured impurities and any oil contamination. Weigh separately and declare receiving treatment; the native identity retains locationOfSupply CN-JX-SRS and fixes no treatment route. Use this binding only when the actual generation/supply location matches; another location needs a compatible verified identity, while its actual waste quantity remains in the ledger.

- Selected flow: Waste molecular sieve `2328c994-b537-46f8-81a2-60cdbe77a095`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_waste / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Spent alumina adsorbent waste (`spent_alumina`)

Only if alumina is separately installed and removed. Keep wet/dry basis, contamination and receiver distinct from zeolite waste; absence is documented.

- Selected flow: Spent activated alumina adsorbent beads
- Flow property / unit: Mass / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_waste / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Used air-filter cartridge waste (`spent_filter`)

Assembled cartridge plus captured dust; retain composition and wet/dry basis. Separately weighed removed dust is not added again to the cartridge mass. Do not replace with a generic particulate emission.

- Selected flow: Used mechanical air-inlet filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_waste / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Used lubricant waste (`used_oil`)

Used oil separated from water; collect contamination, water fraction and receiving facility. Oily wastewater, oily sludge and a lubricant product are different flows.

- Selected flow: Used lubricating oil `55d93375-7f04-4166-b2a2-88ce929051a5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_waste / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Air-compressor condensate to treatment (`compressor_condensate`)

Condensed intake moisture from actual compressor/intercooler and prepurification cooling drains, retaining each drain separately before any compatible aggregation, with measured acidity, metals and any oil. Measure separately, specify receiver inlet acceptance and treatment. Silicon/manganese process wastewater and already treated effluent identities are incompatible.

- Selected flow: Air-compressor condensate wastewater
- Flow property / unit: Mass / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_water / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Cooling bleed water to treatment (`cooling_bleed`)

Only cooling bleed crossing to a treatment operator. Declare dissolved salts, temperature, flow and receiver. Mutually exclusive with the same physical stream counted as direct freshwater discharge.

- Selected flow: Undosed cooling-system bleed wastewater
- Flow property / unit: Mass / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_water / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

##### Elementary flows

###### Oxygen returned to air (`oxygen_return`)

Measured O2 in tailgas, regeneration purge, rejected product and storage/loading loss reaching outdoor air. Unspecified outdoor-air subcompartment is declared explicitly; change identity if a more specific receiving compartment is established. Not a saleable co-product.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_air / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Dinitrogen returned to air (`nitrogen_return`)

Actual N2 returned to outdoor air, including unsold nitrogen used internally for regeneration/cooling before exit. The internal portion is neither purchased product nor sold output. Do not select total nitrogen excluding N2.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_air / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Argon returned to air (`argon_return`)

Actual natural Ar in final outdoor tailgas or losses; not radioactive noble gases. Use measured composition and no LCIA-derived missing-mass deletion.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_air / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_air`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Water vapour to air (`evaporated_water`)

Net cooling evaporation plus the separately identified returned intake moisture. Keep gross humidity terms in the water ledger; do not count recycled water throughput as evaporation. Outdoor air, unspecified subcompartment.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: Actual boundary amount of this atomic flow from cp_water / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

###### Liquid water directly returned to freshwater (`direct_water`)

Only actual direct freshwater discharge, using the native Volume/m3 reference. Record receiving water, measured temperature/density, permit and pollutant analyses. This UUID is not water abstraction or a wastewater-treatment service; pollutants are separate atomic flows if present.

- Selected flow: Water `5e50fc01-19c6-4377-a1cc-bc65a12498ea`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66`; unit group `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- Amount rule: Actual boundary amount of this atomic flow from cp_water / G; unallocated physical amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `eiga-asu-environment-2025`, `eiga-air-gases-pcf-2026`, `linde-air-separation-2019`, `jrc-cww-bref-2016`

## 7. Allocation and Co-product Handling

Cryogenic distillation jointly produces separable species/state streams. Keep (a) an unallocated physical process graph and species/water/material balance and (b) a burden allocation ledger. `eiga-air-gases-pcf-2026` §4.6 supports allocation based on power required to produce each product, with no double counting; its PP33 example is not valid for all argon, pressures or purities and its coefficients are not adopted here.

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_subdivide | asu | Apply only within boundary_applicability; retain its complete configuration and gate conditions in any allocated dataset. First assign independently metered product-specific compression, liquefaction, argon purification and loading activity directly to that product and state. Subtract it from the remaining shared pool; count every meter once. Subdivision must reflect real separable equipment, not an assumed split. | eiga-air-gases-pcf-2026; linde-air-separation-2019 |
| allocation_power | shared_pool | For the remaining common pool use a documented site engineering power-requirement model for every actually saleable species/state i. Weight W_i = m_i × e_i, where m_i is accepted gate product mass and e_i is evidenced comparable specific power requirement in kWh/kg for the same scope, purity and pressure. Share a_i = W_i / sum(W_j). The sum covers all actual GOX/GAN/GAR/LOX/LIN/LAR; absent products need records. Positive weights and denominator are required. Do not use product heating value or an arbitrary equal mass split. | eiga-air-gases-pcf-2026 |
| allocation_conservation | burden_ledger | For each eligible shared environmental exchange or burden vector C, allocated B_i = D_i + a_i × C; D_i is directly attributable activity. Sum(B_i) must equal sum(D_i) + C. The specific result is B_i / m_i. Store the model, calibration/engineering evidence, uncertainty, applicable period and every allocation decision; shared non-power exchanges need an evidenced causal assignment or independently reviewed justified extension. | eiga-air-gases-pcf-2026 |
| allocation_physical | physical_ledger | Physical outputs remain m_i, or m_i / G in the GOX-normalized joint process, never a_i × m_i. Component balances include measured purity/impurities, stocks, rejection and loss; internal links cancel at equal mass. An allocated product dataset must not assert that all these joint co-products belong to that product alone. | eiga-air-gases-pcf-2026; linde-air-separation-2019 |
| allocation_review | method_selection | If complete causal power evidence is missing, retain the complete joint inventory and flag product-specific burden results as pending; do not manufacture weights. Any economic or other alternative needs explicit independent methodological review and actual price/time evidence. No avoided-production credit or free burden assignment is automatic. | eiga-air-gases-pcf-2026 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

G denotes accepted final GOX gate mass in kg during the common collection period. In raw records retain full annual site totals; the aggregation field below states the final common denominator, not a loss of primary data. Use one complete operating year including startup, shutdown, off-spec production, maintenance, loading losses and opening/closing stocks; disclose shorter coverage and its limitations (`eiga-air-gases-pcf-2026` §4.3). Do not extrapolate a single design-point or factory observation into a generic recipe. Every entry carries timestamps, instrument/lot id, uncertainty, accountable operator and its source document.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_products | asu | Reference and co-product outputs | Meter and custody records | Species; phase; SKU/purity; impurity mass or mole fractions; moisture; mass/volume; absolute pressure; temperature; volume reference state; compressibility; rejects/losses; opening and closing stocks; accepted GOX mass G | Calibrated gas mass meter, or gas volume with traceable density/composition/T/P/Z conversion; liquid mass meter or tare/heel-corrected weighing. Reconcile tank balances, production and accepted custody transfers for each state separately. | kg; native volume records retained | Continuous meters; every custody transfer; monthly reconciliation | Complete common operating year | One named plant/train and declared gate | per 1 kg reference flow | Calibration, density method, certificates of analysis, delivery/stock reconciliation and uncertainty |
| cp_energy | asu | Electricity | Meter hierarchy and bills | Meter id and supply voltage; supply provider; kWh; common and product-specific stage meters; runtime/load; regeneration cycles; power-requirement model e_i; pool assignment | Calibrated electricity meter hierarchy reconciled to bills; record each stage independently. Record transformation and losses once; convert kWh to MJ. Validate the causal model against real equipment/power records at actual purity, pressure and output mix. | kWh; MJ; kWh/kg for allocation evidence | Continuous or shift totals; monthly meter/bill reconciliation | Same operating year and equipment configuration as cp_products | Same ASU; named utilities and output states | per 1 kg reference flow | Meter calibration, bills, stage reconciliation, model validation and uncertainty |
| cp_air | asu | Resource intake and atmospheric returns | Gas measurement and physical balance | Air/vent meter ids; stream positions; gas volumes; T/P/Z; wet/dry basis; N2/O2/Ar composition; humidity; CO2 and other actual ambient impurities; tailgas/purge/vent flows; product losses | Measure inlet and each actual outlet with calibrated gas meters and representative composition sampling, including startup/loading events; convert each component to kg with traceable density or composition calculations. Document gross ambient impurity returns and any actual species relocation/net generation separately. | kg; original gas volume and T/P/composition | Continuous flow; representative composition across operation; every loss event | Same complete period as cp_products | Named inlet and every actual air-release point of the ASU | per 1 kg reference flow | Gas-meter and analyser calibration, sampling locations, species balances, humidity correction and uncertainty |
| cp_water | asu | Cooling make-up, condensate, bleed, evaporation and direct discharge | Water balance, meters and analyses | Flow/receiver ids; water volume and density/temperature; makeup; condensate; evaporation; bleed; direct discharge; oil, dissolved salts, metals, pH and other actually identified pollutants; stock changes | Calibrated water meters or weighing; paired flow/concentration sampling for each separate drain and actual receiver. Reconcile water mass including intake humidity and stocks. Evaporation is measured or derived by a closed measured balance, with residual uncertainty disclosed, not a fixed loss percentage. | kg; m3; original laboratory units | Continuous/shift flow; representative paired sampling; monthly balance | Same complete period as cp_products | Named cooling system/drains and actual treatment or freshwater receivers | per 1 kg reference flow | Calibration, density records, flow-sample synchronisation, wastewater acceptance and water-balance residuals |
| cp_consumables | asu | Each adsorbent, filter and lubricant | Receipts, stock and maintenance records | Row and supplier SKU; dry/wet supplied mass; composition/binder/additives; water fraction; actual service interval and stock changes; equipment id | Weigh replacements or reconcile traceable receipts/issue/stock records by one material grade. Cover the actual replacement service period, allocate the serviced equipment and keep the interval evidence; do not treat a bed charge as consumed every operating cycle. | kg | Every receipt/replacement; monthly stock reconciliation | Actual full service interval with explicit allocation to the collection year | Named equipment within the same ASU | per 1 kg reference flow | Weighing/stock trace, supplier SDS/specification, replacement/service logs and uncertainty |
| cp_waste | asu | Each separate removed solid or oil waste | Weighing and receiver manifests | Row; actual material composition; moisture/oil contamination; removed mass; in/out stocks; receiver and acceptance route; cartridge/dust mass split | Weigh each segregated waste at its boundary, reconcile maintenance removal and authorised receiver records. Do not combine alumina, sieve, filters and oil; do not count removed dust twice or assume recycling credit. | kg | Every removal and shipment; monthly reconciliation | Same collection year plus actual material service interval | Named waste generation and transfer points | per 1 kg reference flow | Scale calibration, waste manifests, contamination tests, receiver acceptance and stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| joint_normalization | all inventory rows | Joint normalized amount = measured boundary exchange amount / G; G = accepted final gaseous oxygen mass in kg in the same period. Keep original totals, each meter unit and measured unit conversions. GOX output is exactly 1 kg. This normalizes the joint inventory, not a product-specific allocated result. | cp_products; cp_energy; cp_air; cp_water; cp_consumables; cp_waste | Joint physical inventory per 1 kg reference flow | eiga-air-gases-pcf-2026 |
| component_balance | physical_ledger | For component k: inlet + opening stock = sum of measured product masses × their component-k mass fractions + external waste/air/water exits + closing stock. Show internal equal-mass links and residuals with their measurement uncertainty. No nominal atmospheric composition or purity default closes a balance. | cp_products; cp_air; cp_water; cp_consumables; cp_waste | Species/material/water balance with stated residual | linde-air-separation-2019; jrc-cww-bref-2016 |
| gas_mass_conversion | gas_volume_basis | Gas component mass = original measured gas volume × validated gas density at the same T/P/Z/wet-dry/composition basis × component mass fraction. A normal-volume meter uses its own declared reference T/P and moisture convention; pressure gauges are converted to absolute pressure with a measured ambient pressure record. | cp_products; cp_air | Traceable kg for the specified gas/component | eiga-air-gases-pcf-2026 |
| liquid_mass_conversion | liquid_basis | Liquid product mass = measured liquid volume × validated actual liquid density, or measured gross loaded mass − tare − retained heel where applicable. Keep the actual measurement boundary and opening/closing inventory correction explicit. | cp_products | Accepted liquid product kg | eiga-air-gases-pcf-2026 |
| water_load | cp_water | Actual pollutant load = sum of paired concentration × discharge volume for matching time intervals, with actual laboratory-unit conversion; identify the chemical species and receiver. An aggregate COD/TOC or total nitrogen test is not a substitute for a distinct species identity, and overlapping totals must not be added. | cp_water | Atomic species load and direct discharge volume | jrc-cww-bref-2016 |
| electricity_conversion | electricity | Electrical energy in MJ = measured kWh × 3.6; reconcile common plus directly assigned meters to the site boundary total before any allocation. | cp_energy | Joint and directly attributable electricity MJ | eiga-air-gases-pcf-2026 |
| burden_allocation | burden_ledger | Apply allocation_subdivide, allocation_power and allocation_conservation to real period totals. Store every m_i, e_i, W_i, a_i, directly assigned D_i and shared C. Report uncertainty/sensitivity and product-specific results separately from the joint inventory. | cp_products; cp_energy | Conserved product-specific burden ledger | eiga-air-gases-pcf-2026 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | Every nonzero exchange must have one exact physical identity and compatible native unit/provider basis. A blank non-reference UUID is a disclosed identity gap, not permission to replace it with a nearby substance, treatment route or correction flow. | Direct identity records plus supplier/SDS/receiver evidence |
| dq_scope | asu | Verify the actual reference configuration. A fired utility, chemical refrigerant, cooling-water dose, hydrogen catalyst, imported gas or new emitted species cannot be silently omitted. Check maintenance particulate releases by real size/collection evidence; mutually exclusive PM size fractions only, with captured dust separate from airborne releases. | Process flow sheet, equipment register, SDS/BOM, drain/vent survey and maintenance records; eiga-asu-environment-2025 |
| dq_period | all collection protocols | Align sites, periods and stocks. Retain an actual full replacement interval for consumables; preserve original receipts, totals and conversions before normalization. Missing records are pending, not observed zeros. | Calibration and raw-data audit; eiga-air-gases-pcf-2026 |
| dq_balance | physical_ledger | Reconcile whole-ASU mass, O2/N2/Ar, water and material balances with measured impurity/stock information. Determine allowable residuals from actual measurement uncertainty and investigate unexplained differences; never invent a numerical tolerance or force closure. | cp_products; cp_air; cp_water; cp_consumables; cp_waste |
| dq_allocation | burden_ledger | Validate complete power-requirement evidence at actual states, pressures/purities and output mix; conserve shared burden and each raw meter. Flow-property coefficients and literature benchmarks are not foreground defaults. | cp_energy; cp_products; eiga-air-gases-pcf-2026 |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | gox | Verify every boundary_applicability configuration and gate condition from actual equipment/supply records. Require one GOX reference output of 1 kg; verify net gate G > 0, cryogenic gas route, certified composition, full qualifiers and native Mass/kg. Reject an elementary oxygen identity or a liquid reference used for gas. | eiga-air-gases-pcf-2026 |
| validate_joint_outputs | asu | Verify all actual gaseous/liquid species outputs and their independent accepted masses, stock changes, off-spec losses and conditions. Missing unproduced outputs need evidence; physical co-product mass cannot be multiplied by allocation share or silently deleted. | eiga-air-gases-pcf-2026; linde-air-separation-2019 |
| validate_ledger | physical_ledger | Require the actual process graph, equal-amount internal links, whole-mass/component/water balances and uncertainty-based residual review; environmental O2/N2/Ar intake/returns cannot stand in for product sales. Ambient CO2 return is not recovered CO2 product or an invented removal credit. | linde-air-separation-2019; eiga-asu-environment-2025 |
| validate_uuid_units | all inventory rows | Verify each selected physical identity, phase, species/CAS where present, reference property and unit against original fields. Each used upstream/treatment provider must additionally meet quantity, composition and boundary compatibility; a successful identity lookup is insufficient. Explicitly retain unresolved exact non-reference identities. | eiga-asu-environment-2025 |
| validate_allocation | burden_ledger | Verify direct assignment/common pool separation, complete power-model inputs, positive weights, shares summing to one, conservation of every shared burden and distinct product-specific denominators. Missing causal evidence blocks allocated product results, not honest retention of joint physical records. | eiga-air-gases-pcf-2026 |
| validate_emissions | site_survey | Check vents, water receiver analyses and maintenance releases. Waste sent to treatment cannot also be a direct environmental discharge. Any actual newly identified chemical/refrigerant/fuel or emission is a separately evidenced atomic flow before dataset completion; retain real biogenic CO2 even when a greenhouse-gas indicator excludes it. | eiga-asu-environment-2025; jrc-cww-bref-2016 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared plant-gate cryogenic-gas foreground data, with complete joint process data and separately evidenced allocated product results |
| allowed_use | Match the actual species, phase, purity, pressure, moisture, gate, site/time and provider unit; use separately disclosed common and product-specific burden data |
| excluded_use | All-industrial-gas proxy; hydrogen or CO2 recovery; PSA/membrane; chemical solutions or gas blends; cylinder/customer logistics; assigning unreviewed allocation or pretending incomplete identity/foreground evidence is complete |
| required_metadata | PCR id/version; dataset reference product and unit; complete qualifiers; operating period/configuration; linked inventory/protocol/source ids; supplier and treatment boundaries; balances; allocation model and uncertainty |
| required_quality_disclosure | Original measured totals and unit conversions; mass/water residuals; actual coverage and missing exact identities; declared absence/presence of every conditional stream; joint versus allocated representation; plant-gate/full-LCI departure from EIGA CFP scope |
| update_trigger | Process/utility/adsorbent change; purity/pressure/state change; new output or receiver; meter/density/provider correction; new contaminants; allocation model/period update; relevant technical source revision |

## 11. Data Sources

External sources below support method rules only; they do not supply default quantities. Retrieved 2026-10-13. EIGA 167 is the actual July 2026 revision 167/26. Its customer-gate PCF exclusions and PP33 coefficients are not applied as general LCI defaults. CWW is used for chemical-sector stream-register and monitoring principles; no ASU-specific legal BAT applicability, BAT emission limit or generic pollutant recipe is asserted.

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| eiga-asu-environment-2025 | handbook | EIGA, Environmental Impacts of Air Separation Units, Doc 94/25, February 2025. https://www.eiga.eu/uploads/documents/DOC094.pdf | §2.1 cryogenic scope; §4.3 environmental aspects, filtration, compression, cooling/drains, maintenance and waste; Appendix 2 process topology. Actual stream survey/collection, no illustrative energy/loss defaults. |
| eiga-air-gases-pcf-2026 | handbook | EIGA, Methodology to Establish the Product Carbon Footprint of Air Gases, Doc 167/26, July 2026. https://www.eiga.eu/uploads/documents/DOC167.pdf | §4.1 (printed5/PDF8) species/state scope and mass/pressure/purity declared unit; §4.3 annual data; §§4.5–4.6 (printed6–8/PDF9–11) inventory, power allocation/conservation and PP33 limitations. PCR gate/full-LCI departures explicitly disclosed. |
| linde-air-separation-2019 | handbook | Linde Engineering, History and technological progress of air separation, 2019. https://assets.linde.com/-/media/global/engineering/engineering/home/products-and-services/process-plants/air-separation-plants/air-separation-plants-history-and-technological-progress-2019.pdf | Printed/PDF pp10–11, illustrated compression, water cooling, regenerable sieve purification, turbine refrigeration, internal product pumping and O2/N2/Ar rectification/return links; producer example only, no fixed pressure/recipe/yield. |
| jrc-cww-bref-2016 | official_guidance | European Commission JRC, Common Waste Water and Waste Gas Treatment/Management Systems in the Chemical Sector BREF, 2016. https://publications.jrc.ec.europa.eu/repository/bitstream/JRC103096/jrc103096_cww_bref_10_2016.pdf | BAT2 printed543/PDF573: source process/stream register and stream characteristics; BAT3/4 printed544/PDF574: flow/parameter monitoring and matching flow/concentration evidence. Adapted to physical separation; no automatic legal limits or frequency defaults. |

