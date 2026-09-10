---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.live-plants-bulbs-tubers-and-roots-cuttings-and-slips-mushroom-spawn
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Live plants; bulbs, tubers and roots; cuttings and slips; mushroom spawn

## 1. Scope and Applicability

This PCR applies to living plant and fungal propagation material placed on the market for planting, transplanting,
grafting, vegetative propagation, or inoculation. It covers nursery-raised plants and rooted young plants; bulbs,
corms, rhizomes, tubers, tuberous roots, crowns, and other live roots intended for propagation; rooted or unrooted
cuttings and slips; and mushroom spawn supplied on a declared carrier or substrate.

The foreground data package ends at the producing nursery, farm, laboratory, or spawn plant gate after propagation,
growth or incubation, grading, phytosanitary or contamination screening, and gate preparation. Field and protected
production, soil and soilless routes, bare-root and containerized products, tissue-culture-derived plants, and
grain- or substrate-carried mushroom spawn are included when their route is declared.

Products intended primarily for direct human or animal consumption, harvested flowers and flower buds, seeds sold
as seed, growing media sold without live propagation material, mushroom growing substrate sold without viable spawn,
finished edible mushrooms, plant-propagation services without a product flow, and downstream crop cultivation after
the propagation material leaves the producer gate are excluded. A concrete dataset shall not combine materially
different species, propagation-material types, or production routes unless the aggregation and allocation are
reported and the reference-flow qualifiers remain representative.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.live-plants-bulbs-tubers-and-roots-cuttings-and-slips-mushroom-spawn |
| classification_refs | CPC 3.0: 01961, exact mapping context |
| covered_products | Live nursery plants; rooted young plants; bulbs, corms, rhizomes, tubers, tuberous roots, crowns and live roots for propagation; rooted and unrooted cuttings and slips; mushroom spawn on a declared carrier or substrate |
| excluded_products | Edible roots and tubers sold as food; cut flowers and buds; seeds sold as seed; un-inoculated growing media or mushroom substrate; harvested mushrooms; downstream crop cultivation; propagation services without a product flow |
| representative_product | A marketable lot of viable planting or propagation material meeting the producer's declared health, identity, and grade specification |
| production_route | Receipt or in-house establishment of source material; propagation setup; nursery growth or spawn incubation; grading and quality screening; producer-gate preparation |
| market_state | Living and viable, as sold at the producer gate; bare-root, containerized, dormant, actively growing, rooted, unrooted, or carrier-bound state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Viable planting or propagation material capable of the declared planting, transplanting, grafting, vegetative-propagation, or mushroom-inoculation function |
| How much | 1 kg net saleable material on the declared as-sold mass basis |
| How well | Meets the declared species or taxon, cultivar or strain, propagation-material type, viability or establishment criterion, phytosanitary or contamination status, size or grade, and carrier or growing-medium specification |
| How long or cycle | One completed production batch or crop cycle ending at the producer gate; production duration and any dormancy, storage, or incubation interval declared |
| reference_flow_link | The reference flow is the final saleable output of `grading_and_gate_preparation`, normalized to 1 kg net saleable material |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Planting or propagation material; exact Tiangong product-flow UUID pending correction of the CPC-matched generic flow's reference-property defect |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | scientific or accepted product name; cultivar, clone, or mushroom strain when relevant; propagation-material type; rooted or unrooted state; dormant or actively growing state; bare-root, container, or carrier form; declared net product mass boundary; count or propagule quantity per kg where meaningful; included growing-medium or carrier mass; excluded detachable container and packaging mass; moisture or as-sold condition; marketable grade; viability or establishment criterion; phytosanitary or contamination status; production route; production geography; producer-gate condition |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset
metadata, process notes, reference-flow comment, product description, or an equivalent data package field. Missing
required qualifiers make the reference flow definition incomplete for that data package. The mass reference provides
an inventory normalization basis only; it does not establish functional equivalence among species, grades, planting
units, or mushroom-spawn formulations.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Final reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg net saleable material at the producer gate. Measure on the declared as-sold basis and retain weighbridge, scale, batch, or packing records. |
| `net_product_boundary` | Product, growing medium, carrier, containers, and packaging | Mass | kg | Include living material and any carrier or growing medium intentionally delivered as an inseparable constituent of the propagation product. Exclude detachable containers, trays, sleeves, crates, and transport packaging from reference-product mass and record them as separate inputs. |
| `count_to_mass` | Plants, bulbs, roots, cuttings, slips, and other count-based records | Mass and number of items | kg and item | When operational records use counts, measure or sample saleable mass and count for the same representative lot. Report items per kg and sampling coverage; do not apply an unsupported generic count-to-mass factor. |
| `moisture_condition` | Products and growing media whose mass changes with water content | Mass | kg | State the weighing condition, irrigation or drainage interval, and whether free surface water is excluded. Do not convert to dry matter unless measured moisture data and the conversion are retained. |
| `nutrient_and_crop_protection_basis` | Fertilizers, amendments, disinfectants, and plant-protection products | Product mass and active or nutrient mass | kg | Record formulated-product mass and declared N, P, K, active ingredient, or disinfectant concentration separately. Do not substitute nutrient or active-ingredient mass for purchased-product mass. |
| `water_volume` | Irrigation, washing, sanitation, and process water | Volume | m3 | Use metered or supplier-record volume. If mass records are converted to volume, retain measured density or a documented water-density convention and the temperature basis. |
| `energy_preservation` | Electricity, fuel, steam, and heat | Energy or fuel-specific property | kWh or MJ; native fuel unit retained | Preserve metered energy and fuel quantities by carrier. Convert kWh to MJ only with 1 kWh = 3.6 MJ and do not merge electricity, heat, and fuel into one undifferentiated energy amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Source plant, bulb, root, cutting, slip, tissue culture, mother-stock derivative, fungal culture, spawn inoculum, or other propagation input as received or established for the declared route |
| starting_condition_role | Upstream propagation input or internally maintained biological source entering the foreground production system |
| product_classification_scope | Products conforming to the semantic boundary of CPC 3.0 code 01961; classification is mapping context and does not define the canonical PCR identity |
| recursive_input_rule | A purchased input that is itself in this product category is recorded once as an upstream product input. Do not recursively reconstruct its nursery or spawn-production inventory inside the receiving process. |
| upstream_dataset_requirement | Use a supplier-specific or representative upstream dataset for purchased same-category propagation material, growing media, carriers, fertilizers, energy, containers, and other material inputs; disclose any proxy, geography mismatch, or omitted upstream burden. |
| disclosure | Declare source-material origin and health status, production route, protected or open production, soil or soilless system, container and growing-medium configuration, mushroom-spawn carrier, producer-gate point, excluded downstream stages, and any same-category input treated by the recursive rule. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_foreground` | All datasets | Include propagation setup, nursery growth or spawn incubation, grading, quality screening, and producer-gate preparation performed by or for the reporting producer. Include associated water, energy, growing media or carriers, nutrient and crop-protection inputs, containers, packaging, yields, rejects, wastewater, and on-site waste handling. | `wur-floripefcr-2024`; `fao-quality-planting-material` |
| `boundary_route_conditionals` | Route-specific operations | Include sterilization, aseptic transfer, inoculation, incubation, and contamination removal for mushroom-spawn production when performed. Include protected-environment heating, cooling, lighting, ventilation, irrigation recirculation, field operations, and phytosanitary treatment only when they occur in the declared plant-production route. | `fao-mushroom-cultivation-2001`; `ippc-ispm-36-2012`; `wur-floripefcr-2024` |
| `boundary_recursive_input` | Same-category propagation inputs | Stop category recursion at the declared starting condition: represent purchased same-category material with an upstream dataset and a disclosed quantity, supplier, health or quality state, and proxy status. | `ippc-ispm-36-2012` |
| `boundary_downstream_exclusion` | Post-gate stages | Exclude outbound distribution, retail, planting at the customer site, subsequent cultivation, harvest of crops or mushrooms, use-stage care, and end-of-life unless the study goal explicitly expands the boundary and reports those stages separately. | `wur-floripefcr-2024`; `ingram-et-al-2019-landscape-plants` |
| `boundary_traceability` | Biological identity and plant health | Maintain forward and backward lot traceability, source-material identity, examinations, pest or contamination findings, corrective actions, treatments, and sanitation records for the foreground production period. | `ippc-ispm-36-2012`; `fao-mushroom-cultivation-2001` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `propagation_setup` | Propagation material and production-medium setup | required | Always required; route-specific inputs and operations are selected according to the declared plant or mushroom-spawn route | Foreground establishment of the biological source, growing medium, carrier, container, and initial batch | Established propagation batch entering nursery growth or spawn incubation |
| `growth_and_incubation` | Nursery growth or mushroom-spawn incubation | required | Always required; nursery cultivation applies to plant material and sterile incubation applies to mushroom spawn | Foreground biological growth, environmental control, irrigation, nutrition, plant protection, and batch monitoring | Viable batch transferred to grading |
| `grading_and_gate_preparation` | Grading, quality screening, and producer-gate preparation | required | Always required | Foreground separation of saleable and rejected material, final conditioning, counting or weighing, and packaging | 1 kg net saleable reference product |

### Process: Propagation material and production-medium setup (`propagation_setup`)

#### Inputs

##### Product flows

###### Source biological propagation material (`source_propagation_material`)

Purchased or internally transferred plants, bulbs, roots, cuttings, slips, cultures, inoculum, or other source
material crosses the setup boundary when it is assigned to the production batch.

- Selected flow: Route-specific propagation material; use a verified species- and state-appropriate Tiangong flow when available
- Flow property / unit: Mass / kg and, where meaningful, number of items / item
- Amount rule: Measured received or transferred quantity assigned to the batch, with internally maintained mother stock allocated only for measured renewal, maintenance, or harvested propagule burdens
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per established propagation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_material`
- Sources: `ippc-ispm-36-2012`

