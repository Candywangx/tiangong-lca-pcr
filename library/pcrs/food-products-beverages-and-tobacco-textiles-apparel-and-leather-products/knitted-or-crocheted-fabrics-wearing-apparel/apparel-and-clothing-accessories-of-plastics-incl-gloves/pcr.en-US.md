---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.apparel-and-clothing-accessories-of-plastics-incl-gloves
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Apparel and clothing accessories of plastics (incl. gloves)

## 1. Scope and Applicability

This PCR builds a site-input-to-factory-gate foreground data package for apparel and clothing accessories, including gloves, classified exactly to CPC 28243 and defined by plastics. It covers cut-and-join plastic film/sheet routes and PVC-compatible plastisol glove dipping; each dataset selects only its actual route and specific atomic exchanges. It excludes leather articles, vulcanized-rubber gloves, ordinary textile apparel, footwear, and CPC 28250 garments made from felt, nonwovens, or textile fabrics impregnated, coated, or laminated with plastics, rubber, or other materials.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.apparel-and-clothing-accessories-of-plastics-incl-gloves |
| classification_refs | CPC 3.0: 28243, exact |
| covered_products | Plastic apparel and clothing accessories, including plastic gloves, classified exactly to CPC 28243. |
| excluded_products | Leather, rubber, or ordinary textile articles; CPC 28250 coated or impregnated textile garments; footwear. |
| representative_product | A declared model and size of plastic apparel, accessory, or glove. |
| production_route | Conditional film/sheet cut-and-join or PVC-plastisol dip route, plus actual finishing and packaging. |
| market_state | Quality-released packaged product at factory gate. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished apparel or clothing accessories of plastics classified exactly to CPC 28243. |
| How much | 1 kg net finished product; packaging is inventoried separately. |
| How well | Conforms to the declared model, size, composition, function, and quality-release criteria. |
| How long or cycle | One factory-gate production lot; single-use/reusable status and service life are qualifiers. |
| reference_flow_link | Tiangong product-flow identity confirmed at state code 100. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Apparel and clothing accessories of plastics (incl. gloves) `8954bc88-041d-4f58-99ce-5d0b20fc794f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 28243 classification rationale; product form, model, size, and net mass; each polymer and mass share; every plasticizer, stabilizer, pigment, filler, and additive; single-use or reusable status and service life; thickness; joining and surface treatment; powdered or powder-free glove; components; performance standard and test; packaging; route; site, geography, and reporting period. |

All Required qualifiers must be declared in dataset metadata, process notes, or an equivalent field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Fix at 1 kg net accepted product; list packaging mass separately. |
| `material_mass` | each material, product, and waste | Mass | kg | Use calibrated mass records; never combine different substances. |
| `electricity_energy` | electricity | Energy | kWh | Record delivered electricity separately. |
| `thermal_energy` | steam and hot water | Energy | MJ | Record steam and hot water separately. |
| `fuel_energy` | natural gas, diesel, and LPG | Energy | MJ | Convert each fuel separately with supplier net calorific value. |
| `elementary_mass` | each emitted substance | Mass | kg | Never substitute VOC, NOx, SOx, COD, or TSS for a named substance. |

## 5. System Boundary

The boundary begins when exact purchased materials, water, packaging, and utilities enter the reporting site and ends with 1 kg accepted packaged CPC 28243 product. Include actual compounding, forming, conversion, finishing, packaging, attributable site services, and treatment. Connect purchased-input upstreams and downstream distribution, use, and end-of-life in the downstream model.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specification-confirmed purchased resins, chemicals, components, packaging, water, and energy carriers are received at the site gate. |
| starting_condition_role | These inputs are foreground entry points; upstream production and inbound transport require provider datasets. |
| product_classification_scope | CPC 28243 only; CPC 28250 coated or impregnated textile garments are outside scope. |
| recursive_input_rule | Recursively link every purchased input upstream; never replace a missing exact flow with a combined input. |
| upstream_dataset_requirement | Provider datasets match material, geography, technology, period, property, and unit. |
| disclosure | Disclose exclusions, cutoffs, allocation, internal reuse, treatment, unmonitored substances, and unlinked providers. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `polymer_compounding_and_sheet_forming` | Polymer compounding and plastic sheet forming | conditional | Include when formulation preparation or plastic film/sheet forming occurs on site. | foreground production | 1 kg accepted intermediate |
| `pvc_glove_dip_moulding` | PVC glove dip moulding and thermal gelation | conditional | Include only for PVC-compatible plastisol gloves made by dipping and oven gelation. | foreground production | 1 kg accepted glove shell |
| `cutting_joining_and_conversion` | Cutting, joining, and conversion | required | Include the actual cutting, heat-sealing, welding, sewing, trimming, or beading operations. | foreground production | 1 kg accepted converted product |
| `wet_finishing_and_surface_treatment` | Wet finishing and surface treatment | conditional | Include when washing, leaching, chlorination, powdering, rinsing, or related drying occurs. | foreground production | 1 kg accepted finished product |
| `packaging_and_site_services` | Packaging and site services | required | Include final packaging and attributable utilities, combustion, refrigeration, and treatment. | foreground production | 1 kg packaged reference product |

### Process: Polymer compounding and plastic sheet forming (`polymer_compounding_and_sheet_forming`)

#### Inputs

##### Product flows

###### Polyvinyl chloride resin (input) (`pvc_resin_input`)

For PVC formulations only. Record the net amount of Polyvinyl chloride resin crossing into this process.

- Selected flow: Polyvinyl chloride resin
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `epo-pvc-glove-process-2020`, `us-epa-pvc-processing-1977`

###### Low-density polyethylene resin (input) (`ldpe_resin_input`)

For LDPE film or sheet products only. Record the net amount of Low-density polyethylene resin crossing into this process.

- Selected flow: Low-density polyethylene resin
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Ethylene-vinyl acetate copolymer (input) (`eva_resin_input`)

When EVA is a declared product constituent. Record the net amount of Ethylene-vinyl acetate copolymer crossing into this process.

- Selected flow: Ethylene-vinyl acetate copolymer
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Thermoplastic polyurethane resin (input) (`tpu_resin_input`)

For TPU film, sheet, or moulded products only. Record the net amount of Thermoplastic polyurethane resin crossing into this process.

- Selected flow: Thermoplastic polyurethane resin
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Diisononyl phthalate (input) (`dinp_plasticizer_input`)

Only when the verified formulation uses DINP. Record the net amount of Diisononyl phthalate crossing into this process.

- Selected flow: Diisononyl phthalate
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-textiles-bat-2022`

