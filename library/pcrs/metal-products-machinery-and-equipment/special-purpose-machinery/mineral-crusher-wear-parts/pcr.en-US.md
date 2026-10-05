---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-crusher-wear-parts
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sand-cast austenitic manganese-steel crusher jaw-plate manufacture

## 1. Scope and Applicability

New complete replacement crusher jaw plates of declared austenitic manganese steel, sand-cast by electric melting, solution heat treated in an electrically heated furnace, water-quenched and finished to a controlled drawing in an unpainted supplied state. Include actual mould preparation, heat charge/chemistry, pour/shakeout, thermal processing, finishing, metallurgical/dimensional/net-mass acceptance and conditional protection. This narrower route within CPC44462 does not cover every mineral-machine part.

Exclude complete crushers, jawstocks/frames, cone mantles/concaves, screens, general cast stock, high-chromium white iron, martensitic/Q&T steel, ceramic or carbide inserts and other composite parts, painted/coated supply states, refurbished/repaired used liners, standalone pattern/tool manufacture, site installation, mineral throughput, use-phase work hardening/wear/replacement and end of life. Gas-fired or undeclared melting/heat routes need separate assessment.

The selected electrical and unpainted route is an applicability choice requiring actual foreground records, not a claim that every foundry follows it. Manufacturer references support sand casting, thermal control and fit/traceability context only. No universal alloy composition, melt yield, temperature/time/quench volume, part mass, hardness, service life or wear rate is adopted. Actual heat/BOM/recipe/acceptance and weighing originals remain required; scientific review is pending. Operating receipt-to-acceptance foreground is not complete cradle-to-gate without compatible verified upstream datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.mineral-crusher-wear-parts |
| classification_refs | CPC3.0 44462 Parts for the goods of subclass44440; narrower selected jaw plate route; context only |
| covered_products | New complete replacement crusher jaw plates of declared austenitic manganese steel, sand-cast by electric melting, solution heat treated in an electrically heated furnace, water-quenched and finished to a controlled drawing in an unpainted supplied state. Include actual mould preparation, heat charge/chemistry, pour/shakeout, thermal processing, finishing, metallurgical/dimensional/net-mass acceptance and conditional protection. This narrower route within CPC44462 does not cover every mineral-machine part. |
| excluded_products | Exclude complete crushers, jawstocks/frames, cone mantles/concaves, screens, general cast stock, high-chromium white iron, martensitic/Q&T steel, ceramic or carbide inserts and other composite parts, painted/coated supply states, refurbished/repaired used liners, standalone pattern/tool manufacture, site installation, mineral throughput, use-phase work hardening/wear/replacement and end of life. Gas-fired or undeclared melting/heat routes need separate assessment. |
| representative_product | One accepted complete drawing/grade/heat-specific new jaw plate |
| production_route | Sand mould; electric melt/alloying; pour/solidify/shakeout; electric solution treatment/water quench; finish/fit machining; metallurgical/dimensional/mass release; conditional protection |
| market_state | New accepted unpainted replacement jaw plate at declared factory gate |


## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture a specified complete finished manganese-steel crusher jaw plate |
| How much | 1 kg accepted plate net mass; normalize per-unit collection by physically measured M |
| How well | Actual grade/heat metallurgy, drawing tooth/fit profile and producer/customer acceptance; equal mass is not equal fit, toughness or wear resistance |
| How long or cycle | One manufacturing and acceptance cycle; no crushed-tonne service, replacement interval or lifetime |
| reference_flow_link | finished_plate |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted solution-treated austenitic manganese-steel crusher jaw plate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | producer/foundry/site/period; part number/drawing revision, tooth profile, mounting/fit geometry and individual serial/batch/heat; actual steel grade and C/Mn/Cr/residual assay; furnace types, external charge versus internal gates/risers/returns, actual mould sand/binder recipe and reclamation; recorded casting/solution/quench cycle and metallurgy; actual finishing and unpainted complete state; controlled inspection/sampling and release; positive physically measured M kg, calibration/tare/uncertainty and packaging exclusion; material/water/energy/waste/species balances, causal allocation and upstream gaps |

