---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.tufted-textile-fabrics-other-than-carpets
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Tufted textile fabrics, other than carpets

## 1. Scope and Applicability

This PCR applies to factory-gate production of tufted textile fabrics in the piece, other than carpets. The defining operation inserts pile yarn through a primary textile backing to form loop or cut pile. The declared product may be greige or may receive route-specific mechanical finishing, wet processing, back coating, lamination, and packaging. The producer shall declare fibre composition, primary-backing material, pile construction, mass per area, usable width, finish state, chemical treatment, backing system, and whether wet processing or back coating occurs.

Floor-covering carpets, hand-tufted finished articles, woven pile and chenille fabrics, terry fabrics, knitted pile fabrics, flocked nonwovens, embroidery, and made-up articles are outside this category. Upstream fibre, yarn, backing, chemical, energy, and packaging production is represented by linked upstream datasets, not by expanding those production processes inside the foreground gate-to-gate record. Use and end-of-life are outside the declared boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.tufted-textile-fabrics-other-than-carpets |
| classification_refs | CPC 3.0:26880 (exact) |
| covered_products | Tufted textile fabrics in the piece, other than carpets, with loop pile, cut pile, or mixed pile, supplied greige or with declared finishing/backing operations. |
| excluded_products | Carpets and other floor coverings; woven pile or chenille fabrics; terry fabrics; knitted pile fabrics; flocked nonwovens; embroidery; finished made-up articles. |
| representative_product | Finished tufted textile fabric, other than carpet, at the manufacturing plant gate. |
| production_route | Receipt of pile yarn and primary backing; tuft insertion; route-specific mechanical finishing, wet processing, back coating or lamination; inspection and packaging. |
| market_state | Saleable fabric in rolls or another declared shipment form, at plant gate, with finish and backing state disclosed. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide tufted textile fabric, other than carpet, with the declared pile construction and finish for downstream conversion. |
| How much | 1 kg net mass of conforming factory-gate fabric, excluding transport packaging. |
| How well | Meets the declared fibre composition, backing construction, pile form, mass per area, usable width, finish specification, and quality grade. |
| How long or cycle | One production campaign or reporting period represented by the foreground records. |
| reference_flow_link | The functional unit is realized by the single verified reference product flow below. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Tufted textile fabrics, other than carpets `e9861e6a-cfb3-4e5f-8f40-e3990c2eb7fa` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre composition by mass; pile yarn construction; primary-backing material; loop/cut/mixed pile; pile height and density; mass per area; usable width; greige/dyed/printed/finished state; chemical finish; backing or lamination system; quality grade; production geography; reporting period; net-product moisture or conditioning basis; packaging exclusion from reference mass |

