---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-cotton
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other woven fabrics of cotton

## 1. Scope and Applicability

This PCR applies to saleable woven textile fabrics declared as cotton fabrics and assigned to the residual product category "other woven fabrics of cotton" after more specific cotton-woven-fabric categories have been ruled out. It covers greige, prepared, bleached, dyed, printed, and otherwise finished factory-gate fabrics when the actual route and composition are declared.

The foreground boundary begins with purchased yarn and other supplied materials at the fabric-producing site and ends with saleable fabric at the factory gate. It includes weaving preparation, weaving, route-specific wet processing, printing or dyeing, finishing, inspection, packaging, directly associated utilities, and on-site emission or effluent treatment when those activities occur at the reporting site. Upstream cotton cultivation, ginning, spinning, supplied chemicals, fuels, electricity, and transport are represented by linked upstream datasets rather than recreated inside the foreground inventory.

Knitted, crocheted, tufted, nonwoven, narrow, pile, terry, gauze, special technical, and made-up textile products are outside this PCR unless their product identity still meets the declared residual cotton woven-fabric boundary. Yarn and fibre production are outside the foreground process boundary. A data package shall not use this PCR merely because a fabric contains some cotton; it shall document the applicable classification decision, fibre composition, construction, and route.

The Tiangong flow **Printed cotton cloth** is an identity reference for one tightly woven, light- to medium-weight, printed apparel-grade representative route. It is not a default production route, composition, basis weight, quality grade, printing technology, or market average for the full category. Non-printed, greige, dyed, differently finished, or otherwise constructed products shall declare their own route qualifiers while retaining the mass-based reference-flow contract.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-fabrics-of-cotton |
| classification_refs | CPC 3.0: 26690, Other woven fabrics of cotton |
| covered_products | Saleable greige, prepared, bleached, dyed, printed, or finished woven cotton fabrics that belong to the residual other-cotton-woven-fabric category after more specific subclasses are ruled out |
| excluded_products | Yarn and fibre; knitted, crocheted, tufted, nonwoven, narrow, pile, terry, gauze, and special fabrics classified elsewhere; made-up textile articles; products whose declared principal textile identity is not cotton |
| representative_product | Printed cotton cloth is one tightly woven, light- to medium-weight, printed apparel-grade representative route only; it does not represent every product in the category |
| production_route | Supplied yarn -> warping and optional sizing -> weaving -> inspection/repair -> optional desizing, scouring, bleaching, or mercerising -> optional dyeing or printing -> optional functional or mechanical finishing and thermal treatment -> final inspection and packaging |
| market_state | Saleable dry fabric at factory gate, in roll, bale, or equivalent bulk form, with packaging excluded from reference mass and reported separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of saleable woven cotton fabric at the factory gate with a declared fibre composition, weave/construction, route, area mass, usable width, finish, and quality grade |
| How much | 1 kg of saleable fabric, excluding packaging |
| How well | Conforming to the producer's declared product specification and applicable contract or verified performance grade; no category-wide printing or finishing grade is implied |
| How long or cycle | One production lot through factory-gate release; use-stage lifetime is not part of this intermediate-product reference flow |
| reference_flow_link | The reference product output row `saleable_cotton_woven_fabric` is normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Printed cotton cloth / 印花棉布 `00665421-6d29-46d6-83cb-28766e3dec4b` |
| Reference flow property | Mass / 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass / 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual route: greige/prepared/bleached/dyed/printed/finished; fibre composition by dry mass; yarn type/count; weave and construction; area mass in g/m2; usable width; moisture condition at weighing; colour/print technology when applicable; chemical or mechanical finish; performance/quality grade and test basis; production geography; technology and reporting period; packaging treatment; co-product and scrap classification; allocation method |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete. When the product is not printed cotton cloth, the Tiangong UUID remains a category representative identity only and the package shall explicitly state the semantic difference; it shall not relabel the actual product as printed cloth.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Saleable reference fabric | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground quantities to 1 kg of accepted saleable fabric. Exclude cores, wraps, pallets, and other packaging from fabric mass and inventory them separately. Record the weighing basis and moisture condition. |
| `dry_mass_and_moisture` | Yarn, fabric intermediates, and saleable fabric | Mass | kg | Use consistent dry-mass or declared commercial-moisture accounting across the lot. If commercial mass is used, record measured or specified moisture and the conversion used for mass-balance comparison. |
| `area_mass_check` | Saleable fabric | Area, mass, length, and usable width | m2, kg, m, m, g/m2 | Cross-check lot mass against usable length x usable width x measured area mass. Investigate a material mismatch; do not replace measured reference mass with the area calculation without explanation. |
| `composition_basis` | Fibre composition | Mass fraction | % by mass | Report constituent fibre fractions on one declared mass basis and require the total to equal 100% within documented rounding tolerance. |
| `water_accounting` | Wet processes and cleaning | Volume | m3 | Record gross fresh-water intake, internally reused/recycled water, and net water consumption separately; do not subtract water that is merely transferred to another on-site process without documenting the transfer. |
| `energy_accounting` | Electricity, fuels, steam, and heat | Energy or carrier-specific property | kWh, MJ, kg, or m3 | Record purchased electricity, each fuel carrier, imported steam/heat, on-site generation, recovered energy, and exports separately. Apply conversion factors with their source and do not mix lower and higher heating values. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased yarn, processing chemicals, packaging, utilities, and other supplied materials crossing the fabric-production site gate, with their actual supplier, state, and upstream dataset linkage declared |
| starting_condition_role | Foreground fabric manufacturing starts at receipt of yarn and ends at release of saleable woven fabric at the factory gate |
| product_classification_scope | Residual woven cotton fabric category; classification does not force a printed route and requires exclusion of more specific fabric categories before use |
| recursive_input_rule | If an input is another product within this PCR category, record it as a purchased intermediate with an independently modelled upstream dataset and declared route; do not recursively reproduce its manufacturing inside the receiving process |
| upstream_dataset_requirement | Link representative upstream datasets for yarn/fibre supply, chemicals, electricity, fuels/heat, water supply, packaging, transport, and off-site treatment; disclose geography, technology, time, and proxy gaps |
| disclosure | Declare included and excluded route stages, on-site versus off-site wet processing, treatment location, product composition and construction, reference-flow moisture basis, recovered/recycled flows, cut-offs, proxies, and allocation choices |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_route_specific` | Include every process actually performed from supplied yarn through factory-gate release. Mark pretreatment, dyeing, printing, finishing, direct heating, and on-site treatment as conditional rather than assuming the printed representative route. | eu-txt-bat-2022 |
| `boundary_inputs_outputs` | For each included process, inventory material and chemical inputs, water, energy, products, wastes, wastewater, and relevant direct emissions. Maintain a process flow sheet that relates outputs and emissions to their source process. | eu-txt-bat-2022 |
| `boundary_recursive_inputs` | Represent purchased same-category fabric as a linked upstream dataset with its own reference flow and qualifiers; prohibit a self-referential foreground loop. | eu-pef-2021-2279 |
| `boundary_shared_services` | Include directly associated shared utilities, thermal treatment, air-emission control, and wastewater treatment and allocate them using the hierarchy in Section 7. | eu-txt-bat-2022; eu-pef-2021-2279 |
| `boundary_omissions` | Avoid unquantified cut-offs. Any excluded flow or process shall be named, screened for material, energy, and environmental significance, justified, and included in the completeness disclosure. | eu-pef-2021-2279 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `weaving` | Weaving preparation and weaving | `required` | Include yarn receipt, warping, drawing-in, optional sizing, weaving, loom cleaning, and intermediate inspection actually performed at the site | Converts supplied yarn into greige woven fabric | Per 1 kg saleable reference fabric |
| `pretreatment` | Cotton fabric pretreatment | `conditional` | Include when singeing, desizing, washing/scouring, bleaching, mercerising, rinsing, drying, or related preparation occurs within the reporting boundary | Prepares greige fabric for sale or subsequent colouration/finishing | Per 1 kg saleable reference fabric |
| `colouration_printing` | Dyeing or printing | `conditional` | Include the actual dyeing and/or printing technology, fixation, washing, drying, equipment cleaning, and paste management performed within the reporting boundary | Applies colour or printed design; printed cloth is one representative route only | Per 1 kg saleable reference fabric |
| `finishing` | Mechanical, chemical, and thermal finishing | `conditional` | Include only treatments actually applied, such as softening, easy-care, coating within scope, calendaring, raising, sanforising, drying, curing, or heat-setting | Delivers declared handle, dimensions, appearance, or functional performance | Per 1 kg saleable reference fabric |
| `utilities_treatment` | Site utilities and emission/effluent treatment | `conditional` | Include on-site boilers, direct heating, compressed air, water preparation, heat recovery, air abatement, and wastewater treatment that serve included processes | Supplies shared services and records direct site emissions and treatment outputs | Per 1 kg saleable reference fabric |
| `inspection_packaging` | Final inspection, grading, and packaging | `required` | Include final measurement, testing, grading, trimming, roll/bale preparation, and packaging before factory-gate release | Produces accepted saleable reference fabric and identifies off-spec material | 1 kg accepted saleable fabric |

### Process: Weaving preparation and weaving (`weaving`)

#### Inputs

##### Product flows

###### Supplied cotton yarn and declared blend yarns (`yarn_input`)

Record each yarn input by fibre composition, yarn count/type, supplier, lot, and mass. Link supplier datasets and keep blend components distinguishable.

- Selected flow: Cotton yarn or declared blend yarn
- Flow property / unit: Mass / kg
- Amount rule: measured received or issued mass attributable to the production lot, adjusted to the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch`

