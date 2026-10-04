---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-plough
status: candidate
content_maturity: authored_methodology
language: en-US
sync_with: pcr.zh-CN.md
---

# Agricultural mouldboard plough manufacture

## 1. Scope and Applicability

This PCR covers manufacture of new complete tractor-mounted and semi-mounted mouldboard ploughs that cut and invert soil with a share and mouldboard, including reversible and slatted-body configurations. It defines a foreground manufacturing data package from identified incoming stock or purchased components to factory acceptance and dispatch packaging. Farm use, hectare-based ploughing service, tractor manufacture, soil carbon, crop yield, replacement parts sold alone, disc ploughs, rotary tillers, harrows, subsoilers and remanufacturing are excluded. A kilogram of differently configured ploughs is not evidence of equal field performance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.agricultural-plough |
| classification_refs | CPC 3.0 44111; mouldboard subset; no accepted mapping implied |
| covered_products | Complete conventional/reversible mouldboard ploughs with declared body count and mounted/semi-mounted support |
| excluded_products | Disc plough; tiller; tractor; standalone spare share; farm service |
| representative_product | A configured steel-frame tractor-mounted reversible mouldboard plough; no representative weight is prescribed |
| production_route | Stock cutting/forming, route-specific forging/thermal treatment and joining, protective finishing, assembly, acceptance; purchased finished components may replace fabrication |
| market_state | New accepted factory-gate complete implement, identified delivery configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture an accepted complete mouldboard plough intended for soil inversion; use-phase service is outside this unit |
| How much | 1 kg net accepted complete implement of one declared configuration |
| How well | Conforms to the declared drawing/BOM, fitted safety/reset system and factory acceptance protocol; no universal field performance is imposed |
| How long or cycle | One manufacturing and acceptance cycle; no assumed service life or hectares |
| reference_flow_link | `finished_plough` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Ploughs `130fc770-822f-45ae-a438-070df7696c00` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; body count; mouldboard/slatted design; conventional/reversible; hitch category; support wheel; working width; wear-part grade and thermal state; frame material; adjustment and overload protection; supplied hydraulics/options; finished coating; accepted net mass M; packaging exclusion; foreground starting condition; supplier/foreground split |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| energy_basis | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain the electrical meter basis; use the energy unit-group factor 1 kWh = 3.6 MJ. Do not interpret electricity as fuel calorific input. Selected 35–330 kV flow needs a matching supply boundary. |
| gas_volume | thermal_gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record actual or standard conditions with meter correction evidence; volume-to-mass conversion requires gas composition and measured density at the declared conditions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified received steel stock or finished supplier components, at declared receiving gate; all external inputs and inbound transport coverage disclosed |
| starting_condition_role | foreground manufacturing start |
| product_classification_scope | CPC 3.0 44111 mouldboard subset |
| recursive_input_rule | A purchased complete plough entering modification remains a separately recorded same-category input with its supplier dataset; stop recursion at that identified input and disclose the changed configuration |
| upstream_dataset_requirement | Link steel, each purchased component and utility to compatible upstream datasets; without complete verified upstream linkage describe foreground manufacture only |
| disclosure | Site/time; starting states; outsourced treatment; route exceptions; missing suppliers; transport; capital-equipment coverage; waste-treatment destination |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | all processes | Include actual manufacturing, internal handling, rework, attributable utilities, acceptance testing and dispatch packaging within the declared site/process chain. Record outsourced heat treatment as supplier activity instead of also counting its fuel locally. This is a foreground protocol, not proof of complete cradle-to-gate coverage. |  |
| boundary_route | thermal; joining | Select operations from drawings and route cards. Manufacturer examples support forging and heat treatment for some shares; DuraMaxx wear bodies illustrate absence of drilling/punching/welding. Neither is universal. Add each actual carburising medium, quench oil, cleaner, abrasive, structural tube, wheel, hose and safety component as an individually identified exchange before claiming configuration completeness. | lemken-plough-bodies; kverneland-share-production; kverneland-steel-technology |
| boundary_environment | all processes | Elementary flows cross to the environment only. Supplied process water is a product input; externally treated rinse effluent is a waste output. Quantify route-specific air/water releases only from measurements or documented constituent balances; unknown species must not be invented or merged into NOx/VOC placeholders. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `forming` | Stock preparation, cutting and forming | conditional | When frame or body blanks are fabricated inside the declared foreground | foreground production | per 1 kg reference flow |
| `thermal` | Wear-part forging and thermal treatment | conditional | When forging, hardening, tempering or carburising is performed inside the declared foreground | foreground production | per 1 kg reference flow |
| `joining` | Joining of structural parts | conditional | When welded joints are present in the foreground route | foreground production | per 1 kg reference flow |
| `finishing` | Cleaning and protective finishing | conditional | When performed inside the foreground; powder coating is one conditional route, not a universal requirement | foreground production | per 1 kg reference flow |
| `assembly` | Configured assembly and acceptance | required | All complete implements | foreground production | per 1 kg reference flow |
| `packing` | Factory dispatch packaging | conditional | When dispatch protection crosses the foreground boundary | foreground production | per 1 kg reference flow |

