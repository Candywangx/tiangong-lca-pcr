---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.spectacles-goggles-and-the-like-corrective-protective-or-other
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Spectacles, goggles and the like, corrective, protective or other

## 1. Scope and Applicability

This PCR covers finished, wearable eyewear supplied as a complete product for vision correction, protection against a declared eye hazard, attenuation of solar radiation, sport or leisure use, or another declared optical function. It covers spectacles, safety spectacles, goggles, sunglasses, swimming or sport goggles, and analogous eye protectors when the frame or body and lenses are assembled and ready for distribution.

The foreground boundary begins with purchased raw materials, semi-finished components, or finished frames and lenses at the manufacturing site and ends with conforming eyewear and its separately recorded primary packaging at the factory gate. Integrated frame manufacture, integrated lens moulding or surfacing, coating, edging, assembly, cleaning, inspection, and packaging are included when performed by the reporting organization. Upstream production and inbound transport of purchased inputs are represented by geographically and technologically appropriate background datasets.

Excluded products are unassembled frames and mountings sold as products, unworked spectacle glass, contact lenses, optical instruments that are not wearable eyewear, electronic smart-glasses functions unless separately modelled, detachable cases and cleaning cloths unless explicitly included, retail fitting, prescription examination, distribution after the factory gate, use-phase cleaning, repair, and end-of-life. A dataset may extend the boundary, but must disclose the extension and keep the factory-gate result separable.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.spectacles-goggles-and-the-like-corrective-protective-or-other |
| classification_refs | CPC 3.0: 48312, exact mapping context |
| covered_products | Finished corrective spectacles; protective spectacles and goggles; sunglasses; sport and swimming goggles; analogous finished eyewear with a declared optical or protective function |
| excluded_products | Frames and mountings sold unassembled; unworked spectacle glass; contact lenses; non-wearable optical instruments; detachable cases and cloths unless declared; electronic functions not separately modelled |
| representative_product | One conforming saleable unit, meaning one pair of spectacles or goggles, or one analogous single eye protector as sold |
| production_route | Purchased-component assembly or disclosed integrated frame manufacture and/or lens moulding, surfacing, coating, edging, assembly, inspection, and packaging |
| market_state | Finished, clean, inspected, ready for distribution at the factory gate; prescription, filter, hazard, coating, and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared vision-correction, eye-protection, solar-attenuation, sport, or other optical function |
| How much | One conforming saleable eyewear unit: one pair of spectacles or goggles, or one analogous single protector as sold |
| How well | Meets the declared prescription or optical order and the applicable performance or conformity class, such as ISO 21987, ISO 12312-1, ISO 16321-1, or a declared jurisdictional equivalent |
| How long or cycle | The declared design or warranted service life; this factory-gate inventory excludes use and replacement unless explicitly extended |
| reference_flow_link | Measured mass of the finished eyewear unit, excluding detachable accessories and packaging, with unit count and mass-per-unit retained |