###### Growing medium or propagation substrate (`growing_medium`)

Growing medium is recorded when it is filled into beds, trays, pots, plugs, or other propagation units. The peat-free
Tiangong flow below is selected only when the recorded product matches that description; other formulations require
a verified formulation-appropriate flow.

- Selected flow: Growing medium, peat-free (nursery substrate) `23acdfcc-398e-4755-b93b-8a246fc992e5`, when applicable
- Flow property / unit: Mass / kg
- Amount rule: Measured batch mass by formulation, including moisture condition and any reused fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per established propagation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_medium_and_carrier`
- Sources: `wur-floripefcr-2024`; `ippc-ispm-36-2012`

###### Grain or other mushroom-spawn carrier (`spawn_carrier`)

For mushroom spawn, record the sterilized carrier receiving the fungal culture. The wheat flow is selected only for
wheat carrier; sorghum, millet, sawdust, compost, or other carriers require a verified carrier-specific flow.

- Selected flow: Wheat `12da5e7d-9b93-4404-8c7d-08f98bec6238`, when wheat is the recorded carrier
- Flow property / unit: Mass / kg
- Amount rule: Measured dry and as-loaded carrier mass assigned to the spawn batch; report carrier identity and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per inoculated spawn batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_medium_and_carrier`
- Sources: `fao-mushroom-cultivation-2001`

