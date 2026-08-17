---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.nuts-groundnuts-and-other-seeds-roasted-salted-or-otherwise-prepared-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Nuts, groundnuts and other seeds, roasted, salted or otherwise prepared, n.e.c.

## 1. Scope and Applicability

This PCR supports production of foreground data packages for edible nuts, groundnuts and other edible seeds whose marketed state is roasted, salted, or otherwise prepared and not elsewhere classified. It is a generic category rule: a conforming data package shall identify the actual nut or seed species, ingredient formulation, preparation route, microbial-reduction treatment if any, product moisture or water-activity state, packaging format, geography, technology and reporting period.

The PCR distinguishes three route families: `roasted`, `salted`, and `other_preparation`. More than one route may apply to a product, for example a roasted and salted nut. Route-specific processes and flows shall be activated only when they occur. CXC 75-2015 is used only to identify relevant low-moisture-food process controls and post-treatment handling boundaries when the product has water activity at or below 0.85; it is not an LCA energy, yield, loss or emission-factor source.

The foreground gate-to-gate boundary begins with received nuts, groundnuts or seeds and other ingredients at the preparation facility and ends with the finished packaged product leaving that facility. Upstream production of agricultural raw materials, ingredients, fuels, electricity, water and packaging shall be linked through upstream datasets. Distribution, retail, consumer use and end-of-life are outside the foreground inventory unless the study explicitly extends the boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.nuts-groundnuts-and-other-seeds-roasted-salted-or-otherwise-prepared-n-e-c |
| classification_refs | CPC 3.0: 21495 — Nuts, groundnuts and other seeds, roasted, salted or otherwise prepared, n.e.c. |
| covered_products | Edible nuts, groundnuts and edible seeds sold after roasting, salting, seasoning, coating, sterilization, osmotic dehydration, airtight preservation or another preparation route consistent with CPC 21495; mixtures are covered only when the finished mixture is within this category. |
| excluded_products | Unprepared or merely shelled nuts; seed for planting; simple dried nut or dried-fruit mixtures; sugar-preserved products; frozen products; jams, jellies, purees and pastes; nut or seed oils; nut or seed meals; nut or seed butters where classified separately; prepared meals; non-food seed products. |
| representative_product | One kilogram of saleable prepared edible nuts or seeds at the preparation-facility gate, with route and formulation declared. |
| production_route | Declare one or more of `roasted`, `salted`, and `other_preparation`; additionally declare dry or oil roasting, dry salting or wet/brine salting, and the specific other-preparation technology when applicable. |
| market_state | Finished, saleable, packaged food product at the preparation-facility gate; ready for distribution or further use as a food ingredient. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Prepared edible nuts, groundnuts or other edible seeds providing the declared species, formulation, preparation route and market quality. |
| How much | 1 kg net mass of saleable product, excluding packaging. |
| How well | Meets the declared product specification, route, salt/seasoning or coating formulation, moisture or water-activity state, and food-safety release criteria. |
| How long or cycle | One production lot at the preparation-facility gate; no use-duration function is assigned. |
| reference_flow_link | The reference flow is exactly the 1 kg net saleable product output defined below. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass of saleable prepared product, excluding packaging |
| Reference product flow | Nuts, groundnuts and other seeds, roasted, salted or otherwise prepared, n.e.c. `eb6332a4-c0e9-4213-a00d-77f9fd3bdacc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | nut or seed species and physical form; route family or families; roasting medium and technology when roasted; salting method and salt concentration or formulation when salted; other-preparation technology and preservation medium when applicable; ingredient formulation; net product mass; moisture content or water activity and test basis when relevant; packaging format; facility geography; production technology; reporting period |

When constructing a foreground data package, all `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, product description or equivalent fields. Missing route or product-state qualifiers make the reference flow incomplete and prevent comparison with another data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net saleable product mass, excluding all primary, secondary and tertiary packaging. |
| `mass_basis_consistency` | All material inputs and outputs | Mass | kg | Weigh or convert every material flow to kg on a consistent as-received basis; separately disclose dry-matter or moisture corrections when used. |
| `energy_carrier_separation` | Electricity, fuels, steam and thermal energy | Energy or carrier-specific property | kWh, MJ or kg as metered | Preserve the metered carrier and unit; do not combine electricity, purchased heat and combustible fuels into one undifferentiated energy amount. |
| `route_specific_normalization` | Route-specific processes | Mass | kg | Normalize each active route process to its own measured product output and then reconcile it to the 1 kg final reference flow through recorded intermediate masses. |
| `ingredient_net_mass` | Salt, seasoning, coating oil and other ingredients | Mass | kg | Record actual ingredient mass entering the product and separately record unused, recovered or discarded material; do not infer retained mass solely from recipe targets. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Nuts, groundnuts or other edible seeds received at the preparation facility, with species, shelled/in-shell state, moisture or water activity when relevant, supplier, origin, lot and prior treatment declared. |
| starting_condition_role | Upstream-prepared product input to the foreground receiving and preparation process. |
| product_classification_scope | Prepared edible nuts, groundnuts and other edible seeds within CPC 3.0 subclass 21495; classification identity does not prescribe one formulation or technology. |
| recursive_input_rule | If an input already meets the same prepared-product category, record it as a technosphere product input with its own upstream dataset and declared preparation state; do not recursively recreate its prior preparation inside this foreground system. |
| upstream_dataset_requirement | Link agricultural raw materials, already prepared category inputs, ingredients, fuels, electricity, water, packaging and treatment services to geographically and technologically representative upstream datasets. |
| disclosure | Declare active route families, included unit operations, cut-offs, upstream dataset choices, allocation decisions, product and intermediate mass balances, moisture or water-activity basis, treatment controls and all deviations from this PCR. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground system | Include receiving/preparation, every active preparation route, post-treatment handling, finishing, packing, internally generated wastes, wastewater and direct emissions up to the packaged facility-gate product. Link all crossing product and service inputs to upstream datasets. | eu-pef-2021-2279 |
| `boundary_route_activation` | route-specific operations | Activate roasting only for a roasted or thermally treated route, salting only for dry-salted or wet/brine-salted routes, and other preparation only for the specifically declared alternative operation; never apply a generic combined route to every product. | unsd-cpc-3-0-21495 |
| `boundary_low_moisture_controls` | products with water activity at or below 0.85 | Include resource use, rejects and cleaning consequences associated with applicable raw-material control, microbial-reduction treatment, dry-area control and post-treatment handling. This hygiene boundary applies only when the product and process fall within CXC 75-2015 and supplies no LCA quantity. | codex-cxc-75-2015 |
| `boundary_post_treatment_additions` | ingredients added after a microbial-reduction step | Include the ingredient input and associated handling, hygiene control, losses and packaging exposure because post-treatment additions can change the relevant process boundary. | codex-cxc-75-2015 |
| `boundary_excluded_stages` | distribution, retail, use and end-of-life | Exclude these stages from the foreground gate-to-gate inventory unless explicitly added for the study goal; disclose any added stage and keep it separate from facility production. | eu-pef-2021-2279 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_preparation` | Receiving and physical preparation | `required` | Always included. | Foreground receiving, inspection, cleaning, sorting and any facility shelling, peeling or size preparation. | kg prepared nut or seed output |
| `roasting_treatment` | Roasting or thermal treatment | `conditional` | Include when route `roasted` is declared or when a thermal microbial-reduction treatment occurs. | Route-specific heating, optional roasting medium, cooling and treatment loss. | kg roasted or treated intermediate output |
| `salting_seasoning` | Salting and seasoning | `conditional` | Include when route `salted` is declared, including dry application or wet/brine application followed by draining or drying. | Route-specific salt, seasoning, water, mixing, draining and drying. | kg salted intermediate output |
| `other_preparation` | Other preparation or preservation | `conditional` | Include when route `other_preparation` is declared and identify the actual operation. | Coating, sterilization, osmotic dehydration, airtight preservation, acidification or another CPC-consistent operation. | kg otherwise prepared intermediate output |
| `finishing_packaging` | Final handling and packaging | `required` | Always included. | Post-treatment inspection, blending if applicable, metal detection or equivalent release control, packing and dispatch-gate transfer. | 1 kg net saleable reference product |

### Process: Receiving and physical preparation (`receiving_preparation`)

#### Inputs

##### Product flows

###### Received nuts, groundnuts or edible seeds (`received_nut_seed_input`)

Record each species and physical form entering the facility, including any input that already underwent preparation elsewhere. Quantity comes from calibrated receiving scales reconciled to supplier delivery records.

- Selected flow: Facility-specific received nut, groundnut or edible seed product flow
- Flow property / unit: Mass / kg
- Amount rule: measured as-received mass by species, lot and physical form
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg final saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_received_materials`
- Range: Provisional route-and-formulation screening estimate; replace with reconciled lot mass balance
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.5
  - Upper: 2.0
  - Unit: kg/kg final saleable product
  - Basis: broad screening interval across species, ingredient shares and preparation losses; not a conforming final value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Record metered or sub-metered electricity for receiving conveyors, cleaning, sorting, shelling, peeling and related preparation equipment.

