---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-man-made-staple-fibres
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other woven fabrics of man-made staple fibres

## 1. Scope and Applicability

This PCR guides production of a foreground manufacturing data package for a saleable woven fabric classified to CPC 3.0 code 26790, Other woven fabrics of man-made staple fibres. The product is a woven fabric whose declared composition places it in the residual man-made-staple-fibre subclass after the more specific synthetic-staple, artificial-staple, cotton-blend, and wool-or-fine-animal-hair-blend subclasses have been excluded. The data package covers yarn receipt, winding and warping, sizing when performed, weaving, every wet or dry treatment needed to reach the declared saleable state, inspection, presentation, and packaging through the factory gate.

Fibre manufacture, staple-fibre spinning, manufacture of purchased yarns and chemicals, off-site electricity and fuel production, inbound transport unless included by the study, garment or made-up article manufacture, distribution, use, and end-of-life are outside the foreground boundary. Knitted or crocheted fabrics, nonwovens, carpets, narrow fabrics, pile or chenille fabrics, terry fabrics, tyre-cord fabrics, glass-fibre fabrics, and products assigned to a more specific CPC subclass are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-man-made-staple-fibres |
| classification_refs | CPC 3.0: 26790, Other woven fabrics of man-made staple fibres, exact scope |
| covered_products | Greige or finished woven fabrics classified to CPC 26790 after the declared fibre composition and the exclusions for the more specific CPC 2674, 2675, 2676, and 2677 subclasses are applied |
| excluded_products | Man-made filament fabrics; synthetic-staple fabrics with at least the CPC 2674 threshold; artificial-staple fabrics with at least the CPC 2675 threshold; the cotton and wool or fine-animal-hair blends covered by CPC 2676 and 2677; special, knitted, nonwoven, narrow, pile, chenille, terry, tyre-cord, glass-fibre, carpet, apparel, and made-up textile products |
| representative_product | Saleable woven fabric of man-made staple fibres in a declared greige or finished state, supplied as rolls or another declared commercial presentation |
| production_route | Purchased staple-fibre yarn receipt, winding, warping, conditional sizing, loom weaving, conditional pretreatment and finishing, inspection, and packaging |
| market_state | Factory-gate fabric with declared fibre types and mass shares, yarn counts, weave, usable width, mass per unit area, colour and finish, moisture basis, defect grade, and packaging state |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Woven fabric of man-made staple fibres in the declared saleable state |
| How much | 1,000 kg net saleable fabric at the factory gate on the declared moisture basis |
| How well | Conforming to the declared composition, yarn count, weave, usable width, mass per unit area, colour or finish specification, defect grade, and moisture basis |
| How long or cycle | One declared production reporting period and its included lots; no use-stage duration is represented |
| reference_flow_link | reference_product_mass |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other woven fabrics of man-made staple fibres `aa850d80-fcb5-40ab-8539-61771bb51c0f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre types and dry-mass shares; recycled-content share and accounting method; warp and weft yarn counts; weave; usable width; mass per unit area; greige or finished state; each performed pretreatment, dyeing, printing, coating, drying, curing, or functional-finishing operation; colour specification; moisture basis; defect grade; geography; reporting period; packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent data-package fields. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and reference-flow-normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize inventory results to 1,000 kg of accepted saleable fabric, excluding roll cores and packaging, on one declared moisture basis. |
| `common_moisture_basis` | yarn, fabric, waste, and reference-product mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record the as-measured mass and its moisture or conditioning basis, then convert all textile mass-balance terms to the same declared basis. |
| `area_to_mass` | fabric records collected by area or length | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert area or length using lot-specific usable width and measured mass per unit area; retain the raw measurements and equation. |
| `carrier_separation` | electricity, steam, fuel, and recovered heat | carrier-specific property | carrier-specific unit | Keep each energy carrier as a separate exchange and retain the metered or invoiced unit; do not report one combined energy flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased warp and weft yarns at the foreground facility receiving point, with supplier, fibre composition, yarn count, mass, moisture basis, and upstream dataset reference declared |
| starting_condition_role | Foreground manufacture begins at yarn receipt; fibre production and yarn spinning remain upstream |
| product_classification_scope | The reference product must satisfy CPC 3.0 code 26790 after composition evidence and all neighbouring-subclass exclusions are applied |
| recursive_input_rule | A purchased fabric already within this PCR category is recorded once as an upstream product input with its own conforming dataset; its manufacture is not rebuilt recursively in the receiving foreground process |
| upstream_dataset_requirement | Link upstream datasets for each purchased yarn, chemical, packaging component, electricity supply, steam supply, water supply, fuel, transport service in scope, and off-site treatment service |
| disclosure | Declare every on-site and outsourced operation; fibre and recycled-content accounting; moisture basis; internal rework; rejected output; co-products; water source; wastewater destination; air-emission control; waste destination; and any excluded operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | all foreground processes | Include yarn receipt and preparation, weaving, every operation needed to reach the declared saleable state, internal rework, utilities, direct emissions, waste and wastewater handling before transfer, inspection, and packaging through the factory gate. | `jrc-txt-bref-2023`; `eu-txt-bat-2022` |
| `sb_conditional_finishing` | pretreatment, dyeing, printing, coating, drying, curing, and functional finishing | Include each operation when it is performed for the reference product. For an outsourced operation, record the fabric transfer and link the supplier dataset instead of representing the operation as absent. | `jrc-txt-bref-2023`; `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing` |
| `sb_atomic_inventory` | all inventory exchanges | Record each yarn, sizing chemical, dye, auxiliary, electricity supply, steam supply, fuel, packaging component, waste, wastewater stream, and elementary emission as its own exchange. Add a new atomic row for every substance or product actually used that is not represented by the cards below. | `eu-txt-bat-2022` |
| `sb_no_silent_cutoff` | known foreground exchanges | Do not omit a known exchange because its measured amount is small. Record it, or document why that exact exchange is not applicable. | `iso-14044-2006`; `eu-pef-2021` |
| `sb_treatment_transfer` | waste, wastewater, and captured pollutants | Include on-site collection and treatment. When an exchange leaves the facility, record its physical state, quantity, receiving operator, and treatment or discharge destination. | `eu-txt-bat-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_preparation` | Yarn winding, warping, and sizing | required | Winding and warping are required; sizing exchanges apply only when sizing is performed | foreground preparation | kg prepared warp transferred to weaving |
| `weaving` | Loom weaving | required | Always included for the woven reference product | foreground production | kg greige woven fabric transferred from looms |
| `wet_and_dry_finishing` | Pretreatment and finishing | conditional | Included for each treatment required to reach the declared saleable state; absent only for declared greige fabric | foreground finishing | kg fabric transferred from the last included treatment |
| `inspection_and_packaging` | Inspection and packaging | required | Always included through factory-gate presentation | foreground completion | 1,000 kg accepted saleable reference fabric |

### Process: Yarn winding, warping, and sizing (`yarn_preparation`)

#### Inputs

##### Product flows

###### Warp yarn (`warp_yarn`)

Record the purchased warp yarn as one exchange for the named polyester-viscose staple-fibre blend. If a product uses another exact yarn identity, add a separate atomic exchange for that yarn.

- Selected flow: Polyester-viscose blended staple-fibre warp yarn
- Flow property / unit: Mass / kg
- Amount rule: measured net mass issued to winding and warping, corrected for stock change and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_and_fabric_mass`
- Sources: `jrc-txt-bref-2023`

