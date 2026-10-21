---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-clams-cockles-and-ark-shells-live-fresh-or-chilled
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Farmed clams, cockles and ark shells, live, fresh or chilled

## 1. Scope and Applicability

This PCR guides the production of foreground life cycle inventory datasets for farmed clams, cockles and ark shells supplied live, fresh or chilled. It covers grow-out aquaculture of in-shell bivalves of the clam, cockle and ark shell groups, their harvesting, and landing-site handling up to the point where the product leaves the landing-site gate. The reference product state is live, fresh or chilled; the product is not frozen, dried, salted, smoked, brined or otherwise processed.

This PCR applies to foreground data packages produced by farm operators or by practitioners using farm records. It does not cover wild-caught clams, cockles and ark shells, seed or spat production inside a hatchery or nursery as a foreground product, processed or preserved clam products, or downstream distribution, retail and consumption.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-clams-cockles-and-ark-shells-live-fresh-or-chilled |
| classification_refs | CPC 3.0 code 04452 (exact) |
| covered_products | Farmed clams, cockles and ark shells, in shell, supplied live, fresh or chilled; typical species include Manila clam (Ruditapes philippinarum), blood cockle (Tegillarca granosa) and hard clam (Mercenaria mercenaria) |
| excluded_products | Wild-caught clams, cockles and ark shells (CPC 04451); frozen, smoked, dried, salted or in-brine clam products; canned or otherwise processed clam meat; live clams supplied as seed, bait or for ornamental use |
| representative_product | Manila clam (Ruditapes philippinarum), live in shell, farmed on intertidal flats and supplied fresh at a landing site |
| production_route | Clam seed (spat) supply as an upstream starting condition, grow-out culture on intertidal flats, in ponds or in suspended systems, harvesting, then landing-site washing, depuration, grading and chilling where declared |
| market_state | Production mix at landing site; large-scale commercial bivalve aquaculture dominated by Asian producers, with China the largest producer |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Farmed clams, cockles and ark shells, live, fresh or chilled, in shell, at the landing-site gate |
| How much | 1 kg drained live weight in shell |
| How well | Marketable size grade; live, fresh or chilled state as declared; mortality and reject share within declared limits |
| How long or cycle | One grow-out production cycle from stocking to dispatch, including landing-site handling |
| reference_flow_link | Process `landing_site_handling`, Outputs, Product flows, row `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Farmed clams, cockles and ark shells, live, fresh or chilled `4a6625c6-2c26-4618-aaab-4ea8949e5635` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; culture system (intertidal flat, pond, or suspended); product state (live, fresh, or chilled); in-shell drained live weight; production region and site; grow-out cycle period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product flow | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The reference flow is measured as drained live weight in shell in kg; counts or crate numbers must be converted with declared, calibrated mass conversion records. |
| `live_weight_state` | clam product and biomass amounts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | All clam biomass amounts (seed, harvested, dispatched, rejected, dead stock) are recorded as in-shell drained live weight in kg; shell-free meat yields may not be substituted. |
| `electricity_energy` | electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | Electricity is collected in kWh from meters or utility bills; when the host dataset stores electricity on an energy basis, 1 kWh is converted to 3.6 MJ. |
| `water_volume` | process water inputs | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Washing and depuration water is recorded in m3; a screening conversion of 1,000 kg per m3 applies where a mass property is required. |
| `seed_dual_record` | clam seed input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Clam seed is recorded both as stocked mass in kg and as seed count with size grade, so that survival and growth can be reconciled. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Clam seed (spat) at the grow-out farm gate, ready for stocking; hatchery, nursery or natural seed collection that produced the seed is upstream of the foreground boundary |
| starting_condition_role | boundary_start |
| product_classification_scope | CPC 3.0 code 04452, farmed clams, cockles and ark shells, live, fresh or chilled |
| recursive_input_rule | Clam seed or live clams of the same product category received from another farm are recorded as product inputs carrying an upstream dataset produced under this PCR; the receiving data package does not recurse into the earlier production cycle |
| upstream_dataset_requirement | Seed supply, fertilizers, lime, electricity, diesel, gear materials, process water and ice are supplied by supplier-specific foreground datasets or by secondary background datasets |
| disclosure | The data package declares culture system, site and water body, stocking density and cycle length, fertilization and pond preparation practice, harvesting method, depuration practice, survival rate, allocation keys and cut-off choices |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_starting_condition` | foreground system boundary | The foreground boundary starts at clam seed delivered to the grow-out farm; seed production burdens enter only through the upstream dataset of the seed input flow. | `fao-cultured-aquatic-species-ruditapes-philippinarum` |
| `sb_recursive_input` | same-category inputs | Live clams or seed of this category moved between farms are modelled as product inputs with an upstream dataset under this PCR, never as a recursive expansion of the receiving dataset. |  |
| `sb_cut_off` | foreground inputs | An input may be cut off only when its mass share is below 1% of total product inputs and the cumulative cut-off stays below 5%; capital gear with multi-cycle service life is annualized instead of cut off, and every cut-off is disclosed. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `grow_out_culture` | Grow-out culture on intertidal flats, in ponds or in suspended systems | required |  | foreground core | kg marketable live clams transferred to harvest per cycle |
| `harvesting` | Harvesting of market-size clams | required |  | foreground | kg harvested live clams landed per cycle |
| `landing_site_handling` | Landing-site washing, depuration, grading and chilling | conditional | Included when the declared route washes, depurates, grades or chills the product at a landing facility; required when the product is declared chilled or depurated | foreground | 1 kg live, fresh or chilled clams at the landing-site gate |