###### Setup and sanitation water (`setup_water`)

Water used to mix media, soak carriers, wash reusable equipment, or sanitize the setup area is included when it is
consumed within this process.

- Selected flow: water `419682fe-60fb-4b43-be89-bf2824b51104`
- Flow property / unit: Volume / m3
- Amount rule: Metered process volume or allocated supplier volume; separate water incorporated in product from cleaning discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established propagation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `wur-floripefcr-2024`; `fao-mushroom-cultivation-2001`

##### Waste flows

No waste input is required. Reused media, carriers, containers, or biological material entering from another system
shall be recorded as a product or waste input according to its actual transfer status and treatment requirement.

##### Elementary flows

Directly abstracted groundwater or surface water, if applicable, shall be represented with the correct elementary
flow in the concrete dataset and reconciled with `cp_water`; do not also record the same volume as supplied water.

#### Outputs

##### Product flows

###### Established propagation batch (`established_batch`)

The prepared, planted, rooted, grafted, or inoculated batch is an internal product output transferred to nursery
growth or spawn incubation.

- Selected flow: Internal established propagation batch; no external product-flow UUID required
- Flow property / unit: Mass / kg and batch count / batch
- Amount rule: Calculated from source material, medium or carrier, water retained, containers, and measured setup rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established propagation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_setup_yield`
- Sources: `fao-quality-planting-material`; `fao-mushroom-cultivation-2001`

##### Waste flows

###### Rejected or contaminated setup material (`setup_rejects`)

Non-conforming source material, contaminated carrier, spilled medium, and unusable setup material are recorded
before on-site treatment, composting, disinfection, or off-site transfer.

- Selected flow: Route-specific biological or mixed setup waste; select a verified waste flow in the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per established propagation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_discharge`
- Sources: `ippc-ispm-36-2012`; `fao-mushroom-cultivation-2001`

##### Elementary flows

No elementary output is prescribed. Record measured direct emissions from sterilization, disinfection, or on-site
combustion in the concrete dataset when they cross the environmental boundary.

### Process: Nursery growth or mushroom-spawn incubation (`growth_and_incubation`)

#### Inputs

##### Product flows

###### Established propagation batch input (`established_batch_input`)

The internal output from `propagation_setup` is transferred without adding an upstream burden a second time.

- Selected flow: Internal established propagation batch
- Flow property / unit: Mass / kg and batch count / batch
- Amount rule: Equal to the transferred output of `established_batch`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per growth or incubation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_setup_yield`
- Sources: `fao-quality-planting-material`; `fao-mushroom-cultivation-2001`

###### Irrigation and process water (`growth_water`)

Include irrigation, misting, fertigation, humidity control, washing, and incubation-room sanitation water. Record
recirculated water separately from make-up water and purge or discharge.

- Selected flow: water `419682fe-60fb-4b43-be89-bf2824b51104`
- Flow property / unit: Volume / m3
- Amount rule: Metered make-up water and other blue water use allocated to the declared crop or spawn batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per viable batch transferred to grading
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `wur-floripefcr-2024`; `ippc-ispm-36-2012`

###### Fertilizers and nutrient amendments (`nutrient_inputs`)

Record fertilizer and amendment products for nursery-grown plants. Mushroom-spawn nutrients already present in the
declared carrier are not duplicated here.

- Selected flow: Other mineral or chemical fertilizers containing at least two nutrients, n.e.c. `82940075-2add-45f5-8fdd-8126dcd0c759`, only when the purchased product matches
- Flow property / unit: Mass / kg product; kg N, P, and K reported separately
- Amount rule: Purchased or mixed formulated-product mass applied to the batch, reconciled with opening stock, receipts, closing stock, and losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per viable batch transferred to grading
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrients_and_treatments`
- Sources: `wur-floripefcr-2024`

###### Plant-protection, disinfectant, and sanitation products (`treatment_inputs`)

Include plant-protection products, disinfectants, and sanitation chemicals actually applied. Keep biological crop
protection and physical treatments separately identifiable.

