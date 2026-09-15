---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.photographic-plates-and-film-and-instant-print-film-sensitized-unexposed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Photographic plates and film and instant print film, sensitized, unexposed

## 1. Scope and Applicability

This PCR applies to cradle-to-gate production of saleable, sensitized but unexposed photographic plates, flat film, roll film, and instant-print film units. It covers products for still, cine, X-ray, graphic-arts, micrographic, scientific, and comparable photographic uses when the delivered product retains a photosensitive layer and has not been imagewise exposed.

The core process model covers silver-halide products made by emulsion preparation, support preparation, coating and drying, converting, instant-film assembly when applicable, and light-tight packaging. A producer using another photosensitive chemistry shall report every formulation-specific material and emission as an additional atomic exchange and identify the chemistry in the required qualifiers.

Exclusions are exposed or developed photographic material, separately sold developer or fixer, cameras and processing equipment, downstream exposure and development, use, and end-of-life. Sensitized photographic paper is outside this semantic boundary unless it is an inseparable image-receiving or structural component of a delivered instant-film unit.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.photographic-plates-and-film-and-instant-print-film-sensitized-unexposed |
| classification_refs | CPC 3.0: 48341, exact classification context |
| covered_products | Sensitized unexposed photographic plates; flat photographic film; photographic film in rolls; conventional and instant-print film units |
| excluded_products | Exposed or developed film and plates; separately sold photographic chemicals; sensitized paper not integral to an instant-film unit; cameras and processing equipment |
| representative_product | Saleable unexposed silver-halide photographic film supplied in a declared format and light-tight market pack |
| production_route | Silver-halide emulsion preparation, support treatment, multilayer coating and drying, converting, conditional instant-film assembly, and light-tight packaging |
| market_state | Sensitized, unexposed, quality-conforming and packaged for shipment; format, support, imaging chemistry and intended use declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide an unexposed photosensitive medium capable of recording a latent photographic image under the declared exposure and processing system |
| How much | 1 kg net mass of saleable sensitized product at the factory gate |
| How well | Meets the producer's declared format, dimensions, sensitivity/speed, spectral response, image type, shelf-life and defect acceptance specification |
| How long or cycle | One delivered product lot at release; no use-stage service life is assigned |
| reference_flow_link | The reference flow is the conforming packaged product output `pack_reference_product`, normalized to 1 kg net product; secondary and tertiary packaging are excluded from reference mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Unexposed photosensitive substrate rolls and sheets `e568740b-8b0c-4359-8268-366cb8b6d2a6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form (plate, flat film, roll film, or instant film); support material; silver-halide or other imaging chemistry; monochrome or colour; intended application; dimensions or roll width and length; perforation and spool/cassette state; photosensitivity or speed designation; spectral response; coating-side configuration; instant-film type and unit count when applicable; net product mass convention; primary light-tight packaging included in product; production geography; reference year; shelf-life and storage condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to 1 kg net saleable product. Include inseparable instant-film sheets, processing pod, frame and cassette in net product mass; exclude secondary and tertiary distribution packaging. |
| `area_or_length_to_mass` | plate, film-base, coating and converting records | Mass | kg | When operating records use m2, m or item count, convert with lot-specific measured basis mass or with measured thickness and density. Retain the source measurement, conversion formula and lot identifier; a generic conversion factor is not allowed. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered energy. Convert kWh to MJ by multiplying by 3.6 and disclose grid geography, voltage and whether transformer or on-site distribution losses are included. |
| `gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report gas volume at the supplier or meter reference temperature and pressure, and disclose those reference conditions; do not mix standard and operating volumes. |
| `silver_mass_balance` | silver-bearing inputs, product, wastes and recovery outputs | Mass | kg | Retain a campaign-level silver mass balance based on measured silver-bearing feed, coated product, recovered material, liquid waste and solid waste. Do not infer silver content from total wastewater mass alone. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased photosensitive chemicals, support materials, utilities, packaging components and any externally produced intermediate arrive at the reporting-site gate with upstream datasets attached |
| starting_condition_role | Cradle-to-gate foreground manufacturing start; upstream production of purchased inputs remains represented by linked background datasets |
| product_classification_scope | Sensitized, unexposed photographic plates, film and instant-print film within the reviewed semantic boundary; classification codes are mapping context only |
| recursive_input_rule | A purchased sensitized master roll or other input already within this product category is recorded once as an upstream same-category product input. The reporting unit then models only subsequent converting or assembly and discloses the partial manufacturing boundary; it must not recreate emulsion and coating burdens. |
| upstream_dataset_requirement | Every purchased chemical, support, energy carrier, packaging component and same-category intermediate requires a geographically and technologically representative upstream dataset or an explicit data gap |
| disclosure | Declare included sites and processes, support and chemistry routes, instant-film construction, internal transfers, recovered silver, wastewater treatment boundary, solvent recovery, energy supply, packaging convention, cut-offs and exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | all datasets | Include emulsion preparation, support preparation or receipt, coating and drying, converting, conditional instant-film assembly, quality losses, light-tight packaging, on-site waste handling and direct emissions through the factory gate. | `us-patent-4564591`; `us-patent-6814329`; `us-patent-5356762` |
| `boundary_route_conditionals` | route-specific processes | Include each support or instant-film component row only when that material physically enters the declared product route; record demonstrably absent atomic exchanges as not applicable rather than zero measured use. | `us-patent-4564591`; `us-patent-5356762` |
| `boundary_recursive_input` | purchased sensitized master material | Apply the recursive input rule and disclose the upstream-to-foreground hand-off to prevent duplicated coating burdens. |  |
| `boundary_additional_formulation_flows` | product-specific formulations | Add each non-listed sensitizer, colour coupler, hardener, surfactant, stabilizer, subbing chemical, solvent, cleaning chemical and direct emission as its own atomic exchange when used; never aggregate them as additives or chemicals. | `us-patent-4564591`; `us-patent-3849166` |
| `boundary_exclusions` | downstream life cycle | Exclude imagewise exposure, photographic development, customer use and end-of-life from the foreground production inventory; model them only in a separately declared downstream system. | `un-cpc-3-0-structure-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `emulsion_preparation` | Silver-halide emulsion preparation | required | All silver-halide routes; non-silver routes replace it with a fully disclosed chemistry-specific preparation process | Foreground photosensitive-emulsion production | Inputs and utilities normalized to emulsion used for 1 kg reference product |
| `support_coating_drying` | Support treatment, coating and drying | required | All products; support and solvent cards are conditional by actual formulation and support | Foreground sensitization and coated-master production | Inputs, wastes and emissions normalized to coated material used for 1 kg reference product |
| `converting_packaging` | Converting, instant-film assembly and light-tight packaging | required | All products; instant-film component cards apply only to instant-film units | Foreground slitting, perforating, loading, assembly, inspection and packaging | 1 kg net conforming saleable reference product |

### Process: Silver-halide emulsion preparation (`emulsion_preparation`)

#### Inputs

##### Product flows

###### Silver nitrate reagent (`em_silver_nitrate`)

Silver nitrate entering precipitation of the photosensitive silver-halide phase is recorded as a separate input.

- Selected flow: Silver nitrate
- Flow property / unit: Mass / kg
- Amount rule: Measured net silver nitrate issued to conforming and rejected emulsion batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emulsion_materials`
- Sources: `us-patent-4564591`

