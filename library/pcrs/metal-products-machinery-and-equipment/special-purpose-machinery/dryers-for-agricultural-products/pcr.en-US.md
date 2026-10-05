---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dryers-for-agricultural-products
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Dryers for agricultural products

## 1. Scope and Applicability

This PCR governs factory production of complete drying equipment designed principally for agricultural products, including batch/recirculating and continuous-flow grain/seed dryers and dedicated fruit, vegetable or leaf-product drying cabinets. Direct/indirect combustion, electric resistance, steam/water heat-exchanger and passive or assisted solar designs are conditional configurations, not a compulsory universal BOM. A leaf-product or hybrid design needs actual drawings and supplier-state evidence; grain-tower construction is not its proxy. FAO provides a real nonmetal passive-solar counterexample. Sources establish architecture, not factory quantities. [cimbria-drying-2024; opico-installations-v2; fao-fruit-processing-2008]

Exclude crop growing, grain/fruit drying service, dried agricultural output, customer-season energy, a whole silo/processing plant, civil works, general household appliances, wood/pulp/paper and nonagricultural dryers. The reviewed CPC boundary is agricultural-purpose 44518 versus other-material 44912; the energy source does not determine the category. For mixed-use dryers document principal intended agricultural purpose, independent delivery and actual supplied modules; unresolved purpose remains a classification-review gap rather than silently treating it as agricultural.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.dryers-for-agricultural-products |
| classification_refs | CPC 3.0:44518 |
| covered_products | Agricultural-purpose batch, continuous-flow and cabinet dryers, with actual delivered options |
| excluded_products | Other-material dryers; drying services; dried crops; complete processing plants |
| representative_product | One accepted complete dryer of one declared configuration; not a universal grain-tower model |
| production_route | Actual make/buy fabrication, conditional finish, assembly, acceptance and dispatch |
| market_state | Factory-gate complete equipment including stated supplied modules and retained initial charge |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide complete agricultural-product drying equipment |
| How much | 1 kg of accepted equipment net mass, normalized from actual machines |
| How well | Conform to declared crop compatibility, chamber/column geometry, heating/airflow design, supplied controls and acceptance specification; no performance equivalence across configurations |
| How long or cycle | One manufacture-to-factory-gate delivery; service life and field duty are separate declared scenarios |
| reference_flow_link | finished_dryer |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted complete dryer for agricultural products |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | crop/product family; principal intended purpose; model/revision; batch/continuous/cabinet; direct/indirect heating; fan/passive airflow; energy interface; food-contact grades; modules included; make/buy boundary; retained charge; net-mass acceptance; period and factory geography |

Declare all qualifiers in the dataset. Per-kg production normalization is not a claim of equal drying service. The product-flow UUID remains unresolved; verified mass property/unit support does not resolve equipment identity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| material_basis | physical material/species records | Mass | kg | Use actual grade, chemical/species and measured moisture/assay on each term. Gross steel, coating, wet sludge or wastewater is not contained iron, zinc, solvent or dry matter. |
| energy_basis | utility and test energy | Energy | MJ | Retain measured kWh and convert electricity by 3.6 MJ/kWh; each fuel uses its own measured quantity and calorific basis. Net purchased steam energy follows cp_energy; never assume kg equals MJ. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual incoming grade-specific stock and completed purchased modules at documented supplier processing state |
| starting_condition_role | foreground input boundary |
| product_classification_scope | Principally agricultural-product drying equipment; other-material and unresolved mixed-purpose equipment separately reviewed |
| recursive_input_rule | A purchased completed agricultural-dryer module carries its supplier dataset once; do not recursively duplicate its fabrication, fan, burner, motor, coating or charge. |
| upstream_dataset_requirement | Match actual flow grade/state, supplier geography, technology and delivery interface; an unresolved UUID is not an upstream provider. |
| disclosure | Define supplied module list, factory gate, transport legs, test boundary, excluded site civil works, net mass and reporting period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| factory_gate | all processes | Include incoming upstream supplies, actual transport, factory fabrication/finish/assembly, acceptance testing, rejects, rework, controls, waste treatment and packaging through gate; later crop-drying operations excluded. |  |
| make_buy | components | Record make/buy matrix below. Complete purchased assemblies include embodied materials/motors/charges once; own-making records constituent inputs, process energy and wastes instead. |  |
| test_scope | test | Separate actual consumed test fuel/crop/water from measured retained initial charge. Heat rating, crop throughput and moisture removal are operating descriptors, never factory energy or equipment-mass factors. | cimbria-drying-2024; opico-installations-v2 |

