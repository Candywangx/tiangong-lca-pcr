---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.glucose-and-glucose-syrup-fructose-and-fructose-syrup-lactose-and-lactose-syrup-invert-dfd54172
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Glucose and glucose syrup; fructose and fructose syrup; lactose and lactose syrup; invert sugar; sugars and sugar syrups n.e.c.; artificial honey; caramel

## 1. Scope and Applicability

This PCR applies to foreground data packages for the manufacture of the full CPC 3.0 subclass 23210 product category: glucose and glucose syrup; fructose and related fructose syrups; lactose and lactose syrup; invert sugar; other sugars and sugar syrups not elsewhere classified; artificial honey; and caramel. It covers liquid, concentrated, dried, crystalline, blended, inverted, and heat-converted commercial forms when the declared product remains within that category.

The PCR is route-neutral. It supports starch-based hydrolysis and saccharification, optional glucose-to-fructose isomerisation, recovery and finishing of lactose-containing streams, sucrose inversion, blending for artificial honey or other sugar syrups, and controlled heat conversion for caramel. Only the operations actually performed at the reporting facility are included in the foreground process map.

The PCR excludes native or modified starch sold as the reference product, sucrose products classified outside CPC 23210, natural honey, formulated foods or beverages whose identity is not the sugar or syrup itself, pharmaceutical dosage forms, and downstream use of the sugar product. Agricultural production, starch manufacture, milk or whey production, sucrose production, and other upstream feedstock production remain outside the foreground boundary unless performed at the same site and explicitly included.