These rows are conditional atomic exchanges, not a universal recipe. Extend them from the exact BOM/route and meter register; report demonstrable absence as not applicable, and unknown amounts as gaps. Internal part transfers conserve configuration and mass but are not external purchases. No ranges are assigned from manufacturer marketing claims.

### Process: Stock preparation, cutting and forming (`forming`)

#### Inputs

##### Product flows

###### frame plate (`frame_plate`)

Only hot-rolled low-alloy high-strength plate matching the mill certificate. Add a separate identified hollow-section row when used; do not represent a tube as plate.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### frame section (`frame_section`)

Only when the frame BOM uses received hollow section; record steel grade, dimensions and welding/seam state. Plate inputs must not duplicate supplier-made sections.

- Selected flow: Finished rectangular structural steel hollow section
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### wear blank (`wear_blank`)

Only when the share is made from this certified stock in the foreground; finished purchased shares enter assembly instead.

- Selected flow: Micro-alloyed boron steel ploughshare blank
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`
- Sources: `lemken-plough-bodies`

###### forming power (`forming_power`)

Meter cutting, pressing and machining at the user supply boundary; selected identity applies only to 35–330 kV supply. Other voltage requires a matching identity.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

#### Outputs

##### Waste flows

###### machining chips (`machining_chips`)

Steel machining chips generated at a Chinese site only. Record drained mass and oil contamination; distinguish them from clean cutting offcuts.

- Selected flow: Steel scrap, machining chips `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

###### cutting offcuts (`cutting_offcuts`)

Weigh offcuts leaving the foreground; internal recirculation is a transfer, not a second external input.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_forming.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_forming`

### Process: Wear-part forging and thermal treatment (`thermal`)

#### Inputs

##### Product flows

###### thermal power (`thermal_power`)

Electric furnace, induction and auxiliary power only when operated; keep carburising separate from burner fuel. No universal treatment temperature or duration is imposed.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_thermal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_thermal`
- Sources: `kverneland-share-production`

###### thermal gas (`thermal_gas`)

Only pipeline gaseous natural gas burned on site. Retain meter pressure, temperature and standard-volume basis; do not use this identity for an unspecified carburising atmosphere.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_thermal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_thermal`

###### quench water (`quench_water`)

Treated industrial water supplied across the foreground for a water-based quench route. Meter make-up, not recirculating tank throughput.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_thermal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_thermal`

###### quench polymer (`quench_polymer`)

Only when the verified quench formulation contains this concentrate; record formulation, concentration and replenishment. Oil quenching requires its own separate row.

- Selected flow: Polyalkylene glycol quench concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_thermal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_thermal`

#### Outputs

##### Elementary flows

###### fossil co2 (`fossil_co2`)

Only documented fossil-fuel combustion emissions to air with unspecified subcompartment. Obtain site measurements or a fuel-carbon balance with composition and oxidation evidence; never borrow a generic factor. Different air subcompartments require matching flows.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_thermal.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_thermal`

### Process: Joining of structural parts (`joining`)

#### Inputs

##### Product flows

###### joining power (`joining_power`)

Meter welding equipment power; a no-weld wear-body route does not remove welded frame operations elsewhere.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`
- Sources: `lemken-plough-bodies`

###### weld wire (`weld_wire`)

Only the self-shielded carbon-steel flux-cored wire described by the selected record. Solid-wire gas-shielded welding needs separate wire and gas rows.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

#### Outputs

##### Waste flows

###### weld slag (`weld_slag`)

Only collected slag from the specified welding route; retain composition and disposal classification. It is not an elementary air emission.

- Selected flow: Solidified flux-cored steel welding slag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_joining.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_joining`

### Process: Cleaning and protective finishing (`finishing`)

#### Inputs

##### Product flows

###### finish power (`finish_power`)