###### Sizing and weaving preparation chemicals (`weaving_chemicals`)

Record each size, lubricant, antistatic agent, cleaning agent, and other preparation chemical when used; retain product identity and concentration.

- Selected flow: Site-specific sizing or weaving preparation chemical
- Flow property / unit: Mass / kg
- Amount rule: opening stock plus receipts minus closing stock and documented transfers, reconciled to batch dosing records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_weaving_batch`
- Sources: eu-txt-bat-2022

###### Weaving electricity and directly used energy (`weaving_energy`)

Record meter-based electricity and each directly used energy carrier. Shared services may be recorded in `utilities_treatment` and allocated once, but shall not be omitted or double counted.

- Selected flow: Electricity and site-specific energy carrier
- Flow property / unit: Energy / kWh or MJ; carrier-specific property where required
- Amount rule: submetered consumption or documented allocation from a reconciled site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch`
- Sources: eu-txt-bat-2022

##### Waste flows

No default waste input is prescribed. Record returned or externally sourced material as a waste input only when its legal and physical status is waste and the receiving process actually treats it.

##### Elementary flows

Direct elementary inputs are not expected by default. Record site-specific resource withdrawals only when they cross the environment boundary at this process rather than through a water or utility supply process.

#### Outputs

##### Product flows

###### Greige woven fabric intermediate (`greige_fabric`)