`Dextrose Monohydrate` is the database-backed representative product form for this category, not a universal identity for every covered product. A foreground data package must declare its actual product subtype and form. When a more specific Tiangong product flow exists for the actual glucose syrup, fructose syrup, lactose product, invert sugar, artificial honey, caramel, or other covered form, that flow must replace the representative UUID; the representative UUID must never be silently reused for a different form.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.glucose-and-glucose-syrup-fructose-and-fructose-syrup-lactose-and-lactose-syrup-invert-dfd54172 |
| classification_refs | CPC 3.0: 23210 |
| covered_products | glucose and glucose syrup; dried glucose syrup; dextrose forms; fructose and fructose-containing sugar syrups; lactose and lactose syrup; invert sugar and invert syrup; other sugars and sugar syrups n.e.c.; artificial honey; caramel |
| excluded_products | native or modified starch as final product; sucrose products classified elsewhere; natural honey; formulated foods, beverages, and pharmaceutical dosage forms; downstream use of the sugar product |
| representative_product | Dextrose Monohydrate, representing purified crystalline D-glucose with one molecule of water of crystallisation; representative form only, not a default for other category members |
| production_route | declared route-specific combination of feedstock preparation; hydrolysis, saccharification, isomerisation, inversion, recovery, blending, or caramelisation; purification; concentration; crystallisation or drying; and packaging |
| market_state | as-produced bulk or packaged liquid, concentrated, dried, crystalline, blended, inverted, or heat-converted sugar product at the reporting facility gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | production of the declared CPC 23210 sugar or sugar-syrup product in its actual commercial subtype and physical form |
| How much | 1 kg net product as supplied at the reporting facility gate |
| How well | conforming to the declared commercial or regulatory specification, with product subtype, physical form, total solids or moisture basis, and composition descriptors reported as applicable |
| How long or cycle | one production batch or campaign represented by the declared reporting period |
| reference_flow_link | rf_declared_sugar_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Dextrose Monohydrate `8f56ee97-f5f8-4685-a958-74f586b40cd9` (representative product form only) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual product subtype; physical form; net mass basis; total solids or moisture content; dry-basis composition, dextrose equivalent, or fructose content where applicable; feedstock family and origin; conversion and finishing route; facility geography; packaging state; allocation method; whether the representative flow UUID was retained or replaced |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comments, product descriptions, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The representative product flow may be retained only when the actual product is Dextrose Monohydrate and the dataset specification is compatible with that identity. Otherwise, the data producer must select and fully read back a more specific Tiangong product flow before using it, or leave the product-flow UUID unresolved for review rather than substituting the representative UUID.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net as-supplied product at the declared gate; do not treat dry solids, solution volume, or packaged gross mass as the reference amount without conversion. |
| `dry_matter_conversion` | syrup, wet crystal, and solution records | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg as supplied and kg dry matter | Retain measured total-solids or moisture data and use batch-specific values to convert between as-supplied and dry-matter quantities; disclose both bases. |
| `volume_to_mass` | liquid product, water, and liquid input records | measured mass or measured volume with density | kg | Convert volume to mass only with a temperature- and composition-relevant measured or supplier density; retain the source value, temperature, and conversion calculation. |
| `energy_units` | electricity, steam, fuel, and recovered energy | energy or fuel-specific property | kWh, MJ, or original invoice unit | Preserve the original metered or invoice unit and document every conversion; do not combine electricity, thermal energy, and fuel mass into one undifferentiated amount. |
| `coproduct_mass` | saleable co-products and recovered product streams | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure each co-product separately on a consistent wet or dry basis and retain composition or moisture needed for allocation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | receipt at the reporting facility of the declared carbohydrate feedstock, intermediate sugar stream, and other purchased materials |
| starting_condition_role | foreground gate-in condition for route-specific sugar manufacture or finishing |
| product_classification_scope | CPC 3.0 subclass 23210, independent of the representative Dextrose Monohydrate form |
| recursive_input_rule | a purchased input that is itself a CPC 23210 sugar or syrup is recorded as an upstream product input with its own supplier dataset and is not recursively re-manufactured inside this foreground package |
| upstream_dataset_requirement | every purchased feedstock, energy carrier, process chemical, purification medium, packaging material, and outsourced treatment service requires a geographically and technologically appropriate upstream dataset or an explicit unresolved-data disclosure |
| disclosure | declare actual product subtype and form, feedstock family, route operations, integrated upstream operations, excluded or outsourced operations, recycled streams, co-products, wastewater destination, packaging state, geography, reporting period, and allocation method |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground manufacturing | Include all on-site operations from receipt of the declared feedstocks through route-specific conversion, purification, concentration, crystallisation or drying, blending or caramelisation, packaging, storage, and loading that are performed for the reference product. | `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995` |
| `boundary_route_selection` | route-specific operations | Include only applicable unit operations, but require an explicit route declaration and include at least one product-making or product-finishing operation beyond simple administrative receipt. | `eu-jrc-fdm-bref-2019` |
| `boundary_upstream_inputs` | purchased product and energy inputs | Keep upstream production outside the foreground boundary and link each purchased material, energy carrier, packaging material, and service to an upstream dataset; integrated on-site production must instead be modelled in the foreground and disclosed. |  |
| `boundary_direct_releases` | direct emissions and wastes | Include measured direct releases to air and water, solid and liquid wastes, spent purification media, wastewater treatment, recovered energy, and off-site treatment routes attributable to the foreground system. | `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031` |
| `boundary_downstream_exclusion` | downstream life cycle | Exclude distribution beyond the declared gate, product use, incorporation into food or other products, and end-of-life unless the study explicitly extends the boundary and reports the extension separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | Feedstock receipt and preparation | required | always; use only the feedstock operations performed at the reporting facility | foreground feedstock intake, cleaning, dilution, dissolution, screening, or slurry preparation | kg prepared carbohydrate stream |
| `route_specific_conversion` | Route-specific carbohydrate conversion | conditional | include when hydrolysis, liquefaction, saccharification, isomerisation, sucrose inversion, lactose recovery, blending, or controlled heat conversion occurs on site | foreground conversion to the declared sugar identity | kg converted or blended sugar stream |
| `product_finishing` | Purification, concentration, crystallisation, drying, packaging, and storage | required | always; record only applicable finishing steps and explicitly state omitted steps | foreground finishing and facility-gate product output | 1 kg net reference product |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | include when wastewater is treated or energy/material is recovered on site | foreground treatment and direct discharge accounting | kg or m3 wastewater treated |

### Process: Feedstock receipt and preparation (`feedstock_preparation`)

#### Inputs

##### Product flows

###### Declared carbohydrate feedstock (`declared_carbohydrate_feedstock`)

