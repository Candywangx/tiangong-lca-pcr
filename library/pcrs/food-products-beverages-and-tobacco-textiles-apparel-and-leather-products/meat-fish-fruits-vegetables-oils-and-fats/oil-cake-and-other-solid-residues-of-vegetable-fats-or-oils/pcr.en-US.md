---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oil-cake-and-other-solid-residues-of-vegetable-fats-or-oils
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Oil-cake and other solid residues, of vegetable fats or oils

## 1. Scope and Applicability

This PCR applies to saleable solid products obtained directly when vegetable oil is separated from oilseeds or oleaginous fruits by mechanical pressing, expelling, hydraulic pressing, solvent extraction, or a combined pre-press/solvent route. Covered products include press cake, oil-cake, extracted solid residue, and finished meal when the product remains within this extraction-residue category. The foreground boundary includes receipt and preparation of the oil-bearing material, extraction, route-specific solvent recovery or pressing, residue conditioning, and storage/loadout at the producing mill.

The PCR excludes whole or merely milled oilseed flours and meals that have not undergone oil extraction; cocoa press cake assigned to cocoa-product manufacture; solid residues of animal fats; vegetable waxes, degras, soapstock, acid oil, bleaching earth, and other refining residues; and materials managed as waste rather than a saleable co-product. Oil refining after crude-oil separation, feed formulation, transport beyond the mill gate, and use by animals or other users are outside the foreground boundary.

