---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.ferro-nickel
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Ferro-nickel

## 1. Scope and Applicability

This PCR applies to the foreground production of commercial ferro-nickel delivered at the producing plant gate as ingots, pieces, shot, or granules for iron and steelmaking or foundry use. It covers primary lateritic-ore routes, including rotary-kiln/electric-furnace (RKEF) production, and secondary nickel-bearing-residue routes only when the output is a marketable ferro-nickel alloy meeting the product identity below.

The foreground system begins with nickel-bearing feed, reductants, fluxes, energy carriers, and auxiliary materials received at the production site. Supplier-side extraction, beneficiation, energy generation, and material production are represented by upstream datasets unless they are operated inside the reporting facility and explicitly modelled as foreground processes. The system ends with finished ferro-nickel at the plant gate and includes feed preparation, thermal pretreatment where applicable, electric smelting, refining, casting or granulation, direct emissions, water use, wastewater, slag, dust, and internal recycle loops.

This PCR does not cover refined nickel, nickel matte, nickel oxide sinter, generic nickel alloys classified outside CPC 41114, steel or foundry products made from ferro-nickel, slag or dust sold without qualifying as ferro-nickel, or nickel-containing discharges and wastes. Nickel pig iron marketed and specified separately from ferro-nickel is outside the present candidate scope pending methodology review.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.basic-metals.ferro-nickel` |
| classification_refs | CPC 3.0 `41114` Ferro-nickel (`exact`) |
| covered_products | Marketable ferro-nickel alloy in ingot, piece, shot, or granulated form, with declared chemical composition and production route |
| excluded_products | Refined nickel; nickel matte; nickel oxide sinter; generic nickel alloys; separately marketed nickel pig iron; downstream steel/foundry products; slag, dust, wastewater, and nickel-bearing wastes |
| representative_product | Primary-route ferro-nickel produced from lateritic nickel ore by feed preparation, rotary-kiln pretreatment, electric-furnace smelting, refining, and casting or granulation |
| production_route | Primary laterite RKEF; eligible secondary nickel-bearing-residue pretreatment and electric smelting; route must be declared |
| market_state | Finished alloy at producing plant gate, as-delivered mass and declared composition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Ferro-nickel alloy classified as CPC 3.0 `41114` |
| How much | 1,000 kg as-delivered ferro-nickel at the producing plant gate |
| How well | Declared nickel mass fraction, iron balance and specified impurities; declared product form; representative of the stated route, facility, geography, and reference period |
| How long or cycle | One production campaign or commercial lot, aggregated over a representative reporting period |
| reference_flow_link | TianGong product flow `0e9b30a3-8769-480e-a8ff-e7f1aa3f752f` (Ferronickel / 镍铁; product flow; CPC 41114; state code 100) |

| Field | Value |
| --- | --- |
| Reference amount | `1000 kg` |
| Reference product flow | Ferronickel / 镍铁 `0e9b30a3-8769-480e-a8ff-e7f1aa3f752f` |
| Reference flow property | Mass — `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass — `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | `kg` |
| Required qualifiers | Nickel mass fraction and analytical basis; declared impurities or specification; product form; primary or secondary production route; nickel-bearing feed type and recycled-feed share; wet/dry/as-delivered mass basis; facility and geography; reference period; allocation choices; residue and recycle fate; plant-gate location |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference_product` | Finished ferro-nickel | Mass | kg | Determine calibrated as-delivered mass at the declared gate; normalize the accepted lot or campaign total to 1,000 kg. |
| `measure_feed_mass` | Nickel-bearing feeds, reductants, fluxes, electrodes, auxiliaries, slags, dusts, and wastes | Mass | kg | Record wet mass and, where moisture is material, dry mass and moisture fraction; retain conversion records. |
| `measure_composition` | Ferro-nickel and nickel-bearing feeds | Mass fraction | kg/kg or % by mass | Use representative lot sampling and chemical analysis; state whether results are wet, dry, or as-delivered. |
| `measure_electricity` | Purchased and self-generated electricity | Energy | kWh | Meter by process or allocate from a reconciled site meter using the allocation rules in Section 7. |
| `measure_fuels` | Fuels and reductants with energy content | Mass and net calorific value | kg and MJ/kg | Record mass by carrier and use supplier- or batch-specific net calorific value where combustion energy is calculated. |
| `measure_water` | Intake, recirculated water, and discharge | Volume or mass | m3 or kg | Keep intake, internal recirculation, evaporation, and discharge separate; do not count recirculated water as repeated external input. |
| `measure_direct_emissions` | Stack, fugitive air, water, and soil releases | Pollutant mass | kg | Prefer calibrated continuous monitoring or representative tests; reconcile calculated emissions with activity data and abatement operation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Nickel-bearing ore, concentrate, calcine, residue, or other eligible feed received at the reporting facility, together with purchased energy, reductants, fluxes, electrodes, oxygen, water, and auxiliaries |
| starting_condition_role | Upstream product inputs to the ferro-nickel foreground system |
| product_classification_scope | Output must remain a marketable CPC 3.0 `41114` ferro-nickel alloy |
| recursive_input_rule | Ferro-nickel used as an input is recorded as a visible product input and linked to an upstream dataset; do not recursively expand another ferro-nickel production system inside the same foreground package |
| upstream_dataset_requirement | Provide geographically and technologically appropriate upstream datasets for every purchased feed, energy carrier, material, water supply, and transport service crossing the boundary |
| disclosure | Declare route, integrated upstream operations, exclusions, cut-offs, internal recycle loops, residue fate, allocation, geography, and reference period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_starting_condition` | All datasets | Begin at site receipt of nickel-bearing feed and other purchased inputs; include on-site extraction or beneficiation only when operated by the reporting organization and explicitly declared. | `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015` |
| `boundary_unit_processes` | Foreground system | Include feed preparation, applicable thermal pretreatment, electric smelting, refining, finishing, abatement, utilities, and internal material handling. | `ec-jrc-nfm-bref-2017` |
| `boundary_upstream` | Purchased inputs | Link each purchased input and transport service to an upstream dataset; omission requires documented materiality evidence and must not conceal hazardous or toxic releases. | `eu-pef-method-2021` |
| `boundary_emissions_residues` | All foreground processes | Include direct stack and fugitive emissions, wastewater, slag, dust, spent refractories, and other residues; state whether each residue is recycled, recovered, sold, treated, or disposed. | `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015` |
| `boundary_transport` | Inbound and internal transport | Include material inbound transport and material internal transport where separately metered or material; disclose excluded minor transport. | `bartzas-komnitsas-ferronickel-lca-2015` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feed_preparation` | Feed receipt and preparation | required | All routes | Receive, sample, dry or condition, blend, and prepare nickel-bearing feed and recycle materials | Prepared feed sent to the next route step |
| `thermal_pretreatment` | Kiln or equivalent thermal pretreatment | conditional | Primary laterite RKEF and secondary routes using roasting or calcination | Dry, dehydrate, calcine, pre-reduce, or decontaminate feed before smelting | Prepared calcine or thermally treated feed |
| `electric_smelting` | Electric-furnace reduction and smelting | required | All covered routes | Reduce and melt feed, separate crude alloy from slag, and capture furnace off-gas solids | Crude ferro-nickel sent to refining |
| `refining_finishing` | Refining, casting, and granulation | required | All covered routes | Adjust composition, remove impurities, cast or granulate, cool, sample, and dispatch | 1,000 kg finished ferro-nickel at plant gate |