| Field | Value |
| --- | --- |
| Reference amount | Measured kg of one conforming saleable eyewear unit, excluding detachable accessories and packaging |
| Reference product flow | Spectacles, goggles and the like, corrective, protective or other `0e324723-d349-47ea-9c61-c324c8e11d9a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | saleable-unit definition and count; corrective/protective/sun/sport/other function; lens material; optical power, filter category, or protected hazard as applicable; frame material and construction; coatings and tint; applicable conformity standard and class; measured product mass excluding packaging; manufacturing route; production geography; factory-gate and packaging state; declared service life |

When constructing a foreground data package, every item listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Finished reference product | Mass | kg | Weigh conforming eyewear without detachable case, cloth, labels, or packaging; report those included items as separate atomic inputs and disclose any unavoidable deviation. |
| `saleable_unit_conversion` | Unit-to-mass conversion | Mass | kg/unit | Record inspected saleable-unit count and representative measured mass; normalize all rows to the measured kg of one saleable unit while retaining the item or pair definition. |
| `energy_conversion` | Electricity rows | Net calorific value | MJ | Preserve metered energy; convert kWh to MJ using 1 kWh = 3.6 MJ and do not convert electricity to fuel mass. |
| `wet_waste_basis` | Wastewater and wet grinding waste | Mass | kg | Record wet mass crossing the boundary and separately retain dry-solids mass, water content, composition, and treatment destination so water and solids are not double counted. |
| `route_mass_balance` | Integrated frame and lens routes | Mass | kg | Reconcile gross material inputs with internal product output, segregated wastes, recoveries, and inventory change for the same reporting period and route. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased material, semi-finished component, or finished frame/lens at the reporting-site gate, identified by material, product state, supplier geography, and upstream dataset |
| starting_condition_role | Foreground manufacturing input with upstream production and inbound transport represented by linked background datasets |
| product_classification_scope | Finished wearable eyewear covered by this PCR; frames, lenses, and raw materials remain inputs or internal intermediates, not alternative reference products |
| recursive_input_rule | Finished eyewear received for repacking, customization, or remanufacture must be disclosed as a same-category input and retain its upstream dataset; it must not be relabelled as virgin raw material or silently omitted |
| upstream_dataset_requirement | Use supplier-specific data where available; otherwise use geographically, technologically, compositionally, and temporally representative datasets for every purchased atomic material, component, energy carrier, treatment, and transport service |
| disclosure | Declare integrated versus purchased frame and lens routes, coating and edging locations, rejected-product handling, packaging scope, supplier geographies, transport modes, cut-offs, and any boundary extension |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | foreground_and_upstream_boundary | Include upstream input production, inbound transport, on-site frame and lens operations when performed, assembly, cleaning, inspection, primary packaging, internal recycling burdens, wastes, and direct emissions through the factory gate. | `ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023`; `eu-pef-method-2021` |
| `boundary_route_condition` | integrated_processes | Apply integrated frame or lens processes only when performed inside the reporting boundary; otherwise record the purchased frame or lens and link its complete upstream dataset without double counting its manufacture. | `ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing` |
| `boundary_atomic_completeness` | bill_of_materials_and_outputs | Add a separate atomic row for every additional material, coating substance, component, waste, treatment, fuel, transport service, and direct elementary emission that crosses the declared boundary; do not replace them with an umbrella flow. | `eu-pef-method-2021` |
| `boundary_use_exclusion` | downstream_stages | Exclude retail fitting, consumer travel, use-phase cleaning, repair, and end-of-life from the factory-gate result unless an extended scenario is separately reported. | `ace-tate-eyewear-lca-2018` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_frame_manufacturing` | Integrated frame manufacturing | conditional | Include when frame parts or complete frames are cut, moulded, formed, machined, joined, finished, or coated inside the reporting boundary | Foreground component manufacture | kg frame output transferred to final assembly |
| `integrated_lens_manufacturing` | Integrated lens manufacturing and finishing | conditional | Include when lenses are moulded, generated, polished, cleaned, tinted, coated, edged, or engraved inside the reporting boundary | Foreground optical component manufacture | kg conforming finished-lens output transferred to final assembly |
| `final_assembly_packaging` | Final assembly, inspection, and packaging | required | Always include for finished eyewear | Foreground final production | one conforming saleable unit and its measured kg reference flow |

### Process: Integrated frame manufacturing (`integrated_frame_manufacturing`)

#### Inputs

##### Product flows

###### Cellulose acetate sheet (`cellulose_acetate_sheet`)

Record cellulose acetate sheet actually cut or formed into frames; do not substitute generic plastic sheet.

- Selected flow: Cellulose acetate sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured gross cellulose acetate sheet issued to the route, net of documented same-quality return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured kg of frame output transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_materials`
- Sources: `ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023`

###### Stainless steel (`stainless_steel`)

Record stainless steel entering metal-frame parts; retain alloy grade and semi-finished form.

- Selected flow: Stainless steel `84c2403f-5062-5d68-8276-838384d32b89`
- Flow property / unit: Mass / kg
- Amount rule: Measured stainless-steel mass issued to the declared frame route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured kg of frame output transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_materials`
- Sources: `ace-tate-eyewear-lca-2018`