###### Potassium bromide reagent (`em_potassium_bromide`)

Potassium bromide used as the bromide source is recorded separately; another halide salt is added as its own row when used.

- Selected flow: Potassium bromide
- Flow property / unit: Mass / kg
- Amount rule: Measured net potassium bromide issued to emulsion batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emulsion_materials`
- Sources: `us-patent-4564591`

###### Photographic gelatin binder (`em_gelatin`)

Gelatin incorporated as the hydrophilic colloid binder is recorded by supplied dry-equivalent mass.

- Selected flow: Photographic gelatin
- Flow property / unit: Mass / kg
- Amount rule: Measured gelatin dry-equivalent mass issued to emulsion batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emulsion_materials`
- Sources: `us-patent-4564591`

###### Process water for emulsion preparation (`em_process_water`)

Water crossing the process boundary for solution preparation, controlled washing and vessel cleaning is recorded by mass.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-record water supplied to emulsion preparation, excluding recirculated water until make-up crosses the boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emulsion_utilities`
- Sources:

###### Electricity for emulsion preparation (`em_electricity`)

Purchased electrical energy used by reactors, mixing, temperature control, filtration and local ventilation is recorded separately.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or allocated meter total for emulsion preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emulsion_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Support treatment, coating and drying (`support_coating_drying`)

#### Inputs

##### Product flows

###### PET photographic film base (`coat_pet_film_base`)

Biaxially oriented PET film base is recorded when the declared product uses a polyester support.

- Selected flow: Polyethylene terephthalate photographic film base
- Flow property / unit: Mass / kg
- Amount rule: Measured PET film-base mass entering support treatment and coating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `us-patent-3849166`; `us-patent-4564591`

###### Cellulose triacetate photographic film base (`coat_cellulose_triacetate_base`)

Cellulose triacetate film base is recorded only for products using that flexible support.

- Selected flow: Cellulose triacetate photographic film base
- Flow property / unit: Mass / kg
- Amount rule: Measured cellulose triacetate film-base mass entering coating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `us-patent-4564591`

###### Glass support plate (`coat_glass_plate`)

Unworked sheet glass is recorded when a rigid photographic plate is produced.

- Selected flow: plate glass `491a7940-d102-4981-a2b8-81bf183987df`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of accepted glass plates entering cleaning and coating
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `us-patent-4564591`

###### Methanol for subbing or coating formulation (`coat_methanol`)

Methanol is recorded only when purchased methanol enters the declared subbing or coating formulation.

- Selected flow: Methanol (market average) `adbc8430-7937-4ade-b7a5-cb1797dda661`
- Flow property / unit: Mass / kg
- Amount rule: Measured gross methanol input less documented recovered methanol returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `us-patent-3849166`; `us-patent-4564591`

###### Acetone for subbing or coating formulation (`coat_acetone`)

Acetone is recorded only when purchased acetone enters the declared subbing or coating formulation.

- Selected flow: Acetone `d5d65ffc-92f2-4d88-b6e7-e050445978f5`
- Flow property / unit: Mass / kg
- Amount rule: Measured gross acetone input less documented recovered acetone returned to the same process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `us-patent-3849166`; `us-patent-4564591`

###### Process water for coating (`coat_process_water`)

Water supplied for aqueous coating formulations, line cleaning and controlled humidification is recorded by mass.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered make-up and cleaning water entering support treatment, coating and drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_utilities`
- Sources: `us-patent-3849166`