###### Epoxidized soybean oil (input) (`esbo_input`)

Only when the verified formulation uses this additive. Record the net amount of Epoxidized soybean oil crossing into this process.

- Selected flow: Epoxidized soybean oil
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-textiles-bat-2022`

###### Calcium stearate (input) (`calcium_stearate_input`)

Only when the verified formulation identifies this stabilizer. Record the net amount of Calcium stearate crossing into this process.

- Selected flow: Calcium stearate
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-textiles-bat-2022`

###### Zinc stearate (input) (`zinc_stearate_input`)

Only when the verified formulation identifies this stabilizer. Record the net amount of Zinc stearate crossing into this process.

- Selected flow: Zinc stearate
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-textiles-bat-2022`

###### Calcium carbonate (input) (`calcium_carbonate_input`)

Only when intentionally added as filler. Record the net amount of Calcium carbonate crossing into this process.

- Selected flow: Calcium carbonate
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-textiles-bat-2022`

###### Titanium dioxide (input) (`titanium_dioxide_input`)

Only when used as the identified pigment or opacifier. Record the net amount of Titanium dioxide crossing into this process.

- Selected flow: Titanium dioxide
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-textiles-bat-2022`

###### Carbon black (input) (`carbon_black_input`)

Only when used in the declared colour formulation. Record the net amount of Carbon black crossing into this process.

- Selected flow: Carbon black
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-textiles-bat-2022`

###### Hydrotreated light petroleum distillate (input) (`petroleum_distillate_input`)

Only when the recipe and SDS identify this exact thinning solvent. Record the net amount of Hydrotreated light petroleum distillate crossing into this process.

- Selected flow: Hydrotreated light petroleum distillate
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `epo-pvc-glove-process-2020`, `eu-solvent-bat-2020`

###### Electricity, medium voltage (input) (`compounding_electricity_input`)

When electricity serves mixing, filtration, deaeration, extrusion, or calendering. Record the net amount of Electricity, medium voltage crossing into this process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered energy or documented causal allocation from a carrier-specific site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `eu-textiles-bat-2022`

###### Steam (input) (`compounding_steam_input`)

When steam crosses this process boundary; keep it separate from hot water. Record the net amount of Steam crossing into this process.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: submetered energy or documented causal allocation from a carrier-specific site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `eu-textiles-bat-2022`

###### Hot water (input) (`compounding_hot_water_input`)

When hot water crosses this process boundary; keep it separate from steam. Record the net amount of Hot water crossing into this process.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: submetered energy or documented causal allocation from a carrier-specific site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

No predefined exchange; add a specific atomic row if it occurs.

##### Elementary flows

No predefined exchange; add a specific atomic row if it occurs.

#### Outputs

##### Product flows

###### Prepared PVC plastisol (output) (`prepared_pvc_plastisol_output`)

For the PVC dip route only. Record the accepted amount of Prepared PVC plastisol transferred from this process.

- Selected flow: Prepared PVC plastisol
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output_records`
- Sources: `epo-pvc-glove-process-2020`

###### Plastic sheet for CPC 28243 conversion (output) (`plastic_sheet_output`)

For the cut-and-join route; one declared polymer identity per dataset. Record the accepted amount of Plastic sheet for CPC 28243 conversion transferred from this process.

- Selected flow: Plastic sheet for CPC 28243 conversion
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output_records`
- Sources: `us-epa-pvc-processing-1977`

##### Waste flows

###### Waste PVC compound residue (waste) (`pvc_compound_residue_waste`)

