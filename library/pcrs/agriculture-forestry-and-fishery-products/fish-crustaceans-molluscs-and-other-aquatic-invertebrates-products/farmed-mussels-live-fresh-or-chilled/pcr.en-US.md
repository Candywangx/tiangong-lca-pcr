---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-mussels-live-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Farmed mussels, live, fresh or chilled

## 1. Scope and Applicability

This PCR guides foreground data package construction for farmed mussels placed on the market as live, fresh, or chilled product. It covers seed or spat supply, hatchery and nursery activity when controlled by the reporting operator, grow-out on ropes, socks, longlines, rafts, bouchot poles, racks, trays, bottom culture units, or other declared aquaculture systems, harvest, washing, grading, relaying or depuration when performed, live holding, chilling, packaging, and release at the declared gate.

Excluded products are wild mussels; frozen, smoked, dried, salted, brined, cooked, canned, otherwise prepared or preserved mussels; mussel seed or spat sold as an aquaculture input; mussel shells or shell material sold as non-food products; and oysters, scallops, clams, cockles, ark shells, abalone, or other mollusc categories with separate PCRs.

This PCR is written for foreground dataset production. It does not grant an ecosystem-service credit for filtration, nutrient removal, carbon storage, or habitat effects unless a separate reviewed method and source-backed quantity are declared in the foreground study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-mussels-live-fresh-or-chilled` |
| classification_refs | CPC 3.0 `04432`, `Farmed mussels, live, fresh or chilled` |
| covered_products | farmed mussels, including declared Mytilus, Perna, Choromytilus, Aulacomya, or comparable mussel taxa, sold live, fresh, or chilled from aquaculture production systems |
| excluded_products | wild mussels; frozen, smoked, dried, salted, brined, cooked, canned, prepared, or preserved mussels; mussel spat sold as seed; non-food shell products; oysters, scallops, clams, cockles, ark shells, abalone, and other mollusc categories with separate PCRs |
| representative_product | live or chilled shell-on farmed mussel at declared market size and product form |
| production_route | spat or seed supply, nursery where relevant, grow-out husbandry in declared suspended, pole, raft, bottom, rack, tray, or integrated systems, harvest, washing, grading, depuration or relaying when performed, live holding or chilling, packaging, and declared gate release |
| market_state | live, fresh, or chilled shell-on product with declared species, culture system, harvest area, size or count grade, purification status, packaging state, temperature or holding condition, and gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | farmed mussels as live, fresh, or chilled market product |
| How much | 1 kg |
| How well | declared species or species group, live/fresh/chilled state, shell-on or other declared product basis, size or count grade, harvest area, purification or depuration status, and culture system |
| How long or cycle | one production batch, harvest lot, or reporting period normalized to marketable product output |
| reference_flow_link | Reference amount and product flow below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species or species group; culture system; spat or seed source; grow-out site or culture unit; harvest area classification or permission status; product state; shell-on or declared product basis; size or count grade; purification or depuration status; moisture or drainage basis; geography and declared gate; holding or chilling duration; packaging state; permit or certification status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

Mass is the primary reference basis. Count, sack, mesh bag, basket, crate, rope, sock, cluster, or volume records may be used only when item count, actual net mass, and the sampling or tare method are retained so the foreground package can normalize to kg reference product.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow must be expressed as kg farmed mussels in the declared live, fresh, or chilled product form. |
| `product_state_and_shell_basis` | shell-on live, fresh, chilled, drained, or other declared product records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Product mass must state whether it is shell-on live weight, shell-on chilled weight, drained weight after washing or depuration, debyssed or cleaned weight, or another contract-declared basis. Convert only with measured yield or drainage evidence. |
| `count_to_mass_conversion` | seed, stocking, harvest, grading, sales, sack, mesh bag, crate, cluster, and count-grade records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Count-based or container-based records must include net mass, mean individual mass or count per kg, container tare, size grade, and sampling method before normalization to kg product. |
| `spat_lot_identity` | hatchery spat, wild-collected spat under aquaculture control, nursery stock, and transferred seed lots | Mass or count | kg and item | Spat and seed records must retain supplier, hatchery or collection area, species, batch, count, mean size or mass, transfer date, health or movement permission, and mortality or rejection records. |
| `no_external_feed_default` | grow-out husbandry | Mass | kg | Filter-feeding grow-out is treated as having no external feed input by default. Any intentional feed, fertilization, pond enrichment, or supplemental algal input must be declared as a product input with quantity, purpose, and source evidence. |
| `water_volume_or_mass` | hatchery, nursery, depuration, relaying, live holding, washing, chilling, and wastewater | Mass or volume | kg or m3 | Record only water that is pumped, supplied, metered, treated, recirculated, or discharged under foreground control. Ambient seawater passing through open suspended, raft, pole, bottom, or rack systems is a boundary condition, not a process water input. |
| `culture_area_time` | longline, raft, pole, rack, tray, bottom plot, or other grow-out area | Area-time | ha-year or m2-day | Record licensed or occupied culture area and active culture duration when needed for stocking density, habitat disclosure, or allocation in shared sites. |
| `gear_and_socking_material_basis` | ropes, socks, longlines, floats, buoys, anchors, poles, racks, trays, clips, ties, and reusable gear | Mass or item count | kg or item | Gear records must retain material type, item count, mass, deployment period, service life, recovery, reuse, recycling, disposal, or loss fate before allocation to the reference flow. |
| `energy_and_fuel_inventory` | pumping, aeration, hatchery, nursery, boat, vehicle, washing, depuration, chilling, live holding, and delivery energy | Energy or fuel quantity | kWh, MJ, L, or kg | Record original electricity, fuel, or energy carrier units before normalizing to the reference flow. Do not double count supplier transport already included in purchased inputs. |
| `packaging_and_ice_basis` | sacks, mesh bags, boxes, labels, liners, ice, gel packs, pallets, and reusable containers | Mass or item count | kg or item | Packaging and ice records must retain material type, item count, tare or fill mass, reuse rate where relevant, and destination before conversion to kg per reference product. |

Key product attributes are foreground qualifiers recorded alongside the mass reference flow:

| Attribute | Common unit | Required handling |
| --- | --- | --- |
| Species or species group | scientific and common name | required for all datasets |
| Culture system | rope, sock, longline, raft, bouchot pole, rack, tray, bottom culture, integrated aquaculture system, or declared variant | required for boundary, area, gear, water, and allocation interpretation |
| Product state | live, fresh, chilled, washed, debyssed, depurated, relayed, purged, or declared variant | required for Codex-style product and storage interpretation |
| Size or count grade | count per kg, shell length, grade class, sack size, mesh bag size, or market grade | required when count, grade, or container records are used |
| Purification status | direct harvest from approved area, depurated, relayed, purged, or not applicable | required for product quality, holding, and water-use interpretation |

## 5. System Boundary

The default boundary covers foreground-controlled farmed mussel production to the declared farm, harvest, dispatch, packhouse, or delivery gate:

1. Spat or seed sourcing, including on-site hatchery and nursery activity when controlled by the reporting operator, or purchased spat and wild-collected spat brought under declared aquaculture control when supplied by another hatchery, collector, or nursery.
2. Grow-out husbandry, including culture-unit preparation, spat collection or stocking, socking or re-socking, thinning, grading at sea when performed, gear deployment and retrieval, fouling and predator management, controlled water movement, mortalities, and directly controlled maintenance.
3. Harvest, washing, grading, debyssing when performed, depuration, relaying, purging, live holding, chilling, packaging, and declared gate release when these operations are performed before the reference product leaves the foreground boundary.
4. Delivery to the declared gate when the reference flow is delivered product rather than farm-gate, harvest-area, dispatch-centre, or packhouse product.

Capital goods, long-lived infrastructure, and long-term habitat modification are included only when the declared data package scope requires them. Spat, seed, gear, packaging, ice, electricity, fuel, and other purchased inputs require upstream datasets unless the same operator controls and reports their production in the foreground package.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | declared_spat_or_seed_stocking_event |
| starting_condition_role | aquaculture_stock_identity_and_biological_starting_condition |
| product_classification_scope | current CPC 3.0 product category `04432`, `Farmed mussels, live, fresh or chilled` |
| recursive_input_rule | farmed mussel spat, seed, or nursery stock used to produce market product is recorded as declared stock starting condition with supplier, hatchery, collection area, nursery, or transfer disclosure, not recursively as finished reference product output |
| upstream_dataset_requirement | spat or seed supplier dataset, on-site hatchery records, or documented source, species, batch, mass or count, size, health or movement permission, and certification or permit evidence |
| disclosure | disclose species or species group, culture system, spat or seed source, grow-out site or culture unit, stocking density, grow-out duration, purification or depuration status, water source and discharge route for controlled systems, mortalities and rejects, gear use and loss, harvest and holding conditions, product state, packaging state, declared gate, and unresolved Tiangong UUID substitutions |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| spat_supply_hatchery_and_nursery | Spat Supply, Hatchery, and Nursery | required | spat, seed, or juvenile source must be declared; on-site hatchery and nursery rows are included when controlled by the reporting operator | foreground/upstream bridge | viable spat or seed entering grow-out |
| growout_husbandry | Grow-out Husbandry | required |  | foreground production | harvest-size farmed mussels before final conditioning |
| harvest_washing_depuration_and_packout | Harvest, Washing, Depuration, and Pack-out | required |  | foreground conditioning and gate release | declared marketable live, fresh, or chilled product |
| delivery_to_declared_gate | Delivery to Declared Gate | conditional | include when the reference flow is delivered product beyond the farm, harvest area, dispatch centre, or packhouse gate | foreground transport | delivered product at declared gate |

### Process: Spat Supply, Hatchery, and Nursery (`spat_supply_hatchery_and_nursery`)

#### Inputs

##### Product flows

###### Mussel spat, seed, or nursery stock input (`spat_seed_or_nursery_stock_input`)

This row records purchased hatchery spat, wild-collected spat brought under aquaculture control, transferred nursery stock, or internally produced seed entering the declared production route.

- Selected flow: Mussel spat `75906dc4-d380-471f-99fa-20183a3921bd`
- Flow property / unit: Mass or count with mean size / kg, item, or shell length class
- Amount rule: measured spat or seed count, mass, size class, and accepted quantity entering the declared grow-out or nursery batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg marketable reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_spat_stocking_records`
- Sources: `fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025`
- Range: Provisional spat or seed input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kg spat or seed live mass/kg marketable product
  - Basis: broad first-pass spat or seed mass input relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### On-site hatchery or nursery culture inputs (`hatchery_nursery_culture_inputs`)