### Make/buy and supplied-module matrix

| Assembly | Make | Buy | Boundary decision |
| --- | --- | --- | --- |
| Frame/chamber/column/duct/tray | Actual grade-specific shaping/joining and finish | Completed panel/module provider once | Galvanized stock includes supplier zinc; no added site plating unless actually performed |
| Fan/burner/heater/exchanger | Actual internals, motor, fuel train, assembly and tests | Complete purchased assembly once | Heating options conditional; passive solar needs none |
| Control/intake/discharge/dust separation | Actual wiring/control and mechanical fabrication | Supplied complete module once | External silos and customer conveyors excluded unless explicit delivered equipment scope |
| Solar cabinet/collector | Actual wood/glass/polymer/mesh construction and finish | Completed cabinet/collector once | Source design is counterexample, not default recipe; actual grade/species supplier records required |
| Initial retained charge | Measured actual additional charge | Embedded supplier charge once | Include only shipped retained charge in net equipment mass; consumed/drained trial charge stays test exchange |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| fabrication | Metal fabrication | conditional | Actual metal frame, chamber, duct, tray or conveying part made on site | foreground | per 1 kg reference flow |
| solar | Solar cabinet fabrication | conditional | Actual agricultural solar cabinet or collector made on site | foreground | per 1 kg reference flow |
| finish | Surface treatment | conditional | Actual site cleaning, powder or liquid coating; supplied prefinished parts bypass these operations | foreground | per 1 kg reference flow |
| assembly | Equipment assembly | required | Every delivered configuration; passive solar dryers do not require powered assemblies | foreground | per 1 kg reference flow |
| test | Factory acceptance testing | required | Actual electrical, mechanical, heating or leak tests; include crop trials only if actually conducted before gate | foreground | per 1 kg reference flow |
| services | Residual factory services | conditional | Only measured unassigned residual after process assignments | foreground | per 1 kg reference flow |
| dispatch | Acceptance and dispatch | required | Delivered equipment and its actual packaging | foreground | per 1 kg reference flow |

Cards are conditional candidate exchanges, not default composition. A dataset adds separate cards for every actual uncovered grade, crop, chemical, polymer, fuel, packaging component, waste and emitted species/compartment. Keep absent (not_applicable with evidence), measured zero and unknown distinct. Each transported supply or waste needs its actual mass-distance leg, mode and provider in a separate transport exchange; no generic bundled transport factor.

### Process: Metal fabrication (`fabrication`)

#### Inputs

##### Product flows

###### S235JR carbon-steel plate (`carbon_plate`)

Only where drawing and mill certificate specify this grade; never a default machine BOM.

- Selected flow: S235JR carbon-steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### DX51D+Z galvanized steel sheet (`galvanized_sheet`)

Only actual purchased galvanized-sheet grade; upstream zinc coating included once, not a site galvanizing assumption.

- Selected flow: DX51D+Z galvanized steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cimbria-drying-2024`

###### AISI 304 stainless-steel sheet (`stainless_sheet`)

Only actual certified food-contact or corrosion-resistant design; other grades need separate cards.

- Selected flow: AISI 304 stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### DOCOL 1200 steel plate (`wear_plate`)

Only actual wear-resistant option; retain supplier chemistry and state, not an ordinary-steel substitution.

- Selected flow: DOCOL 1200 steel plate
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cimbria-drying-2024`

###### ER70S-6 welding wire (`weld_wire`)

Only actual carbon-steel weld procedure; stainless filler requires its own grade card.

- Selected flow: ER70S-6 welding wire
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### Argon shielding gas (`argon`)

Only actual argon supply; each mixed-gas constituent or certified supplied mixture is separately identified.

