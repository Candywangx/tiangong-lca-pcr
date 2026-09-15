---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-or-high-speed-steel-no-e89d565b
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Flat-rolled products of alloy steel (except of silicon-electrical or high-speed steel), not further worked than hot-rolled, of a width of less than 600 mm

## 1. Scope and Applicability

This PCR covers factory-gate production of hot-rolled alloy-steel flat products whose finished width is less than 600 mm and which have not been worked beyond hot rolling. It covers coils, strip, sheets, or cut lengths within that boundary, including stainless and other alloy grades when they meet the stated product condition. It excludes non-alloy steel, silicon-electrical steel, high-speed steel, products 600 mm or wider, cold-rolled products, and products subsequently pickled, clad, plated, coated, polished, or otherwise further worked. The declared dataset shall identify the grade family and shall not use low-alloy evidence as a proxy for stainless or another high-alloy grade.

The model is cradle-to-gate. Foreground records cover the selected steelmaking and casting route and the hot-rolling line; upstream production and transport of purchased materials and energy are linked through geographically and technologically appropriate datasets. Use and end-of-life are outside the reported cradle-to-gate result and may be reported only as separate scenarios.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-alloy-steel-except-of-silicon-electrical-or-high-speed-steel-no-e89d565b |
| classification_refs | CPC 3.0: 41214 |
| covered_products | Hot-rolled flat products of alloy steel, including stainless and other alloy grades, finished at less than 600 mm width and not further worked than hot-rolled |
| excluded_products | Non-alloy steel; silicon-electrical steel; high-speed steel; width of 600 mm or more; cold-rolled, pickled, clad, plated, coated, polished, or otherwise further-worked products |
| representative_product | Uncoated hot-rolled alloy-steel strip at the steelworks gate, less than 600 mm wide |
| production_route | Declared BF-BOF or EAF steelmaking with grade-appropriate secondary metallurgy and casting, followed by hot rolling; other routes require separate methodological review |
| market_state | Dry, uncoated coil, strip, sheet, or cut length at the steelworks gate, with grade, width, thickness, surface condition, and delivery form declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Hot-rolled alloy-steel flat product within the covered product boundary |
| How much | 1,000 kg net saleable product |
| How well | Conforming to the declared steel grade and product specification, less than 600 mm wide, and not further worked than hot-rolled |
| How long or cycle | One production reporting period; no use duration is assigned at the factory gate |
| reference_flow_link | `rolling_reference_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Flat-rolled products of alloy steel (except of silicon-electrical or high-speed steel), not further worked than hot-rolled, of a width of less than 600 mm `882747cb-449c-401b-89b1-2ff03c819442` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | steel designation and governing product standard; alloy and grade family, including stainless or other alloy; chemical composition or grade certificate; finished width and thickness; coil, strip, sheet, or cut-length form; uncoated and not-further-worked surface condition; steelmaking route and secondary-refining technology; plant geography; reporting period; moisture and oil treatment where relevant; factory-gate boundary |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net saleable product mass after crop ends, offcuts, scale, and rejected product are removed. Normalize all exchanges to 1,000 kg net reference product. |
| `route_output_mass` | cast slab outputs and hot-rolling slab input | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured wet or dry state consistently, reconcile the selected steelmaking-route slab output with rolling input, and disclose storage or transfer changes. |
| `gas_reference_conditions` | industrial oxygen, argon, and natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume together with temperature, pressure, dry or wet basis, purity, and any standard-volume conversion; do not combine gases. |
| `energy_accounting` | purchased electricity | Energy | MJ | Preserve the meter unit and conversion record, identify voltage and supply boundary, and avoid double counting electricity generated from recovered process gas. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Natural resources, prepared ores, purchased scrap and metallics, alloy additions, fluxes, electrodes, gases, process water, fuels, and electricity enter through documented upstream supply datasets; internal slab enters hot rolling only from the declared steelmaking route. |
| starting_condition_role | cradle input and steelworks foreground start |
| product_classification_scope | Alloy-steel flat products less than 600 mm wide, not further worked than hot-rolled, excluding silicon-electrical and high-speed steel |
| recursive_input_rule | Internal slab, scrap, scale, process gas, steam, or electricity recirculated inside the same steelworks is represented once as an internal transfer and is not linked again as a purchased product; externally sourced material uses an upstream dataset. |
| upstream_dataset_requirement | Use supplier-specific or geographically and technologically representative datasets for purchased materials, scrap preparation, fuels, gases, electricity, water, transport, and external waste treatment; disclose substitutions and data age. |
| disclosure | Declare plant, reporting period, grade family, selected BF-BOF or EAF route, secondary-refining steps, casting route, hot-rolling line, reheating fuel, internal energy recovery, scrap boundary, co-product status, cut-offs, and whether any end-of-life scenario is reported separately. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | product system | Include upstream production and transport of purchased inputs, steelmaking, grade-appropriate secondary metallurgy, casting, reheating, descaling, hot rolling, cooling, coiling or cutting, finishing limited to the covered market state, internal transport, water treatment, waste treatment, and direct releases through the factory gate. | `worldsteel-lci-methodology-2017`, `eu-jrc-iron-steel-bref-2013`, `eu-jrc-ferrous-metals-processing-bref-2022` |
| `boundary_route_selection` | steelmaking routes | Model BF-BOF and EAF as separate conditional routes. Include exactly the route or measured output-weighted route mix used for the reference product; identify AOD, VOD, vacuum degassing, or other secondary metallurgy when used. | `eu-jrc-iron-steel-bref-2013`, `worldstainless-general-introduction-lci` |
| `boundary_hot_rolling_steps` | hot rolling | Include surface rectification when performed, reheating, descaling, rolling, cooling, coiling or cutting, and finishing that does not change the covered not-further-worked market state. | `eu-jrc-ferrous-metals-processing-bref-2022` |
| `boundary_cutoff` | completeness | Record all energetic inputs. An excluded material flow shall be below 1% of mass, energy, and environmental relevance for its unit process, and all excluded flows together shall remain below 5%; document the screening basis and do not use cut-off to omit hazardous or legally monitored releases. | `worldsteel-lci-methodology-2017` |
| `boundary_end_of_life` | downstream modelling | Exclude fabrication, use, and end-of-life from the cradle-to-gate result. Report recycling burdens or credits only as a separate, explicitly identified scenario and prevent double counting with downstream models. | `worldsteel-lci-methodology-2017` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `bf_bof_alloy_steelmaking_casting` | BF-BOF alloy-steel production and casting | conditional | Include when the reference product uses integrated blast-furnace/basic-oxygen steelmaking; include measured secondary metallurgy and casting for the declared grade. | foreground steelmaking and cast-slab production | 1,000 kg cast alloy-steel slab transferred to hot rolling |
| `eaf_alloy_steelmaking_casting` | EAF alloy-steel production and casting | conditional | Include when the reference product uses electric-arc-furnace steelmaking; include measured AOD, VOD, ladle metallurgy, degassing, and casting steps that apply to the declared grade. | foreground steelmaking and cast-slab production | 1,000 kg cast alloy-steel slab transferred to hot rolling |
| `hot_rolling_narrow_flat_product` | Hot rolling to narrow alloy-steel flat product | required | Always include; the slab grade and route shall match one selected steelmaking route or a documented measured route mix. | foreground reheating, descaling, rolling, cooling, coiling or cutting | 1,000 kg net saleable reference product |

### Process: BF-BOF alloy-steel production and casting (`bf_bof_alloy_steelmaking_casting`)

#### Inputs

##### Product flows

###### Prepared iron-bearing feed (`bf_iron_ore`)

Record the iron ore product actually charged to the integrated route, without combining pellets, sinter, or lump ore in one supplier record.

- Selected flow: Agglomerated iron ore
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass charged and attributed to eligible cast slab
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials_products`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Metallurgical coke (`bf_metallurgical_coke`)

