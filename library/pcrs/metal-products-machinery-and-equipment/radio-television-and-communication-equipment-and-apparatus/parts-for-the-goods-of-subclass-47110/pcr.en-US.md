---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclass-47110
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Dedicated parts for electrical capacitors

## 1. Scope and Applicability

This methodology covers production of individually specified, externally supplied parts dedicated to an electrical capacitor: unfinished film elements, capacitor-specific electrode foil or electrolytic elements, documented unfinished ceramic bodies or tantalum anodes/elements, and dedicated cases, terminals or seals. An internal production stage alone does not establish a traded part. The producer must demonstrate a customer drawing, capacitor interface, delivered processing state and independently supplied part identity. Generic film, foil, powder, ceramic slurry or rubber stock remains an upstream material rather than a reference part unless its dedicated part status is evidenced. Complete functional capacitors, equipment for making them and unrelated EMI/thermistor components are excluded. No missing UUID justifies deleting an otherwise applicable route.

The UN structure identifies subclass 47110 as electrical capacitors. CBP N355569 gives a concrete externally supplied film precursor, not a universal determination for every intermediate. WIMA distinguishes metallized and separate-foil construction. Chemi-Con, Murata and Vishay describe different full-device technologies; only their operations before an evidenced part delivery gate apply here. Murata also applies green-sheet technology to non-capacitor products, so ceramic state alone is insufficient. These sources provide route evidence, not a universal bill of materials, yield, energy intensity or service lifetime. Sources: `un-cpc-3-0`, `cbp-n355569-2025`, `wima-film-construction`, `chemicon-technical-2026`, `murata-green-sheet`, `vishay-tantalum-40036`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.parts-for-the-goods-of-subclass-47110 |
| classification_refs | CPC 3.0: 47171, Parts for the goods of subclass 47110 |
| covered_products | One documented dedicated unfinished capacitor part at a stated supplier gate; route families described in section 1 |
| excluded_products | Complete functional capacitors; general-purpose raw stock; capacitor manufacturing machinery; unidentified general components |
| representative_product | Aluminum-metallized polypropylene precursor wound element with zinc end contact, after stabilization and before downstream completion |
| production_route | Select actual drawing-defined family and make/buy state; no combination of all family inventories |
| market_state | Accepted dedicated part with declared moisture, coating, assembled content and deferred operations; net product mass excludes shipping packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one specified intermediate capacitor part at its declared completion gate, not final capacitor service |
| How much | 1 kg accepted net part mass of the same drawing, revision and delivered configuration |
| How well | Meet documented interface, geometry, grade, processing-state and appropriate acceptance tests; final-device ratings are not imputed |
| How long or cycle | One production and delivery lot; no use-phase lifetime assumption |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Single drawing-defined dedicated electrical capacitor part |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number; drawing revision; intended capacitor/interface; family; dielectric and electrode grade; dimensions; supplied dry/wet/coated state; make/buy matrix; completed and deferred operations; actual recipe; acceptance tests; net weighed output and sampling; count or area conversion; site and period; input processing states; utility delivery conditions; packaging; upstream and treatment links |