- Selected flow: Geography-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: measured electricity allocated to preparation using operating hours only when sub-metering is unavailable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared nut or seed output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Range: Provisional preparation-electricity screening estimate; replace when meter data cover the reporting period
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh/kg prepared output
  - Basis: deliberately broad technology-screening interval, not a product-category default
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared nut or seed intermediate (`prepared_intermediate_output`)

Record the mass transferred to the next active route process or directly to finishing and packaging.

- Selected flow: Facility-specific prepared nut or seed intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per receiving and preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_outputs`

##### Waste flows

###### Shells, skins, foreign matter and preparation rejects (`preparation_rejects`)

Record each separately managed residue or reject stream, its destination and whether it is sold, recovered, treated or disposed.

- Selected flow: Facility-specific preparation residue or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing residue and reject mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg received nut or seed input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Range: Provisional preparation-loss screening estimate; replace with weighed residue records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg received nut or seed input
  - Basis: broad interval covering already-cleaned through in-shell inputs; not a universal loss rate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Roasting or thermal treatment (`roasting_treatment`)

#### Inputs

##### Product flows

###### Nut or seed feed to roasting (`roasting_feed`)

Record the measured prepared feed transferred into each roaster or thermal-treatment campaign.

- Selected flow: Facility-specific prepared nut or seed intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass by campaign and species
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg roasted intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_materials`

