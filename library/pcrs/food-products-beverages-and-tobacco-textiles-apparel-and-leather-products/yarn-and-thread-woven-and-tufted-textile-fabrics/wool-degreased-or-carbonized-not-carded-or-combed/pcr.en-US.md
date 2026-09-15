---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.wool-degreased-or-carbonized-not-carded-or-combed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Wool, degreased or carbonized, not carded or combed

## 1. Scope and Applicability

This PCR covers saleable loose sheep-wool fibre that has been degreased by aqueous raw-wool scouring or has subsequently been carbonized to remove vegetable matter, and that has not been carded or combed. It supports gate-to-gate foreground data production for a declared `degreased_route` or `carbonized_route`. An integrated carbonized route includes both route modules; a carbonizing-only facility supplies an upstream dataset for its purchased scoured-wool input.

The route, sheep-wool fineness class, incoming contamination state, carbonizing chemistry, recovery configuration, and moisture basis shall be declared and modelled separately. Do not average degreased and carbonized production, coarse and fine wool, pure wool and blends, or alternative carbonizing chemistries unless the dataset represents a disclosed production-weighted mix and retains the underlying route records.

The verified Tiangong reference row is `Scoured Wool`, a narrower representative of the degreased route. It is mandatory for reference-flow identity in this candidate PCR, but it is not an exact identity for carbonized loose wool. A carbonized dataset shall retain the UUID and explicitly state the limitation; it shall not claim that Tiangong provides a carbonized-wool-specific product flow.

Excluded are greasy/raw wool sold without scouring, fine or coarse animal hair other than sheep wool, wool/synthetic blends, wool waste and noils, carded or combed wool, tops and slivers, yarn, fabric, fabric carbonizing, dyeing, bleaching, mothproofing, spinning, and downstream textile manufacture. Sheep husbandry and wool production are outside the foreground boundary but require upstream datasets when the study boundary includes them.

All `reasoned_estimate` ranges below are deliberately broad candidate-stage QA screens, not default inventory values or conformance limits. Replace them with reviewed route- and site-specific evidence after three consecutive representative production periods are available, when equipment or chemistry changes materially, or before publication if the range would affect a comparative assertion.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.wool-degreased-or-carbonized-not-carded-or-combed |
| classification_refs | CPC 3.0: 26130, Wool, degreased or carbonized, not carded or combed |
| covered_products | Loose sheep-wool fibre sold after aqueous degreasing/scouring; loose sheep-wool fibre sold after a declared carbonizing route; both not carded or combed |
| excluded_products | Greasy/raw unscoured wool; non-sheep animal hair; wool/synthetic blends; wool noils or waste; carded or combed wool; tops, slivers, yarn and fabric; dyed, bleached or mothproofed products unless those treatments are reported in a separate dataset |
| representative_product | Saleable loose scoured sheep wool on the `degreased_route`; this is narrower than the full category and is the verified Tiangong identity representative |
| production_route | Route-conditioned: `degreased_route` = opening/de-dusting, aqueous scouring, rinsing, mechanical dewatering and drying; `carbonized_route` = scoured-wool input plus declared loose-fibre acid impregnation, hydroextraction, drying/baking, mechanical removal, neutralization/rinsing and final drying |
| market_state | At the preparation-facility gate, loose, saleable, not carded or combed, with measured moisture and declared route, fibre-diameter class, residual grease and vegetable-matter specification |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Preparation of loose sheep-wool fibre suitable for subsequent spinning preparation, after declared degreasing or loose-fibre carbonizing and before carding or combing |
| How much | 1 kg net dry mass of saleable output at the preparation-facility gate |
| How well | Meets the producer's declared moisture, residual grease, vegetable-matter and quality specifications; route and wool-fineness class are stated; no carding or combing is included |
| How long or cycle | One completed production batch or campaign; no use-life duration applies |
| reference_flow_link | One reference flow per dataset. The verified `Scoured Wool` row represents the degreased route; a carbonized-route dataset uses it only with the mandatory narrower-identity limitation disclosure. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net dry mass |
| Reference product flow | Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | route (`degreased_route` or `carbonized_route`); sheep-wool fibre-diameter class; pure-wool status; incoming material state; output moisture basis and method; residual grease specification; vegetable-matter specification; not-carded-or-combed state; carbonizing chemistry when applicable; carbonized-flow UUID limitation when applicable |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference-flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | Reference product and all mass-normalized results | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference amount as net dry mass. Measure gross/net output mass and moisture for the same batch; retain the moisture method and convert using `dry_mass = wet_mass × (1 - moisture_mass_fraction)`. Do not mix as-delivered and dry-mass denominators. |
| `mass_unit_conversion` | All material inputs, products, by-products and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve source records in their original units and convert to kg with documented factors; tonne-based indicators use 1 t = 1,000 kg. |
| `water_accounting` | Scouring, rinsing, neutralization and cleaning water | Volume or mass, as metered | L or m3, with conversion stated | Separate gross intake, internally recycled water and discharged wastewater. Net freshwater consumption equals gross intake minus water returned from an external system, not internal recirculation; report internal reuse separately. |
| `energy_accounting` | Electricity, steam, direct fuel and recovered heat | Energy | MJ and kWh, with conversion stated | Record purchased electricity, fuels and steam separately. Do not add recovered internal heat as purchased energy; disclose direct versus indirect heating and convert to MJ only after preserving carrier-specific records. |
| `chemical_solution_basis` | Detergent, alkali, mineral acid and neutralizing agents | Mass | kg active substance and kg solution | Record both delivered solution mass and concentration; calculate active-substance mass. Never average sulphuric-acid, gaseous-HCl, aluminium-chloride, sodium-acetate and ammonia routes. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Route-dependent: received greasy/raw sheep wool for a degreasing or integrated carbonized route; received scoured/degreased loose sheep wool for a carbonizing-only route |
| starting_condition_role | Foreground gate input whose mass, moisture, wool-fineness class, contamination state and supplier identity anchor the route inventory |
| product_classification_scope | Loose sheep wool after degreasing or loose-fibre carbonizing, not carded or combed; excludes non-sheep hair, blends and later textile transformations |
| recursive_input_rule | Purchased scoured wool entering a carbonizing-only facility remains a same-category technosphere input. Link one upstream degreased-wool dataset and stop recursive expansion at that link; do not replace the upstream burden with the carbonizing dataset itself. |
| upstream_dataset_requirement | Supply chain datasets are required for greasy/raw wool production, purchased scoured wool, chemicals, water, energy carriers, transport when included by study scope, and off-site waste or wastewater treatment. The upstream scoured-wool dataset shall be route- and fibre-type compatible. |
| disclosure | State route, facility configuration, geographic and temporal coverage, whether scouring and carbonizing are integrated, incoming and outgoing moisture basis, wool-fineness class, recovery/recycling configuration, wastewater destination, excluded treatment steps, and the narrower Scoured Wool UUID limitation for carbonized output. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_modules` | foreground_process_selection | Include only the route modules actually operated. A degreased dataset includes aqueous scouring and drying; an integrated carbonized dataset includes scouring and carbonizing; a carbonizing-only dataset begins with an upstream scoured-wool input. | `eu-txt-bref-2023` |
| `boundary_scouring_recovery` | aqueous_scouring | Include opening/de-dusting when performed, all scouring/rinsing bowls, mechanical dewatering, drying, grease and dirt separation, internal water recycle, wastewater sent to treatment, recovered wool grease, sludge/dirt, and direct on-site energy emissions. | `eu-txt-bref-2023`; `eu-txt-bat-2022-2508` |
| `boundary_carbonising` | loose_fibre_carbonising | When the carbonized route applies, include acid preparation and impregnation, hydroextraction, drying and baking, crushing/removal of carbonized vegetable particles, neutralization/rinsing, final drying, acidic wastewater and dust/residue management. | `eu-txt-bref-2023` |
| `boundary_excluded_steps` | downstream_and_nonproduct_operations | Exclude sheep husbandry, carding, combing, spinning, dyeing, bleaching, mothproofing, fabric carbonizing, packaging beyond the facility's saleable-output gate, and downstream textile manufacture; represent any included exception as a separately identified process. | `un-cpc-30-2025`; `eu-txt-bref-2023` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `aqueous_scouring_and_drying` | Opening, aqueous scouring, recovery, dewatering and drying | conditional | Required for `degreased_route` and for an integrated `carbonized_route` starting from greasy/raw wool; excluded from a carbonizing-only facility dataset that starts with purchased scoured wool | Foreground degreasing and conditioning | 1 kg net dry saleable scoured-wool output from this process |
| `loose_fibre_carbonising` | Loose-fibre carbonizing, neutralization, rinsing and drying | conditional | Required only for `carbonized_route`; excluded for `degreased_route` | Foreground removal of vegetable matter from scoured loose wool | 1 kg net dry saleable carbonized-wool output from this process |

### Process: Opening, aqueous scouring, recovery, dewatering and drying (`aqueous_scouring_and_drying`)

#### Inputs

##### Product flows

###### Received greasy/raw sheep wool (`raw_wool_input`)

Record the purchased or transferred greasy/raw sheep wool entering the foreground route, including moisture, fineness class, contamination state and supplier lot.

- Selected flow: Shorn wool, greasy, including fleece-washed shorn wool `bc0047e4-c6e8-4758-b86e-887af8a1f176`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Include for a degreased route or an integrated carbonized route starting from greasy/raw wool
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net dry mass by input lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_moisture`
- Source id or status: `cp_batch_mass_moisture`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional raw-wool input mass-balance screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 5.0
  - Unit: kg dry incoming wool/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Gross water supplied to scouring, rinsing and cleaning (`scouring_water_input`)