For non-recirculated PVC residue. Record Waste PVC compound residue separately when it leaves the process and is not internally reused.

- Selected flow: Waste PVC compound residue
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

###### Waste PVC sheet trim (waste) (`pvc_sheet_trim_waste`)

For PVC sheet forming only. Record Waste PVC sheet trim separately when it leaves the process and is not internally reused.

- Selected flow: Waste PVC sheet trim
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

###### Waste polyethylene sheet trim (waste) (`pe_sheet_trim_waste`)

For polyethylene sheet forming only. Record Waste polyethylene sheet trim separately when it leaves the process and is not internally reused.

- Selected flow: Waste polyethylene sheet trim
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

###### Waste thermoplastic polyurethane sheet trim (waste) (`tpu_sheet_trim_waste`)

For TPU sheet forming only. Record Waste thermoplastic polyurethane sheet trim separately when it leaves the process and is not internally reused.

- Selected flow: Waste thermoplastic polyurethane sheet trim
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

No predefined exchange; add a specific atomic row if it occurs.

### Process: PVC glove dip moulding and thermal gelation (`pvc_glove_dip_moulding`)

#### Inputs

##### Product flows

###### Prepared PVC plastisol (input) (`plastisol_to_dipping_input`)

For the PVC glove dip route only. Record the net amount of Prepared PVC plastisol crossing into this process.

- Selected flow: Prepared PVC plastisol
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `epo-pvc-glove-process-2020`

###### Electricity, medium voltage (input) (`dipping_electricity_input`)

When electricity serves former transport, circulation, pumps, fans, or stripping, record its net input separately.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered energy or documented causal allocation from a carrier-specific site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `epo-pvc-glove-process-2020`

###### Natural gas (input) (`gelation_natural_gas_input`)

When natural gas supplies the gelation oven, record its net input separately.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered fuel multiplied by supplier net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `us-epa-pvc-processing-1977`

###### Polydimethylsiloxane (input) (`silicone_release_agent_input`)

Only when this exact release agent is used on formers or shells, record its net input separately.

- Selected flow: Polydimethylsiloxane
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `epo-pvc-glove-process-2020`

##### Waste flows

No predefined exchange; add a specific atomic row if it occurs.

##### Elementary flows

No predefined exchange; add a specific atomic row if it occurs.

#### Outputs

##### Product flows

###### Dip-moulded PVC glove shell (output) (`dip_moulded_glove_shell_output`)

For accepted gelled shells transferred to finishing. Record the accepted amount of Dip-moulded PVC glove shell transferred from this process.

- Selected flow: Dip-moulded PVC glove shell
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output_records`
- Sources: `epo-pvc-glove-process-2020`

##### Waste flows

###### Waste off-specification PVC gloves (waste) (`off_spec_pvc_glove_waste`)

For the PVC glove dip route only. Record Waste off-specification PVC gloves separately when it leaves the process and is not internally reused.

- Selected flow: Waste off-specification PVC gloves
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `epo-pvc-glove-process-2020`

###### Waste PVC plastisol (waste) (`spent_pvc_plastisol_waste`)

For the PVC glove dip route only. Record Waste PVC plastisol separately when it leaves the process and is not internally reused.

- Selected flow: Waste PVC plastisol
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `epo-pvc-glove-process-2020`

##### Elementary flows

###### Carbon dioxide, fossil (release) (`gelation_co2_air`)

When on-site fossil fuel combustion serves gelation. Record Carbon dioxide, fossil as a separate substance release from this process.

- Selected flow: Carbon dioxide, fossil
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### Carbon monoxide (release) (`gelation_co_air`)

When substance-specific monitoring identifies it. Record Carbon monoxide as a separate substance release from this process.

- Selected flow: Carbon monoxide
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### Nitric oxide (release) (`gelation_no_air`)

When substance-specific monitoring identifies it; keep separate from nitrogen dioxide. Record Nitric oxide as a separate substance release from this process.

- Selected flow: Nitric oxide
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### Nitrogen dioxide (release) (`gelation_no2_air`)

When substance-specific monitoring identifies it; keep separate from nitric oxide. Record Nitrogen dioxide as a separate substance release from this process.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### Sulfur dioxide (release) (`gelation_so2_air`)

When monitoring or fuel sulfur balance identifies it. Record Sulfur dioxide as a separate substance release from this process.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### Vinyl chloride (release) (`vinyl_chloride_air`)

Only when PVC-heating measurements identify this substance. Record Vinyl chloride as a separate substance release from this process.

- Selected flow: Vinyl chloride
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

###### Diisononyl phthalate (release) (`dinp_air`)

Only for DINP formulations with substance-specific measurement. Record Diisononyl phthalate as a separate substance release from this process.

- Selected flow: Diisononyl phthalate
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `us-epa-pvc-processing-1977`, `eu-textiles-bat-2022`

### Process: Cutting, joining, and conversion (`cutting_joining_and_conversion`)

#### Inputs

##### Product flows

###### Plastic sheet for CPC 28243 conversion (input) (`plastic_sheet_conversion_input`)

For the cut-and-join route; use one declared polymer identity per dataset. Record the net amount of Plastic sheet for CPC 28243 conversion crossing into this process.

- Selected flow: Plastic sheet for CPC 28243 conversion
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `us-epa-pvc-processing-1977`

###### Dip-moulded PVC glove shell (input) (`glove_shell_conversion_input`)

For glove trimming or beading only. Record the net amount of Dip-moulded PVC glove shell crossing into this process.

- Selected flow: Dip-moulded PVC glove shell
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `epo-pvc-glove-process-2020`

###### Polyurethane adhesive (input) (`polyurethane_adhesive_input`)

Only when this purchased adhesive bonds product components. Record the net amount of Polyurethane adhesive crossing into this process.

- Selected flow: Polyurethane adhesive
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-solvent-bat-2020`

