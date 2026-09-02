---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.curtains-including-drapes-and-interior-blinds-curtain-or-bed-valances
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Curtains (including drapes) and interior blinds; curtain or bed valances

## 1. Scope and Applicability

This PCR applies to factory-gate foreground data packages for made-up textile curtains, drapes, textile interior blinds, curtain valances, and bed valances. The representative route converts purchased, finished woven polyester curtain fabric into a finished curtain by cutting, sewing and assembly, conditional in-house wet finishing, inspection, and packaging.

The PCR covers stock and custom-made products. It does not cover non-textile Venetian blinds, roller shutters, awnings, curtain rods or tracks, standalone textile fabric sold by length, upstream fibre/yarn/fabric production inside the foreground boundary, installation, use-stage cleaning, or end-of-life. Upstream production of every purchased product input remains connected through a qualifying dataset.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.curtains-including-drapes-and-interior-blinds-curtain-or-bed-valances |
| classification_refs | CPC 3.0: 27130, exact |
| covered_products | Made-up textile curtains and drapes; textile interior blinds; curtain valances; bed valances |
| excluded_products | Non-textile blinds and shutters; awnings; curtain hardware sold separately; fabric sold by length; installation, use and end-of-life services |
| representative_product | Finished, packaged woven-polyester curtain panel manufactured from purchased finished fabric |
| production_route | Purchased finished fabric receipt → pattern cutting → sewing and assembly → conditional in-house wet finishing → inspection and packaging |
| market_state | Finished manufactured product, packaged at factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a finished textile curtain, drape, textile interior blind, curtain valance, or bed valance at the factory gate |
| How much | 1 kg net finished product, excluding transport packaging |
| How well | Meets the declared product specification for textile composition, dimensions, construction, light-control function, finish, and accessory configuration |
| How long or cycle | One completed factory-gate production lot; service life is outside this cradle-to-gate reference |
| reference_flow_link | Net mass of accepted finished product released from final inspection |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Curtains (including drapes) and interior blinds, curtain or bed valances `e25f1284-93c9-4898-960e-3a91f026451b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; fibre composition by mass; fabric construction; finished width and drop; areal density; lining or coating state; opacity or light-transmission class; flame-retardant treatment state; heading type; eyelet or hardware material; custom or stock manufacture; production geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Accepted finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net product mass after final inspection and before transport packaging; normalize all inventory results to 1 kg of accepted finished product. |
| `packaging_mass_separate` | PE-LD film and corrugated board boxes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging component separately and exclude its mass from the reference-product mass. |
| `textile_mass_condition` | Fabric, thread, heading tape, panels, product and textile waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use masses at the condition in which the material crosses the process boundary and disclose whether conditioning or moisture correction was applied. |
| `electricity_metering` | Alternating-current inputs | Energy | kWh | Record user-side electricity from process submeters or a documented meter allocation and retain the declared grid geography and voltage level. |
| `water_mass` | Process water and textile-finishing wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record inlet and outlet water by calibrated meter or verified mass conversion; do not combine water with chemicals or steam. |

## 5. System Boundary

The foreground boundary begins when purchased finished curtain fabric and separately purchased trims and packaging materials are received at the manufacturing site. It includes directly controlled cutting, sewing, accessory attachment, conditional wet finishing, inspection, rework handling, packaging, utilities, wastewater, and solid waste up to release of the packaged finished product at the factory gate.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased finished textile fabric, sewing thread, heading tape, optional eyelets, and packaging components received at the curtain manufacturing site |
| starting_condition_role | Foreground gate for made-up textile-product manufacture |
| product_classification_scope | CPC 3.0 subclass 27130 textile products only |
| recursive_input_rule | A purchased curtain, drape, textile blind, or valance used as an input remains a visible same-category product input and is linked to an upstream dataset; it is not recursively expanded inside this foreground package. |
| upstream_dataset_requirement | Each purchased fabric, trim, chemical, utility, and packaging input requires a geographically, technologically, and temporally representative upstream dataset. |
| disclosure | Declare whether fabric formation, dyeing, printing, coating, flame-retardant treatment, washing, heat-setting, or lamination occurs upstream or within the reporting site, and identify every excluded activity. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_purchased_material_gate` | All foreground packages | Start the foreground system at receipt of purchased finished fabric and other purchased inputs; retain upstream production through linked datasets. | `us-census-naics-2022-314120`; `ilo-garment-supply-chain-2021` |
| `boundary_direct_operations` | Site-controlled manufacture | Include cutting, sewing, assembly, inspection, packaging, directly controlled utilities, product rejects, textile scrap, and other wastes generated by the declared route. | `iso-14044-2006`; `iso-tr-14049-2012` |
| `boundary_wet_finishing` | Sites performing wet or thermal textile treatment | Include each actual water, chemical, electricity, steam, wastewater, waste, and relevant direct-emission exchange as a separate atomic row; do not apply this conditional process when finishing occurs entirely upstream. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `boundary_no_silent_cutoff` | Material and energy inputs | Do not omit an exchange solely because it is small; any exclusion requires measured evidence, a stated rationale, and a disclosed effect on mass and energy completeness. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_cutting` | Fabric receiving, spreading and cutting | required | Always included for the representative purchased-fabric route | Foreground material preparation | kg cut textile panels |
| `sewing_assembly` | Sewing and curtain assembly | required | Always included for the representative route | Foreground product assembly | kg assembled curtain |
| `wet_finishing` | In-house wet or thermal finishing | conditional | Include only when washing, bleaching, chemical finishing, drying, heat-setting, or related wet/thermal treatment occurs at the reporting site | Foreground textile finishing | kg finished curtain leaving the process |
| `inspection_packaging` | Final inspection and packaging | required | Always included before factory-gate release | Foreground quality release and packaging | kg accepted finished reference product |

### Process: Fabric receiving, spreading and cutting (`material_cutting`)

#### Inputs

##### Product flows

###### Purchased finished woven polyester curtain fabric (`purchased_polyester_curtain_fabric`)

Purchased finished woven polyester curtain fabric crosses the site boundary and supplies the textile body of the representative curtain route. Its issued mass is taken from lot-specific receiving and cutting records.

- Selected flow: Finished woven polyester curtain fabric
- Flow property / unit: Mass / kg
- Amount rule: Record the measured mass issued to cutting for the declared production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `us-census-naics-2022-314120`; `ilo-garment-supply-chain-2021`

###### User-side low-voltage electricity for cutting (`cutting_electricity`)

Low-voltage alternating current powers fabric spreading, cutting, local extraction, and directly associated cutting equipment. The process quantity is read from a submeter or a documented process-meter record.

- Selected flow: Alternating current, <1 kV, consumption mix, to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Record metered electricity attributable to material cutting for the reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cut polyester curtain panels (`cut_polyester_panels`)

Cut polyester curtain panels are the measured intermediate product transferred from cutting to sewing. Their mass is recorded before sewing and accessory attachment.

- Selected flow: Cut woven polyester curtain panels
- Flow property / unit: Mass / kg
- Amount rule: Record the measured mass of conforming cut panels transferred to sewing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg cut-panel output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `ilo-garment-supply-chain-2021`

##### Waste flows

###### Textile cutting and trimming waste (`textile_cutting_scrap`)

Textile solid waste consists of offcuts and trimming scraps generated during pattern cutting. The outgoing mass is recorded separately from reusable remnants kept as inventory.

- Selected flow: Textile solid waste, cutting and trimming waste `0d502310-2451-4b49-a5a6-bbb097226878`
- Flow property / unit: Mass / kg
- Amount rule: Record measured offcuts and trimming waste leaving cutting, by declared destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_records`
- Sources: `ilo-garment-supply-chain-2021`