Record gross metered water by batch or campaign before internal recycle is subtracted; maintain a separate internal-recycle record.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Include gross fresh-water intake; internal recycled water is a separately disclosed loop and is not a second technosphere input
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; retain raw metered L or m3 and measured density
- Amount rule: metered gross fresh-water volume × measured water density, less separately metered internal recycle; retain the original volume record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Source id or status: `cp_water_balance`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bat-2022-2508`
- Range: Provisional water-use plausibility screen; never a default value and replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: L/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Alcohol ethoxylate scouring detergent, active substance (`scouring_alcohol_ethoxylate_detergent`)

Record the active alcohol ethoxylate detergent separately from water in the delivered formulation and from every builder or auxiliary.

- Selected flow: Alcohol ethoxylate scouring detergent, active substance
- Direction: inputs
- Flow type: product
- UUID status: unresolved after flow-hybrid-search; no alcohol-ethoxylate active-substance Product flow was returned; unrelated resin, metal and equipment candidates were rejected
- Applicability: Include when an alcohol ethoxylate detergent is dosed; if another detergent is used, replace this row with one atomic formulation-specific row rather than aggregating formulations
- Flow property / unit: Mass / kg active substance
- Amount rule: delivered formulation mass × verified active mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_use`
- Source id or status: `cp_chemical_use`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`
- Range: Provisional detergent screen; never substitute for formulation-specific foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.10
  - Unit: kg active detergent/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium carbonate scouring builder, active substance (`scouring_sodium_carbonate`)

Record sodium carbonate separately from detergent. Omit this row when no sodium carbonate is used; another builder requires its own atomic row.

- Selected flow: Sodium carbonate `5462c2da-d3dd-41f0-a78f-51024d2d1a69`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Conditional on sodium carbonate being used as the scouring builder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg Na2CO3 active substance
- Amount rule: delivered product mass × verified sodium carbonate mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_use`
- Source id or status: `cp_chemical_use`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional builder screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg sodium carbonate/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity for scouring and drying (`scouring_electricity`)

Meter purchased electricity for opening, pumps, squeeze presses, centrifuges, controls and electrically driven drying equipment.

- Selected flow: alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Include for electrically powered foreground equipment when supply is the verified 35-330 kV consumption mix; remap when voltage, supplier mix or geography differs
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered electricity attributable to the route; shared use requires documented equipment or operating-hour allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Source id or status: `cp_energy_use`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bat-2022-2508`
- Range: Provisional electricity screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 5
  - Unit: kWh/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas combusted on site for scouring and drying (`scouring_natural_gas`)

Record natural gas separately from electricity and purchased steam; its direct emissions are reported as pollutant-specific elementary rows.

- Selected flow: Natural gas `78279a0e-8c85-421e-a1aa-2281166ee11f`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Conditional on industrial natural-gas heating matching the verified at-plant CN industrial-furnace flow; remap for a different geography, grade or supply route
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: metered gas × documented gross-calorific-value conversion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_use`
- Source id or status: `cp_energy_use`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- Range: Provisional natural-gas energy screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam for indirect scouring and drying heat (`scouring_purchased_steam`)

Record imported steam separately; do not combine it with gas or internally recovered heat.

- Selected flow: heat, steam `74d07391-d5e4-4beb-bd80-4fe9a7617cf1`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Conditional on imported steam heat matching the verified CN textile wet-processing industrial-boiler flow; remap for a different geography or steam-supply route
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ; retain kg steam, pressure and enthalpy in raw records
- Amount rule: measured steam mass × documented delivered-enthalpy factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_use`
- Source id or status: `cp_energy_use`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional purchased-steam screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: MJ/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable scoured wool (`scoured_wool_output`)

Record the net dry saleable output after final mechanical dewatering and drying, before carding or combing.

- Selected flow: Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947`
- Direction: outputs
- Flow type: product
- UUID status: verified Tiangong product flow; version intentionally omitted
- Applicability: Reference output of `aqueous_scouring_and_drying`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output after dry-mass normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net dry saleable scoured-wool process output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_batch_mass_moisture`
- Source id or status: `cp_batch_mass_moisture`; verified Tiangong identity reference; no external source id required
- Sources:
- Range: Reference-flow identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg dry output
  - Basis: PCR reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

###### Recovered wool grease (`recovered_wool_grease`)

Record saleable recovered grease separately from sludge or acid-cracked grease. Apply the fibre-class performance check only to the matching coarse or extra-/super-fine class.

- Selected flow: Recovered wool grease, saleable
- Direction: outputs
- Flow type: product
- UUID status: unresolved after flow-hybrid-search; no wool-grease Product flow was returned; generic animal fats and marine-mammal oils were rejected as broader or wrong material
- Applicability: Include only the grease transferred as a saleable co-product; non-saleable grease has its own waste row
- Flow property / unit: Mass / kg
- Amount rule: measured net mass transferred to sale or beneficial use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bat-2022-2508`
- Range: Provisional mass-balance screen; fibre-class BAT performance is checked separately per tonne of raw wool feed
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg recovered grease/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent scouring liquor sent to treatment (`spent_scouring_liquor`)

