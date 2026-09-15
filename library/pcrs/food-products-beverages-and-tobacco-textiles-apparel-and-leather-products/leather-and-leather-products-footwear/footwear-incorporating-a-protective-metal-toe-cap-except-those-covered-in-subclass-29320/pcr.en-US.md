---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-incorporating-a-protective-metal-toe-cap-except-those-covered-in-subclass-29320
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Footwear incorporating a protective metal toe-cap, except those covered in subclass 29320

## 1. Scope and Applicability

This PCR applies to finished footwear whose protective function depends on an incorporated metal toe cap and that falls under CPC 3.0 code 29510. It supports factory-gate foreground data packages from purchased upper, lining, insole, protective, sole, fastening, and packaging components through cutting, upper assembly, lasting and sole attachment, finishing, inspection, and packaging.

The PCR excludes footwear covered by CPC subclass 29320, footwear without a protective metal toe cap, protective footwear using only a non-metal toe cap, standalone footwear parts, use-stage care, distribution, and end-of-life. Upstream leather, textile, steel, polymer, adhesive, chemical, energy, and packaging production are represented by traceable upstream datasets rather than recreated inside the footwear assembly boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-incorporating-a-protective-metal-toe-cap-except-those-covered-in-subclass-29320 |
| classification_refs | CPC 3.0: 29510, exact scope reference |
| covered_products | Finished occupational or protective footwear incorporating a protective metal toe cap and not classified in CPC subclass 29320 |
| excluded_products | CPC 29320 footwear; footwear without a protective metal toe cap; footwear protected only by composite or plastic toe caps; standalone footwear parts; non-footwear protective equipment |
| representative_product | One specified model of finished protective metal-toe footwear, inspected and packaged at factory gate |
| production_route | Component receiving; cutting and preparation; upper sewing and bonding; metal toe-cap integration; lasting; sole attachment, moulding, or vulcanisation as declared; finishing; inspection; packaging |
| market_state | Finished footwear at factory gate, packaged for transfer to distribution |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared foot protection, fit, support, and walking function of a specified model incorporating a protective metal toe cap |
| How much | 1 kg of finished protective footwear at factory gate |
| How well | Conforming to the declared model specification, toe-cap material and protective performance, size range, construction route, and quality grade |
| How long or cycle | Declared intended service life or use-cycle basis; no default lifetime is imposed without product-specific evidence |
| reference_flow_link | The net mass of conforming finished footwear required to provide the declared function; for this factory-gate declared-unit PCR it is 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Footwear incorporating a protective metal toe-cap, except those covered in subclass 29320 `7c000468-f61e-4e05-8509-52da9fd77874` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | footwear model and intended protective use; CPC exclusion check against 29320; metal toe-cap material and specification; upper material; lining material; insole and midsole construction; outsole material; sole-attachment route; size range; net product mass; bill of materials by mass; adhesive and cleaner formulations; packaging configuration; factory-gate geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net mass of conforming finished footwear excluding transport packaging; record each packaging component separately. |
| `pair_to_mass` | records held by pair or item | Mass | kg | Convert pair or item counts using measured mass for the same model and size mix; retain count, sample mass, and sampling basis. |
| `bom_mass_consistency` | material and component inputs | Mass | kg | Reconcile bill-of-material quantities with issued, returned, scrapped, and incorporated masses for the production batch. |
| `energy_conversion` | electricity, steam, hot water, and natural gas | Energy | kWh or MJ | Preserve metered units and document every conversion factor; do not combine distinct energy carriers into one exchange. |

## 5. System Boundary