When constructing a foreground data package, every `Required qualifiers` item shall be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and material exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net conforming fabric mass at the declared conditioning basis; exclude cores, film, pallets, and other transport packaging from the 1 kg reference amount. |
| `area_to_mass_conversion` | Production or sales records held in m2 or linear m | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert area or length records with lot-specific measured usable width and mass per area; retain both measurements and the conversion calculation. |
| `chemical_formulation_mass` | Process chemicals and formulated binders | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record supplied formulation mass and solids or active content separately; do not silently substitute dry solids for purchased formulation mass. |
| `energy_carrier_separation` | Electricity, steam, and fuel | Carrier-specific property | kWh or MJ | Preserve metered carrier units and conversion factors; electricity, steam, and each fuel remain separate atomic exchanges. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Pile yarn, primary backing, and any route-specific purchased materials are received at the foreground manufacturing site; their composition, supplier geography, and incoming condition are declared. |
| starting_condition_role | Gate-to-gate foreground starting condition for tufting and declared finishing operations. |
| product_classification_scope | CPC 3.0 subclass 26880 only; carpets and other excluded textile constructions are not represented. |
| recursive_input_rule | If purchased input is itself a CPC 26880 tufted fabric, record it once as an upstream product input with its own dataset and do not recursively reproduce its manufacturing inventory in this foreground package. |
| upstream_dataset_requirement | Link representative datasets for yarn, backing, chemicals, electricity, fuels, water supply, packaging, and off-site treatment; disclose any proxy and its technology, geography, and temporal mismatch. |
| disclosure | Declare all active and omitted route steps, shared utilities, on-site treatment, off-site treatment handoffs, recovered materials, packaging boundary, and the physical factory gate. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | foreground process boundary | Include tuft insertion and every mechanical, wet, coating, lamination, curing, inspection, and packaging operation performed to reach the declared factory-gate state. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `boundary_input_output_inventory` | all foreground operations | Establish process-level input/output inventories for textile materials, chemicals, water, energy, wastewater, waste, and relevant air emissions using direct records or documented calculations from those records. | `eu-textiles-bat-2022` |
| `boundary_upstream_links` | purchased inputs and off-site services | Keep production of purchased inputs and off-site treatment outside the foreground gate-to-gate boundary but link representative upstream datasets without double counting. | `jrc-ilcd-provisions-2010`; `iso-14044-2006` |
| `boundary_no_silent_cutoff` | material and emission flows | Do not omit a flow solely because its quantity is small; any exclusion requires the study cut-off rule, the excluded flow, and the expected influence on completeness to be disclosed. | `iso-14044-2006`; `jrc-ilcd-provisions-2010` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tuft_insertion` | Tuft insertion into primary backing | required | Always included. | Core foreground fabric formation. | 1 kg final conforming fabric at plant gate. |
| `mechanical_finishing` | Mechanical pile finishing | conditional | Include when shearing, brushing, raising, steaming, heat-setting, or another mechanical finish occurs. | Route-specific foreground finishing. | Mass entering and leaving this operation, normalized to 1 kg final product. |
| `wet_processing` | Wet pretreatment, dyeing, printing, washing, or chemical finishing | conditional | Include every on-site wet process used for the declared product. | Route-specific foreground wet processing. | Mass treated and all recorded liquor, chemical, energy, wastewater, and waste flows per 1 kg final product. |
| `back_coating_lamination` | Back coating, curing, or lamination | conditional | Include when binder, coating, or secondary backing is applied. | Route-specific foreground backing formation. | Mass entering and leaving this operation per 1 kg final product. |
| `inspection_packaging` | Inspection, trimming, rolling, and packaging | required | Always include final inspection and shipment preparation; record zero only where an atomic packaging component is demonstrably absent. | Final foreground product preparation. | 1 kg net conforming product excluding transport packaging. |

### Process: Tuft insertion into primary backing (`tuft_insertion`)

#### Inputs

##### Product flows

###### Pile yarn (`tufting_yarn_input`)

Pile yarn crosses the site boundary and is inserted through the primary backing. Record each product-specific yarn composition and construction as its own foreground exchange.

- Selected flow: Pile yarn
- Flow property / unit: Mass / kg
- Amount rule: measured lot mass issued to tufting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_records`
- Sources:

###### Primary backing fabric (`primary_backing_input`)

Primary backing supports the inserted tufts and remains in the product. Record its exact polymer or fibre composition, construction, and supplier lot.

- Selected flow: Primary backing fabric
- Flow property / unit: Mass / kg
- Amount rule: measured roll mass consumed by tufting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_records`
- Sources:

###### Electricity for tufting machine (`tufting_electricity_input`)

Electricity powers the tufting machine and directly assigned auxiliaries. Use the site meter or a documented allocation from a submetered production line.

- Selected flow: Electricity for tufting machine
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumed during applicable production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_records`
- Sources: `eu-textiles-bat-2022`

###### Compressed air for tufting machine (`tufting_compressed_air_input`)

Compressed air is recorded only where used by the tufting line. State delivery pressure and whether compressor electricity is already included to prevent double counting.