### Process: Feed receipt and preparation (`feed_preparation`)

#### Inputs

##### Product flows

###### Nickel-bearing feed (`nickel_bearing_feed`)

Record each ore, concentrate, calcine, residue, or recycled nickel-bearing feed separately. Measure receipt mass, moisture, nickel content, origin, and waste/product status.

- Selected flow: Select the semantically matching TianGong product or waste flow for each feed; no feed UUID is prescribed by this candidate PCR.
- Flow property / unit: Mass / kg; composition as kg/kg or % by mass
- Amount rule: Collected receipt mass corrected to the declared wet or dry basis and normalized to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feed_receipt`
- Sources: `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- Range: Primary laterite feed screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10000
  - Upper: 40000
  - Unit: kg
  - Basis: 1,000 kg finished ferro-nickel; primary laterite route only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Feed-preparation energy and auxiliaries (`feed_preparation_energy_auxiliaries`)

Record electricity, thermal fuels, binders, water, and other preparation auxiliaries as separate carrier- or material-specific exchanges.

- Selected flow: Select a route-, geography-, and carrier-specific TianGong flow for every material or energy input.
- Flow property / unit: Energy / kWh or MJ; mass / kg; water / m3
- Amount rule: Metered or purchase-reconciled amount for feed preparation, normalized to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_materials`
- Sources: `ec-jrc-nfm-bref-2017`

#### Outputs

##### Product flows

###### Prepared nickel-bearing feed (`prepared_feed`)

Record the mass, moisture, and nickel content transferred to thermal pretreatment or directly to electric smelting.

- Selected flow: Internal product flow defined by the foreground model.
- Flow property / unit: Mass / kg
- Amount rule: Weighed or mass-balance-derived transfer amount.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_feed_receipt`
- Sources: `ec-jrc-nfm-bref-2017`