###### Roasting thermal energy or fuel (`roasting_thermal_energy`)

Keep fuel, steam and purchased heat carriers separate. Record meter, invoice and equipment data for the active roasting technology and include startup, shutdown and failed batches consistently.

- Selected flow: Technology- and geography-specific fuel, steam or heat supply
- Flow property / unit: Energy or carrier mass / MJ or kg
- Amount rule: measured carrier consumption converted to MJ using documented net calorific value only when needed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg roasted intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Range: Provisional roasting-energy screening estimate; replace with route-specific metering and batch output
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.1
  - Upper: 20
  - Unit: MJ/kg roasted output
  - Basis: deliberately broad interval spanning technologies and moisture loads; not a universal roasting value
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Roasting electricity (`roasting_electricity`)

Record electricity for electric heating, drives, fans, controls, cooling and exhaust treatment without merging it with thermal carriers.

- Selected flow: Geography-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: metered campaign electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg roasted intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Range: Provisional roasting-electricity screening estimate; replace with sub-metered data
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh/kg roasted output
  - Basis: broad first-pass interval because electric and fuel-fired technologies differ materially
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Roasted or thermally treated intermediate (`roasted_intermediate_output`)

Record measured output after the declared endpoint and cooling condition. For a low-moisture food, retain records demonstrating that the applicable treatment and post-treatment controls were followed.