The concrete data package shall identify the oil-bearing species, extraction route, whether hulls are removed or blended back, any solvent used, finishing state, intended market use, and geographical and temporal scope. Feed-grade claims trigger the feed-safety and traceability requirements in this PCR; this PCR does not itself certify legal feed compliance.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oil-cake-and-other-solid-residues-of-vegetable-fats-or-oils |
| classification_refs | CPC 3.0: 21910, exact mapping context |
| covered_products | Saleable press cakes, oil-cakes, extracted solid residues, and route-finished meals produced by extraction of vegetable fats or oils from declared oilseeds or oleaginous fruits |
| excluded_products | Non-extracted oilseed flour/meal; cocoa-processing cake; animal-fat residues; waxes, degras, soapstock, acid oil, spent bleaching earth, and other oil-refining residues; discarded waste |
| representative_product | Mustard oil press cake from mechanical extraction, used as the concrete reference-flow representative while the PCR remains applicable to the broader declared category |
| production_route | Mechanical pressing, solvent extraction with solvent recovery, or combined pre-press/solvent extraction, followed as applicable by desolventizing/toasting, drying, cooling, grinding, sizing, pelleting, storage, and loadout |
| market_state | Bulk loose, ground, sized, or pelletized product at the producing mill gate; moisture, residual oil, hull inclusion, treatment state, and intended use declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Saleable oil-cake or other solid residue providing a material or feed-ingredient function after extraction of vegetable fat or oil |
| How much | 1 kg of as-sold product at the producing mill gate |
| How well | Conforms to the declared species, route, moisture, residual-oil, hull-content, treatment, contamination-control, and market-grade specifications |
| How long or cycle | One production lot at mill-gate release; no service duration is assigned |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the declared as-sold reference product; dry-matter results are reported additionally and are not substituted silently for as-sold mass |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Mustard oil press cake `1fb23bcc-f166-4b96-b451-56264a8af86a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | oil-bearing species and cultivar where material; extraction route; mechanical/solvent/combined route; solvent identity where used; dehulling and hull blending; moisture and dry-matter fraction; residual oil; treatment and toasting state; physical form; feed/food/technical grade; facility location; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. The selected Tiangong flow is a representative exact-category identity for mustard mechanical press cake; another category-compatible Tiangong product flow shall be selected when the declared product is not mustard mechanical press cake.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_sold` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference amount on the as-sold mill-gate mass basis and record the associated moisture test or declared moisture specification. |
| `dry_matter_conversion` | reference product and solid process flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg dry matter and kg as sold | When a source record is dry-basis, calculate as-sold and dry-matter quantities separately using measured moisture; never treat them as interchangeable. |
| `utility_conversion` | electricity, steam, fuel, and water | Relevant Tiangong property selected for the concrete utility flow | kWh, MJ, kg, or m3 as recorded | Preserve metered units and document conversion factors; normalize only after allocating shared meters to the declared production lot. |
| `solvent_balance` | solvent-extraction route | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record fresh solvent purchases, recovered solvent returned to extraction, inventory change, solvent in products/wastes, and releases separately; report net makeup as purchases minus inventory increase and externally returned solvent. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Oilseeds or oleaginous fruits received at the extraction facility, with incoming mass, moisture, oil content where available, origin, lot identity, and any prior drying or dehulling declared |
| starting_condition_role | Upstream product input to the foreground oil-extraction system |
| product_classification_scope | Solid saleable residues produced by extraction of vegetable fats or oils; adjacent non-extraction meals, refining residues, waxes, and animal-fat residues are excluded |
| recursive_input_rule | Purchased oil-cake or extracted residue of the same category used for blending or reprocessing is recorded once as an external product input with its own upstream dataset; do not recursively recreate its extraction history inside this foreground package |
| upstream_dataset_requirement | Use a geographically, technologically, and temporally representative upstream dataset for each received oil-bearing material and for material utilities; disclose proxy use and any excluded cultivation or preprocessing stage |
| disclosure | Declare facility gate, product and co-product cut points, route, solvent loop, internal recycling, included residue finishing, upstream coverage, infrastructure policy, transport coverage, and excluded downstream use |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_extraction_chain` | all routes | Include receiving/handling, preparation, extraction, and the conditioning required to make the solid residue saleable at the mill gate; include cleaning, dehulling, cracking, conditioning, flaking, pressing, extraction, desolventizing/toasting, drying, cooling, grinding, sizing, pelleting, storage, and loadout when performed. | `epa-ap42-vegetable-oil-1995` |
| `boundary_route_specific` | route selection | Include mechanical and solvent operations only when used by the declared route. For solvent extraction, include solvent recovery, condensate handling, and measured fugitive or vent releases; do not model recovered solvent as both avoided production and a negative input. | `us-epa-solvent-extraction-neshap`; `epa-ap42-vegetable-oil-1995` |
| `boundary_upstream_and_downstream` | life-cycle coverage | Link received oil-bearing materials and purchased utilities to upstream datasets. Exclude crude-oil refining, feed formulation, distribution beyond the mill gate, and product use unless the study explicitly extends the boundary and reports those additions separately. | `eu-pef-2021-2279` |
| `boundary_waste_and_internal_recycling` | wastes and internal loops | Record wastes and releases at the point they cross the foreground boundary. Keep recovered solvent and internally recirculated intermediate solids inside the process balance; record only net external inputs and outputs in the published exchange set while retaining gross loop records for QA. | `epa-ap42-vegetable-oil-1995`; `mass-balance-identity` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `oilseed_preparation` | Receipt and oilseed preparation | `required` | Always include the preparation actually performed at the reporting facility | Foreground receipt, cleaning, optional drying/dehulling, size reduction, conditioning, and flaking | kg prepared oil-bearing material |
| `mechanical_extraction` | Mechanical oil extraction | `conditional` | Include for expeller, screw-press, hydraulic-press, or pre-press stages | Foreground separation of expressed oil and press cake | kg press discharge solids |
| `solvent_extraction` | Solvent extraction and recovery | `conditional` | Include when an organic solvent contacts prepared seed or pre-pressed cake | Foreground extraction, oil/solvent separation, solvent recovery, and solvent-laden solids transfer | kg solvent-laden extracted solids |
| `residue_finishing` | Residue conditioning and mill-gate release | `required` | Always include finishing needed for the declared saleable state | Foreground desolventizing/toasting where applicable, drying, cooling, grinding/sizing/pelleting, storage, and loadout | 1,000 kg as-sold reference product |

### Process: Receipt and oilseed preparation (`oilseed_preparation`)

#### Inputs

##### Product flows

###### Received oil-bearing material (`received_oil_material`)

Oilseeds or oleaginous fruits cross the facility boundary with their upstream burdens. Lot mass and moisture are collected; oil content and foreign matter are collected when used for yield or quality calculations.

- Selected flow: Category- and origin-specific oilseed or oleaginous-fruit product flow
- Flow property / unit: Mass / kg
- Amount rule: measured net received mass for lots attributable to the reporting production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts`
- Sources: `epa-ap42-vegetable-oil-1995`

###### Preparation electricity (`preparation_electricity`)

