---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-tunas-skipjack-or-stripe-bellied-bonito-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled

## 1. Scope and Applicability

This PCR guides foreground data package construction for farmed tunas, skipjack, or stripe-bellied bonito placed on the market as live, fresh, or chilled product. It covers declared broodstock, egg, larval, juvenile, or supplier stock for full-cycle aquaculture where present, wild juvenile or subadult stock captured for capture-based aquaculture when legally and traceably transferred into controlled grow-out or fattening, cage, net-pen, tank, offshore, or other declared aquaculture husbandry, harvest, grading, stunning, bleeding where performed, live holding, chilling, packaging, and release at the declared gate.

Covered products include aquaculture-produced or aquaculture-fattened tunas, skipjack, stripe-bellied bonito, and declared tuna-like scombrid species within the product category when the dataset shows controlled farming, ranching, or fattening records. Excluded products are wild tunas, skipjack, or stripe-bellied bonito that are only captured, landed, held, chilled, graded, or dispatched; frozen tuna products; fillets, loins, steaks, fish meat, canned, cooked, smoked, dried, salted, prepared, or preserved products; fish seed sold as a separate aquaculture input; roe, oil, offal, mortalities, and processing residues modelled as separate products.

Capture-based aquaculture is within this PCR only when the reporting dataset declares the wild stock capture or purchase, transfer, stocking event, controlled holding or fattening period, feed or bait use, mortalities, escapes, and marketable product output. A dataset with only wild capture and post-capture handling belongs under the corresponding wild product PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-tunas-skipjack-or-stripe-bellied-bonito-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04252`, `Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled` |
| covered_products | farmed, ranch-raised, or aquaculture-fattened tunas, skipjack, stripe-bellied bonito, and declared tuna-like scombrid species sold live, fresh, or chilled from declared hatchery, nursery, cage, net-pen, tank, offshore, capture-based aquaculture, or other controlled aquaculture systems |
| excluded_products | wild tuna products that are only captured, landed, held, chilled, graded, or dispatched; frozen tuna; fillets; loins; steaks; fish meat; canned, cooked, smoked, dried, salted, prepared, or preserved products; non-tuna farmed fish; ornamental fish; fish seed sold as seed; roe, oil, offal, mortalities, sludge, or processing residues as separate products |
| representative_product | live or chilled farmed tuna, skipjack, or stripe-bellied bonito at declared species, culture route, market size, product form, holding condition, and gate |
| production_route | hatchery or supplier stock route where present, or capture-based wild juvenile or subadult stock capture and transfer, followed by controlled grow-out or fattening, husbandry, harvest, live holding or chilling, packaging, and declared gate release |
| market_state | live, fresh, or chilled tuna-category fish with declared species, aquaculture route, stock origin, product basis, size grade, harvest and holding condition, packaging state, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | farmed tunas, skipjack, or stripe-bellied bonito as live, fresh, or chilled market product |
| How much | 1 kg |
| How well | declared species, farmed or aquaculture-fattened proof, stock origin, culture route, live/fresh/chilled state, whole or declared product basis, size grade, harvest and holding condition, and gate |
| How long or cycle | one aquaculture production batch, fattening campaign, harvest lot, or reporting period normalized to marketable product output |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled `2d170776-6886-4a54-9341-ee064d0f182a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and scientific name where available; farmed, ranch-raised, or capture-based aquaculture proof; stock origin as hatchery, supplier farm, wild juvenile, or wild subadult; capture area, permit, transfer route, and stocking date for capture-based routes; culture system; product state; whole, bled, gutted, live, fresh, chilled, or declared product basis; size grade, length, or mean individual mass; moisture, drainage, or ice-excluded basis; geography and declared gate; holding or chilling duration; feed regime, fresh bait, formulated feed, and feed supplier disclosure; cage, net-pen, tank, or offshore site; health, welfare, biosecurity, permit, certification, mortality, and escape status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass is the primary reference basis. Count, cage, tow, transfer, box, tub, live-holding, or size-grade records may be used only when net mass, count per kg or mean individual mass, product form, and sampling or tare method are retained.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg farmed tunas, skipjack, or stripe-bellied bonito in the declared live, fresh, or chilled product form. |
| `farmed_production_evidence` | all datasets | Record identity and production evidence | declared records | Dataset records must show a foreground aquaculture production, ranching, controlled holding, or fattening period. Wild capture followed only by holding, chilling, grading, or dispatch is outside this PCR. |
| `capture_based_stock_origin` | capture-based aquaculture and tuna ranching | Stock capture, transfer, and stocking records | declared records | Capture-based routes must retain source fishery or supplier, capture area, permit, date, size or mass, transfer loss, stocking cage or site, and evidence that stock entered controlled aquaculture. |
| `product_form_mass_basis` | whole, gutted, bled, live, fresh, chilled, drained, or iced records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Product mass must state live whole weight, chilled whole weight, gutted mass, bled mass, drained mass, ice-excluded mass, or another contract-declared basis. Convert only with measured yield evidence. |
| `count_to_mass_conversion` | stocking, mortality, grading, harvest, sales, and size-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count-based records must include count per kg or mean individual mass, length or size grade where used, sampling method, and product form before normalization to kg reference product. |
| `stock_lot_identity` | broodstock, eggs, larvae, juveniles, transferred wild fish, supplier fish, and stocked cages | Mass or count | kg, item, egg count, or life-stage count | Stock records must retain species, life stage, origin, capture or supplier evidence, batch or lot, count, mass where measurable, health status, transfer date, and mortality during transfer. |
| `feed_and_bait_mass_basis` | formulated feed, fresh bait, frozen bait, live feed, medicated feed, and supplementary feed | Mass | kg | Feed and bait records must state dry, wet, as-fed, thawed, live, medicated, or declared basis. Convert between bases only with measured moisture, supplier data, or retained specification. |
| `water_temperature_salinity_and_volume` | hatchery, nursery, grow-out, live holding, washing, chilling, and discharge | Temperature, salinity, mass, or volume | deg C, ppt, kg, or m3 | Preserve controlled water volume, temperature, salinity, pH, dissolved oxygen, recirculation, make-up water, water exchange, drainage, and discharge basis. Ambient open-sea water is a boundary condition unless pumped, treated, exchanged, or discharged under foreground control. |
| `energy_fuel_and_vessel_inventory` | pumps, aeration, oxygenation, feeding equipment, live holding, chilling, harvest, towing, vessels, vehicles, and delivery | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, oxygen, or energy carrier units before normalizing to the reference flow. Vessel fuel for capture-based stocking and farm servicing must be separated when records allow. |
| `chemical_health_and_welfare_treatment_basis` | oxygen, disinfectants, medicines, anesthetics, vaccines, probiotics, cleaning agents, and welfare treatments | Mass, volume, active ingredient, dose, or gas amount | kg, L, g active ingredient, dose, or m3 gas | Record product quantity, active ingredient or dose where applicable, treatment purpose, diagnosis or health-plan link, legal status, withdrawal or harvest eligibility consequence, and treated biomass. |
| `packaging_and_ice_basis` | boxes, bags, liners, insulated containers, labels, ice, gel packs, oxygenated live packs, and pallets | Mass or item count | kg or item | Packaging, ice, oxygenated live packs, and containers must retain material type, item count, tare or fill mass, reuse rate, and destination before normalization. |