Record every route-specific feedstock crossing the facility boundary, such as starch slurry, glucose liquor, sucrose solution, whey or lactose-rich stream, purchased sugar, or another declared sugar intermediate. Do not use one generic feedstock amount to conceal mixed feedstocks.

- Selected flow: route-specific feedstock selected from actual supplier identity; no category-wide default UUID
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg as supplied and kg dry matter where applicable
- Amount rule: measured net receipt by feedstock lot, corrected for returns and linked to measured moisture or total solids
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_receipts`
- Sources: `eu-jrc-fdm-bref-2019`

###### Preparation water (`preparation_water`)

Record freshwater and externally supplied process water used for washing, dilution, dissolution, slurry preparation, and cleaning associated with this process. Internal recycled water is tracked separately and not counted again as an external input.

- Selected flow: Process water; select a geographically appropriate product flow when available
- Flow property / unit: measured mass or volume / kg or m3
- Amount rule: metered or calculated from calibrated batch additions, net of separately measured returned water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

#### Outputs

##### Product flows

###### Prepared carbohydrate stream (`prepared_carbohydrate_stream`)

Record the mass and composition of the prepared stream transferred to conversion or finishing. This internal product flow links the measured feedstock and water balance to the next applicable process.

- Selected flow: route-specific prepared carbohydrate stream; internal foreground flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass or calculated mass from calibrated vessel level and batch-specific density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_streams`
- Sources:

##### Waste flows

###### Feedstock preparation rejects (`feedstock_preparation_rejects`)

Record screened foreign material, off-specification feedstock, filter residues, and other rejects leaving this process, with destination and treatment route.

- Selected flow: route-specific preparation reject or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured container, scale, or disposal record mass by waste type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_coproducts`
- Sources:

##### Elementary flows

### Process: Route-specific carbohydrate conversion (`route_specific_conversion`)

#### Inputs

##### Product flows

###### Prepared or purchased sugar-bearing stream (`conversion_feedstock_stream`)

Record the actual feedstock entering hydrolysis, saccharification, isomerisation, inversion, lactose recovery, blending, or caramelisation. When this process is omitted, route the prepared stream directly to product finishing.

- Selected flow: route-specific internal or purchased sugar-bearing stream
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg as supplied and kg dry matter where applicable
- Amount rule: measured transfer or receipt mass with batch-specific solids or composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_streams`
- Sources: `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995`

###### Conversion agents and processing aids (`conversion_agents`)

Record enzymes, acids, bases, catalysts, salts, decolourising agents, ion-exchange regenerants, and blending ingredients separately by actual material identity. Include only agents used by the declared route.

- Selected flow: material-specific product flow selected from purchase specification
- Flow property / unit: purchase-unit property with SI conversion retained
- Amount rule: issued-to-batch mass or volume minus measured returns, normalized by conforming product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_materials`
- Sources: `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995`

###### Conversion electricity (`conversion_electricity`)

Record metered electricity for agitation, pumping, separation, controls, and other conversion equipment.

- Selected flow: geographically appropriate electricity supply product flow
- Flow property / unit: Energy / kWh
- Amount rule: submetered use, or documented equipment-hour allocation when no dedicated meter exists
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Conversion thermal energy or fuel (`conversion_thermal_energy`)

Record steam, heat, or fuel used for gelatinisation, reaction temperature control, inversion, caramelisation, cleaning, or other route-specific thermal duties.

- Selected flow: actual steam, heat, or fuel input flow
- Flow property / unit: Energy or fuel-specific property / MJ, kg, Nm3, or original meter unit
- Amount rule: metered use or documented boiler and distribution allocation with conversion efficiency retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

#### Outputs

##### Product flows

###### Converted, inverted, blended, or heat-converted sugar stream (`converted_sugar_stream`)

Record the actual intermediate product identity, mass, total solids or moisture, and composition descriptor transferred to finishing.

- Selected flow: route-specific internal sugar stream; internal foreground flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass with batch-specific solids and product-identity test result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_streams`
- Sources: `eu-jrc-fdm-bref-2019`; `codex-cxs-212-1999`

##### Waste flows

###### Conversion wastewater (`conversion_wastewater`)

Record purge, washing, spent regenerant, mother-liquor losses classified as waste, and other wastewater leaving conversion, without double counting water routed to reuse.

