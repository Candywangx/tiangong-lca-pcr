---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-flax
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Woven fabrics of flax

## 1. Scope and Applicability

This PCR covers mill-gate production of woven fabrics classified as CPC 3.0 subclass 26560, from accepted flax yarn through warp preparation, weaving, any declared on-site pretreatment or finishing, final inspection, rolling or folding, and packaging. It applies to greige, bleached, dyed, printed, or otherwise finished woven flax fabric only when the actual composition, construction, and finish state are declared.

The foreground starts with flax yarn accepted at the weaving mill. Flax cultivation, fibre extraction, scutching, hackling, spinning, off-site utility generation, purchased chemical production, and packaging-material production are represented by linked upstream datasets rather than recreated inside the foreground. Downstream cutting, sewing, use, laundering, reuse, and end-of-life are outside this PCR.

The PCR excludes flax fibre, flax yarn, knitted or nonwoven flax textiles, special fabrics classified outside CPC 26560, coated or impregnated textile products classified elsewhere, made-up textile articles, and fabric lots whose fibre composition or manufacturing route is not documented.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-flax |
| classification_refs | CPC 3.0: 26560, Woven fabrics of flax |
| covered_products | Woven flax fabrics, including greige and declared wet-finished lots, that are classified in CPC 26560 |
| excluded_products | Flax fibre; flax yarn; knitted or nonwoven textiles; special, coated, impregnated, or made-up textile articles classified outside CPC 26560 |
| representative_product | A production lot of woven flax fabric supplied in roll or folded piece form at the mill gate |
| production_route | Flax-yarn receipt; warp preparation and conditional sizing; weaving; conditional pretreatment, dyeing, printing, or finishing; inspection; packaging |
| market_state | Finished or greige woven fabric at the manufacturing mill gate, with fibre composition, fabric construction, mass per area, width, finish state, and conditioning basis declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Woven flax fabric providing a declared textile construction and finish state for downstream conversion |
| How much | 1 kg of woven flax fabric |
| How well | Conforming to the declared fibre composition, weave or construction, mass per area, width, finish state, and lot quality specification |
| How long or cycle | One production lot at the mill gate; no use-stage duration is assigned |
| reference_flow_link | The conforming packaged fabric output from `inspection_and_packaging` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Woven fabrics of flax `be3ea0c2-7e29-449a-97fc-8bf2ac32b999` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | flax fibre mass fraction and every other fibre mass fraction; greige, bleached, dyed, printed, or finished state; weave or construction; mass per area in g/m2; usable width; production geography; production period; sizing route; wet-processing route; conditioning atmosphere or moisture basis; packaging state |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference product as net fabric mass, excluding removable packaging, and state the conditioning atmosphere or measured moisture basis. |
| `standard_conditioning` | reference-product weighing and fabric tests | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the declared textile conditioning atmosphere consistently. When ISO 139 standard atmosphere is used, identify the applied version and any agreed alternative atmosphere; do not mix conditioned and as-received masses without a documented conversion. |
| `area_to_mass_conversion` | production or sales records expressed by area or length | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert area or linear-length records to mass only from lot-specific measured mass per area and usable width; retain the source measurements and calculation. |
| `chemical_product_mass` | purchased sizing, pretreatment, dyeing, printing, and finishing chemicals | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each trade product separately on an as-supplied mass basis and declare active concentration when it is needed for interpretation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Flax warp and weft yarn accepted at the weaving mill, with supplier, composition, yarn count, moisture or conditioning basis, and received mass documented |
| starting_condition_role | Foreground entry condition for woven-fabric manufacturing |
| product_classification_scope | CPC 3.0 subclass 26560 only |
| recursive_input_rule | If woven flax fabric re-enters the foreground as a recoverable input, record the exact recovered-fabric flow, source lot, quality state, and prior burdens; do not recursively apply this PCR to the same input without a distinct upstream dataset. |
| upstream_dataset_requirement | Link flax yarn, electricity, fuels, water supply, chemicals, and packaging materials to geographically and technologically representative upstream datasets. |
| disclosure | Declare whether sizing, desizing, scouring, bleaching, dyeing, printing, chemical finishing, heat setting, wastewater treatment, and combustion occur on-site, off-site, or not at all. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_onsite_operations` | foreground mill | Include every on-site operation from yarn acceptance through packaged conforming fabric, including fibre or yarn preparation, pretreatment, dyeing, printing, finishing, air-emission control, and wastewater handling when present. | `eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014` |
| `boundary_upstream_links` | purchased inputs | Represent purchased yarn, utilities, chemicals, and packaging with linked upstream product datasets and retain supplier geography, technology, and data-period metadata. | `jrc-ilcd-general-guide-2010` |
| `boundary_route_disclosure` | conditional operations | An omitted wet or thermal operation is valid only when production records show that the operation is absent or performed by a separately linked supplier dataset. | `eu-textiles-bref-2023` |
| `boundary_downstream_exclusion` | downstream conversion and use | Exclude cutting, sewing, product assembly, distribution beyond the mill gate, use, laundering, reuse, and end-of-life unless the study explicitly extends the system beyond this PCR. | `unsd-cpc-3-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_and_warp_preparation` | Yarn receipt and warp preparation | required | Always; sizing-material and sizing-water rows apply only when sizing occurs on-site | Foreground material preparation | kg prepared flax warp |
| `weaving` | Weaving | required | Always | Foreground fabric formation | kg greige woven flax fabric |
| `wet_processing` | Pretreatment and wet finishing | conditional | Include when any desizing, washing, scouring, bleaching, dyeing, printing, or chemical finishing occurs on-site | Foreground wet processing | kg wet-finished woven flax fabric |
| `inspection_and_packaging` | Final inspection and packaging | required | Always; each packaging row applies only when that material is used | Foreground release to market | kg conforming packaged woven flax fabric |

### Process: Yarn receipt and warp preparation (`yarn_and_warp_preparation`)

#### Inputs

##### Product flows

###### Flax warp yarn (`flax_warp_yarn_input`)

Flax yarn assigned to the warp enters from supplier or spinning records. Keep blend composition, yarn count, twist, lot, and moisture or conditioning basis with the receipt.

- Selected flow: Flax yarn for warp
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass issued to warp preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts_and_issues`
- Sources: `eu-textiles-bref-2023`