- Selected flow: Compressed air for tufting machine
- Flow property / unit: Volume / m3
- Amount rule: metered or engineering-metered compressed-air delivery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Greige tufted fabric (`greige_tufted_fabric_output`)

Greige tufted fabric is the intermediate output before any declared downstream finishing. Reconcile its measured mass with yarn, backing, and recorded losses.

- Selected flow: Greige tufted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured intermediate roll mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_records`
- Sources:

##### Waste flows

###### Pile yarn offcuts (`tufting_yarn_offcut_waste`)

Pile yarn offcuts and unrecoverable yarn ends leave the product system as a distinct waste exchange. Keep recovered yarn separate from waste sent to treatment.

- Selected flow: Pile yarn offcuts
- Flow property / unit: Mass / kg
- Amount rule: measured waste-container mass attributable to the product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_records`
- Sources:

###### Primary backing trim (`primary_backing_trim_waste`)

Primary-backing trim is recorded separately because its material identity differs from pile-yarn waste. Retain the declared recovery or treatment route.

- Selected flow: Primary backing trim
- Flow property / unit: Mass / kg
- Amount rule: measured backing-trim waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_records`
- Sources:

##### Elementary flows

###### Fibre dust from tuft insertion to air (`tufting_fibre_dust_to_air`)

Record direct fibre dust released to air after any capture system when the site identifies it as relevant. Captured dust is a separate waste exchange, not this elementary emission.

- Selected flow: Fibre dust from tuft insertion to air
- Flow property / unit: Mass / kg
- Amount rule: measured or compliance-monitoring mass emitted after abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_tufting_records`
- Sources: `eu-textiles-bat-2022`

### Process: Mechanical pile finishing (`mechanical_finishing`)

#### Inputs

##### Product flows

###### Greige tufted fabric for mechanical finishing (`mechanical_greige_fabric_input`)

This intermediate enters only the declared mechanical-finishing route. Its lot identity shall match the output of tuft insertion or the declared upstream dataset.

- Selected flow: Greige tufted fabric for mechanical finishing
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering mechanical finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources:

###### Electricity for mechanical finishing (`mechanical_electricity_input`)

Electricity powers shearing, brushing, raising, and other declared mechanical-finishing equipment. Record only the equipment used by the route.

- Selected flow: Electricity for mechanical finishing
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity for applicable mechanical-finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mechanically finished tufted fabric (`mechanically_finished_fabric_output`)

This intermediate records the mass after the declared mechanical finish and before any wet process, backing operation, or final packaging.

- Selected flow: Mechanically finished tufted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured output roll mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources:

##### Waste flows

###### Textile trim from mechanical finishing (`mechanical_textile_trim_waste`)

Textile trim removed during shearing or edge finishing is recorded by the actual product composition and treatment route.

- Selected flow: Textile trim from mechanical finishing
- Flow property / unit: Mass / kg
- Amount rule: measured trim waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources:

##### Elementary flows

###### Fibre dust from mechanical finishing to air (`mechanical_fibre_dust_to_air`)

Record direct fibre dust emitted after capture when relevant to the active finish. Captured lint or dust shall instead be recorded as its own waste exchange.