This row is used only when the reporting operator controls hatchery, larval, settlement, or nursery operations that use microalgae, culture media, settlement substrate, collectors, or comparable seed-production inputs.

- Selected flow: Microalgae, culture medium, collector, settlement substrate, or hatchery input selected from site records
- Flow property / unit: Mass, volume, or item count / kg, L, or item
- Amount rule: measured hatchery or nursery input quantity by batch and purpose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per seed or spat batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_hatchery_nursery_records`
- Sources: `fao-hatchery-culture-bivalves-2004`, `fao-mediterranean-mussel-factsheet`
- Range: Provisional on-site hatchery input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg or L hatchery input/1,000 kg marketable product
  - Basis: broad first-pass on-site hatchery and nursery input relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hatchery and nursery water (`hatchery_nursery_water`)

This row covers metered seawater, freshwater, process water, make-up water, or recirculation replacement water used in on-site hatchery and nursery operations.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured intake, make-up water, treated water, or recirculation replacement volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per seed or spat batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_quality_and_discharge_records`
- Sources: `fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025`
- Range: Provisional hatchery and nursery water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2000
  - Unit: m3/1,000 kg marketable product
  - Basis: broad first-pass supplied water for on-site seed production relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hatchery and nursery electricity (`hatchery_nursery_electricity`)