Include measured cleaning, booth and curing power if used. Fuel-fired curing requires its own fuel and evidenced emissions rows.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`

###### powder (`powder`)

Only purchased powder coating; record resin chemistry, pigment and additives separately in its formulation disclosure. Liquid paint is not this exchange.

- Selected flow: Powder Coating `6e3010f9-fbd3-48f6-95fc-c1b38d2800d2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`

###### rinse water (`rinse_water`)

Treated industrial rinse make-up when wet cleaning is used; cleaning reagents each need their own chemical row with concentration.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`

#### Outputs

##### Waste flows

###### rinse effluent (`rinse_effluent`)

Only effluent sent to an external treatment facility; measure volume and composition. On-site treatment belongs in the expanded foreground and needs its own inventory. Do not substitute freshwater or a treated effluent flow.

- Selected flow: Untreated aqueous metal-cleaning rinse effluent
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Unit group: `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`

###### powder waste (`powder_waste`)

Only at a Chinese manufacturing site: unrecoverable collected solid powder overspray leaving the factory; recovered powder returned internally is not an external waste output.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_finishing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_finishing`

### Process: Configured assembly and acceptance (`assembly`)

#### Inputs

##### Product flows

###### purchased share (`purchased_share`)

Only externally purchased finished shares; declare count, grade, hardness and mass. Do not count raw stock and supplier manufacture again.

- Selected flow: Finished hardened boron-steel mouldboard ploughshare
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `lemken-plough-bodies`

###### purchased mouldboard (`purchased_mouldboard`)

Only externally purchased completed mouldboards; retain solid/slatted design, grade and surface state. The full body set also requires its frog, landside and shin, each identified in the BOM.

- Selected flow: Finished hardened steel plough mouldboard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`
- Sources: `lemken-plough-bodies`

###### steel bolt (`steel_bolt`)

Record grade, dimensions, finish and total delivered mass; shear-bolt protection is a declared configuration, not interchangeable with ordinary bolts.

- Selected flow: Finished steel hexagon bolt
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### steel nut (`steel_nut`)

Record grade, finish and mass for this component only.

- Selected flow: Finished steel hexagon nut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### steel washer (`steel_washer`)

Record finish, size and mass separately from bolts and nuts.

- Selected flow: Finished steel flat washer
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### pivot pin (`pivot_pin`)

When included in the hitch or reversal assembly; record hardened state, size and mass.

- Selected flow: Finished steel plough pivot pin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### reset spring (`reset_spring`)

Only when leaf-spring reset is fitted; a hydraulic reset system requires its actual components instead.

- Selected flow: Finished steel overload-reset leaf spring
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### support tyre (`support_tyre`)

When a rubber-tyred support wheel is supplied; weigh tyre separately from rim and retain size and construction. Do not use a count-reference generic tyre UUID as a mass-reference exchange.

- Selected flow: Finished pneumatic rubber plough support tyre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### support rim (`support_rim`)

When the support wheel is fitted; purchased rim only, not a trailer-specific component without applicability evidence.

- Selected flow: Finished steel plough support-wheel rim
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### hydraulic hose (`hydraulic_hose`)

When a finished hydraulic hose is delivered with the implement; record reinforcement, rubber chemistry, pressure rating, fittings and mass. Fittings not included by the supplier need separate rows.

- Selected flow: Hydraulic hose `e2fc1719-69dc-4281-8eae-383af8d9a405`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### assembly screw (`assembly_screw`)

Steel screws only where used, weighed by specified size and finish; bolts, nuts and washers each require separate atomic rows.

- Selected flow: Steel screw `aa43b425-20e7-49c0-9ea9-ecf7b1004951`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### hydraulic cylinder (`hydraulic_cylinder`)

When reversible or width-adjustment configuration uses this cylinder. Record bore, stroke, seals and acceptance; do not substitute cylinder blanks.

- Selected flow: Complete double-acting hydraulic steel cylinder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### hydraulic oil (`hydraulic_oil`)

Only first-fill finished hydraulic fluid meeting the selected refined-oil route; record grade and mass actually delivered with the implement. Exclude tractor reservoir fill.

- Selected flow: Hydraulic Fluid `eafff56c-3487-4345-9f24-00429f61c556`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

###### assembly power (`assembly_power`)

Meter assembly tools and factory acceptance tests; no farm tractor fuel or field ploughing is included.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_assembly.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly`

#### Outputs

##### Product flows

###### finished plough (`finished_plough`)

One kilogram of the accepted complete implement, with declared frame, full body set, hitch, fitted adjustment/safety devices and supplied options. Transport packaging and the tractor are excluded from its net mass.

- Selected flow: Ploughs `130fc770-822f-45ae-a438-070df7696c00`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_mass`

### Process: Factory dispatch packaging (`packing`)