###### Potato starch sizing agent (`potato_starch`)

Record potato starch only when it is dosed into the warp-sizing formulation.

- Selected flow: Potato Starch `1acb7b11-0259-4f61-b05b-83f1f3f11eda`
- Flow property / unit: Mass / kg
- Amount rule: measured net potato starch consumed, corrected for stock change, returns, and recovered sizing liquor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared warp
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts_and_dosing`
- Sources: `jrc-txt-bref-2023`

###### Polyvinyl alcohol sizing agent (`polyvinyl_alcohol`)

Record polyvinyl alcohol only when it is dosed into the warp-sizing formulation.

- Selected flow: Polyvinyl alcohol `cea707dd-98a3-451d-bc43-2dcc145091e9`
- Flow property / unit: Mass / kg
- Amount rule: measured net polyvinyl alcohol consumed, corrected for stock change, returns, and recovered sizing liquor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared warp
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts_and_dosing`
- Sources: `jrc-txt-bref-2023`

###### Preparation water (`preparation_water`)

Record tap water entering sizing and equipment cleaning; separately disclose verified internal reuse.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: measured tap-water mass entering yarn preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared warp
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Sources: `eu-txt-bat-2022`

###### Preparation electricity (`preparation_electricity`)

Record low-voltage China national-grid electricity used by winding, warping, sizing drives, pumps, ventilation, and assigned support equipment.