This row covers electricity for pumps, aeration, filtration, algal culture, lighting, temperature control, settlement systems, and water treatment in on-site hatchery or nursery operations.

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or allocated electricity records for hatchery and nursery operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per seed or spat batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `fao-hatchery-culture-bivalves-2004`, `asc-farm-standard-2025`
- Range: Provisional hatchery electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: kWh/1,000 kg marketable product
  - Basis: broad first-pass on-site hatchery and nursery electricity relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Hatchery mortalities, settlement residue, and rejected spat (`hatchery_mortalities_settlement_residue_and_rejected_spat`)

This row records eggs, larvae, spat, settlement substrate residue, organic residues, shell fragments, and rejected or dead seed from on-site seed production or nursery operations.

- Selected flow: Route-specific bivalve mortality or organic aquaculture residue
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured or estimated mortality count, residue mass, rejected seed, and disposal or recovery route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per seed or spat batch and per 1,000 kg marketable reference product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_residue_and_gear_records`
- Range: Provisional hatchery residue screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg residue/kg accepted spat or seed
  - Basis: broad first-pass residue or mortality mass relative to accepted spat or seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default elementary input is specified for spat supply. Add site-specific seawater withdrawal, waterborne emissions, or land or marine area occupation flows when the Tiangong identity and site scope are selected.

#### Outputs

##### Product flows

###### Accepted spat or seed for grow-out (`accepted_spat_or_seed_for_growout`)

This output carries viable spat, seed, or nursery stock into grow-out.

- Selected flow: Mussel spat `75906dc4-d380-471f-99fa-20183a3921bd`
- Flow property / unit: Mass or count with mean size / kg, item, or shell length class
- Amount rule: calculated accepted spat or seed quantity after receipt, grading, nursery transfer, and rejection losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: accepted spat or seed entering grow-out
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spat_stocking_records`
- Range: Spat acceptance mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg spat or seed input
  - Basis: accepted spat or seed fraction after receipt, grading, and nursery transfer
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

No additional default waste output is specified beyond recorded hatchery mortalities, residues, and rejected spat.

##### Elementary flows

No default elementary output is specified for spat supply. Add direct emissions from site-specific water treatment, chemical use, or fuel combustion when measured.

### Process: Grow-out Husbandry (`growout_husbandry`)

#### Inputs

##### Product flows

###### Accepted spat or seed transfer to grow-out (`accepted_spat_or_seed_transfer_to_growout`)

This row transfers accepted spat or seed into the declared grow-out culture area or unit.

- Selected flow: Mussel spat `75906dc4-d380-471f-99fa-20183a3921bd`
- Flow property / unit: Mass or count with mean size / kg, item, or shell length class
- Amount rule: accepted spat or seed mass or count by grow-out line, sock, rope, raft, pole, rack, tray, bottom plot, or culture unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out batch before harvest normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_spat_stocking_records`
- Range: Provisional stocked spat transfer estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kg accepted spat or seed/kg marketable product
  - Basis: broad first-pass accepted spat or seed mass per marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grow-out ropes, socks, floats, anchors, and culture gear (`growout_ropes_socks_floats_anchors_and_culture_gear`)

This row records gear and materials that cross the foreground boundary for culture-unit preparation, support, containment, predator control, biofouling management, or harvest access.

- Selected flow: Aquaculture rope, socking material, float, buoy, anchor, pole, rack, tray, clip, tie, or gear material selected from site records
- Flow property / unit: Mass or item count / kg or item
- Amount rule: measured material issued, deployed, lost, replaced, recovered, or consumed during the declared production period; reusable gear must retain service life and allocation basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg harvest-size product output or allocated gear service over production period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_culture_gear_and_area_records`
- Sources: `fao-mediterranean-mussel-factsheet`, `asc-farm-standard-2025`
- Range: Provisional grow-out gear screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg material/1,000 kg marketable product
  - Basis: broad first-pass rope, sock, float, anchor, pole, rack, tray, or gear material use per marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grow-out electricity (`growout_electricity`)

This row covers electricity for pumps, sensors, lighting, grading at the farm, hydraulic equipment, land-based holding tied to grow-out, or other directly controlled grow-out operations. For passive open-water culture with no powered grow-out operations, record zero or not applicable with justification.

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or allocated electricity records for grow-out operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg harvest-size product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `asc-farm-standard-2025`
- Range: Provisional grow-out electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/1,000 kg marketable product
  - Basis: broad first-pass electricity demand across passive open-water and powered support systems
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grow-out fuel and workboat energy (`growout_fuel_and_workboat_energy`)

This row covers diesel or other fuel for workboats, tractors, forklifts, generators, farm vehicles, harvest support, gear maintenance, or directly controlled maintenance activity.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Fuel quantity / L, kg, or MJ
- Amount rule: measured fuel purchase, tank records, vessel logs, vehicle logs, or allocated equipment fuel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg harvest-size product output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `asc-farm-standard-2025`
- Range: Provisional grow-out fuel screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: L diesel-equivalent/1,000 kg marketable product
  - Basis: broad first-pass directly controlled fuel use per marketable output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Intentional feed, fertilizer, or algal input (`intentional_feed_fertilizer_or_algal_input`)

Use this row only when mussel grow-out intentionally applies feed, fertilization, pond enrichment, supplemental algae, or comparable material input. If no such input is used, the dataset must explicitly state that the no-external-feed default applies.