###### Ethyl acetate (input) (`ethyl_acetate_input`)

Only when the recipe identifies this exact solvent. Record the net amount of Ethyl acetate crossing into this process.

- Selected flow: Ethyl acetate
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-solvent-bat-2020`

###### 2-Butanone (input) (`butanone_input`)

Only when the recipe identifies this exact solvent. Record the net amount of 2-Butanone crossing into this process.

- Selected flow: 2-Butanone
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-solvent-bat-2020`

###### Polyester zipper (input) (`polyester_zipper_input`)

Only for models containing this closure. Record the net amount of Polyester zipper crossing into this process.

- Selected flow: Polyester zipper
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Polypropylene hook-and-loop fastener (input) (`polypropylene_fastener_input`)

Only for models containing this fastener. Record the net amount of Polypropylene hook-and-loop fastener crossing into this process.

- Selected flow: Polypropylene hook-and-loop fastener
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Electricity, medium voltage (input) (`conversion_electricity_input`)

When electricity serves cutting, sealing, welding, sewing, or trimming, record its net input separately.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered energy or documented causal allocation from a carrier-specific site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

No predefined exchange; add a specific atomic row if it occurs.

##### Elementary flows

No predefined exchange; add a specific atomic row if it occurs.

#### Outputs

##### Product flows

###### Converted unpackaged CPC 28243 product (output) (`converted_unfinished_product_output`)

For accepted converted products sent to finishing or packaging. Record the accepted amount of Converted unpackaged CPC 28243 product transferred from this process.

- Selected flow: Converted unpackaged CPC 28243 product
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

##### Waste flows

###### Waste PVC cutting scrap (waste) (`pvc_cutting_scrap_waste`)

Only for the named polymer route. Record Waste PVC cutting scrap separately when it leaves the process and is not internally reused.

- Selected flow: Waste PVC cutting scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Waste polyethylene cutting scrap (waste) (`pe_cutting_scrap_waste`)

Only for the named polymer route. Record Waste polyethylene cutting scrap separately when it leaves the process and is not internally reused.

- Selected flow: Waste polyethylene cutting scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Waste ethylene-vinyl acetate cutting scrap (waste) (`eva_cutting_scrap_waste`)

Only for the named polymer route. Record Waste ethylene-vinyl acetate cutting scrap separately when it leaves the process and is not internally reused.

- Selected flow: Waste ethylene-vinyl acetate cutting scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Waste thermoplastic polyurethane cutting scrap (waste) (`tpu_cutting_scrap_waste`)

Only for the named polymer route. Record Waste thermoplastic polyurethane cutting scrap separately when it leaves the process and is not internally reused.

- Selected flow: Waste thermoplastic polyurethane cutting scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

##### Elementary flows

###### Ethyl acetate (release) (`ethyl_acetate_air`)

Only when the named solvent is used and measured or balanced. Record Ethyl acetate as a separate substance release from this process.

- Selected flow: Ethyl acetate
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-solvent-bat-2020`

###### 2-Butanone (release) (`butanone_air`)

Only when the named solvent is used and measured or balanced. Record 2-Butanone as a separate substance release from this process.

- Selected flow: 2-Butanone
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-solvent-bat-2020`

### Process: Wet finishing and surface treatment (`wet_finishing_and_surface_treatment`)

#### Inputs

##### Product flows

###### Converted unpackaged CPC 28243 product (input) (`unfinished_product_finishing_input`)

When wet or surface finishing is performed. Record the net amount of Converted unpackaged CPC 28243 product crossing into this process.

- Selected flow: Converted unpackaged CPC 28243 product
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `eu-textiles-bat-2022`

###### Process water (input) (`finishing_process_water_input`)

When water is used for leaching, washing, rinsing, or cleaning. Record the net amount of Process water crossing into this process.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered water input minus directly metered reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-textiles-bat-2022`

###### Sodium hypochlorite (input) (`sodium_hypochlorite_input`)

Only when the declared surface-treatment recipe uses it. Record the net amount of Sodium hypochlorite crossing into this process.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-textiles-bat-2022`

###### Sodium thiosulfate (input) (`sodium_thiosulfate_input`)