###### Polycarbonate frame granulate (`polycarbonate_frame_granulate`)

Record polycarbonate granulate only for an injection-moulded or additive frame route using this polymer.

- Selected flow: Polycarbonate granulate `0c945ca0-edf2-41f3-ba9e-23af3e75c6d1`
- Flow property / unit: Mass / kg
- Amount rule: Measured polycarbonate granulate issued to the declared frame route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured kg of frame output transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_materials`
- Sources:

###### Frame-process electricity (`frame_process_electricity`)

Record metered electricity used by frame cutting, moulding, machining, joining, finishing, and attributable auxiliaries.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or an allocation from a reconciled meter using documented machine time and power
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of frame output transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_electricity`
- Sources: `ace-tate-eyewear-lca-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Manufactured frame output (`manufactured_frame_output`)

Record conforming frames transferred from integrated frame manufacture to final assembly; do not count purchased frames again.

- Selected flow: Frames and mountings for spectacles, goggles or the like `8b6b0bdd-aae1-44f1-a5f8-11a984c38cf1`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of conforming frame output transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per integrated frame-production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_outputs`
- Sources: `ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023`

##### Waste flows

###### Cellulose acetate frame offcuts (`cellulose_acetate_frame_offcuts`)

Record segregated cellulose acetate offcuts and machining chips leaving the process for reuse, recycling, or treatment.

- Selected flow: Cellulose acetate frame offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured wet- or dry-as-received mass, with condition and destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured kg of frame output transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_outputs`
- Sources: `ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023`

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record segregated steel cuttings and rejected metal frame parts crossing to recycling or treatment.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass leaving the process, with alloy grade and destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured kg of frame output transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_outputs`
- Sources: `ace-tate-eyewear-lca-2018`

###### Polycarbonate frame offcuts (`polycarbonate_frame_offcuts`)

Record segregated polycarbonate sprues, offcuts, and rejected mouldings; exclude material internally reground and returned within the same measured batch.

- Selected flow: Polycarbonate frame offcuts
- Flow property / unit: Mass / kg
- Amount rule: Measured mass crossing from the process to recycling or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured kg of frame output transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frame_outputs`
- Sources:

##### Elementary flows

### Process: Integrated lens manufacturing and finishing (`integrated_lens_manufacturing`)

#### Inputs

##### Product flows

###### Optical-glass pressing blank (`optical_glass_pressing_blank`)

Record optical-glass pressing blanks only for the declared glass-lens route.

- Selected flow: Optical Glass Pressing Blank `a68c2948-174f-4e17-a3ee-f2b289d50d18`
- Flow property / unit: Mass / kg
- Amount rule: Measured gross blank mass entering generating, grinding, polishing, or edging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured kg of conforming finished-lens output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lens_materials`
- Sources: `ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing`

###### Polycarbonate lens granulate (`polycarbonate_lens_granulate`)

Record polycarbonate granulate only when lenses are moulded from this polymer within the foreground boundary.

- Selected flow: Polycarbonate granulate `0c945ca0-edf2-41f3-ba9e-23af3e75c6d1`
- Flow property / unit: Mass / kg
- Amount rule: Measured granulate issued to lens moulding, net of documented same-quality return to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured kg of conforming finished-lens output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lens_materials`
- Sources:

###### Cerium oxide (`cerium_oxide`)

Record cerium oxide consumed in glass-lens polishing; declare purity and slurry preparation.

- Selected flow: Cerium oxide `b23ee368-01e2-4fcd-8e8f-e8115ee04555`
- Flow property / unit: Mass / kg
- Amount rule: Purchased plus opening stock minus closing stock, recoveries, and measured waste for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured kg of conforming finished-lens output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lens_materials`
- Sources: `zeiss-spectacle-lens-manufacturing`

###### Isopropanol (`isopropanol`)

Record isopropanol crossing into lens or final cleaning; keep aqueous concentration and recovered solvent separate.