The reference product UUID is unresolved for the declared part category; use a direct-read identity for the actual single part in a concrete dataset, never a complete-capacitor proxy. All required qualifiers must be declared. Kilograms provide a collection basis, not functional equivalence between families.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_mass` | reference product | Mass | kg | Weigh accepted shipped parts on a calibrated scale with container tare deducted; preserve the same part configuration and acceptance ledger. Lot mass includes only delivered product content, not packaging. |
| `count_area` | count or area records | Mass | kg | Convert accepted count using measured lot-specific mean net part mass and reconcile with weighed batch mass. For foil or film area use measured areal mass of that exact supplied state including coating; no assumed unit weight or density. |
| `element_basis` | composition balances and emissions | Mass | kg | Gross bath, paste, compound, dust and wet sludge mass differs from contained element or active solute. Preserve assays and moisture on every term; match chemical species and environmental compartment. |
| `energy_basis` | electricity, steam and fuel | Delivered energy; fuel mass and mass-specific net calorific value | MJ; kg; MJ/kg | Preserve raw kWh for electricity and convert using 1 kWh = 3.6 MJ. Purchased steam uses delivered enthalpy with pressure and condensate-return state; fuel is recorded as kg and uses its own measured mass-specific net calorific value in MJ/kg for energy calculations, not steam output. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `gate` | foreground | Include every actual operation from receipt of delivered inputs through accepted part release: preparation, mechanical forming, chemical/electrochemical treatment, joining, conditional thermal operations, testing, rework, utilities, controls and packing. Record performed and deferred steps separately. |  |
| `intermediate` | upstream | For each purchased film, foil, paste, compounded seal material or precursor, link a supplier dataset covering its actual state once; model only site transformations thereafter. For site-made material add actual raw inputs and process burdens instead. |  |
| `complete_device` | part_gate | Exclude subsequent capacitor completion and use from this part output. For the CBP precursor, cleaning, electrical clearing, internal assembly, can insertion, resin filling and final device tests are downstream unless actually performed before this part gate. A complete functional capacitor is a different reference category even if sold to another manufacturer. | `cbp-n355569-2025` |
| `external_links` | life_cycle_links | Retain input transport and upstream production, external waste treatment and subsequent completion as explicit model links or disclosed gaps. A primary factory process dataset is not a complete cradle-to-gate footprint until upstream links are complete. |  |
| `route_extension` | actual_recipe | The cards are conditional specific route anchors, not an exhaustive industry recipe. Audit actual BOM, bath and gas formulation, bought utilities, packaging and treatment; add every other actual individual exchange. not_applicable requires evidence of absence; unknown is not zero. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The actual delivered film, foil, ceramic material, tantalum input or dedicated hardware/compound of the selected part route |
| starting_condition_role | Supplier-state boundary for foreground primary production records |
| product_classification_scope | Only documented dedicated parts for electrical capacitors; classification label is context, not commercial-state evidence |
| recursive_input_rule | Purchased same-category precursor uses its own processing-state supplier dataset once; expand only subsequent site steps, cancel paired internal transfers and never iterate indefinitely |
| upstream_dataset_requirement | Match actual grade, formulation, completed treatment, delivery interface, geography and period; disclose substitutions, absent providers and uncertainty |
| disclosure | Part drawing and interface; customer delivery evidence; route/state; make/buy table; inventory coverage; transport and treatment; allocation; uncertainty and all exclusions |

### Route and make/buy gate matrix

| Family | Make/buy route | Gate and evidence limits |
| --- | --- | --- |
| Film element | Purchased metallized film versus site coating; wound versus stacked and separate-foil technology; contact and stabilization only as actually performed | Part interface, polymer, metal, geometry and pre-gate steps; final assembly remains downstream |
| Electrolytic foil/element | Bought formed anode/etched cathode versus site etch/formation; separator and tab attachment; impregnation only for delivered wet element | Chemi-Con PDF section1-4 distinguishes area etching and Al2O3 formation; cathode foil is generally not formed. |
| Ceramic body | Bought green sheet or paste versus site mixing/casting/printing; lamination/pressing/cutting; firing only if present before the evidenced part gate | A finished plated tested MLCC is excluded. Neither green sheet nor fired chip automatically qualifies as externally supplied capacitor part |
| Tantalum anode/element | Bought sintered anode versus site pressing/sintering; formation and cathode coating only as documented; MnO2 and conductive-polymer routes need distinct recipe inventories | Vishay full-device chart does not prove every anode is traded or establish polymer chemistry; encapsulation/final testing may move output to complete capacitor |
| Case, terminal or seal | Bought finished part versus actual drawing/stamping/machining/plating or molding/cure; no simultaneously charged embedded raw metal or rubber | Use customer interface drawing and actual alloy/compound; no presumption all seals are EPDM or terminals copper |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `film` | Film preparation, winding or stacking, end contact and stabilization | conditional | Only operations performed before delivery of a dedicated film element; distinguish metallized from film/foil construction | Foreground factory records; step-level trace retained | per 1 kg reference flow |
| `electrofoil` | Electrode-foil etching, dielectric formation, washing and slitting | conditional | Only for site-made capacitor-specific electrode foil or foil prepared for its own supplied element | Foreground factory records; step-level trace retained | per 1 kg reference flow |
| `al_element` | Aluminum electrolytic element winding, tab attachment and conditional impregnation | conditional | Only pre-gate operations of an unfinished supplied element; distinguish dry from impregnated state | Foreground factory records; step-level trace retained | per 1 kg reference flow |
| `ceramic` | Capacitor-specific ceramic body preparation and conditional firing | conditional | Only when an externally supplied dedicated unfinished ceramic body is established; green sheets also serve other products | Foreground factory records; step-level trace retained | per 1 kg reference flow |
| `tantalum` | Tantalum anode pressing, sintering, formation and conditional coating | conditional | Only operations before the documented externally supplied unfinished anode or element gate | Foreground factory records; step-level trace retained | per 1 kg reference flow |
| `hardware` | Dedicated case and terminal forming, machining, joining and finishing | conditional | Only actual operations making a capacitor-specific case or terminal to its drawing; no complete capacitor assembly | Foreground factory records; step-level trace retained | per 1 kg reference flow |
| `seal` | Dedicated sealing-part molding and cure | conditional | Only for an independently supplied capacitor-specific sealing part of a documented compound | Foreground factory records; step-level trace retained | per 1 kg reference flow |
| `utilities` | Shared factory utilities and conditional on-site generation | conditional | All applicable routes; disjoint from process electricity already charged | Foreground factory records; step-level trace retained | per 1 kg reference flow |
| `release` | Part qualification, sorting, packing and supplier-gate release | required | Every supplied part; electrical tests only appropriate to its incomplete state | Foreground factory records; step-level trace retained | per 1 kg reference flow |

Different family operations are alternatives. For one part, activate only actual pre-gate processes and add every missing specific exchange. Keep step meters, bath/reaction records and internal transfers without inventing unseen stages. Electrical clearing/formation/inspection consumes factory energy when performed; final capacitor use is downstream. Purchased paste, green sheet, formed foil, sintered anode or molded part carries prior burdens once.

### Process: Film preparation, winding or stacking, end contact and stabilization (`film`)

Only operations performed before delivery of a dedicated film element; distinguish metallized from film/foil construction。

#### Inputs

##### Product flows

###### Polypropylene dielectric film (`pp_plain`)

Unmetallized PP film is issued for in-house metallization or film/foil element manufacture.

- Selected flow: Polypropylene dielectric film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

###### Polyethylene terephthalate dielectric film (`pet_plain`)

Unmetallized PET film is actually used.

- Selected flow: Polyethylene terephthalate dielectric film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

###### Aluminum-metallized polypropylene dielectric film (`pp_metallized`)

Purchased metallized PP film is used; its upstream dataset includes metallization.

Purchased composite film contains its deposited metal; do not add that embedded metal as another external input.

- Selected flow: Aluminum-metallized polypropylene dielectric film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

###### Aluminum-metallized polyethylene terephthalate dielectric film (`pet_metallized`)

Purchased metallized PET film is used.

- Selected flow: Aluminum-metallized polyethylene terephthalate dielectric film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

###### Aluminum evaporation feedstock (`deposition_al`)

Aluminum is deposited on site; declare purity and feed form.

- Selected flow: Aluminum evaporation feedstock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

###### Capacitor-grade aluminum electrode foil (`foil_electrode`)

Separate foil electrodes are wound with dielectric film.

- Selected flow: Capacitor-grade aluminum electrode foil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

###### Pure zinc thermal-spray wire (`zinc_wire`)

Pure zinc wire is used for end contact.

- Selected flow: Pure zinc thermal-spray wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

###### Zinc-aluminum thermal-spray alloy wire (`znal_wire`)

Documented zinc-aluminum alloy replaces pure zinc.

Record alloy fractions and purchased alloy mass; no parallel zinc and aluminum metal inputs for embedded content.

- Selected flow: Zinc-aluminum thermal-spray alloy wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

###### Zinc-ended metallized polypropylene capacitor precursor wound element (`bought_film_element`)

A declared unfinished element is purchased for further pre-gate processing; do not also charge its embedded film or prior winding/spraying.

- Selected flow: Zinc-ended metallized polypropylene capacitor precursor wound element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

#### Outputs

##### Waste flows

###### Aluminum-metallized polypropylene film scrap (`pp_film_scrap`)

Metallized PP trimming leaves the boundary.

- Selected flow: Aluminum-metallized polypropylene film scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

###### Aluminum-metallized PET film scrap (`pet_film_scrap`)

Metallized PET trimming leaves the boundary.

- Selected flow: Aluminum-metallized PET film scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

###### Zinc-bearing thermal-spray filter dust (`spray_dust`)

Captured spray dust is removed; assay Zn and Al separately.

Retain gross dry dust and moisture separately from contained elements; captured dust is not air release.

- Selected flow: Zinc-bearing thermal-spray filter dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

##### Elementary flows

###### zinc (`zinc_air`)

Zn-containing spray exhaust or fugitive release is established; compartment is unspecified air.

Report kg of Zn, not kg zinc oxide or total particulate; prefer differentiated ion/compartment identity when required by the applied LCIA method.

- Selected flow: zinc `08a91e70-3ddc-11dd-94e3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_emission; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `cbp-n355569-2025`; `wima-film-construction`

