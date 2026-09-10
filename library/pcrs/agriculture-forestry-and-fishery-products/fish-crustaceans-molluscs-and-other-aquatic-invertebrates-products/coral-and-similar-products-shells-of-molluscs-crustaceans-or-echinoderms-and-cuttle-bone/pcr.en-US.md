---
pcr_id: pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone

## 1. Scope and Applicability

This PCR governs foreground data packages for coral and similar materials, shells of molluscs, crustaceans or echinoderms, and cuttle-bone that remain unworked or only simply prepared, are not cut to shape, or are marketed as fragments, powder, or waste within the declared product category. It covers source qualification, directly controlled collection or delivery, receipt, cleaning or desalting, removal of residual organic matter, drying, sorting, crushing or milling, grading, packaging, storage, and gate release when those operations apply.

The user shall choose a route-specific process set rather than assume that every product undergoes every preparation step. Products transformed into calcium oxide, precipitated calcium carbonate, chitin, chitosan, hydroxyapatite, formulated construction products, jewellery, carved or cut-to-shape articles, food, feed, or other chemically or functionally distinct goods are outside this PCR. The dataset shall identify the source material family and shall not generalize mollusc-shell evidence to coral, crustacean shells, echinoderm shells, or cuttle-bone without disclosure.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone |
| classification_refs | CPC 3.0 `04911` (accepted exact mapping); HS 2022 `050800` (scope aid only) |
| covered_products | Unworked or simply prepared coral and similar materials; shells of molluscs, crustaceans, or echinoderms; cuttle-bone; and their unshaped fragments, powder, or waste marketed within the declared category. |
| excluded_products | Live aquatic organisms; edible products; cut-to-shape, carved, polished, jewellery, or other finished articles; calcined calcium oxide; precipitated or chemically purified calcium carbonate; chitin, chitosan, hydroxyapatite, and other chemically transformed derivatives; formulated construction, agricultural, food, feed, cosmetic, or medical products. |
| representative_product | Cleaned, dried, unshaped shell, cuttle-bone, or coral-like material, or its mechanically crushed and graded fraction, at the preparation facility gate. |
| production_route | Source qualification; conditional collection and delivery; receipt; route-specific cleaning, desalting, organic-residue removal, and drying; conditional size reduction and grading; conditional packaging and storage; gate release. |
| market_state | Bulk or packaged whole unshaped material, fragments, grit, powder, or declared waste fraction, with material family, source route, moisture basis, grade or particle-size class, and legal or provenance status stated. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of declared coral-like material, mollusc shell, crustacean shell, echinoderm shell, or cuttle-bone product within this PCR at the preparation facility gate. |
| How much | 1 kg of declared product mass. |
| How well | The product meets the declared material family, source route, preparation state, moisture basis, grade or particle-size class, and applicable legal and provenance requirements. |
| How long or cycle | One identified production batch or a declared reporting period normalized to the reference amount. |
| reference_flow_link | `reference_product_flow` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone `9d3c928f-f381-4d92-8452-944adaf37906` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | material family and taxon where known; source route; source geography; collection, salvage, aquaculture, or processing-residue status; preparation state; moisture basis; grade or particle-size class; legal and provenance status; packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent data-package fields. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-bearing product or waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the declared product and all comparable material outputs to 1 kg of reference product while retaining unnormalized reporting-period totals. |
| `moisture_basis` | Received, prepared, and final material | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether each mass is as-received, air-dry, oven-dry, or measured at another moisture basis. Convert between bases only from measured moisture or solids content. |
| `water_record` | Cleaning, desalting, and washing water | Mass or volume | kg or m3 | Retain the metered or invoiced unit. If mass and volume are converted, record the measured or documented density and conversion. |
| `energy_and_fuel_record` | Collection, handling, drying, milling, grading, packaging, and storage energy | Energy, mass, or volume | kWh, MJ, kg, or L | Preserve the original meter, invoice, or fuel-log unit and the carrier identity before normalization. Do not use a generic conversion factor when a supplier-specific value is available. |
| `transport_service` | Directly controlled collection and delivery | Mass-distance | tkm | Calculate transport service from actual transported mass and route distance and retain vehicle or vessel mode, load basis, and empty-return treatment. |
| `particle_size_and_grade` | Mechanically crushed, milled, or graded product | Declared size or grade | mm, µm, or declared class | Particle size or grade is a required qualifier and does not replace the mass reference property. |
| `transformation_scope` | Thermally or chemically treated material | Declared composition and process conditions | As measured | If treatment changes the material into CaO, precipitated calcium carbonate, chitin, chitosan, hydroxyapatite, or another chemically distinct product, this PCR no longer supplies the reference-flow rule. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | Source qualification and collection | Declare whether material is directly collected, salvaged, supplied from aquaculture, recovered from seafood processing, purchased as a by-product, or received as waste. Include directly controlled collection, habitat interaction, and delivery activities. | `unsd-cpc3-hs-scope`; `cites-current-coral-controls` |
| `system_boundary_rule_2` | Purchased or supplied source material | Link the source material to a representative upstream dataset or disclose source geography, supplier process, prior product or waste status, and any upstream burden-allocation rule. A waste or by-product label alone does not establish zero upstream burden. | `eu-pef-method-2021` |
| `system_boundary_rule_3` | Foreground preparation | Include applicable receipt, cleaning, desalting, organic-residue removal, drying, sorting, crushing or milling, grading, packaging, storage, internal handling, wastewater management, solid-residue management, and direct releases under operator control. | `eu-pef-method-2021`; `shell-waste-management-2023`; `bivalve-shell-valorization-2022` |
| `system_boundary_rule_4` | Foreground outputs | Identify every co-product, by-product, waste stream, wastewater stream, and direct elementary flow. Any exclusion shall be justified and its likely significance disclosed. | `eu-pef-method-2021` |
| `system_boundary_rule_5` | Facility-gate dataset | Exclude downstream distribution, product use, incorporation into another product, and end-of-life from this gate reference flow unless the declared dataset scope explicitly extends beyond the gate. | `eu-pef-method-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | `qualified_source_material_at_collection_or_receipt` |
| starting_condition_role | The first foreground state is source material whose material family, source route, geography, prior product or waste status, moisture basis, and legal or provenance evidence have been checked at collection or receipt. |
| product_classification_scope | CPC 3.0 `04911`, constrained to unworked or simply prepared, unshaped materials and the declared powder or waste fractions. |
| recursive_input_rule | Record an input already within this product category as a same-category product input with its own source route, mass, moisture basis, grade, upstream dataset, and allocation status; do not hide it as generic mineral or waste input. |
| upstream_dataset_requirement | Use a supplier- or route-representative dataset for purchased or supplied material. If unavailable, disclose the data gap and prior burden treatment; do not silently assign zero burden. |
| disclosure | Report included and excluded unit operations; collection and transport control; material taxon or family; source geography; applicable permit or CITES status for coral; prior waste or by-product status; moisture and grade; cleaning, drying, and milling route; packaging; wastewater and residue fate; direct releases; allocation method; and background-data substitutions. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `source_qualification_and_receipt` | Source qualification and receipt | `required` | Always include. | Establish product identity, route, provenance, incoming mass, moisture, accepted mass, and rejected material. | Accepted source material entering preparation or gate handling. |
| `controlled_collection_and_delivery` | Controlled collection and delivery | `conditional` | Include when collection, salvage, vessel activity, loading, or delivery is controlled by the reporting operator. | Capture route distance, transport mode, fuel or energy, and directly controlled collection interactions. | Transported accepted source material and transport service. |
| `cleaning_drying_and_sorting` | Cleaning, drying, and sorting | `conditional` | Include when washing, desalting, organic-residue removal, sterilization, drying, sorting, or similar simple preparation occurs. | Produce clean prepared material and record water, energy, agents, residues, wastewater, and direct releases. | Prepared material output on its declared moisture basis. |
| `size_reduction_and_grading` | Size reduction and grading | `conditional` | Include when crushing, milling, screening, sieving, or grading occurs. | Produce the declared fragment, grit, powder, or grade and record energy, off-spec material, and dust. | On-spec graded material output. |
| `packaging_storage_and_gate_release` | Packaging, storage, and gate release | `required` | Always include gate release; include packaging and storage rows only when they occur. | Establish final reference product mass, packaging state, storage conditions, and gate output. | 1 kg declared product at facility gate. |

### Process: Source qualification and receipt (`source_qualification_and_receipt`)

#### Inputs

##### Product flows

###### Source material received (`source_material_received`)

This row records the incoming coral-like material, shell, or cuttle-bone before acceptance and preparation, including its prior product, by-product, or waste status.

- Selected flow: Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone `9d3c928f-f381-4d92-8452-944adaf37906`
- Flow property / unit: Mass / kg
- Amount rule: Measure incoming gross and net material mass by batch or reporting period and record moisture or solids basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Incoming mass and accepted mass normalized to 1 kg final reference product.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_source_receipt`

