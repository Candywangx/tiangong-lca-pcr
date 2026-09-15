---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.jute-and-other-textile-bast-fibres-except-flax-true-hemp-and-ramie-processed-but-not-sp-997c4cad
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Jute and other textile bast fibres (except flax, true hemp and ramie), processed but not spun; tow and waste of these fibres

## 1. Scope and Applicability

This PCR governs foreground data packages for jute, kenaf and other eligible textile bast fibres after preparation for spinning but before spinning, including carded or drawn fibre states, tow, and fibre waste that remains a saleable product. It applies to a declared production route from accepted raw or retted fibre at the preparation facility gate through selection, batching or softening when used, carding and drawing when used, and final baling or dispatch presentation.

The PCR excludes flax, true hemp and ramie; agricultural cultivation; harvested stems; retting and primary fibre extraction unless modelled as a separately measured upstream unit process; spun yarn; woven, nonwoven or finished textile products; and fibre material sent to waste treatment rather than sold as a CPC 26170 product. A data package shall identify whether its reference product is prepared fibre, carded fibre or sliver, drawn sliver, tow, or product-grade fibre waste.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.jute-and-other-textile-bast-fibres-except-flax-true-hemp-and-ramie-processed-but-not-sp-997c4cad |
| classification_refs | CPC 3.0: 26170 |
| covered_products | Jute, kenaf and other eligible textile bast fibres, excluding flax, true hemp and ramie, that are processed but not spun; carded or drawn fibre and sliver; tow; saleable fibre waste |
| excluded_products | Raw or retted fibre sold without preparation; flax; true hemp; ramie; spun yarn; fabrics; nonwovens; finished articles; material classified and managed only as waste |
| representative_product | Plant-gate processed unspun jute bast fibre, with the delivered product state declared |
| production_route | Selection and grading; optional batching, emulsion softening and conditioning; optional carding and drawing; final weighing, baling or bulk dispatch |
| market_state | Saleable plant-gate lot, normally baled or otherwise unitized, with grade, moisture basis, fibre species and processing state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Processed but unspun eligible textile bast fibre that is ready for the declared next textile operation or sale as tow or product-grade fibre waste |
| How much | 1 kg of delivered reference product |
| How well | Declared fibre species, product state, grade or quality class, moisture basis, oil or batching treatment, and product-versus-waste status |
| How long or cycle | One production lot at the preparation facility gate; no use duration is assigned |
| reference_flow_link | The reference amount and Tiangong product flow below represent the delivered CPC 26170 lot |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Jute and other textile bast fibres (except flax, true hemp and ramie), processed but not spun, tow and waste of these fibres `f3c8c841-9fe8-4c84-9f01-5dac913d827b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fibre species; prepared-fibre, carded-fibre, drawn-sliver, tow, or product-grade-waste state; grade or quality class; moisture content and wet- or dry-basis convention; batching oil or emulsion treatment; baled or bulk presentation; geographic and temporal representativeness; product or waste regulatory status |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record the delivered reference product by calibrated mass and normalize all inventory quantities to 1 kg or 1,000 kg of that same declared product state. |
| `moisture_basis` | fibre and fibre-derived product flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-received mass and moisture content with the wet- or dry-basis convention. Convert masses to another moisture basis only with the declared calculation rule and retain the original observation. |
| `wastewater_load` | COD, BOD5 and oil-and-grease emissions to water | Mass | kg | Report pollutant loads as mass; where concentration and effluent volume are measured, calculate load with `calc_wastewater_load` and retain both raw measurements. |
| `electricity_measurement` | electricity inputs | Energy | kWh | Use process sub-meter readings where available; otherwise document the equipment-level allocation from a facility meter and its operating-time evidence. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | foreground preparation system | Begin with an accepted lot of raw or retted eligible bast fibre at the preparation-facility gate and end with the weighed processed-but-unspun product at the same facility's dispatch gate. Include all selection, batching, softening, conditioning, carding, drawing, dust control, effluent handling and presentation operations actually used. | `unsd-cpc-ver-3-2025`; `bis-jute-certification-manual`; `ec-pef-2021-2279` |
| `upstream_retting_separation` | cultivation, retting and primary extraction | Treat cultivation, harvested-stem production, retting, fibre extraction, washing and initial drying as upstream production of the raw or retted fibre input. If these operations are integrated at the reporting site, measure them as separate unit processes and connect their output to this preparation system rather than merging untraceable quantities. | `unsd-cpc-ver-3-2025`; `fao-ijo-improved-retting-jute`; `hasan-jute-retting-2020`; `datta-jute-retting-2024` |
| `same_category_recirculation` | internally recycled or externally purchased processed fibre | Do not count internally recirculated fibre twice. Record externally purchased CPC 26170 fibre as an input with its upstream dataset and disclose the recursive product-category link. | `ec-pef-2021-2279` |
| `downstream_exclusion` | spinning and later textile operations | Exclude spinning, twisting, winding, weaving, nonwoven conversion, dyeing, finishing, use and end of life from the foreground product gate; disclose any study-specific downstream extension separately. | `unsd-cpc-ver-3-2025`; `bis-jute-certification-manual` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted raw or retted jute, kenaf or other eligible bast fibre lot at the preparation-facility gate, with supplier, species, grade, moisture basis and prior retting state declared |
| starting_condition_role | Upstream product input to the unspun-fibre preparation system |
| product_classification_scope | CPC 3.0 subclass 26170 only; raw or retted fibre is an upstream product and spun or converted textiles are downstream products |
| recursive_input_rule | Externally purchased processed-but-unspun fibre in the same category is recorded as a product input with an upstream dataset; internal returns are recorded once as internal recirculation and excluded from gross purchased-input totals |
| upstream_dataset_requirement | Supplier-specific or representative upstream dataset for raw or retted fibre, including cultivation and retting where relevant; separate integrated retting records are required when no upstream dataset exists |
| disclosure | Declare route, facility gate, fibre species, product state, grade, moisture basis, batching treatment, internal recirculation, co-product status, packaging presentation, geography, reference period and all excluded operations |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `selection_batching` | Fibre selection, batching and conditioning | required | Include selection and weighing for every lot; include water, oil, surfactant and conditioning only when used | Convert accepted raw or retted fibre into a homogeneous feed for mechanical preparation | kg conditioned fibre |
| `carding` | Carding and cleaning | conditional | Include when fibres are opened, cleaned or formed into carded sliver | Separate fibre bundles, remove extraneous matter and form a carded intermediate | kg carded sliver or fibre |
| `drawing` | Drawing and sliver equalization | conditional | Include when carded slivers are doubled and drawn before sale or spinning | Equalize and reduce sliver to the declared unspun product state | kg drawn sliver |
| `product_presentation` | Final weighing, baling and dispatch presentation | required | Include final weighing for every dataset; include electricity and each packaging component only when used | Establish the delivered reference product and dispatch-gate mass | kg reference product |

### Process: Fibre selection, batching and conditioning (`selection_batching`)

#### Inputs

##### Product flows

###### Raw or retted jute fibre feed (`raw_retted_jute_fibre_input`)

This is the accepted jute fibre lot entering preparation. Supplier mass, moisture, species and grade records determine the quantity.

- Selected flow: Jute fibre, raw or retted
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated accepted-lot mass separately from packaging and rejected foreign matter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product at the declared moisture basis
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `unsd-cpc-ver-3-2025`; `bis-jute-certification-manual`

###### Process water for batching (`process_water_input`)

Water added to batching emulsion, spray conditioning or equipment cleaning crosses the process boundary only when used.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered or tank-balance water separately from unrelated facility water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batching_materials`
- Sources: `bis-jute-certification-manual`; `ec-pef-2021-2279`