- Selected flow: Electricity, low voltage, China national grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or a documented equipment-runtime allocation from a complete facility meter balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared warp
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Sources: `eu-txt-bat-2022`

###### Preparation steam (`preparation_steam`)

Record purchased steam crossing the process boundary when size drying or another included preparation operation uses steam.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass / kg
- Amount rule: metered purchased-steam mass assigned to yarn preparation, with pressure and condensate-return condition retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared warp
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Sources: `eu-txt-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared warp (`prepared_warp`)

Record the sized or unsized warp transferred to weaving on the common moisture basis.

- Selected flow: Sized polyester-viscose blended staple-fibre warp
- Flow property / unit: Mass / kg
- Amount rule: measured net mass transferred to weaving, including retained size when sizing is performed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared warp
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_and_fabric_mass`
- Sources: `jrc-txt-bref-2023`

##### Waste flows

###### Waste warp yarn (`waste_warp_yarn`)

Record warp yarn discarded from winding, warping, and sizing after internal reuse has been excluded.

- Selected flow: Waste polyester-viscose blended staple-fibre warp yarn
- Flow property / unit: Mass / kg
- Amount rule: measured net waste mass transferred to the stated receiving treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared warp
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-txt-bat-2022`

##### Elementary flows

### Process: Loom weaving (`weaving`)

#### Inputs

##### Product flows

###### Prepared warp input (`prepared_warp_input`)

Record the prepared warp received from yarn preparation.

- Selected flow: Sized polyester-viscose blended staple-fibre warp
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to the `prepared_warp` output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige woven fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_and_fabric_mass`
- Sources: `jrc-txt-bref-2023`

###### Weft yarn (`weft_yarn`)

Record the purchased weft yarn as one exchange for the named polyester-viscose staple-fibre blend.

- Selected flow: Polyester-viscose blended staple-fibre weft yarn
- Flow property / unit: Mass / kg
- Amount rule: measured net mass issued to looms, corrected for stock change and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige woven fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_and_fabric_mass`
- Sources: `jrc-txt-bref-2023`

###### Loom lubricating oil (`loom_lubricating_oil`)

Record lubricating oil added to loom systems and exclude oil returned unchanged to inventory.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: measured net oil issued, corrected for stock change and recovered oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg greige woven fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts_and_dosing`
- Sources: `jrc-txt-bref-2023`

###### Weaving electricity (`weaving_electricity`)

Record low-voltage China national-grid electricity used by looms and assigned weaving support equipment.

- Selected flow: Electricity, low voltage, China national grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or a documented equipment-runtime allocation from a complete facility meter balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige woven fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Sources: `jrc-txt-bref-2023`; `eu-txt-bat-2022`

###### Weaving water (`weaving_water`)

Record tap water used for loom cleaning or humidification when it crosses the weaving process boundary.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: measured tap-water mass entering weaving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige woven fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Sources: `eu-txt-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige fabric (`greige_fabric`)

Record greige woven fabric leaving the looms before any finishing treatment.

- Selected flow: Greige polyester-viscose woven fabric
- Flow property / unit: Mass / kg
- Amount rule: measured net roll mass excluding cores on the common moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg greige woven fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_and_fabric_mass`
- Sources: `jrc-txt-bref-2023`

##### Waste flows

###### Waste weft yarn (`waste_weft_yarn`)

Record discarded weft yarn after internal reuse has been excluded.