- Selected flow: Argon shielding gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### Mineral-oil metalworking fluid, supplied formulation (`cutting_oil`)

Only actual formulation and measured issued fluid; concentration and water tracked separately.

- Selected flow: Mineral-oil metalworking fluid, supplied formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### Process water (`fabrication_water`)

Only actual cooling or cleaning supply; internal return is a paired transfer.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources:

###### Alternating current (`fabrication_electricity`)

Only CN <1 kV grid-average user-side supply matching actual provider; actual process submeter. Services includes only unassigned residual. Other voltage/geography requires another verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Segregated S235JR steel offcuts (`steel_scrap`)

Only actual segregated external waste; retain grade, moisture, assay and documented treatment.

- Selected flow: Segregated S235JR steel offcuts
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Segregated AISI 304 stainless-steel offcuts (`stainless_scrap`)

Only actual segregated external waste; retain grade, moisture, assay and documented treatment.

- Selected flow: Segregated AISI 304 stainless-steel offcuts
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Segregated DX51D+Z sheet offcuts (`galvanized_scrap`)

Only actual segregated external waste; retain grade, moisture, assay and documented treatment.

- Selected flow: Segregated DX51D+Z sheet offcuts
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Spent mineral-oil metalworking emulsion (`spent_fluid`)

Only actual segregated external waste; retain grade, moisture, assay and documented treatment.

- Selected flow: Spent mineral-oil metalworking emulsion
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Iron-containing particulate matter to air (`weld_dust`)

Only actual post-control release; measure particulate mass and its own iron assay, not gross dust as iron.

- Selected flow: Iron-containing particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Solar cabinet fabrication (`solar`)

#### Inputs

##### Product flows

###### Kiln-dried Scots pine board (`pine_board`)

Conditional candidate wood design only if actual Pinus sylvestris specification confirms it; FAO wood architecture does not prescribe a species.

- Selected flow: Kiln-dried Scots pine board
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `fao-fruit-processing-2008`

###### UV-stabilized polyethylene glazing film (`pe_glazing`)

Only actual polyethylene cover grade; thickness, additives and service interface require supplier specification.

- Selected flow: UV-stabilized polyethylene glazing film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `fao-fruit-processing-2008`

###### Soda-lime glass glazing (`glass_glazing`)

Only actual glass-lid or collector design; distinguish it from polymer film.

- Selected flow: Soda-lime glass glazing
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `fao-fruit-processing-2008`

###### AISI 304 stainless-steel tray mesh (`solar_mesh`)

Only actual tray specification; other mesh or woven-tray designs need their own physical identity.

- Selected flow: AISI 304 stainless-steel tray mesh
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`solar_electricity`)

Only CN <1 kV grid-average user-side supply matching actual provider; actual process submeter. Services includes only unassigned residual. Other voltage/geography requires another verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Scots pine wood offcuts (`wood_offcuts`)

Only the specified wood route; separate coating contamination and treatment.

- Selected flow: Scots pine wood offcuts
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Polyethylene film trim (`pe_trim`)

Only actual cut film, separate from reused pieces and rejected glass.

- Selected flow: Polyethylene film trim
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

### Process: Surface treatment (`finish`)

#### Inputs

##### Product flows

###### Sodium hydroxide (`naoh`)

Only actual alkaline cleaning; collect active NaOH and solution-water separately, with actual concentration.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### Isopropanol (`ipa`)

Only verified site solvent and SDS; no assumed cleaning recipe.

- Selected flow: Isopropanol
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `epa-metal-coating-2002`

###### Xylene (`xylene`)

Only actual cleaning/thinner formulation; preserve isomer/composition evidence.

- Selected flow: Xylene
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `epa-metal-coating-2002`

###### Epoxy-polyester powder coating, supplied formulation (`powder`)

Only actual selected supplier powder; retain polymer, pigment and filler fractions, no default formulation.

- Selected flow: Epoxy-polyester powder coating, supplied formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### Carbon-black pigmented acrylic coating, supplied formulation (`black_coating`)