###### Electricity for coating and drying (`coat_electricity`)

Electrical energy for web handling, coating, refrigeration, clean-room air handling, drying auxiliaries and controls is recorded separately.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or allocated meter total for support treatment, coating and drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_utilities`
- Sources: `us-patent-3849166`; `us-patent-4564591`

###### Natural gas for direct thermal drying (`coat_natural_gas`)

Natural gas is recorded when combusted on site for drying or thermal air conditioning.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gaseous natural gas supplied to coating-line dryers and thermal air systems
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_utilities`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Silver-bearing coating wastewater (`coat_silver_wastewater`)

Wastewater containing silver-bearing emulsion or coating residues is recorded before external treatment or at the declared on-site treatment hand-off.

- Selected flow: Silver-bearing photographic coating wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured wastewater mass with silver concentration and treatment destination retained as quality evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_wastewater`
- Sources: `us-epa-silver-risk-1980`

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`coat_fossil_co2`)

Direct fossil carbon dioxide from declared on-site natural-gas combustion is reported; upstream electricity emissions are excluded from this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate from metered natural gas, supplier carbon content and measured or documented oxidation fraction using `calc_combustion_co2`, or use a verified stack mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

### Process: Converting, instant-film assembly and light-tight packaging (`converting_packaging`)

#### Inputs

##### Product flows

###### Instant-film image-receiving sheet (`pack_image_receiving_sheet`)

The image-receiving sheet is recorded only for instant-film designs that physically incorporate a separate receiving element.

- Selected flow: Instant-film image-receiving sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured image-receiving-sheet mass issued to instant-film assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `us-patent-5356762`

###### Instant-film processing composition (`pack_instant_processing_composition`)

The sealed processing composition is recorded only for self-developing instant-film units that contain a rupturable pod.

- Selected flow: Instant-film processing composition
- Flow property / unit: Mass / kg
- Amount rule: Measured filled processing-composition mass accepted into film units, including documented fill loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `us-patent-5356762`

###### Plastic instant-film cassette (`pack_plastic_cassette`)

The moulded light-tight cassette is recorded when it remains part of the delivered instant-film pack.

- Selected flow: Plastic instant-film cassette
- Flow property / unit: Mass / kg
- Amount rule: Measured cassette mass assembled into released instant-film packs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `us-patent-5356762`

###### Paper box for secondary packaging (`pack_paper_box`)

The paper or paperboard sales carton crossing the factory gate is recorded separately from the net reference-product mass.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass / kg
- Amount rule: Measured paper-box mass consumed for shipped saleable product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Sources: `us-patent-6814329`

###### Electricity for converting and packaging (`pack_electricity`)

Electricity for slitting, perforating, loading, assembly, inspection and packaging is recorded separately.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or allocated meter total for converting and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_converting_utilities`
- Sources: `us-patent-6814329`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming unexposed photosensitive product (`pack_reference_product`)

