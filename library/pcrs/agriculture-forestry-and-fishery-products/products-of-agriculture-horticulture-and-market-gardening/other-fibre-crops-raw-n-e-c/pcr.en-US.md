---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fibre-crops-raw-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other fibre crops, raw, n.e.c.

## 1. Scope and Applicability

This PCR applies to one explicitly named raw fibre crop or product within CPC 01929, from managed cultivation and harvest or first extraction through the selected first raw-fibre preparation handoff. Covered examples include raw or retted flax and true hemp, coir, abaca, esparto, aloe, pineapple leaf, bowstring hemp, caroa, ramie, African hemp, typha and yucca fibre. Each data package shall declare one species, fibre-bearing plant part, preparation state, grade, moisture and handoff.

Cotton and the jute/kenaf class are excluded, as are spinning, yarn, fabric, finished-product manufacture and retail packaging. First preparation may conditionally include retting, decortication, washing, drying, scutching, cleaning and grading; later textile processing shall not be included. Select once either farm/raw harvest handoff or the first prepared-raw-fibre handoff. Perennial routes shall link establishment and productive periods.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-fibre-crops-raw-n-e-c |
| classification_refs | CPC 3.0:01929; mapping relation: exact |
| covered_products | One named-species raw or retted fibre-crop product at a declared harvest, extraction or first-preparation state |
| excluded_products | Cotton; jute/kenaf class; yarn, fabric, finished goods, blended fibres and downstream manufacture |
| representative_product | 1 kg of single-species raw fibre at declared moisture, retting/preparation state and grade |
| production_route | Managed cultivation → harvest/first extraction → optional retting, decortication, washing, drying, scutching, cleaning and grading → raw-fibre handoff |
| market_state | Bulk raw fibre material, not spun or made into fabric |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | One raw fibre product of a declared species, plant part and preparation state |
| How much | 1 kg net product |
| How well | Declare species, variety when known, fibre-bearing part, raw/retted state, preparation route, grade, impurities and moisture |
| How long or cycle | One identified lot and its crop cycle; perennial routes include or attribute establishment |
| reference_flow_link | reference_raw_fibre |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other fibre crops, raw, n.e.c. `99b99c66-1c44-40db-bb8e-2d5ec022aa28` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Botanical species; fibre-bearing part; raw or retted state; preparation route; moisture; grade; impurities; geography; crop cycle; farm or first-preparation gate |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-balance products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass; compare lots on one moisture basis and use measured lot moisture for conversions |
| `moisture_state` | raw, retted and dried fibre states | water mass fraction | % wet basis | Sample at each handoff and declare method; do not replace measurement with a category default |
| `transport_service` | off-site transfer | mass-distance | t·km | Multiply net load by loaded distance; disclose empty return and own-account fuel without duplication |
| `land_time` | annual and perennial crop periods | area-time | ha·year | Record area and time separately for establishment and productive periods |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declare field state before establishment or at the selected productive-period start, including perennial stand age |
| starting_condition_role | Raw fibre-crop producer |
| product_classification_scope | One named raw fibre product within CPC 01929; no aggregation across species, cotton or the jute/kenaf class |
| recursive_input_rule | Record retained propagation material once as an internal transfer; do not recursively count it as both upstream product and the same foreground output |
| upstream_dataset_requirement | Purchased propagation, nutrients, protection products, water, energy, transport and treatment require verified datasets for actual products or services |
| disclosure | Declare species, plant part, route, site, period, moisture, retting and preparation state, grade, handoff, residue destinations and attribution choices |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `route_boundary` | complete route | Cultivation, harvest/extraction and first preparation are separate responsibility nodes; include only selected preparation operations | `unsd-cpc-v3-2025` |
| `gate_exclusivity` | reference product | Choose farm handoff or first-preparation handoff once; do not count intermediate material again as reference output |  |
| `route_alternatives` | production and preparation | Rainfed/irrigated, manual/mechanical harvest, dew/water/enzyme retting and ambient/mechanical drying are explicit route choices, not unevidenced averages | `fao-natural-fibres-2009` |
| `period_boundary` | perennial crops and shared assets | Apply explicit multi-period attribution: link establishment, production, renewal and termination to reporting periods; attribute shared equipment once by recorded service and period |  |
| `material_state_handoff` | all nodes | At every handoff record input/output state, moisture, mass, destination and responsible party, linked by lot balance |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `crop_production` | Managed fibre-crop production | required | Declare annual or perennial route and production periods | managed biological production | crop area, period and harvest-ready biomass |
| `harvest_extraction` | Harvest and primary extraction | required | Declare cutting, pulling, stripping or recovery route by plant part | harvest/capture | collected raw-material lot |
| `primary_fibre_preparation` | First fibre preparation and grading | conditional | Include when first retting, decortication, washing, drying, scutching, cleaning or grading precedes the selected gate | treatment, stabilization and grading | accepted prepared raw fibre |