###### Native potato starch sizing agent (`starch_sizing_agent_input`)

Record native potato starch as one chemical input when the batch recipe uses starch sizing. Other exact sizing products must be represented by their own atomic foreground rows rather than combined with this row.

- Selected flow: Native potato starch sizing agent
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied mass issued to the sizing batch; zero only when starch sizing is documented absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_issues`
- Sources: `eu-textiles-bref-2023`

###### Process water for starch sizing (`sizing_process_water_input`)

Record water supplied to size preparation and sizing equipment when on-site sizing is used.

- Selected flow: Process water for starch sizing
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-record water volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meters_and_batch_records`
- Sources: `eu-textiles-bref-2023`

###### Grid electricity for warp preparation (`warp_preparation_electricity_input`)

Electricity used by winding, warping, sizing, drying, and beam preparation is recorded from a dedicated meter or an auditable allocation of a shared meter.

- Selected flow: Grid electricity supplied to the weaving mill
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity or calculated share from machine power and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_metering`
- Sources: `eu-textiles-bref-2023`

#### Outputs

##### Product flows

###### Prepared flax warp on loom beam (`prepared_flax_warp_output`)

The prepared warp leaves this process for weaving. Record measured or reconciled mass and the sizing state.

- Selected flow: Prepared flax warp on loom beam
- Flow property / unit: Mass / kg
- Amount rule: measured beam mass less tare, or reconciled yarn input less recorded preparation waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `eu-textiles-bref-2023`

##### Waste flows

###### Flax yarn waste from warp preparation (`warp_preparation_flax_yarn_waste_output`)

Broken ends, knots removed, and unusable flax yarn collected during winding and warping are weighed separately from other textile waste.

- Selected flow: Flax yarn waste from warp preparation
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `eu-textiles-bref-2023`

###### Spent starch sizing liquor (`spent_starch_sizing_liquor_output`)

Spent starch-containing liquor is recorded as a separate liquid waste when it leaves sizing or equipment cleaning for treatment.

- Selected flow: Spent starch sizing liquor
- Flow property / unit: Volume / m3
- Amount rule: measured transfer volume or tank-level change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_transfers`
- Sources: `eu-textiles-bref-2023`

### Process: Weaving (`weaving`)

#### Inputs

##### Product flows