- Selected flow: route-specific wastewater flow
- Flow property / unit: measured mass or volume / kg or m3
- Amount rule: metered discharge or balanced tank-volume record by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

##### Elementary flows

### Process: Purification, concentration, crystallisation, drying, packaging, and storage (`product_finishing`)

#### Inputs

##### Product flows

###### Route-specific finishing feed (`finishing_feed_stream`)

Record the converted stream or directly purchased/prepared sugar stream entering the actual finishing sequence. Identify whether purification, evaporation, crystallisation, drying, blending, packaging, or storage is performed.

- Selected flow: route-specific internal or purchased finishing feed
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg as supplied and kg dry matter where applicable
- Amount rule: measured transfer or receipt mass with solids and composition record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_streams`
- Sources: `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995`

###### Purification, finishing, and packaging materials (`finishing_materials`)

Record activated carbon, filter aids, resin make-up and regenerants, anticaking agents, packaging, and other materials actually consumed in finishing, separately by identity.

- Selected flow: material-specific product flow selected from purchase specification
- Flow property / unit: purchase-unit property with SI conversion retained
- Amount rule: issued quantity minus measured returns or reusable stock change, normalized by conforming product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_processing_materials`
- Sources: `codex-cxs-212-1999`; `eu-jrc-fdm-bref-2019`

###### Finishing electricity (`finishing_electricity`)

Record electricity used for filtration, pumping, centrifugation, cooling, crystallisation, drying, conveying, packing, and storage attributable to the product.

- Selected flow: geographically appropriate electricity supply product flow
- Flow property / unit: Energy / kWh
- Amount rule: submetered use, or documented equipment-hour allocation when no dedicated meter exists
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Finishing thermal energy or fuel (`finishing_thermal_energy`)

Record steam, heat, or fuel for evaporation, concentration, drying, hot cleaning, and temperature control, keeping each energy carrier distinct.

- Selected flow: actual steam, heat, or fuel input flow
- Flow property / unit: Energy or fuel-specific property / MJ, kg, Nm3, or original meter unit
- Amount rule: metered use or documented boiler and distribution allocation with conversion efficiency retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995`

##### Waste flows

#### Outputs

##### Product flows

###### Declared CPC 23210 sugar product (`declared_sugar_product`)

Record conforming net product output by actual subtype and form. `Dextrose Monohydrate` is selected only for matching crystalline monohydrate product; otherwise select a more specific product flow or retain an explicit unresolved identity issue.

- Selected flow: Dextrose Monohydrate `8f56ee97-f5f8-4685-a958-74f586b40cd9` only when the actual product matches; otherwise route-specific product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured conforming net output normalized to exactly 1 kg reference product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net declared product at the reporting facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_records`
- Sources: `codex-cxs-212-1999`

###### Saleable co-products and recovered fractions (`saleable_coproducts`)

Record each saleable co-product or recovered fraction separately, including mother liquor, fibre, gluten, germ-derived fractions, recovered sugar streams, or other outputs when they leave the system with an economic or functional use.

- Selected flow: co-product-specific product flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg on declared wet or dry basis
- Amount rule: measured dispatched mass or inventory-adjusted production mass by co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_coproducts`
- Sources: `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995`

##### Waste flows

###### Finishing solid and liquid wastes (`finishing_wastes`)

Record spent carbon, filter media, off-specification product managed as waste, cleaning residues, packaging waste, and other wastes by treatment destination.

- Selected flow: waste-specific flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured container, scale, manifest, or service-provider record mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_coproducts`
- Sources: `eu-jrc-fdm-bref-2019`

###### Finishing wastewater (`finishing_wastewater`)

Record condensate not reused, washing water, spent regenerant, product losses to drain, and other wastewater by on-site or off-site destination.

- Selected flow: route-specific wastewater flow
- Flow property / unit: measured mass or volume / kg or m3
- Amount rule: metered discharge or balanced tank-volume record, net of separately measured reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Direct air emissions from conversion and finishing (`direct_air_emissions`)

Record measured or permitted direct emissions from dryers, material handling, boilers, caramelisation, and other on-site sources. Do not create zero emissions merely because a source lacks a published factor.