- Selected flow: Site-specific feed, fertilizer, algal input, or enrichment material selected from foreground records
- Flow property / unit: Mass or volume / kg, L, or active ingredient unit
- Amount rule: measured product amount, active ingredient where relevant, application purpose, and permitted use status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out area, batch, and 1,000 kg marketable product after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_fertilizer_and_chemical_records`
- Sources: `asc-farm-standard-2025`
- Range: Provisional intentional input screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg or L input/1,000 kg marketable product
  - Basis: broad first-pass route-specific intentional feed, fertilizer, algal, or chemical input per marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Grow-out mortalities, shell residue, biofouling, and predator-damaged mussels (`growout_mortalities_shell_residue_biofouling_and_predator_damaged_mussels`)

This row records mortalities, fallen mussels, broken shells, predator-damaged animals, biofouling residue, sorting losses, and organic residues removed during grow-out.

- Selected flow: Bivalve shell and organic aquaculture residue
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured mortality count, mortality mass, shell residue, biofouling residue, and disposal, composting, recovery, or return route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per grow-out batch and per 1,000 kg marketable output after normalization
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_residue_and_gear_records`
- Sources: `asc-farm-standard-2025`
- Range: Provisional mortality and residue screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg mortality or residue/kg marketable product
  - Basis: broad first-pass mortality and residue mass relative to marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovered or lost grow-out gear waste (`recovered_or_lost_growout_gear_waste`)

This row records discarded ropes, socks, nets, floats, buoys, anchors, poles, clips, ties, broken gear, and documented gear losses.

- Selected flow: Plastic, rope, netting, or mixed aquaculture gear waste selected from site records
- Flow property / unit: Mass or item count / kg or item
- Amount rule: measured discarded, recovered, recycled, reused, disposed, or lost gear material with fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvest-size product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_residue_and_gear_records`
- Sources: `asc-farm-standard-2025`
- Range: Provisional gear waste screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 500
  - Unit: kg gear waste/1,000 kg marketable product
  - Basis: broad first-pass discarded or lost gear material per marketable output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Marine area occupation (`marine_area_occupation`)

This row records licensed or occupied culture area and duration when the selected LCA model requires area-time or habitat occupation flows.

- Selected flow: Marine aquaculture area occupation flow selected by local model
- Flow property / unit: Area-time / ha-year or m2-day
- Amount rule: calculated from active culture area and culture duration, with shared-site allocation disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg harvest-size product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_culture_gear_and_area_records`
- Sources: `fao-mediterranean-mussel-factsheet`, `asc-farm-standard-2025`

#### Outputs

##### Product flows

###### Harvest-size farmed mussels (`harvest_size_farmed_mussels`)

This row records grow-out output before final washing, grading, depuration, relaying, live holding, chilling, or pack-out losses.

- Selected flow: Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- Flow property / unit: Mass / kg
- Amount rule: measured harvested live mass by batch, species, culture unit, size grade, and product form before pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: grow-out process quantitative reference
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_depuration_and_product_records`
- Range: Grow-out harvest mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg total live biomass before harvest adjustment
  - Basis: harvested market-size fraction of available biomass in the declared batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

No additional default waste output is specified beyond recorded grow-out mortalities, residue, and gear waste.

##### Elementary flows

Add direct nutrient, chemical, biodeposition, sediment, or habitat-interaction elementary flows only when measured, required by local modelling rules, and supported by selected flow identity.

### Process: Harvest, Washing, Depuration, and Pack-out (`harvest_washing_depuration_and_packout`)

#### Inputs

##### Product flows

###### Harvested mussels input to pack-out (`harvested_mussels_input_to_packout`)

This row transfers harvest-size mussels into washing, grading, debyssing, depuration, relaying, live holding, chilling, and pack-out.

- Selected flow: Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- Flow property / unit: Mass / kg
- Amount rule: measured harvested mass entering post-harvest handling and pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per pack-out batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_depuration_and_product_records`
- Sources: `codex-cxs-292-2008`, `fao-bivalve-depuration-2008`
- Range: Pack-out input mass-balance QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: harvested mussel input relative to declared marketable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Washing, depuration, relaying, and live holding water (`washing_depuration_relaying_and_live_holding_water`)

This row records water, seawater, ice melt, or live holding system water used after harvest.

- Selected flow: Process water `ec205030-248c-496f-9cf2-06d9d26dc6ff`
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured water use for washing, purging, depuration, relaying support, live holding, chilling, and cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_quality_and_discharge_records`
- Sources: `fao-bivalve-depuration-2008`, `who-fao-growing-area-guidance-2018`
- Range: Provisional holding and depuration water screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: m3/1,000 kg reference product
  - Basis: broad first-pass washing, depuration, relaying support, live holding, and chilling water per reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pack-out electricity (`packout_electricity`)

This row covers electricity for pumps, depuration systems, UV or water treatment, live holding, chilling, grading equipment, weighing, washing, and packing.

- Selected flow: Electricity `f872677d-2f66-428a-a94e-f0fba61231df`
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for harvest, washing, depuration, relaying support, live holding, chilling, and pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_and_fuel_records`
- Sources: `fao-bivalve-depuration-2008`, `asc-farm-standard-2025`
- Range: Provisional pack-out electricity screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10000
  - Unit: kWh/1,000 kg reference product
  - Basis: broad first-pass harvest, washing, depuration, holding, chilling, and pack-out electricity per reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging, ice, and dispatch materials (`packaging_ice_and_dispatch_materials`)

This row records sacks, mesh bags, boxes, liners, insulated containers, labels, pallets, bands, ice, gel packs, and reusable packaging that cross the foreground boundary with the product or are consumed for live or chilled dispatch.