##### Waste flows

###### Preparation rejects and captured solids (`feed_preparation_rejects`)

Record rejects, spilled material, and captured dust by destination; subtract only material demonstrably returned inside the same accounting period through the internal-recycle rule.

- Selected flow: Select destination-specific waste or recovered-product flows; keep hazardous status explicit.
- Flow property / unit: Mass / kg
- Amount rule: Weighed removal plus stock-change reconciliation, normalized to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_fate`
- Sources: `ec-jrc-nfm-bref-2017`

##### Elementary flows

###### Direct preparation emissions (`feed_preparation_emissions`)

Record measured or calculated particulate and other direct releases from drying, handling, and storage after abatement; do not substitute captured dust for emitted particulate.

- Selected flow: Select pollutant- and compartment-specific TianGong elementary flows.
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or emission calculation for the reporting period, normalized to the reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-nfm-bref-2017`

### Process: Kiln or equivalent thermal pretreatment (`thermal_pretreatment`)

#### Inputs

##### Product flows

###### Prepared feed to pretreatment (`pretreatment_feed`)

Record prepared feed entering the kiln, roaster, dryer, or equivalent unit, including internally recycled pelletized dust.

- Selected flow: Internal prepared-feed flow defined by the foreground model.
- Flow property / unit: Mass / kg
- Amount rule: Weighed transfer or reconciled mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_pretreatment`
- Sources: `ec-jrc-nfm-bref-2017`

###### Pretreatment fuels and reductants (`pretreatment_fuels_reductants`)

Record each coal, coke, fuel, reductant, electricity, and binder input separately; distinguish fuel use from material carbon retained in intermediates.

- Selected flow: Select carrier- and geography-specific TianGong product flows.
- Flow property / unit: Mass / kg; energy / MJ or kWh
- Amount rule: Metered, weighed, or purchase-reconciled amount normalized to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_materials`
- Sources: `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- Range: Combined carbonaceous material screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 500
  - Upper: 8000
  - Unit: kg
  - Basis: 1,000 kg finished ferro-nickel; all carbonaceous fuels and reductants combined
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Calcine or thermally treated feed (`treated_feed`)

Record mass, moisture, and where available degree of calcination or pre-reduction at transfer to smelting.

- Selected flow: Internal intermediate product flow defined by the foreground model.
- Flow property / unit: Mass / kg
- Amount rule: Weighed transfer or reconciled dry-mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_pretreatment`
- Sources: `ec-jrc-nfm-bref-2017`