###### Prepared flax warp (`prepared_flax_warp_input`)

Prepared warp enters the loom with the beam identity and sizing state retained.

- Selected flow: Prepared flax warp on loom beam
- Flow property / unit: Mass / kg
- Amount rule: mass transferred from `prepared_flax_warp_output`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `eu-textiles-bref-2023`

###### Flax weft yarn (`flax_weft_yarn_input`)

Flax yarn assigned to the weft enters from supplier or spinning records. Preserve the same identity fields required for warp yarn.

- Selected flow: Flax yarn for weft
- Flow property / unit: Mass / kg
- Amount rule: measured accepted mass issued to the looms
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_receipts_and_issues`
- Sources: `eu-textiles-bref-2023`

###### Grid electricity for weaving (`weaving_electricity_input`)

Record loom, compressed-air, local extraction, and directly attributable weaving-area electricity without combining it with thermal energy.

- Selected flow: Grid electricity supplied to the weaving mill
- Flow property / unit: Energy / kWh
- Amount rule: dedicated metered electricity or auditable machine-time allocation of a shared meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_metering`
- Sources: `eu-textiles-bref-2023`

#### Outputs

##### Product flows

###### Greige woven flax fabric (`greige_woven_flax_fabric_output`)

Greige fabric leaving the looms is recorded by lot before optional wet processing and final inspection.

- Selected flow: Greige woven flax fabric
- Flow property / unit: Mass / kg
- Amount rule: measured greige fabric mass at the declared conditioning basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `eu-textiles-bref-2023`

##### Waste flows

###### Flax yarn waste from weaving (`weaving_flax_yarn_waste_output`)

Loom waste, unusable selvedge yarn, and broken flax yarn removed during weaving are weighed as one specific flax-yarn waste stream.

- Selected flow: Flax yarn waste from weaving
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `eu-textiles-bref-2023`

##### Elementary flows

###### Particulate matter below 10 micrometres to air (`weaving_pm10_air_output`)

Record PM10 released from weaving-area extraction after control equipment when the facility monitors or reports this emission.

- Selected flow: Particulate matter, less than 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack or room-extraction emission attributable to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_monitoring`
- Sources: `eu-textiles-bref-2023`

### Process: Pretreatment and wet finishing (`wet_processing`)

This conditional process is included only for operations performed inside the foreground. Every dye, pigment, print-paste constituent, finish, or auxiliary actually used must be added to the foreground package as its own atomic row identified by trade product or chemical identity; it must not be collapsed into a generic chemical-total row.

#### Inputs

##### Product flows

###### Greige woven flax fabric (`greige_woven_flax_fabric_input`)

Greige fabric enters with its weaving lot and mass basis retained.

- Selected flow: Greige woven flax fabric
- Flow property / unit: Mass / kg
- Amount rule: mass transferred from `greige_woven_flax_fabric_output`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `eu-textiles-bref-2023`

###### Process water for textile wet processing (`wet_processing_water_input`)

Record water entering pretreatment, dyeing, printing, finishing, washing, and equipment cleaning from meters or batch records.

- Selected flow: Process water for textile wet processing
- Flow property / unit: Volume / m3
- Amount rule: metered or batch-record water volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meters_and_batch_records`
- Sources: `eu-textiles-bref-2023`

###### Grid electricity for wet processing (`wet_processing_electricity_input`)

Record electricity used by wet-process machines, pumps, dosing, extraction, and directly attributable treatment equipment.

- Selected flow: Grid electricity supplied to the textile finishing mill
- Flow property / unit: Energy / kWh
- Amount rule: dedicated metered electricity or auditable machine-time allocation of a shared meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_metering`
- Sources: `eu-textiles-bref-2023`

###### Natural gas for on-site thermal energy (`wet_processing_natural_gas_input`)

Record natural gas separately when it is combusted on-site to provide steam or direct heat for the declared wet-processing route.

- Selected flow: Natural gas combusted in the textile finishing mill boiler
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered gas converted with the documented lot-period net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_metering`
- Sources: `eu-textiles-bref-2023`

###### Sodium hydroxide (`sodium_hydroxide_input`)