### Process: Electrode-foil etching, dielectric formation, washing and slitting (`electrofoil`)

Only for site-made capacitor-specific electrode foil or foil prepared for its own supplied element。

#### Inputs

##### Product flows

###### High-purity unetched aluminum capacitor foil (`al_foil_raw`)

Foil etching or formation is performed on site.

- Selected flow: High-purity unetched aluminum capacitor foil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Hydrogen chloride in aqueous etching solution (`hcl`)

The actual chloride etch recipe contains HCl; record solution strength.

A chloride solution is not automatically HCl. Add other actual salts separately and use their own recipe; this card is conditional.

- Selected flow: Hydrogen chloride in aqueous etching solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Ammonium borate forming-bath solute (`ammonium_borate`)

Actual forming bath uses the ammonium-borate route described by Chemi-Con.

- Selected flow: Ammonium borate forming-bath solute
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Deionized process water (`foil_water`)

Water is supplied for foil etching, forming or washing.

- Selected flow: Deionized process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_water; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `chemicon-technical-2026`

#### Outputs

##### Waste flows

###### Aluminum electrode-foil offcut (`foil_offcut`)

Foil offcuts leave the factory.

- Selected flow: Aluminum electrode-foil offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `chemicon-technical-2026`

###### Spent aluminum-bearing chloride etching bath (`etch_bath`)

Spent chloride bath is transferred for treatment.

- Selected flow: Spent aluminum-bearing chloride etching bath
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `chemicon-technical-2026`