### Process: Grow-out culture on intertidal flats, in ponds or in suspended systems (`grow_out_culture`)

#### Inputs

##### Product flows

###### Clam seed (spat) stocked in the culture system (`clam_seed`)

Clam seed from a hatchery, nursery or natural collection crosses the foreground boundary at stocking and starts the grow-out cycle. The quantity is obtained from stocking logs and supplier delivery notes.

- Selected flow: Clam seed (spat), live, at farm gate
- Flow property / unit: Mass / kg
- Amount rule: stocked seed mass per production cycle, with seed count and size grade recorded alongside
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_stocking_records`

- Range: Seed stocking intensity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 0.6
  - Unit: kg
  - Basis: kg stocked seed per kg marketable live clams transferred to harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrogen fertilizer applied for pond fertilization (`nitrogen_fertilizer`)

Nitrogen fertilizer such as urea is recorded when pond fertilization is practised to sustain phytoplankton. The quantity is obtained from purchase invoices and field application logs.

- Selected flow: Nitrogen fertilizer (urea or equivalent)
- Flow property / unit: Mass / kg
- Amount rule: applied fertilizer mass per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_records`

- Range: Fertilizer nitrogen intensity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: kg nitrogen fertilizer per kg marketable live clams transferred to harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Phosphate fertilizer applied for pond fertilization (`phosphate_fertilizer`)

Phosphate fertilizer is recorded when pond fertilization is practised. The quantity is obtained from purchase invoices and field application logs.

- Selected flow: Superphosphate `8c9749b5-e19f-4480-a575-3058aff804b3`
- Flow property / unit: Mass / kg
- Amount rule: applied fertilizer mass per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fertilizer_records`

- Range: Fertilizer phosphate intensity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: kg phosphate fertilizer per kg marketable live clams transferred to harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Lime applied for pond or bottom preparation (`lime`)

Lime is recorded when ponds or culture bottoms are disinfected or conditioned before stocking. The quantity is obtained from pond preparation logs and purchase invoices.

- Selected flow: hydrated lime dry slaked `88c10493-a480-431e-9ea2-372d3a99318d`
- Flow property / unit: Mass / kg
- Amount rule: applied lime mass per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pond_preparation_records`

- Range: Lime application intensity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg
  - Basis: kg lime per kg marketable live clams transferred to harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for aeration and water pumping (`growout_electricity`)

Electricity powers aerators and water exchange pumps during grow-out. The quantity is obtained from meter readings or utility bills allocated to the grow-out process.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered electricity allocated to grow-out per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`

- Range: Grow-out electricity intensity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh
  - Basis: kWh per kg marketable live clams transferred to harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel for culture boats and machinery (`growout_diesel`)

Diesel fuels culture boats and machinery used for inspection, maintenance and in-situ work during grow-out. The quantity is obtained from fuel purchase records and equipment logs.

- Selected flow: Diesel `9fc9d30c-0229-459c-a7f5-8f55d6533225`
- Flow property / unit: Mass / kg
- Amount rule: diesel consumed by grow-out operations per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`