- Selected flow: Packaging materials, unspecified `7336a8ee-9e4d-49a6-9fe5-ce285f613245`
- Flow property / unit: Mass or item count / kg or item
- Amount rule: measured packaging item count and material mass; include capacity, tare mass, ice mass, and reuse rate for count records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_ice_records`
- Sources: `codex-cxs-292-2008`
- Range: Provisional packaging and ice screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg packaging or ice/1,000 kg reference product
  - Basis: broad first-pass packaging and chilling material mass per reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Off-grade, damaged, dead, or broken mussels at pack-out (`offgrade_damaged_dead_or_broken_mussels_packout`)

This row records non-marketable mussels, pack-out mortalities, broken shells, sorting rejects, foreign matter, sediment, and residues removed during washing, depuration, grading, or packing.

- Selected flow: Bivalve shell and organic aquaculture residue
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured reject mass or count by fate and reason
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_residue_and_gear_records`
- Sources: `codex-cxs-292-2008`, `fao-bivalve-depuration-2008`
- Range: Pack-out reject QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg harvested product input
  - Basis: rejected or residue fraction of harvested product entering pack-out
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Pack-out wastewater and sludge (`packout_wastewater_and_sludge`)

This row records cleaning, washing, depuration, relaying support, chilling, or live holding water and sludge discharged from post-harvest operations.

- Selected flow: Sludge `725c8f6e-7975-4155-a250-1f95ef70c508`
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: measured or calculated discharge volume, sludge mass, and treatment route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_quality_and_discharge_records`
- Sources: `fao-bivalve-depuration-2008`, `who-fao-growing-area-guidance-2018`
- Range: Provisional pack-out wastewater and sludge screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5000
  - Unit: m3 wastewater or kg sludge/1,000 kg reference product
  - Basis: broad first-pass wastewater and sludge from washing, depuration, cleaning, holding, and chilling per reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default elementary output is specified for pack-out. Add direct refrigerant losses, combustion emissions, disinfectant emissions, or waterborne emissions only when measured or required by the selected modelling rule.

#### Outputs

##### Product flows

###### Marketable farmed mussel reference product (`marketable_farmed_mussel_reference_product`)

This row is the declared reference product output.

- Selected flow: Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- Flow property / unit: Mass / kg
- Amount rule: measured marketable live, fresh, or chilled product mass after washing, grading, depuration or relaying where applicable, and pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_depuration_and_product_records`
- Sources: `codex-cxs-292-2008`
- Range: Reference product identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: normalized reference product output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Saleable off-grade mussel co-product (`saleable_offgrade_mussel_coproduct`)

Use this row only when off-grade live, fresh, or chilled mussels remain saleable as a separate grade within the same product family.

- Selected flow: Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- Flow property / unit: Mass / kg
- Amount rule: measured saleable off-grade mass by grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per pack-out batch and per reference product after allocation or partitioning
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_depuration_and_product_records`
- Range: Provisional off-grade product screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg off-grade saleable product/kg reference product
  - Basis: broad first-pass off-grade saleable mass relative to reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No additional waste output is specified beyond pack-out rejects, wastewater, and sludge.

##### Elementary flows

No default elementary output is specified for the reference pack-out process.

### Process: Delivery to Declared Gate (`delivery_to_declared_gate`)

#### Inputs

##### Product flows

###### Product transferred to controlled delivery (`product_transferred_to_controlled_delivery`)

This row is used when the declared reference flow is delivered beyond the farm, harvest area, dispatch centre, or packhouse gate under the reporting operator's control.

- Selected flow: Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- Flow property / unit: Mass / kg
- Amount rule: measured marketable product mass loaded for controlled delivery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per controlled delivery route and reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: Delivery load QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg delivered reference product
  - Basis: loaded marketable product relative to delivered reference product after declared delivery losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Controlled delivery fuel or transport service (`controlled_delivery_fuel_or_transport_service`)

This row records directly controlled delivery fuel, refrigerated vehicle energy, vessel fuel, or transport service to the declared gate.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Fuel quantity or transport service / L, kg, MJ, or tonne-km
- Amount rule: measured fuel or calculated tonne-kilometres from delivered mass, distance, vehicle, and route records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg delivered reference product
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: Provisional controlled delivery screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1000
  - Unit: tonne-km/1,000 kg delivered reference product
  - Basis: broad first-pass controlled delivery service per delivered product
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Delivery rejects or mortalities (`delivery_rejects_or_mortalities`)

This row records product mortalities, damaged packages, leaking containers, or rejected product during controlled delivery.

- Selected flow: Bivalve shell and organic aquaculture residue
- Flow property / unit: Mass or count / kg or item
- Amount rule: measured delivery reject mass or count by reason and fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg delivered reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: Delivery reject QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg loaded product
  - Basis: rejected or dead product fraction of product loaded for delivery
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

Add direct delivery combustion emissions only when the foreground delivery process does not already use a fuel dataset that carries combustion emissions.

#### Outputs

##### Product flows

###### Delivered farmed mussels (`delivered_farmed_mussels`)

This output is used only when the declared gate is beyond the farm, harvest area, dispatch centre, or packhouse gate.

- Selected flow: Farmed mussels, live, fresh or chilled `fbe2435d-13e6-4119-beaa-b157a7d95f58`
- Flow property / unit: Mass / kg
- Amount rule: delivered marketable product mass at the declared gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: delivered reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_delivery_and_route_records`
- Range: Delivered reference product identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg delivered reference product
  - Basis: normalized delivered reference product output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

No additional waste output is specified beyond delivery rejects or mortalities.

##### Elementary flows

No default elementary output is specified for delivery.

## 7. Allocation and Co-product Handling

Avoid allocation where batch records can partition burdens by culture area, culture unit, species, harvest lot, size grade, product form, purification route, or destination. Separate live, fresh, chilled, size-grade, off-grade, and delivery products by measured mass before applying allocation.