##### Waste flows

No waste input is prescribed. If the facility accepts a legally classified waste, retain that status in the source record while modelling the material as the same-category input selected for this PCR.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Accepted source material (`accepted_source_material`)

Accepted material is the quantity transferred to simple preparation or directly to final gate handling after receipt rejects are removed.

- Selected flow: Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone `9d3c928f-f381-4d92-8452-944adaf37906`
- Flow property / unit: Mass / kg
- Amount rule: Calculate accepted mass from measured incoming mass less measured receipt rejects on the same moisture basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted mass per 1 kg final reference product.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_source_receipt`

##### Waste flows

###### Receipt rejects (`receipt_rejects`)

Record non-target biological material, sediment, foreign matter, contaminated material, and nonconforming source material removed at receipt, with its actual fate.

- Selected flow: Select the route-specific Tiangong waste flow matching material and treatment destination.
- Flow property / unit: Mass / kg
- Amount rule: Measure rejected mass by batch and record reuse, recovery, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Rejected mass per 1 kg final reference product.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_wastewater`

##### Elementary flows

No default elementary output is prescribed for receipt. Add measured direct releases when present.

### Process: Controlled collection and delivery (`controlled_collection_and_delivery`)

#### Inputs

##### Product flows

###### Material collected or delivered (`material_collected_or_delivered`)