- Selected flow: Pesticides `4b5aaf18-4297-4ff1-aaef-237d08e4b8f1`, only for a matching formulated product; otherwise select a verified treatment-specific flow
- Flow property / unit: Mass / kg formulated product and kg active ingredient
- Amount rule: Measured product use assigned to the batch by application or sanitation log
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per viable batch transferred to grading
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrients_and_treatments`
- Sources: `ippc-ispm-36-2012`; `wur-floripefcr-2024`

###### Electricity for environmental control and operations (`electricity`)

Include electricity for pumps, lighting, ventilation, cooling, environmental control, clean areas, incubation,
monitoring, and handling. Select a verified geography- and voltage-appropriate electricity flow in the concrete
dataset.

- Selected flow: Site electricity supply; Tiangong candidate `3d76981f-964a-4865-b588-0e067a2a1163` requires flow-property verification before adoption
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity or documented submeter allocation to the declared batch and production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per viable batch transferred to grading
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `wur-floripefcr-2024`; `ingram-et-al-2019-landscape-plants`

###### Heat, fuel, or steam (`thermal_energy`)

Include route-specific heating of protected production, carrier sterilization, pasteurization, hot-water treatment,
or humidity control. Preserve the actual carrier and do not add steam if its generating fuel or purchased heat is
already recorded for the same service.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`, when purchased or separately generated steam is the recorded carrier
- Flow property / unit: Mass / kg steam and associated energy / MJ; other fuels in their native units
- Amount rule: Metered thermal carrier or fuel quantity assigned to the batch; for in-house generation retain efficiency and exported-energy records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per viable batch transferred to grading
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `fao-mushroom-cultivation-2001`; `wur-floripefcr-2024`; `ingram-et-al-2019-landscape-plants`

##### Waste flows

No waste input is required unless an incoming residue is intentionally treated or reused in this process; such an
input shall retain its actual waste status and upstream treatment boundary.

##### Elementary flows

Direct land occupation, self-abstracted water, and resource inputs shall be included with verified elementary flows
when they cross the environmental boundary. Do not duplicate supplied technosphere inputs.

#### Outputs

##### Product flows

###### Viable batch transferred to grading (`viable_batch`)

The nursery-grown or incubated batch meeting the internal transfer criterion is weighed or counted before final
grading.

- Selected flow: Internal viable propagation batch
- Flow property / unit: Mass / kg and item or package count where applicable
- Amount rule: Measured transfer mass and count after growth or incubation, before final grading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per growth or incubation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_and_quality`
- Sources: `fao-quality-planting-material`; `fao-mushroom-cultivation-2001`

##### Waste flows

###### Culled plants or contaminated spawn (`growth_rejects`)

Dead, diseased, off-grade, contaminated, or otherwise non-saleable material removed during growth or incubation is
recorded before any sanitation, reprocessing, composting, or disposal.

- Selected flow: Route-specific biological waste; select a verified waste flow in the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured cull or contamination mass by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per growth or incubation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_discharge`
- Sources: `ippc-ispm-36-2012`; `fao-mushroom-cultivation-2001`

###### Wastewater or recirculation purge (`wastewater`)

Wastewater and nutrient-solution purge leaving the foreground site are recorded by destination, with measured volume
and available nutrient, disinfectant, or contaminant concentrations.

- Selected flow: Route- and treatment-specific wastewater flow selected in the concrete dataset
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge volume by destination; composition calculated only from paired volume and representative concentration measurements
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per growth or incubation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_discharge`
- Sources: `wur-floripefcr-2024`

##### Elementary flows

###### Direct nutrient and treatment emissions (`direct_emissions`)

Record measured emissions or calculate them with a declared reviewed method from foreground applications,
recirculation losses, discharges, and treatment records. Do not infer a universal emission factor from purchased
product mass.

- Selected flow: Substance- and compartment-specific elementary flows selected in the concrete dataset
- Flow property / unit: Mass / kg emitted substance
- Amount rule: Measured discharge or declared method calculation from collected foreground inputs and site conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per growth or incubation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_discharge`
- Sources: `wur-floripefcr-2024`

### Process: Grading, quality screening, and producer-gate preparation (`grading_and_gate_preparation`)

#### Inputs

##### Product flows

###### Viable batch input (`viable_batch_input`)

The viable batch from growth or incubation enters final grading without duplicating prior burdens.