- Range: Grow-out diesel intensity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: kg diesel per kg marketable live clams transferred to harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Plastic gear materials consumed (`gear_plastics`)

Nets, mesh bags, ropes and other plastic culture gear are consumed over their service life. The quantity is obtained from stock records and replacement logs annualized per cycle.

- Selected flow: polyethylene low density granulate (PE-LD) `4f19f116-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: annualized consumption of plastic gear per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_consumption_records`

- Range: Plastic gear consumption guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: kg plastic gear per kg marketable live clams transferred to harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bamboo stakes and supports consumed (`bamboo_stakes`)

Bamboo stakes and supports are recorded when intertidal or pond culture uses bamboo structures. The quantity is obtained from stock records annualized per cycle.

- Selected flow: Bamboo Wood `b5a65214-5930-42b6-994f-02fbcf42798b`
- Flow property / unit: Volume / m3
- Amount rule: annualized bamboo consumption per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_consumption_records`

- Range: Bamboo consumption guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.005
  - Unit: m3
  - Basis: m3 bamboo per kg marketable live clams transferred to harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Market-size live clams transferred to harvesting (`marketable_clams_growout`)

Market-size live clams standing in the culture system at the end of grow-out transfer to harvesting. The quantity equals the harvested yield reconciled with harvest records.

- Selected flow: Farmed clams, cockles and ark shells, live, fresh or chilled `4a6625c6-2c26-4618-aaab-4ea8949e5635`
- Flow property / unit: Mass / kg
- Amount rule: marketable live weight per production cycle reconciled with harvest yield records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production cycle output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_yield_records`

- Range: Harvest multiple over stocked seed guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 20
  - Unit: kg
  - Basis: kg marketable live clams per kg stocked seed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### End-of-life plastic culture gear (`culture_gear_waste`)

Worn-out nets, ropes and other plastic gear leave the process as waste at replacement. The quantity is obtained from waste transfer notes or weighed disposal records.

- Selected flow: Plastic Waste `3fd9ff2b-455a-4ed6-a52d-e2cb5a1484f3`
- Flow property / unit: Mass / kg
- Amount rule: disposed plastic gear mass per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`

- Range: Plastic gear waste guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: kg plastic waste per kg marketable live clams transferred to harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dead stock and shell residues (`mortality_shell_residue`)

Clams that die during grow-out and their shell residues are collected or returned to the culture bottom. The quantity is estimated from periodic mortality inspections.

- Selected flow: Dead stock and shell residues from bivalve culture
- Flow property / unit: Mass / kg
- Amount rule: estimated dead stock mass per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mortality_records`

- Range: Mortality residue guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: kg dead stock per kg marketable live clams transferred to harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Net nitrogen exchange with coastal water (`nutrient_n_exchange`)

Net nitrogen exchange between the culture system and coastal water combines fertilizer input, influent water nitrogen, harvested biomass removal and sediment retention; negative values denote net removal by the clams. The quantity is calculated by rule `cr_nutrient_balance`.

- Selected flow: nitrogen, total (excluding N2) `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Flow property / unit: Mass / kg
- Amount rule: net nitrogen exchange per production cycle from the nutrient balance calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_balance_records`

- Range: Net nitrogen exchange guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: -0.05
  - Upper: 0.02
  - Unit: kg
  - Basis: kg N per kg marketable live clams transferred to harvest; negative values denote net removal
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Net phosphorus exchange with coastal water (`nutrient_p_exchange`)

Net phosphorus exchange between the culture system and coastal water follows the same balance as nitrogen; negative values denote net removal. The quantity is calculated by rule `cr_nutrient_balance`.