###### Spent ammonium-borate forming bath (`form_bath`)

Spent borate bath is transferred for treatment.

- Selected flow: Spent ammonium-borate forming bath
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `chemicon-technical-2026`

##### Elementary flows

###### Hydrogen, emission to air (`hydrogen_air`)

Electrochemical bath gas assessment establishes hydrogen release.

- Selected flow: Hydrogen, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_emission; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `chemicon-technical-2026`

###### Chlorine, emission to air (`chlorine_air`)

Chloride-bath gas assessment establishes chlorine release.

- Selected flow: Chlorine, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_emission; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `chemicon-technical-2026`

### Process: Aluminum electrolytic element winding, tab attachment and conditional impregnation (`al_element`)

Only pre-gate operations of an unfinished supplied element; distinguish dry from impregnated state。

#### Inputs

##### Product flows

###### Anode-formed aluminum capacitor foil (`formed_anode`)

Formed anode foil is purchased, so etching and formation are upstream.

- Selected flow: Anode-formed aluminum capacitor foil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Al coil of 0.05mm cathode etched foil (`etched_cathode`)

Purchased cathode foil matches 0.05 mm etched state; use another identity for another thickness or state.

Official Chinese baseName is retained; the qualifier is specifically 0.05 mm cathode etched foil. The supplier Process must declare geography and actual delivered state.

- Selected flow: Al coil of 0.05mm cathode etched foil `ebe375d5-efe7-42bb-bd33-2eccc1d87fce`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Capacitor-grade cellulose separator paper (`separator`)

Cellulose separator paper is slit and wound.

- Selected flow: Capacitor-grade cellulose separator paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Aluminum capacitor connection tab (`al_tab`)

A purchased aluminum tab is attached to the element.

- Selected flow: Aluminum capacitor connection tab
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Ethylene glycol electrolyte solvent (`eg_electrolyte`)

Site-documented pre-gate impregnation recipe contains ethylene glycol.

Not a default electrolyte. For a purchased proprietary electrolyte use one composition-qualified product input and do not add its embedded solvent again.

- Selected flow: Ethylene glycol electrolyte solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Ammonium borate electrolyte solute (`borate_electrolyte`)

Site-documented pre-gate impregnation recipe contains ammonium borate.

- Selected flow: Ammonium borate electrolyte solute
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Dry wound aluminum electrolytic capacitor precursor element (`bought_al_element`)

A dry wound element is purchased for further pre-gate work; do not duplicate its foils, separator and tabs.

- Selected flow: Dry wound aluminum electrolytic capacitor precursor element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

#### Outputs

##### Waste flows

###### Rejected aluminum electrolytic precursor element (`al_reject`)

Final nonreworked incomplete elements leave for treatment.

- Selected flow: Rejected aluminum electrolytic precursor element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `chemicon-technical-2026`

### Process: Capacitor-specific ceramic body preparation and conditional firing (`ceramic`)

Only when an externally supplied dedicated unfinished ceramic body is established; green sheets also serve other products。

#### Inputs

##### Product flows

###### Capacitor-grade barium titanate powder (`bto`)

BaTiO3 recipe is actually mixed on site.

- Selected flow: Capacitor-grade barium titanate powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `murata-green-sheet`

###### Polyvinyl butyral binder (`pvb`)

Actual qualified ceramic recipe uses PVB.

- Selected flow: Polyvinyl butyral binder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `murata-green-sheet`

###### Ethanol slurry solvent (`ethanol`)

Actual qualified ceramic recipe uses ethanol.

- Selected flow: Ethanol slurry solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `murata-green-sheet`

###### Toluene slurry solvent (`toluene`)

Actual qualified ceramic recipe uses toluene.

- Selected flow: Toluene slurry solvent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `murata-green-sheet`

###### Nickel internal-electrode paste (`nickel_paste`)

Purchased nickel paste is printed; its formulation is documented.

- Selected flow: Nickel internal-electrode paste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `murata-green-sheet`

###### Barium-titanate capacitor green sheet (`green_sheet`)

Dedicated green sheet is purchased rather than mixed and cast on site.

- Selected flow: Barium-titanate capacitor green sheet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `murata-green-sheet`

###### Nitrogen furnace gas (`nitrogen`)

Actual pre-gate ceramic heat-treatment atmosphere contains nitrogen.

- Selected flow: Nitrogen furnace gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `murata-green-sheet`

###### Fired barium-titanate nickel-electrode capacitor precursor body (`bought_ceramic_body`)

A dedicated unfinished fired body is purchased; supplier data cover its firing and embedded layers.

- Selected flow: Fired barium-titanate nickel-electrode capacitor precursor body
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `murata-green-sheet`

#### Outputs

##### Waste flows

###### Barium-titanate nickel-electrode green-body scrap (`ceramic_scrap`)

Unfired laminate scrap leaves for treatment.

- Selected flow: Barium-titanate nickel-electrode green-body scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `murata-green-sheet`

###### Fired barium-titanate nickel-electrode body scrap (`fired_scrap`)