- Selected flow: Fibre dust from mechanical finishing to air
- Flow property / unit: Mass / kg
- Amount rule: measured or compliance-monitoring mass emitted after abatement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mechanical_finishing_records`
- Sources: `eu-textiles-bat-2022`

### Process: Wet pretreatment, dyeing, printing, washing, or chemical finishing (`wet_processing`)

#### Inputs

##### Product flows

###### Tufted fabric entering wet processing (`wet_process_fabric_input`)

This intermediate enters only when the declared product is treated in an on-site aqueous or chemical-finishing route. Retain lot continuity and incoming finish state.

- Selected flow: Tufted fabric entering wet processing
- Flow property / unit: Mass / kg
- Amount rule: measured mass charged to wet processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources:

###### Process water for wet processing (`wet_process_water_input`)

Process water entering pretreatment, dyeing, printing, washing, or finishing is recorded at the process boundary. Reused water shall be distinguished from newly supplied water.

- Selected flow: Process water for wet processing
- Flow property / unit: Mass / kg
- Amount rule: metered fresh-water input to applicable wet-process batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `eu-textiles-bat-2022`

###### Electricity for wet processing (`wet_process_electricity_input`)

Electricity powers the declared wet-processing line and directly assigned pumps, dosing, and drying equipment.

- Selected flow: Electricity for wet processing
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity for applicable wet-process operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `eu-textiles-bat-2022`

###### Steam for wet processing (`wet_process_steam_input`)

Purchased or centrally generated steam used for heating and drying is recorded separately from electricity and fuel. State pressure and whether boiler losses are upstream.

- Selected flow: Steam for wet processing
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy delivered to applicable wet-process operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `eu-textiles-bat-2022`

###### Sodium hydroxide (`wet_process_sodium_hydroxide_input`)

Sodium hydroxide is recorded only when the approved recipe uses it for pretreatment, pH control, or another declared function. Record supplied solution mass and concentration.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: weighed or invoiced formulation mass issued to the applicable recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `eu-textiles-bat-2022`

###### Hydrogen peroxide (`wet_process_hydrogen_peroxide_input`)

Hydrogen peroxide is recorded only when the approved route uses peroxide bleaching or oxidation. Record supplied solution mass and concentration.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: weighed or invoiced formulation mass issued to the applicable recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `eu-textiles-bat-2022`

###### Acetic acid (`wet_process_acetic_acid_input`)

Acetic acid is recorded only when used for pH adjustment or neutralisation. Record supplied solution mass and concentration.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: weighed or invoiced formulation mass issued to the applicable recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Wet-processed tufted fabric (`wet_processed_fabric_output`)

This intermediate records the product mass after all declared wet processing and drying. The recipe and finish identity shall remain linked to the lot.

- Selected flow: Wet-processed tufted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured dry or conditioned output roll mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources:

##### Waste flows

###### Wastewater from wet processing (`wet_process_wastewater_output`)

Wastewater leaving wet processing is recorded at the handoff to on-site or off-site treatment. Preserve measured volume or mass and relevant characterisation without combining it with sludge.

- Selected flow: Wastewater from wet processing
- Flow property / unit: Mass / kg
- Amount rule: metered wastewater discharged from applicable wet-process operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `eu-textiles-bat-2022`; `jrc-textiles-bref-2023`

###### Wet-processing treatment sludge (`wet_process_sludge_output`)

Treatment sludge attributable to the wet-processing route is a separate waste exchange. Record wet mass, dry-solids content, and destination.

- Selected flow: Wet-processing treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured sludge mass with recorded dry-solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_processing_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

### Process: Back coating, curing, or lamination (`back_coating_lamination`)

#### Inputs

##### Product flows

###### Tufted fabric entering back coating (`backing_fabric_input`)

This intermediate enters when the product receives a binder, coating, or secondary backing. Retain the incoming lot and finish identity.

- Selected flow: Tufted fabric entering back coating
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering coating or lamination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_records`
- Sources:

###### Styrene-butadiene latex binder (`styrene_butadiene_latex_input`)

Styrene-butadiene latex is recorded only when the approved backing formulation uses it. Record wet formulation mass, solids content, and supplier grade.

- Selected flow: Styrene-butadiene latex binder
- Flow property / unit: Mass / kg
- Amount rule: weighed or metered wet formulation mass applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_records`
- Sources: `jrc-textiles-bref-2023`

###### Acrylic latex binder (`acrylic_latex_input`)

Acrylic latex is recorded only when the approved backing formulation uses it. Keep it separate from styrene-butadiene latex and record wet formulation mass and solids content.

- Selected flow: Acrylic latex binder
- Flow property / unit: Mass / kg
- Amount rule: weighed or metered wet formulation mass applied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_records`
- Sources: `jrc-textiles-bref-2023`