- Selected flow: Internal viable propagation batch
- Flow property / unit: Mass / kg and item or package count where applicable
- Amount rule: Equal to the transferred output of `viable_batch`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per final grading batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_and_quality`
- Sources: `fao-quality-planting-material`; `fao-mushroom-cultivation-2001`

###### Containers and primary packaging (`containers_and_packaging`)

Record pots, plugs, trays, sleeves, bags, bottles, labels, ties, and other packaging delivered with the product.
Reusable transport items are amortized by documented trips and losses and remain excluded from reference-product
mass.

- Selected flow: Material- and article-specific packaging flows selected in the concrete dataset
- Flow property / unit: Mass / kg and number of items / item
- Amount rule: Measured packaging mass and count assigned to saleable output, with recycled content and reuse rate retained where claimed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per saleable grading batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `wur-floripefcr-2024`; `ingram-et-al-2019-landscape-plants`

###### Grading and sanitation utilities (`gate_utilities`)

Include electricity, water, and treatment products used for final cleaning, grading, weighing, labelling, and gate
storage when not already captured by a whole-site allocation.

- Selected flow: Utility-specific verified flows selected in the concrete dataset
- Flow property / unit: kWh, MJ, m3, or kg as applicable
- Amount rule: Metered or documented allocation to final grading and gate preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per saleable grading batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `wur-floripefcr-2024`

##### Waste flows

No waste input is required.

##### Elementary flows

No elementary input is prescribed. Include self-abstracted resources only when they cross the environmental
boundary and are not already represented as supplied product flows.

#### Outputs

##### Product flows

###### Saleable planting or propagation material (`reference_product`)

The final marketable output is weighed on the declared net as-sold basis and carries all required reference-flow
qualifiers. The exact CPC-matched Tiangong generic product-flow UUID is withheld until its reference-property defect
is corrected or a suitable replacement is published.

- Selected flow: Planting or propagation material; exact verified Tiangong product-flow UUID pending
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net saleable output, excluding detachable containers and packaging and including declared inseparable carrier or growing medium
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_yield_and_quality`
- Sources: `fao-quality-planting-material`; `fao-mushroom-cultivation-2001`

##### Waste flows

###### Final off-grade and packaging waste (`gate_rejects`)

Final off-grade product, trimming, broken containers, damaged packaging, and laboratory or phytosanitary samples not
returned to the saleable lot are recorded before treatment or transfer.