Record the mass transferred to subsequent on-site processing or released as greige saleable fabric, with construction, usable width, area mass, and moisture basis.

- Selected flow: Greige woven cotton fabric
- Flow property / unit: Mass / kg
- Amount rule: measured accepted and transferred mass by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch`

##### Waste flows

###### Yarn ends, loom waste, and rejected greige fabric (`weaving_waste`)

Separate internally reusable material, externally recovered co-product, and waste sent to treatment; do not net these outputs against yarn input.

- Selected flow: Site-specific cotton textile residue or waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass by disposition and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_weaving_batch`

##### Elementary flows

No default elementary output is prescribed for weaving. Record measured dust or other direct releases when relevant and not already captured in `utilities_treatment`.

### Process: Cotton fabric pretreatment (`pretreatment`)

#### Inputs

##### Product flows

###### Greige fabric entering pretreatment (`pretreatment_fabric_input`)

Record the transferred greige fabric mass and link it to the weaving output or purchased upstream intermediate.

- Selected flow: Greige woven cotton fabric
- Flow property / unit: Mass / kg
- Amount rule: measured batch input mass on the declared moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_batch`

###### Pretreatment water and chemicals (`pretreatment_materials`)

Record water and each desizing, scouring, bleaching, mercerising, pH-control, washing, or cleaning chemical actually used. Keep water and chemical rows separable in the data package even when summarized by this role.

- Selected flow: Process water and site-specific pretreatment chemical
- Flow property / unit: Volume / m3 for water; Mass / kg for chemicals
- Amount rule: meter or batch-controller records for water; reconciled dosing or inventory records for each chemical
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_batch`
- Sources: eu-txt-bat-2022

###### Pretreatment electricity and heat (`pretreatment_energy`)

Record electricity, steam, heat, and directly combusted fuels separately, including recovered energy used by the process.

- Selected flow: Electricity, steam, heat, or site-specific fuel
- Flow property / unit: Energy / kWh or MJ; carrier-specific property where required
- Amount rule: submetered or batch-attributed consumption reconciled to site totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_batch`
- Sources: eu-txt-bat-2022

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

Record direct groundwater or surface-water withdrawal only when it crosses the environment boundary here; otherwise use the supplied-water product input.

#### Outputs

##### Product flows

###### Prepared cotton fabric (`prepared_fabric`)

Record the mass and declared state of desized, scoured, bleached, mercerised, or otherwise prepared fabric transferred or sold.

- Selected flow: Prepared woven cotton fabric
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass by batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_batch`

##### Waste flows

###### Pretreatment wastewater and separated residues (`pretreatment_wastewater`)

Record wastewater volume and relevant load sent to on-site or off-site treatment, plus separately measured residues and empty chemical containers by destination.

- Selected flow: Wastewater from cotton pretreatment and site-specific residues
- Flow property / unit: Volume / m3 for wastewater; Mass / kg for residues
- Amount rule: flow-meter or batch volume and measured/analysed pollutant load; weigh residues by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pretreatment_batch`
- Sources: eu-txt-bat-2022

##### Elementary flows

Record direct emissions only when released before a separately modelled treatment process; avoid duplicating the same pollutant as both wastewater-to-treatment and final emission to water.

### Process: Dyeing or printing (`colouration_printing`)

#### Inputs

##### Product flows

###### Fabric entering dyeing or printing (`colouration_fabric_input`)

Record the actual prepared or greige fabric input and its route state. Printing is conditional and shall not be inferred from the representative flow UUID.

- Selected flow: Woven cotton fabric intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_colouration_batch`