Record the post-recovery scouring liquor purge separately from rinse and equipment-cleaning wastewater.

- Selected flow: Spent wool-scouring liquor
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; no wool-scouring-liquor Waste flow was returned; waste alkaline liquor and black liquor were rejected as different waste chemistries
- Applicability: Include the scouring-bowl liquor purge after grease/dirt recovery and internal recycle
- Flow property / unit: Volume / L or m3; each pollutant load / kg in its own elementary or treatment record
- Amount rule: metered purge volume; calculate each pollutant load from matched concentration and volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- Range: Provisional spent-liquor volume screen; never a discharge limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: L/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Scouring-line rinse wastewater sent to treatment (`scouring_rinse_wastewater`)

Record rinse-bowl purge after internal recycle separately from spent scouring liquor.

- Selected flow: Wool-scouring rinse wastewater
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; generic wastewater candidates were broader and did not identify wool-scouring rinse water or its destination
- Applicability: Include when rinse water is purged from the foreground line
- Flow property / unit: Volume / L or m3; each pollutant load / kg in its own elementary or treatment record
- Amount rule: metered rinse purge volume; calculate each pollutant load from matched concentration and volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- Range: Provisional rinse-wastewater volume screen; never a discharge limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: L/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Scouring-equipment cleaning wastewater sent to treatment (`scouring_cleaning_wastewater`)

Record cleaning wastewater separately when it is metered or sampled as a distinct stream.

- Selected flow: Wool-scouring equipment-cleaning wastewater
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; generic cleaning/textile wastewater candidates did not identify wool-scouring equipment-cleaning wastewater and destination
- Applicability: Conditional on equipment cleaning inside the reporting period; if physically inseparable at measurement, disclose the receiving wastewater row and avoid double counting
- Flow property / unit: Volume / L or m3; each pollutant load / kg in its own elementary or treatment record
- Amount rule: metered cleaning discharge; calculate each pollutant load from matched concentration and volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bat-2022-2508`
- Range: Provisional cleaning-wastewater volume screen; never a discharge limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: L/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dirt removed during opening and de-dusting (`opening_dirt_waste`)

Record soil and dirt removed before scouring separately from sand and vegetable matter.

- Selected flow: Dirt removed from greasy wool
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; no dirt removed from greasy wool Waste flow was returned; grinding dust and wool-spinning waste were rejected
- Applicability: Conditional on opening or de-dusting being performed and dirt being separately quantified
- Flow property / unit: Mass / kg dry mass
- Amount rule: measured collection mass × measured dry-solids fraction; if mixed at collection, determine the dirt fraction by the declared sampling method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`
- Range: Provisional opening-dirt screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg dry dirt/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sand removed during opening and de-dusting (`opening_sand_waste`)

Record sand removed before scouring as a separate waste flow.

- Selected flow: Sand removed from greasy wool
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; no sand removed from greasy wool Waste flow was returned; glass waste and textile landfill candidates were rejected
- Applicability: Conditional on sand being present and separately quantified
- Flow property / unit: Mass / kg dry mass
- Amount rule: measured collection mass × measured dry-solids and sand fractions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`
- Range: Provisional opening-sand screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg dry sand/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Vegetable matter removed during opening and de-dusting (`opening_vegetable_matter_waste`)

Record burrs, seeds and other vegetable matter removed before scouring separately from soil and sand.

- Selected flow: Vegetable matter removed from greasy wool
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; no vegetable matter removed from wool Waste flow was returned; bean pulp was rejected as a different biomass
- Applicability: Conditional on vegetable matter being removed before scouring and separately quantified
- Flow property / unit: Mass / kg dry mass
- Amount rule: measured collection mass × measured dry-solids and vegetable-matter fractions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`
- Range: Provisional opening vegetable-matter screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg dry vegetable matter/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dirt-separation sludge from scouring liquor (`scouring_dirt_sludge`)

Record settled, centrifuged or hydrocyclone dirt sludge separately from recoverable grease and final wastewater-treatment sludge.

- Selected flow: Wool-scouring dirt-separation sludge
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; only generic or other-industry sludge candidates were returned; none identified wool-scouring dirt-separation sludge
- Applicability: Include when the scouring liquor passes through dirt separation
- Flow property / unit: Mass / kg dry mass
- Amount rule: measured wet sludge mass × measured dry-solids fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- Range: Provisional dirt-sludge screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: kg dry sludge/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater-treatment sludge from scouring effluent (`scouring_wwt_sludge`)

Record sludge produced by on-site wastewater treatment independently from process dirt sludge.

- Selected flow: Wool-scouring wastewater-treatment sludge
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; generic Sludge and paper/oil sludge candidates were broader or wrong-industry matches
- Applicability: Conditional on wastewater treatment sludge being generated inside the foreground boundary
- Flow property / unit: Mass / kg dry mass
- Amount rule: measured wet sludge mass × measured dry-solids fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- Range: Provisional wastewater-treatment sludge screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg dry sludge/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Non-saleable wool grease sent to treatment (`non_saleable_wool_grease`)

Record grease that is not transferred as a co-product, including acid-cracked grease, as its own waste stream.

- Selected flow: Non-saleable wool grease
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; used oil and lubricating-oil wastes were rejected as different materials; no non-saleable wool-grease Waste flow was returned
- Applicability: Conditional on recovered grease failing saleable by-product criteria
- Flow property / unit: Mass / kg
- Amount rule: measured net mass dispatched to the documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`
- Range: Provisional non-saleable-grease screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg waste grease/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide from scouring-line combustion (`scouring_fossil_co2_to_air`)

Report fossil carbon dioxide separately for fuel combusted inside the scouring foreground boundary.

- Selected flow: carbon dioxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Direction: outputs
- Flow type: elementary
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Conditional on on-site fossil-fuel combustion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CO2
- Amount rule: measured release or measured fuel use × documented fuel-specific CO2 factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional fossil-CO2 screen; replace with fuel-specific calculation evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg CO2/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrogen oxides from scouring-line combustion (`scouring_nox_to_air`)

Report nitrogen oxides as the basis specified by the measurement or factor, without combining them with other pollutants.

- Selected flow: Nitrogen oxides, expressed as nitrogen dioxide, to air
- Direction: outputs
- Flow type: elementary
- UUID status: unresolved after flow-hybrid-search; search returned nitrite or nitrous oxide rather than nitrogen oxides expressed as NO2; candidates were rejected as different species
- Applicability: Conditional on on-site fuel combustion and a measured or factor-based NOx release
- Flow property / unit: Mass / kg NO2-equivalent on the stated factor basis
- Amount rule: measured release or measured fuel use × documented equipment- and fuel-specific NOx factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`; factor and UUID both require foreground mapping/review
- Sources: `eu-txt-bref-2023`
- Range: Provisional NOx screen; replace with pollutant-specific measured or factor evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg NO2-equivalent/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sulphur dioxide from scouring-line combustion (`scouring_so2_to_air`)