The foreground boundary begins when purchased materials and components enter the footwear-production site and ends when conforming footwear and separately recorded packaging leave the factory gate. It includes component preparation, upper assembly, metal toe-cap integration, lasting, sole attachment or moulding, route-specific heating and cooling, finishing, inspection, rework, and packaging. Each material, carrier, chemical, waste, and direct emission crossing the boundary is recorded separately.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Product-specific upper, lining, protective metal toe cap, insole, outsole, fastening, chemical, and packaging components are received with supplier, composition, mass, and lot records. |
| starting_condition_role | Purchased components are upstream product inputs; the foreground system performs footwear conversion and assembly rather than primary material production. |
| product_classification_scope | Finished footwear incorporating a protective metal toe cap under CPC 3.0 code 29510, explicitly excluding products in CPC subclass 29320. |
| recursive_input_rule | Purchased finished or semi-finished footwear already in this category is recorded as one upstream product input with a separate dataset and is not recursively decomposed inside the foreground package. |
| upstream_dataset_requirement | Use traceable upstream datasets for leather, textiles, steel toe caps, insole board, outsoles, shanks, thread, adhesives, solvents, electricity, thermal carriers, fuels, refrigerants, water, and packaging; disclose proxies. |
| disclosure | Declare model, protective use, classification exclusion check, full bill of materials, toe-cap specification, construction and sole route, included sites and subcontractors, energy and chemical routes, wastes, direct emissions, packaging, geography, and production period. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground production | Include all company-controlled and subcontracted operations from component receipt through packaged conforming footwear at factory gate. | `eu-pef-2021`; `af-pefcr-3-1` |
| `boundary_upstream_materials` | purchased products | Represent material and component production with upstream datasets and keep product-specific bill-of-material quantities in the foreground inventory. | `eu-pef-2021`; `af-pefcr-3-1` |
| `boundary_scope_exclusion` | product identity | Exclude CPC subclass 29320 and any footwear lacking an incorporated protective metal toe cap. | `un-cpc-3-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | Component receiving, cutting, and preparation | `required` | Always included | Foreground material preparation | kg of prepared components per batch |
| `upper_assembly` | Upper sewing, bonding, and toe-cap integration | `required` | Always included | Foreground upper assembly | kg of assembled protective upper per batch |
| `sole_attachment` | Lasting, sole attachment, moulding, or vulcanisation | `required` | Always included; route-specific carriers apply when used | Foreground bottom assembly | kg of unfinished protective footwear per batch |
| `finishing_packaging` | Finishing, inspection, and packaging | `required` | Always included | Foreground completion | 1 kg conforming finished footwear |

### Process: Component receiving, cutting, and preparation (`component_preparation`)

#### Inputs

##### Product flows

###### Finished bovine upper leather (`upper_leather`)

Upper leather issued to cutting is recorded by supplier lot, finish, thickness, area, and measured mass.

- Selected flow: Finished bovine upper leather
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass issued to cutting minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources: `af-pefcr-3-1`

###### Polyester footwear lining fabric (`lining_fabric`)

Polyester lining is recorded independently from upper leather and other textile components using issue and return records.

- Selected flow: Polyester footwear lining fabric
- Flow property / unit: Mass / kg
- Amount rule: Measured lining mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources: `af-pefcr-3-1`

###### Protective steel toe cap (`protective_steel_toe_cap`)

The incorporated protective steel toe cap is recorded separately from other steel parts and verified against the model bill of materials.

- Selected flow: Protective steel toe cap
- Flow property / unit: Mass / kg
- Amount rule: Measured incorporated toe-cap mass for the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources: `un-cpc-3-2025`; `af-pefcr-3-1`

###### Cellulose insole board (`cellulose_insole_board`)

Insole board is tracked as its own component so cutting loss and incorporation can be reconciled.

- Selected flow: Cellulose insole board
- Flow property / unit: Mass / kg
- Amount rule: Measured board mass issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources: `af-pefcr-3-1`

###### Electricity for component cutting (`electricity_cutting`)

Electricity for cutting, skiving, splitting, extraction, and preparation equipment is recorded for this stage only.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or calculated equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources: `eu-pef-2021`; `af-pefcr-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cut leather upper pieces (`cut_leather_upper_pieces`)