###### Dyes, pigments, printing pastes, auxiliaries, and water (`colouration_materials`)

Record each colourant, binder, thickener, fixation agent, auxiliary, printing paste component, cleaning chemical, and water input. Identify the actual technology and retain concentration and safety-data identifiers.

- Selected flow: Site-specific colourant, printing chemical, auxiliary, and process water
- Flow property / unit: Mass / kg for chemicals; Volume / m3 for water
- Amount rule: recipe/dosing records reconciled with inventory movement; metered or batch-controlled water including equipment cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_colouration_batch`
- Sources: eu-txt-bat-2022

###### Dyeing or printing energy (`colouration_energy`)

Record electricity, steam, heat, and directly used fuels for application, fixation, washing, drying, and equipment cleaning.

- Selected flow: Electricity, steam, heat, or site-specific fuel
- Flow property / unit: Energy / kWh or MJ; carrier-specific property where required
- Amount rule: submetered or batch-attributed use reconciled to site totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_colouration_batch`
- Sources: eu-txt-bat-2022

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Dyed or printed fabric (`coloured_fabric`)

Record accepted output mass, colour or print route, fixation and wash state, and applicable quality-test result.

- Selected flow: Dyed or printed woven cotton fabric
- Flow property / unit: Mass / kg
- Amount rule: measured accepted batch output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_colouration_batch`

##### Waste flows

###### Colouration wastewater, residual paste, and cleaning residues (`colouration_waste`)

Measure wastewater and segregate recovered/reused paste from residual paste and other wastes sent to treatment. Do not assume recovery or reuse without records.

- Selected flow: Dyeing/printing wastewater and site-specific colouration residue
- Flow property / unit: Volume / m3 for wastewater; Mass / kg for paste and solids
- Amount rule: metered discharge plus measured residues by type and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_colouration_batch`
- Sources: eu-txt-bat-2022

##### Elementary flows

###### Direct colouration and printing emissions to air (`colouration_air_emissions`)

Record relevant measured releases from printing, fixation, drying, and cleaning after any process-integrated controls; the pollutant set shall follow the chemical inventory and permit relevance assessment.

- Selected flow: Site-specific direct emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured concentration x validated exhaust volume over the production period, or another documented permit-compliant mass method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_colouration_batch`
- Sources: eu-txt-bat-2022

### Process: Mechanical, chemical, and thermal finishing (`finishing`)

#### Inputs

##### Product flows

###### Fabric entering finishing (`finishing_fabric_input`)

Record the fabric state and mass entering each finishing sequence.

- Selected flow: Woven cotton fabric intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured batch input mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`

###### Finishing chemicals, water, and energy (`finishing_inputs`)

Record each applied finish, carrier or process water, and electricity/heat input for mechanical treatment, application, drying, curing, or heat-setting.

- Selected flow: Site-specific finishing chemical, process water, electricity, steam, heat, or fuel
- Flow property / unit: Mass / kg, Volume / m3, or Energy / kWh or MJ as applicable
- Amount rule: recipe/dosing and metering records reconciled to batch and site totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: eu-txt-bat-2022

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Finished woven fabric (`finished_fabric`)

Record accepted output mass and every claimed chemical, mechanical, dimensional, appearance, or functional finish.

- Selected flow: Finished woven cotton fabric
- Flow property / unit: Mass / kg
- Amount rule: measured accepted batch output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`

##### Waste flows

###### Finishing wastewater and residues (`finishing_waste`)

Record wastewater, residual finish, filter media, containers, and other treatment-bound residues separately by destination.

- Selected flow: Finishing wastewater and site-specific residue
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: metered or weighed amount by type and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_batch`
- Sources: eu-txt-bat-2022

##### Elementary flows

###### Direct finishing and thermal-treatment emissions (`finishing_air_emissions`)

Record relevant direct air releases after abatement using a pollutant list derived from applied chemicals and thermal operations.

- Selected flow: Site-specific direct emission to air
- Flow property / unit: Mass / kg
- Amount rule: measured concentration x validated exhaust volume over the production period, or another documented permit-compliant mass method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finishing_batch`
- Sources: eu-txt-bat-2022

### Process: Site utilities and emission/effluent treatment (`utilities_treatment`)

#### Inputs

##### Product flows

###### Utility fuels, purchased energy, treatment chemicals, and make-up water (`utility_inputs`)

Record each carrier and treatment material separately, including boiler fuel, imported electricity/steam, water-treatment chemicals, wastewater-treatment chemicals, and make-up water.

- Selected flow: Site-specific fuel, purchased energy, treatment chemical, or supplied water
- Flow property / unit: Carrier-specific mass/volume or Energy / kWh or MJ
- Amount rule: supplier invoice and meter/stock reconciliation, allocated only after direct submetering is exhausted
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_treatment`
- Sources: eu-txt-bat-2022