###### Secondary backing fabric (`secondary_backing_fabric_input`)

Secondary backing is recorded only where laminated to the tufted fabric. Declare its exact material, construction, and supplier lot.

- Selected flow: Secondary backing fabric
- Flow property / unit: Mass / kg
- Amount rule: measured secondary-backing roll mass consumed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_records`
- Sources:

###### Electricity for back coating and lamination (`backing_electricity_input`)

Electricity powers coating, lamination, ventilation, and directly assigned auxiliaries. Allocate shared equipment with documented operating records.

- Selected flow: Electricity for back coating and lamination
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity for applicable backing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_records`
- Sources: `eu-textiles-bat-2022`

###### Natural gas for backing oven (`backing_natural_gas_input`)

Natural gas is recorded only where directly combusted for drying or curing. Do not combine it with purchased steam or other fuels.

- Selected flow: Natural gas for backing oven
- Flow property / unit: Energy / MJ
- Amount rule: metered lower-heating-value fuel energy consumed by applicable backing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Backed tufted fabric (`backed_tufted_fabric_output`)

This intermediate records the fabric after coating, curing, or lamination. Reconcile added binder and backing mass with product, coating waste, and emissions.

- Selected flow: Backed tufted fabric
- Flow property / unit: Mass / kg
- Amount rule: measured conditioned output roll mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_records`
- Sources:

##### Waste flows

###### Backing coating waste (`backing_coating_waste`)

Unapplied, off-specification, or captured coating formulation is recorded as a distinct waste with formulation identity and treatment destination.

- Selected flow: Backing coating waste
- Flow property / unit: Mass / kg
- Amount rule: measured coating waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_records`
- Sources:

###### Secondary backing trim (`secondary_backing_trim_waste`)

Secondary-backing edge trim is recorded separately from coating waste because its material and treatment route differ.