Accepted bovine-leather upper pieces are weighed after cutting and transferred independently from lining and insole pieces.

- Selected flow: Cut bovine-leather upper pieces
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted cut-leather mass transferred to upper assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources:

###### Cut polyester lining pieces (`cut_lining_pieces`)

Accepted cut polyester lining pieces are weighed as a separate intermediate exchange.

- Selected flow: Cut polyester footwear-lining pieces
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted cut-lining mass transferred to upper assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources:

###### Inspected protective steel toe cap (`prepared_steel_toe_cap`)

Accepted protective steel toe caps are counted and weighed independently before transfer to upper assembly.

- Selected flow: Inspected protective steel toe cap
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted toe-cap mass transferred to upper assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources:

###### Cut cellulose insole board (`cut_insole_board`)

Accepted cut insole-board pieces are weighed separately and transferred to sole attachment without aggregation with upper components.

- Selected flow: Cut cellulose insole board
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted cut-board mass transferred to sole attachment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources:

##### Waste flows

###### Upper-leather cutting offcuts (`leather_cutting_offcuts`)

Leather offcuts leaving cutting are weighed separately from reusable pieces retained in inventory.

- Selected flow: Upper-leather cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured offcut mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources: `af-pefcr-3-1`

###### Polyester lining cutting offcuts (`lining_cutting_offcuts`)

Polyester lining offcuts are measured as a distinct textile waste stream and not combined with leather waste.

- Selected flow: Polyester lining cutting offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured offcut mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources: `af-pefcr-3-1`

###### Cellulose insole-board offcuts (`insole_board_offcuts`)

Insole-board offcuts are weighed independently so the board material balance remains auditable.

- Selected flow: Cellulose insole-board offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured offcut mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared component output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_preparation`
- Sources: `af-pefcr-3-1`

##### Elementary flows

### Process: Upper sewing, bonding, and toe-cap integration (`upper_assembly`)

#### Inputs

##### Product flows

###### Cut leather upper input (`cut_leather_upper_input`)

Cut leather upper pieces received from preparation retain the same batch identity to prevent loss or double counting.

- Selected flow: Cut bovine-leather upper pieces
- Flow property / unit: Mass / kg
- Amount rule: Measured cut-leather mass received from component preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_assembly`
- Sources:

###### Cut polyester lining input (`cut_lining_input`)

Cut polyester lining pieces are received and reconciled separately from leather pieces.

- Selected flow: Cut polyester footwear-lining pieces
- Flow property / unit: Mass / kg
- Amount rule: Measured cut-lining mass received from component preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_assembly`
- Sources:

###### Inspected protective steel toe-cap input (`prepared_steel_toe_cap_input`)

Inspected steel toe caps are received under the batch bill of materials and kept distinct from other steel parts.

- Selected flow: Inspected protective steel toe cap
- Flow property / unit: Mass / kg
- Amount rule: Measured toe-cap mass received from component preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_assembly`
- Sources:

###### Polyester sewing thread (`polyester_sewing_thread`)

Polyester thread incorporated into the upper is measured from issue-return records or spool depletion.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Measured thread issued minus return and separately measured waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled protective upper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_assembly`
- Sources: `af-pefcr-3-1`

###### Polyurethane upper-assembly adhesive (`polyurethane_assembly_adhesive`)

Polyurethane adhesive used for upper bonding and toe-cap positioning is recorded by formulated product mass.

- Selected flow: Polyurethane footwear adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated adhesive issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled protective upper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_assembly`
- Sources: `af-pefcr-3-1`

###### Ethyl acetate cleaner (`ethyl_acetate_cleaner`)

Ethyl acetate is recorded only when this specific chemical is used to clean or activate bonding surfaces.