##### Elementary flows

### Process: Sewing and curtain assembly (`sewing_assembly`)

#### Inputs

##### Product flows

###### Cut polyester curtain panels received for sewing (`cut_panels_for_sewing`)

Cut woven polyester panels enter sewing as the internal product output of `material_cutting`. The quantity must equal the accepted inter-process transfer record after any documented hold or return.

- Selected flow: Cut woven polyester curtain panels
- Flow property / unit: Mass / kg
- Amount rule: Record the measured mass accepted by sewing from material cutting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled-curtain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `ilo-garment-supply-chain-2021`

###### Polyester sewing thread (`polyester_sewing_thread`)

Polyester sewing thread crosses the assembly boundary as the specific yarn used to form seams and hems. Its issued mass is recorded from lot-specific stock or spool records.

- Selected flow: Polyester sewing thread
- Flow property / unit: Mass / kg
- Amount rule: Record the mass of polyester sewing thread issued to and consumed by the reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `ilo-garment-supply-chain-2021`

###### Polyester curtain heading tape (`polyester_heading_tape`)

Polyester curtain heading tape is sewn to the curtain top when the declared heading construction uses tape. Its measured issued mass is recorded only for that construction.

- Selected flow: Woven polyester curtain heading tape
- Flow property / unit: Mass / kg
- Amount rule: Record measured heading-tape mass issued to the reporting lot when tape is part of the declared design.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `ilo-garment-supply-chain-2021`