###### Jute batching oil (`jute_batching_oil_input`)

Record the single batching oil formulation as supplied; identify its trade name and composition in dataset metadata.

- Selected flow: Jute batching oil
- Flow property / unit: Mass / kg
- Amount rule: Record batch-sheet or inventory-withdrawal mass; use zero only when the route is documented as oil-free.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batching_materials`
- Sources: `bis-jute-certification-manual`

###### Non-ionic surfactant (`nonionic_surfactant_input`)

Record the non-ionic surfactant separately when it is an ingredient of the batching emulsion.

- Selected flow: Non-ionic surfactant
- Flow property / unit: Mass / kg
- Amount rule: Record batch-sheet or inventory-withdrawal mass; mark not applicable when no surfactant is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batching_materials`
- Sources: `bis-jute-certification-manual`

###### Electricity for selection and batching (`electricity_selection_batching`)

Electricity used by handling, emulsion preparation, spraying, softening and ventilation equipment is recorded as one metered electricity exchange for this process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record process sub-meter consumption or documented equipment allocation from the facility meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `bis-jute-certification-manual`; `ec-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned jute fibre (`conditioned_jute_fibre_output`)

This intermediate leaves selection and batching after actual additions and hold time have been applied.

- Selected flow: Conditioned jute fibre
- Flow property / unit: Mass / kg
- Amount rule: Record output-lot mass and moisture at transfer to carding or final presentation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `bis-jute-certification-manual`

##### Waste flows

###### Jute root cuttings (`jute_root_cuttings_output`)

Root-end pieces removed during feed preparation are recorded separately and classified as product or waste from their actual destination; this card is used when they are waste.

- Selected flow: Jute root cuttings, waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separately collected root cuttings sent to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_destination`
- Sources: `bis-jute-certification-manual`