Electricity used for conveying, aspiration, cracking, dehulling, grinding, conditioning auxiliaries, and flaking is recorded from a dedicated meter or allocated shared meter.

- Selected flow: Geography- and voltage-specific electricity product flow
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `epa-ap42-vegetable-oil-1995`

##### Waste flows

#### Outputs

##### Product flows

###### Prepared oil-bearing material (`prepared_oil_material`)

Prepared material is an internal intermediate quantified for yield and mass-balance control and passed to the declared extraction route.

- Selected flow: Site-specific prepared oil-bearing material intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass or calculated received mass less measured removed material and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_outputs`
- Sources: `mass-balance-identity`

##### Waste flows

###### Removed foreign matter and rejected seeds (`preparation_rejects`)

Foreign matter, damaged seeds, and non-saleable cleaning rejects leaving the foreground process are recorded by destination and treatment route.

- Selected flow: Destination-specific biogenic or mixed preparation waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs`
- Sources: `epa-ap42-vegetable-oil-1995`

##### Elementary flows

###### Preparation particulate release to air (`preparation_particulate_air`)

Measured or permitted particulate releases from handling, drying, aspiration, and size reduction are recorded after control-device capture.

- Selected flow: Size-fraction- and compartment-specific particulate matter elementary flow
- Flow property / unit: Mass / kg
- Amount rule: stack/fugitive measurement or documented engineering calculation for the reporting lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `epa-ap42-vegetable-oil-1995`

### Process: Mechanical oil extraction (`mechanical_extraction`)

#### Inputs

##### Product flows

###### Prepared material to press (`press_feed`)

Prepared oil-bearing material entering the press is recorded as the route-specific mass-balance feed.

- Selected flow: Site-specific prepared oil-bearing material intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured press-feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs`
- Sources: `mass-balance-identity`

###### Pressing electricity and heat (`pressing_utilities`)

Electricity and any conditioning heat attributable to pressing are recorded separately by utility in the source ledger and aggregated only for display.

- Selected flow: Geography- and technology-specific electricity, steam, or fuel product flow
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered or allocated utility consumption for pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `epa-ap42-vegetable-oil-1995`

##### Waste flows

#### Outputs

##### Product flows

###### Expressed crude vegetable oil (`expressed_crude_oil`)

Crude oil is a co-product of the shared extraction operation and is measured before downstream refining.

- Selected flow: Oilseed-specific crude vegetable oil product flow
- Flow property / unit: Mass / kg
- Amount rule: measured crude-oil output corrected for documented stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs`
- Sources: `eu-pef-2021-2279`; `mass-balance-identity`

###### Press cake to finishing (`press_cake_intermediate`)

Press cake leaving mechanical extraction is measured before drying, cooling, grinding, pelleting, or blending.

- Selected flow: Oilseed-specific press-cake intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured press-cake output and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs`
- Sources: `fao-oilseeds-postharvest`; `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Solvent extraction and recovery (`solvent_extraction`)

#### Inputs

##### Product flows

###### Prepared flakes or pre-pressed cake (`solvent_extraction_feed`)

The mass and moisture of material entering solvent extraction are collected for the extraction and solvent balances.

- Selected flow: Site-specific prepared flakes or pre-pressed cake intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured extractor feed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs`
- Sources: `epa-ap42-vegetable-oil-1995`

###### Net extraction solvent makeup (`solvent_makeup`)

Fresh organic solvent crossing the facility boundary is reported net of returned external solvent and separately from internal recovery and recirculation.

- Selected flow: Declared extraction-solvent product flow, normally n-hexane where applicable
- Flow property / unit: Mass / kg
- Amount rule: purchased solvent minus inventory increase and externally returned solvent, reconciled with product, waste, and release records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance`
- Sources: `us-epa-solvent-extraction-neshap`; `epa-ap42-vegetable-oil-1995`; `mass-balance-identity`

###### Solvent extraction utilities (`solvent_extraction_utilities`)

Electricity, direct or indirect steam, fuel, cooling water, and other purchased utilities are recorded separately before normalization.

- Selected flow: Geography- and technology-specific electricity, steam, fuel, and water product flows
- Flow property / unit: Energy or mass / kWh, MJ, kg, or m3
- Amount rule: metered or allocated utility consumption for extraction, distillation, condensation, recovery, and transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `epa-ap42-vegetable-oil-1995`