- Selected flow: phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Flow property / unit: Mass / kg
- Amount rule: net phosphorus exchange per production cycle from the nutrient balance calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrient_balance_records`

- Range: Net phosphorus exchange guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: -0.01
  - Upper: 0.005
  - Unit: kg
  - Basis: kg P per kg marketable live clams transferred to harvest; negative values denote net removal
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Suspended solids from biodeposition and resuspension (`growout_suspended_solids`)

Biodeposits and maintenance activities change suspended solids exchange with the surrounding water. The quantity is modelled when direct measurement is unavailable.

- Selected flow: Suspended solids, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Flow property / unit: Mass / kg
- Amount rule: modelled net suspended solids per production cycle
- Value mode: Modelled estimate (`modelled_estimate`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg marketable live clams transferred to harvest
- Basis kind: Process output (`process_output`)
- Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Suspended solids screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: kg suspended solids per kg marketable live clams transferred to harvest
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvesting of market-size clams (`harvesting`)

#### Inputs

##### Product flows

###### Diesel for harvest boats and dredging or pumping machinery (`harvest_diesel`)

Diesel fuels harvest boats, dredges and pump systems during harvesting. The quantity is obtained from fuel purchase records and equipment logs allocated to harvesting.

- Selected flow: Diesel `9fc9d30c-0229-459c-a7f5-8f55d6533225`
- Flow property / unit: Mass / kg
- Amount rule: diesel consumed by harvesting per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested live clams landed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records_harvest`

- Range: Harvest diesel intensity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg
  - Basis: kg diesel per kg harvested live clams landed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for hydraulic harvesting pumps (`harvest_electricity`)

Electricity powers hydraulic harvesting pumps and winches where used. The quantity is obtained from meter readings allocated to harvesting.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered electricity allocated to harvesting per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested live clams landed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records_harvest`

- Range: Harvest electricity intensity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kWh
  - Basis: kWh per kg harvested live clams landed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested live clams landed (`harvested_clams`)

Harvested live clams are landed and transferred to landing-site handling. The quantity is obtained from landing weighing records.

- Selected flow: Farmed clams, cockles and ark shells, live, fresh or chilled `4a6625c6-2c26-4618-aaab-4ea8949e5635`
- Flow property / unit: Mass / kg
- Amount rule: landed live weight per production cycle from calibrated weighing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per production cycle output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_yield_records_harvest`

- Range: Harvest recovery over marketable stock guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1
  - Unit: kg
  - Basis: kg harvested live clams landed per kg marketable live clams transferred from grow-out
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Undersized clams and incidental by-catch returned to the water (`undersized_bycatch_return`)

Undersized clams and incidental by-catch sorted at harvest are returned to the culture water. The quantity is estimated from sorting records at landing.

- Selected flow: Undersized clams and incidental by-catch returned alive
- Flow property / unit: Mass / kg
- Amount rule: estimated returned mass per production cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg harvested live clams landed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_yield_records_harvest`

- Range: Returned undersized and by-catch guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg
  - Basis: kg returned per kg harvested live clams landed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Suspended solids from sediment disturbance at harvest (`harvest_suspended_solids`)

Dredging, raking or hydraulic harvesting disturbs sediment and releases suspended solids. The quantity is modelled when direct measurement is unavailable.

- Selected flow: Suspended solids, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Flow property / unit: Mass / kg
- Amount rule: modelled suspended solids release per production cycle
- Value mode: Modelled estimate (`modelled_estimate`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg harvested live clams landed
- Basis kind: Process output (`process_output`)
- Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Harvest sediment disturbance screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg
  - Basis: kg suspended solids per kg harvested live clams landed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Landing-site washing, depuration, grading and chilling (`landing_site_handling`)

#### Inputs

##### Product flows

###### Process water for washing and depuration (`process_water`)

Clean water for washing and depuration crosses the boundary at the landing facility; seawater may substitute tap water and is recorded as water volume with the source declared. The quantity is obtained from water meters or pumping records.

- Selected flow: Tap water `3a8411b6-e476-4f98-9d77-0d492661a07f`
- Flow property / unit: Volume / m3
- Amount rule: metered water volume per handling season
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dispatched live, fresh or chilled clams
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`

- Range: Process water intensity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: m3
  - Basis: m3 per kg dispatched live, fresh or chilled clams
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity for depuration, aeration and refrigeration (`handling_electricity`)

Electricity powers depuration pumps, aeration, ice making and cold storage at the landing facility. The quantity is obtained from meter readings allocated to handling.

- Selected flow: Electricity, medium voltage `2eb3b2fd-6511-4a22-9018-768024a5b5a6`
- Flow property / unit: Net calorific value / kWh
- Amount rule: metered electricity allocated to handling per season
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dispatched live, fresh or chilled clams
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_records`

- Range: Handling electricity intensity guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kWh
  - Basis: kWh per kg dispatched live, fresh or chilled clams
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ice used for chilling (`ice`)

Ice is recorded when the product is chilled for dispatch. The quantity is obtained from purchase invoices or ice-maker records.

- Selected flow: Ice and snow `1ff2c05e-4b5d-4971-9883-65f2a6b0007f`
- Flow property / unit: Mass / kg
- Amount rule: ice consumed per handling season
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dispatched live, fresh or chilled clams
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ice_records`