##### Waste flows

###### Captured pretreatment dust (`captured_pretreatment_dust`)

Record captured dust before recycle, recovery, or disposal and state its final fate.

- Selected flow: Select destination-specific waste or recovered-product flows.
- Flow property / unit: Mass / kg
- Amount rule: Weighed collection plus stock-change reconciliation, reported gross and net of documented internal return.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_fate`
- Sources: `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- Range: Captured pretreatment dust screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg
  - Basis: 1,000 kg finished ferro-nickel before internal recycle
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct pretreatment emissions (`pretreatment_emissions`)

Record pollutant-specific stack and fugitive releases, including particulate, nickel-bearing particulate, sulfur oxides, nitrogen oxides, carbon monoxide, and greenhouse gases where applicable.

- Selected flow: Select pollutant- and compartment-specific TianGong elementary flows.
- Flow property / unit: Mass / kg
- Amount rule: Monitoring or source-specific calculation after abatement, normalized to the reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-nfm-bref-2017`

### Process: Electric-furnace reduction and smelting (`electric_smelting`)

#### Inputs

##### Product flows

###### Smelting feed (`smelting_feed`)

Record treated primary feed or eligible secondary feed entering each electric furnace, with mass and composition.

- Selected flow: Internal intermediate flow defined by the foreground model.
- Flow property / unit: Mass / kg
- Amount rule: Weighed transfer or reconciled mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electric_smelting`
- Sources: `ec-jrc-nfm-bref-2017`

###### Smelting electricity (`smelting_electricity`)

Record furnace and directly attributable auxiliary electricity using the geographically appropriate supply mix.

- Selected flow: Select a geography- and voltage-specific TianGong electricity product flow.
- Flow property / unit: Energy / kWh
- Amount rule: Metered furnace electricity plus attributable auxiliaries, normalized to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_materials`
- Sources: `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- Range: Smelting and refining electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5000
  - Upper: 20000
  - Unit: kWh
  - Basis: 1,000 kg finished ferro-nickel; disclose included auxiliaries
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Smelting reductants, electrodes, and fluxes (`smelting_materials`)

Record every reductant, consumable electrode, flux, and refractory addition separately by material identity.

- Selected flow: Select material-specific TianGong product flows.
- Flow property / unit: Mass / kg
- Amount rule: Weighed issue or stock-reconciled consumption normalized to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_materials`
- Sources: `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- Range: Consumable carbon electrode screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 20
  - Upper: 100
  - Unit: kg
  - Basis: 1,000 kg finished ferro-nickel; consumable electrodes only
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Crude ferro-nickel (`crude_ferronickel`)

Record tapped crude alloy mass and nickel composition before refining.

- Selected flow: Internal crude-alloy product flow defined by the foreground model.
- Flow property / unit: Mass / kg
- Amount rule: Weighed or calculated from tap mass and representative composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electric_smelting`
- Sources: `ec-jrc-nfm-bref-2017`

##### Waste flows

###### Electric-furnace slag and captured dust (`smelting_residues`)

Record slag and captured dust as separate flows with composition and final fate; do not classify them as co-products solely because they leave the site.

- Selected flow: Select residue- and destination-specific waste or recovered-product flows.
- Flow property / unit: Mass / kg
- Amount rule: Weighed or volume-and-density-derived mass, reconciled with stocks and internal recycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_fate`
- Sources: `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- Range: Electric-furnace slag screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 10000
  - Upper: 30000
  - Unit: kg
  - Basis: 1,000 kg finished ferro-nickel; slag before external recovery or disposal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct smelting emissions (`smelting_emissions`)

Record pollutant-specific stack and fugitive releases after abatement, including metal-bearing particulate, carbon monoxide, sulfur oxides, and greenhouse gases where applicable.

- Selected flow: Select pollutant- and compartment-specific TianGong elementary flows.
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result or source-specific mass-balance calculation normalized to the reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-nfm-bref-2017`