Use the qualified source-material record for material moved by a collection or delivery activity controlled by the reporting operator.

- Selected flow: Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone `9d3c928f-f381-4d92-8452-944adaf37906`
- Flow property / unit: Mass / kg
- Amount rule: Use measured loaded and delivered mass, with moisture basis and losses stated.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Transported mass associated with 1 kg final reference product.
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection_transport`

###### Collection or delivery diesel (`collection_or_delivery_diesel`)

Use this row only when diesel is the actual foreground-controlled carrier; select another Tiangong flow for another carrier.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Record fuel from bunkering, tank, invoice, or equipment logs and link it to the collection or delivery route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Fuel used for the transport service associated with 1 kg final reference product.
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_collection_transport`

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

###### Direct collection interactions or releases (`collection_direct_releases`)

Instantiate this row only for measured or permit-reported resource extraction, habitat interaction, or direct emissions caused by controlled collection.

- Selected flow: Select the applicable Tiangong elementary flow for the measured resource or emission.
- Flow property / unit: Use the selected Tiangong flow property and unit.
- Amount rule: Use direct monitoring, permit records, or an approved calculation from collected activity data.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Direct interaction or release per 1 kg final reference product.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_releases`

#### Outputs

##### Product flows

###### Delivered source material (`delivered_source_material`)

This output carries the measured delivered mass into receipt or preparation without changing its material identity.

- Selected flow: Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone `9d3c928f-f381-4d92-8452-944adaf37906`
- Flow property / unit: Mass / kg
- Amount rule: Calculate delivered mass from loaded mass less measured transport losses on the same moisture basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Delivered mass per 1 kg final reference product.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collection_transport`

##### Waste flows

###### Collection or delivery losses (`collection_or_delivery_losses`)

Record lost, spilled, damaged, or rejected material only when it occurs and assign its actual fate.

- Selected flow: Select the route-specific Tiangong waste flow matching material and destination.
- Flow property / unit: Mass / kg
- Amount rule: Measure or reconcile the difference between loaded and delivered mass, excluding measured moisture change.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: Loss mass per 1 kg final reference product.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_collection_transport`

##### Elementary flows

Direct releases are recorded in `collection_direct_releases`; do not duplicate emissions already represented by a linked fuel-combustion or transport process.

### Process: Cleaning, drying, and sorting (`cleaning_drying_and_sorting`)

#### Inputs

##### Product flows

###### Accepted material for preparation (`material_for_preparation`)

This input is accepted material entering the applicable cleaning, desalting, organic-residue removal, drying, or sorting steps.

- Selected flow: Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone `9d3c928f-f381-4d92-8452-944adaf37906`
- Flow property / unit: Mass / kg
- Amount rule: Use measured accepted input mass and moisture or solids content.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Preparation input per 1 kg prepared material output and per 1 kg final reference product.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_material`

###### Process water (`preparation_water`)

Record freshwater, seawater, reused water, or other water separately when used for cleaning or desalting.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg; retain measured m3 when volume is the primary record
- Amount rule: Use meter, tank, invoice, or batch records and distinguish fresh, seawater, and reused water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Water supplied per tonne of shell feed entering the applicable cleaning step and per 1 kg final reference product.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water`
- Sources: `shell-waste-management-2023`
- Range: Reported salt-reduction shell-cleaning water use
  - Range role: Typical range (`typical_range`)
  - Lower: 0.2
  - Upper: 0.8
  - Unit: m3/t shell feed
  - Basis: Freshwater used to reduce salt content of shell material; screening evidence only, not a conformance limit
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `shell-waste-management-2023`

###### Preparation energy (`preparation_energy`)

Record the actual electricity, thermal energy, or fuel used for cleaning equipment, heating, sterilization, drying, ventilation, and sorting.

- Selected flow: Select the site- and carrier-specific Tiangong electricity, heat, or fuel flow.
- Flow property / unit: Energy, mass, or volume / kWh, MJ, kg, or L as recorded
- Amount rule: Use submeter, equipment meter, fuel, invoice, or allocated utility records; retain carrier and geography.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Preparation energy per 1 kg prepared material output.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_energy_and_agents`
- Sources: `shell-waste-management-2023`