- Range: Ice consumption guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: kg ice per kg dispatched live, fresh or chilled clams
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live, fresh or chilled farmed clams at the landing-site gate (`reference_product_output`)

The reference product leaves the landing-site gate live, fresh or chilled for first sale. The quantity is obtained from dispatch weighing records and equals the reference flow amount of 1 kg in the normalized data package.

- Selected flow: Farmed clams, cockles and ark shells, live, fresh or chilled `4a6625c6-2c26-4618-aaab-4ea8949e5635`
- Flow property / unit: Mass / kg
- Amount rule: dispatched live weight per handling season; normalized to 1 kg reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: reference flow of 1 kg dispatched product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_dispatch_records`

- Range: Dispatch share of landed mass guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1
  - Unit: kg
  - Basis: kg dispatched live, fresh or chilled clams per kg harvested live clams landed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Dead or broken clams rejected at grading (`grading_rejects`)

Dead or broken clams rejected during grading leave the process as organic waste. The quantity is obtained from grading line records.

- Selected flow: Rejected dead or broken clams from grading
- Flow property / unit: Mass / kg
- Amount rule: rejected mass per handling season
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dispatched live, fresh or chilled clams
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reject_records`

- Range: Grading reject guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg
  - Basis: kg rejects per kg dispatched live, fresh or chilled clams
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Chemical oxygen demand in depuration and washing effluent (`effluent_cod`)

Depuration and washing effluent carries organic matter measured as chemical oxygen demand. The quantity is modelled from effluent volume and declared effluent quality or measured directly.