Report sulphur dioxide independently and omit the row only when fuel sulphur and monitoring evidence demonstrate no material release.

- Selected flow: Sulphur dioxide to air
- Direction: outputs
- Flow type: elementary
- UUID status: unresolved after flow-hybrid-search; only aggregate sulfur-oxides flows were returned; they were rejected because this row requires sulfur dioxide specifically
- Applicability: Conditional on on-site fuel combustion and non-zero measured or factor-based SO2 release
- Flow property / unit: Mass / kg SO2
- Amount rule: measured release or measured fuel use × documented fuel-sulphur-specific SO2 factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable scoured-wool process output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`; factor and UUID both require foreground mapping/review
- Sources: `eu-txt-bref-2023`
- Range: Provisional SO2 screen; replace with pollutant-specific measured or factor evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg SO2/kg dry scoured output
  - Basis: per 1 kg net dry saleable scoured-wool process output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Loose-fibre carbonizing, neutralization, rinsing and drying (`loose_fibre_carbonising`)

#### Inputs

##### Product flows

###### Scoured wool entering carbonizing (`scoured_wool_input`)

Use measured scoured loose-wool input. For a carbonizing-only facility, link a separate upstream degreased-wool dataset and do not recurse to this carbonizing dataset.

- Selected flow: Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947`
- Direction: inputs
- Flow type: product
- UUID status: verified Tiangong product flow; version intentionally omitted
- Applicability: Include for every carbonized route; link an upstream scouring dataset when scouring is outside this foreground dataset
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net dry mass by input lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_mass_moisture`
- Source id or status: `cp_batch_mass_moisture`; verified Tiangong identity reference
- Sources: `eu-txt-bref-2023`
- Range: Provisional carbonizing yield screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 2.0
  - Unit: kg dry scoured input/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sulphuric acid for loose-wool carbonizing (`carbonising_sulphuric_acid`)

Record sulphuric acid as active H2SO4 separately from formulation water and every alternative acid route.

- Selected flow: Sulfuric acid `7ee2e3c3-bee7-4520-92b7-3e23afbfcd6f`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Conditional on the sulphuric-acid loose-fibre carbonizing route; mutually exclusive with gaseous HCl or aluminium-chloride rows for the same batch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg H2SO4 active substance
- Amount rule: delivered sulphuric-acid solution mass × verified H2SO4 mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_use`
- Source id or status: `cp_chemical_use`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional active-H2SO4 mass screen; typical bath and retained-acid conditions are validated separately
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.50
  - Unit: kg H2SO4/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Gaseous hydrogen chloride for loose-wool carbonizing (`carbonising_hydrogen_chloride`)

Record gaseous hydrogen chloride independently; do not convert it into or average it with sulphuric acid.

- Selected flow: hydrogen chloride gas `4f19a304-7b3b-11dd-ad8b-0800200c9a66`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Conditional on the documented gaseous-HCl alternative route; mutually exclusive with sulphuric-acid or aluminium-chloride rows for the same batch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg HCl
- Amount rule: measured cylinder, tank or dosing-system mass transferred to the carbonizing batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Source id or status: `cp_chemical_use`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional HCl mass screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg HCl/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Aluminium chloride for loose-wool carbonizing (`carbonising_aluminium_chloride`)

Record aluminium chloride independently; retain grade and hydration state because the delivered mass and active basis depend on them.

- Selected flow: Aluminium chloride
- Direction: inputs
- Flow type: product
- UUID status: unresolved after flow-hybrid-search; polyaluminium chloride, alum and other chlorides were returned; none was aluminium chloride of the required substance identity
- Applicability: Conditional on the documented aluminium-chloride alternative route; mutually exclusive with sulphuric-acid or gaseous-HCl rows for the same batch
- Flow property / unit: Mass / kg declared AlCl3 basis
- Amount rule: delivered product mass × verified active fraction on the declared hydration basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_use`
- Source id or status: `cp_chemical_use`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`
- Range: Provisional aluminium-chloride mass screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg AlCl3 basis/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Non-ionic carbonizing detergent, active substance (`carbonising_detergent`)

Include only when added to the carbonizing liquor; identify the formulation and active concentration.

- Selected flow: Non-ionic carbonizing detergent, active substance
- Direction: inputs
- Flow type: product
- UUID status: unresolved after flow-hybrid-search; generic soap/detergent flows did not establish a non-ionic carbonizing-detergent active substance
- Applicability: Conditional on detergent addition to the carbonizing liquor; omit when none is used and do not combine different formulations
- Flow property / unit: Mass / kg active substance and kg solution
- Amount rule: measured issue from dosing or batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_use`
- Source id or status: `cp_chemical_use`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`
- Range: Provisional detergent screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg active detergent/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium acetate for carbonized-wool neutralization (`carbonising_sodium_acetate`)

Record sodium acetate separately and retain grade, hydration state and final-pH evidence.

- Selected flow: Sodium acetate `a4f6e8d2-1c9b-4d5e-8f7a-2b3c4d5e6f7a`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Conditional on sodium acetate being the neutralizing agent; do not average with ammonia
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg sodium acetate active substance
- Amount rule: delivered product mass × verified active fraction on the declared hydration basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_use`
- Source id or status: `cp_chemical_use`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional sodium-acetate screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg sodium acetate basis/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia for carbonized-wool neutralization (`carbonising_ammonia`)

Record ammonia separately as active NH3, including concentration when supplied as aqueous ammonia.

- Selected flow: Ammonia `f5325a9a-4bdc-46ea-b878-b88700767ddd`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Conditional on ammonia being the neutralizing agent; do not average with sodium acetate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg NH3 active substance
- Amount rule: delivered ammonia solution or gas mass × verified NH3 mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_use`
- Source id or status: `cp_chemical_use`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional active-ammonia screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg NH3/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water for acid preparation, neutralization, rinsing and cleaning (`carbonising_water_input`)