###### Jute fibre sweepings (`jute_fibre_sweepings_output`)

Floor and opening-line fibre sweepings not returned to production are one separately weighed waste exchange.

- Selected flow: Jute fibre sweepings, waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh sweepings after subtracting container tare and record destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_destination`
- Sources: `ec-pef-2021-2279`

###### Batching wastewater (`batching_wastewater_output`)

Wastewater from emulsion losses, floor washing or equipment cleaning is recorded as one waste flow before treatment or discharge.

- Selected flow: Batching wastewater
- Flow property / unit: Volume / m3
- Amount rule: Meter or tank-balance the wastewater volume and identify treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_volume_quality`
- Sources: `bis-jute-certification-manual`; `ec-pef-2021-2279`

##### Elementary flows

###### Particulate matter to air from selection and batching (`particulate_air_selection_batching`)

Fibre dust that leaves the building or control device is recorded as an air emission, not as captured solid waste.

- Selected flow: Particulate matter, unspecified size, to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured outlet loading or a documented site-specific calculation from concentration and exhaust volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_particulate`
- Sources: `bis-jute-certification-manual`; `ec-pef-2021-2279`

###### Chemical oxygen demand to water (`cod_water_selection_batching`)

COD load is recorded separately when batching wastewater is discharged after on-site or external treatment.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured COD concentration and corresponding wastewater volume using `calc_wastewater_load`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_volume_quality`
- Sources: `ec-pef-2021-2279`

###### Biochemical oxygen demand to water (`bod5_water_selection_batching`)

BOD5 load is recorded as its own water emission when the discharge permit or receiving treatment requires it.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured BOD5 concentration and corresponding wastewater volume using `calc_wastewater_load`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_volume_quality`
- Sources: `ec-pef-2021-2279`

###### Oil and grease to water (`oil_grease_water_selection_batching`)

Oil-and-grease load is recorded separately for oil-containing batching wastewater when measured or permit-relevant.

- Selected flow: Oil and grease, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured oil-and-grease concentration and corresponding wastewater volume using `calc_wastewater_load`.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conditioned fibre output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_volume_quality`
- Sources: `bis-jute-certification-manual`; `ec-pef-2021-2279`

### Process: Carding and cleaning (`carding`)

#### Inputs

##### Product flows

###### Conditioned jute fibre feed to carding (`conditioned_jute_fibre_input_carding`)

This is the weighed conditioned fibre transferred into the carding line.

- Selected flow: Conditioned jute fibre
- Flow property / unit: Mass / kg
- Amount rule: Record transfer mass and moisture for the carding campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg carded sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `bis-jute-certification-manual`

###### Electricity for carding (`electricity_carding`)

Card motors, feeders, dust extraction and associated line drives are included in the carding electricity exchange.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record sub-meter consumption or documented equipment allocation for the carding campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg carded sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `bis-jute-certification-manual`; `ec-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Carded jute sliver (`carded_jute_sliver_output`)

Carded fibre formed as sliver is weighed as the main intermediate when it proceeds to drawing or final sale.

- Selected flow: Carded jute sliver
- Flow property / unit: Mass / kg
- Amount rule: Record output mass, moisture and carding line identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg carded sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `bis-jute-certification-manual`

###### Jute tow from carding (`jute_tow_output_carding`)

Short fibre recovered as a separately saleable tow product is recorded as one co-product exchange.

- Selected flow: Jute tow, processed but not spun
- Flow property / unit: Mass / kg
- Amount rule: Weigh saleable tow separately and retain its sales or transfer destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg carded sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_destination`
- Sources: `unsd-cpc-ver-3-2025`; `ec-pef-2021-2279`