Only released, sensitized and unexposed product meeting the declared specification is counted as reference output.

- Selected flow: Unexposed photosensitive substrate rolls and sheets `e568740b-8b0c-4359-8268-366cb8b6d2a6`
- Flow property / unit: Mass / kg
- Amount rule: Net mass of conforming product released from the lot, normalized to exactly 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Sensitized photographic-film edge trim (`pack_film_trim_waste`)

Coated edge trim and perforation scrap removed during converting are recorded as a distinct silver-bearing solid waste.

- Selected flow: Sensitized photographic-film edge trim waste
- Flow property / unit: Mass / kg
- Amount rule: Measured coated trim and perforation scrap sent to recovery, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`
- Sources: `us-patent-6814329`; `us-epa-silver-risk-1980`

###### Off-spec sensitized photographic material (`pack_offspec_photographic_material`)

Rejected coated plate, film or assembled instant-film material is recorded separately from clean uncoated support scrap.

- Selected flow: Off-spec sensitized photographic material waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass rejected after sensitization and sent to silver recovery, treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`
- Sources: `us-epa-silver-risk-1980`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared foreground processes | Prefer subdivision and direct metering by emulsion family, coating line, support type, format and packaging campaign before applying allocation. |  |
| `allocation_mass_or_area` | inseparable shared coating campaigns | If subdivision is not possible, allocate support, coating materials, utilities and losses by measured coated area adjusted by product-specific wet or dry coating mass; use net product mass only when area and coating-load data are unavailable, and disclose the hierarchy used. |  |
| `allocation_packaging` | converting and packaging | Assign format-specific packaging components directly by bill of materials and accepted unit count; do not spread instant-film components to conventional film or plate products. | `us-patent-5356762`; `us-patent-6814329` |
| `allocation_silver_recovery` | recovered silver-bearing outputs | Treat recovered silver or silver-bearing concentrate according to the study's declared allocation or substitution method. Report recovered mass, quality, destination and any credited burden separately; do not omit recovery because it has revenue. | `us-epa-silver-risk-1980` |
| `allocation_rework` | internal rework | Return internally reworked emulsion or support to the consuming process without creating a co-product; count only make-up inputs, unrecovered loss and additional energy once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_emulsion_materials` | `emulsion_preparation` | silver nitrate, potassium bromide and gelatin inputs | batch issue and return records | material id; grade; lot; gross issue; return; dry solids; batch id; accepted emulsion | Reconcile warehouse issue/return with signed batch recipes | kg | each batch | representative 12-month period or full shorter campaign | all reporting-site emulsion lines | Sum net consumed mass and normalize through conforming product output | calibrated scales; supplier certificate; recipe revision; batch reconciliation |
| `cp_emulsion_utilities` | `emulsion_preparation` | process water and electricity | meters and batch utility logs | meter start/end; batch id; make-up water; recirculation; electricity; allocation driver | Use dedicated meters; otherwise reconcile shared meters to operating hours and measured load | kg water; MJ electricity | batch and monthly | same period as product output | all reporting-site emulsion utilities | Sum make-up water and electricity and normalize to conforming output | meter calibration; utility invoice reconciliation; downtime log |
| `cp_coating_materials` | `support_coating_drying` | support and solvent inputs | roll/plate issue, tank charge and recovery records | support material; lot; input mass; unused return; solvent charge; recovered solvent; coating campaign | Reconcile material issues, tank records and recovery-system returns | kg | each campaign | same period as product output | all coating lines in scope | Sum net external input; exclude verified closed-loop return to the same process | weighbridge or scale checks; bill of materials; solvent inventory balance |
| `cp_coating_utilities` | `support_coating_drying` | water, electricity and natural gas | utility meters and line logs | meter readings; reference conditions; line id; operating hours; product campaign | Read dedicated meters or allocate reconciled shared meter totals using measured line load and operating time | kg water; MJ electricity; m3 gas | shift, campaign and monthly | same period as product output | coating, drying and associated clean-room utilities | Sum by campaign and normalize to conforming output | meter calibration; invoices; reference-condition record; allocation calculation |
| `cp_coating_wastewater` | `support_coating_drying` | silver-bearing wastewater | flow meter, tank transfer and laboratory records | wastewater mass or volume; density; silver concentration; stream origin; treatment destination; recovered silver | Measure each segregated stream at the treatment hand-off and pair with a representative laboratory result | kg; mg Ag/L | transfer or daily composite | same period as product output | all in-scope silver-bearing wastewater streams | Convert volume with measured density where needed; sum mass and retain silver load separately | meter calibration; chain of custody; laboratory method; treatment manifest |
| `cp_combustion_emissions` | `support_coating_drying` | direct fossil carbon dioxide | fuel meter and supplier composition records | gas volume; temperature; pressure; carbon content; oxidation fraction; stack result if available | Reconcile metered fuel with supplier certificate and verified combustion or stack records | m3 gas; kg CO2 | monthly and campaign allocation | same period as product output | all on-site gas combustion assigned to coating/drying | Apply `calc_combustion_co2` and normalize to conforming output | meter calibration; supplier certificate; calculation workbook or stack report |
| `cp_packaging_materials` | `converting_packaging` | instant-film sheets, composition, cassette and paper box | bill of materials, issue and count records | component id; material; unit mass; issued count; accepted count; rejects; returned mass | Reconcile component issues to released unit count and measured component mass | kg; item | each packaging or assembly campaign | same period as product output | all converting and assembly lines in scope | Sum net consumed component mass and normalize to net product output | approved bill of materials; scale checks; issue/return reconciliation |
| `cp_converting_utilities` | `converting_packaging` | electricity | submeter and machine log | meter readings; machine id; operating hours; campaign; accepted output | Read line submeter or allocate reconciled meter totals by measured machine load and operating time | MJ | shift and monthly | same period as product output | slitting, perforating, loading, assembly, inspection and packaging | Sum and normalize to conforming output | meter calibration; invoice reconciliation; machine log |
| `cp_product_output` | `converting_packaging` | conforming reference product | release, count and net-mass records | lot; format; accepted quantity; sampled unit mass; net product mass; packaging convention; release status | Determine lot net mass from calibrated bulk weighing or accepted count times representative measured unit mass | kg | each released lot | same period as all inputs | all released products in declared dataset | Sum released net mass; normalize all exchanges by this amount | release certificate; scale calibration; sampling plan; mass reconciliation |
| `cp_solid_wastes` | `converting_packaging` | sensitized trim and off-spec material | waste container and recovery records | waste type; sensitized state; mass; silver-bearing status; destination; recovery certificate | Segregate coated trim and off-spec material from clean support and weigh at transfer | kg | each container or transfer | same period as product output | all in-scope converting and quality-reject points | Sum each atomic waste stream separately and normalize to conforming output | scale calibration; waste manifest; recovery receipt; segregation audit |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all inventory rows | normalized amount = period exchange amount / period net conforming reference-product mass | matched-period exchange record; `cp_product_output` net mass | exchange per 1 kg reference product |  |
| `calc_area_length_mass` | area-, length- or count-based support and product records | mass = measured area × lot-specific basis mass; or mass = measured volume × lot-specific density; count conversion uses sampled mean unit mass under the approved sampling plan | area or length and width; thickness; density; count; sampled unit mass | kg input or output |  |
| `calc_combustion_co2` | `coat_fossil_co2` | fossil CO2 mass = metered gas quantity × supplier fossil-carbon content × oxidation fraction × 44/12, with units reconciled and reference conditions documented | natural-gas record; carbon content; oxidation fraction | kg fossil CO2 |  |
| `calc_silver_balance` | campaign silver accounting | silver input = silver in product + recovered silver + silver in liquid waste + silver in solid waste + quantified inventory change; report unresolved imbalance without forcing closure | reagent certificates; product assay or coating load; waste assays; recovery records; inventory change | campaign silver balance and closure percentage | `us-epa-silver-risk-1980` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and inputs | Match product form, support, chemistry, coating configuration, format and market state to the declared dataset; retain supplier grade and lot for chemistry-sensitive inputs. | release specification; bill of materials; supplier certificates; lot records |
| `dq_temporal` | all foreground records | Use a continuous representative 12-month period where production is continuous, or the complete campaign when production is shorter; identify atypical shutdown or start-up periods. | dated meters, batch logs, production calendar and deviation record |
| `dq_completeness` | material, energy, waste and emission rows | Reconcile purchases/issues, returns, inventory change, recovered materials, product and wastes; explain every omitted expected row and every balance gap. | mass and energy reconciliations; cut-off register; waste manifests |
| `dq_silver` | silver-bearing system | Maintain traceability from silver-bearing reagent through coated product, wastewater, solid waste and recovery; report concentration methods and detection limits. | laboratory reports; recovery receipts; silver mass balance |
| `dq_allocation` | shared processes | Document subdivision attempts, allocation hierarchy, drivers and sensitivity for materially shared burdens. | meter map; campaign schedule; allocation workbook; sensitivity result |
| `dq_geography_technology` | upstream datasets | Match supplier geography, electricity grid, support technology, solvent recovery, drying technology and treatment route, or disclose and assess each mismatch. | supplier location; dataset metadata; technology description; representativeness assessment |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Confirm that the output is sensitized, unexposed and quality-conforming; reference amount is exactly 1 kg net product and required qualifiers are complete. | `un-cpc-3-0-structure-2025` |
| `validation_atomic_inventory` | process inventory | Confirm every selected flow is one atomic material, energy, waste or emission exchange; formulation-specific additions must be separate rows with route conditions. |  |
| `validation_process_alignment` | process map and cards | Confirm every required process has a matching inventory section and every conditional row agrees with the declared support, chemistry and instant-film construction. | `us-patent-4564591`; `us-patent-5356762`; `us-patent-6814329` |
| `validation_mass_energy` | foreground calculations | Recalculate reference normalization, count/area conversions, utility conversions and the product/waste mass reconciliation from retained raw records. |  |
| `validation_silver_balance` | silver-bearing routes | Check campaign silver balance inputs, product, recovered material, wastewater, solid waste and inventory change; flag an unexplained imbalance rather than inserting an estimated loss flow. | `us-epa-silver-risk-1980` |
| `validation_uuid_scope` | Tiangong references | Confirm each UUID remains public state 100 and matches name, flow type, classification, property, unit group and product state; unresolved rows remain explicitly UUID-empty. |  |
| `validation_no_external_ranges` | all important flows | Confirm that no external empirical range is claimed until at least two independent, original-text-verified and boundary-compatible sources support a synthesis; use foreground records for dataset values. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` representing cradle-to-gate production of the declared sensitized unexposed photographic product |
| downstream_use | Product-system modelling for photographic media, cameras, medical or industrial imaging, graphic arts, supply-chain screening and procurement where the declared product and geography match |
| allowed_use | Use after checking product form, support, imaging chemistry, format, instant-film construction, geography, production year, energy system, solvent recovery and treatment route |
| excluded_use | Direct representation of exposed or developed material, photo processing, non-photographic coated media, separately sold photographic chemicals, use-stage image formation or end-of-life |
| required_metadata | PCR id and version; product qualifiers; reference mass convention; geography and year; included sites and processes; support and chemistry route; instant-film components; allocation; upstream datasets; cut-offs; uncertainty; UUID gaps |
| required_quality_disclosure | Temporal coverage; meter and mass-balance quality; silver balance; allocation sensitivity; completeness; technology and geography mismatches; recovery and treatment boundaries; unresolved UUID and range-evidence needs |
| update_trigger | Change in support or photosensitive chemistry, coating architecture, solvent or silver recovery, drying energy, instant-film construction, packaging, site, grid, treatment route, allocation driver, product mass convention, or a material correction to foreground records |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official product classification identity and unexposed sensitized market state |
| `cn-nbs-photographic-film-classification-2010` | official_guidance | National Bureau of Statistics of China, Statistical Product Classification Catalogue, product 26180102, https://www.stats.gov.cn/sj/tjbz/tjypflml/2010/26/18/01/26180102.html (original text verified 2026-09-07) | Professional Chinese terminology for unexposed photosensitive plates and flat film, photographic film and instant photographic film |
| `us-patent-4564591` | literature | U.S. Patent US4564591A, Silver halide color photographic material, https://patents.google.com/patent/US4564591A/en (original text verified 2026-09-07) | Support materials, silver-halide multilayer coating, formulation additives, coating and drying process decomposition |
| `us-patent-3849166` | literature | U.S. Patent US3849166A, Method for providing subbing layer of photographic film, https://patents.google.com/patent/US3849166A/en (original text verified 2026-09-07) | PET support treatment, aqueous process steps, methanol and acetone inputs, coating and drying |
| `us-patent-6814329` | literature | U.S. Patent US6814329B2, Production managing method for photo film production, https://patents.google.com/patent/US6814329B2/en (original text verified 2026-09-07) | Slitting, perforating, loading, inspection and light-tight packaging process decomposition |
| `us-patent-5356762` | literature | U.S. Patent US5356762A, Film-sheet assemblage for peel-apart self-developing film, https://patents.google.com/patent/US5356762A/en (original text verified 2026-09-07) | Instant-film photosensitive and image-receiving sheets, processing-liquid pod and light-tight cassette boundary |
| `us-epa-silver-risk-1980` | official_guidance | U.S. Environmental Protection Agency, Exposure and Risk Assessment for Silver, 1980, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9101LCQG.TXT (original text verified 2026-09-07) | Silver-bearing manufacturing wastewater, contaminated emulsion and scrap trim, recovery and silver mass-balance requirements |