One complete unit here means one accepted jaw plate, not a pair or a complete crusher. Declare qualifiers in dataset metadata or equivalent notes; missing qualifiers make reference incomplete. M includes the finished plate alone, excluding removable fasteners, insert hardware, fixtures and protection; do not use blank, charge, assembled crusher, catalogue or density-calculated mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `mass_record_provenance` | cp_mass | Mass | kg | Complete unit in this protocol is one finished jaw plate of the same drawing/revision, grade and supplied state. Physically weigh each accepted plate on a suitable calibrated scale with measured fixture tare; retain heat/part identity, actual readout, calibration/uncertainty, date/operator and signed release. Same-configuration counts require actual accepted unit counts linked to these mass originals. Gates, risers, rejected castings, scale removed in treatment and machining chips are outside finished M. No assumed per-plate mass or catalogue weight conversion. |
| `energy_units` | each electricity row | Net calorific value | MJ | Use verified energy-unit conversion 1 kWh = 3.6 MJ. Preserve actual power provider/voltage and furnace, mould, pump, extraction and machining meters including standby. No assumed yield or rated power substitutes for measurement. |


## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual received external charge metals, mould ingredients, consumables and utilities |
| starting_condition_role | Receipt-to-accepted-jaw-plate operating foundry/manufacturing foreground |
| product_classification_scope | New complete replacement crusher jaw plates of declared austenitic manganese steel, sand-cast by electric melting, solution heat treated in an electrically heated furnace, water-quenched and finished to a controlled drawing in an unpainted supplied state. Include actual mould preparation, heat charge/chemistry, pour/shakeout, thermal processing, finishing, metallurgical/dimensional/net-mass acceptance and conditional protection. This narrower route within CPC44462 does not cover every mineral-machine part. |
| recursive_input_rule | No finished jaw plate as input to its own manufacture. Internal liquid metal/gates/risers/rejects and reclaimed sand are transfers; external received charge is separate. Purchased cast blanks replace contained melt/mould/casting scope and require a separately declared starting gate |
| upstream_dataset_requirement | Match metal grades/assays, external scrap state, sand/binder composition, refractory/abrasive supplied state, electricity and water boundaries, site/period and actual flow property/unit. Unmatched links remain gaps |
| disclosure | producer/foundry/site/period; part number/drawing revision, tooth profile, mounting/fit geometry and individual serial/batch/heat; actual steel grade and C/Mn/Cr/residual assay; furnace types, external charge versus internal gates/risers/returns, actual mould sand/binder recipe and reclamation; recorded casting/solution/quench cycle and metallurgy; actual finishing and unpainted complete state; controlled inspection/sampling and release; positive physically measured M kg, calibration/tare/uncertainty and packaging exclusion; material/water/energy/waste/species balances, causal allocation and upstream gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacture` | all processes | Include actual forming moulds, electric melting/pouring, sand recovery, solution/quench, finishing and inspection with rework and outsourced gates. Declared long-lived furnaces, patterns, machine tools and factory infrastructure are excluded from core operating foreground; add any separately evidenced capital contribution transparently. Do not duplicate outsourced service and its contained resources. Installation, crushing and service wear lie outside. |  |
| `boundary_actual_exchanges` | complete actual heat route | Cards are starting exchanges requiring actual recipe/route applicability, not a complete universal bill. Add each actual binder constituent/catalyst/coating, flux/alloy, furnace atmosphere, tool/coolant, blast medium, NDT chemical, repair-weld consumable, filtered residue and measured species with exact identity when performed. Thermal/mechanical defects or fume cannot be assigned invented quantities. Record missing versus evidenced not_applicable; no complete LCI claim until actual heat/material/operation balances reconcile. |  |


## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `moulding` | Pattern-controlled sand mould preparation | required | Declared sand-cast jaw-plate route | foreground | one accepted same-configuration finished unit, normalized using M |
| `melting` | Electric melting and heat-specific alloy adjustment | required | Declared electric melt route, actual furnace type recorded | foreground | one accepted same-configuration finished unit, normalized using M |
| `casting` | Pouring, solidification and shakeout | required | Actual sand-cast plate heat and mould | foreground | one accepted same-configuration finished unit, normalized using M |
| `thermal` | Electric solution heat treatment and water quench | required | Declared austenitic manganese steel solution-treated delivery route | foreground | one accepted same-configuration finished unit, normalized using M |
| `finishing` | Drawing-controlled finishing and dimensional machining | required | Actual required finished-fit jaw plate | foreground | one accepted same-configuration finished unit, normalized using M |
| `acceptance` | Part, metallurgy and net-mass acceptance | required | Each accepted complete finished jaw plate | foreground | one accepted same-configuration finished unit, normalized using M |
| `packing` | Conditional factory-gate protection | conditional | Only actual shipped protection | foreground | one accepted same-configuration finished unit, normalized using M |

Moulds and alloy-adjusted molten metal meet at casting; actual cooled/shaken-out casting goes through solution treatment/quench and finishing to acceptance. Internal metal/sand recirculation stays within this map and is measured explicitly. Packaging is conditional. Every card needs actual recipe, supplied state and stage applicability.

### Process: Pattern-controlled sand mould preparation (`moulding`)

Prepare the actual part/revision pattern, mould cavity, feeding/gating and cores only when required. Record actual sand/binder recipe, reclaimed versus virgin supply, yield and reclamation. Quartz sand and sodium-silicate binder cards are specific conditional examples; no universal resin, binder concentration or sand ratio. Actual alternative ingredients must have separate physical identities.

#### Inputs

##### Product flows

###### Dry quartz foundry moulding sand (`quartz_sand`)

Actual specified quartz sand supplied dry, measured fresh addition excluding reused circulating sand. Aggregate rock, molten silica and other refractory sands are not substitutions.

- Selected flow: Dry quartz foundry moulding sand
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_moulding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_moulding`
- Sources: `metso`