##### Waste flows

###### Jute carding caddies (`jute_caddies_output_carding`)

Carding caddies not sold as a product and not internally returned are recorded as one waste stream.

- Selected flow: Jute carding caddies, waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh caddies separately and record treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg carded sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_destination`
- Sources: `bis-jute-certification-manual`; `ec-pef-2021-2279`

##### Elementary flows

###### Particulate matter to air from carding (`particulate_air_carding`)

Uncaptured fibre dust from the carding line is recorded separately from captured caddies.

- Selected flow: Particulate matter, unspecified size, to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured outlet loading or a documented calculation from concentration and exhaust volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg carded sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_particulate`
- Sources: `bis-jute-certification-manual`; `ec-pef-2021-2279`

### Process: Drawing and sliver equalization (`drawing`)

#### Inputs

##### Product flows

###### Carded jute sliver feed to drawing (`carded_jute_sliver_input_drawing`)

The weighed carded sliver transferred to the drawing frames is the single material input to this card.

- Selected flow: Carded jute sliver
- Flow property / unit: Mass / kg
- Amount rule: Record transfer mass and moisture for the drawing campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg drawn sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `bis-jute-certification-manual`

###### Electricity for drawing (`electricity_drawing`)

Electricity for drawing frames and their dedicated auxiliaries is recorded independently from carding electricity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record sub-meter consumption or documented equipment allocation for the drawing campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg drawn sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `bis-jute-certification-manual`; `ec-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Drawn jute sliver (`drawn_jute_sliver_output`)

The unspun drawn sliver is weighed as the main intermediate or saleable product before final presentation.

- Selected flow: Drawn jute sliver, not spun
- Flow property / unit: Mass / kg
- Amount rule: Record output mass, moisture, number of drawing passages and declared grade.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg drawn sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `bis-jute-certification-manual`; `unsd-cpc-ver-3-2025`

###### Jute tow from drawing (`jute_tow_output_drawing`)

Short fibre recovered from drawing and sold as tow is recorded separately from the main sliver.

- Selected flow: Jute tow, processed but not spun
- Flow property / unit: Mass / kg
- Amount rule: Weigh saleable tow separately and retain its transfer or sales evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg drawn sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_destination`
- Sources: `unsd-cpc-ver-3-2025`; `ec-pef-2021-2279`

##### Waste flows

###### Jute sliver waste sent to treatment (`jute_sliver_waste_output`)

Sliver waste with no product destination is recorded as waste and is not combined with saleable tow.

- Selected flow: Jute sliver waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh the waste separately and record treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg drawn sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_destination`
- Sources: `ec-pef-2021-2279`

##### Elementary flows

###### Particulate matter to air from drawing (`particulate_air_drawing`)

Uncaptured fibre dust from drawing frames is recorded independently from carding emissions.

- Selected flow: Particulate matter, unspecified size, to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured outlet loading or a documented calculation from concentration and exhaust volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg drawn sliver output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_particulate`
- Sources: `bis-jute-certification-manual`; `ec-pef-2021-2279`

### Process: Final weighing, baling and dispatch presentation (`product_presentation`)

#### Inputs

##### Product flows

###### Saleable processed jute fibre lot (`saleable_processed_jute_fibre_input`)

Use this card when conditioned or carded fibre, rather than drawn sliver or tow, enters final presentation.

- Selected flow: Processed unspun jute fibre
- Flow property / unit: Mass / kg
- Amount rule: Record transfer mass and moisture; mark not applicable for sliver or tow reference products.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `unsd-cpc-ver-3-2025`

###### Saleable drawn jute sliver lot (`saleable_drawn_jute_sliver_input`)

Use this card only when drawn sliver is the delivered reference product.

- Selected flow: Drawn jute sliver, not spun
- Flow property / unit: Mass / kg
- Amount rule: Record transfer mass and moisture; mark not applicable for other product states.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `unsd-cpc-ver-3-2025`; `bis-jute-certification-manual`

###### Saleable jute tow lot (`saleable_jute_tow_input`)

Use this card only when tow is the delivered reference product.

- Selected flow: Jute tow, processed but not spun
- Flow property / unit: Mass / kg
- Amount rule: Record transfer mass and moisture; mark not applicable for other product states.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `unsd-cpc-ver-3-2025`

###### Electricity for final weighing and baling (`electricity_baling`)