- Selected flow: Waste polyester-viscose blended staple-fibre weft yarn
- Flow property / unit: Mass / kg
- Amount rule: measured net waste mass transferred to the stated receiving treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige woven fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-txt-bat-2022`

###### Off-spec greige fabric (`offspec_greige_fabric`)

Record rejected greige fabric that leaves the product system as waste; internal rework remains an internal loop.

- Selected flow: Off-spec greige polyester-viscose woven fabric
- Flow property / unit: Mass / kg
- Amount rule: measured net rejected-fabric mass transferred to the stated receiving treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige woven fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-txt-bat-2022`

##### Elementary flows

###### Particulate matter to air (`pm10_to_air`)

Record uncaptured particulate matter below 10 micrometres emitted from the weaving area to air.

- Selected flow: Particulate matter, less than 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission mass or a documented site emission inventory value for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg greige woven fabric
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-txt-bat-2022`

### Process: Pretreatment and finishing (`wet_and_dry_finishing`)

#### Inputs

##### Product flows

###### Greige fabric input (`greige_fabric_input`)

Record greige fabric entering the first included treatment.

- Selected flow: Greige polyester-viscose woven fabric
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled to the `greige_fabric` output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_and_fabric_mass`
- Sources: `jrc-txt-bref-2023`

###### Finishing water (`finishing_water`)

Record tap water entering pretreatment, dyeing, washing, and finishing; separately disclose verified internal reuse.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Flow property / unit: Mass / kg
- Amount rule: measured tap-water mass entering included finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Sources: `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

###### Sodium hydroxide (`sodium_hydroxide`)

Record purchased sodium hydroxide only when it is dosed in an included pretreatment or finishing bath.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured net sodium-hydroxide product consumed, corrected for stock change and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts_and_dosing`
- Sources: `jrc-txt-bref-2023`; `eu-txt-bat-2022`

###### Hydrogen peroxide solution (`hydrogen_peroxide_50`)

Record 50% hydrogen peroxide solution only when that exact product concentration is dosed.

- Selected flow: Hydrogen peroxide solution, 50% in water `afda772f-b130-4c32-9a89-c4e79ba4e0e8`
- Flow property / unit: Mass / kg
- Amount rule: measured net solution consumed, corrected for stock change and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts_and_dosing`
- Sources: `jrc-txt-bref-2023`; `eu-txt-bat-2022`

###### Acetic acid (`acetic_acid`)

Record acetic acid only when it is dosed for pH control or another included operation.

- Selected flow: Acetic acid, 100%
- Flow property / unit: Mass / kg
- Amount rule: measured net acetic-acid product consumed, corrected for stock change and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts_and_dosing`
- Sources: `jrc-txt-bref-2023`; `eu-txt-bat-2022`

###### Sodium chloride (`sodium_chloride`)

Record purchased sodium chloride only when it is dosed into an included dye bath.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: measured net sodium-chloride product consumed, corrected for stock change and returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts_and_dosing`
- Sources: `jrc-txt-bref-2023`; `eu-txt-bat-2022`

###### Disperse dye (`disperse_blue_56`)

Record C.I. Disperse Blue 56 only when that exact dye product is dosed. Any different dye receives its own atomic foreground exchange.

- Selected flow: C.I. Disperse Blue 56 dye product
- Flow property / unit: Mass / kg
- Amount rule: measured net dye product consumed, corrected for stock change, returns, and recovered bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts_and_dosing`
- Sources: `jrc-txt-bref-2023`; `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

###### Reactive dye (`reactive_blue_19`)

Record C.I. Reactive Blue 19 only when that exact dye product is dosed. Any different dye receives its own atomic foreground exchange.

- Selected flow: C.I. Reactive Blue 19 dye product
- Flow property / unit: Mass / kg
- Amount rule: measured net dye product consumed, corrected for stock change, returns, and recovered bath
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_receipts_and_dosing`
- Sources: `jrc-txt-bref-2023`; `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

###### Finishing electricity (`finishing_electricity`)

Record low-voltage China national-grid electricity used by included wet and dry finishing equipment.

- Selected flow: Electricity, low voltage, China national grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or a documented equipment-runtime allocation from a complete facility meter balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Sources: `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

###### Finishing steam (`finishing_steam`)