Only actual collector/cabinet black finish with this verified chemistry; black colour alone does not prove this formulation.

- Selected flow: Carbon-black pigmented acrylic coating, supplied formulation
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `fao-fruit-processing-2008`

###### Process water (`finish_water`)

Only actual make-up/rinse supply, no double counting water already in purchased formulation.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources:

###### Alternating current (`finish_electricity`)

Only CN <1 kV grid-average user-side supply matching actual provider; actual process submeter. Services includes only unassigned residual. Other voltage/geography requires another verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Waste flows

###### Epoxy-polyester coating sludge (`coating_sludge`)

Only actual wet residue; retain moisture and separate metal, polymer and solvent assays.

- Selected flow: Epoxy-polyester coating sludge
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Sodium-hydroxide cleaning wastewater (`alkaline_wastewater`)

Only actual discharge to identified treatment provider; dissolved species, solids and water separately reconciled.

- Selected flow: Sodium-hydroxide cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Isopropanol-loaded activated carbon (`spent_carbon`)

Only actual capture media; retained solvent remains a waste constituent, capture is not destruction.

- Selected flow: Isopropanol-loaded activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Isopropanol to air (`ipa_air`)

Only actual species and air release after controls; include fugitive and curing points without inventing an air residual.

- Selected flow: Isopropanol to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-metal-coating-2002`

###### Xylene to air (`xylene_air`)

Only actual species and air release after controls; include fugitive and curing points without inventing an air residual.

- Selected flow: Xylene to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-metal-coating-2002`

###### Water vapour to air (`finish_evap`)

Only actual species and air release after controls; include fugitive and curing points without inventing an air residual.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources: `epa-metal-coating-2002`

### Process: Equipment assembly (`assembly`)

#### Inputs

##### Product flows

###### Centrifugal fan assembly (`fan`)

Actual forced-air design; supplier completed assembly burden once, not embedded motor/material again. Individual design and delivery scope required.

- Selected flow: Centrifugal fan assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cimbria-drying-2024`

###### Natural-gas line burner assembly (`burner`)

Actual natural-gas heating design; supplier completed assembly burden once, not embedded motor/material again. Individual design and delivery scope required.

- Selected flow: Natural-gas line burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cimbria-drying-2024`

###### Diesel burner assembly (`diesel_burner`)

Actual diesel-fired batch configuration; supplier completed assembly burden once, not embedded motor/material again. Individual design and delivery scope required.

- Selected flow: Diesel burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `opico-installations-v2`

###### LPG burner assembly (`lpg_burner`)

Actual LPG-fired batch configuration; supplier completed assembly burden once, not embedded motor/material again. Individual design and delivery scope required.

- Selected flow: LPG burner assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `opico-installations-v2`

###### Steam-to-air heat exchanger assembly (`steam_exchanger`)

Actual steam-heated indirect configuration; supplier completed assembly burden once, not embedded motor/material again. Individual design and delivery scope required.

- Selected flow: Steam-to-air heat exchanger assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cimbria-drying-2024`

###### Electric resistance air-heater assembly (`electric_heater`)

Actual electric heating configuration; supplier completed assembly burden once, not embedded motor/material again. Individual design and delivery scope required.

- Selected flow: Electric resistance air-heater assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cimbria-drying-2024`

###### Dryer PLC control panel assembly (`controller`)

Actual powered controls; supplier completed assembly burden once, not embedded motor/material again. Individual design and delivery scope required.

- Selected flow: Dryer PLC control panel assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cimbria-drying-2024`

###### Grain intake auger assembly (`auger`)

Actual supplied batch-dryer intake; supplier completed assembly burden once, not embedded motor/material again. Individual design and delivery scope required.

- Selected flow: Grain intake auger assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `opico-installations-v2`

###### Grain sector-valve discharge assembly (`discharge`)

Actual supplied continuous-flow outlet; supplier completed assembly burden once, not embedded motor/material again. Individual design and delivery scope required.

- Selected flow: Grain sector-valve discharge assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cimbria-drying-2024`

###### Cyclonic dust separator assembly (`dust_separator`)