###### Cleaning or processing agents (`cleaning_agents`)

Record detergents, enzymes, disinfectants, solvents, acids, alkalis, or other agents only when actually used; treatment that creates a chemically distinct output is outside this PCR.

- Selected flow: Select each actual Tiangong product flow for the agent used.
- Flow property / unit: Mass or volume / kg or L as recorded
- Amount rule: Use purchase, dosing, or batch formulation records and retain concentration and recovery information.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Agent use per 1 kg prepared material output.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_energy_and_agents`
- Sources: `shell-waste-management-2023`

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Cleaned and dried material (`cleaned_and_dried_material`)

This output is the simply prepared material after applicable cleaning, desalting, drying, and sorting, before optional size reduction.

- Selected flow: Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone `9d3c928f-f381-4d92-8452-944adaf37906`
- Flow property / unit: Mass / kg
- Amount rule: Measure output mass and moisture or solids basis by batch; calculate normalized dry mass where needed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Prepared output mass per 1 kg final reference product.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_material`

##### Waste flows

###### Cleaning and sorting residues (`cleaning_and_sorting_residues`)

Record removed organic matter, sediment, salts, broken non-product fractions, and sorting rejects separately when their treatment differs.

- Selected flow: Select the route-specific Tiangong waste flow for each residue and treatment destination.
- Flow property / unit: Mass / kg
- Amount rule: Measure residue mass on a stated moisture basis and record recovery, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Residue mass per 1 kg prepared material output and per 1 kg final reference product.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_wastewater`

###### Cleaning wastewater (`cleaning_wastewater`)

Record wastewater or spent brine at the point it leaves the foreground process for onsite treatment, offsite treatment, reuse, or discharge.

- Selected flow: Select the Tiangong waste flow matching wastewater composition and actual treatment or discharge destination.
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Use discharge meters, tank records, or a documented water balance and retain salinity, suspended solids, organic load, and treatment destination when measured or required.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Wastewater per 1 kg prepared material output and per 1 kg final reference product.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_wastewater`

##### Elementary flows

###### Direct preparation releases (`preparation_direct_releases`)

Instantiate separate rows for measured dust, volatile releases, combustion emissions, or direct water emissions that are not already represented by a waste-treatment or energy-provider process.

- Selected flow: Select each applicable Tiangong elementary flow and receiving compartment.
- Flow property / unit: Use the selected Tiangong flow property and unit.
- Amount rule: Use direct monitoring or an approved calculation from collected activity data and a cited factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Direct release per 1 kg prepared material output and per 1 kg final reference product.
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_releases`

### Process: Size reduction and grading (`size_reduction_and_grading`)

#### Inputs

##### Product flows

###### Prepared material for size reduction (`prepared_material_for_size_reduction`)

Use this input when cleaned material is crushed, milled, screened, sieved, or graded into the declared product form.

- Selected flow: Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone `9d3c928f-f381-4d92-8452-944adaf37906`
- Flow property / unit: Mass / kg
- Amount rule: Measure prepared input mass and moisture basis for each grading campaign.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Prepared input per 1 kg on-spec graded output.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_and_grading`

###### Size-reduction energy (`size_reduction_energy`)

Record actual electricity or fuel used by crushers, mills, screens, dust control, and material handling.

- Selected flow: Select the site- and carrier-specific Tiangong energy flow.
- Flow property / unit: Energy, mass, or volume / kWh, MJ, kg, or L as recorded
- Amount rule: Use equipment or utility meters, production logs, or a documented allocation of shared energy.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Energy per 1 kg on-spec graded output.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_and_grading`
- Sources: `bivalve-shell-valorization-2022`

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### On-spec whole, fragment, grit, or powder product (`on_spec_graded_product`)

This output carries the final mechanical grade while retaining the product-category identity and mass reference property.

- Selected flow: Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone `9d3c928f-f381-4d92-8452-944adaf37906`
- Flow property / unit: Mass / kg
- Amount rule: Measure on-spec output by declared grade and moisture basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: On-spec output carried to the final reference flow.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_and_grading`

##### Waste flows

###### Off-spec grading fraction (`off_spec_grading_fraction`)