### Process: Refining, casting, and granulation (`refining_finishing`)

#### Inputs

##### Product flows

###### Crude alloy and refining auxiliaries (`refining_inputs`)

Record crude ferro-nickel, oxygen, fluxes, energy carriers, water, and other refining or finishing materials as separate exchanges.

- Selected flow: Use the internal crude-alloy flow and select material-, energy-, and geography-specific TianGong flows for purchased inputs.
- Flow property / unit: Mass / kg; energy / kWh or MJ; water / m3
- Amount rule: Metered, weighed, or stock-reconciled amounts normalized to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refining_finishing`
- Sources: `ec-jrc-nfm-bref-2017`

#### Outputs

##### Product flows

###### Finished ferro-nickel (`finished_ferronickel`)

Normalize the accepted, sampled commercial product to the reference amount and retain the unnormalized production total in the foreground records.

- Selected flow: Ferronickel / 镍铁 `0e9b30a3-8769-480e-a8ff-e7f1aa3f752f`
- Flow property / unit: Mass — `93a60a56-a3c8-11da-a746-0800200b9a66` / kg — unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Set to 1,000 kg after normalization of the accepted plant-gate product total.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-method-2021`; `iso-6501-2020`

##### Waste flows

###### Refining slag, dust, wastewater, and spent materials (`refining_residues`)

Record each residue separately with composition, waste status, treatment, recovery, and final destination.