Actual factory-supplied dust separator; supplier completed assembly burden once, not embedded motor/material again. Individual design and delivery scope required.

- Selected flow: Cyclonic dust separator assembly
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources: `cimbria-drying-2024`

###### Copper-conductor PVC-insulated cable (`cable`)

Only cable outside purchased complete panels/assemblies; record conductor cross-section and insulation state.

- Selected flow: Copper-conductor PVC-insulated cable
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### ISO VG 68 mineral gear oil (`oil_fill`)

Only separately supplied measured retained initial charge with actual grade; do not count oil already in purchased gearbox.

- Selected flow: ISO VG 68 mineral gear oil
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### Alternating current (`assembly_electricity`)

Only CN <1 kV grid-average user-side supply matching actual provider; actual process submeter. Services includes only unassigned residual. Other voltage/geography requires another verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

### Process: Factory acceptance testing (`test`)

#### Inputs

##### Product flows

###### Wheat grain, as received (`test_wheat`)

Only actual wheat factory test load; measured wet mass and moisture. Factory trial crop is not delivered machine mass.

- Selected flow: Wheat grain, as received
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_material.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material`
- Sources:

###### Diesel fuel (`test_diesel`)

Only actual diesel factory test fuel; actual composition and supply state required. Field-season fuel excluded.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Liquefied petroleum gas (`test_lpg`)

Only actual LPG factory test fuel; actual composition and supply state required. Field-season fuel excluded.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Natural gas (`test_gas`)

Only actual natural-gas factory test fuel; actual composition and supply state required. Field-season fuel excluded.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased steam (`test_steam`)

Only delivered steam for actual factory testing, Energy in MJ from net enthalpy protocol; not the mass of steam entered as MJ.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Process water (`test_water`)

Only actual factory leak/cleaning test; drained water is not retained initial charge or product denominator.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water`
- Sources:

###### Alternating current (`test_electricity`)

Only CN <1 kV grid-average user-side supply matching actual provider; actual process submeter. Services includes only unassigned residual. Other voltage/geography requires another verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Product flows

###### Wheat grain after factory drying trial (`returned_wheat`)

Only actual recovered crop delivered out; record changed moisture/state and destination. It is not the equipment reference product.

- Selected flow: Wheat grain after factory drying trial
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

##### Waste flows

###### Wheat grain trial rejects (`test_crop_waste`)

Only actual rejected trial crop to specific receiver with dry-matter and moisture records.

- Selected flow: Wheat grain trial rejects
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

###### Leak-test wastewater (`test_effluent`)

Only actual external effluent, retain contamination and treatment interface.

- Selected flow: Leak-test wastewater
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Water vapour to air (`water_air`)

Only actual measured test evaporation; no throughput-to-emissions factor. Carbon balance cannot establish CO, NO or NO2.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon dioxide, fossil, to air (`co2_air`)

Only actual fossil-carbon combustion release; no throughput-to-emissions factor. Carbon balance cannot establish CO, NO or NO2.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide to air (`co_air`)

Only species-specific combustion measurement; no throughput-to-emissions factor. Carbon balance cannot establish CO, NO or NO2.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen monoxide to air (`no_air`)

Only separate NO monitoring; no throughput-to-emissions factor. Carbon balance cannot establish CO, NO or NO2.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide to air (`no2_air`)

Only separate NO2 monitoring; no throughput-to-emissions factor. Carbon balance cannot establish CO, NO or NO2.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Residual factory services (`services`)

#### Inputs

##### Product flows

###### Alternating current (`services_electricity`)

Only CN <1 kV grid-average user-side supply matching actual provider; actual process submeter. Services includes only unassigned residual. Other voltage/geography requires another verified identity.

- Selected flow: Alternating current `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased steam (`service_steam`)

Only unassigned residual factory steam after fabrication, assembly, test and dispatch heat assignments; same measured period.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_energy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy`
- Sources:

### Process: Acceptance and dispatch (`dispatch`)

#### Inputs

##### Product flows

###### Corrugated fibreboard packaging (`corrugated`)

Only actual dispatch component, not device mass; record reuse and net issued quantity.