- Selected flow: Ethyl acetate
- Flow property / unit: Mass / kg
- Amount rule: Measured chemical input from purchase and inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled protective upper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_assembly`
- Sources: `af-pefcr-3-1`

###### Electricity for upper assembly (`electricity_upper_assembly`)

Electricity for sewing, bonding, extraction, and toe-cap integration is recorded independently from other stages.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or calculated equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled protective upper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_assembly`
- Sources: `eu-pef-2021`; `af-pefcr-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled protective footwear upper (`assembled_protective_upper`)

The assembled upper with its incorporated metal toe cap is weighed before lasting and sole attachment.

- Selected flow: Assembled protective footwear upper
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming upper mass transferred to sole attachment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembly batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_assembly`
- Sources:

##### Waste flows

###### Cured polyurethane adhesive residue (`cured_adhesive_residue`)

Cured adhesive residue removed from tools or rejected bonded parts is weighed separately from liquid chemical waste.

- Selected flow: Cured polyurethane adhesive residue
- Flow property / unit: Mass / kg
- Amount rule: Measured residue mass sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled protective upper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_assembly`
- Sources: `af-pefcr-3-1`

###### Empty steel adhesive container with residue (`empty_adhesive_container`)

Empty steel adhesive containers retaining residue are measured as one distinct hazardous or controlled waste stream.

- Selected flow: Empty steel adhesive container with residue
- Flow property / unit: Mass / kg
- Amount rule: Measured container mass transferred off site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled protective upper
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_upper_assembly`
- Sources:

##### Elementary flows

###### Ethyl acetate emitted to air (`ethyl_acetate_to_air`)

Direct ethyl acetate loss is calculated from a reconciled facility chemical balance or measured emissions.

- Selected flow: Ethyl acetate to air
- Flow property / unit: Mass / kg
- Amount rule: Monitored emission or chemical input minus recovered, retained, returned, and waste quantities
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg assembled protective upper
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_upper_assembly`
- Sources: `eu-pef-2021`; `af-pefcr-3-1`

### Process: Lasting, sole attachment, moulding, or vulcanisation (`sole_attachment`)

#### Inputs

##### Product flows

###### Assembled protective upper input (`assembled_upper_input`)

The assembled protective upper enters bottom assembly under the same production-batch identity.

- Selected flow: Assembled protective footwear upper
- Flow property / unit: Mass / kg
- Amount rule: Measured mass received from upper assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per sole-attachment batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_attachment`
- Sources:

###### Cut cellulose insole-board input (`cut_insole_board_input`)

Cut insole-board pieces received from preparation are weighed independently from the assembled upper and sole components.

- Selected flow: Cut cellulose insole board
- Flow property / unit: Mass / kg
- Amount rule: Measured cut-board mass received from component preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per sole-attachment batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_attachment`
- Sources:

###### Vulcanized rubber outsole (`vulcanized_rubber_outsole`)

Vulcanized rubber outsoles are recorded when used by the declared model and kept separate from polyurethane soles.

- Selected flow: Vulcanized rubber footwear outsole
- Flow property / unit: Mass / kg
- Amount rule: Measured incorporated outsole mass for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_attachment`
- Sources: `af-pefcr-3-1`

###### Polyurethane outsole (`polyurethane_outsole`)

Polyurethane outsoles are recorded only for models using that sole material and are not combined with rubber soles.

- Selected flow: Polyurethane footwear outsole
- Flow property / unit: Mass / kg
- Amount rule: Measured incorporated outsole mass for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_attachment`
- Sources: `af-pefcr-3-1`

###### Steel footwear shank (`steel_shank`)

The steel shank is recorded independently from the protective toe cap when incorporated in the declared model.

- Selected flow: Steel footwear shank
- Flow property / unit: Mass / kg
- Amount rule: Measured incorporated shank mass for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_attachment`
- Sources: `af-pefcr-3-1`

###### Polyurethane sole-attaching adhesive (`polyurethane_sole_adhesive`)

Sole-attaching adhesive is recorded as a separate formulated chemical for cemented construction routes.