- Selected flow: Isopropanol `a4a75541-e156-4e30-947c-ba067a682afd`
- Flow property / unit: Mass / kg
- Amount rule: Neat isopropanol mass in purchased or prepared cleaning solution, calculated from measured solution mass and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of conforming finished-lens output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lens_materials`
- Sources: `zeiss-spectacle-lens-manufacturing`

###### Process water (`process_water`)

Record process water supplied for grinding, polishing, de-blocking, rinsing, or cleaning; internally recirculated water is not counted again as an external input.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or tank-weighed make-up water entering the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of conforming finished-lens output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lens_water`
- Sources: `ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing`

###### Lens-finishing electricity (`lens_finishing_electricity`)

Record electricity used for moulding, generating, polishing, cleaning, drying, coating, edging, and attributable extraction or vacuum systems.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or reconciled equipment-level calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of conforming finished-lens output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lens_electricity`
- Sources: `ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished spectacle-lens output (`finished_spectacle_lens_output`)

Record conforming lenses after all in-scope optical working, coating, and edging and before mounting.

- Selected flow: Finished spectacle lens
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of conforming finished lenses transferred to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per integrated lens-production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lens_outputs`
- Sources: `iso-21987-2017`; `zeiss-spectacle-lens-manufacturing`

##### Waste flows

###### Polycarbonate lens-grinding waste (`polycarbonate_lens_grinding_waste`)

Record segregated polycarbonate swarf or solids removed during generating and edging; do not combine it with wastewater.

- Selected flow: Polycarbonate lens-grinding waste
- Flow property / unit: Mass / kg
- Amount rule: Measured dry solids or wet waste with water content separately determined
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured kg of conforming finished-lens output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lens_outputs`
- Sources: `ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing`

###### Optical-glass production waste (`optical_glass_production_waste`)

Record segregated optical-glass cuttings, chips, and grinding solids from the glass-lens route.

- Selected flow: waste from glass production `9e75655e-039d-421e-abec-bbe625491bc6`
- Flow property / unit: Mass / kg
- Amount rule: Measured dry solids or wet waste with water content separately determined
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per measured kg of conforming finished-lens output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lens_outputs`
- Sources: `zeiss-spectacle-lens-manufacturing`

###### Lens-grinding wastewater (`lens_grinding_wastewater`)

Record wastewater discharged to treatment after lens grinding, polishing, de-blocking, rinsing, or cleaning, with solids and contaminants characterized.

- Selected flow: Lens-grinding wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered or weighed wet wastewater crossing to on-site or off-site treatment, excluding recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of conforming finished-lens output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lens_outputs`
- Sources: `ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing`

##### Elementary flows

###### Isopropanol released to air (`isopropanol_to_air`)

Record only the reconciled isopropanol mass that passes abatement and crosses the environmental boundary to outdoor air.

- Selected flow: isopropanol `fe0acd60-3ddc-11dd-a843-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack or vent measurement, or solvent mass balance after recovery, wastewater, waste, and inventory change; do not assume all input evaporates
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per measured kg of conforming finished-lens output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_release`
- Sources: `eu-pef-method-2021`

### Process: Final assembly, inspection, and packaging (`final_assembly_packaging`)

#### Inputs

##### Product flows

###### Frame input (`finished_frame_input`)

Record each purchased or internally transferred frame once, with origin and integrated-route status declared.

- Selected flow: Frames and mountings for spectacles, goggles or the like `8b6b0bdd-aae1-44f1-a5f8-11a984c38cf1`
- Flow property / unit: Mass / kg
- Amount rule: Measured frame mass entering assembly, excluding internally transferred output already balanced within the same product system from upstream duplication
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming saleable eyewear unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `ace-tate-eyewear-lca-2018`

###### Finished spectacle-lens input (`finished_spectacle_lens_input`)

Record the measured mass of purchased or internally transferred finished lenses mounted into the reference product.