##### Waste flows

#### Outputs

##### Product flows

###### Crude oil from solvent extraction (`solvent_crude_oil`)

Desolventized crude oil is a co-product measured before storage or downstream refining.

- Selected flow: Oilseed-specific crude vegetable oil product flow
- Flow property / unit: Mass / kg
- Amount rule: measured desolventized crude-oil output corrected for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs`
- Sources: `eu-pef-2021-2279`; `epa-ap42-vegetable-oil-1995`

###### Extracted solids to finishing (`extracted_solids_intermediate`)

Solvent-laden or desolventized extracted solids are measured at the declared handoff to residue finishing; the exact state is disclosed.

- Selected flow: Oilseed- and state-specific extracted-solids intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass, moisture, and solvent state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs`
- Sources: `epa-ap42-vegetable-oil-1995`

##### Waste flows

###### Solvent-bearing condensate or treatment residue (`solvent_route_waste`)

Condensate or treatment residues leaving the solvent loop are recorded by mass, solvent content, and treatment destination without netting them against recovered solvent.

- Selected flow: Destination-specific solvent-bearing waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass and analytical or calculated solvent content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solvent_balance`
- Sources: `epa-ap42-vegetable-oil-1995`

##### Elementary flows

###### Organic solvent release to air (`solvent_release_air`)

Measured or mass-balance-derived releases are reported as the chemically specific elementary flow to air; n-hexane is not replaced by a generic VOC flow when it is the solvent used.

- Selected flow: Chemically specific organic-solvent elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack and fugitive release or solvent-balance residual, with method hierarchy disclosed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `us-epa-solvent-extraction-neshap`; `mass-balance-identity`

### Process: Residue conditioning and mill-gate release (`residue_finishing`)

#### Inputs

##### Product flows

###### Extraction residue entering finishing (`residue_finishing_feed`)

Press cake or extracted solids enter the finishing step in the state declared by the extraction process.

- Selected flow: Oilseed- and route-specific extraction-residue intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass, moisture, residual oil, and solvent state where applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs`
- Sources: `epa-ap42-vegetable-oil-1995`

###### Finishing utilities and additions (`finishing_inputs`)

Steam, fuel, electricity, cooling water, and intentionally blended hulls or other additions are recorded separately in source records and by matched Tiangong flow in the concrete dataset.

- Selected flow: Geography- and technology-specific utility or declared addition product flow
- Flow property / unit: Energy or mass / kWh, MJ, kg, or m3
- Amount rule: metered, weighed, or allocated input to desolventizing/toasting, drying, cooling, grinding, sizing, pelleting, storage, and loadout
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities`
- Sources: `epa-ap42-vegetable-oil-1995`

##### Waste flows

#### Outputs

##### Product flows

###### Saleable oil-cake or solid residue (`reference_oil_cake`)

The finished category product leaves the mill gate at the declared moisture, residual-oil, treatment, physical-form, and grade specification.

- Selected flow: Mustard oil press cake `1fb23bcc-f166-4b96-b451-56264a8af86a` for the representative mustard mechanical route; otherwise the matched category-compatible Tiangong product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1,000 kg as-sold reference product, supported by weighbridge, bagging, or loadout records
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`

##### Waste flows

###### Off-specification residue and captured dust (`finishing_waste`)

Off-specification solids and captured particulate matter leaving the process are reported by recovery, rework, sale, or disposal route; internally reworked material is tracked but not double-counted as an external output.