Electricity for scales, conveyors and baling equipment is recorded when those operations are powered.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record sub-meter consumption or documented equipment allocation for final presentation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity`
- Sources: `bis-jute-certification-manual`; `ec-pef-2021-2279`

###### Steel baling wire (`steel_baling_wire_input`)

Steel wire is recorded as its own packaging component when used to secure the delivered bale.

- Selected flow: Steel baling wire
- Flow property / unit: Mass / kg
- Amount rule: Record purchase issue or direct mass per bale; mark not applicable when another securing system is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-pef-2021-2279`

###### Polypropylene baling strap (`polypropylene_strap_input`)

Polypropylene strap is recorded separately from steel wire when used to secure the delivered bale.

- Selected flow: Polypropylene baling strap
- Flow property / unit: Mass / kg
- Amount rule: Record purchase issue or direct mass per bale; mark not applicable when no polypropylene strap is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `ec-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Delivered processed unspun bast-fibre product (`reference_product_output`)

This is the single delivered reference product. Its required qualifiers determine whether the lot is prepared fibre, sliver, tow or product-grade fibre waste.

- Selected flow: Jute and other textile bast fibres (except flax, true hemp and ramie), processed but not spun, tow and waste of these fibres `f3c8c841-9fe8-4c84-9f01-5dac913d827b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Set to the calibrated delivered lot mass at the declared moisture basis; normalize the dataset to 1 kg or 1,000 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `unsd-cpc-ver-3-2025`

##### Waste flows

###### Off-spec jute fibre sent to waste treatment (`off_spec_jute_fibre_output`)

Off-spec fibre without a saleable product destination is weighed as waste and kept distinct from CPC 26170 product-grade waste.