Record sodium hydroxide only when the batch recipe uses it for desizing, scouring, pH adjustment, or another declared operation.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied product mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_issues`
- Sources: `eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014`

###### Hydrogen peroxide (`hydrogen_peroxide_input`)

Record hydrogen peroxide only for a batch that uses peroxide bleaching or another documented peroxide treatment.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied product mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_issues`
- Sources: `eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014`

###### Sodium carbonate (`sodium_carbonate_input`)

Record sodium carbonate only when identified in the production recipe.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied product mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_issues`
- Sources: `eu-textiles-bref-2023`

###### Sodium chloride (`sodium_chloride_input`)

Record sodium chloride only when identified in the production recipe.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied product mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_issues`
- Sources: `eu-textiles-bref-2023`

###### Acetic acid (`acetic_acid_input`)

Record acetic acid only when identified in the production recipe for pH control or another declared operation.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied product mass issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_issues`
- Sources: `eu-textiles-bref-2023`

#### Outputs

##### Product flows

###### Wet-finished woven flax fabric before final inspection (`wet_finished_woven_flax_fabric_output`)

Record fabric mass after the declared wet and thermal treatments and before final inspection.

- Selected flow: Wet-finished woven flax fabric before final inspection
- Flow property / unit: Mass / kg
- Amount rule: measured output mass at the declared conditioning or moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `eu-textiles-bref-2023`

##### Waste flows

###### Textile wet-process wastewater (`textile_wet_process_wastewater_output`)

Record combined textile wastewater only at the transfer point to on-site or off-site treatment; separately measured baths remain distinct foreground records upstream of that transfer.

- Selected flow: Textile wet-process wastewater
- Flow property / unit: Volume / m3
- Amount rule: measured discharge or treatment-transfer volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_transfers`
- Sources: `eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014`

###### Flax fabric waste from wet processing (`wet_processing_flax_fabric_waste_output`)

Record damaged, trimmed, or otherwise rejected flax fabric removed during wet processing separately from yarn waste.

- Selected flow: Flax fabric waste from wet processing
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `eu-textiles-bref-2023`

##### Elementary flows

###### Fossil carbon dioxide from natural-gas combustion to air (`natural_gas_co2_air_output`)

Record fossil carbon dioxide released by the on-site boiler or direct-fired equipment when natural gas is combusted inside the foreground.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or facility-reported emission reconciled to the metered fuel period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_monitoring`
- Sources: `eu-textiles-bref-2023`

###### Nitrogen oxides from natural-gas combustion to air (`natural_gas_nox_air_output`)

Record nitrogen oxides released by the on-site boiler or direct-fired equipment when monitored or reported for the foreground facility.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: measured stack emission or facility-reported emission reconciled to the metered fuel period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emission_monitoring`
- Sources: `eu-textiles-bref-2023`

### Process: Final inspection and packaging (`inspection_and_packaging`)

#### Inputs

##### Product flows

###### Woven flax fabric before final inspection (`woven_flax_fabric_before_inspection_input`)

The fabric lot enters final inspection from weaving when sold greige, or from wet processing when a finish is declared.

- Selected flow: Woven flax fabric before final inspection
- Flow property / unit: Mass / kg
- Amount rule: transferred lot mass from the last included production process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `eu-ecolabel-textiles-2014`

###### Grid electricity for inspection and packing (`inspection_electricity_input`)

Record electricity used by inspection frames, rolling or folding equipment, local extraction, and packaging equipment.

- Selected flow: Grid electricity supplied to the weaving mill
- Flow property / unit: Energy / kWh
- Amount rule: dedicated metered electricity or auditable machine-time allocation of a shared meter
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_electricity_metering`
- Sources: `eu-ecolabel-textiles-2014`

###### Corrugated board packaging (`corrugated_board_packaging_input`)

Record corrugated board used for cores, end protection, cartons, or other shipped packaging as one material input when present.

- Selected flow: Corrugated board packaging
- Flow property / unit: Mass / kg
- Amount rule: measured packaging mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_issues`
- Sources: `eu-ecolabel-textiles-2014`

###### Low-density polyethylene packaging film (`ldpe_packaging_film_input`)