Only when used to quench residual chlorine. Record the net amount of Sodium thiosulfate crossing into this process.

- Selected flow: Sodium thiosulfate
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `eu-textiles-bat-2022`

###### Corn starch (input) (`corn_starch_input`)

Only for powdered glove products. Record the net amount of Corn starch crossing into this process.

- Selected flow: Corn starch
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_batch_records`
- Sources: `epo-pvc-glove-process-2020`

###### Electricity, medium voltage (input) (`finishing_electricity_input`)

When electricity serves washers, pumps, fans, dryers, or dosing. Record the net amount of Electricity, medium voltage crossing into this process.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered energy or documented causal allocation from a carrier-specific site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `eu-textiles-bat-2022`

###### Steam (input) (`finishing_steam_input`)

When steam crosses into finishing; keep separate from hot water. Record the net amount of Steam crossing into this process.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: submetered energy or documented causal allocation from a carrier-specific site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `eu-textiles-bat-2022`

###### Hot water (input) (`finishing_hot_water_input`)

When hot water crosses into finishing; keep separate from steam. Record the net amount of Hot water crossing into this process.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: submetered energy or documented causal allocation from a carrier-specific site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `eu-textiles-bat-2022`

##### Waste flows

No predefined exchange; add a specific atomic row if it occurs.

##### Elementary flows

No predefined exchange; add a specific atomic row if it occurs.

#### Outputs

##### Product flows

###### Finished unpackaged CPC 28243 product (output) (`finished_unpacked_product_output`)

For accepted quality-released products transferred to packaging. Record the accepted amount of Finished unpackaged CPC 28243 product transferred from this process.

- Selected flow: Finished unpackaged CPC 28243 product
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_output_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

##### Waste flows

###### PVC glove leaching wastewater (waste) (`pvc_glove_leaching_wastewater`)

When the named waste is generated. Record PVC glove leaching wastewater separately when it leaves the process and is not internally reused.

- Selected flow: PVC glove leaching wastewater
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-textiles-bat-2022`

###### Finishing equipment-cleaning wastewater (waste) (`finishing_cleaning_wastewater`)

When the named waste is generated. Record Finishing equipment-cleaning wastewater separately when it leaves the process and is not internally reused.

- Selected flow: Finishing equipment-cleaning wastewater
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-textiles-bat-2022`

###### Wastewater-treatment sludge from plastic apparel finishing (waste) (`wastewater_treatment_sludge`)

When the named waste is generated. Record Wastewater-treatment sludge from plastic apparel finishing separately when it leaves the process and is not internally reused.

- Selected flow: Wastewater-treatment sludge from plastic apparel finishing
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-textiles-bat-2022`

##### Elementary flows

###### Chlorine (release) (`chlorine_air`)

Only when chlorination monitoring identifies it. Record Chlorine as a separate substance release from this process.

- Selected flow: Chlorine
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-textiles-bat-2022`

###### Chloride (release) (`chloride_water`)

When measured in final discharged effluent. Record Chloride as a separate substance release from this process.

- Selected flow: Chloride
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by discharged wastewater volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-textiles-bat-2022`

###### Zinc (release) (`zinc_water`)

Only for zinc-containing formulations with substance-specific analysis. Record Zinc as a separate substance release from this process.

- Selected flow: Zinc
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by discharged wastewater volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-textiles-bat-2022`

###### Diisononyl phthalate (release) (`dinp_water`)

Only for DINP formulations with substance-specific analysis. Record Diisononyl phthalate as a separate substance release from this process.

- Selected flow: Diisononyl phthalate
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by discharged wastewater volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-textiles-bat-2022`

### Process: Packaging and site services (`packaging_and_site_services`)

#### Inputs

##### Product flows

###### Finished unpackaged CPC 28243 product (input) (`finished_unpacked_product_input`)

For products entering final packaging. Record the net amount of Finished unpackaged CPC 28243 product crossing into this process.

- Selected flow: Finished unpackaged CPC 28243 product
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `ec-apparel-footwear-pefcr-2025`

###### Corrugated cardboard box (input) (`corrugated_box_input`)

Only when this exact packaging component is included or net-consumed. Record the net amount of Corrugated cardboard box crossing into this process.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-pef-recommendation-2021`

###### Paperboard carton (input) (`paperboard_carton_input`)

Only when this exact packaging component is included or net-consumed. Record the net amount of Paperboard carton crossing into this process.

- Selected flow: Paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-pef-recommendation-2021`

###### Polyethylene bag (input) (`polyethylene_bag_input`)

Only when this exact packaging component is included or net-consumed. Record the net amount of Polyethylene bag crossing into this process.

- Selected flow: Polyethylene bag
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-pef-recommendation-2021`

###### Paper label (input) (`paper_label_input`)

Only when this exact packaging component is included or net-consumed. Record the net amount of Paper label crossing into this process.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-pef-recommendation-2021`

###### Wood pallet (input) (`wood_pallet_input`)

Only when this exact packaging component is included or net-consumed. Record the net amount of Wood pallet crossing into this process.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: weighed issue minus returns, recovered material, and stock increase
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `ec-pef-recommendation-2021`