- Selected flow: Secondary backing trim
- Flow property / unit: Mass / kg
- Amount rule: measured secondary-backing trim mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_backing_records`
- Sources:

##### Elementary flows

### Process: Inspection, trimming, rolling, and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Tufted fabric entering final inspection (`packaging_fabric_input`)

The final intermediate enters inspection and shipment preparation. Its lot shall carry the complete declared route and finish state.

- Selected flow: Tufted fabric entering final inspection
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Cardboard roll core (`cardboard_core_input`)

The cardboard core is recorded when the fabric is shipped on a roll. Keep its mass outside the net-product reference amount.

- Selected flow: Cardboard roll core
- Flow property / unit: Mass / kg
- Amount rule: measured or supplier-specified core mass used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Low-density polyethylene packaging film (`ldpe_packaging_film_input`)

LDPE film is recorded only where used to protect the shipment. Declare thickness and recycled content and keep its mass outside the net-product reference amount.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured film mass issued to the product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Electricity for inspection and rolling (`packaging_electricity_input`)

Electricity powers inspection tables, rolling, cutting, and directly assigned packaging equipment.

- Selected flow: Electricity for inspection and rolling
- Flow property / unit: Energy / kWh
- Amount rule: metered or documented equipment electricity during applicable production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming tufted textile fabric, other than carpets (`final_tufted_fabric_output`)

This is the single declared factory-gate reference product. Its net fabric mass excludes roll cores, film, pallets, and other transport packaging.

- Selected flow: Tufted textile fabrics, other than carpets `e9861e6a-cfb3-4e5f-8f40-e3990c2eb7fa`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net conforming product mass equal to the declared 1 kg reference amount
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

###### Final textile trim (`final_textile_trim_waste`)

Final edge trim and rejected cut sections are recorded by actual fabric composition and destination. Rework returned to the same lot is not counted as an external waste output.

- Selected flow: Final textile trim
- Flow property / unit: Mass / kg
- Amount rule: measured final textile waste mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Discarded cardboard packaging (`cardboard_packaging_waste`)

Cardboard discarded during shipment preparation is recorded separately from textile and polymer wastes.

- Selected flow: Discarded cardboard packaging
- Flow property / unit: Mass / kg
- Amount rule: measured discarded cardboard mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Discarded low-density polyethylene packaging film (`ldpe_packaging_film_waste`)

LDPE film discarded during shipment preparation is recorded separately from cardboard and textile wastes.

- Selected flow: Discarded low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured discarded LDPE film mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg final conforming fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | shared production lines and utilities | First avoid allocation by submetering, batch records, equipment runtime, or physical subdivision of independently measurable operations. | `iso-14044-2006`; `jrc-ilcd-provisions-2010` |
| `allocation_closed_loop_rework` | in-process rework returned to the same production lot | Treat internally returned rework as an internal loop; record any extra energy or material use but do not create both a waste output and a new external input for the same mass. | `iso-14044-2006` |
| `allocation_recovered_material` | off-site sale or recovery of yarn, backing, coating, or finished-fabric residuals | Report the residual mass and destination separately. Apply substitution or another consequential credit only when required by the study method and disclose it outside the attributional foreground inventory. | `iso-14044-2006`; `jrc-ilcd-provisions-2010` |
| `allocation_remaining_shared_burdens` | burdens not separable by direct records | Use a documented physical relationship reflecting causal use; if no defensible physical relationship exists, use an economic relationship and disclose prices, period, currency, and sensitivity. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_tufting_records` | tuft_insertion | Each atomic material, utility, intermediate, waste, and relevant air-emission exchange | lot issue/return records; meters; production log; waste ticket; emission record | lot id; flow identity; quantity; unit; timestamp; machine; product output; destination; measurement basis | calibrated scales and meters, ERP issue/return records, and compliance monitoring | native recorded unit | per lot or continuous meter with lot allocation | representative reporting period covering normal operation | all tufting equipment producing the declared product | sum each atomic exchange and divide by net conforming final product mass; exclude internal transfers from site-boundary totals | calibration certificates; meter extracts; ERP records; waste tickets; route log |
| `cp_mechanical_finishing_records` | mechanical_finishing | Each atomic intermediate, electricity, waste, and relevant air-emission exchange | roll record; submeter; production log; waste ticket; emission record | lot id; active operation; flow identity; quantity; unit; runtime; output mass; destination | calibrated scales, line submeters, and production records | native recorded unit | per lot or production campaign | representative reporting period covering the active route | all mechanical-finishing equipment used by the declared product | aggregate only active operations and normalize each exchange to net conforming final product mass | calibration certificates; meter extracts; route log; waste tickets |
| `cp_wet_processing_records` | wet_processing | Each atomic material, chemical, water, energy, wastewater, sludge, and relevant emission exchange | batch recipe; dosing record; meter; laboratory result; waste ticket | lot id; recipe chemical identity; supplied concentration; mass; water; electricity; steam; wastewater; pH; temperature; pollutant result; output mass | calibrated dosing, utility and effluent meters supported by recipe and laboratory records | native recorded unit | per batch and continuous monitoring where applicable | representative reporting period covering normal and abnormal batches | all on-site wet-process and directly associated treatment units | keep each chemical and utility separate; aggregate by route and normalize to net conforming final product mass | calibration; recipe approval; SDS/TDS; meter extracts; laboratory QA/QC; treatment records |
| `cp_backing_records` | back_coating_lamination | Each atomic fabric, binder, backing, energy, waste, and relevant emission exchange | formulation batch; roll issue; meter; production log; waste ticket | lot id; binder grade; wet mass; solids; backing identity; energy; oven settings; output mass; waste destination | calibrated scales, formulation tanks, line meters, and production records | native recorded unit | per formulation batch or production lot | representative reporting period covering the active backing route | all coating, curing, and lamination equipment used by the declared product | reconcile wet formulation, solids, backing mass, output, waste, and measured emissions per net final product mass | calibration; formulation approval; SDS/TDS; meter extracts; production and waste records |
| `cp_packaging_records` | inspection_packaging | Each atomic product, packaging, electricity, and waste exchange | finished-goods ticket; packaging issue; meter; waste ticket | product lot; net fabric mass; gross shipment mass; core mass; film mass; electricity; waste mass; quality disposition | calibrated final scale, ERP packaging issue, line meter, and inspection record | native recorded unit | per finished lot | representative reporting period | all final inspection and shipment-preparation equipment | separate net product from packaging; aggregate each component and normalize to 1 kg net conforming fabric | scale calibration; finished-goods ticket; packaging specification; inspection and waste records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_atomic_exchange` | every inventory row | Sum the row-specific foreground quantity for included lots and divide by net conforming final fabric mass for the same lots. | applicable collection protocol quantity; net conforming product mass | atomic exchange per 1 kg reference product | `eu-textiles-bat-2022` |
| `convert_area_or_length_to_mass` | fabric records held in area or length | Fabric mass = measured area x lot-specific mass per area; measured area = recorded length x usable width. Do not use catalogue values when lot measurements exist. | length; usable width; measured mass per area | kg fabric | `iso-14044-2006` |
| `calculate_formulation_solids` | binder and chemical formulations | Dry solids = wet formulation mass x measured or supplier-certified solids mass fraction; preserve wet formulation mass as the purchased input. | wet mass; solids mass fraction | kg dry solids as a disclosed supporting value | `eu-textiles-bat-2022` |
| `mass_reconciliation` | each material transformation step | Compare mass inputs with product, waste, measured emissions, and inventory change over the same lot boundary; investigate rather than auto-correct an unexplained imbalance. | material inputs; outputs; wastes; measured emissions; stock change | documented mass-balance check | `eu-textiles-bat-2022`; `jrc-ilcd-provisions-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and intermediates | Maintain lot linkage to fibre composition, backing construction, pile form, mass per area, width, finish recipe, backing system, and quality disposition. | approved product specification; batch traveller; inspection record |
| `dq_direct_measurement` | materials, water, energy, wastewater, and waste | Prefer direct measurement; calculations from invoices or shared meters require the raw record, allocation basis, and uncertainty disclosure. | calibrated meter or scale record; invoice; allocation worksheet |
| `dq_temporal_coverage` | all foreground exchanges | Cover a representative reporting period and disclose shutdowns, start-ups, rework, abnormal batches, and material changes in route or recipe. | dated production and utility records; exception log |
| `dq_chemical_identity` | every process chemical | Preserve commercial name, supplier, formulation or substance identity, concentration or solids, quantity, function, and SDS/TDS link; do not merge distinct chemicals. | recipe; dosing record; SDS/TDS; purchase record |
| `dq_effluent_and_emissions` | wastewater, sludge, waste gas, and direct emissions | Match monitoring location, period, flow, and concentration or mass result to the active route and treatment boundary; identify values below detection limits without substituting zero. | laboratory QA/QC; flow meter; permit or compliance report |
| `dq_completeness` | process-level inventory | Reconcile input/output inventories and explain all exclusions, data gaps, proxies, and unresolved UUIDs. | mass balance; process flow sheet; gap register; reviewer record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require the verified Product flow UUID, Mass property UUID, Units of mass UUID, kg unit, CPC 26880 scope, and all required qualifiers. | `un-cpc-3-explanatory-notes-2025`; `jrc-ilcd-provisions-2010` |
| `validate_route_completeness` | process map and foreground boundary | Require tuft insertion and inspection/packaging; require every conditional process whose operation, recipe, meter, or product specification indicates that it occurred. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022` |
| `validate_atomic_exchanges` | process inventory | Reject a combined material, utility, chemical, packaging, waste, or emission row; every selected flow must be one concrete exchange with its own amount record and description. | `eu-textiles-bat-2022` |
| `validate_foreground_evidence` | inventory amounts | Require real foreground measurements, logs, invoices, tests, or calculations from those records; reject AI-generated values, unsupported defaults, and literature values presented as site records. | `iso-14044-2006`; `jrc-ilcd-provisions-2010` |
| `validate_mass_and_packaging_basis` | reference product and material processes | Confirm the 1 kg reference amount is net conforming fabric, packaging is excluded from reference mass, and unexplained process mass imbalance is investigated and disclosed. | `iso-14044-2006`; `jrc-ilcd-provisions-2010` |
| `validate_uuid_status` | UUID-bearing and unresolved rows | Use only state100 direct-read UUIDs whose public identity, type, property, and unit are exact; unresolved rows remain UUID-free with their row-specific reason in the manifest. | `jrc-ilcd-provisions-2010` |
| `validate_source_and_data_quality` | dataset package | Require stable source references, collection coverage, meter and laboratory quality evidence, proxy disclosure, and a completeness statement before downstream use. | `iso-14044-2006`; `eu-textiles-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Foreground or background representation of factory-gate CPC 26880 tufted textile fabric when composition, pile construction, finish, backing, geography, technology, and time match the study. |
| excluded_use | Carpets, other excluded textile constructions, made-up articles, or a tufted fabric with materially different composition, wet-process route, coating system, geography, technology, or reporting period. |
| required_metadata | canonical PCR id; reference UUID; CPC 26880; geography; reporting period; factory gate; fibre composition; pile and backing construction; mass per area; usable width; finish and coating route; net-product mass basis; allocation; upstream proxies; data quality statement |
| required_quality_disclosure | Share of amounts from direct measurement; shared-meter allocation; temporal and site coverage; mass-balance findings; abnormal operations; detection-limit handling; unresolved UUID rows; proxy datasets; review status. |
| update_trigger | Change in fibre or backing composition, pile construction, wet-process recipe, coating system, energy supply, treatment route, factory technology, geography, allocation, or representative foreground period. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 26880, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | official product-category scope and exclusions |
| `jrc-textiles-bref-2023` | official_guidance | Roth et al., Best Available Techniques Reference Document for the Textiles Industry, JRC131874, 2023. https://doi.org/10.2760/355887 | textile process decomposition, coating, fabric production, finishing, inputs, outputs, and treatment context |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. http://data.europa.eu/eli/dec_impl/2022/2508/oj | process-level material, water, energy, chemical, wastewater, waste, monitoring, and data-quality rules |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, confirmed current in 2022 with amendments. https://www.iso.org/standard/38498.html | LCI boundary, allocation hierarchy, data collection, completeness, reporting, and review principles |
| `jrc-ilcd-provisions-2010` | official_guidance | European Commission JRC, ILCD Handbook - General guide for Life Cycle Assessment - Provisions and Action Steps, JRC58190, 2010. https://doi.org/10.2788/94987 | consistent, robust, quality-assured life-cycle data and dataset documentation |
| `cimilli-et-al-tufted-structure-2023` | literature | Cimilli Duru et al., Sound Absorption of Tufted Carpets Produced from Coarse Wool of Mountain Sheep, Journal of Natural Fibers, 2023. https://doi.org/10.1080/15440478.2023.2246103 | peer-reviewed evidence that primary backing holds tufted yarn during manufacture; used only for generic tufted construction, not to include carpets in scope |
| `yuan-et-al-pad-dyeing-lca-2013` | literature | Yuan et al., Life cycle assessment of continuous pad dyeing technology for cotton fabrics, International Journal of Life Cycle Assessment 18, 659-672, 2013. https://doi.org/10.1007/s11367-012-0470-3 | peer-reviewed foreground-record precedent and wet-process decomposition; no quantitative value is transferred into this PCR |