- Selected flow: Facility-specific roasted or thermally treated nut or seed intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured cooled output accepted for the next operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per roasting campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_outputs`
- Sources: codex-cxc-75-2015

##### Waste flows

###### Roasting losses and rejected product (`roasting_loss_reject`)

Record separately measured entrained fines, spills, burned or off-specification product and other removed material; moisture loss is calculated through mass balance rather than treated as a waste flow unless physically collected.

- Selected flow: Facility-specific roasting reject or residue flow
- Flow property / unit: Mass / kg
- Amount rule: weighed reject and residue mass by fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg roasting feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Range: Provisional roasting-loss screening estimate; replace with campaign mass balance and moisture measurements
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg roasting feed
  - Basis: broad interval for screening only; it does not prescribe a yield or merge moisture loss with physical waste
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Salting and seasoning (`salting_seasoning`)

#### Inputs

##### Product flows

###### Nut or seed feed to salting (`salting_feed`)

Record the measured intermediate mass entering dry-salt, slurry, spray or brine application.

- Selected flow: Facility-specific nut or seed intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass by salting campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg salted intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_materials`

###### Salt and dry seasoning (`salt_seasoning_input`)

Record each salt and seasoning ingredient actually issued to the campaign and reconcile unused or recovered material.

- Selected flow: Ingredient-specific salt or seasoning product flow
- Flow property / unit: Mass / kg
- Amount rule: measured ingredient issue minus separately recorded return or recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg salted intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_use`
- Range: Provisional salt-and-seasoning screening estimate; replace with formulation and retained-mass records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.3
  - Unit: kg/kg salted output
  - Basis: broad formulation-screening interval; not a salt specification or category average
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Water for brine or wet seasoning (`salting_water_input`)

Include only for wet or brine routes and separately record reused brine. Do not assign water to dry salting.

- Selected flow: Geography-specific process water
- Flow property / unit: Mass / kg
- Amount rule: metered makeup water plus other water entering the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg wet-salted intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_brine`
- Range: Provisional wet-salting water screening estimate; replace with make-up and discharge meters
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg wet-salted output
  - Basis: route-specific screening interval with zero representing no wet step; never apply to dry salting
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Salting or post-brine drying energy (`salting_drying_energy`)

Include mixing, pumping and any drying energy used by the active salting route; preserve electricity and thermal carriers separately in underlying records.

- Selected flow: Route-specific electricity, fuel, steam or heat supply
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered route energy by carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg salted intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Range: Provisional wet/dry-salting energy screening estimate; replace with carrier-specific meter records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: MJ/kg salted output
  - Basis: broad screening interval; zero is possible for manual dry application and the upper region represents drying-intensive routes
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Salted or seasoned intermediate (`salted_intermediate_output`)

Record accepted output after any draining, drying or equilibration endpoint.

- Selected flow: Facility-specific salted or seasoned nut or seed intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per salting campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_outputs`

##### Waste flows

###### Spent brine, wastewater and unrecovered seasoning (`salting_wastewater_residue`)

Record each discharged or treated wet stream and solid seasoning residue separately, with concentration or dry-solids information when available.

- Selected flow: Facility-specific wastewater, spent brine or seasoning-residue flow
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or weighed residue by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg salted intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_brine`
- Range: Provisional wet-stream screening estimate; replace with route-specific discharge and concentration records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg salted output
  - Basis: broad wet-route screening interval with zero for dry routes; not a wastewater factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Other preparation or preservation (`other_preparation`)

#### Inputs

##### Product flows

###### Nut or seed feed to other preparation (`other_preparation_feed`)

Record the measured intermediate entering the explicitly named other-preparation operation.