Record the dry metallurgical coke charged to the blast furnace.

- Selected flow: Metallurgical coke
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass charged and attributed to eligible cast slab
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials_products`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Pulverized coal for blast-furnace injection (`bf_pulverized_coal`)

Record injected coal separately from coke when pulverized-coal injection is used.

- Selected flow: Pulverized coal
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass injected; record zero with the technology reason when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials_products`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Limestone flux (`bf_limestone`)

Record limestone charged as flux on its declared moisture and carbonate basis.

- Selected flow: Limestone
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass attributed to eligible cast slab
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials_products`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Purchased steel scrap (`bf_steel_scrap`)

Record externally sourced ferrous scrap separately from internal returns and declare grade, preparation, and consumer status.

- Selected flow: Prepared steel scrap
- Flow property / unit: Mass / kg
- Amount rule: scale-ticket mass of purchased scrap charged to the BOF route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials_products`
- Sources: `worldsteel-lci-methodology-2017`

###### Ferro-manganese alloy addition (`bf_ferromanganese`)

Record the actual ferro-manganese grade used to meet the product recipe.

- Selected flow: Ferro-manganese
- Flow property / unit: Mass / kg
- Amount rule: batch charge-record mass attributed to eligible cast slab
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials_products`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Industrial oxygen (`bf_industrial_oxygen`)

Record oxygen delivered to the BOF and other included route operations with purity and reference conditions.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered oxygen volume attributed to eligible cast slab
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_energy_utilities`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Purchased electricity (`bf_electricity`)