##### Waste flows

###### Wastewater received for on-site treatment (`wastewater_to_site_treatment`)

Link wastewater inputs to the generating process without duplicating their volume or pollutant load.

- Selected flow: Textile-process wastewater to treatment
- Flow property / unit: Volume / m3 and pollutant-specific Mass / kg
- Amount rule: reconciled inflow volume and analysed load by source stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_treatment`
- Sources: eu-txt-bat-2022

##### Elementary flows

Direct water withdrawal is recorded here when the site abstracts water from the environment.

#### Outputs

##### Product flows

###### Recovered water or energy transferred internally (`recovered_utility`)

Record internal recovery as a tracked transfer that reduces gross demand; do not create an avoided-burden credit unless the chosen downstream model explicitly supports it.

- Selected flow: Recovered process water, condensate, or heat
- Flow property / unit: Volume / m3 or Energy / MJ
- Amount rule: metered transfer actually reused within the included system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_treatment`
- Sources: eu-txt-bat-2022

##### Waste flows

###### Treatment sludge and abatement residues (`treatment_residue`)

Record dry and wet mass basis, composition where required, hazardous status, and treatment destination.

- Selected flow: Wastewater-treatment sludge or air-abatement residue
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched mass with moisture or dry-solids content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_treatment`
- Sources: eu-txt-bat-2022

##### Elementary flows

###### Treated effluent and utility emissions (`treated_direct_emissions`)

Record final pollutant releases to water and air after treatment, including direct combustion emissions, without also reporting the same load as an untreated direct release.

- Selected flow: Site-specific elementary emission to water or air
- Flow property / unit: Mass / kg
- Amount rule: measured concentration x validated discharge/exhaust volume over the reporting period, with below-detection treatment documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utilities_treatment`
- Sources: eu-txt-bat-2022

### Process: Final inspection, grading, and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Fabric entering final release checks (`final_fabric_input`)

Record the mass, length, width, area mass, route state, and lot identity of fabric submitted for final inspection.

- Selected flow: Woven cotton fabric for final inspection
- Flow property / unit: Mass / kg
- Amount rule: measured submitted lot mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release`

###### Packaging materials (`packaging_input`)

Record each core, wrap, strap, label, pallet, and other packaging component separately and exclude it from reference fabric mass.

- Selected flow: Site-specific packaging material
- Flow property / unit: Mass / kg or Item / unit as applicable
- Amount rule: measured or bill-of-material quantity reconciled to released rolls or bales
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release`

##### Waste flows

No default waste input is prescribed.

##### Elementary flows

No default elementary input is prescribed.

#### Outputs

##### Product flows

###### Saleable other woven fabric of cotton (`saleable_cotton_woven_fabric`)

This is the quantitative reference output. Record the actual product name and qualifiers; use "Printed cotton cloth" only when the product is in fact printed cloth matching that representative route.

- Selected flow: Printed cotton cloth `00665421-6d29-46d6-83cb-28766e3dec4b` as representative identity; actual product description required
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg accepted saleable fabric after normalization, excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_final_release`

##### Waste flows

###### Off-spec fabric, trimmings, and packaging waste (`final_release_waste`)

Record each material by actual disposition. Reworked material remaining inside the same lot is an internal transfer, not an output; externally recovered material and waste shall remain distinct.

- Selected flow: Site-specific textile residue or packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured mass by material and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg saleable reference fabric
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_release`

##### Elementary flows