- Selected flow: Facility-specific nut or seed intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass by operation and lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg otherwise prepared intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_materials`

###### Other ingredients and processing media (`other_ingredient_media`)

Record coating oils, flavours, acids, gases, osmotic media, processing aids and other materials separately. Do not use this generic row to hide a material ingredient.

- Selected flow: Ingredient- or medium-specific product flow
- Flow property / unit: Mass / kg
- Amount rule: measured issue minus documented return or recovery for each material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg otherwise prepared intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_use`
- Range: Provisional other-ingredient screening estimate; replace with the declared recipe and retained-mass balance
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg otherwise prepared output
  - Basis: broad route-screening interval across coating, preservation and formulation routes; not a universal recipe
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Other-preparation energy (`other_preparation_energy`)

Record carrier-specific energy for sterilization, dehydration, pumping, coating, airtight preservation or the actual declared operation.

- Selected flow: Technology- and geography-specific electricity, fuel, steam or heat supply
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered operation energy by carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg otherwise prepared intermediate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Range: Provisional other-preparation energy screening estimate; replace once the actual technology and meter boundary are known
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 30
  - Unit: MJ/kg otherwise prepared output
  - Basis: intentionally wide because CPC 21495 permits materially different preparation technologies
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Otherwise prepared intermediate (`other_prepared_output`)

Record accepted output at the declared operation endpoint and identify the preparation method.

- Selected flow: Facility-specific otherwise prepared nut or seed intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_outputs`
- Sources: unsd-cpc-3-0-21495

##### Waste flows

###### Other-preparation rejects and effluent (`other_preparation_waste`)

Record solids, liquids and off-specification product separately by treatment destination and do not combine physical waste with evaporated moisture.

- Selected flow: Facility-specific waste or effluent flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste or effluent by stream and fate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg other-preparation feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Range: Provisional other-preparation loss screening estimate; replace with operation-specific mass balance
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg other-preparation feed
  - Basis: broad screening interval across dissimilar operations; not a prescribed yield or effluent factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Final handling and packaging (`finishing_packaging`)

#### Inputs

##### Product flows

###### Finished-product blend before packing (`final_product_bulk_input`)

Record all intermediate products and any final blending proportions entering the packing line, preserving route traceability.

- Selected flow: Facility-specific finished bulk prepared nut or seed product
- Flow property / unit: Mass / kg
- Amount rule: measured bulk product transferred to packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg final saleable product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`

###### Packaging materials (`packaging_material_input`)

Record primary, secondary and tertiary packaging separately by material and actual mass; packaging is excluded from the net reference mass but included as an inventory input.

- Selected flow: Material-specific packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: measured packaging issue minus documented unused returns, normalized to saleable units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_packaging`
- Range: Provisional packaging-mass screening estimate; replace with bill of materials and pack-weight checks
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 0.5
  - Unit: kg/kg net saleable product
  - Basis: broad interval across bulk and small retail formats; not a packaging default
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Finishing and packing electricity (`packaging_electricity`)

Record electricity for conveying, blending, inspection, filling, sealing, gas flushing and packing-line controls.

- Selected flow: Geography-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: metered packing-line electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Range: Provisional finishing-and-packing electricity screening estimate; replace with line-meter data
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.001
  - Upper: 2
  - Unit: kWh/kg net saleable product
  - Basis: broad technology-screening interval, not a category-average value
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable prepared nuts or seeds (`reference_product_output`)

This is the quantitative reference output. Record net product mass after release checks and exclude packaging mass.

- Selected flow: Nuts, groundnuts and other seeds, roasted, salted or otherwise prepared, n.e.c. `eb6332a4-c0e9-4213-a00d-77f9fd3bdacc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg in Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg net saleable product as the normalized reference output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packing rejects and packaging scrap (`packaging_rejects`)

Record off-specification food product and packaging scrap as separate waste flows by material and fate.

- Selected flow: Facility-specific product reject or packaging-waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured reject and scrap mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Range: Provisional packing-reject screening estimate; replace with line reject and scrap records
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg net saleable product
  - Basis: broad screening interval, not an allowed loss rate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | all multi-output and shared-utility operations | First avoid allocation through process subdivision, separate metering and direct mass or energy assignment to each product or route. | eu-pef-2021-2279 |