Fired rejected bodies leave for treatment.

- Selected flow: Fired barium-titanate nickel-electrode body scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `murata-green-sheet`

##### Elementary flows

###### Ethanol, emission to air (`ethanol_air`)

Solvent assessment establishes uncaptured ethanol release.

- Selected flow: Ethanol, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_emission; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `murata-green-sheet`

###### Toluene, emission to air (`toluene_air`)

Solvent assessment establishes uncaptured toluene release.

- Selected flow: Toluene, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_emission; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `murata-green-sheet`

### Process: Tantalum anode pressing, sintering, formation and conditional coating (`tantalum`)

Only operations before the documented externally supplied unfinished anode or element gate。

#### Inputs

##### Product flows

###### Capacitor-grade tantalum powder (`ta_powder`)

Tantalum anodes are pressed on site; declare particle distribution and grade.

- Selected flow: Capacitor-grade tantalum powder
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `vishay-tantalum-40036`

###### Capacitor-grade tantalum anode wire (`ta_wire`)

Tantalum anode wire is inserted or joined.

- Selected flow: Capacitor-grade tantalum anode wire
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `vishay-tantalum-40036`

###### Sintered porous tantalum capacitor anode (`ta_anode`)

Sintered anode is purchased and only later part operations are foreground.

- Selected flow: Sintered porous tantalum capacitor anode
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `vishay-tantalum-40036`

###### Phosphoric acid forming-bath solute (`phosphoric`)

Actual qualified tantalum forming recipe contains phosphoric acid.

- Selected flow: Phosphoric acid forming-bath solute
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `vishay-tantalum-40036`

###### Deionized tantalum-process water (`ta_water`)

Tantalum formation or washing uses supplied water.

- Selected flow: Deionized tantalum-process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_water; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `vishay-tantalum-40036`

###### Manganese nitrate cathode-deposition precursor (`manganese_nitrate`)

Actual pre-gate MnO2 deposition uses manganese nitrate; retain concentration and reaction evidence.

- Selected flow: Manganese nitrate cathode-deposition precursor
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `vishay-tantalum-40036`

###### Silver cathode-coating paste (`silver_paste`)

Silver coating occurs before the dedicated-part gate.

- Selected flow: Silver cathode-coating paste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `vishay-tantalum-40036`

###### Poly(3,4-ethylenedioxythiophene) cathode dispersion (`pedot`)

An actual qualified conductive-polymer pre-gate route uses this specific dispersion.

Polymer cathode is an alternative route requiring independent supplier recipe evidence; the MnO2 chart does not establish its chemistry or quantities.

- Selected flow: Poly(3,4-ethylenedioxythiophene) cathode dispersion
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `vishay-tantalum-40036`

#### Outputs

##### Waste flows

###### Rejected tantalum capacitor anode (`ta_reject`)

Rejected anodes leave for recovery.

- Selected flow: Rejected tantalum capacitor anode
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `vishay-tantalum-40036`

###### Spent manganese-nitrate impregnation bath (`nitrate_bath`)

Spent manganese-nitrate bath is transferred for treatment.

- Selected flow: Spent manganese-nitrate impregnation bath
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `vishay-tantalum-40036`

##### Elementary flows

###### Nitrogen dioxide from nitrate decomposition, emission to air (`no2_ta`)

Species-resolved thermal-decomposition evidence establishes NO2 after control.

- Selected flow: Nitrogen dioxide from nitrate decomposition, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_emission; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources: `vishay-tantalum-40036`

### Process: Dedicated case and terminal forming, machining, joining and finishing (`hardware`)

Only actual operations making a capacitor-specific case or terminal to its drawing; no complete capacitor assembly。

#### Inputs

##### Product flows

###### Aluminum sheet for capacitor can drawing (`al_sheet`)

Dedicated aluminum case is formed on site; declare alloy and temper.

- Selected flow: Aluminum sheet for capacitor can drawing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Copper strip for capacitor terminal forming (`copper_strip`)

Dedicated copper terminal is formed on site.

- Selected flow: Copper strip for capacitor terminal forming
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Tin anode for terminal electroplating (`tin`)

Tin plating actually occurs before the supplied terminal gate.

- Selected flow: Tin anode for terminal electroplating
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Nickel sulfate plating-bath solute (`nickel_sulfate`)

Actual qualified finishing bath contains nickel sulfate.

- Selected flow: Nickel sulfate plating-bath solute
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Mineral-oil drawing lubricant (`forming_oil`)

Mineral-oil lubricant is used in case or terminal forming.

- Selected flow: Mineral-oil drawing lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Process washing water (`hw_water`)

Hardware washing uses supplied water.