- Selected flow: Select residue-, treatment-, and destination-specific TianGong waste or recovered-product flows.
- Flow property / unit: Mass / kg; wastewater / m3 or kg
- Amount rule: Weighed, metered, or reconciled amount normalized to the reference flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_fate`
- Sources: `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015`
- Range: Refining slag and captured dust screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg
  - Basis: 1,000 kg finished ferro-nickel before external recovery or disposal
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct refining and finishing emissions (`refining_emissions`)

Record pollutant-specific air and water releases from refining, casting, granulation, cooling, and abatement after subtracting captured material.

- Selected flow: Select pollutant- and compartment-specific TianGong elementary flows.
- Flow property / unit: Mass / kg
- Amount rule: Monitoring result, wastewater analysis, or source-specific calculation normalized to the reference flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1,000 kg finished ferro-nickel
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_water_emissions`
- Sources: `ec-jrc-nfm-bref-2017`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | Shared operations and utilities | First avoid allocation by subdividing meters, production campaigns, furnaces, and treatment lines or by expanding the system where a defensible substituted function is demonstrated. | `eu-pef-method-2021` |
| `allocation_physical` | Unavoidable shared burdens | If subdivision or system expansion is not feasible, allocate using a documented physical causal relationship such as separately measured energy demand, dry feed mass, or nickel mass throughput; justify the chosen driver. | `eu-pef-method-2021` |
| `allocation_other` | No defensible physical relationship | Use another documented relationship, such as economic value, only after showing why physical causality is unavailable; disclose prices, averaging period, and sensitivity. | `eu-pef-method-2021` |
| `allocation_recycled_dust` | Internal dust, slag, and metal recycle | Treat material returned within the same foreground system and accounting period as an internal loop: report gross generation and return, but do not create an external avoided-product credit. | `ec-jrc-nfm-bref-2017` |
| `allocation_waste_status` | Slag, dust, residues, and secondary feed | Determine waste versus product status from the applicable jurisdiction and actual transaction. A residue leaving the site does not become a co-product without a demonstrated function, market, and quality specification; record treatment burdens consistently. | `eu-pef-method-2021`; `bartzas-komnitsas-ferronickel-lca-2015` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feed_receipt` | `feed_preparation` | Nickel-bearing feeds and prepared feed | Weighbridge, sampler, laboratory, stock ledger | Gross/net mass; moisture; Ni, Fe and impurity content; origin; waste status; stock change | Calibrated weighing plus representative lot sampling and chemical analysis | kg; % mass | Each lot, aggregated monthly | At least 12 consecutive representative months unless campaign production is justified | All production lines in declared facility scope | Mass-weight composition and reconcile opening/closing stocks | Calibration certificates, sampling plan, laboratory QA/QC, stock reconciliation |
| `cp_energy_materials` | All applicable processes | Electricity, fuels, reductants, electrodes, fluxes, auxiliaries | Meters, invoices, issue records, stock ledger | Quantity; carrier/material identity; meter; calorific value; stock change | Process meter where available; otherwise reconciled allocation from site total | kWh; MJ; kg; m3 | Continuous or each issue, aggregated monthly | Same period as production denominator | Declared production lines plus attributable utilities | Sum by carrier and subtract documented non-production use | Meter calibration, invoice reconciliation, allocation worksheet |
| `cp_thermal_pretreatment` | `thermal_pretreatment` | Feed, calcine, dust, energy, operating state | Belt scales, batch logs, laboratory, control system | Input/output mass; moisture; temperature; composition; operating hours | Metered transfer and reconciled dry-mass balance | kg; °C; h | Each batch or continuous shift record | Same period as production denominator | Every included kiln, roaster, or dryer | Aggregate by unit and route; retain outages and bypasses | Instrument calibration, lab results, mass-balance closure |
| `cp_electric_smelting` | `electric_smelting` | Furnace feed, electricity, crude alloy, slag | Furnace meters, tap records, laboratory, stock ledger | Feed mass/composition; kWh; tap mass/composition; slag mass; operating hours | Metered electricity, weighed or calculated taps, representative sampling | kg; kWh; % mass | Each heat or shift | Same period as production denominator | Every included electric furnace | Aggregate by furnace and route; reconcile Ni and dry mass | Meter calibration, heat logs, laboratory QA/QC, balance closure |
| `cp_refining_finishing` | `refining_finishing` | Crude alloy, auxiliaries, finished product | Heat/lot logs, scales, laboratory, utility meters | Input/output mass; Ni and impurities; product form; rejected product; energy/water | Calibrated weighing, representative lot sampling, and direct metering | kg; % mass; kWh; m3 | Each heat or lot | Same period as production denominator | All included refining and finishing lines | Aggregate accepted product only; track rejects and rework separately | Sampling certificates, calibration, product specification, production reconciliation |
| `cp_air_emissions` | `feed_preparation`; `thermal_pretreatment`; `electric_smelting` | Direct stack and fugitive air emissions | CEMS, stack tests, abatement logs, activity data | Pollutant concentration; gas flow; operating time; capture efficiency; bypass events | Continuous monitoring or representative testing; calculation only with source-specific factors | kg; mg/Nm3; Nm3/h | Continuous or permit-compliant tests | Representative of reporting period and operating states | Every material emission point and disclosed fugitive source | Integrate concentration and flow; include starts, stops, and bypasses | Calibration, accredited test reports, detection limits, uncertainty, abatement uptime |
| `cp_air_water_emissions` | `refining_finishing` | Direct air and water releases | CEMS/tests, wastewater meter and analysis, abatement logs | Pollutant concentration; flow; operating time; discharge volume | Monitoring and pollutant-specific mass calculation | kg; mg/Nm3; mg/L; m3 | Continuous or permit-compliant tests | Representative of reporting period | All refining, casting, granulation, and wastewater outlets | Integrate concentration and flow; keep air and water compartments separate | Calibration, laboratory QA/QC, detection limits, uncertainty |
| `cp_residue_fate` | All applicable processes | Slag, dust, rejects, wastewater solids, spent materials | Scales, manifests, invoices, stock ledger | Gross generation; internal return; external shipment; composition; destination; legal status | Weighing or validated volume-density conversion plus stock reconciliation | kg; m3 | Each movement, aggregated monthly | Same period as production denominator | Entire declared facility | Report gross, internal return, external recovery, treatment, and disposal separately | Weigh tickets, manifests, receiver evidence, stock balance, classification records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculate_normalization` | All inventory exchanges | `normalized exchange = period exchange × 1000 / accepted ferro-nickel mass (kg)` | Period exchange; accepted plant-gate ferro-nickel mass | Exchange per 1,000 kg reference flow | `eu-pef-method-2021` |
| `calculate_dry_mass` | Moist feeds and residues | `dry mass = wet mass × (1 - moisture mass fraction)`; preserve wet mass and measured moisture | Wet mass; moisture fraction | Dry mass and declared basis | `ec-jrc-nfm-bref-2017` |
| `calculate_nickel_balance` | Whole foreground system and major unit processes | Reconcile nickel in feed, products, dusts, slags, stocks, wastewater, and measured releases; investigate unexplained imbalance before acceptance | Mass and nickel fraction of all relevant streams; stock changes | Nickel balance and closure ratio | `bartzas-komnitsas-ferronickel-lca-2015` |
| `calculate_monitored_emission` | Direct emissions | `pollutant mass = time-integral(concentration × standardized flow)` with unit, moisture, oxygen, and reference-condition corrections documented | Concentration, gas or water flow, operating time, correction factors | Pollutant mass by compartment | `ec-jrc-nfm-bref-2017` |
| `calculate_internal_recycle` | Dust, slag, alloy, and preparation recycle | Record gross generation and gross return; external waste or product output equals gross generation plus opening stock minus internal return minus closing stock, adjusted for verified transfers | Generation, return, stock changes, transfers | Net external residue plus visible internal loop | `ec-jrc-nfm-bref-2017` |
| `calculate_shared_burdens` | Shared utilities and treatment | Apply Section 7 hierarchy and document the selected causal driver or economic relation; allocation shares must sum to one | Shared burden; production measures; allocation driver | Burden attributed to ferro-nickel | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_technology` | All foreground records | Data shall represent the declared primary or secondary route, furnace technology, abatement, and product form; do not combine materially different routes without separate weighting. | Process description, route share, equipment list, operating logs |
| `dq_geography` | Energy, transport, upstream materials, and direct emissions | Use site-specific foreground data and geographically appropriate upstream datasets; disclose proxies and grid-region mismatch. | Facility location, supplier origin, dataset geography, proxy register |
| `dq_time` | All records | Use a common representative period, normally at least 12 consecutive months; justify shorter campaigns and identify abnormal shutdowns or start-ups. | Reporting dates, production log, representativeness statement |
| `dq_precision` | Measured and calculated quantities | Retain calibration, sampling uncertainty, detection limits, missing-data treatment, and mass/energy balance closure; material unresolved imbalance fails validation. | QA/QC files, uncertainty records, balance worksheets |
| `dq_completeness` | All foreground processes | Account for all material feeds, energy carriers, direct releases, slags, dusts, wastewater, and hazardous flows; any omission must be quantified and justified. | Completeness checklist, site reconciliation, exclusion log |
| `dq_source_identity` | Linked upstream data | Record dataset UUID or durable identifier, version used in the data package, provider, geography, technology, and access date. | Data-source register and exchange links |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference product | Confirm CPC 3.0 `41114`, product name, product form, plant-gate state, and reference-flow UUID; reject refined nickel, matte, generic alloy, or waste-flow substitution. | `iso-6501-2020` |
| `validate_reference_amount` | Reference flow | Confirm exactly 1,000 kg after normalization, using mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `eu-pef-method-2021` |
| `validate_composition` | Product and nickel-bearing feeds | Require representative sampling, declared analytical basis, nickel content, specified impurities, and lot/campaign linkage; composition without sampling evidence is incomplete. | `iso-8049-2016`; `iso-8050-1988` |
| `validate_route_boundary` | Dataset scope | Confirm route declaration and inclusion of every applicable required/conditional process, abatement, direct releases, residues, and linked upstream inputs. | `ec-jrc-nfm-bref-2017` |
| `validate_inventory_balance` | Foreground inventory | Reconcile product mass, dry mass, nickel, energy, stocks, and internal recycle; investigate material unexplained imbalance and values outside screening ranges rather than clipping them. | `bartzas-komnitsas-ferronickel-lca-2015` |
| `validate_allocation` | Shared operations and outputs | Confirm the allocation hierarchy was followed, shares sum to one, internal loops receive no avoided-product credit, and waste/co-product status is supported. | `eu-pef-method-2021` |
| `validate_data_quality` | All evidence | Confirm technological, geographical, temporal, precision, completeness, and source-identity evidence; disclose proxy and uncertainty limitations. | `eu-pef-method-2021` |
| `validate_reasoned_ranges` | Candidate QA guardrails | Treat reasoned-estimate ranges only as review triggers; require explanation and source-specific evidence for outliers, and never replace collected values with the range limits. | `ec-jrc-nfm-bref-2017`; `bartzas-komnitsas-ferronickel-lca-2015` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for finished ferro-nickel production at plant gate |
| downstream_use | Construction of TianGong `process` datasets and `lifecyclemodel` projections for cradle-to-gate alloy supply |
| allowed_use | Route- and site-representative ferro-nickel inventories with declared composition, geography, period, upstream links, allocation, and residue fate |
| excluded_use | Refined nickel, nickel matte, nickel pig iron marketed separately, generic nickel alloys, downstream steel products, or substitution of candidate screening ranges for measured data |
| required_metadata | PCR id; CPC code; reference-flow UUID; nickel content and analytical basis; product form; route; feed type and recycled share; facility/geography; period; allocation; gate; upstream dataset identities |
| required_quality_disclosure | Sampling and calibration evidence; direct-emission method; mass, nickel, and energy balance closure; exclusions; proxies; uncertainty; screening-range exceptions; waste/co-product decisions |
| update_trigger | Change in product specification, route, furnace or abatement technology, feed mix, allocation, facility geography, or a material inventory parameter; otherwise review at least annually |

## 11. Data Sources

| source_id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ec-jrc-nfm-bref-2017` | `official_guidance` | Cusano, G. et al. (2017), *Best Available Techniques (BAT) Reference Document for the Non-Ferrous Metals Industries*, EUR 28648 EN, European Commission Joint Research Centre; https://publications.jrc.ec.europa.eu/repository/handle/JRC107041; DOI: 10.2760/8224 | Primary and secondary ferro-nickel process sequence, inputs, emissions, abatement, dust recycle, and site benchmark context |
| `iso-6501-2020` | `standard` | ISO 6501:2020, *Ferronickel — Specification and delivery requirements*; https://www.iso.org/standard/77250.html | Product forms, commercial identity, specification, and delivery context |
| `iso-8049-2016` | `standard` | ISO 8049:2016, *Ferronickel shot — Sampling for analysis*; https://www.iso.org/standard/65091.html | Representative sampling of shot lots for chemical analysis |
| `iso-8050-1988` | `standard` | ISO 8050:1988, *Ferronickel ingots or pieces — Sampling for analysis*; https://www.iso.org/standard/15065.html | Representative sampling of ingots and pieces for chemical composition |
| `eu-pef-method-2021` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods; http://data.europa.eu/eli/reco/2021/2279/oj | Reference-flow normalization, allocation hierarchy, completeness, and data-quality dimensions |
| `bartzas-komnitsas-ferronickel-lca-2015` | `literature` | Bartzas, G. and Komnitsas, K. (2015), “Life cycle assessment of ferronickel production in Greece,” *Resources, Conservation and Recycling* 105, 113–122; DOI: 10.1016/j.resconrec.2015.10.016; https://sln.eramet.com/wp-content/uploads/sites/5/2023/09/40_LIF1.pdf | Cradle-to-gate foreground structure, mass and energy balances, primary-route site data, slag/dust handling, and data-quality evidence |