Record site- and voltage-specific purchased electricity net of separately recorded internal generation.

- Selected flow: Steelworks purchased electricity
- Flow property / unit: Energy / MJ
- Amount rule: revenue-meter electricity allocated to the included BF-BOF and casting operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_energy_utilities`
- Sources: `worldsteel-lci-methodology-2017`

###### Process water supply (`bf_process_water`)

Record make-up process water crossing the route boundary, excluding recirculated internal water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: make-up water meter volume attributed to eligible cast slab
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_energy_utilities`
- Sources: `worldsteel-lci-methodology-2017`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cast alloy-steel slab (`bf_cast_alloy_steel_slab`)

Record net accepted slab transferred to hot rolling with grade, dimensions, and surface state.

- Selected flow: Cast alloy-steel slab
- Flow property / unit: Mass / kg
- Amount rule: measured accepted slab mass transferred from casting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_materials_products`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Waste flows

###### Blast-furnace slag (`bf_blast_furnace_slag`)

Record blast-furnace slag separately with treatment and waste or co-product status.

- Selected flow: Blast-furnace slag
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass leaving the blast-furnace slag system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_residues_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`, `worldsteel-lci-methodology-2017`

###### Basic-oxygen-furnace slag (`bf_basic_oxygen_furnace_slag`)

Record BOF slag separately with treatment and waste or co-product status.

- Selected flow: Basic-oxygen-furnace slag
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass leaving the BOF slag system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_residues_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`, `worldsteel-lci-methodology-2017`

###### Blast-furnace dust (`bf_blast_furnace_dust`)

Record captured blast-furnace dust at the recovery or treatment boundary.

- Selected flow: Blast-furnace dust
- Flow property / unit: Mass / kg
- Amount rule: measured dry captured dust mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_residues_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`

###### Basic-oxygen-furnace dust (`bf_basic_oxygen_furnace_dust`)

Record captured BOF dust separately from blast-furnace dust.

- Selected flow: Basic-oxygen-furnace dust
- Flow property / unit: Mass / kg
- Amount rule: measured dry captured dust mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bf_residues_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`bf_fossil_co2`)

Record stack and process fossil carbon dioxide directly emitted by the included BF-BOF route without claiming a more specific air compartment.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured emissions or carbon-balance calculation reconciled to fuel, reductant, carbonate, and carbon-bearing process-gas records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bf_residues_emissions`
- Sources: `worldsteel-lci-methodology-2017`

### Process: EAF alloy-steel production and casting (`eaf_alloy_steelmaking_casting`)

#### Inputs

##### Product flows

###### Purchased steel scrap (`eaf_steel_scrap`)

Record externally sourced scrap by grade family, preparation, contamination, and consumer status.

- Selected flow: Prepared steel scrap
- Flow property / unit: Mass / kg
- Amount rule: scale-ticket mass of purchased scrap charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_materials_products`
- Sources: `worldsteel-lci-methodology-2017`, `worldstainless-general-introduction-lci`

###### Direct-reduced iron (`eaf_direct_reduced_iron`)

Record DRI or hot-briquetted iron only when charged and declare metallization, carbon content, and form.

- Selected flow: Direct-reduced iron
- Flow property / unit: Mass / kg
- Amount rule: measured charge mass; record zero with the charge-recipe reason when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_materials_products`
- Sources: `worldstainless-general-introduction-lci`

###### Pig iron (`eaf_pig_iron`)

Record pig iron only when included in the EAF charge and declare composition and delivery state.

- Selected flow: Pig iron
- Flow property / unit: Mass / kg
- Amount rule: measured charge mass; record zero with the charge-recipe reason when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_materials_products`
- Sources: `worldstainless-general-introduction-lci`

###### Quicklime flux (`eaf_quicklime`)

Record quicklime on its declared chemistry and moisture basis.

- Selected flow: Quicklime
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_materials_products`
- Sources: `worldstainless-general-introduction-lci`

###### Dolomitic flux (`eaf_dolomite`)

Record dolomite or dolomitic lime separately from quicklime and declare calcination state.

- Selected flow: Dolomite
- Flow property / unit: Mass / kg
- Amount rule: measured charged mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_materials_products`
- Sources: `worldstainless-general-introduction-lci`

###### Graphite electrode (`eaf_graphite_electrode`)

Record net graphite-electrode consumption from stock and change records.