- Selected flow: Off-spec jute fibre waste
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected fibre separately and record treatment destination and reason for rejection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_destination`
- Sources: `ec-pef-2021-2279`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared processes producing main fibre, tow and saleable fibre waste | First subdivide metered unit processes or expand the system where this produces a transparent multifunctional result. Do not allocate a separately measured process. | `ec-pef-2021-2279` |
| `allocation_physical` | inseparable shared burdens | If subdivision or expansion is not feasible and output mass is a relevant physical relationship, allocate shared burdens by the dry-mass-equivalent saleable outputs measured for the same campaign. Exclude internal recirculation and waste sent to treatment from the saleable denominator. | `ec-pef-2021-2279` |
| `allocation_other_relation` | outputs for which mass does not represent the underlying function | If no defensible physical relationship exists, use another documented relationship such as campaign-average economic value; disclose prices, averaging period, currency, allocation factors and sensitivity to the physical alternative. | `ec-pef-2021-2279` |
| `waste_product_status` | tow, fibre waste, caddies and off-spec fibre | Classify each material once from evidence of destination: saleable specification and transaction evidence make it a product or co-product; a treatment obligation makes it waste. Do not model one mass as both. | `unsd-cpc-ver-3-2025`; `ec-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_identity` | all | fibre inputs, intermediates and final product | scale ticket plus lot record | gross mass; tare; net mass; moisture; species; grade; product state; lot id; timestamp | calibrated scale and representative moisture sample | kg; percent | each lot and each process transfer | at least one representative production year or disclosed campaign | all included lines and shifts | sum net mass by lot and process state; retain moisture basis before normalization | calibration certificate; sampling record; reconciliation to inventory and sales |
| `cp_batching_materials` | `selection_batching` | process water, batching oil and surfactant | meter, batch sheet and inventory issue | material identity; supplier; batch; opening and closing stock; additions; returned material; water meter | direct meter or mass balance for each atomic material | m3 or kg | each batch, aggregated monthly | same reference period as product | every batching line | sum each material separately; no combined emulsion placeholder | meter calibration; batch sheets; purchase and stock reconciliation |
| `cp_process_electricity` | all | electricity | sub-meter or equipment allocation record | meter start/end; equipment id; run time; power; production lot | prefer sub-meter; otherwise engineering allocation reconciled to facility bill | kWh | each shift or campaign | same reference period as product | all included equipment and auxiliaries | aggregate by process and normalize with actual process output | meter calibration or bill reconciliation; allocation worksheet |
| `cp_waste_mass_destination` | all | each product co-output and waste stream | container scale ticket and destination record | stream identity; gross; tare; net; product/waste status; internal return; consignee; treatment | separate containers and calibrated weighing | kg | each removal or lot | same reference period as product | all included lines | sum each named stream; subtract internal returns once | scale calibration; sales invoice, transfer note or waste manifest |
| `cp_wastewater_volume_quality` | `selection_batching` | wastewater volume, COD, BOD5, oil and grease | flow meter and laboratory result | discharge volume; sampling time; concentration; treatment stage; destination | continuous volume measurement and representative composite sample where feasible | m3; mg/L | volume continuous or per batch; quality at permit or representative frequency | same reference period as product | each discharge point attributable to included processes | pair concentration with matching volume and calculate each pollutant separately | laboratory method, chain of custody, meter calibration, treatment records |
| `cp_air_particulate` | `selection_batching`; `carding`; `drawing` | particulate matter to air | stack or outlet test and ventilation operating record | concentration; gas volume; duration; control-device state; process throughput | direct measurement or documented site-specific calculation | mg/m3; m3; h; kg | permit frequency and after material control change | representative operating conditions in reference period | every material dust outlet | calculate outlet mass separately by process; captured dust remains a waste flow | accredited test report; instrument calibration; control-device log |
| `cp_packaging_components` | `product_presentation` | steel wire and polypropylene strap | purchase issue or direct bale bill of materials | component identity; unit mass; pieces per bale; return or reuse | direct weighing or supplier specification checked by sample | kg | each packaging design and monthly reconciliation | current packaging design during reference period | all delivered presentations | calculate each component separately per delivered mass | supplier specification; sample weights; purchase reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all inventory exchanges | normalized amount = period exchange amount / period delivered reference-product mass × selected reference amount | exchange amount; delivered reference-product mass; selected basis of 1 or 1,000 kg | normalized exchange amount | `ec-pef-2021-2279` |
| `calc_moisture_conversion` | fibre masses when a common moisture basis is required | dry mass = as-received mass × (1 − wet-basis moisture fraction); any conversion back to a declared moisture basis shall state the convention and factor | as-received mass; measured moisture; basis convention | fibre mass on declared basis | `ec-pef-2021-2279` |
| `calc_wastewater_load` | each COD, BOD5 or oil-and-grease row | pollutant load (kg) = concentration (mg/L) × wastewater volume (m3) / 1,000 | matched concentration and discharge volume | pollutant mass to water | `ec-pef-2021-2279` |
| `calc_mass_balance` | each process and reporting period | input fibre mass plus separately measured additions = product outputs plus product co-outputs plus wastes plus measured stock change plus documented moisture-related mass change; investigate rather than force-close unexplained difference | input, output, waste, stock and moisture records | reconciliation and unexplained mass difference | `ec-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all fibre flows | Retain species, product state, grade, moisture basis, oil treatment, lot linkage and product-versus-waste status; the reference product must remain within CPC 26170. | lot specification, Tiangong UUID, scale ticket and transaction or destination evidence; `unsd-cpc-ver-3-2025` |
| `dq_temporal` | all foreground records | Use records from one coherent reference period, normally at least 12 consecutive months; disclose shorter campaigns, shutdowns and atypical production. | dated meters, ledgers, laboratory reports and production calendar; `ec-pef-2021-2279` |
| `dq_completeness` | each included process | Reconcile product, co-product, waste, water, electricity, materials, wastewater indicators and direct air emissions; disclose every excluded or unavailable atomic exchange. | process reconciliation, missing-data register and completeness review; `ec-pef-2021-2279` |
| `dq_representativeness` | technology, geography and product mix | Match the recorded lines, fibre mix and operating conditions to the declared dataset; disclose proxy equipment allocation or upstream datasets. | line list, production shares, supplier records and data-quality assessment; `ec-pef-2021-2279` |
| `dq_source_traceability` | calculations and secondary data | Preserve raw values, units, conversions, allocation factors, source versions and reviewer-visible calculation worksheets. | audit trail and calculation files; `ec-pef-2021-2279` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Fail validation if the UUID, Product-flow type, Mass property, kg unit, CPC 26170 scope or required product-state qualifiers are missing or inconsistent. | `unsd-cpc-ver-3-2025` |
| `validate_scope` | foreground boundary | Fail validation if cultivation, retting or primary extraction is merged without a separate upstream unit process, or if spinning and downstream conversion are included without explicit extension disclosure. | `unsd-cpc-ver-3-2025`; `fao-ijo-improved-retting-jute`; `bis-jute-certification-manual` |
| `validate_atomic_inventory` | process inventory | Fail validation if electricity, water, batching oil, surfactant, packaging components, each waste, wastewater volume, COD, BOD5, oil and grease, or particulate emission is combined with another exchange or replaced by a selector label. | `ec-pef-2021-2279` |
| `validate_mass_balance` | each included process | Fail validation when input, output, waste, stock and moisture reconciliation is absent; report unexplained differences rather than silently allocating them. | `ec-pef-2021-2279` |
| `validate_allocation` | shared burdens and co-products | Fail validation when co-product status, denominator, factors or allocation hierarchy are undocumented, or when the same fibre mass is counted as both product and waste. | `ec-pef-2021-2279`; `unsd-cpc-ver-3-2025` |
| `validate_data_quality` | published foreground data package | Fail validation when temporal, technological or geographical representativeness, meter and laboratory evidence, proxy use or missing-data disclosures are absent. | `ec-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-category dataset for processed-but-unspun jute or other eligible bast fibre at the preparation-facility gate |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` for spinning, textile conversion, packaging, composite and other downstream models |
| allowed_use | Product systems whose required fibre species, product state, grade, moisture basis, treatment, geography, technology and reference period match the dataset |
| excluded_use | Raw or retted fibre production alone; flax, true hemp or ramie; spun yarn; downstream fabric production; datasets that cannot distinguish saleable tow or fibre waste from waste sent to treatment |
| required_metadata | PCR id and version; reference flow UUID; fibre species; product state; grade; moisture basis; batching treatment; process route; product and waste destinations; allocation method; packaging presentation; facility geography; reference period; upstream dataset references |
| required_quality_disclosure | Process coverage; atomic-flow completeness; meter and laboratory coverage; mass-balance difference; allocation factors; internal recirculation; missing data; proxy methods; data-quality assessment; all unresolved flow identities or absent ranges |
| update_trigger | Change in fibre species or product-state mix, preparation technology, batching formulation, dust or effluent control, packaging system, allocation basis, upstream fibre source, geography, or reference period sufficient to change representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-ver-3-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification Version 3.0 Explanatory Notes* (2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-20) | CPC 26170 scope, exclusions, raw/retted upstream distinction and unspun product identity |
| `fao-ijo-improved-retting-jute` | official_guidance | FAO and International Jute Organisation, *Improved Retting and Extraction of Jute*, GCP/RAS/122/IJO, https://www.fao.org/fishery/docs/CDrom/aquaculture/a0845t/volume2/docrep/field/381307.htm (retrieved 2026-08-20) | Upstream retting, extraction, washing and drying process boundary; route disclosure |
| `bis-jute-certification-manual` | official_guidance | Bureau of Indian Standards, *Product Certification Manual for Jute Bags for Packing 50 kg Sugar according to IS 15138:2010*, https://bis.gov.in/qazwsx/oth/DDGE22IS15138a.pdf (retrieved 2026-08-20) | Selection, softening and emulsion preparation, carding, drawing, dust control, electricity, water and process-record structure before spinning |
| `ec-pef-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-20) | Functional unit, reference flow, foreground data collection, completeness, data quality, allocation hierarchy and validation |
| `hasan-jute-retting-2020` | literature | Hasan et al., *Pectinolytic Bacterial Consortia Reduce Jute Retting Period and Improve Fibre Quality*, Scientific Reports 10, 5175 (2020), https://doi.org/10.1038/s41598-020-61898-z | Original full-text confirmation of retting, extraction, washing and sun-drying sequence and route variability; no quantitative range adopted |
| `datta-jute-retting-2024` | literature | Datta et al., *The sequential microbial breakdown of pectin is the principal incident during water retting of jute (Corchorus spp.) bast fibres*, BMC Plant Biology 24, 295 (2024), https://doi.org/10.1186/s12870-024-04970-4 | Original full-text confirmation of retting endpoint significance and separation of fibres from non-fibrous tissues; no quantitative range adopted |
| `chakrabortty-jute-retting-2023` | literature | Chakrabortty and Begum, *An approach to improve the existing ribbon retting of jute fibre using concrete tank and natural catalyst*, Heliyon 9, e19488 (2023), https://doi.org/10.1016/j.heliyon.2023.e19488 | Original full-text confirmation that retting routes affect water demand and BOD/COD; retained only as upstream evidence, with no case value converted into a range |