- Selected flow: Process washing water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_water; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water`
- Sources: `chemicon-technical-2026`

###### Drawing-defined aluminum capacitor can (`bought_case`)

An unfinished capacitor assembly is not the output; a dedicated can is purchased for further pre-gate case finishing.

- Selected flow: Drawing-defined aluminum capacitor can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Drawing-defined copper capacitor terminal (`bought_terminal`)

A dedicated terminal is purchased for further pre-gate terminal work; do not charge embedded copper again.

- Selected flow: Drawing-defined copper capacitor terminal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

#### Outputs

##### Waste flows

###### Aluminum capacitor-can forming scrap (`al_hw_scrap`)

Aluminum trim leaves for recycling.

- Selected flow: Aluminum capacitor-can forming scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `chemicon-technical-2026`

###### Copper terminal-stamping scrap (`copper_scrap`)

Copper trim leaves for recycling.

- Selected flow: Copper terminal-stamping scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `chemicon-technical-2026`

###### Nickel-bearing plating-treatment sludge (`plating_sludge`)

Actual plating produces sludge transferred for treatment.

- Selected flow: Nickel-bearing plating-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `chemicon-technical-2026`

### Process: Dedicated sealing-part molding and cure (`seal`)

Only for an independently supplied capacitor-specific sealing part of a documented compound。

#### Inputs

##### Product flows

###### Qualified EPDM capacitor-seal molding compound (`epdm_compound`)

Documented seal recipe uses purchased EPDM compound.

This is a purchased formulated product; supplier data cover embedded polymer, fillers and cure agents once. Another elastomer is another individual exchange.

- Selected flow: Qualified EPDM capacitor-seal molding compound
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

###### Drawing-defined EPDM capacitor sealing plug (`bought_seal`)

A molded plug is purchased for further pre-gate seal finishing or qualification; upstream covers compounding and molding.

- Selected flow: Drawing-defined EPDM capacitor sealing plug
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_material; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material`
- Sources: `chemicon-technical-2026`

#### Outputs

##### Waste flows

###### EPDM capacitor-seal molding flash (`epdm_flash`)

EPDM flash leaves the factory.

- Selected flow: EPDM capacitor-seal molding flash
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `chemicon-technical-2026`

### Process: Shared factory utilities and conditional on-site generation (`utilities`)

All applicable routes; disjoint from process electricity already charged。

#### Inputs

##### Product flows

###### Alternating current (`electricity`)

Purchased CN grid supply is delivered at 1–35 kV; use a matching different identity for another geography or voltage.

This electricity identity uses the official ILCD property named Net calorific value with an energy unit group whose reference unit is MJ and whose kWh factor is3.6. Collect electrical energy in kWh and express it as MJ; this is not a fuel calorific coefficient in MJ/kg.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Use the matched measured amount under cp_energy; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Purchased saturated process steam (`steam`)

Steam is purchased at declared pressure and condensate-return interface.

- Selected flow: Purchased saturated process steam
- Flow property / unit: Delivered heat / MJ
- Amount rule: Use the matched measured amount under cp_energy; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

###### Pipeline natural gas fuel (`natural_gas`)

Factory burners or boilers consume pipeline gas; declare measured composition and delivery conditions.

- Selected flow: Pipeline natural gas fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_energy; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

#### Outputs

##### Elementary flows

###### Carbon dioxide, fossil, emission to air (`co2_fossil`)

On-site fossil-fuel combustion emits CO2.

- Selected flow: Carbon dioxide, fossil, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_emission; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide, emission to air (`co`)

Species-specific combustion evidence establishes CO.

- Selected flow: Carbon monoxide, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_emission; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide, emission to air (`no2`)

Species-specific combustion evidence establishes NO2; do not convert total NOx without a declared convention.

- Selected flow: Nitrogen dioxide, emission to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_emission; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_emission`
- Sources:

### Process: Part qualification, sorting, packing and supplier-gate release (`release`)

Every supplied part; electrical tests only appropriate to its incomplete state。

#### Inputs

##### Product flows

###### Corrugated cardboard shipping box (`box`)

This specific box is used in dispatch; document actual fibre mix.

- Selected flow: Corrugated cardboard shipping box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_pack; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `cbp-n355569-2025`

###### Low-density polyethylene protective bag (`pe_bag`)

LDPE bag is used in dispatch.

- Selected flow: Low-density polyethylene protective bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_pack; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pack`
- Sources: `cbp-n355569-2025`

#### Outputs

##### Product flows

###### Single drawing-defined dedicated electrical capacitor part (`reference_product`)

Only one qualified part number, revision, family and completion state is the reference output; do not pool families.

The reference identity is one specified part, never a material basket or complete functional capacitor. Use its concrete part name and matching physical flow identity in the dataset.