- Selected flow: Graphite electrode
- Flow property / unit: Mass / kg
- Amount rule: opening stock plus receipts minus closing stock and recoverable remnants
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_eaf_materials_products`
- Sources: `worldstainless-general-introduction-lci`

###### Ferrochromium alloy addition (`eaf_ferrochromium`)

Record the actual ferrochromium grade when used for the declared recipe.

- Selected flow: Ferrochromium
- Flow property / unit: Mass / kg
- Amount rule: batch charge-record mass; record zero with the grade-recipe reason when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_materials_products`
- Sources: `worldstainless-general-introduction-lci`

###### Ferronickel alloy addition (`eaf_ferronickel`)

Record ferronickel only when used, with grade and nickel content.

- Selected flow: Ferronickel
- Flow property / unit: Mass / kg
- Amount rule: batch charge-record mass; record zero with the grade-recipe reason when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_materials_products`
- Sources: `worldstainless-general-introduction-lci`

###### Ferro-manganese alloy addition (`eaf_ferromanganese`)

Record the actual ferro-manganese grade when used for the declared recipe.

- Selected flow: Ferro-manganese
- Flow property / unit: Mass / kg
- Amount rule: batch charge-record mass; record zero with the grade-recipe reason when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_materials_products`
- Sources: `worldstainless-general-introduction-lci`

###### Argon for secondary refining (`eaf_argon`)

Record argon separately when used for AOD, VOD, ladle stirring, or degassing.

- Selected flow: Industrial argon
- Flow property / unit: Volume / m3
- Amount rule: metered volume; record zero with the refining-technology reason when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_energy_utilities`
- Sources: `worldstainless-general-introduction-lci`

###### Industrial oxygen (`eaf_industrial_oxygen`)

Record oxygen used by the EAF burners, lances, and included secondary-refining operations with purity and reference conditions.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered oxygen volume attributed to eligible cast slab
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_energy_utilities`
- Sources: `eu-jrc-iron-steel-bref-2013`, `worldstainless-general-introduction-lci`

###### Purchased electricity (`eaf_electricity`)

Record site- and voltage-specific purchased electricity net of separately recorded internal generation.

- Selected flow: Steelworks purchased electricity
- Flow property / unit: Energy / MJ
- Amount rule: revenue-meter electricity allocated to EAF, secondary metallurgy, and casting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_energy_utilities`
- Sources: `worldsteel-lci-methodology-2017`, `worldstainless-general-introduction-lci`

###### Natural gas (`eaf_natural_gas`)

Record natural gas when used by EAF burners or included refining and casting operations; declare supplier geography and reference conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered volume attributed to eligible cast slab; record zero with the technology reason when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_energy_utilities`
- Sources: `worldstainless-general-introduction-lci`

###### Process water supply (`eaf_process_water`)

Record make-up process water crossing the EAF-route boundary, excluding recirculated internal water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: make-up water meter volume attributed to eligible cast slab
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_energy_utilities`
- Sources: `worldstainless-general-introduction-lci`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cast alloy-steel slab (`eaf_cast_alloy_steel_slab`)

Record net accepted slab transferred to hot rolling with grade, dimensions, and surface state.

- Selected flow: Cast alloy-steel slab
- Flow property / unit: Mass / kg
- Amount rule: measured accepted slab mass transferred from casting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_materials_products`
- Sources: `eu-jrc-iron-steel-bref-2013`, `worldstainless-general-introduction-lci`

##### Waste flows

###### Electric-arc-furnace slag (`eaf_slag`)

Record EAF slag with composition, cooling, treatment, and waste or co-product status.

- Selected flow: Electric-arc-furnace slag
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass leaving the EAF slag system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_residues_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`, `worldstainless-general-introduction-lci`

###### Electric-arc-furnace dust (`eaf_dust`)

Record captured EAF dust with zinc content and recovery or disposal route.

- Selected flow: Electric-arc-furnace dust
- Flow property / unit: Mass / kg
- Amount rule: measured dry captured dust mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eaf_residues_emissions`
- Sources: `eu-jrc-iron-steel-bref-2013`, `worldstainless-general-introduction-lci`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`eaf_fossil_co2`)