###### Galvanized-steel curtain eyelets (`galvanized_steel_eyelets`)

Galvanized-steel eyelets cross the assembly boundary when the declared curtain uses an eyelet heading. Their lot-specific mass is derived from counted accepted eyelets and a verified unit mass.

- Selected flow: Galvanized-steel curtain eyelets
- Flow property / unit: Mass / kg
- Amount rule: Record measured total mass or count multiplied by verified mean unit mass for eyelets installed in the reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `ilo-garment-supply-chain-2021`

###### User-side low-voltage electricity for sewing (`sewing_electricity`)

Low-voltage alternating current powers sewing machines, pressing equipment, and directly associated assembly equipment. The process quantity is recorded separately from cutting and packaging electricity.

- Selected flow: Alternating current, <1 kV, consumption mix, to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Record metered electricity attributable to sewing and assembly for the reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled polyester curtain (`assembled_polyester_curtain`)

The assembled polyester curtain is the conforming intermediate output after sewing, hemming, and declared accessory attachment. Record its measured mass before conditional wet finishing or final packaging.

- Selected flow: Assembled woven polyester curtain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured mass transferred from assembly to finishing or final inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled-curtain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`
- Sources: `ilo-garment-supply-chain-2021`

##### Waste flows

##### Elementary flows

### Process: In-house wet or thermal finishing (`wet_finishing`)

#### Inputs

##### Product flows

###### Process water for curtain finishing (`process_water`)

Process water enters only when the reporting site washes, bleaches, rinses, or chemically finishes the assembled textile product. Meter it separately from domestic and cooling water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Record metered process-water input for the applicable finishing lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished-curtain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

###### Sodium hydroxide for textile treatment (`sodium_hydroxide`)

Sodium hydroxide is recorded as an individual chemical exchange when used for scouring, pH adjustment, or another declared finishing recipe. Do not combine it with other alkalis or process chemicals.

- Selected flow: Sodium hydroxide, 100% active-substance equivalent
- Flow property / unit: Mass / kg
- Amount rule: Record delivered formulation mass and active concentration, then report the calculated active-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished-curtain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_issue_records`
- Sources: `eu-textiles-bat-2022-2508`

###### Hydrogen peroxide for textile bleaching (`hydrogen_peroxide`)

Hydrogen peroxide is recorded as an individual chemical exchange only when used in the declared curtain bleaching or finishing recipe. Its amount is reported on an active-substance-equivalent basis.

- Selected flow: Hydrogen peroxide, 100% active-substance equivalent
- Flow property / unit: Mass / kg
- Amount rule: Record delivered formulation mass and active concentration, then report the calculated active-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished-curtain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_issue_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

###### Saturated steam for wet or thermal finishing (`saturated_steam`)

Purchased saturated steam crosses the finishing boundary when it supplies washing, drying, pressing, or heat-setting equipment. Declare supplier pressure and condensate treatment with the foreground record.

- Selected flow: Saturated steam at declared supplier pressure
- Flow property / unit: Mass / kg
- Amount rule: Record metered purchased saturated steam supplied to the applicable finishing lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished-curtain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

###### User-side low-voltage electricity for finishing (`finishing_electricity`)

Low-voltage alternating current powers pumps, washers, dryers, stenters, controls, and directly associated finishing equipment. Record it separately from steam and other heat inputs.

- Selected flow: Alternating current, <1 kV, consumption mix, to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Record metered electricity attributable to the applicable wet or thermal finishing lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished-curtain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity_records`
- Sources: `eu-textiles-bat-2022-2508`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished polyester curtain leaving in-house finishing (`finished_polyester_curtain`)

The finished polyester curtain is the conforming intermediate output after the declared wet or thermal finishing operation. Record its measured mass after process conditioning and before packaging.

- Selected flow: Wet- or thermal-finished woven polyester curtain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured mass transferred from finishing to final inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished-curtain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

##### Waste flows

###### Textile-finishing wastewater (`textile_finishing_wastewater`)

Textile-finishing wastewater is the separately measured aqueous waste stream leaving washing, bleaching, rinsing, or chemical finishing. Keep separately managed high-load streams as additional atomic waste rows in the foreground package.

- Selected flow: Wastewater from wet finishing of polyester curtains
- Flow property / unit: Mass / kg
- Amount rule: Record measured wastewater mass discharged or transferred from the applicable finishing lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished-curtain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`