#### Inputs

##### Product flows

###### wood pack (`wood_pack`)

Only this actual timber component; record moisture and reuse count from site records. Add each other packaging component as a separate row; packaging is outside net implement mass.

- Selected flow: Kiln-dried sawn coniferous timber, at mill `50904047-e5b0-4110-990a-53751d250267`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Apply normalize_mass to q_item; reference_mass; cp_packing.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow; collected per one accepted finished machine
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_direct | all processes | Use direct job/lot records and subdivision first. For shared equipment measure job machine-hours and measured load, reconcile assigned plus unassigned consumption to the meter, and retain the physical causal basis. Mass allocation is allowed only when a site test establishes proportional processing demand; unequal plough configurations cannot automatically be allocated by unit count or finished mass. |  |
| allocation_scrap | waste outputs | Record steel chips, offcuts and coating residue with destination and revenue status. Sale alone does not establish a co-product or authorize an avoided-steel credit. Keep waste-treatment and recycling burdens/benefits explicit in the chosen study method; disclose any economic allocation, price period and sensitivity when physical allocation is unsupported. |  |
| allocation_rework | forming; assembly | Attribute rejects and rework to their originating configuration and count accepted output once. Recoverable internal steel/powder circulations are tracked separately from net purchased inputs and external wastes. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_mass | assembly | accepted net mass | weighing | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted machine | declared production period | declared factory and configuration | accepted net mass per machine | scale calibration; BOM; serial acceptance |
| cp_forming | forming | individual input/output exchanges | meter and job ledger | row_id; route; material grade; quantity; numerator unit; accepted count; configuration; stock change; reject; assigned load/time; meter conditions | Weigh each material/waste separately; meter each utility; obtain supplier delivery/BOM records for finished components; measure documented emissions. Trace every row to its own instrument or voucher and the accepted configuration. | kg; MJ; m3 | each job; monthly reconciliation | same declared production period as cp_mass; include seasonal utilization | foreground and documented subcontractor split | attributable exchange amount / accepted machines | calibration; job card; invoice; waste manifest; emissions test; allocation reconciliation |
| cp_thermal | thermal | individual input/output exchanges | meter and job ledger | row_id; route; material grade; quantity; numerator unit; accepted count; configuration; stock change; reject; assigned load/time; meter conditions | Weigh each material/waste separately; meter each utility; obtain supplier delivery/BOM records for finished components; measure documented emissions. Trace every row to its own instrument or voucher and the accepted configuration. | kg; MJ; m3 | each job; monthly reconciliation | same declared production period as cp_mass; include seasonal utilization | foreground and documented subcontractor split | attributable exchange amount / accepted machines | calibration; job card; invoice; waste manifest; emissions test; allocation reconciliation |
| cp_joining | joining | individual input/output exchanges | meter and job ledger | row_id; route; material grade; quantity; numerator unit; accepted count; configuration; stock change; reject; assigned load/time; meter conditions | Weigh each material/waste separately; meter each utility; obtain supplier delivery/BOM records for finished components; measure documented emissions. Trace every row to its own instrument or voucher and the accepted configuration. | kg; MJ; m3 | each job; monthly reconciliation | same declared production period as cp_mass; include seasonal utilization | foreground and documented subcontractor split | attributable exchange amount / accepted machines | calibration; job card; invoice; waste manifest; emissions test; allocation reconciliation |
| cp_finishing | finishing | individual input/output exchanges | meter and job ledger | row_id; route; material grade; quantity; numerator unit; accepted count; configuration; stock change; reject; assigned load/time; meter conditions | Weigh each material/waste separately; meter each utility; obtain supplier delivery/BOM records for finished components; measure documented emissions. Trace every row to its own instrument or voucher and the accepted configuration. | kg; MJ; m3 | each job; monthly reconciliation | same declared production period as cp_mass; include seasonal utilization | foreground and documented subcontractor split | attributable exchange amount / accepted machines | calibration; job card; invoice; waste manifest; emissions test; allocation reconciliation |
| cp_assembly | assembly | individual input/output exchanges | meter and job ledger | row_id; route; material grade; quantity; numerator unit; accepted count; configuration; stock change; reject; assigned load/time; meter conditions | Weigh each material/waste separately; meter each utility; obtain supplier delivery/BOM records for finished components; measure documented emissions. Trace every row to its own instrument or voucher and the accepted configuration. | kg; MJ; m3 | each job; monthly reconciliation | same declared production period as cp_mass; include seasonal utilization | foreground and documented subcontractor split | attributable exchange amount / accepted machines | calibration; job card; invoice; waste manifest; emissions test; allocation reconciliation |
| cp_packing | packing | individual input/output exchanges | meter and job ledger | row_id; route; material grade; quantity; numerator unit; accepted count; configuration; stock change; reject; assigned load/time; meter conditions | Weigh each material/waste separately; meter each utility; obtain supplier delivery/BOM records for finished components; measure documented emissions. Trace every row to its own instrument or voucher and the accepted configuration. | kg; MJ; m3 | each job; monthly reconciliation | same declared production period as cp_mass; include seasonal utilization | foreground and documented subcontractor split | attributable exchange amount / accepted machines | calibration; job card; invoice; waste manifest; emissions test; allocation reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_mass | all inventory rows | q_ref = q_item / M; q_item = exchange amount per one accepted finished machine; q_ref = exchange amount per 1 kg reference flow. | q_item; M; cp_mass | q_ref |  |