Record fossil carbon dioxide directly emitted by the EAF route without claiming a more specific air compartment.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured emissions or carbon-balance calculation reconciled to fuel, electrodes, metallic charge carbon, carbon injection, carbonate, and off-gas records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg cast alloy-steel slab output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_eaf_residues_emissions`
- Sources: `worldsteel-lci-methodology-2017`, `worldstainless-general-introduction-lci`

### Process: Hot rolling to narrow alloy-steel flat product (`hot_rolling_narrow_flat_product`)

#### Inputs

##### Product flows

###### Cast alloy-steel slab input (`rolling_cast_alloy_steel_slab`)

Record the route-specific slab input with grade, dimensions, temperature, and surface state matching the selected route output.

- Selected flow: Cast alloy-steel slab
- Flow property / unit: Mass / kg
- Amount rule: measured slab mass charged to the reheating and rolling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_materials_products`
- Sources: `eu-jrc-ferrous-metals-processing-bref-2022`

###### Natural gas for reheating (`rolling_natural_gas`)

Record natural gas supplied to reheating furnaces with supplier geography and reference conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: metered volume attributed to eligible hot-rolled product; record zero with the furnace-fuel reason when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_energy_utilities`
- Sources: `eu-jrc-ferrous-metals-processing-bref-2022`

###### Purchased electricity (`rolling_electricity`)

Record site- and voltage-specific purchased electricity for descaling, rolling, cooling, coiling, cutting, and included finishing.

- Selected flow: Rolling-mill purchased electricity
- Flow property / unit: Energy / MJ
- Amount rule: meter electricity allocated to the included hot-rolling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_energy_utilities`
- Sources: `worldsteel-lci-methodology-2017`, `eu-jrc-ferrous-metals-processing-bref-2022`

###### Process water supply (`rolling_process_water`)

Record make-up water for descaling and cooling, excluding recirculated internal water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: make-up water meter volume attributed to eligible hot-rolled product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_energy_utilities`
- Sources: `eu-jrc-ferrous-metals-processing-bref-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net saleable hot-rolled narrow alloy-steel flat product (`rolling_reference_product`)

Record accepted uncoated product after crop ends, offcuts, scale, and rejects are removed.

- Selected flow: Flat-rolled products of alloy steel (except of silicon-electrical or high-speed steel), not further worked than hot-rolled, of a width of less than 600 mm `882747cb-449c-401b-89b1-2ff03c819442`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net saleable mass conforming to the declared grade and less-than-600-mm width condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_materials_products`
- Sources: `un-cpc-3-0-structure-2025`, `eu-jrc-ferrous-metals-processing-bref-2022`

##### Waste flows

###### Rolling mill scale (`rolling_mill_scale`)

Record separated mill scale with moisture, oil content, and recovery or waste status.

- Selected flow: Rolling mill scale
- Flow property / unit: Mass / kg
- Amount rule: measured dry mass leaving the mill-scale separation system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_residues_emissions`
- Sources: `eu-jrc-ferrous-metals-processing-bref-2022`

###### Rolling offcut and crop-end steel scrap (`rolling_steel_scrap`)

Record offcuts and crop ends separately from mill scale and declare whether they are internally recycled or leave the site.