Record off-spec fines, oversize fractions, foreign matter, and dust collected by control equipment according to their reuse or treatment destination.

- Selected flow: Use the same-category product flow if internally recycled or sold as a declared grade; otherwise select the route-specific Tiangong waste flow.
- Flow property / unit: Mass / kg
- Amount rule: Measure each fraction and identify internal recycle, co-product sale, recovery, or waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Off-spec fraction per 1 kg on-spec graded output and per 1 kg final reference product.
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_and_grading`

##### Elementary flows

###### Uncaptured particulate release (`uncaptured_particulate_release`)

Record an elementary-flow output only when a measured or approved calculated release crosses the environmental boundary; collected dust remains a waste or recoverable product flow.

- Selected flow: Select the Tiangong particulate elementary flow matching size fraction and receiving compartment.
- Flow property / unit: Mass / kg
- Amount rule: Use stack, workplace-to-environment, or control-efficiency records with a cited calculation method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Uncaptured particulate per 1 kg on-spec graded output.
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_releases`

### Process: Packaging, storage, and gate release (`packaging_storage_and_gate_release`)

#### Inputs

##### Product flows

###### Product entering gate handling (`product_entering_gate_handling`)

This input is the declared whole, fragment, grit, powder, or waste-grade material entering final weighing and gate handling.

- Selected flow: Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone `9d3c928f-f381-4d92-8452-944adaf37906`
- Flow property / unit: Mass / kg
- Amount rule: Use final-batch or lot mass on the declared moisture basis before packaging tare is added.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Product mass carried to 1 kg final reference product.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_gate_release`

###### Packaging materials (`packaging_materials`)

Record bags, liners, drums, cartons, pallets, films, labels, and reusable containers when supplied with or consumed for the reference product.

- Selected flow: Select each actual Tiangong packaging material flow.
- Flow property / unit: Mass or count / kg or item as recorded
- Amount rule: Use purchasing, bill-of-materials, or packaging-line records and state reusable-container cycles when applied.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Packaging supplied or consumed per 1 kg final reference product.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_gate_release`

###### Packaging and storage energy (`packaging_and_storage_energy`)

Record actual gate-handling, ventilation, humidity control, storage, and packaging energy when these operations occur.

- Selected flow: Select the site- and carrier-specific Tiangong energy flow.
- Flow property / unit: Energy, mass, or volume / kWh, MJ, kg, or L as recorded
- Amount rule: Use meters, equipment logs, or a documented shared-utility allocation over the declared storage duration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Energy per 1 kg final reference product.
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_gate_release`

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Declared product at facility gate (`reference_product_flow`)

This is the reference output after final quality, moisture, grade, provenance, packaging, and mass checks.

- Selected flow: Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone `9d3c928f-f381-4d92-8452-944adaf37906`
- Flow property / unit: Mass / kg
- Amount rule: Set the quantitative reference to 1 kg and retain measured batch or reporting-period output as the normalization denominator.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg of declared gate product.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging and gate-handling waste (`packaging_and_gate_handling_waste`)

Record damaged packaging, labels, film, pallet losses, sweepings, and rejected finished product by actual treatment destination.

- Selected flow: Select each route-specific Tiangong waste flow.
- Flow property / unit: Mass / kg
- Amount rule: Use waste tickets, counts, or material-balance records for the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Waste mass per 1 kg final reference product.
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_wastewater`

##### Elementary flows