- Selected flow: Finished spectacle lens
- Flow property / unit: Mass / kg
- Amount rule: Measured lens mass entering assembly, retaining lens count, material, optical state, and coating state
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming saleable eyewear unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_materials`
- Sources: `iso-21987-2017`; `ace-tate-eyewear-lca-2018`

###### Assembly electricity (`assembly_electricity`)

Record electricity for edging performed at assembly, mounting, cleaning, inspection, and packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or reconciled equipment-level calculation for the final process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per conforming saleable eyewear unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_electricity`
- Sources: `ace-tate-eyewear-lca-2018`

###### Corrugated-board box (`corrugated_board_box`)

Record corrugated-board boxes supplied with the reference product or used as attributable primary packaging.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured box mass multiplied by boxes attributable to one saleable unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming saleable eyewear unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `ace-tate-eyewear-lca-2018`; `eu-pef-method-2021`

###### Low-density polyethylene packaging film (`ldpe_packaging_film`)

Record PE-LD film sleeves or bags supplied with the product; do not combine other polymers in this row.

- Selected flow: Low-density polyethylene foil (PE-LD) `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- Flow property / unit: Mass / kg
- Amount rule: Measured film mass multiplied by pieces attributable to one saleable unit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming saleable eyewear unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `ace-tate-eyewear-lca-2018`; `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished conforming eyewear (`finished_eyewear_output`)

This is the reference product output after assembly, cleaning, conformity inspection, and packaging preparation.