- Selected flow: Corrugated fibreboard packaging
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pack.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

###### LDPE stretch wrapping film (`stretch`)

Only actual dispatch wrapping with supplier grade.

- Selected flow: LDPE stretch wrapping film
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pack.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

###### Scots pine pallet (`pallet`)

Only actual certified species and reusable-pallet service; different species requires separate identity.

- Selected flow: Scots pine pallet
- Flow property / unit: Mass / kg
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_pack.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_pack`
- Sources:

#### Outputs

##### Product flows

###### Accepted complete dryer for agricultural products (`finished_dryer`)

Exactly the declared configuration and delivery boundary; include supplied modules/retained initial fill, exclude packaging, test crop and drained test water.

- Selected flow: Accepted complete dryer for agricultural products
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide | shared production | Use configuration-specific lots and disjoint process meters first. Allocate only unassigned shared residual with measured causal machine-time/load or another documented physical driver; keep numerator and accepted output within the same period. |  |
| scrap | recovery | Track actual external segregated scrap and documented treatment with one disclosed compatible recovery model; sale alone creates no avoided virgin-material credit. Internal paired returns cancel mass transfers while retaining rework burdens. |  |
| test_crop | returned test crop | Distinguish returned customer test material from real coproduct sales. No automatic crop credit or throughput allocation. For a real coproduct first subdivide, then justify measured physical relationship or a documented alternative with sensitivity. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | dispatch | accepted net equipment | matched period records | model; configuration; serial number; accepted net mass M; N; included modules; retained charge; tare; acceptance date | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each lot/interval and configuration | complete same reporting period including rejects/rework | declared factory and provider interfaces | accepted net mass per machine | calibration; acceptance; assays; provider state; sampling uncertainty |
| cp_material | actual applicable process | one physical input | matched period records | grade; species/formulation; provider; incoming and issued quantity; return; opening/closing stocks; own assay/moisture; completed supply state | Calibrated weighing and actual supplier certificates; identify make/buy and material-specific composition independently. | kg | each lot/interval and configuration | complete same reporting period including rejects/rework | declared factory and provider interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling uncertainty |
| cp_energy | actual applicable process | one utility | matched period records | meter; interval; imports; generation; exports; storage; assignments; fuel mass/composition/NCV; delivered steam mass P/T/quality and own enthalpy; separate returned condensate mass/T and own enthalpy; shared driver | Use calibrated disjoint meters and supply invoices for same output period. Purchased steam: delivered kg × its own MJ/kg at measured pressure/temperature/quality minus separately measured return kg × its own return MJ/kg using the same enthalpy reference, or calibrated net heat meter. No assumed enthalpy, kg-as-MJ or own-boiler fuel duplication. | MJ | each lot/interval and configuration | complete same reporting period including rejects/rework | declared factory and provider interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling uncertainty |
| cp_water | actual water-using process | one supplied water | matched period records | meter; period; supplied water; own measured density/temperature; moisture in material; retained stock; evaporation; discharge; recycle; reactions | Measure matched incoming, retained and discharged water and material moisture; paired recycle transfers cancel; volume conversion uses actual density. | kg | each lot/interval and configuration | complete same reporting period including rejects/rework | declared factory and provider interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling uncertainty |
| cp_waste | actual applicable process | one waste | matched period records | identity; grade; tare/net; own moisture; dry/wet basis; element/chemical assay; stock; receiver; actual treatment; trial-crop destination | Calibrated segregated weighing and matched representative analysis of each stream including sludge/wastewater; retain provider receipts. | kg | each lot/interval and configuration | complete same reporting period including rejects/rework | declared factory and provider interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling uncertainty |
| cp_emission | actual release point | one species/compartment | matched period records | species; compartment; concentration; air/liquid flow; duration; own moisture/assay; sampling; capture; stocks; detection limit; uncertainty | Use post-control species-specific monitoring and fugitive assessment; any factor/model must match actual fuel, equipment, control and species. Retain release and non-air residual records. | kg | each lot/interval and configuration | complete same reporting period including rejects/rework | declared factory and provider interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling uncertainty |
| cp_pack | dispatch | one package | matched period records | component; polymer/species/grade; mass; reusable stock; returned quantity; shipments; accepted configuration | Weigh actual packaging components separately; track reuse service and returns without entering machine denominator. | kg | each lot/interval and configuration | complete same reporting period including rejects/rework | declared factory and provider interfaces | attributable quantity / accepted machines | calibration; acceptance; assays; provider state; sampling uncertainty |

Actual period collection: Q is the attributable quantity of each exchange including reject/rework burden; N is accepted complete units of ONE configuration; M is sum of calibrated accepted net masses / N. Obtain q_item = Q/N and q_ref = Q/sum of accepted net masses of that same configuration and period. Do not pool unlike configurations or include rejected machines, packaging, test crop or discharged test water in the denominator. The collection table aggregates each exchange per accepted machine; cp_mass aggregates accepted net mass per machine. The conversion table then produces the final per-kg inventory; raw measurements remain period totals.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |
| period_accounting | same configuration and period | Q = attributable period exchange including reject/rework burden; N = accepted complete units of one configuration; mean net machine mass = sum of calibrated accepted net masses / N; per-machine exchange = Q/N; final per-kg exchange = Q/sum of those accepted net masses. No rejected-machine, packaging, test-crop or drained-water mass in denominator. | cp_mass; cp_material; cp_energy; cp_water; cp_waste; cp_emission; cp_pack | matched per-item raw totals and per-kg inventory |  |
| utility_residual | cp_energy | Residual = imports + actual onsite generation - exports - net storage increase - already assigned fabrication/solar/finish/assembly/test/dispatch loads, all in same measured period and units. Allocate only residual with measured causal driver. Investigate negative residual against units, period, meter topology and combined uncertainty; never clip it to zero. Own generation has its fuel/emission inventory; do not add purchased power for that same generated quantity. | cp_energy | residual utility |  |
| species_balance | physical material/species | For each material/contained element or chemical use each term's OWN matched assay and dry/wet basis on incoming stock, product, scrap, sludge, wastewater, releases and closing stocks; include reaction uptake/sinks and paired internal-transfer cancellation. Close actual water with supplied water, material moisture, reactions, retained stocks, evaporation and discharge. Do not equate gross alloy/compound/sludge mass with species mass. | cp_material; cp_mass; cp_water; cp_waste; cp_emission | balance residual |  |
| water_balance | physical water and moisture records | Fresh water inputs + input material moisture + opening water stocks + reaction-generated water = product-retained water + water in wet wastes and sludge + water in external wastewater/discharge + evaporation + closing water stocks + reaction-consumed water. EACH wet input, product, waste, sludge, wastewater and stock term uses its OWN measured moisture/water fraction, density where volume is collected, and matched wet/dry basis. Cancel paired internal water returns while retaining pumping and treatment energy. Investigate closure against actual combined measurement, sampling and allocation uncertainty; no assumed water losses or universal tolerance. | cp_material; cp_mass; cp_water; cp_waste; cp_emission | finite water balance residual with uncertainty |  |
| solvent_balance | actual solvent species | Account solvent inputs/opening stock, retained product, recovered solvent, captured-media content, wastewater/sludge content, closing stock, verified actual destruction and species-specific air release. Capture is not destruction; no unexplained balance residual is assigned to air. | cp_material; cp_waste; cp_emission | solvent closure | epa-metal-coating-2002 |
| combustion_species | test emissions | Fuel carbon balance may constrain fossil CO2 only with own carbon composition and oxidized-carbon allocation; CO/NO/NO2 require their own monitored or validated technology-specific evidence. Preserve NOx-as-NO2 conventions separately; no assumption of complete destruction. | cp_energy; cp_emission | species release |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| same_config | reference | Trace drawing/revision, modules, crop suitability, principal intended use, acceptance and calibrated net mass; no universal machine weight. | BOM, make/buy and acceptance records |
| coverage | active routes | Extend atomic cards for actual missing alloy/polymer/wood species, reagents, residues, providers and emission compartments. Actual formulations and route activation need evidence; unknown is not zero. | supplier certificates, SDS, routes and waste receipts |
| uncertainty | all quantities | Investigate closure using actual combined measurement, sampling and allocation uncertainty. No universal tolerance, default yield, recipe, energy, lifetime or empirical range is supplied. | calibration and representative sampling |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity | reference | Require all qualifiers and actual agricultural principal purpose; reject other-material purpose, drying service or crop output as equipment identity. Missing actual category reference UUID stays unresolved. | un-cpc-3-0 |
| denominator | inventory | Require positive accepted net mass and unit count for one configuration and same period, calibrated net scope and explicit normalization on every applicable row; inspect test/packaging/reject exclusions. |  |
| boundary | make/buy and utilities | Reconcile upstream modules once, actual supplied scope, paired transfers, retained charge, separate purchased/own generation and no whole-site totals added above submeters; purchased steam uses actual net enthalpy. |  |
| closure | physical species and routes | Require own matched assays on product/waste/sludge/wastewater/stocks, actual water/solvent and species-specific emission closure. Investigate residuals against actual combined uncertainty without invented losses, air residual or destruction. |  |
| completeness | dataset | Report collected inputs, performed/skipped checks, findings and completeness. Missing quantity, identity, provider, required recipe or unsupported relationship is inconclusive; no unqualified claim of validation or publication. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground dataset-production guidance |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Factory-gate production of the declared equipment configuration and downstream process/lifecyclemodel projections with disclosed readiness |
| excluded_use | Crop drying service; field energy; equal service/lifetime comparisons from kg alone; universal recipe or published claims while gaps remain |
| required_metadata | All reference qualifiers, boundaries, period/geography, supply states, BOM, make/buy matrix and allocation |
| required_quality_disclosure | UUID/provider, route/formulation and empirical-range gaps; calibration/sampling/closure uncertainty; missing or not-applicable exchanges |
| update_trigger | Design, supplied module, heating architecture, principal purpose, grade/formulation, provider, meter topology or evidence change |

## 11. Data Sources

| source_id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0 | official_guidance | UNSD Central Product Classification Version 3.0, structure 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 44518 agricultural-product dryers versus 44912 other-material dryers; classification only, not production data |
| cimbria-drying-2024 | handbook | Cimbria, Continuous Flow Drying, release Oct. 2024/EN, PDF pp.6–11,12–14; footer p.16. https://www.cimbria.com/content/dam/public/grain-and-protein/cimbria/brochures/drying/continuous-flow-dryer/Continuous_Flow_Dryer_GB.pdf | Actual modular grain-dryer architecture and conditional supplied steel/fan/controls/heating options. Operational performance and dimensions do not prescribe factory BOM or energy. |
| opico-installations-v2 | handbook | OPICO, Grain Dryer Installations, leaflet V2, actual layout footer 26/2/10 (publication date not independently established), PDF pp.1,4. https://products.opico.co.uk/media/34448/opico-magna-grain-dryer-2910qf-brochure.pdf | Independent batch/recirculating architecture; separate LPG/diesel and factory-fit options; distinguishes dryer from surrounding storage/handling plant. No factory-intensity factors. |
| fao-fruit-processing-2008 | handbook | Susan Azam Ali, Home-based Fruit and Vegetable Processing in Afghanistan, Book One, FAO 2008, ISBN978-92-5-105916-6, PDF pp.41–43 (printed32–34),69 (printed60). https://www.fao.org/4/a1549e/a1549e01.pdf | Actual fruit/vegetable solar direct/indirect cabinet, wood frame, film/glass and tray counterexample; design and leaf-sensitive shading evidence, not a compulsory species/polymer recipe or equipment factory dataset. |
| epa-metal-coating-2002 | official_guidance | US EPA, NESHAP for Source Category: Miscellaneous Metal Parts and Products Surface Coating Operations—Technical Support Document, EPA-453/R-02-006, February2002; PDF pp.115–117 (printed8-16–8-18), underlying characterization section dated30September1998. https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF | Conditional pretreatment/application/flash-off/curing release points; document explicitly lacks detailed coating/control information. No actual equipment coating recipe or emission factor adopted. |