Record purchased steam used by included baths, dryers, or curing equipment.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Flow property / unit: Mass / kg
- Amount rule: metered purchased-steam mass assigned to included finishing operations, with pressure and condensate-return condition retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Sources: `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished fabric (`finished_fabric`)

Record fabric leaving the last included treatment when the saleable product is finished fabric.

- Selected flow: Other woven fabrics of man-made staple fibres `aa850d80-fcb5-40ab-8539-61771bb51c0f`
- Flow property / unit: Mass / kg
- Amount rule: measured net fabric mass excluding cores and packaging on the common moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_and_fabric_mass`
- Sources: `jrc-txt-bref-2023`

##### Waste flows

###### Finishing wastewater (`finishing_wastewater`)

Record the textile wet-processing wastewater discharged to water after the included on-site treatment; another destination requires a different atomic waste-flow identity.

- Selected flow: Wastewater, textile wet processing, to water `a60031a7-ea29-49ef-b578-90de910fcf8e`
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater mass at the discharge point for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing`

###### Dried textile wastewater-treatment sludge (`dried_textile_sludge`)

Record dried sludge leaving on-site textile wastewater treatment as a separate waste transfer.

- Selected flow: Dried textile wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass transferred to the named treatment operator
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-txt-bat-2022`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_carbon_dioxide_to_air`)

Record fossil carbon dioxide emitted from included on-site combustion.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured or facility-reported fossil carbon-dioxide emission mass for included equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-txt-bat-2022`

###### Nitrogen oxides to air (`nitrogen_oxides_to_air`)

Record nitrogen oxides from included on-site combustion, expressed as nitrogen dioxide.

- Selected flow: Nitrogen oxides, as nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: measured or facility-reported nitrogen-oxides emission mass for included equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fabric leaving the last included treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`
- Sources: `eu-txt-bat-2022`

### Process: Inspection and packaging (`inspection_and_packaging`)

#### Inputs

##### Product flows

###### Greige fabric to inspection (`greige_fabric_to_inspection`)

Record greige fabric entering final inspection only when the declared saleable product is greige.

- Selected flow: Greige polyester-viscose woven fabric
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from weaving to inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_and_fabric_mass`
- Sources: `jrc-txt-bref-2023`

###### Finished fabric to inspection (`finished_fabric_to_inspection`)

Record finished fabric entering final inspection only when finishing is included.

- Selected flow: Other woven fabrics of man-made staple fibres `aa850d80-fcb5-40ab-8539-61771bb51c0f`
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from the last included finishing operation to inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_and_fabric_mass`
- Sources: `jrc-txt-bref-2023`

###### Cardboard tube (`cardboard_tube`)

Record each new cardboard tube or paper core shipped with the fabric.

- Selected flow: Cardboard tube for textile-roll packaging
- Flow property / unit: Mass / kg
- Amount rule: measured net mass incorporated into shipped rolls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`

###### Low-density polyethylene film (`ldpe_film`)

Record low-density polyethylene film applied to shipped fabric.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured net film mass incorporated into shipped packages
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`

###### Polypropylene strap (`polypropylene_strap`)

Record polypropylene strap applied to shipped fabric.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: measured net strap mass incorporated into shipped packages
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`

###### Packaging electricity (`packaging_electricity`)

Record low-voltage China national-grid electricity used by inspection, rolling, cutting, and packaging equipment.

- Selected flow: Electricity, low voltage, China national grid mix
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or a documented equipment-runtime allocation from a complete facility meter balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_energy`
- Sources: `eu-txt-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product (`reference_product`)

This is the accepted saleable fabric at the factory gate, excluding cores and packaging.

- Selected flow: Other woven fabrics of man-made staple fibres `aa850d80-fcb5-40ab-8539-61771bb51c0f`
- Flow property / unit: Mass / kg
- Amount rule: exactly 1,000 kg accepted saleable fabric on the declared moisture basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Off-spec final fabric (`offspec_final_fabric`)

Record rejected saleable-state fabric that leaves the product system as waste after internal rework has been excluded.