- Selected flow: Polyurethane sole-attaching adhesive
- Flow property / unit: Mass / kg
- Amount rule: Measured formulated adhesive issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_attachment`
- Sources: `af-pefcr-3-1`

###### Electricity for sole attachment (`electricity_sole_attachment`)

Electricity for lasting, pressing, moulding, vulcanisation controls, extraction, and conveyors is stage-specific.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or calculated equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_attachment`
- Sources: `eu-pef-2021`; `af-pefcr-3-1`

###### Purchased steam (`purchased_steam`)

Purchased steam is recorded only when supplied across the site boundary for route-specific heating or vulcanisation.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam energy using recorded mass, pressure, and enthalpy basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_attachment`
- Sources: `eu-pef-2021`; `af-pefcr-3-1`

###### Process hot water (`process_hot_water`)

Hot water supplied to the process is recorded separately from steam and from sanitary water.

- Selected flow: Process hot water
- Flow property / unit: Energy / MJ
- Amount rule: Calculated from measured water mass, inlet temperature, outlet temperature, and documented heat capacity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_attachment`
- Sources: `eu-pef-2021`

###### Natural gas (`natural_gas`)

Natural gas combusted on site for route-specific thermal equipment is recorded independently from purchased heat.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered fuel quantity converted with the documented billing calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_attachment`
- Sources: `eu-pef-2021`; `af-pefcr-3-1`

###### Refrigerant R-134a make-up (`refrigerant_r134a`)

R-134a make-up is recorded only for process cooling equipment containing that specific refrigerant.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a)
- Flow property / unit: Mass / kg
- Amount rule: Measured refrigerant charged from service records and cylinder inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_attachment`
- Sources: `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unfinished protective metal-toe footwear (`unfinished_protective_footwear`)

Footwear completing bottom assembly is weighed before finishing, inspection, and packaging.

- Selected flow: Unfinished protective metal-toe footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming mass transferred to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per sole-attachment batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_attachment`
- Sources:

##### Waste flows

###### Vulcanized-rubber outsole trimmings (`rubber_outsole_trimmings`)

Rubber trimming waste from sole finishing is weighed separately from leather, textile, and polyurethane waste.

- Selected flow: Vulcanized-rubber outsole trimmings
- Flow property / unit: Mass / kg
- Amount rule: Measured trimming mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sole_attachment`
- Sources: `af-pefcr-3-1`

##### Elementary flows

###### Fossil carbon dioxide emitted to air (`carbon_dioxide_fossil_to_air`)

Direct fossil carbon dioxide from on-site natural-gas combustion is calculated from metered fuel and a documented applicable factor.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Natural-gas energy multiplied by the documented facility or jurisdiction factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_attachment`
- Sources: `eu-pef-2021`

###### R-134a emitted to air (`r134a_to_air`)