###### Aqueous sodium-silicate foundry binder (`sodium_silicate`)

Only if actual mould/core recipe uses sodium-silicate solution with measured concentration/grade; not universal binder or dry sodium silicate. Other recipe ingredients get separate rows.

- Selected flow: Aqueous sodium-silicate foundry binder
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_moulding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_moulding`
- Sources: `metso`

###### Factory-intake alternating-current electricity (`moulding_electricity`)

Only actual metered attributable supply; kWh converted to MJ. Preserve furnace/machining/pump/extraction meter boundaries and active/idle causal allocation, not nameplate power or assumed melt efficiency.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_moulding.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_moulding`
- Sources: `metso`

### Process: Electric melting and heat-specific alloy adjustment (`melting`)

Charge actual traced external scrap and alloy additions against required jaw-plate chemistry. Identify electric furnace type, refractory wear, heat assay, temperature and actual metal transfers. Internal gates/risers/reject returns remain internal circulation, not a second purchased steel input; count external returned scrap only on actual receipt. No universal Mn/C/Cr recipe, furnace efficiency or oxidation factor.

#### Inputs

##### Product flows

###### External carbon-steel melting scrap (`external_steel_scrap`)

Measured external charge supply with actual chemical/contamination assay and stock movements. Internal gates/risers are excluded as purchases. No virgin steel credit for internal returns.

- Selected flow: External carbon-steel melting scrap
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_melting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_melting`
- Sources: `metso`

###### Ferro-manganese alloy addition (`ferromanganese`)

Actual delivered ferro-manganese grade, Mn/C and other assay with supplier state and net charge; no assumed concentration. Internal alloy recycling is not a second purchase.

- Selected flow: Ferro-manganese alloy addition
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_melting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_melting`
- Sources: `metso`

###### Synthetic graphite recarburizer (`graphite`)

Only actual supplied synthetic graphite grade/ash/net charge when needed; not coal, coke, activated carbon or elementary carbon.

- Selected flow: Synthetic graphite recarburizer
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_melting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_melting`
- Sources: `metso`

###### Aluminium metal deoxidizer shot (`aluminium`)

Only actual specified aluminium metal shot addition, measured and assayed; not alumina refractory or a mandatory alloy recipe.

- Selected flow: Aluminium metal deoxidizer shot
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_melting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_melting`
- Sources: `metso`

###### Alumina furnace refractory brick (`refractory`)

Actual complete refractory brick specification and consumed replacement/wear over covered heats, not pure bulk Al2O3 or all original lining charged per plate.

- Selected flow: Alumina furnace refractory brick
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_melting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_melting`
- Sources: `metso`

###### Factory-intake alternating-current electricity (`melting_electricity`)

Only actual metered attributable supply; kWh converted to MJ. Preserve furnace/machining/pump/extraction meter boundaries and active/idle causal allocation, not nameplate power or assumed melt efficiency.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_melting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_melting`
- Sources: `metso`

#### Outputs

##### Waste flows

###### Manganese-steel melting slag waste (`slag`)