Add only measured or approved calculated direct releases not already represented in upstream energy, packaging, or waste-treatment datasets.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | Separable unit operations and batches | Avoid allocation by subdividing processes, meters, batches, grades, and material families wherever records permit. | `eu-pef-method-2021` |
| `allocation_rule_2` | Incoming processing residues, by-products, or wastes | Preserve the supplier's documented product or waste status and upstream burden rule. Do not assign zero upstream burden solely because the incoming material was called waste. | `eu-pef-method-2021`; `oyster-shell-lca-2012` |
| `allocation_rule_3` | Shared preparation producing multiple saleable grades | When subdivision is not possible, use a causal physical relationship such as measured dry mass, equipment time, or metered energy if that relationship explains resource use. State the basis and formula. | `eu-pef-method-2021` |
| `allocation_rule_4` | Multi-functional process without a defensible physical relationship | Use another documented relationship, including economic allocation where appropriate, only after subdivision and physical allocation are shown unsuitable; disclose prices, period, geography, and a sensitivity result. | `eu-pef-method-2021` |
| `allocation_rule_5` | Recovered residues and off-spec fractions | Treat a fraction as a co-product only when it has a separate reference flow and documented destination or market. Otherwise retain it as waste requiring recovery, treatment, or disposal modelling. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_source_receipt` | `source_qualification_and_receipt` | Source, accepted material, and receipt rejects | Batch receipt and provenance record | supplier or collection ID; taxon or material family; source route and geography; prior product or waste status; permit or CITES references where applicable; gross and net mass; moisture or solids; reject mass and fate | Weighbridge, calibrated scale, supplier document, collection log, inspection, and permit check | kg; mass fraction | Each batch or lot | All batches represented by the dataset period | Every included source and receiving site | Sum masses only after harmonizing moisture basis; retain source-level records | Scale calibration; supplier document; inspection record; applicable permit or CITES evidence |
| `cp_collection_transport` | `controlled_collection_and_delivery` | Material movement, fuel, and losses | Trip, vessel, or equipment activity log | route; mode; origin and destination; loaded and delivered mass; distance; fuel or energy; load factor; empty return; loss mass | Trip log, GPS or route record, fuel record, invoice, and receiving check | kg; km; tkm; kWh; MJ; L | Each controlled trip or campaign | All controlled collection and delivery represented by the dataset | Every controlled route and vehicle or vessel class | Calculate mass-distance per trip; sum fuel and losses; normalize to accepted material and final product | Route evidence; fuel invoices; meter records; load tickets |
| `cp_preparation_material` | `cleaning_drying_and_sorting` | Material input and prepared output | Batch production and moisture record | input mass; output mass; moisture or solids; material family; cleaning route; drying route; grade; timestamps | Calibrated scales, moisture test, batch sheet, and production log | kg; mass fraction | Each preparation batch | Representative operating period including normal route variation | Each preparation line and material family | Calculate dry mass before combining batches; report weighted moisture and total output | Scale and moisture-method records; batch reconciliation |
| `cp_preparation_water` | `cleaning_drying_and_sorting` | Freshwater, seawater, reused water, and wastewater | Meter or batch water record | source; meter start and end; tank refill; reuse volume; discharge volume; salinity; suspended solids or organic load when required | Calibrated meter, tank record, invoice, or documented water balance | kg or m3 | Each batch or meter-reading interval | Same period as preparation production | Each water source and preparation line | Keep sources separate; sum by source and normalize to prepared and final product | Meter calibration; invoices; laboratory or discharge records |
| `cp_preparation_energy_and_agents` | `cleaning_drying_and_sorting` | Energy carriers and cleaning agents | Meter, invoice, fuel, and dosing record | carrier or agent; Tiangong flow; quantity; unit; concentration; equipment; batch or period; recovery | Submeter, utility bill, fuel log, purchase record, and dosing system | kWh; MJ; kg; L | Each batch or billing interval | Same period as preparation production | Each process line and utility or agent | Direct meter first; otherwise allocate shared use using a documented causal driver | Meter calibration; invoices; dosing logs; allocation record |
| `cp_waste_and_wastewater` | `source_qualification_and_receipt`; `cleaning_drying_and_sorting`; `packaging_storage_and_gate_release` | Solid rejects, residues, wastewater, and packaging waste | Waste ticket, discharge, or internal recovery record | waste identity; mass or volume; moisture; source process; internal recycle; transporter; treatment or discharge destination | Scale, container count, manifest, discharge meter, laboratory record, or reconciled balance | kg or m3 | Each shipment, discharge, or reporting interval | Same period as associated production | Every foreground waste and wastewater destination | Keep destinations and treatment routes separate; normalize after summing verified records | Waste manifest; treatment receipt; discharge permit or test; balance reconciliation |
| `cp_size_reduction_and_grading` | `size_reduction_and_grading` | Material, energy, grades, off-spec fractions, and captured dust | Campaign production and equipment record | input and output mass; moisture; target size; sieve results; equipment time; energy; recycle; off-spec and dust mass | Scales, sieve analysis, equipment meter, and production log | kg; mm or µm; kWh; MJ | Each campaign | All campaigns represented by the dataset | Each line, material family, and grade | Reconcile grade fractions and recycle; allocate shared energy by causal equipment record | Scale, sieve, and meter calibration; campaign balance |
| `cp_packaging_and_gate_release` | `packaging_storage_and_gate_release` | Final product, packaging, storage, and gate output | Lot, bill-of-materials, utility, and dispatch record | product mass and moisture; package material and mass; reusable cycles; storage duration; storage energy; dispatch ID | Final scale, packaging BOM, inventory, meter, and dispatch document | kg; item; day; kWh; MJ | Each lot and utility interval | Same period as final production | Each package format and storage condition | Normalize packaging and allocated storage energy to dispatched reference product | Final scale check; BOM; meter and dispatch records |
| `cp_direct_releases` | `controlled_collection_and_delivery`; `cleaning_drying_and_sorting`; `size_reduction_and_grading` | Direct resource use and elementary releases | Monitoring, permit, or calculation record | flow UUID; compartment; measured concentration or quantity; gas or water volume; sampling period; factor and source; control efficiency | Direct monitoring or approved calculation from collected activity data | Selected Tiangong reference unit | Each monitoring event or required reporting interval | Same period as the generating process | Every controlled emission point or collection area | Integrate measured values over the period; avoid duplication with provider or treatment datasets | Calibration; laboratory chain of custody; permit report; cited factor and formula |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_accepted_mass` | Source qualification and receipt | accepted mass = incoming mass - receipt rejects, using the same moisture basis | incoming mass; reject mass; moisture basis | accepted source material mass |  |
| `calc_dry_mass` | Moisture-basis conversion | dry mass = measured mass × measured solids mass fraction | measured mass; measured moisture or solids fraction | dry mass |  |
| `calc_normalized_amount` | Every inventory quantity | normalized amount = reporting-period quantity / reporting-period reference product mass | verified period quantity; verified reference output | amount per 1 kg reference product | `eu-pef-method-2021` |
| `calc_transport_service` | Controlled collection and delivery | transport service = transported tonnes × route kilometres; model empty returns separately when included | trip mass; route distance; empty-return treatment | tkm |  |
| `calc_material_balance` | Receipt, preparation, and grading | Reconcile dry material input plus measured added solids with dry product, co-product, waste, captured dust, and measured solids in wastewater; report the unclosed difference and the acceptance threshold used. | dry inputs; dry outputs; residues; wastewater solids; captured dust | mass-balance result and closure difference |  |
| `calc_shared_utility` | Shared meters or utilities | Allocate shared utility only with the declared causal driver; retain total utility, driver totals, and allocated share. | total utility; process driver; total driver | allocated process utility | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_provenance` | Every source lot | Retain material family or taxon where known, source route, geography, prior product or waste status, and applicable legal, permit, and CITES evidence. | Source and inspection records; current CITES check where applicable; `unsd-cpc3-hs-scope`; `cites-current-coral-controls` |
| `dq_measurement` | Mass, moisture, water, energy, agents, and waste | Use calibrated or verified measurement systems, preserve original units, and identify calculated rather than measured values. | Calibration, meter, invoice, laboratory, and calculation records; `eu-pef-method-2021` |
| `dq_temporal` | Reporting period | Cover the declared normal production route and document shutdowns, abnormal batches, seasonality, and excluded periods. | Production calendar, batch list, utility intervals, and exception log |
| `dq_geography_and_technology` | Foreground and background data | Match source, collection, preparation technology, energy, water, packaging, waste treatment, and transport geography, or disclose substitutions. | Site and supplier metadata; background dataset metadata |
| `dq_completeness` | Process inventory | Include every applicable prescribed row or record an explicit not-applicable reason; reconcile product, co-product, waste, wastewater, and direct releases. | Applicability matrix and material, water, and utility balances; `eu-pef-method-2021` |
| `dq_allocation` | Shared and multi-output processes | Retain subdivision evidence, allocation driver, formula, period, and sensitivity information when allocation is used. | Meter and batch records, allocation worksheet, and `eu-pef-method-2021` |
| `dq_traceability` | Published data package | Each normalized value shall trace to a raw record, calculation rule, Tiangong identity, and applicable external source without embedding private credentials or lookup logs. | Record IDs, calculation links, UUIDs, and source IDs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | Product identity and scope | Confirm that the output is unworked or simply prepared and unshaped, or is a declared powder or waste fraction within the category; reject chemically transformed or finished downstream products. | `unsd-cpc3-hs-scope` |
| `validation_rule_2` | Reference flow | Confirm the reference product, mass flow property, mass unit group, 1 kg amount, and every required qualifier. |  |
| `validation_rule_3` | Process applicability | Include every applicable process and flow row or provide a documented not-applicable reason; do not apply mollusc-shell preparation assumptions to another material family without disclosure. | `shell-waste-management-2023`; `bivalve-shell-valorization-2022` |
| `validation_rule_4` | Instantiated flow identities | Resolve every instantiated product, waste, and elementary row to the applicable Tiangong UUID before publishing a dataset; route-specific placeholders are not complete flow selections. |  |
| `validation_rule_5` | Foreground records | Verify that normalized values trace to the declared collection protocol and retain unnormalized totals, units, temporal scope, and site or route scope. | `eu-pef-method-2021` |
| `validation_rule_6` | Mass and moisture balance | Reconcile receipt, preparation, grading, and final output on a consistent moisture or dry-mass basis and disclose the unclosed difference and acceptance threshold. |  |
| `validation_rule_7` | Cleaning water screening | When freshwater salt-reduction cleaning applies, compare the recorded result with 0.2–0.8 m3/t shell feed as literature screening evidence; values outside this interval require explanation but are not automatically nonconforming. | `shell-waste-management-2023` |
| `validation_rule_8` | Allocation and prior burden | Verify the subdivision or allocation hierarchy, prior product or waste status, formula, data period, and sensitivity; reject undocumented zero-burden assumptions. | `eu-pef-method-2021`; `oyster-shell-lca-2012` |
| `validation_rule_9` | Wastewater, residues, and direct releases | Confirm identities, quantities, compartments or destinations, and absence of double counting with energy-provider or treatment datasets. | `eu-pef-method-2021` |
| `validation_rule_10` | Coral legality and provenance | For coral or coral-derived source material, check the current applicable CITES listing and retain required permits, certificates, source and trade terms, or documented exemption evidence. | `cites-current-coral-controls` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for a declared CPC 04911 preparation route; after review it may support a `secondary_dataset` or `background_dataset`. |
| downstream_use | Construction of Tiangong `process` data and downstream `lifecyclemodel` projections for unworked or simply prepared coral-like material, shell, or cuttle-bone at the facility gate. |
| allowed_use | Route-, geography-, material-family-, moisture-, grade-, and provenance-matched modelling where applicable processes, upstream burden treatment, waste routes, and background substitutions are declared. |
| excluded_use | Live aquatic organisms; edible seafood; aquaculture or fishery production not covered by an upstream dataset; chemically transformed derivatives; calcined products; formulated downstream products; cut-to-shape, carved, jewellery, or other finished articles; undisclosed coral provenance. |
| required_metadata | PCR id and version; Tiangong reference flow UUID; material family or taxon; source route and geography; prior product, by-product, or waste status; preparation route; moisture basis; grade or particle size; legal and provenance status; process applicability; reporting period; technology and site; allocation; packaging; waste and wastewater destinations; background dataset references. |
| required_quality_disclosure | Measurement and calibration coverage; material and water balance closure; temporal, geographic, and technological representativeness; missing or estimated records; allocation sensitivity; source and permit limitations; background substitutions; validation findings. |
| update_trigger | Change in product scope, material family, source or CITES status, collection route, technology, cleaning or drying method, grade, moisture basis, energy or water system, waste treatment, allocation, packaging, site or geography, Tiangong identity, external evidence, or applicable legal requirement. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-hs-scope` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 and HS 2022 correspondence for subclass 04911 / subheading 050800, https://unstats.un.org/unsd/classifications/Family/Detail/2100 and https://unstats.un.org/unsd/classifications/Econ/Detail/EN/2089/050800 (retrieved 2026-08-07). | Product-category identity; unworked or simply prepared, unshaped, powder, and waste scope; exclusions. |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | European Commission, Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30 and https://eplca.jrc.ec.europa.eu/permalink/PEF_method.pdf (retrieved 2026-08-07). | Foreground primary data, system boundary, co-product and waste visibility, allocation hierarchy, data quality, and disclosure. |
| `cites-current-coral-controls` | Official guidance (`official_guidance`) | CITES, current Appendices and Resolution Conf. 11.10 on trade in stony corals, https://cites.org/eng/app/appendices.php and https://cites.org/eng/imp/Exemptions_and_special_procedures (retrieved 2026-08-07). | Coral taxon, source, legal and provenance checks; permit, certificate, trade-term, or exemption evidence where applicable. |
| `shell-waste-management-2023` | Literature (`literature`) | Topić Popović, N. et al. (2023), Shell Waste Management and Utilization: Mitigating Organic Pollution and Enhancing Sustainability, Applied Sciences 13(1), 623, https://doi.org/10.3390/app13010623. | Cleaning and preparation process decomposition; water and energy significance; 0.2–0.8 m3/t shell-cleaning water screening range. |
| `bivalve-shell-valorization-2022` | Literature (`literature`) | Summa, D. et al. (2022), Trends and Opportunities of Bivalve Shells' Waste Valorization in a Prospect of Circular Blue Bioeconomy, Resources 11(5), 48, https://doi.org/10.3390/resources11050048. | Washing, crushing, grading, and route-specific preparation evidence; boundary between simple preparation and downstream valorization. |
| `oyster-shell-lca-2012` | Literature (`literature`) | de Alvarenga, R.A.F. et al. (2012), The recycling of oyster shells: an environmental analysis using Life Cycle Assessment, Journal of Environmental Management 106, 102–109, https://doi.org/10.1016/j.jenvman.2012.04.017. | Importance of actual collection and transport distance, upstream scenario, and allocation or avoided-disposal assumptions; no universal distance threshold adopted. |