### Process: Managed fibre-crop production (`crop_production`)

#### Inputs

##### Product flows

###### Seed, planting stock or vegetative propagation material (`propagation_material`)

Record the identified seed, seedling, sucker, rhizome, cutting or planting stock entering the crop system. Retained material is recorded only when transferred across the declared foreground boundary.

- Selected flow: Crop-specific propagation material; UUID unresolved until species and form are known
- Flow property / unit: Mass / kg, or count when the verified flow supports count
- Amount rule: Measured purchase or transfer quantity by species, lot and planting area
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg reference product, retaining crop-cycle linkage.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_propagation`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: Per 1 kg reference product, retaining crop-cycle linkage; conditional routes impose zero only when inactive
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fertilizer, urea input (`fertilizer_nutrient_inputs`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference product with field and crop period retained.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrients`

###### Fertilizer, monoammonium phosphate input (`fertilizer_nutrient_inputs_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference product with field and crop period retained.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrients`

###### Fertilizer, potassium chloride input (`fertilizer_nutrient_inputs_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference product with field and crop period retained.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrients`

###### Cattle manure, as applied input (`fertilizer_nutrient_inputs_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference product with field and crop period retained.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrients`

###### Agricultural limestone input (`fertilizer_nutrient_inputs_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg reference product with field and crop period retained.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrients`

Required crop-protection records: before completing the foreground package, enumerate every actually applied formulated product separately, retaining trade name, active ingredient, salt or chemical form, concentration, density where needed, application quantity, date and treated area. Select one physically specific product identity per exchange. Derive active-substance releases separately by substance and receiving compartment. Missing formulation identity is a completeness gap; do not replace it with a generic pesticide, invented example, or assumed zero.

###### Irrigation water (`irrigation_water`)

Record water supplied for irrigation by source. Rainfall is site context and is not a supplied product exchange.