###### Electricity, medium voltage (input) (`packaging_electricity_input`)

When electricity serves packaging, coding, inspection, or attributable handling, record its net input separately.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered energy or documented causal allocation from a carrier-specific site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meter_records`
- Sources: `eu-textiles-bat-2022`

###### Natural gas (input) (`site_natural_gas_input`)

When this exact fuel serves attributable site equipment. Record the net amount of Natural gas crossing into this process.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered fuel quantity multiplied by supplier net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-textiles-bat-2022`

###### Diesel fuel (input) (`site_diesel_input`)

When this exact fuel serves attributable site equipment. Record the net amount of Diesel fuel crossing into this process.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: metered fuel quantity multiplied by supplier net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-textiles-bat-2022`

###### Liquefied petroleum gas (input) (`site_lpg_input`)

When this exact fuel serves attributable site equipment. Record the net amount of Liquefied petroleum gas crossing into this process.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: metered fuel quantity multiplied by supplier net calorific value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-textiles-bat-2022`

###### 1,1,1,2-Tetrafluoroethane (input) (`r134a_makeup_input`)

Only for R-134a purchased or added to attributable equipment; add a separate row for any other refrigerant. Record the net amount of 1,1,1,2-Tetrafluoroethane crossing into this process.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: purchase and service additions corrected for stock change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-pef-recommendation-2021`

##### Waste flows

No predefined exchange; add a specific atomic row if it occurs.

##### Elementary flows

No predefined exchange; add a specific atomic row if it occurs.

#### Outputs

##### Product flows

###### Apparel and clothing accessories of plastics (incl. gloves) (output) (`reference_product_output`)

This is the sole quantitative reference and must classify exactly to CPC 28243. Record the accepted amount of Apparel and clothing accessories of plastics (incl. gloves) transferred from this process.

- Selected flow: Apparel and clothing accessories of plastics (incl. gloves) `8954bc88-041d-4f58-99ce-5d0b20fc794f`
- Flow property / unit: Mass / kg
- Amount rule: fixed at 1 kg net finished product; packaging is separate
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: None
- Sources:

##### Waste flows

###### Waste corrugated cardboard (waste) (`corrugated_cardboard_waste`)

When this exact waste leaves the site. Record Waste corrugated cardboard separately when it leaves the process and is not internally reused.

- Selected flow: Waste corrugated cardboard
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-solvent-bat-2020`, `eu-textiles-bat-2022`

###### Waste polyethylene packaging film (waste) (`polyethylene_packaging_waste`)

When this exact waste leaves the site. Record Waste polyethylene packaging film separately when it leaves the process and is not internally reused.

- Selected flow: Waste polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-solvent-bat-2020`, `eu-textiles-bat-2022`

###### Waste wood pallet (waste) (`wood_pallet_waste`)

When this exact waste leaves the site. Record Waste wood pallet separately when it leaves the process and is not internally reused.

- Selected flow: Waste wood pallet
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-solvent-bat-2020`, `eu-textiles-bat-2022`

###### Spent activated carbon (waste) (`spent_activated_carbon_waste`)

When this exact waste leaves the site. Record Spent activated carbon separately when it leaves the process and is not internally reused.

- Selected flow: Spent activated carbon
- Flow property / unit: Mass / kg
- Amount rule: weighed mass leaving for treatment, net of documented internal reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-solvent-bat-2020`, `eu-textiles-bat-2022`

##### Elementary flows

###### Carbon dioxide, fossil (release) (`site_co2_air`)

When attributable fossil-fuel combustion occurs. Record Carbon dioxide, fossil as a separate substance release from this process.

- Selected flow: Carbon dioxide, fossil
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`

###### Carbon monoxide (release) (`site_co_air`)

When substance-specific monitoring identifies it. Record Carbon monoxide as a separate substance release from this process.

- Selected flow: Carbon monoxide
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`

###### Nitric oxide (release) (`site_no_air`)

When measured; keep separate from nitrogen dioxide. Record Nitric oxide as a separate substance release from this process.

- Selected flow: Nitric oxide
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`

###### Nitrogen dioxide (release) (`site_no2_air`)

When measured; keep separate from nitric oxide. Record Nitrogen dioxide as a separate substance release from this process.

- Selected flow: Nitrogen dioxide
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`

###### Sulfur dioxide (release) (`site_so2_air`)

When monitoring or fuel sulfur balance identifies it. Record Sulfur dioxide as a separate substance release from this process.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: substance-specific concentration multiplied by synchronized dry gas volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`

###### 1,1,1,2-Tetrafluoroethane (release) (`r134a_air`)