Record gross intake and internal recycle separately for the carbonizing line.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Include gross fresh-water intake for the carbonizing line; internal recycled water is a disclosed loop rather than a second technosphere input
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; retain raw metered L or m3 and measured density
- Amount rule: metered gross fresh-water volume × measured water density, less separately metered internal recycle; retain the original volume record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Source id or status: `cp_water_balance`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bat-2022-2508`
- Range: Provisional carbonizing-line water screen; never a default value
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 100
  - Unit: L/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity for loose-wool carbonizing (`carbonising_electricity`)

Meter electricity for liquor handling, hydroextraction, crushing, dust control, neutralization and electrically driven drying equipment.

- Selected flow: alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Include for electrically powered carbonizing equipment when supply is the verified 35-330 kV consumption mix; remap when voltage, supplier mix or geography differs
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: metered electricity attributable to carbonized batches; shared use requires documented equipment or operating-hour allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_use`
- Source id or status: `cp_energy_use`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional carbonizing electricity screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 10
  - Unit: kWh/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas combusted on site for carbonizing heat (`carbonising_natural_gas`)

Record natural gas separately for acid-concentration drying, baking and final drying; direct pollutants are reported in individual elementary-flow rows.

- Selected flow: Natural gas `78279a0e-8c85-421e-a1aa-2281166ee11f`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Conditional on industrial natural-gas heating matching the verified at-plant CN industrial-furnace flow; remap for a different geography, grade or supply route
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: metered gas × documented gross-calorific-value conversion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_use`
- Source id or status: `cp_energy_use`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional carbonizing natural-gas screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 75
  - Unit: MJ/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam for carbonizing heat (`carbonising_purchased_steam`)

Record imported steam separately from gas and internal heat recovery.

- Selected flow: heat, steam `74d07391-d5e4-4beb-bd80-4fe9a7617cf1`
- Direction: inputs
- Flow type: product
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Conditional on imported steam heat matching the verified CN textile wet-processing industrial-boiler flow; remap for a different geography or steam-supply route
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ; retain kg steam, pressure and enthalpy in raw records
- Amount rule: measured steam mass × documented delivered-enthalpy factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_use`
- Source id or status: `cp_energy_use`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional carbonizing purchased-steam screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 75
  - Unit: MJ/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable carbonized loose wool using the narrower verified identity (`carbonized_wool_output`)

Record the net dry saleable output after neutralization, rinsing and final drying. The selected Tiangong row names scoured wool and is not carbonized-specific; retain the limitation in metadata.

- Selected flow: Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947`
- Direction: outputs
- Flow type: product
- UUID status: verified narrower Tiangong product-flow representative; no carbonized-specific UUID verified
- Applicability: Reference output only for `carbonized_route`, with mandatory identity-limitation disclosure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference output after dry-mass normalization, with `carbonized_route` and identity limitation declared
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net dry saleable carbonized-wool process output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_batch_mass_moisture`
- Source id or status: `cp_batch_mass_moisture`; verified Tiangong identity reference with unresolved carbonized-specific identity limitation
- Sources:
- Range: Reference-flow identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg dry output
  - Basis: PCR reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

##### Waste flows

###### Carbonized vegetable particles removed mechanically (`carbonised_vegetable_particles`)

Measure mechanically removed carbonized vegetable particles separately from captured airborne dust and rejected wool fibre.

- Selected flow: Carbonized vegetable particles from wool
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; bean pulp, scorched particles and other biomass candidates did not identify carbonized vegetable particles removed from wool
- Applicability: Include for the carbonized route when vegetable particles are removed
- Flow property / unit: Mass / kg dry mass
- Amount rule: measured collection or dispatch mass adjusted for moisture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`
- Range: Provisional carbonized-particle screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry particles/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dust captured by carbonizing-line abatement (`carbonising_captured_dust`)

Record dry dust removed from filters, cyclones or other abatement separately from released particulate matter.

- Selected flow: Captured carbonizing dust
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; wool-spinning waste was the only returned candidate and was rejected because it is not captured carbonizing dust
- Applicability: Conditional on dust-abatement equipment collecting a solid waste stream
- Flow property / unit: Mass / kg dry mass
- Amount rule: measured collection or dispatch mass adjusted for moisture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`
- Range: Provisional captured-dust screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg dry dust/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wool fibre rejected during carbonizing (`carbonising_rejected_wool`)

Record non-saleable wool fibre rejects independently from vegetable particles and dust.

- Selected flow: Rejected carbonized wool fibre
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; wool-spinning waste was broader than rejected carbonized wool fibre and was rejected
- Applicability: Conditional on fibre rejection or quality trimming during the carbonizing route
- Flow property / unit: Mass / kg dry mass
- Amount rule: measured reject mass adjusted for moisture
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_byproducts_and_waste`
- Source id or status: `cp_byproducts_and_waste`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`
- Range: Provisional rejected-wool screen; replace under the PCR estimate-replacement trigger
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.50
  - Unit: kg dry rejected wool/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spent sulphuric-acid carbonizing liquor sent to treatment (`carbonising_spent_sulphuric_acid_liquor`)

Record unrecovered sulphuric-acid liquor separately from neutralization and rinse wastewater.

- Selected flow: Spent sulphuric-acid carbonizing liquor
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; generic Waste Acid and sulfuric-acid mist were rejected as broader chemistry or wrong physical phase
- Applicability: Conditional on a sulphuric-acid carbonizing bath purge leaving the process boundary
- Flow property / unit: Volume / L or m3; active H2SO4 and each pollutant load / kg
- Amount rule: metered sulphuric-acid purge volume; calculate active H2SO4 and pollutant loads from matched concentration and volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- Range: Provisional spent-sulphuric-acid-liquor volume screen; never a discharge limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: L/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spent aluminium-chloride carbonizing liquor sent to treatment (`carbonising_spent_aluminium_chloride_liquor`)

Record unrecovered aluminium-chloride liquor independently from sulphuric-acid, neutralization and rinse streams.

- Selected flow: Spent aluminium-chloride carbonizing liquor
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; chloride, sodium/ammonium chloride waste and aluminium scrap were different species or materials
- Applicability: Conditional on an aluminium-chloride carbonizing bath purge leaving the process boundary
- Flow property / unit: Volume / L or m3; aluminium chloride and each pollutant load / kg
- Amount rule: metered aluminium-chloride purge volume; calculate aluminium chloride and pollutant loads from matched concentration and volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- Range: Provisional spent-aluminium-chloride-liquor volume screen; never a discharge limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: L/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carbonizing neutralization wastewater sent to treatment (`carbonising_neutralisation_wastewater`)

Record neutralization discharge separately and retain the actual acid/neutralizer combination and final pH.

- Selected flow: Carbonizing neutralization wastewater
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; generic wastewater/acid/alkaline-liquor candidates did not identify the carbonizing neutralization stream and destination
- Applicability: Include when a distinct neutralization discharge leaves the foreground process
- Flow property / unit: Volume / L or m3; each dissolved substance and pollutant load / kg
- Amount rule: metered discharge volume; calculate each load from matched concentration and volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- Range: Provisional neutralization-wastewater volume screen; never a discharge limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: L/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Carbonizing rinse wastewater sent to treatment (`carbonising_rinse_wastewater`)

Record post-neutralization rinse discharge separately; equipment cleaning requires its own row if separately measured and material.