- Selected flow: Irrigation water actually supplied
- Flow property / unit: Volume / m3
- Amount rule: Measure the actual supplied-water quantity crossing this product-supply boundary by event/use and matched period, in its declared native unit. A source-abstraction meter is not automatically the delivered-product quantity: reconcile distribution losses, external returns and storage change between the two measurement points. Direct natural abstraction owned by the foreground requires a separate source-specific elementary input and local supply operations; the internal delivery then cancels inside the aggregate boundary, rather than adding a second external water purchase. Purchased water inherits its compatible provider abstraction and supply burdens once. Retain rainfed/no-supply absence evidence; missing delivery/ownership evidence is incomplete, not zero. Attribute and normalize once to accepted final output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per hectare crop cycle, subsequently normalized to reference product.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_irrigation`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha crop cycle
  - Basis: Per hectare crop cycle, subsequently normalized to reference product; conditional routes impose zero only when inactive
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`crop_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg reference product with operation retained.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Diesel fuel input (`crop_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg reference product with operation retained.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

##### Waste flows

No preset flow in this category; add only when foreground records demonstrate it.

##### Elementary flows

###### Agricultural land occupation (`crop_land_occupation`)

Record occupied area and time for the declared annual or perennial production period.

- Selected flow: Occupation, agricultural land; elementary identity unresolved
- Flow property / unit: Area-time / ha·year
- Amount rule: Measured cultivated area multiplied by occupied time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per crop cycle before yield normalization.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_area_period`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.00001
  - Upper: 1
  - Unit: ha·year/kg harvest-ready biomass
  - Basis: Per crop cycle before yield normalization; conditional routes impose zero only when inactive
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Harvest-ready fibre-crop biomass (`harvest_ready_biomass`)

This intermediate is the identified plant or plant part released by managed production to harvest; it is not yet the raw-fibre reference product.

- Selected flow: Species-specific harvest-ready fibre-crop biomass; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured or reconciled field output at declared moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per crop-production process output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg raw fibre product
  - Basis: Per crop-production process output; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Crop-production losses removed from the field (`field_losses`)

Record failed or removed biomass as waste only when it crosses the field boundary to a declared waste destination.

- Selected flow: Species-specific field biomass waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured removed mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg harvest-ready biomass.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg harvest-ready biomass
  - Basis: Per 1 kg harvest-ready biomass; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct soil nitrous oxide (`soil_nitrous_oxide`)

Calculate direct soil N2O from recorded nitrogen inputs with the declared IPCC tier or a justified local method.

- Selected flow: Nitrous oxide to air; UUID unresolved pending compartment confirmation
- Flow property / unit: Mass / kg N2O
- Amount rule: Apply declared emission factor and convert N2O-N to N2O where required
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per nitrogen input, normalized to reference product.

- Normalization basis: per declared reference flow
- Basis kind: Nitrogen input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_nutrients`
- Sources: `ipcc-2019-refinement-v4-ch11`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg N2O/kg N applied
  - Basis: Per nitrogen input, normalized to reference product; conditional routes impose zero only when inactive
  - Basis kind: Nitrogen input (`n_input`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Harvest and primary extraction (`harvest_extraction`)

#### Inputs

##### Product flows

###### Harvest-ready fibre-crop biomass input (`harvest_ready_input`)

Record the production-node output entering cutting, pulling, leaf stripping, fruit-husk recovery or the applicable extraction route.

- Selected flow: Species-specific harvest-ready fibre-crop biomass; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Transferred lot mass at the measured moisture state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per harvest process input.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg raw fibre product
  - Basis: Per harvest process input; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`harvest_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg raw collected material.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Diesel fuel input (`harvest_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg raw collected material.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

##### Waste flows

No preset flow in this category; add only when foreground records demonstrate it.

##### Elementary flows

No preset flow in this category; add only when foreground records demonstrate it.

#### Outputs

##### Product flows

###### Raw collected fibre material (`raw_collected_fibre_material`)

Record the species-specific stem, leaf, bast, husk or separated fibre state handed to primary preparation.

- Selected flow: Species- and state-specific raw fibre material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted lot mass and moisture at handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per harvest process output.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_mass`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1
  - Unit: kg/kg harvest input
  - Basis: Per harvest process output; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended harvest products (`harvest_coproducts`)

Record seed, woody core, leaves or other material as a product only when it has an intended use and documented handoff.

- Selected flow: Product-specific intended co-product; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by product state and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg raw collected fibre material.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_destinations`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg raw collected fibre material
  - Basis: Per 1 kg raw collected fibre material; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest residues sent to waste management (`harvest_residues`)

Record incidental biomass as waste when its destination is disposal or treatment; material returned to soil is disclosed separately and not duplicated.

- Selected flow: Fibre-crop harvest residue waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured residue mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg raw collected fibre material.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg raw collected fibre material
  - Basis: Per 1 kg raw collected fibre material; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No preset flow in this category; add only when foreground records demonstrate it.

### Process: First fibre preparation and grading (`primary_fibre_preparation`)

#### Inputs

##### Product flows

###### Raw collected fibre material input (`raw_material_input`)

Record the exact raw or retted state entering the declared first preparation route.

- Selected flow: Species- and state-specific raw fibre material; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass and moisture by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per primary-preparation input.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_mass`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg/kg prepared raw fibre
  - Basis: Per primary-preparation input; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Retting and washing process water (`process_water`)

Record supplied water only when water retting, washing or rinsing is performed; keep source and operation identifiable.

- Selected flow: Process water supplied for retting or washing
- Flow property / unit: Volume / m3
- Amount rule: Metered or documented supplied volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg prepared raw fibre.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_water`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg prepared raw fibre
  - Basis: Per 1 kg prepared raw fibre; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`conditioning_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg prepared raw fibre.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Diesel fuel input (`conditioning_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per 1 kg prepared raw fibre.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Transport from harvest site to first preparation (`raw_material_transport`)

Record third-party freight when raw material moves between sites; own-account fuel is recorded once under the operating node.

- Selected flow: Freight transport service for raw fibre-crop material
- Flow property / unit: Mass-distance / t·km
- Amount rule: Net transported mass multiplied by loaded route distance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: Per transported raw-material lot.

- Normalization basis: per declared reference flow
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_transport`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: t·km/t raw material
  - Basis: Per transported raw-material lot; conditional routes impose zero only when inactive
  - Basis kind: Transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater treatment service (`wastewater_treatment`)

Record treatment service only for wastewater transferred to an external treatment provider.

- Selected flow: Wastewater treatment service selected for the actual route
- Flow property / unit: Volume / m3
- Amount rule: Measured discharged volume accepted by treatment provider
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: Per 1 kg prepared raw fibre.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg prepared raw fibre
  - Basis: Per 1 kg prepared raw fibre; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No preset flow in this category; add only when foreground records demonstrate it.

##### Elementary flows

No preset flow in this category; add only when foreground records demonstrate it.

#### Outputs

##### Product flows

###### Prepared raw fibre reference product (`reference_raw_fibre`)

This intended output is the selected single-species raw or retted fibre at the first preparation handoff. It excludes yarn, fabric and finished fibre goods.

- Selected flow: Other fibre crops, raw, n.e.c. `99b99c66-1c44-40db-bb8e-2d5ec022aa28`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Exactly 1 kg net accepted product at declared moisture, preparation state and grade

- Amount rule: 1 kg
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: PCR reference flow.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_conditioning_mass`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/reference flow
  - Basis: PCR reference flow; conditional routes impose zero only when inactive
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other intended preparation co-products (`fibre_coproducts`)

Record shives, woody core, tow, seed or other outputs as co-products only when intended use and handoff are documented.

- Selected flow: Product-specific co-product; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured output by state, grade and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg prepared raw fibre.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_destinations`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared raw fibre
  - Basis: Per 1 kg prepared raw fibre; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected fibre and preparation residues (`conditioning_rejects`)

Record rejected fibre, dirt and unusable residues by measured mass and destination; downgraded saleable material remains a product.

- Selected flow: Preparation residue waste; UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured reject and residue mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg prepared raw fibre.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg prepared raw fibre
  - Basis: Per 1 kg prepared raw fibre; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Retting or washing wastewater (`conditioning_wastewater`)

Record wastewater volume and receiving route when wet processing occurs. Do not infer discharge where no wet route is selected.

- Selected flow: Process wastewater; UUID unresolved until composition and destination are known
- Flow property / unit: Volume / m3
- Amount rule: Metered or water-balance discharge by destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg prepared raw fibre when wet route applies.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater`
- Range: Broad first-pass QA range; replace with actual foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3/kg prepared raw fibre
  - Basis: Per 1 kg prepared raw fibre when wet route applies; conditional routes impose zero only when inactive
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No preset flow in this category; add only when foreground records demonstrate it.


## 7. Allocation and Co-product Handling

### Allocation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `mass_balance_first` | all processes | First reconcile inputs, accepted product, co-products, residues, waste and measured moisture change by lot |  |
| `coproduct_attribution` | intended co-products | Prefer subdivision. If allocation remains necessary, declare physical or economic method, data period and sensitivity for the study goal | `iso-14044-2006` |
| `residue_classification` | residues and rejects | Only material with intended use and documented handoff is a co-product; waste, soil return and unowned loss receive no product output quantity |  |
| `multi_period_attribution` | perennial establishment and shared assets | Attribute using evidenced productive years, service or lifetime output, recording replacement and termination; no burden may be counted in multiple periods |  |
| `shared_asset_attribution` | assets serving multiple nodes | List consuming nodes and periods and attribute once using recorded machine hours, mass processed or other causal service |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_propagation` | `crop_production` | propagation material | records | supplier invoices; lot and planting logs | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | kg or count | each planting event | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_nutrients` | `crop_production` | fertilizer and nutrients | records | product invoices; nutrient analysis; field application log | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | kg product and kg nutrient | each application | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_crop_protection` | `crop_production` | crop protection | records | application log; formulation and active ingredient | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | kg or L | each application | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_irrigation` | `crop_production` | irrigation water | records | meter reading or documented withdrawal ; actual supply boundary and meter location; product delivery; direct-abstraction owner; source-to-delivery losses, returns and storage; provider coverage| direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | m3 | each irrigation period | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_energy` | `all processes` | energy carriers | records | meters; invoices; equipment and fuel logs | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | native carrier unit | monthly and by operation | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_area_period` | `crop_production` | area and period | records | georeferenced field register; establishment and productive dates | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | ha and days | each crop period | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_harvest_mass` | `harvest_extraction` | harvest mass | records | calibrated scale; lot moisture sample | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | kg and % wet basis | each harvest lot | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_output_destinations` | `harvest and preparation` | intended outputs | records | dispatch note; buyer or internal transfer record | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | kg | each output lot | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_residues` | `all processes` | residues and waste | records | scale ticket; destination and fate record | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | kg | each transfer | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_conditioning_mass` | `primary_fibre_preparation` | received and prepared fibre | records | calibrated scales; moisture and grade sample | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | kg and % wet basis | each lot | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_conditioning_water` | `primary_fibre_preparation` | process water | records | meter reading and source record | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | m3 | each batch or day | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_transport` | `primary_fibre_preparation` | transport service | records | dispatch mass; loaded route distance; vehicle record | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | t and km | each trip | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |
| `cp_wastewater` | `primary_fibre_preparation` | wastewater | records | discharge meter or water balance; destination receipt | direct record with traceable source; Raw aggregation and attribution: sum by process and normalize through accepted output | m3 | each batch or day | representative declared period | all included sites and lots | per declared reference flow | calibration, invoice, log or receipt retained |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | all inventory rows | process exchange ÷ accepted net reference-product mass from the same lot | exchange amount; lot links; accepted reference mass | amount per kg reference product |  |
| `moisture_conversion` | fibre states | dry matter = wet mass × (1 − wet-basis moisture); paired lot measurements only | wet mass; moisture fraction | comparable mass state |  |
| `transport_work` | freight | t·km = net tonnes loaded × loaded route kilometres | dispatch mass; route distance | transport service |  |
| `soil_n2o` | managed soil | calculate N2O-N from N inputs with declared IPCC tier and convert to N2O by 44/28 | N inputs; emission factors | kg N2O | `ipcc-2019-refinement-v4-ch11` |
| `lot_mass_balance` | harvest and preparation | input = accepted product + co-products + residues/waste + stock change + measured moisture change | lot masses; moisture; stock | reconciliation result |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_nutrients`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `identity_quality` | reference product | Species, plant part, state, grade and gate are compatible with the fixed product UUID | lot specification and flow detail verification |
| `coverage_quality` | foreground inventory | Cover all sites, fields, lots and actual operations in the declared period; quantify missing records | completeness ledger |
| `measurement_quality` | mass, moisture, water and energy | Record meter, calibration, sampling method, unit conversion and outlier treatment | calibration and sampling records |
| `temporal_quality` | annual/perennial route | Data period matches crop cycle and identifies establishment, production, renewal and termination | dated crop and asset records |

## 9. Validation Rules

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Fixed UUID, Mass property and kg unit must match the named raw fibre product and declared gate | error |
| `validate_gate_once` | route | Farm and first-preparation handoffs cannot both be reference outputs | error |
| `validate_ranges` | every flow card | Check nonnegative bounds, lower ≤ upper and process-consistent denominator; inactive conditional routes impose no positive amount | error |
| `validate_flow_identitys` | parameterized inputs | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | error |
| `validate_balance` | harvest and preparation | Balance input, products, co-products, residues, waste and stock change on declared moisture basis | error |
| `validate_outputs` | intended outputs and rejects | Every intended output has a handoff; downgraded, rejected, recovered or waste states have explicit non-duplicated destinations | error |
| `validate_period_assets` | perennial and shared infrastructure | Periods and consuming nodes are complete; establishment and shared-asset burdens are attributed once | error |
| `validate_route_delta` | alternative routes | Each alternative declares parent activity and real topology, inventory, calculation or validation delta; mutually exclusive routes are not averaged | error |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one named raw fibre product |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product systems compatible in species, plant part, state, route, geography and gate |
| excluded_use | Unqualified proxy for other species, cotton, jute/kenaf, blended fibre, yarn, fabric or finished goods |
| required_metadata | Species; plant part; raw/retted state; preparation technology; moisture; grade; impurities; site; period; gate; allocation |
| required_quality_disclosure | Coverage, measurement and calibration, out-of-range values, missing records, route proxies, co-product and multi-period attribution |
| update_trigger | Material change in product state, route, gate, technology, species scope, fixed UUID compatibility or key evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 structure and explanatory notes, 2025 | CPC 01929 product scope and examples |
| `fao-natural-fibres-2009` | official_guidance | FAO and Common Fund for Commodities, Proceedings of the Symposium on Natural Fibres, 2009 | natural-fibre crop routes, primary preparation and market states |
| `ipcc-2019-refinement-v4-ch11` | method_factor | IPCC 2019 Refinement, Volume 4, Chapter 11: N2O Emissions from Managed Soils | managed-soil N2O calculation |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines | allocation hierarchy and transparency |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