| `allocation_residue_classification` | shells, skins, recovered seasoning, off-specification product and other outputs | Classify each output as waste, recyclable material or co-product according to its actual control and destination; do not assign avoided burden merely because a residue has a downstream use. | eu-pef-2021-2279 |
| `allocation_physical_then_economic` | inseparable remaining shared burdens | Where subdivision or direct causality is not feasible, use a documented physical relationship that reflects causality. Use economic allocation only when no defensible physical relationship exists, and disclose prices, period, geography and sensitivity. | eu-pef-2021-2279 |
| `allocation_recycled_or_reused_brine` | internally reused brine, seasoning, heat or intermediate material | Keep internal reuse inside the foreground mass and energy balance; record only makeup inputs and actual discharges crossing the system boundary, with losses reconciled. | eu-pef-2021-2279 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_received_materials` | `receiving_preparation` | received nuts, seeds and ingredients | weighbridge, scale and supplier-lot records | species; form; supplier; origin; lot; gross mass; tare; net mass; moisture or water activity when relevant; prior treatment | calibrated scale reconciled to receipt and inventory records | kg | each delivery and lot | representative reporting period covering material sourcing and production variability | all facilities and suppliers in declared scope | sum net received mass by species and lot; separately retain already prepared inputs | calibration certificate; receipt reconciliation; supplier specification |
| `cp_route_materials` | `roasting_treatment`; `salting_seasoning`; `other_preparation` | route feed and transfers | batch and transfer records | route; batch; species; input mass; output mass; timestamp; recipe; endpoint; moisture or water activity when relevant | calibrated batch scales and transfer meters | kg | each campaign | all campaigns in reporting period | every active line and route | sum by route and reconcile transfers without double counting | scale checks; batch genealogy; exception log |
| `cp_process_energy` | all active processes | electricity, fuel, steam and heat | meter, invoice and equipment records | carrier; meter boundary; opening and closing reading; quantity; unit; operating hours; batch; allocation driver; calorific value if converted | sub-meter preferred; otherwise reconciled facility meter and documented allocation | native carrier unit, kWh or MJ | continuous or each campaign; invoice reconciliation monthly | representative reporting period including normal startup, shutdown and failed production | every included line and utility system | aggregate by carrier and process; normalize to measured process output; disclose allocation | meter calibration; invoice reconciliation; conversion source; allocation check |
| `cp_ingredient_use` | `salting_seasoning`; `other_preparation` | salt, seasoning, coating and preparation media | recipe issue, return and inventory records | material identity; lot; issued mass; returned mass; recovered mass; retained estimate; batch | calibrated ingredient scales plus inventory reconciliation | kg | each batch | all applicable batches | every declared formulation and line | net issue equals issued minus documented return or recovery; report materials separately | recipe version; scale check; stock reconciliation |
| `cp_water_brine` | `salting_seasoning`; `other_preparation` | water, brine and wastewater | flow meter, tank and laboratory records | makeup water; reused volume or mass; salt concentration; discharge mass or volume; total solids; destination; batch | calibrated flow or tank measurement; sampling for concentration where material | kg, m3 and concentration unit | each batch or continuous; discharge sampling at representative frequency | all wet-operation periods in reporting period | every wet-operation line, reuse loop and discharge point in scope | mass-balance water and salt; convert volume using measured or documented density | meter calibration; sample chain; treatment manifest; balance closure |
| `cp_intermediate_outputs` | all active preparation processes | accepted intermediate output | batch output and quality-release records | batch; route; output mass; endpoint; moisture; water activity if relevant; reject mass; release status | calibrated output scale linked to quality release | kg | each campaign | all campaigns in reporting period | every active preparation route and line | sum accepted outputs only and reconcile with next-process inputs | scale check; release record; batch genealogy |
| `cp_waste_outputs` | all active processes | residues, rejects, effluent and packaging scrap | waste scale, manifests and treatment records | stream identity; mass; moisture if relevant; hazardous status; destination; sale or fee; batch or period | calibrated scale or documented haulier measurement; effluent meter for liquid streams | kg or m3 | each removal or discharge | reporting period | all included facilities, processes and waste destinations | aggregate separately by stream and fate; no netting against product input | waste manifest; scale record; destination evidence |
| `cp_final_packaging` | `finishing_packaging` | bulk product, packaging and saleable output | packing-line, bill-of-material and finished-goods records | product SKU; route; formulation; bulk input; net saleable output; package material; unit mass; units used; scrap; gas use if applicable | calibrated checkweigher, packaging BOM verification and inventory reconciliation | kg | each production lot and packaging change | all saleable lots in reporting period | every packaging format and line in the declared scope | normalize packaging and line inputs to net released product mass | checkweigher checks; BOM revision; finished-goods reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground flows | normalized amount = flow amount attributable to included product / net mass of released saleable product | attributable flow amount; released net product mass | flow amount per 1 kg reference product | eu-pef-2021-2279 |
| `calc_route_energy` | each active route | route energy intensity = carrier-specific route energy / measured accepted route output; preserve carrier identity and report any shared-meter allocation | carrier meter records; accepted route output; allocation driver if needed | kWh or MJ per kg active-route output | eu-pef-2021-2279 |
| `calc_material_balance` | each process and full foreground system | closing discrepancy = total measured mass inputs - total measured product outputs - measured waste outputs - separately estimated evaporation or retained inventory; report sign and percentage of input | input, output, waste, moisture and inventory-change records | process and system mass-balance closure |  |
| `calc_brine_balance` | wet or brine salting | reconcile water and salt in makeup, reuse, retained product, discharge and inventory change; do not count internal recirculation as a new boundary input | water, salt, concentration, reuse, discharge and product records | net water and salt flows per kg salted output |  |
| `calc_allocation` | remaining shared processes | apply the selected allocation rule only after subdivision and direct assignment have been attempted; retain driver values and sensitivity where economic allocation is used | shared burden; physical driver or price data; product outputs | allocated foreground flow amounts | eu-pef-2021-2279 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_route_identity` | reference product and all active routes | Species, physical form, route family, formulation, technology, product state, packaging, geography and reporting period shall be explicit and traceable to production lots. | product specification; batch genealogy; route declaration |
| `dq_temporal_representativeness` | all foreground records | Use a period representative of normal production and relevant seasonal, supplier, formulation and startup/shutdown variation; disclose actual dates, excluded events and coverage share rather than assuming a universal duration. | record coverage analysis; production schedule; exception log |
| `dq_measurement_traceability` | mass, water and energy | Identify meter or scale boundary, calibration status, native unit, conversion and allocation method. Shared-meter allocations require reconciliation to the facility total. | calibration records; meter map; invoices; reconciliation worksheet |
| `dq_completeness` | active foreground processes | Include all material, energy, water, product, waste, wastewater and direct-emission flows that can materially affect the result; quantify or explicitly justify omissions. | completeness checklist; mass and energy reconciliation; waste manifests |
| `dq_low_moisture_scope` | use of CXC 75-2015 controls | Apply CXC-derived boundary controls only when water activity is at or below 0.85 and the product falls within the Code scope; disclose the test method and do not use the Code as a quantitative LCA source. | water-activity test; food-safety plan; codex-cxc-75-2015 |
| `dq_reasoned_estimate_replacement` | every `reasoned_estimate` range | A reasoned range is a screening aid only. Replace it with source-backed or representative foreground evidence when meter, scale, recipe, waste, moisture or batch records become available; any retained range shall be explicitly reviewed and disclosed before publication. | estimate register; replacement decision; reviewer approval |
| `dq_upstream_data` | upstream datasets | Select datasets representative of material identity, geography, technology and time; disclose proxies and material limitations. | dataset metadata and selection record; eu-pef-2021-2279 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference flow | Confirm the exact product-flow UUID, Mass flow-property UUID, Units of mass UUID, kg unit and 1 kg net product amount; packaging mass shall not be included. |  |
| `validation_route_consistency` | process map and product qualifiers | Every declared route shall activate its corresponding process and flows, and no inactive route may contribute generic energy, water, ingredient or loss values. | unsd-cpc-3-0-21495 |
| `validation_scope_classification` | product identity | Confirm the finished product is a prepared nut, groundnut or edible seed within the declared semantic boundary; reject excluded unprepared, simply dried, sugar-preserved, frozen, paste, oil, meal or planting-seed products. | unsd-cpc-3-0-21495 |
| `validation_mass_balance` | each process and full foreground system | Report mass-balance closure and investigate discrepancies material to the study; distinguish physical waste, retained product, inventory change and evaporation. |  |
| `validation_energy_separation` | energy inventory | Confirm carrier-specific electricity, fuel, steam and purchased heat records are not merged and share the same reporting and production coverage. | eu-pef-2021-2279 |
| `validation_low_moisture_boundary` | low-moisture products | When CXC 75-2015 is invoked, verify water activity at or below 0.85, applicable treatment and post-treatment ingredient/handling controls; otherwise mark this check not applicable. | codex-cxc-75-2015 |
| `validation_reasoned_estimates` | all provisional ranges | List every `reasoned_estimate`, its active route, use, replacement trigger and review status. A provisional range shall not silently become a fixed, typical or allowed value. |  |
| `validation_source_and_data_quality` | published data package | Verify source identifiers resolve, foreground records are traceable, proxies and allocation are disclosed, and intended third-party use has the required verification evidence. | eu-pef-2021-2279 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate prepared-nut-or-seed production dataset normalized to 1 kg net saleable product. |
| downstream_use | `secondary_dataset`; `background_dataset` when product, route, geography, technology and time representativeness match the consuming study. |
| allowed_use | Product carbon-footprint or LCA modelling, supplier data exchange, route-specific process improvement and downstream food-product inventories when required qualifiers and system-boundary compatibility are checked. |
| excluded_use | Comparisons between undeclared or materially different species, formulations, preparation routes or packaging systems; claims about food safety; use of provisional reasoned ranges as verified averages; agricultural production modelling without linked upstream datasets. |
| required_metadata | canonical PCR id; product-flow UUID; species and form; route family or families; technology; recipe and salt/coating basis; moisture or water activity when relevant; net mass and packaging basis; facility geography; reporting period; active process list; allocation; upstream datasets; record coverage; reasoned-estimate register. |
| required_quality_disclosure | Meter and scale coverage, mass-balance closure, route-specific energy and loss data, allocation drivers, waste destinations, upstream proxies, cut-offs, data gaps, estimate replacement status and whether CXC low-moisture controls were applicable. |
| update_trigger | Update when species/formulation/route/technology or packaging changes materially; when representative foreground records replace a reasoned estimate; when a source or UUID identity changes; when mass-balance, allocation or data-quality review identifies a material issue; or when the applicable CPC, Codex or Environmental Footprint method changes. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21495` | Standard (`standard`) | United Nations Statistics Division, Central Product Classification Version 3.0, Explanatory Notes, subclass 21495, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Official product-category title and classification boundary; distinguishes preparation or preservation from sugar preservation, freezing, simple drying, jams, jellies and pastes. |
| `codex-cxc-75-2015` | Standard (`standard`) | Codex Alimentarius, CXC 75-2015, Code of Hygienic Practice for Low-Moisture Foods, adopted 2015, revised 2016, amended 2018. https://workspace.fao.org/sites/codex/Standards/CXC%2075-2015/CXC_075e.pdf (retrieved 2026-08-11) | Conditional low-moisture-food scope, raw-material and environmental controls, validated microbial-reduction treatment, roasting as one possible treatment, post-treatment exposure and ingredient-addition boundaries; not used for LCA quantities. |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, OJ L 471, 30 December 2021. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Life-cycle system framing, reliable and verifiable product data, category-specific rules, company-specific foreground collection, multi-functionality handling, data quality, disclosure and verification. |