No default elementary output is prescribed.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | Dedicated lines, batch steps, meters, and treatment trains | Avoid allocation first by subdividing processes and using direct batch, line, meter, or treatment records attributable to the reference fabric. Do not pool route-specific wet processing with unprocessed greige production when separable records exist. | eu-pef-2021-2279 |
| `allocation_physical` | Unavoidable shared operations with multiple fabric outputs | When subdivision or defensible system expansion is not possible, use a documented causal physical relationship such as machine time, metered energy, liquor volume, treatment load, or processed mass. Select the driver that best explains consumption or emission formation, not automatically product mass. | eu-pef-2021-2279 |
| `allocation_economic_last_resort` | Multi-output operation lacking a defensible physical relationship | Use revenue-based allocation only as a last resort. Record product quantities, prices, currency, geography, price period, treatment of zero/negative values, and sensitivity to price variation. | eu-pef-2021-2279 |
| `allocation_residues` | Yarn waste, fabric scrap, recovered paste, sludge, and off-spec material | Classify each output before allocation. Internal reuse is a tracked internal transfer; an externally marketable output is a co-product handled by the hierarchy; a waste output carries treatment according to the selected waste model. Do not claim avoided burdens in the foreground inventory without an explicit downstream method. | eu-pef-2021-2279; eu-txt-bat-2022 |
| `allocation_shared_treatment` | Utilities, wastewater treatment, and air-abatement systems | Prefer process-specific meters and pollutant loads. Otherwise allocate electricity/heat by causal demand and treatment burdens by measured volume and relevant pollutant load; disclose any remaining shared-site allocation. | eu-txt-bat-2022; eu-pef-2021-2279 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_weaving_batch` | `weaving` | Yarn, chemicals, energy, greige output, and weaving residues | Batch issue/return, stock, meter, production, and waste records | lot_id; yarn_id/composition/count; opening/receipt/issue/return/closing mass; chemical_id/concentration; meter_start/end; greige_mass; width; length; area_mass; moisture; residue_mass/disposition | Reconcile warehouse and batch records with calibrated scales and electricity/energy meters | kg; kWh; MJ; m; m2; g/m2; % | Each lot and monthly reconciliation | Representative continuous 12-month period or full shorter campaign with seasonality limitation | Every included weaving line at the reporting site | Sum attributable records, resolve stock changes and rework, then normalize with `calc_reference_normalization` | Scale/meter calibration; signed stock reconciliation; lot traveller; production and waste tickets |
| `cp_pretreatment_batch` | `pretreatment` | Fabric input/output, water, chemicals, energy, wastewater, and residues | Recipe, batch-controller, meter, laboratory, stock, and dispatch records | batch_id; input/output_mass; moisture; water_intake/reuse/discharge; chemical_id/concentration/dose; electricity/steam/heat/fuel; wastewater_volume/analysis; residue_mass/destination | Read batch controls and submeters; reconcile chemical inventory and laboratory samples | kg; m3; kWh; MJ; mg/L or kg pollutant | Each batch; discharge sampling per applicable permit; monthly reconciliation | Representative continuous 12-month period or full campaign | Every included pretreatment line and linked treatment stream | Sum by route and lot; keep gross/reused/net water distinct; normalize to accepted reference output | Meter calibration; recipe authorization; laboratory QA/QC; mass and water balance; waste manifests |
| `cp_colouration_batch` | `colouration_printing` | Fabric, colourants/pastes/auxiliaries, water, energy, wastes, and emissions | Recipe, dosing, meter, paste-return, laboratory, exhaust, and waste records | batch/design_id; technology; fabric_mass; chemical_id/concentration/dose; paste_prepared/returned/reused/waste; water; electricity/heat; wastewater_volume/analysis; exhaust_flow/concentration/time; output_mass; test_result | Capture machine recipe and dosing data, meter readings, paste reconciliation, and validated sampling | kg; m3; kWh; MJ; mg/L; mg/Nm3; Nm3; h | Each batch/design; emission sampling per permit; monthly reconciliation | Representative continuous 12-month period or full campaign | Every included dyeing/printing/fixation/washing/drying line | Reconcile prepared paste and chemicals; calculate measured emission loads; normalize to accepted output | Calibrated dosing/meter systems; laboratory QA/QC; paste balance; sampling reports; lot quality certificate |
| `cp_finishing_batch` | `finishing` | Fabric, finish chemicals, water, energy, residues, and air emissions | Recipe, dosing, meter, line, laboratory, and waste records | batch_id; finish/function; input/output_mass; chemical_id/concentration/dose; water; electricity/steam/heat/fuel; exhaust_flow/concentration/time; wastewater/residue; process_temperature/time; quality_test | Capture line recipes and meters, retain chemical identity, and use validated emission/test methods | kg; m3; kWh; MJ; mg/Nm3; Nm3; h; degC | Each batch; sampling per permit; monthly reconciliation | Representative continuous 12-month period or full campaign | Every included finishing and thermal-treatment line | Aggregate only equivalent finish routes; calculate loads and normalize to accepted output | Calibration; recipe approval; safety data; sampling QA/QC; product test report |
| `cp_utilities_treatment` | `utilities_treatment` | Fuels, purchased/generated energy, water, treatment materials, wastewater loads, recovered utilities, sludge, and direct emissions | Invoice, meter, stock, treatment log, laboratory, and dispatch records | carrier_id; quantity; heating_value_basis; electricity/steam/heat import/generation/export; water_withdrawal/supply/reuse; chemical_id/dose; inflow/outflow_volume/concentration; exhaust_flow/concentration; sludge_mass/dry_solids/destination | Reconcile site and submeter totals; use flow-proportional or documented representative sampling and traceable laboratory methods | kg; m3; kWh; MJ; mg/L; mg/Nm3; kg pollutant; % solids | Continuous/daily meters, batch logs, monthly balance, sampling per permit | Same period as production data | All utility and treatment assets serving included processes | Subtract documented exports only once; allocate after direct attribution; calculate loads and normalize | Meter/calibration records; fuel certificates; laboratory QA/QC; permit reports; treatment and waste logs |
| `cp_final_release` | `inspection_packaging` | Submitted/accepted fabric, qualifiers, quality results, packaging, off-spec material, and reference mass | Lot traveller, scale, dimensional, test, bill-of-material, grading, and dispatch records | lot_id; product_name; composition; route; yarn/weave; input/accepted/rejected_mass; moisture; length; usable_width; area_mass; colour/print/finish; test_method/result/grade; packaging_id/mass; disposition | Calibrated weighing and dimensional measurement; applicable verified quality testing; dispatch reconciliation | kg; m; m2; g/m2; %; test-specific unit | Every released lot | Same period as process inventory | All released reference products at the reporting site | Sum accepted mass only; retain rejected/reworked quantities separately; set normalized output to exactly 1 kg | Scale and dimensional calibration; test report; signed release certificate; packaging BOM; dispatch record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground inventory amount | normalized quantity = quantity attributable to the included product / accepted saleable fabric mass on the reference moisture basis | Attributable quantity; accepted saleable fabric mass; moisture conversion where used | Quantity per 1 kg reference fabric |  |
| `calc_area_mass_crosscheck` | Final fabric lot | calculated mass kg = usable length m x usable width m x area mass g/m2 / 1000; compare with calibrated measured mass and investigate material discrepancy | Length; usable width; area mass; measured mass | Mass consistency result and discrepancy |  |
| `calc_net_water` | Each wet process and site total | net water consumption = gross external water input - water exported from the boundary; report internally reused/recycled water separately and do not subtract it twice | Water intake; internal reuse/recycle; export; discharge; stock change where relevant | Gross, reused/recycled, net, and discharged water per reference flow | eu-txt-bat-2022 |
| `calc_direct_emission_load` | Measured wastewater and air releases | pollutant load = representative concentration x validated discharge or exhaust volume for the same period, with unit conversion and below-detection treatment documented | Concentration; matched volume/flow and duration; detection limit; operating period | Pollutant mass per reference flow | eu-txt-bat-2022 |
| `calc_mass_balance` | Yarn-to-fabric and chemical/paste stages | input + opening stock = accepted output + residues/wastes + exports/transfers + closing stock + documented moisture change; report unresolved difference rather than forcing closure | Batch and stock masses; transfers; moisture basis | Stage mass balance and unexplained difference | eu-txt-bat-2022 |
| `calc_allocation` | Shared process or facility | Apply Section 7 in order: subdivision/system expansion where defensible, causal physical relationship, then economic allocation as last resort; allocation factors shall sum to 1 within documented rounding | Direct records; causal driver quantities; co-product quantities; prices only if needed | Allocated inventory and disclosed factor set | eu-pef-2021-2279 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and intermediates | Preserve lot-level composition, yarn, weave/construction, area mass, width, route, colour/print, finish, moisture basis, grade, and actual product name. Explicitly state whether the product matches or differs from printed cotton cloth. | Product specification; lot traveller; laboratory/test report; release certificate |
| `dq_primary_period` | Foreground activity data | Use a continuous representative 12-month period where operations are year-round. A shorter campaign is allowed only when it covers the full campaign and discloses seasonality, downtime, and representativeness limits. | Dated meter, production, stock, and dispatch series; coverage statement |
| `dq_site_coverage` | Included foreground boundary | Include all lines, utilities, and treatment assets serving the declared product route, or disclose and quantify the excluded share and proxy method. | Site process map; line list; meter map; production reconciliation |
| `dq_completeness` | Inputs, outputs, wastes, and direct emissions | Screen all process inputs and outputs; name and justify omissions and show that the same wastewater or emission load is not counted both before and after treatment. | Input-output inventory; chemical register; mass/water/energy balances; omission log |
| `dq_measurement` | Mass, water, energy, and emission data | Retain calibration status, sampling method, laboratory QA/QC, detection-limit treatment, and unit conversions. Prefer direct batch/line meters before shared-site allocation. | Calibration certificates; sampling plan; laboratory reports; conversion-factor register |
| `dq_representativeness` | Upstream and proxy datasets | Assess and disclose technological, geographical, temporal, and precision representativeness, plus methodological consistency and completeness. | Dataset metadata and data-quality assessment |
| `dq_traceability` | Calculated and allocated values | Preserve raw record identifiers, formulas, allocation drivers/factors, source identifiers, reviewer, and reproducible calculation version. | Calculation workbook or script output; approval record; source register |

## 9. Validation Rules

| rule_id | Check | Requirement | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Product identity and category | Fail if the data package lacks actual product name, fibre composition, weave/construction, route, area mass, usable width, moisture basis, finish/grade, or evidence that more specific product categories were considered. | unsd-cpc-3-0 |
| `validation_representative_route` | Printed-flow representativeness | Fail if an unprinted or otherwise semantically different fabric is described as Printed cotton cloth without an explicit representative-identity limitation and actual product description. |  |
| `validation_reference_flow` | Quantitative reference | Fail if accepted fabric output is not exactly 1 kg after normalization, if packaging is included in fabric mass, or if the Mass flow property, unit group, or kg unit differs from Section 3. |  |
| `validation_route_coverage` | Process coverage | Fail if any performed weaving preparation, wet processing, dyeing/printing, finishing, utility, treatment, inspection, or packaging stage is omitted without quantified justification. | eu-txt-bat-2022 |
| `validation_inventory_balance` | Material, water, and energy accounting | Require reconciled yarn/fabric mass balance; gross/reused/net water reporting for wet routes; and separately traceable electricity, fuels, steam/heat, recovery, and exports. Flag unexplained differences and double counting. | eu-txt-bat-2022 |
| `validation_chemicals_emissions` | Chemicals, wastewater, and air emissions | Require route-specific chemical identity and quantity, measured wastewater volume/load, relevant direct air releases, treatment destination, and non-duplication of pre- and post-treatment emissions. | eu-txt-bat-2022 |
| `validation_allocation` | Multi-output and shared services | Fail if allocation is used before available subdivision, lacks a causal or last-resort economic basis, has factors that do not sum to 1 within disclosed rounding, or treats waste/reuse/co-products inconsistently. | eu-pef-2021-2279 |
| `validation_quality` | Fitness and release quality | Require declared applicable performance/quality tests and results for the actual product. Do not impose printed-fabric or EU Ecolabel thresholds on products for which they are not applicable. | eu-ecolabel-textiles-2014-350 |
| `validation_data_quality` | Temporal, geographic, technological, and precision quality | Require coverage period, site/line scope, primary/proxy split, representativeness assessment, calibration/sampling evidence, source traceability, and an explicit limitations statement. | eu-pef-2021-2279 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate dataset for the declared woven cotton fabric route, suitable for later reviewed publication as a secondary or background dataset |
| downstream_use | `secondary_dataset`; `background_dataset`; source for `process` and `lifecyclemodel` projections when all route and quality qualifiers are preserved |
| allowed_use | Product-specific cradle-to-gate or life-cycle models that need a factory-gate woven cotton fabric input and can accept the declared composition, construction, route, geography, technology, period, allocation, and data-quality profile |
| excluded_use | A generic market-average for all cotton fabrics; automatic use for knitted/nonwoven/special fabrics; substitution for cotton cultivation, spinning, garment manufacture, use, or end-of-life; representing every CPC 26690 product as printed cloth; comparative claims without compatible functional and quality specifications |
| required_metadata | Canonical PCR id; actual product name; CPC context; composition; yarn and weave/construction; area mass; usable width; moisture basis; actual greige/pretreatment/dyeing/printing/finishing route; performance grade and tests; reference flow; site geography; technology; reporting period; process map; upstream dataset links; treatment; allocation; packaging; reviewer and calculation version |
| required_quality_disclosure | Primary versus secondary data share; line/site and temporal coverage; mass/water/energy reconciliation; meter and sampling quality; chemical and emissions coverage; proxy representativeness; omissions; allocation sensitivity; limitations of the printed representative identity |
| update_trigger | Material change to product composition/construction, route, site or equipment, printing/finishing chemistry, energy/water supply, treatment, allocation, classification, product-flow identity, regulation or BAT basis, or foreground data older than the organization's review interval |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 resources, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-11) | CPC classification context and residual category title |
| `eu-txt-bat-2022` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI: https://data.europa.eu/eli/dec_impl/2022/2508/oj (accessed through EUR-Lex; retrieved 2026-08-11) | Process decomposition; input-output inventory; cotton pretreatment; printing and finishing; water, energy, chemicals, emissions, monitoring, recovery, and treatment records |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, ELI: https://data.europa.eu/eli/reco/2021/2279/oj (accessed through EUR-Lex; retrieved 2026-08-11) | Reference-flow discipline; multifunctionality hierarchy; cut-off disclosure; completeness, representativeness, and data-quality requirements |
| `eu-ecolabel-textiles-2014-350` | `standard` | European Commission, Commission Decision 2014/350/EU establishing EU Ecolabel criteria for textile products, consolidated text: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02014D0350-20201201 (retrieved 2026-08-11) | Examples of route- and product-specific fitness-for-use attributes for intermediate woven fabric, including dimensional change and colour-fastness testing; not a universal threshold for this PCR |