Actual slag chemistry/net mass and documented destination; not sellable product without evidence or environmental mineral release.

- Selected flow: Manganese-steel melting slag waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_melting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_melting`
- Sources: `metso`

### Process: Pouring, solidification and shakeout (`casting`)

Trace ladle heat to mould/part and actual cooling, shakeout and gate/riser removal. Record actual metal-to-accepted-part balance, sand and dust transfers, rejects and repair. Internal molten metal and gates are process transfers, not recursive boundary product inputs. No mandatory pouring temperature, cooling hours, casting yield or emissions inferred.

#### Inputs

##### Product flows

###### Factory-intake alternating-current electricity (`casting_electricity`)

Only actual metered attributable supply; kWh converted to MJ. Preserve furnace/machining/pump/extraction meter boundaries and active/idle causal allocation, not nameplate power or assumed melt efficiency.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_casting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_casting`
- Sources: `metso`

#### Outputs

##### Waste flows

###### Spent sodium-silicate bonded quartz moulding sand waste (`spent_sand`)

Only actual discarded spent sand from that binder route, contamination and net transfer measured after actual reclamation; recirculating sand is not disposal.

- Selected flow: Spent sodium-silicate bonded quartz moulding sand waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_casting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_casting`
- Sources: `metso`

###### Captured manganese-steel foundry dust waste (`captured_dust`)

Actual filter residue chemistry, moisture, net mass and destination; captured dust is not elementary-air release.

- Selected flow: Captured manganese-steel foundry dust waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_casting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_casting`
- Sources: `metso`

#### Outputs

##### Elementary flows

###### Quartz, immediate release to unspecified air (`quartz_air`)

Only evidenced CAS14808-60-7 quartz fraction released to immediate air/unspecified with species/phase measurement, not all total dust, captured residue, amorphous silica or long-term release.

- Selected flow: Quartz, immediate release to unspecified air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_casting.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_casting`
- Sources: `metso`

### Process: Electric solution heat treatment and water quench (`thermal`)

Use actual qualified heat-specific cycle and recorded furnace loading, temperature/time, transfer and quench condition. Record actual water make-up/purge, recirculation/cooling and scale. Do not substitute work-hardening in service or quench-and-temper low-alloy steel. Heat logs alone do not prove delivered microstructure; link actual metallurgy/acceptance originals. No universal temperature, soak time, water volume or grain-boundary criterion invented.

#### Inputs

##### Product flows

###### Process Water (`quench_water`)

Only actual supplied technosphere quench make-up/cooling water mass, net fresh addition. Internal recirculation counted once; natural withdrawal requires separate medium-specific elementary flow.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_thermal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal`
- Sources: `metso`

###### Factory-intake alternating-current electricity (`thermal_electricity`)

Only actual metered attributable supply; kWh converted to MJ. Preserve furnace/machining/pump/extraction meter boundaries and active/idle causal allocation, not nameplate power or assumed melt efficiency.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_thermal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal`
- Sources: `metso`

#### Outputs

##### Waste flows

###### Manganese-steel quench-water purge for treatment (`quench_effluent`)

Only actual treatment-bound purge with measured composition/destination, not presumed environmental-water discharge.

- Selected flow: Manganese-steel quench-water purge for treatment
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_thermal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal`
- Sources: `metso`

###### Manganese-steel heat-treatment scale waste (`scale`)

Only actual segregated scale collected after heating/quench with chemistry and destination, no automatic iron-oxide elementary flow.

- Selected flow: Manganese-steel heat-treatment scale waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_thermal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal`
- Sources: `metso`

#### Outputs

##### Elementary flows

###### water vapour (`water_vapour_air`)

Only actual CAS7732-18-5 emitted vapour in immediate air/unspecified, measured directly or by closed quench-water balance after purge/recovery/retention; not all make-up supply or natural resource withdrawal. No assumed evaporation fraction.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_thermal.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_thermal`
- Sources: `metso`

### Process: Drawing-controlled finishing and dimensional machining (`finishing`)

Perform actual gate remnant removal, grinding and fit-surface machining to controlled profile/mounting dimensions; record actual blasting if performed. Finished-part machining may be limited to drawing-required faces. Actual repair welding, penetrant testing or protective painting requires separate exact consumables and qualified applicability before data completion; no generic paint/repair row or universal tolerance.