For equipment-level R-134a inventory loss only. Record 1,1,1,2-Tetrafluoroethane as a separate substance release from this process.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass / kg
- Amount rule: opening charge plus additions minus closing charge minus documented recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished CPC 28243 product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emissions_and_discharges`
- Sources: `eu-textiles-bat-2022`, `ec-pef-recommendation-2021`


## 7. Allocation and Co-product Handling

Avoid allocation with route-, line-, lot-, and product-specific records. Internal rework is not a waste output. Allocate shared meters by causal drivers such as machine time, measured throughput, thermal demand, or wastewater volume; use and disclose mass allocation only when no better relation exists. List saleable by-products separately and do not credit avoided burdens for waste recycling inside this foreground package.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | all_applicable_production_processes | materials and intermediates | batch and stock records | identity; quantity; lot; time; route | reconcile calibrated records and keep every flow separate | kg | each lot or monthly | representative reporting year | all foreground sites | aggregate by exact flow and normalize | calibration, specification, and reconciliation records |
| `cp_chemical_batch_records` | all_applicable_production_processes | individual chemicals | recipe, SDS, issue, return, recovery, and stock records | identity; quantity; lot; time; route | reconcile calibrated records and keep every flow separate | kg | each lot or monthly | representative reporting year | all foreground sites | aggregate by exact flow and normalize | calibration, specification, and reconciliation records |
| `cp_component_records` | cutting_joining_and_conversion | individual components | BOM, count or length, and unit-mass test | identity; quantity; lot; time; route | reconcile calibrated records and keep every flow separate | kg | each lot or monthly | representative reporting year | all foreground sites | aggregate by exact flow and normalize | calibration, specification, and reconciliation records |
| `cp_energy_meter_records` | all_applicable_production_processes | electricity, steam, and hot water recorded separately | carrier-specific submeter or causal allocation | identity; quantity; lot; time; route | reconcile calibrated records and keep every flow separate | kWh or MJ | each lot or monthly | representative reporting year | all foreground sites | aggregate by exact flow and normalize | calibration, specification, and reconciliation records |
| `cp_fuel_records` | applicable_fuel_using_processes | natural gas, diesel, and LPG recorded separately | meter, invoice, stock, and supplier calorific value | identity; quantity; lot; time; route | reconcile calibrated records and keep every flow separate | MJ | each lot or monthly | representative reporting year | all foreground sites | aggregate by exact flow and normalize | calibration, specification, and reconciliation records |
| `cp_water_records` | wet_finishing_and_surface_treatment | process water and named wastewaters | water meters and a stream-specific water balance | identity; quantity; lot; time; route | reconcile calibrated records and keep every flow separate | kg | each lot or monthly | representative reporting year | all foreground sites | aggregate by exact flow and normalize | calibration, specification, and reconciliation records |
| `cp_packaging_records` | packaging_and_site_services | individual packaging components | packaging BOM, issue/return, and unit-mass test | identity; quantity; lot; time; route | reconcile calibrated records and keep every flow separate | kg | each lot or monthly | representative reporting year | all foreground sites | aggregate by exact flow and normalize | calibration, specification, and reconciliation records |
| `cp_intermediate_output_records` | all_applicable_production_processes | accepted intermediates and product | weigh ticket, production counter, and QC release | identity; quantity; lot; time; route | reconcile calibrated records and keep every flow separate | kg | each lot or monthly | representative reporting year | all foreground sites | aggregate by exact flow and normalize | calibration, specification, and reconciliation records |
| `cp_waste_records` | all_applicable_production_processes | individual wastes | weigh ticket, internal reuse log, and treatment manifest | identity; quantity; lot; time; route | reconcile calibrated records and keep every flow separate | kg | each lot or monthly | representative reporting year | all foreground sites | aggregate by exact flow and normalize | calibration, specification, and reconciliation records |
| `cp_refrigerant_records` | packaging_and_site_services | R-134a | equipment register, service log, and cylinder balance | identity; quantity; lot; time; route | reconcile calibrated records and keep every flow separate | kg | each lot or monthly | representative reporting year | all foreground sites | aggregate by exact flow and normalize | calibration, specification, and reconciliation records |
| `cp_emissions_and_discharges` | applicable_emitting_processes | individual elementary substances | synchronized substance concentration and flow or substance balance | identity; quantity; lot; time; route | reconcile calibrated records and keep every flow separate | kg | each lot or monthly | representative reporting year | all foreground sites | aggregate by exact flow and normalize | calibration, specification, and reconciliation records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = attributable row amount / accepted net CPC 28243 product mass | attributable amount; accepted product mass | amount per 1 kg reference product | `ec-pef-recommendation-2021` |
| `calc_shared_meter_allocation` | shared carrier meters | allocated carrier = metered carrier × documented causal driver / total driver | meter; machine time, throughput, or demand | carrier-specific allocated energy | `eu-textiles-bat-2022` |
| `calc_stack_substance_load` | each named air substance | mass = synchronized concentration × corrected dry gas volume | concentration; gas flow; duration; moisture | kg named substance | `eu-textiles-bat-2022`, `eu-solvent-bat-2020` |
| `calc_effluent_substance_load` | each named water substance | mass = synchronized concentration × discharged water volume | concentration; water volume; sampling representativeness | kg named substance | `eu-textiles-bat-2022` |
| `calc_r134a_loss` | R-134a to air | loss = opening charge + additions − closing charge − documented recovery | equipment charge and service records | kg R-134a released | `ec-pef-recommendation-2021` |
| `calc_solvent_balance` | each named solvent | unrecovered = opening + purchases − closing − product retention − recovery − waste | substance-specific stock, purchase, product, recovery, and waste | kg substance not otherwise accounted for | `eu-solvent-bat-2020` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Product classification, model, size, polymer composition, function, and net mass resolve to one released sale unit. | specification, meter, laboratory, mass-balance, and provider-review records |
| `dq_temporal` | all foreground rows | Use a representative continuous 12-month period or justify a complete shorter campaign; align numerator and denominator periods. | specification, meter, laboratory, mass-balance, and provider-review records |
| `dq_technology` | all processes | Identify forming, joining, oven, finishing, abatement, and treatment technology; keep materially different routes separate. | specification, meter, laboratory, mass-balance, and provider-review records |
| `dq_mass_balance` | materials, product, wastes, and emissions | Close polymer, solvent, water, refrigerant, and product balances and investigate gaps. | specification, meter, laboratory, mass-balance, and provider-review records |
| `dq_atomic_identity` | all inventory rows | Keep one exact material, carrier, waste, or elementary substance per row; add rows for unlisted identities. | specification, meter, laboratory, mass-balance, and provider-review records |
| `dq_provider_links` | purchased inputs | Link exact upstream provider datasets or disclose each unresolved link without a combined substitute. | specification, meter, laboratory, mass-balance, and provider-review records |

## 9. Validation Rules

1. `val_reference_identity`: Reference flow is Product, CPC 28243, Mass, Units of mass, kg, and the confirmed UUID.
2. `val_reference_amount`: Normalized net product output is exactly 1 kg; packaging mass is excluded.
3. `val_route_atomicity`: Every card contains one exact exchange and its actual route condition holds.
4. `val_carrier_separation`: Electricity, steam, hot water, natural gas, diesel, LPG, R-134a, and every material, waste, and emission remain separate.
5. `val_no_estimate_range`: No AI, author, or reasoned-estimate quantity range is used; missing quantities remain foreground records.
6. `val_balances`: Polymer, solvent, water, refrigerant, and product balances close to records.
7. `val_bilingual_identity`: EN/ZH process_id, direction, flow_type, row_id, order, controlled values, source_id, and UUID align.
8. `val_uuid_gate`: Add a non-reference UUID only after hybrid search and direct state-code-100 dual verification.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific factory-gate foreground package for one declared CPC 28243 product and route. |
| downstream_use | Link exact upstream providers and downstream distribution, use, and end-of-life to construct a lifecycle model. |
| allowed_use | Validated product-specific inventory, hotspot analysis, supplier engagement, and downstream LCA. |
| excluded_use | CPC-wide defaults, unsupported comparison of different functions or lives, conformity claims, or substitution for CPC 28250 methodology. |
| required_metadata | All reference qualifiers, route, site, period, allocation, cutoffs, providers, measurement, uncertainty, and destinations. |
| required_quality_disclosure | Primary-data share, meter/lab coverage, balance closure, unresolved UUIDs/providers, route exclusions, allocation, missing analytes, and representativeness. |
| update_trigger | Change in formulation, function, thickness, life, technology, energy, refrigerant, treatment, packaging, site, or period. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact CPC 28243 scope and CPC 28250 exclusion boundary. |
| `ec-pef-recommendation-2021` | `method_factor` | Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods, https://environment.ec.europa.eu/document/download/cb899bd7-bb06-491d-9989-c856a401fcd0_en | Life-cycle method, quality, verification, packaging, energy, transport, and end-of-life interfaces. |
| `ec-apparel-footwear-pefcr-2025` | `official_guidance` | European Commission, New EU rules for measuring environmental impact of clothes and shoes, 25 June 2025, https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en | Apparel life-cycle framing and material-neutral assessment. |
| `eu-textiles-bat-2022` | `standard` | Commission Implementing Decision (EU) 2022/2508, BAT conclusions for the textiles industry, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 | Material, chemical, water, energy, waste, wastewater, and emission inventory rules. |
| `eu-solvent-bat-2020` | `standard` | Commission Implementing Decision (EU) 2020/2009, BAT conclusions for surface treatment using organic solvents, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32020D2009 | Substance-specific solvent balance, recovery, and emission rules. |
| `us-epa-pvc-processing-1977` | `official_guidance` | United States Environmental Protection Agency, Vinyl Chloride Monomer Emissions from the Polyvinyl Chloride Processing Industries: Final Report, EPA-450/3-77-031, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=9100FY8R.TXT | PVC film, plastisol, dip-moulding, and emission-point decomposition. |
| `epo-pvc-glove-process-2020` | `literature` | European Patent Office, EP 3081104 B1, Manufacturing process for PVC disposable gloves, 22 April 2020, https://data.epo.org/publication-server/rest/v1.0/publication-dates/20200422/patents/EP3081104NWB1/document.pdf | PVC glove mixing, dipping, gelation, cleaning, and stripping route evidence. |