- Selected flow: Alloy-steel rolling scrap
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass generated by the eligible product campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rolling_residues_emissions`
- Sources: `worldsteel-lci-methodology-2017`, `eu-jrc-ferrous-metals-processing-bref-2022`

##### Elementary flows

###### Direct fossil carbon dioxide to air (`rolling_fossil_co2`)

Record fossil carbon dioxide directly emitted by rolling-line combustion without claiming a more specific air compartment.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured stack emissions or fuel-carbon calculation reconciled to reheating-fuel records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rolling_residues_emissions`
- Sources: `worldsteel-lci-methodology-2017`, `eu-jrc-ferrous-metals-processing-bref-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | all foreground operations | Avoid allocation by separately metering routes, production lines, grade campaigns, recovery operations, and saleable outputs wherever records permit. | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recirculation` | internal scrap, scale, process gas, electricity, steam, and water | Treat internal recirculation as an internal transfer: retain its recovery burdens once, do not add a purchased upstream dataset, and reconcile both sides of the transfer. | `worldsteel-lci-methodology-2017` |
| `allocation_co_products` | slags, recovered dusts, exported process gas, electricity, steam, or other saleable co-products | Prefer system expansion only when the displaced function and substitution ratio are documented and compatible with the study goal. If system expansion is not defensible, apply a declared physical or economic partition and report a sensitivity check; never silently treat a saleable co-product as burden-free waste. | `worldsteel-lci-methodology-2017` |
| `allocation_scrap_boundary` | purchased and generated steel scrap | Distinguish internal scrap, pre-consumer scrap, and post-consumer scrap. State the recycling method and report any end-of-life credit separately from the cradle-to-gate inventory. | `worldsteel-lci-methodology-2017` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bf_materials_products` | `bf_bof_alloy_steelmaking_casting` | charged materials and cast slab | scales, batch records, stock ledger, grade certificate | timestamp; batch or heat id; material id; supplier; grade; composition; wet mass; dry mass; moisture; cast slab mass; eligible product link | reconcile calibrated scales and stock movements to heat and campaign records | kg | each receipt, charge, heat, and cast | at least one representative 12-month period | all included BF, BOF, secondary-metallurgy, and casting units | sum eligible inputs and outputs, apply documented inventory change, and allocate only after subdivision | calibration certificates; weighbridge tickets; heat sheets; stock reconciliation; grade certificates |
| `cp_bf_energy_utilities` | `bf_bof_alloy_steelmaking_casting` | oxygen, electricity, and make-up water | utility meters and invoices | timestamp; meter id; opening and closing reading; unit; oxygen purity; gas temperature and pressure; electricity voltage and provider; water source; eligible output | reconcile submeter totals with site invoices and internal generation records | m3; MJ | continuous or shift meter, reconciled monthly | same 12-month period as product output | all included route units and shared services | subtract verified internal transfers, assign shared services by causal meter or documented driver, normalize to cast slab output | meter calibration; invoice reconciliation; allocation worksheet; outage log |
| `cp_bf_residues_emissions` | `bf_bof_alloy_steelmaking_casting` | slags, dusts, and direct fossil CO2 | residue scales, manifests, stack monitoring, fuel and carbon balance | timestamp; source unit; residue mass; moisture; destination; waste or co-product status; stack flow and concentration; fuel carbon; carbonate carbon; process-gas transfers | weigh residues and use validated continuous monitoring or reconciled carbon balance for CO2 | kg | each shipment plus continuous or campaign emissions | same 12-month period as product output | all included emission points and residue treatment units | sum direct releases and outgoing residues, correct to declared state, avoid double counting transferred process gas | scale records; laboratory analyses; waste manifests; monitor QA/QC; carbon-balance closure |
| `cp_eaf_materials_products` | `eaf_alloy_steelmaking_casting` | metallics, fluxes, electrodes, alloy additions, and cast slab | scales, charge sheets, stock ledger, heat records, grade certificate | timestamp; heat id; material id; supplier; scrap class; composition; charge mass; electrode stock; cast slab mass; eligible product link | reconcile charge sheets, calibrated scales, and inventory changes to accepted slabs | kg | each receipt, charge, heat, and cast | at least one representative 12-month period | EAF, included secondary refining, and casting | sum eligible heat records and apply documented stock change; keep each alloy addition separate | calibration certificates; charge sheets; heat chemistry; stock reconciliation; grade certificates |
| `cp_eaf_energy_utilities` | `eaf_alloy_steelmaking_casting` | argon, oxygen, natural gas, electricity, and make-up water | utility meters and invoices | timestamp; heat id where available; meter id; readings; unit; gas purity; temperature and pressure; electricity voltage and provider; water source | reconcile submeters with invoices and heat logs | m3; MJ | continuous or per heat, reconciled monthly | same 12-month period as product output | EAF, AOD or VOD when used, ladle metallurgy, casting, and shared services | assign by direct heat meter or documented causal driver, net verified internal generation, normalize to accepted slab | calibration certificates; invoice reconciliation; heat utility logs; outage log |
| `cp_eaf_residues_emissions` | `eaf_alloy_steelmaking_casting` | EAF slag, EAF dust, and direct fossil CO2 | residue scales, manifests, stack monitoring, fuel, electrode, charge-carbon, and off-gas records | timestamp; heat id; residue mass; moisture; zinc content; destination; waste or co-product status; stack flow and concentration; carbon inputs and outputs | weigh residues and use validated monitoring or reconciled carbon balance | kg | each shipment plus continuous or heat-based emissions | same 12-month period as product output | EAF, included secondary refining, casting, gas cleaning, and residue handling | sum eligible releases and residues, correct to declared state, prevent overlap between off-gas monitoring and carbon balance | scale records; laboratory analyses; manifests; monitor QA/QC; carbon-balance closure |
| `cp_rolling_materials_products` | `hot_rolling_narrow_flat_product` | slab input and net saleable reference product | slab scales, production order, dimensional inspection, grade certificate, product scale | timestamp; campaign id; slab id; route; grade; slab mass; width; thickness; output form; accepted product mass; reject mass | link each eligible product campaign to slab lots and calibrated product scales | kg | each slab and finished coil, sheet, strip, or cut length | same representative 12-month period as route data | all included hot-rolling and finishing operations | sum only qualifying less-than-600-mm uncoated product; reconcile slab, product, scale, scrap, and rejects | scale calibration; production genealogy; inspection results; grade certificate; mass balance |
| `cp_rolling_energy_utilities` | `hot_rolling_narrow_flat_product` | natural gas, electricity, and make-up water | furnace and line submeters, invoices | timestamp; campaign id; meter id; readings; unit; fuel composition; gas reference conditions; voltage and provider; water source | reconcile line meters with invoices and production time | m3; MJ | continuous or shift meter, reconciled monthly | same period as qualifying product output | reheating, descaling, rolling, cooling, coiling or cutting, and included finishing | assign campaign use by direct meter or documented operating-time driver; exclude internal recirculation | calibration certificates; invoice reconciliation; campaign log; outage log |
| `cp_rolling_residues_emissions` | `hot_rolling_narrow_flat_product` | mill scale, rolling scrap, and direct fossil CO2 | residue scales, scrap ledger, stack monitoring, fuel carbon balance | timestamp; campaign id; residue or scrap mass; moisture; oil content; destination; stack flow and concentration; fuel carbon | weigh outputs and use validated monitoring or fuel-carbon calculation | kg | each collection or shipment plus continuous or campaign emissions | same period as qualifying product output | reheating furnaces, descaling, rolling, scale treatment, and scrap handling | attribute by production genealogy or documented campaign driver and reconcile with slab-to-product mass balance | scale records; laboratory analyses; transfer records; monitor QA/QC; carbon-balance closure |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_exchange` | every inventory row | normalized exchange = eligible reporting-period exchange × product attribution share ÷ eligible net output × 1,000 kg | exchange record; attribution share; eligible net output | amount per 1,000 kg process output or reference product | `worldsteel-lci-methodology-2017` |
| `calc_route_mix` | products made from more than one steelmaking route | route-mix amount = sum of route-specific normalized amounts × measured route output fractions; fractions shall sum to one and shall not be estimated from a national average when plant records exist | route-specific inventories; measured eligible slab mass by route | measured route-mix inventory | `worldsteel-lci-methodology-2017` |
| `calc_mass_balance` | steelmaking, casting, and hot rolling | reconcile iron-bearing and total mass inputs with product, internal transfers, slags, dusts, scale, scrap, other residues, and measured releases; investigate material unexplained imbalance before publication | material records; product records; internal transfers; residues; releases | documented mass-balance closure | `worldsteel-lci-methodology-2017` |
| `calc_fossil_co2` | direct fossil CO2 rows | use validated stack monitoring where complete; otherwise calculate from reconciled fossil carbon inputs and carbon-bearing outputs, and document oxidation and carbonate assumptions without overlapping monitored emissions | stack records; fuel, reductant, electrode, charge-carbon and carbonate records; exported process gas; carbon in products and residues | direct fossil CO2 mass | `worldsteel-lci-methodology-2017` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate alloy grade, exclusion of silicon-electrical and high-speed steel, finished width below 600 mm, and absence of further working beyond hot rolling. | grade certificate; dimensional inspection; route and finishing genealogy |
| `dq_representativeness` | all data | Use a representative contiguous 12-month period where practicable; explain shutdowns, abnormal operations, campaign gaps, and substitutions. | reporting-period register; production log; exception record |
| `dq_geography_technology` | upstream datasets | Match supplier geography, electricity system, scrap preparation, material state, and production technology; document any proxy. | supplier data; dataset metadata; proxy assessment |
| `dq_metering` | foreground quantities | Use calibrated meters and scales, reconcile submeter totals to invoices or site totals, and retain raw records and transformations. | calibration record; reconciliation workbook; immutable source extract |
| `dq_completeness` | inventory | Apply the cut-off rule only after mass, energy, and environmental relevance screening; include all energy and legally monitored releases. | completeness matrix; cut-off register; permit-monitoring cross-check |
| `dq_route_consistency` | route and rolling linkage | Ensure the slab grade, output mass, and route in steelmaking records match rolling input and finished-product genealogy. | heat-to-slab-to-coil genealogy; mass-balance report |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference flow | Fail validation if the declared product is 600 mm or wider, non-alloy, silicon-electrical, high-speed, cold-rolled, coated, pickled, or otherwise further worked, or if grade and dimensions are missing. | `un-cpc-3-0-structure-2025`, `china-mof-alloy-steel-terminology-2024` |
| `validation_route` | process map | Require hot rolling and exactly one BF-BOF route, one EAF route, or a measured route mix. Require grade-appropriate secondary-refining and casting disclosure. | `eu-jrc-iron-steel-bref-2013`, `eu-jrc-ferrous-metals-processing-bref-2022`, `worldstainless-general-introduction-lci` |
| `validation_units` | inventory amounts | Require 1,000 kg normalization, gas reference conditions, electricity supply metadata, and explicit conversions from raw meter units. | `worldsteel-lci-methodology-2017` |
| `validation_balance` | material and carbon balances | Require documented iron or steel mass, total mass, and fossil-carbon checks; unresolved material imbalance or double-counted process gas is an error. | `worldsteel-lci-methodology-2017` |
| `validation_completeness` | cut-off and exchanges | Require every energetic input, each included material, each residue, and each elementary release to be recorded as an atomic exchange; require documented cut-off screening and permit cross-check. | `worldsteel-lci-methodology-2017` |
| `validation_allocation` | co-products and scrap | Require internal-transfer reconciliation, scrap-category disclosure, co-product status, allocation or substitution method, and a separate end-of-life scenario when used. | `worldsteel-lci-methodology-2017` |
| `validation_uuid_accounting` | TianGong references | Require every inventory row to carry a directly verified public TianGong UUID or appear with the same row id and allowed reason code in manifest unresolved metadata; reject unverified proxy UUIDs. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` and `background_dataset` after methodology review and publication |
| downstream_use | Cradle-to-gate modelling of products that consume a declared hot-rolled narrow alloy-steel flat product; route-specific process or lifecyclemodel projections |
| allowed_use | Use when grade family, width, surface state, geography, technology, temporal coverage, scrap boundary, and allocation method are compatible with the foreground product system. |
| excluded_use | Do not use as a generic proxy for non-alloy steel, silicon-electrical steel, high-speed steel, products 600 mm or wider, cold-rolled or coated products, or a stainless or high-alloy grade represented only by low-alloy data. |
| required_metadata | PCR id and version; product grade and standard; composition or grade family; width, thickness, and form; factory-gate state; BF-BOF or EAF route and secondary refining; plant geography; reporting period; upstream dataset identities; electricity and fuel supply; scrap categories; cut-offs; allocation; UUID gaps; uncertainty and data-quality statement |
| required_quality_disclosure | Primary-data share; meter and scale reconciliation; mass and carbon balance closure; route coverage; supplier and geographic proxies; abnormal-operation treatment; excluded flows; co-product and recycling sensitivity; unresolved range and UUID evidence needs |
| update_trigger | Change in alloy grade family, steelmaking or secondary-refining route, casting or rolling technology, reheating fuel, electricity supply, scrap mix, product width or surface state, allocation method, plant geography, or a material change in inventory or data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Ver. 3.0 structure, 30 June 2025, row 41214. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-02) | Official English product classification identity and exclusions stated in the leaf title |
| `china-mof-alloy-steel-terminology-2024` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, 2024 tariff-adjustment annex, entry 72269199. https://gss.mof.gov.cn/gzdt/zhengcefabu/202404/P020240419426389451413.pdf (retrieved 2026-09-02) | Verification of professional Chinese terminology for narrow hot-rolled alloy-steel flat products; not used to broaden the CPC boundary |
| `eu-jrc-iron-steel-bref-2013` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for Iron and Steel Production, JRC69967, EUR 25521 EN, 2013. https://publications.jrc.ec.europa.eu/repository/handle/JRC69967 (retrieved 2026-09-02) | BF-BOF and EAF steelmaking, secondary metallurgy, casting, residues, and route decomposition |
| `eu-jrc-ferrous-metals-processing-bref-2022` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Ferrous Metals Processing Industry, JRC131649, EUR 31321 EN, DOI 10.2760/196475, 2022. https://publications.jrc.ec.europa.eu/repository/handle/JRC131649 (retrieved 2026-09-02) | Hot-rolling boundary and process steps: surface rectification, reheating, descaling, rolling, cooling, coiling, and finishing |
| `worldsteel-lci-methodology-2017` | Method factor (`method_factor`) | World Steel Association, Life Cycle Inventory Methodology Report, 2017. https://worldsteel.org/media/publications/lci-report-2017-pdf/?do_download_id=7f96813a-3756-4842-8dbc-38ce201f2914 (retrieved 2026-09-02) | Declared unit, cradle-to-gate boundary, technology and geographic representation, energy completeness, cut-off, data collection, balance validation, co-products, and scrap treatment |
| `worldstainless-general-introduction-lci` | Extension guidance (`extension_guidance`) | International Stainless Steel Forum / worldstainless, General Introduction to Stainless Steel LCI. https://worldstainless.org/wp-content/uploads/2025/02/GeneralIntroductiontostainlesssteelLCI1.pdf (retrieved 2026-09-02) | Stainless and high-alloy EAF route, AOD or VOD-related input candidates, alloy additions, residues, and works-gate LCI framing |