Record low-density polyethylene film used to wrap the fabric lot as one material input when present.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured film mass issued to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_issues`
- Sources: `eu-ecolabel-textiles-2014`

#### Outputs

##### Product flows

###### Conforming woven fabrics of flax (`woven_fabrics_of_flax_output`)

The conforming packaged fabric lot is the quantitative reference output. Removable packaging is excluded from its net mass.

- Selected flow: Woven fabrics of flax `be3ea0c2-7e29-449a-97fc-8bf2ac32b999`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming fabric at the declared conditioning or moisture basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Rejected woven flax fabric (`rejected_woven_flax_fabric_output`)

Fabric rejected at final inspection is weighed and assigned its actual recovery, recycling, treatment, or disposal destination.

- Selected flow: Rejected woven flax fabric
- Flow property / unit: Mass / kg
- Amount rule: measured rejected fabric mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_and_scrap_mass`
- Sources: `eu-ecolabel-textiles-2014`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | multi-product mill processes | Avoid allocation by subdividing meters, batch records, machine time, and waste records to the flax-fabric production lot wherever technically feasible. | `iso-14044-2006`; `jrc-ilcd-general-guide-2010` |
| `allocation_causal_shared_inputs` | shared utilities and treatment | When subdivision is not feasible, allocate shared electricity, thermal energy, water, and treatment burdens using a documented physical driver that causally represents use, such as machine operating time, metered volume, or treated hydraulic load. | `jrc-ilcd-general-guide-2010` |
| `allocation_mass_fallback` | residual shared burdens | Use net conforming fabric mass as a fallback only when no more causal physical driver is available; disclose the affected flows, co-products, allocation fraction, and sensitivity to the chosen basis. | `iso-14044-2006`; `jrc-ilcd-general-guide-2010` |
| `allocation_waste_and_recovery` | yarn waste, fabric waste, and recovered material | Record each physical outflow and destination before applying any recycling, substitution, or avoided-burden convention; do not assign an automatic credit within the foreground. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts_and_issues` | `yarn_and_warp_preparation`; `weaving` | flax warp and weft yarn | purchase receipt and material issue | supplier; lot; yarn identity; composition; yarn count; gross mass; tare; net mass; moisture or conditioning basis; issue process | calibrated scale and enterprise material record | kg | each receipt and issue | complete production-lot period | all yarn stores and issuing points serving the lot | sum accepted net mass by exact yarn identity and reconcile receipts, inventory change, and issues | scale calibration; supplier certificate; lot traceability; inventory reconciliation |
| `cp_chemical_batch_issues` | `yarn_and_warp_preparation`; `wet_processing` | one exact chemical product | batch recipe and dosing record | trade name; chemical or Colour Index identity; supplier; concentration; lot; as-supplied mass; batch id; return mass | calibrated dosing system or weighed issue | kg | each batch | complete production-lot period | all dosing points serving included processes | sum net issued mass separately for each exact product; never aggregate unlike chemicals | recipe approval; SDS; dosing calibration; issue and return records |
| `cp_water_meters_and_batch_records` | `yarn_and_warp_preparation`; `wet_processing` | one process-water input | meter and batch record | meter id; opening and closing reading; batch id; operation; source; recycled-water status | calibrated flow meter, or validated tank/batch volume when no meter exists | m3 | each batch or shift | complete production-lot period | all water inlets serving included operations | difference meter readings, subtract documented non-production use, and retain recycled-water transfers separately | meter calibration; reading log; batch reconciliation |
| `cp_electricity_metering` | `yarn_and_warp_preparation`; `weaving`; `wet_processing`; `inspection_and_packaging` | grid electricity | electricity meter and equipment runtime record | meter id; opening and closing reading; machine id; rated or measured load; operating time; batch id | dedicated meter; otherwise validated machine-time allocation from a shared meter | kWh | shift or batch | representative continuous period covering the lot and normal operating variation | all electricity consumers inside the process boundary | sum dedicated readings or calculate auditable share; reconcile to facility meter | meter calibration; runtime log; allocation worksheet; facility reconciliation |
| `cp_fuel_metering` | `wet_processing` | natural gas | fuel meter and calorific-value record | meter id; opening and closing reading; standard volume; net calorific value; boiler id; operating time; batch id | calibrated gas meter and supplier calorific-value statement | MJ | shift or batch | complete period serving the lot | on-site combustion equipment serving included operations | convert metered gas to MJ using period-specific net calorific value and allocate with a causal driver | meter calibration; supplier statement; boiler log; facility reconciliation |
| `cp_product_and_scrap_mass` | all processes | intermediate product, conforming fabric, or one specific textile waste | production, scale, and waste transfer record | lot; product or waste identity; gross mass; tare; net mass; conditioning basis; destination; timestamp | calibrated scale with lot-level reconciliation | kg | each transfer or lot | complete production-lot period | all included production and waste collection points | sum net mass by row identity and destination; reconcile process inputs, outputs, inventory change, and measured moisture basis | scale calibration; lot traveller; waste receipt; mass-balance worksheet |
| `cp_wastewater_transfers` | `yarn_and_warp_preparation`; `wet_processing` | spent sizing liquor or textile wastewater | flow-meter, tank, and treatment transfer record | stream identity; source operation; volume; timestamp; treatment destination; recycled fraction | calibrated discharge meter or validated tank-level change | m3 | batch or daily | complete production-lot period | all wastewater transfers from included operations | sum by specific stream and treatment destination without double-counting internal recirculation | meter calibration; treatment log; transfer ticket; water balance |
| `cp_direct_emission_monitoring` | `weaving`; `wet_processing` | one elementary emission to air | stack or workplace extraction monitoring record | emission identity; compartment; sampling point; concentration; gas flow; duration; production lot; control status | applicable accredited measurement method or verified regulatory monitoring record | kg | monitoring campaign or reporting interval | interval representative of the production lot | all included direct emission points | calculate released mass for the interval and allocate with documented operating time or production driver | laboratory accreditation; instrument calibration; sampling report; regulatory return |
| `cp_packaging_material_issues` | `inspection_and_packaging` | one exact packaging material | packaging issue and product shipment record | material identity; supplier; lot; gross mass; tare; returned mass; fabric lot | calibrated scale and issue record | kg | each fabric lot | complete production-lot period | all packing stations serving the lot | net issued mass minus documented returns, separately by packaging material | scale calibration; purchase record; issue and return log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | every non-reference inventory row | row amount / net kg conforming woven flax fabric | collected row amount; `woven_fabrics_of_flax_output` net mass | row amount per 1 kg reference product | `eu-ecolabel-textiles-2014` |
| `area_or_length_to_mass` | area- or length-based fabric records | area × lot-specific measured mass per area, or length × usable width × lot-specific measured mass per area; convert units explicitly | measured area or length; usable width; measured g/m2 | kg fabric at the declared conditioning basis | `iso-139-2005` |
| `shared_electricity_allocation` | shared electricity meter | shared-meter kWh × attributable machine operating time or measured-load share / total corresponding driver | shared-meter readings; machine runtime; measured or validated load | kWh assigned to the process and lot | `jrc-ilcd-general-guide-2010` |
| `process_mass_balance` | each production process | opening inventory + measured mass inputs = measured product outputs + measured waste outputs + closing inventory + documented mass change or residual | material receipts and issues; product and waste masses; inventory change; moisture or volatile change | reconciled process mass balance and disclosed residual | `jrc-ilcd-general-guide-2010` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | yarn, chemicals, fabric, waste, and packaging | Preserve supplier, lot, exact material identity, composition or concentration, and the linkage from receipt through production and output. | supplier certificates; SDS; batch recipes; lot travellers; waste transfer records |
| `dq_measurement_control` | mass, water, electricity, fuel, and emissions | Use calibrated instruments or document the validated estimation method, allocation driver, uncertainty, and reconciliation to a site-level control total. | calibration certificates; meter logs; allocation worksheets; site reconciliation |
| `dq_temporal_coverage` | foreground inventory | Cover a period representative of normal production and include start-up, shutdown, cleaning, rejects, rework, and route-specific operations attributable to the declared lot. | production calendar; batch log; meter period; downtime and cleaning records |
| `dq_route_completeness` | wet and finishing routes | Retain the complete recipe and one atomic inventory record for each exact dye, pigment, auxiliary, finish, energy carrier, wastewater transfer, waste, and direct emission that crosses the boundary. | approved recipe; issue records; meters; waste and emission reports |
| `dq_conditioning_basis` | fabric and yarn mass | State the conditioning atmosphere or moisture basis for each material mass used in reference-flow or mass-balance calculations. | conditioning-room record; test report; moisture measurement; weighing procedure |
| `dq_geography_and_technology` | linked upstream datasets | Match supplier geography, grid, water source, fuel supply, yarn technology, and treatment route as closely as available and disclose any proxy. | supplier location; utility contract; dataset metadata; proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Confirm the exact Tiangong product-flow UUID, Mass flow-property UUID, Units-of-mass unit-group UUID, 1 kg reference amount, and every required qualifier. | `unsd-cpc-3-2025`; `eu-ecolabel-textiles-2014` |
| `validation_route_completeness` | process map and inventory | The declared route must include every on-site preparation, weaving, pretreatment, dyeing, printing, finishing, inspection, packaging, wastewater, and emission-control operation, or identify a linked supplier dataset for an off-site operation. | `eu-textiles-bref-2023`; `eu-ecolabel-textiles-2014` |
| `validation_atomic_flows` | process inventory | Each card must represent one exact material, energy carrier, waste stream, or elementary emission; chemical totals, combined utilities, combined packaging, and combined waste labels are not conforming records. | `eu-ecolabel-textiles-2014` |
| `validation_mass_balance` | yarn preparation, weaving, wet processing, and inspection | Reconcile measured input, output, waste, inventory change, and documented moisture or volatile change for each process; disclose and investigate every unexplained residual. | `jrc-ilcd-general-guide-2010` |
| `validation_no_unsubstantiated_values` | inventory amounts and calculations | Accept only collected foreground records or calculations linked to collected fields and declared formulas; do not substitute an AI-authored range or uncited default for a missing record. | `iso-14044-2006`; `jrc-ilcd-general-guide-2010` |
| `validation_allocation_disclosure` | shared and multi-product processes | Verify subdivision attempts, chosen physical driver, affected flows, allocation fractions, co-product treatment, and any sensitivity result. | `iso-14044-2006`; `jrc-ilcd-general-guide-2010` |
| `validation_conditioning_consistency` | reference product and mass conversions | Verify that reference-product mass, mass per area, yarn mass, and process mass balances use a consistent declared conditioning or moisture basis. | `iso-139-2005`; `eu-ecolabel-textiles-2014` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset for woven flax fabric at the mill gate |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Downstream apparel, interior-textile, technical-product, and product-system models when the fabric composition, construction, finish state, geography, technology, conditioning basis, and boundary match the intended use |
| excluded_use | Flax cultivation, fibre extraction, yarn production, knitted or nonwoven textiles, special or coated fabrics classified elsewhere, made-up textile production, use stage, and end-of-life without explicit system extension |
| required_metadata | canonical PCR id; CPC 26560; reference-flow UUID; fibre composition; weave or construction; g/m2; usable width; finish state; conditioning or moisture basis; geography; technology; production period; included and off-site operations; allocation method; upstream dataset references |
| required_quality_disclosure | primary-data share; meter and scale coverage; calibration status; route completeness; mass-balance residuals; chemical identity completeness; wastewater and emission coverage; proxies; uncertainty; unresolved UUIDs |
| update_trigger | Change in fibre composition, weave, mass per area, width, sizing or wet-processing recipe, production technology, site, energy supply, wastewater or emission control, allocation basis, packaging, or a material change in representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 26560, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Product identity, classification scope, and downstream exclusions |
| `eu-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry | Process decomposition, wet-processing boundary, utility, wastewater, waste, and air-emission collection scope |
| `eu-ecolabel-textiles-2014` | official_guidance | Commission Decision 2014/350/EU establishing EU Ecolabel criteria for textile products, consolidated text. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02014D0350-20201201 | Textile product scope, 1 kg functional unit, supply-chain evidence, chemicals and processes, emissions treatment, and fitness-for-use metadata |
| `iso-139-2005` | standard | ISO 139:2005, Textiles — Standard atmospheres for conditioning and testing, with Amendment 1:2011. https://www.iso.org/standard/35179.html | Conditioning-basis declaration and mass-conversion consistency |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, with Amendments 1:2017 and 2:2020. https://www.iso.org/standard/38498.html | Inventory, allocation, reporting, and review principles |
| `jrc-ilcd-general-guide-2010` | official_guidance | European Commission Joint Research Centre, International Reference Life Cycle Data System Handbook — General guide for Life Cycle Assessment — Detailed guidance, EUR 24708 EN, JRC48157, DOI 10.2788/38479. https://publications.jrc.ec.europa.eu/repository/handle/JRC48157 | System boundary, upstream linkage, subdivision, physical allocation, data quality, mass-balance, and documentation rules |