- Selected flow: Carbonized-wool rinse wastewater
- Direction: outputs
- Flow type: waste
- UUID status: unresolved after flow-hybrid-search; generic textile wastewater was broader and did not identify carbonized-wool rinse water and destination
- Applicability: Include when rinse water is discharged after internal recycle
- Flow property / unit: Volume / L or m3; each pollutant load / kg in its own elementary or treatment record
- Amount rule: metered rinse discharge; calculate each pollutant load from matched concentration and volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Source id or status: `cp_wastewater_monitoring`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`; `eu-txt-bat-2022-2508`
- Range: Provisional carbonizing rinse-wastewater volume screen; never a discharge limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: L/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Dust released after carbonizing and crushing (`carbonising_dust_to_air`)

Measure controlled exhaust or calculate captured-versus-released dust for drying, baking, crushing and residue handling; do not combine captured waste with air emissions.

- Selected flow: Dust, total, to air from carbonizing and crushing
- Direction: outputs
- Flow type: elementary
- UUID status: unresolved after flow-hybrid-search; search returned mineral and metal elementary flows rather than total dust to air; all were rejected
- Applicability: Conditional on a measured or calculated particulate release after abatement
- Flow property / unit: Mass / kg
- Amount rule: measured stack release or documented mass-balance calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`; UUID unresolved and requires foreground mapping
- Sources: `eu-txt-bref-2023`
- Range: Provisional direct-dust screen; never an emission limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg dust/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fossil carbon dioxide from carbonizing-line combustion (`carbonising_fossil_co2_to_air`)

Report fossil carbon dioxide separately for fuel combusted inside the carbonizing foreground boundary.

- Selected flow: carbon dioxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Direction: outputs
- Flow type: elementary
- UUID status: verified by Tiangong flow get at state_code=100; UUID stored without dataset version
- Applicability: Conditional on on-site fossil-fuel combustion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg CO2
- Amount rule: measured release or measured fuel use × documented fuel-specific CO2 factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`; Tiangong flow get verified state_code=100; UUID stored without dataset version
- Sources: `eu-txt-bref-2023`
- Range: Provisional fossil-CO2 screen; replace with fuel-specific calculation evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8
  - Unit: kg CO2/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrogen oxides from carbonizing-line combustion (`carbonising_nox_to_air`)

Report nitrogen oxides independently on the stated measurement or factor basis.

- Selected flow: Nitrogen oxides, expressed as nitrogen dioxide, to air
- Direction: outputs
- Flow type: elementary
- UUID status: unresolved after flow-hybrid-search; search returned nitrite or nitrous oxide rather than nitrogen oxides expressed as NO2; candidates were rejected as different species
- Applicability: Conditional on on-site fuel combustion and a measured or factor-based NOx release
- Flow property / unit: Mass / kg NO2-equivalent on the stated factor basis
- Amount rule: measured release or measured fuel use × documented equipment- and fuel-specific NOx factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`; factor and UUID both require foreground mapping/review
- Sources: `eu-txt-bref-2023`
- Range: Provisional NOx screen; replace with pollutant-specific measured or factor evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg NO2-equivalent/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sulphur dioxide from carbonizing-line combustion (`carbonising_so2_to_air`)

Report sulphur dioxide independently and omit the row only when fuel sulphur and monitoring evidence demonstrate no material release.