Key product attributes are foreground qualifiers recorded alongside the mass reference flow:

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species | scientific and common name | required for all datasets |
| Aquaculture route | full-cycle hatchery route, supplier juvenile route, capture-based aquaculture, ranching, fattening, cage, net pen, tank, offshore, or declared variant | required for boundary, stock origin, feed, mortality, escape, and allocation interpretation |
| Biological starting condition | broodstock, eggs, larvae, hatchery juveniles, supplier juveniles, wild juveniles, wild subadults, or transferred fish | required to distinguish farmed production from wild capture |
| Product form | live whole, fresh whole, chilled whole, bled, gutted, head-on gutted, or declared variant | required for mass-basis interpretation |
| Size grade | count per kg, mean individual mass, length, market grade, or harvest weight class | required when count or grade records are used |

## 5. System Boundary

The default boundary covers foreground-controlled farmed tuna-category production to the declared farm, harvest, packhouse, dispatch, or delivery gate:

1. Broodstock, egg, larval, juvenile, or supplier stock sourcing for full-cycle aquaculture where present, or capture-based wild juvenile or subadult stock capture, purchase, transfer, and stocking when the aquaculture route depends on wild stock.
2. Controlled grow-out, ranching, or fattening husbandry, including stocking, feeding with fresh bait or formulated feed, water control where relevant, cage or net-pen operation, vessel servicing, aeration or oxygenation where relevant, health management, welfare handling, escape prevention, mortalities, residue management, and directly controlled maintenance.
3. Harvest, grading, stunning or bleeding where performed, washing, live holding, chilling, packaging, and declared gate release.
4. Delivery to the declared gate when the reference flow is delivered product rather than farm, harvest, dispatch, or packhouse gate product.