- Selected flow: substance-specific elementary flow for each measured or calculated release
- Flow property / unit: substance mass / kg
- Amount rule: monitored emission mass or documented calculation from measured activity and an applicable source factor
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `us-epa-ap42-9-9-7-1995`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater treatment materials and energy (`wastewater_treatment_inputs`)

Record treatment chemicals, electricity, heat, and externally supplied treatment services separately when on-site treatment is included.

- Selected flow: input-specific chemical, electricity, heat, or service flow
- Flow property / unit: input-specific property and original metered or invoice unit
- Amount rule: treatment-system meter, stock, invoice, or batch record allocated to product-attributable wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

##### Waste flows

###### Foreground wastewater sent to treatment (`wastewater_to_treatment`)

Record wastewater transferred from preparation, conversion, and finishing without double counting internal transfers.

- Selected flow: route-specific wastewater flow
- Flow property / unit: measured mass or volume / kg or m3
- Amount rule: summed metered or balanced internal transfers to the treatment system
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-fdm-bref-2019`

#### Outputs

##### Product flows

###### Recovered biogas or useful treatment output (`recovered_treatment_output`)

Record recovered biogas, reusable water, or another useful treatment output only when it is measured and actually used or exported; otherwise omit this row from the implemented inventory.

- Selected flow: output-specific product flow
- Flow property / unit: output-specific property and measured unit
- Amount rule: measured recovered amount net of flaring, internal loss, and non-use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_treatment_sludge`)

Record sludge or other treatment residues by measured wet and, when available, dry mass and final treatment route.

- Selected flow: sludge or residue flow matched to treatment destination
- Flow property / unit: Mass / kg wet and kg dry matter when available
- Amount rule: measured removal mass with moisture or solids record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

##### Elementary flows

###### Treated water discharge (`treated_water_discharge`)

Record the discharged water volume and monitored pollutant loads by receiving compartment. Off-site treatment transfer remains a waste or service flow rather than an elementary discharge from this facility.