- Selected flow: Material-specific waste flows selected in the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by waste type, cause, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per final grading batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_discharge`
- Sources: `ippc-ispm-36-2012`; `wur-floripefcr-2024`

##### Elementary flows

No elementary output is prescribed. Direct emissions from on-site waste treatment or sanitation are included only
when measured or calculated with a declared reviewed method.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared production lines and operations | Subdivide processes and use meters, batch logs, material issues, or direct labour or equipment records before applying allocation. Keep nursery production, spawn production, and materially different protected, field, or laboratory routes separate where records permit. | `wur-floripefcr-2024` |
| `allocation_shared_space_time` | Shared nursery, greenhouse, field, clean-room, incubator, and gate utilities | Allocate unmetered shared burdens using the closest causal driver: occupied area-time and plant density for nursery space; measured load, chamber volume-time, or cycle time for sterilizers and incubators; throughput mass or handling time for grading. Report the driver and sensitivity. | `wur-floripefcr-2024` |
| `allocation_saleable_and_rejects` | Saleable product and non-saleable biological material | Treat rejects and contaminated material as waste when they have no intended product function or revenue. Do not assign an avoided-burden credit merely because they are composted, disinfected, reused, or sent to another treatment. | `ippc-ispm-36-2012`; `fao-mushroom-cultivation-2001` |
| `allocation_multiple_saleable_products` | Multiple saleable species, grades, propagule types, or co-products | Prefer separate batch inventories or physical allocation by measured mass, occupied area-time, batch load, or another demonstrated causal relation. If no defensible physical relation exists, economic allocation may be used only with prices, period, currency, shares, and sensitivity disclosed. | `wur-floripefcr-2024` |
| `allocation_mother_stock` | Mother plants, stock cultures, and reusable source systems | Allocate measured maintenance and renewal burdens across the propagules or spawn batches produced during the represented productive period. Do not allocate historic establishment burdens without a documented service life and output basis. | `ippc-ispm-36-2012` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_material` | `propagation_setup` | Source biological propagation material | Supplier receipt, internal transfer, and lot-identity record | supplier; source lot; taxon; cultivar, clone, or strain; material type; origin; received mass; count; health or contamination status; treatment; destination batch | Reconcile receiving, transfer, quarantine, and production records by lot | kg; item; lot | Every receipt or transfer | Full represented production period | All source-material receiving points for included sites | Sum mass and count by source lot and destination batch; retain rejected receipts separately | Supplier document, lot label, inspection or test record, and forward/backward traceability |
| `cp_medium_and_carrier` | `propagation_setup` | Growing medium, substrate, or spawn carrier | Batch formulation and issue record | material identity; supplier; formulation; dry or as-received mass; moisture; reused mass; container or bed destination; carrier treatment | Weigh ingredients and reconcile inventory issues to prepared batches | kg; % moisture | Every preparation batch | Full represented production period | All media and carrier preparation for included products | Sum by formulation and batch; do not combine peat, coir, mineral, soil, grain, or other materially different carriers without disclosure | Scale record, formulation sheet, supplier specification, and treatment log |
| `cp_water` | `propagation_setup`; `growth_and_incubation` | Water input, recirculation, and discharge | Meter, supplier invoice, tank, and irrigation-control record | source; meter opening and closing; make-up volume; recirculated volume; incorporated volume; discharge volume; allocation driver; date | Read dedicated meters where available; otherwise reconcile site balance and documented allocation | m3 | Meter interval and each batch or irrigation cycle where available | Full production cycle and at least the represented annual operating period for continuous sites | All included production zones and water sources | Sum make-up water by source; keep recirculation and discharge separate; normalize to saleable output | Calibrated meter, invoice reconciliation, irrigation controller export, and water-balance check |
| `cp_nutrients_and_treatments` | `growth_and_incubation` | Fertilizers, amendments, crop protection, disinfectants, and sanitation products | Purchase, stock, mixing, and application record | product; formulation; active ingredient; N, P, K content; opening stock; receipts; closing stock; applied mass; batch or area; date; treatment reason | Reconcile stock balance and application logs; retain product labels and concentration calculations | kg product; kg nutrient or active ingredient | Every application or sanitation event; stock reconciliation at least monthly | Full represented production period | All included production areas and clean or incubation rooms | Sum formulated product and active or nutrient mass by product and batch; report unexplained stock variance | Invoice, stock record, application log, calibration record, label or safety data sheet |
| `cp_energy` | `growth_and_incubation`; `grading_and_gate_preparation` | Electricity, fuel, heat, steam, cooling, and gate utilities | Meter, fuel receipt, boiler, CHP, chamber-cycle, and equipment log | carrier; meter opening and closing; purchased quantity; generated quantity; exports; efficiency; equipment; batch; operating time; allocation driver | Use submeters first; otherwise reconcile site energy and documented causal allocation | kWh; MJ; kg steam; native fuel unit | Meter interval and every sterilization or major thermal cycle | Full production cycle and represented annual operating period | All included buildings, fields, greenhouses, clean rooms, incubators, and gate areas | Preserve carriers; sum by process and batch; subtract exports only as separately reported outputs | Meter calibration, invoice reconciliation, fuel log, boiler or CHP record, and cycle record |
| `cp_setup_yield` | `propagation_setup` | Established propagation batch and setup rejects | Batch mass-balance record | source mass; medium or carrier mass; retained water; container mass; established batch mass; setup reject mass; unexplained difference | Weigh or count inputs, internal output, and rejects for the same batch boundary | kg; item; batch | Every setup batch or representative sampled batches with coverage declared | Full represented production period | All included setup routes | Reconcile inputs to established batch, separately delivered container mass, rejects, and measured stock change | Signed batch sheet, scale checks, and mass-balance review |
| `cp_batch_yield_and_quality` | `growth_and_incubation`; `grading_and_gate_preparation` | Viable transfer batch, saleable output, grade, and viability | Production, grading, inspection, test, and packing record | batch; taxon or strain; start date; end date; route; input count or mass; viable transfer mass; saleable net mass; count; grade; viability or establishment test; pest or contamination finding; rejected mass; weighing condition | Weigh and count the same lot; apply declared quality test and retain sample plan | kg; item; % viability; lot | Every saleable batch | Full production cycle; aggregate only comparable batches | All included production and grading sites | Sum saleable net mass and count by homogeneous product and route; calculate weighted quality metrics from tested units | Calibrated scale, packing record, inspection or laboratory result, sample plan, and traceability record |
| `cp_packaging` | `grading_and_gate_preparation` | Containers and packaging | Bill of materials, issue, return, and reuse record | article; material; mass per item; item count; recycled content; reusable trips; losses; supplier; destination batch | Weigh representative articles and reconcile issued and returned counts | kg; item; trip | Each packaging specification and saleable batch | Full represented production period | All gate preparation and packing operations | Multiply verified mass per item by net issued count; divide reusable packaging by documented completed trips and include loss replacements | Supplier specification, sample weighing, stock reconciliation, and return log |
| `cp_waste_and_discharge` | all processes | Biological rejects, contaminated material, packaging waste, wastewater, and direct emissions | Waste ticket, on-site treatment log, discharge meter, sample, and calculation record | waste type; origin batch; mass or volume; contamination reason; treatment; destination; discharge volume; concentration; sample time; calculation method | Weigh transfers; meter discharges; pair representative samples with matching volumes; document on-site treatment | kg; m3; kg substance | Every transfer or treatment batch; discharge sampling at declared frequency | Full represented production period | All included waste and discharge points | Sum gross outputs by type and destination; never net recycling or treatment credits against input quantities | Licensed transfer record, scale ticket, treatment log, laboratory result, and mass or water balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | Final saleable product | Net saleable reference mass = gross packed lot mass - detachable container and packaging mass - free water not part of the declared as-sold product. Include carrier or growing medium only when intentionally delivered as an inseparable product constituent. | `cp_batch_yield_and_quality`; `cp_packaging` | kg net saleable material | `wur-floripefcr-2024` |
| `calc_count_mass_conversion` | Count-based operating records | Items per kg = saleable item count / net saleable reference mass for the same sampled lot. Apply only to batches represented by the sampling plan. | `cp_batch_yield_and_quality` | item/kg and sampling coverage | `fao-quality-planting-material` |
| `calc_inventory_normalization` | Every inventory row | Normalized amount = batch- or period-specific gross amount assigned to the product / net saleable reference mass from the same batch or represented period. | Applicable collection protocol; `cp_batch_yield_and_quality` | amount per kg reference product |  |
| `calc_setup_balance` | `propagation_setup` | Reconcile source material + medium or carrier + retained water + separately tracked containers = established batch + setup rejects + measured stock change + disclosed residual. | `cp_source_material`; `cp_medium_and_carrier`; `cp_water`; `cp_setup_yield`; `cp_waste_and_discharge` | kg and residual percentage |  |
| `calc_saleable_yield` | Growth, incubation, and grading | Saleable yield = net saleable reference mass / mass entering the represented growth or incubation batch. Report cull and contamination rates separately by cause. | `cp_setup_yield`; `cp_batch_yield_and_quality`; `cp_waste_and_discharge` | kg/kg and % rejects | `fao-quality-planting-material`; `fao-mushroom-cultivation-2001` |
| `calc_discharge_emission` | Measured wastewater substances | Emitted mass = matched discharge volume × representative measured concentration, after unit conversion. Do not apply a sample from a different operating state without representativeness justification. | `cp_water`; `cp_waste_and_discharge` | kg substance | `wur-floripefcr-2024` |
| `calc_shared_burden` | Unmetered shared operations | Allocate the gross shared amount using the declared causal driver and shares that sum to one. Use area-time and density, chamber load or volume-time, cycle time, throughput mass, or another documented driver appropriate to the operation. | `cp_energy`; production and space records | Allocated amount and allocation share | `wur-floripefcr-2024` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Product and source material | Every saleable lot shall link backward to source material and production route and forward to the producer-gate batch. Record taxon, cultivar or strain where relevant, propagation type, and health or contamination status. | Lot register, labels, supplier documents, inspection or laboratory records, and batch linkage |
| `dq_measurement` | Mass, count, water, energy, and application data | Use calibrated or verified instruments suitable for the measured range. Retain unit conversions, sampling design, meter allocation, and reconciliation residuals. | Calibration certificate, scale check, meter export, sampling record, and calculation workbook |
| `dq_temporal` | Foreground inventory | Cover at least one complete production cycle for every represented route. Continuous operations shall additionally use a representative operating period of at least 12 months or disclose and justify shorter start-up or campaign data. | Dated production, meter, purchase, batch, and sales records |
| `dq_completeness` | Foreground boundary | Include all required processes and all material water, energy, media or carrier, nutrient, treatment, container, packaging, yield, reject, wastewater, and direct-emission rows. Quantify or explicitly justify each omission. | Process map, input-output reconciliation, omission register, and reviewer sign-off |
| `dq_route_and_geography` | Upstream and foreground data | Match species or strain, propagation route, protected or open production, substrate or carrier, technology, geography, and time as closely as available. Disclose every proxy and its expected direction of bias. | Dataset metadata, supplier geography, technology description, and proxy assessment |
| `dq_quality_and_health` | Saleable output | Apply a declared marketable-grade and viability or establishment criterion. For plants for planting retain examination, pest-management, sanitation, corrective-action, and traceability records; for spawn retain contamination screening and incubation records. | Grade specification, sample plan, test result, examination log, sanitation record, and corrective-action record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Product identity | Fail when the required qualifiers do not identify a homogeneous product, route, market state, and producer-gate point, or when food, cut flowers, seed, substrate-only, harvested mushroom, or downstream cultivation is included without separation. |  |
| `validation_reference_mass` | Reference flow | Fail when net saleable mass cannot be reconciled to gross lot mass, included carrier or growing medium, detachable containers and packaging, and free water, or when count-to-mass conversion does not use the same representative lot. | `wur-floripefcr-2024` |
| `validation_process_coverage` | Process inventory | Fail when any of `propagation_setup`, `growth_and_incubation`, or `grading_and_gate_preparation` is missing, or when route-conditional sterilization, incubation, protected-environment control, field operations, or phytosanitary treatment occurs but is omitted. | `fao-mushroom-cultivation-2001`; `ippc-ispm-36-2012`; `wur-floripefcr-2024` |
| `validation_recursive_input` | Same-category inputs | Fail when a purchased same-category propagation input is neither linked to an upstream dataset nor disclosed as a proxy, or when its burdens are recursively reconstructed and double counted. |  |
| `validation_water_energy` | Water and utilities | Fail when make-up water, recirculation, discharge, electricity, heat, steam, or fuels are silently netted, duplicated, or merged across carriers, or when shared-site allocation lacks a causal driver and shares summing to one. | `wur-floripefcr-2024` |
| `validation_material_inputs` | Media, carriers, nutrients, treatments, containers, and packaging | Fail when formulation or material identity, gross quantity, unit, and allocation to the represented batch are missing, or when nutrient or active-ingredient mass substitutes for formulated-product mass. | `wur-floripefcr-2024` |
| `validation_spawn_route` | Mushroom spawn | Fail when carrier identity and moisture, sterilization or pasteurization record, inoculation and incubation batch, contamination screening, rejects, or product strain and viability criterion are missing. | `fao-mushroom-cultivation-2001` |
| `validation_plant_health` | Plants for planting | Fail when source and lot traceability, examinations, pest or disease findings, sanitation, treatment, and corrective-action records required by the declared production or trade context are absent. | `ippc-ispm-36-2012` |
| `validation_yield_waste_balance` | Yield, rejects, wastewater, and emissions | Fail when saleable output, setup rejects, culls, contaminated material, wastewater, and other material outputs are not gross-reported and reconciled, or when treatment or recycling credits are silently netted. | `ippc-ispm-36-2012`; `fao-mushroom-cultivation-2001` |
| `validation_allocation` | Shared or multi-output systems | Fail when subdivision was feasible but not attempted, the chosen driver is unrelated to burden causation, economic allocation lacks price basis and sensitivity, or mother-stock burdens lack a documented productive period and output basis. | `wur-floripefcr-2024` |
| `validation_no_functional_equivalence` | Interpretation and comparison | Fail any claim that equal kg results establish functional equivalence among different species, grades, propagule types, count per kg, viability, establishment performance, or spawn formulations. |  |
| `validation_tiangong_reference_identity` | Reference product flow | Validation remains inconclusive until a published Tiangong product flow semantically matching the declared planting or propagation material also carries a compatible mass flow property; do not substitute the CPC-matched CTUe-referenced generic flow. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground producer-gate data package for a homogeneous live planting or propagation material and declared route |
| downstream_use | May be published as a `secondary_dataset` or `background_dataset` for crop establishment, nursery supply, vegetative propagation, grafting, or mushroom inoculation after review and UUID resolution; may support downstream `process` and `lifecyclemodel` projections |
| allowed_use | Product footprinting, supply-chain inventory, production improvement, and background modelling where geography, technology, route, product state, quality, and reference-flow qualifiers are representative |
| excluded_use | Functional-equivalence claims based only on kg; substitution among species, grades, propagule types, or spawn formulations without performance evidence; modelling edible crops, cut flowers, seeds, un-inoculated substrates, harvested mushrooms, or downstream cultivation as if covered by this producer-gate dataset |
| required_metadata | PCR id and version; product and taxonomic identity; cultivar, clone, or strain where relevant; propagation-material type; production route; site and geography; reference period; producer-gate point; net-mass definition; count per kg where meaningful; carrier, growing medium, container, and packaging configuration; viability, grade, phytosanitary or contamination status; allocation; upstream proxies; Tiangong flow identities |
| required_quality_disclosure | Primary-data share; temporal, geographic, and technological representativeness; instrument and sampling evidence; batch and mass-balance residuals; water and energy allocation; material and waste completeness; health and contamination checks; proxy limitations; unresolved Tiangong reference-product identity |
| update_trigger | Change in species or strain, propagation route, carrier or growing medium, protected or open production, site, energy or water system, treatment regime, allocation method, product grade or viability criterion, packaging, upstream source, or correction of the Tiangong reference-product flow |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ippc-ispm-36-2012` | standard | International Plant Protection Convention, *ISPM 36: Integrated measures for plants for planting*, adopted 2012, official PDF: https://www.ippc.int/static/media/files/publication/en/2016/01/ISPM_36_2012_En_2015-12-22_PostCPM10_InkAmReformatted.pdf (retrieved 2026-07-30) | Plants-for-planting boundary, production-site plan, source and lot traceability, examinations, sanitation, pest management, records, corrective actions, growing-medium and irrigation-risk disclosure |
| `wur-floripefcr-2024` | standard | Broekema et al., *Product Environmental Footprint Category Rules for Cut flowers and Potted plants: Final version*, Wageningen Economic Research Report 2024-023, DOI: https://doi.org/10.18174/549543 (retrieved 2026-07-30; used as 2024 method evidence, not as a claim of current validity after its stated 2025 validity date) | Functional-unit structure, horticultural process boundary, water, energy, fertilizer, growing-medium, packaging, waste, primary-data, allocation, and quality-rule design |
| `fao-quality-planting-material` | extension_guidance | FAO Family Farming Knowledge Platform / CIFOR-ICRAF, *Quality Planting Material through Good Nursery Management*, https://www.fao.org/family-farming/detail/en/c/1707870/ and linked full manual (retrieved 2026-07-30) | Nursery production decomposition, marketable healthy planting-material quality, readiness for transplantation, nursery management, and foreground collection design |
| `fao-mushroom-cultivation-2001` | extension_guidance | Food and Agriculture Organization of the United Nations, *Mushroom Cultivation for People with Disabilities: A Training Manual*, RAP Publication 2001/12, https://www.fao.org/4/ab497e/ab497e00.htm (retrieved 2026-07-30) | Mushroom-spawn carrier preparation, sterilization, aseptic inoculation, incubation, contamination screening, rejects, sanitation, and recordkeeping |
| `ingram-et-al-2019-landscape-plants` | literature | Ingram, Hall, and Knight, “Understanding Carbon Footprint in Production and Use of Landscape Plants,” *HortTechnology* 29(1), 2019, DOI: https://doi.org/10.21273/HORTTECH04220-18 | Corroboration of nursery and greenhouse foreground stages and the material relevance of energy, substrate, containers, fertilizer, and route-specific production conditions |