- Selected flow: Spectacles, goggles and the like, corrective, protective or other `0e324723-d349-47ea-9c61-c324c8e11d9a`
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of one conforming saleable eyewear unit excluding detachable accessories and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one conforming saleable eyewear unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product`
- Sources: `un-cpc-3-0-structure-2025`; `iso-21987-2017`; `iso-12312-1-2022`; `iso-16321-1-2021`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared_foreground_operations | Subdivide and submeter frame, lens, coating, assembly, and packaging operations wherever independently measured records exist before applying allocation. | `eu-pef-method-2021` |
| `allocation_residual_facility` | shared_electricity_water_and_auxiliaries | Allocate only residual shared facility inputs using a documented causal driver such as machine time, metered load, water volume, or occupied process time; if no causal relationship can be established, use mass or unit count and report a sensitivity check. | `eu-pef-method-2021` |
| `allocation_scrap_no_avoided_burden` | recoverable_scrap | Report exported scrap and recovered solvent at the measured boundary without silently crediting avoided virgin production; any recycling or substitution credit belongs in a separately declared downstream scenario. | `ace-tate-eyewear-lca-2018`; `eu-pef-method-2021` |
| `allocation_rework` | internal_rework | Keep internal rework burdens in the production batch that ultimately yields conforming eyewear; do not create a co-product credit for non-saleable rework. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_frame_materials` | `integrated_frame_manufacturing` | frame material inputs | purchase, stock, issue, and return records | material identity; grade; gross issue; returned stock; recycled content; supplier; batch | Reconcile BOM issues with warehouse and production records | kg | per batch, monthly reconciliation | representative 12 months or declared campaign | each frame-manufacturing site and route | Sum net material crossing into the route and normalize to conforming frame output | invoices, weigh tickets, BOM revision, stock reconciliation |
| `cp_frame_electricity` | `integrated_frame_manufacturing` | frame electricity | meter and machine records | meter start/end; machine hours; rated or measured load; output mass | Submeter preferred; otherwise reconcile equipment calculation to facility meter | kWh and MJ | continuous or per shift | representative 12 months or declared campaign | each frame-manufacturing site | Convert kWh to MJ and divide by conforming frame output | calibrated meter record, reconciliation, downtime log |
| `cp_frame_outputs` | `integrated_frame_manufacturing` | frame product and segregated wastes | production and waste records | conforming frame mass; waste mass; material; moisture; destination; internal return | Weigh conforming transfer and each segregated waste stream | kg | per batch | same period as frame inputs | each frame-manufacturing site and route | Sum by atomic material and destination; exclude same-batch internal return from exported waste | calibrated scale, waste transfer note, mass-balance reconciliation |
| `cp_lens_materials` | `integrated_lens_manufacturing` | lens materials and cleaning chemical | purchase, stock, issue, concentration, and recovery records | substance; grade; solution mass; concentration; opening/closing stock; recovery; batch | Reconcile material issues and concentration certificates | kg | per batch, monthly reconciliation | representative 12 months or declared campaign | each lens-manufacturing site and route | Calculate neat substance mass and normalize to conforming lens output | invoices, certificates, stock record, preparation sheet |
| `cp_lens_water` | `integrated_lens_manufacturing` | process-water input | meter or tank record | make-up water; recirculation; discharge; batch output | Meter make-up water at the process boundary | kg or m3 | continuous or per batch | representative 12 months or declared campaign | each lens-finishing site | Count external make-up once; convert volume using measured or declared density | calibrated meter, tank log, water balance |
| `cp_lens_electricity` | `integrated_lens_manufacturing` | lens electricity | meter and equipment records | meter start/end; equipment hours; load; route; output mass | Submeter preferred; otherwise reconcile equipment calculation to facility meter | kWh and MJ | continuous or per shift | representative 12 months or declared campaign | each lens-manufacturing site and route | Convert kWh to MJ and normalize to conforming lens output | calibrated meter, reconciliation, equipment log |
| `cp_lens_outputs` | `integrated_lens_manufacturing` | finished lenses, solids, and wastewater | production, wastewater, and waste records | lens mass/count; reject mass; waste identity; wet/dry mass; water content; discharge mass; treatment | Weigh lens output and solids; meter or weigh wastewater; sample composition | kg | per batch with periodic representative sampling | same period as lens inputs | each lens-manufacturing site and route | Keep each polymer, glass waste, and wastewater separate and close wet/dry mass balance | scale and meter calibration, laboratory results, transfer notes |
| `cp_solvent_release` | `integrated_lens_manufacturing` | isopropanol release to air | stack test or solvent balance | neat input; recovered mass; wastewater mass; waste mass; stock change; measured vent concentration and flow | Prefer vent measurement; otherwise complete reconciled solvent balance | kg | measurement campaign plus monthly balance | representative operating conditions and 12-month balance | each solvent-using site | Release = input minus recovery, wastewater, solid waste, product retention, and stock increase; floor at zero and investigate imbalance | stack-test report, concentration certificate, recovery and waste records |
| `cp_assembly_materials` | `final_assembly_packaging` | frame and lens inputs | BOM, issue, and transfer records | frame mass/count; lens mass/count; material; origin; internal/purchased flag; product model | Weigh representative components and reconcile counts to completed units | kg and count | per model and batch | representative 12 months or declared campaign | each assembly site | Sum purchased inputs once; preserve internal transfers for unit-process linkage without duplicating upstream burdens | BOM, scale record, transfer record, supplier identity |
| `cp_assembly_electricity` | `final_assembly_packaging` | assembly electricity | meter and equipment records | meter start/end; machine hours; load; conforming unit count | Submeter preferred; otherwise reconcile equipment calculation | kWh and MJ | continuous or per shift | representative 12 months or declared campaign | each assembly site | Convert kWh to MJ and normalize to conforming units | calibrated meter, reconciliation, downtime log |
| `cp_packaging_materials` | `final_assembly_packaging` | atomic packaging inputs | packaging specification and issue records | material; piece mass; pieces issued; returned stock; units packed | Weigh each packaging component and reconcile issue counts | kg and count | per packaging specification and batch | current packaging specification | each packaging site | Multiply measured piece mass by attributable count and keep polymers and paper products separate | specification, supplier declaration, scale record, issue reconciliation |
| `cp_finished_product` | `final_assembly_packaging` | reference product output | inspection and weighing record | conforming unit count; item/pair definition; product mass; model; lens state; frame state; rejects | Weigh a representative sample or every unit and reconcile to inspected count | kg and count | per batch or statistically justified sampling plan | representative 12 months or declared campaign | each final assembly site | Calculate weighted mean product mass and total conforming output; keep packaging excluded | calibrated scale, sampling plan, inspection and conformity record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | finished eyewear | Sum measured unpackaged conforming-product mass divided by conforming saleable-unit count; retain weighted model mix | product mass; conforming count; saleable-unit definition | kg per saleable unit and total kg output | `ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023` |
| `calc_energy_mj` | all electricity rows | MJ = metered kWh × 3.6 | kWh | MJ |  |
| `calc_neat_isopropanol` | isopropanol input | Neat isopropanol mass = solution mass × measured mass fraction | solution mass; concentration certificate or measurement | kg isopropanol |  |
| `calc_solvent_release` | isopropanol to air | Release = neat input − recovered solvent − wastewater load − solid-waste load − product retention − stock increase; use only when all terms are reconciled | collected solvent-balance fields | kg released to air | `eu-pef-method-2021` |
| `calc_process_mass_balance` | integrated frame and lens routes | Mass-balance residual = gross atomic material inputs − conforming internal output − exported atomic wastes − measured recovery − inventory increase | matched-period material, output, waste, recovery, and stock records | kg residual and percent of gross input | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and components | Declare model family, saleable-unit definition, function, lens material and optical state, frame material, coating/tint, and applicable conformity class. | BOM, technical file, prescription/order class, conformity or test record |
| `dq_temporal` | all foreground data | Use a representative continuous 12-month period or disclose the shorter campaign and seasonal or product-mix limitation. | dated meter, production, purchase, stock, and waste records |
| `dq_geography_technology` | purchased inputs and utilities | Match supplier geography, electricity market, material grade, recycled content, and production technology; document proxies and sensitivity. | supplier declaration, dataset metadata, utility bill, route disclosure |
| `dq_completeness` | material and energy balance | Reconcile all measured major foreground material masses and all separately metered process energy; investigate and disclose residuals rather than forcing balance. | signed mass/energy reconciliation and exception log |
| `dq_wastewater` | lens-grinding wastewater | Retain wet mass or volume, dry solids, particle/material composition, treatment route, sampling method, and whether water is recirculated. | meter or scale record, laboratory report, treatment manifest |
| `dq_conformity` | final product | Retain evidence that the output meets the declared prescription, filter, hazard, or performance class; nonconforming units are not reference product. | inspection, test, technical-file, or declaration-of-conformity record |
| `dq_uncertainty` | calculated and allocated rows | Disclose calculation inputs, allocation drivers, meter coverage, sampling error, and unresolved UUID or range-evidence needs. | calculation workbook, calibration record, sampling plan, sensitivity result |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference_flow | Confirm the output is complete wearable eyewear, not an unassembled frame, lens, unworked glass, case, or electronic service, and that UUID, mass property, and required qualifiers agree. | `un-cpc-3-0-structure-2025` |
| `validate_unit_and_count` | normalization | Confirm the reported kg reference amount equals measured unpackaged mass of the declared saleable unit and that pair or item count is retained. | `ace-tate-eyewear-lca-2018`; `vanni-eyewear-lca-2023` |
| `validate_route_consistency` | process_map | Require final assembly and packaging; require each integrated process only when performed and reject double counting between its internal output and a purchased component dataset. | `ace-tate-eyewear-lca-2018`; `zeiss-spectacle-lens-manufacturing` |
| `validate_atomic_inventory` | process_inventory | Confirm every Selected flow is one atomic exchange with one direction and flow type; require separate rows for each actual polymer, metal, coating substance, chemical, packaging component, waste, and elementary emission. | `eu-pef-method-2021` |
| `validate_mass_balance` | integrated_processes | Investigate every unexplained material route mass-balance residual that is significant for the declared data-quality objective and prohibit adjustment of waste or product values solely to force closure. | `eu-pef-method-2021` |
| `validate_optical_conformity` | finished_product_quality | Confirm the declared prescription/order or protective/filter performance class and applicable standard; exclude nonconforming outputs from the reference flow. | `iso-21987-2017`; `iso-12312-1-2022`; `iso-16321-1-2021`; `eu-ppe-regulation-2016-425` |
| `validate_unresolved_evidence` | readiness | Keep UUID-empty rows and range-evidence needs explicitly unresolved; do not promote a proxy UUID or a single published case value to final identity or range evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for one declared finished eyewear family and manufacturing route |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` for products using finished eyewear when readiness, geography, technology, time, and quality match |
| allowed_use | Attributional factory-gate modelling, supplier footprints, product-system assembly, and disclosed comparative studies using functionally equivalent eyewear and aligned service-life assumptions |
| excluded_use | Clinical or safety-performance certification; comparison across unlike corrective, protective, sun, or sport functions; undisclosed substitution of frame-only or lens-only data; use-phase or end-of-life claims without added scenarios |
| required_metadata | PCR id and version; saleable-unit definition; product and packaging mass; function; lens material and optical/filter/hazard class; frame material; coatings; integrated or purchased routes; site and supplier geography; data period; allocation; background datasets; unresolved identities and range needs |
| required_quality_disclosure | Meter and scale coverage; BOM reconciliation; mass-balance residual; wastewater characterization; conformity evidence; supplier representativeness; allocation and sensitivity; exclusions and cut-offs |
| update_trigger | Material, lens, frame, coating, packaging, supplier geography, electricity mix, process technology, waste treatment, conformity standard, product-mix, or service-life change that materially alters the declared dataset |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Official CPC 48312 classification identity |
| `ace-tate-eyewear-lca-2018` | literature | Pre Sustainability for Ace & Tate, Life Cycle Assessment, 2018, https://assets.ctfassets.net/utaji99zkvj6/54Bbp0yCIH2i8Pb7GtBzXF/e769d8fcc03271fe8bbbf62326806470/A_T_-_LCA_Report.pdf | Pair-based functional-unit precedent; frame, lens, edging, mounting, packaging, utility, waste, and boundary decomposition |
| `vanni-eyewear-lca-2023` | literature | VANNI, Impact Report 2023, eyewear LCA section, https://www.vanniocchiali.com/storage/builder/82/media-53.pdf?v=2026-01-15-05-37-22 | Independent pair-based functional-unit precedent and acetate-frame cutting/assembly relevance |
| `zeiss-spectacle-lens-manufacturing` | extension_guidance | ZEISS Vision Care, How are spectacle lenses manufactured?, https://www.zeiss.com/vision-care/en/eye-health-and-care/understanding-vision/how-are-spectacle-lenses-manufactured.html | Lens blocking, generating, polishing, cleaning, tinting, coating, and inspection process decomposition |
| `iso-21987-2017` | standard | BS EN ISO 21987:2017, Ophthalmic optics — Mounted spectacle lenses, BSI official standard page, https://knowledge.bsigroup.com/products/ophthalmic-optics-mounted-spectacle-lenses | Corrective mounted-lens prescription-order requirements and test context |
| `iso-12312-1-2022` | standard | BS EN ISO 12312-1:2022, Eye and face protection — Sunglasses and related eyewear — Part 1: Sunglasses for general use, BSI official standard page, https://knowledge.bsigroup.com/products/eye-and-face-protection-sunglasses-and-related-eyewear-sunglasses-for-general-use-1 | Scope and declared conformance context for general-use sunglasses |
| `iso-16321-1-2021` | standard | BS EN ISO 16321-1:2022+A1:2025, identical to ISO 16321-1:2021/Amd 1, Eye and face protection for occupational use — Part 1: General requirements, BSI official standard page, https://knowledge.bsigroup.com/products/eye-and-face-protection-for-occupational-use-general-requirements-1 | Scope and declared hazard/performance context for occupational protective eyewear |
| `eu-ppe-regulation-2016-425` | standard | Regulation (EU) 2016/425 on personal protective equipment, https://eur-lex.europa.eu/eli/reg/2016/425/oj | Jurisdictional conformity and technical-documentation context for protective eyewear |
| `eu-pef-method-2021` | method_factor | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, Annex I, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng | Life-cycle boundary, data quality, allocation, electricity, transport, packaging, waste, and validation rules |