When a single foreground batch produces several saleable grades within CPC 04432, allocate shared spat, gear, grow-out, harvest, washing, depuration, holding, chilling, packaging, and delivery burdens by declared product mass unless a reviewed market-value rule is documented. Shells, mortalities, wastewater, sludge, sediment, biofouling residue, discarded gear, and broken or dead product are waste or treatment outputs unless they are sold with a separate product dataset and reference flow.

If the same site grows multiple species or other aquaculture products in the same area, raft, rope system, pole field, rack, bottom plot, or vessel route, allocate shared records by directly measured culture-unit service, area-time, biomass-time, or product mass in that order of preference. Do not allocate filtration, nutrient removal, carbon storage, or habitat-service credits to the reference product unless a separate reviewed ecosystem-service method is in scope and the credited service is not double counted.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_spat_stocking_records` | spat_supply_hatchery_and_nursery; growout_husbandry | spat, seed, nursery stock input and accepted stock output | hatchery transfer, spat collection record, supplier invoice, stocking log, movement or health certificate | species; batch id; supplier, hatchery, nursery, or collection area; count; mean size; mean mass where available; total mass; size grade; health or movement status; transfer date | supplier records, hatchery logs, collection permits, stocking count, sampling and weighing | item, shell length, and kg | each spat receipt, spat collection, nursery transfer, or stocking event | complete production batch or reporting year | supplier, hatchery, nursery, collection area, and grow-out unit | sum accepted spat counts and masses by batch; calculate mean size, mean mass, and survival to grow-out or harvest | signed transfer records, permit or collection evidence, sampling sheet, weighing record, health or movement document |
| `cp_hatchery_nursery_records` | spat_supply_hatchery_and_nursery | on-site hatchery and nursery microalgae, culture media, settlement substrate, collectors, and seed-production inputs | hatchery log, algal culture log, substrate issue record, collector deployment record, supplier invoice | input type; quantity; concentration where relevant; batch id; purpose; date; settlement or nursery unit | hatchery batch records, supplier documents, metering, weighing, or inventory issue | kg, L, item, or concentration unit | each batch or reporting period | seed-production or nursery period linked to market batch | on-site hatchery, larval room, settlement unit, collector line, or nursery | normalize seed-production inputs to accepted spat or seed and then to reference product | hatchery batch sheet, supplier invoice, inventory log, production reconciliation |
| `cp_culture_gear_and_area_records` | growout_husbandry | culture area, ropes, socks, longlines, floats, buoys, anchors, poles, rafts, racks, trays, and shared-site allocation | lease record, farm map, gear issue log, service-life record, maintenance record | culture area; coordinates or plot id; gear type; material; item count; mass; service life; deployment date; retrieval date; loss or reuse fate | lease documents, GIS map, farm log, gear inventory, weighing, maintenance record | ha, m2, item, kg, ha-year, or m2-day | deployment event, retrieval event, or reporting period | grow-out period and shared-site allocation period | licensed area, raft, line, pole field, rack, tray, bottom plot, or vessel-supported area | calculate area-time and allocated material use by culture unit, batch, or product mass | permit or lease, gear inventory, maintenance log, retrieval record |
| `cp_feed_fertilizer_and_chemical_records` | growout_husbandry | intentional feed, fertilizer, supplemental algae, pond enrichment, predator-control chemicals, disinfectants, or other material applications | application log, purchase invoice, safety data sheet, permit record | product; active ingredient; quantity; concentration; target; application area; date; legal or certification status | farm application log, supplier invoice, chemical inventory, permit report | kg, L, or active ingredient unit | each application | grow-out, pond, or treatment period | grow-out area, pond, treatment unit, or storage area | normalize applied product or active ingredient to culture area and marketable output; record zero only when no external-feed declaration is present | application record, invoice, permit or certification evidence, inventory reconciliation |
| `cp_water_quality_and_discharge_records` | spat_supply_hatchery_and_nursery; growout_husbandry; harvest_washing_depuration_and_packout | water intake, pumped seawater, depuration water, live holding water, water-quality monitoring, wastewater, sludge, and discharge | meter readings, pump logs, depuration records, water-quality tests, discharge permits | intake volume; make-up water; recirculated volume; discharge volume; sludge mass; water source; discharge route; treatment; salinity; temperature; microbial or biotoxin monitoring where relevant | meter, pump runtime calculation, depuration log, water-quality testing, permit report, or water management log | m3, kg, or test result unit | daily, batch, harvest lot, or reporting period | process-specific operation period | hatchery, grow-out, depuration, relaying, live holding, packhouse, and discharge point | reconcile intake, recirculation, discharge, and ambient water exclusions; normalize controlled water, wastewater, and sludge to process output and reference flow | meter calibration, depuration log, laboratory result, permit report, water-quality monitoring record |
| `cp_energy_and_fuel_records` | spat_supply_hatchery_and_nursery; growout_husbandry; harvest_washing_depuration_and_packout; delivery_to_declared_gate | electricity, diesel, vessel fuel, vehicle fuel, generator fuel, refrigerated vehicle energy, and farm equipment energy | utility bill, submeter, fuel purchase, tank drawdown, vessel log, tractor log, equipment log | electricity use; fuel type; quantity; meter id; process allocation; operating hours; route; vessel or equipment; distance; process purpose | utility bill, submeter, fuel invoice, tank gauge, vehicle or vessel log, equipment runtime | kWh, MJ, L, kg, or tonne-km | monthly, each trip, work event, batch, or reporting period | reporting period and production batch overlap | farm, hatchery, grow-out unit, depuration centre, live holding area, packhouse, route, vessel, vehicle, or equipment | allocate by metered subprocess first, then operating hours, culture area-time, route service, or product mass | utility bill, submeter records, fuel invoice, odometer, vessel log, equipment log, allocation worksheet |
| `cp_mortality_residue_and_gear_records` | spat_supply_hatchery_and_nursery; growout_husbandry; harvest_washing_depuration_and_packout; delivery_to_declared_gate | mortalities, shells, residues, rejects, biofouling, discarded or lost gear, and delivery losses | mortality log, reject sheet, waste manifest, gear loss record, recovery record | count; mass; reason; fate; date; culture unit; shell, organic residue, sediment, foreign matter, or gear category | farm log, packhouse reject record, weighing, waste contractor record, retrieval log | item and kg | event, batch, harvest lot, delivery route, or reporting period | full production batch, pack-out period, or delivery period | hatchery, grow-out unit, packhouse, waste handling route, or delivery route | sum by fate and normalize to process output and reference product | signed waste record, farm mortality log, gear retrieval record, mass balance |
| `cp_harvest_depuration_and_product_records` | growout_husbandry; harvest_washing_depuration_and_packout | harvest-size product, marketable reference product, off-grade product, depuration release, and product state | harvest log, grading sheet, depuration release record, sales invoice, dispatch record, pack-out record | harvest date; culture unit; species; product state; shell-on or declared basis; purification status; grade; count; mass; destination | harvest weighing, grader records, depuration or dispatch records, packhouse records, invoice | kg and item | each harvest, depuration release, or pack-out batch | declared production batch, harvest lot, or reporting period | harvest area, depuration or dispatch centre, packhouse, and declared gate | reconcile harvested input, marketable output, off-grade product, rejects, holding losses, and reference product | calibrated scale record, sales invoice, dispatch record, batch reconciliation |
| `cp_packaging_and_ice_records` | harvest_washing_depuration_and_packout | sacks, mesh bags, boxes, liners, labels, ice, gel packs, pallets, and reusable containers | packaging issue log, ice production or purchase record, purchase invoice, bill of materials | packaging item; material; item count; tare mass; capacity; reuse rate; ice or gel pack mass; destination | warehouse issue record, bill of materials, supplier invoice, weighing | kg and item | each pack-out batch or reporting period | pack-out and delivery preparation period | packhouse and dispatch area | convert count to mass using tare or supplier data; allocate reusable packaging; normalize to reference product | supplier specification, packaging issue sheet, ice record, scale record |
| `cp_delivery_and_route_records` | delivery_to_declared_gate | controlled delivery load, fuel, transport service, rejects, and delivered product | delivery log, vehicle or vessel log, fuel record, dispatch note, receiving note | delivered mass; route; distance; vehicle or vessel; fuel; refrigeration or ice service; rejects; delivery date; receiving gate | dispatch record, GPS or route log, fuel invoice, receiving record | kg, L, MJ, tonne-km, and item | each controlled delivery route | delivery period linked to production batch | controlled delivery route and declared gate | calculate tonne-kilometres and delivery losses; normalize to delivered reference product | delivery manifest, receiving note, fuel record, route evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_flow` | all foreground rows | normalized_amount = measured_or_calculated_amount / marketable_reference_product_mass. Preserve raw records and product-state basis. | measured amount; marketable_reference_product_mass | amount per 1 kg reference product | `mass-balance-identity` |
| `calculate_spat_acceptance_and_survival` | spat_supply_hatchery_and_nursery and growout_husbandry | accepted_spat_or_seed = received_or_collected_spat - rejected_spat; survival_to_harvest = harvested_count / accepted_spat_count when count records are available. Retain count-to-mass conversion separately. | received spat; collected spat; rejected spat; stocked count; harvested count; mortality count | accepted spat or seed, survival indicator, and QA check | `mass-balance-identity` |
| `calculate_area_time_intensity` | growout_husbandry | area_time = active_culture_area * active_culture_duration; allocate shared area by culture-unit records, biomass-time, or product mass as declared. | culture area; active days; allocation basis; product mass | ha-year or m2-day per reference product | `mass-balance-identity` |
| `apply_no_external_feed_default` | growout_husbandry | grow-out feed amount is zero only when no intentional feed, fertilization, pond enrichment, or supplemental algal input is recorded. If such inputs are used, record them as product inputs and disclose purpose and quantity. | feed records; enrichment records; farm declaration | feed or enrichment applicability flag and material amount | `asc-farm-standard-2025` |
| `reconcile_packout_mass` | harvest_washing_depuration_and_packout | harvested_input_mass = reference_product_mass + offgrade_saleable_mass + reject_mass + measured holding or drainage loss on the same product-form basis. | harvested_input_mass; reference_product_mass; offgrade_mass; reject_mass; holding_loss | pack-out mass balance | `mass-balance-identity` |
| `calculate_controlled_discharge` | water intake and discharge rows | controlled_discharge = measured_discharge or intake - recirculated_volume - retained_or_removed_water adjustment when meters are incomplete. Ambient open-water exchange is excluded. | intake; discharge; recirculated volume; retained water; removed water | controlled discharge volume by process | `mass-balance-identity` |
| `calculate_packaging_and_ice_mass` | packaging and ice rows | material_mass = item_count * tare_or_supplier_mass, adjusted for reuse allocation where applicable. | item count; tare mass; supplier mass; reuse rate; ice mass | kg packaging or ice per reference product | `mass-balance-identity` |
| `calculate_delivery_transport_service` | delivery_to_declared_gate | transport_service = delivered_product_mass_tonnes * one-way controlled delivery distance. | delivered mass; controlled distance; route | tonne-kilometres | `mass-balance-identity` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_and_scope` | all datasets | Declare CPC code, species or species group, culture system, spat or seed source, harvest area, product state, purification status, geography, and declared gate. | dataset metadata, stocking records, harvest records, product description, permit, certification, or movement evidence |
| `mass_basis_consistency` | reference product, spat, harvest, pack-out, rejects, packaging, and ice | Keep shell-on, live, fresh, chilled, drained, washed, wet, dry, count, container, and net mass bases separate unless measured conversion evidence exists. | scale records, product specifications, count per kg records, container tare, drainage or moisture evidence |
| `no_feed_and_material_disclosure` | grow-out rows | Declare whether external feed, fertilization, pond enrichment, supplemental algae, predator-control chemicals, disinfectants, or other grow-out material inputs are used. Absence of feed must be an explicit foreground statement, not an omitted record. | farm declaration, application log, chemical inventory, certification audit, supplier records |
| `water_and_purification_disclosure` | hatchery, grow-out, depuration, relaying, washing, and live holding | Distinguish ambient open-water exchange from controlled water intake, treatment, recirculation, depuration, live holding, and discharge. | water meters, pump logs, depuration logs, laboratory results, permit reports |
| `mortality_residue_and_gear_completeness` | spat, grow-out, pack-out, and delivery rows | Record mortalities, rejects, shells, sediment, biofouling residue, discarded or lost gear, and fate by batch or reporting period. | mortality log, reject sheet, waste manifest, gear retrieval record, recovery record |
| `allocation_transparency` | multi-species, multi-grade, or shared-site systems | State the partitioning or allocation basis before publishing a secondary or background dataset. | allocation worksheet, grade mass records, area-time records, culture-unit records |
| `temporal_representativeness` | all foreground rows | Cover a complete production batch, harvest lot, purification cycle, delivery route, or representative reporting period; disclose partial-cycle datasets. | production calendar, stocking and harvest dates, depuration records, delivery records, reporting-period records |

## 9. Validation Rules

A foreground data package conforms to this PCR only when:

- the reference product is normalized to 1 kg farmed mussels in a declared live, fresh, or chilled product form;
- species or species group, culture system, spat or seed source, harvest area, product state, shell-on or declared product basis, size or count grade, purification or depuration status, geography, declared gate, holding duration, and packaging state are declared;
- spat or seed input, culture area or gear, energy, fuel, water where controlled, mortality or residue, harvest, pack-out, packaging, and delivery where relevant are either present or explicitly marked not applicable with a reason;
- count, sack, mesh bag, crate, rope, sock, cluster, or volume records include actual net mass, tare, count per kg, mean size, or another transparent conversion to kg;
- grow-out records explicitly state whether external feed, intentional fertilization, pond enrichment, supplemental algae, predator-control chemicals, or disinfectants are used;
- water rows distinguish pumped, supplied, treated, depuration, live holding, and discharge water from ambient open-water exchange;
- pack-out mass balance reconciles harvested input, reference product, saleable off-grade product, rejects, and holding or drainage losses;
- same-site multi-species, shared-area, shared-gear, or multi-grade allocation is documented before the dataset is used as a background or secondary dataset;
- any filtration, nutrient-removal, carbon-storage, or habitat-service claim is excluded from the product inventory unless a separate reviewed method and source-backed quantity are declared.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production package that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | use as farmed mussel input to seafood processing, food service, retail, cold-chain, live seafood distribution, or regional food-product lifecycle models |
| allowed_use | farmed mussels live, fresh, or chilled datasets with declared species, culture system, product state, harvest area, purification status, gate, and quality disclosures |
| excluded_use | wild harvest, frozen/smoked/dried/salted/brined/prepared mussels, generic mollusc datasets, oysters, scallops, clams, cockles, ark shells, abalone, seed sold as seed, shell product datasets, and datasets lacking species, culture-system, or product-state disclosure |
| required_metadata | canonical PCR id; CPC code; species or species group; culture system; spat or seed source; harvest area; product state; shell-on or declared basis; size or count grade; purification or depuration status; geography; declared gate; holding or chilling duration; packaging state; data period; allocation basis |
| required_quality_disclosure | missing UUIDs; unresolved mussel product, spat, shell residue, gear, habitat, seawater, discharge, or depuration treatment flow identities; no-feed declaration; water and purification records; gear loss records; mortality completeness; pack-out mass balance; partial-cycle or proxy data use |
| update_trigger | revise when CPC mapping changes, Tiangong mussel, spat, shell residue, water, discharge, gear, or habitat flow identities are updated, Codex, FAO, ASC, or equivalent aquaculture and sanitation guidance changes, or reviewed foreground datasets provide better source-backed ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-292-2008` | standard | <https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ru/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B292-2008%252FCXS_292e.pdf> | live and raw bivalve mollusc product definition, live product handling, labelling, content declaration, purification context, hygiene, and quality factors |
| `fao-hatchery-culture-bivalves-2004` | handbook | <https://openknowledge.fao.org/handle/20.500.14283/y5720e> | bivalve hatchery, larval, settlement, nursery, seed-production, water, and culture-input process context |
| `fao-bivalve-depuration-2008` | handbook | <https://www.fao.org/4/i0201e/i0201e.pdf> | depuration centre operation, process controls, water treatment, post-harvest live holding, and HACCP-oriented purification context |
| `who-fao-growing-area-guidance-2018` | official_guidance | <https://www.who.int/publications/i/item/9789241514750> | growing-area monitoring, sanitation programme context, harvest-area classification, and links between Codex requirements and bivalve production controls |
| `fao-mediterranean-mussel-factsheet` | official_guidance | <https://www.fao.org/fishery/culturedspecies/mytilus_galloprovincialis/en> | mussel raft, rope, collector, and grow-out route context for Mytilus galloprovincialis-style systems |
| `asc-farm-standard-2025` | standard | <https://programme-centre.asc-aqua.org/app/uploads/2025/08/ASC-STD-001-ASC-Farm-Standard-V1.0.1-Aug-2025.pdf> | current ASC grow-out site scope, operational process boundary, traceability, water, energy, health, legal, gear, and environmental data requirements |
| `mass-balance-identity` | method_factor | Conservation of mass applied as a PCR calculation identity for spat acceptance, grow-out, pack-out, discharge, delivery, and reference-flow normalization. | QA guardrails, survival, yield, pack-out reconciliation, packaging conversion, delivery-service calculation, and normalization rules |