- Selected flow: Sulphur dioxide to air
- Direction: outputs
- Flow type: elementary
- UUID status: unresolved after flow-hybrid-search; only aggregate sulfur-oxides flows were returned; they were rejected because this row requires sulfur dioxide specifically
- Applicability: Conditional on on-site fuel combustion and non-zero measured or factor-based SO2 release
- Flow property / unit: Mass / kg SO2
- Amount rule: measured release or measured fuel use × documented fuel-sulphur-specific SO2 factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net dry saleable carbonized-wool process output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_and_fuel_emissions`
- Source id or status: `cp_air_and_fuel_emissions`; factor and UUID both require foreground mapping/review
- Sources: `eu-txt-bref-2023`
- Range: Provisional SO2 screen; replace with pollutant-specific measured or factor evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg SO2/kg dry carbonized output
  - Basis: per 1 kg net dry saleable carbonized-wool process output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | integrated_and_shared_operations | Avoid allocation first by submetering and subdividing scouring, recovery, carbonizing, wastewater treatment and shared utilities. If subdivision is not feasible, document whether system expansion is appropriate before applying allocation. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `allocation_recovered_grease` | recovered_wool_grease | Treat saleable recovered wool grease as a co-product, not as negative waste. Prefer direct measurement and subdivision of recovery operations. If residual shared burdens require allocation, use a documented physical relationship that reflects the operation; use economic allocation only when no defensible physical relationship exists and report a sensitivity case. | `eu-txt-bref-2023`; `eu-pef-2021-2279` |
| `allocation_residues` | dirt_sludge_dust_and_wastewater | Assign handling and treatment burdens to the wool route that generated each residue. Do not give avoided-burden credit for composting, recycling, grease sale or other recovery unless the study applies an explicit, consistently documented system-expansion or substitution method. | `eu-txt-bat-2022-2508`; `eu-pef-2021-2279` |
| `allocation_route_separation` | multiple_wool_routes_and_fineness_classes | Use production records to separate degreased and carbonized routes and wool-fineness classes. When a disclosed production-weighted mix is required, calculate from route-specific dry outputs and inventories; do not use an unweighted category average. | `eu-txt-bref-2023` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_mass_moisture` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | Incoming wool and saleable output mass, moisture and quality | Weighbridge, calibrated scale and laboratory moisture/quality records | lot_id; route; fibre_diameter_class; gross_mass; tare_mass; moisture_fraction; residual_grease; vegetable_matter; saleable_status | Weigh each input and output lot; sample moisture and quality with the declared site or contractual method; reconcile transfers between route modules | kg wet; kg dry; mass fraction; µm where reported | Every lot or batch | At least three consecutive representative production periods and the reporting year | Every facility and route in the dataset | Convert each lot to dry mass, aggregate by route and fineness class, and divide only by matching saleable dry output | Scale calibration; sampling plan; laboratory method; rejected-lot log; mass reconciliation |
| `cp_water_balance` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | Gross water, internal recycle and wastewater volume | Flow meters, tank changes and verified utility records | meter_id; opening_reading; closing_reading; recycle_volume; purge_volume; cleaning_volume; route; batch_id | Meter key process locations; distinguish gross intake, internal recycle and discharge | L or m3 | Continuous or each batch; aggregate monthly | Full reporting year or complete representative campaign | Each line and shared-water system | Allocate shared water by measured run time and verified flow only when direct batch metering is unavailable; report gross, recycle and discharge separately | Meter calibration; water flow diagram; water mass balance; reconciliation to utility invoice |
| `cp_chemical_use` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | Detergent, builder, acid and neutralizing-agent use | Dosing logs, batch sheets, tank inventory and purchase reconciliation | chemical_id; supplier; formulation; concentration; opening_stock; receipts; closing_stock; dose; route; batch_id | Record delivered solution and active concentration; reconcile automated dosing and stock movement | kg solution; kg active substance | Every batch; monthly reconciliation | Full reporting year or complete representative campaign | Each line, chemical and route | Calculate active mass per matching dry output; keep chemical alternatives separate | Calibrated dosing system; supplier SDS/specification; stock reconciliation; deviation log |
| `cp_energy_use` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | Electricity, fuel, steam and recovered heat | Submeters, fuel meters, invoices and equipment logs | carrier; meter_id; opening_reading; closing_reading; heating_mode; recovered_heat; run_time; route | Prefer line or equipment metering; allocate shared utility only with documented engineering drivers | kWh; MJ; kg steam; carrier unit | Continuous or each batch; aggregate monthly | Full reporting year or complete representative campaign | Each facility, line and route | Preserve carriers; subtract no internal recovered heat from gross carrier records; report recovery separately | Meter calibration; invoice reconciliation; allocation workbook; operating-hour log |
| `cp_byproducts_and_waste` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | Recovered grease, dirt, sludge, carbonized particles, dust and rejects | Calibrated scales, dispatch notes and dry-solids tests | stream_id; route; gross_mass; tare_mass; moisture_or_dry_solids; destination; sale_or_waste_status; batch_id | Weigh each dispatch or container and determine moisture/dry solids for variable wet residues | kg wet; kg dry | Every dispatch; aggregate monthly | Full reporting year or complete representative campaign | Each facility, route and destination | Aggregate saleable by-products separately from wastes and normalize dry mass to matching output | Scale calibration; dispatch note; destination certificate; dry-solids result |
| `cp_wastewater_monitoring` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | Wastewater volume and pollutant loads | Flow-proportional monitoring and laboratory analysis at key locations | stream_id; route; volume; pH; temperature; conductivity; COD_or_TOC; TSS; relevant_chemicals; sample_time; destination | Monitor key locations and calculate load as concentration × matched discharge volume; identify pre-treatment and final-treatment points | m3; mg/L; kg pollutant | Flow continuously where material; laboratory frequency based on permit and process variability | Full reporting year or complete representative campaign | Each material wastewater stream and final discharge/transfer point | Sum measured loads by route; allocate shared final treatment with pre-treatment loads and volume, documenting the method | Meter calibration; chain of custody; accredited laboratory result; sampling plan; treatment transfer record |
| `cp_air_and_fuel_emissions` | `aqueous_scouring_and_drying`; `loose_fibre_carbonising` | Direct combustion pollutants and carbonizing dust | Stack testing, continuous monitors, fuel records, captured-dust mass balance and approved factors | source_id; pollutant; concentration; flow; operating_time; fuel_use; factor; captured_dust; released_dust; route | Prefer direct measurement where required; otherwise calculate from measured fuel use and a cited jurisdiction-appropriate factor | kg pollutant; mg/Nm3; Nm3; kg fuel | Permit frequency and each representative operating condition | Full reporting year or complete representative campaign | Each direct emission point and route | Calculate pollutant-specific mass, never aggregate pollutants for published inventory; separate captured waste from released emissions | Stack-test report; monitor calibration; factor reference; fuel reconciliation; dust-control maintenance log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_dry_mass` | All wool inputs and outputs | `dry_mass_kg = net_wet_mass_kg × (1 - moisture_mass_fraction)`; use matched sample and weighing period. | net_wet_mass_kg; moisture_mass_fraction | dry_mass_kg | `iso-14044-2006` |
| `calc_route_yield` | Each route and fibre class | `dry_yield = saleable_output_dry_kg / matched_input_wool_dry_kg`; report rejects and residues separately and do not mix routes or fineness classes. | saleable_output_dry_kg; matched_input_wool_dry_kg | dry_yield | `eu-txt-bref-2023` |
| `calc_normalized_inventory` | Each foreground inventory row | `normalized_amount = matched_period_amount / matched_saleable_output_dry_kg`; keep original unit and conversion factor in evidence. | matched_period_amount; matched_saleable_output_dry_kg; conversion_factor | amount per kg dry reference output | `iso-14044-2006` |
| `calc_water_balance` | Each route | Report gross intake, internal recycle and discharge separately; `water_balance_difference = gross_intake - discharge - water_in_product_or_residue - measured_other_losses`, with evaporation disclosed rather than forced to zero. | gross_intake; recycle_volume; discharge; water_in_product_or_residue; measured_other_losses | route water balance and reconciliation difference | `eu-txt-bat-2022-2508` |
| `calc_grease_recovery_rate` | Aqueous scouring by wool-fineness class | `grease_recovery_rate = recovered_saleable_grease_kg / raw_wool_input_t`. Compare only matching classes: coarse wool typically above 35 µm uses 10-15 kg/t; extra-/super-fine wool typically below 20 µm uses 50-60 kg/t. For 20-35 µm or mixed/unknown classes, collect and report the rate without applying either interval. | recovered_saleable_grease_kg; raw_wool_input_t; fibre_diameter_class | kg recovered grease/t raw wool | `eu-txt-bat-2022-2508` |
| `calc_carbonising_conditions` | Sulphuric-acid loose-fibre carbonizing | Record bath acid concentration, retained acid and water after hydroextraction, drying temperature, baking temperature and final pH. The BREF typical description is 6-9% mineral-acid solution, 5-7.5% sulphuric acid and 50-65% water retained after pressing/centrifugation, drying at 65-90 °C, baking at 105-130 °C and final pH 6; values outside these are flagged for explanation, not automatically overwritten. | bath_acid_percent; retained_acid_percent; retained_water_percent; drying_temperature; baking_temperature; final_pH | disclosed carbonizing-condition record and QA flag | `eu-txt-bref-2023` |
| `calc_wastewater_load` | Each wastewater stream | `load_kg = concentration_mg_per_L × discharge_volume_L / 1,000,000`; sum only matched samples and volumes and state interpolation. | concentration_mg_per_L; discharge_volume_L | kg pollutant by stream and route | `eu-txt-bat-2022-2508` |
| `calc_mass_reconciliation` | Each route | Reconcile dry wool input with saleable dry wool, recovered grease, dry residues, rejects and sampled losses. Investigate and disclose material imbalance; do not use a balancing flow to conceal missing records. | dry_wool_input; saleable_dry_output; recovered_grease; dry_residues; rejects; measured_losses | mass-balance difference and explanation | `iso-14044-2006`; `eu-txt-bref-2023` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | Dataset identity | Declare one route or a documented production-weighted mix, the process modules included, pure-sheep-wool status, fibre-diameter class and not-carded-or-combed state. | Product specification, process flow diagram, lot records and route-production totals |
| `dq_reference_uuid_limit` | Reference flow | Use the verified Scoured Wool UUID. For carbonized output, state that it is a narrower degreased-route representative and no carbonized-specific UUID was verified. | Reference-flow metadata and manifest review limitation |
| `dq_temporal_representativeness` | Foreground data | Cover a full reporting year where available; otherwise cover at least three consecutive representative production periods and disclose seasonality, shutdowns, abnormal conditions and exclusions. | Production calendar, meter coverage and exception log |
| `dq_mass_and_moisture` | Wool and solid streams | Use calibrated weighing and matched moisture or dry-solids results; do not mix wet and dry masses. Complete route-level mass reconciliation. | Calibration certificates, sampling records, laboratory results and reconciliation workbook |
| `dq_water_energy_chemicals` | Major resource inputs | Reconcile meters and dosing records to invoices or stock movement; preserve carrier and chemical identities and disclose shared-utility allocation. | Meter calibration, invoices, stock reconciliation and allocation workbook |
| `dq_emissions_wastewater` | Direct releases and transfers | Use pollutant-specific records and matched flows; retain sampling location, method, laboratory, detection-limit treatment and wastewater destination. | Monitoring plan, chain of custody, analytical reports, permit records and transfer notes |
| `dq_estimate_replacement` | All `reasoned_estimate` ranges | Use reasoned ranges only to flag records for review. Never populate missing foreground values from them. Replace them after three consecutive representative periods, after material process change, or before publication-critical comparison. | Range replacement log, reviewed site statistics or stronger external evidence |
| `dq_source_applicability` | External evidence | Document whether each BREF/BAT statement is descriptive, typical or normative and whether installation scale and route match; do not turn a typical process description into an emission limit. | Source applicability note and reviewer approval |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Fail when the reference product UUID, mass-property UUID, unit-group UUID or kg unit differs from this PCR. For `carbonized_route`, also fail when the narrower-identity limitation is absent. | `un-cpc-30-2025` |
| `validate_route_process_set` | process_map_and_inventory | Fail when the declared route and included modules conflict: degreased requires scouring; integrated carbonized requires scouring plus carbonizing; carbonizing-only requires carbonizing and one upstream scoured-wool dataset. | `eu-txt-bref-2023` |
| `validate_scope_qualifiers` | product_identity | Fail when route, sheep-wool fineness class, pure-wool status, incoming state, output moisture basis, residual grease/vegetable-matter specification or not-carded-or-combed state is missing; reject blends and downstream forms from this PCR. | `un-cpc-30-2025`; `eu-txt-bref-2023` |
| `validate_no_unconditional_average` | aggregation | Fail when degreased and carbonized routes, different carbonizing chemistries, pure wool and blends, or coarse/fine wool are averaged without route-specific records, production weights and an explicit mixed-product scope. | `eu-txt-bref-2023` |
| `validate_grease_recovery_conditioning` | recovered_wool_grease | Apply the 10-15 kg/t raw wool screen only to coarse wool typically above 35 µm and 50-60 kg/t only to extra-/super-fine wool typically below 20 µm. For other or mixed classes, report foreground rate without either screen. Flag outliers for explanation; do not replace observations. | `eu-txt-bat-2022-2508` |
| `validate_carbonising_conditions` | sulphuric_acid_carbonising | Require measured bath/retained-acid conditions, drying and baking temperatures, neutralizing agent and final pH. Flag departures from the BREF typical condition ranges for route evidence and product-quality review; do not automatically fail a documented alternative technology. | `eu-txt-bref-2023` |
| `validate_recovery_and_water_disclosure` | aqueous_scouring | Require gross water, recycle, discharge, recovered grease, dirt/sludge and wastewater destination. Flag absent grease recovery or water recycle for BAT applicability review rather than silently assuming zero. | `eu-txt-bat-2022-2508` |
| `validate_foreground_completeness` | all_foreground_rows | Fail when a collected/calculated row lacks a collection protocol, matched temporal coverage, normalization basis or supporting record. Treat missing values as incomplete; never fill them from a `reasoned_estimate` range. | `eu-txt-bat-2022-2508`; `iso-14044-2006` |
| `validate_mass_balance` | each_route | Fail when wet and dry bases are mixed. Flag material dry-mass imbalance for investigation and require an explanation for unresolved difference; prohibit undisclosed balancing flows. | `iso-14044-2006` |
| `validate_allocation` | multifunctional_operations | Fail when co-product or shared-treatment allocation is undisclosed or when economic allocation is used without first documenting subdivision/system-expansion and physical-relationship assessment. | `eu-pef-2021-2279`; `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate wool-preparation dataset for a declared degreased or carbonized route |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology and translation review and only within the disclosed route, fibre class, technology, geography and period |
| allowed_use | LCA foreground packages and downstream process/lifecyclemodel projections requiring loose degreased or carbonized sheep wool before carding or combing; route-specific comparison when primary records are complete |
| excluded_use | Greasy/raw wool, non-sheep animal hair, blends, noils/waste, carded/combed wool, tops, yarn, fabric, farm-gate wool production, fabric carbonizing, or an exact carbonized-wool UUID claim |
| required_metadata | PCR id and version state; Tiangong UUIDs; route and included modules; facility and geography; reporting period; fibre-diameter class; pure-wool status; incoming state; dry-mass/moisture method; residual grease and vegetable-matter specification; carbonizing chemistry and conditions; water/recovery configuration; wastewater and waste destinations; allocation; upstream datasets; carbonized identity limitation |
| required_quality_disclosure | Foreground-versus-calculated data share; meter and sampling coverage; mass/water reconciliations; route-specific yield; grease recovery rate and applicable fibre-class screen; reasoned-estimate flags and replacement status; exclusions, allocations, data gaps, abnormal operation and source applicability |
| update_trigger | New verified carbonized-wool product-flow UUID; material change in route, fibre mix, chemicals, recovery or treatment; three representative periods sufficient to replace provisional screens; new official BAT/BREF or classification revision; monitoring or mass-balance failure; reviewer acceptance or rejection of the candidate methodology |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-30-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, code 26130, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Official category identity and distinction from carded/combed wool and neighbouring natural-fibre products |
| `eu-txt-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, EUR 31392 EN, JRC131874, DOI 10.2760/355887, Sections 2.3.1, 2.6.2.1.1 and 4.2, https://publications.jrc.ec.europa.eu/repository/handle/JRC131874 (retrieved 2026-08-12) | Scouring and loose-fibre carbonizing process decomposition, route alternatives, typical carbonizing conditions, recovery configurations, emissions and resource-efficiency context |
| `eu-txt-bat-2022-2508` | official_guidance | Commission Implementing Decision (EU) 2022/2508 of 9 December 2022 establishing BAT conclusions for the textiles industry, ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-12) | Input/output inventories, water/energy/material monitoring, wastewater monitoring, wool-grease recovery and water-recycle requirements, fibre-class-conditioned grease-recovery performance levels |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of Environmental Footprint methods, ELI http://data.europa.eu/eli/reco/2021/2279/oj, allocation decision hierarchy (retrieved 2026-08-12) | Subdivision/system-expansion-first allocation hierarchy and physical-relationship allocation rule |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, confirmed 2022, https://www.iso.org/standard/38498.html (retrieved 2026-08-12) | LCI consistency, transparent allocation, normalization, documentation and data-quality framework |