- Selected flow: Destination-specific solid process-waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured external waste mass net of documented internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_outputs`
- Sources: `epa-ap42-vegetable-oil-1995`

##### Elementary flows

###### Finishing particulate release to air (`finishing_particulate_air`)

Particulate releases from drying, cooling, grinding, sizing, storage, and loadout are reported after abatement.

- Selected flow: Size-fraction- and compartment-specific particulate matter elementary flow
- Flow property / unit: Mass / kg
- Amount rule: measured release or documented engineering calculation for the reporting lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg as-sold reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `epa-ap42-vegetable-oil-1995`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | all foreground processes | Subdivide and directly assign separately metered preparation, extraction, finishing, storage, waste-treatment, and emission flows whenever their causal link to a product or process is known. | `eu-pef-2021-2279` |
| `allocation_shared_extraction` | crude oil, oil-cake, hulls, and other saleable outputs from shared extraction | When subdivision cannot resolve shared burdens, first test and document a defensible physical causal relation. If no representative physical relation can be established, allocate shared burdens by contemporaneous economic value at the common separation point using measured saleable masses and auditable prices; disclose the method and provide a sensitivity result for a plausible alternative. | `eu-pef-2021-2279` |
| `allocation_route_consistency` | internal intermediates and solvent recovery | Do not allocate burdens to internal transfers or recovered solvent recirculated within the facility. Assign solvent-recovery energy and releases to the solvent-extraction system before allocating shared extraction burdens to saleable outputs. | `epa-ap42-vegetable-oil-1995`; `eu-pef-2021-2279` |
| `allocation_waste_and_system_expansion` | wastes and avoided-product claims | Keep treatment burdens for discarded material in the system unless a governing study rule specifies otherwise. Do not grant avoided-product credit or apply system expansion by default; if a governing method requires it, report the substituted product, substitution ratio, evidence, and a result without the credit. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `oilseed_preparation` | received oil-bearing material | weighbridge, receipt, supplier, and laboratory records | lot_id; species; origin; supplier; gross_mass; tare_mass; moisture; oil_content_if_used; foreign_matter; receipt_time | calibrated weighbridge plus representative laboratory sample | kg; mass fraction | each incoming lot | same representative period as output | all oil-bearing material supplying the declared product | net lot mass assigned by production batch or documented inventory reconciliation | calibration record; sampling plan; laboratory method; supplier traceability |
| `cp_utilities` | all included processes | electricity, steam, fuel, water, and additions | utility meter, invoice, and allocation records | meter_id; opening; closing; unit; fuel/addition mass; allocation_driver; process_id; timestamp | dedicated meter preferred; shared meter allocated by documented operating time, throughput, or engineering driver | source unit and converted kWh, MJ, kg, or m3 | at least monthly and for material batch campaigns | representative continuous 12-month period or documented campaign | all included equipment and utilities | sum dedicated use plus disclosed allocation of shared use; exclude unrelated production | meter calibration; invoices; allocation worksheet; conversion factors |
| `cp_mass_outputs` | all included processes | intermediates, products, co-products, rejects, and stock | scale, stock, dispatch, and laboratory records | lot_id; flow_role; gross_mass; tare_mass; moisture; residual_oil_if_relevant; opening_stock; closing_stock; destination | calibrated scale, weighbridge, tank gauge, or validated mass balance | kg; mass fraction | each batch or transfer, reconciled monthly | same period as material and utility records | all included output and internal transfer points | sum external outputs and reconcile internal transfers and stock changes without double counting | calibration record; stock reconciliation; laboratory method; dispatch record |
| `cp_solvent_balance` | `solvent_extraction` | solvent makeup, recovery, inventory, products, wastes, and releases | purchase, tank, recovery, emission, and analytical records | solvent_identity; purchased_mass; returned_mass; opening_stock; closing_stock; recovered_internal_mass; product_or_waste_solvent; measured_release | purchase and inventory records plus recovery meters and analytical tests | kg | each solvent receipt and at least monthly balance | full reporting period | complete solvent loop and emission points | calculate net external makeup and close the solvent balance; retain gross recovery separately | purchase invoice; tank calibration; analytical method; balance reconciliation |
| `cp_air_emissions` | all included processes | particulate and organic-solvent releases | stack test, monitoring, leak-survey, and engineering-calculation records | source_id; pollutant; concentration; gas_flow; operating_time; fugitive_method; control_efficiency; detection_limit | compliant stack test, continuous/periodic monitoring, leak survey, or documented mass-balance/engineering method | kg and source measurement units | legal or permit frequency and each material route change | representative reporting period | all included point and fugitive sources | convert measured concentrations and activity to pollutant mass; do not substitute generic VOC for known solvent | test report; instrument calibration; permit report; method statement |
| `cp_product_quality` | `residue_finishing` | reference-product quality and grade | release-lot laboratory, specification, and nonconformance records | lot_id; moisture; dry_matter; residual_oil; hull_content; protein_if_claimed; solvent_residue_if_relevant; physical_form; grade; intended_use; nonconformance | representative lot sampling and validated laboratory or specification method | mass fraction and declared units | each release lot or documented risk-based plan | same output lots as reference mass | all reference-product grades in scope | retain lot results; mass-weight averages may describe the reporting period but shall not erase grade differences | sampling plan; method identifier; laboratory competence; certificate of analysis |
| `cp_prices_and_allocation` | `mechanical_extraction`; `solvent_extraction` | co-product allocation | invoice, contract, production, and representative market records | product_id; saleable_mass; price; currency; price_basis; contract_date; separation_point | audited sales records or representative market records at the common separation point | currency/kg as sold and dry matter | monthly or each contract period | same period as physical production | all saleable co-products receiving shared burdens | calculate mass and revenue shares on consistent moisture and price bases; document zero-price or non-saleable outputs | invoices; contracts; currency conversion; sensitivity worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | every external exchange | normalized amount = period exchange amount / period as-sold reference-product mass x 1,000 kg | reconciled exchange amount; reconciled reference-product output | amount per 1,000 kg as-sold reference product | `mass-balance-identity` |
| `calc_dry_matter` | solid material and product | dry mass = as-sold mass x (1 - moisture mass fraction); retain both masses and test basis | as-sold mass; measured moisture | kg dry matter and dry-matter fraction | `mass-balance-identity` |
| `calc_mass_balance` | each process and total foreground | imbalance = inputs + opening stock - outputs - closing stock; investigate rather than forcing an unexplained residual to the reference product | measured product/waste masses; stock; measured emissions where material | signed imbalance and percentage of total measured input | `mass-balance-identity` |
| `calc_net_solvent_makeup` | solvent-extraction route | net external solvent makeup = purchases + external receipts - external returns - inventory increase; reconcile with solvent in products, wastes, and releases while recording internal recovery separately | purchase/return records; opening/closing stock; product/waste tests; measured emissions | kg net makeup and solvent-balance closure | `epa-ap42-vegetable-oil-1995`; `mass-balance-identity` |
| `calc_economic_allocation` | shared extraction burdens when physical allocation is not defensible | revenue share i = saleable mass i x representative price i / sum of saleable mass x price for all co-products at the separation point | co-product masses; contemporaneous comparable prices; moisture basis | allocation factor for each saleable co-product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_traceability` | reference product and oil-bearing input | Retain lot identity, species, origin, supplier, route, intended use, production date, and trace-forward destination. Feed-grade products shall support timely withdrawal/recall and risk-based inspection, sampling, and analysis. | `codex-cxc-54-2004` |
| `dq_temporal_alignment` | all foreground records | Material, utility, output, price, stock, and emission records shall cover the same representative period; shorter campaigns require documented representativeness and stock reconciliation. | `eu-pef-2021-2279` |
| `dq_measurement_quality` | mass, moisture, oil, solvent, utilities, and emissions | Identify instrument or method, calibration or competence evidence, detection limits where relevant, missing-data treatment, and uncertainty or sensitivity for material calculations. | `codex-cxc-54-2004`; `eu-pef-2021-2279` |
| `dq_feed_safety` | products declared for animal feed | Document safe source, stable and protected storage condition, risk-based undesirable-substance controls, applicable legal specifications, clear handling/use information, lot identification, and validated sampling/analysis. | `codex-cxc-54-2004` |
| `dq_completeness` | all included processes | Reconcile at least 95% of measured oil-bearing-material mass by identified product, co-product, waste, emission where measured, and stock change; disclose the residual and do not invent a balancing flow. | `mass-balance-identity` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Fail when oil-bearing species, extraction route, mill-gate state, moisture/dry-matter basis, residual-oil state, hull treatment, intended use, or physical form is missing; fail if the representative mustard flow UUID is used for a different product. | `fao-oilseeds-postharvest`; `mass-balance-identity` |
| `validate_route_boundary` | process map | Require at least one extraction route, require `solvent_extraction` when solvent contacts the feed, and reject simultaneous mechanical and solvent stages unless the combined route and intermediate handoff are declared. | `epa-ap42-vegetable-oil-1995`; `us-epa-solvent-extraction-neshap` |
| `validate_reference_mass` | reference flow | Require exactly 1 kg for the declared reference flow and a reported moisture result or specification; require 1,000 kg as-sold output in normalized inventory and verify the dry-matter conversion independently. | `mass-balance-identity` |
| `validate_mass_and_solvent_balance` | foreground inventory | Report process and total mass-balance residuals. For solvent routes, require solvent identity, purchases, recovery, stock change, product/waste solvent, and releases; unresolved material imbalance is an error, not an invented flow. | `epa-ap42-vegetable-oil-1995`; `mass-balance-identity` |
| `validate_allocation` | shared burdens | Require subdivision evidence or a documented allocation hierarchy, complete co-product list, consistent separation point, auditable factors summing to 1, price/physical basis, and sensitivity result where economic allocation is used. | `eu-pef-2021-2279` |
| `validate_feed_claim` | feed-grade declaration | Require lot traceability, safe-source evidence, applicable undesirable-substance controls, handling/storage information, sampling plan, validated analyses, and nonconformance disposition before a feed-grade claim is accepted. | `codex-cxc-54-2004` |
| `validate_completeness` | published dataset | Require all required and triggered conditional processes, aligned temporal coverage, disclosed proxy datasets, explicit wastes and releases, and data-quality evidence; mark validation inconclusive when required source records are unavailable. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for oil-cake or another saleable solid residue of vegetable-oil extraction |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and publication controls |
| allowed_use | Product carbon-footprint or LCA models requiring mill-gate oil-cake production; supplier and facility comparisons only when product qualifiers, boundaries, allocation, geography, technology, and period are equivalent |
| excluded_use | Legal feed-safety certification; nutritional equivalence; substitution credit without a governing method; use as a generic proxy across different oilseeds, extraction routes, grades, or moisture states without documented justification |
| required_metadata | PCR id/version; product flow UUID; species; origin; facility/geography; period; extraction route; solvent; dehulling/hull blending; moisture/dry matter; residual oil; treatment; form; grade/intended use; boundary; upstream datasets; allocation; technology; data owner |
| required_quality_disclosure | Primary-data share; measurement and sampling methods; calibration/laboratory evidence; temporal and geographical representativeness; proxy data; missing-data treatment; mass and solvent balance; allocation sensitivity; uncertainty; feed-safety evidence when claimed |
| update_trigger | Change in oil-bearing species mix, extraction or solvent technology, solvent recovery, energy source, residue finishing, hull blending, product grade/specification, allocation relation/prices, facility boundary, regulation, or a material shift in yield, utility use, emissions, or product quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `epa-ap42-vegetable-oil-1995` | `official_guidance` | U.S. EPA, AP-42 Section 9.11.1, Vegetable Oil Processing, November 1995. https://gaftp.epa.gov/ap42/ch09/s1101/final/c9s1101_nov1995.pdf (retrieved 2026-08-10) | Oilseed handling and preparation; solvent extraction; desolventizing/toasting; drying/cooling; grinding, sizing, storage and loadout; particulate and hexane release points |
| `us-epa-solvent-extraction-neshap` | `official_guidance` | U.S. EPA, Solvent Extraction for Vegetable Oil Production: National Emission Standards for Hazardous Air Pollutants. https://www.epa.gov/stationary-sources-air-pollution/solvent-extraction-vegetable-oil-production-national-emission (retrieved 2026-08-10) | Solvent-route definition, solvent recovery, and chemically specific n-hexane release requirements |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I, especially Section 4.5. ELI: https://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-10) | Life-cycle data quality, multifunctionality hierarchy, subdivision, physical relation, economic allocation, system expansion disclosure, and verification |
| `codex-cxc-54-2004` | `standard` | FAO/WHO Codex Alimentarius, Code of Practice on Good Animal Feeding, CXC 54-2004, amended 2008 and 2024. https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (retrieved 2026-08-10) | Safe sourcing, contamination control, feed-grade handling and storage, labelling information, lot traceability, risk-based sampling, validated analysis, and records |
| `fao-oilseeds-postharvest` | `official_guidance` | FAO Technical Platform on Food Loss and Waste, Oilseeds post-harvest operations. https://www.fao.org/platform-food-loss-waste/resources/publications/grains-and-pulses/3/en (retrieved 2026-08-10) | Category semantics: oilseed crushing yields oil and a protein-rich cake used as livestock feed |
| `mass-balance-identity` | `method_factor` | Foreground conservation-of-mass identity: measured inputs plus opening stock equal measured outputs plus closing stock and quantified losses, subject to an explicitly reported residual. | Normalization, dry-matter conversion, mass and solvent reconciliation, fixed reference output, and completeness QA |