##### Elementary flows

### Process: Final inspection and packaging (`inspection_packaging`)

#### Inputs

##### Product flows

###### Curtain entering final inspection (`curtain_for_packaging`)

The curtain entering final inspection is the internal assembled output or, when applicable, the output of in-house finishing. Its accepted transfer mass establishes the final process input.

- Selected flow: Assembled woven polyester curtain
- Flow property / unit: Mass / kg
- Amount rule: Record the measured curtain mass entering final inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted finished-curtain output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`
- Sources: `ilo-garment-supply-chain-2021`

###### User-side low-voltage electricity for inspection and packaging (`inspection_electricity`)

Low-voltage alternating current powers inspection tables, folding, sealing, labelling, and directly associated packaging equipment. Record it independently from earlier process electricity.

- Selected flow: Alternating current, <1 kV, consumption mix, to user `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Energy / kWh
- Amount rule: Record metered electricity attributable to final inspection and packaging for the reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_electricity_records`
- Sources: `eu-textiles-bat-2022-2508`

###### PE-LD packaging film (`pe_ld_packaging_film`)

Low-density polyethylene foil crosses the packaging boundary when it wraps or bags the accepted curtain. Record its measured mass separately from paperboard packaging.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Record measured PE-LD film mass consumed by the reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

###### Corrugated board shipping box (`corrugated_board_box`)

Corrugated board boxes cross the packaging boundary when used as shipping containers for the accepted curtain. Their measured mass is kept separate from PE-LD film and other packaging components.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Record measured corrugated-box mass consumed by the reporting lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished curtain product (`final_curtain_product`)

The accepted finished curtain is released after inspection and is the product flow to which the complete foreground inventory is normalized. Its net mass excludes PE-LD film and corrugated boxes.

- Selected flow: Curtains (including drapes) and interior blinds, curtain or bed valances `e25f1284-93c9-4898-960e-3a91f026451b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record net measured mass of accepted finished product released at the factory gate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`
- Sources: `unsd-cpc-3-2025`

##### Waste flows

###### Rejected finished curtain (`rejected_finished_curtain`)

A finished curtain that fails final inspection is recorded as a separate waste flow when it leaves production for disposal or external recovery. Items retained for documented rework remain internal and are not counted as waste until they leave the foreground system.

- Selected flow: Rejected finished woven polyester curtain
- Flow property / unit: Mass / kg
- Amount rule: Record measured mass sent from final inspection to disposal or external recovery, by destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Distinct products, routes, batches, finishing lines, and packaging configurations | Use process subdivision and product-specific records before applying allocation. | `iso-14044-2006`; `iso-tr-14049-2012` |
| `allocation_rework_internal` | Rework retained inside the site | Keep rework loops internal; count only additional measured materials and utilities, and do not create a co-product credit. | `iso-14044-2006` |
| `allocation_recovered_scrap` | Textile scrap transferred for recycling or recovery | Record the outgoing waste mass and destination without an avoided-burden credit inside the foreground package; any downstream substitution belongs to the declared downstream model. | `iso-14044-2006` |
| `allocation_shared_utilities` | Shared meters or equipment serving multiple products | Prefer submetering; otherwise use a documented physical allocation based on measured operating time, throughput, or another causal driver and disclose the method and sensitivity. | `iso-14044-2006`; `eu-textiles-bat-2022-2508` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `material_cutting`; `sewing_assembly`; `inspection_packaging` | Fabric, panels, thread, heading tape, eyelets and packaging components | Receiving, issue, return, stock and verified unit-mass records | material identity; composition; lot; gross issue; return; count; verified unit mass; net consumed mass | Calibrated scale plus controlled inventory records; eyelet mass may use counted items and verified mean unit mass | kg | Each production lot | Complete reporting period | All included manufacturing lines | Sum net consumed mass by row and lot; reconcile issues less returns to physical stock movement | Calibration records; lot traceability; stock reconciliation; unit-mass test record |
| `cp_process_electricity_records` | `material_cutting`; `sewing_assembly`; `wet_finishing`; `inspection_packaging` | Low-voltage electricity | Process-submeter record | meter id; opening reading; closing reading; kWh; process id; lot; operating interval; allocation driver if shared | Calibrated submeter; documented physical allocation only when a dedicated submeter is unavailable | kWh | Each lot or meter interval | Complete reporting period | All included processes | Difference of validated readings, assigned to process and lot; no double counting across processes | Meter calibration; reading log; allocation worksheet; electricity invoice reconciliation |
| `cp_water_records` | `wet_finishing` | Process water and textile-finishing wastewater | Inlet and outlet meter records | meter id; opening reading; closing reading; volume or mass; density conversion if used; lot; discharge route | Calibrated water and effluent meters with documented conversion to mass where required | kg | Each finishing lot or meter interval | Complete reporting period | All included wet-finishing lines and discharge points | Aggregate inlet and outlet separately by lot; retain water-balance reconciliation | Meter calibration; water-balance check; discharge log; laboratory record where relevant |
| `cp_chemical_issue_records` | `wet_finishing` | Sodium hydroxide and hydrogen peroxide | Batch recipe, issue and concentration records | chemical identity; CAS or specification; supplier; formulation mass; active concentration; returned mass; lot | Controlled recipe and stock issue records reconciled to supplier specification or safety data sheet | kg active substance | Each finishing batch | Complete reporting period | Every included finishing recipe and line | Formulation mass × verified active mass fraction, less documented return | Supplier specification; safety data sheet; batch sheet; stock reconciliation |
| `cp_steam_records` | `wet_finishing` | Purchased saturated steam | Steam-meter record | meter id; opening reading; closing reading; steam mass; pressure; condensate return; lot | Calibrated steam meter and supplier record | kg | Each finishing lot or meter interval | Complete reporting period | All included steam users | Difference of validated readings assigned to the applicable finishing lot | Meter calibration; supplier invoice; pressure log; condensate record |
| `cp_waste_mass_records` | `material_cutting`; `inspection_packaging` | Textile cutting scrap and rejected finished curtains | Waste scale and transfer record | waste identity; source process; lot; gross mass; tare; net mass; destination; rework status | Calibrated scale at generation or dispatch, reconciled to transfer documentation | kg | Each waste transfer | Complete reporting period | All included waste generation points | Sum net waste mass by row, lot and destination; exclude material retained as stock or internal rework | Scale calibration; transfer note; destination receipt; rework log |
| `cp_production_output_records` | `sewing_assembly`; `wet_finishing`; `inspection_packaging` | Intermediate and accepted finished-product outputs | Production and inspection records | product id; lot; subtype; qualifiers; gross mass; packaging mass; net product mass; accepted quantity; rejected quantity | Calibrated scale linked to production and final-inspection release records | kg | Each production lot | Complete reporting period | All included product lines | Sum accepted net product mass; keep packaging and rejected product separate | Scale calibration; inspection release; product specification; lot genealogy |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_consumption` | Every issued material input | net consumed mass = issued mass − documented return to inventory | issued mass; returned mass | net material input mass | `iso-tr-14049-2012` |
| `calc_active_chemical_mass` | Sodium hydroxide and hydrogen peroxide formulations | active-substance-equivalent mass = net formulation mass × verified active mass fraction | formulation issue; formulation return; active mass fraction | kg active substance | `eu-textiles-bat-2022-2508` |
| `calc_reference_normalization` | All inventory exchanges | normalized exchange = reporting-period exchange ÷ accepted net finished-product mass | exchange amount; accepted net finished-product mass | exchange amount per 1 kg reference product | `iso-14044-2006`; `iso-tr-14049-2012` |
| `calc_textile_mass_balance` | Cutting through final inspection | Reconcile purchased textile and trim inputs with accepted product, measured intermediate stock change, textile waste, rejected product, and retained rework; investigate and disclose residual differences. | material inputs; product outputs; waste outputs; stock change; retained rework | mass-balance reconciliation | `iso-14044-2006`; `eu-textiles-bat-2022-2508` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Every flow row | Preserve one chemically or physically specific exchange per row; retain exact UUID evidence when adopted and disclose any row without a confirmed UUID. | Flow identity register and direct-read verification record |
| `dq_product_specification` | Reference product | Record all required qualifiers and link them to the lot-specific product specification. | Approved specification, bill of materials and inspection release |
| `dq_temporal_coverage` | Foreground activity data | Cover a representative continuous reporting period and identify shutdowns, trial runs, abnormal operations, and missing intervals. | Dated meter, production, stock and waste records |
| `dq_meter_quality` | Mass, electricity, water and steam records | Use calibrated equipment and retain calibration validity, reading resolution, conversion method, and treatment of shared meters. | Calibration certificates and meter logs |
| `dq_completeness` | Process inventory | Reconcile material, water and energy inputs with product, waste, wastewater, emissions where relevant, and stock changes; explain every material residual and excluded exchange. | Mass balance, water balance, energy reconciliation and exclusion log |
| `dq_representativeness` | Upstream datasets | Match geography, technology, material composition, recycled content, voltage, pressure and time period to the declared foreground input. | Dataset selection record and supplier specification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require the accepted state100 CPC 27130 product-flow UUID, Mass property UUID, 1 kg reference amount, and all required product qualifiers; the missing unit-group UUID remains a declared review item. | `unsd-cpc-3-2025` |
| `validate_atomic_inventory` | Every process inventory card | Require exactly one selected product, waste, or elementary exchange per card; reject collection labels, combined utilities, material selectors, and pending placeholders. | `eu-textiles-bat-2022-2508` |
| `validate_bilingual_alignment` | English and Chinese PCR files | Require identical ordered process_id, row_id, controlled token, source-id, and UUID sequences in both language renderings. | `iso-14044-2006` |
| `validate_process_coverage` | Foreground route | Require all required processes and require wet_finishing only when the reporting site performs the declared wet or thermal treatment. | `us-census-naics-2022-314120`; `jrc-textiles-bref-2023` |
| `validate_foreground_amounts` | Every inventory exchange | Require a linked collection protocol and reporting-period foreground record; do not accept AI-generated default values or ranges. | `iso-tr-14049-2012` |
| `validate_mass_balance` | Textile materials and product outputs | Require documented reconciliation of textile and trim inputs with accepted product, stock change, waste, rejects, and retained rework. | `iso-14044-2006`; `eu-textiles-bat-2022-2508` |
| `validate_wet_finishing_records` | Conditional wet_finishing process | When applicable, require separate records for each actual chemical, process water, electricity, steam or heat, wastewater stream, waste stream, and relevant direct emission. | `jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `validate_packaging_separation` | Inspection and packaging | Require PE-LD film and corrugated board boxes as separate inputs and exclude their mass from the 1 kg reference product. | `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for made-up textile curtain, drape, textile blind, curtain-valance, or bed-valance manufacture |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Cradle-to-factory-gate LCI, product-footprint and lifecycle-model construction when product qualifiers, route, geography and reporting period match |
| excluded_use | Standalone representation of upstream fibre, yarn or fabric production; use-stage service life or cleaning; installation; end-of-life; non-textile blinds or shutters |
| required_metadata | PCR id and version; product subtype; required qualifiers; factory geography; reporting period; included processes; wet-finishing state; allocation method; upstream dataset references; UUID review status |
| required_quality_disclosure | Meter coverage and calibration; mass, water and energy reconciliation; missing records; shared-meter allocation; waste destinations; upstream representativeness; exclusions; rows without confirmed UUIDs |
| update_trigger | Change in product construction or composition, finishing recipe, accessory or packaging configuration, production technology, site energy or water system, waste destination, upstream dataset, or any adopted Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, subclass 27130, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | Product-category scope and official title |
| `us-census-naics-2022-314120` | Official guidance (`official_guidance`) | U.S. Census Bureau, 2022 NAICS 314120 Curtain and Linen Mills, https://www.census.gov/naics/?details=31&input=31&year=2022 (retrieved 2026-08-13) | Purchased-material manufacturing gate and curtain/linen mill scope |
| `ilo-garment-supply-chain-2021` | Official guidance (`official_guidance`) | International Labour Organization, Occupational safety and health improvement in the garment industry: Drivers and constraints, https://vzf.ilo.org/wp-content/uploads/2021/09/OSH_improvement-Garment-_04Web.pdf (retrieved 2026-08-13) | Cut-and-sew process decomposition, fabric and trim inputs |
| `jrc-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-13) | Conditional wet/thermal finishing boundary and textile-process decomposition |
| `eu-textiles-bat-2022-2508` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI: http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-13) | Input/output inventory, water, energy, chemical, wastewater, waste and finishing-process record requirements |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (confirmed current by ISO in 2022; retrieved 2026-08-13) | LCI system boundary, allocation, reporting and data-quality framework |
| `iso-tr-14049-2012` | Standard (`standard`) | ISO/TR 14049:2012, Environmental management — Life cycle assessment — Illustrative examples on how to apply ISO 14044 to goal and scope definition and inventory analysis, https://www.iso.org/standard/57110.html (retrieved 2026-08-13) | Foreground inventory construction, calculation and normalization rules |