Capital goods and long-lived infrastructure are included only when the declared data package scope requires them. Purchased juveniles, captured stock, feed, bait, packaging, ice, oxygen, electricity, fuel, chemicals, health treatments, cage materials, and vessel services require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_hatchery_supplier_or_capture_based_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04252`, `Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled` |
| recursive_input_rule | farmed tuna broodstock, eggs, larvae, juveniles, or supplier stock used to produce market product are recorded as declared biological starting conditions with supplier, hatchery, farm, source, life-stage, capture-based status, and health disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | hatchery, supplier, juvenile, capture-based stocking, feed, bait, or service dataset, or documented source, species, batch, count or mass, life stage, capture or supplier permit, transfer loss, health or biosecurity status, and certification or permit evidence |
| disclosure | disclose species, culture route, biological starting condition, farmed production evidence, capture area and permit where capture-based, stocking density or biomass, cage or tank system, feed or bait regime, feed supplier and feed basis, marine ingredient or bait species where available, water source and temperature where controlled, dissolved oxygen and salinity where relevant, vessel fuel and farm servicing, health treatments, welfare handling, mortality and escape records, harvest and holding conditions, product form, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| stock_capture_hatchery_transfer_and_stocking | Stock Capture, Hatchery, Transfer, and Stocking | required | biological starting condition must be declared; capture-based stock capture and transfer are included when used; on-site hatchery and nursery rows are included when controlled by the reporting operator | foreground/upstream bridge | accepted juveniles or stocked tuna entering controlled grow-out or fattening |
| growout_fattening_and_husbandry | Grow-out, Fattening, and Husbandry | required |  | foreground production | harvest-size farmed tuna-category fish before final handling |
| harvest_live_holding_chilling_and_packout | Harvest, Live Holding, Chilling, and Pack-out | required |  | foreground conditioning and gate release | declared marketable live, fresh, or chilled product |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond the farm, harvest, dispatch, or packhouse gate | foreground transport | delivered product at declared gate |

### Process: Stock Capture, Hatchery, Transfer, and Stocking (`stock_capture_hatchery_transfer_and_stocking`)

#### Inputs

##### Product flows

###### Hatchery, supplier, or captured juvenile stock input (`biological_stock_input`)

This row records purchased, internally produced, transferred, or capture-based tuna stock entering the declared aquaculture route.

- Selected flow: Juvenile tuna `20aa3377-d508-4626-bddd-867de01d7ba7`; route-specific broodstock, egg, larval, supplier fish, or captured wild stock selected from foreground records
- Flow property / unit: Mass or count with life stage / kg, item, egg count, or stage count
- Amount rule: measured count, mass where measurable, life stage, accepted quantity, capture or supplier origin, and transfer loss entering hatchery, grow-out, or fattening
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_origin_capture_transfer_and_stocking_records`
- Sources: `fao-atlantic-bluefin-tuna-culture`, `fao-capture-based-aquaculture-2008`, `fao-capture-based-aquaculture-guidelines-2011`, `asc-farm-standard-2025`
- Range: Provisional biological stock screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 20
  - Unit: kg biological stock live mass/kg marketable product
  - Basis: broad first-pass juvenile, subadult, or supplier stock live mass input relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Transfer water, oxygen, fuel, and handling inputs (`transfer_water_oxygen_fuel_and_handling_inputs`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; route-specific oxygen, towing, vessel service, anesthetic, or transfer material selected from site records
- Flow property / unit: Mass, volume, fuel, or energy / kg, m3, L, MJ, or kWh
- Amount rule: measured or allocated water, oxygen, vessel fuel, towing, transport, anesthetic, transfer equipment, and handling inputs by stocking event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per stocking event and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_origin_capture_transfer_and_stocking_records`
- Sources: `fao-capture-based-aquaculture-guidelines-2011`, `asc-farm-standard-2025`
- Range: Provisional transfer input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg, m3, L, MJ, or kWh/1,000 kg marketable product
  - Basis: broad first-pass transfer and stocking support input check
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Transfer mortalities and rejected stock (`transfer_mortalities_and_rejected_stock`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; route-specific mortality, rejected stock, and organic residue selected from site records
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured mortality count, mortality mass where available, rejected stock, residue mass, disposal route, and recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per stocking event and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_residue_and_escape_records`
- Range: Provisional transfer mortality screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg mortality/kg stock input
  - Basis: broad mortality and rejection check during capture, transfer, acclimation, and stocking
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Accepted stock for grow-out or fattening (`accepted_stock_for_growout_or_fattening`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Juvenile tuna `20aa3377-d508-4626-bddd-867de01d7ba7`
- Flow property / unit: Mass or count with mean size / kg or item
- Amount rule: calculated accepted stock after capture, receipt, transport, acclimation, grading, and transfer losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: accepted stock entering controlled grow-out or fattening
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stock_origin_capture_transfer_and_stocking_records`
- Range: Stock acceptance mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg biological stock input
  - Basis: accepted stock fraction after capture or receipt, transport, acclimation, grading, and transfer
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Grow-out, Fattening, and Husbandry (`growout_fattening_and_husbandry`)

#### Inputs

##### Product flows

###### Stocked tuna entering grow-out or fattening (`stocked_tuna_entering_growout_or_fattening`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Juvenile tuna `20aa3377-d508-4626-bddd-867de01d7ba7`
- Flow property / unit: Mass or count / kg or item
- Amount rule: accepted stock allocated to each cage, tank, net pen, or site with stocking date, mean mass, count, and biomass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stock_origin_capture_transfer_and_stocking_records`
- Sources: `fao-atlantic-bluefin-tuna-culture`, `asc-farm-standard-2025`
- Range: Provisional stocked biomass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 20
  - Unit: kg stocked biomass/kg marketable product
  - Basis: broad first-pass stocked biomass relative to marketable product
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed, fresh bait, and feed additives (`feed_fresh_bait_and_feed_additives`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Fresh bait `40685ba7-0e7f-41bc-92b0-cec9e6696f19`; Fry feed `3b09065d-9675-4dad-8d0e-1035b5cca324`; route-specific grow-out feed, bait fish, live feed, medicines, supplements, or additives selected from foreground records
- Flow property / unit: Mass, volume, active ingredient, or dose / kg, L, g active ingredient, or dose
- Amount rule: measured formulated feed, fresh bait, frozen bait, live feed, medicated feed, additives, feeding losses, and supplier or bait species basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out or fattening batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_bait_and_feed_composition_records`
- Sources: `fao-atlantic-bluefin-tuna-culture`, `fao-capture-based-aquaculture-2008`, `asc-feed-standard-2026`, `asc-farm-standard-2025`
- Range: Provisional feed and bait screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: kg feed or bait/kg marketable product
  - Basis: broad first-pass feed or bait input check for tuna hatchery, grow-out, ranching, and fattening routes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grow-out water, energy, fuel, cage materials, and services (`growout_water_energy_fuel_cage_materials_and_services`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; route-specific oxygen, netting, cage, anchor, float, boat service, cleaning, diving, monitoring, or maintenance input selected from site records
- Flow property / unit: Mass, volume, energy, fuel, item count, length, or service quantity / kg, m3, kWh, L, MJ, item, m, or service unit
- Amount rule: measured or allocated water where controlled, electricity, vessel fuel, cage materials, net cleaning, monitoring, oxygenation, farm servicing, and maintenance inputs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per culture unit and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy_vessel_cage_and_site_records`
- Sources: `fao-capture-based-aquaculture-guidelines-2011`, `asc-farm-standard-2025`
- Range: Provisional grow-out input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg, m3, kWh, L, MJ, item, or m/1,000 kg marketable product
  - Basis: broad first-pass cage, vessel, energy, water, oxygen, and site input check
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Mortalities, uneaten feed, residues, and escaped fish (`mortalities_uneaten_feed_residues_and_escaped_fish`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; route-specific mortalities, uneaten feed, fish residue, net cleaning residue, escape organism, and waste-treatment flow selected from site records
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured mortality count and mass, feed residue, sludge or organic residue, escape count where applicable, fate, disposal route, recovery route, and receiving environment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out or fattening batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_residue_and_escape_records`
- Sources: `asc-farm-standard-2025`
- Range: Provisional grow-out residue screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg residue/kg marketable product
  - Basis: broad first-pass mortality, residue, and uneaten feed check
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvest-size farmed tuna biomass (`harvest_size_farmed_tuna_biomass`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled `2d170776-6886-4a54-9341-ee064d0f182a`
- Flow property / unit: Mass / kg
- Amount rule: calculated harvest-size live biomass after stocking, growth, feed or bait inputs, mortalities, escapes, and grading
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: harvest-size biomass entering final handling
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_product_packout_records`
- Range: Harvest biomass mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg harvest-size biomass/kg stocked biomass
  - Basis: broad growth, survival, and fattening mass-balance check
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest, Live Holding, Chilling, and Pack-out (`harvest_live_holding_chilling_and_packout`)

#### Inputs

##### Product flows

###### Harvested tuna entering final handling (`harvested_tuna_entering_final_handling`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled `2d170776-6886-4a54-9341-ee064d0f182a`
- Flow property / unit: Mass / kg
- Amount rule: measured harvested biomass entering grading, bleeding, live holding, chilling, packing, or dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_product_packout_records`
- Sources: `codex-cxc-52-2003`, `asc-farm-standard-2025`
- Range: Final handling input QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg harvested biomass/kg marketable product
  - Basis: broad yield and handling-loss check for live, fresh, or chilled product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Chilling, packaging, water, electricity, and ice inputs (`chilling_packaging_water_electricity_and_ice_inputs`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Packaging, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`; Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; route-specific ice, gel pack, oxygen, live-pack material, box, liner, refrigerant, or pallet selected from site records
- Flow property / unit: Mass, volume, energy, or item count / kg, m3, kWh, or item
- Amount rule: measured packaging, ice, chilling, washing, live-holding oxygen, electricity, refrigerant service, and dispatch preparation quantities
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_ice_chilling_and_dispatch_records`
- Sources: `codex-cxc-52-2003`, `asc-farm-standard-2025`
- Range: Provisional final handling input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg, m3, kWh, or item/1,000 kg marketable product
  - Basis: broad first-pass packaging, ice, water, live-holding, and chilling input check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Handling rejects, bleed water, packaging waste, and residues (`handling_rejects_bleed_water_packaging_waste_and_residues`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`; route-specific rejects, bleed water, wastewater, packaging waste, viscera, and fish residue selected from site records
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured rejected fish, handling losses, bleed water, wastewater, packaging waste, residue mass, disposal route, recovery route, and receiving environment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_residue_and_escape_records`
- Range: Final handling residue QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg residue/kg marketable product
  - Basis: broad reject, bleed-water solids, packaging waste, and residue check
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Marketable live, fresh, or chilled farmed tuna (`marketable_live_fresh_or_chilled_farmed_tuna`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled `2d170776-6886-4a54-9341-ee064d0f182a`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference output after declared grading, chilling, drainage, packaging tare exclusion, and product-form normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Range: Fixed reference output QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: fixed reference flow output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Identity reference (`identity_reference`)

### Process: Delivery to Declared Gate (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Delivery fuel, electricity, refrigerant service, and packaging support (`delivery_fuel_electricity_refrigerant_and_packaging_support`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`; Electricity `f872677d-2f66-428a-a94e-f0fba61231df`; route-specific transport service, refrigerant service, ice, live-holding oxygen, or reusable packaging support selected from site records
- Flow property / unit: Fuel, energy, mass, or transport service / L, MJ, kWh, kg, or tonne-km
- Amount rule: include only when the declared reference flow is delivered beyond the farm, harvest, dispatch, or packhouse gate; record distance, mode, load factor, temperature control, live-holding condition, and return logistics where relevant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg delivered reference product or tonne-km
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_records`
- Range: Provisional delivery screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: tonne-km/1,000 kg reference product
  - Basis: broad first-pass delivery activity check when delivery is in scope
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Delivered farmed tuna at declared gate (`delivered_farmed_tuna_at_declared_gate`)

This row records the selected exchange within the declared process and system boundary.

- Selected flow: Farmed tunas, skipjack or stripe-bellied bonito, live, fresh or chilled `2d170776-6886-4a54-9341-ee064d0f182a`
- Flow property / unit: Mass / kg
- Amount rule: delivered mass at the declared gate, excluding transport packaging tare and ice unless contractually part of the product basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: delivered reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_delivery_records`
- Range: Delivered product mass QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg delivered reference product
  - Basis: delivered reference product mass after route allocation and product-basis normalization
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

## 7. Allocation and Co-product Handling

| allocation_id | Applies to | Rule | Required data | Source |
| --- | --- | --- | --- | --- |
| `single_reference_product_default` | marketable live, fresh, or chilled farmed tuna output | Treat the declared reference product as the single reference product unless roe, offal, mortalities, residues, or processing outputs are intentionally recovered as co-products. | marketable mass, rejected mass, recovered co-product mass, destination, and revenue or physical relation where co-products are claimed | `mass-balance-identity` |
| `capture_based_stock_boundary` | capture-based aquaculture routes | Do not allocate away wild stock capture, transfer losses, or mortality by excluding them from the foreground package. Assign them to the aquaculture product unless a reviewed upstream wild-stock dataset and allocation rule are declared. | stock capture or purchase records, transfer loss, accepted stocked biomass, discarded or dead stock, and permit evidence | `fao-capture-based-aquaculture-guidelines-2011` |
| `shared_site_and_cage_allocation` | multi-species, multi-lot, or shared-service farms | Allocate shared electricity, vessel fuel, oxygen, site service, net cleaning, and holding infrastructure by measured meter, batch log, biomass-time, cage-time, or another declared physical driver before economic allocation. | meters, service logs, cage or tank occupancy, biomass-time, harvest mass, and allocation driver | `asc-farm-standard-2025` |
| `packaging_and_delivery_allocation` | mixed-product packing or delivery | Allocate packaging, ice, live-holding, refrigeration, and delivery loads by measured product mass, package count, pallet, trip, temperature-control zone, or tonne-km as applicable. | dispatch records, package counts, load mass, distance, temperature condition, and return logistics | `codex-cxc-52-2003` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_stock_origin_capture_transfer_and_stocking_records` | `stock_capture_hatchery_transfer_and_stocking`; `growout_fattening_and_husbandry` | biological stock, capture-based stock, transfer, accepted stocking | hatchery record, supplier invoice, capture log, permit, transfer log, stocking log, mortality log | species, origin, capture area, permit, supplier, life stage, count, mean mass, total mass, transfer route, stocking date, cage or tank, accepted count, accepted mass, transfer mortality | batch records reconciled to cage or tank inventory | kg, item, date, permit id | each stocking event | full reporting period or production campaign | hatchery, supplier, capture vessel, transfer route, cage, tank, or farm site | reconcile source stock plus transfers minus mortalities and rejects to accepted stocked biomass; normalize to marketable output | supplier documents, permits, transfer logs, cage inventory, mortality records, and manager sign-off |
| `cp_feed_bait_and_feed_composition_records` | `growout_fattening_and_husbandry` | feed, fresh bait, formulated feed, additives, feeding losses | feed invoice, feed log, bait purchase, bait species log, formulation sheet, feeding record | feed or bait type, supplier, species, mass, dry/wet/as-fed basis, moisture, feeding date, cage or lot, uneaten feed, additive or medication, marine ingredient disclosure | weigh tickets, supplier declarations, feed-system records, and stockkeeper logs | kg, %, dose, date | each feed delivery and feeding period | full grow-out or fattening campaign | each cage, tank, site, and feed supplier | sum feed or bait mass by batch and basis; convert only with moisture or supplier evidence; normalize to marketable output | invoices, feed declarations, feed logs, formulation sheets, and reconciliation to inventory |
| `cp_water_energy_vessel_cage_and_site_records` | `growout_fattening_and_husbandry`; `stock_capture_hatchery_transfer_and_stocking` | water, oxygen, electricity, fuel, vessel service, cage materials, site service | meter log, fuel invoice, vessel log, oxygen log, cage maintenance log, net cleaning log, service invoice | electricity, fuel, oxygen, water, vessel hours, distance, cage, net, anchor, float, cleaning, maintenance, allocation driver, site and batch | metered records, invoices, vessel logs, and maintenance records | kWh, L, MJ, kg, m3, item, m, h, tonne-km | monthly and each major operation | full reporting period or campaign | farm site, vessel, cage, tank, hatchery, or delivery route | allocate shared records by direct meter, operation log, biomass-time, cage-time, or declared physical driver | meter readings, invoices, service logs, allocation worksheet, and calibration records where relevant |
| `cp_mortality_residue_and_escape_records` | `stock_capture_hatchery_transfer_and_stocking`; `growout_fattening_and_husbandry`; `harvest_live_holding_chilling_and_packout` | mortalities, rejected stock, residue, uneaten feed, sludge, escapes, wastewater | mortality log, escape report, residue log, wastewater record, disposal note | date, species, count, mass, cause, cage or tank, fate, disposal route, recovery route, escape count, corrective action, receiving environment | daily husbandry records, incident reports, waste tickets, and treatment records | kg, item, m3, date | each event and monthly reconciliation | full reporting period or campaign | cage, tank, transfer route, harvest area, packhouse, or waste route | sum and classify by fate; reconcile stock balance and product mass; normalize to reference output | mortality records, waste transfer notes, escape incident files, treatment records, and supervisor review |
| `cp_harvest_product_packout_records` | `growout_fattening_and_husbandry`; `harvest_live_holding_chilling_and_packout` | harvest biomass, grading, product form, marketable output | harvest log, grading sheet, packout record, sales note, scale ticket | harvest date, species, cage or tank, live mass, product form, count, size grade, bleeding or gutting status, chilled or live state, rejected mass, marketable mass, destination | calibrated scales, grading records, sales records, and packhouse reconciliation | kg, item, grade, date | each harvest and packing lot | full reporting period or campaign | harvest site, live-holding unit, packhouse, or dispatch gate | reconcile harvested biomass plus purchases minus rejects and residues to marketable output; normalize all flows to 1 kg reference product | scale calibration, harvest sheets, packout records, dispatch records, and sales reconciliation |
| `cp_packaging_ice_chilling_and_dispatch_records` | `harvest_live_holding_chilling_and_packout` | packaging, ice, live holding, chilling, washing, refrigerant service | packaging invoice, ice log, temperature log, water meter, oxygen log, refrigerant service record, dispatch sheet | packaging material, item count, tare, ice mass, oxygen, water, electricity, refrigerant service, temperature, holding time, lot, destination | invoices, meters, temperature records, and dispatch records | kg, item, m3, kWh, deg C, h | each packing lot and monthly reconciliation | harvest, holding, packing, and dispatch period | packhouse, live-holding unit, cold room, dispatch gate | allocate to product lots by measured lot, package count, product mass, holding time, or temperature-control zone | invoices, temperature logs, calibration records, dispatch sheets, and operator review |
| `cp_delivery_records` | `delivery_to_declared_gate` | delivered product, transport energy, live or chilled delivery condition | delivery note, transport invoice, fuel record, route plan, temperature or live-holding log | origin, destination, distance, mode, load mass, fuel, electricity, ice, oxygen, temperature, live-holding duration, return logistics | carrier documents, vehicle logs, meter records, and dispatch reconciliation | kg, km, tonne-km, L, kWh, h, deg C | each delivery route | delivery period in declared scope | delivery route, vehicle, vessel, or carrier | calculate tonne-km and allocate fuel or service by load mass, distance, temperature zone, and return logistics where relevant | carrier invoice, route record, temperature log, and dispatch sign-off |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all inventory rows | normalized amount = collected amount / marketable reference product mass, with unit and product-form basis retained | collected amount, marketable product mass, product basis | kg, kWh, L, item, m3, or tonne-km per kg reference product | `mass-balance-identity` |
| `stock_acceptance_balance` | stocking and transfer | accepted stocked biomass = source stock mass + transferred-in mass - transfer mortalities - rejected stock - documented transfer losses | source stock, transfers, mortalities, rejects, transfer loss | accepted stocked biomass | `fao-capture-based-aquaculture-guidelines-2011` |
| `growth_and_survival_balance` | grow-out and fattening | harvest-size biomass = stocked biomass + biological growth - mortalities - escapes - rejects, checked against harvest records | stocked biomass, feed or bait records, mortalities, escapes, harvest records | harvest-size biomass and survival disclosure | `fao-atlantic-bluefin-tuna-culture`, `asc-farm-standard-2025` |
| `feed_or_bait_conversion_disclosure` | feed and bait rows | feed or bait ratio = feed or bait mass on declared basis / live biomass gain or marketable output; do not mix dry, wet, live, or thawed bases without conversion evidence | feed or bait mass, moisture or basis, biomass gain, marketable output | declared feed or bait ratio and basis | `asc-feed-standard-2026`, `fao-capture-based-aquaculture-2008` |
| `product_form_yield` | harvested and packed product | marketable product mass = harvested mass - rejected mass - bleed, gutting, drainage, ice, tare, and handling losses according to declared product basis | harvest mass, rejected mass, product-form records, packout records | marketable live, fresh, or chilled mass | `codex-cxc-52-2003` |
| `delivery_tonne_kilometres` | delivered reference product | tonne-km = delivered product mass in tonnes x one-way or contract-declared route distance; allocate temperature-control or live-holding inputs by load share | delivered mass, distance, route, load factor, temperature or live-holding condition | tonne-km and delivered product inventory | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and biological stock | Species, product category, farmed or aquaculture-fattened status, stock origin, capture-based status, culture route, product form, and declared gate must be explicit. | reference flow metadata, stocking records, permits, harvest records, and sales or dispatch records |
| `dq_capture_based_traceability` | capture-based aquaculture routes | Wild stock capture or purchase, permit, transfer loss, stocking event, controlled fattening period, and harvest output must be traceable and reconciled. | capture logs, supplier invoices, movement permits, transfer logs, cage inventory, mortality records, and harvest records |
| `dq_mass_balance` | stock, feed, mortality, harvest, and packout | Stocking, growth, mortality, escape, residue, harvest, reject, and marketable product records must reconcile within declared tolerance; unexplained gaps require disclosure. | mass-balance worksheet, scale tickets, cage records, packout records, and supervisor review |
| `dq_feed_bait_basis` | feed and bait records | Feed and bait basis must distinguish formulated feed, fresh bait, frozen bait, live feed, dry matter, wet mass, thawed mass, medicated feed, and supplier species or composition where available. | feed invoices, bait species logs, formulation sheets, feed declarations, and feeding records |
| `dq_temporal_coverage` | all foreground rows | Data must cover the full production or fattening campaign and final handling period, or disclose partial-year, partial-batch, or proxy coverage. | reporting calendar, batch records, harvest records, and coverage statement |
| `dq_boundary_disclosure` | all datasets | The dataset must disclose whether upstream stock capture, hatchery production, feed, bait, packaging, delivery, capital goods, and infrastructure are foreground, linked upstream datasets, or excluded by scope. | dataset boundary statement, supplier records, upstream dataset links, and scope declaration |

## 9. Validation Rules

| rule_id | Rule | Severity | Failure message |
| --- | --- | --- | --- |
| `val_reference_flow_uuid` | Reference product flow UUID equals `2d170776-6886-4a54-9341-ee064d0f182a` unless a more specific Tiangong farmed tuna-category product flow is documented. | error | Reference flow must use the farmed tunas, skipjack, or stripe-bellied bonito product identity or document a reviewed replacement. |
| `val_not_wild_only` | Dataset has controlled aquaculture, ranching, or fattening evidence beyond wild capture and post-capture handling. | error | Wild capture only belongs under the wild tuna PCR, not this farmed product PCR. |
| `val_capture_based_stock_trace` | Capture-based routes include capture or supplier origin, permit or legal evidence, transfer, stocking, mortality, and harvest reconciliation. | error | Capture-based aquaculture route is missing required stock traceability evidence. |
| `val_mass_basis` | Product mass basis is declared as live, fresh, chilled, gutted, bled, drained, ice-excluded, or another stated product basis. | error | Product mass basis is missing or ambiguous. |
| `val_feed_bait_basis` | Feed or bait rows distinguish dry, wet, fresh, frozen, live, thawed, medicated, or declared feed basis. | warning | Feed or bait basis should be declared before comparing or normalizing inputs. |
| `val_required_qualifiers` | Required qualifiers are present in metadata or process notes. | warning | Reference flow qualifiers are incomplete. |
| `val_structured_sync` | `structured.yaml` is regenerated from the bilingual Markdown after edits. | error | Structured projection is out of sync with authored PCR Markdown. |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for farmed tunas, skipjack, or stripe-bellied bonito, live, fresh, or chilled |
| downstream_use | `secondary_dataset`; `background_dataset`; foreground reference for process or lifecyclemodel construction when site-specific aquaculture records are retained |
| allowed_use | LCA modelling of declared farmed or aquaculture-fattened tuna-category live, fresh, or chilled product at farm, harvest, dispatch, packhouse, or delivered gate |
| excluded_use | wild tuna that is only captured and handled; frozen tuna; processed tuna; canned tuna; fillets or loins; non-tuna farmed fish; ornamental fish; fish seed; roe, oil, offal, mortalities, sludge, or residues as separate products; ecosystem-service credits without a separate reviewed method |
| required_metadata | canonical PCR id; CPC 3.0 code; species; stock origin; capture-based status; culture system; stocking date and biomass; product form; size grade; live/fresh/chilled state; feed or bait basis; mortality and escape disclosure; harvest and holding condition; packaging state; declared gate; geography; reporting period; data owner; unresolved UUID substitutions |
| required_quality_disclosure | farmed production evidence, capture-based stock traceability where applicable, mass balance closure, feed and bait basis, temporal coverage, allocation basis, upstream dataset links, missing foreground records, proxy rows, and reasoned-estimate ranges used only for QA screening |
| update_trigger | new Tiangong flow identities for tuna eggs, larvae, juveniles, formulated feed, bait species, oxygen, cage materials, escapes, residues, ice, or delivery services; reviewed quantitative evidence for feed conversion, mortality, transfer loss, fuel, cage service, or chilling ranges; updated FAO, Codex, ASC, or legal requirements; classification mapping change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-atlantic-bluefin-tuna-culture` | official_guidance | FAO Cultured Aquatic Species Information Programme, Atlantic bluefin tuna (`Thunnus thynnus`) cultured species profile, https://www.fao.org/fishery/culturedspecies/thunnus_thynnus/en | tuna aquaculture route, product boundary, stock and husbandry context |
| `fao-capture-based-aquaculture-2008` | literature | FAO Fisheries Technical Paper No. 508, Capture-based aquaculture: global overview, including bluefin tuna chapter, https://openknowledge.fao.org/handle/20.500.14283/y5258e | capture-based aquaculture process decomposition, stock capture and fattening context |
| `fao-capture-based-aquaculture-guidelines-2011` | official_guidance | FAO Technical Guidelines for Responsible Fisheries, Responsible use of wild fishery resources for capture-based aquaculture, https://www.fao.org/4/ba0059e/ba0059e.pdf | capture-based boundary, stock traceability, transfer, permit, and responsible-use disclosure |
| `codex-cxc-52-2003` | standard | Codex Alimentarius Code of Practice for Fish and Fishery Products, CXC 52-2003, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf | live, fresh, chilled fish handling, hygiene, product-state and final handling context |
| `asc-farm-standard-2025` | standard | Aquaculture Stewardship Council, ASC Farm Standard v1.0.1, 2025, https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf | farm management, traceability, mortality, escape, health, welfare, and environmental disclosure |
| `asc-feed-standard-2026` | standard | Aquaculture Stewardship Council, ASC Feed Standard v1.2 update, https://asc-aqua.org/producers/get-certified-feed-mill/asc-feed-standard-v1-2-update/ | feed supplier and ingredient disclosure context |
| `mass-balance-identity` | method_factor | PCR internal mass-balance identity: output equals measured inputs plus growth or transformation minus losses under declared product basis | normalization, allocation, stock balance, yield, and delivery calculations |