Batch production: determine attributable exchange and the accepted complete output from the same configuration and period before computing the per-machine record. A pooled dataset with variable masses uses total attributable exchange divided by total accepted net mass; preserve the machine records and do not average per-machine ratios without weights. External emissions factors require a named source and site applicability evidence, and are not supplied by this PCR.

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_configuration | reference product | Keep body count, material, support, reset/hydraulic options and acceptance consistent with M; distinguish gross shipping mass and incomplete kit mass. | BOM and calibrated weighing |
| quality_route | all processes | Specify foreground vs purchased parts; record heat treatment recipe and coating chemistry where used. A manufacturer example is route evidence, not a universal recipe, yield or lifetime. | lemken-plough-bodies; kverneland-share-production; kverneland-steel-technology |
| quality_completeness | all inventory rows | Reconcile BOM and material balances, utility meters, inventory changes, rejects, packaging and waste destinations. Quantify omitted exchanges and justify each exclusion; gaps are not zero. | job ledger and reconciliation |
| quality_range | all inventory rows | No transferable quantity ranges are established. Collect site-specific records and uncertainty; do not use advertised wear-life gains, carburising time or catalogue mass as factory inventory factors. | measurement records and explicit evidence gaps |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_basis | all inventory rows | Require positive measured M, same accepted configuration, reference output exactly 1 kg, explicit normalize_mass application and compatible numerator units. Record gas conditions and electricity conversion evidence. |  |
| validate_identity | all inventory rows | Verify each UUID public identity, reference property/unit, route, origin and environment compartment before dataset use. An unresolved flow remains a named exchange without UUID and blocks a claim of complete identity coverage; no forced substitute. |  |
| validate_complete | reference product | Check exact BOM coverage including wheels/rims, bolts/nuts, hoses, seals and overload mechanisms when fitted; add each missing atomic exchange and supplier activity. Check route omissions and direct emission species. Report performed, skipped, uncertainty and remaining gaps; manufacturing checks do not validate farm performance. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configured foreground manufacture of a complete mouldboard plough |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply compatible configured plough manufacture to a separately modelled equipment life cycle; upstream use only after linkage and coverage review |
| excluded_use | Crop yield, soil carbon, comparative hectares, universal lifetime, disc-plough manufacture, claims of complete cradle-to-gate without upstream verification |
| required_metadata | Configuration qualifiers; M protocol; site/period; route; receiving state; supplier activities; boundary diagram; property/units; allocation; packaging; waste destinations |
| required_quality_disclosure | Identity gaps; missing BOM/suppliers; measurement uncertainty; skipped processes; unverified emissions; range evidence gaps; upstream and transport completeness |
| update_trigger | Configuration, steel grade, treatment route, coating, supplier, utility mix, measured mass or boundary changes |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| lemken-plough-bodies | handbook | LEMKEN, Plough Bodies. https://lemken.com/en-en/agricultural-machines/soil-cultivation/ploughing/equipment/bodies | Dural/DuraMaxx paragraphs: boron-steel shares, hardened slats, route exceptions and body variants. Manufacturer-specific; no lifetime or quantitative ranges adopted. |
| kverneland-share-production | handbook | Kverneland, HIGH quality production. https://uk.kverneland.com/about-kverneland/kverneland-technology/high-quality-production | Share production paragraph: forging, hardening and tempering example only; no mandatory universal route. |
| kverneland-steel-technology | handbook | Kverneland, STEEL as a science. https://uk.kverneland.com/about-kverneland/kverneland-technology/steel-as-a-science | Complex production processes paragraph: mouldboard carburising and specimen testing example; gas composition, cycle time and emissions must be measured for the actual route. |