- Selected flow: Single drawing-defined dedicated electrical capacitor part
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output`
- Sources: `cbp-n355569-2025`

##### Waste flows

###### Rejected polypropylene capacitor precursor wound element (`film_reject`)

Final film-element rejects leave for treatment.

- Selected flow: Rejected polypropylene capacitor precursor wound element
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Use the matched measured amount under cp_waste; divide by accepted net shipped part mass for the same part and period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste`
- Sources: `cbp-n355569-2025`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `subdivide` | shared_load | Prefer disjoint lot records and submetering. Allocate residual shared energy using measured machine time/load or another demonstrated physical driver; reconcile allocated totals to site readings. |  |
| `coproduct` | saleable_outputs | For a real co-product document the physical relationship; if unavailable justify another consistent relationship and sensitivity. Scrap sale does not itself establish avoided virgin-production credit. |  |
| `rework` | recovery | Internal returns retain extra processing burdens once and are not final waste. External recovery follows one disclosed method compatible with upstream datasets; no unrecorded substitution credits. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material` | each applicable route | one specific input at a time | issue and stock records | part/revision; recipe; source-state; supplier; issued; returned; stock change; composition/assay; lot | Calibrated weighing and supplier certificates; separate purchased composites from site-mixed constituents | kg | each lot | complete declared period including setup and rework | defined factory and suppliers | per 1 kg reference flow | weighing calibration, recipe and supplier-state records |
| `cp_output` | release | reference output and internal transfers | acceptance and delivery ledger | part number/revision; completion-state; count; lot tare/net mass; measured mean mass; moisture/coating; rejects; work-in-progress stocks | Weigh each accepted lot on a calibrated scale, deduct packaging and tare, reconcile drawing/configuration and customer delivery; sample count-to-mass only with representative weighed samples | kg | each lot and transfer | same reporting period | production through dispatch | per 1 kg reference flow | customer drawing/interface, calibrated weights and acceptance/delivery evidence |
| `cp_energy` | all active processes | each electricity, steam or fuel independently | meter and energy ledger | meter id; stage; interval; kWh; fuel amount/composition/NCV; steam enthalpy/pressure; shared driver; operation, idle and rework | Disjoint submeters and supplier bills; measured driver for shared residue; onsite generation separately identifies fuel and output | MJ | each matched interval | same period as output | actual factory delivery boundary | per 1 kg reference flow | meter calibration, load study and supply-state records |
| `cp_water` | each water-using route | specific supplied water | meter record | meter; supply grade; batch; quantity; density/temperature for volume conversion; recycle and discharge | Meter water supply and separate internal recycle; preserve actual volume-to-mass conversion | kg | each interval | same reporting period | route-specific meter | per 1 kg reference flow | meter and density records |
| `cp_waste` | all applicable processes | one segregated waste stream | waste and assay ledger | identity; tare/gross/net; moisture; element/chemical assay; retained stocks; rework status; receiver and treatment | Segregated calibrated weighing and representative assay with destination receipt | kg | each removal and representative assay | same period including retained waste | route and external receiver | per 1 kg reference flow | weighing, lab analysis and treatment receipt |
| `cp_emission` | actual release points | one chemical species and compartment | post-control monitoring or verified species model | species; compartment; concentration; gas/liquid flow; time; production; capture; assay; detection limit; uncertainty; model conditions | Matched representative sampling after controls and fugitive assessment; preserve species-specific model evidence when measurement is unavailable | kg | representative cycles and process changes | cover complete reporting activity | identified stack/fugitive/direct-water boundary | per 1 kg reference flow | sampling reports, detection limits, model validity and control logs |
| `cp_pack` | release | each packaging component | issue and dispatch ledger | material/grade; component tare; count; reuse; shipments; damage | Weigh each actual component and reconcile issued/returned quantities | kg | each configuration and lot | same period | dispatch boundary | per 1 kg reference flow | packaging specification and weight records |

Protocol aggregation is per 1 kg reference flow. Apply the complete normalize rule to period totals: use only accepted net shipped product mass of the same part, revision, supplied state and period, after tare and shipping-package exclusion; match actual measurements, stocks, assays and internal-transfer cancellation.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize` | all inventory rows | Each external exchange amount = attributable recorded quantity for the selected part configuration / accepted net shipped part mass of that configuration and reporting period. Reference output is exactly 1 kg. Keep direction, process and physical unit distinct. | cp_material; cp_output; cp_energy; cp_water; cp_waste; cp_emission; cp_pack | amount per 1 kg reference flow |  |
| `count_mass` | reference output | Accepted count multiplied by measured mean net mass for that same lot/configuration yields lot mass; reconcile with calibrated direct lot weighing. Area multiplied by measured state-specific areal mass yields film/foil mass; do not apply another grade or coating. | cp_output; cp_material | verified kg before normalization |  |
| `internal_transfers` | paired internal links | Match the same lot, part-state and net quantity across sending/receiving records after work-in-progress changes; cancel only this paired transfer in aggregation. Its consumed energy and external wastes remain. | cp_output | no duplicated precursor burden |  |
| `balance` | route material and species balances | For each element/chemical, use matching measured composition on inputs, delivered part, waste, releases and stocks; include reaction sources/sinks such as oxide oxygen uptake and nitrate decomposition. Do not equate mixed gross mass with elemental mass or invent emissions to force closure. | cp_material; cp_output; cp_waste; cp_emission | balance residual with uncertainty |  |
| `combustion` | on-site fuel and emission rows | Carbon accounting can constrain fossil CO2 with verified composition and oxidized-carbon allocation; it cannot establish CO, NO or NO2. Each pollutant uses its own measurement or validated factor matching technology and controls; preserve total-NOx conventions separately. | cp_energy; cp_emission | species-specific release quantities |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `part_identity` | reference product | Demonstrate dedicated capacitor interface and external part delivery, with family, drawing/revision and completion state. No cross-family mass-equivalence claim. | customer/supplier drawing and delivery specification |
| `route_coverage` | actual line | Audit every actual input, formulation, reaction, utility, packaging, treatment and direct release. A source chart or conditional card does not establish absent exchanges. | BOM, make/buy matrix and control permits |
| `period` | all data | Use one complete coherent period including setup, idle, rework, rejects and stocks; retain supply geography, voltage/pressure and supplier technology. | production and utility reconciliations |
| `uncertainty` | every amount and identity | Retain calibration, assays, detection limits, supplier substitutions and uncertainties. No empirical mass, yield, energy or emission range is supplied by this PCR; collect actual values. Missing identity or amount stays explicit and blocks unqualified downstream use. | measurement and supplier evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `identity` | part_gate | Reject absent capacitor-specific interface, missing required qualifiers, undocumented external-part status or complete functional capacitors presented as parts. |  |
| `measurement` | all inventory | Require positive calibrated net accepted shipped mass for the exact configuration and period; verify every count/area conversion and each per-kg denominator, packaging exclusion and collection aggregation. |  |
| `make_buy` | upstream links | Check purchased processing states, upstream burdens once, internal-transfer cancellation and no duplicate embedded metal, binder, solvent or rubber. Completed steps and downstream completion must match delivered state. |  |
| `species` | chemical and waste rows | Verify specific flow identity, property/unit, species, moisture/assay and compartment. Captured dust/sludge is waste, not released emission. Assess bath gas and solvent/decomposition products individually; fuel carbon alone does not validate CO or NOx. |  |
| `coverage` | data package | Resolve every applicable conditional route with actual recipe and state. not_applicable requires absence evidence; unknown is incomplete. Report checks performed/skipped and unresolved provider/UUID/quantity gaps; no universal BOM or numeric default may close a gap. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground primary unit-process package for one dedicated capacitor part and declared completion gate |
| downstream_use | secondary_dataset; background_dataset after independent review and provider linkage |
| allowed_use | Production input to a matching downstream capacitor model at its actual supplied state |
| excluded_use | Complete-capacitor footprint or service-life claim; mass substitution across families, recipes or completion states; automatic CPC membership of unverified parts |
| required_metadata | All reference qualifiers; actual process and route coverage; net denominator; supplier delivery and transport/treatment links; allocation; geography/period; source editions |
| required_quality_disclosure | Primary-data coverage; missing species/UUID/provider identities; formulation and quantity gaps; uncertainty; conditional absence evidence; allocation and substitutions |
| update_trigger | Changed drawing, part interface, family, grade, supplied treatment, recipe, make/buy route, utilities, control, yield, measurement or acceptance state |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | official_guidance | United Nations CPC Version 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Classification identity only: 47110 electrical capacitors; 47171 its parts. Not commercial part-state or manufacturing evidence. |
| `cbp-n355569-2025` | official_guidance | U.S. Customs and Border Protection, N355569, 24 November 2025, PDF pp.1–2. https://rulings.cbp.gov/api/getdoc/ny/2025/N355569.pdf | Actual traded film precursor and performed/deferred steps. One factual case; no tariff rates, universal technology scope or numeric LCI adopted. |
| `wima-film-construction` | handbook | WIMA, Film capacitors, undated original, PDF p.4 illustrations3 and5; accessed 2026-10-02. https://www.wima.de/wp-content/uploads/media/WIMA-Filmcapacitors.pdf | Different metallized versus film/foil construction and PP/PET distinctions; no default part composition or process intensity. |
| `chemicon-technical-2026` | handbook | Nippon Chemi-Con, Technical Note, CAT. No. E1001A2026, sections1-3 and1-4, PDF p.410. https://www.chemi-con.co.jp/products/relatedfiles/capacitor/catalog/al-all-e.pdf | Electrode foil, oxide formation, separator/tab and can/seal distinctions; full-device process source applies only before documented part gate. Original corrects duplicated English web FAQ formation text. |
| `murata-green-sheet` | handbook | Murata, Green Sheet Process Technology, Technical Explanation; dated snapshot accessed2026-10-02. https://corporate.murata.com/en-eu/technology/technology-platform/production-technology/green-sheet-process | Ceramic forming/printing/lamination and non-capacitor counterexamples. Does not establish all ceramic intermediates as traded dedicated capacitor parts or specify all binders/solvents. |
| `vishay-tantalum-40036` | handbook | Vishay Sprague, Total Quality Commitment, document40036, revision21-Jul-06, PDF pp.2–3 (printed6–7). https://www.vishay.com/docs/40036/totqual.pdf | Tantalum pressing/sintering/formation and later MnO2 coating/assembly controls; full-device chart. Does not establish supplier sale, polymer route chemistry or current empirical LCI amounts. |