#### Inputs

##### Product flows

###### Cast-steel blasting shot (`steel_shot`)

Only actual supplied steel shot grade and net wear/issue when blasting performed; no furnace scrap substitution.

- Selected flow: Cast-steel blasting shot
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `metso`

###### Aluminium-oxide bonded grinding disc (`grinding_disc`)

Only complete bonded abrasive disc grade and actual consumed wear/issues, not pure alumina powder.

- Selected flow: Aluminium-oxide bonded grinding disc
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `metso`

###### Factory-intake alternating-current electricity (`finishing_electricity`)

Only actual metered attributable supply; kWh converted to MJ. Preserve furnace/machining/pump/extraction meter boundaries and active/idle causal allocation, not nameplate power or assumed melt efficiency.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `metso`

#### Outputs

##### Waste flows

###### Austenitic manganese-steel machining chip waste (`metal_chips`)

Actual segregated weighed chips and destination, internal remelt is disclosed transfer not second external input; no ordinary low-carbon chip substitution.

- Selected flow: Austenitic manganese-steel machining chip waste
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`
- Sources: `metso`

### Process: Part, metallurgy and net-mass acceptance (`acceptance`)

Link drawing/part/heat, chemistry, delivered metallurgical condition and actual required dimensional/surface/defect and other acceptance tests to signed release. Producer/customer define applicable sampling and limits. Weigh actual complete accepted plate, excluding fixture and shipping protection. Catalogue crusher weight, blank mass, charge mass or theoretical volume/density cannot establish M.

#### Inputs

##### Product flows

###### Factory-intake alternating-current electricity (`acceptance_electricity`)

Only actual metered attributable supply; kWh converted to MJ. Preserve furnace/machining/pump/extraction meter boundaries and active/idle causal allocation, not nameplate power or assumed melt efficiency.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_acceptance.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_acceptance`
- Sources: `amsted`

#### Outputs

##### Product flows

###### Accepted solution-treated austenitic manganese-steel crusher jaw plate (`finished_plate`)

One complete new drawing/grade/heat-specific jaw plate in declared unpainted finished-fit state, no crusher, fasteners, inserts, loose attachments, shipping protection or fixtures.

- Selected flow: Accepted solution-treated austenitic manganese-steel crusher jaw plate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `method_formula`
- Collection protocol: `cp_mass`
- Sources: `amsted`

### Process: Conditional factory-gate protection (`packing`)

Record actual independent protection supplies, excluded from M. Reusable fixture/pallet service requires actual movements and denominator, not assumed lifetime. Installation or crusher operation is outside scope.

#### Inputs

##### Product flows

###### Low-density polyethylene foil (PE-LD) (`protective_film`)

Only actual supplied LDPE protective foil net issues, excluded from plate M.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Corrugated cardboard box (`carton`)

Only actual measured carton for that plate shipment; no assertion that heavy castings always use cartons. Excluded from M.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

###### Factory-intake alternating-current electricity (`packing_electricity`)

Only actual metered attributable supply; kWh converted to MJ. Preserve furnace/machining/pump/extraction meter boundaries and active/idle causal allocation, not nameplate power or assumed melt efficiency.

- Selected flow: Factory-intake alternating-current electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished unit
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_packing`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_heat` | heat/batch and shared resources | Directly assign charge and mould/finishing jobs where possible. For shared heat metal, record chemistry-compatible total metal transfers, internal returns and accepted plate/reject inventories with actual attributable metal balance. Shared furnace/thermal/extraction resources use measured causal charge/load, furnace occupation and actual cycle: share = order driver / sum of covered order drivers. Preserve period, denominator, standby and sensitivity; never distribute by catalogue weight or assume uniform yield. |  |
| `allocation_returns` | internal metal/sand loops | Internal gates, risers, rejects, chips and reclaimed sand remain controlled internal transfers, with actual stock and losses; do not create a second purchase or avoided-virgin-material credit. Carry actual remelt/reclamation energy and wear. External charge and final waste transfers stay distinct. Rework and rejected production affect accepted-output denominator; no universal return fraction or recycled-content claim from input totals alone. |  |
| `allocation_coproduct` | saleable co-products and qualification | Trace each actual exported slag/scrap and destination once. Co-product status/allocation requires actual contractual, causal/economic evidence and sensitivity, not recyclability alone. Actual batch qualification tests are attributed to covered production with traced sampling scope/driver; destroyed test material is not accepted output. Independent R&D is separate; no assumed test frequency or tooling life. |  |


## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `acceptance` | reference_product | accepted physical weighing record | model; configuration; serial number; accepted net mass M; part number/revision; finished plate scale reading; fixture tare; part/heat/grade; tooth/fit profile; unpainted state; calibration/uncertainty; drawing; signed release | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted unit | actual manufacturing and acceptance period | declared finished-plate acceptance gate | accepted net mass per unit | actual calibrated physical finished-plate weighing, measured tare and controlled drawing/release |
| `cp_moulding` | `moulding` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual pattern/drawing, recipe/SDS, sand issues/returns/reclamation, mould jobs and stage meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_melting` | `melting` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read heat charge/assay, external versus internal metal transfers, refractory and measured furnace/extraction energy | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_casting` | `casting` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read ladle/mould/heat trace, actual pour/cooling/shakeout jobs, gates/risers/reject balances, sand/dust and meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_thermal` | `thermal` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual qualified cycle, furnace loading/calibration, heat/quench logs, water/scale transfer and meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_finishing` | `finishing` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual finishing/machining/blasting orders, tool/abrasive net consumption, part/heat chips/dust and meters | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_acceptance` | `acceptance` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read drawing/heat/specification, chemical and microstructure/test reports, calibration, actual net weighing and signed release | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |
| `cp_packing` | `packing` | inventory | actual stage exchange records | model; configuration; serial/batch; part/revision; exact exchange/SDS; net issues/returns/stocks; kg; metered kWh; waste destination; emission method; actual shared driver | Read actual packaging issues/returns, tare and reusable-support movements | kg for Mass rows; MJ for electrical-energy rows | each accepted unit and actual production batch | actual manufacturing and acceptance period | declared factory/subcontractor gates | attribute measured period exchange / accepted units of the same configuration | original jobs/drawings/SDS, calibrated scales/meters, acceptance and transfers |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished unit; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_mass` | cp_mass | Require mass_record_provenance actual calibrated physical finished-plate weighing, same drawing/grade/supply state and positive net M kg. Retain heat/part trace and measured tare; excludes gates/risers, rejects, chips, removed scale, fixtures and packaging. No melt charge, blank mass, density estimate or complete-crusher mass substitutes. Actual accepted counts must agree with mass/configuration originals. Missing originals requires scientific/data review. | actual part weighing/calibration/tare and signed release |
| `quality_identity` | all exchanges | Verify one chemical/physical exchange and actual supply grade/state. Ferromanganese is not silicomanganese or elemental manganese; graphite recarburizer is not coal or activated carbon; refractory brick/disc is not pure alumina; actual sand binder solution is not dry powder. Waste dust/sand/slag is not an elementary environmental emission. Preserve actual reference property/unit and phase/medium; unresolved identities stay precise. | supplier assay/recipe/SDS and public identity/unit originals |
| `quality_metallurgy` | cp_melting; cp_thermal; cp_acceptance | Trace part to heat charge chemistry, residuals and actual qualified solution/quench cycle. Retain furnace calibration/loading, temperature/time and transfer/quench records plus actual metallurgical/dimensional acceptance reports. Thermal logs alone do not establish austenitic condition; use producer-required examination with actual sampling/specification. No universal chemical range, hardness, magnetic-test criterion, carbide threshold or heat curve inferred. Repair weld or later thermal exposure requires actual qualified evidence, not an assumed equivalent condition. | actual heat/part chemical, thermal, metallurgical and release originals |
| `quality_balance` | metal, sand, water, energy and species | Reconcile external charge, internal circulation, accepted metal, rejects/returns, slag/scale/chips and actual inventory changes by heat/period; do not assume yield=1. Sand balance separates fresh make-up, reclaimed loops and final disposal. Water supply/recirculation/purge and evaporation need actual records, no automatic resource/wastewater equivalence. Quartz-air requires actual crystalline-quartz CAS14808-60-7 released fraction and medium; amorphous silica, total dust and captured residue are not substitutes. Other metal/oxide or combustion emissions require individual chemistry and actual evidence before adding identities. | actual heat/material/sand/water/species balances and transfers |
| `quality_coverage` | actual dataset and upstream links | Distinguish measured/calculated/missing/evidenced not_applicable. Audit actual whole process map, recipes and machining/inspection consumables beyond candidate cards, supplier boundaries, outsourced processing, capital exclusions, allocation and uncertainty. Verified compatible upstream links are needed for full cradle-to-gate. Contract checking does not establish factory data completion, performance validation or scientific approval. | actual complete heat/operation records and transparent gaps |


## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference and finished_plate | Exact reference product name equals finished_plate output. Use actual positive M kg with cp_mass and normalize_mass. Blank candidate reference UUID registers that precise row in unresolved_flow_identities. Verify one complete accepted jaw plate, actual grade/profile/heat and unpainted gate, excluding other parts/protection. |  |
| `validate_basis` | all rows/protocols | Check ordered bilingual lawful lowercase row/rule/protocol IDs and actual projected references, per-unit q_item, M kg and same-configuration counts. Unit means one jaw plate throughout. Preserve real public Number/Area/Energy properties; compatible conversions require original metrology, never relabel as Mass. |  |
| `validate_route` | heat/mould/finish records | Require actual selected electric sand-cast solution/water-quench route, heat chemistry/mould recipe, part/heat tracing, actual finished metallurgy/fit and physical mass originals. Internal returns are not external purchases; spent sand and capture dust are not air releases. Missing records or unqualified repair/exposure requires review. |  |
| `validate_use` | dataset use | Disclose exact part/grade/heat/profile/gate, weighing/thermal/metallurgy originals, missing exchanges and unresolved identity/upstream gaps. Equal kg cannot prove equal wear life, impact toughness or crusher throughput. Candidate remains unpublished with scientific review pending. |  |


## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset and background_dataset after actual data completion/review |
| downstream_use | Specified new crusher jaw-plate input to separately bounded machine assembly or replacement lifecycle |
| allowed_use | Manufacturing comparisons for matching grade, profile, heat-treated state and supply gate with actual mass and upstream links disclosed |
| excluded_use | Exclude complete crushers, jawstocks/frames, cone mantles/concaves, screens, general cast stock, high-chromium white iron, martensitic/Q&T steel, ceramic or carbide inserts and other composite parts, painted/coated supply states, refurbished/repaired used liners, standalone pattern/tool manufacture, site installation, mineral throughput, use-phase work hardening/wear/replacement and end of life. Gas-fired or undeclared melting/heat routes need separate assessment. |
| required_metadata | producer/foundry/site/period; part number/drawing revision, tooth profile, mounting/fit geometry and individual serial/batch/heat; actual steel grade and C/Mn/Cr/residual assay; furnace types, external charge versus internal gates/risers/returns, actual mould sand/binder recipe and reclamation; recorded casting/solution/quench cycle and metallurgy; actual finishing and unpainted complete state; controlled inspection/sampling and release; positive physically measured M kg, calibration/tare/uncertainty and packaging exclusion; material/water/energy/waste/species balances, causal allocation and upstream gaps |
| required_quality_disclosure | Measured/calculated/missing records, actual net weighing/heat/metallurgy/fit originals, identity and upstream gaps, capital exclusion, allocation and uncertainty; candidate scientific review pending |
| update_trigger | Part/drawing/tooth/fit profile, grade/charge/binder, furnace/casting/solution/quench route, repair/finish/coat state, physical mass/acceptance, site or upstream change |


## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `metso` | literature | [Metso Crushing and Screening Handbook, edition7](https://www.metso.com/globalassets/insights/ebooks/metso-crushing-and-screening-handbook-edition7-en-web.pdf) | Wear parts–crushers, printed168–169: casting in sand moulds, thermal control and final machining context. Manufacturer account, not current plant recipe or mandatory electric furnace/binder choice. General material and work-hardening statements do not establish this plate grade, net mass or service life. No numerical manufacturing factors or universal thermal limits adopted. |
| `amsted` | extension_guidance | [Amsted: manganese-steel wear parts selection](https://www.amstedglobal.com/what-to-consider-when-buying-your-manganese-steel-wear-parts-for-your-crusher/) | Article dated1October2021, test-certificate and heat-treatment paragraphs: traceability, chemistry/dimensions and caution that thermal logs alone do not establish properties. Historical manufacturer guidance only; cone-liner geometry, alloy percentages, temperature, hardness, magnetic/sample checks and wear life are not universal jaw-plate requirements. Actual producer specifications and metallurgical acceptance required. |