- Selected flow: Chemical Oxygen Demand `e57fc631-2c77-457a-aa30-be79e357792b`
- Flow property / unit: Mass / kg
- Amount rule: modelled or measured COD load per handling season
- Value mode: Modelled estimate (`modelled_estimate`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dispatched live, fresh or chilled clams
- Basis kind: Process output (`process_output`)
- Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Effluent COD screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.02
  - Unit: kg
  - Basis: kg COD per kg dispatched live, fresh or chilled clams
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Suspended solids in washing effluent (`effluent_suspended_solids`)

Washing effluent carries sand, silt and shell debris as suspended solids. The quantity is modelled from effluent volume and declared effluent quality or measured directly.

- Selected flow: Suspended solids, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Flow property / unit: Mass / kg
- Amount rule: modelled or measured suspended solids load per handling season
- Value mode: Modelled estimate (`modelled_estimate`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dispatched live, fresh or chilled clams
- Basis kind: Process output (`process_output`)
- Evidence kind: Reasoned estimate (`reasoned_estimate`)

- Range: Effluent suspended solids screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg
  - Basis: kg suspended solids per kg dispatched live, fresh or chilled clams
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_shell_part_of_product` | reference product | Shells are part of the live in-shell reference product; no allocation between meat and shell is performed. |  |
| `al_polyculture_shared_inputs` | shared pond or flat inputs in multi-species culture | Where clams share ponds, flats or equipment with other species, shared inputs are allocated to the clam output by economic value of the harvested outputs over the cycle; physical mass allocation is used only when value data are unavailable, and the applied key is disclosed. | `iso-14044-2006` |
| `al_mortality_no_coproduct` | dead stock, rejects and returned undersized clams | Mortalities, grading rejects and returned undersized clams carry no economic value and receive no allocated burden; all foreground burdens remain with the dispatched reference product. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_stocking_records` | `grow_out_culture` | clam seed input | stocking log | seed batch id; stocked mass; seed count; size grade; stocking date | farm stocking records with supplier delivery notes | kg | per stocking event | full grow-out cycle | each pond or culture parcel | sum of stocked seed mass per cycle | supplier invoices; signed stocking log |
| `cp_fertilizer_records` | `grow_out_culture` | fertilizer inputs | purchase and application log | product name; nutrient content; applied mass; application date | purchase invoices and field application log | kg | per application | full grow-out cycle | each pond | sum per cycle by fertilizer product | invoices; fertilizer label or specification |
| `cp_pond_preparation_records` | `grow_out_culture` | lime input | preparation record | lime product; applied mass; date; pond area | pond preparation log with purchase invoices | kg | per pond preparation | one preparation per production cycle | each pond | sum per cycle | preparation log; purchase invoices |
| `cp_electricity_records` | `grow_out_culture` | electricity input | metered consumption record | meter reading; period; allocated equipment | meter readings or utility bills, allocated by equipment hours where shared | kWh | monthly | at least one full production cycle | whole farm allocated to processes | sum per period allocated to each process | utility bills; meter reading records |
| `cp_fuel_records` | `grow_out_culture` | diesel input | fuel log | fuel type; mass or volume; date; equipment | fuel purchase records and equipment logs | kg | per purchase or monthly | full production cycle | farm fleet allocated to processes | sum per cycle allocated to each process | fuel invoices; equipment hour logs |
| `cp_material_consumption_records` | `grow_out_culture` | gear material inputs | consumption record | material type; mass or volume; service life; replaced share | stock records and replacement logs annualized over service life | kg or m3 | per replacement event | full production cycle | each culture parcel | annualized consumption summed per cycle | purchase invoices; inventory counts |
| `cp_harvest_yield_records` | `grow_out_culture` | harvested output | harvest log | harvest date; parcel; landed live weight | landing weighing with calibrated scales | kg | per harvest event | harvest season of the cycle | each harvested parcel | sum per cycle | weighing records; sales slips |
| `cp_mortality_records` | `grow_out_culture` | dead stock output | mortality log | event date; estimated mass; cause; disposal route | periodic mortality estimates during culture inspection | kg | monthly or per event | full production cycle | each culture parcel | sum per cycle | inspection notes; disposal records |
| `cp_waste_records` | `grow_out_culture` | waste gear output | waste transfer log | waste type; mass; disposal route | waste transfer notes or weighed disposal records | kg | per disposal event | full production cycle | whole farm | sum per cycle | waste contractor receipts |
| `cp_nutrient_balance_records` | `grow_out_culture` | nutrient balance inputs | water and biomass test record | fertilizer nutrient input; influent water nutrient concentration; harvested biomass nutrient content | laboratory analysis of water and biomass samples with fertilizer specifications | kg | water sampled at stocking, mid-cycle and harvest; biomass at harvest | full production cycle | each pond or water exchange zone | cycle nutrient balance normalized per kg output | laboratory reports; sampling records |
| `cp_water_records` | `landing_site_handling` | process water input | water meter log | source type; volume; period | water meter readings or pumping records | m3 | monthly | handling season of the cycle | landing facility | sum per season | meter readings; utility bills |
| `cp_ice_records` | `landing_site_handling` | ice input | ice consumption log | ice mass; date; source | purchase invoices or ice-maker records | kg | per dispatch day | handling season of the cycle | landing facility | sum per season | invoices; ice-maker logs |
| `cp_product_dispatch_records` | `landing_site_handling` | reference product output | dispatch log | dispatch date; product state; mass; grade | calibrated scale weighing at dispatch | kg | per dispatch | handling season of the cycle | landing facility | sum per season | dispatch notes; sales records |
| `cp_reject_records` | `landing_site_handling` | grading rejects output | grading log | reject mass; cause; disposal route | grading line records | kg | per grading batch | handling season of the cycle | landing facility | sum per season | grading logs; disposal records |
| `cp_electricity_records_harvest` | `harvesting` | electricity input | metered consumption record | meter reading; period; allocated equipment | meter readings or utility bills allocated to harvesting equipment | kWh | monthly | harvest season of the cycle | farm allocated to harvesting | sum per harvest season allocated to the process | utility bills; meter reading records |
| `cp_fuel_records_harvest` | `harvesting` | diesel input | fuel log | fuel type; mass or volume; date; equipment | fuel purchase records and equipment logs allocated to harvesting | kg | per purchase or monthly | harvest season of the cycle | farm fleet allocated to harvesting | sum per harvest season allocated to the process | fuel invoices; equipment hour logs |
| `cp_harvest_yield_records_harvest` | `harvesting` | harvested output and returned undersized | harvest and sorting log | harvest date; parcel; landed live weight; returned undersized and by-catch estimate | landing weighing with calibrated scales and sorting estimates | kg | per harvest event | harvest season of the cycle | each harvested parcel | sum per cycle | weighing records; sorting notes |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_output_normalization` | all foreground inventory rows | amount_per_kg = recorded_cycle_amount / dispatched_reference_product_kg | recorded cycle amounts; dispatched reference product mass | inventory amount normalized to 1 kg reference product |  |
| `cr_electricity_unit_conversion` | electricity rows | electricity_MJ = electricity_kWh x 3.6 | metered electricity in kWh | electricity amount on an energy basis where the dataset requires it |  |
| `cr_nutrient_balance` | `nutrient_n_exchange`; `nutrient_p_exchange` | net_nutrient_exchange = fertilizer_nutrient_input + influent_water_nutrient - harvested_biomass_nutrient - declared_sediment_retention; a negative result denotes net removal from the water and must be disclosed with its calculation inputs | fertilizer records; influent water nutrient tests; harvested biomass nutrient tests | net nitrogen or phosphorus exchange per kg reference product |  |
| `cr_harvest_mass_closure` | `harvesting`; `landing_site_handling` | harvested_mass = dispatched_mass + grading_reject_mass + handling_mortality_mass; deviations beyond 10 percent must be explained in the data package | harvest yield records; dispatch records; reject records | reconciled harvest-to-dispatch mass closure |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference flow and UUID-bearing rows | Selected Tiangong flow, flow property and unit group UUIDs match the names declared in this PCR and are confirmed by lookup before publication. | lookup confirmation record retained outside PCR content |
| `dq_measurement` | collected foreground amounts | Amounts derive from calibrated meters, scales, invoices or laboratory analyses; any estimation method is declared. | calibration records; invoices; laboratory certificates |
| `dq_temporal_coverage` | foreground dataset | Records cover at least one full grow-out production cycle including its harvest and handling season. | stocking, harvest and dispatch logs spanning the cycle |
| `dq_completeness` | process inventory | Every required process and flow row is populated or explicitly justified as not applicable to the declared route. | completeness checklist against the process map |
| `dq_disclosure` | dataset metadata | Culture system, site, fertilization practice, depuration practice, survival rate, allocation keys and cut-off choices are disclosed. | dataset metadata fields |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_flow_identity` | reference flow definition | The data package reference flow carries the product flow, flow property and unit group UUIDs declared in section 3, with reference amount 1 and unit kg. |  |
| `vr_required_qualifiers` | dataset metadata and reference flow comment | Every required qualifier in section 3 is declared; a data package with a missing qualifier fails validation. |  |
| `vr_mass_closure` | harvest and handling mass balance | Harvested mass reconciles with dispatched mass plus rejects and handling mortality within 10 percent, and the closure calculation is documented. |  |
| `vr_unit_consistency` | inventory rows | Amounts use the units declared in the flow rows and section 4; electricity is stored consistently in kWh or MJ with the conversion documented. |  |
| `vr_range_conformance` | collected foreground amounts | Collected amounts outside a QA guardrail range are flagged with an explanation or corrected before the data package is treated as conforming. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_product_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Life cycle modelling of farmed clams, cockles and ark shells supplied live, fresh or chilled; upstream dataset for same-category transfers between farms under this PCR |
| excluded_use | Representing wild-caught products; representing processed, frozen or preserved clam products; use outside the declared culture system, region and cycle without remodelling |
| required_metadata | required qualifiers of section 3; data quality disclosures of section 8; allocation keys; cut-off disclosures |
| required_quality_disclosure | measurement basis, temporal coverage, completeness against the process map, and guardrail range flags |
| update_trigger | new production cycle data; change of culture system, fertilization or depuration practice; correction of a referenced Tiangong UUID; methodological update of this PCR |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-ver-3-0` | Standard (`standard`) | United Nations Central Product Classification Version 3.0, code 04452 | product category identity and classification scope |
| `fao-cultured-aquatic-species-ruditapes-philippinarum` | Official guidance (`official_guidance`) | FAO Cultured Aquatic Species Information Programme, Ruditapes philippinarum fact sheet | process decomposition, culture systems, representative product and boundary starting condition |
| `fao-fishstat-aquaculture-production` | Dataset (`dataset`) | FAO FishStat global aquaculture production statistics | market state and production scale |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006 Environmental management - Life cycle assessment - Requirements and guidelines | allocation hierarchy for shared inputs |