Direct R-134a loss is calculated from refrigerant inventory and service records and is not combined with other refrigerants.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a) to air
- Flow property / unit: Mass / kg
- Amount rule: Opening inventory plus purchases minus closing inventory, recovered mass, and off-site transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg unfinished protective footwear
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sole_attachment`
- Sources: `eu-pef-2021`

### Process: Finishing, inspection, and packaging (`finishing_packaging`)

#### Inputs

##### Product flows

###### Unfinished footwear input (`unfinished_footwear_input`)

Unfinished protective footwear enters finishing under the same batch identity used by sole attachment.

- Selected flow: Unfinished protective metal-toe footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured mass received from sole attachment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finishing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources:

###### Electricity for finishing (`electricity_finishing`)

Electricity for cleaning, polishing, inspection, testing, and packaging is recorded for this stage only.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or calculated equipment power multiplied by operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `eu-pef-2021`; `af-pefcr-3-1`

###### Process water for finishing (`process_water_finishing`)

Process water is recorded only for aqueous cleaning or finishing and is kept separate from sanitary use.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-dosed water crossing the foreground process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `eu-pef-2021`; `af-pefcr-3-1`

###### Water-based shoe polish (`water_based_shoe_polish`)

Water-based polish is recorded by formulated product mass when applied to the declared footwear model.

- Selected flow: Water-based shoe polish
- Flow property / unit: Mass / kg
- Amount rule: Measured polish issued minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `af-pefcr-3-1`

###### Corrugated paperboard footwear carton (`corrugated_carton`)

The corrugated carton shipped with the footwear is weighed separately from plastic packaging.

- Selected flow: Corrugated paperboard footwear carton
- Flow property / unit: Mass / kg
- Amount rule: Measured carton mass allocated to the shipped batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `af-pefcr-3-1`

###### Low-density polyethylene footwear bag (`ldpe_packaging_bag`)

The LDPE bag shipped with the product is recorded as one distinct packaging component.

- Selected flow: Low-density polyethylene footwear bag
- Flow property / unit: Mass / kg
- Amount rule: Measured bag mass allocated to the shipped batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `af-pefcr-3-1`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished protective metal-toe footwear (`finished_protective_footwear`)

This is the conforming inspected footwear at factory gate, measured as net product mass before transport packaging.

- Selected flow: Footwear incorporating a protective metal toe-cap, except those covered in subclass 29320 `7c000468-f61e-4e05-8509-52da9fd77874`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg reference output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Rejected protective metal-toe footwear (`rejected_protective_footwear`)

Rejected finished footwear leaving the foreground system is weighed separately from recoverable work in progress.

- Selected flow: Rejected protective metal-toe footwear
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass sent to the declared recovery or treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `af-pefcr-3-1`

###### Footwear finishing wastewater (`finishing_wastewater`)

Wastewater from aqueous finishing is measured separately from sanitary wastewater and linked to its treatment route.

- Selected flow: Footwear finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or water-balance result for aqueous finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished footwear
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing_packaging`
- Sources: `eu-pef-2021`; `af-pefcr-3-1`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared foreground operations | Subdivide or meter component preparation, assembly, sole attachment, finishing, and packaging by model or batch before applying allocation. | `eu-pef-2021`; `af-pefcr-3-1` |
| `allocation_physical_mass` | unavoidable shared burdens | When subdivision is not feasible and products receive comparable processing, allocate shared burdens by net conforming product mass and justify the physical relationship. | `eu-pef-2021` |
| `allocation_rework_rejects` | rework and rejects | Keep rework burdens in the batch that generated them; exclude rejected mass from conforming output and report its recovery or treatment route. | `af-pefcr-3-1` |
| `allocation_recovered_scrap` | sold or internally recovered scrap | Quantify recovered material as a separate output and disclose downstream treatment; apply no avoided-production credit inside the foreground inventory unless the downstream method requires it. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_preparation` | `component_preparation` | material inputs, electricity, four prepared component outputs, and three cutting-waste streams | receiving, issue-return, bill-of-material, scale, meter, and waste-transfer records | batch_id; model; material_id; supplier_lot; issued_kg; returned_kg; cut_leather_output_kg; cut_lining_output_kg; inspected_toe_cap_output_kg; cut_insole_board_output_kg; electricity_kWh; leather_offcut_kg; lining_offcut_kg; board_offcut_kg; treatment_route | Reconcile product-specific issue-return records with calibrated scales, meters, and batch genealogy | kg; kWh | Each batch, aggregated monthly | Declared representative production period or complete production campaign, with justification and gap disclosure | Every included cutting site and subcontractor | Sum linked batches and divide by conforming finished output; keep reusable stock out of waste | Scale and meter calibration; purchase and issue records; BOM revision; waste transfer records; batch genealogy |
| `cp_upper_assembly` | `upper_assembly` | leather pieces, lining pieces, steel toe caps, thread, adhesive, cleaner, electricity, output, wastes, and ethyl acetate emission | batch traveller, issue-return logs, chemical inventory, meters, scales, waste manifests, and emission or balance records | batch_id; cut_leather_input_kg; cut_lining_input_kg; inspected_toe_cap_input_kg; thread_kg; adhesive_input_kg; adhesive_return_kg; ethyl_acetate_input_kg; electricity_kWh; upper_output_kg; cured_residue_kg; container_waste_kg; ethyl_acetate_air_kg | Reconcile all material and chemical movements to assembled upper output and a chemical balance | kg; kWh | Each batch for materials; monthly for energy and emissions | Declared representative production period or complete production campaign, with justification and gap disclosure | Every included upper-assembly site and subcontractor | Sum linked records, calculate chemical losses only from reconciled terms, and normalize to output | BOM; scale and meter calibration; chemical inventory; waste manifests; monitoring or signed balance |
| `cp_sole_attachment` | `sole_attachment` | upper, insole board, outsole and shank components, adhesive, energy carriers, refrigerant, output, waste, and direct emissions | batch records, issue-return logs, utility meters, fuel invoices, service logs, scales, and waste records | batch_id; upper_input_kg; insole_board_input_kg; outsole_type; outsole_kg; shank_kg; adhesive_kg; electricity_kWh; steam_kg; steam_pressure; hot_water_kg; inlet_temperature; outlet_temperature; natural_gas_quantity; calorific_value; r134a_charge_kg; r134a_recovered_kg; output_kg; rubber_waste_kg | Meter or calculate each carrier separately and reconcile material, fuel, and refrigerant records | kg; kWh; MJ | Each batch for materials; monthly for utilities and emissions | Declared representative production period or complete production campaign, with justification and gap disclosure | Every included lasting and sole-attachment site | Normalize linked batch totals to output; preserve carrier-specific quantities and conversions | Meter calibration; bills; equipment logs; service records; scale calibration; emission calculations |
| `cp_finishing_packaging` | `finishing_packaging` | intermediate input, electricity, water, polish, packaging, product, reject, and wastewater | batch records, meters, issue-return logs, packaging specifications, scales, inspection logs, discharge records, and waste manifests | batch_id; unfinished_input_kg; electricity_kWh; process_water_m3; polish_input_kg; polish_return_kg; carton_kg; ldpe_bag_kg; finished_output_kg; rejected_kg; wastewater_m3 | Meter utilities, reconcile materials, weigh product and wastes, and link inspection disposition to batch | kg; kWh; m3 | Each batch for materials; monthly for utilities | Declared representative production period or complete production campaign, with justification and gap disclosure | Every included finishing and packaging site | Sum linked records and divide by net conforming finished mass | Meter and scale calibration; packaging specification; inspection log; discharge record; waste manifest |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | normalized exchange = linked batch exchange / net conforming finished-footwear mass | batch exchange; finished_output_kg | exchange per 1 kg finished footwear | `eu-pef-2021`; `af-pefcr-3-1` |
| `calc_pair_to_mass` | count-based records | converted mass = pair count × measured mean mass for the same model and documented size mix | pair count; sampled mass; sampled count; size mix | kg of specified component or product | `af-pefcr-3-1` |
| `calc_material_balance` | each preparation and assembly stage | input + opening stock = output + return + waste + closing stock + documented residual; investigate rather than force unexplained residuals | stage-specific mass records | material-balance residual | `eu-pef-2021`; `af-pefcr-3-1` |
| `calc_hot_water_energy` | process hot water | energy = measured water mass × documented heat capacity × temperature rise | water mass; inlet and outlet temperature; heat capacity | MJ hot-water energy | `eu-pef-2021` |
| `calc_refrigerant_loss` | R-134a cooling system | loss = opening inventory + purchases − closing inventory − recovered refrigerant − off-site transfers | refrigerant inventory and service records | kg R-134a to air | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate exact CPC 29510 scope, incorporated protective metal toe cap, and exclusion from CPC subclass 29320. | Product specification, toe-cap technical record, photographs or technical description, and classification review |
| `dq_product_bom` | bill of materials | Use a model- and revision-specific BOM and reconcile material issues, returns, incorporated mass, and losses. | Approved BOM, purchase and issue records, scales, and mass balance |
| `dq_primary_data` | foreground operations | Use company-specific records for materials, energy, chemicals, products, wastes, and direct emissions for all included sites and subcontractors. | Meters, scales, invoices, logs, manifests, monitoring, and subcontractor declarations |
| `dq_temporal` | declared-period or campaign dataset | Use a justified representative production period or complete campaign and disclose shutdowns, abnormal production, and gaps. | Production calendar, period completeness report, and gap log |
| `dq_transparency` | data gaps and proxies | Disclose every missing UUID, proxy dataset, allocation, conversion, exclusion, and material uncertainty. | Data-gap register and dataset metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require UUID `7c000468-f61e-4e05-8509-52da9fd77874`, Product flow type, CPC 29510 identity, Mass property, and explicit exclusion from CPC 29320. | `un-cpc-3-2025` |
| `validate_reference_amount` | reference flow | Require exactly 1 kg net conforming finished footwear and separate packaging exchanges. | `eu-pef-2021`; `af-pefcr-3-1` |
| `validate_qualifiers` | dataset metadata | Require every listed qualifier or an explicit, technically justified not-applicable declaration. | `af-pefcr-3-1` |
| `validate_atomic_inventory` | inventory | Reject combined materials, parts, energy carriers, fuels, chemicals, packaging, waste streams, refrigerants, or emissions. | `eu-pef-2021` |
| `validate_bom_and_loss` | manufacturing inventory | Require a product-specific BOM, stage yields or losses derived from records, and reconciliation of material waste by type. | `af-pefcr-3-1` |
| `validate_company_specific_data` | foreground manufacturing | Require company-specific manufacturing data for every included or subcontracted production stage. | `eu-pef-2021`; `af-pefcr-3-1` |
| `validate_completeness_transparency` | full data package | Require all environmentally relevant raw materials, energy, products, waste, and air, water, and soil emissions, with transparent gaps and exclusions. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground production dataset for protective metal-toe footwear under CPC 29510 |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` when model, protection, construction, geography, technology, and period are compatible |
| allowed_use | Factory-gate modelling of the declared protective footwear and aggregation into wider life-cycle models with transparent upstream datasets |
| excluded_use | CPC 29320 footwear; footwear without a metal toe cap; composite-only toe protection; standalone parts; use, distribution, or end-of-life; materially different construction without adjustment |
| required_metadata | PCR id and version; product model; CPC review; toe-cap specification; size mix; net mass; BOM revision; material composition; sole route; included sites and subcontractors; geography; period; allocation; upstream datasets; data gaps |
| required_quality_disclosure | Primary-data share; temporal and site coverage; BOM and loss reconciliation; calibration; carrier conversions; fuel and refrigerant balances; proxy datasets; missing UUIDs; uncertainty; abnormal operations; review status |
| update_trigger | Change in model, toe cap, material composition, BOM, supplier, site, subcontractor, sole route, adhesive or cleaner, energy or refrigerant system, packaging, allocation, upstream dataset, or production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 official resources and Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/CPC; repository retained raw structure `CPC_Ver_3.0_Structure_30Jun2025.csv` | Official CPC 29510 identity and CPC 29320 exclusion |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific BOM and company data, manufacturing LCI, raw materials, energy, products, wastes, air/water/soil emissions, completeness, and transparency |
| `af-pefcr-3-1` | `standard` | Product Environmental Footprint Category Rules (PEFCR) Apparel and Footwear, version 3.1, 29 April 2025, supplied evidence package | Footwear manufacturing BOM, loss, packaging, process-data structure, and company-specific manufacturing requirements |