- Selected flow: Off-spec woven fabric of man-made staple fibres
- Flow property / unit: Mass / kg
- Amount rule: measured net rejected-fabric mass transferred to the named receiving treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`

###### Waste low-density polyethylene film (`waste_ldpe_film`)

Record low-density polyethylene packaging film discarded during packaging.

- Selected flow: Waste low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured net waste-film mass transferred to the named receiving treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`

###### Waste cardboard tube (`waste_cardboard_tube`)

Record damaged or discarded cardboard tubes from textile-roll packaging.

- Selected flow: Waste cardboard tube from textile-roll packaging
- Flow property / unit: Mass / kg
- Amount rule: measured net waste-tube mass transferred to the named receiving treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_emissions`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared operations and internal rework | Prefer process subdivision, submetering, and direct lot assignment. Keep internal rework inside the product system and do not count it as both waste output and new external input. | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_mass` | unavoidable shared burdens among fabric outputs with comparable function | If direct assignment is not possible, allocate by accepted output mass on the common moisture basis and disclose the period, outputs, and factors. | `eu-pef-2021` |
| `allocation_causal` | co-products with materially different functions | Use a documented physical relationship that reflects causality; if none is defensible, use factory-gate revenue and report a sensitivity comparison with mass allocation. | `iso-14044-2006`; `eu-pef-2021` |
| `allocation_waste_status` | recovered yarn, fabric, size, sludge, and packaging | Treat an output as a co-product only when its specification, quantity, recipient, and market are documented. Otherwise retain it as waste and link its treatment without an avoided-product credit. | `eu-pef-2021`; `eu-txt-bat-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_and_fabric_mass` | `yarn_preparation`; `weaving`; `wet_and_dry_finishing`; `inspection_and_packaging` | yarn and fabric transfers | purchase, warehouse, roll-scale, production-order, and inspection records | lot_id; material_id; supplier; fibre_types; fibre_mass_shares; yarn_count; gross_mass; tare; moisture_basis; process_from; process_to; grade; rework_status | calibrated scales reconciled to warehouse and production records | kg | each receipt, issue, roll, or transfer | same declared reporting period as reference output | every included line and outsourced transfer | sum net mass by exact material identity and process transfer; reconcile internal outputs to inputs | scale calibration; stock reconciliation; roll trace; supplier specification |
| `cp_chemical_receipts_and_dosing` | `yarn_preparation`; `weaving`; `wet_and_dry_finishing` | one named chemical product per exchange | purchase, stock, recipe, dosing, return, and recovery records | chemical_id; trade_name; concentration; solids_fraction; batch_id; issued_mass; returned_mass; recovered_mass; opening_stock; closing_stock | calibrated dosing or weighing reconciled to approved recipes and stock | kg | each batch and stock reconciliation | same declared reporting period as associated process output | every included dosing point | calculate net consumption separately for each chemical identity; never merge different substances into one amount | calibration; recipe approval; safety data sheet; stock balance |
| `cp_water_and_energy` | `yarn_preparation`; `weaving`; `wet_and_dry_finishing`; `inspection_and_packaging` | one water or energy carrier per exchange | meter, invoice, condensate, and equipment-runtime records | meter_id; carrier; opening_reading; closing_reading; purchased_quantity; reused_quantity; condensate_return; equipment_id; runtime; allocation_driver | submetering preferred; otherwise a documented complete meter balance and causal allocation | kg; kWh | meter or invoice interval | same declared reporting period as associated process output | all included equipment and assigned support systems | keep tap water, electricity, and steam separate; reconcile site totals before normalization | meter calibration; invoices; meter map; allocation worksheet |
| `cp_waste_and_emissions` | `yarn_preparation`; `weaving`; `wet_and_dry_finishing`; `inspection_and_packaging` | one named waste or elementary emission per exchange | container weights, transfer notes, discharge meters, laboratory reports, and stack or facility emission records | flow_id; substance_or_waste_name; source_process; gross_mass; tare; dry_matter; discharge_point; concentration; gas_or_water_flow; destination; treatment_operator | calibrated weighing or representative monitoring for each named exchange | kg | each transfer or monitoring interval | same declared reporting period as associated process output | every included waste route and emission point | aggregate only measurements of the same flow identity, state, and destination; exclude verified internal rework | calibration; chain of custody; accredited laboratory report; transfer receipt; emission report |
| `cp_packaging_and_dispatch` | `inspection_and_packaging` | each packaging component and accepted product | bill of materials, issue, scale, and dispatch records | packaging_material_id; issued_mass; returned_mass; shipped_mass; roll_id; core_tare; product_grade | calibrated weighing reconciled to packaging issues and dispatch | kg | each dispatch | same declared reporting period as reference output | all included packaging and dispatch operations | sum each packaging material separately; accepted product excludes cores and packaging | scale calibration; bill of materials; dispatch note; stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every non-reference inventory row | normalized amount = collected reporting-period amount divided by accepted saleable fabric mass on the common moisture basis, multiplied by 1,000 kg | collected flow amount; accepted product mass; moisture correction | amount per 1,000 kg reference product | `iso-14044-2006`; `eu-pef-2021` |
| `calc_mass_from_area` | length- or area-based fabric records | fabric mass = measured length multiplied by usable width multiplied by measured mass per unit area; reconcile the result with scale mass | length; usable width; mass per unit area; scale mass | kg fabric on the declared moisture basis |  |
| `calc_material_balance` | yarn preparation, weaving, and finishing | reconcile common-basis material inputs with products, inventory change, internal rework, each waste flow, and measured emissions; disclose the signed unexplained difference | all material inputs and outputs; opening and closing inventory | process material-balance statement | `eu-txt-bat-2022` |
| `calc_water_balance` | each process using water | reconcile purchased tap water with separately measured reuse, evaporation, product retention, wastewater, and inventory change without collapsing these exchanges | water input; reuse; wastewater; evaporation; retention; inventory change | process water-balance statement | `eu-txt-bat-2022` |
| `calc_allocation_factor` | unavoidable shared process | allocation factor = selected causal quantity for the reference product divided by the same quantity for all co-produced outputs in the same period | output quantities; causal driver or revenue; reporting period | disclosed allocation factor | `iso-14044-2006`; `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product, yarns, chemicals, packaging, wastes, and emissions | Preserve one exact identity for every exchange, including product concentration or composition, flow type, process, state, and destination where applicable. | specifications; safety data sheets; purchase records; transfer notes; laboratory records |
| `dq_temporal` | foreground activity data | Use one representative declared reporting period, identify abnormal operation and product-mix changes, and justify excluded dates or lots. | dated meter exports; production ledger; shutdown and campaign log |
| `dq_measurement` | mass, water, electricity, steam, waste, and emissions | Use calibrated instruments or document the complete calculation, inputs, units, and uncertainty. | calibration certificates; raw readings; invoices; calculation worksheets |
| `dq_completeness` | process map and inventory | Cover every required process, every applicable conditional process, and every actual atomic exchange without an undocumented cutoff. | process flow sheet; recipe list; input-output inventory; mass and water balances |
| `dq_supplier_links` | purchased inputs and outsourced operations | Retain supplier, geography, technology, reporting period, product composition, and dataset reference sufficient to select representative upstream data. | supplier declaration; purchase record; linked dataset metadata |
| `dq_uuid_status` | inventory flow identity | Use a Tiangong UUID only after hybrid discovery and direct public-row verification confirm exact semantics, flow type, reference property, and unit. Keep unresolved identities in manifest review metadata. | authoring review record; public-row readback |
| `dq_no_temporary_numbers` | inventory amounts and ranges | Use collected foreground values. No AI-authored numerical estimate or range is a conforming amount; any future source-backed range must retain its source and basis. | foreground records; cited range source; review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | dataset metadata and reference flow | Fail conformance when CPC 26790 scope, fibre mass shares, yarn counts, weave, usable width, mass per unit area, finish state, moisture basis, defect grade, or reference-product UUID is absent or inconsistent. | `unsd-cpc-3-2025`; `iso-14044-2006` |
| `validation_reference_mass` | reference flow and normalized rows | Confirm exactly 1,000 kg accepted saleable fabric excluding cores and packaging, and confirm one moisture basis and accepted-output denominator are used throughout. | `iso-14044-2006`; `eu-pef-2021` |
| `validation_process_coverage` | process map | Require `yarn_preparation`, `weaving`, and `inspection_and_packaging`; require `wet_and_dry_finishing` whenever any pretreatment, dyeing, printing, coating, drying, curing, or functional-finishing operation is performed on-site or by a linked supplier. | `jrc-txt-bref-2023`; `eu-txt-bat-2022`; `zhang-et-al-2023-wet-processing` |
| `validation_atomic_flows` | process inventory | Reject a collection label, selector, combined carrier, combined chemical group, combined packaging group, combined waste group, or combined emission group as `Selected flow`; require a separate row for every actual exchange. | `eu-txt-bat-2022` |
| `validation_transfer_balance` | internal process transfers | Reconcile each upstream product output to the matching downstream input on the common moisture basis and disclose any transfer difference. | `eu-txt-bat-2022` |
| `validation_water_and_energy` | processes using water or energy | Require separate tap-water, electricity, and steam records; require water and energy balances that identify reuse, recovery, and allocation without merging carriers. | `eu-txt-bat-2022` |
| `validation_waste_and_emissions` | waste, wastewater, and direct emissions | Require each actual waste and elementary emission to have one identity, amount, source process, monitoring or weighing basis, and destination or compartment; require a documented not-applicable finding when a listed card does not occur. | `eu-txt-bat-2022` |
| `validation_allocation` | shared operations and co-products | Require direct assignment where available; otherwise require the driver, factor, affected processes, reporting period, and sensitivity disclosure. | `iso-14044-2006`; `eu-pef-2021` |
| `validation_sources_and_protocols` | collected rows, calculated rules, and UUID-bearing rows | Require every collected row to reference an existing protocol, every external rule to reference a listed source id, and every adopted UUID to have exact public-row verification evidence in the authoring review. | `iso-14044-2006`; `eu-txt-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate manufacturing dataset for other woven fabrics of man-made staple fibres |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product-footprint, process, lifecyclemodel, and supply-chain studies whose fabric composition, market state, production operations, geography, reporting period, and allocation method match the declared dataset |
| excluded_use | Fibre manufacture; yarn spinning; man-made filament fabric; the more specific CPC 2674, 2675, 2676, or 2677 products; knitted or nonwoven fabric; garments or made-up articles; use; and end-of-life |
| required_metadata | canonical PCR id; CPC reference; reference product UUID; fibre mass shares; yarn counts; weave; usable width; mass per unit area; greige or finished state; each included operation; colour and finish; moisture basis; geography; reporting period; site and technology coverage; allocation; upstream dataset links; wastewater and waste destinations |
| required_quality_disclosure | foreground and secondary data shares; measurement and calculation methods; representativeness; missing UUIDs; data gaps; mass and water balances; allocation sensitivity; outsourced operations; emission and treatment coverage; deviations from collection protocols |
| update_trigger | material change in composition, loom technology, finishing recipe, energy or water supply, treatment system, packaging specification, allocation method, reference-flow identity, official CPC scope, BAT conclusions, or representative reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 explanatory notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, accessed 2026-08-12 | CPC 26790 identity and neighbouring-subclass exclusions |
| `jrc-txt-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf, accessed 2026-08-12 | Warping, sizing, weaving, wet-treatment process decomposition, and specific chemical and utility inventory needs |
| `eu-txt-bat-2022` | `official_guidance` | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj, accessed 2026-08-12 | Input-output inventory, water and energy balances, chemical management, waste and emission monitoring, and process-change review |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, official ISO page https://www.iso.org/standard/38498.html, confirmed current by ISO in 2022, accessed 2026-08-12 | LCI scope, consistency, reporting, interpretation, and review framework |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, ELI https://eur-lex.europa.eu/eli/reco/2021/2279/oj, accessed 2026-08-12 | Reference-flow normalization, upstream links, allocation, data quality, and downstream use |
| `zhang-et-al-2023-wet-processing` | `literature` | Zhang, S. et al., Environmental assessment of fabric wet processing from gate-to-gate perspective: Comparative study of weaving and materials, Science of the Total Environment 857 (2023) 159495, https://doi.org/10.1016/j.scitotenv.2022.159495 | Foreground stage decomposition for pretreatment, dyeing, post-treatment, and setting; need for primary manufacturing inventory by fabric and process |