- Selected flow: water-to-receiving-compartment and pollutant-specific elementary flows
- Flow property / unit: volume for water and mass for pollutant load / m3 and kg
- Amount rule: monitored discharge volume multiplied by matched-period concentration for each pollutant, or direct load measurement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_monitoring`
- Sources: `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multifunctional foreground operations | First avoid allocation by subdividing separately metered operations or expanding the system only when the substituted function and data are explicitly justified. | `eu-pef-recommendation-2021-2279`; `iso-14044-2006` |
| `allocation_physical` | inseparable joint production | When subdivision or justified system expansion is not possible, use a documented physical relationship that reflects how measured inputs and outputs change with the co-products; do not select mass allocation solely because mass data are available. | `eu-pef-recommendation-2021-2279`; `iso-14044-2006` |
| `allocation_economic_last_resort` | co-products without defensible physical relationship | Use reporting-period economic allocation only as a last resort; record product and co-product quantities, prices, currency, price period, source records, and sensitivity to material price changes. | `eu-pef-recommendation-2021-2279` |
| `allocation_waste_status` | residues, recovered streams, and wastes | Classify an output as product, co-product, or waste from its documented destination, specification, and economic or functional use; do not assign zero burden or credit by label alone. |  |
| `allocation_internal_recycling` | internally recycled water, syrup, mother liquor, heat, and treatment outputs | Represent internal recycling as an internal transfer and count only make-up inputs, losses, exported outputs, and treatment burdens so the same quantity is not counted twice. | `eu-jrc-fdm-bref-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_receipts` | `feedstock_preparation` | declared carbohydrate feedstock | receipt, scale, and supplier quality record | material identity; supplier; lot; gross, tare, and net mass; total solids or moisture; composition; return quantity | weighbridge or calibrated scale plus supplier certificate and receiving test | kg as supplied; kg dry matter | each lot | complete reporting period | all included receiving points | sum accepted net receipts by material and normalize to conforming output | calibration, ticket, certificate, and rejection record |
| `cp_process_water` | `feedstock_preparation` | preparation and process water | meter and batch record | meter id; opening and closing readings; batch additions; recycled-water transfer; purpose | calibrated meter or calibrated vessel addition | m3 or kg | continuous or each batch | complete reporting period | all included processes | external make-up water minus measured returns; report internal reuse separately | meter calibration, balance check, and missing-data log |
| `cp_intermediate_streams` | `feedstock_preparation`; `route_specific_conversion`; `product_finishing` | internal carbohydrate streams | tank, flow-meter, and laboratory record | stream identity; source and destination; mass or volume; density; temperature; total solids; composition | calibrated mass or volume measurement with matched sample | kg; m3; mass fraction | each transfer or batch | complete reporting period | all included process transfers | convert to mass with matched density, retain as-supplied and dry-matter bases, and reconcile by batch | instrument calibration, sample id, laboratory method, and mass-balance reconciliation |
| `cp_processing_materials` | `route_specific_conversion`; `product_finishing` | conversion, purification, finishing, and packaging materials | stock issue, batch sheet, and purchase record | material identity; lot; issued quantity; returned quantity; concentration; unit; purpose | controlled stores issue or metered dosing | kg, L, or purchase unit | each batch or issue | complete reporting period | all included processes | issued minus returned quantity, converted with measured concentration or density where needed | stock reconciliation, dosing calibration, and purchase specification |
| `cp_energy_records` | `route_specific_conversion`; `product_finishing` | electricity, steam, heat, and fuel | meter, invoice, and equipment-run record | carrier; meter id; readings; fuel quantity; steam condition; allocation driver; conversion factor | submeter preferred; otherwise documented engineering allocation | kWh, MJ, kg, Nm3, or invoice unit | continuous, monthly, or each batch | complete reporting period | all included processes and shared utilities | subtract exports, preserve carrier-specific totals, and allocate shared utilities with recorded driver | meter calibration, invoice reconciliation, and conversion sheet |
| `cp_final_product_records` | `product_finishing` | declared reference product | production, packing, warehouse, and quality record | actual product subtype; flow UUID used; batch; gross, tare, and net mass; total solids or moisture; composition; packaging; release status | calibrated scale or mass flow meter plus release test | kg as supplied; kg dry matter | each batch and shipment | complete reporting period | all included product lines | accepted net output adjusted for stock change and returns; normalize inventory to 1 kg | calibration, batch release, warehouse reconciliation, and product specification |
| `cp_waste_and_coproducts` | `feedstock_preparation`; `product_finishing` | rejects, co-products, and wastes | scale, container, manifest, and dispatch record | material identity; product/waste status; mass; moisture; destination; treatment; revenue where allocation needs it | calibrated scale or service-provider record | kg wet; kg dry matter | each removal or shipment | complete reporting period | all included processes | sum by identity and destination; keep products and wastes separate | scale record, manifest, destination evidence, and stock reconciliation |
| `cp_wastewater_records` | `route_specific_conversion`; `product_finishing`; `onsite_wastewater_treatment` | wastewater generation and transfer | meter, tank, and routing record | source process; destination; volume; density where used; reused volume; transfer time | calibrated flow meter or balanced tank measurement | m3 or kg | continuous or each transfer | complete reporting period | all included drains and transfer points | sum net external discharge or treatment transfer; exclude internal reuse from external input and output totals | meter calibration, water balance, routing diagram, and missing-data log |
| `cp_direct_emissions` | `product_finishing` | direct air emissions | stack test, continuous monitor, permit, and activity record | source; pollutant; concentration; flow; duration; activity; factor and factor source if calculated | compliant monitoring or source-specific calculation | kg pollutant | monitoring event and operating period | representative operation within reporting period | all included direct sources | calculate matched-period mass by source and sum without replacing non-detects by unsupported zeroes | laboratory report, calibration, operating log, and calculation file |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | treatment inputs, residues, and recovered outputs | meter, stock, laboratory, and removal record | input identity; quantity; treated volume; sludge mass and solids; recovered gas or water; destination | treatment-system meters, calibrated scale, and laboratory test | input-specific; m3; kg; MJ | continuous, each batch, or each removal | complete reporting period | on-site treatment system | allocate treatment totals to measured wastewater source loads and reconcile outputs | meter calibration, treatment log, laboratory result, and destination record |
| `cp_effluent_monitoring` | `onsite_wastewater_treatment` | treated discharge and pollutant loads | discharge meter and laboratory record | discharge volume; sample time; pollutant; concentration; receiving compartment; detection limit | calibrated discharge meter and representative compliant sampling | m3; mg/L; kg | permit or operational monitoring frequency | complete reporting period | every included discharge point | match volume and concentration periods and calculate pollutant mass load | chain of custody, accredited laboratory result, meter calibration, and permit record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_product` | all foreground amounts | normalized amount = reporting-period amount / reporting-period conforming net product kg | collected input or output amount; `cp_final_product_records` conforming net output | amount per 1 kg reference product |  |
| `convert_to_dry_matter` | feedstock, intermediate, product, and co-product records | dry mass = as-supplied mass multiplied by measured total-solids mass fraction; retain the unconverted record and test basis | as-supplied mass; matched total-solids or moisture result | kg dry matter and conversion trace | `codex-cxs-212-1999` |
| `liquid_volume_to_mass` | liquid product and input records | mass = measured volume multiplied by density measured or specified for the same composition and temperature | volume; density; temperature; composition | kg as supplied |  |
| `effluent_pollutant_load` | direct water emissions | pollutant load = matched-period discharge volume multiplied by measured concentration with explicit unit conversion | `cp_effluent_monitoring` volume and concentration | kg pollutant per 1 kg reference product | `eu-fdm-bat-2019-2031` |
| `foreground_mass_balance` | each process and reporting period | reconcile measured mass inputs, product and co-product outputs, wastes, water transfers, stock changes, and documented losses on consistent wet and dry bases; investigate material unexplained imbalance | all material collection protocols | signed process and facility mass-balance reconciliation |  |
| `economic_allocation_share` | economic allocation when approved | allocation share = reference product revenue / total revenue of jointly produced products for the same reporting period and market basis | co-product quantities; prices; currency; price period | disclosed allocation factor and sensitivity | `eu-pef-recommendation-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | The record must state actual product subtype, form, specification, total-solids or moisture basis, route, packaging state, and selected Tiangong flow UUID; any use of the representative UUID must demonstrate a Dextrose Monohydrate match. | batch release, specification, flow readback, and `codex-cxs-212-1999` where applicable |
| `dq_temporal_coverage` | all foreground records | Cover a complete and representative reporting period, identify shutdowns and atypical campaigns, and quantify any extrapolation or missing interval. | meter and production completeness reconciliation |
| `dq_measurement` | measured quantities | Use calibrated meters or scales and retain original units, conversions, calibration status, and uncertainty or instrument resolution. | calibration certificates and calculation records |
| `dq_material_balance` | material flows | Reconcile wet and dry mass by process and facility; investigate and disclose material unexplained imbalance instead of forcing closure. | signed mass-balance worksheet |
| `dq_energy_separation` | energy inputs | Report electricity, purchased heat or steam, and each fuel separately; disclose shared-utility allocation and conversion efficiency. | meters, invoices, and allocation worksheet |
| `dq_water_and_wastewater` | water and wastewater | Distinguish external water input, internal reuse, wastewater transfer, off-site treatment, and direct discharge; match monitored pollutant loads to the correct volume and period. | water balance, routing diagram, and monitoring records |
| `dq_allocation` | multifunctional operations | Retain the hierarchy decision, allocation driver, co-product classification, source records, factor calculation, and sensitivity when economic data are used. | allocation worksheet and approval record |
| `dq_source_currency` | external rules and specifications | Verify that the applicable product specification, regulation, permit, and monitoring method are current for the facility and market at dataset release. | dated source review and release checklist |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_scope` | product identity | Confirm that the declared product is within the full CPC 3.0 subclass 23210 scope and is not an excluded starch, sucrose, natural honey, formulated food, beverage, or pharmaceutical dosage form. | `un-cpc-v3-2025` |
| `validate_representative_flow_use` | reference product flow | Accept `8f56ee97-f5f8-4685-a958-74f586b40cd9` only for actual Dextrose Monohydrate; for every other form require a more specific verified flow or an explicit unresolved identity finding, never silent representative-flow reuse. | `codex-cxs-212-1999` |
| `validate_reference_support_chain` | reference measurement | Confirm the Product flow reference uses Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg without dataset-version suffixes. |  |
| `validate_required_qualifiers` | dataset metadata | Reject conformance when actual product subtype, form, net-mass basis, solids or moisture, applicable composition descriptor, feedstock, route, geography, packaging, and allocation method are missing. | `codex-cxs-212-1999` |
| `validate_route_coverage` | process map | Confirm that the process map records the actual product-making route and includes all applicable conversion and finishing operations, plus on-site wastewater treatment when performed. | `eu-jrc-fdm-bref-2019`; `us-epa-ap42-9-9-7-1995` |
| `validate_foreground_coverage` | foreground inventory | Require collected or calculated values for feedstocks, water, processing materials, electricity, thermal energy or fuel, conforming product, co-products, wastes, wastewater, and direct emissions when those flows occur; an absent source must be documented as not applicable rather than entered as unsupported zero. | `eu-jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031` |
| `validate_mass_and_dry_basis` | mass balance | Confirm that as-supplied and dry-matter quantities use matched batch or period solids data and that mass-balance discrepancies are investigated and disclosed. | `codex-cxs-212-1999` |
| `validate_allocation` | multifunctionality | Confirm that subdivision or justified system expansion was considered first and that any physical or economic allocation is reproducible from retained records and sensitivity evidence. | `eu-pef-recommendation-2021-2279`; `iso-14044-2006` |
| `validate_data_currency` | dataset release | Confirm source review, flow identity, technology, product specification, permit conditions, and foreground records remain representative at release; otherwise update or disclose the limitation. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process foreground data package for a declared CPC 23210 sugar or sugar-syrup product |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | downstream process or lifecyclemodel work only when product subtype, physical form, solids or moisture basis, feedstock, route, geography, packaging state, and facility gate match the intended use or are explicitly adjusted |
| excluded_use | silent substitution among glucose, fructose, lactose, invert sugar, artificial honey, caramel, liquid syrup, dried syrup, anhydrous crystal, and monohydrate forms; use as a generic sugar-market dataset without representativeness review; product-comparative claims without additional review |
| required_metadata | canonical PCR id; CPC reference; actual product subtype; physical form; selected product-flow UUID; reference mass basis; total solids or moisture; applicable composition descriptor; feedstock; route; facility and geography; reporting period; technology; packaging; boundary; allocation method; upstream datasets |
| required_quality_disclosure | foreground record coverage; missing-data treatment; meter and scale quality; mass and water balances; wet-to-dry conversions; direct-emission and wastewater monitoring; co-product classification; allocation factors and sensitivity; unresolved flow identities; source review date |
| update_trigger | change in actual product form or specification; feedstock; conversion or finishing route; flow identity; site or geography; energy system; wastewater destination; co-product handling; allocation basis; packaging; permit; external method source; or material foreground data quality |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, code 23210, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-10) | full product-category scope and classification identity |
| `codex-cxs-212-1999` | `standard` | Codex Alimentarius Commission, CXS 212-1999, Standard for Sugars, amended through 2022, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+212-1999%2FCXS_212e.pdf (retrieved 2026-08-10) | product definitions, composition and solids qualifiers, labelling distinctions, and release-quality evidence for covered standardized sugars |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/food-drink-and-milk-industries (retrieved 2026-08-10) | starch-sweetener process decomposition, route operations, water and energy accounting, co-products, direct releases, and wastewater treatment boundary |
| `eu-fdm-bat-2019-2031` | `official_guidance` | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-10) | monitoring and quality requirements for resource use, wastewater, and direct emissions where applicable |
| `us-epa-ap42-9-9-7-1995` | `official_guidance` | United States Environmental Protection Agency, AP-42 Section 9.9.7 Corn Wet Milling, January 1995, https://www.epa.gov/sites/default/files/2020-10/documents/c9s09-7.pdf (retrieved 2026-08-10) | starch-based glucose syrup and dextrose process decomposition and identification of potential direct-emission sources; not used as a generic quantitative factor |
| `eu-pef-recommendation-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, corrected text, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 (retrieved 2026-08-10) | allocation hierarchy and disclosure of physical or economic allocation choices |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management - Life cycle assessment - Requirements and guidelines, including published amendments, https://www.iso.org/standard/38498.html (retrieved 2026-08-10) | LCA inventory and allocation framework |
